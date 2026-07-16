---
slug: migrate-onedrive-to-cloudflare-r2-rcloneview
title: "Migrate OneDrive to Cloudflare R2 — Transfer Files with RcloneView"
authors:
  - tayson
description: "Move OneDrive files to Cloudflare R2 for developer workflows and CDN integration using RcloneView. Connect via OAuth and API Token, apply filters, and sync."
keywords:
  - migrate OneDrive to Cloudflare R2
  - OneDrive R2 transfer RcloneView
  - OneDrive to Cloudflare R2 sync
  - cloud storage migration developer
  - Cloudflare R2 object storage
  - OneDrive alternative R2
  - S3 compatible storage migration
  - RcloneView OneDrive migration
tags:
  - onedrive
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate OneDrive to Cloudflare R2 — Transfer Files with RcloneView

> Cloudflare R2 integrates natively with CDN and Workers pipelines — RcloneView handles the OneDrive-to-R2 migration without touching your local machine.

Developers and teams moving workloads to Cloudflare's ecosystem often need to relocate assets stored in OneDrive to Cloudflare R2. R2 provides zero-egress S3-compatible object storage that integrates directly with Cloudflare Workers, Pages, and CDN — making it ideal for static assets, media files, and build artifacts. RcloneView connects OneDrive via OAuth and Cloudflare R2 via API Token, and runs the migration as a cloud-to-cloud sync job with optional filter rules.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting OneDrive

Open RcloneView and navigate to **Remote Manager**. Click **New Remote** and select **OneDrive** from the provider list. RcloneView opens your browser for OAuth authentication — sign in with your Microsoft account and authorize access. Personal OneDrive, OneDrive for Business, and SharePoint document libraries are all accessible this way.

After authorization, open the remote in the File Explorer. Navigate to the folders you plan to migrate and note their paths.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting OneDrive and Cloudflare R2 in RcloneView" class="img-large img-center" />

## Connecting Cloudflare R2

Back in **Remote Manager**, click **New Remote** and select **S3 Compatible**. Fill in your Cloudflare R2 credentials:

- **Access Key ID**: from Cloudflare dashboard → R2 → Manage API Tokens (create an API token with Object Read & Write permissions)
- **Secret Access Key**: the token secret
- **Endpoint**: `https://{your-account-id}.r2.cloudflarestorage.com`

Save the remote. In the File Explorer, navigate to the target bucket (or create one). Verify access by confirming the bucket contents appear.

## Configuring the Migration Job with Filters

Go to **Jobs** and click **New Job**. Set OneDrive as the source and the specific folder to migrate. Set Cloudflare R2 as the destination and your target bucket path.

In step 2 of the job wizard, you can apply **filter rules** to narrow the migration:

- Migrate only specific file types (e.g., `--include "*.jpg"`, `--include "*.pdf"`)
- Exclude system folders or temp files (e.g., `--exclude ".DS_Store"`)
- Use **Dry Run** to preview the filtered result before running for real

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from OneDrive to Cloudflare R2" class="img-large img-center" />

## Running the Migration

Disable Dry Run and execute the job. RcloneView shows real-time progress in the transfer panel — files per second, current speed, and total data moved. OneDrive to R2 is a server-to-server transfer; your local machine acts as the orchestrator, not the data pipe.

Large files use multipart upload automatically. If any files fail mid-transfer, the Log tab shows the specific error. Re-running the job is safe — files already transferred are skipped.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring OneDrive to Cloudflare R2 transfer in real time" class="img-large img-center" />

## Post-Migration Verification

Use **Folder Compare** to check both sides after the migration. Open the OneDrive source and R2 destination in the compare view — RcloneView highlights files present on one side but not the other. For critical migrations, enable checksum verification in the job settings to ensure byte-level accuracy.

Once verified, you can update Cloudflare Worker bindings, CDN rules, or application configs to point to the R2 bucket instead of OneDrive.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connect OneDrive via OAuth in **Remote Manager**.
3. Connect Cloudflare R2 using your API Token and Account ID endpoint.
4. Create a migration job with optional filters, run Dry Run to preview, then execute.

Cloudflare R2's tight CDN integration and zero-egress billing make it a compelling destination for content formerly sitting in OneDrive.

---

**Related Guides:**

- [Migrate Dropbox to Cloudflare R2 with RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [Migrate Google Drive to Cloudflare R2 with RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Migrate Azure Blob to Cloudflare R2 with RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
