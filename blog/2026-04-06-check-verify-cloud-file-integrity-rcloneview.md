---
slug: check-verify-cloud-file-integrity-rcloneview
title: "Verify Cloud File Integrity with RcloneView's Check and Compare Features"
authors:
  - tayson
description: "Use RcloneView's check and compare features to verify cloud file integrity, detect bit rot, validate checksums, and confirm successful migrations between providers."
keywords:
  - rclone check files
  - verify cloud file integrity
  - rcloneview compare folders
  - cloud checksum verification
  - detect bit rot cloud storage
  - post migration verification
  - rclone file validation
  - compare source destination cloud
  - rcloneview check feature
  - cloud data integrity tool
tags:
  - RcloneView
  - feature
  - cloud-sync
  - guide
  - tips
  - best-practices
  - security
  - monitoring
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Verify Cloud File Integrity with RcloneView's Check and Compare Features

> Copying files to the cloud is only half the job. Verifying that every byte arrived intact is what separates a reliable workflow from a hopeful one.

Moving terabytes across providers, running nightly backups, or archiving important datasets all share a common risk: silent corruption. A file can appear present in the destination yet differ from the source due to interrupted transfers, provider-side bugs, or plain bit rot over time. Rclone provides a dedicated `check` command that compares source and destination file by file, and RcloneView makes that process visual and accessible. This guide explains when and how to verify your cloud files.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why File Integrity Verification Matters

Cloud providers replicate data internally, but no system is immune to errors. Here are the most common scenarios where verification catches real problems:

- **Interrupted transfers** -- a network drop during a large copy can leave partial files on the destination that look complete by name alone.
- **Bit rot** -- storage media can degrade over months or years, flipping bits in rarely accessed files.
- **Provider bugs** -- occasional API errors can result in zero-byte uploads or truncated writes that pass without raising an error.
- **Migration validation** -- after moving hundreds of thousands of files between providers, you need proof that nothing was lost or altered.

Without a verification step, these issues go undetected until you actually need the file.

## How Rclone Check Works

The `rclone check` command compares a source and destination path and reports files that differ. Depending on the providers involved, it uses one of these methods:

| Method | How It Works | When Used |
|--------|-------------|-----------|
| **Hash check** | Compares checksums (MD5, SHA1, etc.) reported by both providers | Both providers support a common hash |
| **Size check** | Compares file sizes only | No common hash available |
| **Download check** | Downloads both files and compares byte by byte | Forced with `--download` flag |

Hash-based checking is the fastest and most reliable when both providers support it. Google Drive, OneDrive, S3-compatible providers, and Backblaze B2 all report file hashes, though not always the same type.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView compare folders showing file differences" class="img-large img-center" />

## Using Compare in RcloneView

RcloneView's built-in **Compare** feature gives you a visual side-by-side view of source and destination folders:

1. Open the **Explorer** pane and select your source remote on one side and destination on the other.
2. Navigate to the folders you want to compare.
3. Click **Compare** to run the analysis.
4. Review the results -- files are color-coded by status: matching, source-only, destination-only, or different.

This visual approach is ideal for spot-checking specific folders or reviewing post-migration results without memorizing command-line output.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane explorer with source and destination" class="img-large img-center" />

## Running Rclone Check via the Terminal

For a full integrity scan across an entire remote, open the **Terminal** in RcloneView and run:

```bash
rclone check source:path dest:path
```

Useful flags to know:

| Flag | Purpose |
|------|---------|
| `--size-only` | Compare by size only, skip hash check |
| `--download` | Force byte-by-byte comparison by downloading both copies |
| `--one-way` | Only check that source files exist in destination (not vice versa) |
| `--combined report.txt` | Write a combined report of matches and mismatches to a file |
| `--missing-on-src missing.txt` | Log files present in destination but missing from source |
| `--missing-on-dst missing.txt` | Log files present in source but missing from destination |
| `--error errors.txt` | Log files that failed the check |

Example for a thorough post-migration check:

```bash
rclone check gdrive:/Archive s3-backup:archive-bucket --combined /tmp/check-report.txt
```

## Post-Migration Verification Workflow

After migrating data between providers, follow this workflow to confirm success:

1. **Run a one-way check** from source to destination to confirm all source files arrived:
   ```bash
   rclone check source:path dest:path --one-way
   ```
2. **Review mismatches** -- any reported differences indicate files that need re-copying.
3. **Re-transfer failed files** using RcloneView's copy or sync with `--ignore-existing` removed.
4. **Re-run the check** to confirm all differences are resolved.
5. **Save the report** for audit purposes using the `--combined` flag.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed check operations" class="img-large img-center" />

## Detecting Bit Rot Over Time

For long-term archives, schedule periodic integrity checks:

1. Create a **Job** in RcloneView that runs `rclone check` against your archive.
2. Schedule it weekly or monthly using the **Job Scheduler**.
3. Review the job history after each run to catch any newly corrupted files.

This is especially important for cold storage tiers (S3 Glacier, Backblaze B2 archives) where files are written once and read rarely.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule periodic integrity check in RcloneView" class="img-large img-center" />

## Checksum Compatibility Between Providers

Not every provider supports the same hash algorithm. Here is a quick reference:

| Provider | MD5 | SHA1 | Other |
|----------|-----|------|-------|
| Google Drive | Yes | No | Quickxor available |
| OneDrive | No | No | QuickXorHash |
| Amazon S3 | Yes (ETag for single-part) | No | -- |
| Backblaze B2 | No | Yes | SHA1 native |
| Dropbox | No | No | Dropbox content hash |
| SFTP/Local | Yes | Yes | Multiple |

When two providers share no common hash, rclone falls back to size-only comparison. Use `--download` for byte-level certainty in those cases.

## Best Practices

- **Always verify after large migrations** -- a successful copy command does not guarantee every file is intact.
- **Use `--combined` reports** to create an auditable record of what matched and what did not.
- **Schedule periodic checks** for archival data that sits untouched for months.
- **Prefer hash checks** over size-only when possible -- same-size corruption is rare but real.
- **Run dry-run syncs** after a check to automatically fix any mismatches.

---

**Related Guides:**

- [Cloud-to-Cloud Transfers and Syncing](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)
- [Incremental Backup from Google Drive to Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Recover Interrupted and Failed Transfers](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
