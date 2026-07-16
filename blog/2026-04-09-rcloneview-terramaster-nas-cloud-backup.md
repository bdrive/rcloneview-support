---
slug: rcloneview-terramaster-nas-cloud-backup
title: "Use RcloneView with TerraMaster NAS for Cloud Backup and Sync"
authors:
  - tayson
description: "Set up RcloneView with a TerraMaster NAS to sync and back up NAS data to cloud storage. Connect via SFTP or SMB and automate backups to S3, B2, or Google Drive."
keywords:
  - rcloneview
  - terramaster nas cloud backup
  - terramaster cloud sync
  - terramaster backup to cloud
  - terramaster rclone
  - nas cloud backup gui
  - terramaster google drive
  - terramaster s3 backup
  - terramaster file sync
  - nas to cloud transfer
tags:
  - nas
  - platform
  - cloud-backup
  - sftp
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Use RcloneView with TerraMaster NAS for Cloud Backup and Sync

> TerraMaster NAS devices offer affordable network storage, but their built-in cloud backup options are limited — **RcloneView** extends your TerraMaster with multi-cloud backup, sync, and file management through a visual GUI.

TerraMaster manufactures popular NAS devices running TOS (TerraMaster Operating System). While TOS includes basic cloud sync features for a few providers, it does not support the full range of cloud storage services that businesses and power users need. RcloneView connects to your TerraMaster NAS via SFTP or SMB and bridges it to 70+ cloud providers — enabling automated backups, cloud-to-NAS sync, and cross-cloud file management.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Add Cloud Backup to Your TerraMaster

A NAS provides fast local storage and RAID redundancy, but it does not protect against:

- **Site-level disasters**: Fire, flood, theft, or power surges can destroy the NAS and all its drives simultaneously. RAID protects against drive failure, not site loss.
- **Ransomware**: If ransomware reaches your network, it can encrypt NAS shares. Cloud backups (especially to immutable storage) provide a recovery point.
- **Hardware failure beyond RAID**: Controller board failures, power supply damage, or firmware corruption can make the entire NAS inaccessible regardless of RAID level.

Cloud backup provides geographic redundancy that a local NAS cannot. RcloneView automates this backup while keeping your primary workflow on the fast local NAS.

## Connecting RcloneView to Your TerraMaster

RcloneView runs on your desktop or a separate machine (not on the TerraMaster itself) and connects to the NAS over the network. Two connection methods are available:

### SFTP Connection

Enable SSH on your TerraMaster (TOS Control Panel > Services > SSH). Then add an SFTP remote in RcloneView's Remote Manager:

- Host: Your TerraMaster's IP address (e.g., `192.168.1.100`)
- Port: 22 (default SSH port)
- Username: Your TOS admin username
- Password or SSH key: Your TOS credentials

SFTP provides encrypted file transfers and is the recommended method for accessing NAS data from RcloneView.

### SMB Connection

If your TerraMaster shares are accessible via SMB (Windows file sharing), add an SMB remote in RcloneView. This uses the standard Windows network path format and is convenient if you already have SMB shares configured.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting RcloneView to TerraMaster NAS via SFTP" class="img-large img-center" />

## Backing Up NAS Data to Cloud Storage

Once connected, set up a backup job from your TerraMaster to a cloud destination:

1. Open the TerraMaster SFTP remote in the left pane.
2. Open your cloud destination (AWS S3, Backblaze B2, Google Drive, Wasabi) in the right pane.
3. Navigate to the folders you want to back up on the NAS.
4. Create a sync job that copies NAS data to the cloud.

RcloneView's delta detection ensures only files that have changed since the last backup are transferred. For a NAS with terabytes of data, the initial backup may take days, but subsequent daily backups transfer only the day's changes — typically completing in minutes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backing up TerraMaster NAS to cloud storage in RcloneView" class="img-large img-center" />

## Choosing a Cloud Backup Destination

For NAS backup, cost-effective storage with no egress fees is ideal:

- **Backblaze B2**: $6/TB/month, free egress through Cloudflare partnership. Simple pricing, good for straightforward backups.
- **Wasabi**: $6.99/TB/month, no egress fees. 90-day minimum storage duration applies.
- **AWS S3 Glacier Deep Archive**: $0.99/TB/month for archival data. Retrieval takes hours and incurs per-GB retrieval fees, but storage costs are the lowest available.
- **Google Drive**: Convenient if your team already uses Google Workspace. Storage costs are higher but integration is seamless.

For most TerraMaster users, Backblaze B2 offers the best balance of cost, simplicity, and retrieval speed.

## Scheduling Automated Backups

Configure RcloneView's scheduler to run NAS backups automatically:

- **Daily incremental**: Sync changed files from the NAS to cloud every night. Minimal bandwidth usage after the initial seed.
- **Weekly full verification**: Run a compare operation weekly to verify that all NAS files match the cloud backup. This catches any discrepancies from interrupted transfers or silent data corruption.

Set bandwidth limits to prevent backup traffic from consuming your network during business hours. Schedule backups for overnight or off-peak hours.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling TerraMaster NAS backup in RcloneView" class="img-large img-center" />

## Syncing Cloud Data to Your TerraMaster

The reverse workflow is also useful: pull cloud data to your NAS for local access. If your team collaborates on Google Drive but needs fast local access to project files, sync the relevant Drive folders to your TerraMaster. Edit files locally at NAS speeds, and RcloneView syncs changes back to the cloud on schedule.

This hybrid approach gives you the collaboration benefits of cloud storage with the performance of local NAS access.

## Encrypting NAS Backups

For sensitive data, use RcloneView's crypt remote to encrypt files before they leave your network. The encryption happens on your desktop machine (where RcloneView runs) before uploading to the cloud. Even if the cloud provider is compromised, your NAS backup data remains unreadable.

## Monitoring and Verification

RcloneView's job history logs every backup run with statistics: files transferred, files skipped, total bytes, elapsed time, and any errors. Review the history regularly to confirm backups are completing successfully. Use the compare feature periodically to verify that the cloud backup matches the NAS contents.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitoring TerraMaster NAS backup history in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Enable SSH on your TerraMaster and add it as an SFTP remote in RcloneView.
3. Add a cloud destination (B2, S3, Google Drive, or Wasabi).
4. Create and schedule a daily backup job from NAS to cloud.
5. Verify backups periodically with the compare feature.

Your TerraMaster NAS handles local storage and sharing. RcloneView adds the cloud backup layer that protects your data against site-level disasters, ransomware, and hardware failure beyond RAID.

---

**Related Guides:**

- [Browse and Manage Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
