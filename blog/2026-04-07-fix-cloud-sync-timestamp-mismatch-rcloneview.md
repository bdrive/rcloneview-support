---
slug: fix-cloud-sync-timestamp-mismatch-rcloneview
title: "Fix Cloud Sync Timestamp Mismatch Errors in RcloneView"
authors:
  - tayson
description: "Resolve timestamp mismatch errors during cloud sync in RcloneView. Covers clock skew, timezone differences, provider metadata limitations, checksum comparison, and flags like --use-server-modtime and --no-update-modtime."
keywords:
  - rclone timestamp mismatch
  - cloud sync time error
  - rclone modification time wrong
  - rclone use server modtime
  - rclone no update modtime
  - cloud sync checksum comparison
  - rclone timezone issue
  - rclone clock skew fix
  - cloud provider timestamp support
  - rcloneview sync mismatch fix
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Cloud Sync Timestamp Mismatch Errors in RcloneView

> Timestamp mismatches cause rclone to re-transfer files that have not changed, wasting bandwidth and time. This guide explains why they happen and how to configure RcloneView to handle them correctly.

When rclone syncs files between two locations, it compares modification timestamps to decide which files need updating. If the source and destination report different timestamps for the same file — even by a single second — rclone treats the file as changed and transfers it again. This leads to unnecessary transfers, inflated bandwidth costs, and sync jobs that never seem to complete cleanly. The problem is especially common when syncing between different cloud providers, or between local storage and cloud remotes that handle timestamps differently.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Timestamp Mismatches Occur

Timestamps seem simple — a file was modified at a certain time — but the reality across cloud providers is far more complex. Several factors can cause the same file to report different modification times on the source and destination.

### Clock Skew Between Providers

Each cloud provider maintains its own internal clocks. While most are synchronized to within milliseconds using NTP, the timestamp they store for a file may be set at different points in the upload process. One provider may record the time when the upload started, another when it completed. For large files, this difference can be several seconds or more.

### Timezone and Precision Differences

Some providers store timestamps in UTC, others in the user's local timezone, and some truncate precision. For example:

- **Google Drive** stores modification times with millisecond precision and allows setting custom modification times.
- **OneDrive** supports modification time with second precision.
- **Amazon S3** does not natively support modification times in object metadata — instead, it records the upload time as the last-modified header.
- **Dropbox** preserves client-set modification times but only to the second.
- **SFTP** relies on the remote filesystem, which may have second or microsecond precision.

When you sync from a provider with millisecond precision to one with second precision, rounding causes a consistent 1-second (or sub-second) discrepancy.

### Modification Time Not Supported

Some cloud storage backends simply do not support preserving modification times:

- **S3-compatible storage** (AWS S3, Wasabi, Backblaze B2 in S3 mode, Cloudflare R2) stores the upload time, not the original file modification time. Rclone works around this by storing the original modification time in object metadata (X-Amz-Meta-Mtime), but this only works if the metadata was set during the initial upload by rclone.
- Files uploaded through the provider's web interface or other tools will not have this metadata, causing mismatches on subsequent syncs.

### Metadata Not Preserved During Transfer

If files were originally uploaded to the destination by a tool other than rclone, or if metadata headers were stripped by a proxy or CDN, rclone cannot find the expected modification time metadata. It falls back to the provider's last-modified time, which will differ from the source.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

## Diagnosing the Problem

Before applying fixes, confirm that timestamps are actually the issue. Run a dry-run sync in RcloneView or from the terminal:

```bash
rclone sync source: dest: --dry-run -v
```

Look at the output. If you see lines like:

```
NOTICE: file.txt: Skipped copy (src older)
```

or files being marked for transfer despite identical content, timestamps are likely the cause. You can also compare specific files:

```bash
rclone lsl source:path/to/file.txt
rclone lsl dest:path/to/file.txt
```

The `lsl` command shows file size, modification time, and path. Compare the timestamps — if the sizes match but times differ by a few seconds or show different timezones, you have a timestamp mismatch.

In RcloneView, use the **Compare Folders** feature to visually inspect differences. The compare view highlights files that differ by size, timestamp, or checksum, making it easy to identify timestamp-only discrepancies.

## Using --use-server-modtime

The `--use-server-modtime` flag tells rclone to use the modification time reported by the server rather than any time stored in metadata. This is useful when:

- You want consistent behavior regardless of how files were originally uploaded.
- Metadata modification times are unreliable or missing.
- You are syncing between two locations where files were uploaded by different tools.

```bash
rclone sync source: dest: --use-server-modtime
```

In RcloneView, you can add this flag in the job configuration under advanced options or custom flags.

**When to use it:** When syncing from an S3-compatible backend where files were uploaded by tools other than rclone, or when metadata headers are inconsistent.

**Trade-off:** Server modification times reflect upload time, not original file modification time. This means rclone cannot detect if a file was modified before re-uploading — it only sees the upload timestamp.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Using --no-update-modtime

The `--no-update-modtime` flag prevents rclone from setting the modification time on the destination after copying a file. By default, rclone copies a file and then sets the destination's modification time to match the source. If the destination does not support setting modification times (or rounds them), this creates a persistent mismatch on the next sync.

```bash
rclone sync source: dest: --no-update-modtime
```

**When to use it:** When the destination provider does not support setting modification times, or when the act of setting the time introduces rounding errors that trigger unnecessary re-transfers.

**Trade-off:** Without matching modification times, rclone must use another method (such as checksums) to detect changes on subsequent syncs.

## Switching to Checksum-Based Comparison

If timestamps are fundamentally unreliable between your source and destination, you can tell rclone to compare files by checksum instead of modification time. This is the most reliable way to determine if a file has actually changed.

```bash
rclone sync source: dest: --checksum
```

The `--checksum` flag makes rclone compute or retrieve hashes (MD5, SHA-1, or other supported algorithms) for files on both sides and only transfer files where the hash differs.

**Advantages:**

- Completely ignores timestamps — no more false positives from clock skew or precision differences.
- Detects actual content changes, not just metadata differences.
- Works reliably across all providers.

**Disadvantages:**

- Slower for large file sets because rclone must compute or fetch checksums for every file.
- Some providers do not return checksums for all files (e.g., multipart-uploaded S3 objects have composite ETags that are not standard MD5 hashes).
- Increases API calls, which may count against rate limits or incur costs.

In RcloneView, enable checksum comparison in the sync job settings. For large datasets, consider running checksum syncs on a schedule (e.g., weekly) and using timestamp-based syncs for daily incremental backups.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## How Different Providers Handle Timestamps

Understanding each provider's timestamp behavior helps you choose the right sync strategy.

| Provider | Modtime Support | Precision | Notes |
|---|---|---|---|
| Google Drive | Full | Millisecond | Allows setting custom modtime via API |
| OneDrive | Full | Second | Supports setting modtime |
| Dropbox | Full | Second | Client-set modtime preserved |
| Amazon S3 | Metadata only | Second | Rclone stores modtime in X-Amz-Meta-Mtime |
| Backblaze B2 | Metadata only | Millisecond | Stored in file info headers |
| Wasabi | Metadata only | Second | S3-compatible, uses X-Amz-Meta-Mtime |
| Cloudflare R2 | Metadata only | Second | S3-compatible, metadata-based |
| SFTP | Depends on FS | Varies | Depends on remote filesystem |
| Azure Blob | Metadata only | Second | Rclone uses metadata headers |
| Google Cloud Storage | Metadata only | Second | Custom metadata for modtime |

When syncing between two providers with "Full" modtime support (e.g., Google Drive to OneDrive), timestamp-based comparison works reliably. When syncing between a "Full" provider and a "Metadata only" provider, mismatches are common unless files were originally uploaded by rclone.

## Combining Flags for Best Results

For most cross-provider sync scenarios, a combination of flags gives the best results:

**For S3-to-S3 or S3-to-cloud syncs where files were uploaded by other tools:**

```bash
rclone sync source: dest: --checksum --no-update-modtime
```

**For Google Drive to OneDrive (both support modtime):**

```bash
rclone sync gdrive: onedrive: --modify-window 1s
```

The `--modify-window` flag adds tolerance to timestamp comparisons. Setting it to `1s` means files with timestamps within one second of each other are considered identical. This handles rounding from precision differences.

**For daily incremental sync with occasional full verification:**

```bash
# Daily (fast, timestamp-based with tolerance)
rclone sync source: dest: --modify-window 2s

# Weekly (thorough, checksum-based)
rclone sync source: dest: --checksum
```

In RcloneView, you can create two separate sync jobs — one for daily runs with `--modify-window` and one for weekly runs with `--checksum` — and schedule them independently.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Preventing Timestamp Issues in New Setups

If you are setting up a new sync workflow, you can avoid most timestamp issues from the start:

1. **Use rclone for all transfers** — rclone sets metadata consistently, so files uploaded by rclone will have correct modification time metadata everywhere.
2. **Set --modify-window appropriately** for your provider pair from the first sync.
3. **Use checksum mode for initial migrations** — when moving a large dataset to a new provider for the first time, use `--checksum` to ensure a clean baseline.
4. **Test with a small folder first** — sync a handful of files, check for mismatches, then scale up.
5. **Document your flags** — when you find the right combination for your providers, save it as a RcloneView job so you do not have to rediscover it later.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add your source and destination remotes** in the Remote Manager.
3. **Use Compare Folders** to inspect differences before syncing.
4. **Configure sync flags** (`--checksum`, `--modify-window`, `--no-update-modtime`) based on your provider pair.
5. **Create a scheduled sync job** and monitor results in the Job History.

Timestamp mismatches are one of the most common causes of inefficient cloud syncs. With the right flags and an understanding of how each provider handles modification times, you can eliminate unnecessary transfers and keep your sync jobs clean.

---

**Related Guides:**

- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Synchronize Remote Storages](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Real-Time Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
