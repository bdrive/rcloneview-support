---
slug: mount-digitalocean-spaces-local-drive-rcloneview
title: "Mount DigitalOcean Spaces as a Local Drive for Easy File Access with RcloneView"
authors:
  - tayson
description: "Access your DigitalOcean Spaces object storage like a regular folder — mount it as a local drive, drag and drop files, and sync with other clouds using RcloneView."
keywords:
  - digitalocean spaces mount
  - digitalocean spaces local drive
  - spaces s3 compatible mount
  - digitalocean spaces gui
  - digitalocean spaces file manager
  - mount object storage local drive
  - digitalocean spaces sync
  - digitalocean spaces backup
  - spaces rclone gui
  - digitalocean spaces desktop
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - mount
  - s3-compatible
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Mount DigitalOcean Spaces as a Local Drive for Easy File Access with RcloneView

> DigitalOcean Spaces is great for storing assets, but accessing files through the web console is slow and painful. What if you could browse your Spaces bucket like a regular folder on your desktop?

DigitalOcean Spaces provides affordable S3-compatible object storage, but the web dashboard isn't built for everyday file management. Uploading folders, organizing files, or quickly previewing content means constant browser tab switching. RcloneView lets you mount any Spaces bucket as a local drive — browse, drag and drop, and sync files as naturally as working with your local filesystem.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Mount DigitalOcean Spaces Locally?

Spaces works well as backend storage for apps, but when humans need to interact with it directly:

- **The web console is slow** — Navigating large buckets with thousands of files is tedious. There's no bulk rename, no quick preview, no drag-and-drop.
- **CLI tools require memorizing commands** — `s3cmd` and `aws s3` work, but not everyone wants to type commands for basic file operations.
- **No native desktop integration** — Unlike Dropbox or Google Drive, Spaces doesn't have a desktop sync client.

Mounting Spaces as a local drive solves all three. Your bucket appears as a folder in your file manager — open files, copy folders, delete items, all with familiar tools.

## Setting Up DigitalOcean Spaces as a Remote

Since Spaces is S3-compatible, setup in RcloneView uses the S3 provider type:

1. Open RcloneView and click **Add Remote**.
2. Select **Amazon S3** as the provider type (Spaces uses the S3 API).
3. Choose **DigitalOcean Spaces** from the S3 provider dropdown.
4. Enter your credentials:
   - **Access Key** and **Secret Key** from your DigitalOcean API settings.
   - **Region**: Your Spaces region (e.g., `nyc3`, `sfo3`, `ams3`, `sgp1`).
   - **Endpoint**: `https://{region}.digitaloceanspaces.com`
5. Save the remote — your Spaces buckets are now browsable.

<img src="/support/images/en/blog/new-remote.png" alt="Add DigitalOcean Spaces as S3-compatible remote" class="img-large img-center" />

## Mounting Spaces as a Local Drive

Once connected, mounting your Spaces bucket as a local drive takes just a few clicks:

1. Browse to your Spaces remote in the Explorer.
2. Right-click the bucket or folder you want to mount.
3. Select **Mount** from the context menu.
4. Choose a local mount point (drive letter on Windows, mount path on Mac/Linux).
5. Click **Mount** — your Spaces bucket now appears as a local drive.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount DigitalOcean Spaces from Explorer" class="img-large img-center" />

Alternatively, use the Mount Manager for more control over mount options:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure Spaces mount in Mount Manager" class="img-large img-center" />

### What you can do with the mounted drive

- **Open files directly** — Double-click images, documents, or videos to open them in your default apps.
- **Copy and paste** — Move files between your local filesystem and Spaces using your OS file manager.
- **Drag and drop** — Drag files from your desktop into the mounted drive.
- **Use in applications** — Point apps like Photoshop, VS Code, or video editors directly at files on the mounted drive.

## Browsing and Managing Files

Even without mounting, RcloneView's two-pane Explorer gives you a powerful file manager for Spaces:

- **Navigate buckets and folders** with familiar tree navigation.
- **Drag and drop** files between Spaces and any other remote (Google Drive, S3, local disk).
- **Create, rename, and delete** files and folders.
- **View file sizes and dates** for easy management.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces" class="img-large img-center" />

## Syncing Spaces with Other Clouds

DigitalOcean Spaces doesn't exist in isolation. Common workflows include:

### Sync Spaces ↔ AWS S3

Keep a backup copy of your Spaces data in AWS S3 (or vice versa):

1. Create a Sync job with Spaces as source and S3 as destination.
2. Schedule it to run nightly.
3. Use [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) to verify both sides match.

### Sync Spaces ↔ Local Development Folder

Keep a local copy of your Spaces assets for development:

1. Create a Sync job from Spaces to a local folder.
2. Make edits locally, then sync back to Spaces.

### Distribute from Spaces to Multiple Clouds

Use v1.3 [Batch Jobs](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview) to copy Spaces content to Google Drive, OneDrive, and S3 in one automated sequence.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync DigitalOcean Spaces with other clouds" class="img-large img-center" />

## Automating Spaces Workflows

### Scheduled backups

Set up a daily Copy job from your Spaces bucket to another cloud or local storage:

1. Create the job in the Job Manager.
2. Schedule it via [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Get notified via [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) or [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule DigitalOcean Spaces sync jobs" class="img-large img-center" />

### Performance tips

- **Parallel transfers**: 8–16 (Spaces handles high concurrency well).
- **Chunk size**: 64MB for large files.
- **Fast-list**: Enable for faster directory listing on large buckets.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Spaces** as an S3-compatible remote with your API keys.
3. **Mount** your bucket as a local drive or browse it in the Explorer.
4. **Sync or backup** to other clouds with scheduled jobs.

Stop fighting the web console. Mount your DigitalOcean Spaces as a local drive and work with your files the way you work with everything else — from your desktop.

---

**Related Guides:**

- [Add AWS S3 and S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Mount Cloud Storage as a Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Browse & Manage Remotes](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
