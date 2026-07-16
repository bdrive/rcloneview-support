---
slug: bisync-bidirectional-cloud-sync-rcloneview
title: "Bisync: True Bidirectional Cloud Sync with RcloneView"
authors:
  - tayson
description: "Use rclone's bisync feature via RcloneView to keep two cloud locations synchronized in both directions. Learn when to use bisync, how to set it up, and how to handle conflicts."
keywords:
  - bisync rcloneview
  - bidirectional cloud sync rclone
  - rclone bisync guide
  - two-way cloud sync
  - sync both directions cloud
  - rcloneview bisync setup
  - rclone bidirectional sync
  - google drive bidirectional sync
  - onedrive two-way sync
  - cloud folder two-way mirror
tags:
  - sync
  - feature
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Bisync: True Bidirectional Cloud Sync with RcloneView

> Standard rclone Sync is one-directional — it makes the destination match the source. Bisync goes further: changes in either location propagate to the other. If you add a file to Location A, it appears in Location B, and vice versa. Here's how to configure it in RcloneView.

Most cloud sync scenarios are one-way: a local machine backs up to the cloud, or a primary cloud mirrors to a backup cloud. But some workflows require true bidirectional synchronization — a shared folder that two people edit, a work machine and a home machine that must stay in sync, or two cloud accounts that act as equals. Rclone's `bisync` command provides this, and RcloneView makes it configurable without the command line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Sync vs Bisync: What's the Difference?

| Behavior | rclone sync | rclone bisync |
|----------|------------|--------------|
| Direction | One-way (source → destination) | Two-way (both directions) |
| Deletions | Deletes from destination if missing in source | Propagates deletions in both directions |
| Conflicts | Source always wins | Explicit conflict handling required |
| Risk of data loss | Possible if direction is wrong | Lower risk; both sides checked |
| Complexity | Simple | More complex; requires careful setup |

## When to Use Bisync

**Use bisync when:**
- Two people or systems contribute changes to the same folder.
- You edit files on multiple devices that can't always be online simultaneously.
- You're keeping two cloud accounts as active mirrors with changes from both sides.

**Use regular Sync when:**
- You have a clear primary (source) and secondary (backup/destination).
- Only one side creates new files — the other is read-only.
- Simplicity and predictability are priorities.

## Setting Up Bisync in RcloneView

Bisync requires a one-time initialization (resync) to establish baseline state before any subsequent runs can track changes.

### Step 1 — Add your two remotes

Ensure both locations are configured as remotes in RcloneView. For example:
- `gdrive-work:/Projects/Active/` (Google Drive work account)
- `onedrive-home:/Projects/Active/` (OneDrive home account)

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes for bisync in RcloneView" class="img-large img-center" />

### Step 2 — Run the initial resync

The first bisync run must use `--resync` to establish the baseline. In RcloneView's **Terminal**:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --resync --verbose
```

This creates the baseline state files (stored in `~/.cache/rclone/bisync/`) that bisync uses to detect changes on subsequent runs. The resync makes both sides identical by copying newer files to each side.

### Step 3 — Create a Bisync job in RcloneView

1. Open **Jobs** in RcloneView.
2. Select **Custom Command** or use the Terminal panel.
3. Enter the bisync command for ongoing runs:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --verbose --log-file /tmp/bisync.log
```

4. Save as a job and schedule it to run every hour or daily.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule bisync job in RcloneView" class="img-large img-center" />

## Conflict Handling

Bisync detects conflicts when a file is modified in both locations between runs. By default, rclone bisync flags these conflicts and does not overwrite either version.

Add `--conflict-resolve newer` to automatically prefer the newer file:

```bash
rclone bisync path1 path2 --conflict-resolve newer
```

Or `--conflict-resolve larger` to prefer the larger file (useful for document growth scenarios).

Conflicting files that aren't automatically resolved are renamed with a `.conflict` suffix so both versions are preserved.

## Common Bisync Flags

| Flag | Purpose |
|------|---------|
| `--resync` | Initialize or re-establish baseline (use once) |
| `--conflict-resolve newer` | Auto-resolve conflicts by preferring newer file |
| `--filters-file /path/to/filters` | Apply include/exclude rules |
| `--max-delete 10` | Abort if more than 10 files would be deleted (safety) |
| `--dry-run` | Preview what would be changed without doing anything |
| `--verbose` | Detailed output for debugging |

The `--max-delete` flag is especially important — it prevents bisync from accidentally deleting large numbers of files due to a misconfiguration.

## Monitoring Bisync Runs

Check bisync output in RcloneView's **Job History** after each run:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor bisync results in RcloneView" class="img-large img-center" />

A healthy bisync run shows:
- Files copied from path1 to path2
- Files copied from path2 to path1
- Any conflicts detected and how they were resolved
- Total time and transfer stats

## Limitations of Bisync

- **Not suitable for simultaneous edits to the same file** — bisync compares between runs, not in real time.
- **Deletion propagation can be dangerous** — a file deleted on one side will be deleted on the other after the next run.
- **Requires stable state between runs** — if a run fails mid-way, re-run with `--resync` to rebuild baseline.
- **Large paths are slower** — the baseline comparison scans both locations fully on each run.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Configure both remotes** in RcloneView.
3. **Run the initial `--resync`** from RcloneView's terminal to establish baseline.
4. **Schedule regular bisync runs** for ongoing synchronization.

Bisync brings genuine two-way sync to any pair of rclone-supported remotes — local disks, cloud providers, NAS shares, and more.

---

**Related Guides:**

- [Sync, Copy, Move — Differences Explained](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Filter Rules and Selective Sync](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Avoid Data Loss from Wrong Sync Direction](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
