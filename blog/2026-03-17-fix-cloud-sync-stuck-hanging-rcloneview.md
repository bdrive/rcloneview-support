---
slug: fix-cloud-sync-stuck-hanging-rcloneview
title: "Fix Cloud Sync Stuck at 99% or Hanging — Troubleshooting Stalled Transfers in RcloneView"
authors:
  - tayson
description: "Your cloud sync has been running for hours but seems stuck. Progress shows 99% but won't complete. Here's what causes stalled transfers and how to fix them."
keywords:
  - cloud sync stuck
  - cloud transfer hanging
  - sync stuck 99 percent
  - cloud upload frozen
  - rclone transfer stuck
  - cloud sync not completing
  - fix stalled cloud transfer
  - cloud sync timeout
  - cloud upload hanging
  - rclone sync frozen
tags:
  - RcloneView
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Cloud Sync Stuck at 99% or Hanging — Troubleshooting Stalled Transfers in RcloneView

> The progress bar says 99%. It's been saying 99% for 45 minutes. Is it working? Is it stuck? Should you cancel? Here's how to diagnose and fix stalled cloud transfers.

Stalled cloud transfers are one of the most frustrating issues in cloud sync. The job appears to be running, the progress indicator barely moves, and you're unsure whether to wait or restart. The good news: stalled transfers almost always have a specific, fixable cause.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Common Causes

### 1) Large file nearly complete

The most common "false alarm." A 50 GB file at 98% complete still has 1 GB left. At 10 MB/s, that's another 100 seconds — but the progress bar barely moves because it's measuring file count, not bytes.

**Fix**: Monitor the transfer speed indicator. If bytes are still flowing, the transfer is working — just slow on the last large file.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Check if bytes are flowing" class="img-large img-center" />

### 2) API rate limit throttling

Google Drive, OneDrive, and other providers throttle transfers when you hit API limits. The transfer slows to a crawl but doesn't fail.

**Fix**: Reduce concurrent transfers. Add `--tpslimit` via the built-in terminal.

### 3) Network timeout on large file

Some providers disconnect long-running uploads silently. The transfer appears active but no data is moving.

**Fix**: Configure timeouts in your remote settings. Use `--timeout` to detect stalls earlier.

### 4) File locked by another process

The source file is open in another application. The transfer waits for access.

**Fix**: Close applications that might be using the file, or exclude actively used files with filters.

### 5) Provider-side processing

Some providers process uploaded files (virus scanning, indexing) before confirming completion. This creates a gap between upload completion and confirmation.

**Fix**: Wait. This usually resolves in 1-5 minutes.

### 6) Memory exhaustion

Very large transfer lists (millions of files) can exhaust available memory, causing the process to slow dramatically.

**Fix**: Break the transfer into smaller batches by folder.

## Diagnostic Steps

### Check job history

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check job status" class="img-large img-center" />

### Use the terminal for verbose output

Run the same operation from RcloneView's terminal with `-vv` flag for detailed diagnostic output.

### Cancel and re-run

If the transfer is truly stuck, cancel and re-run the job. RcloneView skips already-transferred files and resumes from where it stalled.

## Prevention

- **Set reasonable timeouts** in remote configuration
- **Use modest concurrency** (4-8 transfers) to avoid rate limits
- **Break large jobs** into smaller batches
- **Schedule retries** — if a nightly job stalls, a second scheduled run catches up

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Check transfer speed** — if bytes flow, it's working.
3. **Reduce concurrency** if rate-limited.
4. **Cancel and re-run** if truly stuck.

99% complete and stuck is almost always the last big file finishing slowly.

---

**Related Guides:**

- [Fix Slow Cloud Uploads](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Resume Failed Transfers](https://rcloneview.com/support/blog/resume-failed-cloud-transfers-rcloneview)
- [Cloud API Rate Limits](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)

<CloudSupportGrid />
