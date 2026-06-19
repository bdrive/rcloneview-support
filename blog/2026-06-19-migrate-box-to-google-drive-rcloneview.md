---
slug: migrate-box-to-google-drive-rcloneview
title: "Migrate Box to Google Drive — Transfer Files with RcloneView"
authors:
  - kai
description: "Move your entire Box workspace to Google Drive without losing a file. Use RcloneView to configure, verify, and schedule the migration step by step."
keywords:
  - migrate Box to Google Drive
  - Box to Google Drive transfer
  - Box Google Drive migration RcloneView
  - cloud-to-cloud file migration
  - move files from Box to Google Drive
  - RcloneView cloud migration
  - Google Drive migration tool
  - Box file transfer GUI
  - cloud storage migration guide
  - switch from Box to Google Drive
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to Google Drive — Transfer Files with RcloneView

> Move your entire Box workspace to Google Drive with full visibility — use RcloneView's GUI to configure, run, verify, and schedule every phase of the migration.

Organizations switching from Box to Google Drive often hit the same wall: built-in export tools move files in opaque batches, leaving no clear record of what transferred correctly and what was silently skipped. RcloneView solves this by treating both Box and Google Drive as first-class remotes — you browse, compare, and copy between them visually, run dry-run previews before committing, and use Folder Compare to verify every file arrived intact before decommissioning Box.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Box and Google Drive in RcloneView

Both Box and Google Drive use OAuth browser login, so there are no API keys to generate manually. Open RcloneView, go to **Remote > New Remote**, and select **Box**. A browser window opens for authentication; once authorized, the remote appears in your Explorer panel. Repeat the process for Google Drive, selecting it from the provider list and signing in with the target account.

For enterprise accounts, Box for Business requires setting `box_sub_type = enterprise` in the remote configuration. RcloneView exposes this as an option in the advanced remote settings pane — no manual editing of config files required. Similarly, if you're migrating into a Google Shared Drive rather than a personal Drive, note the target folder path carefully when configuring the sync destination.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive as OAuth remotes in RcloneView" class="img-large img-center" />

With both remotes configured, open two Explorer panels side by side — Box on the left, Google Drive on the right — to browse both storage systems simultaneously before the transfer begins.

## Running the Cloud-to-Cloud Migration

Create a new sync job via **Home > Sync**. Set your Box folder as the source and the target Google Drive folder as the destination. For a full workspace migration, point the source at your Box root or the top-level shared folder. In the Advanced Settings step, enable **checksum verification** so RcloneView confirms file hashes match after transfer — essential for any migration where data integrity is non-negotiable.

Before executing, use **Dry Run** to simulate the migration. RcloneView lists every file it will copy and flags items it cannot transfer — surfacing permission errors or filename conflicts before they silently break your migration at scale. A legal services firm moving 500 GB of case files, for example, can share this dry-run report with the IT team for sign-off before the actual data movement begins.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a cloud-to-cloud sync job from Box to Google Drive in RcloneView" class="img-large img-center" />

## Verifying the Migration with Folder Compare

After the initial sync finishes, open **Home > Compare** with Box on one side and Google Drive on the other. RcloneView scans both sides and categorizes every item: left-only (exists only in Box), right-only (exists only in Google Drive), identical, or different. For migration validation, you want to see only identical entries — any left-only or different files reveal gaps that need a re-sync before Box access is revoked.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify the Box to Google Drive migration in RcloneView" class="img-large img-center" />

The **Size Change Discovery** tools in Compare are particularly valuable for large enterprise migrations — they pinpoint which folders gained or lost data compared to the source, letting you target re-sync operations precisely rather than re-running the entire job.

## Scheduling Delta Syncs Until Cutover

During the transition period when users remain active in Box, schedule recurring delta syncs to keep Google Drive current. Set a crontab schedule in the job's Schedule tab — nightly overnight syncs are common — and RcloneView executes each run from the system tray without requiring the main window to be open. Because RcloneView only transfers changed or new files after the first full sync, incremental runs complete quickly even for large workspaces.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing scheduled delta syncs from Box to Google Drive" class="img-large img-center" />

On cutover day, run a final delta sync, confirm parity with Folder Compare, and you're done.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Box and Google Drive as OAuth remotes in RcloneView using browser-based authentication.
3. Create a sync job from your Box folder to the target Google Drive folder with checksum verification enabled.
4. Run a Dry Run to review the file list before executing the migration.

With RcloneView, a Box-to-Google-Drive migration becomes a repeatable, fully auditable workflow — not a one-time black-box export.

---

**Related Guides:**

- [Migrate Box to OneDrive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [Sync Google Drive to Box with RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [Migrate Box to Backblaze B2 — Archive Files with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
