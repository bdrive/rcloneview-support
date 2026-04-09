---
slug: fix-cloud-sync-missing-files-after-transfer-rcloneview
title: "Fix Missing Files After Cloud Sync with RcloneView"
authors:
  - tayson
description: "Diagnose and fix missing files after cloud sync operations. Learn common causes like filter rules, special characters, and sync direction issues in RcloneView."
keywords:
  - rcloneview
  - missing files after sync
  - cloud sync missing files
  - rclone files not syncing
  - cloud transfer missing data
  - sync direction wrong
  - google docs not syncing
  - rclone filter rules
  - cloud file transfer issues
  - fix cloud sync
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Missing Files After Cloud Sync with RcloneView

> You ran a sync job and everything looked successful, but some files are missing at the destination. **RcloneView** provides the tools to diagnose exactly what happened and prevent it from recurring.

Discovering missing files after a cloud sync is one of the most stressful situations in cloud file management. The transfer completed without errors, the job log shows success, but when you check the destination, certain files are nowhere to be found. Before you panic, know that this is almost always caused by a logical configuration issue rather than data loss.

This guide walks through the most common reasons files go missing after sync operations and shows you how to use RcloneView's compare, logging, and dry-run features to identify and fix the problem.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Filter Rules Silently Excluding Files

The most frequent cause of missing files is filter rules that exclude them. If you set up `--exclude`, `--include`, or `--filter` rules and forgot about them, files matching those patterns will be silently skipped during sync. Rclone does not warn you about excluded files in its standard output.

**Common filter mistakes:**

- An `--include "*.jpg"` rule that inadvertently excludes all non-JPG files, including documents and spreadsheets.
- An `--exclude "*.tmp"` rule that also catches files with `.tmp` in the middle of their name.
- A `--min-size` flag that skips small but important files like configuration files or text notes.
- Leftover filter rules from a previous job that got carried over when creating a new one.

**How to diagnose:** In RcloneView, review the flags and filters attached to your sync job. Remove all filters temporarily and run a compare to see if the missing files appear. Then re-add filters one at a time to identify which rule is excluding them.

## Sync Direction Confusion

The difference between `sync`, `copy`, and `move` is critical, and choosing the wrong one can cause files to disappear.

- **Sync** makes the destination match the source. Files at the destination that do not exist at the source will be **deleted**. If you accidentally sync in the wrong direction (destination to source instead of source to destination), your source files could be removed.
- **Copy** only adds files to the destination. It never deletes anything. This is the safer option when you are unsure.
- **Move** transfers files and then deletes them from the source.

If files are missing from the source after a sync, you may have run a sync in the wrong direction. Always double-check which pane is the source and which is the destination in RcloneView's two-pane explorer before executing.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Google Docs, Sheets, and Slides

Google Workspace documents (Docs, Sheets, Slides, Drawings) are not traditional files. They are cloud-native objects that do not have a fixed size or a downloadable binary format in their native state. When syncing from Google Drive, rclone converts them to a downloadable format (e.g., `.docx`, `.xlsx`, `.pdf`), but this behavior depends on your configuration.

**Common issues:**

- Google Docs appear as zero-byte files or are skipped entirely if the export format is not configured.
- Files with very long names may fail to export on some operating systems.
- Shortcuts in Google Drive are not real files and will not transfer.

**How to fix:** Check that your Google Drive remote is configured with the appropriate export formats. Alternatively, if you do not need Google Docs at the destination, explicitly exclude them to avoid confusion about missing files.

## Case Sensitivity and Special Characters

Different cloud providers handle file names differently. A file named `Report.PDF` and `report.pdf` may be treated as the same file on Windows and OneDrive but as two different files on Linux and S3. During sync, one may overwrite the other silently.

**Problematic characters include:**

- Trailing spaces or periods (rejected by OneDrive and Windows).
- Colons, question marks, and angle brackets (invalid on Windows).
- Emoji or Unicode characters (some providers handle these inconsistently).
- Very long file paths exceeding 260 characters on Windows.

**How to diagnose:** Use RcloneView's compare feature to list files side by side. Look for files that exist at the source but are missing or named differently at the destination. Rclone logs may show rename warnings for files with incompatible characters.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## File Size Limits and Provider Restrictions

Some cloud providers impose maximum file size limits that can cause large files to be silently skipped:

- Google Drive: 5 TB per file.
- OneDrive: 250 GB per file.
- Dropbox: 2 GB per file via API (350 GB via desktop client).
- MEGA: file size limits vary by account type.
- Many S3-compatible providers: 5 TB per object, but individual upload parts are limited to 5 GB.

If you are syncing a file that exceeds the destination provider's limit, it will fail to transfer. Check your job history in RcloneView for any error entries related to oversized files.

## Using Compare to Find Missing Files

RcloneView's folder comparison feature is the fastest way to identify exactly which files are missing. Open the source on one side and the destination on the other, then run a compare. The tool will highlight files that exist only on the source, only on the destination, or that differ between the two.

This gives you a definitive list of what did not transfer, which you can then investigate individually. Look for patterns -- are all missing files in one folder? Do they share a file extension? Are they all below a certain size? These patterns point to the root cause.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Running a Dry Run Before Syncing

The best way to prevent missing files is to run a dry run before every sync. A dry run simulates the operation without actually transferring or deleting any files. It shows you exactly what rclone would do, including which files would be skipped, transferred, or deleted.

In RcloneView, you can use the `--dry-run` flag when configuring a sync job. Review the output carefully. If files you expect to transfer are not listed, investigate your filter rules and configuration before running the real sync.

## Prevention Strategies

To avoid missing files in future syncs:

1. **Always compare first.** Use RcloneView's compare feature before syncing to understand the current state of both locations.
2. **Use copy instead of sync** when you do not want anything deleted at the destination.
3. **Start with dry runs.** Add `--dry-run` to test new sync configurations before committing.
4. **Document your filter rules.** Keep a record of what each filter rule does and why it exists.
5. **Check job history.** After every sync, review the job history in RcloneView to confirm the expected number of files were transferred.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open the two-pane explorer with your source and destination remotes, then run a folder comparison.
3. Check your sync job configuration for filter rules, sync direction, and any flags that may exclude files.
4. Use `--dry-run` to preview the sync operation before executing it.

Missing files after sync are almost always a configuration issue, not data loss. Methodical diagnosis using RcloneView's compare and logging tools will pinpoint the cause every time.

---

**Related Guides:**

- [Browse and Manage Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Compare folder contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Synchronize Remote Storages Instantly](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
