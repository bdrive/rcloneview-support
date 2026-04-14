---
slug: fix-backblaze-b2-cap-exceeded-errors-rcloneview
title: "Fix Backblaze B2 Cap Exceeded Errors — Resolve with RcloneView"
authors:
  - tayson
description: "Learn how to diagnose and fix Backblaze B2 cap exceeded errors in RcloneView. Control transfer rates, manage daily caps, and keep your B2 backups running reliably."
keywords:
  - Backblaze B2 cap exceeded error
  - B2 daily cap limit rclone
  - fix Backblaze B2 errors RcloneView
  - B2 transfer cap exceeded
  - Backblaze B2 troubleshooting
  - rclone B2 rate limit
  - Backblaze B2 backup errors
  - B2 upload cap fix
tags:
  - RcloneView
  - troubleshooting
  - backblaze-b2
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Backblaze B2 Cap Exceeded Errors — Resolve with RcloneView

> Backblaze B2's daily download cap can stop transfers mid-sync. Here's how to diagnose cap exceeded errors in RcloneView and configure your jobs to stay within limits.

Backblaze B2 offers generous free egress to Cloudflare-peered networks, but downloads to non-peered destinations consume from a daily cap. When that cap is reached, B2 returns HTTP 403 errors with a "cap exceeded" message, causing RcloneView sync jobs to fail or stall. This guide walks you through identifying the error, adjusting your transfer configuration, and scheduling jobs to stay within your B2 account's daily limits.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifying a Cap Exceeded Error

When a B2 cap is exceeded, RcloneView surfaces the error in the **Log tab** at the bottom of the interface. You'll see entries containing `403 Forbidden` and the message `Transaction cap exceeded` or `Download cap exceeded`. The transfer monitor in the Transferring tab shows the affected job stalling at 0 B/s.

Open the Rclone Terminal (Terminal tab) and run `rclone about b2-remote:` to check your current storage and transaction usage. While the terminal won't show the exact cap limit (that's set in the Backblaze console), it confirms the remote is reachable and shows overall account state.

<img src="/support/images/en/blog/new-remote.png" alt="Checking Backblaze B2 remote configuration in RcloneView" class="img-large img-center" />

## Adjusting Transfer Settings to Avoid Cap Hits

The most effective fix is throttling transfer bandwidth to spread downloads across multiple days. In RcloneView's Global Rclone Flags (Settings tab → Embedded Rclone → Global Rclone Flags), add `--bwlimit 10M` to cap bandwidth at 10 MB/s. This reduces daily data consumption and keeps transfers within your B2 cap when running large syncs or restores.

For jobs triggered by the scheduler, stagger them across the day. Instead of running a 200 GB restore at 6 AM, split the job by folder depth — use filter rules to process `Archive/2023/` first, then `Archive/2024/` in a separate job at noon. RcloneView's custom filter rules in Step 3 of the sync wizard make this easy: use folder path exclusion to isolate each batch.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Backblaze B2 jobs to avoid daily cap in RcloneView" class="img-large img-center" />

## Recovering a Failed Sync After Cap Reset

Backblaze B2 caps reset daily at midnight Pacific Time. If a job fails due to a cap exceeded error, RcloneView's sync is idempotent — when you run the same job again after the reset, it will resume from where it left off, skipping files already transferred. The Folder Compare feature lets you verify which files completed before the failure by comparing source against destination.

To be safe, enable **Retry entire sync if fails** in Step 2 of the job wizard (set to 3 retries), and ensure the retry interval is long enough for the cap to reset. Check the Job History tab regularly to catch failures early and review the cap status before scheduling new transfers.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 job failure history in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Check the Log tab for `403 cap exceeded` errors after a failed B2 job.
3. Add `--bwlimit` to Global Rclone Flags to throttle daily data consumption.
4. Re-run the sync job after the daily cap resets — RcloneView skips already-transferred files automatically.

With careful scheduling and bandwidth limiting, Backblaze B2 remains a cost-effective backup target even when working within daily cap constraints.

---

**Related Guides:**

- [Migrate Backblaze B2 to AWS S3 with RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Fix Cloud Sync Interrupted Network Retry with RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)
- [Custom Rclone Flags and Advanced Options in RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
