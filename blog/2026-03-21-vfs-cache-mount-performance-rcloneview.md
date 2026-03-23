---
slug: vfs-cache-mount-performance-rcloneview
title: "VFS Cache — Boost Mount Performance for Cloud Drives in RcloneView"
authors:
  - tayson
description: "Configure VFS cache modes in RcloneView to improve mounted cloud drive performance. Learn minimal, writes, and full cache strategies for your workflow."
keywords:
  - VFS cache
  - mount performance
  - cloud drive speed
  - rclone cache
  - VFS modes
  - cache optimization
  - mounted cloud storage
  - disk cache strategy
  - performance tuning
  - file access optimization
tags:
  - RcloneView
  - vfs
  - mount
  - performance
  - feature
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# VFS Cache — Boost Mount Performance for Cloud Drives in RcloneView

> Mounted cloud drives feel slow by default—VFS caching in RcloneView trades disk space for speed, letting you work at local drive speeds.

When you mount a cloud drive (Google Drive, Dropbox, AWS S3) through RcloneView, every file access hits the network. This works but feels sluggish—opening a document takes a second or two, listing folders stalls, and reading files feels bottlenecked. VFS cache solves this by caching frequently accessed files locally.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Is VFS Cache?

VFS (Virtual File System) cache stores recently accessed files and folder metadata on your local disk. When you open a file from a mounted cloud drive, RcloneView checks the cache first—instant access if it's there, network fetch if it's not. As you work, the cache grows; older entries are evicted to make room.

This simple strategy removes the network latency from common operations.

## VFS Cache Modes

RcloneView supports three cache modes, each balancing speed vs. disk usage:

### Mode 1: Off (No Cache)
Every access hits the network. Safest for dynamic files, slowest for repeated access. Use this only if disk space is critical or cache conflicts matter.

### Mode 2: Minimal Cache
Caches file metadata (names, sizes) and recently opened files. Fast for folder navigation and repeated reads. Uses minimal disk—typically under 1 GB for most workflows.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView remote explorer and mount interface" width="600" />

**Best for**: Document editing, photo browsing, regular file access on limited-disk machines.

### Mode 3: Writes Cache
Like minimal, but also caches write operations. Files you've just modified stay local before background sync. Dramatically speeds up workflows with frequent writes.

**Best for**: Content creation, video editing, bulk file operations—high volume changes before cloud sync.

### Mode 4: Full Cache
Aggressive caching—all accessed files cached permanently until manually cleared. Fastest for repeated access, largest disk footprint. Requires manual cache management.

**Best for**: Archived data, read-heavy workflows, machines with plenty of disk space.

## Configuring VFS Cache in RcloneView

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView cloud-to-cloud transfer configuration" width="600" />

Open RcloneView and navigate to a mount configuration:

1. Select your cloud remote (e.g., Google Drive)
2. Go to **Advanced Settings** → **VFS Cache**
3. Choose cache mode: Minimal, Writes, or Full
4. Set cache directory (default: `/tmp/rcloneview-cache` on Linux, `%TEMP%\rcloneview-cache` on Windows)
5. Configure cache size limit (e.g., 10 GB)—RcloneView auto-evicts old files when exceeded
6. Enable cache backend if using local SSD for extra speed

Apply and remount—performance instantly improves.

## Cache Directory Best Practices

- **Place cache on fast storage**: SSD preferred over HDD
- **Separate from system**: Use a dedicated partition to avoid filling your OS drive
- **Monitor disk usage**: Check cache size regularly; increase limit if evictions are frequent
- **Clean periodically**: Clear old caches if you stop using a remote (safe—cache rebuilds)

## Real-World Performance Gains

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView monitoring and performance tracking" width="600" />

With no cache, opening a 50 MB folder listing takes 2-3 seconds. With minimal cache, it's instant on the second access. Writing to a mounted drive? With writes cache enabled, you see local disk speeds (milliseconds) instead of network latency (seconds).

Trade-off: Requires 5-50 GB disk space depending on your workflow. For most users, this is worthwhile.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a new mount for your cloud storage.
3. In Advanced Settings, enable Minimal cache (start conservative).
4. Remount and test—open files, browse folders, gauge speed improvement.
5. If workflow involves heavy writes, upgrade to Writes cache mode.
6. Monitor cache hit rate in the stats panel; adjust size limits as needed.

VFS cache is one of RcloneView's hidden power features—small tweak, massive speed boost.

---

**Related Guides:**

- [Mount Cloud Storage as Local Drive — Complete Guide in RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Fix Slow Cloud Transfers — Speed Up Sync in RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Alias Remote — Create Shortcuts and Custom Paths in RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
