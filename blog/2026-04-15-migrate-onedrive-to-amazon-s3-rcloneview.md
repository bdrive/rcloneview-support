---
slug: migrate-onedrive-to-amazon-s3-rcloneview
title: "Migrate OneDrive to Amazon S3 — Transfer Files with RcloneView"
authors:
  - tayson
description: "Migrate OneDrive to Amazon S3 with RcloneView — transfer files cloud-to-cloud, archive documents, and reduce Microsoft storage dependency using a GUI."
keywords:
  - OneDrive to Amazon S3 migration
  - OneDrive to S3 transfer
  - cloud migration tool
  - RcloneView OneDrive
  - S3 archive
  - OneDrive export
  - Microsoft to AWS migration
  - cloud-to-cloud transfer
  - OneDrive S3 backup
  - reduce OneDrive costs
tags:
  - onedrive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate OneDrive to Amazon S3 — Transfer Files with RcloneView

> OneDrive fits Microsoft 365 workflows, but S3 excels at cost-efficient archiving and AWS integration — RcloneView migrates your OneDrive content directly to S3 without any local download required.

OneDrive integrates naturally into Microsoft 365 environments, but organizations reducing Microsoft licensing costs, consolidating onto AWS infrastructure, or needing S3-native archiving sometimes need to move OneDrive content to Amazon S3. RcloneView provides a direct cloud-to-cloud migration path — connecting OneDrive and S3 simultaneously and streaming data between them without consuming local disk space.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting OneDrive and Amazon S3

Add **Microsoft OneDrive** in RcloneView via OAuth browser authentication — **Remote tab > New Remote > Microsoft OneDrive**. Then add **Amazon S3** with your Access Key ID, Secret Access Key, and AWS Region. For OneDrive for Business accounts, configure the remote to target your organization's tenant and the appropriate library.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

Once both remotes are active, browse them side by side in RcloneView's dual-panel explorer — OneDrive's folder hierarchy on the left, your S3 bucket structure on the right. This view helps you plan the migration mapping: which OneDrive folders land in which S3 prefixes.

## Transferring Files

In **Job Manager**, create a **Copy** job from your OneDrive folder to the destination S3 bucket path. For a company migrating 1.5 TB of archived project files from OneDrive to S3, Copy (rather than Sync) is the right job type — it preserves source files during the migration window while copying everything to S3, giving time for verification before removal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Amazon S3 migration job in RcloneView" class="img-large img-center" />

Multi-thread transfers and concurrent file count settings in Advanced Settings maximize throughput. RcloneView's underlying rclone handles OneDrive's API throttling and automatic retries — the migration continues without manual intervention even when the provider temporarily rate-limits requests.

## Verifying and Cleaning Up

After migration, use **Folder Compare** to confirm all files transferred correctly. Compare the OneDrive source against the S3 destination — the comparison view shows files unique to each side and files that match, giving you a definitive checklist before removing OneDrive content.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to S3 migration with Folder Compare in RcloneView" class="img-large img-center" />

Once confirmed, OneDrive content can be archived or deleted in phases. The **Job History** log provides a permanent record of the migration — what was transferred, when, and how much data moved — useful for compliance documentation when decommissioning a Microsoft 365 subscription.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add **OneDrive** remote (OAuth) and **Amazon S3** remote (Access Key credentials).
3. Create a **Copy** job in Job Manager from OneDrive to your S3 bucket.
4. Use **Folder Compare** to verify all files transferred before removing OneDrive content.

Migrating from OneDrive to Amazon S3 with RcloneView turns a complex IT project into a well-monitored automated job — with full visibility and verification at every step.

---

**Related Guides:**

- [Migrate OneDrive to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Migrate OneDrive to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [Manage OneDrive Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
