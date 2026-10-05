---
slug: fix-mount-slow-file-open-vfs-cache-mode-rcloneview
title: "Fix Slow File Opening on Cloud Mounts — Tune VFS Cache with RcloneView"
authors:
  - alex
description: "Fix slow file opening on mounted cloud drives by tuning cache mode, cache size, and directory cache time in RcloneView's Mount Manager."
keywords:
  - fix slow cloud mount
  - mounted drive slow to open files
  - VFS cache mode
  - rclone mount performance
  - dir cache time
  - cloud drive lag
  - RcloneView mount
  - rclone GUI
  - mount troubleshooting
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - performance
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Slow File Opening on Cloud Mounts — Tune VFS Cache with RcloneView

> Most mount lag comes from cache settings, not from the cloud provider, and you can change them in one dialog.

A mounted cloud drive feels like a local disk until you double-click a large file and wait. Folders list slowly, applications hang on save, or media stutters. RcloneView exposes the VFS cache options behind each mount, so you can tune them per remote instead of guessing.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Check the Cache Mode First

Open Mount Manager from the Remote tab and edit the mount. Cache mode offers off, minimal, writes, and full. The default is writes, which caches files being written to the drive. If you mostly read the same files repeatedly, such as documents or media, full caches reads as well and can make second opens much faster. Off is the leanest setting but sends every read to the cloud.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager settings in RcloneView" class="img-large img-center" />

Edit and Delete are disabled while a drive is mounted, so unmount first, change the setting, then mount again.

## Size the Cache and Directory Time

Cache max size defaults to -1, meaning unlimited, which can fill a small disk. Set a limit that fits your free space, and use cache max age to control how long cached data stays valid. Dir cache time controls how long folder listings are remembered: a longer value makes browsing faster, but changes made by others take longer to appear.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the Explorer toolbar" class="img-large img-center" />

Picture an architect opening 300 MB drawings from a shared mount. Full cache mode plus a sensible size limit means the first open downloads the file and later opens read from local disk.

## Match the Tool to the Job

Mount is ideal for opening and editing individual files. For moving whole folders, a sync or copy job is usually faster and easier to monitor than dragging files through a drive. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license. On Windows the mount type defaults to cmount, and on Linux and macOS to nfsmount; Linux also needs FUSE installed.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Using a sync job for bulk transfers instead of a mount" class="img-large img-center" />

If problems persist, enable rclone logging under Settings, set the level to DEBUG, restart embedded rclone, and reproduce the issue.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open Mount Manager, unmount the slow drive, and click Edit.
3. Switch cache mode to full for read-heavy work and set a cache max size.
4. Raise dir cache time if browsing is slow, then Save and mount again.

With cache settings matched to how you work, a mounted cloud drive becomes far more responsive.

---

**Related Guides:**

- [VFS Cache — Mount Performance in RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Fix VFS Cache Disk Full Errors with RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Mount Cloud Storage as a Local Drive with RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
