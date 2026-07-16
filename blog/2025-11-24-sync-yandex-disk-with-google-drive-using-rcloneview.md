---
slug: sync-yandex-disk-with-google-drive-using-rcloneview
title: "Sync Yandex Disk with Google Drive Using RcloneView — Multi-Cloud Workflow Made Simple"
authors:
  - tayson
description: "Connect Yandex Disk and Google Drive, preview differences, and run scheduled syncs with checksum verification in RcloneView."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud sync
  - rclone sync
  - multi cloud
  - checksum verification
  - scheduler
  - compare
  - mount
  - webdav
  - backup
  - migration
  - gui
  - cloud to cloud
  - transfer monitor
  - job history
  - bandwidth limits
  - dry run
  - sync jobs
tags:
  - cloud-to-cloud
  - sync
  - google-drive
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Yandex Disk with Google Drive Using RcloneView — Multi-Cloud Workflow Made Simple

> Move and sync files between Yandex Disk and Google Drive without touching CLI flags. RcloneView gives you side-by-side compares, checksum-verified jobs, and a scheduler to keep both clouds in lockstep.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Why Sync Yandex Disk and Google Drive?

- Consolidate scattered folders across personal and team accounts.
- Keep a live mirror for redundancy or regional access.
- Stage migrations safely with previews, dry-runs, and checksums before cutover.
- Reduce lock-in: keep a verified copy in another cloud without manual exports.
- Maintain uptime: if one provider throttles, the other remains usable.

## Step 1 — Connect Both Remotes

- Add Yandex Disk (WebDAV or OAuth) via `+ New Remote`. Guide: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Add Google Drive with the same flow; choose the right scope (My Drive or Shared Drive).
- Verify both in **Remote Explorer** so you know paths and permissions are correct.
- Optional sanity checks: confirm time zone and modified-time consistency on a few test files to avoid surprise overwrites.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Step 2 — Compare Before You Sync

- Open **Compare** to see what differs between Yandex Disk and Google Drive: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Filter by extensions if you want to focus on docs, media, or archives.
- Save the compare as a job so you can re-run checks after each sync.
- Use compare as your dry-run: it shows adds/updates/deletes without changing data.
- If you see unexpected deletes, change your job to `copy` (not `sync`) until you are confident.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  
  

## Step 3 — Build a Safe Sync Job

- Create a job from Yandex Disk to Google Drive (or bidirectional if needed): [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Start with **copy** for the first run to avoid unintended deletes; switch to **sync** once validated.
- Enable checksum verification to catch any silent corruption.
- Exclude temp/cache folders so you only move what matters.
- For Shared Drives, pick the correct destination folder (avoid root) to keep ACLs clean.
- Keep path casing consistent to avoid duplicate-looking folders on case-sensitive vs case-insensitive backends.
- Consider chunk sizes and concurrency only if you hit API limits; defaults are fine for most users.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />



## Step 4 — Schedule and Monitor

- Set the scheduler for off-hours to reduce API throttling: [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)    
- Watch live throughput and stalled files in **Transfer Monitor**: [real-time-transfer-monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring).
- Notification habit: review Job History each morning during migration weeks to catch anomalies early.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />


## Step 5 — Mount for On-Demand Access (Optional)

- Mount either cloud locally to browse without downloading everything: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Windows: assign a drive letter; macOS: choose a mount path under `/Volumes`.
- Good for validation: open a few files directly from each mount after a sync to confirm permissions and readability.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  

## Restore or Reverse

- To reverse direction (Google Drive to Yandex Disk), duplicate the job and flip source/target.
- For selective restores, run **copy** on a scoped include list to avoid overwriting good data.
- Keep a small, known-good "canary" folder and ensure every run preserves it unchanged; it is your quick health check.

## Quick Tips

- Keep consistent folder structures on both sides to reduce path mismatches.
- Use presets per team (Docs, Media, Archives) so runs stay predictable.
- Test with a small folder first, then scale to the full tree.
- Document your job settings (mode, filters, schedule) so anyone on the team can re-run safely.
- During heavy migrations, keep mounts read-only for users to prevent mid-run edits.

RcloneView makes Yandex Disk ↔ Google Drive sync straightforward: compare first, copy safely, schedule the rest, and monitor everything from one dashboard.


<CloudSupportGrid />
