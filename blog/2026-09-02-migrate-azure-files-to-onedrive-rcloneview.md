---
slug: migrate-azure-files-to-onedrive-rcloneview
title: "Migrate Azure Files to OneDrive — Transfer Files with RcloneView"
authors:
  - casey
description: "Migrate Azure File Storage to OneDrive with RcloneView. Move business files between clouds with drag-and-drop, sync jobs, and dry-run previews."
keywords:
  - migrate azure files to onedrive
  - azure file storage migration
  - onedrive cloud migration
  - azure to onedrive transfer
  - cloud to cloud migration
  - RcloneView azure files
  - RcloneView onedrive
  - move azure file storage to onedrive
  - cross-cloud file transfer
  - business cloud migration tool
tags:
  - RcloneView
  - azure-files
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Azure Files to OneDrive — Transfer Files with RcloneView

> Move an entire Azure File Storage share into OneDrive without touching the command line or juggling two separate consoles.

Teams that provisioned Azure File Storage for a project or a departmental share often outgrow it once the rest of the business standardizes on Microsoft 365 and OneDrive for daily collaboration. Re-uploading everything by hand through two different web portals is slow and error-prone. RcloneView opens both remotes side by side in one window and lets you move files directly between them, so the migration happens as a single tracked job instead of a manual copy-paste marathon. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Azure Files and OneDrive Side by Side

Adding Azure File Storage requires the Storage Account Name, Shared Key, and Share Name from your Azure Portal's Access Keys page — RcloneView's remote setup wizard asks for exactly these three fields. OneDrive, by contrast, uses browser-based OAuth: click New Remote, choose OneDrive, and sign in through the popup window that RcloneView opens for you. No API keys to copy or paste.

Once both remotes are configured, open each one in its own Explorer panel using the two-pane (or four-pane) layout. You'll see the Azure share's folder tree on one side and your OneDrive structure on the other, with file counts and sizes shown in the footer of each panel.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure File Storage and OneDrive as remotes in RcloneView" class="img-large img-center" />

## Transfer or Sync Files Between the Two Remotes

For a one-time migration, select the folders or files on the Azure Files panel and drag them onto the OneDrive panel — dragging between two different remotes performs a copy, leaving the Azure source untouched until you're ready to clean it up. For a larger share, use the Sync wizard instead: pick Azure Files as source and OneDrive as destination, then run a Dry Run first to preview exactly which files will be copied before anything actually moves.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files from Azure File Storage to OneDrive" class="img-large img-center" />

Enabling checksum comparison in the sync's Advanced Settings step means RcloneView verifies file content by hash and size rather than just filenames, which matters when a migration has to be provably complete.

## Automate the Migration and Track Progress

Large shares rarely finish in one sitting. Save the transfer as a job in Job Manager so it can be re-run to catch any files added to Azure Files after the first pass, and check the Transferring tab in the bottom Info View for live progress, speed, and file counts while it runs.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Azure Files to OneDrive sync job in RcloneView" class="img-large img-center" />

Job History logs every run — start time, duration, status, and total size transferred — so you have a record to confirm the cutover was complete before decommissioning the Azure share.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Azure File Storage remote with the Account Name, Shared Key, and Share Name.
3. Add OneDrive via the browser-based sign-in flow.
4. Run a Dry Run, then execute the sync job and confirm results in Job History.

A clean, verifiable migration beats a rushed manual copy every time.

---

**Related Guides:**

- [Manage Azure Files Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Manage OneDrive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Fix Azure Files Connection Errors with RcloneView](https://rcloneview.com/support/blog/fix-azure-files-connection-errors-rcloneview)

<CloudSupportGrid />
