---
slug: migrate-box-to-koofr-rcloneview
title: "Migrate Box to Koofr — Transfer Files with RcloneView"
authors:
  - jay
description: "Migrate Box to Koofr with RcloneView: connect both remotes, dry-run the transfer, copy cloud to cloud, and verify results with Folder Compare."
keywords:
  - migrate Box to Koofr
  - Box to Koofr transfer
  - Box Koofr migration
  - RcloneView Box
  - RcloneView Koofr
  - cloud to cloud transfer
  - move files from Box
  - Koofr European cloud storage
  - rclone GUI migration
  - Box Docs filter
tags:
  - RcloneView
  - box
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to Koofr — Transfer Files with RcloneView

> Move a Box workspace into Koofr without downloading anything to your own disk first.

Teams leave Box for many reasons: a project wrapped up, a contract ended, or a preference for a European storage provider. Koofr is a natural landing spot, but moving years of folders by hand is slow and error-prone. RcloneView connects both services in one window and runs the copy cloud to cloud, with a dry run and a comparison step to confirm nothing was missed. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Box and Koofr as Remotes

Open the Remote tab and choose New Remote. Box signs in through OAuth: your browser opens, you approve access, and RcloneView connects automatically. If you are migrating a company account, Box for Business needs the `box_sub_type = enterprise` setting in the remote configuration.

Add Koofr as a second remote the same way. Once both appear in Remote Manager, open them side by side in two Explorer panels so you can browse the source and the destination before moving a single file.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Koofr remotes in RcloneView" class="img-large img-center" />

## Plan the Copy With Filters and a Dry Run

A Box account usually holds more than the files you want to keep. Step 3 of the sync wizard lets you set a max file size, a max file age, or a folder depth limit. There is also a predefined Box Docs filter, plus custom rules such as excluding `.git/` folders or `.iso` files.

Before running anything, use Dry Run. It lists the files that would be copied and deleted without changing either side. For a migration, choose a Copy job rather than a mirroring sync, so nothing on Koofr is removed if the destination already contains data.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud transfer from Box to Koofr in RcloneView" class="img-large img-center" />

## Run the Transfer and Watch Progress

Start the job and follow it in the Transferring tab: progress, speed, and file counts are shown live. For a large library, raise the number of file transfers in Step 2, but keep the equality checkers modest if either backend responds slowly. "Retry entire sync if fails" defaults to 3, which helps with transient network errors.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Box to Koofr transfer in the Transferring tab" class="img-large img-center" />

## Verify With Folder Compare

When the job finishes, open Compare with Box on the left and Koofr on the right. Filters for left-only, right-only, and different files show exactly what remains. Use the copy-right action to transfer any leftovers. Job History keeps the status, size, and file count of each run as a record of the migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Box and Koofr folders after migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Box (OAuth) and Koofr as remotes.
3. Create a Copy job with filters, then run a Dry Run.
4. Run the job, then confirm the result with Folder Compare.

Keep the Box account untouched until Compare shows both sides match.

---

**Related Guides:**

- [Manage Box Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Manage Koofr Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrate Box to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
