---
slug: sync-yandex-disk-to-onedrive-rcloneview
title: "Sync Yandex Disk to OneDrive — Cloud Backup with RcloneView"
authors:
  - steve
description: "Sync Yandex Disk to OneDrive with RcloneView, mirroring files between the two providers on a schedule from one cross-platform GUI."
keywords:
  - sync yandex disk to onedrive
  - yandex disk onedrive backup
  - yandex disk to microsoft onedrive
  - rcloneview yandex disk
  - cloud to cloud sync
  - yandex disk migration
  - onedrive backup destination
  - cross-cloud file sync
tags:
  - RcloneView
  - yandex-disk
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Yandex Disk to OneDrive — Cloud Backup with RcloneView

> Keeping a working copy in OneDrive while Yandex Disk stays the source doesn't require exporting and re-uploading anything — RcloneView connects both as remotes and syncs the folders directly, cloud to cloud.

Yandex Disk is a common primary storage choice for users and teams working across Russia and neighboring markets, but collaborators or downstream tools often expect files in OneDrive instead — for Office integration, SharePoint hand-off, or simply because that's where the rest of the organization lives. Moving files between the two normally means downloading everything locally first and re-uploading it, which doubles transfer time and burns local disk space unnecessarily. RcloneView connects to both Yandex Disk and OneDrive as remotes in the same window and transfers directly between them, skipping the local round-trip entirely.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Both Remotes

Yandex Disk connects to RcloneView through OAuth browser login — no separate API key or manual token entry required, the same flow used for Google Drive or Dropbox. OneDrive connects the same way. With both authenticated, open two Explorer panels side by side, one pointed at the Yandex Disk root and the other at the target OneDrive folder, so you can confirm the folder structure on each side before configuring a transfer job.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Yandex Disk and OneDrive as remotes in RcloneView" class="img-large img-center" />

RcloneView also syncs and compares folders on the FREE license — there's no separate paid tier required just to move files between two cloud providers, which matters for a one-off migration where you don't want to commit to a subscription for a single transfer.

## Configuring the Sync Job

The sync wizard's Step 1 is where the transfer gets defined: select the Yandex Disk folder as source, the OneDrive folder as destination, and choose "Modifying destination only" for a one-way mirror that keeps OneDrive matching Yandex Disk without touching the original. Before running it for real, use Dry Run to preview exactly which files will be copied — this catches naming issues or unexpectedly large folders before any data actually moves, which is worth doing given how differently the two providers can report file metadata.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

Step 3's filtering settings let you exclude file types that don't need to make the trip — large media files or already-synced folders can be skipped using max file size or custom path exclusion rules, keeping the OneDrive copy focused on what collaborators actually need.

## Monitoring the Transfer

Once the job runs, the Transferring tab in the bottom Info View shows live progress: percentage complete, current transfer speed, and file count, so you can confirm a large Yandex Disk archive is actually moving rather than stalled. After the job finishes, Job History records the total size transferred, duration, and completion status, giving you a record to reference if a collaborator later asks whether a specific batch of files made it across.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing Job History after syncing Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connect both Yandex Disk and OneDrive as remotes via OAuth login.
3. Configure a one-way sync job from Yandex Disk to OneDrive and run Dry Run first.
4. Run the sync, then check Job History to confirm the transfer completed as expected.

Cross-cloud backups shouldn't require a detour through local disk — with both providers live in the same window, the files just move where they need to go.

---

**Related Guides:**

- [Manage Yandex Disk Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Manage OneDrive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrate Yandex Disk to Dropbox with RcloneView](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)

<CloudSupportGrid />
