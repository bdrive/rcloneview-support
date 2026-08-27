---
slug: migrate-gofile-to-google-drive-rcloneview
title: "Migrate Gofile to Google Drive — Transfer Files with RcloneView"
authors:
  - steve
description: "Move files from Gofile into Google Drive with RcloneView — connect both remotes, transfer directly cloud to cloud, and automate repeat pickups."
keywords:
  - migrate Gofile to Google Drive
  - Gofile to Google Drive transfer
  - move Gofile files to Google Drive
  - RcloneView Gofile migration
  - Gofile access token setup
  - cloud to cloud transfer tool
  - Gofile Google Drive sync
  - consolidate cloud storage
  - cross-cloud file transfer
  - Gofile file management
tags:
  - RcloneView
  - gofile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Gofile to Google Drive — Transfer Files with RcloneView

> Pull files delivered through Gofile straight into Google Drive with RcloneView, without downloading locally first or juggling browser tabs.

Gofile is a common drop point for one-off file sharing — a client sends over a batch of assets, a contractor uploads deliverables, a download link gets passed around a team. But it's not where anyone wants that content to live long-term. RcloneView connects both Gofile and Google Drive as remotes in the same window, so pulling files out of Gofile and into permanent, organized Google Drive storage is a direct transfer rather than a download-then-reupload round trip.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Gofile and Google Drive

Gofile uses credential entry rather than OAuth: generate an Access Token from your Gofile account profile page and paste it into the New Remote screen. Google Drive, by contrast, uses browser-based OAuth — click through the New Remote wizard and authenticate in the popup, no token to copy. Add both as separate remotes and they'll show up as tabs you can open in adjacent Explorer panels.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Gofile and Google Drive remotes in RcloneView" class="img-large img-center" />

Unlike mount-only tools, RcloneView also syncs and compares folders between remotes — on the FREE license — so this same two-remote setup covers a one-time cleanup or an ongoing pickup routine equally well.

## Transferring Files Directly Between Remotes

Open Gofile in the left panel and Google Drive in the right, then select the files or folders to move. Dragging between two different remotes copies rather than moves, so nothing disappears from Gofile until you explicitly delete it afterward — useful if you want to confirm the transfer landed cleanly before clearing the source.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files from Gofile to Google Drive in RcloneView" class="img-large img-center" />

For larger batches, right-click and use Copy or Download instead of drag-and-drop — the Transferring tab in the bottom Info View shows live progress, transfer speed, and file count so you can confirm everything landed before closing the app.

## Automating Repeat Pickups

If Gofile keeps receiving new deliveries — recurring client handoffs, scheduled export drops — a saved sync job beats repeating the manual transfer each time. The Job Manager's four-step wizard lets you set Gofile as source and a specific Google Drive folder as destination, apply a max file age filter so only recent uploads get pulled, and run Dry Run to preview exactly what would copy before anything actually moves.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Gofile to Google Drive sync job in RcloneView" class="img-large img-center" />

Job History logs each run afterward — status, file count, duration — so you can confirm a scheduled pickup completed without opening the app to check.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Gofile as a remote using your Access Token from the Gofile account page.
3. Add Google Drive as a remote through the OAuth browser login.
4. Open both in side-by-side Explorer panels and drag your first batch across, or build a sync job for anything recurring.

Once both remotes sit in the same window, getting content out of Gofile and into organized Google Drive storage stops depending on how long a share link stays valid.

---

**Related Guides:**

- [Manage Gofile Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Manage Google Drive Files and Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Fix Google Drive Storage Quota Exceeded — Transfer Files Out with RcloneView](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
