---
slug: sync-google-drive-to-box-rcloneview
title: "Sync Google Drive to Box — Cloud Backup with RcloneView"
authors:
  - kai
description: "Learn how to sync Google Drive to Box with RcloneView. Transfer files between both platforms, automate cross-cloud backups, and keep your teams synchronized."
keywords:
  - sync Google Drive to Box
  - Google Drive Box RcloneView
  - cloud-to-cloud sync RcloneView
  - Google Drive Box backup
  - migrate Google Drive Box
  - RcloneView cross-cloud transfer
  - automate Google Drive backup Box
  - Google Workspace Box sync
  - Box cloud backup RcloneView
  - Google Drive Box file transfer
tags:
  - RcloneView
  - google-drive
  - box
  - cloud-to-cloud
  - cloud-sync
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Google Drive to Box — Cloud Backup with RcloneView

> When your team stores content across Google Workspace and Box, RcloneView bridges the gap with zero scripting required.

Many organizations maintain active files in Google Drive while Box serves as a compliance archive, client portal, or departmental share. Keeping those two platforms in sync manually is error-prone and time-consuming. RcloneView provides a point-and-click workflow to pull content from Google Drive and push it to Box — whether you need a one-time migration, a nightly incremental backup, or a continuously refreshed copy for audit purposes. Because both services are supported natively by rclone, transfers are efficient and checksum-verified.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Google Drive and Box to RcloneView

Both Google Drive and Box use OAuth browser authentication in RcloneView, which means setup takes under two minutes per account. Open the Remote tab, click New Remote, and choose Google Drive. A browser window opens for you to sign in to your Google account and grant permissions — no API keys to create manually. Repeat the same steps for Box: New Remote, choose Box, and complete the browser OAuth flow.

If you work with a Google Shared Drive (Team Drive), enable the `shared_with_me` option during setup, or specify the Shared Drive ID as the root folder to ensure all team content is visible in the Explorer panel. For Box for Business accounts, set `box_sub_type = enterprise` when creating the remote to unlock enterprise folders and permissions.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Box remotes in RcloneView" class="img-large img-center" />

## Running a Cloud-to-Cloud Transfer

Open Google Drive in the left Explorer panel and Box in the right. Navigate to the source folder in Google Drive — your team's shared `Projects` folder or a client deliverables directory — then select the items you want to copy and drag them across to the Box panel. RcloneView confirms the copy operation and streams data directly between the two cloud services while your local machine acts only as a control plane, keeping your own bandwidth usage low.

The Transferring tab at the bottom of the screen shows live progress: current speed, file count, and total bytes moved. For large transfers spanning presentation decks, video assets, and spreadsheets, RcloneView's multi-threaded engine moves multiple files simultaneously, significantly reducing total transfer time compared to sequential copying.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Box in RcloneView" class="img-large img-center" />

## Setting Up a Sync Job for Ongoing Backup

For recurring backups, use the Job Manager to create a Sync job. Select the Google Drive folder as the source, a Box folder as the destination, and configure filtering rules — for example, exclude `.gdoc` Google Docs shortcut files or limit the sync to content modified in the last 30 days. The one-way sync mode writes changes to Box without modifying your Google Drive content, making it safe to run against a live production workspace.

Before the first live run, use the Dry Run option to preview exactly which files will be copied or overwritten. Job History records every execution with timestamps, transfer sizes, and status codes, giving compliance teams a clear audit trail to reference.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive to Box sync job in RcloneView" class="img-large img-center" />

## Automating with Scheduled Sync (PLUS License)

With a PLUS license, you can schedule the Google Drive → Box sync to run automatically on any crontab interval — every night at midnight, every Monday morning, or at a custom cadence your IT policy requires. Fill in the Minute, Hour, and Day-of-Week fields in the Schedule step of the job wizard. Every run is recorded in Job History with timestamps and status codes, so your compliance team can audit exactly when syncs ran and whether they succeeded.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Google Drive to Box automated sync in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Google Drive account via Remote tab > New Remote > Google Drive (OAuth browser login).
3. Add your Box account via Remote tab > New Remote > Box (OAuth browser login).
4. Open both remotes side by side in the Explorer panels, drag files across for an immediate copy, or create a Sync job in the Job Manager for a repeatable workflow.
5. Enable scheduling (PLUS license) to automate the sync on a recurring basis and set up completion notifications.

A well-maintained Google Drive-to-Box sync keeps your compliance archive current and your cross-platform file access consistent — RcloneView makes it a five-minute setup.

---

**Related Guides:**

- [Manage Google Drive Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Manage Box Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Sync Box to Google Drive — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
