---
slug: fix-koofr-sync-errors-rcloneview
title: "Fix Koofr Sync Errors — Resolve Connection and Transfer Issues with RcloneView"
authors:
  - tayson
description: "Fix Koofr sync errors in RcloneView using Job History diagnostics, remote reconnection, and rclone debug logging."
keywords:
  - koofr sync errors
  - fix koofr connection issues
  - koofr rcloneview troubleshooting
  - koofr cloud backup fix
  - koofr transfer failed
  - rcloneview job history
  - koofr remote reconnect
  - equality checkers cloud sync
  - cloud sync error troubleshooting
  - koofr rclone debug logging
tags:
  - RcloneView
  - troubleshooting
  - tips
  - koofr
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Koofr Sync Errors — Resolve Connection and Transfer Issues with RcloneView

> When a Koofr sync job stalls, times out, or reports transfer errors, RcloneView's built-in diagnostics help you find the cause without leaving the app.

Koofr is one of the European cloud storage remotes teams pair with Google Drive, Dropbox, or S3-compatible storage inside RcloneView. When a sync job to or from Koofr fails partway through, the cause is usually narrow: a stale connection, an equality-checker setting that's too aggressive for the backend, or a filter rule quietly excluding files. RcloneView is a GUI client built on rclone, and it surfaces rclone's diagnostic layer — Job History, the built-in terminal, and configurable logging — directly in the interface, so you can trace a Koofr sync error without switching to a separate command-line tool.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reading the Job History for Clues

Every failed Koofr sync leaves a record in Job Manager's Job History tab, showing execution type (manual or scheduled), start time, duration, status, total size, speed, and file count for that run. A status of "Errored" alongside a low file count usually points to the sync stopping early — check whether the last successful file was large, or whether it sits inside a folder targeted by a custom filter rule. Filter history entries by date range (Today, Yesterday, Last week, Last month) to see if the errors are new or have been recurring.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing an Errored Koofr sync job" class="img-large img-center" />

## Reconnecting a Koofr Remote After Connection Errors

If the job log points to an authentication or connection failure rather than a file-level issue, open Remote Manager from the Remote tab and review the Koofr remote's configuration. Re-adding the remote through the New Remote wizard refreshes the stored connection and is often enough to clear errors caused by an expired session. Unlike mount-only tools, RcloneView also syncs and compares folders on top of mounting, so reconnecting a remote fixes both mount and sync access at once.

<img src="/support/images/en/blog/new-remote.png" alt="Reconnecting a Koofr remote through RcloneView's New Remote wizard" class="img-large img-center" />

## Tuning Equality Checkers and Retry Settings

In the sync job's Step 2 Advanced Settings, the Number of equality checkers defaults to 8 — RcloneView's own guidance recommends 4 or less for slower backends, which reduces the concurrent comparison load that can trigger timeouts. The Retry entire sync if fails option defaults to 3 attempts; leaving it enabled gives transient Koofr connection drops a chance to resolve on their own before the job is marked Errored. Run a Dry Run first to confirm the adjusted settings produce the expected file list before committing to a full sync.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Advanced sync settings panel in RcloneView showing equality checkers and retry options" class="img-large img-center" />

## Enabling Debug Logging for Persistent Errors

For errors that survive a reconnect and a settings adjustment, turn on detailed logging: Settings > Embedded Rclone > Enable rclone Logging, set Log level to DEBUG, then click Restart Embedded Rclone and reproduce the failing sync. The resulting log file captures the exact rclone-level error returned by Koofr, which is far more specific than the summary shown in Job History.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Re-running a Koofr sync job in RcloneView after enabling debug logging" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open Job Manager > Job History and locate the Errored Koofr entries to identify when the failures started.
3. Lower the Number of equality checkers to 4 in the job's Advanced Settings and re-run a Dry Run.
4. If errors persist, reconnect the Koofr remote via Remote Manager and enable DEBUG-level rclone logging to capture the underlying error.

A few targeted adjustments are usually enough to get a Koofr sync back to running reliably.

---

**Related Guides:**

- [Manage Koofr Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrate Koofr to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Fix Cloud Sync Timeout Errors — How to Resolve with RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-timeout-errors-rcloneview)

<CloudSupportGrid />
