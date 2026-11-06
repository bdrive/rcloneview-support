---
slug: migrate-pcloud-to-jottacloud-rcloneview
title: "Migrate pCloud to Jottacloud — Transfer Files with RcloneView"
authors:
  - alex
description: "Migrate pCloud to Jottacloud with RcloneView: connect both remotes, preview with a dry run, copy cloud to cloud, and verify with Folder Compare."
keywords:
  - migrate pCloud to Jottacloud
  - pCloud to Jottacloud transfer
  - pCloud Jottacloud migration
  - RcloneView pCloud
  - RcloneView Jottacloud
  - cloud to cloud transfer
  - move files from pCloud
  - European cloud storage migration
  - rclone GUI migration
tags:
  - RcloneView
  - pcloud
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate pCloud to Jottacloud — Transfer Files with RcloneView

> Move a pCloud library into Jottacloud cloud to cloud, with a preview first and a verification pass at the end.

A photographer consolidating client archives, or a family moving shared folders to a new provider, faces the same chore: thousands of files sitting in one cloud that need to land in another. Downloading everything to a laptop and uploading it again is slow and fragile. RcloneView connects pCloud and Jottacloud in one window, runs the copy between them, and offers Dry Run and Folder Compare to confirm the result. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect pCloud and Jottacloud as Remotes

Open the Remote tab and choose New Remote. pCloud signs in through OAuth: your browser opens, you approve access, and RcloneView connects automatically. Add Jottacloud as the second remote by following the on-screen prompts for that provider.

When both appear in Remote Manager, open them in two Explorer panels side by side. Browsing the source and destination first helps you decide which folders to move and where they should go.

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Jottacloud remotes in RcloneView" class="img-large img-center" />

## Plan the Copy With Filters and a Dry Run

Step 3 of the job wizard lets you limit the transfer by max file size, max file age, or folder depth. Predefined filters cover Music, Video, Image, and Document files, and custom rules can exclude patterns such as `.git/` folders or `.iso` files, which is handy for skipping installers and disk images.

Run a Dry Run before the real job. It lists the files that would be copied or deleted without changing either side. For a migration, choose a Copy job rather than a mirroring sync, so nothing already in Jottacloud is removed.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud transfer from pCloud to Jottacloud in RcloneView" class="img-large img-center" />

## Run the Transfer and Watch Progress

Start the job and follow it in the Transferring tab, which shows progress, speed, and file counts. For a large library, raise the number of file transfers in Step 2, but keep the equality checkers modest if either backend responds slowly. "Retry entire sync if fails" defaults to 3, which absorbs transient network errors.

If one session is not enough, save the job in Job Manager and run it again later. A Copy job only transfers files that are missing or different, so repeat runs pick up where the last one stopped.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a pCloud to Jottacloud copy job in RcloneView" class="img-large img-center" />

## Verify With Folder Compare

Once the job completes, open Compare with pCloud on the left and Jottacloud on the right. Filters for left-only, right-only, and different files show what is left to move, and the copy-right action transfers any stragglers. Job History keeps the status, size, speed, and file count of each run as a record of the migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing pCloud and Jottacloud folders after migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add pCloud (OAuth) and Jottacloud as remotes.
3. Create a Copy job with filters, then run a Dry Run.
4. Run the job, then confirm the result with Folder Compare.

Keep the pCloud account untouched until Compare shows both sides match.

---

**Related Guides:**

- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Manage Jottacloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migrate Jottacloud to pCloud with RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-pcloud-rcloneview)

<CloudSupportGrid />
