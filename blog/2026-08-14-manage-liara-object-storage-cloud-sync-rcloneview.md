---
slug: manage-liara-object-storage-cloud-sync-rcloneview
title: "Manage Liara Object Storage — Sync and Backup Files with RcloneView"
authors:
  - robin
description: "Connect Liara S3-compatible object storage to RcloneView for cross-platform browsing, sync, backup, and mounting in one GUI."
keywords:
  - Liara RcloneView
  - Liara object storage
  - S3-compatible object storage
  - Liara backup
  - Liara sync
  - mount Liara storage
  - object storage GUI
  - Liara file management
  - cloud storage manager
  - Liara bucket sync
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

# Manage Liara Object Storage — Sync and Backup Files with RcloneView

> Bring Liara buckets into the same explorer window as every other cloud you already manage.

Liara is an S3-compatible object storage service, and RcloneView connects to it the same way it connects to Amazon S3, Wasabi, or any other S3-protocol provider — through an Access Key, a Secret Key, and an endpoint. Once the remote is added, Liara buckets appear as a regular tab in the file explorer, ready to browse, transfer, and schedule alongside local disks and other cloud accounts.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Liara as a New Remote

Open Remote Manager from the Remote tab and click New Remote. Since Liara is accessed through rclone's S3 protocol, select the S3-compatible option and enter the Access Key, Secret Key, and endpoint URL from your Liara console. There's no OAuth browser step to complete — once the test connection succeeds, the bucket shows up in your tab bar just like any other remote.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView mounts and syncs 90+ providers from one window, on Windows, macOS, and Linux — Liara doesn't need a separate client or a different workflow than the rest of your cloud accounts.

## Browsing, Transferring, and Syncing Buckets

Split your explorer into two panels — one showing local files or another cloud, the other showing your Liara bucket — and drag files between them. Moving files within the same remote performs a move, while dragging between different remotes performs a copy, so you can stage backups into Liara without disturbing the source folder.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between a local folder and a Liara bucket" class="img-large img-center" />

For recurring jobs, use the 4-step Sync wizard: choose source and destination, tune concurrent transfer counts and equality checkers under Advanced Settings, then apply file-type, size, or age filters before saving. Run a Dry Run first to preview exactly what will be copied or deleted before committing to a live sync.

## Scheduling Backups and Monitoring Jobs

Once a sync job is saved in Job Manager, PLUS-license users can attach a crontab-style schedule so Liara backups run automatically on a fixed cadence, with a preview of upcoming execution times before saving.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting a recurring backup schedule for a Liara sync job" class="img-large img-center" />

Every run — manual or scheduled — is recorded in Job History with status, transfer speed, file count, and total size, so you can confirm a Liara backup completed cleanly or catch a failed run to retry.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generate an Access Key and Secret Key from your Liara console and note the endpoint URL.
3. Add Liara as a new S3-compatible remote in Remote Manager and test the connection.
4. Run a Dry Run sync before scheduling recurring backups to your Liara bucket.

With Liara connected, your object storage sits next to every other cloud you manage — one explorer, one set of sync jobs, no separate client to maintain.

---

**Related Guides:**

- [Manage Petabox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-petabox-cloud-sync-backup-rcloneview)
- [Manage Scaleway Object Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Manage Wasabi Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
