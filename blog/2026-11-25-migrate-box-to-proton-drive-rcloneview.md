---
slug: migrate-box-to-proton-drive-rcloneview
title: "Migrate Box to Proton Drive — Transfer Files with RcloneView"
authors:
  - casey
description: "Move files from Box to Proton Drive with RcloneView. Connect both clouds, preview with Dry Run, copy folders, and verify the migration with Folder Compare."
keywords:
  - migrate box to proton drive
  - box to proton drive transfer
  - move files from box to proton drive
  - box migration tool
  - proton drive migration
  - cloud to cloud migration
  - encrypted cloud storage migration
  - RcloneView box
  - RcloneView proton drive
tags:
  - RcloneView
  - box
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to Proton Drive — Transfer Files with RcloneView

> Move your Box folders into Proton Drive's end-to-end encrypted storage without downloading everything to your laptop first.

Teams and freelancers often start on Box for its collaboration features, then move sensitive archives to Proton Drive for its privacy focus. Doing that by hand means downloading gigabytes from Box and re-uploading them through a browser. RcloneView connects both services in one window so you can copy folders directly, check the result, and keep a repeatable job for anything added later.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Box and Proton Drive

Open **Remote tab > New Remote** and add Box first. Box uses OAuth, so a browser window opens for you to sign in and approve access — no API keys to copy. If your organization uses Box for Business, set `box_sub_type = enterprise` in the remote settings so RcloneView sees your enterprise folders.

Next, add Proton Drive with your Proton email and password, plus a 2FA code if your account has it enabled. Proton Drive support requires rclone v1.69 or later; the embedded rclone bundled with RcloneView meets that, and the footer shows the version in use.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Proton Drive remotes in RcloneView" class="img-large img-center" />

## Plan the Transfer

Open Box in the left Explorer panel and Proton Drive in the right. Use **Get Size** on your top-level Box folders to see how much data you are moving, and create a destination folder structure in Proton Drive that mirrors the one you want to keep.

Box Notes and other Box-native documents are not regular files. In the sync wizard's **Filtering Settings**, the predefined **Box Docs** filter helps you handle them deliberately instead of discovering them mid-transfer. Export anything you need from those formats inside Box before the migration.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box and Proton Drive side by side for a cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Run the Migration

For a small set of folders, drag them from the Box panel to the Proton Drive panel — dragging between different remotes copies the data. For a full migration, create a **Sync** job with Box as the source and Proton Drive as the destination. Proton Drive encrypts files client-side, so moderate concurrency is a sensible starting point; you can lower the number of file transfers in Advanced Settings if you see errors.

Always click **Dry Run** first. It lists what will be copied and what would be deleted, which protects existing Proton Drive content from an accidental mirror. Then run the job and watch progress, speed, and file counts in the **Transferring** tab.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring the Box to Proton Drive transfer in the RcloneView Transferring tab" class="img-large img-center" />

## Verify Before You Cancel Box

When the job finishes, open **Compare** with the Box folder on one side and the Proton Drive folder on the other. Left-only files show anything that did not make it across; use Copy right to fill the gaps. Job History records each run with status, size, and file count for your records.

RcloneView mounts and syncs 90+ providers from one window, on Windows, macOS, and Linux, so the same setup works for your next move.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History confirming a completed Box to Proton Drive migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Box via browser sign-in and Proton Drive with your email, password, and optional 2FA.
3. Create a Sync job from Box to Proton Drive and preview it with Dry Run.
4. Run the job, then confirm the result with Folder Compare before closing your Box account.

A careful, verified migration lets you move to encrypted storage with confidence that nothing was left behind.

---

**Related Guides:**

- [Manage Box Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Manage Proton Drive — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Migrate Dropbox to Proton Drive with RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)

<CloudSupportGrid />
