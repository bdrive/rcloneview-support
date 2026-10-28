---
slug: migrate-pcloud-to-google-drive-rcloneview
title: "Migrate pCloud to Google Drive — Transfer Files with RcloneView"
authors:
  - morgan
description: "Move files from pCloud to Google Drive with RcloneView: connect both remotes, run a Dry Run, copy cloud-to-cloud, and verify with Folder Compare."
keywords:
  - migrate pcloud to google drive
  - pcloud to google drive transfer
  - move pcloud files to google drive
  - pcloud google drive migration
  - cloud to cloud transfer
  - rcloneview pcloud
  - rcloneview google drive
  - pcloud alternative migration
  - transfer pcloud data
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate pCloud to Google Drive — Transfer Files with RcloneView

> Move an entire pCloud account into Google Drive without downloading everything to your own disk first.

Teams that standardize on Google Workspace often inherit years of files sitting in pCloud. Downloading and re-uploading them by hand is slow and error-prone. RcloneView connects both services from one window, copies cloud-to-cloud, and lets you verify the result folder by folder before you retire the old account.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect pCloud and Google Drive

Both services use OAuth browser login in RcloneView, so there are no API keys to paste. Open the Remote tab, click New Remote, choose pCloud, and approve access in the browser window that opens. Repeat for Google Drive. Once both appear in Remote Manager, open them in two Explorer panels side by side: pCloud on the left, Google Drive on the right.

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Google Drive remotes in RcloneView" class="img-large img-center" />

Browse the pCloud tree first and use Get Size on your top-level folders. A photography studio with 1.5 TB of project folders, for example, can plan the migration folder by folder rather than in one giant job.

## Copy Cloud-to-Cloud

For a small set of folders, drag them from the pCloud panel to the Google Drive panel. Dragging between different remotes performs a Copy, so your pCloud originals stay untouched. For a full account, create a job instead: open the Sync wizard, pick pCloud as the source and Google Drive as the destination, and choose a Copy-style job so nothing is deleted on either side.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from pCloud to Google Drive in RcloneView" class="img-large img-center" />

In Advanced Settings, a moderate Number of file transfers is a sensible starting point; Google Drive applies API limits, so very high concurrency can trigger retries. Leave "Retry entire sync if fails" at its default of 3 so brief network drops don't end the job.

## Dry Run, Filters, and Monitoring

Before the real run, use Dry Run to preview which files will be copied. The Filtering step lets you exclude junk such as `.git/` folders or limit by max file size and file age, which is handy when only recent projects need to move. Once the job starts, the Transferring tab shows progress, speed, and file counts, and Job History keeps a record of every run.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing the pCloud to Google Drive job history in RcloneView" class="img-large img-center" />

## Verify with Folder Compare

When the job completes, open Compare with pCloud on the left and Google Drive on the right. Filter to left-only files to see anything that didn't arrive, and copy those across directly from the comparison view. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so the same tool covers the move and the check.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between pCloud and Google Drive in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add pCloud and Google Drive as remotes through New Remote.
3. Run a Dry Run on a Copy job from pCloud to Google Drive, then run it for real.
4. Use Compare to confirm no left-only files remain before you close the old account.

A staged copy plus a visual check turns a risky account move into a routine task.

---

**Related Guides:**

- [Sync pCloud to Google Drive — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-pcloud-to-google-drive-rcloneview)
- [Migrate Google Drive to pCloud — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
