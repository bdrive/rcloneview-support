---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Fix Missing System Tray Icon on Linux — Restore Background Mounts and Jobs with RcloneView"
authors:
  - alex
description: "RcloneView tray icon not showing on Linux? Learn how AppIndicator libraries, desktop settings, and RcloneView options restore tray mounts and background jobs."
keywords:
  - rcloneview tray icon missing linux
  - linux system tray icon not showing
  - libayatana-appindicator3-1
  - appindicator tray icon gnome
  - rcloneview linux troubleshooting
  - rclone gui system tray linux
  - background cloud sync linux
  - mount manager system tray
  - rcloneview start minimized
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Missing System Tray Icon on Linux — Restore Background Mounts and Jobs with RcloneView

> If RcloneView runs on Linux but its tray icon never appears, the cause is almost always a missing AppIndicator library or a desktop that hides tray icons.

The RcloneView system tray icon is more than decoration. It lists your mounted drives, toggles mount and unmount, starts new mounts, and keeps the app reachable while jobs run in the background. When the icon is missing on Linux — common on fresh Ubuntu, Fedora, or minimal desktop installs — users either keep the main window open all day or lose track of the app after closing it. Here is how to diagnose and fix it.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why the Tray Icon Disappears

On Linux, RcloneView integrates with the desktop through D-Bus and AppIndicator. That requires one of two libraries: **libayatana-appindicator3-1** or **libappindicator3-1**. If neither is installed, the app itself still opens — it needs GTK+ 3.0 and an X11 or Wayland session for that — but the tray icon has nothing to register with.

The second cause is the desktop environment. Some desktops, GNOME in particular, do not show AppIndicator icons out of the box and need an AppIndicator extension enabled. KDE Plasma, Xfce, Cinnamon, and MATE generally display them without extra steps.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView Mount Manager used when the Linux tray icon is unavailable" class="img-large img-center" />

## Step-by-Step Fix

1. **Install an AppIndicator library.** Use your distribution's package manager to install libayatana-appindicator3-1 (or libappindicator3-1 on distributions that still ship it). Package names differ slightly between distributions, so search your package manager for "appindicator".
2. **Enable tray support in your desktop.** On GNOME, turn on an AppIndicator/KStatusNotifierItem extension, then log out and back in.
3. **Restart RcloneView completely.** Quit the app — not just close the window — and relaunch it so it registers with the tray on startup.

If the icon still does not appear, open the **Log** tab in the bottom Info View for errors, or enable rclone logging at DEBUG level under Settings > Embedded Rclone to collect details for support.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote from the RcloneView explorer on Linux" class="img-large img-center" />

## Check the Settings That Depend on the Tray

Two General settings interact with the tray. **Start minimized** launches RcloneView straight into the tray — without a working tray icon, the app can seem to not start at all. **Quit on close** decides whether the close button exits the app or keeps it running in the background. Until the tray is fixed, turn Start minimized off and keep Quit on close in mind so running jobs are not stopped by accident.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History confirming background jobs completed" class="img-large img-center" />

## Confirm Background Work Is Running

Once the icon is back, close the main window and check that the tray menu still lists your mounts. Jobs continue in the background and a notification appears when each one finishes. Afterward, **Job History** shows whether each run completed, errored, or was canceled. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux — and the tray is what keeps that window out of your way.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html) as a .deb, .rpm, or .AppImage.
2. Install libayatana-appindicator3-1 or libappindicator3-1 with your distribution's package manager.
3. Enable AppIndicator support in your desktop environment if it hides tray icons.
4. Fully restart RcloneView and confirm your mounts appear in the tray menu.

With the tray working, your cloud drives and sync jobs stay one click away without occupying your screen.

---

**Related Guides:**

- [System Tray and Background Sync in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [Install RcloneView on Ubuntu and Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Fix Rclone Mount FUSE Errors with RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
