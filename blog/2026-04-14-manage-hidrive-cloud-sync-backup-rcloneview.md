---
slug: manage-hidrive-cloud-sync-backup-rcloneview
title: "Manage HiDrive Storage — Sync and Backup Files with RcloneView"
authors:
  - tayson
description: "Learn how to connect, sync, and back up HiDrive cloud storage using RcloneView. Manage all your HiDrive files from a GUI without any CLI commands."
keywords:
  - HiDrive RcloneView
  - HiDrive cloud sync
  - HiDrive backup
  - STRATO HiDrive management
  - HiDrive file transfer
  - rclone HiDrive GUI
  - HiDrive sync tool
  - cloud storage management HiDrive
tags:
  - RcloneView
  - hidrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage HiDrive Storage — Sync and Backup Files with RcloneView

> RcloneView brings full GUI control to HiDrive, letting you browse, sync, back up, and schedule transfers without ever opening a command line.

HiDrive, offered by STRATO and operated across European data centers, is a popular choice for privacy-conscious users and businesses subject to GDPR. Managing HiDrive programmatically with rclone has always been possible, but RcloneView wraps that power in a clean interface — making file transfers, scheduled backups, and cross-cloud syncs accessible to anyone on Windows, macOS, or Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting HiDrive to RcloneView

Adding HiDrive as a remote in RcloneView is straightforward. Click **Remote tab → New Remote**, scroll to HiDrive in the provider list, and follow the OAuth browser login. RcloneView opens your default browser, you authenticate with your STRATO credentials, and the remote is saved automatically — no token copying required.

Once connected, your HiDrive folders appear instantly in the Explorer panel. You can open multiple tabs to compare a local folder against your HiDrive backup, or split the view to show HiDrive alongside another cloud like Amazon S3.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive as a new remote in RcloneView" class="img-large img-center" />

HiDrive supports standard file operations through RcloneView: upload, download, rename, delete, new folder, and public link generation. Drag and drop files from Windows Explorer directly into the HiDrive Explorer panel to upload, or drag between panels to trigger a cloud-to-cloud copy.

## Scheduling Automated HiDrive Backups

For businesses storing project archives or client deliverables on HiDrive, automated backups are essential. RcloneView's Job Manager (PLUS license) lets you configure crontab-style schedules — for example, a nightly sync of a local `D:\Projects` folder to `hidrive:Backups/Projects` every day at 2:00 AM.

The 4-step sync wizard walks you through source and destination selection, transfer concurrency settings, file filters, and the schedule. Enable checksum verification in Step 2 to confirm file integrity byte-by-byte rather than relying on modification times alone — important when syncing to a European server where timezone differences can cause false mismatches.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled HiDrive backup job in RcloneView" class="img-large img-center" />

Use the Dry Run option before the first live sync to preview exactly which files will be copied or deleted. This is especially valuable when setting up a one-way sync where destination files can be overwritten.

## Monitoring Transfers and Job History

RcloneView's bottom **Transferring** tab gives you real-time visibility into active HiDrive transfers: file count, transfer speed, bytes moved, and elapsed time. If a job fails due to a network hiccup, RcloneView retries automatically (default: 3 retries).

The **Job History** tab stores a complete log of past runs — execution type (manual or scheduled), start time, duration, status, and total size transferred. For compliance teams that need to demonstrate regular data protection activity, this audit trail is immediately useful.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing HiDrive backup job history in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open RcloneView and click **Remote tab → New Remote**, select HiDrive, and complete OAuth login.
3. Use the Explorer panel to browse your HiDrive folders and verify the connection.
4. Open **Job Manager**, create a new Sync job from your local drive to HiDrive, and set a schedule.

With RcloneView, HiDrive becomes a fully managed part of your backup strategy — scheduled, monitored, and verified automatically.

---

**Related Guides:**

- [Manage OneDrive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Manage Jottacloud — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
