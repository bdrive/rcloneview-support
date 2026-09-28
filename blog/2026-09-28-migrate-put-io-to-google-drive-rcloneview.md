---
slug: migrate-put-io-to-google-drive-rcloneview
title: "Migrate Put.io to Google Drive — Transfer Files with RcloneView"
authors:
  - jay
description: "Migrate files from Put.io to Google Drive with RcloneView, a cross-platform GUI that transfers, verifies, and organizes cloud content."
keywords:
  - put.io to google drive
  - migrate put.io files
  - putio migration
  - RcloneView put.io
  - cloud to cloud transfer
  - google drive migration
  - move downloaded torrents to cloud
  - rclone put.io
  - transfer put.io to drive
  - cloud storage migration tool
tags:
  - RcloneView
  - putio
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Put.io to Google Drive — Transfer Files with RcloneView

> Move everything you have stored on Put.io into Google Drive with a visual, drag-and-drop workflow instead of juggling two separate web interfaces.

Put.io is a great landing zone for downloaded torrents and remote files, but it's not built for long-term archiving or team sharing the way Google Drive is. Once a download finishes on Put.io, many users still have to manually pull it down and re-upload it elsewhere. RcloneView connects to both services at once and lets you copy or move content directly between them, cloud to cloud, without routing anything through your local disk first.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Put.io and Google Drive Side by Side

RcloneView's Explorer supports up to four panels at once, so you can open your Put.io account in one panel and your Google Drive in another, viewed side by side. Both Put.io and Google Drive are added the same way — browser-based OAuth login, with no separate API key or access token to copy manually. Once both remotes are configured, each shows up as its own tab, and switching between them is instant.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Put.io and Google Drive as separate remotes in RcloneView" class="img-large img-center" />

With both panels open, you can browse your Put.io downloads folder by folder and decide exactly what moves over, rather than migrating everything blindly. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license, so a one-time transfer costs nothing beyond the time it takes to run.

## Running the Transfer as a Job

Rather than dragging files one at a time, set up a Copy or Move job through the 4-step Sync wizard. Select Put.io as the source and your Google Drive folder as the destination, then use the Advanced Settings step to tune the number of concurrent file transfers based on your connection. If you're unsure the job is scoped correctly, run a Dry Run first — it lists every file that will be copied without touching anything, which is worth doing before a large media migration.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files from Put.io to Google Drive in RcloneView" class="img-large img-center" />

For a one-time migration, use the One-time execution mode so nothing gets saved as a recurring job. If you expect to keep adding files to Put.io before finishing the move, save it as a job instead so you can re-run it later and only pick up new content.

## Verifying the Move with Folder Compare

After the transfer completes, open Folder Compare to check both locations side by side. It flags files that exist only on one side and files with mismatched sizes, so you can confirm the migration was complete before deleting anything from Put.io.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Put.io to Google Drive transfer" class="img-large img-center" />

Job History also keeps a record of the transfer — file counts, total size, and duration — which is useful if you're migrating a large library in batches over several sessions.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Put.io remote via the browser OAuth login flow.
3. Add your Google Drive remote the same way, via browser OAuth login.
4. Create a Copy or Move job from Put.io to your destination folder, run a Dry Run, then execute.

Clearing out Put.io storage into a permanent Google Drive home keeps your downloads organized without a second manual upload step.

---

**Related Guides:**

- [Migrate OneDrive to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Manage Put.io Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Stream and Sync Put.io Media to Your NAS or Cloud with RcloneView](https://rcloneview.com/support/blog/stream-sync-putio-media-nas-cloud-rcloneview)

<CloudSupportGrid />
