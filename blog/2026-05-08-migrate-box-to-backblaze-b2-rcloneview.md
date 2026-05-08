---
slug: migrate-box-to-backblaze-b2-rcloneview
title: "Migrate Box to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - tayson
description: "Move your Box cloud storage to Backblaze B2 object storage using RcloneView. A complete guide to migrating files, verifying transfers, and automating future backups."
keywords:
  - Box to Backblaze B2 migration
  - migrate Box Backblaze B2 RcloneView
  - Box Backblaze B2 file transfer
  - switch Box to B2 storage
  - cloud storage migration Box
  - Box backup Backblaze B2
  - Box to S3 migration
  - rclone Box B2 GUI
tags:
  - RcloneView
  - box
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to Backblaze B2 — Transfer Files with RcloneView

> Move your entire Box workspace to Backblaze B2 object storage — or create a secondary backup copy — using RcloneView's GUI-driven migration workflow.

Box is a widely used enterprise collaboration platform, but for archive and backup purposes, its storage costs can be significant compared to purpose-built object storage like Backblaze B2. Teams looking to offload archival data from Box, or create a backup copy of Box content in a more cost-efficient tier, can use RcloneView to migrate directly — without downloading anything locally first.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Box and Backblaze B2

For Box, navigate to **Remote tab → New Remote**, select Box, and complete OAuth authentication with your Box account. Box for Business users should also set `box_sub_type = enterprise` in the remote configuration for full workspace access. For Backblaze B2, enter your Application Key ID and Application Key during remote setup.

Once both remotes are configured, place Box in the left explorer panel and B2 in the right. Browse to the specific Box folders you want to migrate and verify the target B2 bucket is correctly named and accessible before starting any transfer.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Box and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configuring the Migration Job

Use the **Sync** button in the Home tab to create the migration job. Set the Box folder as source and the B2 bucket (or a subfolder within it) as destination. In Step 2, enable **Checksum** to verify every file's integrity during transfer. Set the retry count to 5 or higher — B2's API can occasionally throttle requests during large bulk transfers, and automatic retries ensure the migration completes without manual intervention.

Before the live migration, run a **Dry Run** to see the full file list that will be transferred. This is especially important for Box migrations where shared files or Box Notes (`.boxnote` format) may not transfer as expected — dry run output highlights any files that fail before they affect your production data.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

## Handling Box Notes and Special File Types

Box Notes are a proprietary format (`.boxnote`) that may not render correctly outside of Box. Before migrating, export any Box Notes you need to preserve in a standard format (like `.docx` or `.pdf`) from the Box web interface. RcloneView will migrate the `.boxnote` files as binary data, but they won't be editable in B2 or any non-Box client.

For shared folders and external collaborator content, verify your Box account has access to all the content you intend to migrate. The **Log tab** in RcloneView will show permission errors for any files your account cannot access.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Box to B2 migration progress in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Box (OAuth) and Backblaze B2 (Application Key) as remotes.
3. Run a dry run to preview the migration before committing.
4. Execute the live migration with checksum verification enabled.

Migrating from Box to Backblaze B2 with RcloneView is a clean, verifiable process that gives you cost-effective, durable storage for your archived content.

---

**Related Guides:**

- [Migrate Box to AWS S3 with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Manage Backblaze B2 Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Box to S3 Glacier Archive with RcloneView](https://rcloneview.com/support/blog/box-to-s3-glacier-archive-rcloneview)

<CloudSupportGrid />
