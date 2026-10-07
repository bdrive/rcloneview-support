---
slug: migrate-zoho-workdrive-to-google-drive-rcloneview
title: "Migrate Zoho WorkDrive to Google Drive — Transfer Files with RcloneView"
authors:
  - kai
description: "Migrate Zoho WorkDrive to Google Drive with RcloneView: pick your region, connect both remotes, dry-run, copy cloud-to-cloud, and verify results."
keywords:
  - migrate Zoho WorkDrive to Google Drive
  - Zoho WorkDrive transfer
  - Zoho WorkDrive export
  - move Zoho files to Google Drive
  - cloud to cloud migration
  - RcloneView
  - rclone GUI
  - Zoho WorkDrive backup
  - Google Drive sync
  - folder compare
tags:
  - RcloneView
  - zoho
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Zoho WorkDrive to Google Drive — Transfer Files with RcloneView

> Copy team folders from Zoho WorkDrive to Google Drive directly between clouds, with a preview and a verification pass.

When a company moves from the Zoho suite to Google Workspace, the WorkDrive team folders have to go somewhere. Downloading everything and re-uploading it is slow and hard to audit. RcloneView connects both services and transfers files cloud-to-cloud, so you can preview, run, and verify the migration from a single window.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Zoho WorkDrive and Google Drive

Zoho WorkDrive needs one extra setting: you must select your **Region** when creating the remote, and it must match the data center of your Zoho account. Google Drive uses OAuth browser login. Open the Remote tab, click **New Remote**, and add each service in turn.

Basic sync and folder comparison are available with the FREE license.

<img src="/support/images/en/blog/new-remote.png" alt="Creating Zoho WorkDrive and Google Drive remotes" class="img-large img-center" />

## Plan the Folder Mapping

Open two Explorer panels, with WorkDrive on the left and Google Drive on the right. Browse the team folders and decide where each one should land. A finance team with 150 GB of quarterly reports might map to a dedicated Shared Drive folder, while personal files go to My Drive.

Use Get Size on large folders to estimate transfer time. In the Sync wizard's filtering step, exclude folders or file types you do not need, such as old archives, using max file age or custom filters.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDrive and Google Drive side by side" class="img-large img-center" />

## Dry Run, Then Transfer

Create a Copy job from WorkDrive to Google Drive and run a **Dry Run** first. It lists the files that would be copied without changing anything. When the preview looks right, run the job and follow progress in the Transferring tab.

If errors occur, the job retries up to the configured count, and Job History records status, size, and file count for each run. Re-running copies only what is missing.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the migration job in RcloneView" class="img-large img-center" />

## Verify and Keep a Record

Open **Compare** from the Home tab to check WorkDrive against Google Drive. Filter for left-only files to find anything that did not transfer, then copy them across. Job History gives you a timestamped record you can keep for the migration sign-off.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History for the Zoho WorkDrive migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Zoho WorkDrive (choose the correct Region) and Google Drive remotes.
3. Create a Copy job and run a Dry Run to preview the transfer.
4. Run the job and verify with Folder Compare before decommissioning WorkDrive.

Keeping the source untouched until the comparison is clean makes the cutover low-risk.

---

**Related Guides:**

- [Manage Zoho WorkDrive Cloud Sync](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Sync Zoho WorkDrive to OneDrive](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Fix Zoho WorkDrive Sync Errors](https://rcloneview.com/support/blog/fix-zoho-workdrive-sync-errors-rcloneview)

<CloudSupportGrid />
