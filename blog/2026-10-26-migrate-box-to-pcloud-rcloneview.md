---
slug: migrate-box-to-pcloud-rcloneview
title: "Migrate Box to pCloud — Transfer Files with RcloneView"
authors:
  - jay
description: "Migrate Box to pCloud with RcloneView: connect both remotes, run a dry run, copy cloud to cloud, and verify the result with Folder Compare."
keywords:
  - migrate Box to pCloud
  - Box to pCloud transfer
  - move Box files to pCloud
  - Box pCloud migration
  - RcloneView cloud to cloud
  - Box to pCloud sync
  - rclone GUI
  - cloud migration tool
  - verify cloud transfer
  - Box alternative storage
tags:
  - RcloneView
  - box
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to pCloud — Transfer Files with RcloneView

> Move your Box folders to pCloud in one controlled pass, with a preview before anything is copied and a comparison afterwards.

Teams that outgrow a Box workspace, or freelancers who want personal storage under their own control, often face the same chore: thousands of files in nested project folders that need to land in a new account intact. Downloading and re-uploading through a browser is slow and fragile. RcloneView connects Box and pCloud side by side and transfers directly between them, so nothing has to be staged on your local disk.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Box and pCloud as Remotes

Both services use browser-based OAuth sign-in in RcloneView. Open **Remote > New Remote**, choose Box, and approve access in the browser window that opens. Repeat for pCloud. If your files live in a Box Business account, the enterprise sub-type setting (`box_sub_type = enterprise`) is required; personal accounts do not need it.

RcloneView mounts and syncs 90+ providers from one window on Windows, macOS, and Linux, so both remotes appear as tabs in the same Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and pCloud as new remotes in RcloneView" class="img-large img-center" />

## Browse Both Sides Before You Copy

Open Box in one Explorer panel and pCloud in the other. Use the Folder Tree and Get Size to estimate how much data you are moving, and decide whether to migrate everything or a subset. Dragging between two different remotes performs a **copy**, which leaves your Box originals untouched until you are ready to retire them.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box and pCloud open side by side for a cloud-to-cloud transfer" class="img-large img-center" />

## Build a Copy Job with Dry Run

For anything beyond a handful of files, create a job instead of dragging. In the Sync wizard, set Box as the source and a pCloud folder as the destination, then pick the **Copy** job type so nothing is deleted at the destination. In Advanced Settings, enable checksum comparison and keep the equality checkers low if Box starts throttling. In Filtering, use Max file size or exclusion rules such as `.git/` to skip files you do not need.

Run **Dry Run** first. It lists the files that would be copied and deleted, so a wrong folder choice shows up before any data moves. The predefined **Box Docs** filter can exclude Box's cloud-native documents if you do not want them in the copy.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Box to pCloud copy job in RcloneView" class="img-large img-center" />

## Verify with Folder Compare

When the job finishes, open **Compare** with Box on the left and pCloud on the right. Filter for left-only and different files; anything still listed needs another pass. Job History records status, size, speed, and file count for each run, which is useful evidence that the migration completed.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing differences between Box and pCloud" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Box and pCloud through **Remote > New Remote** and sign in with OAuth.
3. Create a Copy job from Box to pCloud and run a Dry Run.
4. Run the job, then confirm the result with Folder Compare before cleaning up Box.

A staged copy-then-verify migration keeps your Box data safe until pCloud holds everything you need.

---

**Related Guides:**

- [Migrate Box to Backblaze B2](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)
- [Migrate Box to Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [Manage pCloud Storage](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
