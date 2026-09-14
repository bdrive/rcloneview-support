---
slug: fix-mount-stale-files-dir-cache-rcloneview
title: "Fix Mount Showing Outdated Files — Dir Cache Time Explained with RcloneView"
authors:
  - morgan
description: "Fix a mounted cloud drive showing outdated or missing files in RcloneView by tuning Dir cache time and VFS cache mode correctly."
keywords:
  - mount showing old files
  - RcloneView dir cache time
  - stale mounted drive files
  - fix outdated mount listing
  - cloud drive not refreshing
  - VFS cache mode mismatch
  - RcloneView mount troubleshooting
  - directory cache cloud mount
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

# Fix Mount Showing Outdated Files — Dir Cache Time Explained with RcloneView

> A mounted cloud drive that still shows a deleted file or hides a brand-new one usually isn't broken — its directory cache just hasn't expired yet. Here's how to fix it in RcloneView.

When you mount a remote as a local drive, RcloneView doesn't re-list every folder on every click — it holds a short-lived directory cache so browsing feels instant instead of round-tripping to the cloud provider on each keystroke. That's great for speed, but it means changes made from another device, another RcloneView window, or the provider's own web app can take a moment to show up in the mounted folder. This guide covers when that delay is normal and how to tune it when it isn't.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Understanding Dir Cache Time

RcloneView's mount configuration includes a **Dir cache time** setting, which controls how long a folder listing stays valid before the mount re-checks the remote for changes. This is separate from the VFS **Cache mode** setting (off / minimal / writes / full), which governs file content caching rather than directory structure. A short Dir cache time means the mount reflects remote changes almost immediately but issues more list calls to the provider; a long Dir cache time reduces API calls at the cost of a longer delay before new or deleted files appear.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount configuration options including Dir cache time in RcloneView" class="img-large img-center" />

If you're mounting a remote that multiple people or devices write to simultaneously — a shared Google Drive folder, for example — the default cache window can make it look like RcloneView "missed" a file that was actually added seconds ago from another location. It hasn't missed anything; the mount just hasn't refreshed that folder's listing yet.

## Fixing a Mount That Won't Show New Files

Start by manually refreshing before assuming there's a real problem. In the Explorer panel or the OS file browser pointed at the mount, forcing a folder reload (F5, or navigating out and back into the directory) often surfaces changes immediately without waiting for the cache to expire on its own. If files still don't appear after a manual refresh, the mount itself may need to be unmounted and remounted through **Mount Manager**, since a stuck rclone VFS process can occasionally hold an even older listing than the configured Dir cache time would suggest.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Refreshing a mounted remote folder listing in RcloneView" class="img-large img-center" />

For remotes where near-real-time visibility matters more than raw API efficiency, lower the Dir cache time value in the mount's Edit settings before saving and remounting. There's a trade-off here: setting it too aggressively low on a busy remote increases the number of listing requests RcloneView sends, which can trigger provider-side rate limits on services that cap API calls per minute.

## Choosing Cache Mode Alongside Dir Cache Time

Dir cache time and VFS Cache mode solve different problems, so fixing one without checking the other often leaves the underlying issue half-solved. If deleted files still show up as accessible in the mount (rather than new files failing to appear), that's more likely a Cache mode symptom — the **writes** default caches recently written file content locally, while **full** caches read content too, and either can make a locally-cached copy outlive the remote's current state until the cache validates it. Matching a shorter Dir cache time with a Cache mode appropriate to how the remote is actually used resolves most stale-listing complaints.

<img src="/support/images/en/blog/new-remote.png" alt="Adjusting mount cache settings for a remote in RcloneView" class="img-large img-center" />

RcloneView mounts and syncs 90+ providers from the same window on Windows, macOS, and Linux, so these cache settings apply the same way whether the mount points at Google Drive, an S3 bucket, or a self-hosted WebDAV server.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open **Mount Manager**, select the affected mount, and check its current Dir cache time value.
3. Lower Dir cache time for remotes that change frequently from multiple sources, and unmount/remount to apply it.
4. Review the Cache mode setting alongside it if stale file *content*, not just stale listings, is the actual symptom.

A mount that reflects the cloud accurately, on a schedule that matches how the remote is really used, beats guessing at "why isn't this syncing" every time.

---

**Related Guides:**

- [VFS Cache — Boost Mount Performance for Cloud Drives in RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Fix VFS Cache Disk Full Errors — Manage Mount Cache with RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Fix Rclone Mount and FUSE Errors in RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
