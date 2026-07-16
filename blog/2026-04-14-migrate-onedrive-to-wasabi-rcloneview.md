---
slug: migrate-onedrive-to-wasabi-rcloneview
title: "Migrate OneDrive to Wasabi — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Move files from Microsoft OneDrive to Wasabi hot cloud storage using RcloneView. A step-by-step guide to OneDrive-to-Wasabi migration with zero CLI commands."
keywords:
  - migrate OneDrive to Wasabi
  - OneDrive Wasabi transfer
  - OneDrive to S3 migration
  - Wasabi cloud backup from OneDrive
  - rclone OneDrive Wasabi
  - cloud-to-cloud migration OneDrive
  - move Microsoft OneDrive files to Wasabi
  - RcloneView OneDrive migration
tags:
  - onedrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate OneDrive to Wasabi — Cloud Backup with RcloneView

> Use RcloneView to transfer files from Microsoft OneDrive to Wasabi's S3-compatible hot cloud storage — direct cloud-to-cloud, no intermediate downloads needed.

Organizations often start with OneDrive bundled in Microsoft 365, then realize they need a dedicated, cost-effective backup tier as data volumes grow. Wasabi's S3-compatible hot cloud storage is a popular destination: predictable flat-rate storage with no egress fees. RcloneView bridges both services through rclone's backends, letting you migrate OneDrive content to Wasabi buckets through a visual interface — no scripting required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting OneDrive and Wasabi

Add OneDrive first: **Remote tab → New Remote → Microsoft OneDrive**, authenticate through the OAuth browser login, and confirm the remote is saved. For personal OneDrive, the process is instant. For OneDrive for Business, you may need to select the correct tenant during authentication.

Add Wasabi next: **New Remote → Amazon S3 Compatible → Wasabi**. Enter your Wasabi access key, secret key, and select the correct endpoint for your bucket's region (e.g., `s3.us-east-1.wasabisys.com`). Wasabi's S3 API is compatible with rclone's S3 backend without any special configuration.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## Planning the Migration Scope

Open the Explorer in a two-panel layout — OneDrive on the left, Wasabi on the right. Browse the OneDrive tree to identify the folders you want to migrate. A legal department might be moving a `Contracts/2020-2024/` archive; a design agency might migrate a `Client-Assets/` folder with 500 GB of layered files.

Use RcloneView's **Get Size** right-click option on the source folder to calculate the total data volume before committing to the transfer. For large migrations, set the job to run overnight if bandwidth is shared with other users or services.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Viewing OneDrive to Wasabi transfer in RcloneView" class="img-large img-center" />

## Running the Sync Job with Verification

Create a Sync job in Job Manager: source is your OneDrive path, destination is your Wasabi bucket path. In Step 2, enable **checksum verification** to validate each file's hash after transfer — essential for compliance-sensitive archives. Set concurrent transfers to 6–8 for a balance of speed and API stability.

Run the Dry Run first to preview the operation list. OneDrive items with special characters in filenames (common in user-generated content) will be flagged for encoding adjustments. Review the Log tab after the dry run to catch any issues before the live transfer.

After the migration, use RcloneView's **Folder Compare** feature to visually diff the OneDrive source against the Wasabi destination — confirming file counts and sizes match before decommissioning the OneDrive copy.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive and Wasabi folders after migration in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add OneDrive via OAuth login and Wasabi via S3 credentials in the New Remote wizard.
3. Use Folder Compare to assess migration scope, then create a Sync job in Job Manager.
4. Enable checksum verification, run a Dry Run, then execute the full migration.

Moving from OneDrive to Wasabi with RcloneView gives you a verified, auditable migration trail — with job history and transfer logs saved automatically.

---

**Related Guides:**

- [Migrate OneDrive to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [Migrate OneDrive to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Manage OneDrive Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
