---
slug: sync-google-drive-to-koofr-rcloneview
title: "Sync Google Drive to Koofr — Cloud Backup with RcloneView"
authors:
  - alex
description: "Sync Google Drive to Koofr with RcloneView for a European-hosted backup copy of your files, configured without the command line."
keywords:
  - sync google drive to koofr
  - google drive koofr backup
  - RcloneView koofr sync
  - european cloud backup google drive
  - koofr cloud storage sync
  - google drive to koofr migration
  - cross-cloud sync tool
  - koofr google drive transfer
  - cloud-to-cloud sync rcloneview
tags:
  - RcloneView
  - google-drive
  - koofr
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Google Drive to Koofr — Cloud Backup with RcloneView

> Keep a European-hosted mirror of your Google Drive on Koofr without writing a single rclone command.

Teams with EU-based clients or data residency preferences often want a second copy of their Google Drive content sitting on European infrastructure. Koofr, based in the EU, is a natural fit for that role, but manually re-uploading files after every change isn't sustainable. RcloneView connects both accounts and runs the sync as a saved job, keeping the Koofr copy current without any manual file shuffling.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Google Drive and Koofr

Both remotes use the setup methods native to each provider: Google Drive connects through an OAuth browser login, and Koofr is added the same way from Remote tab > New Remote. Once both appear in the Remote Manager, open two Explorer panels side by side — one on Google Drive, one on Koofr — so you can drag and drop a quick test copy before setting up an automated job. Dragging between the two panels always copies rather than moves, since they're separate remotes.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Koofr remotes in RcloneView" class="img-large img-center" />

## Configuring the Sync Job

Launch the sync wizard from the Home tab and set Google Drive as the source, Koofr as the destination. Choose one-way "Modifying destination only" so the Koofr copy always mirrors Drive without accidentally deleting anything back on the source. In Step 2, enabling checksum comparison ensures files are matched by content rather than just modification time, which matters when files pass through different sync clients before reaching Drive.

RcloneView's 1:N sync can mirror the same Google Drive folder to Koofr and additional destinations at once, on the FREE license — useful if a second backup target gets added later without rebuilding the job.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Koofr" class="img-large img-center" />

## Running a Dry Run Before the First Sync

Before committing to a full transfer, run Dry Run to preview exactly which files will copy and confirm none will be deleted from Koofr unexpectedly. This is especially useful the first time a job runs against a Koofr account that already has content in the destination folder, since it surfaces conflicts before they become real overwrites.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Google Drive to Koofr in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add both Google Drive and Koofr as remotes.
3. Create a one-way sync job with checksum comparison enabled.
4. Run a dry run, then execute the job to build your first Koofr mirror.

A standing Google Drive to Koofr sync gives you a European-hosted backup you can rerun in a couple of clicks, so your recovery copy never depends on rebuilding the job from scratch.

---

**Related Guides:**

- [Migrate Koofr to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Manage Koofr Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Sync Koofr to Amazon S3 — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-amazon-s3-rcloneview)

<CloudSupportGrid />
