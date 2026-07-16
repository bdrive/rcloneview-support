---
slug: manage-oracle-cloud-storage-sync-rcloneview
title: "Manage Oracle Cloud Object Storage — Sync and Backup with RcloneView"
authors:
  - tayson
description: "Connect Oracle Cloud Object Storage to RcloneView using S3-compatible access keys, browse buckets, and run automated sync and backup jobs with ease."
keywords:
  - Oracle Cloud Object Storage
  - RcloneView
  - S3-compatible
  - cloud sync
  - cloud backup
  - OCI storage
  - object storage
  - rclone oracle
tags:
  - RcloneView
  - oracle-cloud
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Oracle Cloud Object Storage — Sync and Backup with RcloneView

> Oracle Cloud Object Storage offers competitive pricing and strong enterprise SLAs — RcloneView gives you a simple graphical interface to manage, sync, and back up your OCI buckets.

Oracle Cloud Infrastructure (OCI) Object Storage is a fully S3-compatible object store with a generous Always Free tier and enterprise-grade durability guarantees. Teams running workloads on OCI or looking for a cost-effective alternative to AWS S3 will find Oracle Cloud Object Storage a compelling option. RcloneView connects to it via the S3-compatible API, giving you a full-featured GUI for bucket management, file transfers, and automated sync jobs — no CLI required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Oracle Cloud Object Storage in RcloneView

To connect RcloneView to Oracle Cloud Object Storage, you need three things: a **Customer Access Key** (not your OCI API key), the **namespace**, and the **regional endpoint**. Generate the access key in the OCI Console under your user profile > Customer Secret Keys. The endpoint format is `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com` — for example, `https://axyz1234abcd.compat.objectstorage.us-ashburn-1.oraclecloud.com`.

In RcloneView, click **New Remote**, select **S3 Compatible Storage**, and choose **Oracle Cloud Infrastructure Object Storage** from the provider dropdown. Paste in your Access Key ID, Secret Key, and the regional endpoint. Set the region field to match your OCI region code. Click **Save** and RcloneView will immediately connect and list your buckets.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Oracle Cloud Object Storage remote in RcloneView" class="img-large img-center" />

## Browsing Buckets and Managing Files

Once connected, Oracle Cloud Object Storage behaves like any other remote in RcloneView's dual-pane explorer. Navigate through bucket namespaces and object prefixes, upload files with drag and drop, and download objects to your local machine. RcloneView shows live transfer metrics so you can monitor large uploads as they progress.

If you use multiple OCI regions for geographic redundancy, add each regional endpoint as a separate named remote. You can then open them side by side in the explorer and copy objects directly between regions via cloud-to-cloud transfer — no local download required.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between OCI buckets in RcloneView" class="img-large img-center" />

## Creating Sync Jobs for Backup

RcloneView's **Job Wizard** walks you through creating a sync job to or from Oracle Cloud Object Storage in four steps: choose the source, choose the destination, configure options, and review before running. Use the **dry run** mode first to see exactly which files would be transferred or deleted — this is especially important when syncing to OCI because sync operations can remove files in the destination that no longer exist at the source.

The **Job History** panel records every job run with timestamps and transfer stats, giving you an audit trail for compliance purposes. PLUS license users can add a **schedule** to each job so backups run automatically — for example, every night at 2 AM — without any manual action.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Oracle Cloud sync jobs in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generate a **Customer Secret Key** in the OCI Console and note your namespace and region.
3. In RcloneView, click **New Remote** > **S3 Compatible Storage** > **Oracle Cloud Infrastructure Object Storage**.
4. Enter your Access Key ID, Secret Key, and the regional endpoint URL.
5. Browse your buckets and use the **Job Wizard** to create your first sync or backup job.

Oracle Cloud Object Storage's S3 compatibility makes it a drop-in addition to any multi-cloud strategy managed through RcloneView.

---

**Related Guides:**

- [Manage Amazon S3 — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Centralize S3, Wasabi, and R2 with RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Manage IDrive e2 — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
