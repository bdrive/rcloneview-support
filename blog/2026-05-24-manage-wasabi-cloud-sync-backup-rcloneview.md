---
slug: manage-wasabi-cloud-sync-backup-rcloneview
title: "Manage Wasabi Cloud Storage — Sync and Backup Files with RcloneView"
authors:
  - casey
description: "Learn how to connect Wasabi hot cloud storage to RcloneView and automate file sync, backup, and transfers with a simple GUI interface."
keywords:
  - wasabi cloud storage rcloneview
  - wasabi s3 sync gui
  - backup files to wasabi
  - wasabi rclone gui
  - manage wasabi storage
  - wasabi backup automation
  - wasabi object storage sync
  - wasabi hot cloud storage
  - s3 compatible backup tool
  - wasabi file transfer rcloneview
tags:
  - RcloneView
  - wasabi
  - cloud-storage
  - cloud-sync
  - backup
  - object-storage
  - s3-compatible
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Wasabi Cloud Storage — Sync and Backup Files with RcloneView

> Wasabi's S3-compatible hot cloud storage pairs naturally with RcloneView — giving you a visual, job-driven workflow for syncing and backing up files without writing a single CLI command.

Wasabi is a high-performance, S3-compatible object storage service built for workloads that demand frequent access at low cost. Whether you're a video production team archiving finished projects, a developer protecting build artifacts, or a business securing critical documents, Wasabi delivers consistent performance — and RcloneView makes it easy to manage from a familiar desktop interface.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Wasabi to RcloneView

Adding Wasabi as a remote takes under two minutes. Because Wasabi is S3-compatible, you configure it using an Access Key ID, Secret Access Key, and the endpoint URL matching your bucket's region — all available from your Wasabi console.

Open the **Remote** tab in RcloneView and click **New Remote**. Select Amazon S3 as the storage type, then choose Wasabi from the provider list. Enter your credentials and set the correct regional endpoint (for example, `s3.wasabisys.com` for US East 1). Once saved, your Wasabi buckets appear in the file explorer panel alongside every other configured remote. RcloneView ships with an embedded rclone binary, so no separate rclone installation is required.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Wasabi S3-compatible remote in RcloneView" class="img-large img-center" />

## Syncing and Backing Up Files to Wasabi

The sync job wizard walks you through four steps. Select your source — a local folder, a NAS share, or another cloud provider — and set your Wasabi bucket as the destination. In Step 2, configure concurrent file transfers and enable **checksum verification** to confirm each transferred file's integrity using hash plus size comparison.

For a photography studio managing 2 TB of RAW files, a typical setup syncs a NAS source folder to Wasabi each night. Before the first real run, use **dry run** mode to preview exactly which files will be copied or removed — no changes are made until you confirm the job looks correct.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop file upload to Wasabi in RcloneView" class="img-large img-center" />

PLUS license holders can schedule sync jobs using crontab-style rules across minute, hour, day, and month fields, so Wasabi backups run automatically on a defined cadence. Every execution is recorded in the **Job History** tab with status, speed, file count, and total transfer size.

## Monitoring Transfers in Real Time

Active Wasabi transfers appear in the **Transferring** tab at the bottom of the screen, showing per-file progress, overall speed, and a running count of completed files. You can cancel any running job from this panel without affecting already-transferred data.

Drag and drop also works directly with Wasabi: drag files from Windows Explorer or macOS Finder onto the RcloneView Wasabi panel to upload them instantly. Dragging from a different remote panel into the Wasabi panel triggers a cloud-to-cloud copy.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Wasabi uploads in RcloneView" class="img-large img-center" />

## Mounting a Wasabi Bucket as a Local Drive

RcloneView's **Mount Manager** lets you mount any Wasabi bucket as a drive letter on Windows or a mount point on macOS and Linux. Once mounted, any application can read and write to Wasabi as if it were a local disk. The default VFS cache mode of **writes** works well for most workflows; switch to **full** if your workload requires read caching too.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Wasabi bucket as a local drive in RcloneView Mount Manager" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open the Remote tab, click **New Remote**, choose Amazon S3, and select Wasabi as the provider.
3. Enter your Access Key ID, Secret Access Key, and the regional endpoint for your Wasabi bucket.
4. Create a sync job from your source to the Wasabi bucket, run a dry run first, then schedule it for automated backups.

Wasabi's always-hot storage model keeps your files immediately accessible — and with RcloneView's scheduled jobs and real-time monitoring, your backup workflow practically runs itself.

---

**Related Guides:**

- [Manage Amazon S3 Cloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Migrate OneDrive to Wasabi — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Centralize S3, Wasabi, and R2 with RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
