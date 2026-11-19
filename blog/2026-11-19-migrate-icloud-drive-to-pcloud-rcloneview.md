---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "Migrate iCloud Drive to pCloud — Transfer Files with RcloneView"
authors:
  - jay
description: "Move files from iCloud Drive to pCloud with RcloneView. Connect both clouds, preview the copy with Dry Run, transfer cloud-to-cloud, and verify with Folder Compare."
keywords:
  - migrate icloud drive to pcloud
  - icloud drive to pcloud transfer
  - move files from icloud drive
  - icloud drive migration tool
  - pcloud migration
  - cloud to cloud transfer
  - rcloneview icloud drive
  - rcloneview pcloud
  - rclone gui icloud drive
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate iCloud Drive to pCloud — Transfer Files with RcloneView

> Move your iCloud Drive folders into pCloud with a copy job you can preview, watch, and verify, without staging everything on a local disk first.

People leave iCloud Drive for pCloud for practical reasons: a household that mixes Windows, Linux, and Mac machines, or a freelancer who wants one storage account that works the same on every desktop. Apple offers no direct export to another cloud, so most migrations turn into "download it all to a Mac, then upload it again." RcloneView connects both services at once and copies files between them through rclone, so the transfer runs cloud-to-cloud from one window.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect iCloud Drive and pCloud as Remotes

iCloud Drive support requires rclone v1.69 or later. RcloneView ships with an embedded rclone binary that meets this requirement, so there is nothing extra to install. Open the Remote tab, click **New Remote**, choose iCloud Drive, and enter your Apple account credentials. Then add pCloud. It signs in through a browser OAuth login, so you do not have to generate any API keys.

With both remotes connected, open two Explorer panels side by side. Right-click a top-level iCloud Drive folder and choose **Get Size** to see how much data you are about to move. That number tells you whether your pCloud plan has room before the first file is copied.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

## Build a Copy Job and Preview It with Dry Run

For a migration, a **Copy** job is the cautious choice: it adds files to pCloud and never deletes anything there. Choose **Sync** only if pCloud must mirror iCloud Drive exactly, including deletions.

In Job Manager, create the job with an iCloud Drive folder as the source and a pCloud folder as the destination. In Step 2, keep the retry setting at its default of 3 so a dropped connection doesn't end the run. Step 3 lets you leave out data you no longer need. Custom filters can exclude `.iso` images or `.git/` folders, and a max file age keeps old clutter behind.

Run a **Dry Run** before the real transfer. Take a designer moving 300 GB of client projects: the dry run lists every file that would be copied, so you can confirm the folder layout before spending hours on the transfer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from iCloud Drive to pCloud in RcloneView" class="img-large img-center" />

## Run the Transfer and Track Progress

Start the job and watch the Transferring tab, which shows progress, speed, and file counts. For a large library, create one job per top-level folder (Documents, Desktop, project folders). If a batch fails, you rerun only that batch. Every run is recorded in Job History with its status, total size, and file count, so you have a record of what moved and when.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed iCloud Drive to pCloud copy runs" class="img-large img-center" />

## Verify the Result with Folder Compare

Click **Compare** and open the iCloud Drive folder on the left and the pCloud folder on the right. Filter for left-only and different files to find anything that was skipped, then use **Copy right** to send the missing files across. Once both sides show as equal, you can retire the old storage with confidence.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing iCloud Drive and pCloud folders after migration" class="img-large img-center" />

## Getting Started

RcloneView mounts and syncs 90+ providers from one window, on Windows, macOS, and Linux.

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add iCloud Drive (the embedded rclone v1.69+ is included) and pCloud through its OAuth login.
3. Create a Copy job from iCloud Drive to pCloud and check it with Dry Run.
4. Run the job, then confirm the result with Folder Compare before you downsize your iCloud plan.

A verified, folder-by-folder migration gets your files into pCloud with every folder accounted for.

---

**Related Guides:**

- [Manage iCloud Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrate iCloud Drive to Dropbox — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
