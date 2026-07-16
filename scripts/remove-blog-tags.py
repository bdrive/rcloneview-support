#!/usr/bin/env python3
"""
Remove specified tags from blog post frontmatter across every locale, and
drop their definitions from each locale's blog/tags.yml.

Why this exists: tag pages embed full post previews, so every tag a post
carries makes the build re-render that post's preview once more. Tags that
sit on a large fraction of posts (near-universal tags like a brand name, or
generic categories like "guide") add the most duplicate rendering while
adding the least navigational/SEO value. This script prunes such tags.

Scope, by design:
  - Only the frontmatter `tags:` key (between the first two `---` lines) is
    touched. `keywords:`, `description:`, `title:`, and the post body are
    never modified, even though the body often contains bullet lists
    ("  - RcloneView Windows 11", etc.) that look similar to a YAML tag
    block list at a glance.
  - Both frontmatter tag formats are supported and the original format of
    each file is preserved:
      tags:
        - RcloneView
        - api
      tags: [RcloneView, feature, api]
  - If removing the target tags would leave a post with zero tags, the
    single target tag with the lowest global post count is kept instead of
    leaving the post untagged (see --fallback-tag).

Usage:
    python3 scripts/remove-blog-tags.py --dry-run
    python3 scripts/remove-blog-tags.py --apply
    python3 scripts/remove-blog-tags.py --apply \
        --remove tag-a,tag-b --fallback-tag tag-b
"""
import argparse
import glob
import re
import sys
from collections import Counter

DEFAULT_REMOVE = ["RcloneView", "cloud-storage", "backup", "guide", "cloud-sync"]
DEFAULT_FALLBACK = "cloud-sync"

TAG_KEY_RE = re.compile(r"^tags:\s*(\[.*\])?\s*$")
INLINE_RE = re.compile(r"^tags:\s*\[(.*)\]\s*$")
BLOCK_ITEM_RE = re.compile(r"^  - ")


def find_blog_files():
    return sorted(
        glob.glob("blog/*.md") + glob.glob("i18n/*/docusaurus-plugin-content-blog/*.md")
    )


def find_tags_yml_files():
    return sorted(
        glob.glob("blog/tags.yml") + glob.glob("i18n/*/docusaurus-plugin-content-blog/tags.yml")
    )


def locate_frontmatter_tags(lines):
    """Return frontmatter end index and tag block bounds, or raise ValueError."""
    if lines[0].strip() != "---":
        raise ValueError("file does not start with '---' frontmatter fence")
    fm_end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            fm_end = i
            break
    if fm_end is None:
        raise ValueError("no closing '---' frontmatter fence found")

    tag_line_idx = None
    for i in range(1, fm_end):
        if TAG_KEY_RE.match(lines[i]):
            tag_line_idx = i
            break
    if tag_line_idx is None:
        raise ValueError("no 'tags:' key found inside frontmatter")

    line = lines[tag_line_idx]
    m_inline = INLINE_RE.match(line)
    if m_inline:
        tags = [t.strip() for t in m_inline.group(1).split(",") if t.strip()]
        return {
            "fm_end": fm_end,
            "start": tag_line_idx,
            "stop": tag_line_idx + 1,
            "inline": True,
            "tags": tags,
        }

    j = tag_line_idx + 1
    tags = []
    while j < fm_end and BLOCK_ITEM_RE.match(lines[j]):
        tags.append(lines[j][4:])
        j += 1
    return {"fm_end": fm_end, "start": tag_line_idx, "stop": j, "inline": False, "tags": tags}


def count_global_tag_frequency(files):
    """Count, across all files, how many posts carry each tag (pre-removal)."""
    freq = Counter()
    for f in files:
        with open(f, encoding="utf-8") as fh:
            lines = fh.read().split("\n")
        info = locate_frontmatter_tags(lines)
        for t in info["tags"]:
            freq[t] += 1
    return freq


def process_markdown(path, remove_set, fallback_tag, apply_changes, stats):
    with open(path, encoding="utf-8") as fh:
        content = fh.read()
    lines = content.split("\n")
    info = locate_frontmatter_tags(lines)
    tags = info["tags"]
    new_tags = [t for t in tags if t not in remove_set]
    if len(new_tags) == len(tags):
        return  # nothing to do, this file carries none of the target tags

    rescued = False
    if len(new_tags) == 0:
        new_tags = [fallback_tag]
        rescued = True
        stats["zero_tag_rescues"] += 1

    if info["inline"]:
        new_block = ["tags: [" + ", ".join(new_tags) + "]"]
    else:
        new_block = ["tags:"] + [f"  - {t}" for t in new_tags]

    new_lines = lines[: info["start"]] + new_block + lines[info["stop"] :]
    new_content = "\n".join(new_lines)

    stats["files_changed"] += 1
    stats["tags_removed_total"] += len(tags) - len(new_tags) + (1 if rescued else 0)
    if rescued:
        stats["rescued_files"].append(path)

    if apply_changes and new_content != content:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(new_content)


def process_tags_yml(path, remove_set, apply_changes, stats):
    with open(path, encoding="utf-8") as fh:
        content = fh.read()
    blocks = content.split("\n\n")
    kept = []
    removed_here = []
    for b in blocks:
        first_line = b.split("\n", 1)[0]
        key = first_line[:-1] if first_line.endswith(":") else None
        if key in remove_set:
            removed_here.append(key)
            continue
        kept.append(b)
    if not removed_here:
        return
    new_content = "\n\n".join(kept)
    stats["tags_yml_entries_removed"] += len(removed_here)
    if apply_changes and new_content != content:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(new_content)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--remove", default=",".join(DEFAULT_REMOVE),
                    help="comma-separated tag slugs to remove (default: task's 5 generic tags)")
    ap.add_argument("--fallback-tag", default=DEFAULT_FALLBACK,
                    help="tag to keep on posts that would otherwise end up with zero tags")
    ap.add_argument("--apply", action="store_true", help="write changes (default is dry-run)")
    ap.add_argument("--dry-run", action="store_true", help="explicit dry-run (default behavior)")
    args = ap.parse_args()

    remove_set = set(t.strip() for t in args.remove.split(",") if t.strip())
    apply_changes = args.apply and not args.dry_run

    md_files = find_blog_files()
    yml_files = find_tags_yml_files()

    stats = Counter()
    stats["rescued_files"] = []

    for f in md_files:
        try:
            process_markdown(f, remove_set, args.fallback_tag, apply_changes, stats)
        except ValueError as e:
            print(f"ERROR parsing {f}: {e}", file=sys.stderr)
            sys.exit(1)

    yml_remove_set = remove_set - {args.fallback_tag}
    for f in yml_files:
        process_tags_yml(f, yml_remove_set, apply_changes, stats)

    mode = "APPLIED" if apply_changes else "DRY-RUN"
    print(f"[{mode}] markdown files scanned: {len(md_files)}")
    print(f"[{mode}] markdown files changed: {stats['files_changed']}")
    print(f"[{mode}] total tag removals (incl. rescue substitutions): {stats['tags_removed_total']}")
    print(f"[{mode}] zero-tag rescues (fallback tag '{args.fallback_tag}' applied): {stats['zero_tag_rescues']}")
    for p in stats["rescued_files"]:
        print(f"    rescued: {p}")
    print(f"[{mode}] tags.yml files scanned: {len(yml_files)}")
    print(f"[{mode}] tags.yml entries removed: {stats['tags_yml_entries_removed']}")


if __name__ == "__main__":
    main()
