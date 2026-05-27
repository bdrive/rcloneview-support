---
slug: sync-onedrive-to-hetzner-storage-box-rcloneview
title: "Sync OneDrive to Hetzner Storage Box — Cloud Backup with RcloneView"
authors:
  - jay
description: "Sync OneDrive to Hetzner Storage Box using RcloneView. Set up SFTP backups, schedule automated syncs, and protect your Microsoft files with European storage."
keywords:
  - sync OneDrive to Hetzner Storage Box
  - Microsoft OneDrive Hetzner backup
  - RcloneView OneDrive Hetzner
  - Hetzner Storage Box SFTP backup
  - cloud storage to Hetzner sync
  - OneDrive backup Europe GDPR
  - cloud file sync automation
  - Hetzner cloud backup tool
  - OneDrive off-site backup
tags:
  - RcloneView
  - onedrive
  - hetzner
  - sftp
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync OneDrive to Hetzner Storage Box — Cloud Backup with RcloneView

> Create an independent off-site backup of your OneDrive files by syncing them to Hetzner Storage Box with RcloneView—no scripts required.

Hetzner Storage Box is a cost-effective, European-hosted SFTP storage solution popular among developers and IT teams who want reliable, privacy-respecting backup storage outside the major hyperscalers. Syncing your Microsoft OneDrive content to a Hetzner Storage Box with RcloneView creates an off-site copy fully independent of the Microsoft ecosystem—useful for disaster recovery, GDPR-conscious data residency, or protecting against an unexpected account suspension. The entire workflow is configurable through RcloneView's visual interface without writing a single rclone command.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuring OneDrive and Hetzner Storage Box as Remotes

Before syncing, you need both services registered as remotes in RcloneView. OneDrive uses OAuth browser authentication—click **Remote** tab → **New Remote** → **OneDrive**, and RcloneView opens your browser for a one-click Microsoft login. No API keys or client credentials to manage manually. Personal OneDrive accounts and business OneDrive for Microsoft 365 both work through this flow.

Hetzner Storage Box connects via SFTP. In the New Remote dialog, select **SFTP**, then enter your Storage Box hostname (formatted as `u{number}.your-storagebox.de`), your username, and your password or the path to your SSH private key. Hetzner supports both password and key-based authentication—teams managing multiple backup destinations often prefer SSH keys for unattended automation without storing plaintext passwords.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

Once both remotes appear in RcloneView's explorer tabs, browse each side to confirm the connection before building your sync job.

## Creating the OneDrive-to-Hetzner Sync Job

With both remotes ready, open **Job Manager** from the Home tab and click **Add Job**. In the 4-step wizard, set your OneDrive source folder—this can be your entire OneDrive root or a specific subfolder such as `Documents/Contracts` or a shared Teams folder. Set the Hetzner Storage Box path as the destination.

In the Advanced Settings step, configure concurrent transfers to match your connection speed and enable checksum verification for critical data. A legal firm backing up 30GB of case files to Hetzner can rely on checksum mode to verify every document arrives intact—catching any corruption introduced during transit. The Filtering step lets you exclude temporary Office lock files (`.tmp`, `.lock`) or restrict the job to specific document types like PDFs and spreadsheets.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Hetzner Storage Box sync job configuration in RcloneView" class="img-large img-center" />

Run a dry-run simulation first—RcloneView shows exactly which files would be copied or removed without making any changes. Once satisfied with the preview, execute the job. The **Transferring** tab at the bottom displays real-time progress, transfer speed, and file count throughout the run.

## Scheduling and Monitoring Automated Backups

With a RcloneView PLUS license, automate your OneDrive-to-Hetzner backup on a crontab schedule. Setting a daily sync at 03:00 AM ensures your OneDrive files are backed up to Hetzner each night without manual intervention. The schedule simulator in the wizard previews the next execution times so you can confirm the pattern before saving the job.

Job history keeps a full audit log—each run records its start time, duration, transfer speed, file count, and outcome. If a backup fails due to a transient network issue, RcloneView's configurable retry logic attempts the job again automatically. Pair this with email, Slack, or Telegram notifications (available with PLUS) and your team gets alerted to any failures before the next business day begins—so no backup window goes silently unnoticed.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling daily OneDrive to Hetzner Storage Box sync in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add **OneDrive** as an OAuth remote via Remote tab → **New Remote** → OneDrive.
3. Add **Hetzner Storage Box** as an SFTP remote with your hostname and credentials.
4. Create a sync job in **Job Manager** with OneDrive as source and your Hetzner path as destination.

Backing up OneDrive to Hetzner Storage Box gives you a low-cost, European-hosted safety net that runs automatically—ensuring your Microsoft files are protected even when cloud services experience unexpected outages.

---

**Related Guides:**

- [Manage Hetzner Storage Box Sync with RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Manage OneDrive Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Sync Dropbox to Hetzner Storage Box with RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)

<CloudSupportGrid />
