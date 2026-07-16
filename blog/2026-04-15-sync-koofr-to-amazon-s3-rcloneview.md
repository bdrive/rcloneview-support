---
slug: sync-koofr-to-amazon-s3-rcloneview
title: "Sync Koofr to Amazon S3 — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Sync Koofr to Amazon S3 with RcloneView — transfer files between European cloud storage and AWS S3 using a reliable GUI built on rclone."
keywords:
  - Koofr to Amazon S3 sync
  - Koofr backup to S3
  - cloud sync tool
  - RcloneView Koofr
  - S3 archiving
  - cloud-to-cloud sync
  - AWS backup
  - European cloud to S3
  - Koofr rclone sync
  - GDPR cloud to S3
tags:
  - koofr
  - amazon-s3
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Koofr to Amazon S3 — Cloud Backup with RcloneView

> Koofr's European-hosted storage and Amazon S3's global durability serve complementary roles — RcloneView syncs between them directly, creating a cross-provider backup strategy without local disk overhead.

Koofr's European data centers and GDPR-compliant infrastructure make it a strong active storage platform, while Amazon S3 delivers world-class durability and CDN integration for archiving and distribution. Syncing between them creates a robust two-tier strategy: keep working data in Koofr's European data centers while archiving to S3 for long-term cost optimization. RcloneView handles the sync directly between both remotes without touching your local disk.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Both Remotes

In RcloneView, add Koofr via **Remote tab > New Remote > Koofr** and enter your credentials. Then add **Amazon S3**: select it from the provider list and enter your Access Key ID, Secret Access Key, and AWS Region. With both remotes active, open the dual-panel explorer — Koofr on one side, your S3 bucket on the other — for a side-by-side view of your storage.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Amazon S3 remotes in RcloneView" class="img-large img-center" />

This direct comparison is useful for planning: review what's in Koofr, confirm the S3 bucket structure you want, and verify folder names before starting the sync job.

## Configuring the Sync Job

In **Job Manager**, create a sync job from your Koofr folder to the target S3 bucket path. For a compliance team backing up sensitive documents from Koofr to S3 Standard-IA for cost-efficient retention, the sync job runs weekly using scheduling (PLUS license).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Amazon S3 sync job in RcloneView" class="img-large img-center" />

RcloneView's filtering options let you restrict the sync to specific file types — for example, syncing only `.pdf` and `.docx` files while excluding temporary files and thumbnails. **Max File Age** filtering further limits syncs to recently modified files, keeping incremental runs fast and focused.

## Monitoring and Verification

After the initial sync, subsequent runs only transfer changes — RcloneView compares file sizes and modification dates to identify differences. The **Job History** tab shows each sync's outcome with bytes transferred, file count, duration, and status.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to S3 sync runs in RcloneView" class="img-large img-center" />

For organizations maintaining Koofr as their GDPR-compliant primary storage and S3 as an archival tier, this sync pattern creates a clear data lifecycle: active in Koofr, archived to S3 on a schedule. The **Folder Compare** feature provides point-in-time verification that both platforms are in sync when needed.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add **Koofr** remote (credentials) and **Amazon S3** remote (Access Key).
3. Create a sync job in **Job Manager** from Koofr to S3.
4. Enable scheduling (PLUS) to automate regular backups.

RcloneView turns a two-cloud architecture into a managed, automated workflow — Koofr for compliance, S3 for archiving, with syncs keeping both current.

---

**Related Guides:**

- [Manage Koofr Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr as Multi-Cloud Hub — Google Drive, OneDrive, Dropbox with RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Backup Dropbox to AWS S3 with RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
