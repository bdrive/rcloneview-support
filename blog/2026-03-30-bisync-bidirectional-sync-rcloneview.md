---
slug: bisync-bidirectional-sync-rcloneview
title: "Bisync Bidirectional Sync — Two-Way Cloud Synchronization in RcloneView"
authors:
  - tayson
description: "Learn how to use RcloneView's bisync bidirectional sync to keep local and cloud files in two-way synchronization across multiple devices and providers."
keywords:
  - bisync rcloneview
  - bidirectional sync
  - two-way cloud sync
  - rclone bisync
  - cloud file synchronization
  - two-way file sync
  - bisync setup
  - rcloneview sync
  - multi-device sync
  - bidirectional backup
tags:
  - RcloneView
  - feature
  - cloud-sync
  - sync
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Bisync Bidirectional Sync — Two-Way Cloud Synchronization in RcloneView

> Bisync propagates changes in both directions, keeping your local files and cloud storage perfectly mirrored without overwriting either side.

Standard sync operations are one-directional: they make the destination match the source, deleting anything at the destination that does not exist at the source. Bisync works differently. It tracks changes on both sides since the last run and propagates additions, modifications, and deletions in both directions. RcloneView exposes rclone's bisync feature through its graphical interface, making two-way cloud synchronization accessible without writing command-line scripts.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## How Bisync Works

Rclone's bisync command maintains a pair of listing files that record the state of both the source (Path1) and destination (Path2) after each successful run. On subsequent runs, bisync compares the current state of each side against its stored listing to determine what changed. New files on Path1 are copied to Path2, new files on Path2 are copied to Path1, and deletions are mirrored in both directions.

Conflict detection is built in. If the same file is modified on both sides between runs, bisync flags it as a conflict rather than silently overwriting one version. The default behavior renames the conflicting copy, preserving both versions so you can manually resolve the difference. This is critical for shared workflows where multiple users or devices may edit the same document.

The first bisync run requires the `--resync` flag to establish the initial baseline listings. RcloneView handles this automatically when you create a new bisync job — the initial run performs a resync, and all subsequent scheduled runs operate in normal delta mode.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Bisync bidirectional transfer configuration in RcloneView" class="img-large img-center" />

## Setting Up Bisync in RcloneView

To create a bisync job in RcloneView, open the job manager and select bisync as the operation type. Choose your two paths — for example, a local directory like `/home/user/Documents` as Path1 and a Google Drive folder as Path2. You can also bisync between two cloud remotes, such as keeping a Dropbox folder mirrored to OneDrive.

Filter rules work with bisync just as they do with standard sync. Use include and exclude patterns to limit bisync to specific file types or subdirectories. For instance, you might bisync only `*.docx` and `*.xlsx` files between a local project folder and a shared OneDrive directory, ignoring temporary files and OS metadata.

RcloneView's job scheduler supports running bisync at regular intervals — every 15 minutes, hourly, or on a custom cron schedule. Frequent intervals minimize the window for conflicts and ensure near-real-time synchronization between your local machine and cloud storage.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a bisync job from the RcloneView job manager" class="img-large img-center" />

## Practical Use Cases for Bisync

**Multi-device document sync:** Keep a working documents folder synchronized between your desktop and cloud storage. When you edit a file on your laptop (which syncs to the same cloud folder via its own bisync job), the changes propagate to all connected devices on the next run.

**Collaborative project folders:** Teams sharing a cloud storage folder can use bisync to maintain local working copies. Each team member's local changes are pushed to the cloud, and remote changes from colleagues are pulled down automatically. The conflict detection ensures that simultaneous edits do not silently overwrite each other.

**Hybrid local-cloud workflows:** Developers or designers who need fast local file access but also want cloud backup can bisync their project directories. Local file operations remain instant, while the cloud copy stays current for backup and sharing purposes.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring bisync job in RcloneView" class="img-large img-center" />

## Bisync Best Practices

Run bisync on a consistent schedule to minimize conflicts. The longer the interval between runs, the higher the chance of conflicting edits. For active working directories, a 15- to 30-minute interval strikes a good balance between responsiveness and resource usage. Avoid running bisync on extremely large directory trees without filters, as the listing comparison can be time-consuming. Use RcloneView's job history to monitor for recurring conflicts and adjust your workflow accordingly.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Bisync job history showing completed two-way synchronization runs" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configure your source and destination remotes (local folder, Google Drive, OneDrive, etc.).
3. Create a new bisync job in the job manager and run the initial resync.
4. Schedule the bisync job to run at your preferred interval for ongoing two-way synchronization.

Bisync in RcloneView brings true bidirectional cloud synchronization to your desktop without scripts, cron jobs, or command-line complexity.

---

**Related Guides:**

- [Sync, Copy, Move — Difference Explained in RcloneView](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Filter Rules and Selective Sync in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView vs Syncthing — Comparison](https://rcloneview.com/support/blog/rcloneview-vs-syncthing-comparison)

<CloudSupportGrid />
