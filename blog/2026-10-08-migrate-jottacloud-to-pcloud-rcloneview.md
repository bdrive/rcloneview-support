---
slug: migrate-jottacloud-to-pcloud-rcloneview
title: "Migrate Jottacloud to pCloud — Transfer Files with RcloneView"
authors:
  - casey
description: "Move files from Jottacloud to pCloud with RcloneView: connect both remotes, preview with Dry Run, run a cloud-to-cloud transfer, and verify with Folder Compare."
keywords:
  - migrate Jottacloud to pCloud
  - Jottacloud to pCloud transfer
  - Jottacloud pCloud migration
  - cloud to cloud transfer
  - RcloneView Jottacloud
  - RcloneView pCloud
  - move Jottacloud files
  - Jottacloud alternative
  - rclone GUI migration
tags:
  - RcloneView
  - jottacloud
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Jottacloud to pCloud — Transfer Files with RcloneView

> RcloneView moves a Jottacloud library into pCloud with a previewed, verifiable cloud-to-cloud transfer instead of a manual download and re-upload.

Switching from Jottacloud to pCloud usually means years of photos, documents, and archives that nobody wants to download and upload by hand. RcloneView connects both services as remotes and transfers the data between them, so you can preview, run, and verify the move from one window.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Both Remotes

Open Remote > New Remote and add Jottacloud, then add pCloud. pCloud uses OAuth, so a browser window opens for you to sign in and the remote connects automatically. Jottacloud is set up through the same New Remote wizard by following its prompts.

Open each remote in its own Explorer panel and browse the root folders. Seeing both sides listed confirms the connections work before you move any data.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud and pCloud remotes in RcloneView" class="img-large img-center" />

## Preview the Transfer With Dry Run

With Jottacloud on the left and pCloud on the right, drag folders across for a quick copy, or build a sync job for the full library. Between different remotes, drag and drop copies rather than moves, so the source stays intact until you decide otherwise.

For a full migration, create the job in the four-step wizard, choose the source and destination folders, and run a Dry Run first. It lists the files that would be copied or deleted without changing anything.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Jottacloud to pCloud in RcloneView" class="img-large img-center" />

## Run the Job and Watch Progress

Start the job and follow it in the Transferring tab, which shows progress, speed, and file counts. For a large library, keep transfers moderate in Step 2 and leave "Retry entire sync if fails" at 3 so brief network interruptions do not end the run.

If you plan to migrate in stages, use the filtering step to limit by folder, file age, or predefined types such as Image or Document.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring the Jottacloud to pCloud transfer in RcloneView" class="img-large img-center" />

## Verify Before You Cancel Anything

Open Compare with Jottacloud and pCloud side by side. Show left-only and different files to find anything that did not arrive, then copy only those items. Check Job History for the final status before you decide to retire the old account.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the migration with Folder Compare in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Jottacloud and pCloud as remotes and browse both.
3. Create a sync or copy job from Jottacloud to pCloud and run a Dry Run.
4. Run the job, then confirm with Folder Compare and Job History.

A previewed and verified transfer lets you switch storage providers without risking the files you already have.

---

**Related Guides:**

- [Migrate Jottacloud to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [Migrate pCloud to Dropbox with RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-dropbox-rcloneview)
- [Manage Jottacloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
