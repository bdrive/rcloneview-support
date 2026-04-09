---
slug: migrate-azure-blob-to-google-drive-rcloneview
title: "Migrate Azure Blob Storage to Google Drive with RcloneView"
authors:
  - tayson
description: "Migrate Azure Blob Storage to Google Drive with RcloneView. Step-by-step guide for setup, large container handling, verification, and incremental sync."
keywords:
  - rcloneview
  - azure blob to google drive
  - migrate azure storage
  - azure blob migration
  - cloud to cloud migration
  - azure to google workspace
  - cloud storage migration tool
  - azure blob transfer
  - google drive migration gui
  - enterprise cloud migration
tags:
  - RcloneView
  - azure
  - google-drive
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Azure Blob Storage to Google Drive with RcloneView

> Azure Blob Storage is built for developers, but when your team needs collaboration features, Google Drive is the destination — **RcloneView** bridges the gap between object storage and consumer cloud.

Azure Blob Storage excels at serving applications — hot, cool, and archive tiers give developers fine-grained cost control for structured workloads. But when business needs shift toward document collaboration, shared editing, and Google Workspace integration, moving data from Azure containers to Google Drive becomes necessary. RcloneView connects to both platforms and provides a visual migration workflow that handles large containers, preserves folder structures, and verifies every transferred file.

This guide covers the full migration process, from configuring both remotes to setting up incremental sync for the transition period.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Migrate from Azure Blob to Google Drive

The reasons for this migration typically fall into a few categories:

- **Collaboration requirements**: Azure Blob Storage has no built-in document editing or sharing. Google Drive provides real-time collaboration via Docs, Sheets, and Slides, plus granular sharing permissions for teams.
- **Google Workspace integration**: Organizations moving to Google Workspace benefit from having their files in Google Drive, where they integrate with Gmail, Calendar, Meet, and other Workspace apps.
- **Cost simplification**: Azure Blob pricing involves storage tiers, egress charges, read/write operations, and data redundancy options. Google Workspace bundles storage into per-user pricing, which can be simpler to budget for.
- **End-user accessibility**: Non-technical users find Google Drive far more approachable than Azure Storage Explorer or the Azure portal.

## Setting Up Azure Blob Storage in RcloneView

Open the Remote Manager and add a **Microsoft Azure Blob Storage** remote. You need:

- **Account name**: Your Azure Storage account name
- **Account key** or **SAS URL**: The primary access key from the Azure portal, or a Shared Access Signature with read and list permissions

Once configured, RcloneView lists all containers in the storage account. Each container appears as a top-level folder in the explorer. Navigate into containers to browse blobs organized by their prefix-based virtual directory structure.

Azure Blob Storage supports three access tiers — Hot, Cool, and Archive. RcloneView can read from Hot and Cool tiers directly. Archive-tier blobs must be rehydrated to Hot or Cool before they can be transferred. If your migration includes archived blobs, initiate rehydration through the Azure portal first, then proceed with RcloneView once the blobs are accessible.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Setting Up Google Drive in RcloneView

Add a Google Drive remote using the OAuth 2.0 flow. Click authorize in the Remote Manager, log in to your Google account, and grant access. For Google Workspace accounts, you can connect to My Drive or a specific Shared Drive.

If the destination is a Shared Drive, select it during configuration. Shared Drives have different ownership rules — files belong to the organization rather than individual users — making them ideal for team migrations.

Google Drive has a per-user storage quota (15 GB free, or pooled storage on Workspace plans). Verify that your destination has sufficient quota before starting a large migration. RcloneView will report errors if the quota is exceeded during transfer.

## Handling Large Containers

Azure containers can hold millions of blobs totaling terabytes or petabytes of data. Migrating everything at once is feasible but requires planning:

- **Enumerate first**: Use RcloneView's explorer to browse the container and understand the folder structure and total size. This helps you estimate migration duration and Google Drive quota requirements.
- **Migrate by prefix**: If the container uses a logical folder structure (e.g., `/projects/2024/`, `/projects/2025/`), migrate one prefix at a time. This makes verification easier and allows you to prioritize active data.
- **Parallel transfers**: Increase the number of concurrent transfers in RcloneView's settings. Azure Blob Storage handles high concurrency well, and Google Drive supports parallel uploads with appropriate rate limit handling.

Google Drive enforces API rate limits — 10 uploads per second for most accounts. RcloneView throttles automatically and retries on 403 (Rate Limit Exceeded) or 429 responses, but large migrations will naturally take longer due to these constraints.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Azure Blob Storage to Google Drive in RcloneView" class="img-large img-center" />

## Running the Migration

Open the two-pane explorer with Azure Blob on the left and Google Drive on the right. Select the source container (or a specific prefix) and the destination folder on Google Drive.

Create a copy or sync job. RcloneView transfers each blob as a file, preserving the prefix-based directory structure as real folders on Google Drive. File names, sizes, and modification times are preserved. Azure metadata (custom blob properties) is not transferred because Google Drive does not support arbitrary key-value metadata.

During transfer, the real-time monitoring panel displays:

- Per-file transfer progress and speed
- Total files completed vs. remaining
- Estimated time to completion
- Any errors or retries

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Azure Blob to Google Drive migration in RcloneView" class="img-large img-center" />

## Verifying the Migration

After the transfer completes, use RcloneView's compare feature to verify the migration. Compare the Azure container against the Google Drive destination folder. The compare view highlights:

- **Missing files**: Blobs that were not transferred (possibly due to errors or archive-tier restrictions)
- **Size mismatches**: Files that transferred incompletely
- **Matching files**: Successfully migrated items

Since Azure Blob Storage uses MD5 for content verification and Google Drive uses its own checksum, RcloneView uses file size and modification time for comparison by default. For critical migrations, you can enable checksum verification in the job settings for byte-level accuracy.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Azure to Google Drive migration with compare" class="img-large img-center" />

## Scheduling Incremental Sync After Migration

Migrations rarely happen instantaneously — new data may land in Azure Blob Storage while the transfer is in progress. Set up a scheduled sync job in RcloneView to run daily (or more frequently) during the transition period. This incremental sync detects new or changed blobs and transfers only the delta to Google Drive.

Once all systems are pointed at Google Drive and the Azure containers are no longer receiving new data, run a final sync to catch any stragglers. Then disable the scheduled job.

For long-running transitions, RcloneView's job history provides a complete log of every sync run — files transferred, bytes moved, errors, and duration. This audit trail is invaluable for validating the migration timeline and reporting to stakeholders.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Azure to Google Drive" class="img-large img-center" />

## Managing the Transition

During the coexistence period, consider mounting both remotes in RcloneView for side-by-side access. Users can browse Azure containers and Google Drive simultaneously, verifying that their files are available in the new location. The mount feature lets users access Google Drive as a local drive letter, easing the transition for teams accustomed to mapped drives.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as local drive during migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Azure Blob Storage (with account key or SAS) and Google Drive (via OAuth) as remotes.
3. Run the migration from the two-pane explorer, migrating by container or prefix for manageability.
4. Verify with compare, then schedule incremental sync until the transition is complete.

Azure Blob Storage serves applications well, but when your team needs Google Workspace collaboration, RcloneView moves your data cleanly and verifiably.

---

**Related Guides:**

- [Add Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Synchronize Remote Storages Instantly](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
