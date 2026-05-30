---
slug: manage-cubbit-ds3-cloud-sync-rcloneview
title: "Manage Cubbit DS3 Storage — Sync and Backup Files with RcloneView"
authors:
  - jay
description: "Learn how to connect Cubbit DS3 distributed object storage to RcloneView and sync, backup, and transfer your files with a full GUI experience."
keywords:
  - Cubbit DS3 cloud storage
  - Cubbit DS3 RcloneView
  - distributed object storage sync
  - S3-compatible storage GUI
  - Cubbit DS3 backup
  - sync files to Cubbit
  - RcloneView S3 storage
  - multi-cloud object storage
  - object storage backup tool
  - cloud sync GUI tool
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - object-storage
  - s3-compatible
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Cubbit DS3 Storage — Sync and Backup Files with RcloneView

> Cubbit DS3 brings distributed, S3-compatible object storage to the table — and RcloneView makes it simple to sync, backup, and browse your data without touching the command line.

Cubbit DS3 is a geo-distributed object storage service that uses a decentralized architecture to store your data across a network of nodes. Because it exposes a fully S3-compatible API, you can connect it directly to RcloneView and manage your buckets exactly as you would with Amazon S3 or Cloudflare R2 — with the same GUI-based workflow, scheduled jobs, and live transfer monitoring.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Adding Cubbit DS3 as a Remote in RcloneView

To get started, you need three credentials from your Cubbit DS3 dashboard: an **Access Key ID**, a **Secret Access Key**, and the **endpoint URL** for your region. Once you have those, open RcloneView and go to **Remote tab → New Remote**, then select the **S3** provider type from the list.

In the provider configuration screen, choose **Cubbit** (or enter the custom endpoint manually), then paste your Access Key ID, Secret Access Key, and the Cubbit DS3 endpoint. RcloneView stores these credentials in your local rclone configuration file, encrypted with your config password if one is set.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Cubbit DS3 remote in RcloneView" class="img-large img-center" />

After saving, the remote appears immediately in the Explorer panel. Click on it to browse your buckets and folders. You can open multiple panels side by side — for instance, put Cubbit DS3 on the left and Google Drive on the right — and drag files between them to initiate a transfer.

## Syncing Files to Cubbit DS3 with Scheduled Jobs

RcloneView's job system is where Cubbit DS3 becomes genuinely powerful for backup workflows. From the **Home tab → Job Manager**, create a new sync job with your local folder or another cloud remote as the source and a Cubbit DS3 bucket as the destination. The 4-step wizard walks you through source/destination selection, transfer concurrency settings, file filters, and scheduling.

A photography studio with 2 TB of RAW files, for example, could configure a nightly sync job that pushes only files modified in the last 24 hours (using the **Max file age** filter with `1d`) to a dedicated Cubbit DS3 bucket. With multi-threaded transfers enabled (default 4 streams), large file sets upload efficiently without manually batching anything.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job to Cubbit DS3 in RcloneView" class="img-large img-center" />

Scheduling requires a **PLUS license** and uses crontab-style configuration — you set the minute, hour, day of week, and day of month fields independently. The built-in schedule simulator shows you the next N execution times before you save, so you can confirm the timing is correct.

## Monitoring Transfers and Reviewing Job History

Once a job is running, the **Transferring tab** at the bottom of RcloneView shows live progress: files transferred, speed, total size, and an estimated time remaining. You can cancel a running job from this panel without losing the files already transferred — the next run will pick up where it left off thanks to rclone's incremental sync logic.

After each run, the full execution record appears in **Job History**. Each entry shows start time, duration, total bytes transferred, transfer speed, and final status (Completed, Errored, or Canceled). For Cubbit DS3 jobs specifically, keeping an eye on error counts helps catch rate-limit or connectivity issues early.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Cubbit DS3 sync runs" class="img-large img-center" />

If you want to verify that the destination matches the source before committing a large migration, use the **Compare** feature from the Home tab. It lists files that exist only on one side, files with different sizes, and identical files — giving you a clear picture of sync state without running a full transfer.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Retrieve your Cubbit DS3 Access Key ID, Secret Access Key, and endpoint from the Cubbit dashboard.
3. Open **Remote tab → New Remote**, select S3 provider, and enter your Cubbit credentials.
4. Create a sync job in **Job Manager** with your source folder and Cubbit DS3 bucket as destination.

With RcloneView handling the scheduling and monitoring, your Cubbit DS3 bucket becomes a fully automated backup destination that runs quietly in the background.

---

**Related Guides:**

- [Manage Cloudflare R2 Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Manage Wasabi Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Manage Backblaze B2 Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
