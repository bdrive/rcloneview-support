---
slug: manage-google-drive-computers-cloud-sync-rcloneview
title: "Manage Google Drive Computers — Sync and Backup Files with RcloneView"
authors:
  - jay
description: "Connect and back up Google Drive Computers folders in RcloneView, syncing desktop backup data to any of 90+ cloud providers from one GUI."
keywords:
  - google drive computers
  - google drive computers backup
  - root_folder_id google drive
  - rcloneview google drive computers
  - backup and sync computers folder
  - google drive desktop backup
  - google drive computers sync
  - manage google drive computers
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Google Drive Computers — Sync and Backup Files with RcloneView

> The desktop folders that Google's Backup and Sync app pushes into Drive live outside your normal Drive tree — RcloneView connects to them directly so they can be browsed, copied, and backed up like any other remote.

When a workstation runs Google Drive's desktop client with "Back up my Computer" folders enabled, those files land in a section of Drive that standard remotes can't see by default — it's addressed by a computer ID, not a regular folder path. That makes it awkward to reach from a GUI, and awkward to fold into a broader backup or archive strategy. RcloneView exposes this as a configurable remote setting, so a Computers backup becomes just another source you can browse, filter, and copy alongside your regular cloud storage.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting to a Computers Backup

Google Drive's regular remote configuration only surfaces your own Drive root and any folders you've created there. To reach a Computers backup, RcloneView's New Remote wizard accepts a `root_folder_id` value pointed at the specific computer's backup ID — once set, that machine's backed-up folders (Desktop, Documents, or whatever was selected in the desktop client) appear in the Explorer panel exactly like a normal folder tree. This is useful for IT teams managing several employee laptops, or anyone who wants to check what a given machine's Backup and Sync client actually captured without logging into a browser.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a Google Drive remote with root_folder_id to access a Computers backup in RcloneView" class="img-large img-center" />

Once connected, the remote supports the same file operations as any other Google Drive connection: thumbnail previews, folder tree navigation, right-click copy/download, and Get Size for auditing how much a given machine has pushed to Drive. RcloneView mounts and syncs across 90+ providers from the same window, so a Computers backup can sit in one panel while a destination archive sits in another.

## Consolidating Multiple Machines into One Archive

Organizations backing up several workstations end up with one Computers folder per machine, each addressed by its own ID, which makes it hard to get a single view of "everything backed up from company laptops." Setting up a separate remote per machine and running scheduled one-way sync jobs into a shared destination — a local NAS, an S3 bucket, or a second Drive account — consolidates that scattered backup data into one place you actually control, rather than leaving it locked inside each employee's Drive view.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Computers backup to a consolidated archive destination in RcloneView" class="img-large img-center" />

Filtering settings in Step 3 of the sync wizard help keep these jobs efficient — excluding temp files, system caches, or non-essential extensions means the consolidated archive only holds what's actually worth retaining, instead of a full mirror of every file the desktop client happened to capture.

## Scheduling Recurring Checks

A Computers backup isn't static — it grows every time the desktop client runs its own sync cycle, so a one-time copy into your archive quickly goes stale. PLUS license users can attach a crontab-style schedule to the sync job so newly backed-up files are picked up automatically on a recurring basis. Job History then shows exactly when each machine's Computers folder was last captured, transferred size, and whether the run completed cleanly.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job for a Google Drive Computers remote in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a new Google Drive remote and set `root_folder_id` to the target computer's backup ID.
3. Browse the Explorer panel to confirm the expected desktop folders appear.
4. Set up a one-way sync job to a consolidated archive destination, scheduling it if you're on a PLUS license.

Desktop backup data shouldn't be trapped behind a computer ID you can only see in a browser — bringing it into RcloneView puts it under the same visibility and protection as the rest of your cloud storage.

---

**Related Guides:**

- [Manage Google Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Manage Google Drive Shared With Me — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-shared-with-me-rcloneview)
- [Mount Google Drive as a Local Drive with RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)

<CloudSupportGrid />
