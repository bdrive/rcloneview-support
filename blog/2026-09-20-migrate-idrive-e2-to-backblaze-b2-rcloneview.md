---
slug: migrate-idrive-e2-to-backblaze-b2-rcloneview
title: "Migrate IDrive e2 to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - steve
description: "Move buckets from IDrive e2 to Backblaze B2 with RcloneView's cloud-to-cloud transfer tools, dry run preview, and job history."
keywords:
  - migrate idrive e2 to backblaze b2
  - idrive e2 to backblaze b2 transfer
  - s3 compatible storage migration
  - cloud to cloud object storage transfer
  - RcloneView migration guide
  - backblaze b2 bucket migration
  - idrive e2 rcloneview
  - object storage provider switch
tags:
  - RcloneView
  - idrive-e2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate IDrive e2 to Backblaze B2 — Transfer Files with RcloneView

> Move object storage buckets between two S3-compatible providers without staging files locally first.

Switching S3-compatible object storage providers usually means picking apart access keys, endpoints, and bucket structures before a single file moves. RcloneView connects to both IDrive e2 and Backblaze B2 as native remotes, so a migration between them is a direct cloud-to-cloud transfer instead of a two-step download-then-upload process.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Both Remotes

IDrive e2 and Backblaze B2 are both configured through RcloneView's S3-compatible remote setup, requiring an Access Key, Secret Key, and endpoint for each. For Backblaze B2 specifically, RcloneView also supports its native credential entry method using an Application Key ID and Application Key, which some teams prefer over the S3-compatible route. Once both remotes appear in the Remote Manager, open two Explorer panels side by side — one per remote — using RcloneView's horizontal or vertical split layout.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote manager with IDrive e2 and Backblaze B2 remotes configured" class="img-large img-center" />

With both buckets visible at once, you can browse folder structures on each side before committing to a transfer, which catches naming mismatches or unexpected nested folders early.

## Running the Transfer as a Sync Job

Rather than dragging large buckets manually, set up a Sync job through the 4-step wizard: select IDrive e2 as source, Backblaze B2 as destination, and choose One-way sync so the destination is only modified to match the source — nothing on IDrive e2 changes. In Step 2, RcloneView mounts AND syncs 90+ providers from one window, and lets you tune the number of file transfers and enable checksum comparison so files are verified by hash and size, not just modification time, which matters when migrating between two different storage backends.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView sync job configured between two S3-compatible object storage remotes" class="img-large img-center" />

Before running the real transfer, use Dry Run to preview exactly which files will copy and confirm nothing unexpected gets deleted or skipped.

## Verifying the Migration

After the sync completes, Job History shows total size transferred, transfer speed, and file count for that run, giving you a record to compare against the source bucket's totals. For an extra check, RcloneView's Folder Compare tool can run a side-by-side comparison between the two buckets after migration, flagging any files that differ in size or exist on only one side.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing a completed cloud-to-cloud migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your IDrive e2 remote with its Access Key, Secret Key, and endpoint.
3. Add your Backblaze B2 remote using either S3-compatible or native credentials.
4. Configure a one-way sync job, run a Dry Run first, then execute and verify with Job History.

A clean bucket migration comes down to verifying before and after — RcloneView's dry run and comparison tools make both steps part of the same workflow.

---

**Related Guides:**

- [Manage IDrive e2 Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Manage Backblaze B2 Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 — Object Storage Comparison](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
