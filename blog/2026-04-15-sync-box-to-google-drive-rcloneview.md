---
slug: sync-box-to-google-drive-rcloneview
title: "Sync Box to Google Drive — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Sync Box to Google Drive with RcloneView — transfer files, automate backups, and keep both platforms updated using a simple cloud-to-cloud GUI."
keywords:
  - Box to Google Drive sync
  - Box to Google Drive migration
  - cloud sync tool
  - RcloneView Box
  - Box backup
  - Google Drive archive
  - cloud-to-cloud sync
  - enterprise cloud transfer
  - Box Google Drive workflow
  - Box content migration
tags:
  - box
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Box to Google Drive — Cloud Backup with RcloneView

> Box handles enterprise compliance and secure sharing, while Google Drive anchors collaborative editing — RcloneView syncs content between both platforms directly, without any local disk intermediary.

Box is widely used in enterprise environments for its compliance controls and secure file sharing, while Google Drive underpins real-time collaborative workflows. When teams use both platforms or are consolidating away from Box, keeping content in sync — or migrating files between platforms — requires a reliable cloud-to-cloud tool. RcloneView connects Box and Google Drive directly, with no download to local disk required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Box and Google Drive

Both Box and Google Drive use OAuth browser authentication in RcloneView. Go to **Remote tab > New Remote**, select **Box**, and complete the browser login. Repeat the process for **Google Drive**. Both remotes then appear as tabs in the explorer panel, ready for immediate browsing.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive remotes in RcloneView" class="img-large img-center" />

For **Box for Business** accounts, configure the `box_sub_type` setting as `enterprise` when creating the remote. This ensures RcloneView connects to the organization's Box account rather than personal storage, providing access to shared folders and content owned by the business.

## Running the Sync Job

In **Job Manager**, create a new sync job: source is your Box folder (or a specific subfolder such as `/Projects/2026`), destination is the target Google Drive folder. RcloneView's sync is one-way by default — it mirrors the source to the destination without modifying source content.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive sync job in RcloneView" class="img-large img-center" />

For a legal team syncing completed case files from Box to Google Drive for long-term archiving, filtering by file age (Max File Age in Job settings Step 3) limits the sync to only recently modified files — keeping transfer sizes manageable. The **Dry Run** preview confirms exactly which files will move before any data is touched.

## Automation and Monitoring

With a PLUS license, scheduling the Box-to-Google Drive sync ensures both platforms stay current. A cron-based schedule — for example, every Sunday at midnight — runs the sync automatically without user intervention.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Box to Google Drive sync in RcloneView" class="img-large img-center" />

RcloneView's **1:N synchronization** feature even lets you sync from one Box folder to multiple Google Drive destinations simultaneously — useful for backing up the same content to both a shared Team Drive and a personal archive folder in one job. **Job History** tracks each run with detailed stats: files transferred, duration, speed, and status.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add **Box** remote (OAuth) and **Google Drive** remote (OAuth).
3. Open **Job Manager** and create a sync job from your Box folder to Google Drive.
4. Enable scheduling (PLUS) to automate regular syncs.

Syncing Box to Google Drive through RcloneView means your content moves reliably between platforms while both stay organized and accessible without manual effort.

---

**Related Guides:**

- [Manage Box Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Zero-Downtime Box to Dropbox Migration with RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Migrate Box to SharePoint and OneDrive with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)

<CloudSupportGrid />
