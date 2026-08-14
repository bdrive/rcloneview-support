---
slug: sync-koofr-to-proton-drive-rcloneview
title: "Sync Koofr to Proton Drive — Cloud Backup with RcloneView"
authors:
  - alex
description: "Learn how to sync files from Koofr to Proton Drive using RcloneView, a cross-platform GUI for keeping two clouds automatically backed up."
keywords:
  - sync Koofr to Proton Drive
  - Koofr Proton Drive backup
  - RcloneView Koofr
  - RcloneView Proton Drive
  - cloud to cloud sync
  - Koofr backup
  - Proton Drive sync
  - encrypted cloud backup
  - multi-cloud sync tool
tags:
  - RcloneView
  - koofr
  - proton-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Koofr to Proton Drive — Cloud Backup with RcloneView

> Keep a standing backup of your Koofr files on Proton Drive without downloading anything to a local disk first.

Koofr is a European cloud storage service that can also aggregate other accounts, while Proton Drive adds end-to-end encrypted storage from the makers of Proton Mail. Some users want both — Koofr for its unified view, Proton Drive for its privacy guarantees — and RcloneView lets you connect them side by side and sync between them directly, cloud to cloud, without routing files through a local drive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Adding Koofr and Proton Drive as Remotes

Add Koofr as a remote through Remote Manager using its account credentials, then repeat the process for Proton Drive, which authenticates with your Proton email, password, and optional two-factor code. Both remotes appear as separate tabs in the explorer, so you can open Koofr in one panel and Proton Drive in the other for a direct side-by-side view before setting up any transfer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Proton Drive as remotes in RcloneView" class="img-large img-center" />

Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license too, so a Koofr-to-Proton-Drive sync sits alongside any object-storage backups you already run — all from the same window.

## Setting Up a One-Way Sync

Open the Sync wizard from the Home tab and select Koofr as source, Proton Drive as destination, choosing "Modifying destination only" for a one-way backup that never alters your Koofr originals. Under Advanced Settings, enable checksum comparison so files are matched by hash and size rather than just modification time, which matters when Koofr and Proton Drive report timestamps differently.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Koofr to Proton Drive" class="img-large img-center" />

Before running it live, use Dry Run to see exactly which files will be copied, and apply filters — by file type, max size, or folder depth — if you only want specific folders mirrored rather than the entire Koofr account.

## Scheduling and Tracking the Backup

Save the configuration as a job in Job Manager, and PLUS-license users can attach a crontab-style schedule so the Koofr-to-Proton-Drive sync runs automatically on a set cadence, with a preview of upcoming run times before you commit.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Koofr to Proton Drive sync job" class="img-large img-center" />

Each execution logs to Job History with duration, transfer speed, file count, and total size transferred, giving you a record to confirm the backup ran cleanly or to spot a run that needs retrying.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Koofr and Proton Drive as remotes in Remote Manager.
3. Create a one-way sync job from Koofr to Proton Drive and run a Dry Run first.
4. Save the job and, if you're on PLUS, attach a schedule for hands-off recurring backups.

Once configured, your Koofr files stay mirrored on Proton Drive automatically, giving you an encrypted copy without ever leaving RcloneView.

---

**Related Guides:**

- [Manage Proton Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Manage Koofr Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrate Proton Drive to Backblaze B2 — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
