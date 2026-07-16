---
slug: sync-dropbox-to-hetzner-storage-box-rcloneview
title: "Sync Dropbox to Hetzner Storage Box — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Use RcloneView to sync and back up Dropbox files to Hetzner Storage Box. A step-by-step guide for migrating or maintaining a backup copy from Dropbox to Hetzner."
keywords:
  - sync Dropbox to Hetzner Storage Box
  - Dropbox Hetzner backup
  - migrate Dropbox to Hetzner
  - Hetzner Storage Box cloud backup
  - rclone Dropbox Hetzner
  - Dropbox to SFTP backup
  - European cloud backup Dropbox
  - RcloneView Dropbox Hetzner
tags:
  - RcloneView
  - dropbox
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Dropbox to Hetzner Storage Box — Cloud Backup with RcloneView

> RcloneView syncs Dropbox to Hetzner Storage Box via SFTP — giving European users a GDPR-compliant secondary backup destination for their Dropbox files.

Hetzner Storage Box is a cost-effective, Germany-hosted storage service that supports SFTP, FTP, Samba, and WebDAV access. European businesses and developers who use Dropbox for collaboration often add Hetzner Storage Box as a secondary backup target: it's significantly cheaper for large volumes and keeps data within EU jurisdiction. RcloneView connects both via rclone's Dropbox and SFTP backends, making scheduled Dropbox-to-Hetzner syncs a straightforward GUI operation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Dropbox and Hetzner Storage Box

Add Dropbox first: **Remote tab → New Remote → Dropbox**, authenticate via OAuth browser login. Your Dropbox folders appear immediately in the Explorer.

Add Hetzner Storage Box as an SFTP remote: **New Remote → SFTP**. Configure with:
- **Host**: `yourboxid.your-storagebox.de`
- **User**: your Storage Box username (shown in the Hetzner Robot panel)
- **Authentication**: SSH key (recommended) or password
- **Port**: 23 (Hetzner Storage Box uses port 23, not the standard 22)

Test the connection before saving. Once both remotes are added, open a split-panel Explorer to browse Dropbox on the left and Hetzner on the right.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Dropbox and Hetzner Storage Box SFTP remote in RcloneView" class="img-large img-center" />

## Creating a Scheduled Sync Job

For an ongoing backup scenario, create a Sync job in the Job Manager: source is your Dropbox folder (e.g., `dropbox:/Team/Projects/`), destination is your Hetzner path (e.g., `hetzner:/backups/dropbox/`). In Step 2, set concurrent transfers to 4–6 — Hetzner Storage Box handles SFTP connections well at this concurrency level.

Schedule the job to run nightly at 2:00 AM (PLUS license). The incremental sync copies only new or modified files, keeping transfer times short after the initial full sync. Job History logs each run's status, transfer size, and duration for your records.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly Dropbox to Hetzner sync in RcloneView" class="img-large img-center" />

## One-Time Migration from Dropbox to Hetzner

If you're migrating away from Dropbox to Hetzner Storage Box as a primary storage location, use a Copy job instead of Sync. Copy transfers all files from Dropbox to Hetzner without deleting anything at the source — preserving your Dropbox content during the transition period. Run the Dry Run first to verify the file count and total transfer size before committing.

For large Dropbox accounts with hundreds of GB, enable checksum verification in Step 2 to confirm each file's integrity after transfer. The Folder Compare feature lets you verify the migration completed correctly by comparing Dropbox and Hetzner folder structures side by side after the job finishes.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Hetzner Storage Box folders after migration in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Dropbox via OAuth and Hetzner Storage Box via SFTP (port 23) in the New Remote wizard.
3. Create a Sync job from your Dropbox path to your Hetzner path in Job Manager.
4. Schedule nightly syncs and review Job History for transfer audit logs.

Syncing Dropbox to Hetzner Storage Box with RcloneView gives European teams a cost-effective, GDPR-compliant secondary backup that runs automatically without any manual intervention.

---

**Related Guides:**

- [Mount Hetzner Storage Box and Sync to Cloud with RcloneView](https://rcloneview.com/support/blog/mount-hetzner-storage-box-sync-cloud-rcloneview)
- [Backup Dropbox to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Backup Dropbox to AWS S3 with RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
