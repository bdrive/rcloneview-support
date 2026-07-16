---
slug: sync-hidrive-to-onedrive-rcloneview
title: "Sync HiDrive to OneDrive — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Sync files from HiDrive to OneDrive with RcloneView. Transfer Strato HiDrive storage directly to Microsoft OneDrive without downloading locally."
keywords:
  - HiDrive to OneDrive
  - sync HiDrive OneDrive
  - HiDrive migration
  - Strato HiDrive sync
  - cloud-to-cloud transfer
  - HiDrive RcloneView
  - OneDrive backup
  - European cloud migration
  - RcloneView sync
  - cloud storage transfer
tags:
  - hidrive
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync HiDrive to OneDrive — Cloud Backup with RcloneView

> Transfer files from Strato HiDrive directly to Microsoft OneDrive with RcloneView — direct cloud-to-cloud sync with no local download required.

HiDrive by Strato is a European cloud storage service popular with businesses that need GDPR-compliant data residency. As organizations adopt Microsoft 365, many look to consolidate their HiDrive files into OneDrive for seamless collaboration within Teams and SharePoint. RcloneView makes this transition straightforward: add both services as remotes, then sync HiDrive folders directly to OneDrive through RcloneView's GUI without downloading files to an intermediary local machine.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting HiDrive and OneDrive

HiDrive uses OAuth authentication in rclone — when you add HiDrive as a remote in RcloneView, a browser window opens for you to log in with your Strato HiDrive credentials and grant access. The same OAuth flow applies to OneDrive: select Microsoft OneDrive from the provider list, authenticate via your Microsoft account, and the remote is configured.

With both remotes active, open them side by side in RcloneView's dual-panel explorer. Your HiDrive folder structure appears on one side, your OneDrive on the other. This visual layout helps you plan your migration: identify which HiDrive folders map to which OneDrive destinations before building sync jobs.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Configuring the Sync Job

Use the Sync wizard to create the HiDrive-to-OneDrive transfer. Select your HiDrive source folder and the OneDrive destination folder, then work through the configuration steps. One-way sync (the default, stable option) mirrors your HiDrive content to OneDrive — new and changed files are copied, and optionally, files deleted from HiDrive are removed from OneDrive as well.

For teams consolidating project archives, the Filtering step is valuable: set a max file age to migrate only files created or modified within the last two years, or use file-type filters to include only documents, spreadsheets, and presentations while excluding large video files. Custom filter rules like `.tmp` or `/.git/` let you exclude workspace clutter from the migration.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HiDrive folders to OneDrive with RcloneView" class="img-large img-center" />

Run Dry Run mode before the actual transfer to confirm the file list matches your expectations. The simulation shows exactly which files will be copied without making changes — a worthwhile step when moving business data between providers.

## Scheduling Ongoing Sync

For teams that run HiDrive and OneDrive in parallel during a transition period, schedule-based sync (PLUS license) keeps both services in step. Define a recurring schedule — daily, twice weekly, or at a custom cron interval — and RcloneView handles the sync runs in the background. Job History records every execution with start time, files transferred, and completion status.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring HiDrive to OneDrive sync in RcloneView" class="img-large img-center" />

If you need to verify the sync completed correctly, use Folder Compare to check that OneDrive now contains the expected files from HiDrive. The comparison view shows left-only, right-only, and size-different files, helping you catch anything that needs a re-transfer.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add HiDrive via the OAuth browser login flow in the Remote tab.
3. Add OneDrive via the OAuth browser login flow.
4. Use the Sync wizard to transfer HiDrive folders to OneDrive, with Dry Run to preview first.

Moving from HiDrive to OneDrive through RcloneView keeps the process GUI-driven and auditable, with no intermediary local storage consumption.

---

**Related Guides:**

- [Manage HiDrive Strato Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-hidrive-strato-sync-cloud-rcloneview)
- [Manage OneDrive Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Cloud-to-Cloud Migration with RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
