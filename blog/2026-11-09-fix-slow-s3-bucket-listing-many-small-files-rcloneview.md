---
slug: fix-slow-s3-bucket-listing-many-small-files-rcloneview
title: "Fix Slow S3 Bucket Listing and Sync with Many Small Files — Tuning with RcloneView"
authors:
  - morgan
description: "Fix slow S3 sync and listing on buckets with many small files. Tune checkers, transfers, and filters in RcloneView and verify with Dry Run."
keywords:
  - slow S3 sync many small files
  - S3 bucket listing slow
  - rclone checkers tuning
  - S3 sync millions of files
  - RcloneView S3
  - speed up S3 sync
  - small files transfer slow
  - S3 compatible sync performance
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3
  - performance
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Slow S3 Bucket Listing and Sync with Many Small Files — Tuning with RcloneView

> A bucket with hundreds of thousands of tiny files syncs slowly because of per-object overhead, not bandwidth, and a few job settings change that.

A photographer's proxy folder or an application's log archive can hold a huge number of small objects. Each one needs a listing entry, a comparison, and a request, so the sync crawls even though the network is idle. RcloneView exposes the relevant rclone settings in its job wizard, so you can tune them without writing flags. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Small Files Are Slow

With large files, throughput dominates. With small files, request count dominates: every object is listed, compared by size, time or checksum, and uploaded individually. Slowness here is usually per-request latency and provider-side rate limiting, so adding bandwidth does nothing.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring tab showing file count and speed" class="img-large img-center" />

Open the Transferring tab during a run. If speed is low but the file count climbs steadily, you are request-bound rather than bandwidth-bound.

## Tune the Job Settings

In Step 2 of the sync wizard, raise the number of file transfers so more objects move in parallel. The equality checkers default to 8; on a slow or throttled backend, the guidance is to use 4 or fewer, because too many simultaneous checks can trigger throttling and make things worse. Change one value at a time and rerun.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Job advanced settings for transfers and checkers" class="img-large img-center" />

Enabling checksum comparison adds hash work on top of size checks, so use it only when integrity matters more than speed. Keep the retry setting at its default of 3 so transient errors do not abort a long run.

## Shrink the Work

Step 3 filters cut the listing load. Use max file age to skip old objects, exclude folders you do not need, and use predefined filters to leave out file types. Splitting one giant job into per-prefix jobs also makes failures easier to isolate and rerun.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a tuned sync job in RcloneView" class="img-large img-center" />

Always run a Dry Run after changing filters, so you see exactly which files will be copied or deleted before the real run.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open your slow job and watch the Transferring tab to confirm it is request-bound.
3. Adjust transfers and checkers one at a time, and add filters to reduce scope.
4. Compare timings in Job History and keep the best-performing settings.

Small, methodical changes turn an overnight sync into a routine one.

---

**Related Guides:**

- [Fix S3 Multipart Upload Failures](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)
- [Fix Slow Cloud Transfers Speed](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Fix Cloud API Rate Limiting Errors](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
