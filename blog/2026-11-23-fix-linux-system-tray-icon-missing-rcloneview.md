---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Fix Missing System Tray Icon on Linux — Restore Background Control in RcloneView"
authors:
  - steve
description: "RcloneView tray icon missing on Linux? Install the AppIndicator library, enable tray support in your desktop, and get mounts and background jobs back."
keywords:
  - rcloneview tray icon missing linux
  - linux system tray icon not showing
  - libayatana-appindicator3-1
  - libappindicator3-1
  - gnome appindicator tray
  - rcloneview linux troubleshooting
  - cloud mount tray menu linux
  - background sync linux gui
  - rcloneview ubuntu tray
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
  - ubuntu
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Missing System Tray Icon on Linux — Restore Background Control in RcloneView

> No tray icon means no quick mount toggles and no easy way back to a minimized app. Here is how to bring it back.

On Windows and macOS the RcloneView tray icon simply appears. On Linux it depends on two things the app does not control: an AppIndicator library on the system and a desktop environment that displays indicator icons. When either one is missing, RcloneView still runs, but the icon that lists mounted drives, toggles mounts and reopens the window never shows up.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why the Icon Disappears

RcloneView is a Flutter desktop app. On Linux it needs a running X11 or Wayland session, GTK+ 3.0, and **libayatana-appindicator3-1** or **libappindicator3-1** for the system tray. The `.deb` and `.rpm` packages are built and tested against Ubuntu 22.04 LTS, so a minimal install, a different distro, or an AppImage run on a stripped-down system can be missing the indicator library.

The second cause is the desktop. Some environments, stock GNOME in particular, don't show AppIndicator icons until an indicator extension is enabled. The library can be installed and the icon still stays hidden.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager in RcloneView as a fallback when the Linux tray icon is missing" class="img-large img-center" />

## Step 1: Install the AppIndicator Library

On Debian, Ubuntu and their derivatives, install `libayatana-appindicator3-1` from your distribution's repositories (or `libappindicator3-1` on older releases). On Fedora and RHEL-based systems, install the equivalent ayatana or libappindicator GTK3 package your release provides. Confirm GTK+ 3 is present too.

Quit RcloneView completely and start it again. The tray is set up when the app launches, so a library installed while the app was open won't take effect until a restart.

## Step 2: Enable Indicator Support in Your Desktop

On GNOME, enable an AppIndicator/KStatusNotifierItem extension through your distribution's extension manager; Ubuntu ships one turned on by default. KDE Plasma, Xfce, Cinnamon and MATE show indicator icons through their own panel or notification-area widget. Make sure that widget is on the panel and hasn't been hidden.

If you use a tiling window manager, add a bar that supports StatusNotifierItem, or the icon has nowhere to appear.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote from the RcloneView Explorer on Linux" class="img-large img-center" />

## Step 3: Check Start-Minimized and Quit-on-Close Settings

Without a tray icon, **Start minimized** can make RcloneView look like it never started, because it launches straight into a tray you can't see. Until the icon works, open **Settings > General**, turn off Start minimized, and turn on **Quit on close** so closing the window doesn't leave a hidden process running.

You don't need the tray for core work. **Mount Manager** mounts and unmounts drives, **Job Manager** runs saved jobs, and **Job History** shows what ran and whether it finished.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView confirming background jobs on Linux" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html) as a `.deb`, `.rpm` or `.AppImage` for x86_64 or ARM64.
2. Install `libayatana-appindicator3-1` (or `libappindicator3-1`) and confirm GTK+ 3 is present.
3. Enable AppIndicator support in your desktop environment, then fully restart RcloneView.
4. Re-enable **Start minimized** once the icon appears and you can reach mounts from the tray.

Unlike mount-only tools, RcloneView also syncs and compares folders on the FREE license, and once the tray icon is back all of it is a click away.

---

**Related Guides:**

- [System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [How to Install RcloneView on Ubuntu and Debian Linux — Complete Setup Guide](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Fix Rclone Mount and FUSE Errors in RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
