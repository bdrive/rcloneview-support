---
slug: migrate-hidrive-to-wasabi-rcloneview
title: "Migrate HiDrive to Wasabi — Transfer Files with RcloneView"
authors:
  - morgan
description: "Move files from HiDrive to Wasabi object storage with RcloneView: connect both remotes, dry-run, run the transfer, and verify with Folder Compare."
keywords:
  - migrate HiDrive to Wasabi
  - HiDrive to Wasabi transfer
  - HiDrive Wasabi sync
  - RcloneView HiDrive
  - Wasabi S3 migration
  - cloud to cloud transfer
  - HiDrive backup to S3
  - rclone HiDrive Wasabi
  - HiDrive migration tool
  - Wasabi GUI
tags:
  - RcloneView
  - hidrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate HiDrive to Wasabi — Transfer Files with RcloneView

> Move a HiDrive archive into Wasabi object storage with a visual workflow: connect, preview, transfer, verify.

HiDrive works well as a personal or team file store, but long-term archives often belong in S3-style object storage with predictable API access. RcloneView connects both services in one window, so you can copy folders cloud-to-cloud without downloading everything to your own disk first. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect HiDrive and Wasabi as Remotes

HiDrive uses OAuth: RcloneView opens your browser, you sign in, and the remote connects without a separate API key. Wasabi is S3-compatible, so you enter an Access Key, Secret Key, and the endpoint for your bucket's region.

Add both from the Remote tab with New Remote. Then open each in an Explorer panel, one on the left and one on the right, and confirm you can browse the HiDrive folders and the target Wasabi bucket.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## Plan the Transfer With a Dry Run

Imagine a design studio moving 800 GB of finished project folders out of HiDrive. Before touching anything, build the transfer as a job. Choose HiDrive as the source and a Wasabi bucket path as the destination, then use One-way "Modifying destination only" mode.

Run a Dry Run first. It lists the files that would be copied or deleted without making changes, which is the safest way to catch a wrong destination folder.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from HiDrive to Wasabi in RcloneView" class="img-large img-center" />

## Tune Settings and Run the Job

In Step 2 of the wizard, set the number of file transfers and enable checksum comparison if you want hash-and-size verification. Keep the retry value at its default of 3 so a brief network failure does not abort the whole run. Use Step 3 filters to skip things like temporary files or a `.git/` folder.

When the preview looks right, run the job and watch speed, progress, and file counts in the Transferring tab.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a HiDrive to Wasabi transfer in the Transferring tab" class="img-large img-center" />

## Verify With Folder Compare

After the job finishes, open Compare with HiDrive on one side and Wasabi on the other. Filter for left-only files to see anything that did not arrive, and copy only the missing items. Job History keeps a record of status, duration, size, and file count for your migration log.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare confirming HiDrive and Wasabi contents match" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add HiDrive (browser login) and Wasabi (Access Key, Secret Key, endpoint) as remotes.
3. Create a one-way job from HiDrive to your Wasabi bucket and run a Dry Run.
4. Run the transfer, then verify with Folder Compare.

A previewed, verified migration keeps your HiDrive files safe until you are sure everything has landed in Wasabi.

---

**Related Guides:**

- [Sync HiDrive to Amazon S3 with RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)
- [Migrate HiDrive to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Manage Wasabi Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
