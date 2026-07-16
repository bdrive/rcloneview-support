---
slug: sync-google-drive-to-amazon-s3-rcloneview
title: "Sync Google Drive to Amazon S3 — Automated Cloud Backup with RcloneView"
authors:
  - jay
description: "Sync Google Drive to Amazon S3 with RcloneView. Set up automated cloud-to-cloud backup jobs, schedule transfers, and monitor progress from one GUI."
keywords:
  - Google Drive to Amazon S3
  - sync Google Drive to S3
  - backup Google Drive to S3
  - RcloneView Google Drive S3
  - cloud to cloud sync
  - Amazon S3 backup
  - Google Drive backup
  - automated cloud backup
  - cloud storage migration
  - rclone Google Drive S3
tags:
  - google-drive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Google Drive to Amazon S3 — Automated Cloud Backup with RcloneView

> Backing up Google Drive to Amazon S3 creates an independent copy of your data on separate cloud infrastructure — RcloneView turns this into a set-and-forget workflow.

Google Drive is excellent for collaboration, but relying on it as your only copy of critical files is a risk most teams shouldn't take. Amazon S3 provides durable, affordable object storage that complements Google Drive as an independent backup destination. With RcloneView's GUI-driven job system, a content team managing 200 GB of shared project files can establish automated cloud-to-cloud backups in minutes — no rclone commands required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Google Drive and Amazon S3 in RcloneView

Both remotes need to be configured before creating the sync job. In RcloneView, click **Remote tab > New Remote**. For Google Drive, select it from the provider list — a browser window opens for OAuth authentication. Sign in and grant access; the remote is saved automatically with no API keys to manage manually.

For Amazon S3, select **Amazon S3** as the provider, then enter your **Access Key ID**, **Secret Access Key**, and the **Region** of your S3 bucket (e.g., `us-east-1`). RcloneView stores all credentials securely in encrypted local storage. Once both remotes are saved, each appears as a tab in the explorer panels, ready to browse.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## Configuring the Cloud-to-Cloud Sync Job

Click **Home tab > Sync** to open the job wizard. Set Google Drive — or a specific subfolder like `My Drive/Projects` — as the source, and an S3 bucket prefix (e.g., `my-backup-bucket/google-drive/`) as the destination. Name the job something descriptive, such as `gdrive-to-s3-daily`.

In **Advanced Settings**, enable **checksum verification** to compare files by hash rather than size alone — this catches files that share the same size but have different content due to partial overwrites. Set the concurrent transfer count to match your network capacity; 4–8 transfers suits most broadband connections without triggering Google Drive rate limits.

The **Filtering** step provides precise control over what syncs: exclude large video files if you only need document backups, or limit to files modified within the last 90 days using the Max File Age field.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

## Running and Monitoring the Transfer

Before the first full sync, use the built-in **Dry Run** to preview exactly which files will be copied or deleted on the destination. This is especially valuable on initial setup when the S3 bucket is empty and you want to confirm the job configuration before committing gigabytes of data.

Click **Run** when ready. The **Transferring** tab at the bottom of RcloneView shows live progress: speed, file count, and percentage complete. For large Google Drive libraries with tens of thousands of files, the initial sync may take several hours — subsequent runs transfer only changed files and complete much faster.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to S3 transfer progress in RcloneView" class="img-large img-center" />

## Scheduling Daily Automated Backups

With a **PLUS license**, open the job in **Job Manager** and add a schedule using the cron-style interface — for example, daily at 1 AM. The **Simulate Schedule** tool previews the next ten execution times so you can confirm the backup fires at the right moment. Once saved, the backup runs automatically whether or not the RcloneView window is open.

After every run, **Job History** records duration, transfer speed, file count, and completion status, giving you a clear audit trail of every Google Drive backup pushed to S3.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive to Amazon S3 backup in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add a Google Drive remote via OAuth login under **Remote tab > New Remote**.
3. Add an Amazon S3 remote with your AWS Access Key ID, Secret Key, and bucket region.
4. Create a sync job: source = Google Drive folder, destination = S3 bucket prefix, then run or schedule it.

Your Google Drive data is now independently backed up on AWS infrastructure — protected against accidental deletion, account suspension, or service outages on either platform.

---

**Related Guides:**

- [Incremental Backup: Google Drive to Amazon S3 with RcloneView](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Mount Amazon S3 Buckets as Local Drives with RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
