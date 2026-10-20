---
slug: sync-wasabi-to-google-drive-rcloneview
title: "Sync Wasabi to Google Drive — Cloud Backup with RcloneView"
authors:
  - morgan
description: "Sync Wasabi to Google Drive with RcloneView: connect both remotes, preview with Dry Run, run a one-way sync, and verify the result with Folder Compare."
keywords:
  - sync wasabi to google drive
  - wasabi to google drive backup
  - wasabi google drive transfer
  - RcloneView wasabi
  - RcloneView google drive
  - cloud to cloud sync
  - s3 to google drive
  - wasabi bucket backup
tags:
  - RcloneView
  - wasabi
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Wasabi to Google Drive — Cloud Backup with RcloneView

> Keep a second, collaboration-friendly copy of your Wasabi bucket in Google Drive with a previewable one-way sync.

Wasabi is a common home for archives and project deliverables, but the people who need those files often live in Google Drive. Syncing the two keeps a readable copy where colleagues already work, and gives you a second location in case one account has trouble. RcloneView connects both services in one window, previews the job, and verifies the result. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license, alongside 90+ other providers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Both Remotes

Wasabi is reached through rclone's S3 protocol: enter an Access Key, Secret Key, and the endpoint for your Wasabi region. Google Drive uses browser OAuth, so RcloneView opens a Google sign-in page and connects once you approve access.

Open each remote in its own Explorer panel. Browse the bucket and the Drive folder tree side by side so you know exactly which prefix maps to which folder.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configure the Sync Job

Picture a video studio with a bucket of finished edits that producers want in a shared Drive folder. Create a job from the Sync button: pick the Wasabi prefix as the source and the Drive folder as the destination, then give the job a name using letters, numbers, hyphens, or underscores.

One-way sync ("Modifying destination only") makes the destination match the source, so files that exist only in the Drive folder will be removed. If the Drive folder holds files you want to keep, use a Copy job instead. Under Advanced Settings you can set how many files transfer at once and enable checksum comparison. Remember that Google Docs, Sheets, and Slides are not ordinary files, so the predefined Google Docs filter is useful for excluding them.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between Wasabi and Google Drive in RcloneView" class="img-large img-center" />

## Preview with Dry Run

Before the first real run, use Dry Run. It lists the files that would be copied and deleted without changing anything, which is the cheapest way to catch a wrong source prefix or an unexpected deletion. Run the job once the list looks right and watch progress, speed, and file counts in the Transferring tab.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Verify and Repeat

After the sync, open Folder Compare on the two locations to confirm nothing is left-only or different. Job History records each run's status, duration, size, and file count, so you can review past runs. With a PLUS license you can add a crontab-style schedule so the copy refreshes automatically.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Wasabi remote with Access Key, Secret Key, and region endpoint, then add Google Drive through browser sign-in.
3. Create a Sync job from the Wasabi prefix to a Drive folder and run Dry Run first.
4. Run the job, then confirm the result with Folder Compare.

A Drive copy of your bucket turns an archive into something your whole team can open.

---

**Related Guides:**

- [Migrate Wasabi to OneDrive](https://rcloneview.com/support/blog/migrate-wasabi-to-onedrive-rcloneview)
- [Dry Run — Preview Sync Before Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Compare-First Workflow](https://rcloneview.com/support/blog/compare-first-workflow-rcloneview)

<CloudSupportGrid />
