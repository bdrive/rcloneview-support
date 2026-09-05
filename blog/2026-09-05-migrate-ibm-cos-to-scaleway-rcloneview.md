---
slug: migrate-ibm-cos-to-scaleway-rcloneview
title: "Migrate IBM Cloud Object Storage to Scaleway — Transfer Files with RcloneView"
authors:
  - kai
description: "Move buckets from IBM Cloud Object Storage to Scaleway Object Storage with RcloneView, verified by checksum and previewed with dry run."
keywords:
  - migrate IBM COS to Scaleway
  - IBM Cloud Object Storage migration
  - Scaleway Object Storage
  - S3-compatible storage transfer
  - RcloneView
  - object storage migration
  - cloud to cloud transfer
  - checksum verified sync
  - bucket migration tool
  - multi-cloud object storage
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate IBM Cloud Object Storage to Scaleway — Transfer Files with RcloneView

> Move buckets between two S3-compatible object storage providers directly, with dry-run previews and checksum verification along the way.

Teams shift object storage providers for data-residency requirements, regional latency, or simply to consolidate infrastructure, but manually re-uploading terabytes of bucket contents between two S3-compatible endpoints is slow and error-prone. RcloneView connects to both IBM Cloud Object Storage and Scaleway Object Storage as standard S3-compatible remotes, then transfers data bucket-to-bucket without routing files through a local disk first. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Both Object Storage Endpoints

Both IBM COS and Scaleway are added as S3-compatible remotes in RcloneView, each requiring an Access Key, Secret Key, and the provider's specific endpoint URL rather than an OAuth login. Add IBM Cloud Object Storage first using the API key and endpoint from your IBM Cloud instance, then repeat the process for your Scaleway Object Storage credentials.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IBM Cloud Object Storage and Scaleway remotes in RcloneView" class="img-large img-center" />

With both remotes configured, they appear as separate tabs in the explorer panels, so you can browse bucket contents on each side before deciding what actually needs to move.

## Previewing and Running the Migration

A sync or copy job configured with IBM COS as the source and Scaleway as the destination handles the bulk transfer. Before committing to a full run, use Dry Run to see exactly which objects will be copied — this catches naming or path issues early, especially useful when bucket structures don't match exactly between the two providers.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring objects directly from IBM Cloud Object Storage to Scaleway" class="img-large img-center" />

Enabling checksum comparison in the job's advanced settings verifies files by hash and size rather than just modification time, which matters when moving data between two different storage backends that may handle timestamps differently. Filtering settings also let you exclude specific file types or exceed-size objects if only part of a bucket needs to move.

## Monitoring and Scheduling the Transfer

Large object storage migrations rarely finish in one sitting. The Transferring tab shows live progress, speed, and file counts for the running job, and Job History keeps a record of each completed or interrupted run — including status, duration, and total size transferred — so you can confirm the migration finished cleanly or pick up where a canceled job left off.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after migrating buckets from IBM COS to Scaleway" class="img-large img-center" />

Adjusting the number of file transfers and multi-thread transfers in a job's advanced settings can help large object counts move more efficiently, and retry-on-failure settings reduce the chance a flaky connection derails a multi-hour transfer.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your IBM Cloud Object Storage credentials as a new S3-compatible remote.
3. Add your Scaleway Object Storage credentials as a second S3-compatible remote.
4. Run a dry run, then execute a checksum-verified sync job between the two.

Once both endpoints sit side by side in the same explorer, moving buckets between object storage providers becomes a monitored job instead of a manual guessing game.

---

**Related Guides:**

- [Manage IBM Cloud Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ibm-cos-cloud-sync-backup-rcloneview)
- [Manage Scaleway Object Storage — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2: Affordable S3-Compatible Storage Compared](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
