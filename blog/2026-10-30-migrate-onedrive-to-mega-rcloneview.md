---
slug: migrate-onedrive-to-mega-rcloneview
title: "Migrate OneDrive to Mega — Transfer Files with RcloneView"
authors:
  - jay
description: "Move files from Microsoft OneDrive to Mega with RcloneView: connect both remotes, run a dry run, copy cloud-to-cloud, and verify the result with Folder Compare."
keywords:
  - migrate OneDrive to Mega
  - OneDrive to Mega transfer
  - move OneDrive files to Mega
  - OneDrive Mega migration tool
  - cloud to cloud transfer
  - RcloneView OneDrive
  - RcloneView Mega
  - Mega GUI client
tags:
  - RcloneView
  - onedrive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate OneDrive to Mega — Transfer Files with RcloneView

> Move a OneDrive library into Mega with a visual, repeatable cloud-to-cloud job instead of downloading and re-uploading by hand.

Moving years of documents from Microsoft OneDrive to Mega usually means a slow detour through your own disk. RcloneView connects both services as remotes and copies between them directly, with a preview before anything is written and a comparison afterwards to prove nothing was missed. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect OneDrive and Mega as Remotes

OneDrive uses browser-based OAuth: choose Microsoft OneDrive when adding a remote, sign in, and RcloneView stores the token. Mega is different. It takes your email and password directly, so have those ready before you start.

Name the remotes clearly, for example `onedrive-main` and `mega-archive`. Clear names matter later when you read job history or copy a full path such as `onedrive-main:Projects` into the rclone terminal.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Mega remotes in RcloneView" class="img-large img-center" />

## Plan the Copy Before Running It

Open both remotes in side-by-side Explorer panels and browse the folders you want to move. Use Get Size on the source to estimate how much data you are about to transfer, and check that your Mega account has room for it.

Choose **Copy** rather than Sync for a first migration. A copy never deletes anything at the destination, so a wrong folder choice cannot remove data. Use the filtering step to skip file types you do not need, or limit by max file size or age.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between two remotes in RcloneView" class="img-large img-center" />

## Run a Dry Run, Then the Real Transfer

Dry Run lists what would be copied without writing a byte. Review it, then run the job. The Transferring tab shows progress, speed and file counts, and you can cancel a running job at any point.

For large libraries, lower the number of concurrent file transfers if Mega throttles you, and keep the default retry count so brief network drops do not abort the job.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a copy job in RcloneView" class="img-large img-center" />

## Verify with Folder Compare

When the job finishes, open Compare with OneDrive on the left and Mega on the right. Filters let you show left-only files, so anything that failed to transfer stands out immediately. You can copy the stragglers across from the same view. Job History records status, size, speed and file count for the run.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare results between OneDrive and Mega" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add OneDrive (OAuth) and Mega (email and password) as remotes.
3. Create a Copy job from OneDrive to Mega, run a Dry Run, then execute it.
4. Verify with Folder Compare before retiring the source.

A migration you can preview, monitor and verify is one you can finish with confidence.

---

**Related Guides:**

- [Manage Mega Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Manage OneDrive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrate Google Drive to Mega — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-mega-rcloneview)

<CloudSupportGrid />
