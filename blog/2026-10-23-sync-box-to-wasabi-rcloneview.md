---
slug: sync-box-to-wasabi-rcloneview
title: "Sync Box to Wasabi — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Sync Box to Wasabi with RcloneView: connect both remotes, preview with Dry Run, run a one-way backup, and verify results with Folder Compare."
keywords:
  - sync box to wasabi
  - box to wasabi backup
  - box wasabi transfer
  - RcloneView box
  - RcloneView wasabi
  - cloud to cloud sync
  - box backup object storage
  - wasabi S3 backup
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Box to Wasabi — Cloud Backup with RcloneView

> Keep an independent copy of your Box content in Wasabi object storage with a repeatable one-way sync.

Box is a convenient place to collaborate, but a second copy outside the platform protects you from accidental deletions, account lockouts, and retention gaps. Wasabi is S3-compatible object storage, which makes it a natural target for that copy. RcloneView connects both services in one window, and it does so on the FREE license: Connect S3-compatible storage with full read/write, no upgrade needed.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Box and Wasabi as Remotes

Box uses browser-based OAuth. In RcloneView, add a new remote, choose Box, and sign in when the browser opens. If your organization uses Box for Business, the remote needs `box_sub_type = enterprise`. Wasabi is added as an S3-compatible remote: enter your Access Key, Secret Key, and the endpoint for your Wasabi region.

Once both remotes appear in the Remote Manager, open them in two Explorer panels side by side. You can then browse the Box folder tree on the left and a Wasabi bucket on the right before configuring anything.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Wasabi remotes in RcloneView" class="img-large img-center" />

## Preview with Dry Run Before You Sync

Imagine a design agency with 800 GB of client project folders in Box. Before the first sync, run a Dry Run. It lists which files would be copied and which would be deleted, without changing anything. This is the cheapest insurance against pointing a sync at the wrong bucket path.

For a backup, one-way sync ("Modifying destination only") is the right direction: Box stays the source of truth and Wasabi mirrors it. Remember that a sync also deletes destination files that no longer exist in the source, so use a dedicated bucket or prefix for the mirror.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between Box and Wasabi" class="img-large img-center" />

## Configure the Sync Job

The Job wizard walks through four steps: storage, advanced settings, filters, and scheduling. Raise the number of file transfers if you have many small documents, and enable checksum comparison when you want hash-based verification. Predefined filters include a Box Docs option, useful because Box Notes and similar online-only items do not behave like regular files.

Name the job with letters, digits, hyphens, or underscores, save it, and run it. Progress, speed, and file counts appear in the Transferring tab.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved Box to Wasabi sync job" class="img-large img-center" />

## Schedule and Verify

Schedule-based sync is a PLUS feature, with crontab-style fields and a simulator that previews upcoming run times. A nightly run keeps the Wasabi copy current. After each run, open Job History to check status, size, and file count, or use Folder Compare to confirm the two sides match.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Box remote through OAuth and your Wasabi remote with its keys and endpoint.
3. Create a sync job from Box to a dedicated Wasabi bucket, and run a Dry Run first.
4. Run the job, then verify with Folder Compare and Job History.

A tested, scheduled mirror turns Box from a single point of failure into one half of a real backup.

---

**Related Guides:**

- [Migrate Box to Wasabi](https://rcloneview.com/support/blog/migrate-box-to-wasabi-rcloneview)
- [Sync Google Drive to Box](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [Fix Wasabi Sync Errors](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)

<CloudSupportGrid />
