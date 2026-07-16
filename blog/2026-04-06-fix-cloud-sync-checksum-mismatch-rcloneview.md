---
slug: fix-cloud-sync-checksum-mismatch-rcloneview
title: "Fix Cloud Sync Checksum Mismatch Errors in RcloneView"
authors:
  - tayson
description: "Resolve checksum mismatch errors during cloud sync in RcloneView. Learn how rclone handles checksums, provider hash differences, and when to use --ignore-checksum."
keywords:
  - rclone checksum mismatch
  - cloud sync checksum error
  - rclone hash mismatch fix
  - rcloneview checksum error
  - rclone ignore checksum
  - md5 sha1 cloud storage hash
  - rclone data integrity check
  - fix sync mismatch rclone
  - cloud provider hash comparison
  - rclone checksum verification
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Cloud Sync Checksum Mismatch Errors in RcloneView

> Checksum mismatches during cloud sync usually mean the source and destination use different hash algorithms, not that your data is corrupt. Here is how to diagnose and resolve them.

When rclone syncs files between cloud providers, it compares checksums to verify that the transferred data matches the original. If the source and destination providers use different hash algorithms — or if one provider does not return checksums at all — rclone may report a mismatch or re-transfer files unnecessarily. This guide explains what is happening and how to fix it in RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Checksum Mismatches Mean

A checksum (or hash) is a fixed-length string computed from a file's contents. If two files produce the same checksum, they are identical. Rclone uses checksums to:

- **Verify uploads** — confirm the destination file matches the source after transfer.
- **Detect changes** — during sync, skip files whose checksum and size have not changed.
- **Ensure integrity** — flag corruption if a file's hash does not match expectations.

A mismatch means the computed hash on one side does not match the other. This can indicate actual data corruption, but more often it reflects a **hash algorithm incompatibility** between providers.

## Provider-Specific Hash Differences

Different cloud providers support different hash algorithms:

| Provider | Supported Hashes |
|----------|-----------------|
| **Local disk** | MD5, SHA-1, SHA-256 (depends on OS) |
| **Google Drive** | MD5 |
| **OneDrive** | SHA-1, QuickXorHash |
| **Dropbox** | Dropbox content hash (custom) |
| **Amazon S3** | MD5 (ETag, but not for multipart uploads) |
| **Backblaze B2** | SHA-1 |
| **Azure Blob** | MD5 |
| **SFTP** | MD5, SHA-1 (if server supports) |
| **Wasabi** | MD5 (ETag) |
| **Cloudflare R2** | MD5 (ETag) |

When syncing between providers that share a common hash (e.g., Google Drive MD5 to Azure Blob MD5), checksums work seamlessly. When there is no common hash (e.g., Google Drive MD5 vs OneDrive QuickXorHash), rclone cannot compare checksums directly.

## How Rclone Handles Mismatched Hashes

Rclone is intelligent about hash comparisons:

1. **Common hash found** — rclone uses the shared algorithm to compare files. No issues.
2. **No common hash** — rclone falls back to comparing file size and modification time. Files with matching size and time are considered identical.
3. **`--checksum` flag enabled** — rclone uses only checksums (no time comparison). If no common hash exists, rclone will re-transfer every file because it cannot confirm they match.

This third scenario is the most common cause of unexpected behavior: enabling `--checksum` between incompatible providers forces unnecessary re-transfers.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders in RcloneView to identify mismatched files" class="img-large img-center" />

## Common Error Scenarios

### Scenario 1: S3 Multipart Upload ETag Mismatch

When you upload a large file to S3 using multipart upload, the resulting ETag is not a simple MD5 hash — it is a composite hash of the parts. Rclone's local MD5 of the file will not match the S3 ETag, triggering a mismatch on the next sync.

**Fix:** This is expected behavior. Rclone handles it by storing the expected hash in metadata when possible. If you see re-transfers of large files, you can safely use `--ignore-checksum` for that specific sync job.

### Scenario 2: Google Drive to OneDrive Sync

Google Drive uses MD5 while OneDrive uses QuickXorHash. There is no overlapping hash algorithm.

**Fix:** Rclone automatically falls back to size + modification time. Do not use `--checksum` for this combination, or every file will be re-transferred.

### Scenario 3: Encrypted (Crypt) Remotes

When using rclone crypt, the encrypted file has a different hash than the plaintext source. Rclone handles this internally, but if you compare the crypt remote's hash against the original provider's hash, they will never match.

**Fix:** Always compare files through the crypt remote layer, not by looking at the underlying encrypted storage directly.

## Configuring Checksum Behavior in RcloneView

### Using the --checksum Flag

The `--checksum` flag tells rclone to use only checksums (not modification time) for determining whether files need to be transferred. Enable it when:

- Both source and destination support the same hash algorithm.
- You want the strongest integrity guarantee.
- You are syncing between local disk and a provider that supports MD5.

Do not use it when:

- Source and destination have no common hash — it will force re-transfer of all files.
- You are syncing large files to S3 (multipart ETags will not match).

### Using the --ignore-checksum Flag

The `--ignore-checksum` flag skips all checksum verification. Use it when:

- You have confirmed the data is correct but checksums will never match (e.g., S3 multipart ETags).
- You want faster sync by skipping hash computation on very large datasets.
- A provider returns inconsistent or incorrect hashes (rare but possible).

Do not use it as a default — checksums exist to catch real corruption.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure sync job flags in RcloneView before execution" class="img-large img-center" />

## Verifying Data Integrity

If you suspect actual corruption rather than a hash algorithm mismatch:

1. **Run `rclone check`** — this compares source and destination files and reports any differences. In RcloneView, you can use the folder comparison view.
2. **Download and compare locally** — download the file from both source and destination, then compute local checksums with `md5sum` or `sha256sum`.
3. **Check transfer logs** — review RcloneView's job history for errors during the original transfer.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer progress and verify checksums in RcloneView" class="img-large img-center" />

## Quick Reference: Hash Compatibility Matrix

| Sync Direction | Common Hash | Checksum Flag Safe? |
|---------------|-------------|-------------------|
| Local to Google Drive | MD5 | Yes |
| Local to OneDrive | SHA-1 | Yes |
| Local to S3 (small files) | MD5 | Yes |
| Local to S3 (multipart) | None (ETag differs) | No |
| Google Drive to OneDrive | None | No |
| Google Drive to S3 | MD5 | Yes (small files) |
| S3 to Backblaze B2 | None (MD5 vs SHA-1) | No |
| S3 to Azure Blob | MD5 | Yes (small files) |

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Check your providers' hash support** using the table above.
3. **Avoid `--checksum` between incompatible providers** to prevent unnecessary re-transfers.
4. **Use folder comparison** in RcloneView to visually verify sync results.

Most checksum mismatch errors are not data corruption — they are hash algorithm mismatches between providers. Understanding which hashes each provider supports is the key to resolving these issues quickly.

---

**Related Guides:**

- [Troubleshoot Rclone Errors in RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Fix S3 Access Denied Errors](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Fix OneDrive Sync Errors](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)

<CloudSupportGrid />
