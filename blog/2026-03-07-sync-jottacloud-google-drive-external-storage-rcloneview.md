---
slug: sync-jottacloud-google-drive-external-storage-rcloneview
title: "Sync Jottacloud with Google Drive or External Storage Easily with RcloneView"
authors:
  - tayson
description: "Keep your Jottacloud files synced with Google Drive, an external hard drive, or another cloud — automatically and with visual verification — using RcloneView."
keywords:
  - jottacloud sync
  - jottacloud backup tool
  - jottacloud to google drive
  - jottacloud export
  - jottacloud alternative backup
  - sync jottacloud files
  - jottacloud rclone
  - jottacloud multi-cloud
  - jottacloud external drive
  - jottacloud file transfer
tags:
  - RcloneView
  - jottacloud
  - cloud-storage
  - sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Jottacloud with Google Drive or External Storage Easily with RcloneView

> Love Jottacloud's unlimited storage but want a backup elsewhere? RcloneView syncs your Jottacloud data to Google Drive, an external drive, or any other cloud — on autopilot.

Jottacloud is a popular cloud storage service, especially in the Nordic countries, known for its unlimited storage plans and strong privacy policies. But relying on any single provider for all your data is risky. RcloneView lets you sync Jottacloud with Google Drive, external hard drives, NAS devices, or any other cloud — giving you redundancy and peace of mind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Sync Jottacloud with Another Storage?

- **Redundancy** — No provider is immune to outages, policy changes, or shutdowns. A second copy protects you.
- **Cross-platform access** — Share files with Google Workspace or Microsoft 365 users who don't have Jottacloud.
- **Local backup** — Keep a fast-access copy on an external drive or NAS.
- **Migration readiness** — If you ever switch providers, your data is already elsewhere.

## Connecting Jottacloud

1. Open RcloneView and click **Add Remote**.
2. Select **Jottacloud** from the provider list.
3. Authenticate with your Jottacloud credentials.
4. Save — your Jottacloud files and folders are now browsable.

<img src="/support/images/en/blog/new-remote.png" alt="Add Jottacloud remote in RcloneView" class="img-large img-center" />

## Browse and Manage

View your entire Jottacloud library in the two-pane Explorer alongside any other storage:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Jottacloud alongside other clouds" class="img-large img-center" />

## Sync Scenarios

### Jottacloud → Google Drive

Keep a mirror of your Jottacloud data in Google Drive:

1. Create a Sync job: Jottacloud → Google Drive folder.
2. Schedule daily with [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Only changed files transfer after the initial sync.

### Jottacloud → External Hard Drive

Maintain a local offline backup:

1. Create a Copy job: Jottacloud → external drive path.
2. Run weekly or whenever you connect the drive.
3. Use [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) to verify completeness.

### Jottacloud → AWS S3

Archive Jottacloud data to cost-effective S3 storage:

1. Create a Copy job: Jottacloud → S3 bucket.
2. Use S3 lifecycle rules to tier older data to Glacier.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Jottacloud sync job" class="img-large img-center" />

## Automate and Monitor

Schedule your sync and get alerted on results:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Jottacloud sync" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Jottacloud sync job history" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Jottacloud** as a remote.
3. **Add your backup destination** (Google Drive, S3, external drive).
4. **Create a Sync or Copy job** and schedule it.
5. **Verify** with Folder Comparison after the first run.

Jottacloud is a great primary cloud. RcloneView makes sure it's never your only copy.

---

**Related Guides:**

- [Browse & Manage Remotes](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Real-time Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
