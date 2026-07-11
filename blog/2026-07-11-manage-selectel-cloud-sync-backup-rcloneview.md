---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "Manage Selectel Storage — Sync and Backup Files with RcloneView"
authors:
  - tayson
description: "Connect Selectel S3-compatible object storage to RcloneView for drag-and-drop file management, scheduled sync, and cross-cloud backup."
keywords:
  - Selectel RcloneView
  - Selectel object storage
  - Selectel S3 compatible
  - manage Selectel cloud storage
  - Selectel backup sync
  - Selectel GUI client
  - Selectel file manager
  - connect Selectel S3
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Selectel Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Selectel object storage buckets with a full desktop GUI instead of juggling CLI flags or a browser console.

Selectel is an S3-compatible object storage provider popular with teams operating in the CIS region, and rclone connects to it through the standard S3 protocol. RcloneView turns that connection into a full file manager: drag-and-drop uploads, scheduled sync jobs, and side-by-side folder comparison, all from one window. If you already run Selectel buckets alongside Google Drive, Dropbox, or Amazon S3, RcloneView lets you manage all of them without switching tools.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Selectel as an S3-Compatible Remote

Selectel buckets are added through RcloneView's S3-compatible remote type, using the same credential-entry pattern as other object storage providers: an Access Key ID, a Secret Access Key, and the Selectel S3 endpoint URL for your chosen region. Once entered, the remote appears as a new tab in the Explorer panel, and you can browse buckets exactly like a local folder — list view for details, tree view for hierarchy, or thumbnail view for image-heavy buckets.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

Because RcloneView connects S3, Azure, and Backblaze B2 with full read/write access on the FREE license, there's no paywall blocking basic Selectel bucket management — uploads, downloads, renames, and deletes all work immediately after setup.

## Syncing Selectel Buckets with Other Storage

Many teams use Selectel as a cost-effective archive tier while keeping active files on Google Drive or a local NAS. RcloneView's 4-step sync wizard makes that pairing straightforward: pick your Selectel bucket as source or destination, set one-way or bidirectional sync, and apply filters like max file age or predefined document types before the job runs.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel and another cloud remote" class="img-large img-center" />

Run a Dry Run first to preview exactly which files will be copied or deleted — a useful safety check before pointing a sync job at a production bucket for the first time.

## Scheduling Recurring Backups

For ongoing backup routines, PLUS license users can attach a crontab-style schedule to any Selectel sync job, so nightly or weekly transfers run without manual intervention. Job History then tracks every execution — start time, duration, transfer speed, and file counts — so you can confirm backups completed successfully.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Selectel backup job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a new remote using the S3-compatible connection type with your Selectel Access Key, Secret Key, and endpoint.
3. Browse your bucket in the Explorer panel to confirm the connection works.
4. Build a sync job or mount the bucket as a drive, depending on your workflow.

Selectel's object storage becomes just another tab in your file manager, ready for the same drag-and-drop and scheduled workflows as every other cloud you connect.

---

**Related Guides:**

- [Manage Hetzner Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [Manage IDrive e2 — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Manage Dreamhost Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dreamhost-object-storage-rcloneview)

<CloudSupportGrid />
