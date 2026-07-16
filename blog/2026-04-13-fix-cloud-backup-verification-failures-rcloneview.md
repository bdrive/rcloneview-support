---
slug: fix-cloud-backup-verification-failures-rcloneview
title: "Fix Cloud Backup Verification Failures — Ensure Data Integrity with RcloneView"
authors:
  - tayson
description: "Troubleshoot cloud backup checksum mismatches and verification failures in RcloneView. Use Folder Compare, check settings, and re-run transfers to ensure data integrity."
keywords:
  - cloud backup verification failure RcloneView
  - checksum mismatch cloud sync
  - fix backup integrity error rclone
  - cloud transfer checksum error
  - RcloneView data integrity check
  - rclone checksum verification failure
  - backup corruption fix rclone
  - cloud sync verification troubleshooting
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Cloud Backup Verification Failures — Ensure Data Integrity with RcloneView

> Checksum mismatches after a cloud transfer can indicate provider differences or real corruption — understanding which scenario you're dealing with determines the right fix.

After a large backup completes, you may encounter verification failures: checksum mismatches, files marked as different when they should be identical, or errors in RcloneView's comparison tools. These failures can have several causes, from benign provider metadata differences to genuine data corruption. This guide walks through diagnosing each scenario and applying the correct fix.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Understanding Checksum Types

Different cloud providers support different checksum algorithms. AWS S3 uses MD5 (for standard uploads) and SHA-256 (for checksums). Google Drive uses MD5. Backblaze B2 uses SHA1. Dropbox uses a custom block hash. When rclone compares files between two providers using different hash algorithms, it falls back to size comparison and modification time instead of a hash comparison.

This means a "mismatch" in RcloneView's Folder Compare view may not indicate corruption — it may indicate that the providers use incompatible hash types and rclone is comparing by size only. Genuine corruption shows up as matching sizes but different hash values on the same algorithm.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify backup verification failures" class="img-large img-center" />

## Enable Checksum Verification in Sync Jobs

To catch real corruption at transfer time, enable checksum verification in your sync job settings. In RcloneView, open the job and go to step 2. Enable the **checksum** option. With this enabled, rclone computes and compares hashes during transfer. If a file's hash doesn't match after upload, rclone retries the transfer.

Note: enabling checksum verification increases CPU usage and transfer time slightly, but it catches data corruption that would otherwise go undetected.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling checksum verification in RcloneView sync job settings" class="img-large img-center" />

## Using Folder Compare to Detect Mismatches

After a backup completes, open **Folder Compare** in RcloneView. Point one side at your source and the other at the backup destination. RcloneView shows files in three categories:

- **Match**: same on both sides
- **Source only**: exists at source but missing at destination
- **Destination only**: exists at destination but not source
- **Different**: same name but different attributes (size, hash, or modification time)

Files in the "Different" category warrant closer inspection. Download and compare a sample to determine if the content is actually different or if it's a metadata artifact from the provider.

## Running a Check via Terminal

For a deep integrity check, RcloneView's **Terminal** tab lets you run rclone commands directly. Use `rclone check` to compare source and destination thoroughly:

```
rclone check source:path destination:path --one-way
```

This command lists every file that differs between the two sides, using the best available hash for each provider. The output shows exactly which files have mismatches, making it easier to identify whether the issue is systematic or isolated.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running rclone check command in RcloneView Terminal" class="img-large img-center" />

## Re-Running with Different Settings

If verification failures persist and the files genuinely differ, re-run the backup job with:

- **Checksum verification enabled**: ensures rclone re-transfers and validates
- **Ignore existing**: force re-transfer even for files that appear present
- **Low level retries increased**: gives more chances for successful transfers

For cross-provider backups where hash algorithms differ, switch to **size and modification time** comparison mode instead of hash-only comparison in the job's advanced settings. This reduces false positives from hash incompatibility.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Enable **checksum verification** in your sync job's step 2 transfer options.
3. After backup completion, use **Folder Compare** to identify any discrepancies.
4. For deeper analysis, run `rclone check` from the **Terminal** tab.

Systematic checksum verification and post-backup comparison gives you confidence that your cloud backups are byte-for-byte accurate.

---

**Related Guides:**

- [Fix Cloud Sync Checksum Mismatch with RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Checksum Verified Cloud Migrations with RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Fix Cloud Sync Missing Files After Transfer](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
