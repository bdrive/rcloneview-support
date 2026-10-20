---
slug: read-only-mount-protect-cloud-files-rcloneview
title: "Read-Only Mount — Protect Cloud Files from Accidental Changes in RcloneView"
authors:
  - casey
description: "Use RcloneView's Read only mount option to browse cloud storage from your file explorer without risking accidental edits or deletions."
keywords:
  - read only mount
  - mount cloud storage read only
  - protect cloud files
  - RcloneView mount
  - rclone mount read only
  - cloud drive prevent deletion
  - mount manager
  - virtual drive
tags:
  - RcloneView
  - feature
  - mount
  - cloud-storage
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Read-Only Mount — Protect Cloud Files from Accidental Changes in RcloneView

> Mount a remote as a local drive that can be browsed and copied from, but never changed.

A mounted cloud drive behaves like any other disk, which means a stray delete, a drag in the wrong direction, or an application that rewrites files can change your cloud data. When the goal is only to read, such as reviewing an archive or opening reference files, the safest drive is one that cannot be written to. RcloneView's mount settings include a Read only option for exactly this. RcloneView mounts and syncs 90+ providers from one window on Windows, macOS, and Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## When Read-Only Makes Sense

Consider a compliance team that keeps closed-case records in a bucket. Staff need to open and copy documents, but nobody should be able to alter them. Another example is a shared backup destination you want to inspect from a desktop without risking the backup itself.

In both cases a read-only mount lets people use ordinary tools such as the file explorer, media players, and viewers, while write attempts are refused. It does not replace permissions on the storage service, but it adds a safeguard on your own machine.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the RcloneView explorer" class="img-large img-center" />

## Enable Read Only in Mount Manager

Open Mount Manager from the Remote tab and choose New mount, or start from the Mount icon in an Explorer panel. Select the remote and subdirectory, then tick **Read only** in the options. On Windows you can pick a drive letter, and on macOS and Linux you set a local mount path. Choose Save and mount to attach the drive immediately.

Other options sit in the same dialog: volume name, cache mode (off, minimal, writes by default, or full), and on Windows a network-drive display. Because nothing is written, the default cache mode is rarely a concern for read-only use, though full can speed up repeated reads of the same files.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager with mount options in RcloneView" class="img-large img-center" />

## Changing or Removing the Mount

Edit and Delete are disabled while a mount is active, so unmount first from Mount Manager or the system tray menu. To make a drive writable later, unmount it, edit the entry, clear Read only, and mount again. You can keep two entries for the same remote, one read-only for browsing and one writable for deliberate work.

With a PLUS license, Auto mount can attach your drives at startup.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files between remotes in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add the remote you want to browse, then open Mount Manager from the Remote tab.
3. Create a new mount, select the remote and folder, and tick Read only.
4. Save and mount, then open the drive from your file explorer.

Read-only access lets you open everything and risk nothing.

---

**Related Guides:**

- [Auto Mount on Startup](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [VFS Cache for Mount Performance](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Fix Mount Drive Letter Conflicts on Windows](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
