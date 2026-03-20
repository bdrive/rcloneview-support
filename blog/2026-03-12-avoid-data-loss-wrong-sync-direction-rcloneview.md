---
slug: avoid-data-loss-wrong-sync-direction-rcloneview
title: "How Sync Can Delete Your Files — Avoid Data Loss from Wrong Sync Direction"
authors:
  - tayson
description: "A wrong sync direction can wipe out your files. Learn how rclone sync works, why it deletes, and how to use dry run and folder comparison to prevent disasters."
keywords:
  - sync deleted my files
  - rclone sync data loss
  - wrong sync direction
  - sync vs copy safe
  - prevent sync data loss
  - cloud sync deleted files
  - rclone dry run
  - safe cloud sync
  - sync direction wrong
  - cloud sync mistake fix
tags:
  - RcloneView
  - sync
  - data-loss
  - safety
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How Sync Can Delete Your Files — Avoid Data Loss from Wrong Sync Direction

> "I ran rclone sync and now 500 GB of files are gone." This is one of the most common cloud storage disasters. Sync is powerful — but it deletes. Here's how to use it safely.

Sync makes the destination match the source exactly. That includes deleting files from the destination that don't exist in the source. If you accidentally swap source and destination, or sync from an empty folder, Sync will happily delete everything at the destination. This guide explains how to prevent that.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## How Sync Deletes Files

```
Source: Folder A (3 files: doc1, doc2, doc3)
Destination: Folder B (5 files: doc1, doc2, doc3, report1, report2)

After Sync A → B:
Folder B: doc1, doc2, doc3
(report1 and report2 are DELETED)
```

Sync made B identical to A. The files unique to B were removed.

## Common Disasters

### Swapped source and destination

You meant to sync `Cloud → NAS` but typed `NAS → Cloud`. If NAS is empty (new drive), Sync deletes everything from Cloud.

### Syncing from an empty or wrong folder

Pointing Sync at an empty source means "make the destination empty too."

### Wrong filter rules

A filter that excludes everything means the source appears empty to Sync. Everything at the destination gets deleted.

## Safety Measures in RcloneView

### 1) Always use Dry Run first

Dry run shows you exactly what Sync will do — without actually doing it. Review the list of files that would be deleted before committing.

### 2) Use Folder Comparison before Sync

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before syncing" class="img-large img-center" />

Compare source and destination. Look at the "Right only" files — these are what Sync would delete. Are you okay losing them?

### 3) Use Copy instead of Sync for backups

Copy never deletes. If you're backing up, Copy is almost always the right choice.

| Situation | Use Copy | Use Sync |
|-----------|:--------:|:--------:|
| Backup | ✅ | ❌ |
| Mirror (exact replica) | ❌ | ✅ |
| Initial migration | ✅ | ❌ |
| Ongoing replication | ❌ | ✅ (carefully) |

### 4) Double-check source and destination

In RcloneView's two-pane explorer, clearly identify which side is source and which is destination before running any job.

### 5) Use `--backup-dir`

Rclone supports `--backup-dir` — files that would be deleted are moved to a backup directory instead of permanently removed. This gives you a safety net.

## Recovery After Accidental Sync

If you already ran a bad Sync:

1. **Stop immediately** — Don't run another Sync.
2. **Check cloud provider trash** — Google Drive (30 days), OneDrive (93 days), Dropbox (30-180 days).
3. **Check versioning** — S3 and B2 versioning preserves old copies.
4. **Restore from separate backup** — If you have a Copy-based backup, your files are safe there.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Use Folder Comparison** before any Sync operation.
3. **Run Dry Run** to preview changes.
4. **Use Copy for backups** — save Sync for intentional mirroring.
5. **Consider `--backup-dir`** for Sync operations as a safety net.

Sync is a sharp tool. Use it with care.

---

**Related Guides:**

- [Sync vs Copy vs Move Explained](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Recover Accidentally Deleted Files](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)

<CloudSupportGrid />
