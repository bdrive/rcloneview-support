---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "Manage Selectel Storage — Sync and Backup Files with RcloneView"
authors:
  - alex
description: "Connect Selectel Object Storage to RcloneView for S3-compatible file browsing, sync, mounting, and backup on Windows, macOS, and Linux."
keywords:
  - Selectel storage
  - Selectel Object Storage
  - S3-compatible storage GUI
  - RcloneView Selectel
  - cloud backup software
  - sync Selectel to cloud
  - manage cloud storage GUI
  - object storage sync tool
  - multi-cloud file manager
  - S3 credentials setup
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Selectel Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Selectel Object Storage buckets from a graphical interface instead of hand-editing S3 credentials in a config file.

Selectel Object Storage is accessed through rclone's S3-compatible protocol, which means getting connected means entering an Access Key, Secret Key, and endpoint correctly on the first try. RcloneView turns that setup into a guided form and pairs it with a full file explorer, sync engine, and job scheduler, so teams already storing data on Selectel can manage it the same way they manage every other remote in one window.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Selectel as an S3-Compatible Remote

Adding Selectel in RcloneView follows the same credential-entry flow used for other S3-compatible services: open Remote tab > New Remote, choose the S3-compatible option, and enter the Access Key ID, Secret Access Key, and the Selectel endpoint. Connect Manager also lets RcloneView point at an external rclone instance if your Selectel integration already runs through a shared rclone daemon on a server rather than the embedded rclone.

Once saved, the remote shows up as its own tab in the Explorer panel next to any other cloud or local storage already configured. An Alias remote can shorten deeply nested bucket paths into a short name that's easier to navigate during daily browsing.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## Browsing, Syncing, and Backing Up Selectel Data

With the remote connected, the File Explorer's dual-pane layout lets you compare what's on Selectel against a local folder or another cloud remote side by side. Dragging files between two different remotes triggers a copy, and the right-click menu covers rename, delete, get size, and download/upload for routine file management.

For recurring backups, the Sync wizard walks through source and destination, transfer concurrency, and filtering rules in four steps, with options like max file age and predefined filters for media or document types. Connect S3-compatible services like Selectel with full read/write access on the FREE license — no upgrade is needed just to write data back into the bucket. 1:N sync can mirror the same Selectel bucket to multiple destinations in a single job, useful when a backup needs to land on both a local drive and a second cloud remote.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel storage and another remote" class="img-large img-center" />

## Automating Recurring Selectel Backups

Job Manager keeps every sync, copy, or move job in one list, and each run is logged in Job History with status, transfer size, and file count. Dry Run previews exactly which files would be copied or deleted before a real transfer runs — worth checking before the first large sync into a new Selectel bucket.

PLUS license users can attach a crontab-style schedule to a job so Selectel backups run automatically on a recurring interval, with a simulate option to preview upcoming execution times before saving the schedule.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Selectel storage" class="img-large img-center" />

## Mounting Selectel as a Local Drive

Selectel storage can also be mounted as a virtual drive, so other desktop applications can read and write bucket contents as if they were local files. Mount configuration includes VFS cache mode (default: writes), cache size limits, and read-only mode, and mounts can be started from the remote's panel toolbar or from the dedicated Mount Manager.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Selectel bucket as a local drive in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open Remote tab > New Remote and select the S3-compatible option to enter your Selectel credentials and endpoint.
3. Use Folder Compare or drag and drop to move existing data onto Selectel, then set up a Sync job for ongoing backups.
4. Add the job to Job Manager and, on PLUS, attach a schedule so backups run without manual intervention.

Once the remote is configured, Selectel storage behaves like any other connection in RcloneView — browsable, syncable, mountable, and ready to be backed up on a schedule.

---

**Related Guides:**

- [Manage IONOS Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Manage Vultr Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-vultr-object-storage-cloud-sync-backup-rcloneview)
- [Manage Linode Object Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
