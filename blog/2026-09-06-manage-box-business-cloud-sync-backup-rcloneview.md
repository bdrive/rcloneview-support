---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Manage Box for Business — Enterprise Cloud Sync and Backup with RcloneView"
authors:
  - casey
description: "Configure Box for Business in RcloneView for enterprise sync, backup, and mount workflows across your admin-managed Box account."
keywords:
  - Box for Business
  - manage Box for Business
  - Box enterprise cloud sync
  - Box business backup
  - RcloneView Box
  - box_sub_type enterprise
  - enterprise cloud storage sync
  - Box account backup tool
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Box for Business — Enterprise Cloud Sync and Backup with RcloneView

> Box for Business accounts need one extra setting before RcloneView can see everything your admin has provisioned — here's how to configure it correctly.

A standard Box remote works fine for a personal account, but a Box for Business (enterprise) account structures folders and permissions differently under the hood. If you connect it the same way you would a personal Box account, some enterprise-managed content can be missing from the explorer. RcloneView handles this with a dedicated `box_sub_type = enterprise` setting on the remote, so your team's shared folders, co-owned content, and admin-provisioned storage all show up correctly.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up a Box for Business Remote

Start by creating a new remote and selecting Box as the provider — the browser-based OAuth login works the same as it does for a personal account, so there's no separate credential flow to learn. The difference comes after authentication: open the remote's advanced settings and set `box_sub_type = enterprise`. This tells rclone (the engine RcloneView runs on) to resolve enterprise-scoped folder structures instead of the personal-account defaults.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Box for Business remote in RcloneView" class="img-large img-center" />

Once configured, browse the remote the same way you would any other — folder tree navigation, thumbnail previews, and file operations (copy, cut, rename, delete) all work identically whether the underlying account is personal or business tier.

## Syncing and Backing Up Enterprise Box Content

A common scenario for IT teams is backing up a Box for Business account to a secondary location — an on-premises NAS, another cloud, or S3-compatible object storage for cold archival. Build a sync job with Box for Business as the source, set the direction to one-way "modifying destination only" for a safe, non-destructive backup, and run a dry run first to preview exactly what will be copied.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Box for Business backup sync job in RcloneView" class="img-large img-center" />

For departments juggling shared drives across dozens of Box folders, filtering by max file age or predefined document filters keeps nightly jobs focused only on what changed, rather than re-scanning the entire account every run. RcloneView also syncs and compares folders — on the FREE license — so enterprise backup workflows don't require an upgrade to get started.

## Scheduling Recurring Enterprise Backups

Manual exports don't scale for an enterprise account with multiple contributors adding files daily. The Job Manager lets you save the Box for Business sync as a named job, then attach a crontab-style schedule (a PLUS license feature) so it runs automatically overnight or on whatever cadence your compliance policy requires.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Box for Business sync job" class="img-large img-center" />

Every run lands in Job History with start time, duration, transfer speed, and file counts — useful evidence when an audit asks how backups are verified.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a new Box remote and complete the browser OAuth login with your Box for Business credentials.
3. Open the remote's advanced settings and set `box_sub_type = enterprise` to unlock enterprise-scoped folders.
4. Build a sync or backup job pairing Box for Business with any other supported remote or local storage.

Getting this one setting right up front saves hours of "where did my files go" troubleshooting later.

---

**Related Guides:**

- [Manage Box Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Manage Dropbox for Business — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Migrate Box to OneDrive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
