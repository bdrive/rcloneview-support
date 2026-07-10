---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "Manage Selectel Object Storage — Sync and Backup Files with RcloneView"
authors:
  - jay
description: "Connect Selectel S3-compatible object storage in RcloneView to browse, sync, and back up files with full read/write access on the FREE license."
keywords:
  - Selectel object storage
  - Selectel RcloneView
  - Selectel cloud sync
  - S3-compatible storage GUI
  - Selectel backup tool
  - manage Selectel cloud storage
  - Selectel rclone
  - object storage sync software
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Selectel Object Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Selectel object storage buckets alongside 90+ other cloud providers in one RcloneView window.

Selectel is an S3-compatible object storage provider, and RcloneView connects to it the same way it connects to any other S3-compatible endpoint — no separate plugin or proprietary client required. Teams already running workloads on Selectel buckets can now manage, sync, and back up that data through the same explorer panels they use for Google Drive, Dropbox, or Amazon S3. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license, and Selectel buckets get the identical treatment.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Adding Selectel as a Remote

Selectel storage is added through RcloneView's S3-compatible remote type, the same setup path used for Wasabi, MinIO, or DigitalOcean Spaces. From the Remote tab, click New Remote, choose an S3-compatible connection, and supply your Selectel Access Key ID, Secret Access Key, and the Selectel endpoint URL for your storage region. Once saved, the bucket appears as a new tab in the Explorer panel, with full folder tree navigation, thumbnail previews for image files, and the same right-click file operations available on every other remote.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## Browsing and Managing Selectel Buckets

Once connected, Selectel buckets behave like any local or cloud folder inside RcloneView. Switch between List, Tree, or Thumbnail view depending on whether you're managing configuration files or a folder of product images. The footer summary shows total file and folder counts plus overall size, which is useful for keeping tabs on how a bucket is growing over time without switching to a separate storage dashboard. Multi-selection with Ctrl+Click or Shift+Click works exactly as it does on local drives, so batch renames, deletes, and downloads move at the same pace regardless of which remote you're touching.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing files inside a Selectel bucket in RcloneView Explorer" class="img-large img-center" />

## Syncing Selectel with Other Storage

Because Selectel is just another remote to RcloneView's sync engine, it can be a source or destination in any Sync, Copy, or Move job. Set up a one-way sync job from a local backup folder to a Selectel bucket, or mirror content between Selectel and a second S3-compatible provider for redundancy. The 4-step sync wizard lets you tune transfer concurrency, enable checksum verification, and apply filters (by file type, age, or size) before the job ever moves a byte — and a Dry Run pass shows exactly what would change first.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job with a Selectel bucket as destination" class="img-large img-center" />

## Verifying Transfers with Folder Compare

Before trusting a new Selectel sync pipeline, run a Folder Compare between the source and the bucket. RcloneView highlights left-only, right-only, and different files side by side, so you can confirm a migration finished cleanly or spot files that failed to transfer before they become a support ticket. Job History then keeps a permanent record of every sync — start time, duration, transfer speed, and file count — for auditing later.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing local folder against a Selectel bucket in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generate an Access Key and Secret Key for your Selectel storage container.
3. Add Selectel as a new S3-compatible remote using your keys and endpoint.
4. Run a Dry Run sync job to confirm behavior before syncing production data.

Selectel buckets don't need to sit in an isolated workflow — folded into RcloneView alongside your other remotes, they become just one more tab in a single, unified file manager.

---

**Related Guides:**

- [Manage Hetzner Object Storage — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [Centralize S3, Wasabi, and R2 with RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Manage IDrive e2 Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
