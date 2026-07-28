---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Fix Empty Folders Not Syncing — How to Resolve with RcloneView"
authors:
  - morgan
description: "Empty folders missing after a sync? Learn why rclone skips them by default and how to fix it with RcloneView's create empty directories option."
keywords:
  - empty folders not syncing
  - rclone empty directories missing
  - fix cloud sync empty folders
  - RcloneView create empty directories
  - sync missing folder structure
  - cloud backup empty folders
  - rclone sync folder structure
  - RcloneView troubleshooting sync
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Empty Folders Not Syncing — How to Resolve with RcloneView

> If a sync job silently drops empty folders from the destination, the fix is a single checkbox most users never notice during setup.

A team migrating a project archive between clouds often expects the destination to mirror the source folder structure exactly — including placeholder folders that don't yet contain files. By default, rclone (and by extension RcloneView) skips creating empty directories on the destination, because most object storage backends don't have a true concept of folders; they only track file keys. If your sync job finishes successfully but a batch of empty subfolders is missing from the destination, this is expected behavior, not a bug — and RcloneView has a built-in setting to change it.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Empty Folders Get Dropped

Local filesystems and some providers store folders as real objects, but many cloud backends — including S3-compatible storage — represent a "folder" only as a common prefix shared by file keys. When a directory has no files in it, there's no key to create, so nothing shows up on the far side. rclone's default sync behavior reflects this: it copies files and lets folder structure emerge implicitly from file paths, which keeps transfers fast but leaves genuinely empty folders behind.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed sync with no errors despite missing empty folders" class="img-large img-center" />

This is why a sync job can report Completed with zero errors while still leaving your destination folder tree thinner than the source. It's not a failed transfer — it's the tool doing exactly what it was told, minus one detail most users assume is automatic.

## Enabling Create Empty Directories

RcloneView exposes this behavior directly in the sync wizard. In Step 1 (Configure Storage), alongside the source and destination selection and sync direction toggle, there's a **Create empty directories** option. Enabling it before running the job tells rclone to explicitly create placeholder entries for empty folders on the destination, so the copied structure matches the source folder-for-folder.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling create empty directories in the RcloneView sync configuration wizard" class="img-large img-center" />

If you've already run a sync without this option checked, simply edit the existing job, enable the setting, and run it again — RcloneView mounts AND syncs 90+ providers from one window, so re-running against the same source and destination is a quick fix rather than a full reconfiguration.

## Verifying Folder Structure After the Fix

Before trusting a large migration to a single run, use Dry Run to preview what the corrected job will actually do — it lists every file and folder slated for creation without touching the destination, so you can confirm the empty-folder gap is closed before committing. For an ongoing project, Folder Compare is also useful afterward: point it at both sides and filter by "left-only" or "right-only" to spot any structural mismatches that remain.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure matches after enabling empty directory creation" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open the sync job that's missing empty folders and click Edit.
3. In Step 1, enable the **Create empty directories** checkbox.
4. Run a Dry Run to confirm the folders will be created, then execute the sync.

Once the setting is enabled, every future run of that job preserves the full folder tree — no more chasing down missing placeholder directories after a migration.

---

**Related Guides:**

- [Dry Run — Preview Cloud Sync Before Transfer with RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Filter Rules — Selective Sync with RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Avoid Data Loss from Wrong Sync Direction with RcloneView](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
