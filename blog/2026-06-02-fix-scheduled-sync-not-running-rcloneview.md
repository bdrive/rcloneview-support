---
slug: fix-scheduled-sync-not-running-rcloneview
title: "Fix Scheduled Sync Not Running — Troubleshoot Automated Cloud Jobs in RcloneView"
authors:
  - casey
description: "Diagnose and fix RcloneView scheduled sync jobs that won't start or run at the wrong time. Covers license checks, cron syntax, startup settings, and log inspection."
keywords:
  - rcloneview scheduled sync not running
  - fix scheduled cloud backup rcloneview
  - rcloneview schedule troubleshooting
  - cloud sync cron job not starting
  - automated cloud backup not running
  - rcloneview plus schedule fix
  - fix cloud sync schedule
  - rcloneview crontab troubleshooting
tags:
  - RcloneView
  - troubleshooting
  - tips
  - automation
  - feature
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Scheduled Sync Not Running — Troubleshoot Automated Cloud Jobs in RcloneView

> If your RcloneView automated backup stops firing on schedule — or never starts — this guide walks through every likely cause in order, from license verification to cron syntax to startup configuration.

Schedule-based sync is one of RcloneView's most practical PLUS features: configure a job once and it runs on a crontab schedule without manual intervention. When it stops working, the root cause is almost always one of four things — a license issue, a misconfigured schedule, the app not running when the job is due, or a silent error in the job itself. Working through each layer systematically resolves the problem in minutes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Check 1: Confirm Your PLUS License Is Active

Schedule-based sync is exclusively a PLUS or Lifetime license feature. The FREE license does not enable crontab scheduling, and a job saved under a FREE license will have its schedule silently inactive. Check the footer bar at the bottom of the RcloneView window — it displays either "FREE License" or "PLUS License" alongside the rclone version and connection info.

If the license shows as FREE or expired, go to **Help → Activate License** and re-enter your email address and license key. Discount coupons are one-time use per email address, so a duplicate activation attempt with the same coupon will not extend the subscription — contact support if the key appears invalid after a recent renewal.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Verifying a sync job is configured and ready to run in RcloneView" class="img-large img-center" />

After confirming PLUS is active, re-open the affected job in Job Manager and check that Step 4 (scheduling) is filled in with actual values rather than blank fields. A previously saved job may need to be edited and re-saved with PLUS active to lock in the schedule.

## Check 2: Review Crontab Syntax in Job Step 4

RcloneView's scheduler uses five crontab-style fields: **Minute** (0–59), **Hour** (0–23), **Day of Week** (0–6, Sunday=0), **Day of Month** (1–31), and **Month** (1–12). Leaving a field empty means "every" — entering a value means "only this". The most common misconfiguration is entering `0` in the wrong field or using an incompatible combination, such as specifying both Day of Week and Day of Month in a way that never aligns.

RcloneView includes a **Simulate Schedule** button directly in Step 4. Click it to preview the next several execution times before saving. If the preview shows unexpected results — running every minute, skipping expected days, or showing no upcoming runs at all — adjust the fields and simulate again.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring crontab schedule fields in RcloneView Job Manager Step 4" class="img-large img-center" />

List syntax (`1,3,5`), range syntax (`1-5` for weekdays), and step syntax (`0-23/4` for every 4 hours) are all supported. A daily midnight job, for example, uses Minute=`0`, Hour=`0`, with the remaining fields empty.

## Check 3: Keep RcloneView Running at Schedule Time

RcloneView must be **open and running** for scheduled jobs to fire — it does not operate as a background system service or daemon. If the computer is asleep, the user is logged out, or the app has been closed, any schedule that falls due during that time will be skipped silently.

The fix is straightforward: enable **Launch at login** under **Settings → General** so the app starts automatically when the OS boots. Pair it with **Start minimized** so RcloneView starts in the system tray without interrupting your desktop, while still running all scheduled jobs in the background.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView running a scheduled sync transfer in the background" class="img-large img-center" />

If the target machine is regularly shut down overnight, consider either adjusting the schedule to business hours or configuring the OS to wake from sleep before the job's due time.

## Check 4: Inspect Job History and Transfer Logs

If a job appeared to run but produced no output, the **Job History** tab in the bottom Info View is the first place to look. It records every execution with Status (Completed / Errored / Canceled), Time Spent, Transfer Speed, and File Count. Filter the history to show only "Errored" entries to surface failed runs. Each record links to the associated log output, which identifies the specific failure — network timeout, authentication error, path not found, or a destination permissions issue.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled sync execution records and status" class="img-large img-center" />

For deeper diagnostics, enable **Enable rclone Logging** in **Settings → Embedded Rclone** and set the log level to **INFO** or **DEBUG**. When the job next runs (or is triggered manually), the log file captures full rclone output — including the exact error code and file that caused a failure — making root-cause analysis straightforward even for intermittent issues.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Check the footer bar — PLUS license is required for crontab scheduling.
3. Open the affected job → Edit → Step 4, then use Simulate Schedule to verify cron syntax.
4. Enable **Launch at login** and **Start minimized** in Settings → General.
5. Check Job History for errored runs, and enable rclone logging for detailed diagnostics.

Systematic diagnosis across these four layers resolves almost all scheduled sync failures quickly — no guesswork required.

---

**Related Guides:**

- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Schedule Best Practices — Cron, Retry, and Monitoring in RcloneView](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [Job History and Transfer Logs — Monitoring in RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
