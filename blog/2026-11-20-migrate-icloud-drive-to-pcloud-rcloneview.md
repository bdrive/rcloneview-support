---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "Migrate iCloud Drive to pCloud — Transfer Files with RcloneView"
authors:
  - tayson
description: "Move iCloud Drive files to pCloud with RcloneView: connect both remotes, preview with Dry Run, run a cloud-to-cloud Sync job, and verify with Folder Compare."
keywords:
  - iCloud Drive to pCloud
  - migrate iCloud Drive to pCloud
  - iCloud to pCloud transfer
  - move files from iCloud Drive
  - pCloud migration tool
  - iCloud Drive alternative on Windows and Linux
  - cloud to cloud migration GUI
  - RcloneView iCloud Drive
  - RcloneView pCloud
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - macos
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate iCloud Drive to pCloud — Transfer Files with RcloneView

> Move an iCloud Drive library into pCloud without juggling Finder windows or half-finished browser uploads.

iCloud Drive is convenient while every device you own is an Apple device. Once a Windows laptop or a Linux workstation joins the mix, many users look for a cloud that behaves the same on every platform, and pCloud is a common landing spot. RcloneView connects both services in one window, copies the data with a repeatable Sync job, and lets you verify the result before you cancel anything.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect iCloud Drive and pCloud as Remotes

Open the **Remote** tab and click **New Remote**. Choose **iCloud Drive** and enter your Apple account credentials, completing any verification prompt Apple sends to your devices. iCloud Drive support requires rclone v1.69 or later; the embedded rclone that ships with RcloneView meets that requirement, so there is nothing extra to install.

Next, add **pCloud**. It uses OAuth, so a browser window opens, you sign in, and the remote is saved automatically. No API keys are involved.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

With both remotes saved, open iCloud Drive in the left Explorer panel and pCloud in the right one. Right-click the iCloud folders you plan to move and use **Get Size** to see how much data is involved before you start.

## Preview the Migration with Dry Run

Create a Sync job from the **Home** tab. Set the iCloud Drive folder as the source and a new pCloud folder, such as `/From-iCloud`, as the destination. Keep the direction one-way ("Modifying destination only") so iCloud Drive is never changed.

Before running it, click **Dry Run**. RcloneView lists every file it would copy and anything it would delete at the destination, without moving a byte. This is the moment to catch surprises: Mac bundle folders, `.DS_Store` files, or a forgotten folder of old phone backups. Add custom filters in Step 3 to exclude anything you don't want to carry over.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and pCloud side by side in RcloneView for a cloud-to-cloud transfer" class="img-large img-center" />

Keep in mind that this is not a server-side copy between Apple and pCloud: data streams through the machine running RcloneView, so a wired connection and a computer that stays awake help a large migration finish in one pass.

## Run, Monitor, and Verify

Start the job and watch the **Transferring** tab for progress, file counts, and current speed. If the connection drops, run the same job again. Sync only transfers files that are missing or different, so completed files are skipped.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring an iCloud Drive to pCloud transfer in the RcloneView Transferring tab" class="img-large img-center" />

When the job finishes, open **Compare** with iCloud Drive on the left and pCloud on the right. Turn on "Show left-only files" and "Show different files". An empty result means the migration is complete. **Job History** keeps a record of each run, including its status, size, and file count.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the iCloud Drive to pCloud migration with RcloneView Folder Compare" class="img-large img-center" />

## Getting Started

RcloneView runs on Windows, macOS, and Linux, so you can manage the new pCloud library from any of your computers once the move is done.

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add iCloud Drive (Apple account sign-in) and pCloud (browser OAuth) as remotes.
3. Create a one-way Sync job from iCloud Drive to a pCloud folder and check it with **Dry Run**.
4. Run the job, then confirm the result with **Compare** before you retire the iCloud copy.

A checked, repeatable migration means you can switch clouds without wondering whether any files were left behind.

---

**Related Guides:**

- [Migrate iCloud Drive to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Fix iCloud Drive Sync Errors — How to Resolve with RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
