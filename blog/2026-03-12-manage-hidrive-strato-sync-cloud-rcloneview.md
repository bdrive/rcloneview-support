---
slug: manage-hidrive-strato-sync-cloud-rcloneview
title: "Manage STRATO HiDrive — Sync with Google Drive, S3, and Other Clouds Using RcloneView"
authors:
  - tayson
description: "STRATO HiDrive is a popular cloud storage in Germany and Europe. Learn how to sync and back up HiDrive with Google Drive, S3, and other providers using RcloneView."
keywords:
  - hidrive cloud storage
  - strato hidrive sync
  - hidrive rclone
  - hidrive google drive
  - hidrive backup
  - hidrive file transfer
  - german cloud storage
  - strato hidrive backup
  - hidrive s3 sync
  - european cloud storage
tags:
  - RcloneView
  - hidrive
  - european-cloud
  - cloud-storage
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage STRATO HiDrive — Sync with Google Drive, S3, and Other Clouds Using RcloneView

> STRATO HiDrive is one of the most popular cloud storage services in Germany, offering GDPR-compliant storage with servers in the EU. But if your workflow includes Google Drive, S3, or international collaborators, you need a way to bridge the gap.

HiDrive by STRATO is a trusted European cloud storage provider, widely used by German businesses and individuals. Data stored in HiDrive stays on German servers under strict EU data protection laws. RcloneView connects HiDrive to 70+ other cloud providers, enabling backup, migration, and multi-cloud workflows while keeping your EU data sovereign.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why HiDrive?

- **GDPR compliance** — Data stored on German servers under EU law.
- **Reliable infrastructure** — STRATO is one of Europe's largest hosting providers.
- **WebDAV/SFTP access** — Standard protocols for integration.
- **Good pricing** — Competitive European cloud storage rates.

## Setting Up HiDrive in RcloneView

### Connect via WebDAV or SFTP

1. Open RcloneView and click **Add Remote**.
2. Select **WebDAV** or **SFTP** as the type.
3. Enter your HiDrive server URL and credentials.

<img src="/support/images/en/blog/new-remote.png" alt="Add HiDrive remote" class="img-large img-center" />

## Key Workflows

### HiDrive → S3 (off-site backup outside EU)

For disaster recovery across regions, back up to a different provider:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HiDrive backup" class="img-large img-center" />

### Google Drive → HiDrive (GDPR migration)

Move data from US-based clouds to GDPR-compliant HiDrive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate to HiDrive for GDPR" class="img-large img-center" />

### HiDrive → Google Drive (collaboration)

Sync specific folders to Google Drive for international team collaboration.

### Encrypted backup

Use crypt remotes for additional encryption on top of HiDrive's storage.

## Verify and Monitor

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HiDrive sync" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add HiDrive** via WebDAV or SFTP.
3. **Sync with other clouds** for backup or collaboration.
4. **Schedule automated jobs**.

European data sovereignty with global cloud flexibility.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Encrypt Cloud Backups](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
