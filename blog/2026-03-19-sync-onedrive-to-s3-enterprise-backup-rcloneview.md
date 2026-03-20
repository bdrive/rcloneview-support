---
slug: sync-onedrive-to-s3-enterprise-backup-rcloneview
title: "Sync OneDrive to AWS S3 — Enterprise Cloud-to-Cloud Backup with RcloneView"
authors:
  - tayson
description: "OneDrive for collaboration, S3 for durable backup. Set up automated OneDrive-to-S3 backup for enterprise data protection using RcloneView."
keywords:
  - onedrive to s3 backup
  - sync onedrive aws
  - onedrive cloud backup
  - onedrive s3 sync
  - onedrive enterprise backup
  - onedrive offsite backup
  - microsoft 365 backup s3
  - onedrive aws transfer
  - onedrive data protection
  - onedrive redundancy
tags:
  - RcloneView
  - onedrive
  - s3
  - aws-s3
  - backup
  - enterprise
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync OneDrive to AWS S3 — Enterprise Cloud-to-Cloud Backup with RcloneView

> Microsoft 365 doesn't include true backup. Deleted files, ransomware, or admin errors can permanently destroy OneDrive data. S3 backup provides the independent copy you need.

Microsoft 365's retention policies are not backups. Deleted items go to the recycle bin for 93 days, then they're gone. Ransomware can encrypt files that sync across all devices. Admin errors can wipe entire team sites. An independent backup on AWS S3 — outside the Microsoft ecosystem — provides genuine data protection.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why S3 for OneDrive Backup?

- **Independent provider** — if Microsoft has issues, your S3 backup is unaffected
- **Versioning** — S3 versioning keeps historical copies of every file
- **Cost tiers** — S3 Glacier for long-term retention at $1/TB/month
- **Compliance** — S3 Object Lock for immutable backups (regulatory requirements)

## Set Up the Backup

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive and S3" class="img-large img-center" />

## Create Backup Jobs

Open OneDrive in one pane, S3 in the other. Create Copy jobs per department or user:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to S3 backup" class="img-large img-center" />

## Schedule Automated Backups

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive backup" class="img-large img-center" />

Run nightly. Each run only transfers changes, keeping costs minimal.

## Verify and Monitor

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive backup" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## Encryption for Compliance

Encrypt OneDrive backups with crypt remotes before they reach S3 — meeting data protection requirements without relying on S3-only encryption.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add OneDrive** and **AWS S3** remotes.
3. **Create Copy jobs** for backup.
4. **Schedule nightly** and verify weekly.

Collaboration on OneDrive. Protection on S3.

---

**Related Guides:**

- [Sync Google Drive to Backblaze B2](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [Sync Dropbox to S3 Backup](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [Cloud Storage Security Checklist](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
