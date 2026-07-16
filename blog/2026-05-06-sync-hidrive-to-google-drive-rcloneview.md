---
slug: sync-hidrive-to-google-drive-rcloneview
title: "Sync HiDrive to Google Drive — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Sync your Strato HiDrive storage to Google Drive with RcloneView. Automate cloud backups, transfer files directly between providers, and keep both accounts in sync."
keywords:
  - sync HiDrive to Google Drive
  - HiDrive Google Drive sync RcloneView
  - Strato HiDrive backup to Google Drive
  - HiDrive cloud migration
  - move files HiDrive Google Drive
  - HiDrive sync tool GUI
  - Google Drive backup from HiDrive
  - RcloneView HiDrive sync
  - HiDrive file transfer tool
  - cloud to cloud sync HiDrive
tags:
  - RcloneView
  - hidrive
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync HiDrive to Google Drive — Cloud Backup with RcloneView

> RcloneView keeps your Strato HiDrive and Google Drive in sync automatically — direct cloud-to-cloud transfers with scheduled jobs and full transfer monitoring.

Strato HiDrive is widely used in German-speaking countries for secure cloud storage with strong GDPR compliance. Teams using HiDrive alongside Google Workspace often need to sync content between the two platforms — keeping project files accessible from both environments. RcloneView handles this sync reliably, connecting to both providers and running automated transfers on any schedule you define.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect HiDrive and Google Drive in RcloneView

Both HiDrive and Google Drive use OAuth-based authentication in RcloneView. Go to Remote tab > New Remote:

- **HiDrive:** Select HiDrive and complete OAuth login with your Strato HiDrive credentials
- **Google Drive:** Select Google Drive and complete browser-based OAuth authentication

RcloneView stores tokens securely and refreshes them automatically when they expire. Open both remotes in the dual-panel explorer to browse what exists on each side before configuring the sync.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configure the HiDrive to Google Drive Sync Job

Create a sync job in RcloneView's wizard with HiDrive as the source and a Google Drive folder as the destination. For a consulting firm that stores client deliverables in HiDrive and shares them via Google Workspace, a daily sync job ensures the Google Drive copy stays current after each working day.

In advanced settings, set the concurrent transfer count to match your bandwidth, and enable **checksum** verification if data integrity across accounts is critical. The predefined filter options can exclude specific file types (e.g., HiDrive thumbnail caches or temporary files) from the sync.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Schedule Automated Syncs (PLUS)

With a PLUS license, schedule the HiDrive-to-Google Drive sync job to run automatically. A common setup: sync HiDrive to Google Drive every evening at 7 PM to capture the day's work. Use the **Simulate schedule** feature to verify your cron expression produces the expected run times before activating.

The Auto Start Schedule on Startup option ensures scheduled jobs resume after a machine restart — important for sync jobs running on a shared workstation.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Monitor Sync Status and History

RcloneView's Transfer tab shows live sync progress. After each sync completes, Job History records the run: files transferred, bytes moved, speed, and duration. If Google Drive's API throttles requests during a large sync, the log shows retry events — helping you tune concurrent transfer settings for future jobs.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add HiDrive and Google Drive as OAuth remotes in Remote tab > New Remote.
3. Create a Sync or Copy job from HiDrive to your Google Drive folder.
4. Schedule automated runs with the PLUS license and monitor progress in Job History.

Keeping HiDrive and Google Drive synchronized is straightforward with RcloneView's automated sync engine — data moves directly in the cloud with no manual steps required.

---

**Related Guides:**

- [Manage HiDrive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Manage Google Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Sync HiDrive to OneDrive with RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-onedrive-rcloneview)

<CloudSupportGrid />
