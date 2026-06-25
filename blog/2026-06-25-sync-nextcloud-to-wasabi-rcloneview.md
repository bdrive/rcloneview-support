---
slug: sync-nextcloud-to-wasabi-rcloneview
title: "Sync Nextcloud to Wasabi — Cloud Backup with RcloneView"
authors:
  - tayson
description: "Sync your Nextcloud instance to Wasabi S3 with RcloneView — connect WebDAV and S3 remotes, automate backup jobs, and keep self-hosted data protected off-site."
keywords:
  - sync nextcloud to wasabi
  - nextcloud wasabi backup
  - nextcloud s3 backup gui
  - backup nextcloud to s3
  - nextcloud cloud backup rcloneview
  - wasabi s3 backup tool
  - webdav to s3 sync rcloneview
  - nextcloud off-site backup
  - rcloneview nextcloud wasabi
tags:
  - RcloneView
  - nextcloud
  - wasabi
  - cloud-sync
  - backup
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Nextcloud to Wasabi — Cloud Backup with RcloneView

> A self-hosted Nextcloud instance needs an off-site backup — RcloneView makes syncing your Nextcloud folders to Wasabi S3 storage straightforward and fully automatable.

A self-hosted Nextcloud server puts you in control of your files, but that control comes with responsibility: if the server fails, is hit by ransomware, or its disk degrades, your data goes with it. Syncing to Wasabi gives you a durable off-site copy without transfer-cost surprises. RcloneView connects to Nextcloud over WebDAV and to Wasabi over the S3 protocol, then lets you build reliable sync jobs between them — no CLI required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Your Nextcloud Instance as a Remote

Open RcloneView and go to **Remote tab > New Remote**. Select **WebDAV** as the remote type and choose **Nextcloud** as the vendor. Enter your Nextcloud server URL in the format `https://cloud.yourdomain.com/remote.php/dav/files/username/`, along with your Nextcloud username and either your account password or an app-specific password generated from Nextcloud's Security Settings. Save the remote and it will appear as a browseable source in the file explorer.

Unlike mount-only tools, RcloneView syncs WebDAV sources like Nextcloud directly to S3-compatible destinations like Wasabi — entirely on the FREE license.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud as a WebDAV remote in RcloneView" class="img-large img-center" />

Once connected, browse your Nextcloud directories to confirm the link is working. You can inspect file names, sizes, and modification dates — useful for deciding which folders to include in a backup job and which internal Nextcloud directories (like `trashbin`) to exclude.

## Add Wasabi as an S3-Compatible Remote

From **Remote tab > New Remote** again, select **Amazon S3** and choose **Wasabi** as the provider. Enter your Wasabi Access Key ID and Secret Access Key, select the matching region endpoint (for example, `s3.us-east-1.wasabisys.com`), and specify the target bucket. After saving, RcloneView can open your Wasabi bucket in a second explorer panel alongside Nextcloud — you can drag individual files between them to verify the connection before running a full sync.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud and Wasabi remotes open side by side for cloud-to-cloud backup in RcloneView" class="img-large img-center" />

Wasabi's S3-compatible API means RcloneView treats it identically to Amazon S3, so all sync, copy, move, and filter operations work without extra configuration.

## Configure the Sync Job

Click **Sync** from the Home tab to open the 4-step job wizard. In Step 1, set your Nextcloud folder as the source and your Wasabi bucket (or a subfolder like `nextcloud-backup/`) as the destination. Name the job something descriptive, such as `nextcloud-to-wasabi-daily`.

In Step 2, increase the number of parallel transfers if your connection allows it — this speeds up syncing the large numbers of small files typical in Nextcloud. Enable **checksum verification** to compare file hashes rather than just sizes, which catches any corruption that occurred during a previous partial upload. In Step 3, add filter rules to exclude Nextcloud's `trashbin` folder and any chunked upload temporaries so the backup stays clean.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Wasabi sync job in RcloneView" class="img-large img-center" />

With a PLUS license, Step 4 lets you add a crontab-style schedule — nightly at 2 AM, for example — so the backup runs without any manual trigger. The scheduler supports specific weekdays, monthly intervals, and step-based ranges.

## Review Transfer History

After each run, the **Job History** tab records every execution: start time, duration, status (Completed / Errored / Canceled), total bytes moved, and transfer speed. This log is the first place to look if a backup seems to have stalled or missed files, making it straightforward to audit whether Nextcloud data is arriving in Wasabi as expected.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Nextcloud to Wasabi backup runs" class="img-large img-center" />

For operations running multiple Nextcloud instances or backing up to Wasabi buckets in different regions for geo-redundancy, RcloneView's 1:N sync lets you set one source against several destinations and run them together in a single job.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Nextcloud server as a WebDAV remote (Remote tab > New Remote > WebDAV > Nextcloud vendor).
3. Add Wasabi as an S3-compatible remote with your Access Key, Secret Key, region endpoint, and bucket name.
4. Create a sync job with Nextcloud as source and your Wasabi bucket as destination — enable checksum verification in Step 2 for integrity-assured backups.

Your self-hosted Nextcloud data will have a reliable off-site copy in Wasabi, running automatically without any command-line scripts.

---

**Related Guides:**

- [Manage Nextcloud Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Manage Wasabi Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Sync Nextcloud to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
