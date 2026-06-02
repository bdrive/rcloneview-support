---
slug: migrate-jottacloud-to-onedrive-rcloneview
title: "Migrate Jottacloud to OneDrive — Transfer Files with RcloneView"
authors:
  - morgan
description: "Step-by-step guide to migrating all your Jottacloud files to Microsoft OneDrive using RcloneView. Move your entire library without any command-line tools."
keywords:
  - jottacloud to onedrive migration
  - transfer jottacloud to onedrive
  - migrate jottacloud to onedrive
  - cloud to cloud transfer gui
  - jottacloud migration tool
  - onedrive cloud migration
  - rcloneview jottacloud onedrive
  - cloud storage migration guide
tags:
  - RcloneView
  - jottacloud
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Jottacloud to OneDrive — Transfer Files with RcloneView

> Move your entire Jottacloud library to Microsoft OneDrive without touching the command line — RcloneView handles the cloud-to-cloud transfer with full progress monitoring and file-integrity verification.

Many teams switch from Jottacloud to OneDrive when consolidating around Microsoft 365, gaining tighter Office app integration and broader enterprise tooling. The challenge is transferring years of files accurately at scale. RcloneView's cloud-to-cloud job engine lets you map both remotes, run a verified copy, and confirm completeness with a built-in folder comparison — all from a single GUI, with no rclone configuration files to edit manually.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Jottacloud and OneDrive as Remotes

Open RcloneView and navigate to the **Remote** tab, then click **New Remote**. Select Jottacloud from the provider list and follow the on-screen configuration prompts to authenticate your account.

Next, add a second remote for OneDrive. OneDrive uses browser-based OAuth — RcloneView will open your default browser for account sign-in automatically. Once authorized, the connection is saved to your rclone config and immediately accessible in the Explorer panels.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Jottacloud remote in RcloneView Remote Manager" class="img-large img-center" />

With both remotes connected, open them side by side using RcloneView's dual-panel Explorer. Right-click your source folder and choose **Get Size** to confirm the total data volume before you begin — this gives you a clear migration baseline and helps you spot unexpected discrepancies after the transfer.

## Create a Copy Job in Job Manager

Go to **Home → Job Manager**, then click **Add Job**. Set your Jottacloud root (or subfolder) as the source and the target OneDrive folder as the destination. Choose **Copy** as the job type for the initial migration — this preserves source files intact while populating OneDrive without touching the origin.

In Step 2 of the wizard, increase **Number of file transfers** to push multiple files concurrently; this reduces total migration time significantly for large libraries. Enable **Enable checksum** so each transferred file is verified by hash and size, not just filename — critical for a one-time migration where silent data corruption must be caught before you decommission the source.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud-to-cloud migration job in RcloneView Job Manager" class="img-large img-center" />

Before the live run, click **Dry Run** to preview which files will be copied. For a project archive with thousands of nested folders, this preview step surfaces path-length issues and oversized files before they cause mid-transfer failures.

## Monitor Progress and Transfer Speed

Once the job starts, the **Transferring** tab in the bottom Info View shows real-time progress: individual file names, transfer speed, total bytes moved, and a running file count. You can cancel the job at any time without corrupting already-transferred files — RcloneView's underlying rclone engine handles partial transfers cleanly, and a resumed Copy job skips files that already exist at the destination with matching size and checksum.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Jottacloud to OneDrive transfer in RcloneView" class="img-large img-center" />

For very large migrations running overnight, use the system tray to keep RcloneView running in the background. Job completion notifications will alert you when the transfer finishes.

## Verify Completeness with Folder Compare

After the copy job completes, open **Folder Compare** from the Home tab. Set the left panel to your Jottacloud source and the right panel to the OneDrive destination. RcloneView scans both sides and highlights left-only files that did not transfer, different-size files that may have been corrupted, and any right-only files.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Jottacloud source and OneDrive destination to verify migration completeness" class="img-large img-center" />

Use **Copy Right** for any remaining left-only files to finish the transfer. When the comparison shows no left-only or different-size entries, your Jottacloud content is fully and accurately mirrored to OneDrive — ready for Microsoft 365 workflows.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Jottacloud account via Remote tab → New Remote and follow the prompts.
3. Add your OneDrive account via Remote tab → New Remote (browser OAuth sign-in).
4. Create a Copy job in Job Manager, enable checksum, and run a Dry Run first.
5. After the transfer, open Folder Compare to confirm zero left-only or mismatched files.

A clean Jottacloud-to-OneDrive migration is achievable in a single session — no scripting, no surprises, and a verified result you can trust before decommissioning the source.

---

**Related Guides:**

- [Manage Jottacloud Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migrate Jottacloud to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [Manage OneDrive Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
