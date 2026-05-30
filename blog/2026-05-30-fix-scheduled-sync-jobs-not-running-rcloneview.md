---
slug: fix-scheduled-sync-jobs-not-running-rcloneview
title: "Fix Scheduled Sync Jobs Not Running — Troubleshoot Cloud Automation with RcloneView"
authors:
  - alex
description: "Scheduled cloud sync jobs silently skipping? This guide covers the most common causes and fixes for RcloneView automation not triggering as expected."
keywords:
  - scheduled sync job not running RcloneView
  - fix cloud sync automation
  - RcloneView schedule troubleshoot
  - cron schedule not triggering
  - RcloneView PLUS scheduling
  - scheduled backup not working
  - background sync RcloneView
  - cloud sync job debugging
  - automated backup not starting
tags:
  - RcloneView
  - troubleshooting
  - tips
  - automation
  - cloud-sync
  - feature
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Scheduled Sync Jobs Not Running — Troubleshoot Cloud Automation with RcloneView

> If your RcloneView sync job is configured with a schedule but never seems to fire, the problem almost always comes down to one of a handful of specific, fixable causes.

Scheduled automation is one of the most valuable features RcloneView offers — set a job once and let it run every night, every hour, or on a custom cron pattern without lifting a finger. But when a scheduled job silently fails to start, it can be surprisingly hard to diagnose. No error message, no popup — the job just doesn't run. This guide walks through the most common root causes and how to resolve each one.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Check Your License: Scheduling Requires PLUS

The single most common reason scheduled jobs never fire is that scheduling is a **PLUS license feature**. If you're running RcloneView on a FREE license, the scheduling step (Step 4) in the job wizard appears grayed out or is simply skipped — the job saves without any schedule attached. When you run the job manually it works fine, which makes this easy to miss.

To verify, check the footer bar at the bottom of RcloneView: it shows your current license type. If it shows **FREE License**, scheduling won't activate. Upgrade to PLUS via **Help > Activate License** and re-open the job in **Job Manager → Edit Job** to set the schedule fields.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Job schedule configuration in RcloneView Step 4" class="img-large img-center" />

Once PLUS is active, the schedule step becomes fully interactive. Use the **Simulate Schedule** button before saving — it previews the next several execution times based on your cron fields so you can confirm the timing is correct. A common mistake is setting the hour field to `9` but forgetting that cron uses 24-hour format, so `9` means 9 AM, not 9 PM.

## The App Must Be Running — Check System Tray

RcloneView schedules are managed by the running application itself, not by the operating system's task scheduler. This means **RcloneView must be open (or minimized to the system tray) at the time the job is scheduled to fire**. If the app is fully closed, no scheduled jobs will run.

The fix is simple: enable **Launch at login** in **Settings → General**, and configure the app to start minimized to the system tray (**Start minimized** option). This way, RcloneView is always running in the background. The system tray icon confirms the app is active — right-clicking it shows mounted drives and lets you open the main window.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring in the RcloneView Transferring tab" class="img-large img-center" />

If you've already confirmed PLUS is active and the app is running, the next step is to actually watch a scheduled window to catch the trigger in real time. Set a test schedule to fire in 2 minutes (e.g., if it's 14:22, set minute to `24`, hour to `14`), then watch the **Transferring tab** at that time. If the job starts, your cron fields were simply misconfigured before. If it still doesn't start, move on to checking the job configuration.

## Verify the Cron Fields and Job Configuration

RcloneView uses a 5-field crontab format: **Minute, Hour, Day of Week, Day of Month, Month**. Each field must be either empty (matches any value), a specific number, a list (`1,3,5`), a range (`0-5`), or a step pattern (`0-23/2` for every 2 hours). An empty field means "every" — leaving all five fields empty would trigger the job continuously, which is rarely intended.

A common error is entering values in the wrong field. For example, typing `30` in the **Hour** field (intending 30-minute intervals) instead of the **Minute** field with a step pattern (`0-59/30`). The **Simulate Schedule** button is the fastest way to catch this — if the preview shows unexpected times, the fields need adjustment.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Manually running a job to verify configuration before relying on schedule" class="img-large img-center" />

Also confirm the job itself is valid by running it manually from Job Manager. If a manual run fails with an error, that error would also prevent scheduled runs. Fix any remote connectivity issues — expired OAuth tokens, changed credentials, or network errors — before relying on the schedule to work.

## Reading Job History to Diagnose Past Failures

After confirming the schedule is set correctly and the app was running during the trigger window, check **Job History** for past attempts. Every scheduled execution creates a history entry with its start time, duration, status, and any error details.

If you see entries with status **Errored**, expand the entry to view the error message. Network timeouts, authentication failures, and remote path errors all surface here. If there are **no entries at all** for a time window when the job should have run, it confirms the trigger itself never fired — point back to license or app-not-running as the cause.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Confirm your license is PLUS via the footer bar — scheduling is not available on FREE.
3. Enable **Launch at login** and **Start minimized** in Settings so the app always runs in the background.
4. Use **Simulate Schedule** in Step 4 of the job wizard to verify your cron fields produce the intended run times.

Scheduled cloud sync should be silent and reliable — once the configuration is correct, it simply works every time.

---

**Related Guides:**

- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Fix Cloud Sync Stuck or Hanging in RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)
- [Fix Cloud Sync Interrupted by Network — Retry with RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />
