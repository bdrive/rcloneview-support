#!/usr/bin/env python3
"""블로그 포스트 다국어 번역 파이프라인 (Claude Sonnet + Batch API).

blog/*.md 원문을 8개 로케일로 번역해 Docusaurus i18n 구조
(i18n/{locale}/docusaurus-plugin-content-blog/)에 배치한다.

사용법:
  python3 scripts/translate_blog.py submit [--posts N] [--locales ko,ja] [--force]
      번역이 필요한 (포스트, 로케일) 쌍을 모아 Batch API에 제출.
      이미 번역 파일이 있으면 건너뜀(--force로 재번역).
      제출된 batch id는 .translate_batches.json에 기록.
  python3 scripts/translate_blog.py status
      진행 중인 배치 상태 확인.
  python3 scripts/translate_blog.py collect
      완료된 배치 결과를 내려받아 i18n/ 트리에 파일로 저장 + 검증.

요구사항: pip install anthropic / ANTHROPIC_API_KEY 또는 `ant auth login`.
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = ROOT / "blog"
I18N_DIR = ROOT / "i18n"
STATE_FILE = ROOT / ".translate_batches.json"

MODEL = "claude-sonnet-5"

# Docusaurus 로케일 → 언어 이름/용어집.
# 용어는 RcloneView Desktop ARB(9개 로케일)의 기존 번역과 통일한다.
LOCALES = {
    "ko": {
        "name": "Korean",
        "glossary": {
            "remote": "리모트",
            "mount": "마운트",
            "sync": "동기화",
            "backup": "백업",
            "transfer": "전송",
            "cloud storage": "클라우드 스토리지",
        },
    },
    "ja": {
        "name": "Japanese",
        "glossary": {
            "remote": "リモート",
            "mount": "マウント",
            "sync": "同期",
            "backup": "バックアップ",
            "transfer": "転送",
            "cloud storage": "クラウドストレージ",
        },
    },
    "zh-Hans": {
        "name": "Simplified Chinese",
        "glossary": {
            "remote": "远程",
            "mount": "挂载",
            "sync": "同步",
            "backup": "备份",
            "transfer": "传输",
            "cloud storage": "云存储",
        },
    },
    "zh-Hant": {
        "name": "Traditional Chinese",
        "glossary": {
            "remote": "遠端",
            "mount": "掛載",
            "sync": "同步",
            "backup": "備份",
            "transfer": "傳輸",
            "cloud storage": "雲端儲存",
        },
    },
    "de": {
        "name": "German",
        "glossary": {
            "remote": "Remote",
            "mount": "einbinden (mount)",
            "sync": "Synchronisation",
            "backup": "Backup",
            "transfer": "Übertragung",
            "cloud storage": "Cloud-Speicher",
        },
    },
    "es": {
        "name": "Spanish",
        "glossary": {
            "remote": "remoto",
            "mount": "montar",
            "sync": "sincronización",
            "backup": "copia de seguridad",
            "transfer": "transferencia",
            "cloud storage": "almacenamiento en la nube",
        },
    },
    "fr": {
        "name": "French",
        "glossary": {
            "remote": "distant",
            "mount": "monter",
            "sync": "synchronisation",
            "backup": "sauvegarde",
            "transfer": "transfert",
            "cloud storage": "stockage cloud",
        },
    },
    "id": {
        "name": "Indonesian",
        "glossary": {
            "remote": "remote",
            "mount": "mount",
            "sync": "sinkronisasi",
            "backup": "pencadangan",
            "transfer": "transfer",
            "cloud storage": "penyimpanan cloud",
        },
    },
}

SYSTEM_PROMPT = """You are a professional technical translator for RcloneView, a GUI for the rclone cloud-sync tool.
Translate the given Docusaurus blog post (Markdown with YAML frontmatter) from English to {language}.

STRICT RULES — the output must remain a valid, buildable Docusaurus post:
1. Output ONLY the translated Markdown file content. No commentary, no code fences around the whole file.
2. Frontmatter (between the first pair of `---` lines): translate ONLY the values of `title` and `description`. Keep every other key and value byte-identical (slug, date, authors, tags, image, keywords, etc.). Keep YAML quoting valid.
3. Never translate or alter: code blocks and inline code, URLs and link targets, image paths, product names (RcloneView, rclone, NetDrive), cloud provider names (Google Drive, Dropbox, OneDrive, S3, WebDAV, SFTP, ...), CLI commands and flags, HTML tags and attributes.
4. Preserve Markdown structure exactly: same headings hierarchy, lists, tables, admonitions (`:::tip` etc.), the `<!-- truncate -->` marker if present, and the same number of code blocks.
5. Translate link TEXT but never link URLS. Internal links (/support/..., relative .md links) stay unchanged.
6. Terminology — use these fixed translations consistently:
{glossary}
7. Tone: clear, natural technical writing for {language} readers. Do not add or remove content.
"""


def build_system(locale: str) -> str:
    cfg = LOCALES[locale]
    glossary = "\n".join(f'   - "{en}" -> "{tr}"' for en, tr in cfg["glossary"].items())
    return SYSTEM_PROMPT.format(language=cfg["name"], glossary=glossary)


def out_path(locale: str, md_name: str) -> Path:
    return I18N_DIR / locale / "docusaurus-plugin-content-blog" / md_name


def load_state() -> dict:
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {"batches": []}


def save_state(state: dict) -> None:
    STATE_FILE.write_text(json.dumps(state, indent=2))


def get_client():
    try:
        from anthropic import Anthropic
    except ImportError:
        sys.exit("anthropic SDK가 필요합니다: pip3 install anthropic")
    return Anthropic()


def pending_pairs(posts_limit, locales, force):
    files = sorted(BLOG_DIR.glob("*.md"))
    if posts_limit:
        files = files[:posts_limit]
    pairs = []
    for md in files:
        for locale in locales:
            dest = out_path(locale, md.name)
            if dest.exists() and not force:
                continue
            pairs.append((md, locale))
    return pairs


def cmd_submit(args):
    locales = args.locales.split(",") if args.locales else list(LOCALES)
    for loc in locales:
        if loc not in LOCALES:
            sys.exit(f"알 수 없는 로케일: {loc}")
    pairs = pending_pairs(args.posts, locales, args.force)
    if not pairs:
        print("번역할 항목이 없습니다 (모두 완료).")
        return
    print(f"{len(pairs)}건 번역 요청 준비 (posts×locales)")

    client = get_client()
    requests = []
    for md, locale in pairs:
        text = md.read_text(encoding="utf-8")
        requests.append(
            {
                # custom_id 제한(64자) 대응: 파일명이 길어서 인덱스 매핑 사용
                "custom_id": f"t{len(requests)}",
                "params": {
                    "model": MODEL,
                    "max_tokens": 8192,
                    "system": build_system(locale),
                    "messages": [{"role": "user", "content": text}],
                },
            }
        )

    # custom_id → (파일, 로케일) 매핑을 state에 저장
    mapping = {
        f"t{i}": {"file": md.name, "locale": locale}
        for i, (md, locale) in enumerate(pairs)
    }

    # 배치 분할: 요청 수보다 용량(256MB)이 먼저 걸릴 일은 없지만 안전하게 10k 단위
    state = load_state()
    CHUNK = 10_000
    for start in range(0, len(requests), CHUNK):
        chunk = requests[start : start + CHUNK]
        batch = client.messages.batches.create(requests=chunk)
        state["batches"].append(
            {
                "id": batch.id,
                "status": "submitted",
                "mapping": {r["custom_id"]: mapping[r["custom_id"]] for r in chunk},
            }
        )
        print(f"배치 제출: {batch.id} ({len(chunk)}건)")
    save_state(state)


def cmd_status(_args):
    state = load_state()
    if not state["batches"]:
        print("제출된 배치가 없습니다.")
        return
    client = get_client()
    for b in state["batches"]:
        if b["status"] == "collected":
            print(f"{b['id']}: collected")
            continue
        info = client.messages.batches.retrieve(b["id"])
        c = info.request_counts
        print(
            f"{b['id']}: {info.processing_status} "
            f"(성공 {c.succeeded} / 처리중 {c.processing} / 오류 {c.errored})"
        )


FRONTMATTER_RE = re.compile(r"^---\n.*?\n---\n", re.DOTALL)


def validate(original: str, translated: str) -> list:
    """번역 결과가 빌드 가능한 형태인지 기본 검증. 문제 목록을 반환."""
    problems = []
    if not translated.startswith("---"):
        problems.append("frontmatter 누락")
    if original.count("```") != translated.count("```"):
        problems.append("코드블록 수 불일치")
    if ("<!-- truncate -->" in original) != ("<!-- truncate -->" in translated):
        problems.append("truncate 마커 불일치")
    # slug/date 같은 핵심 키 보존 확인
    for key in ("slug:", "date:", "authors:"):
        if key in original.split("---")[1] and key not in (
            translated.split("---")[1] if translated.count("---") >= 2 else ""
        ):
            problems.append(f"frontmatter {key} 누락")
    return problems


def cmd_collect(_args):
    state = load_state()
    client = get_client()
    ok = fail = 0
    failures = []
    for b in state["batches"]:
        if b["status"] == "collected":
            continue
        info = client.messages.batches.retrieve(b["id"])
        if info.processing_status != "ended":
            print(f"{b['id']}: 아직 처리 중 ({info.processing_status}) — 건너뜀")
            continue
        for result in client.messages.batches.results(b["id"]):
            meta = b["mapping"].get(result.custom_id)
            if meta is None:
                continue
            src = BLOG_DIR / meta["file"]
            dest = out_path(meta["locale"], meta["file"])
            if result.result.type != "succeeded":
                fail += 1
                failures.append((meta, result.result.type))
                continue
            msg = result.result.message
            text_blocks = [blk.text for blk in msg.content if blk.type == "text"]
            translated = "".join(text_blocks).strip() + "\n"
            # 원문의 상대경로 MDX import(../src/...)는 i18n 폴더 깊이에서 깨진다
            # → 위치 무관한 @site 별칭으로 변환
            translated = translated.replace("from '../src/", "from '@site/src/")
            translated = translated.replace('from "../src/', 'from "@site/src/')
            # 내부 링크에 baseUrl(/support/)이 박혀 있으면 로케일 빌드에서
            # /support/ko/support/...로 이중 결합됨 → 사이트 경로로 정규화
            translated = translated.replace("](/support/", "](/")
            problems = validate(src.read_text(encoding="utf-8"), translated)
            if msg.stop_reason == "max_tokens":
                problems.append("max_tokens 잘림")
            if problems:
                fail += 1
                failures.append((meta, ";".join(problems)))
                continue
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text(translated, encoding="utf-8")
            ok += 1
        b["status"] = "collected"
    save_state(state)
    print(f"저장 {ok}건 / 실패 {fail}건")
    if failures:
        print("실패 목록 (재제출 대상 — submit을 다시 실행하면 누락분만 재시도):")
        for meta, why in failures[:40]:
            print(f"  {meta['locale']}/{meta['file']}: {why}")


def main():
    p = argparse.ArgumentParser(description=__doc__)
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("submit")
    s.add_argument("--posts", type=int, help="처음 N개 포스트만 (테스트용)")
    s.add_argument("--locales", help="쉼표 구분 로케일 (기본: 전체 8개)")
    s.add_argument("--force", action="store_true", help="기존 번역도 재번역")
    sub.add_parser("status")
    sub.add_parser("collect")
    args = p.parse_args()
    {"submit": cmd_submit, "status": cmd_status, "collect": cmd_collect}[args.cmd](args)


if __name__ == "__main__":
    main()
