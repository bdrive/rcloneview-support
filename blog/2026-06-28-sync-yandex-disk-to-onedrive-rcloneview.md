---
slug: sync-yandex-disk-to-onedrive-rcloneview
title: "Sync Yandex Disk to OneDrive — Transfer Files with RcloneView"
authors:
  - steve
description: "Move your files from Yandex Disk to Microsoft OneDrive with RcloneView — a GUI that handles cloud-to-cloud transfers, scheduling, and monitoring without any CLI."
keywords:
  - Yandex Disk to OneDrive
  - migrate Yandex Disk OneDrive
  - sync Yandex Disk to OneDrive
  - Yandex Disk OneDrive transfer
  - RcloneView cross-cloud sync
  - Yandex Disk migration
  - cloud storage migration OneDrive
  - transfer files Yandex Disk RcloneView
tags:
  - RcloneView
  - yandex-disk
  - onedrive
  - cloud-to-cloud
  - migration
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Yandex Disk to OneDrive — Transfer Files with RcloneView

> RcloneView connects both Yandex Disk and OneDrive in a single GUI — transfer files between them with scheduled jobs, live transfer monitoring, and a dry-run preview.

Yandex Disk offers generous storage and works well within Russia and neighboring regions, but many users eventually consolidate onto Microsoft OneDrive for its tight integration with Microsoft 365, SharePoint, and Teams. Moving terabytes of files cloud-to-cloud without downloading everything locally sounds daunting — but RcloneView handles it entirely server-side, routing the transfer through your local machine without requiring the files to actually land on your disk. Both providers connect via OAuth browser login, and once set up, the process is a matter of point, configure, and run.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Both Remotes: Yandex Disk and OneDrive

Open RcloneView and go to **Remote tab → New Remote**. Select **Yandex Disk** from the provider list. A browser window opens automatically for OAuth authentication — log in with your Yandex account and grant permission. The remote is created and saved in seconds.

Repeat the process for **OneDrive**: select it from the provider list, and the same browser-based login flow handles authentication. Business accounts and personal accounts both work; for OneDrive for Business or SharePoint, the OAuth flow redirects to your organization's Microsoft login page.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and OneDrive as remotes in RcloneView" class="img-large img-center" />

Once both remotes are saved, open two Explorer panels — Yandex Disk on the left, OneDrive on the right — to visually confirm you're looking at the right folder structure on each side before starting the transfer.

## Transfer Files with the Cloud-to-Cloud Job Wizard

With both remotes visible, use the **Home tab → Sync** button to open the job wizard. In Step 1, set your Yandex Disk folder as the source and the target OneDrive folder as the destination. Give the job a descriptive name.

Step 2 configures transfer behavior: increase the number of concurrent transfers for large folders, or enable checksum verification to confirm file integrity after each transfer — important when moving documents and archives you'll rely on going forward.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer job configured from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

Step 3 lets you add filters. If you only want to move documents and skip large media files, set a maximum file size limit or restrict to specific extensions. Alternatively, use predefined filter presets (Image, Video, Document) to keep the initial migration lean. Before clicking Run, always use **Dry Run** first — it shows exactly which files will be copied without making any actual changes, so you can catch path mismatches or filter errors early.

## Monitor Progress and Schedule Ongoing Sync

Once the job is running, the **Transferring tab** at the bottom of RcloneView shows live progress: files transferred, current speed, total size remaining. For a large Yandex Disk account — say, 500 GB of project files and media — you can leave this running in the background while RcloneView continues to work from the system tray.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of Yandex Disk to OneDrive transfer in RcloneView" class="img-large img-center" />

If you need to keep Yandex Disk and OneDrive in sync on an ongoing basis — not just a one-time migration — add a schedule in Step 4 of the wizard (PLUS license). Crontab-style fields let you run the sync nightly, weekly, or at any custom interval. Combined with email, Telegram, or Slack notifications, you'll know immediately if a scheduled sync completes or errors.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

Once the migration is complete, the same RcloneView window can manage Google Drive, Dropbox, Amazon S3, and 90+ other providers — mount and sync everything from one place, free.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add **Yandex Disk** as a remote via Remote tab → New Remote (OAuth browser login).
3. Add **OneDrive** as a second remote using the same OAuth flow.
4. Create a sync job with Yandex Disk as source and OneDrive as destination, run Dry Run, then execute.

A full Yandex Disk-to-OneDrive migration — with progress tracking and optional scheduling — takes just a few minutes to configure in RcloneView.

---

**Related Guides:**

- [Manage Yandex Disk Storage with RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Manage OneDrive Storage with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrate Yandex Disk to Dropbox with RcloneView](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)

<CloudSupportGrid />
