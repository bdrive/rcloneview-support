---
slug: mount-hetzner-storage-box-sync-cloud-rcloneview
title: "Mount Hetzner Storage Box as a Local Drive and Sync to Any Cloud with RcloneView"
authors:
  - tayson
description: "Access your Hetzner Storage Box like a local folder — mount it via SFTP, browse files visually, and sync or back up to AWS S3, Google Drive, or any cloud using RcloneView."
keywords:
  - hetzner storage box mount
  - hetzner storage box sync
  - hetzner storage box backup
  - hetzner sftp mount local drive
  - hetzner storage box rclone
  - hetzner storage box gui
  - hetzner to s3
  - hetzner cloud backup
  - hetzner storage box file manager
  - mount sftp as local drive
tags:
  - RcloneView
  - hetzner
  - sftp
  - cloud-storage
  - mount
  - sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Mount Hetzner Storage Box as a Local Drive and Sync to Any Cloud with RcloneView

> Hetzner Storage Box offers unbeatable price-per-terabyte in Europe, but managing files via FTP or SCP is clunky. RcloneView mounts it as a local drive and syncs it to any cloud — visually.

Hetzner Storage Boxes are one of the best-value storage solutions in Europe — reliable, affordable, and accessible via SFTP, FTP, SMB, and WebDAV. But without a native desktop client, managing files means using command-line tools or basic FTP clients. RcloneView changes this by connecting via SFTP, letting you mount the Storage Box as a local drive, browse files in a two-pane explorer, and sync to AWS S3, Google Drive, or any other cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Use RcloneView with Hetzner Storage Box?

- **No native desktop client** — Hetzner provides raw protocols (SFTP, FTP, SMB) but no sync app.
- **Mount as a local drive** — Access your Storage Box like a regular folder on your desktop.
- **Cross-cloud sync** — Automatically replicate Storage Box data to S3, Google Drive, or OneDrive.
- **Visual file management** — Browse, drag-and-drop, compare, and organize without CLI.

## Connecting Hetzner Storage Box via SFTP

1. Open RcloneView and click **Add Remote**.
2. Select **SFTP** from the provider list.
3. Enter your Hetzner credentials:
   - **Host**: `uXXXXXX.your-storagebox.de` (from your Hetzner Robot panel)
   - **Port**: `23` (Hetzner uses non-standard SFTP port)
   - **Username**: Your Storage Box username (e.g., `u123456`)
   - **Password**: Your Storage Box password
4. Save — your Storage Box directories are now browsable.

<img src="/support/images/en/blog/new-remote.png" alt="Add Hetzner Storage Box via SFTP" class="img-large img-center" />

## Mount as a Local Drive

Once connected, mount your Storage Box as a local folder:

1. Browse to your SFTP remote in the Explorer.
2. Right-click the folder you want → select **Mount**.
3. Choose a local mount point (drive letter on Windows, path on Mac/Linux).
4. Your Hetzner storage appears as a native folder.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Hetzner Storage Box as local drive" class="img-large img-center" />

Now you can open files, drag-and-drop, and work with your Storage Box data using any desktop application — as if it were local storage.

## Browse and Manage Files

The two-pane Explorer lets you manage Hetzner storage alongside any other remote:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Hetzner Storage Box alongside cloud" class="img-large img-center" />

- Navigate folder hierarchies
- Drag and drop files between Hetzner and clouds
- Create, rename, and delete files and folders
- Check file sizes and dates

## Sync to Cloud Providers

### Hetzner → AWS S3 (Offsite Backup)

Add a cloud layer of redundancy to your already-reliable Hetzner storage:

1. Create a Sync job: Hetzner SFTP → S3 bucket.
2. Schedule nightly with [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Use S3 Glacier for cost-effective cold archival.

### Hetzner → Google Drive (Team Sharing)

Make Hetzner data accessible to Google Workspace users:

1. Create a Copy job: Hetzner → Google Drive folder.
2. Use [filter rules](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview) to sync only specific folders.

### Cloud → Hetzner (Offsite Backup Destination)

Use Hetzner as your affordable offsite backup target:

1. Create a Sync job: Google Drive → Hetzner Storage Box.
2. Schedule daily — Hetzner's per-TB pricing makes this extremely cost-effective.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Hetzner sync job" class="img-large img-center" />

## Verify and Monitor

### Folder Comparison

Verify sync completeness between Hetzner and your cloud backup:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Hetzner with cloud backup" class="img-large img-center" />

### Scheduled Automation

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Hetzner backup jobs" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Hetzner Storage Box** via SFTP (port 23).
3. **Mount** as a local drive or browse in the Explorer.
4. **Sync** to S3, Google Drive, or any other cloud.
5. **Schedule** for automated daily backup.

Hetzner Storage Box is one of Europe's best-kept storage secrets. RcloneView gives it the desktop client it deserves — plus multi-cloud sync on top.

---

**Related Guides:**

- [Mount SFTP and SMB as Local Drive](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Mount Cloud Storage as a Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Filter Rules for Selective Sync](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
