---
slug: fix-cloud-sync-not-detecting-new-files-rcloneview
title: "Fix Cloud Sync Not Detecting New Files — How to Resolve with RcloneView"
authors:
  - steve
description: "Fix cloud sync jobs that miss new or recently changed files in RcloneView by adjusting cache settings, filters, and refresh behavior."
keywords:
  - cloud sync not detecting new files
  - rcloneview sync missing files
  - fix sync job not updating
  - directory cache stale listing
  - rcloneview troubleshooting
  - cloud sync refresh issue
  - new files not syncing
  - fix rclone sync detection
  - job not picking up changes
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - job-management
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Cloud Sync Not Detecting New Files — How to Resolve with RcloneView

> When a sync job runs clean but leaves brand-new files behind, the cause is almost always a stale folder listing, not a broken connection.

A support pattern that comes up often: a sync job completes with no errors, yet files that were added to the source folder minutes earlier never show up on the destination. It looks like data loss, but in most cases the job simply read a cached directory listing instead of the current state of the remote. RcloneView gives you the tools to diagnose and fix this without guesswork.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Check Whether the Explorer View Is Just Stale

Before touching any job settings, confirm the files are actually missing from the sync rather than just hidden from view. Open the source remote in the Explorer panel and press F5 (or Cmd+R on macOS) to force a Reload. RcloneView's file list can hold an outdated snapshot of a folder if you haven't refreshed since the files were added, and this alone resolves a surprising number of "missing file" reports.

If the files appear after a manual reload but the sync job still skipped them on its last run, the issue lives in the job's own filtering or cache behavior rather than the explorer view.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job manually in RcloneView to force a fresh scan" class="img-large img-center" />

## Review Filter Rules and Max File Age Settings

Step 3 of the sync wizard lets you set a Max File Age filter, and it's easy to leave an aggressive value in place after testing a job. If Max File Age is set too narrow, files that fall outside that window — including some newly added ones with an inherited older timestamp from a previous cloud copy — get silently excluded from the run. Open Edit Job for the affected sync and check the Filtering Settings step for any Max File Age, Max File Size, or custom filter rule that could be excluding the new files by name, extension, or path.

RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so the same filtering logic applies whether you're troubleshooting a local-to-cloud job or a cloud-to-cloud one.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing sync filter settings that can exclude new files" class="img-large img-center" />

## Rule Out Mount Directory Cache Delays

If the "missing" files live behind a mounted drive rather than a direct remote browse, the Dir Cache Time setting in your mount configuration is the usual culprit. A long directory cache time speeds up browsing but also means the mounted view won't reflect files added elsewhere until that cache expires. Lower the Dir Cache Time in Mount Manager for remotes where freshness matters more than raw browsing speed, or manually unmount and remount to force an immediate refresh.

Run a Dry Run on the sync job afterward — it lists exactly which files it now sees as new, so you can confirm the fix before committing to a real transfer.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a corrected sync run after fixing detection settings" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Force a Reload (F5) on the source remote to rule out a stale explorer view.
3. Open Edit Job and check Filtering Settings for a Max File Age or custom rule excluding the new files.
4. For mounted remotes, lower Dir Cache Time in Mount Manager, then remount and re-run the job with Dry Run to confirm.

Most "missing file" sync problems trace back to a cached listing or an overlooked filter rather than a real transfer failure, and RcloneView's Dry Run and Job History give you a fast way to confirm the fix worked.

---

**Related Guides:**

- [Filter Rules — Selective Sync in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run — Preview Cloud Sync in RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Fix Scheduled Sync Not Running — How to Resolve with RcloneView](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
