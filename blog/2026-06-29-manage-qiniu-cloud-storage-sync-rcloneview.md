---
slug: manage-qiniu-cloud-storage-sync-rcloneview
title: "Manage Qiniu Cloud Object Storage — Sync and Backup Files with RcloneView"
authors:
  - kai
description: "Connect Qiniu Cloud Kodo object storage to RcloneView and sync, backup, or transfer files across 90+ cloud providers from one GUI on Windows, macOS, and Linux."
keywords:
  - Qiniu Cloud storage sync
  - Kodo object storage GUI
  - RcloneView Qiniu setup
  - Qiniu S3 compatible rclone
  - sync files to Qiniu Cloud
  - Qiniu backup client Windows
  - Qiniu cloud storage manager
  - transfer files Qiniu RcloneView
  - Qiniu Kodo S3 desktop client
  - manage Qiniu buckets GUI
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Qiniu Cloud Object Storage — Sync and Backup Files with RcloneView

> Connect Qiniu Cloud's Kodo object storage to RcloneView's dual-pane interface and handle uploads, backups, and cross-cloud transfers without touching a CLI.

Qiniu Cloud (七牛云) is one of China's leading cloud infrastructure providers, and its Kodo object storage service is widely used for media delivery, application asset management, and large-scale data archiving. Because Kodo implements an S3-compatible API, RcloneView connects to it using the same workflow as Amazon S3, Wasabi, or Cloudflare R2 — no special plugins required. Unlike mount-only tools, RcloneView also syncs and compares folders against Kodo and 90+ other providers on the FREE license, making it a practical single tool for teams with mixed cloud environments.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Qiniu Kodo as an S3 Remote in RcloneView

To add Qiniu Kodo, open the **Remote** tab and click **New Remote**. Select the S3 protocol from the provider list, then choose **Qiniu** as the S3 provider. You will need three credentials from your Qiniu Cloud Console: your **Access Key**, your **Secret Key**, and the **regional endpoint** for the bucket's zone. Once entered, RcloneView saves the configuration to your local rclone config file and the remote appears immediately in the explorer panel.

No separate rclone installation is needed — RcloneView ships with an embedded rclone binary that handles all API communication. If you already manage rclone externally, you can connect RcloneView to that instance instead via Settings > Connect Manager.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Qiniu Cloud S3 remote in RcloneView" class="img-large img-center" />

After saving, your Kodo buckets appear in the panel's tab bar. Click any bucket to browse its contents in the file list, with columns showing name, type, modification date, and size.

## Browsing and Managing Kodo Buckets

RcloneView's dual-pane layout lets you work with Qiniu Kodo alongside any other remote — a local folder, Google Drive, a corporate S3 bucket — in the same window. Drag files from the local panel to the Kodo panel to upload, or in reverse to download. Moving files between two Qiniu remotes (or buckets) copies them directly without routing through your local disk.

For bulk work, use Shift+Click or Ctrl+Click to select multiple objects and then copy, move, or delete them in one action. The Thumbnail view mode is useful when browsing image-heavy Kodo buckets. Before any destructive operation, the **Dry Run** button previews exactly which files would be affected — an important safeguard when cleaning up production assets.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between local storage and Qiniu Kodo buckets in RcloneView" class="img-large img-center" />

## Syncing and Backing Up Files with Qiniu Cloud

RcloneView's 4-step sync wizard configures repeatable jobs against Kodo. In **Step 1**, select Qiniu as either source or destination and pair it with another remote — for example, syncing a local media library to a Kodo bucket for CDN distribution. In **Step 2**, tune parallel transfer count and enable checksum verification to confirm every uploaded object is bit-for-bit identical to its source. **Step 3** offers file-type filters, age ranges, and size limits so you can exclude cache files or restrict syncs to recently modified assets.

With a PLUS license, **Step 4** unlocks cron-style scheduling: configure a nightly backup from a production server directory to Kodo and RcloneView runs it automatically in the background. The **1:N sync** feature lets a single source replicate simultaneously to multiple destinations — useful for distributing the same asset set to Qiniu Kodo and a secondary S3 archive in a single job.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Qiniu Cloud Kodo in RcloneView" class="img-large img-center" />

## Monitoring Transfers and Job History

The **Transferring** tab at the bottom of RcloneView shows live progress for active Kodo jobs: file name, bytes transferred, current speed, and overall completion. For a large initial seed — uploading several hundred gigabytes of video assets to a new bucket, for instance — this live transfer monitoring view eliminates the need for a separate monitoring dashboard.

The **Job History** tab records every completed run with start time, duration, total size, transfer speed, file count, and status. Filter by date range or job type to audit sync activity over weeks or months.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Qiniu Cloud sync runs in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open the **Remote** tab, click **New Remote**, select the S3 protocol, and choose **Qiniu** as the provider.
3. Enter your **Access Key**, **Secret Key**, and regional endpoint from your Qiniu Cloud Console.
4. Create a sync job pointing to your Kodo bucket and run it to back up local files or transfer data between Qiniu and another cloud.

With Qiniu Kodo connected, RcloneView gives you full control over your Chinese cloud object storage from the same interface you use for every other provider.

---

**Related Guides:**

- [Manage Amazon S3 Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Manage Cloudflare R2 Storage — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Manage Wasabi Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
