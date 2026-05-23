---
slug: manage-jottacloud-cloud-sync-backup-rcloneview
title: "Manage Jottacloud Storage — Sync and Backup Files with RcloneView"
authors:
  - kai
description: "Learn how to sync, backup, and manage your Jottacloud storage with RcloneView. Transfer files between Jottacloud and other cloud services in minutes."
keywords:
  - jottacloud cloud sync
  - manage jottacloud rcloneview
  - jottacloud backup
  - jottacloud file transfer
  - rcloneview jottacloud
  - jottacloud rclone gui
  - backup files to jottacloud
  - jottacloud cloud storage management
  - jottacloud sync windows mac linux
tags:
  - RcloneView
  - jottacloud
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Jottacloud Storage — Sync and Backup Files with RcloneView

> RcloneView gives you full control over your Jottacloud storage — browse files, run automated backups, and move data to or from other clouds with a simple GUI.

Jottacloud is a Scandinavian cloud storage service with strong privacy credentials and flexible storage plans. Managing it effectively, however, often means juggling a browser-based file manager and manual uploads. RcloneView changes that by connecting directly to Jottacloud and exposing a full-featured file explorer, sync engine, and job scheduler — all in one desktop interface that works on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Jottacloud to RcloneView

Adding Jottacloud as a remote in RcloneView takes only a minute. From the **Remote** tab, click **New Remote**, select **Jottacloud** from the provider list, and follow the on-screen configuration wizard. RcloneView stores the connection securely so it is available immediately every time you launch the app.

Once connected, Jottacloud appears as a tab in the Explorer panel alongside any other remotes you have configured. You can browse folders, check file sizes, and navigate your entire storage tree using the familiar breadcrumb and folder-tree layout — no browser required. The footer shows real-time file counts and total folder sizes, which is useful when auditing how much space a particular project is consuming.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a new remote in RcloneView" class="img-large img-center" />

If you manage multiple Jottacloud accounts — a personal account alongside a team workspace, for example — you can add each one as a separate named remote and switch between them using the tab bar at the top of each Explorer panel.

## Syncing and Backing Up Files

The real productivity gain comes from RcloneView's sync and job system. To back up a local folder to Jottacloud, open the **Job Manager**, click **Add Job**, and follow the four-step wizard. Select your local drive as the source and your Jottacloud remote as the destination. The wizard lets you configure concurrent transfers, checksum verification, and filtering rules — such as excluding files over a certain size or skipping specific file extensions like `.tmp` or `.log`.

One particularly useful option is the **Dry Run** mode. Before committing a large backup job, run a simulation to preview exactly which files will be copied or deleted on the destination. This prevents surprises, especially the first time you sync a folder containing thousands of files with an existing cloud archive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a sync job from local storage to Jottacloud in RcloneView" class="img-large img-center" />

RcloneView also supports **1:N synchronization** — configure a single source folder to sync simultaneously to Jottacloud and any other connected remote. A photography studio with several terabytes of RAW files could back up to Jottacloud and a local NAS in one operation, without running separate jobs or writing scripts.

## Scheduling Automated Backups

Manual backups are a starting point, but automated schedules are where data protection becomes genuinely reliable. With a PLUS license, you can configure crontab-style schedules directly inside the Job Manager. Set a Jottacloud backup to run nightly, weekly, or on any custom interval using the minute, hour, day, and month fields.

Scheduled jobs run silently in the background, and RcloneView's **Job History** panel records each run with full details: start time, duration, files transferred, total data moved, and final status. If a run fails or encounters an error, you can drill into the log to diagnose the issue without needing external monitoring tools. The system tray icon keeps RcloneView running quietly so schedules execute even while you work in other applications.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Jottacloud backups in RcloneView" class="img-large img-center" />

For teams or power users who need consistent backup behavior across multiple workstations, RcloneView's job export and import feature lets you share a standardized configuration as a JSON file — ensuring every machine runs the same backup logic without manual reconfiguration.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open the **Remote** tab, click **New Remote**, and select **Jottacloud**.
3. Complete the configuration wizard and save the remote.
4. Open the **Job Manager**, create a sync or backup job with Jottacloud as the source or destination, and run it.

With RcloneView managing your Jottacloud connection, you gain a professional-grade file management layer on top of a privacy-focused cloud service — without writing a single command.

---

**Related Guides:**

- [Migrate Jottacloud to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [Manage Koofr Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Manage Storj Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
