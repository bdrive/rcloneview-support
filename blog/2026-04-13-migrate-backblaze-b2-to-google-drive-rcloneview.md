---
slug: migrate-backblaze-b2-to-google-drive-rcloneview
title: "Migrate Backblaze B2 to Google Drive — Transfer Files with RcloneView"
authors:
  - tayson
description: "Move files from Backblaze B2 to Google Drive without downloading locally. RcloneView enables direct cloud-to-cloud transfer with progress monitoring and filtering."
keywords:
  - Backblaze B2 to Google Drive
  - migrate B2 to Google Drive
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - B2 to GDrive RcloneView
  - transfer Backblaze files
  - cloud storage migration
  - Backblaze B2 sync
  - Google Drive import
  - RcloneView migration
tags:
  - backblaze-b2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Backblaze B2 to Google Drive — Transfer Files with RcloneView

> Transfer files from Backblaze B2 buckets directly to Google Drive with RcloneView — no intermediate local storage required, with live progress tracking and filter support.

Backblaze B2 is a capable object storage solution, but teams that rely heavily on Google Workspace may find it more practical to consolidate their working files in Google Drive for easier collaboration. Migrating years of B2 archive data to Google Drive used to require downloading everything locally first — a slow, storage-consuming process. RcloneView enables direct cloud-to-cloud transfers between B2 and Google Drive through its sync engine, routing data between the two providers without touching your local disk.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Both Remotes

Before migrating, add both Backblaze B2 and Google Drive as remotes in RcloneView. For Backblaze B2, go to the Remote tab, click New Remote, and select Backblaze B2. Enter your Application Key ID and Application Key — both generated from your Backblaze account under App Keys. For Google Drive, select Google Drive from the provider list; a browser window opens for OAuth authentication. Sign in with your Google account and grant access.

Once both remotes are configured, you can open them side by side in RcloneView's dual-panel File Explorer. Browse your B2 buckets on one side and your Google Drive folders on the other, giving you a visual reference for the migration structure you want to set up.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Running the Migration

With both remotes connected, use the Sync wizard to configure the transfer. Select your Backblaze B2 bucket (or a specific path within it) as the source and your Google Drive destination folder. In the Advanced Settings step, checksum verification ensures each file transferred correctly — important for large archives where silent data corruption can go undetected.

The Filtering step is useful for large B2 buckets: use file-age filters to migrate only files older than a certain date, exclude specific extensions (like temporary `.tmp` files), or limit the maximum file size to stage the migration in chunks. This is particularly helpful when migrating a design agency's 3TB of project archives — filter by file type and folder depth to control what moves in each batch.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 files to Google Drive with RcloneView" class="img-large img-center" />

Before committing the full migration, run Dry Run mode to preview exactly which files will be copied. The simulation shows the complete list of planned operations without making any changes — a critical safety step when migrating production data.

## Monitoring and Validating the Transfer

The Transferring tab at the bottom of RcloneView shows live job progress: file count, transfer status, and any errors encountered. For large migrations that run over multiple hours, Job History records each execution with start time, duration, total data moved, and final status.

After the transfer completes, use Folder Compare to validate that Google Drive now contains everything from the B2 source. The comparison highlights any files that exist only on one side or have size differences, making it straightforward to identify and re-transfer anything that didn't complete successfully.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing migration job history for B2 to Google Drive transfer in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Backblaze B2 using your Application Key ID and Application Key.
3. Add Google Drive via the OAuth browser authentication flow.
4. Use the Sync wizard with Dry Run to preview the migration before running the full transfer.

Direct cloud-to-cloud migration eliminates the bottleneck of local intermediary storage and keeps your B2-to-Google Drive transfer running at provider-side throughput.

---

**Related Guides:**

- [Migrate Backblaze B2 to Amazon S3 with RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Manage Google Drive Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Backup Dropbox to Backblaze B2 Affordable Storage with RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
