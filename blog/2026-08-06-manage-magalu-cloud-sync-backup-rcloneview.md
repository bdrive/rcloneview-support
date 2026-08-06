---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Manage Magalu Cloud Storage — Sync and Backup Files with RcloneView"
authors:
  - robin
description: "Connect Magalu Cloud's S3-compatible object storage to RcloneView for drag-and-drop browsing, scheduled backups, and cross-cloud sync."
keywords:
  - Magalu Cloud storage
  - Magalu S3
  - RcloneView Magalu
  - manage Magalu files
  - Magalu cloud backup
  - Magalu sync
  - S3-compatible storage GUI
  - Brazilian cloud storage
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Magalu Cloud Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Magalu Cloud's S3-compatible object storage from the same window you use for every other cloud.

Magalu Cloud is an S3-compatible object storage service, and like most S3-compatible providers it ships without a dedicated desktop file manager — you're left scripting `curl` calls or wiring up a CLI just to move files around. RcloneView closes that gap by treating a Magalu bucket exactly like any other remote: full file browsing, drag-and-drop transfers, and scheduled sync jobs, no terminal required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting a Magalu Bucket

Because Magalu Cloud speaks the S3 protocol, you add it in RcloneView the same way you'd add Amazon S3 or Backblaze B2: create a new remote, choose the S3-compatible provider option, and enter your Access Key, Secret Key, and the Magalu endpoint URL for your account region. Once saved, the bucket appears as a normal tab in the Explorer panel, ready to browse and transfer into immediately.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license, so Magalu joins your existing cloud lineup without a paywall in the way.

## Browsing and Organizing Magalu Storage

Once connected, a Magalu bucket behaves like any local folder in the Explorer. Sort by name, type, modified date, or size, switch to thumbnail view when a bucket is full of images, and use Get Size to check how much space a folder is consuming before deciding whether to archive it elsewhere. Multi-select with Ctrl+Click or Shift+Click handles bulk downloads and deletes without a scripted loop.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Magalu Cloud bucket contents in RcloneView" class="img-large img-center" />

## Backing Up To and From Magalu

For recurring backups, set up a Sync job with Magalu as either source or destination. The 4-step wizard covers concurrent transfer counts, checksum verification so files are compared by hash and size rather than timestamp alone, and filtering rules to exclude file types you don't want archived. Run a Dry Run first to preview exactly what will be copied or deleted — worth doing before pointing a sync job at a bucket holding production data.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Magalu Cloud backup job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a new remote and choose the S3-compatible provider type.
3. Enter your Magalu Access Key, Secret Key, and endpoint URL.
4. Set up a Sync or Copy job to move files between Magalu and your other cloud remotes.

Once Magalu is wired into RcloneView, managing your object storage stops being a scripting chore and becomes part of your normal file workflow.

---

**Related Guides:**

- [Manage Scaleway Object Storage — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Manage IONOS Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Manage Leviia Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-leviia-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
