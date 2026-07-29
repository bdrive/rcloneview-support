---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Fix Empty Folders Not Syncing — Enable Directory Creation with RcloneView"
authors:
  - robin
description: "Learn why empty folders disappear during cloud sync and how to fix it with RcloneView's create empty directories option."
keywords:
  - empty folders not syncing
  - fix missing folders cloud sync
  - RcloneView create empty directories
  - cloud sync folder structure
  - rclone empty directory sync
  - folder structure not preserved
  - sync missing empty folders
  - RcloneView sync settings
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - job-management
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Empty Folders Not Syncing — Enable Directory Creation with RcloneView

> If a sync job leaves your carefully organized empty folders behind, the fix is a single toggle in RcloneView's sync setup, not a bug in your cloud provider.

Most sync engines, rclone included, only transfer objects that actually contain data — an empty folder has nothing to copy, so by default it's skipped entirely. That's fine for a flat backup, but it breaks any workflow that depends on a fixed folder structure, like a project template, a client intake tree, or placeholder directories a team expects to see even before files land in them. RcloneView surfaces the setting that controls this behavior directly in the sync wizard, so you don't need to touch a config file or rerun a job blind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Empty Folders Get Dropped

When RcloneView (via rclone) walks a source tree during a sync, it builds its transfer list from files, not directories. A folder that holds only subfolders with no files in them anywhere below it produces zero transferable objects, so nothing tells the destination that folder should exist. This is expected sync behavior, not a defect — but it surprises anyone who assumes a folder-to-folder sync preserves the exact tree, including the empty branches.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView sync setup wizard showing Step 1 configuration options" class="img-large img-center" />

The fix lives in Step 1 of the sync configuration wizard, alongside source, destination, and sync direction — it's easy to miss on a first pass because it's off by default.

## Turning On Create Empty Directories

In Step 1 of the 4-step sync wizard, enable the "Create empty directories" option before saving the job. With it on, RcloneView instructs rclone to replicate the full directory structure at the destination, including branches that currently contain no files. This matters most for jobs run repeatedly on a schedule — a folder that's empty today might receive files next week, and having the destination structure ready avoids confusion about where new content should land.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Create empty directories toggle in RcloneView sync configuration Step 1" class="img-large img-center" />

Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license — so this fix applies whether you're mirroring one destination or fanning a source out to several with 1:N sync.

## Verifying the Fix with Dry Run

Before committing to a full sync, use RcloneView's Dry Run feature to preview exactly which folders and files will be created or changed. Dry Run lists the pending operations without touching the destination, which is the fastest way to confirm your empty folders will actually appear before you run the job for real — especially useful if you're retrofitting the setting onto a job that's already been running for a while.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run preview before executing a sync job in RcloneView" class="img-large img-center" />

If a scheduled job already ran without the option enabled, re-save it with "Create empty directories" checked and run it once more — the next execution will backfill the missing directory structure at the destination.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open or create your sync job and go to Step 1: Configure Storage.
3. Check "Create empty directories" before saving.
4. Run a Dry Run first to confirm the folder structure matches what you expect.

A single checkbox is all it takes to keep your folder structure intact across every cloud you sync to.

---

**Related Guides:**

- [Folder Comparison Guide — Detect Differences with RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Dry Run — Preview Cloud Sync Before Transfer with RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Filter Rules — Selective Sync with RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
