---
slug: manage-zoho-workdrive-cloud-sync-rcloneview
title: "Manage Zoho WorkDrive — Sync and Backup Files with RcloneView"
authors:
  - tayson
description: "Connect Zoho WorkDrive to RcloneView with OAuth and Region selection, browse team folders, and run automated sync and backup jobs for your business cloud storage."
keywords:
  - Zoho WorkDrive
  - RcloneView Zoho
  - Zoho cloud sync
  - Zoho backup
  - business cloud storage
  - Zoho WorkDrive rclone
  - team folder sync
  - Zoho file management
tags:
  - RcloneView
  - zoho
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Zoho WorkDrive — Sync and Backup Files with RcloneView

> Zoho WorkDrive is a feature-rich business cloud storage platform, and RcloneView makes it easy to sync team folders, run backup jobs, and manage files without leaving your desktop.

Zoho WorkDrive provides organizations with shared team folders, granular access controls, and deep integration with the broader Zoho productivity suite. For teams that need to sync WorkDrive content to other cloud storage systems, back up critical team folders, or manage files in bulk, RcloneView offers a powerful desktop GUI on top of rclone's Zoho WorkDrive support. The embedded rclone binary means no additional installation is required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Adding Zoho WorkDrive to RcloneView

Click **New Remote** in RcloneView and select **Zoho WorkDrive** from the provider list. The setup process uses OAuth authentication — RcloneView will open a browser window where you sign in to your Zoho account and authorize access. One important configuration detail: you must select your **Region** during setup. Zoho WorkDrive operates from data centers in different regions (US, EU, IN, AU, JP), and selecting the wrong region will result in connection failures even with valid credentials.

After completing OAuth authorization and selecting the correct region, RcloneView connects to your WorkDrive and displays your team folders and personal files in the dual-pane explorer. The connection is saved and re-used for all future sessions without requiring re-authorization unless the token expires.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Zoho WorkDrive remote with region selection in RcloneView" class="img-large img-center" />

## Browsing Team Folders and Managing Files

With Zoho WorkDrive connected, you can navigate team folders just like a local file system. The dual-pane layout lets you open a local folder on one side and a WorkDrive team folder on the other, enabling drag-and-drop uploads and downloads without any intermediate steps. For bulk file management tasks — renaming conventions, reorganizing folder structures, or moving content between team spaces — RcloneView's explorer handles these operations directly on the remote.

Zoho WorkDrive's team folder permissions are respected during browsing: you can only access folders your account has permission to view, so the experience is consistent with what you see in the WorkDrive web interface.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing Zoho WorkDrive team folders in RcloneView dual-pane explorer" class="img-large img-center" />

## Creating Sync Jobs for Backup

The most powerful use of the Zoho WorkDrive integration is creating automated sync and backup jobs. Use the **Job Wizard** to set a WorkDrive team folder as the source and a secondary cloud storage (such as Amazon S3 or Backblaze B2) as the destination. Run a **dry run** first to preview which files will be transferred, then execute the live sync.

PLUS license holders can schedule these backup jobs to run on a recurring cadence — for example, every weekday morning — ensuring that critical business files in WorkDrive are continuously backed up to a secondary provider. The **Job History** panel provides a full log of every backup run, which is valuable for compliance and audit purposes.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Zoho WorkDrive backup job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Click **New Remote** > **Zoho WorkDrive** and complete the OAuth flow in your browser.
3. Select your correct Zoho **Region** (US, EU, IN, AU, or JP) during setup.
4. Browse your team folders in the dual-pane explorer.
5. Use the **Job Wizard** to create backup jobs and schedule them with a PLUS license.

Zoho WorkDrive fits naturally into any organization's cloud strategy, and RcloneView gives you the operational tooling to keep that data synchronized and backed up reliably.

---

**Related Guides:**

- [Manage Google Drive — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Manage SharePoint — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [Cloud Storage for DevOps and Software Teams with RcloneView](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
