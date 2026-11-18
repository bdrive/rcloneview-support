---
slug: create-empty-directories-sync-option-rcloneview
title: "Create Empty Directories — Preserve Full Folder Structure When Syncing in RcloneView"
authors:
  - alex
description: "Use RcloneView's Create empty directories sync option to copy full folder trees, including empty project folders, between cloud storage and local drives."
keywords:
  - create empty directories sync
  - rclone create empty src dirs
  - preserve folder structure cloud sync
  - copy empty folders to cloud
  - sync empty folders google drive
  - folder template backup
  - RcloneView sync options
  - rclone empty folders not copied
  - mirror directory tree cloud
tags:
  - RcloneView
  - feature
  - cloud-sync
  - file-management
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Create Empty Directories — Preserve Full Folder Structure When Syncing in RcloneView

> If your folder layout matters as much as your files, turn on one checkbox so empty folders reach the destination too.

By default, rclone copies files, not folders, so an empty directory on the source never shows up at the destination. That's usually fine, until you restore a backup and find that the `/Invoices/2027`, `/Raw`, and `/Exports` folders your team relies on are gone. RcloneView exposes this behavior as a single option in the Sync wizard, so you can keep the whole tree without typing rclone flags.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Empty Folders Disappear

rclone moves objects. A sync job walks the source, finds files, and recreates each file's path at the destination. A folder that contains no files produces nothing to transfer, so the job skips it. Many cloud services, and S3-style object storage in particular, don't store folders as separate objects at all. A "folder" there is just a shared prefix in file names.

This catches people who rely on folder templates. A video production company might start every job with a skeleton of `01_Footage`, `02_Audio`, `03_Graphics`, and `04_Deliverables`. An accounting firm might create a folder per client per year before any documents arrive. If those empty skeletons don't sync, collaborators on the destination side see an incomplete layout.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a project folder tree between two cloud remotes in RcloneView" class="img-large img-center" />

## Enabling Create Empty Directories

The option is in **Step 1: Configure Storage** of the Sync wizard, next to the source, destination, and sync direction settings. Pick your source and destination, then tick **Create empty directories**. When the job runs, RcloneView tells rclone to recreate empty source folders at the destination, which is the GUI equivalent of rclone's `--create-empty-src-dirs` flag.

Because the setting is saved with the job, it applies on every run, whether you start the job manually from Job Manager or a PLUS schedule triggers it. It also works with 1:N sync, so the same folder skeleton reaches every destination you add.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job with empty directory creation enabled in RcloneView" class="img-large img-center" />

## Combine It With Filters and Dry Run

Empty-folder creation works alongside the filters in Step 3. If you exclude `.git/` or cap the job with **Max folder depth**, only the folders that pass those rules are created. Run a **Dry Run** first to preview the operations before anything is written. This matters most for one-way sync, which also removes destination items that no longer exist at the source.

On bucket-based storage such as Amazon S3, Wasabi, or Backblaze B2, keep your expectations realistic. These backends have no true directories, so empty folders may not persist the way they do on Google Drive, OneDrive, Dropbox, SFTP, or a local disk.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing left-only folders after a sync in RcloneView" class="img-large img-center" />

After the job finishes, open **Folder Compare** on the same two locations to check the result side by side. Sync and Folder Compare are both available on the FREE license.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open **Sync** from the Home tab and choose your source and destination folders.
3. Tick **Create empty directories** in Step 1, then set any filters you need in Step 3.
4. Run a Dry Run, then save the job and run it from Job Manager.

When empty folders are kept, a restore or migration comes back with the same layout your team set up.

---

**Related Guides:**

- [Max Folder Depth and Max File Size Filters](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Dry Run — Preview Cloud Sync Before Transfer](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Fix Sync Filters Not Excluding Files](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
