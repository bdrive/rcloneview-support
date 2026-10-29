---
slug: migrate-dropbox-to-pcloud-rcloneview
title: "Migrate Dropbox to pCloud — Transfer Files with RcloneView"
authors:
  - robin
description: "Move files from Dropbox to pCloud with RcloneView: connect both remotes, run a Dry Run, copy cloud-to-cloud, and verify with Folder Compare."
keywords:
  - migrate dropbox to pcloud
  - dropbox to pcloud transfer
  - move dropbox files to pcloud
  - dropbox pcloud migration
  - cloud to cloud transfer
  - rcloneview dropbox
  - rcloneview pcloud
  - switch from dropbox to pcloud
  - transfer dropbox data
tags:
  - RcloneView
  - dropbox
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Dropbox to pCloud — Transfer Files with RcloneView

> Move a Dropbox account to pCloud in one controlled, verifiable pass instead of download-then-upload by hand.

Switching providers usually means pulling gigabytes down to a laptop and pushing them back up. RcloneView avoids that: it connects Dropbox and pCloud side by side and runs the transfer cloud-to-cloud through rclone. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Dropbox and pCloud

Both services use browser-based OAuth login in RcloneView, so there are no API keys to paste. Open the Remote tab, click **New Remote**, choose Dropbox, and approve access in the browser window that opens. Repeat for pCloud. If you migrate a team account, Dropbox for Business needs the `dropbox_business = true` setting.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Dropbox and pCloud remote in RcloneView" class="img-large img-center" />

Once both remotes exist, open them in two Explorer panels. Seeing the Dropbox folder tree next to the pCloud destination makes it easy to decide whether to move everything or only selected folders.

## Plan the Copy Before You Run It

Use a **Copy** job for a first migration, because it never deletes anything at the source. In the 4-step job wizard, pick Dropbox as the source and a dedicated pCloud folder as the destination. Under Advanced Settings you can raise the number of file transfers for large photo or document libraries, and enable checksum comparison if you want hash-and-size verification.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Dropbox to pCloud in RcloneView" class="img-large img-center" />

Filtering helps too. Set a max file size or exclude patterns such as `.git/` so temporary files and build folders do not travel with the rest. Run a **Dry Run** first: it lists the files that would be copied without touching either account.

## Run, Monitor, and Verify

Start the job and watch the Transferring tab for progress, speed, and file counts. Dropbox applies API rate limits, so a large transfer may slow down at times; RcloneView retries the sync (default 3 attempts) rather than abandoning it.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a running transfer in RcloneView" class="img-large img-center" />

When the job finishes, open **Compare** on the Dropbox and pCloud folders. Left-only files are anything that did not arrive; "different" files differ in size. Copy the stragglers across with one click, then check Job History for the status, total size, and file count of every run.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing Dropbox versus pCloud differences" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Dropbox and pCloud as remotes with **New Remote**.
3. Create a Copy job with Dropbox as source, then run a Dry Run.
4. Run the job, then verify with Folder Compare before retiring the old account.

Keep Dropbox untouched until Compare shows no left-only files, so the original stays available as a fallback.

---

**Related Guides:**

- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrate pCloud to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
