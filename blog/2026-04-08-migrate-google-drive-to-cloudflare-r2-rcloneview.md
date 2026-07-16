---
slug: migrate-google-drive-to-cloudflare-r2-rcloneview
title: "Migrate Google Drive to Cloudflare R2 with RcloneView"
authors:
  - tayson
description: "Migrate Google Drive files to Cloudflare R2 with RcloneView. Step-by-step guide covering setup, Google Docs conversion, verification, and zero egress benefits."
keywords:
  - rcloneview
  - google drive to cloudflare r2
  - migrate google drive
  - google drive migration tool
  - cloudflare r2 migration
  - cloud to cloud migration
  - google docs export
  - zero egress migration
  - google drive backup r2
  - cloud storage migration gui
tags:
  - RcloneView
  - google-drive
  - cloudflare-r2
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Google Drive to Cloudflare R2 with RcloneView

> Moving from Google Drive to Cloudflare R2 eliminates egress fees and gives you S3-compatible access to your data — **RcloneView** handles the entire migration visually.

Google Drive is a powerful collaboration platform, but as storage needs grow and data access patterns shift, many teams look to object storage for its scalability and API flexibility. Cloudflare R2 offers S3-compatible storage with zero egress fees, making it an attractive destination for data that needs to be served programmatically. RcloneView bridges the gap between these two very different storage models, handling Google Docs format conversion, large file transfers, and post-migration verification in a single GUI.

This guide walks through the complete migration process — from configuring both remotes to verifying every file arrived intact.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Migrate from Google Drive to Cloudflare R2

Google Drive pricing starts at $1.99/month for 100 GB, scaling to enterprise tiers under Google Workspace. While affordable for collaboration, Google Drive is not designed for programmatic data access. API rate limits, lack of S3 compatibility, and per-user storage quotas make it a poor fit for serving static assets, hosting datasets, or feeding CI/CD pipelines.

Cloudflare R2 addresses these limitations. At $0.015/GB/month with zero egress charges, R2 is significantly cheaper for read-heavy workloads. Its S3-compatible API means existing tools and SDKs work without modification. If your data started on Google Drive but now needs to be accessible via S3 endpoints, migrating to R2 is the logical step.

## Setting Up Google Drive in RcloneView

Open the Remote Manager and add a Google Drive remote. RcloneView uses OAuth 2.0 — click authorize, log in to your Google account, and grant access. The token is stored locally in your rclone configuration.

If you are migrating from a Google Workspace account with Shared Drives, you can configure RcloneView to access specific Shared Drives rather than just your personal My Drive. This is important for organizational migrations where data is distributed across team drives.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive remote in RcloneView" class="img-large img-center" />

## Setting Up Cloudflare R2 in RcloneView

Add R2 as an S3-compatible remote. In the Remote Manager, select **Amazon S3 Compatible** and configure:

- **Provider**: Cloudflare
- **Access Key ID** and **Secret Access Key**: Generated from the Cloudflare dashboard
- **Endpoint**: `https://<account-id>.r2.cloudflarestorage.com`

Create a destination bucket in the Cloudflare dashboard or through RcloneView's explorer before starting the migration. Choose a bucket name that reflects the data source — for example, `gdrive-archive-2026` — for easy identification later.

## Handling Google Docs Format Conversion

This is the most critical consideration when migrating from Google Drive. Native Google formats — Docs, Sheets, Slides, Drawings — are not files in the traditional sense. They exist only within Google's ecosystem and have zero bytes on disk.

When RcloneView exports these files, it converts them to standard formats:

- **Google Docs** become `.docx` (Microsoft Word)
- **Google Sheets** become `.xlsx` (Microsoft Excel)
- **Google Slides** become `.pptx` (Microsoft PowerPoint)

You can configure the export format in the remote settings. If your team prefers PDF or OpenDocument formats, adjust accordingly before starting the migration. Note that exported files lose Google-specific features like comments, suggestion mode, and real-time collaboration links.

For files that are already in standard formats (uploaded PDFs, images, ZIPs), the transfer is a straightforward byte-for-byte copy with no conversion needed.

## Running the Migration

With both remotes configured, open the two-pane explorer. Place Google Drive on the left and your R2 bucket on the right. You can migrate the entire drive or select specific folders.

For a full migration, use a sync job. RcloneView will enumerate all files on Google Drive, export native Google formats, and transfer everything to R2. The real-time monitoring dashboard shows per-file progress, transfer speed, and estimated completion time.

For large migrations (hundreds of gigabytes or more), consider these optimizations:

- **Increase parallel transfers**: R2 handles high concurrency well. Increase the number of parallel transfers to 8-16 to maximize throughput.
- **Use bandwidth scheduling**: If migrating during business hours, throttle bandwidth to avoid impacting other network users.
- **Run in stages**: Migrate folder by folder rather than everything at once. This makes it easier to verify each batch and resume if interrupted.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to R2 migration progress in RcloneView" class="img-large img-center" />

## Verifying the Migration with Compare

After the migration completes, run RcloneView's compare operation between Google Drive and R2. The compare view highlights:

- **Files only on source**: Items that failed to transfer or were skipped
- **Files only on destination**: Unexpected extras (rare, but worth checking)
- **Files that differ**: Size or hash mismatches indicating incomplete transfers

Note that Google Docs files will always show as different because the exported format differs from the zero-byte Google native format. Focus on non-native files for a meaningful comparison. If any standard files show mismatches, re-run a sync to transfer only the missing or changed items.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to R2 migration with compare in RcloneView" class="img-large img-center" />

## Post-Migration: Incremental Sync

After the initial migration, you may want to keep R2 in sync with Google Drive during a transition period. Set up a scheduled sync job in RcloneView — daily or hourly depending on your needs. This ensures new files added to Google Drive are automatically replicated to R2 until you fully cut over.

Once the transition is complete and all access points reference R2, you can disable the sync job and optionally archive or delete the Google Drive data.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Google Drive to R2 in RcloneView" class="img-large img-center" />

## Job History and Audit Trail

Every migration run is logged in RcloneView's job history. You can review the number of files transferred, bytes moved, errors encountered, and elapsed time for each run. This provides an audit trail for compliance purposes and helps troubleshoot any issues that arise during or after the migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Google Drive to R2 migration runs" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Google Drive via OAuth and your Cloudflare R2 as an S3-compatible remote.
3. Configure Google Docs export formats (docx, xlsx, pptx or your preferred alternatives).
4. Run the migration using the two-pane explorer and verify results with the compare feature.

Google Drive excels at collaboration, but when you need S3-compatible, egress-free storage, Cloudflare R2 is the destination — and RcloneView is the bridge.

---

**Related Guides:**

- [Add Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Add AWS S3 and S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Compare folder contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
