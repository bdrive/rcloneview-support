---
slug: sync-onedrive-to-box-rcloneview
title: "Sync OneDrive to Box — Cloud Backup with RcloneView"
authors:
  - alex
description: "Sync OneDrive to Box with RcloneView: connect both via OAuth, preview with a dry run, run cloud-to-cloud sync, and verify with Folder Compare."
keywords:
  - sync OneDrive to Box
  - OneDrive to Box backup
  - OneDrive Box sync tool
  - copy OneDrive to Box
  - cloud to cloud sync
  - OneDrive Box migration
  - RcloneView
  - rclone GUI
  - folder compare
  - scheduled cloud sync
tags:
  - RcloneView
  - onedrive
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync OneDrive to Box — Cloud Backup with RcloneView

> Keep a second copy of your OneDrive files in Box, moved directly between the two clouds.

Teams often live in OneDrive internally while a client, partner, or compliance process expects files in Box. Downloading everything and re-uploading is slow, and it needs local disk space you may not have. RcloneView connects both services and syncs cloud-to-cloud, with a dry run beforehand and a visual compare afterward.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect OneDrive and Box

Both services use OAuth browser login. In the Remote tab click **New Remote**, choose Microsoft OneDrive, and sign in. Repeat for Box. For a Box Business or Enterprise account, set `box_sub_type = enterprise` during configuration.

RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux. Once both remotes exist, open them in two Explorer panels side by side.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Box remotes in RcloneView" class="img-large img-center" />

## Choose Copy or Sync, Then Dry Run

Open the Sync wizard and pick OneDrive as the source and a Box folder as the destination. One-way sync modifies the destination only, so files deleted from OneDrive will also be removed from Box. If you want a safety net rather than a mirror, use a Copy job instead.

Run a **Dry Run** first. It lists files to be copied and files to be deleted without changing anything. For example, an accounting team syncing a 150 GB "Clients" folder can confirm the folder structure and spot stray temporary files before the real run.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync from OneDrive to Box" class="img-large img-center" />

## Filter and Tune the Job

Step 2 of the wizard sets the number of file transfers, multi-thread transfers, and equality checkers. Enable checksum comparison if you want hash plus size rather than size and time alone. Step 3 lets you exclude files by max size, age, or custom rules, or use predefined filters for documents or images. Box has its own upload size limits that depend on your plan, so check your account before syncing very large files.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting the OneDrive to Box sync job" class="img-large img-center" />

## Monitor, Compare, and Schedule

Watch progress in the Transferring tab, which shows speed, file counts, and size. Afterward, open **Compare** with OneDrive on the left and Box on the right and filter for left-only or different files. Job History keeps the status, duration, and size of each run.

With a PLUS license you can add a crontab-style schedule in Step 4 so the sync repeats nightly while RcloneView runs in the system tray.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between OneDrive and Box" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add OneDrive and Box remotes in the Remote tab.
3. Create a Sync or Copy job from OneDrive to Box and run a Dry Run.
4. Run the job, then verify with Folder Compare and Job History.

A verified second copy in Box gives you a dependable fallback whichever platform your team uses next.

---

**Related Guides:**

- [Manage OneDrive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Manage Box Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrate Box to OneDrive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
