---
slug: migrate-mailru-cloud-to-google-drive-rcloneview
title: "Migrate Mail.ru Cloud to Google Drive — Transfer Files with RcloneView"
authors:
  - tayson
description: "Migrate Mail.ru Cloud to Google Drive with RcloneView: connect both remotes, run a dry run, copy folders cloud-to-cloud, and verify the result with Folder Compare."
keywords:
  - migrate Mail.ru Cloud to Google Drive
  - Mail.ru Cloud transfer
  - Mail.ru to Google Drive
  - RcloneView Mail.ru
  - cloud to cloud migration
  - move files between clouds
  - Mail.ru Cloud backup
  - rclone GUI migration
  - Google Drive migration tool
  - Folder Compare verification
tags:
  - RcloneView
  - mailru
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Mail.ru Cloud to Google Drive — Transfer Files with RcloneView

> Move your Mail.ru Cloud files into Google Drive with a visual, verifiable workflow instead of manual downloads and re-uploads.

Moving years of documents, scans, and media out of Mail.ru Cloud usually means downloading everything to a laptop and uploading it again. RcloneView, a GUI built on rclone, connects both services as remotes, so you can copy between them from one window and verify the result.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Both Remotes

Open RcloneView and use **New Remote** to add Mail.ru Cloud and Google Drive. Google Drive signs in through your browser with OAuth, so no API key is needed. Mail.ru Cloud is listed among the supported providers; follow the on-screen prompts for its credentials. Once both appear in Remote Manager, open them side by side in two Explorer panels.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud and Google Drive remotes in RcloneView" class="img-large img-center" />

RcloneView supports 90+ cloud storage services from one window, on Windows, macOS, and Linux, so the same setup works for any later migration too.

## Plan the Copy Before Moving Anything

Browse the source tree first. Use **Get Size** on top-level folders to estimate volume, then decide what moves now and what can wait. A small business with a shared "Contracts" folder and a large "Archive" folder might migrate the first immediately and schedule the second for off-hours.

Drag a folder from the Mail.ru panel to the Google Drive panel: dragging between different remotes performs a **Copy**, so the source stays intact until you are satisfied. For larger moves, build a Copy job in the Sync wizard, set transfer counts in Advanced Settings, and use filters to skip files you do not need, such as ISO images.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between two remotes in RcloneView" class="img-large img-center" />

## Dry Run, Transfer, and Monitor

Run a **Dry Run** first. It lists what would be copied without touching either side, which catches wrong paths before they cost time. When the list looks right, start the job and watch progress, speed, and file counts in the Transferring tab.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a running transfer in the RcloneView Transferring tab" class="img-large img-center" />

## Verify with Folder Compare

After the copy finishes, open **Compare** with Mail.ru Cloud on the left and Google Drive on the right. Filter for left-only and different files to see anything missing or mismatched, then copy those across. Job History keeps a record of status, size, and duration for your files.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing differences between source and destination" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Mail.ru Cloud and Google Drive through **New Remote**.
3. Run a Dry Run on one folder, then start the Copy job.
4. Confirm with Folder Compare before retiring the old account.

A verified, direct cloud-to-cloud copy keeps the migration low-risk and easy to resume.

---

**Related Guides:**

- [Manage Mail.ru Cloud Sync](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Transfer Mail.ru Cloud to Google Drive and S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Migrate Mail.ru Cloud to Backblaze B2](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
