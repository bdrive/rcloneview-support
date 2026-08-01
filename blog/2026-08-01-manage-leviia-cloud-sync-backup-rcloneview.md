---
slug: manage-leviia-cloud-sync-backup-rcloneview
title: "Manage Leviia Object Storage — Sync and Backup Files with RcloneView"
authors:
  - casey
description: "Connect Leviia's S3-compatible object storage to RcloneView for drag-and-drop file management, scheduled backups, and cross-cloud sync."
keywords:
  - Leviia object storage
  - Leviia S3
  - RcloneView Leviia
  - manage Leviia files
  - Leviia cloud backup
  - Leviia sync
  - S3-compatible storage GUI
  - European object storage
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

# Manage Leviia Object Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Leviia's S3-compatible object storage from the same window you use for every other cloud.

Leviia offers S3-compatible object storage hosted in Europe, which makes it a common pick for teams that want data residency guarantees without giving up the tooling that already works with S3. The tradeoff is that S3-compatible providers rarely ship a polished desktop client of their own, leaving users to script uploads or juggle a bare CLI. RcloneView removes that friction by treating Leviia like any other remote — full file browsing, drag-and-drop transfers, and scheduled sync jobs, no commands required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting a Leviia Bucket

Because Leviia speaks the S3 protocol, you add it in RcloneView the same way you'd add Amazon S3 or Wasabi: create a new remote, select the S3-compatible provider option, and enter your Access Key, Secret Key, and the Leviia endpoint URL for your account region. Once saved, the bucket shows up as a normal tab in the Explorer panel, ready to browse and transfer into immediately.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Leviia object storage remote in RcloneView" class="img-large img-center" />

RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so a Leviia bucket sits alongside every other cloud account you manage without switching tools.

## Browsing and Organizing Leviia Storage

Once connected, a Leviia bucket behaves exactly like a local folder in the Explorer. Sort by name, type, modified date, or size, switch to thumbnail view for a bucket full of images, and use Get Size to check how much space a given folder is consuming before deciding whether to archive it elsewhere. Multi-select with Ctrl+Click or Shift+Click covers bulk downloads and deletes without a scripted loop.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Leviia bucket contents in RcloneView" class="img-large img-center" />

## Backing Up To and From Leviia

For recurring backups, set up a Sync job with Leviia as either source or destination. The 4-step wizard covers concurrent transfer counts, checksum verification so files are compared by hash and size rather than timestamp alone, and filtering rules to exclude file types you don't want archived. Run a Dry Run first to preview exactly what will be copied or deleted — worth doing before pointing a sync job at a bucket holding production data.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Leviia backup job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a new remote and choose the S3-compatible provider type.
3. Enter your Leviia Access Key, Secret Key, and endpoint URL.
4. Set up a Sync or Copy job to move files between Leviia and your other cloud remotes.

Once Leviia is wired into RcloneView, managing your object storage stops being a scripting chore and becomes part of your normal file workflow.

---

**Related Guides:**

- [Manage Ceph Object Storage with RcloneView — S3-Compatible GUI for Your Ceph Cluster](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Manage Scaleway Object Storage — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Manage IONOS Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
