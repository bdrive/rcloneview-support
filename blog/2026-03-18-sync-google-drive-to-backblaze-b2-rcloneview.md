---
slug: sync-google-drive-to-backblaze-b2-rcloneview
title: "Sync Google Drive to Backblaze B2 — Affordable Cloud-to-Cloud Backup with RcloneView"
authors:
  - tayson
description: "Google Drive for daily work, Backblaze B2 for affordable backup. Learn how to set up automated cloud-to-cloud backup from Google Drive to B2 using RcloneView."
keywords:
  - google drive to backblaze b2
  - google drive backup b2
  - sync google drive b2
  - google drive cloud backup
  - backblaze b2 backup tool
  - google drive offsite backup
  - google drive b2 sync
  - affordable google drive backup
  - cloud to cloud backup google
  - google drive redundancy
tags:
  - RcloneView
  - google-drive
  - backblaze-b2
  - backup
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Google Drive to Backblaze B2 — Affordable Cloud-to-Cloud Backup with RcloneView

> Google Drive stores your work. Backblaze B2 protects it at $6/TB/month. Together, they form one of the most cost-effective cloud backup strategies available.

Google Drive is where your files live day-to-day. But Google Drive alone isn't a backup — accidental deletions, account compromises, and sync errors can destroy data that Google won't recover. Backblaze B2 at $6/TB/month provides the safety net: an independent copy of everything, updated automatically by RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why B2 for Google Drive Backup?

| Factor | Backblaze B2 |
|--------|-------------|
| Storage cost | $6/TB/month |
| Download cost | $0.01/GB |
| Free egress | 3x storage/month |
| Durability | 99.999999999% |
| API | S3-compatible |

B2 is purpose-built for backup workloads: cheap storage, pay-as-you-go, and S3-compatible for universal tool support.

## Set Up the Backup

<img src="/support/images/en/blog/new-remote.png" alt="Connect Google Drive and B2" class="img-large img-center" />

Add both Google Drive and Backblaze B2 as remotes in RcloneView.

## Create the Backup Job

Open Google Drive in one pane, B2 in the other. Create a Copy job:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to B2" class="img-large img-center" />

Use **Copy** (not Sync) so that files deleted from Google Drive are preserved in B2.

## Schedule Nightly Backups

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly backup" class="img-large img-center" />

Each run transfers only new and changed files. Daily backups of a typical Google Drive account use minimal bandwidth.

## Verify Backup Integrity

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup" class="img-large img-center" />

## Add Encryption

For sensitive data, layer a crypt remote on top of B2. Files are encrypted before leaving your machine — Backblaze never sees unencrypted data.

## Cost Example

| Google Drive Size | B2 Monthly Cost |
|-------------------|----------------|
| 100 GB | $0.60 |
| 500 GB | $3.00 |
| 1 TB | $6.00 |
| 5 TB | $30.00 |

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Google Drive** and **Backblaze B2** remotes.
3. **Create a Copy job** for backup.
4. **Schedule nightly runs**.
5. **Sleep well** knowing your files are protected.

Daily work on Drive. Nightly backup on B2.

---

**Related Guides:**

- [Backup Dropbox to Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Sync Dropbox to S3 Backup](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [Encrypt Cloud Backups](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
