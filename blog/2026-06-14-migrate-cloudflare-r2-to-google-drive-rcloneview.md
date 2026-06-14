---
slug: migrate-cloudflare-r2-to-google-drive-rcloneview
title: "Migrate Cloudflare R2 to Google Drive — Transfer Files with RcloneView"
authors:
  - jay
description: "Learn how to migrate files from Cloudflare R2 to Google Drive using RcloneView — no egress surprises, just a guided visual transfer workflow."
keywords:
  - cloudflare r2 to google drive
  - migrate r2 to google drive rcloneview
  - cloudflare r2 google drive transfer
  - rcloneview cloudflare r2 migration
  - object storage to google drive
  - r2 bucket to google drive rclone
  - cloudflare r2 backup google drive
  - cloud migration rcloneview
tags:
  - RcloneView
  - cloudflare-r2
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Cloudflare R2 to Google Drive — Transfer Files with RcloneView

> Move files from a Cloudflare R2 bucket to Google Drive using RcloneView's visual interface — no CLI required, no egress fees from R2.

Cloudflare R2 is popular with developers for its zero-egress object storage, but teams often need to move data into Google Drive for sharing with non-technical colleagues, integrating with Google Workspace, or consolidating storage accounts. RcloneView connects both services through a point-and-click workflow, so you can migrate R2 buckets to Google Drive without writing a single command.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Cloudflare R2 and Google Drive

Start by adding both services as remotes. In the **Remote** tab, click **New Remote** and select Cloudflare R2. You will need your Cloudflare **API Token**, **Account ID**, and **Endpoint URL** (in the format `https://<account-id>.r2.cloudflarestorage.com`). RcloneView uses rclone's S3-compatible backend for R2, so your R2 API token maps directly to the Access Key and Secret Key fields.

Next, add Google Drive as a second remote. RcloneView opens a browser window for OAuth authentication — sign in to your Google account and grant access. No API key entry is required.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Cloudflare R2 and Google Drive remotes in RcloneView" class="img-large img-center" />

Once both remotes are configured, you can browse your R2 buckets and Google Drive folders side by side in RcloneView's dual-panel explorer.

## Running the Migration

Click **Sync** in the Home tab to launch the 4-step job wizard. In Step 1, select your R2 bucket (or a specific subfolder within it) as the source, and a Google Drive folder as the destination. Name the job clearly — something like `r2-to-gdrive-migration` helps when reviewing history later.

In Step 2, enable **checksum verification** to confirm file integrity after each transfer. This is particularly important for large files like videos or archives, where corruption during transfer would otherwise go undetected. Set the retry count to at least 3 to handle temporary network interruptions automatically.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a migration job from Cloudflare R2 to Google Drive in RcloneView" class="img-large img-center" />

Before committing, run a **Dry Run** to preview exactly which files will be copied. This shows the full transfer list and file sizes, letting you confirm scope before anything touches your Google Drive.

## Filtering and Handling Large Transfers

If your R2 bucket contains a mix of file types, Step 3 lets you apply filters. A design team migrating a project bucket might exclude raw `.psd` files over 500 MB while keeping all web-ready exports, using the Max File Size filter. The **Max File Age** filter is equally useful for incremental migrations — moving only files modified in the last 30 days rather than an entire historical dataset.

For large migrations spanning hours, the **Job History** tab records each execution's speed, file count, and completion status. If the job is interrupted mid-way, re-running it is safe — RcloneView skips files already transferred successfully and continues from where it left off.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring a Cloudflare R2 to Google Drive transfer job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Cloudflare R2 as a remote using your API Token, Account ID, and Endpoint URL.
3. Add Google Drive as a remote via OAuth browser login.
4. Create a Copy or Sync job from your R2 bucket to a Google Drive folder — run a Dry Run first to confirm scope.

Cloudflare R2's zero-egress model means moving your data out costs nothing on the R2 side, and RcloneView handles the rest visually.

---

**Related Guides:**

- [Migrate Google Drive to Cloudflare R2 with RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Manage Cloudflare R2 — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Manage Google Drive — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
