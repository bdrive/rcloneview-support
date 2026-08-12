---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Manage Petabox Storage — Sync and Backup Files with RcloneView"
authors:
  - kai
description: "Connect Petabox S3-compatible object storage to RcloneView for cross-platform browsing, sync, backup, and mounting in one GUI."
keywords:
  - Petabox RcloneView
  - Petabox cloud storage
  - S3-compatible object storage
  - Petabox backup
  - Petabox sync
  - mount Petabox
  - object storage GUI
  - Petabox file management
  - cloud storage manager
  - Petabox bucket sync
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Petabox Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Petabox buckets alongside every other cloud you use — from one desktop window.

Petabox is an S3-compatible object storage service, which means RcloneView can connect to it the same way it connects to Amazon S3, Wasabi, or any other S3-protocol provider: with an Access Key ID, a Secret Access Key, and an endpoint. Once connected, Petabox buckets show up as a regular remote in the file explorer, ready to browse, transfer, and schedule like any local folder.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Petabox as a New Remote

Open Remote Manager from the Remote tab and choose New Remote. Since Petabox is accessed through rclone's S3 protocol, select the S3-compatible option and enter your Access Key ID, Secret Access Key, and the Petabox endpoint URL provided by your account. There's no OAuth browser flow to complete — the credentials alone authenticate the connection, and the remote appears in your tab bar as soon as the test connection succeeds.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new S3-compatible remote in RcloneView" class="img-large img-center" />

Unlike mount-only tools, RcloneView also syncs and compares folders on the FREE license — Petabox buckets get the same sync, compare, and job-history features as every other supported provider, no upgrade required to get started.

## Browsing, Transferring, and Syncing Buckets

With Petabox added, split your explorer into two panels — one showing local folders or another cloud, the other showing your Petabox bucket — and drag files between them. Moving files within the same remote performs a move; dragging between different remotes performs a copy, so you can stage a Petabox backup without touching the source files.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between a local folder and a Petabox bucket" class="img-large img-center" />

For recurring transfers, use the 4-step Sync wizard: pick source and destination, set concurrent transfer counts and equality checkers under Advanced Settings, then apply filters for file type, size, or age before saving the job. Run a Dry Run first to preview exactly what will copy or delete before committing to a live transfer.

## Scheduling Backups and Monitoring Jobs

Once a sync job is saved in Job Manager, PLUS-license users can attach a crontab-style schedule so Petabox backups run automatically on their own cadence, with a preview of upcoming execution times before you save.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting a recurring backup schedule for a Petabox sync job" class="img-large img-center" />

Every run — scheduled or manual — is logged in Job History with status, transfer speed, file count, and total size, so you can confirm a Petabox backup completed cleanly or spot a failed run to retry.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generate an Access Key ID and Secret Access Key from your Petabox account and note the endpoint URL.
3. Add Petabox as a new S3-compatible remote in Remote Manager and test the connection.
4. Run a Dry Run sync before scheduling recurring backups to your Petabox bucket.

With Petabox connected, your object storage sits right next to every other cloud you manage — no separate client, no switching windows.

---

**Related Guides:**

- [Manage Storj Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [Manage IDrive E2 Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Manage Wasabi Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
