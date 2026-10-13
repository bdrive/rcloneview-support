---
slug: migrate-google-drive-to-wasabi-rcloneview
title: "Migrate Google Drive to Wasabi — Transfer Files with RcloneView"
authors:
  - alex
description: "Migrate Google Drive to Wasabi with RcloneView. Copy files cloud-to-cloud, verify with Dry Run and Folder Compare, and keep an S3-compatible archive."
keywords:
  - migrate google drive to wasabi
  - google drive to wasabi
  - google drive wasabi transfer
  - google drive archive s3
  - wasabi migration gui
  - cloud to cloud transfer
  - rcloneview google drive wasabi
  - move google drive to object storage
  - google drive backup wasabi
  - wasabi bucket sync
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Google Drive to Wasabi — Transfer Files with RcloneView

> Move or archive a Google Drive into a Wasabi bucket without downloading anything to your own disk first.

A design studio with 2TB of finished projects may want them out of Google Drive and into S3-compatible object storage. RcloneView transfers directly from Drive to Wasabi, with a Dry Run beforehand and a Folder Compare afterward so you can confirm nothing was missed.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Both Remotes

Google Drive uses OAuth: choose it under **New Remote** and sign in through your browser. Wasabi is an S3-compatible provider, so you enter an Access Key, a Secret Key, and the endpoint for your Wasabi region. Create the bucket in the Wasabi console first so you have a destination to point at.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Wasabi remotes in RcloneView" class="img-large img-center" />

Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license — and Wasabi and other S3-compatible services work the same way.

## Plan the Transfer with a Dry Run

Open Google Drive in one Explorer panel and your Wasabi bucket in the other. For a one-off move, drag folders between the panels; different remotes perform a copy. For a large library, create a job instead. Step 1 sets source and destination, Step 2 lets you tune concurrent transfers, and Step 3 can filter by file size, age, or type. Run **Dry Run** to preview every file that will be copied.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Wasabi" class="img-large img-center" />

Choose the **Copy** job type rather than Sync while migrating. Copy never deletes anything at the destination, which is the safer choice until you have verified the result.

## Watch the Transfer

Start the job and follow progress in the Transferring tab at the bottom of the window: percentage, speed, and file counts. If Google Drive rate limits slow things down, lower the number of concurrent file transfers in the job's advanced settings and run again; already-copied files are skipped.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a transfer to Wasabi in RcloneView" class="img-large img-center" />

## Verify Before You Clean Up

Use **Compare** to view the two locations side by side. Filters show left-only, right-only, identical, and different files, so any gap is obvious. Only after the comparison is clean should you consider removing data from Google Drive. Job History keeps a record of each run for your files.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the Google Drive to Wasabi migration with Folder Compare" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Google Drive (OAuth) and Wasabi (Access Key, Secret Key, endpoint) as remotes.
3. Create a Copy job from Drive to your bucket and run a Dry Run.
4. Start the job, then confirm the result with Compare.

A verified copy in a bucket you control makes the rest of the cleanup low-risk.

---

**Related Guides:**

- [Manage Wasabi Storage with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrate OneDrive to Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Migrate Dropbox to Wasabi](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
