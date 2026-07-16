---
slug: sync-hidrive-to-amazon-s3-rcloneview
title: "Sync HiDrive to Amazon S3 — Cloud Backup with RcloneView"
authors:
  - morgan
description: "Learn how to sync and back up HiDrive files to Amazon S3 with RcloneView. Transfer files between European and global cloud storage using a simple GUI."
keywords:
  - HiDrive to Amazon S3
  - RcloneView HiDrive backup
  - sync HiDrive S3
  - HiDrive cloud backup
  - transfer HiDrive to AWS
  - cloud-to-cloud backup RcloneView
  - HiDrive migration to S3
  - Amazon S3 backup tool
  - cross-cloud file transfer
  - HiDrive file sync
tags:
  - hidrive
  - amazon-s3
  - cloud-to-cloud
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync HiDrive to Amazon S3 — Cloud Backup with RcloneView

> Back up your HiDrive storage to Amazon S3 using RcloneView's visual sync tools — no CLI required, with scheduling, filtering, and live transfer monitoring built in.

HiDrive, Strato's European cloud platform, is popular with businesses that prioritize GDPR-compliant storage. Amazon S3, meanwhile, is the benchmark for object storage durability and ecosystem integration — a natural secondary backup destination for anything mission-critical. Using RcloneView, you can connect both providers in a single interface and run automated, filtered sync jobs that keep your S3 buckets aligned with your HiDrive folders without writing a single command.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting HiDrive and Amazon S3 in RcloneView

HiDrive uses OAuth for authentication, meaning RcloneView opens a browser tab where you log into your Strato account and grant access — no API key management required. Go to **Remote > New Remote**, choose **HiDrive**, and complete the browser login. Your HiDrive folder tree appears in the file explorer immediately.

For Amazon S3, go to **Remote > New Remote** again, select **Amazon S3**, and enter your AWS Access Key ID, Secret Access Key, and the target region. If you want least-privilege access, create a dedicated IAM user in the AWS console with write permissions scoped only to the destination bucket, then enter those credentials in RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting HiDrive and Amazon S3 as remotes in RcloneView" class="img-large img-center" />

Once both remotes are registered, open two panels side by side in RcloneView's dual-pane explorer — HiDrive on the left, S3 on the right — to compare folder contents visually before committing to a full sync.

## Building the HiDrive-to-S3 Sync Job

With both remotes connected, go to **Home > Sync** to open the job wizard. Set your HiDrive folder as the source and your S3 bucket (with an optional subfolder prefix) as the destination. In the Advanced Settings step, configure concurrent transfer threads to match your available bandwidth — higher values accelerate bulk transfers for flat file structures, while lower values are safer on connections with strict rate limits.

In the Filtering step you can exclude irrelevant files by type (e.g., `.tmp`, `.part`) or by age — for example, only syncing files modified in the last 90 days using the **Max file age** filter (`90d`). This keeps the job focused and reduces unnecessary API calls against both endpoints.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

Before running for the first time, always click **Dry Run** to preview the exact file list that would be transferred or deleted — an essential step when syncing from a populated HiDrive account to a new S3 bucket, where the one-way sync direction must be correct before any data moves.

## Scheduling Automated Backups

For ongoing protection, PLUS license users can schedule the HiDrive-to-S3 job to run automatically on a crontab-style schedule. Common configurations include nightly full syncs at 2 AM and hourly incremental runs during business hours. The schedule simulator in Step 4 of the job wizard previews the next 10 execution times before you commit to saving.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated HiDrive to S3 backup in RcloneView" class="img-large img-center" />

Once running unattended, the **Transferring** tab shows live transfer speed and file counts for each scheduled execution, while **Job History** logs every run with its outcome, bytes transferred, and any error details — a complete audit trail for backup accountability.

## Validating Sync Completeness with Folder Compare

After the first sync completes, use RcloneView's **Folder Compare** feature to verify that HiDrive and S3 are genuinely in sync. Open both folders in the compare view; RcloneView highlights left-only, right-only, and size-different files — letting you spot missing or mismatched items without manually cross-checking file lists. For high-stakes archives, enable **checksum** comparison in the sync job's Advanced Settings to verify file integrity by hash rather than size alone.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Amazon S3 folder contents in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your HiDrive account via **Remote > New Remote > HiDrive** using OAuth browser login.
3. Add your Amazon S3 bucket via **Remote > New Remote > Amazon S3** with your IAM credentials.
4. Create a sync job from HiDrive to S3 in **Home > Sync**, run a Dry Run first, then execute.

With automated scheduling enabled, your HiDrive files flow into S3 on your schedule — giving you a cross-provider backup without ongoing manual effort.

---

**Related Guides:**

- [Manage HiDrive Cloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Manage Amazon S3 — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Sync HiDrive to Google Drive — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-google-drive-rcloneview)

<CloudSupportGrid />
