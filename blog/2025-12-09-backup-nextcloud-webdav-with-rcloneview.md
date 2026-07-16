---
slug: backup-nextcloud-webdav-with-rcloneview
title: "Back Up Nextcloud and WebDAV Drives with RcloneView: Visual Syncs, Schedules, and Integrity Checks"
authors:
  - tayson
description: "Protect your Nextcloud or any WebDAV drive with RcloneView - add remotes, preview differences, schedule versioned backups, and verify integrity without memorizing CLI flags."
keywords:
  - nextcloud backup
  - webdav backup
  - rcloneview webdav
  - nextcloud to s3
  - webdav to google drive
  - cloud to cloud backup
  - rclone webdav gui
  - versioned backup
  - rclone check
  - cloud automation
tags:
  - RcloneView
  - backup
  - webdav
  - nextcloud
  - cloud-storage
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Back Up Nextcloud and WebDAV Drives with RcloneView: Visual Syncs, Schedules, and Integrity Checks

> Keep your Nextcloud or any WebDAV drive safe by mirroring it to Google Drive, S3/Wasabi, or another cloud-no command line required. RcloneView previews changes, schedules jobs, and verifies integrity so backups stay trustworthy.

Nextcloud and other WebDAV services power team shares and self-hosted storage, but they still need off-site backups. RcloneView wraps the rclone engine in a GUI, letting you add WebDAV once, pair it with your destination cloud, and automate verified backups with Job Scheduler and Compare.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Why back up WebDAV/Nextcloud with RcloneView

- Visualize differences before syncing with **Compare** to avoid overwrites.
- Reuse the same WebDAV remote to back up to multiple targets (Drive, S3, Wasabi).
- Schedule recurring backups and keep logs in Job History.
- Enable checksum options in copy/sync flows to confirm data integrity (where supported).

## Connect your WebDAV/Nextcloud remote

1. Click **`+ New Remote`** -> choose **WebDAV**.
2. Enter your **URL**, **username**, **password/app password**, and select the right vendor preset (e.g., Nextcloud).
3. Name it clearly, like `Nextcloud_Main`.  
   <img src="/support/images/en/blog/new-remote.png" alt="New remote wizard" class="img-medium img-center" />

Need reference? See the WebDAV guide: [Add WebDAV/Nextcloud remote](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav).

## Pick a backup destination

- **Google Drive / Workspace** for easy sharing and history.
- **S3-compatible** clouds (Amazon S3, Wasabi, R2) for predictable costs and lifecycle rules.
- **Another WebDAV** for simple mirror copies.

Add the destination remote with `+ New Remote`, then open both in **Explorer -> Browse** side-by-side.  
<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Side-by-side remotes" class="img-medium img-center" />

## Preview before you copy

- Select source (WebDAV) and destination folders in Explorer.
- Click **Compare** to highlight missing, newer, or identical items.
- Use **`Copy ->`** or **`<- Copy`** to move only what you need, or delete stray files safely.

## Run a one-time backup with Sync

1. Select source/destination folders.
2. Click **Sync** and enable **Dry run** first to see planned changes.
3. In the Sync options, keep concurrency moderate if your server throttles; you can raise transfers/checkers in Settings after testing.
4. Watch progress in **Transfer** and **Completed** tabs; review logs for any API limits.

## Schedule recurring backups (set it and forget it)

1. In the Sync dialog, click **Save to Jobs** (or open **Job Manager -> Add Job**).
2. Pick a schedule (daily or specific days) and point the destination to a dated folder if you want simple point-in-time copies.
3. Enable notifications and watch **Job History** for success/fail details.  

- Guides: [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Execute & Manage Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## Quick FAQ

**Does this work for any WebDAV, not just Nextcloud?**  
Yes - select WebDAV and the appropriate vendor/preset or “other” to match your service.

**Can I back up to multiple destinations?**  
Yes - reuse the same WebDAV source in multiple jobs (e.g., Nextcloud -> Drive and Nextcloud -> Wasabi).

**Do scheduled jobs run if the app is locked?**  
Jobs run as configured; App Lock simply protects UI access (see [Enable App Lock](/tutorials/enable-app-lock)).

## Wrap-up

RcloneView makes WebDAV/Nextcloud backups visual and predictable: add the remote once, preview changes, tune performance, and schedule verified jobs. Protect your team’s files with off-site copies you can trust-no CLI fluency required.

<CloudSupportGrid />
