---
slug: rcloneview-proxmox-ve-cloud-backup
title: "Run RcloneView on Proxmox VE — Cloud Backup for Your Virtual Machines and Containers"
authors:
  - tayson
description: "Proxmox VE hosts your VMs and containers. Add RcloneView to back up VM data, ISO libraries, and configuration to cloud storage for offsite disaster recovery."
keywords:
  - proxmox cloud backup
  - proxmox rclone
  - proxmox offsite backup
  - proxmox ve cloud sync
  - proxmox backup s3
  - proxmox google drive backup
  - proxmox rcloneview
  - proxmox vm backup cloud
  - proxmox disaster recovery
  - proxmox cloud storage
tags:
  - RcloneView
  - platform
  - docker
  - backup
  - disaster-recovery
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Run RcloneView on Proxmox VE — Cloud Backup for Your Virtual Machines and Containers

> Proxmox VE backs up VMs locally. But local backups don't survive hardware failure, fire, or theft. Add RcloneView to push your VM backups to cloud storage for complete disaster recovery.

Proxmox VE is one of the most popular open-source hypervisors, running virtual machines and LXC containers for home labs and production environments. Its built-in Proxmox Backup Server handles local backups excellently, but local-only backup is incomplete. RcloneView adds the cloud layer — pushing VM backups, ISO libraries, and configuration exports to S3, B2, Google Drive, or any cloud provider.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Cloud Backup for Proxmox?

Proxmox's local backups protect against VM corruption and accidental deletion. Cloud backups protect against:

- **Hardware failure** — entire server dies
- **Ransomware** — local backups encrypted alongside VMs
- **Physical disaster** — fire, flood, theft
- **Site failure** — datacenter or home lab gone

## Deployment Options

### Docker container on Proxmox

Run RcloneView as a Docker container inside a lightweight LXC container on your Proxmox host.

### Dedicated LXC container

Create a minimal LXC container specifically for RcloneView with access to your backup storage.

## Key Workflows

### Sync VM backups to cloud

Point RcloneView at your Proxmox backup storage and sync to cloud:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proxmox backup to cloud" class="img-large img-center" />

### Schedule nightly offsite backup

After Proxmox creates local backups, RcloneView pushes them to the cloud:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proxmox cloud backup" class="img-large img-center" />

### Back up ISO library

Your ISO collection and container templates are hard to recreate. Back them up to cloud storage.

### Verify backup integrity

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proxmox backup" class="img-large img-center" />

### Encrypt sensitive VM data

VM backups can contain sensitive data. Use crypt remotes to encrypt before uploading.

## Recommended Strategy

| Data Type | Cloud Tier | Retention |
|-----------|-----------|-----------|
| VM backups (recent) | S3 / B2 | Last 7 days |
| VM backups (archive) | S3 Glacier | Last 90 days |
| ISO library | B2 | Permanent |
| Proxmox config | Google Drive | Last 30 days |

## Getting Started

1. **Deploy RcloneView** as a container on Proxmox.
2. **Add cloud accounts** for backup destinations.
3. **Create sync jobs** pointing at your backup storage.
4. **Schedule after local backups** complete.
5. **Verify regularly** with Folder Comparison.

Local backups save you from mistakes. Cloud backups save you from disasters.

---

**Related Guides:**

- [Run RcloneView in Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Protect Against Ransomware](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [Encrypt Cloud Backups](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
