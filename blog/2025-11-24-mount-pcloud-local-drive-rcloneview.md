---
slug: mount-pcloud-local-drive-rcloneview
title: "Mount pCloud as a Local Drive on Windows & macOS with RcloneView — Access Your Files Without Syncing"
authors:
  - tayson
description: "Mount pCloud as a drive letter or volume, browse files instantly without full sync, and tune cache settings for fast, reliable access using RcloneView."
keywords:
  - rcloneview
  - pcloud mount
  - cloud drive
  - vfs cache
  - windows
  - macos
  - cloud storage
  - rclone
  - multi cloud
  - drive letter
  - volume mount
  - file explorer
  - finder
  - scheduler
  - job history
  - transfer monitor
  - cache settings
  - offline access
  - read ahead
  - compare
  - sync
  - checksum
  - gui
  - cloud backup
  - mount manager
tags:
  - pcloud
  - mount
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Mount pCloud as a Local Drive on Windows & macOS with RcloneView — Access Your Files Without Syncing

> Skip full syncs. Mount pCloud as a local drive with RcloneView, browse in Explorer or Finder, and stream files on demand with tuned cache settings.

pCloud gives you flexible cloud storage, but copying everything to every machine wastes time and disk. With RcloneView you can mount pCloud like a local drive letter or volume, fetch files on demand, and keep bandwidth under control. No CLI flags to memorize; just connect, mount, and go.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Why Mount Instead of Sync?

- Save space: browse and open only what you need, no full local mirror.
- Faster starts: map your drive once and skip long initial syncs.
- Safe edits: cache writes locally, let RcloneView handle retries and resumes.

## Step 1 — Connect pCloud in RcloneView

- Add pCloud via `+ New Remote` (WebDAV or OAuth flow). Guide: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Confirm the remote works by listing folders in **Remote Explorer**.

## Step 2 — Create a Mount (Windows or macOS)

- Open **Mount Manager** and choose your pCloud remote. Guide: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Pick a target:
  - Windows: choose a drive letter (e.g., `P:`) using `cmount`.
  - macOS: pick a mount path (e.g., `/Volumes/pcloud`).
- Save and mount. You should see the drive in Explorer or Finder immediately.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />


## Step 3 — (Optional) Verify with Compare Before Heavy Changes

- Use **Compare** to preview differences before bulk moves or cleanup: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Spot newer, missing, or mismatched files without running a destructive sync.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />


## Step 4 — (Optional) Sync Jobs for Key Folders

- Keep critical folders (e.g., `Projects/` or `Photos/`) mirrored to another cloud or NAS: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Start with **copy** for safety; switch to **sync** when you trust the target.
- Schedule off-hours runs so mounts stay responsive while you work.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />


Mount pCloud once, tune cache, and keep your storage lean. RcloneView makes cloud drives feel local without risky full-sync overhead.

<CloudSupportGrid />
