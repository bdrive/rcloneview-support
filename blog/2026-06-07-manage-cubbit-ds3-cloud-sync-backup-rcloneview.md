---
slug: manage-cubbit-ds3-cloud-sync-backup-rcloneview
title: "Manage Cubbit DS3 Storage — Sync and Backup Files with RcloneView"
authors:
  - jay
description: "Learn how to connect Cubbit DS3 to RcloneView and sync, backup, or manage your geo-distributed European cloud storage from a simple desktop GUI."
keywords:
  - Cubbit DS3 sync
  - Cubbit DS3 backup
  - Cubbit S3-compatible storage
  - RcloneView Cubbit
  - European cloud storage backup
  - geo-distributed object storage
  - Cubbit DS3 setup guide
  - private cloud backup RcloneView
  - S3 compatible storage management
  - Cubbit DS3 file manager
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
  - european-cloud
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Cubbit DS3 Storage — Sync and Backup Files with RcloneView

> RcloneView connects to Cubbit DS3 via the S3 protocol, letting you browse, sync, and back up your geo-distributed European cloud storage without writing a single CLI command.

Cubbit DS3 is a geo-distributed, S3-compatible object storage service built across European nodes. Unlike centralized providers, Cubbit shards and encrypts your data across a network of distributed cells, making it a compelling choice for teams subject to GDPR requirements or those who want private-by-design storage. Because Cubbit DS3 is fully S3-compatible, RcloneView connects to it using the same credential flow as other S3 providers — no special plugins or configuration needed.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Cubbit DS3 to RcloneView

Open RcloneView and go to **Remote tab > New Remote**. Select **Amazon S3** as the remote type, then choose **Cubbit DS3** from the S3 provider list. Enter your Cubbit Access Key ID, Secret Access Key, and the S3 endpoint URL copied from your Cubbit console dashboard. Leave the region blank or use the value recommended in the Cubbit documentation. Click **Save**, and your Cubbit DS3 remote appears as a new tab in the file explorer.

The connection takes effect immediately. You can expand your bucket in the folder tree on the left, browse objects with the detailed list view, or switch to thumbnail view to preview image assets stored in the bucket.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cubbit DS3 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

## Uploading and Managing Files in Cubbit DS3

RcloneView's dual-pane layout makes uploading files to Cubbit DS3 straightforward. Open a local folder in one panel and your Cubbit DS3 bucket in the other. Drag a folder — say, a collection of architecture firm CAD drawings — from the left panel into the Cubbit panel on the right. RcloneView handles concurrent multi-threaded uploads automatically, and the transfer monitor at the bottom shows real-time speed, file count, and progress.

Right-clicking any object in the Cubbit panel exposes the full context menu: Copy, Cut, Delete, Rename, Get Size, and Get Public Link. The **Get Size** option is particularly useful for calculating storage consumption across large bucket folders before deciding on a sync strategy.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Cubbit DS3 bucket in RcloneView" class="img-large img-center" />

## Setting Up Scheduled Sync Jobs to Cubbit DS3

For automated backups, use the **Sync** button in the Home tab to launch the 4-step job wizard. Select your local folder or another cloud remote as the source, and your Cubbit DS3 bucket as the destination. In Step 2, increase the number of concurrent file transfers to take full advantage of Cubbit's distributed bandwidth. In Step 3, apply file-type filters — for example, exclude `.tmp` and `.log` files to keep the backup clean.

PLUS license users unlock Step 4: cron-style scheduling. Set a job to run every night at 3 AM, add a max-file-age filter to sync only recently modified files, and configure email or Slack notifications to confirm each run. This is ideal for a research team that needs automatic nightly snapshots of their dataset archive to a compliant European storage backend.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated sync jobs to Cubbit DS3 in RcloneView" class="img-large img-center" />

## Tracking Transfers with Job History

After each sync run, RcloneView's **Job History** view records execution time, duration, total bytes transferred, transfer speed, and final status. For Cubbit DS3, this audit log is valuable when you need to confirm that a critical backup completed successfully, or when investigating a failed run to identify which files caused errors.

Use the **Dry Run** feature before any destructive operation — it simulates the sync and lists every file that would be copied or deleted, so you can verify scope without touching the bucket.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Cubbit DS3 sync in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Go to **Remote tab > New Remote**, select Amazon S3, and choose Cubbit DS3 as the provider.
3. Enter your Cubbit Access Key, Secret Key, and S3 endpoint from the Cubbit console.
4. Browse your bucket in the file explorer and drag files to start uploading immediately.

With Cubbit DS3 connected to RcloneView, you get a fully visual workflow for geo-distributed European storage — no terminal required.

---

**Related Guides:**

- [Manage Cloudflare R2 Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Manage DigitalOcean Spaces — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Centralize S3, Wasabi, and R2 Storage with RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
