---
slug: fix-bandwidth-throttle-slow-uploads-rcloneview
title: "Fix Slow Cloud Uploads — Optimize Bandwidth and Transfer Speed with RcloneView"
authors:
  - tayson
description: "Diagnose and fix slow cloud upload speeds in RcloneView. Tune concurrent transfers, bandwidth limits, and rclone flags to maximize upload performance to any cloud provider."
keywords:
  - fix slow cloud uploads RcloneView
  - cloud upload speed optimization
  - RcloneView bandwidth tuning
  - slow cloud transfer troubleshooting
  - rclone upload speed fix
  - increase cloud sync speed
  - RcloneView transfer performance
  - fix slow backup uploads
  - cloud upload optimization guide
  - rclone concurrent transfers tuning
tags:
  - RcloneView
  - troubleshooting
  - tips
  - performance
  - optimization
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Slow Cloud Uploads — Optimize Bandwidth and Transfer Speed with RcloneView

> When cloud uploads in RcloneView feel slower than expected, a few targeted settings changes can dramatically increase throughput — here's how to diagnose and fix common performance bottlenecks.

Slow cloud upload speeds are one of the most common frustrations for RcloneView users. The root cause is rarely obvious: it might be too few concurrent transfers, an accidental bandwidth cap, a throttled API endpoint, or a mismatch between your network's MTU and the cloud provider's requirements. This guide walks through each potential cause systematically so you can identify and resolve the issue quickly.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Check and Increase Concurrent Transfers

The most impactful setting for upload throughput is the **number of concurrent file transfers**. By default, rclone transfers files sequentially or with limited concurrency. In RcloneView's sync job configuration (Step 2: Advanced Settings), increase the **Number of file transfers** setting — try 8 to 16 for high-bandwidth connections. Each concurrent transfer adds independent throughput, effectively multiplying your effective upload speed.

For providers like Amazon S3 and Cloudflare R2 that support multipart uploads, also increase the **Number of multi-thread transfers** (default: 4) to parallelize each large file's upload into chunks. This is especially beneficial when uploading large video files or database dumps.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Adjusting concurrent transfer settings in RcloneView sync job" class="img-large img-center" />

## Remove Accidental Bandwidth Caps

RcloneView passes Global Rclone Flags from Settings > Embedded Rclone to every operation. Check whether `--bwlimit` or `--bwlimit-file` flags are set there — these cap upload speed to the specified value. If you previously set a bandwidth limit to avoid saturating your connection and forgot to remove it, that flag will silently throttle all your uploads.

Remove or modify the `--bwlimit` flag in Settings > Embedded Rclone > Global Rclone Flags, then re-run your sync job to see if speed improves.

<img src="/support/images/en/blog/new-remote.png" alt="Checking global rclone flags that might limit upload bandwidth" class="img-large img-center" />

## Check for Provider-Side API Rate Limits

Some cloud providers enforce rate limits that can make uploads appear slow. Google Drive limits API calls per user per second. Dropbox throttles applications that make too many requests. Amazon S3 has per-prefix request limits. When you see uploads proceeding slowly with many small files but faster with large files, API rate limiting is often the cause.

In RcloneView's Log tab, look for messages containing `429 Too Many Requests` or `Rate limit exceeded`. If present, reduce the number of concurrent transfers to stay within the provider's API limits. For Google Drive specifically, reduce concurrent transfers to 4 and limit the number of checkers to 8 or fewer.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring transfer speed and detecting rate limits in RcloneView" class="img-large img-center" />

## Tune Multi-Part Upload Chunk Size

For large files uploaded to S3-compatible providers, the chunk size for multipart uploads affects throughput. RcloneView allows you to pass advanced rclone flags in the sync job's custom settings. Adding `--s3-chunk-size 64M` (increasing from the default 5MB) reduces API call overhead for large file uploads and can significantly improve throughput on high-bandwidth connections.

Similarly, for Backblaze B2, use `--b2-chunk-size 100M` for large file uploads. These flags can be added via the custom rclone flags field in RcloneView's sync job configuration.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Advanced sync job settings for tuning upload performance in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. In your sync job's advanced settings, increase concurrent transfers to 8–16.
3. Check Settings > Embedded Rclone for any `--bwlimit` flags that may cap speed.
4. Review the Log tab for rate limit errors and reduce concurrency if needed.

Optimizing upload speed in RcloneView is a process of tuning concurrency, removing accidental caps, and aligning your settings with each provider's API characteristics.

---

**Related Guides:**

- [Accelerate Large Cloud Transfers with RcloneView](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [Fix Cloud Transfer Stalled Progress — Resolve Stuck Uploads with RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [Custom Rclone Flags and Advanced Options in RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
