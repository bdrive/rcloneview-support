---
slug: migrate-opendrive-to-backblaze-b2-rcloneview
title: "Migrate OpenDrive to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - tayson
description: "Move files from OpenDrive to Backblaze B2 with RcloneView: connect both remotes, dry-run the copy, run the transfer, and verify with Folder Compare."
keywords:
  - migrate OpenDrive to Backblaze B2
  - OpenDrive to B2 transfer
  - OpenDrive migration
  - Backblaze B2 backup
  - cloud to cloud transfer
  - RcloneView OpenDrive
  - RcloneView Backblaze B2
  - move files OpenDrive B2
tags:
  - RcloneView
  - opendrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate OpenDrive to Backblaze B2 — Transfer Files with RcloneView

> Move an OpenDrive library into Backblaze B2 buckets with a previewed, verifiable cloud-to-cloud transfer instead of a manual download and re-upload.

Teams that outgrow a file-sharing account often want object storage for long-term archives. Moving data from OpenDrive to Backblaze B2 by hand means downloading everything locally first. RcloneView connects both services and transfers between them directly, with a Dry Run and a comparison step so you know what moved. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Both Remotes

Open the Remote tab and choose New Remote. Add OpenDrive as one remote and Backblaze B2 as the other. B2 uses an Application Key ID and Application Key, which you create in the Backblaze key management page. Create the destination bucket in Backblaze first so you have a target path ready.

Once both remotes appear in Remote Manager, open them in two Explorer panels side by side. Browsing the top level of each confirms the credentials work before you commit to a large transfer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Plan the Folder Layout

A migration is a good moment to decide how data lands in B2. A common pattern is one bucket per purpose, such as an archive bucket for finished projects, with top-level folders mirroring your current OpenDrive structure. Use Get Size on the largest OpenDrive folders to estimate volume, and copy the most important folders first.

If some file types should stay behind, Step 3 of the sync wizard lets you set max file size, max file age, or custom exclusion rules such as `.iso`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from OpenDrive to Backblaze B2 in RcloneView" class="img-large img-center" />

## Dry Run, Then Transfer

Create a job with OpenDrive as the source and your B2 bucket as the destination. For a migration, a Copy job is the safer choice because it leaves the source untouched; a Sync job can delete files on the destination to match the source. Run a Dry Run first to see the list of files that would be copied.

In Step 2, keep "Retry entire sync if fails" at its default of 3 and consider lowering concurrent transfers if the source throttles. Then run the job and watch progress, speed, and file counts in the Transferring tab.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the OpenDrive to B2 job in RcloneView" class="img-large img-center" />

## Verify Before You Retire the Source

When the job finishes, open Job History to confirm the status is Completed and review total size and file count. Then use Compare on the OpenDrive and B2 folders. Left-only files are items that did not arrive; different files point to size mismatches worth re-copying. Keep the OpenDrive data until the comparison shows no left-only files.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between OpenDrive and Backblaze B2" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add OpenDrive and Backblaze B2 as remotes and create the destination bucket.
3. Build a Copy job, run a Dry Run, then run the transfer.
4. Verify with Job History and Folder Compare before decommissioning the source.

A previewed, verified copy makes the move to B2 predictable even for large libraries.

---

**Related Guides:**

- [Manage OpenDrive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Migrate SugarSync to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [Migrate Koofr to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
