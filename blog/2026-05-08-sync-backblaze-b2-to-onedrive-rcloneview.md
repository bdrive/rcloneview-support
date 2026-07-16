---
slug: sync-backblaze-b2-to-onedrive-rcloneview
title: "Sync Backblaze B2 to OneDrive — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Learn how to sync or migrate files from Backblaze B2 object storage to Microsoft OneDrive using RcloneView — a GUI-based approach with scheduled automation support."
keywords:
  - Backblaze B2 to OneDrive sync
  - migrate Backblaze B2 OneDrive RcloneView
  - Backblaze B2 OneDrive transfer
  - B2 to OneDrive migration guide
  - cloud storage sync tool
  - Backblaze B2 backup OneDrive
  - OneDrive from B2 migration
  - rclone B2 OneDrive GUI
tags:
  - backblaze-b2
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Backblaze B2 to OneDrive — Cloud Backup with RcloneView

> Pull selected files from Backblaze B2 cold storage into OneDrive for active use — or migrate your entire B2 bucket to OneDrive with a single RcloneView job.

Backblaze B2 is an excellent archive and backup target, but its S3-compatible API isn't designed for day-to-day collaboration. If your team needs to access files in Microsoft 365, share documents via SharePoint, or simply move data from B2 into a more accessible location, syncing to OneDrive is the answer. RcloneView makes the transfer straightforward with a visual job builder and real-time monitoring.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Backblaze B2 and OneDrive

In RcloneView, open **Remote tab → New Remote** and add Backblaze B2 first. Enter your Application Key ID and Application Key, then specify the bucket name. For OneDrive, select it from the provider list and complete OAuth browser login with your Microsoft account. Once both remotes are saved, open them side by side in the dual-pane explorer.

Browse your B2 bucket on the left and your OneDrive on the right. You can navigate deep into folder hierarchies on both sides and compare file counts before starting any transfer. This visual confirmation step prevents surprises during large migrations.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Backblaze B2 and OneDrive remotes in RcloneView" class="img-large img-center" />

## Configuring and Running the Sync Job

Click **Sync** in the Home tab to open the job wizard. Set the Backblaze B2 path as the source and the OneDrive destination folder as the target. In Step 2, configure the number of concurrent transfers — OneDrive has API rate limits, so starting with 4–8 concurrent transfers is safer than maxing out. Enable checksum comparison if data integrity is critical for your use case.

Use the **Dry Run** option before committing to the full transfer. This is especially useful if you're syncing selectively — for example, pulling only the last 90 days of files from B2 by setting a **Max file age** filter in Step 3. Once the dry run output looks correct, run the live job.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="B2 to OneDrive sync job in progress in RcloneView" class="img-large img-center" />

## Scheduling Regular Pulls from B2

Some workflows call for a recurring sync from B2 to OneDrive — for example, pulling newly archived reports from B2 into a OneDrive folder every morning so team members can access them through the Microsoft 365 interface. With a PLUS license, RcloneView's crontab scheduler handles this automatically. Set the schedule in Step 4 of the job wizard, choosing the days and times that fit your workflow.

The **Job History** tab records every run, so you can confirm each scheduled sync completed successfully and check how much data moved.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Backblaze B2 to OneDrive sync" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Backblaze B2 (Application Key) and OneDrive (OAuth) as remotes.
3. Create a Sync job from B2 to OneDrive with appropriate transfer limits.
4. Schedule recurring syncs with a PLUS license for hands-free automation.

Moving data from B2's durable archive into OneDrive's collaborative environment becomes a routine, reliable operation with RcloneView.

---

**Related Guides:**

- [Sync Backblaze B2 to Azure Blob Storage with RcloneView](https://rcloneview.com/support/blog/sync-backblaze-b2-to-azure-blob-rcloneview)
- [Manage Backblaze B2 Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrate OneDrive to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
