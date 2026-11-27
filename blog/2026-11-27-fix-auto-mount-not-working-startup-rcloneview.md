---
slug: fix-auto-mount-not-working-startup-rcloneview
title: "Fix Auto Mount Not Working at Startup — Restore Cloud Drives with RcloneView"
authors:
  - steve
description: "Cloud drive missing after reboot? Fix RcloneView auto mount at startup: check license, Launch at login, drive letters, FUSE on Linux, and macOS permissions."
keywords:
  - auto mount not working
  - cloud drive not mounting at startup
  - rcloneview auto mount
  - mount cloud storage on boot
  - mounted drive missing after reboot
  - rclone mount startup fix
  - launch at login cloud drive
  - fuse mount error linux
  - drive letter conflict mount
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Auto Mount Not Working at Startup — Restore Cloud Drives with RcloneView

> If your cloud drive is missing after every reboot, a short checklist usually brings it back for good.

You set up a mount for Google Drive or an S3 bucket, it worked perfectly, and then after a restart the drive letter or mount folder is gone. Auto mount depends on several settings working together: the app must start, the mount must be marked for auto mount, and the operating system must allow it. This guide walks through each cause in RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Check the License and the Auto Mount Setting

**Auto Mount on Startup** is a PLUS license feature. On the FREE license, mounting and unmounting work fully, but each mount has to be started manually after launch. The footer of the main window shows which license is active.

With PLUS active, open **Mount Manager** from the Remote tab and confirm the mount has **Auto mount** enabled. Remember that Edit is disabled while a mount is active, so unmount it first, edit the settings, and choose **Save and mount**.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Enabling auto mount in RcloneView Mount Manager" class="img-large img-center" />

## Make Sure RcloneView Actually Starts

Auto mount runs when RcloneView launches, so the app itself must start at login. Under **Settings > General**, enable **Launch at login**. Turn on **Start minimized** if you prefer the app to open straight into the system tray. The tray menu then lists your mounted drives and lets you toggle each one.

Also check **Quit on close**. If it is on, closing the window exits the app and unmounts your drives. Turn it off to keep RcloneView, and its mounts, running in the background.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud folder from the RcloneView explorer" class="img-large img-center" />

## Fix Platform-Specific Blockers

**Windows:** If the mount uses a fixed drive letter that a USB stick or network share claimed first, the mount cannot attach. Set **Target** to Auto, or pick a letter nothing else uses.

**Linux:** Mounting requires FUSE (fuse3 recommended). Mounts use nfsmount by default, and the app needs a running X11 or Wayland desktop session. RcloneView is a GUI application and cannot start mounts as a headless systemd service.

**macOS:** If the mount point is inside Desktop, Documents, or Downloads, grant RcloneView access under **Privacy & Security > Files & Folders** or **Full Disk Access**, then restart the app.

## Read the Logs When Nothing Else Works

Expired OAuth tokens and network delays at boot can also stop a mount. Enable **rclone logging** under Settings > Embedded Rclone, set the log level to DEBUG, restart the embedded rclone, and reboot. The log shows the exact error. An authentication error means you should edit the remote and reconnect; a network error usually clears once you mount again from the tray.

<img src="/support/images/en/blog/new-remote.png" alt="Reconnecting a cloud remote in RcloneView after an authentication error" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Confirm a PLUS license and enable **Auto mount** on each mount in Mount Manager.
3. Turn on **Launch at login** and turn off **Quit on close** in Settings > General.
4. Resolve drive letter, FUSE, or macOS permission issues, then reboot to test.

Once the checklist passes, your cloud drives are ready every time you sit down to work.

---

**Related Guides:**

- [Auto Mount Cloud Storage at Startup with RcloneView](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [Fix Mount Drive Letter Conflicts on Windows with RcloneView](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)
- [Fix rclone Mount FUSE Errors with RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
