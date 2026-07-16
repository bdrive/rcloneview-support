---
slug: rcloneview-truenas-cloud-backup
title: "Use RcloneView with TrueNAS for Cloud Backup and Sync"
authors:
  - tayson
description: "Connect RcloneView to TrueNAS (CORE or SCALE) for cloud backup, sync, and multi-cloud management. Replace or augment TrueNAS Cloud Sync tasks with rclone's full feature set."
keywords:
  - rcloneview truenas
  - truenas cloud backup rclone
  - truenas scale rclone gui
  - truenas core cloud sync
  - rclone truenas setup
  - truenas s3 backup rcloneview
  - truenas google drive backup
  - truenas cloud storage management
  - backup truenas to cloud
  - truenas rclone integration
tags:
  - nas
  - cloud-backup
  - platform
  - linux
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Use RcloneView with TrueNAS for Cloud Backup and Sync

> TrueNAS has built-in Cloud Sync tasks powered by rclone — but the built-in interface is limited. Running RcloneView alongside TrueNAS unlocks rclone's full feature set: multi-cloud management, Crypt remotes, Bisync, filter rules, folder comparison, and more.

TrueNAS CORE and SCALE both include rclone under the hood for their Cloud Sync task feature. But the web GUI exposes only a fraction of rclone's capabilities — limited provider options, no encryption layer, no bisync, and no cross-cloud jobs. By running RcloneView on TrueNAS (via Docker, a VM, or a remote workstation), you gain access to rclone's complete feature set while still using TrueNAS as your primary storage platform.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TrueNAS + RcloneView: Two Integration Approaches

### Approach 1 — RcloneView in a TrueNAS SCALE container (Docker)

TrueNAS SCALE supports Docker containers natively via its Apps interface. You can run RcloneView as a persistent container:

1. In TrueNAS SCALE, navigate to **Apps → Available Applications** or use the **Custom App** option.
2. Deploy RcloneView's Docker image with a volume mount pointing to your TrueNAS dataset paths.
3. Access RcloneView's web interface from your browser.

This keeps RcloneView on the NAS itself, so backup jobs run without needing a separate machine.

### Approach 2 — RcloneView on a workstation, NAS as a remote

Run RcloneView on your desktop and add your TrueNAS datasets as a remote:

- **SMB**: Add a Windows share as a local or SMB remote in RcloneView.
- **SFTP**: Enable SFTP on TrueNAS and add it as an SFTP remote in RcloneView.
- **NFS**: Mount your NAS NFS share locally and treat it as a local path in RcloneView.

This approach is simpler to set up and works without Docker expertise.

## Setting Up SFTP from TrueNAS

The most reliable remote access method:

### Step 1 — Enable SSH on TrueNAS

In TrueNAS: **System → Services → SSH → Enable**. Create a dedicated user with access limited to your backup datasets.

### Step 2 — Add TrueNAS as an SFTP remote in RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add TrueNAS SFTP remote in RcloneView" class="img-large img-center" />

1. Click **New Remote** in RcloneView.
2. Select **SFTP**.
3. Enter your TrueNAS IP, SSH port (default 22), username, and SSH key or password.
4. Set the root path to your dataset (e.g., `/mnt/tank/Backups`).
5. Save.

RcloneView now shows your TrueNAS datasets as a navigable remote.

## Cloud Backup Jobs for TrueNAS

With TrueNAS accessible as an SFTP remote, you can create comprehensive backup jobs:

### Backup TrueNAS datasets to S3

1. Create a new **Sync** job in RcloneView.
2. Source: `truenas-sftp:/mnt/tank/Photos/`
3. Destination: `s3-backup:truenas-photos-backup/`
4. Enable checksum verification for data integrity.
5. Schedule nightly.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS to S3 backup job" class="img-large img-center" />

### Encrypted backup to cloud

For sensitive datasets, add a Crypt remote layer:

1. Create a Crypt remote that wraps your S3 remote.
2. Set the Crypt remote as the destination instead of the raw S3 remote.
3. Files are encrypted client-side before leaving your TrueNAS.

### Multi-cloud backup

Use RcloneView to back up the same TrueNAS dataset to two cloud providers simultaneously:

- Job 1: `truenas-sftp:/mnt/tank/` → `s3-primary:` (daily)
- Job 2: `truenas-sftp:/mnt/tank/` → `b2-secondary:` (weekly)

## Advantages Over TrueNAS Built-in Cloud Sync

| Feature | TrueNAS Cloud Sync | RcloneView |
|---------|-------------------|-----------|
| Provider support | ~20 providers | 70+ providers |
| Crypt/encryption layer | ✗ | ✓ |
| Bisync (two-way) | ✗ | ✓ |
| Filter rules | Limited | Full rclone filter support |
| Folder comparison | ✗ | ✓ |
| Cross-cloud (cloud A → cloud B) | ✗ | ✓ |
| Job scheduling | ✓ | ✓ |
| Real-time monitoring | Limited | ✓ |

## Monitoring and Verification

Use RcloneView's **Folder Comparison** to periodically verify that your TrueNAS backup matches cloud storage:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup in cloud with folder comparison" class="img-large img-center" />

Compare the TrueNAS source against the cloud destination — any missing or changed files appear immediately. Schedule a monthly verification run as a data integrity check.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Enable SSH on TrueNAS** and add it as an SFTP remote in RcloneView.
3. **Create backup jobs** from TrueNAS datasets to your cloud provider(s).
4. **Schedule and encrypt** — set up nightly backup jobs and add a Crypt remote for sensitive datasets.

TrueNAS is excellent NAS software. Pair it with RcloneView and you have a complete, flexible cloud backup strategy that goes well beyond what TrueNAS's built-in tools offer.

---

**Related Guides:**

- [Run RcloneView on Synology NAS](https://rcloneview.com/support/blog/rcloneview-synology-rclone-gui)
- [Run RcloneView in Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Backup NAS to Multiple Clouds](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
