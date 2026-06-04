---
slug: manage-idrive-e2-cloud-sync-backup-rcloneview
title: "Manage IDrive e2 Storage — Sync and Backup Files with RcloneView"
authors:
  - casey
description: "Learn how to connect IDrive e2 to RcloneView for seamless S3-compatible cloud storage sync and backup. Step-by-step guide for secure data management."
keywords:
  - IDrive e2 RcloneView
  - IDrive e2 sync
  - IDrive e2 backup
  - IDrive e2 S3 compatible storage
  - manage IDrive e2 files
  - RcloneView S3 cloud storage
  - IDrive e2 cloud file management
  - sync files IDrive e2
  - IDrive e2 object storage backup
  - RcloneView cloud backup
tags:
  - RcloneView
  - idrive-e2
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage IDrive e2 Storage — Sync and Backup Files with RcloneView

> Connect IDrive e2's S3-compatible object storage to RcloneView and manage your files, run scheduled backups, and mount buckets as local drives — all without touching the command line.

IDrive e2 is a cost-effective S3-compatible object storage service built for performance-sensitive workloads. Whether you're backing up database dumps, archiving video projects, or syncing large datasets between teams, IDrive e2 delivers S3 compatibility at aggressive price points. With RcloneView, you gain a full-featured GUI to connect IDrive e2 alongside every other cloud you use, browse buckets, run sync jobs, and mount storage as a virtual drive — no CLI expertise needed.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting IDrive e2 to RcloneView

IDrive e2 uses the S3 protocol, so adding it to RcloneView follows the same credential-based setup as Amazon S3. You'll need three items from your IDrive e2 dashboard: an **Access Key ID**, a **Secret Access Key**, and the **endpoint URL** for your chosen region.

In RcloneView, click **Remote** in the top menu, then **New Remote**. Scroll through the provider list and select **S3 Compatible**, then choose **IDrive e2** as the provider. Enter your credentials and the endpoint, give the remote a memorable name, and save. RcloneView connects immediately — your buckets appear in the file explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive e2 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

If you manage multiple IDrive e2 accounts — for example, a production account and a dev sandbox — add each as a separate named remote. Switch between them using the tab bar at the top of each explorer panel. The breadcrumb path bar lets you copy the full remote path in `remote:bucket/path` format, ready for pasting directly into rclone CLI commands via the built-in terminal.

## Browsing, Uploading, and Organizing Files

Once connected, IDrive e2 behaves like any other remote in RcloneView. Open a split-panel layout to drag files from your local drive directly into an e2 bucket, or copy objects between IDrive e2 and another cloud provider in a single operation. RcloneView's drag-and-drop support means repositioning files across buckets or providers requires no CLI knowledge at all.

For large uploads — production video renders, scientific datasets, or multi-gigabyte database archives — RcloneView's multi-threaded transfer engine handles concurrent file transfers efficiently. Monitor progress, speed, and file counts in real time from the Transferring tab at the bottom of the interface. Right-clicking any file or folder exposes rename, delete, get public link, and **Get Size** options — the last one being particularly useful for auditing bucket usage before a migration or cleanup.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into an IDrive e2 bucket using RcloneView" class="img-large img-center" />

## Running Sync Jobs and Scheduling Backups

RcloneView's Job Manager is where IDrive e2 becomes a serious backup destination. Create a sync job in four steps: choose your source (a local folder, another cloud, or a NAS), set an IDrive e2 bucket as the destination, configure transfer parallelism and checksum verification in the advanced settings, then add filters to exclude temp files or version control directories like `.git/`.

For teams requiring regular backups, the **PLUS license** adds cron-style scheduling. Set a nightly backup at 2 AM, a weekly full sync, or a rolling hourly archive for high-churn folders. Enable the **Dry Run** feature before committing to any large sync — it shows exactly which files will be copied or deleted without making actual changes. Each scheduled run logs to Job History with transfer speed, file count, status, and duration, giving you a reliable audit trail.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly sync job to IDrive e2 in RcloneView" class="img-large img-center" />

## Mounting IDrive e2 as a Local Drive

RcloneView's Mount Manager lets you attach an IDrive e2 bucket as a virtual local drive. On Windows, the bucket appears as a drive letter. On macOS and Linux, it mounts at a path you specify. Applications without built-in cloud integration — video editors, database tools, legacy enterprise software — can then read and write directly to IDrive e2 as if it were local storage.

Configure the VFS cache mode to **writes** (the default) for a balanced performance-reliability trade-off. For read-heavy workloads like media streaming or large reference dataset access, set the cache to **full** with a generous max size to eliminate repeated downloads on frequently accessed objects.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting an IDrive e2 bucket as a local drive using RcloneView Mount Manager" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. In RcloneView, go to **Remote > New Remote** and select **S3 Compatible > IDrive e2**.
3. Enter your IDrive e2 Access Key ID, Secret Access Key, and endpoint URL.
4. Open your bucket in the file explorer, then create a sync job in the Job Manager to start backing up files on a schedule.

IDrive e2's S3 compatibility means it integrates cleanly into any multi-cloud workflow — use it as a primary archive, a secondary backup target, or a cost-efficient cold tier alongside other services you already manage in RcloneView.

---

**Related Guides:**

- [Manage Storj Cloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [Centralize S3, Wasabi, and R2 Storage with RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Mount Amazon S3 Buckets as Local Drives with RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
