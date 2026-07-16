---
slug: run-rcloneview-synology-nas-docker-rcloneview
title: "Run RcloneView on Synology NAS — Cloud Backup and Sync from Your NAS"
authors:
  - tayson
description: "Turn your Synology NAS into a cloud backup hub. Learn how to use RcloneView with Synology NAS for automated cloud syncing, backup, and multi-cloud management."
keywords:
  - rcloneview synology nas
  - synology cloud backup
  - synology cloud sync alternative
  - synology rclone
  - synology nas s3 backup
  - synology google drive sync
  - synology multi cloud
  - nas cloud backup tool
  - synology automated backup
  - synology nas cloud manager
tags:
  - RcloneView
  - synology
  - nas
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Run RcloneView on Synology NAS — Cloud Backup and Sync from Your NAS

> Your Synology NAS holds terabytes of irreplaceable data. Synology's built-in Cloud Sync works for basic setups, but when you need multi-cloud management, scheduling, folder comparison, and batch jobs — RcloneView fills the gaps.

Synology NAS devices are excellent for centralized local storage, but their cloud integration has limits. Synology Cloud Sync supports about 20 cloud providers with basic sync. Synology Hyper Backup handles backups but lacks multi-cloud file management. RcloneView complements both with 70+ cloud providers, visual file management, and advanced automation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why RcloneView for Synology?

### Beyond Synology Cloud Sync

| Feature | Synology Cloud Sync | RcloneView |
|---------|-------------------|------------|
| Cloud providers | ~20 | 70+ |
| Two-pane file explorer | ❌ | ✅ |
| Folder comparison | ❌ | ✅ |
| Cloud-to-cloud transfer | ❌ | ✅ |
| Batch jobs | ❌ | ✅ |
| Slack/Discord alerts | ❌ | ✅ |
| Filter rules | Basic | Full rclone filters |
| Encrypted remotes | ❌ | ✅ (crypt) |
| Mount cloud drives | ❌ | ✅ |
| S3-compatible providers | Limited | All |

### Synology auto-detection

RcloneView auto-detects Synology NAS devices on your network:

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection" class="img-large img-center" />

No manual network configuration needed.

## Setup Options

### Option 1: RcloneView on a desktop, connected to NAS

The simplest approach. Run RcloneView on your Windows/Mac/Linux desktop:

1. Add your Synology NAS as a remote (auto-detected or via SFTP/WebDAV).
2. Add your cloud destinations (S3, B2, Google Drive, etc.).
3. Create sync/copy jobs between NAS and cloud.
4. Schedule jobs to run automatically.

This works well for home users and small offices.

### Option 2: RcloneView on a dedicated machine

Use a Raspberry Pi or old laptop as a dedicated backup controller:

1. Install RcloneView on the dedicated machine.
2. Connect to Synology NAS via network mount.
3. Configure and schedule all backup jobs.
4. Leave running 24/7.

## Backup Workflows

### NAS → Cloud (off-site backup)

The most critical workflow. Back up your NAS to cloud storage:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup NAS to cloud" class="img-large img-center" />

Recommended targets:

| NAS Data | Cloud Target | Why |
|----------|-------------|-----|
| Photos & Videos | Backblaze B2 | Cheap, $6/TB |
| Documents | Google Drive | Accessible, searchable |
| Business data | AWS S3 | Durable, enterprise-grade |
| Everything (encrypted) | Any + crypt | Zero-knowledge backup |

### Cloud → NAS (local mirror)

Keep local copies of cloud data for fast access:

```
Google Drive → NAS/CloudMirror/GoogleDrive/
OneDrive → NAS/CloudMirror/OneDrive/
```

### NAS → NAS (remote site backup)

If you have NAS devices in two locations, sync between them via RcloneView with a cloud provider as intermediate storage.

## Schedule Automated Backups

Set up nightly NAS backups:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS cloud backup" class="img-large img-center" />

### Recommended schedule

| Job | Frequency | Time |
|-----|-----------|------|
| Critical data → B2 | Nightly | 2:00 AM |
| Photos → Google Drive | Nightly | 3:00 AM |
| Full NAS → S3 | Weekly | Saturday midnight |
| Verify (compare) | Weekly | Sunday 6:00 AM |

## Verify Backups

Compare NAS contents against cloud backup:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify NAS backup against cloud" class="img-large img-center" />

## Encrypted NAS Backups

Use crypt remotes to encrypt your NAS data before uploading to cloud storage. The cloud provider never sees your unencrypted files.

## Batch Jobs for NAS Admins

Automate your entire NAS backup routine:

1. Copy /photos → B2.
2. Copy /documents → Google Drive.
3. Copy /business → S3 (encrypted).
4. Compare all three.
5. Notify via Slack.

All in one scheduled batch.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connect to your Synology NAS** (auto-detected).
3. **Add cloud storage remotes**.
4. **Create and schedule backup jobs**.
5. **Verify with Folder Comparison**.

Your NAS data is valuable. Give it an off-site safety net.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Encrypt Cloud Backups](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
