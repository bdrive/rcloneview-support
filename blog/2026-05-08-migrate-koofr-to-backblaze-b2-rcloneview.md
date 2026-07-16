---
slug: migrate-koofr-to-backblaze-b2-rcloneview
title: "Migrate Koofr to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - tayson
description: "Learn how to migrate files from Koofr cloud storage to Backblaze B2 object storage using RcloneView — with checksum verification and automated retry for large transfers."
keywords:
  - Koofr to Backblaze B2 migration
  - migrate Koofr B2 RcloneView
  - Koofr Backblaze B2 transfer
  - switch Koofr to B2 storage
  - cloud migration Koofr
  - Koofr backup Backblaze B2
  - Koofr to S3 migration guide
  - rclone Koofr B2 GUI
tags:
  - koofr
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Koofr to Backblaze B2 — Transfer Files with RcloneView

> Move your Koofr cloud storage library to Backblaze B2 object storage in a single RcloneView job — verified, monitored, and resumable if interrupted.

Koofr is a privacy-focused European cloud storage service that also acts as a hub connecting other cloud accounts. If you're consolidating to Backblaze B2 for archiving or cost reasons, RcloneView handles the migration directly between the two providers — no local download required. Files stream from Koofr's WebDAV-based backend through rclone's transfer engine directly into your B2 bucket.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Koofr and Backblaze B2 Remotes

For Koofr, go to **Remote tab → New Remote** and select Koofr from the provider list. Koofr supports OAuth login — RcloneView opens a browser window for you to authenticate with your Koofr account. Alternatively, if you prefer password-based access, you can generate an app password in Koofr's account settings and use that with your Koofr email.

For Backblaze B2, enter your Application Key ID and Application Key generated from the B2 console. Specify the bucket name in the configuration. Once both remotes are saved, place Koofr in the left explorer panel and B2 in the right to confirm both are browsable.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and Backblaze B2 in RcloneView" class="img-large img-center" />

## Running the Migration

Click **Sync** in the Home tab and configure the job: Koofr folder as source, B2 bucket as destination. In the Advanced Settings, enable **Checksum** for integrity verification. Koofr uses WebDAV internally, which means file listings may be slightly slower than native S3, so set the number of checkers to 4 to avoid overwhelming the Koofr API.

Run a **Dry Run** first to see the complete file list that will transfer. This is especially useful for large Koofr libraries where Koofr also aggregates files from other connected accounts (Google Drive, Dropbox, etc.) — the dry run helps you confirm you're migrating only your actual Koofr storage and not the mirrored views of other providers.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Backblaze B2 migration in progress in RcloneView" class="img-large img-center" />

## Handling Interrupted Transfers

If the migration is interrupted (network drop, computer sleep, etc.), RcloneView's sync mode is inherently resumable. When you re-run the same Sync job, rclone compares the source and destination and transfers only files that aren't yet present or are different on the B2 side. No files already transferred need to be re-sent.

After the migration completes, use **Folder Compare** to verify that the Koofr source and B2 destination match. The compare view highlights any files present on Koofr but missing from B2, giving you a clear checklist of anything that needs a retry.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Koofr to B2 migration runs" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Koofr (OAuth) and Backblaze B2 (Application Key) as remotes.
3. Run a dry run to confirm scope, then execute the migration with checksum enabled.
4. Use Folder Compare after completion to verify the migration is fully successful.

Migrating from Koofr to Backblaze B2 with RcloneView is a reliable, resumable process that protects your data integrity throughout.

---

**Related Guides:**

- [Manage Koofr Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrate Koofr to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Manage Backblaze B2 Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
