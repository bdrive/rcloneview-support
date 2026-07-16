---
slug: migrate-aws-s3-to-google-drive-rcloneview
title: "Migrate AWS S3 to Google Drive — Transfer Files with RcloneView"
authors:
  - tayson
description: "Move files from AWS S3 buckets to Google Drive using RcloneView's GUI. No CLI required for S3-to-Google-Drive migrations — transfer, verify, and schedule with ease."
keywords:
  - migrate AWS S3 to Google Drive
  - S3 to Google Drive transfer
  - AWS S3 Google Drive migration
  - rclone S3 to Google Drive
  - cloud-to-cloud migration tool
  - move S3 files to Google Drive
  - object storage to Google Drive
  - RcloneView S3 migration
tags:
  - amazon-s3
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate AWS S3 to Google Drive — Transfer Files with RcloneView

> RcloneView handles S3-to-Google-Drive migrations as a direct cloud-to-cloud transfer — no local download required, with real-time progress and checksum verification.

Migrating from AWS S3 to Google Drive is a common scenario when teams shift from infrastructure-focused storage to collaboration-oriented platforms. A startup might archive years of S3 application logs and assets into Google Drive for easier cross-team access. A small agency might consolidate client deliverables from per-project S3 buckets into a shared Google Drive. RcloneView makes this migration visual and auditable, handling the transfer server-side without staging files on your local machine.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Both Remotes

Before migrating, add both cloud providers to RcloneView. For AWS S3, go to **Remote tab → New Remote → Amazon S3**, enter your Access Key ID, Secret Access Key, and select your bucket region. For Google Drive, add another remote using OAuth browser login — RcloneView opens Google's authorization page and saves the token automatically.

With both remotes configured, open the Explorer in a two-panel layout. Left panel shows your S3 bucket, right panel shows your target Google Drive folder. This side-by-side view is ideal for confirming folder structure before the migration begins.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring AWS S3 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Running the Migration with the Sync Wizard

For large-scale migrations, use the Sync Job wizard rather than manual drag-and-drop. In **Job Manager → Add Job**, set the source to your S3 bucket path (e.g., `mybucket/exports/`) and the destination to your Google Drive folder. In Step 2, set concurrent transfers to 8–12 depending on your bandwidth, and enable checksum verification to confirm each file's integrity after transfer.

Run a **Dry Run** first. RcloneView will list every file it would copy without actually transferring anything. For a bucket with 50,000 files across hundreds of GB, this preview lets you confirm the scope before committing hours of transfer time. If the file list looks correct, execute the live sync.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="S3 to Google Drive cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Handling File Type Differences and Filters

S3 buckets often contain machine-generated files — `.log` files, temporary uploads, zero-byte marker objects — that don't need to land in Google Drive. Use Step 3 filtering to exclude unwanted extensions: add `.log`, `.tmp`, and `.part` to custom exclusion filters. You can also set a max-file-age filter to only migrate files modified in the last 90 days, reducing transfer scope for active-use cases.

Google Drive has some quirks with file naming: characters like `?`, `*`, and `:` in S3 object keys will be transliterated automatically by rclone. RcloneView surfaces encoding errors in the Log tab so you can review any objects that required name changes.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the S3 to Google Drive migration job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your AWS S3 remote using Access Key + Secret + Region in the New Remote wizard.
3. Add your Google Drive remote via OAuth browser authentication.
4. Create a Sync job in Job Manager, run Dry Run to preview, then execute the migration.

With RcloneView, your S3-to-Google-Drive migration runs with full visibility — no CLI scripts, no staging costs, and a complete job history for your records.

---

**Related Guides:**

- [Migrate Google Drive to AWS S3 with RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [Incremental Backup: Google Drive to Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Checksum-Verified Cloud Migrations with RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
