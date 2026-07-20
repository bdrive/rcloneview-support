---
sidebar_position: 3
description: Fix cases where RcloneView can’t access your external SSD on macOS by browsing /Volumes and creating a quick Alias shortcut.
keywords:
  - rcloneview
  - macos
  - external drive
  - offline backup
  - sync destination
  - alias remote
  - volumes
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - external-drive
  - alias
date: 2025-02-20
author: Jay
---

# I can't access an External SSD with RcloneView (macOS)

If RcloneView can’t reach your external SSD on macOS (you don’t see the drive or don’t know where to type its path), use this quick workaround. A temporary UX issue (fixed in the next release) hides the usual shortcut, but you can browse to the SSD manually and save it as an Alias (favorite) for one-click access later.

---

## Quick fix options (pick one)

- **Use the hotfix build (includes the UX fix):** [Download RcloneView 1.1.517 (macOS)](https://downloads.bdrive.com/rclone_view/builds/RcloneView-1.1.517.dmg) and install it to get the SSD path fix immediately. This is a temporary build shared for users hitting this issue before the next official release.
- **Stay on the current official release:** Follow the manual steps below to browse `/Volumes` and create an Alias to your SSD. This works on the current public build.

---

## Step-by-Step: Add Your SSD from /Volumes

You can see **`Local Disk`** in left pane of RcloneView.  

1) In the path bar, type `/Volumes` and press **Enter**. This is where macOS mounts external drives (e.g., Samsung T7).
2) In the `/Volumes` list, double-click your SSD (e.g., `SAMSUNG`). Some drives take a moment to load—wait for the folder to open.

<img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse volumes in mac system" class="img-large img-center" />

3) Confirm you are inside the SSD (the path bar should read `/Volumes/<your-drive>`).
4) Click the **☆** (Alias) icon in the path bar to bookmark this location.
5) Enter a simple name (e.g., `MySSD`) and 
6) click **Create**. This adds an Alias Remote that always opens your SSD root.
<img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat alias remote for external hdd" class="img-large img-center" />

7) The Alias opens in a new tab and also appears in the left list for fast reuse.

<img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open alias remote for external ssd" class="img-large img-center" />

---

## How to Use the SSD Alias in Backups

- When creating a Sync/Copy/Move job, pick the Alias remote you just made (e.g., `MySSD`) as the **destination** and your source remote (e.g., Google Drive, Dropbox, another local folder) as the **source**.
- The Alias points to the SSD root; you can choose or create a subfolder in that tab before starting the job.

---

## If the SSD Does Not Appear

- Make sure the SSD is mounted in Finder (unplug/replug if needed).
- Reopen `/Volumes` in the path bar and wait a few seconds for the drive list to populate.
- Still not visible? Restart RcloneView, then try `/Volumes` again. If it keeps failing, report it on the [RcloneView forum](https://forum.rcloneview.com).

---

## Related Guides

- Alias overview and other virtual remotes: [Alias Remote Guide](/howto/remote-storage-connection-settings/alias-remote)
- General Explorer controls and tabs: [Browse and Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
