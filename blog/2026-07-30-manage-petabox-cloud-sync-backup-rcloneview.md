---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Manage Petabox Storage — Sync and Backup Files with RcloneView"
authors:
  - steve
description: "Connect Petabox S3-compatible object storage to RcloneView for cross-platform file browsing, sync, and automated backup."
keywords:
  - Petabox storage
  - Petabox object storage
  - S3-compatible storage GUI
  - RcloneView Petabox
  - cloud backup software
  - sync Petabox to cloud
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

# Manage Petabox Storage — Sync and Backup Files with RcloneView

> Browse, sync, and back up Petabox object storage buckets from a graphical interface instead of hand-editing S3 credentials in a config file.

Petabox is reached through rclone's S3-compatible protocol, so connecting it means supplying an Access Key, Secret Key, and endpoint URL — the kind of setup that's easy to get wrong from the command line. RcloneView turns that process into a guided form and pairs it with a full dual-pane file explorer, sync engine, and job scheduler, so teams already storing data on Petabox can manage it alongside every other remote in one window.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Petabox as an S3-Compatible Remote

Adding Petabox in RcloneView uses the same credential-entry flow as any other S3-compatible service: open Remote tab > New Remote, choose the S3-compatible type, and enter the Access Key ID, Secret Access Key, and Petabox endpoint. If your Petabox integration already runs through a shared rclone daemon on a server, Connect Manager can point RcloneView at that external rclone instance instead of using the embedded one.

Once saved, the remote shows up as its own tab in the Explorer panel next to any other cloud or local storage already configured. An Alias remote can shorten a deeply nested bucket path into a short name that's easier to navigate on a daily basis.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

## Browsing, Syncing, and Backing Up Petabox Data

With the remote connected, the File Explorer's dual-pane layout makes it simple to compare what's already on Petabox against a local folder or another cloud remote. Drag and drop between panels triggers a copy when the source and destination are different remotes, and the right-click menu covers rename, delete, get size, and download/upload for routine file operations.

For recurring backups, the four-step Sync wizard handles source and destination, transfer concurrency, and filtering rules, including options like max file age and predefined filters for media or document types. Connect S3-compatible services like Petabox with full read/write access on the FREE license — there's no license upgrade required just to write data back into the bucket. 1:N sync can mirror the same Petabox bucket to multiple destinations in a single job, useful when a backup needs to land on both a local drive and a second cloud provider.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Petabox storage and another remote" class="img-large img-center" />

## Automating Recurring Petabox Backups

Job Manager keeps every sync, copy, or move job in one list, with each run logged in Job History alongside status, transfer size, and file count. Dry Run previews exactly which files would be copied or deleted before committing to a real transfer — worth checking before a large first sync into a new Petabox bucket.

PLUS license users can attach a crontab-style schedule to a job so Petabox backups run automatically on a recurring interval, with a simulate option to preview upcoming execution times before saving.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Petabox storage" class="img-large img-center" />

## Mounting Petabox as a Local Drive

Petabox storage can also be mounted as a virtual drive, letting other desktop applications read and write bucket contents as if they were local files. Mount configuration includes VFS cache mode (default: writes), cache size limits, and read-only mode, and mounts can be started from either the remote's panel toolbar or the dedicated Mount Manager.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Petabox bucket as a local drive in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open Remote tab > New Remote and select the S3-compatible option to enter your Petabox credentials and endpoint.
3. Use Folder Compare or drag and drop to move existing data onto Petabox, then set up a Sync job for ongoing backups.
4. Add the job to Job Manager and, on PLUS, attach a schedule so backups run without manual intervention.

Once the remote is configured, Petabox storage behaves like any other connection in RcloneView — browsable, syncable, and ready to be backed up on a schedule.

---

**Related Guides:**

- [Manage Outscale Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-outscale-cloud-sync-backup-rcloneview)
- [Manage Scaleway Object Storage — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Manage Selectel Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
