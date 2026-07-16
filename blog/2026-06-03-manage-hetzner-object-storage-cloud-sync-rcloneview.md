---
slug: manage-hetzner-object-storage-cloud-sync-rcloneview
title: "Manage Hetzner Object Storage — Sync and Backup Files with RcloneView"
authors:
  - kai
description: "Learn how to connect Hetzner Object Storage to RcloneView for automated sync and backup. Manage S3-compatible buckets with a simple GUI — no CLI needed."
keywords:
  - Hetzner Object Storage
  - Hetzner cloud backup
  - RcloneView Hetzner
  - S3-compatible cloud storage
  - Hetzner sync files
  - cloud backup GUI
  - Hetzner rclone
  - object storage backup
  - European cloud storage
  - Hetzner bucket management
tags:
  - RcloneView
  - hetzner
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Hetzner Object Storage — Sync and Backup Files with RcloneView

> Connect Hetzner Object Storage to RcloneView and automate your backup jobs without writing a single CLI command.

Hetzner Object Storage is an S3-compatible cloud storage service that offers competitive pricing for teams that need reliable, European-based data storage. Whether you're archiving project files, backing up server snapshots, or replicating data from another cloud, RcloneView gives you a visual interface to manage all of it. You configure Hetzner the same way you would any S3-compatible provider — with an access key, secret key, and your bucket endpoint — and then manage everything through the same dual-panel file explorer you use for every other remote.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Hetzner Object Storage to RcloneView

Hetzner Object Storage uses the S3 protocol, so setup in RcloneView follows the same pattern as Amazon S3 or Wasabi. Open the **Remote tab** and click **New Remote**. From the provider list, select **S3** and choose **Hetzner** as the provider. You'll need three pieces of information from the Hetzner Cloud Console: your **Access Key ID**, **Secret Access Key**, and the **endpoint URL** for your chosen region — for example, `fsn1.your-objectstorage.com` for the Falkenstein region.

Once you've entered your credentials and region endpoint, click **Save**. RcloneView establishes the connection and your Hetzner buckets appear as browsable folders in the file explorer immediately.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Hetzner Object Storage remote in RcloneView" class="img-large img-center" />

After connecting, you can browse buckets, upload files via drag and drop, download objects, rename items, delete files, and create new folders — all without touching a terminal. The breadcrumb path bar shows your current position in the bucket hierarchy, and the footer summarizes the total file count and size for any selected directory.

## Uploading and Organizing Files

RcloneView's dual-panel explorer makes it practical to move data between Hetzner Object Storage and your local machine or another cloud. Open your local disk in the left panel and your Hetzner remote in the right panel, then drag files across. For uploads from Windows Explorer, you can drag files directly into RcloneView's panel and they land in your Hetzner bucket in a single step.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to Hetzner Object Storage in RcloneView" class="img-large img-center" />

For large datasets — a media production company backing up 500 GB of render output, for example — the **multi-threaded transfer** settings in the sync wizard let you push more data in parallel. The default of 4 concurrent streams works well for most connections, but increasing this for large files on high-bandwidth links can cut transfer time significantly.

## Running Sync and Backup Jobs

For ongoing backup workflows, RcloneView's **Job Manager** gives you a persistent list of configured sync jobs you can run on demand or on a schedule. Open it from the **Home tab** and click **Add Job** to launch the 4-step sync wizard:

1. **Step 1:** Set your source (a local folder or another remote) and destination (your Hetzner bucket or a subdirectory within it), then name the job
2. **Step 2:** Configure concurrency settings — number of file transfers, multi-thread count, and whether to enable checksum verification for integrity checks
3. **Step 3:** Add filtering rules to exclude file types or paths you don't want in Hetzner, such as `.tmp` files or `/cache/` directories
4. **Step 4 (PLUS license):** Set a crontab-style schedule so the backup runs automatically at a defined interval

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Hetzner Object Storage in RcloneView" class="img-large img-center" />

Before committing a new job, use the **Dry Run** option to preview exactly which files would be copied or deleted. This is especially useful the first time you set up a sync, or whenever you modify filter rules to make sure nothing important gets excluded.

## Reviewing Transfer History

Once jobs run, the **Job History** view records every execution: start time, duration, total size transferred, average speed, number of files, and final status. For teams running nightly backups to Hetzner Object Storage, this log provides a straightforward audit trail that shows which runs completed cleanly and which encountered errors — useful both for troubleshooting and for demonstrating compliance with data retention policies.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Hetzner Object Storage sync in RcloneView" class="img-large img-center" />

The history filters let you narrow results by date range (today, yesterday, last week, last month), so you can quickly pull the record for a specific backup window without scrolling through the full log.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Go to **Remote tab > New Remote**, select **S3**, and choose **Hetzner** as the provider.
3. Enter your Hetzner Access Key ID, Secret Access Key, and region endpoint from the Hetzner Cloud Console.
4. Open the **Job Manager**, create a sync job with your Hetzner bucket as the destination, and click **Run Job**.

With Hetzner Object Storage connected, you get reliable European-based object storage fully managed from a clean GUI — no rclone commands required.

---

**Related Guides:**

- [Manage Hetzner Storage Box — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Manage Wasabi Cloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Manage Cloudflare R2 — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
