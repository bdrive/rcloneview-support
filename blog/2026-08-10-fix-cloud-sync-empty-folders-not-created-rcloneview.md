---
slug: fix-cloud-sync-empty-folders-not-created-rcloneview
title: "Empty Folders Missing After Sync — How to Resolve with RcloneView"
authors:
  - robin
description: "Empty folders vanish after a cloud sync? Learn why rclone skips them by default and how to fix it in RcloneView with one setting."
keywords:
  - empty folders not syncing
  - rclone empty directories
  - cloud sync missing folders
  - RcloneView troubleshooting
  - folder structure sync
  - create empty directories rclone
  - fix cloud sync errors
  - RcloneView sync settings
  - cloud backup folder structure
tags:
  - RcloneView
  - troubleshooting
  - sync
  - cloud-sync
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Empty Folders Missing After Sync — How to Resolve with RcloneView

> Placeholder folders and empty project directories often disappear after a cloud sync — here's the setting that brings them back.

A team migrates a folder structure to the cloud and notices that half the empty placeholder directories — the ones reserved for future files, client deliverables, or archive buckets — simply never show up on the destination. This is expected default behavior in rclone: sync operations only recreate directories that contain files. RcloneView exposes the setting needed to change that, and knowing where to find it saves a lot of confused rework.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Empty Folders Get Skipped

Rclone's sync and copy engine walks the source tree and transfers objects — files. A directory with zero files inside it produces no transfer operation, so by default the destination never learns that directory should exist. This isn't a bug; it's how most cloud storage APIs represent "folders" in the first place — as a side effect of object keys rather than as standalone entities. The practical result is that a source tree with intentional placeholder folders (a `03-invoices/` folder waiting for next month's files, or a category structure a client expects to see) can arrive at the destination missing pieces.

This becomes especially noticeable during a Folder Compare or an initial migration, where the destination structure needs to visually mirror the source before files even start landing in it.

## The Fix: Create Empty Directories

RcloneView's Sync wizard includes a **Create empty directories** toggle in Step 1 (Configure Storage), alongside the source/destination remote and folder selection. Enabling it tells the underlying sync operation to also recreate directories that have no files, so the destination folder tree matches the source structure exactly — not just the files within it.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView sync wizard step 1 with create empty directories option" class="img-large img-center" />

For a one-time structural migration, run a Dry Run first with the option enabled. Dry Run lists exactly which folders and files will be created without touching the destination, which is the fastest way to confirm the empty-folder issue is actually resolved before committing to the transfer.

## Confirming the Result with Folder Compare

After running the sync, use RcloneView's Folder Compare to check both sides directory-by-directory. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so you can visually diff the source and destination trees side by side without switching tools. The "Show left-only files" and "Show right-only files" filters make it immediate whether a folder made it across.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Folder compare view showing matched folder structure between source and destination" class="img-large img-center" />

If you're maintaining the structure long-term rather than doing a one-off migration, save the job with the empty-directories option checked so every scheduled run keeps recreating the placeholder folders as needed.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open the Sync wizard and select your source and destination remotes.
3. In Step 1, enable **Create empty directories** before configuring filters.
4. Run a Dry Run to confirm the folder structure, then execute the sync.

A folder structure that matches on both ends makes onboarding new team members and auditing storage far less error-prone.

---

**Related Guides:**

- [macOS Empty Folders and Permissions — Fix with RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)
- [Cleanup Empty Trash in Cloud Storage with RcloneView](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Fix Cloud Sync Missing Files After Transfer — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
