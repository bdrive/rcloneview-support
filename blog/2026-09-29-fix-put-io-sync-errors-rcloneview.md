---
slug: fix-put-io-sync-errors-rcloneview
title: "Fix Put.io Sync Errors — Diagnose and Resolve with RcloneView"
authors:
  - kai
description: "Fix Put.io sync errors with RcloneView: re-authorize OAuth, tune transfers, read job history and logs, and verify results with Folder Compare."
keywords:
  - fix put.io sync errors
  - put.io authentication error
  - put.io transfer failed
  - putio rclone errors
  - RcloneView put.io
  - put.io oauth reauthorize
  - cloud sync troubleshooting
  - put.io download fails
  - rclone log debug
  - put.io sync GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - putio
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Put.io Sync Errors — Diagnose and Resolve with RcloneView

> Work through the usual causes of failed Put.io transfers, from expired authorization to over-eager concurrency, using tools built into RcloneView.

A Put.io sync that stops halfway usually leaves you guessing: was it the login, the network, or the job settings? RcloneView puts the evidence in one place. The Transferring tab, Job History, and the log viewer each show a different slice of what happened, and Folder Compare tells you what is still missing afterward.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Start with Authorization

Put.io connects through browser-based OAuth. If a job fails immediately with an authentication or permission message, the stored authorization is the first suspect. Open **Remote Manager** from the Remote tab, edit the Put.io remote, and run through the browser login again. Make sure you sign in to the same Put.io account that holds the files, since a second account in the same browser is a common cause of empty listings.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorizing a Put.io remote in RcloneView" class="img-large img-center" />

After re-authorizing, refresh the Put.io panel with F5 (Cmd+R on macOS) and confirm your folders list correctly before you re-run any job.

## Read Job History and Logs

When a job fails partway, open **Job History**. Each run records its execution type, start time, time spent, status (Completed, Errored, or Canceled), total size, speed, and file count. Comparing a failed run with a previous good one shows whether it died early, which points at credentials, or late, which points at network or volume issues.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing errored and completed Put.io runs" class="img-large img-center" />

For details, turn on file logging under **Settings > Embedded Rclone**, set the log level to DEBUG, and click Restart Embedded Rclone. Reproduce the failure, then read the log tab for the failing file and error text. The Terminal tab also lets you run `rclone about "putio:"` (using your own remote name) to confirm the remote responds.

## Tune the Job Settings

Transfer failures on remote services are often self-inflicted. In the sync wizard's Advanced Settings, lower **Number of file transfers** and **Number of equality checkers**; the defaults suggest keeping checkers at 4 or fewer for slow backends. Leave **Retry entire sync if fails** at its default of 3 so brief interruptions recover on their own. If very large files are the problem, use the max file size filter to split the work into a first pass of smaller files and a separate pass for the rest.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Put.io sync job after adjusting settings" class="img-large img-center" />

## Confirm What Is Missing

After a rerun, open **Compare** with Put.io on one side and your destination on the other. Left-only files are the ones that never arrived, and **Copy right** sends only those. RcloneView shows this on the FREE license, alongside mount and sync, so you can finish a recovery without upgrading.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare listing files still missing from the destination" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Re-authorize the Put.io remote in Remote Manager and refresh the listing.
3. Review Job History, and enable DEBUG logging if the cause is not obvious.
4. Lower concurrency, rerun, then use Compare to copy anything left over.

Reading the evidence first turns a vague failure into a specific, fixable setting.

---

**Related Guides:**

- [Manage Put.io Storage](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Migrate Put.io to Google Drive](https://rcloneview.com/support/blog/migrate-put-io-to-google-drive-rcloneview)
- [Fix OAuth Token Expired Cloud Sync Errors](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
