---
slug: rcloneview-openmediavault-nas-cloud-backup
title: "Run RcloneView on OpenMediaVault — Cloud Backup for Your DIY NAS"
authors:
  - tayson
description: "OpenMediaVault turns any PC into a NAS. Add RcloneView via Docker to sync your OMV shares to cloud storage for offsite backup and multi-cloud management."
keywords:
  - openmediavault cloud backup
  - openmediavault rclone
  - omv cloud sync
  - openmediavault s3 backup
  - omv rcloneview
  - openmediavault offsite backup
  - omv google drive
  - openmediavault docker rclone
  - diy nas cloud backup
  - omv backup solution
tags:
  - RcloneView
  - nas
  - docker
  - platform
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Run RcloneView on OpenMediaVault — Cloud Backup for Your DIY NAS

> OpenMediaVault (OMV) gives you a powerful NAS on budget hardware. But local storage alone isn't safe. Add RcloneView to push your NAS data to the cloud for disaster recovery.

OpenMediaVault is the go-to NAS OS for DIY builders — run it on an old PC, a Raspberry Pi, or purpose-built hardware. It provides RAID, SMB/NFS sharing, and a web interface. What it doesn't provide is cloud backup. RcloneView fills that gap, running as a Docker container on OMV and syncing your shares to any of 70+ cloud providers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why OMV + RcloneView?

OMV's built-in features handle local storage well, but cloud integration is limited. RcloneView adds:

- **70+ cloud providers** — Google Drive, S3, B2, Wasabi, and more
- **Visual file management** — browse NAS alongside cloud storage
- **Scheduled backups** — automated offsite protection
- **Verification** — Folder Comparison confirms backup integrity
- **Encryption** — crypt remotes for private backups

## Install via Docker

OMV supports Docker through the omv-extras plugin. Run RcloneView as a container with your shared folders mounted as volumes.

## Key Workflows

### Back up shares to cloud

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OMV to cloud backup" class="img-large img-center" />

### Schedule nightly offsite backups

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OMV backup" class="img-large img-center" />

### Verify backup integrity

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OMV backup" class="img-large img-center" />

### Encrypt sensitive data

Use crypt remotes to encrypt backups before they leave your network.

## Recommended Setup

| OMV Share | Backup Destination | Schedule |
|-----------|-------------------|----------|
| Documents | Google Drive | Every 6 hours |
| Photos | Backblaze B2 | Nightly |
| Media | Wasabi | Nightly |
| System config | B2 | Weekly |

## Getting Started

1. **Install Docker** on OMV via omv-extras.
2. **Deploy RcloneView** as a container.
3. **Mount your shares** as container volumes.
4. **Add cloud accounts** and create backup jobs.
5. **Schedule and verify**.

DIY NAS, professional-grade cloud backup.

---

**Related Guides:**

- [Run RcloneView in Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Run RcloneView on TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [Run RcloneView on Unraid](https://rcloneview.com/support/blog/run-rcloneview-unraid-server-cloud-sync)

<CloudSupportGrid />
