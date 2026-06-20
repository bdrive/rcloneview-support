---
slug: manage-digitalocean-spaces-cloud-sync-backup-rcloneview
title: "Manage DigitalOcean Spaces Storage — Sync and Backup Files with RcloneView"
authors:
  - alex
description: "Learn how to manage DigitalOcean Spaces with RcloneView. Browse buckets, sync files between Spaces and other clouds, and automate backups with a GUI."
keywords:
  - DigitalOcean Spaces
  - DigitalOcean Spaces sync
  - DigitalOcean Spaces backup
  - RcloneView DigitalOcean
  - S3-compatible storage GUI
  - cloud storage sync tool
  - backup to DigitalOcean Spaces
  - DigitalOcean Spaces file manager
  - automated cloud backup
  - object storage management
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage DigitalOcean Spaces Storage — Sync and Backup Files with RcloneView

> DigitalOcean Spaces is a powerful S3-compatible object storage service — RcloneView makes it as easy to manage as any local folder.

DigitalOcean Spaces is a developer-friendly object storage solution that delivers an S3-compatible API, scalable capacity, and a built-in CDN for edge delivery. Whether you're storing application assets, media libraries, or database backups, managing Spaces through RcloneView's GUI lets you browse, transfer, and automate backups without writing a single rclone command. A digital agency handling 500 GB of client media assets, for instance, can set up automated sync between a local NAS and Spaces in under ten minutes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting DigitalOcean Spaces to RcloneView

DigitalOcean Spaces uses the S3-compatible protocol, so authentication requires an access key and secret key. In the DigitalOcean control panel, navigate to **API > Spaces Keys** to generate a new key pair. Copy both the key and the secret — you'll only see the secret once.

In RcloneView, click **Remote tab > New Remote**. In the provider list, select **Amazon S3** and then choose **DigitalOcean Spaces** as the provider. Enter your access key, secret key, and select the region matching your Spaces datacenter (e.g., `nyc3`, `sfo3`, or `ams3`). RcloneView automatically resolves the correct endpoint for your region. Click **Save** and the remote appears in your explorer panel immediately.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new DigitalOcean Spaces remote in RcloneView" class="img-large img-center" />

Once connected, all your Spaces (buckets) appear as folders you can browse, navigate, and interact with just like a local drive — complete with file size, modification date, and folder hierarchy.

## Transferring Files With Drag and Drop

RcloneView supports drag-and-drop transfers between any two panels. Open a local folder in one panel and your DigitalOcean Spaces remote in another. Dragging files from your local machine uploads them directly to Spaces; dragging from Spaces to another remote — such as Google Drive or Amazon S3 — copies them cloud-to-cloud without routing through your local machine.

Right-click any file or folder for additional operations: **Download**, **Delete**, **Rename**, **New Folder**, or **Get Public Link** to generate a shareable URL backed by Spaces CDN. The **Get Size** option calculates the total storage consumed by any folder, which is useful for monitoring bucket usage before billing cycles.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## Automating Sync Jobs Between Spaces and Other Storage

Recurring sync jobs are where RcloneView truly shines for ongoing backup workflows. Click **Home tab > Sync** to open the job wizard. Set your source (a local backup folder or another cloud remote) and destination (your DigitalOcean Spaces bucket or a specific subdirectory). Name the job descriptively, then configure sync direction — one-way sync ensures the destination mirrors the source without unintended changes flowing back.

The filtering step restricts which files sync by extension, maximum file age, or folder depth. A web development team might filter to only sync built assets (`.html`, `.css`, `.js`, `.png`) while excluding source files and node_modules directories. The **1:N sync** feature lets you simultaneously push the same source to multiple Spaces buckets across different regions for geographic redundancy.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## Scheduling Automated Backups

With a **PLUS license**, RcloneView's cron-based scheduler lets you run Spaces sync jobs automatically without any manual trigger. Set a job to run every night at 2 AM to push the latest files to your Spaces bucket and keep your backup current. The **Simulate Schedule** tool shows the next ten execution times so you can confirm the timing before saving.

After each run, **Job History** records execution type, duration, transfer speed, and file count — giving you a full audit trail of every backup operation against your Spaces buckets.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generate a Spaces access key in the DigitalOcean control panel under **API > Spaces Keys**.
3. Add a new remote in RcloneView: select **Amazon S3 > DigitalOcean Spaces**, enter your credentials and region.
4. Open your Spaces bucket in an explorer panel and start transferring files via drag and drop or sync jobs.

RcloneView turns DigitalOcean Spaces from a developer API into a practical file management tool the whole team can use every day.

---

**Related Guides:**

- [Sync Dropbox to DigitalOcean Spaces — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-digitalocean-spaces-rcloneview)
- [Centralize S3, Wasabi, and R2 Files in One View with RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Optimize RcloneView Mount Performance for S3 and R2](https://rcloneview.com/support/blog/optimize-rcloneview-mount-s3-r2-performance)

<CloudSupportGrid />
