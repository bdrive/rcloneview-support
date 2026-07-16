---
slug: sync-azure-blob-to-backblaze-b2-rcloneview
title: "Sync Azure Blob Storage to Backblaze B2 — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Learn how to sync or migrate files from Azure Blob Storage to Backblaze B2 using RcloneView for cost savings, redundancy, and automated cloud backup."
keywords:
  - Azure Blob Storage
  - Backblaze B2
  - cloud migration
  - RcloneView
  - cloud-to-cloud sync
  - cloud backup
  - storage cost savings
  - rclone azure b2
tags:
  - azure
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Azure Blob Storage to Backblaze B2 — Cloud Backup with RcloneView

> Moving data from Azure Blob Storage to Backblaze B2 can dramatically reduce your storage costs — RcloneView makes the migration and ongoing sync straightforward with a guided graphical interface.

Azure Blob Storage is widely used for enterprise workloads, but Backblaze B2 offers significantly lower storage pricing — often a fraction of Azure's cost — making it attractive as a secondary backup target or a full migration destination. Whether you want a one-time migration or a continuous sync for redundancy, RcloneView handles both without requiring command-line expertise. RcloneView ships with an embedded rclone binary, so there is nothing extra to install.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Azure Blob Storage in RcloneView

Click **New Remote** in RcloneView and select **Microsoft Azure Blob Storage** from the provider list. You will need your **Storage Account Name** and **Storage Account Key** from the Azure Portal (under your storage account > Access Keys). Optionally, you can use a SAS token or a connection string. After saving, RcloneView connects and lists all your blob containers.

If you use multiple Azure storage accounts — for example, separate accounts per environment or region — add each as its own named remote. RcloneView manages all of them from the same interface, so you can compare containers and move data between accounts with ease.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Connecting Backblaze B2

Add a second remote for Backblaze B2 by clicking **New Remote** again and selecting **Backblaze B2**. Enter your **Application Key ID** and **Application Key** from the Backblaze dashboard. You can scope the key to a specific bucket for extra security. After saving, the B2 remote appears in the explorer alongside your Azure remote.

Now you can open both remotes side by side in the dual-pane view. Drag and drop individual files or entire folder trees from Azure to B2 for one-off transfers. For migrations of large containers, the sync job approach is more reliable and resumable.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Azure Blob to Backblaze B2 in RcloneView" class="img-large img-center" />

## Creating and Scheduling the Sync Job

Open the **Job Manager** and use the four-step **Job Wizard** to create a sync job with Azure Blob as the source and Backblaze B2 as the destination. Always run a **dry run** first — this previews all additions and deletions without touching your data. Once you are satisfied with the preview, run the live sync.

For ongoing redundancy, PLUS license users can add a **schedule** to run the Azure-to-B2 sync automatically on a daily or weekly cadence. The **Job History** panel logs every run with file counts and transfer sizes, so you can verify that backups completed successfully and meet any compliance requirements.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add an **Azure Blob Storage** remote using your Storage Account Name and Key.
3. Add a **Backblaze B2** remote using your Application Key ID and Key.
4. Open both remotes in the dual-pane explorer and use the **Job Wizard** to create a sync job.
5. Run a **dry run** first, then schedule recurring syncs with a PLUS license.

Syncing from Azure Blob to Backblaze B2 through RcloneView is one of the most efficient ways to build a cost-effective cloud backup strategy without giving up on reliability.

---

**Related Guides:**

- [Manage Azure Blob Storage — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-azure-blob-storage-cloud-sync-rcloneview)
- [Manage Backblaze B2 — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrate OneDrive to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
