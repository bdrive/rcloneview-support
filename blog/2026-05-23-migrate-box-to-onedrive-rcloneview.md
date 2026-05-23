---
slug: migrate-box-to-onedrive-rcloneview
title: "Migrate Box to OneDrive — Transfer Files with RcloneView"
authors:
  - morgan
description: "Step-by-step guide to migrating your files from Box to Microsoft OneDrive using RcloneView. Fast, reliable cloud-to-cloud file transfer with full progress monitoring."
keywords:
  - migrate box to onedrive
  - box to onedrive transfer
  - cloud migration box onedrive
  - rcloneview box onedrive
  - box onedrive migration guide
  - transfer files from box to onedrive
  - box cloud migration tool
  - onedrive migration from box rcloneview
  - move files box to microsoft onedrive
tags:
  - RcloneView
  - box
  - onedrive
  - cloud-to-cloud
  - migration
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to OneDrive — Transfer Files with RcloneView

> RcloneView makes migrating from Box to Microsoft OneDrive straightforward — connect both accounts, configure a transfer job, and move your entire file library without touching a browser.

Organizations switching from Box to Microsoft OneDrive face the same recurring challenge: moving thousands of files reliably without losing data, duplicating content, or enduring a slow manual download-and-reupload cycle. RcloneView handles the entire migration through a desktop GUI, transferring files directly between the two cloud services in a cloud-to-cloud path while you monitor progress in real time.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Box and OneDrive

The first step is adding both accounts as remotes in RcloneView. From the **Remote** tab, click **New Remote** and select **Box**. RcloneView will open a browser window for OAuth authentication — log in and grant access, then return to the app. Repeat the process for **OneDrive**, which also uses browser-based OAuth login.

Once both remotes are saved, open two Explorer panels side by side using the **Layout** option in the Settings tab. Navigate to your Box source folder in the left panel and your OneDrive destination folder in the right panel. This dual-panel view gives you a clear picture of the existing structure before the transfer starts.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and OneDrive as remotes in RcloneView" class="img-large img-center" />

If you are migrating a Box for Business account, set `box_sub_type = enterprise` in the remote configuration — the setup wizard includes this field. For OneDrive for Business or a SharePoint document library, select the appropriate account type during the OneDrive setup step. Both enterprise variants authenticate the same way through browser OAuth.

## Running the Migration Job

With both remotes configured, open the **Job Manager** and click **Add Job**. Select your Box folder as the source and the target OneDrive folder as the destination. For a one-time migration, the **Copy** job type preserves all files in Box while populating OneDrive — use **Move** only if you want files removed from Box as they transfer.

In the advanced settings, enable **checksum verification** to confirm that each file arrives intact. This is especially valuable for large migrations where network interruptions could silently produce corrupted copies. Also set a retry count (default: 3) to handle transient API errors from either provider without requiring manual restarts.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy job from Box to OneDrive in RcloneView" class="img-large img-center" />

Before executing the full transfer, use **Dry Run** mode to simulate the job. The preview shows exactly which files will be copied, helping you catch mismatched folder structures or unexpectedly large files before committing bandwidth and time to the actual migration.

## Monitoring Progress and Verifying Results

During the transfer, the **Transferring** tab at the bottom of the RcloneView interface shows live progress: current speed, files completed, total data moved, and elapsed time. For large migrations — a legal team moving a decade of contract documents, for instance — this visibility is essential for estimating how long the operation will take and planning around business hours.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring Box to OneDrive transfer progress in RcloneView" class="img-large img-center" />

When the job completes, check the **Job History** panel for a full execution summary. If any files errored, the log shows exact paths and error messages so you can address them individually without re-running the entire job. After reviewing the history, use RcloneView's **Folder Compare** feature to compare the Box source and OneDrive destination side by side and confirm that every file transferred correctly before decommissioning the Box account.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to OneDrive migration in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add **Box** as a remote via **Remote > New Remote** with OAuth authentication.
3. Add **OneDrive** as a second remote with OAuth authentication.
4. Create a **Copy** job in the Job Manager with Box as source and OneDrive as destination, enable checksum verification, and run it.

Moving from Box to OneDrive is a clean, auditable operation with RcloneView — no manual downloads, no intermediate storage, and complete progress visibility from start to finish.

---

**Related Guides:**

- [Sync Box to Google Drive with RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Zero-Downtime Box to Dropbox Migration with RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Migrate Box to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
