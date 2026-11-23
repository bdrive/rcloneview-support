---
slug: migrate-dropbox-to-jottacloud-rcloneview
title: "Migrate Dropbox to Jottacloud — Transfer Files with RcloneView"
authors:
  - jay
description: "Move files from Dropbox to Jottacloud with RcloneView. Connect both clouds, preview with dry run, copy cloud-to-cloud, and verify the result with Folder Compare."
keywords:
  - migrate dropbox to jottacloud
  - dropbox to jottacloud transfer
  - move files from dropbox to jottacloud
  - jottacloud migration tool
  - dropbox alternative europe
  - cloud to cloud migration gui
  - rcloneview jottacloud
  - rclone dropbox jottacloud
  - european cloud storage migration
tags:
  - RcloneView
  - dropbox
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Dropbox to Jottacloud — Transfer Files with RcloneView

> Move your Dropbox folders to Jottacloud cloud-to-cloud, then check every file before you close the old account.

Teams and households moving to a Norwegian provider often hit the same wall: downloading years of Dropbox data to a laptop just to upload it again is slow and risky. RcloneView connects both accounts in one window and runs the transfer through rclone, so files go from Dropbox to Jottacloud without you shuffling them through a local folder by hand.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Dropbox and Jottacloud as Remotes

Open the **Remote** tab and click **New Remote**. Dropbox uses OAuth: your browser opens, you sign in, and RcloneView saves the connection. If your files live in a Dropbox team account, set the `dropbox_business` option so rclone talks to the business namespace.

Add Jottacloud the same way, picking Jottacloud from the provider list and following the connection prompts. Once both remotes appear, open them in two Explorer panels side by side so you can see the source and destination at the same time.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Jottacloud remotes in RcloneView" class="img-large img-center" />

## Plan the Folder Layout Before You Copy

A design agency with 600 GB spread across `Clients`, `Archive` and `Shared Assets` should decide where each top-level folder lands first. Create the destination folders in Jottacloud from the right-click menu, then use **Get Size** on each Dropbox folder to see how much data each step will move.

For a quick one-off, drag a folder from the Dropbox panel into the Jottacloud panel. Dragging between different remotes always copies, so nothing gets removed from Dropbox. For anything larger, a saved job is better because you can re-run it and see its history.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Dropbox to Jottacloud in RcloneView" class="img-large img-center" />

## Build a Repeatable Migration Job

Click **Sync** on the Home tab and pick Dropbox as the source and Jottacloud as the destination. Leave the direction at one-way ("Modifying destination only"). In Advanced Settings, keep the default multi-thread setting, turn on checksum comparison if both sides offer a compatible hash, and use Filtering to skip anything you don't want to bring along.

Run a **Dry Run** first. It lists every file that would be copied or deleted at the destination, which catches a wrong folder choice before it costs you hours. Then start the real run and watch speed and file counts in the **Transferring** tab.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Dropbox to Jottacloud migration job in RcloneView" class="img-large img-center" />

If people keep working in Dropbox during the move, run the same job again just before cutover. Only new or changed files transfer. On a PLUS license you can schedule the job to run nightly until switch-over day.

## Verify with Folder Compare

Before you cancel Dropbox, click **Compare** and open the two top-level folders. Turn on the left-only and different-size filters: anything still listed did not arrive or doesn't match. Select those items and use **Copy right** to fill the gaps. When the view shows only identical files, the migration is complete. **Job History** keeps a record of each run's size, speed and status.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Jottacloud folders after migration in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Dropbox (OAuth) and Jottacloud as remotes from **Remote > New Remote**.
3. Create a one-way Sync job from Dropbox to Jottacloud and preview it with **Dry Run**.
4. Run the job, then confirm the result with **Compare** before retiring the Dropbox account.

RcloneView mounts and syncs 90+ providers from one window on Windows, macOS and Linux, so after the move you can mount Jottacloud as a local drive with the same app.

---

**Related Guides:**

- [Manage Jottacloud Storage with RcloneView: Sync, Backup, and Organize Files](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migrate Dropbox to Koofr — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-koofr-rcloneview)
- [Fix Jottacloud Sync Errors — Troubleshoot and Resolve with RcloneView](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)

<CloudSupportGrid />
