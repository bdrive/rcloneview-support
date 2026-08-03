---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Manage Magalu Cloud Storage — Sync and Backup Files with RcloneView"
authors:
  - jay
description: "Connect Magalu Cloud object storage to RcloneView for drag-and-drop file management, scheduled sync, and cross-cloud backup workflows."
keywords:
  - magalu cloud storage
  - magalu object storage
  - s3 compatible storage gui
  - rcloneview magalu
  - object storage backup
  - cloud sync gui
  - multi-cloud file explorer
  - s3 compatible manager
  - magalu backup
  - brazil cloud storage
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

# Manage Magalu Cloud Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Magalu Cloud object storage from the same window you use for every other cloud you already manage.

Magalu Cloud is an S3-compatible object storage service, which means it works with any tool built on the S3 protocol — including rclone. RcloneView wraps that protocol support in a visual file explorer, so teams already using Magalu buckets for application data or backups don't need to memorize `s3cmd` flags or juggle a separate console tab just to move files around. Connect a bucket once and it behaves like every other remote in the app.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Magalu Cloud as a Remote

Because Magalu Cloud speaks the S3 protocol, RcloneView connects to it the same way it connects to Amazon S3, Wasabi, or Backblaze B2: through the S3-compatible remote type. Open **New Remote**, choose the S3-compatible option, and supply your Access Key, Secret Key, and the Magalu Cloud endpoint URL for your region. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so a Magalu bucket sits right alongside your existing Google Drive, OneDrive, or on-premise NAS connections.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

Once the remote is saved, it appears as a tab in the Explorer panel with full folder-tree navigation, thumbnail previews for image-heavy buckets, and the same right-click operations (copy, cut, rename, delete) available for local files.

## Syncing Magalu Buckets with Other Storage

Object storage rarely lives in isolation — most teams pair it with another cloud for redundancy or with local infrastructure for staging. RcloneView's Sync wizard lets you set a Magalu bucket as either source or destination, choose one-way or bidirectional sync direction, and apply filters like max file size or file age before anything transfers.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between a Magalu Cloud bucket and another remote" class="img-large img-center" />

Run a **Dry Run** first to preview exactly which objects will be copied or removed — a useful check before mirroring a production bucket to a backup destination for the first time.

## Automating Recurring Backups

For buckets that change daily, manual transfers don't scale. Save your Magalu sync configuration as a Job, then use the scheduling step (PLUS license) to define a crontab-style recurrence — nightly, weekly, or on a custom interval.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for a Magalu Cloud bucket" class="img-large img-center" />

Every run is logged in Job History with status, transfer speed, and file counts, so you can confirm a scheduled backup actually completed rather than assuming it did.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generate an Access Key and Secret Key for your Magalu Cloud account and note your region's endpoint.
3. Add Magalu Cloud as a new S3-compatible remote in RcloneView.
4. Set up a sync job — with a Dry Run first — to connect it to your backup or secondary storage destination.

Treating an S3-compatible bucket as just another folder in your file manager removes the friction that usually keeps object storage siloed from the rest of your workflow.

---

**Related Guides:**

- [Manage Wasabi Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Manage Cloudflare R2 Storage with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Manage IDrive e2 Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
