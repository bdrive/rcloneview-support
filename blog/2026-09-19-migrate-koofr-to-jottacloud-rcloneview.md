---
slug: migrate-koofr-to-jottacloud-rcloneview
title: "Migrate Koofr to Jottacloud — Transfer Files with RcloneView"
authors:
  - alex
description: "Move files from Koofr to Jottacloud with RcloneView — verified cloud-to-cloud transfer between two European privacy-focused storage providers."
keywords:
  - migrate Koofr to Jottacloud
  - Koofr to Jottacloud transfer
  - RcloneView Koofr
  - RcloneView Jottacloud
  - European cloud migration
  - cloud to cloud transfer
  - Koofr Jottacloud sync
  - move files between clouds
tags:
  - RcloneView
  - koofr
  - jottacloud
  - cloud-to-cloud
  - migration
  - european-cloud
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Koofr to Jottacloud — Transfer Files with RcloneView

> Move your files from Koofr to Jottacloud directly, cloud to cloud, without routing anything through a local download folder first.

Koofr and Jottacloud are both European-based storage providers popular with users who prioritize data residency and privacy, and it's common to consolidate onto one of them after comparing plans or account limits. Doing that migration by downloading everything to a laptop and re-uploading it wastes bandwidth and time, and risks partial transfers if the connection drops mid-way. RcloneView connects to both remotes at once and copies files directly between them, so the transfer only touches your local machine as a pass-through, not a storage stop.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Both Remotes

Add Koofr as a remote through Remote tab > New Remote, then repeat the process for Jottacloud. Both connect through their own account credential flow rather than a shared login screen, so keep each provider's account details on hand before starting. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, which means this same setup works identically regardless of which platform you're migrating from.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

Once both remotes appear in the Remote Manager, open two Explorer panels side by side — one showing Koofr, the other showing Jottacloud — so you can see both file trees at once before moving anything.

## Running the Transfer

For a one-time migration, drag and drop the folders you want to move from the Koofr panel directly onto the Jottacloud panel. Since this is a transfer between two different remotes, RcloneView treats the drop as a copy by default, leaving the Koofr originals untouched until you've confirmed everything landed correctly on Jottacloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dragging files from Koofr to Jottacloud in RcloneView" class="img-large img-center" />

For a larger library, the 4-step Sync wizard is the better tool: set Koofr as the source and Jottacloud as the destination, run a Dry Run first to preview exactly what will be copied, then execute the real sync. Dry Run is available on every license tier, so there's no reason to skip previewing a large migration before committing to it.

## Verifying the Move Completed

After the transfer finishes, use Folder Compare to check both sides file by file — it flags anything that exists only on one remote or that transferred with a different size, which catches partial uploads before you delete anything from Koofr.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Koofr to Jottacloud transfer in RcloneView" class="img-large img-center" />

Job History also keeps a permanent record of the run — file count, total size, and duration — which is worth screenshotting or exporting if you need to confirm the migration for account cancellation purposes later.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add both Koofr and Jottacloud as remotes via Remote tab > New Remote.
3. Drag and drop for a quick move, or build a Sync job with Dry Run for a full library migration.
4. Run Folder Compare afterward to confirm every file landed before removing anything from Koofr.

With both providers connected in the same window, consolidating European cloud storage becomes a same-session task instead of a multi-day download-and-reupload project.

---

**Related Guides:**

- [Sync Koofr to Proton Drive — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Migrate Jottacloud to OneDrive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-onedrive-rcloneview)
- [Koofr vs Jottacloud — European Cloud Storage Comparison with RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
