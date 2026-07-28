---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Manage Magalu Cloud Storage — Sync and Backup Files with RcloneView"
authors:
  - casey
description: "Connect Magalu Cloud object storage to RcloneView for drag-and-drop file management, scheduled sync, and cross-cloud backup."
keywords:
  - Magalu Cloud RcloneView
  - Magalu object storage GUI
  - manage Magalu Cloud storage
  - S3-compatible cloud backup
  - Magalu Cloud sync tool
  - Brazil object storage GUI
  - Magalu Cloud file manager
  - RcloneView S3-compatible remote
  - cloud storage sync backup
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Magalu Cloud Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Magalu Cloud object storage with a full drag-and-drop file manager instead of juggling API credentials in a terminal.

Magalu Cloud is an S3-compatible object storage service, which means it fits directly into any tool built around the S3 protocol. RcloneView treats it exactly like Amazon S3 or Backblaze B2: enter an Access Key, Secret Key, and endpoint, and the bucket appears in the file explorer alongside every other remote you manage. That makes it practical for teams already running workloads out of Brazil or Latin America who want an object storage option without leaving the S3 tooling they already know.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting a Magalu Cloud Remote

Adding Magalu Cloud follows the same credential-entry flow RcloneView uses for every S3-compatible provider: open New Remote, choose the S3-compatible type, and supply the Access Key ID, Secret Access Key, and the Magalu Cloud endpoint URL for your region. Once saved, the bucket loads into an Explorer panel with full folder tree navigation, thumbnail previews for images, and right-click access to copy, rename, delete, and get-size operations — no separate S3 console tab required.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

Because RcloneView connects through rclone's S3 backend, standard object storage behavior applies: folders are virtual constructs built from key prefixes, and file operations map to the underlying PUT/GET/DELETE calls rclone issues. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license, so a Magalu bucket isn't limited to passive browsing.

## Syncing Magalu Cloud with Other Storage

Most teams don't use object storage in isolation — it sits alongside local drives, NAS boxes, or other cloud providers as part of a backup or migration plan. The 4-step sync wizard lets you set a Magalu bucket as either source or destination, configure concurrent transfer counts and equality checkers for reliable large-batch transfers, and apply filters (max file size, max age, extension excludes) so only the files you actually want move.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job with a Magalu Cloud bucket as destination" class="img-large img-center" />

Run a Dry Run first to preview exactly which files will be copied or deleted before committing to a live transfer — especially useful the first time you point a sync job at a new bucket, when getting the source and destination folders right matters most.

## Scheduling Recurring Magalu Backups

For ongoing backup routines, PLUS license users can attach a crontab-style schedule to any sync job, so a local project folder or another cloud remote mirrors into Magalu Cloud automatically on whatever cadence fits — nightly, weekly, or a custom interval. Job History then tracks each run's duration, transfer speed, file count, and completion status, giving you a clear audit trail without checking a terminal log.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job to a Magalu Cloud bucket" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open New Remote, select the S3-compatible provider type, and enter your Magalu Cloud Access Key, Secret Key, and endpoint.
3. Browse the bucket in the Explorer panel to confirm the connection and folder structure.
4. Create a sync or backup job targeting the Magalu remote, run a Dry Run, then execute the transfer.

Once connected, a Magalu Cloud bucket behaves like any other remote in RcloneView — ready for daily use, cross-cloud transfers, and scheduled protection.

---

**Related Guides:**

- [Manage IDrive e2 S3 Cloud Backup with RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Manage Cloudflare R2 — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — Preview Cloud Sync Before Transfer with RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
