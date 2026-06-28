---
slug: manage-linkbox-cloud-sync-backup-rcloneview
title: "Manage Linkbox Storage — Sync and Backup Files with RcloneView"
authors:
  - jay
description: "Connect Linkbox to RcloneView for file sync, backup, and browsing — manage Linkbox storage from a multi-cloud GUI on Windows, macOS, and Linux."
keywords:
  - Linkbox RcloneView
  - Linkbox cloud sync
  - Linkbox backup
  - manage Linkbox storage
  - Linkbox file transfer
  - Linkbox sync files
  - cloud storage manager Linkbox
  - RcloneView file hosting sync
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
  - file-management
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Linkbox Storage — Sync and Backup Files with RcloneView

> Connect Linkbox to RcloneView and manage your files from a GUI that syncs, mounts, and backs up 90+ cloud providers — no terminal required.

Linkbox is a file hosting and storage service used for sharing and archiving content online. For users who want more control — scheduled backups, cross-cloud transfers, and side-by-side folder comparisons — RcloneView provides a full-featured GUI that goes far beyond manual uploads. Whether you're organizing media libraries or maintaining offsite archives, RcloneView makes the workflow repeatable and visual. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Linkbox as a Remote in RcloneView

Adding Linkbox to RcloneView starts from the **Remote tab → New Remote** menu. RcloneView ships with an embedded rclone binary, so there's nothing to install separately — just launch the app and configure your Linkbox credentials directly in the setup wizard.

Select Linkbox from the provider list and enter your account credentials (typically an API token from your Linkbox account settings). Once saved, your Linkbox storage appears in the Explorer panel alongside any other remotes you've configured. You can open multiple panels simultaneously — Linkbox on the left and a local folder or another cloud on the right — to compare and transfer files side by side.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Linkbox as a new remote in RcloneView" class="img-large img-center" />

The connection is stored in your rclone config, so Linkbox stays accessible across sessions without re-entering credentials.

## Browse and Transfer Files with Drag and Drop

Once connected, your Linkbox content appears in a full file explorer: collapsible folder tree on the left, file list on the right, with name, size, type, and modified date columns. Thumbnail view is available for image directories — a useful way to scan photo or media archives at a glance.

Moving files between Linkbox and another remote is as simple as selecting items and dragging them across panels. Cross-remote drags trigger a copy operation; RcloneView confirms the action before starting. Right-click context menus expose additional operations: download to local disk, upload from your computer, rename files inline, create new folders, and generate public share links where the provider supports them.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between Linkbox and another cloud provider in RcloneView" class="img-large img-center" />

Multi-select with Ctrl+Click (or Shift+Click for ranges) makes it practical to move large batches of files in a single operation.

## Sync and Backup Linkbox with Scheduled Jobs

The job system is where RcloneView earns its keep for serious Linkbox workflows. Create a sync job from Linkbox to a local folder — or from a local folder to Linkbox — using the 4-step wizard. Step 1 picks your source and destination. Step 2 sets concurrency and retry behavior. Step 3 adds filters: include only certain file types, exclude files older than a given age, or cap the maximum file size transferred.

Before committing to a real run, use **Dry Run** to preview exactly which files would be copied or deleted. This is especially valuable when syncing large Linkbox archives where an accidental deletion would be difficult to recover from.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job targeting Linkbox storage in RcloneView" class="img-large img-center" />

With a PLUS license, add a crontab-style schedule so the job runs automatically — nightly, weekly, or on any custom cadence — without any manual intervention.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Linkbox backup operations in RcloneView" class="img-large img-center" />

Job history records every execution: start time, duration, files transferred, transfer speed, and completion status. At a glance you can confirm that last night's Linkbox backup finished cleanly.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open **Remote tab → New Remote** and select Linkbox from the provider list.
3. Enter your Linkbox credentials and save the remote.
4. Open an Explorer panel pointing to your Linkbox storage and start browsing, transferring, or syncing files.

With job scheduling and full transfer history, your Linkbox data stays organized and reliably backed up — no terminal commands required.

---

**Related Guides:**

- [Manage Pixeldrain Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Manage Gofile Cloud Storage with RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Manage Uptobox Downloads with RcloneView](https://rcloneview.com/support/blog/manage-uptobox-cloud-downloads-rcloneview)

<CloudSupportGrid />
