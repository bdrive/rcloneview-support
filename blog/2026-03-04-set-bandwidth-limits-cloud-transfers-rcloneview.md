---
slug: set-bandwidth-limits-cloud-transfers-rcloneview
title: "How to Set Bandwidth Limits for Cloud Transfers in RcloneView"
authors:
  - tayson
description: "Control how much bandwidth cloud sync and backup jobs use — prevent network slowdowns during work hours and maximize speed overnight with RcloneView's throttling settings."
keywords:
  - rclone bandwidth limit
  - cloud transfer speed limit
  - throttle cloud sync
  - rcloneview bandwidth control
  - limit upload speed rclone
  - cloud backup bandwidth
  - rclone bwlimit
  - network throttle cloud sync
  - control cloud transfer speed
  - rcloneview transfer settings
tags:
  - RcloneView
  - cloud-storage
  - performance
  - tips
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How to Set Bandwidth Limits for Cloud Transfers in RcloneView

> Running a massive cloud sync during work hours? Your team will notice. Here's how to throttle bandwidth so backups run without killing everyone's internet.

Cloud sync and backup jobs can saturate your network connection — slowing down video calls, web browsing, and other critical work. This is especially problematic in office environments, home offices with shared connections, or when syncing terabytes of data. RcloneView lets you set precise bandwidth limits so your cloud transfers run in the background without disrupting your network.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Bandwidth Limits Matter

### Shared networks

In an office with a 100 Mbps connection, a single unthrottled cloud sync job can consume 80+ Mbps — leaving almost nothing for the rest of the team.

### Home office

Video calls need ~5–10 Mbps. If your backup job takes all available bandwidth, your Zoom call drops to potato quality.

### ISP fair use policies

Some ISPs throttle or charge extra for sustained high-bandwidth usage. Limiting cloud transfers prevents unexpected bills or slowdowns.

### Cloud provider rate limits

Some providers (especially Google Drive) throttle or return errors when transfers are too fast. Bandwidth limiting keeps you within safe limits.

## How to Set Bandwidth Limits

### Method 1: Per-job bandwidth limit

When creating or editing a job in RcloneView, add the bandwidth limit flag in the rclone options:

- **`--bwlimit 10M`** — Limits to 10 MB/s (megabytes per second)
- **`--bwlimit 50M`** — Limits to 50 MB/s
- **`--bwlimit 1M`** — Limits to 1 MB/s (good for background trickle sync)

### Method 2: Time-based bandwidth scheduling

rclone supports time-based bandwidth limits — use different speeds at different times of day:

```
--bwlimit "08:00,5M 18:00,50M 23:00,off"
```

This means:
- **8 AM – 6 PM**: Limited to 5 MB/s (work hours, minimal impact)
- **6 PM – 11 PM**: Limited to 50 MB/s (evening, more available)
- **11 PM – 8 AM**: Unlimited (overnight, full speed)

This is the sweet spot for most users — transfers run 24/7 but only go full speed when the network is idle.

### Method 3: Upload vs download limits

Set different limits for upload and download:

```
--bwlimit "10M:5M"
```

This limits uploads to 10 MB/s and downloads to 5 MB/s. Useful when your ISP has asymmetric speeds (common with cable and DSL connections).

## Practical Examples

### Home office with 100 Mbps connection

```
--bwlimit "09:00,2M 17:00,off"
```
- During work hours: 2 MB/s (barely noticeable alongside video calls)
- After hours: Unlimited

### Small office with 50 Mbps shared connection

```
--bwlimit "08:00,3M 18:00,25M 22:00,off"
```
- Business hours: 3 MB/s (leaves 47 Mbps for staff)
- Evening: 25 MB/s (half capacity)
- Night: Full speed

### Large migration over a weekend

```
--bwlimit off
```
- No limits — maximize transfer speed during maintenance windows.

## Combining with Job Scheduling

The most powerful approach: schedule **heavy jobs at night with no bandwidth limit** and **light jobs during the day with strict limits**.

1. Create two versions of your sync job:
   - **Daytime job**: `--bwlimit 5M` — runs at noon for quick incremental sync
   - **Nighttime job**: no bandwidth limit — runs at 2 AM for heavy transfers
2. Schedule both with [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers with different bandwidth limits" class="img-large img-center" />

## Monitoring Actual Speed

Use real-time transfer monitoring to verify your bandwidth limits are working:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed with bandwidth limits" class="img-large img-center" />

The transfer speed display should show values at or below your configured limit. If you're seeing lower speeds than your limit, the bottleneck is elsewhere (network, provider API, disk speed).

## Quick Reference

| Scenario | Setting | Effect |
|----------|---------|--------|
| Light background sync | `--bwlimit 2M` | Barely noticeable |
| Moderate transfers | `--bwlimit 10M` | Visible but manageable |
| Work hours only | `--bwlimit "09:00,5M 17:00,off"` | Throttled during work |
| Upload-heavy | `--bwlimit "20M:5M"` | 20M up, 5M down |
| No limit | `--bwlimit off` or omit | Maximum speed |

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add your remotes** and create a sync/copy job.
3. **Add `--bwlimit`** to the job's rclone flags.
4. **Test and monitor** to find the right balance.
5. **Combine with scheduling** for the best of both worlds.

Fast transfers are good. But transfers that don't crash your team's video calls are better.

---

**Related Guides:**

- [Accelerate Large Cloud Transfers](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Real-time Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Fix Google Drive Rate Limit Errors](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)

<CloudSupportGrid />
