---
slug: migrate-zoho-workdrive-to-backblaze-b2-rcloneview
title: "Migrate Zoho WorkDrive to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - jay
description: "Move files from Zoho WorkDrive to Backblaze B2 directly with RcloneView, using cloud-to-cloud transfer, dry run preview, and job scheduling."
keywords:
  - migrate Zoho WorkDrive to Backblaze B2
  - Zoho WorkDrive backup
  - Backblaze B2 migration
  - cloud to cloud transfer
  - RcloneView migration guide
  - Zoho WorkDrive to B2
  - cloud storage migration tool
  - rclone Zoho WorkDrive
  - cross-cloud file transfer
  - affordable cloud archive
tags:
  - RcloneView
  - zoho
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Zoho WorkDrive to Backblaze B2 — Transfer Files with RcloneView

> Move Zoho WorkDrive files straight into Backblaze B2 without routing anything through a local disk first.

Teams that use Zoho WorkDrive for day-to-day collaboration often need a cheaper, long-term tier for finished projects and old client folders — Backblaze B2 is a common choice for that archive layer. RcloneView connects both remotes in one window and copies files cloud-to-cloud, so a shared drive full of documents and media doesn't have to be downloaded and re-uploaded through a laptop's local storage. RcloneView mounts and syncs 90+ providers from one window on Windows, macOS, and Linux, so browsing Zoho WorkDrive and archiving to Backblaze B2 never requires switching applications.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Zoho WorkDrive and Backblaze B2

Add Zoho WorkDrive as a remote through New Remote and select the OAuth-based setup; because Zoho WorkDrive requires a region selection during configuration, pick the data center that matches your account before finishing setup. Backblaze B2 uses credential entry instead — enter the Application Key ID and Application Key from the B2 key management page, and RcloneView validates the connection before saving. Both remotes then appear as tabs in the Explorer panels, ready to browse side by side.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Zoho WorkDrive and Backblaze B2 as remotes in RcloneView" class="img-large img-center" />

Once connected, open the Remote Manager to confirm both entries and adjust settings like folder scope before the first transfer.

## Running the Cloud-to-Cloud Transfer

Open a two-panel layout with Zoho WorkDrive on one side and your Backblaze B2 bucket on the other, then drag the folders you want to migrate across — dragging between two different remotes always performs a copy, leaving the Zoho WorkDrive originals untouched until you're ready to clean up. For larger migrations, build a Sync job instead: pick Zoho WorkDrive as source and the B2 bucket as destination, set concurrent file transfers in Advanced Settings, and run a Dry Run first to preview exactly which files will move before anything actually transfers.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer job from Zoho WorkDrive to Backblaze B2" class="img-large img-center" />

## Verifying and Scheduling the Migration

Enable checksum comparison in the sync job's Advanced Settings so RcloneView confirms files match by hash and size rather than just file size, and set the retry count in case a large batch hits a transient network error. After the job completes, check Job History to review total files transferred, time spent, and any errored items before archiving the source folder.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Zoho WorkDrive to Backblaze B2 transfer" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Zoho WorkDrive remote, selecting the correct region.
3. Add your Backblaze B2 remote using your Application Key ID and Key.
4. Run a Dry Run, then execute the sync or copy job and confirm results in Job History.

A clean cloud-to-cloud migration keeps your Zoho WorkDrive workspace lean while giving finished files a durable, lower-cost home.

---

**Related Guides:**

- [Manage Zoho WorkDrive — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Manage Backblaze B2 — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Sync Zoho WorkDrive to OneDrive — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)

<CloudSupportGrid />
