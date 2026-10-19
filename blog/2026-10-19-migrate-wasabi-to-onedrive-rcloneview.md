---
slug: migrate-wasabi-to-onedrive-rcloneview
title: "Migrate Wasabi to OneDrive — Transfer Files with RcloneView"
authors:
  - tayson
description: "Migrate Wasabi to OneDrive with RcloneView: connect both remotes, preview with Dry Run, copy bucket data cloud-to-cloud, and verify with Folder Compare."
keywords:
  - migrate wasabi to onedrive
  - wasabi to onedrive transfer
  - move wasabi bucket to onedrive
  - RcloneView wasabi
  - RcloneView onedrive
  - cloud to cloud migration
  - wasabi onedrive sync
  - s3 to onedrive
tags:
  - RcloneView
  - wasabi
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Wasabi to OneDrive — Transfer Files with RcloneView

> Move data from a Wasabi bucket into OneDrive with a previewable, verifiable cloud-to-cloud copy instead of a download-and-reupload detour.

Teams that stored project archives in Wasabi sometimes need that data inside OneDrive, where colleagues already work in Microsoft 365. Object storage and a file-sync service behave differently, so a blind copy can surprise you. RcloneView connects both services side by side, previews the job with Dry Run, and verifies the result afterwards. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license, alongside 90+ other providers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Wasabi and OneDrive

Wasabi is accessed through rclone's S3 protocol, so you enter an Access Key, Secret Key, and the endpoint for your Wasabi region. OneDrive uses browser OAuth: RcloneView opens a Microsoft login page, you approve access, and the remote connects without any key to copy.

Open both remotes in two Explorer panels. Browse the bucket and the OneDrive folder tree so you know where the data lives and where it should land.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and OneDrive remotes in RcloneView" class="img-large img-center" />

## Plan the Copy

Imagine a design studio with several buckets of finished-project folders. Rather than moving everything in one pass, copy one bucket or prefix per job. Short jobs are easier to retry and easier to check.

Choose Copy instead of Sync if OneDrive already holds files you want to keep, because a one-way sync makes the destination match the source. The filtering step lets you cap file size or age and use predefined groups such as Document, Image, or Video. Also review file names beforehand: object keys can contain characters or very long paths that OneDrive may reject, so a Dry Run is worth the minute it takes.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Wasabi and OneDrive folders before migration" class="img-large img-center" />

## Run the Transfer

For a quick one-off, drag a folder from the Wasabi panel to the OneDrive panel. Dragging between different remotes copies rather than moves, so the bucket stays untouched until you are satisfied. For repeatable runs, save a job through the four-step wizard: storage, advanced settings, filters, and scheduling (scheduling requires PLUS).

Watch the Transferring tab for speed, file count, and progress. If OneDrive slows down on a large run, lower the number of concurrent file transfers in Advanced Settings. Sync jobs retry the entire run when it fails (default: 3 times).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Wasabi to OneDrive" class="img-large img-center" />

## Verify and Keep a Record

When the copy finishes, open Folder Compare on both roots. Filters show left-only, right-only, identical, and different files, and you can copy missing items across in one click. Job History records start time, duration, status, and files transferred, which doubles as a migration log.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for the Wasabi to OneDrive migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add a Wasabi remote (access key, secret key, region endpoint) and a OneDrive remote (browser login).
3. Run a Dry Run on one prefix, then execute the copy job.
4. Verify with Folder Compare and repeat for the remaining buckets.

A staged, verified migration means every file is accounted for before you retire the bucket.

---

**Related Guides:**

- [Migrate OneDrive to Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Manage Wasabi Storage](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Dry Run: Preview Sync Before Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
