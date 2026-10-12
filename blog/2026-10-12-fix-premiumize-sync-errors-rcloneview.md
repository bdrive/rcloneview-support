---
slug: fix-premiumize-sync-errors-rcloneview
title: "Fix premiumize.me Sync Errors — Authorization and Transfer Problems Resolved with RcloneView"
authors:
  - casey
description: "Troubleshoot premiumize.me sync errors such as expired authorization, failed transfers, and missing files using RcloneView logs, job history, and Folder Compare."
keywords:
  - fix premiumize.me sync errors
  - premiumize rclone error
  - premiumize authorization failed
  - premiumize transfer failed
  - premiumize troubleshooting
  - RcloneView premiumize
  - cloud sync troubleshooting
  - premiumize GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix premiumize.me Sync Errors — Authorization and Transfer Problems Resolved with RcloneView

> When a premiumize.me job fails, RcloneView's job history, DEBUG logs, and Folder Compare show whether the cause is the login, the transfer load, or files that never arrived.

A premiumize.me job that stops early, or leaves a folder half copied, is hard to diagnose from a bare command line. RcloneView keeps the remote check, the job record, the log, and a side-by-side comparison in one window, so you can fix the real cause instead of rerunning blindly. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Re-Authorize the Remote

premiumize.me connects through OAuth in the browser. If jobs fail within seconds, the login is the first suspect. Open Remote Manager from the Remote tab, edit the premiumize.me remote, and sign in again through the browser prompt.

Then open the remote in an Explorer panel and browse the root folder. If it lists normally, the connection is healthy and the failure lies in the transfer itself.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorizing a premiumize.me remote in RcloneView" class="img-large img-center" />

## Read Job History and Enable DEBUG Logs

Open Job History and check the status, duration, and file count of the failed run. A job that errors midway usually points to particular files or to load, not credentials.

For the exact per-file message, go to Settings > Embedded Rclone, enable rclone logging, set the level to DEBUG, and click Restart Embedded Rclone. Reproduce the failure, then read the Log tab or the log file in your configured folder.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing an errored premiumize.me job" class="img-large img-center" />

## Reduce Load and Preview the Rerun

Intermittent failures often ease with fewer simultaneous transfers. In Step 2 of the sync wizard, lower the number of file transfers and set equality checkers to 4 or less. Keep "Retry entire sync if fails" at 3 so transient errors are retried.

Before the rerun, use Dry Run to see which files would be copied or deleted, so the retry holds no surprises.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Re-running a premiumize.me job with lower concurrency" class="img-large img-center" />

## Confirm With Folder Compare

After the rerun, open Compare with a local folder on one side and premiumize.me on the other. Filter for left-only, right-only, and different files, then copy only what is still missing rather than repeating the whole job.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing files missing on premiumize.me" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Re-authorize the premiumize.me remote and confirm the root folder lists.
3. Check Job History and turn on DEBUG logging for the failing job.
4. Lower concurrency, run a Dry Run, rerun, and verify with Folder Compare.

With the cause visible in logs and comparison, a premiumize.me failure becomes a short, repeatable fix.

---

**Related Guides:**

- [Manage premiumize.me Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-premiumize-me-cloud-sync-backup-rcloneview)
- [Sync premiumize.me Cloud Downloads with RcloneView](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [Fix put.io Sync Errors with RcloneView](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)

<CloudSupportGrid />
