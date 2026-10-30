---
slug: fix-mount-read-only-cannot-save-files-rcloneview
title: "Fix Cloud Mount Read-Only and Cannot Save Files — How to Resolve with RcloneView"
authors:
  - steve
description: "Mounted cloud drive won't let you save or edit files? Check RcloneView's Read only option, cache mode, permissions and FUSE to make your mount writable again."
keywords:
  - mount read-only cloud drive
  - cannot save files mounted drive
  - rclone mount read only
  - RcloneView mount troubleshooting
  - VFS cache mode writes
  - FUSE mount Linux
  - cloud drive write error
  - mount manager settings
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Cloud Mount Read-Only and Cannot Save Files — How to Resolve with RcloneView

> When a mounted cloud drive refuses saves, the cause is usually a mount setting or a permission, and both are quick to check.

You mounted a remote, opened a document, and saving fails, or files copy in but cannot be edited. Before blaming the cloud provider, look at how the mount was configured. RcloneView exposes every relevant option in one dialog, so you can find the cause without touching the command line. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Check the Read Only Option First

The mount settings include a **Read only** switch, off by default. If it was enabled when the mount was saved, every write is rejected. Open Mount Manager from the Remote tab, unmount the entry, and edit it. Edit and Delete are disabled while a drive is mounted, so unmounting is required before you can change anything.

Turn Read only off, then choose Save and mount.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager in RcloneView showing mount settings" class="img-large img-center" />

## Review the Cache Mode

The default VFS cache mode is **writes**, which buffers written files locally so applications can save normally. Setting it to off or minimal can break programs that expect to seek or rewrite files in place. If an editor fails on save, try writes or full.

Watch the cache location's free space as well. A full cache disk causes write failures that look like permission problems. If you suspect that, see the related guide on VFS cache disk-full errors below.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Configuring cache mode when mounting from the remote explorer" class="img-large img-center" />

## Rule Out Account and Platform Causes

Some remotes are read-only by nature. The HTTP remote only offers read access, and a shared folder you were only given view rights to cannot be written whatever the mount says. Test by uploading a file through the Explorer panel: if that fails too, the issue is the remote or its permissions, not the mount.

On Linux, mounting requires FUSE (fuse3 is recommended). If other users need access, enable **Allow other**. On Windows, a mount that appears as a network drive can behave differently with some applications, so try toggling that option.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for checking failed write operations" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Unmount the drive, open its entry in Mount Manager, and confirm Read only is off.
3. Set the cache mode to writes and confirm free disk space.
4. Test an upload in the Explorer to separate remote permissions from mount settings.

Most write failures trace back to one of these checks, and all of them take minutes.

---

**Related Guides:**

- [Fix Cloud Mount Disconnects and Drops with RcloneView](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)
- [Fix VFS Cache Disk Full Errors with RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Fix Slow File Open on Mounts — VFS Cache Mode with RcloneView](https://rcloneview.com/support/blog/fix-mount-slow-file-open-vfs-cache-mode-rcloneview)

<CloudSupportGrid />
