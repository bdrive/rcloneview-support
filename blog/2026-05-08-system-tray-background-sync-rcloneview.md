---
slug: system-tray-background-sync-rcloneview
title: "System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView"
authors:
  - steve
description: "Learn how RcloneView's system tray integration keeps sync jobs running in the background, manages cloud mounts, and sends job completion notifications without keeping the window open."
keywords:
  - RcloneView system tray background sync
  - cloud sync background mode
  - RcloneView minimize to tray
  - background cloud backup RcloneView
  - RcloneView tray icon jobs
  - cloud sync notifications RcloneView
  - keep cloud sync running background
  - RcloneView continuous backup
tags:
  - feature
  - automation
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView

> RcloneView's system tray integration lets you minimize the app and keep sync jobs running, cloud drives mounted, and notifications flowing — without interrupting your workflow.

Most cloud sync tools require keeping a window open to confirm jobs are running. RcloneView's system tray support breaks that constraint. Once configured, you can minimize RcloneView entirely, and your scheduled sync jobs, active transfers, and mounted cloud drives continue operating in the background. The tray icon gives you quick access to everything without cluttering your workspace.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Enabling Background Mode and System Tray

By default, RcloneView can be configured to minimize to the system tray rather than quitting when you close the window. In **Settings tab → General**, look for the **Quit on close** option. Disable it to ensure RcloneView moves to the system tray when you click the X button instead of exiting completely.

You can also enable **Launch at login** so RcloneView starts automatically with your system and immediately begins monitoring for scheduled jobs. Pair this with **Start minimized** to keep RcloneView running silently in the background from the moment your computer boots.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView running in background with system tray active" class="img-large img-center" />

## Managing Cloud Mounts from the Tray

One of the most useful tray features is quick mount management. Right-click the RcloneView tray icon to see a list of all configured cloud mounts with their current status (mounted or unmounted). Click any entry to toggle its mount state — mounting a cloud drive as a local volume or unmounting it — without opening the main window.

This is particularly valuable for professionals who keep several cloud drives mounted throughout the day. A developer might have an S3 bucket mounted as a network drive, a Google Drive mount for document access, and a NAS mount for local file transfer. The tray gives instant control over all of them.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Quick access to cloud mounts via system tray in RcloneView" class="img-large img-center" />

## Job Completion Notifications

When a sync job finishes — whether scheduled or manually triggered — RcloneView can display a desktop notification showing the job name, duration, and final status. Enable this in **Settings tab → Interfaces & Notifications → Show sync completion notification**.

This means you can kick off a large overnight backup job, minimize RcloneView to the tray, and receive a desktop notification when the job completes. If the job errored, you'll know immediately.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing background sync completions in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. In **Settings → General**, disable **Quit on close** and enable **Launch at login**.
3. Configure sync jobs or scheduled tasks as normal.
4. Minimize RcloneView — jobs and mounts continue running in the background.

Once set up, RcloneView operates like a silent background service for your cloud storage, without requiring you to keep a window open.

---

**Related Guides:**

- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Notification Alerts When Sync Completes — RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Email SMTP Job Notifications in RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
