---
slug: manage-china-mobile-cloud-sync-backup-rcloneview
title: "Manage China Mobile Storage — Sync and Backup Files with RcloneView"
authors:
  - jay
description: "Connect China Mobile's S3-compatible object storage to RcloneView for cross-platform browsing, drag-and-drop transfers, and scheduled backup jobs."
keywords:
  - China Mobile object storage
  - manage China Mobile cloud storage
  - S3-compatible storage GUI
  - RcloneView China Mobile
  - sync China Mobile object storage
  - backup S3-compatible storage
  - China Mobile Ecloud EOS
  - object storage file manager
  - multi-cloud GUI client
  - S3 endpoint access key setup
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

# Manage China Mobile Storage — Sync and Backup Files with RcloneView

> Browse, transfer, and back up China Mobile's S3-compatible object storage from the same window you use for every other cloud, without touching a terminal.

Teams running infrastructure through China Mobile's S3-compatible object storage often end up managing it with raw CLI calls or one-off scripts, separate from the rest of their cloud footprint. RcloneView treats it like any other S3-compatible remote — same explorer, same sync jobs, same folder compare — so a bucket on China Mobile sits next to Google Drive, Backblaze B2, or a local disk in one interface. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license, and the same holds for any S3-compatible endpoint.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting China Mobile Object Storage

China Mobile's object storage is accessed through rclone's S3 protocol, the same path RcloneView uses for Wasabi, MinIO, or Cloudflare R2. In the New Remote screen, select the S3-compatible provider type and supply three values: Access Key ID, Secret Access Key, and the service Endpoint. There's no OAuth flow — it's credential entry, so double-check the endpoint string, since a typo there is the most common reason a new remote fails its first connection test.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a China Mobile S3-compatible remote in RcloneView" class="img-large img-center" />

Once the remote connects, it appears as a tab in the Explorer panel just like every other storage type. You can open it side by side with a second panel — local disk, another cloud, or a different bucket entirely — using the 1 to 4 panel layout.

## Browsing and Transferring Files

With the remote open, the File List shows buckets and objects with the same columns you'd expect from a local file manager: name, type, modified date, size. Right-click for Copy, Cut, Paste, Rename, New Folder, Download, and Upload, or use Ctrl+Click and Shift+Click to multi-select before batch operations.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between China Mobile object storage and another remote" class="img-large img-center" />

Drag and drop follows a simple rule: moving files within the same remote relocates them, while dragging between two different remotes copies them. That makes ad-hoc transfers between object storage and other clouds a matter of dragging a selection across panels rather than downloading locally first.

## Scheduling Recurring Backups

For anything recurring, the Job Manager's four-step wizard turns a one-off transfer into a saved job: pick source and destination, tune transfer concurrency and retry behavior, apply filters like max file size or age, and — on a PLUS license — set a crontab-style schedule. Run Dry Run first to preview exactly what would be copied or deleted before committing.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a backup job for China Mobile object storage in RcloneView" class="img-large img-center" />

Job History then tracks every run — status, duration, transfer speed, file count — so you have a record of what moved and when, without digging through raw log output.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open New Remote, choose the S3-compatible provider type, and enter your China Mobile Access Key ID, Secret Access Key, and endpoint.
3. Browse the bucket in the Explorer and test a manual copy to or from another remote.
4. Build a sync job in Job Manager for any transfer you'll want to repeat, and run a Dry Run before the first real execution.

Once China Mobile object storage sits alongside your other remotes in one explorer, moving data in or out stops being a scripting chore and becomes a drag-and-drop task.

---

**Related Guides:**

- [Manage RackCorp Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-rackcorp-object-storage-cloud-sync-rcloneview)
- [Manage Scaleway Object Storage — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Manage Ceph Object Storage with RcloneView — S3-Compatible GUI for Your Ceph Cluster](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)

<CloudSupportGrid />
