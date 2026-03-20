---
slug: migrate-google-drive-to-onedrive-rcloneview
title: "How to Migrate from Google Drive to OneDrive — Complete Transfer Guide with RcloneView"
authors:
  - tayson
description: "Moving from Google Workspace to Microsoft 365? Learn how to migrate all your Google Drive files to OneDrive without losing folder structure using RcloneView."
keywords:
  - migrate google drive to onedrive
  - google drive to onedrive transfer
  - switch google workspace to microsoft 365
  - move files google drive onedrive
  - google to microsoft migration
  - cloud to cloud migration tool
  - google drive onedrive sync
  - transfer google drive files
  - google workspace to office 365
  - cloud migration without data loss
tags:
  - RcloneView
  - google-drive
  - onedrive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How to Migrate from Google Drive to OneDrive — Complete Transfer Guide with RcloneView

> Switching from Google Workspace to Microsoft 365? The biggest headache isn't the new apps — it's moving terabytes of files from Google Drive to OneDrive without losing your folder structure, sharing, or your sanity.

Whether your organization is switching productivity suites or you simply want a copy of your Google Drive on OneDrive, the migration process can be painful. Google Takeout exports a ZIP file that loses folder structure. Manual drag-and-drop takes forever. RcloneView handles it properly — direct cloud-to-cloud transfer that preserves your folders.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Not Use Google Takeout?

Google Takeout is Google's official export tool, but it has significant limitations for migration:

- **Exports as ZIP** — You get a compressed archive, not a live folder structure.
- **Loses organization** — Shared Drives and folder hierarchies can be flattened.
- **No incremental updates** — If files change during export, you start over.
- **Manual re-upload** — You still need to upload everything to OneDrive.

RcloneView transfers files directly from Google Drive to OneDrive, preserving the original folder structure.

## Step-by-Step Migration

### 1) Connect Both Accounts

Add both Google Drive and OneDrive as remotes in RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and OneDrive remotes" class="img-large img-center" />

### 2) Browse and Plan

Open both remotes in the two-pane explorer. Google Drive on the left, OneDrive on the right:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive and OneDrive side by side" class="img-large img-center" />

Review your Google Drive structure before migrating. Identify:

- Which folders to migrate (maybe not everything).
- Total size (affects transfer time).
- Google Docs/Sheets/Slides (these need conversion — see below).

### 3) Handle Google-Native Files

Google Docs, Sheets, and Slides are not traditional files — they're web-based. When transferring, rclone converts them to Microsoft Office formats:

| Google Format | Converts To |
|---------------|------------|
| Google Docs | .docx |
| Google Sheets | .xlsx |
| Google Slides | .pptx |
| Google Drawings | .png |

This conversion happens automatically during transfer.

### 4) Start the Transfer

Create a **Copy** job from Google Drive to OneDrive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run migration job" class="img-large img-center" />

Use **Copy** (not Sync) for migration. Copy only adds files to the destination — it never deletes anything.

### 5) Monitor Progress

Watch the transfer in real time:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive to OneDrive transfer" class="img-large img-center" />

### 6) Verify with Folder Comparison

After the transfer completes, compare both sides to ensure nothing was missed:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Migration Tips

### Migrate in batches

For large drives (500 GB+), migrate folder by folder instead of everything at once:

1. Start with critical folders (Documents, Projects).
2. Move shared folders next.
3. Archive and media last.

This way, users can start working on OneDrive immediately with their most important files.

### Handle rate limits

Both Google Drive and OneDrive have API rate limits. RcloneView respects these automatically, but for very large migrations:

- Use [bandwidth limiting](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) to avoid hitting limits.
- Schedule transfers during off-hours.
- Let failed transfers retry automatically (v1.3 feature).

### Run incremental updates

After the initial migration, run the same Copy job again. It only transfers new or changed files — skipping what's already been copied. This catches any files that were added to Google Drive during the migration.

## After Migration: Keep Both in Sync

If you need both clouds active during a transition period, set up a scheduled sync:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

This keeps OneDrive updated with any changes in Google Drive until you fully cut over.

## Common Issues

### "File name too long"

OneDrive has a 400-character path limit. Google Drive is more lenient. If you hit this, shorten deeply nested folder names before migrating.

### Shared Drive files

Google Shared Drives (Team Drives) are separate from your personal My Drive. Add them as a separate remote or configure rclone to include Shared Drives.

### Large files

OneDrive Business supports files up to 250 GB. OneDrive Personal supports up to 250 GB as well. Verify your largest files before starting.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Google Drive and OneDrive** as remotes.
3. **Run a Copy job** — folder structure is preserved automatically.
4. **Verify with Folder Comparison** — ensure nothing is missing.
5. **Schedule incremental updates** until the transition is complete.

Don't let file migration be the bottleneck in your platform switch.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Set Bandwidth Limits](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
