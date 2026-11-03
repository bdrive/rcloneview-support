---
slug: fix-google-drive-sync-errors-rcloneview
title: "Fix Google Drive Sync Errors — Missing Folders, Failed Jobs, and Empty Listings Resolved with RcloneView"
authors:
  - steve
description: "Troubleshoot Google Drive sync errors like missing shared folders, empty Computers listings, and errored jobs using RcloneView logs and Folder Compare."
keywords:
  - fix Google Drive sync errors
  - Google Drive rclone error
  - Google Drive shared with me missing
  - Google Drive Computers folder empty
  - Google Drive sync failed
  - RcloneView Google Drive
  - Google Docs sync filter
  - Google Drive troubleshooting
  - cloud sync troubleshooting
  - Google Drive GUI
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Google Drive Sync Errors — Missing Folders, Failed Jobs, and Empty Listings Resolved with RcloneView

> Most Google Drive sync problems are configuration issues — a missing setting, an expired login, or a filter — and RcloneView shows you which one.

A Google Drive job that ends Errored, or a remote that lists nothing you expected, is rarely a mystery once you can see the logs. Typical culprits are shared folders that need a specific setting, backed-up computers that need a folder ID, and Google Docs files that behave differently from ordinary files. RcloneView puts the remote settings, job history, and logs in one place so you can narrow it down quickly.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Folders That Do Not Appear

If files shared with you are missing from the root listing, the remote probably needs the `shared_with_me = true` setting, which gives you the Google Drive Shared with Me view. Backed-up computers from Drive for desktop are a separate case: the Google Drive Computers remote needs `root_folder_id` set to the computer's ID.

Open Remote Manager from the Remote tab, edit the remote, and check these values. Then reload the Explorer panel with F5.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Google Drive remote settings in RcloneView Remote Manager" class="img-large img-center" />

## Expired Login and Failed Authorization

Google Drive connects through browser OAuth. If every request fails with an authorization error, edit the remote and sign in again so a fresh token is issued. This resolves most sudden failures on a remote that worked before.

For quota and rate-limit messages, see our dedicated guides on Google Drive rate limits and storage quota. Lowering the number of file transfers in Step 2 of the sync wizard is a safe first step in either case.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing an errored Google Drive sync in RcloneView" class="img-large img-center" />

## Read the Logs for the Exact Error

Open Job History to see whether a job failed immediately or partway through. For detail, go to Settings > Embedded Rclone, enable rclone logging, set the level to DEBUG, and click Restart Embedded Rclone. Reproduce the failure and read the log: it names the file and the error. You can also run commands such as `rclone about "remote:"` in the built-in Terminal tab to confirm connectivity.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive job again after fixing settings" class="img-large img-center" />

## Handle Google Docs and Verify Results

Google Docs, Sheets, and Slides are not ordinary files, so they can look different after a transfer. Step 3 of the sync wizard includes a predefined Google Docs filter if you want to exclude them. After a rerun, use Compare to check both sides: left-only, right-only, and different files show what still needs attention. Run a Dry Run before any sync that could delete files.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying a Google Drive sync" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Check the remote for `shared_with_me` or `root_folder_id`, and re-authorize if needed.
3. Review Job History and enable DEBUG logging for errored jobs.
4. Dry Run, rerun the job, and verify with Folder Compare.

With settings, logs, and comparison in one window, a failing Drive job becomes a short checklist.

---

**Related Guides:**

- [Manage Google Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Fix Google Drive 403 Rate Limit Errors with RcloneView](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Fix Google Drive Storage Quota Exceeded with RcloneView](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
