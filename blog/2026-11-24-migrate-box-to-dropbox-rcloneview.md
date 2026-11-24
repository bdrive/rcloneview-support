---
slug: migrate-box-to-dropbox-rcloneview
title: "Migrate Box to Dropbox — Transfer Files with RcloneView"
authors:
  - tayson
description: "Migrate Box to Dropbox with RcloneView. Connect both remotes with OAuth, preview with Dry Run, copy folders cloud-to-cloud, and verify with Folder Compare."
keywords:
  - migrate Box to Dropbox
  - Box to Dropbox migration
  - transfer files from Box to Dropbox
  - Box Dropbox cloud to cloud transfer
  - move Box folders to Dropbox
  - Dropbox for Business migration
  - RcloneView Box Dropbox
  - rclone Box to Dropbox GUI
  - cloud migration tool
tags:
  - RcloneView
  - box
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to Dropbox — Transfer Files with RcloneView

> Move a Box folder tree into Dropbox cloud-to-cloud, preview the scope before anything changes, and confirm the result side by side.

Teams switch from Box to Dropbox for many reasons: a merger, a new client requirement, or a creative department that already lives in Dropbox. The hard part is moving years of shared folders without losing anything along the way. RcloneView connects to both services as remotes and runs the copy through rclone, so you plan, run, and verify the migration from one window instead of downloading everything to a laptop first.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Box and Dropbox as Remotes

Both providers use OAuth, so there are no API keys to copy. Open **Remote tab > New Remote**, choose Box, and sign in when the browser opens. Repeat for Dropbox. If either side is a business account, set the matching option during setup: `box_sub_type = enterprise` for Box for Business, and `dropbox_business = true` for Dropbox for Business.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Dropbox remotes in RcloneView" class="img-large img-center" />

Open Box in the left Explorer panel and Dropbox in the right one. Browsing both side by side confirms you see the expected folders and that the destination folder exists before you build a job. Right-click a Box folder and choose **Get Size** to estimate how much data you are about to move.

## Build a Copy Job and Preview It

For a migration, a **Copy** job is the cautious choice: it adds files to Dropbox and never deletes anything on the destination. Create it from **Home tab > Sync** or the Job Manager, pick the Box folder as source and a Dropbox folder as destination, and give it a clear name such as `box-marketing-to-dropbox`.

In Advanced Settings, leave checksum off for this pair. Box and Dropbox use different hash types, so rclone compares files by size and modification time instead. If Dropbox starts rate limiting, lower the number of file transfers rather than raising it. In the Filtering step, the predefined **Box Docs** filter lets you handle Box-native documents separately, and custom rules can skip folders you have decided to retire.

Run a **Dry Run** first. It lists every file that would be copied without transferring anything — useful when an agency is moving 60,000 client assets and wants to confirm the scope with stakeholders.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Box to Dropbox in RcloneView" class="img-large img-center" />

## Run, Monitor, and Keep an Audit Trail

Start the job and follow progress, speed, and file counts in the **Transferring** tab. Splitting a large migration into one job per top-level folder keeps a single error from holding up everything else. Every run lands in **Job History** with status, total size, and file count, which doubles as a record for whoever signs off on the migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Box to Dropbox migration runs" class="img-large img-center" />

## Verify with Folder Compare

When the jobs finish, open **Folder Compare** on the Box source and the Dropbox destination. Filter for left-only files to find anything that didn't arrive, and use Copy right to fill the gaps. During a cutover period where people still save to Box, re-run the same Copy job to pick up new files before the final switch.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box and Dropbox contents" class="img-large img-center" />

## Getting Started

Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license.

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Box and Dropbox as remotes through OAuth, enabling the business options if needed.
3. Create a Copy job from Box to Dropbox and review it with Dry Run.
4. Run the job, then confirm the result in Folder Compare and Job History.

A previewed, verified migration lets your team move to Dropbox without wondering which folder was left behind.

---

**Related Guides:**

- [Manage Box Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Sync Dropbox to Box with RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-box-rcloneview)

<CloudSupportGrid />
