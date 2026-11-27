---
slug: migrate-pcloud-to-koofr-rcloneview
title: "Migrate pCloud to Koofr — Transfer Files with RcloneView"
authors:
  - jay
description: "Migrate pCloud to Koofr with RcloneView. Copy folders cloud-to-cloud, preview with Dry Run, verify with Folder Compare, and skip the download-reupload loop."
keywords:
  - migrate pcloud to koofr
  - pcloud to koofr transfer
  - pcloud koofr migration
  - move files from pcloud to koofr
  - cloud to cloud migration
  - european cloud storage migration
  - rcloneview pcloud
  - rcloneview koofr
  - koofr file transfer tool
  - rclone gui cloud migration
tags:
  - RcloneView
  - pcloud
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate pCloud to Koofr — Transfer Files with RcloneView

> Move your pCloud library into Koofr folder by folder, preview every change first, and confirm nothing was left behind.

Teams and individuals move from pCloud to Koofr for many reasons: consolidating accounts, adopting Koofr as a central hub, or keeping a second copy with a different provider. Downloading everything to a laptop and uploading it again wastes disk space and days of time. RcloneView connects both services in one window and copies data between them through rclone, so the migration runs as a managed job you can monitor, repeat, and verify.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect pCloud and Koofr as Remotes

Open the **Remote** tab and click **New Remote**. pCloud uses OAuth: choose pCloud, and your browser opens so you can sign in and approve access. No API key is needed. Then add a second remote for Koofr and enter the account credentials the setup form asks for.

Once both remotes exist, open them in two Explorer panels side by side. You can switch the layout to a horizontal or vertical split under **Settings > Layout**, and browse each account with the folder tree, list view, or thumbnail view for photo folders.

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Koofr remotes in RcloneView" class="img-large img-center" />

Before you move anything, right-click your top-level pCloud folders and use **Get Size**. Knowing the total helps you confirm the Koofr account has enough room.

## Copy Folders Cloud-to-Cloud

For a small set of folders, drag them from the pCloud panel to the Koofr panel. Dragging between different remotes performs a **Copy**, so your pCloud originals stay untouched.

For a full migration, create a job instead. Click **Sync** in the Home tab, pick the pCloud folder as source and a Koofr folder as destination, and give the job a name such as `pcloud-to-koofr`. In Advanced Settings, enable **checksum** if you want files compared by hash and size, and keep **Retry entire sync if fails** at its default of 3 so a dropped connection does not stop the run.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from pCloud to Koofr in RcloneView" class="img-large img-center" />

Run a **Dry Run** first. It lists every file that would be copied or deleted, which is the safest way to catch a wrong destination path before real data moves. RcloneView mounts and syncs 90+ providers from one window on Windows, macOS, and Linux, so the same job workflow applies to any pair you migrate later.

## Monitor the Transfer and Review History

While the job runs, the **Transferring** tab shows progress, speed, and file counts, and you can cancel at any time. A photographer moving 400 GB of exported shoots can leave the app minimized to the system tray, and the job keeps running in the background.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring pCloud to Koofr transfer progress in RcloneView" class="img-large img-center" />

When it finishes, open **Job History** to check the status (Completed, Errored, or Canceled), total size, speed, and number of files. If you add new files to pCloud during the cutover, run the same job again. Only new or changed files are transferred.

## Verify with Folder Compare

Click **Compare** and load the pCloud folder on the left and the Koofr folder on the right. Filter for **left-only files** to spot anything missing on Koofr, and use **Copy right** to fill the gaps. When both sides show as equal, the migration is complete and you can decide when to retire the pCloud copy.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing pCloud and Koofr folders after migration in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add pCloud (OAuth browser login) and Koofr as remotes from **New Remote**.
3. Create a Sync job from pCloud to Koofr and preview it with **Dry Run**.
4. Run the job, review **Job History**, and confirm with **Folder Compare**.

A planned, verified migration means you switch providers on your schedule, not when a manual copy finally finishes.

---

**Related Guides:**

- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Manage Koofr Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Fix Koofr Sync Errors with RcloneView](https://rcloneview.com/support/blog/fix-koofr-sync-errors-rcloneview)

<CloudSupportGrid />
