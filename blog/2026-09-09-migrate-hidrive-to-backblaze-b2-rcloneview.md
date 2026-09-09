---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "Migrate HiDrive to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - tayson
description: "Migrate files from HiDrive to Backblaze B2 with RcloneView — a cross-platform GUI that moves data between the two providers without staging files locally."
keywords:
  - migrate HiDrive to Backblaze B2
  - HiDrive to Backblaze B2 transfer
  - RcloneView HiDrive migration
  - HiDrive cloud backup tool
  - Backblaze B2 migration GUI
  - move HiDrive files to B2
  - cloud to cloud transfer RcloneView
  - HiDrive B2 sync
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate HiDrive to Backblaze B2 — Transfer Files with RcloneView

> Move files directly from HiDrive to Backblaze B2 with RcloneView, without downloading to a local drive first.

Teams outgrowing a HiDrive account often move to Backblaze B2 for its lower-cost object storage and application key model, but the two services don't talk to each other natively. RcloneView bridges them in one window: connect both as remotes, drag files across panels, and let the embedded rclone engine handle the transfer server-to-server wherever the providers support it. No manual export, no local staging folder required for the transfer itself.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting HiDrive and Backblaze B2

Add HiDrive first via **Remote tab → New Remote**. HiDrive uses OAuth browser login, so RcloneView opens a browser window for you to sign in and authorize access — no API keys to copy manually. Backblaze B2 is set up differently: choose Backblaze B2 as the remote type and enter your Application Key ID and Application Key, generated from the Backblaze key management page. Once both remotes appear in the Remote Manager, open two Explorer panels side by side — one tab pointed at HiDrive, the other at your B2 bucket.

Unlike mount-only tools, RcloneView also syncs and compares folders between remotes like these — on the FREE license.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a HiDrive remote in RcloneView" class="img-large img-center" />

## Running a One-Time Transfer or a Recurring Sync

For a one-off migration, select the folders on the HiDrive panel, drag them onto the B2 panel, and confirm the transfer — RcloneView treats a cross-remote drag as a copy, leaving the HiDrive originals intact until you're satisfied the data landed correctly. For an ongoing migration where HiDrive keeps receiving new files during the cutover window, build a Sync job instead: pick HiDrive as source and B2 as destination in the 4-step wizard, set the direction to one-way "Modifying destination only," and run it manually each time you want to catch up the difference.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job from HiDrive to Backblaze B2" class="img-large img-center" />

Before the final cutover, run the job's Dry Run option to preview exactly which files will copy and which (if any) would be deleted on the destination side — a useful check before pointing production workflows at the new B2 bucket.

## Verifying and Automating the Move

Once the initial migration finishes, use Folder Compare to check both sides file-by-file, confirming file counts and sizes match rather than trusting a single completed status message. If the migration needs to repeat on a schedule — for example, mirroring new HiDrive uploads into B2 during a phased transition — a PLUS license unlocks crontab-style scheduling so the sync job runs unattended at whatever interval fits the cutover plan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring HiDrive to Backblaze B2 sync job" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add HiDrive via OAuth browser login in Remote Manager.
3. Add Backblaze B2 with your Application Key ID and Application Key.
4. Run a Dry Run, then execute the transfer or sync job between the two panels.

Once both remotes are configured, the HiDrive-to-B2 move is just another drag-and-drop or scheduled job in the same interface you already use for daily file management.

---

**Related Guides:**

- [Manage HiDrive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Manage Backblaze B2 Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Sync HiDrive to Amazon S3 — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)

<CloudSupportGrid />
