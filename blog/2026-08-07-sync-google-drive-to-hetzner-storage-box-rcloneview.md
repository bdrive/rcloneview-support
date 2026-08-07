---
slug: sync-google-drive-to-hetzner-storage-box-rcloneview
title: "Sync Google Drive to Hetzner Storage Box — Cloud Backup with RcloneView"
authors:
  - steve
description: "Sync Google Drive files to a Hetzner Storage Box for affordable offsite backup using RcloneView's cross-provider sync jobs."
keywords:
  - sync google drive to hetzner
  - google drive hetzner storage box backup
  - hetzner storage box rclone
  - google drive offsite backup
  - budget cloud storage sync
  - european cloud storage backup
  - google drive rcloneview sync
  - hetzner box backup
  - google drive sftp backup
  - cloud to cloud backup
tags:
  - RcloneView
  - google-drive
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Google Drive to Hetzner Storage Box — Cloud Backup with RcloneView

> Keep a low-cost, second copy of your Google Drive files on a Hetzner Storage Box without leaving your desktop or writing a single script.

Google Drive is convenient for day-to-day collaboration, but it isn't designed as a long-term backup target on its own — a second copy on independent infrastructure protects against account lockouts, accidental deletions, or quota surprises. Hetzner Storage Box is a popular choice for this because of its low per-terabyte cost, and RcloneView connects the two directly through a scheduled sync job, no command-line scripting required. RcloneView mounts and syncs both providers from one window, on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Both Remotes

Add Google Drive first through Remote Manager using the standard OAuth browser login — no API key entry is needed since RcloneView handles the authentication flow automatically. Then add the Hetzner Storage Box as an SFTP remote, entering the box's host address and your SSH credentials in the Credential Entry setup screen.

Once both remotes appear as tabs in the Explorer panel, open a split-panel layout to browse them side by side. This is a useful sanity check before configuring any automated job — confirm the destination folder structure on the Storage Box matches what you expect before pointing a sync at it.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

## Configuring the Sync Job

In the sync wizard, select Google Drive as the source and the Hetzner Storage Box as the destination, then choose **One-way** sync direction so the Storage Box mirrors Google Drive without deleting anything on the source. In Step 3, apply filters to skip file types you don't need backed up — excluding `.tmp` files or Google Docs-only formats keeps the transferred volume smaller and the job faster on subsequent runs.

Enable checksum comparison in Advanced Settings so RcloneView only re-transfers files that have actually changed, rather than everything with a newer modified date — this matters most on Google Drive, where metadata timestamps can shift without content changes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Hetzner Storage Box in RcloneView" class="img-large img-center" />

## Automating and Monitoring the Backup

Run a Dry Run first to preview exactly which files will copy, then execute the job and use live transfer monitoring in the Transferring tab of the Info View, which shows transfer speed, file count, and total size as the job progresses. PLUS license holders can attach a crontab-style schedule so the sync repeats automatically without manual intervention, and Job History keeps a permanent record of each run's duration and outcome for auditing later.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Google Drive to Hetzner Storage Box sync job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connect Google Drive via OAuth and add the Hetzner Storage Box as an SFTP remote.
3. Create a one-way sync job with filters and checksum comparison enabled.
4. Run a Dry Run, then execute the sync and monitor it in the Transferring tab.

A second copy on independent, low-cost infrastructure is one of the simplest ways to protect Google Drive data, and RcloneView keeps that routine running without manual file juggling.

---

**Related Guides:**

- [Manage Hetzner Storage Box Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Sync Dropbox to Hetzner Storage Box — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)
- [Manage Google Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
