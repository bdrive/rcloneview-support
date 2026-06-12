---
slug: manage-wasabi-cloud-sync-backup-rcloneview
title: "Manage Wasabi Storage — Sync and Backup Files with RcloneView"
authors:
  - steve
description: "Learn how to connect Wasabi hot cloud storage to RcloneView for fast, reliable sync, backup, and file management with a visual GUI interface."
keywords:
  - Wasabi cloud storage
  - RcloneView Wasabi
  - Wasabi sync backup
  - manage Wasabi files
  - Wasabi S3 compatible
  - cloud backup Wasabi
  - Wasabi file transfer
  - Wasabi RcloneView setup
  - Wasabi cloud sync guide
tags:
  - RcloneView
  - wasabi
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Wasabi Storage — Sync and Backup Files with RcloneView

> Connect Wasabi hot cloud storage to RcloneView for fast, automated backup and sync without writing a single rclone command.

Wasabi is a high-performance S3-compatible object storage service popular with teams that move large volumes of data regularly. Whether you're backing up a video production library, syncing datasets across offices, or archiving project deliverables, managing Wasabi efficiently requires a reliable tool. RcloneView connects directly to Wasabi using its S3-compatible API and provides a visual interface for file transfers, scheduled jobs, and folder comparison — no command-line knowledge required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Wasabi to RcloneView

Adding Wasabi as a remote in RcloneView takes less than two minutes. Open the **Remote** tab, click **New Remote**, and select **S3-Compatible Storage** from the provider list. You'll enter your Wasabi **Access Key ID** and **Secret Access Key** — both generated from your Wasabi console — along with the correct **region endpoint** for your bucket (for example, `s3.us-east-1.wasabisys.com` for US East 1).

Once saved, your Wasabi bucket appears in the RcloneView file explorer just like any other drive. You can browse folders, copy files between Wasabi and other remotes, and drag files from your local machine directly into the bucket. Drag and drop between two different remotes copies the files, while dragging within Wasabi moves them.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Wasabi S3-compatible remote in RcloneView" class="img-large img-center" />

## Running Sync and Backup Jobs

The real power of RcloneView for Wasabi users is its sync job system. Create a job in 4 steps: choose your source (a local folder, Google Drive, OneDrive, or another cloud), set Wasabi as the destination, configure transfer concurrency and checksum verification, and optionally apply file filters. The **Dry Run** mode previews exactly which files will be copied or deleted before any changes are made — invaluable when working with production data.

For teams that need consistent, recurring backups, RcloneView's crontab-style scheduler (available with a PLUS license) lets you run jobs automatically on any schedule. A photography studio syncing 2TB of RAW files nightly can configure this once and forget it. The **Job History** view tracks every transfer — duration, file count, speed, and completion status — so you have a full audit trail.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time Wasabi transfer monitoring in RcloneView" class="img-large img-center" />

## Filtering Large Wasabi Libraries

When your Wasabi bucket contains thousands of files, you don't always want to sync everything. RcloneView's filtering step lets you exclude files by extension (`.tmp`, `.log`), limit transfers to files under a certain size, or restrict syncs to files modified within a specific time window using max-age filters. This makes targeted backups practical — for example, syncing only `.mp4` and `.mov` files from a media production folder into Wasabi without touching raw project assets.

The **Folder Compare** feature is particularly useful here. Point it at a local directory and a Wasabi bucket prefix to see exactly what differs before running a sync. Files unique to one side, files that differ in size, and identical files are all clearly categorized, letting you confidently copy only what's needed.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between local storage and a Wasabi bucket in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Go to **Remote tab > New Remote**, select S3-Compatible Storage, and enter your Wasabi Access Key, Secret Key, and endpoint URL.
3. Open the **Job Manager**, create a new sync job with Wasabi as your destination, and configure any file filters you need.
4. Run a **Dry Run** first to preview the operation, then execute the job or set a recurring schedule.

With RcloneView managing your Wasabi storage, you get reliable, auditable backups and transfers without memorizing rclone flags or writing shell scripts.

---

**Related Guides:**

- [Centralize Amazon S3, Wasabi, and Cloudflare R2 with RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Migrate Wasabi to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-s3-rcloneview)
- [Migrate Backblaze B2 to Wasabi with RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)

<CloudSupportGrid />
