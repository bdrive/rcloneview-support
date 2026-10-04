---
slug: sync-dropbox-to-box-rcloneview
title: "Sync Dropbox to Box — Cloud Backup with RcloneView"
authors:
  - casey
description: "Sync Dropbox to Box with RcloneView: connect both OAuth remotes, preview with a dry run, schedule jobs, and verify results using Folder Compare."
keywords:
  - sync Dropbox to Box
  - Dropbox to Box backup
  - Dropbox Box sync
  - cloud to cloud sync
  - RcloneView
  - Dropbox backup
  - Box cloud storage
  - multi-cloud backup
  - rclone GUI
tags:
  - RcloneView
  - dropbox
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Dropbox to Box — Cloud Backup with RcloneView

> Keep a second copy of your Dropbox files in Box, managed from a single desktop window.

Teams often work in Dropbox while clients or partners insist on Box. Keeping both in step by hand means constant downloading and re-uploading. RcloneView links the two accounts as remotes and syncs folders directly between them, with previews and history so you always know what changed.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Add Dropbox and Box as Remotes

Both providers use OAuth browser login, so no API keys are needed. Click New Remote, pick Dropbox, and approve access in your browser; repeat for Box. For business accounts, use the Dropbox for Business setting (`dropbox_business = true`) or the Box for Business setting (`box_sub_type = enterprise`), so choose those variants when relevant.

<img src="/support/images/en/blog/new-remote.png" alt="Creating Dropbox and Box remotes in RcloneView" class="img-large img-center" />

## Configure a One-Way Sync Job

Open the sync wizard, select the Dropbox folder as source and the Box folder as destination, and name the job using letters, digits, hyphens, or underscores. One-way mode modifies only the destination, which fits a backup role. Because sync makes the destination match the source, always run a Dry Run first to see which files would be copied or deleted.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox to Box sync job configuration" class="img-large img-center" />

Picture a design agency with 150 GB of client deliverables. A filter on file size or age keeps heavy working files out of the Box copy, while predefined filters can skip categories such as video.

## Schedule and Monitor

With a PLUS license, Step 4 of the wizard accepts crontab-style schedules, and the simulate option previews the next run times. A nightly run keeps Box current without any manual effort. The Transferring tab shows live speed and progress, and Job History records status, duration, size, and files for every execution.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Dropbox to Box sync job" class="img-large img-center" />

## Verify with Folder Compare

After a run, open Folder Compare on the two folders. Left-only and different files are listed, and you can copy missing items from the comparison view. Job History helps you spot runs that errored.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Dropbox to Box sync" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Dropbox and Box remotes through OAuth login.
3. Create a one-way sync job and run a Dry Run.
4. Run it, then schedule it if you have a PLUS license.

A second copy in a different provider turns a single point of failure into a safety net.

---

**Related Guides:**

- [Zero-Downtime Box to Dropbox](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Sync Box to Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Manage Dropbox Storage](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
