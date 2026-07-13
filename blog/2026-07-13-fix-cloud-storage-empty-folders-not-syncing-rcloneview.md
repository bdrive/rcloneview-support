---
slug: fix-cloud-storage-empty-folders-not-syncing-rcloneview
title: "Fix Empty Folders Missing After Cloud Sync — Solve with RcloneView"
authors:
  - alex
description: "Empty folders vanishing after a cloud sync? Learn why it happens and how to preserve folder structure with RcloneView's sync settings."
keywords:
  - empty folders not syncing
  - cloud sync missing folders
  - preserve folder structure cloud backup
  - RcloneView empty directories
  - sync job empty folder option
  - fix missing folders after sync
  - cloud backup folder structure
  - rclone empty folder sync
  - cloud storage folder hierarchy
  - troubleshoot cloud sync folders
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Empty Folders Missing After Cloud Sync — Solve with RcloneView

> If a sync job leaves your destination folder structure thinner than the source, the fix is usually one overlooked checkbox, not a broken transfer.

Most cloud storage backends don't actually store empty folders — a directory only "exists" as a side effect of containing at least one file, or the provider tracks it as a lightweight marker that some sync tools skip entirely. That means a straightforward sync can quietly drop empty subfolders from the destination, which is confusing when you're trying to mirror an exact project structure or preserve a folder hierarchy for organizational reasons. RcloneView gives you direct control over this behavior instead of leaving it to guesswork, and the same sync engine handles both mount-style access and full folder sync on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Empty Folders Disappear During Sync

When a sync job runs, it copies files and recreates the folders needed to hold them — a folder with no files inside has nothing forcing it to be created on the destination. This is normal, expected behavior for most sync tools, not a bug, but it becomes a real problem for workflows that rely on pre-built folder structures: project templates with empty placeholder folders, client onboarding directories, or archive structures where the folder itself carries meaning even before files land inside it.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync job configuration screen showing source and destination folder structure" class="img-large img-center" />

The fix isn't a workaround — it's a setting. RcloneView's 4-step Sync wizard includes a **Create empty directories** option in Step 1 (Configure Storage), right alongside the source, destination, and sync direction settings. Enabling it tells the sync engine to explicitly recreate empty folders on the destination instead of skipping them.

## Enable Create Empty Directories in Your Sync Job

Open the Sync wizard from the Home tab, select your source and destination remotes, and before moving past Step 1, toggle **Create empty directories** on. This applies whether you're syncing one-way ("modifying destination only," the stable and recommended direction for most backups) or using the experimental Bidirectional mode. It works the same way whether both sides are cloud remotes, or one side is local disk — useful for cases like mirroring a NAS folder structure to cloud storage before files even finish uploading.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Enabling create empty directories option in a RcloneView sync job" class="img-large img-center" />

If you're troubleshooting a job that already ran without the option enabled, you don't need to redo the whole transfer — just re-run the sync with the setting toggled on, and RcloneView will fill in the missing empty folders on the next pass without touching files that already transferred correctly.

## Confirm the Fix with Folder Compare

After re-running the sync, use Folder Compare to verify the destination structure actually matches the source. The comparison view's "left-only" filter will surface any folders (empty or not) that still exist only on the source side, which is a fast way to confirm the fix worked instead of manually clicking through a deep folder tree.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure after enabling create empty directories" class="img-large img-center" />

Run a Dry Run before any large re-sync if you're unsure how many files will be touched — it previews exactly what will be copied or deleted without making changes, which is worth doing any time you adjust a sync job's settings on a folder structure you care about.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open your Sync job in the Job Manager and go to Step 1 of the wizard.
3. Enable **Create empty directories**, then run a Dry Run to preview the change.
4. Re-run the sync and confirm the result with Folder Compare's left-only filter.

A single setting is usually all it takes to stop losing folder structure on every sync — no need to rebuild directories by hand after the fact.

---

**Related Guides:**

- [Avoid Data Loss from the Wrong Sync Direction in RcloneView](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)
- [Dry Run — Preview Cloud Sync Changes Before They Happen](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Filter Rules — Selective Sync in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
