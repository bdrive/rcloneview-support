---
slug: sync-storj-to-backblaze-b2-rcloneview
title: "Sync Storj to Backblaze B2 — Cloud Backup with RcloneView"
authors:
  - robin
description: "Sync files from Storj decentralized storage to Backblaze B2 with RcloneView. Keep a redundant off-network copy of your S3-compatible data."
keywords:
  - Storj to Backblaze B2
  - sync Storj
  - Storj backup
  - Backblaze B2 sync
  - decentralized storage backup
  - Storj RcloneView
  - S3-compatible storage sync
  - cloud-to-cloud backup
  - object storage redundancy
  - RcloneView sync
tags:
  - RcloneView
  - storj
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Storj to Backblaze B2 — Cloud Backup with RcloneView

> Keep a redundant, centralized copy of your Storj decentralized storage data on Backblaze B2 with RcloneView — one job, two very different storage architectures.

Storj spreads encrypted file shards across an independent node network, which is great for censorship resistance and cost, but it also means teams often want a conventional, centrally-hosted backup as a second layer of protection. Backblaze B2 fills that role well: a standard S3-compatible bucket with straightforward retrieval. RcloneView connects to both through its S3-compatible remote support and moves data between them directly, without a local staging drive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Storj and Backblaze B2

Add Storj as a remote in RcloneView using its S3-compatible gateway endpoint and access grant, or the native Storj access key pair depending on how your project is configured. Add Backblaze B2 separately using your Application Key ID and Application Key from the B2 console. Both remotes then show up as browsable file trees side by side in the Explorer panels, so you can confirm bucket structure and object counts before building a sync job.

RcloneView mounts AND syncs 90+ providers from one window on Windows, macOS, and Linux, so the same interface you use for Storj and B2 also handles any other clouds already in your stack.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Storj and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Building the Sync Job

Create a one-way sync job with your Storj bucket as source and a Backblaze B2 bucket as destination — "Modifying destination only" keeps B2 as a pure mirror that never writes back to Storj. In the Advanced Settings step, enable checksum comparison so files are matched by hash and size rather than just modification time, which matters when object metadata behaves differently across two distinct storage backends.

For a team archiving a decentralized dataset — say a research group with 4TB of sharded video capture footage on Storj — the Filtering step lets you scope the first run by file age or extension, so you can validate the pipeline on a subset before committing to the full transfer. Once the initial sync completes, scheduled reruns only move new or changed objects.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Storj bucket to Backblaze B2 with RcloneView" class="img-large img-center" />

Run Dry Run first. It lists every object that would be copied without transferring anything, which is the safest way to confirm scope before moving data between two providers with different pricing and retrieval characteristics.

## Monitoring and Verifying the Transfer

Track progress in the Transferring tab of the bottom Info View — file count, transfer speed, and percentage complete update live as the sync runs. Once it finishes, open Folder Compare between the Storj source and B2 destination to confirm every object landed and matches by size, catching any objects that failed midway due to a network hiccup on either side.

Job History keeps a permanent record of each sync run, including duration, total data moved, and status, so you have an audit trail showing exactly when your B2 backup was last brought current with Storj.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Storj to Backblaze B2 sync job history in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Storj as a remote using its S3-compatible endpoint and access credentials.
3. Add Backblaze B2 using your Application Key ID and Application Key.
4. Build a one-way sync job, run Dry Run, then execute to mirror Storj into B2.

A second, centrally-hosted copy of decentralized storage data closes an easy gap in most backup strategies, and RcloneView makes maintaining it a scheduled, GUI-driven routine rather than a manual chore.

---

**Related Guides:**

- [Manage Storj Decentralized Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Migrate Backblaze B2 to Wasabi with RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)
- [Fix Storj Upload Errors with RcloneView](https://rcloneview.com/support/blog/fix-storj-upload-errors-rcloneview)

<CloudSupportGrid />
