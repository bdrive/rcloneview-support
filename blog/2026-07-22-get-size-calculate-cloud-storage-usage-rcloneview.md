---
slug: get-size-calculate-cloud-storage-usage-rcloneview
title: "Get Size — Instantly Calculate Cloud Storage Usage in RcloneView"
authors:
  - jay
description: "Use RcloneView's Get Size feature to calculate the total size of any folder or selection across 90+ cloud providers before you sync or migrate."
keywords:
  - get size feature
  - calculate cloud storage size
  - folder size cloud storage
  - RcloneView get size
  - cloud storage usage check
  - check folder size before transfer
  - multi-cloud storage audit
  - rclone about command GUI
  - cloud file manager tools
  - storage usage analysis
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Get Size — Instantly Calculate Cloud Storage Usage in RcloneView

> Right-click any folder or selection in RcloneView and get an instant total size, without waiting for a full transfer to find out how much data you're moving.

Cloud providers rarely make it obvious how large a folder actually is until you try to move it. A "Media" folder with thousands of nested subfolders can hide gigabytes of data that only becomes visible once a sync job stalls halfway through, or a quota warning shows up mid-transfer. RcloneView's Get Size command in the File Explorer's right-click menu solves this by calculating the total size of any selected files or folders on demand, before you commit to a sync, mount, or migration.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Checking Folder Size Before You Move Anything

Select one or more files or folders in any Explorer panel, right-click, and choose Get Size. RcloneView walks the selection and returns the total size, which is especially useful for folders with deep subdirectory trees where the File List's footer summary alone won't reflect nested content. This works identically whether the selection lives on Google Drive, Amazon S3, a self-hosted Nextcloud instance, or a local disk — RcloneView mounts AND syncs 90+ providers from one window, so the same right-click menu applies no matter which remote you're browsing.

Get Size is most useful as a pre-flight check. Before starting a large Sync job or a one-time migration between two clouds, checking the source folder's actual size helps you estimate transfer time, confirm the destination has enough available quota, and decide whether filtering rules are needed to trim the job down.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder in RcloneView to check its total size" class="img-large img-center" />

## Auditing Storage Usage Across Multiple Remotes

Because every connected remote — cloud or local — sits in the same Explorer, Get Size doubles as a quick way to audit where storage is being consumed across a multi-cloud setup. Running it on the top-level folders of each remote in turn gives a rough map of which accounts are approaching their limits, which is faster than logging into each provider's separate web console to check usage.

For a more precise usage figure at the remote level rather than a specific folder, the built-in Rclone Terminal supports `rclone about "remote:"`, which reports total storage used and available directly from the provider's API. Get Size and the terminal's `about` command complement each other: one scopes to a specific selection, the other reports account-wide totals.

<img src="/support/images/en/blog/new-remote.png" alt="Multiple cloud remotes connected in RcloneView for storage auditing" class="img-large img-center" />

## Using Size Checks to Plan Sync and Filter Rules

Once you know a folder's real size, RcloneView's Sync wizard gives you the tools to act on that information. Step 3 of job configuration includes filtering by max file size, max file age, and predefined filters for media, video, image, and document types, so an oversized folder can be trimmed to just the files that actually need to transfer. Running Dry Run afterward previews exactly which files will be copied or deleted under the current filter settings, confirming the job matches expectations before any data actually moves.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring sync filters after checking folder size in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connect the remotes you want to audit through Remote tab > New Remote.
3. Select a folder in the Explorer, right-click, and choose Get Size to see its total footprint.
4. Use that figure to plan filters or scheduling in the Sync wizard before running a full transfer.

Knowing exactly how much data you're working with turns guesswork into a plan, and Get Size makes that check a two-click habit instead of a support ticket waiting to happen.

---

**Related Guides:**

- [Job History & Transfer Logs — Monitor Every Sync in RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Dry Run Preview — Simulate Cloud Sync Before You Commit in RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Find and Remove Duplicate Files in Cloud Storage with RcloneView](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)

<CloudSupportGrid />
