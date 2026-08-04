---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Manage Petabox Storage — Sync and Backup Files with RcloneView"
authors:
  - tayson
description: "Connect Petabox S3-compatible storage to RcloneView for cross-platform browsing, sync, backup, and mounting alongside 90+ other cloud providers."
keywords:
  - Petabox
  - Petabox RcloneView
  - Petabox sync
  - Petabox backup
  - S3-compatible storage
  - manage Petabox
  - object storage GUI
  - Petabox cloud storage
  - S3 compatible cloud manager
  - Petabox rclone
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

# Manage Petabox Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Petabox object storage in the same window as every other cloud you use — no separate S3 client required.

Petabox is an S3-compatible object storage service, which means it plugs into RcloneView the same way Amazon S3 or Wasabi does: through an Access Key, Secret Key, and custom endpoint. Once connected, Petabox behaves like any other remote in RcloneView's file explorer — browsable, syncable, and mountable alongside your other providers. This matters for teams who chose Petabox for its object storage economics but still need a normal file-manager experience instead of the AWS CLI or a bucket-only web console.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Petabox as an S3-Compatible Remote

Adding Petabox follows RcloneView's standard S3-compatible remote flow: open New Remote, choose the S3-compatible type, and enter your Petabox Access Key ID, Secret Access Key, and the bucket endpoint URL from your Petabox dashboard. RcloneView ships with an embedded rclone binary, so there's no separate install step — the credentials alone are enough to bring the bucket into the file explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

Once added, Petabox appears as a tab in the explorer panel just like Google Drive or OneDrive. Unlike mount-only S3 browsers, RcloneView also syncs and compares folders against Petabox — on the FREE license, with no separate purchase needed for basic sync.

## Syncing Petabox with Other Cloud Providers

A common Petabox use case is archiving data that currently lives in a more expensive provider, or mirroring a working bucket for redundancy. RcloneView's Sync wizard lets you set Petabox as either the source or destination, with filters for file type, age, and size so only the data you want actually moves.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Petabox object storage with another cloud provider in RcloneView" class="img-large img-center" />

Dry Run mode previews exactly what will be copied or deleted before anything happens — useful when pointing a one-way sync at a bucket you don't want accidentally overwritten. The Compare view goes further, showing left-only, right-only, and size-different files between Petabox and a second remote before you commit to a copy.

## Scheduling Recurring Petabox Backups

For ongoing protection, save your Petabox sync as a job in Job Manager rather than re-running it manually. PLUS license users can attach a crontab-style schedule so backups to or from Petabox run automatically, with job history tracking status, transfer speed, and file counts for every run.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Petabox backup job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open New Remote and select the S3-compatible storage type for Petabox.
3. Enter your Access Key, Secret Key, and Petabox endpoint, then browse the bucket.
4. Set up a Sync or Backup job and, if needed, attach a schedule in Job Manager.

Petabox's object storage pricing pairs well with RcloneView's ability to move data freely between it and any other cloud you already manage.

---

**Related Guides:**

- [Manage Cloudflare R2 — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Manage Wasabi Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Mount Amazon S3 Buckets as Local Drives with RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
