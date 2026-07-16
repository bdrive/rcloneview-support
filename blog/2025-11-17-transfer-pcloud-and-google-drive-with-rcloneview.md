---
slug: transfer-pcloud-and-google-drive-with-rcloneview
title: "Transfer Files Between pCloud and Google Drive with RcloneView"
authors:
  - tayson
description: "Move data between pCloud and Google Drive without re-downloading?use RcloneView for drag-and-drop, Compare, Sync, and scheduled Jobs with OAuth and multi-threaded uploads."
keywords:
  - pcloud to google drive
  - google drive to pcloud
  - rcloneview
  - cloud to cloud transfer
  - multi thread upload
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - oauth login
  - resumable transfers
tags:
  - cloud-migration
  - pcloud
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Transfer Files Between pCloud and Google Drive with RcloneView

> Skip the download/re-upload grind. RcloneView lets you drag and drop, compare, sync, and schedule pCloud ↔ Google Drive transfers in a guided GUI?no CLI required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why use RcloneView for multi-cloud transfers?

- Secure OAuth for Google Drive plus simple email/password for pCloud; no tokens to paste.
- Multi-threaded, resumable uploads with progress logs and retries.
- Two-pane Explorer for direct drag-and-drop between clouds.
- Compare to preview differences before copying or cleaning up.
- Sync with include/exclude filters, dry-run, and size-based decisions.
- Background Jobs and scheduling to automate recurring moves.

RcloneView combines rclone’s reliability with a visual workflow so teams and admins can move large folders confidently.

## Before you start

- Sign in to both accounts and confirm quota and API limits (Google Drive enforces a 750 GB/day upload cap per user).
- Install the latest RcloneView build: [Download](https://rcloneview.com/src/download.html).
- For pCloud, ensure you have your email/password handy; enable app passwords if your security settings require them.
- Prefer wired or stable Wi-Fi during large transfers and keep RcloneView running for uninterrupted jobs.

## Step 1: Connect your cloud remotes

1. Open **Remote → + New Remote**.
2. Select **pCloud** and enter your **email** and **password**, then save.
3. Repeat for **Google Drive**, clicking **Connect** to finish the OAuth browser login.
4. Confirm both remotes appear in Remote Manager.  

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  
  👉 Learn more:
  - [Add Google Drive Remote](/howto/#step-2-adding-remote-storage-google-drive-example)
  - [Add a new remote (OAuth)](/howto/remote-storage-connection-settings/add-oath-online-login)

## Step 2: Open both remotes in the Explorer pane

1. Go to **Browse**.
2. In the left pane, click **+** and open your **pCloud** remote.
3. In the right pane, click **+** and open your **Google Drive** remote.
4. Navigate to the source and destination folders you plan to move.

<!-- Image placeholder: add `/support/images/en/tutorials/open-pcloud-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="open pcloud and google drive remotes" class="img-medium img-center" />

## Four methods for pCloud ↔ Google Drive transfers

### Method 1: Drag & drop between panes

1. Select files or folders in the pCloud pane.
2. Drag them into the Google Drive pane (or the other way around).
3. Watch progress in the **Transfer** tab; pause or resume if needed.  

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />
    
  👉 More details: [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Method 2: Compare, then copy or delete

1. Open the source folder on the left and destination on the right.
2. Click **Compare** on the toolbar.
3. RcloneView highlights unique items, size differences, and matches.
4. Select what to move, then choose **Copy →** or **← Copy**.
5. Use **Delete** carefully to clean up duplicates or stale data.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

👉 Learn more: [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

### Method 3: Sync or save as a Job

1. Select your pCloud source and Google Drive destination.
2. Click **Sync** and choose one-way or two-way sync.
3. Preview changes, adjust filters (include/exclude), then start.
4. Click **Save to Jobs** to reuse the same configuration later.  

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add sync job in job manager" class="img-large img-center" />   
     

👉 Learn more:
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)


### Method 4: Schedule recurring sync jobs

1. Open **Job Manager → Add Job**.
2. Set **pCloud** as the source and **Google Drive** as the destination (or reverse).
3. Choose a schedule (hourly, daily, weekly, or custom cron-like).
4. Enable the job and let RcloneView run it automatically.
5. Check logs and history to verify successful runs.

👉 Learn more: [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="configure job schedule" class="img-large img-center" />

## Tips for smooth transfers

- Run **dry-run** before large syncs to confirm the plan.
- Use **bandwidth limits** during work hours to reduce throttling risk.
- For encrypted pCloud folders, ensure you have access keys or decrypt locally before moving.
- When approaching Google Drive’s daily cap, split jobs across days or accounts.
- Keep the **Transfer** tab open to monitor retries, speeds, and any API responses.

## Summary

RcloneView delivers fast, reliable, no-CLI transfers between **pCloud** and **Google Drive**. With side-by-side browsing, Compare, Sync, reusable Jobs, and scheduling, you can handle migrations or recurring backups without manual downloads or re-uploads.

<CloudSupportGrid />
