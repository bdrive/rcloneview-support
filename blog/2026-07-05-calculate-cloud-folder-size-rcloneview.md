---
slug: calculate-cloud-folder-size-rcloneview
title: "Get Size — Calculate Cloud Folder Sizes Instantly in RcloneView"
authors:
  - robin
description: "Use RcloneView's Get Size feature to calculate cloud folder and file sizes instantly before you sync, migrate, or clean up storage."
keywords:
  - get size cloud storage
  - calculate cloud folder size
  - check cloud storage usage
  - RcloneView get size feature
  - cloud storage size before sync
  - find large cloud folders
  - storage size calculation tool
  - cloud file size check
tags:
  - RcloneView
  - feature
  - cloud-storage
  - file-management
  - cost-optimization
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Get Size — Calculate Cloud Folder Sizes Instantly in RcloneView

> Select any folder across 90+ cloud providers and get an instant total size and file count, before you commit to a sync, migration, or cleanup.

Cloud dashboards rarely break down storage usage at the folder level, so it's easy to kick off a sync job or start a migration without knowing whether you're moving 2GB or 200GB. RcloneView's Get Size command answers that question directly from the file explorer, letting you check exactly how much data a folder holds before you commit bandwidth, time, or cloud egress costs to moving it.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Running Get Size from the File Explorer

Right-click any folder or selection of files in an Explorer panel and choose Get Size from the context menu. RcloneView walks the selected path and returns a total size and item count, whether the folder lives on Google Drive, an S3 bucket, a WebDAV server, or a local disk. This works the same way regardless of provider, since RcloneView routes the request through rclone's backend rather than relying on each provider's own reporting.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder to calculate its total size in RcloneView" class="img-large img-center" />

For a photography studio managing 2TB of RAW files spread across client project folders, this turns "which clients are eating the most storage" from a guessing game into a quick check. Run Get Size on each top-level project folder and immediately see which ones are candidates for archiving to cheaper storage.

## Using Size Checks Before Sync and Migration Jobs

Knowing folder size in advance changes how you configure a job. If Get Size shows a source folder is unexpectedly large, that's the moment to add a Max File Size filter in the sync wizard's filtering step, or to split the transfer into smaller batches instead of running one long job overnight. It also helps set realistic expectations for Multi-thread Transfer settings — a 400GB folder benefits from a higher concurrent transfer count differently than a 4GB one.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a cloud-to-cloud transfer after checking folder size" class="img-large img-center" />

This same check is useful before a cloud-to-cloud migration between providers with different pricing models — sizing the source first avoids surprises on the receiving end, particularly for S3-compatible destinations that bill differently by storage class.

## Combining Get Size with Folder Compare for Cleanup

Get Size pairs naturally with the Folder Compare tool when you're auditing storage across accounts. Compare two folders to find where content diverges, then run Get Size on the divergent branches to see how much space is actually at stake before deciding whether to delete, archive, or reconcile. RcloneView also syncs and compares folders — on the FREE license — so this workflow doesn't require any paid tier to use.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a size-informed cloud sync" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connect the cloud remote you want to audit through Remote Manager.
3. Right-click any folder in the Explorer panel and select Get Size.
4. Use the reported size to fine-tune filters, transfer settings, or cleanup priorities before running a job.

A folder size check takes seconds but can save hours of wasted transfer time on jobs sized wrong from the start.

---

**Related Guides:**

- [Find Unused Files — Reduce Cloud Costs with RcloneView](https://rcloneview.com/support/blog/find-unused-files-reduce-cloud-costs-rcloneview)
- [Hidden Cloud Storage Costs — How to Save Money with RcloneView](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Folder Comparison Guide — Detect Differences with RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)

<CloudSupportGrid />
