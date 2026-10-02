---
slug: migrate-sugarsync-to-backblaze-b2-rcloneview
title: "Migrate SugarSync to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - steve
description: "Move files from SugarSync to Backblaze B2 with RcloneView: connect both remotes, dry-run the transfer, and verify results with Folder Compare."
keywords:
  - migrate SugarSync to Backblaze B2
  - SugarSync to B2 transfer
  - SugarSync migration
  - Backblaze B2 backup
  - cloud to cloud migration
  - RcloneView SugarSync
  - SugarSync alternative storage
  - rclone SugarSync B2
  - cloud migration GUI
  - object storage backup
tags:
  - RcloneView
  - sugarsync
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate SugarSync to Backblaze B2 — Transfer Files with RcloneView

> Move years of SugarSync folders into Backblaze B2 buckets without downloading and re-uploading by hand.

Teams that have used SugarSync for a long time often want their archives in object storage, where buckets and application keys are easier to automate. RcloneView connects to both services in one window, so you can copy folders straight from SugarSync to Backblaze B2 and check the result before retiring the old account. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Both Remotes

Open the Remote tab and click New Remote. Add SugarSync with your account credentials, then add Backblaze B2 with an Application Key ID and Application Key from the Backblaze key management page. Create the destination bucket in Backblaze first so you have a clear target.

Place SugarSync in one Explorer panel and the B2 bucket in another. Browse both to confirm access before configuring anything.

<img src="/support/images/en/blog/new-remote.png" alt="Adding SugarSync and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Copy With Drag and Drop or a Sync Job

For a small folder, drag it from the SugarSync panel to the B2 panel. Dragging between different remotes performs a copy, so the original stays in place. For a full migration, use the 4-step sync wizard: choose source and destination, set transfer counts, add filters, and optionally schedule it with a PLUS license.

Use a Copy job rather than a Sync job for the first pass, so nothing on the destination is deleted.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from SugarSync to Backblaze B2 in RcloneView" class="img-large img-center" />

## Preview, Monitor, and Verify

Run a Dry Run first. It lists the files that would be copied, so you can catch a wrong path before data moves. While the job runs, the Transferring tab shows progress, speed, and file counts.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a SugarSync to B2 transfer in the Transferring tab" class="img-large img-center" />

When it finishes, open Compare to view SugarSync and B2 side by side. Left-only files are anything that has not arrived yet, and you can copy them across directly from the compare view. Job History keeps a record of each run.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare confirming SugarSync and Backblaze B2 contents match" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add SugarSync and Backblaze B2 as remotes and create your target bucket.
3. Create a Copy job, run a Dry Run, then start the transfer.
4. Verify with Folder Compare before closing the SugarSync account.

A verified copy in B2 lets you retire the old service with confidence.

---

**Related Guides:**

- [Migrate SugarSync to Google Drive and OneDrive with RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-google-drive-onedrive-rcloneview)
- [Manage SugarSync Storage with RcloneView](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [Manage Backblaze B2 Storage with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
