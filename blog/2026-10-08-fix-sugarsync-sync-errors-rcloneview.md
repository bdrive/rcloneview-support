---
slug: fix-sugarsync-sync-errors-rcloneview
title: "Fix SugarSync Sync Errors — Authorization, Transfer, and Missing File Problems Resolved with RcloneView"
authors:
  - morgan
description: "Troubleshoot SugarSync sync errors such as failed authorization, interrupted transfers, and missing files using RcloneView's logs, job history, and Folder Compare."
keywords:
  - fix SugarSync sync errors
  - SugarSync rclone error
  - SugarSync authorization failed
  - SugarSync upload failed
  - SugarSync troubleshooting
  - RcloneView SugarSync
  - rclone SugarSync remote
  - cloud sync troubleshooting
  - SugarSync GUI
tags:
  - RcloneView
  - sugarsync
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix SugarSync Sync Errors — Authorization, Transfer, and Missing File Problems Resolved with RcloneView

> When a SugarSync job fails, RcloneView's job history, DEBUG logs, and Folder Compare show whether the cause is the remote, the transfer load, or files that never arrived.

A SugarSync sync that stops with a vague error, or finishes with folders that look incomplete, is hard to diagnose from the command line alone. RcloneView puts the remote check, the job record, the log, and a side-by-side comparison in one window, so you can work from evidence instead of rerunning blindly. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Confirm the Remote Still Connects

If a job fails within seconds, suspect the remote before the data. Open Remote Manager from the Remote tab, edit the SugarSync remote, and re-authorize it if the account details have changed. Then open the remote in an Explorer panel and browse the root folder. If it lists normally, the connection is healthy and the problem lies elsewhere.

In the built-in Terminal tab you can also run `rclone about "remote:"`, replacing `remote` with your remote's name, as a quick check that the account responds.

<img src="/support/images/en/blog/new-remote.png" alt="Editing a SugarSync remote in RcloneView Remote Manager" class="img-large img-center" />

## Read Job History and Turn On DEBUG Logging

Open Job History and check the status, duration, and file count of the failed run. A job that errors partway through usually points to specific files or transfer load, not credentials.

For the exact message per file, go to Settings > Embedded Rclone, enable rclone logging, set the level to DEBUG, and click Restart Embedded Rclone. Reproduce the failure and read the log in the Log tab or in your configured log folder.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing an errored SugarSync job" class="img-large img-center" />

## Lower Concurrency and Preview the Rerun

Intermittent upload failures often ease when fewer files move at once. In Step 2 of the sync wizard, reduce the number of file transfers and set equality checkers to 4 or less, which is the guidance for slow backends. Keep "Retry entire sync if fails" at 3 so transient failures are retried up to three times.

Before rerunning, use Dry Run to review which files will be copied or deleted, so the retry cannot surprise you.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Re-running a SugarSync job with reduced concurrency in RcloneView" class="img-large img-center" />

## Verify With Folder Compare

After the rerun, open Compare with your local folder on one side and SugarSync on the other. Filter for left-only, right-only, and different files to see what is still missing or mismatched, then copy just those items instead of repeating the entire job.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare listing files missing on SugarSync" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Re-authorize the SugarSync remote in Remote Manager and confirm the root folder lists.
3. Check Job History and enable DEBUG logging for the failing job.
4. Lower concurrency, run a Dry Run, rerun, and confirm the result with Folder Compare.

Once the cause is visible in the logs and the comparison, a SugarSync failure becomes a short, repeatable fix.

---

**Related Guides:**

- [Manage SugarSync Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [Migrate SugarSync to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [Fix OpenDrive Sync Errors with RcloneView](https://rcloneview.com/support/blog/fix-opendrive-sync-errors-rcloneview)

<CloudSupportGrid />
