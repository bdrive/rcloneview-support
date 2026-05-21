---
slug: manage-webdav-cloud-sync-backup-rcloneview
title: "Manage WebDAV Server Storage — Sync and Backup Files with RcloneView"
authors:
  - casey
description: "Connect, sync, and back up any WebDAV server with RcloneView. Manage Nextcloud, ownCloud, and enterprise WebDAV endpoints alongside 90+ cloud providers."
keywords:
  - WebDAV sync RcloneView
  - manage WebDAV cloud storage
  - WebDAV file transfer GUI
  - Nextcloud WebDAV backup
  - sync WebDAV to cloud storage
  - ownCloud backup tool
  - WebDAV rclone GUI
  - WebDAV file management desktop
  - cross-platform WebDAV client
  - WebDAV cloud backup automation
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage WebDAV Server Storage — Sync and Backup Files with RcloneView

> Connect any WebDAV endpoint to RcloneView and control your files through a clean GUI — sync, backup, and transfer without touching the command line.

WebDAV (Web Distributed Authoring and Versioning) underpins some of the most widely deployed self-hosted file platforms. Nextcloud, ownCloud, SharePoint, and many enterprise content management systems all expose WebDAV endpoints. Managing these servers usually means wrestling with command-line tools or unreliable desktop sync clients. RcloneView treats WebDAV remotes exactly like any other cloud provider — with drag-and-drop transfers, scheduled sync jobs, and live transfer monitoring — from the same interface you use to manage Amazon S3 or Google Drive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Your WebDAV Server in Minutes

Adding a WebDAV remote takes under two minutes in RcloneView. Click **Remote tab > New Remote**, select WebDAV as the storage type, and enter your server URL, username, and password. For servers using self-signed SSL certificates, add `--no-check-certificate` to the **Global Rclone Flags** field in **Settings > Embedded Rclone** to bypass certificate verification. Once saved, your WebDAV server appears in the explorer panel alongside every other cloud account you have configured.

This unified view is particularly valuable for teams running Nextcloud for internal collaboration while using public cloud storage for offsite backups. A video production studio with a self-hosted Nextcloud server can browse project files on the left panel and a Backblaze B2 bucket on the right — then drag completed deliverables across directly, or define a scheduled sync job to handle nightly archiving automatically.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a WebDAV remote in RcloneView Remote Manager" class="img-large img-center" />

## Sync WebDAV to Any Cloud Provider

With your WebDAV server connected, create sync jobs in the Job Manager that transfer files to any of the 90+ cloud providers RcloneView supports. The 4-step sync wizard walks you through selecting source and destination remotes, configuring concurrent transfer counts and checksum verification, applying file size or age filters, and optionally scheduling the job.

For backup scenarios, select **"Modifying destination only"** in the sync direction field. This keeps your cloud backup mirroring the WebDAV server without introducing reverse changes. When data integrity matters — for legal document archives or medical imaging libraries — enable the checksum option so RcloneView validates files by both hash and size during every run, not just by modification date.

The Dry Run feature is worth using before any first sync: it lists exactly which files will be copied or deleted at the destination, with no actual changes made. It takes seconds and can prevent accidental overwrites.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from WebDAV server to cloud storage in RcloneView" class="img-large img-center" />

## Automate Backups on a Schedule (PLUS License)

Manual sync runs cover immediate transfers, but scheduled automation is what makes WebDAV backup dependable. With a PLUS license, RcloneView's crontab-style scheduler lets you configure jobs to run nightly, hourly, or on any custom interval. The schedule simulator previews the next ten execution times before you save, so there are no surprises about when backups fire.

Job History tracks every run's outcome: start time, duration, transfer speed, file count, and status (Completed / Errored / Canceled). If a scheduled job encounters a transient network failure, RcloneView retries up to your configured retry count before marking the job as errored. For organizations managing large Nextcloud or ownCloud deployments, this produces a reliable audit trail without manual monitoring.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled sync job from WebDAV to cloud storage in RcloneView" class="img-large img-center" />

## Browse and Compare Files Side by Side

RcloneView's multi-panel explorer lets you browse your WebDAV server and a cloud destination simultaneously. The Folder Compare tool identifies exactly which files differ between the two sides — showing files that exist only on the left, only on the right, or with mismatched sizes. For incremental backup verification, this is faster and more reliable than manually reviewing transfer logs.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing WebDAV server files with cloud backup using Folder Compare in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open **Remote tab > New Remote**, choose WebDAV, and enter your server URL and credentials.
3. Create a sync job in the Job Manager with your WebDAV remote as the source and your preferred cloud provider as the destination.
4. Run a **Dry Run** to preview what will be transferred, then activate the job or set a schedule.

RcloneView makes WebDAV servers first-class participants in your multi-cloud strategy — whether you're protecting a self-hosted Nextcloud instance or bridging an enterprise content platform to long-term cloud archive storage.

---

**Related Guides:**

- [Manage SFTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Connect a WebDAV Server — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Manage Nextcloud — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
