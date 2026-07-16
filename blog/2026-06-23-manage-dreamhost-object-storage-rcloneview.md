---
slug: manage-dreamhost-object-storage-rcloneview
title: "Manage DreamHost DreamObjects — Sync and Backup Files with RcloneView"
authors:
  - robin
description: "Connect DreamHost DreamObjects to RcloneView for visual S3-compatible bucket management, file sync, and automated backups without writing a single CLI command."
keywords:
  - DreamHost DreamObjects
  - DreamObjects S3 storage
  - DreamHost cloud backup
  - S3 compatible storage management
  - sync files to DreamObjects
  - DreamHost object storage RcloneView
  - cloud backup web developers
  - S3 cloud storage GUI
  - DreamHost file sync
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage DreamHost DreamObjects — Sync and Backup Files with RcloneView

> DreamHost DreamObjects is a cost-effective S3-compatible object store—RcloneView gives you a visual way to browse buckets, sync files, and schedule backups without touching the command line.

DreamHost DreamObjects pairs naturally with DreamHost-hosted websites: it stores backups, media assets, and static files on redundant hardware behind an S3-compatible API. Teams that already host on DreamHost can extend that investment into structured cloud backups by connecting DreamObjects to RcloneView and managing everything from a two-pane file explorer. Connect S3, Azure, or Backblaze B2 with full read/write access on the FREE license, and DreamObjects is no exception.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why DreamObjects Deserves a Dedicated Workflow

Web agencies maintaining dozens of client projects accumulate gigabytes of uploaded media, database exports, and build artifacts that need regular offsite copies. DreamObjects provides that offsite target without a separate cloud account from a provider that knows nothing about hosting. Storing nightly exports to DreamObjects alongside the live site means that when a migration or accidental deletion happens, recovery is a matter of pulling from the same provider relationship, not scrambling across vendors.

Because DreamObjects is S3-compatible, RcloneView connects to it using the same S3 remote type it uses for Amazon S3, Cloudflare R2, Wasabi, and dozens of other object stores. If you have configured any S3-style remote before, the DreamObjects setup path will be immediately familiar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new DreamHost DreamObjects S3 remote in RcloneView using Access Key and endpoint credentials" class="img-large img-center" />

## Connecting DreamObjects to RcloneView

Open RcloneView and go to the **Remote** tab, then click **New Remote**. Select the **S3** remote type and enter your DreamObjects Access Key ID, Secret Access Key, and bucket endpoint URL from the DreamHost panel. After saving, the new remote appears in the Remote Manager and is immediately available as a panel in the Explorer.

Browsing DreamObjects from the Explorer feels like navigating a local drive: file names, sizes, and modification dates are all visible. You can create folders, upload files by dragging them from your local panel, delete objects with a right-click, and generate public links for objects that need to be shared. There is no need to log in to the DreamHost web panel each time you need to inspect or move files.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from a local folder into a DreamObjects bucket using RcloneView drag-and-drop upload" class="img-large img-center" />

## Syncing and Backing Up to DreamObjects

For recurring backups, create a Sync job from the **Home** tab wizard. Select a local project folder or another cloud remote as the source, and your DreamObjects bucket path as the destination. Before committing, enable **Dry Run** to preview every file that will be transferred—especially useful when syncing a large media library for the first time, since the preview catches oversized files or naming issues without moving any data.

Once satisfied, save the job to the Job Manager and execute it on demand. PLUS license users can attach a cron-style schedule so DreamObjects backups run automatically each night. The **Job History** tab records every execution with file count, transfer speed, total size, and final status, providing an audit trail that is useful for client reporting or compliance reviews.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to a DreamHost DreamObjects bucket from the RcloneView Job Manager" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history tab in RcloneView showing completed DreamObjects backup transfer records" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Go to **Remote** > **New Remote**, choose **S3**, and enter your DreamObjects Access Key, Secret Key, and endpoint from the DreamHost panel.
3. Open the new remote in an Explorer panel and drag files in to upload directly.
4. Create a Sync job in the **Home** tab, run a Dry Run first, then execute and review results in **Job History**.

Consistent DreamObjects backups protect web projects against accidental deletion, hosting migrations, and data loss events—without requiring CLI expertise or a separate monitoring setup.

---

**Related Guides:**

- [Manage Cloudflare R2 Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Manage Amazon S3 — Cloud Sync & Backup with RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Manage Wasabi Cloud Sync & Backup with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
