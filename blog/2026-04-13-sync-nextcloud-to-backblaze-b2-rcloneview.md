---
slug: sync-nextcloud-to-backblaze-b2-rcloneview
title: "Sync Nextcloud to Backblaze B2 — Offsite Backup with RcloneView"
authors:
  - tayson
description: "Back up your self-hosted Nextcloud data to Backblaze B2 using RcloneView. Connect via WebDAV and App Key, then schedule automated offsite backups."
keywords:
  - Nextcloud Backblaze B2 backup
  - Nextcloud offsite backup RcloneView
  - Nextcloud WebDAV sync B2
  - self-hosted Nextcloud backup
  - Backblaze B2 Nextcloud cloud backup
  - automated Nextcloud backup
  - Nextcloud disaster recovery
  - RcloneView WebDAV backup
tags:
  - RcloneView
  - nextcloud
  - backblaze-b2
  - backup
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Nextcloud to Backblaze B2 — Offsite Backup with RcloneView

> Nextcloud is excellent for self-hosted collaboration, but without an offsite backup, a single server failure can mean permanent data loss — RcloneView syncs it automatically to Backblaze B2.

Self-hosting Nextcloud gives you full control over your data, but control comes with responsibility. If your server is damaged, ransomed, or decommissioned without a proper backup, there's no safety net. Backblaze B2 provides affordable, durable offsite object storage that pairs perfectly with Nextcloud. RcloneView connects Nextcloud via WebDAV and B2 via Application Key, giving you a GUI to set up and schedule recurring backups.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Nextcloud via WebDAV

Open RcloneView and go to **Remote Manager**. Click **New Remote** and select **WebDAV**. Nextcloud exposes its files over WebDAV at a standard path. Fill in:

- **URL**: `https://your-nextcloud-domain/remote.php/dav/files/your-username/`
- **Vendor**: Nextcloud
- **User**: your Nextcloud username
- **Password**: your Nextcloud account password (or an app password if you have 2FA enabled)

Save the remote and open it in the File Explorer to confirm your Nextcloud files appear. Navigate a few folders to verify access.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

## Connecting Backblaze B2

Back in **Remote Manager**, click **New Remote** and select **Backblaze B2**. In the Backblaze console, go to **App Keys** and create a key with read/write access to your backup bucket. Enter the **Application Key ID** and **Application Key** in RcloneView. Save the remote and open it to verify your B2 buckets are accessible.

Create the destination bucket if you haven't already — for Nextcloud backups, a dedicated bucket (e.g., `nextcloud-backup`) keeps things organized.

## Setting Up the Backup Job

Go to **Jobs** and click **New Job**. Configure:

- **Source**: your Nextcloud WebDAV remote, pointing to the root or a specific directory
- **Destination**: your Backblaze B2 remote and the backup bucket

In step 2 of the job wizard, recommended options for Nextcloud backups:

- Set **transfers** to 4 (WebDAV has per-connection overhead, so lower concurrency is stable)
- Enable **checksum verification** for integrity assurance
- Enable **Dry Run** on the first run to review scope before committing

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud to Backblaze B2 backup job in RcloneView" class="img-large img-center" />

## Scheduling Automated Backups

With a PLUS license, add a schedule in step 3 of the job wizard using cron syntax. For daily backups at 1 AM: `0 1 * * *`. For weekly: `0 1 * * 0`. RcloneView runs the job silently in the background at the scheduled time and records the result in **Job History**.

Each Job History entry shows: files checked, files transferred (only changed files are re-sent), data volume, duration, and any errors. This lets you quickly confirm the nightly backup ran successfully without opening the application manually.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## Backup Strategy Notes

- RcloneView's sync job is incremental by default — only new or changed files are transferred after the initial run
- Consider keeping **--backup-dir** style versioning if you want to preserve deleted files in B2
- For Nextcloud database backups, those need to be handled separately (mysqldump or similar), but all file data in Nextcloud's data directory syncs cleanly via WebDAV

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connect Nextcloud via WebDAV in **Remote Manager** using your server URL and credentials.
3. Connect Backblaze B2 using your Application Key ID and Application Key.
4. Create and schedule a sync job from Nextcloud to B2 for automated nightly offsite backup.

An automated Nextcloud → Backblaze B2 backup running nightly means your self-hosted data has enterprise-grade redundancy at minimal cost.

---

**Related Guides:**

- [Sync Nextcloud to Google Drive and S3 with RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [Backup Nextcloud WebDAV with RcloneView](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
