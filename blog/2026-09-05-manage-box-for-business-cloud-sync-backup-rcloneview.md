---
slug: manage-box-for-business-cloud-sync-backup-rcloneview
title: "Manage Box for Business — Sync and Backup Files with RcloneView"
authors:
  - tayson
description: "Connect Box for Business to RcloneView to browse, sync, mount, and back up enterprise cloud files alongside 90+ other providers."
keywords:
  - Box for Business
  - Box enterprise storage
  - RcloneView
  - enterprise cloud sync
  - cloud storage management
  - cloud backup software
  - box_sub_type enterprise
  - multi-cloud file management
  - business cloud storage
  - folder compare tool
tags:
  - RcloneView
  - box
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Box for Business — Sync and Backup Files with RcloneView

> Treat your organization's Box for Business account like any other drive — browse, sync, mount, and back it up from one desktop app.

Box for Business accounts often hold years of shared departmental files spread across dozens of nested team folders, and IT staff need a reliable way to inspect, move, and protect that content without living inside a browser tab. RcloneView connects to Box for Business through the same OAuth login used for personal Box accounts, then applies the enterprise-specific configuration flag so the app can see your organization's full folder structure. Once connected, the account behaves like any other remote in RcloneView's explorer, sync, and mount tools. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Your Box for Business Remote

Create a new remote in RcloneView and choose Box — the app opens your browser for the standard OAuth login, so no API keys or manual token entry are required. Sign in with your corporate Box credentials to authorize the connection.

Box for Business accounts need one additional setting beyond a personal Box login: `box_sub_type = enterprise`, entered in the remote's advanced configuration. This tells rclone to look at the organization's shared team structure rather than a single personal account, which is what surfaces company-wide folders in the RcloneView explorer panel.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Box for Business remote in RcloneView" class="img-large img-center" />

If you manage several Box for Business accounts across departments, the Remote Manager keeps each one separate so you can edit credentials or the enterprise flag independently.

## Comparing and Syncing Enterprise Folders

Before migrating a department off an old file server or consolidating duplicate team folders, use Folder Compare to see exactly what's different between your Box for Business folder and a target location. The comparison view filters results by left-only, right-only, identical, and different files, so you can copy only what's missing instead of re-uploading everything.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing and syncing a Box for Business folder to another cloud remote" class="img-large img-center" />

For ongoing protection, a one-way sync job keeps a secondary copy of critical Box for Business folders current without touching the source, and a dry run shows exactly which files will be copied or deleted before anything actually moves.

## Scheduling Backups and Monitoring Jobs

The Job Manager lets you configure a sync, copy, or 1:N job that mirrors the same Box for Business content to two destinations simultaneously — for example, a local NAS and an S3-compatible bucket, so a single sync job satisfies both an on-site and off-site backup requirement. Job History then records the start time, duration, status, and file count for every run, which is useful when an admin needs to confirm a nightly backup actually completed.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Box for Business backup job in RcloneView" class="img-large img-center" />

PLUS license users can automate this further with crontab-style scheduling, so backups run overnight without anyone triggering them manually.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add a new Box remote and complete the OAuth login with your corporate account.
3. Edit the remote's advanced settings and set `box_sub_type = enterprise` to unlock company folders.
4. Configure a sync job or mount to start managing your Box for Business content.

Once your enterprise Box account sits alongside every other remote in one interface, day-to-day file management and disaster-recovery backups stop being two separate workflows.

---

**Related Guides:**

- [Manage Box Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [How to Migrate from Box to SharePoint or OneDrive — Enterprise Cloud Migration with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Mount Box Storage as a Network Drive with RcloneView for Seamless Team Access](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
