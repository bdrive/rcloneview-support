---
slug: fix-cloud-sync-file-modified-during-transfer-rcloneview
title: "Fix Files Modified During Transfer — Resolve Cloud Sync Conflicts with RcloneView"
authors:
  - tayson
description: "Resolve cloud sync errors caused by files being modified while transferring in RcloneView. Learn to handle file-in-use conflicts, partial uploads, and sync inconsistencies."
keywords:
  - fix files modified during cloud transfer
  - cloud sync conflict resolution RcloneView
  - file modified during upload error
  - rclone file in use error
  - cloud sync incomplete transfer fix
  - RcloneView sync conflict
  - file locked during sync troubleshooting
  - partial upload cloud sync fix
  - rclone modified during transfer
  - cloud backup file conflict resolution
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - data-recovery
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Files Modified During Transfer — Resolve Cloud Sync Conflicts with RcloneView

> When files change while RcloneView is syncing them, transfers can fail, produce partial uploads, or create inconsistent cloud copies — here's how to detect and resolve each scenario.

A common source of cloud sync errors is files being modified, locked, or written to while a sync job is in progress. Database files being written by an application, documents open in Office, or log files actively appended by a running service can all cause partial uploads or transfer failures. RcloneView exposes these errors clearly in its logs, and rclone provides several flags to handle them gracefully.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identify File-In-Use Errors in RcloneView Logs

When a file is locked or modified during a sync, rclone typically reports an error like:
- `Failed to copy: file changed under us - trying again`
- `source file is being written to`
- `partial read detected`

In RcloneView, these errors appear in the **Log tab** at the bottom of the interface. After a sync job completes, check the log for `ERROR` entries indicating file modification conflicts. The **Job History** view also shows `Errored` status for jobs where any files failed to transfer.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing file transfer errors in RcloneView" class="img-large img-center" />

## Use --ignore-errors and Retry Logic

By default, RcloneView's sync jobs are configured with a retry count (default: 3) that automatically re-attempts failed transfers. For files that are transiently locked (e.g., a file briefly opened and closed by an application), retries often succeed on subsequent attempts.

For sync jobs where some files are consistently locked (e.g., active database files), add `--ignore-errors` to the custom rclone flags in your sync job configuration. This tells rclone to continue syncing other files even when some fail, completing as much of the sync as possible and logging the failures for review.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring sync job settings to handle file-in-use errors in RcloneView" class="img-large img-center" />

## Exclude Active Application Files from Sync

The best long-term fix for file-in-use conflicts is to exclude files that are always in active use from the sync job's scope. RcloneView's filtering settings (Step 3 in the sync wizard) support custom exclusion rules:

- Exclude SQLite databases: add `*.db-journal` and `*.db-wal` to exclude active write-ahead logs
- Exclude Office temp files: add `~$*` to exclude Word/Excel lock files
- Exclude log files being written: add `*.log` or specific patterns

These filters prevent RcloneView from attempting to sync files that are guaranteed to be in use during the job, eliminating the error category entirely.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up file exclusion filters to avoid sync conflicts in RcloneView" class="img-large img-center" />

## Run Dry Run to Verify Filter Effectiveness

After adding exclusion filters, run a **dry run** of the sync job to confirm that the filtered files no longer appear in the transfer list. The dry run output shows every file that would be copied — verify that your active database files, lock files, and open documents are absent from the list before running the actual sync.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using dry run to verify filtered file list before syncing in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. After a failed sync, check the Log tab and Job History for file modification errors.
3. Add custom exclusion filters in the sync wizard for files that are always in use.
4. Run a dry run to confirm your filters are working, then re-execute the sync job.

Handling file-in-use conflicts in RcloneView is about understanding which files to exclude and how to configure retries — once configured correctly, your sync jobs run cleanly every time.

---

**Related Guides:**

- [Fix Cloud Sync Missing Files After Transfer — Resolve with RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Filter Rules and Selective Sync in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Recover Interrupted or Failed Transfers with RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
