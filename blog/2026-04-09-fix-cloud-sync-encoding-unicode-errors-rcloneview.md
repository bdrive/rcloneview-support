---
slug: fix-cloud-sync-encoding-unicode-errors-rcloneview
title: "Fix Cloud Sync Encoding and Unicode Filename Errors in RcloneView"
authors:
  - tayson
description: "Troubleshoot and fix encoding and Unicode filename errors during cloud sync in RcloneView. Resolve character incompatibilities across providers."
keywords:
  - rcloneview
  - unicode filename error
  - cloud sync encoding error
  - special characters cloud sync
  - filename encoding fix
  - rclone encoding
  - cloud file name error
  - unicode cloud transfer
  - character encoding fix
  - cross-platform filename issues
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - cloud-storage
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Cloud Sync Encoding and Unicode Filename Errors in RcloneView

> Different cloud providers and operating systems handle filenames differently. Unicode characters, special symbols, and encoding mismatches cause sync failures — here is how to diagnose and fix them in RcloneView.

A file named `résumé_2026.pdf` on Google Drive might fail to sync to OneDrive for Business. A folder with Japanese characters on a local NAS might not transfer to S3. A filename containing `#`, `%`, or `:` might work on Dropbox but get rejected by SharePoint. These encoding and character compatibility issues are among the most frustrating cloud sync problems because they silently skip files or produce errors that are difficult to interpret.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Common Symptoms

- **"Invalid filename" or "Unsupported character" errors**: The destination provider rejects filenames containing characters it does not support.
- **Files silently skipped during sync**: Transfer completes "successfully" but some files are missing on the destination. These files typically have problematic characters in their names.
- **Garbled filenames on destination**: Files arrive but their names contain `%xx` escape sequences, replacement characters (`?`), or mojibake (incorrect character rendering).
- **"Path too long" errors**: Encoded filenames become longer than the destination's path length limit (e.g., 400 characters for SharePoint, 1024 for S3).
- **Duplicate files with similar names**: Two files that look identical (e.g., `café` with composed vs. decomposed Unicode) are treated as different files.

## Understanding the Problem

### Provider Character Restrictions

Each cloud provider has different rules about allowed filename characters:

| Provider | Restricted Characters |
|---|---|
| OneDrive Business | `" * : < > ? / \ \|` and `#` `%` in some contexts |
| SharePoint | `" * : < > ? / \ \| #` `%` `~` and leading/trailing spaces |
| Google Drive | Only `/` and null bytes restricted |
| Dropbox | `/` and null bytes; trailing spaces and periods on Windows |
| AWS S3 | Almost no restrictions (any UTF-8 byte sequence) |
| Local filesystem (Windows) | `" * : < > ? / \ \|` and reserved names (CON, PRN, etc.) |

When syncing from a permissive provider (Google Drive, S3) to a restrictive one (OneDrive Business, SharePoint), files with restricted characters will fail unless encoded.

### Unicode Normalization

Unicode provides multiple ways to represent the same character. For example, `é` can be:
- **NFC (composed)**: A single code point U+00E9
- **NFD (decomposed)**: Two code points U+0065 + U+0301

macOS typically uses NFD, while Windows and Linux use NFC. Google Drive preserves the original encoding, while OneDrive normalizes to NFC. This means a file created on macOS and uploaded to Google Drive might not match the same file on OneDrive during comparison — even though the filename looks identical to humans.

## Fix 1: Enable Automatic Character Encoding

RcloneView (through rclone) automatically encodes restricted characters when transferring between providers. By default, each remote type has an encoding preset that handles its specific restrictions. For example, when copying to OneDrive, characters like `"`, `*`, and `:` are automatically replaced with Unicode equivalents that look similar but are allowed.

If you are seeing encoding errors despite this, verify that the encoding is not disabled. In the remote configuration, check that the `encoding` parameter is set to its default (do not set it to `None`). You can view and modify this in RcloneView's Remote Manager.

## Fix 2: Handle Unicode Normalization

If you are syncing between macOS-origin files and Windows-based cloud providers, Unicode normalization differences can cause false positives during comparison (files appear different when they are not) or duplicate files on the destination.

Use the `--no-unicode-normalization` flag in RcloneView's custom flags if you want to preserve the exact byte sequence of filenames. Alternatively, most cloud providers normalize filenames server-side, and rclone's default behavior handles this correctly for the most common cases.

For persistent issues, the `--fix-case` flag can help when case sensitivity differences between providers cause problems (e.g., S3 is case-sensitive; Windows local filesystem is not).

## Fix 3: Rename Problematic Files

For a small number of files with problematic characters, the simplest fix is to rename them on the source. Use RcloneView's explorer to identify files with special characters and rename them directly. Common characters to avoid across all providers:

- `# % & { } \ < > * ? / $ ! ' " : @ + \`` \| =`
- Leading or trailing spaces and periods
- Windows reserved names (CON, PRN, AUX, NUL, COM1-9, LPT1-9)

## Fix 4: Use Filter Rules to Skip Problematic Files

If you cannot rename files (e.g., they are on a shared drive you do not control), use filter rules to exclude files with specific character patterns from the sync. This is a workaround rather than a fix, but it prevents the sync from failing or stalling on problematic files.

In RcloneView's job configuration, add filter rules like:
- `--exclude "**/*#*"` to skip files containing `#`
- `--exclude "**/*%*"` to skip files containing `%`

Review the sync logs afterward to identify which files were skipped and handle them manually if needed.

## Fix 5: Check Path Length Limits

When filenames are encoded, they become longer (each restricted character is replaced with a multi-byte Unicode sequence). If the source path is already near the destination's limit, encoding pushes it over.

SharePoint has a 400-character path limit. Windows has a 260-character limit by default (configurable). S3 has a 1024-character key limit.

If you encounter path-too-long errors, shorten folder names in the source hierarchy or flatten deeply nested structures. RcloneView's explorer shows the full path, making it easy to identify deeply nested files.

## Preventing Future Issues

- **Standardize filenames before upload**: Avoid special characters in filenames from the start. Stick to alphanumeric characters, hyphens, underscores, and periods.
- **Test with dry run**: Before large syncs between providers with different character rules, use RcloneView's dry run mode to identify potential encoding issues without transferring data.
- **Review sync logs**: After each sync, check the job history for warnings about skipped or renamed files. Address these proactively before they accumulate.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verify that your remote configurations use default encoding settings.
3. Use dry run to identify encoding issues before committing to a transfer.
4. Rename or filter problematic files as needed.

Encoding and Unicode issues are subtle but common when syncing across providers. RcloneView's automatic encoding handles the majority of cases, and the troubleshooting steps above resolve the rest.

---

**Related Guides:**

- [Browse and Manage Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
