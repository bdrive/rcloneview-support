---
slug: transfer-storj-and-google-drive-with-rcloneview
title: "Transfer Files Between Storj and Google Drive with RcloneView"
authors:
  - tayson
description: "Move data between Storj and Google Drive without re-downloading—use RcloneView drag-and-drop, Compare, Sync, and scheduled Jobs with OAuth and Storj access grants."
keywords:
  - storj to google drive
  - google drive to storj
  - rcloneview
  - cloud to cloud transfer
  - access grant
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - resumable uploads
  - s3 compatible storage
tags:
  - RcloneView
  - cloud-migration
  - storj
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Transfer Files Between Storj and Google Drive with RcloneView

> Move folders between **Storj** and **Google Drive** without touching the command line. RcloneView gives you side-by-side Explorer panes, Compare, Sync, and scheduled Jobs so cloud-to-cloud transfers stay fast and predictable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why use RcloneView for Storj ↔ Google Drive?

- OAuth login for Google Drive; access grant support for Storj (no manual CLI needed).
- Multi-threaded, resumable transfers with progress logs and retries.
- Two-pane Explorer for drag-and-drop moves.
- Compare to preview differences before copying or deleting.
- Sync with filters and dry-run, plus reusable Jobs and scheduling.
- Bandwidth limits and throttling controls to keep work hours smooth.

RcloneView builds on rclone so you get reliability and advanced options—without writing scripts.

## Before you start

- Have your **Storj access grant** ready (includes encryption scope). Store it securely.
- Sign in to Google Drive and note its 750 GB/day per-user upload cap.
- Install the latest RcloneView build: [Download](https://rcloneview.com/src/download.html).
- For large transfers, prefer wired connections and keep RcloneView running.

## Step 1: Connect your cloud remotes

1. Open **Remote → + New Remote**.
2. Choose **Storj** and paste your **access grant**. (If using a separate encryption passphrase, add it in the options.) Save the remote.
3. Repeat for **Google Drive**, click **Connect**, and finish the OAuth browser login.
4. Confirm both remotes appear in Remote Manager.

👉 Learn more: [Add Google Drive Remote](/howto/#step-2-adding-remote-storage-google-drive-example)  
👉 Manage remotes: [Remote Manager](/howto/rcloneview-basic/remote-manager/)

## Step 2: Open both remotes in the Explorer pane

1. Go to **Browse**.
2. In the left pane, click **+** and open your **Storj** remote.
3. In the right pane, click **+** and open your **Google Drive** remote.
4. Navigate to the source and destination buckets/folders you want to move.

<!-- Image placeholder: add `/support/images/en/tutorials/open-storj-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/tutorials/open-storj-and-google-drive-remotes.png" alt="open storj and google drive remotes" class="img-medium img-center" />

## Four methods for Storj ↔ Google Drive transfers

### Method 1: Drag & drop between panes

1. Select files or folders in the Storj pane.
2. Drag them into the Google Drive pane (or the reverse).
3. Track progress in the **Transfer** tab; pause/resume as needed.

👉 More details: [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Method 2: Compare, then copy or delete

1. Open the source on the left and destination on the right.
2. Click **Compare**.
3. RcloneView highlights unique items, size differences, and matches.
4. Select items to move, then choose **Copy →** or **← Copy**.
5. Use **Delete** carefully to clean up duplicates or old data.

👉 Learn more: [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

### Method 3: Sync or save as a Job

1. Select your Storj source and Google Drive destination.
2. Click **Sync** and choose one-way or two-way sync.
3. Preview changes, adjust filters (include/exclude), then start.
4. Click **Save to Jobs** to reuse the configuration later.

👉 Learn more:

- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

### Method 4: Schedule recurring sync jobs

1. Open **Job Manager → Add Job**.
2. Set **Storj** as source and **Google Drive** as destination (or reverse).
3. Choose a schedule (hourly, daily, weekly, or cron-like).
4. Enable the job and let RcloneView run it automatically.
5. Check logs and history to verify success.

👉 Learn more: [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Tips for smooth transfers

- Use **dry-run** before large syncs to confirm what will change.
- For Storj, keep your access grant scoped narrowly (bucket-specific) for better security.
- If uploads stall, lower concurrency or set bandwidth limits to reduce throttling.
- When Google Drive nears the daily cap, split jobs across days or accounts.
- Keep an eye on the **Transfer** tab for retries, speeds, and any API messages.

## Summary

RcloneView makes Storj ↔ Google Drive migrations straightforward: connect remotes, browse side-by-side, compare, sync, or schedule recurring jobs—all without the command line.

<CloudSupportGrid />
