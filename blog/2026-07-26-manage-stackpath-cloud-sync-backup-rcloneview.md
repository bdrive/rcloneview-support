---
slug: manage-stackpath-cloud-sync-backup-rcloneview
title: "Manage StackPath Object Storage — Sync and Backup Files with RcloneView"
authors:
  - jay
description: "Connect StackPath object storage to RcloneView for drag-and-drop file management, scheduled backups, and cross-cloud sync."
keywords:
  - StackPath object storage
  - StackPath S3
  - RcloneView StackPath
  - manage StackPath files
  - StackPath backup
  - StackPath cloud sync
  - S3-compatible storage GUI
  - edge object storage
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage StackPath Object Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up StackPath's S3-compatible object storage from the same window you use for every other cloud.

StackPath object storage exposes an S3-compatible API, which means it plays well with rclone-based tools but rarely comes with a dedicated desktop GUI. Teams end up scripting uploads or juggling separate CLI sessions just to check what's in a bucket. RcloneView closes that gap by treating StackPath like any other remote — full file browsing, drag-and-drop transfers, and scheduled jobs, without writing a single command.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting a StackPath Bucket

Since StackPath speaks the S3 protocol, you add it in RcloneView the same way you'd add Amazon S3 or Wasabi: create a new remote, select the S3-compatible provider option, and supply your Access Key, Secret Key, and the StackPath endpoint URL for your region. Once connected, the bucket appears as a normal tab in the Explorer panel — no separate credentials file, no terminal required to verify the connection worked.

Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license, so pairing StackPath with another S3-compatible account doesn't require an upgrade to start moving files.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a StackPath object storage remote in RcloneView" class="img-large img-center" />

## Browsing and Managing Files Day to Day

Once the remote is set up, StackPath buckets behave exactly like a local folder in RcloneView's Explorer. You can sort by name, type, modified date, or size, switch to thumbnail view for image-heavy buckets, and use Get Size to check how much space a folder of assets is consuming before you decide whether to archive it elsewhere. Multi-select with Ctrl+Click or Shift+Click works the same as it does on local drives, so bulk deletes or bulk downloads take seconds instead of a scripted loop.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing StackPath bucket contents in RcloneView" class="img-large img-center" />

## Backing Up to and from StackPath

For recurring backups, set up a Sync job with StackPath as either source or destination. The 4-step wizard lets you configure concurrent transfers, enable checksum verification so files are compared by hash rather than just timestamp, and apply filters to exclude file types you don't need archived. Run a Dry Run first to preview exactly what will be copied or deleted before committing to the transfer — a useful safeguard when a bucket holds production assets.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a StackPath backup job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a new remote and choose the S3-compatible provider type.
3. Enter your StackPath Access Key, Secret Key, and endpoint.
4. Set up a Sync or Copy job to move files between StackPath and your other remotes.

Once StackPath is wired into RcloneView, managing object storage stops being a scripting chore and becomes part of your normal file workflow.

---

**Related Guides:**

- [Manage Ceph Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Manage Scaleway Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Fix S3 Access Denied — Permission Errors with RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
