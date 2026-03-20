---
slug: sync-idrive-e2-s3-google-drive-rcloneview
title: "Sync IDrive e2 Object Storage to AWS S3 or Google Drive with RcloneView"
authors:
  - tayson
description: "Manage IDrive e2 object storage visually — browse buckets, sync to AWS S3 or Google Drive, and schedule backups using RcloneView's S3-compatible connection."
keywords:
  - idrive e2 sync
  - idrive e2 backup
  - idrive e2 gui tool
  - idrive e2 to s3
  - idrive e2 rclone
  - idrive e2 file manager
  - idrive e2 mount local drive
  - idrive e2 google drive
  - idrive e2 object storage
  - s3 compatible storage gui
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync IDrive e2 Object Storage to AWS S3 or Google Drive with RcloneView

> IDrive e2 offers incredibly affordable S3-compatible storage at $0.004/GB/month. But without a desktop sync client, managing files means API calls or web UI. RcloneView gives you a full visual interface.

IDrive e2 is one of the most cost-effective S3-compatible object storage services available — cheaper than Backblaze B2, Wasabi, and AWS S3. It's ideal for backups, archives, and cold storage. But like most object storage providers, IDrive e2 lacks a native desktop client. RcloneView connects via the S3 API, giving you visual file management, cloud-to-cloud sync, and scheduled automation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why IDrive e2?

| Provider | Cost per TB/month | Egress |
|----------|-------------------|--------|
| IDrive e2 | $4.00 | Free (3x storage) |
| Backblaze B2 | $6.00 | $0.01/GB |
| Wasabi | $6.99 | Free |
| AWS S3 Standard | $23.00 | $0.09/GB |

IDrive e2's pricing makes it a compelling choice for anyone needing affordable, reliable object storage.

## Connecting IDrive e2

Since IDrive e2 is S3-compatible:

1. Click **Add Remote** → select **Amazon S3**.
2. Choose **IDrive e2** or **Other** from the S3 provider dropdown.
3. Enter your credentials:
   - **Access Key** and **Secret Key** from IDrive e2 dashboard.
   - **Endpoint**: Your regional endpoint (e.g., `https://s3.us-west-1.idrivecloud.io`).
4. Save — your e2 buckets are now browsable.

<img src="/support/images/en/blog/new-remote.png" alt="Add IDrive e2 as S3-compatible remote" class="img-large img-center" />

## Browse and Manage

View IDrive e2 buckets alongside any other cloud:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse IDrive e2 buckets" class="img-large img-center" />

## Sync Scenarios

### Google Drive → IDrive e2 (Affordable Backup)

Use e2 as a low-cost backup for your Google Drive:

1. Create a Copy job: Google Drive → IDrive e2 bucket.
2. Schedule nightly with [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Pay a fraction of what Google charges for the same data.

### IDrive e2 → AWS S3 (Cross-Cloud Redundancy)

1. Create a Sync job: IDrive e2 → S3 bucket.
2. Maintain redundancy across two different S3-compatible providers.

### Local/NAS → IDrive e2 (Offsite Archive)

1. Create a Copy job: Local folder or NAS → IDrive e2.
2. Perfect for offsite backup at minimal cost.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run IDrive e2 sync job" class="img-large img-center" />

## Mount as Local Drive

Access IDrive e2 as a regular folder:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount IDrive e2 as local drive" class="img-large img-center" />

## Automate and Monitor

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule IDrive e2 backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor IDrive e2 transfers" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add IDrive e2** as an S3-compatible remote.
3. **Browse, mount, or sync** to any destination.
4. **Schedule** for automated low-cost cloud backup.

IDrive e2 is the budget king of object storage. RcloneView gives it the desktop experience it deserves.

---

**Related Guides:**

- [Add AWS S3 and S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Mount Cloud Storage as a Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
