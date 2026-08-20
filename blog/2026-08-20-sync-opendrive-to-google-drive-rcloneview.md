---
slug: sync-opendrive-to-google-drive-rcloneview
title: "Sync OpenDrive to Google Drive — Cloud Backup with RcloneView"
authors:
  - kai
description: "Sync OpenDrive folders to Google Drive with RcloneView, using Folder Compare and scheduled jobs to keep both clouds aligned."
keywords:
  - sync OpenDrive to Google Drive
  - OpenDrive Google Drive backup
  - RcloneView OpenDrive sync
  - OpenDrive cloud backup
  - cloud to cloud sync
  - OpenDrive Google Drive RcloneView
  - multi-cloud backup tool
  - folder compare OpenDrive
tags:
  - RcloneView
  - opendrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync OpenDrive to Google Drive — Cloud Backup with RcloneView

> Keep an OpenDrive folder mirrored on Google Drive without downloading anything to a local disk first.

Teams that store working files on OpenDrive but collaborate with clients or partners on Google Drive usually end up copying files back and forth by hand, which drifts out of sync the moment either side changes. RcloneView connects both remotes in one window and syncs directly between them, so the transfer runs cloud-to-cloud instead of routing through a local folder. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up the OpenDrive and Google Drive Remotes

Add OpenDrive as a remote in Remote Manager first, then add Google Drive using its browser-based OAuth login — both remotes appear as separate tabs in the File Explorer once configured, so you can browse each side independently before building a sync job. Confirm you can list folders on both remotes before moving to the sync wizard; a remote that fails to browse will also fail mid-sync, and it's easier to catch that early.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configuring the One-Way Sync Job

In the sync wizard, select the OpenDrive folder as source and the target Google Drive folder as destination, then choose one-way sync so OpenDrive stays the source of truth. Set the number of file transfers and equality checkers in Advanced Settings based on folder size — the defaults suit most cases, but a folder with tens of thousands of small files benefits from a lower equality checker count if OpenDrive responds slowly to metadata requests.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from OpenDrive to Google Drive in RcloneView" class="img-large img-center" />

Run a Dry Run before the first real sync to preview which files will copy — this catches an unintended full-folder transfer before it happens, especially useful the first time you point a job at an existing OpenDrive folder.

## Verifying the Result with Folder Compare

After the initial sync completes, open Folder Compare and point it at the same two folders to confirm both sides match. Folder Compare highlights files that exist only on one side or differ in size, which is a faster way to spot a partial transfer than scrolling through Job History looking for errors.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and Google Drive folders after sync in RcloneView" class="img-large img-center" />

## Scheduling Ongoing Syncs

Once the initial sync is verified, save the job in Job Manager and configure crontab-style scheduling — available with a PLUS license — so OpenDrive changes propagate to Google Drive on a fixed interval instead of requiring a manual run each time. Job History keeps a record of every scheduled execution, including transfer size and file count, so you can confirm the schedule is actually firing as expected.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring OpenDrive to Google Drive sync job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add both OpenDrive and Google Drive as remotes in Remote Manager.
3. Build a one-way sync job with a Dry Run first, then run it for real.
4. Verify with Folder Compare and, if needed, save the job with a schedule for ongoing backups.

With both remotes visible side by side, keeping OpenDrive and Google Drive aligned becomes a routine sync job instead of a manual chore.

---

**Related Guides:**

- [Manage OpenDrive Files and Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Back Up OpenDrive to AWS S3 and External Storage with RcloneView](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [Sync Box to Google Drive with RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
