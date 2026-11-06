---
slug: migrate-dropbox-to-koofr-rcloneview
title: "Migrate Dropbox to Koofr — Transfer Files with RcloneView"
authors:
  - robin
description: "Migrate Dropbox to Koofr with RcloneView: connect both remotes, run a dry run, copy cloud to cloud, and verify the result with Folder Compare."
keywords:
  - migrate Dropbox to Koofr
  - Dropbox to Koofr transfer
  - Dropbox Koofr migration
  - RcloneView Dropbox
  - RcloneView Koofr
  - cloud to cloud transfer
  - move files from Dropbox
  - Koofr European cloud storage
  - rclone GUI migration
  - Dropbox for Business migration
tags:
  - RcloneView
  - dropbox
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Dropbox to Koofr — Transfer Files with RcloneView

> Move a Dropbox account into Koofr cloud to cloud, with a preview before anything is copied and a comparison afterwards.

A design agency winds down a client account, or a freelancer wants their archive hosted by a European provider. Either way, dragging thousands of Dropbox folders through a laptop is slow and easy to get wrong. RcloneView connects Dropbox and Koofr in one window, runs the copy between them, and gives you a Dry Run and Folder Compare to confirm the result. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Dropbox and Koofr as Remotes

Open the Remote tab and choose New Remote. Dropbox signs in through OAuth: your browser opens, you approve access, and RcloneView connects automatically. For a company account, Dropbox for Business needs the `dropbox_business = true` setting in the remote configuration.

Add Koofr as the second remote. Once both appear in Remote Manager, open them in two Explorer panels side by side. Browse the source tree and the destination before you move anything, so you know which folders matter.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Koofr remotes in RcloneView" class="img-large img-center" />

## Plan the Copy With Filters and a Dry Run

Most Dropbox accounts hold scratch files you do not want to carry over. Step 3 of the job wizard offers a max file size, a max file age, and a folder depth limit. Predefined filters cover Music, Video, Image, and Document files, and custom rules can exclude patterns such as `.git/` folders or `.iso` files.

Run a Dry Run before the real job. It lists the files that would be copied or deleted without touching either side. For a migration, pick a Copy job rather than a mirroring sync, so nothing already stored on Koofr is removed.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud transfer from Dropbox to Koofr in RcloneView" class="img-large img-center" />

## Run the Transfer and Watch Progress

Start the job and follow it in the Transferring tab, which shows progress, speed, and file counts. For a large library, raise the number of file transfers in Step 2, but keep the equality checkers modest if either service responds slowly. "Retry entire sync if fails" defaults to 3, which absorbs transient network errors.

If the library is too big for one sitting, save the job in Job Manager and re-run it later. A Copy job only transfers what is missing or different, so a second pass picks up where the first stopped.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Dropbox to Koofr transfer in the Transferring tab" class="img-large img-center" />

## Verify With Folder Compare

When the job finishes, open Compare with Dropbox on the left and Koofr on the right. Filters for left-only, right-only, and different files show what remains. The copy-right action transfers any leftovers. Job History records status, size, speed, and file count for each run, which is useful documentation of the migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Dropbox to Koofr migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Dropbox (OAuth) and Koofr as remotes.
3. Create a Copy job with filters, then run a Dry Run.
4. Run the job, then confirm the result with Folder Compare.

Keep the Dropbox account untouched until Compare shows both sides match.

---

**Related Guides:**

- [Manage Koofr Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrate Koofr to Dropbox with RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [Migrate Dropbox to pCloud with RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
