---
slug: migrate-mailru-cloud-to-backblaze-b2-rcloneview
title: "Migrate Mail.ru Cloud to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - morgan
description: "Move files from Mail.ru Cloud to Backblaze B2 with RcloneView: connect both remotes, preview with Dry Run, transfer, and verify with Folder Compare."
keywords:
  - migrate Mail.ru Cloud to Backblaze B2
  - Mail.ru Cloud backup
  - Mail.ru Cloud to B2
  - Backblaze B2 migration
  - cloud to cloud transfer
  - RcloneView migration
  - Mail.ru Cloud rclone
  - move files to Backblaze B2
tags:
  - RcloneView
  - mailru
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Mail.ru Cloud to Backblaze B2 — Transfer Files with RcloneView

> Copy a Mail.ru Cloud library into Backblaze B2 object storage from one window, with a preview before anything moves and a comparison after.

If years of documents and photos live in Mail.ru Cloud, a second copy in an object store gives you an independent archive. RcloneView connects both services as remotes and runs the transfer as a cloud-to-cloud job, so files do not need to be downloaded to a laptop first. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Both Remotes

Open the Remote tab and click New Remote. Add Mail.ru Cloud first, following the prompts for that provider, then add Backblaze B2 with an Application Key ID and Application Key from the B2 console. Create the bucket in B2 beforehand so you have a destination to point at.

Open each remote in its own Explorer panel. Browse the Mail.ru Cloud folders on the left and the B2 bucket on the right to confirm both respond before you build a job.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Plan the Transfer

Decide whether to move everything or a slice. A studio archiving 400 GB of project folders might copy one top-level folder first as a pilot. In the sync wizard, choose Mail.ru Cloud as the source and a B2 bucket folder as the destination, then give the job a name using letters, numbers, hyphens, or underscores.

For a migration, a Copy job is the safer choice because it never deletes from the source. Use Sync only when you want the destination to mirror the source exactly.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Mail.ru Cloud to Backblaze B2" class="img-large img-center" />

## Preview, Run, and Monitor

Run a Dry Run first. It lists the files that would be copied or deleted without changing anything, which catches a wrong destination path early. Then start the job and watch progress, speed, and file counts in the Transferring tab.

Object storage handles many parallel uploads well, but consumer clouds can be stricter. If you see errors, lower the number of file transfers in Step 2 of the wizard and keep equality checkers at 4 or less.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Mail.ru Cloud to B2 transfer in RcloneView" class="img-large img-center" />

## Verify and Keep It Current

When the job finishes, open Folder Compare with Mail.ru Cloud on one side and B2 on the other. Filter for left-only and different files to find anything that did not arrive, and copy only those items. Job History records status, duration, size, and file count for each run.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between Mail.ru Cloud and Backblaze B2" class="img-large img-center" />

To keep the B2 copy fresh, save the job and, with a PLUS license, add a crontab-style schedule in Step 4.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Mail.ru Cloud and Backblaze B2 as remotes in the Remote tab.
3. Create a Copy job from Mail.ru Cloud to your B2 bucket and run a Dry Run.
4. Start the transfer, then verify with Folder Compare.

A verified second copy in B2 turns a single-provider library into a backed-up one.

---

**Related Guides:**

- [Manage Mail.ru Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Manage Backblaze B2 Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrate Yandex Disk to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-yandex-disk-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
