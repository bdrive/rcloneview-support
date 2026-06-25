---
slug: migrate-google-drive-to-storj-rcloneview
title: "Migrate Google Drive to Storj — Transfer Files with RcloneView"
authors:
  - jay
description: "Learn how to migrate Google Drive files to Storj decentralized storage using RcloneView — a step-by-step guide for cloud-to-cloud transfers."
keywords:
  - migrate Google Drive to Storj
  - Google Drive to Storj migration
  - Storj decentralized cloud storage
  - RcloneView cloud migration
  - move files from Google Drive to Storj
  - cloud-to-cloud transfer RcloneView
  - Storj S3-compatible GUI
  - Google Drive migration tool
  - decentralized cloud backup RcloneView
tags:
  - RcloneView
  - google-drive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Google Drive to Storj — Transfer Files with RcloneView

> Move your entire Google Drive to Storj's decentralized, end-to-end encrypted storage without writing a single command.

Teams storing sensitive project files in Google Drive often reach a point where they want stronger data sovereignty, lower egress costs, or S3-compatible access for their toolchain. Storj distributes file chunks across independent nodes worldwide, delivering end-to-end encryption and geographic redundancy by design. RcloneView makes this migration straightforward: connect both remotes through a browser-authenticated setup, then run a copy job that transfers files from Google Drive to Storj through your local machine.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Google Drive and Storj as Remotes

Before transferring anything, both cloud accounts need to be registered in RcloneView as remotes. Google Drive uses OAuth browser authentication — open the Remote tab, click **New Remote**, select Google Drive, and RcloneView launches a browser window for you to authorize the connection. No API keys or credentials to manage manually.

Storj uses S3-compatible access. In RcloneView's New Remote wizard, select the **S3** provider type and choose Storj as the S3 provider. Enter your Storj Access Key ID, Secret Access Key, and the Storj S3 gateway endpoint. Once saved, the remote appears in the explorer panel, giving you a familiar file-browser view of your Storj buckets.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Storj as remotes in RcloneView" class="img-large img-center" />

With both remotes registered, you can open them side by side in RcloneView's dual-panel explorer. Drag a folder from the left panel (Google Drive) to the right panel (Storj) for a quick one-off copy, or set up a managed job for larger migrations.

## Configure the Migration Job

For migrating a full Google Drive — a design agency with 300 GB of assets or a research team with years of shared documents — using a Job is the right approach. Click **Job Manager** in the Home tab, then **Add Job**. Set the source to your Google Drive remote and folder, and the destination to your Storj bucket. Choose **Copy** as the job type to transfer all source files without deleting originals from Google Drive.

In Step 2 (Advanced Settings), set the number of concurrent file transfers based on your connection. The default multi-thread transfer count of 4 works well for most internet connections. Enable **checksum** verification to ensure file integrity — RcloneView compares checksums after each transfer, catching any corruption introduced during transit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Google Drive to Storj copy job in RcloneView" class="img-large img-center" />

Step 3 lets you add filtering rules if you only want to migrate specific file types — for example, exclude `.tmp` working files or limit the transfer to files younger than a certain age. This is particularly useful when migrating an active workspace where some temporary files shouldn't follow you to the new storage provider.

## Monitor and Verify the Transfer

Once you click **Run**, the Transferring tab at the bottom of RcloneView shows live progress: transfer speed, file count, and total size moved. For large migrations, RcloneView continues the job in the background even if you navigate to other remotes — and if the transfer is interrupted, setting the retry count in Step 2 ensures it picks up where it left off.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Google Drive to Storj migration job in RcloneView" class="img-large img-center" />

After the job completes, use RcloneView's **Folder Compare** feature (Home tab > Compare) to verify that both sides match. Point the left panel at your Google Drive source and the right panel at your Storj destination. Folder Compare will surface any files that exist only on one side or have different sizes, giving you a clear audit trail before you begin winding down the Google Drive workspace.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to Storj migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Google Drive remote via **Remote tab > New Remote** and complete the OAuth browser login.
3. Add your Storj remote using the S3 provider type with your Storj Access Key, Secret Key, and gateway endpoint.
4. Open **Job Manager**, create a Copy job from your Google Drive folder to your Storj bucket, enable checksum in Step 2, and click Run.

Storj's architecture gives your files geographic distribution and end-to-end encryption by default — RcloneView makes reaching that destination a matter of minutes, not hours of scripting.

---

**Related Guides:**

- [Migrate Dropbox to Storj with RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [Migrate OneDrive to Storj with RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-storj-rcloneview)
- [Manage Storj Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
