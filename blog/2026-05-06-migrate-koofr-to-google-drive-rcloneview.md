---
slug: migrate-koofr-to-google-drive-rcloneview
title: "Migrate Koofr to Google Drive — Transfer Files with RcloneView"
authors:
  - tayson
description: "Move your files from Koofr to Google Drive with RcloneView. Transfer cloud data directly between providers, preserving folder structure without local downloads."
keywords:
  - migrate Koofr to Google Drive
  - Koofr to Google Drive transfer
  - RcloneView Koofr Google Drive migration
  - cloud to cloud migration tool
  - Koofr migration GUI
  - move files Koofr Google Drive
  - Koofr cloud migration
  - Google Drive import from Koofr
  - RcloneView cloud migration
  - Koofr file transfer tool
tags:
  - koofr
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Koofr to Google Drive — Transfer Files with RcloneView

> RcloneView moves your Koofr files directly to Google Drive — preserving folder structure, verifying integrity, and requiring no intermediate local storage.

Koofr's European privacy-focused storage is popular among users who prioritize GDPR compliance and data residency. When teams shift to Google Workspace and need their Koofr content in Google Drive, RcloneView handles the migration cleanly: connecting to both providers simultaneously and transferring data in a direct cloud-to-cloud path.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Koofr and Google Drive in RcloneView

Add both providers as remotes before starting the migration. For Koofr, go to Remote tab > New Remote, select Koofr, and complete the connection using your Koofr credentials. For Google Drive, select Google Drive and complete the OAuth browser authentication — Google Drive's OAuth flow is fully automated and requires no API keys.

Once both remotes are configured, the dual-panel explorer lets you see Koofr on one side and Google Drive on the other. This visual comparison helps you plan the migration: confirm folder structures, identify nested directories, and decide whether to migrate the entire Koofr root or specific subfolders.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Google Drive remotes in RcloneView" class="img-large img-center" />

## Set Up the Migration Sync Job

Create a named sync job in RcloneView for a controlled, repeatable migration:

1. **Source:** Select your Koofr remote (root or specific folder)
2. **Destination:** Select your Google Drive remote and target folder
3. **Job name:** Use something descriptive like `koofr-to-gdrive-migration`
4. **Mode:** Choose Copy to move files without removing them from Koofr

For teams migrating large shared directories, the **Max folder depth** filter can help you migrate top-level folders independently, validating each tier before proceeding.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from Koofr to Google Drive in RcloneView" class="img-large img-center" />

## Preview with Dry Run Before Transferring

Use RcloneView's dry run mode to preview the migration scope without moving any files. The dry run output lists every file that would be copied, organized by folder — giving you an accurate picture of what the job will do. This is especially useful when migrating nested Koofr folder structures where you want to verify the destination layout before committing.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Monitor Transfer Progress and Review History

RcloneView's Transfer tab shows live progress for the Koofr-to-Google Drive migration — files being transferred, current speed, and total bytes moved. After completion, Job History logs the full summary: total transfer size, duration, file count, and any errors encountered. If Google Drive's API rate limits slowed the transfer, the history log captures those retry events.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Koofr and Google Drive as remotes in Remote tab > New Remote.
3. Create a Copy or Sync job from Koofr to your Google Drive destination.
4. Run a dry run to preview, then execute the migration.

Moving from Koofr to Google Drive is a straightforward cloud-to-cloud operation in RcloneView — no local disk space required, and full transparency into every file transferred.

---

**Related Guides:**

- [Manage Koofr Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Manage Google Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Koofr vs Jottacloud — European Cloud Storage Comparison with RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
