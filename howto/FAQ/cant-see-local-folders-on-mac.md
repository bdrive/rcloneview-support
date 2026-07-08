---
sidebar_position: 2
description: Fix missing Desktop, Documents, or Downloads in RcloneView on macOS by granting permissions, enabling Full Disk Access, and collecting logs for support.
keywords:
  - rcloneview
  - macos
  - permissions
  - files and folders
  - full disk access
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Permissions
date: 2025-11-07
author: Jay
---
# Can’t See Local Folders on Mac (Desktop/Documents/Downloads)

If you just installed RcloneView on macOS and can’t see folders like **Desktop**, **Documents**, or **Downloads** in the left “Local Disk” pane, it’s almost always a macOS privacy permission issue. This guide shows how to allow access and what to try if folders still appear empty.

For a quick tour of the Explorer itself, see: [Browse and Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Why This Happens

Since macOS 10.15 (Catalina), Apple requires apps to ask for permission before accessing protected folders such as Desktop, Documents, and Downloads. If you clicked “Don’t Allow” or the app doesn’t yet have permission, those folders will show as empty in RcloneView.

## When a Permission Popup Appears

You may see a macOS dialog the first time you open RcloneView or when you click a protected folder.

1) If you see a popup asking to access the Documents folder, click **Allow**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac allow access to folder and files1" class="img-medium img-center" />

2) If you click a protected folder (e.g., Downloads) in the left pane and a similar prompt appears, click **Allow**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac allow access to folder and files2" class="img-medium img-center" />

3) If you clicked **Don’t Allow**, the folder will look empty until permission is granted.

<img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth folder by dont allow" class="img-large img-center" />

## Fix It: Grant Access in System Settings (First Action)

If the folders still look empty, or you accidentally clicked “Don’t Allow,” grant access from macOS System Settings.

**Steps (macOS Ventura, Sonoma, Sequoia):**

1. Open `System Settings > Privacy & Security > Files & Folders`.
2. Find **RcloneView**.
3. Enable toggles for the folders you want (e.g., **Documents Folder**, **Downloads Folder**).  
4. Reopen the folder in RcloneView.

<img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change setting for accessing to files and folders" class="img-large img-center" />

If you don’t see RcloneView in this list, launch RcloneView once, try opening a protected folder, and macOS should prompt again.

## Still Not Working? Add Full Disk Access (Second Action)

If Files & Folders toggles are enabled and you still can’t browse the contents, try adding RcloneView to **Full Disk Access**.

1. Open `System Settings > Privacy & Security > Full Disk Access`.
2. Click the `+` button and choose the **RcloneView** app from `Applications`.
3. Make sure the toggle is turned on for RcloneView.
4. Restart RcloneView and try again.

<img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac allow full disk access" class="img-medium img-center" />

## If You Still Need Help: Collect Logs and Contact Support

If access is still blocked after the steps above, please send us logs so we can help.

1. In RcloneView, open `Settings > Embedded Rclone`.
2. Under **Logging Configuration**, enable logging, pick a **Log folder**, keep the file name (e.g., `rclone.log`), and set **Log level** to **DEBUG**.
3. Click **Restart Embedded Rclone** to apply the changes.
4. Reproduce the issue (try to open the problem folder), then send the log file to [rcloneview@bdrive.com](mailto:rcloneview@bdrive.com) with a brief description of the steps you took.

:::caution Restart Required
Logs are only captured after you click **Restart Embedded Rclone**. Don’t skip this step.
:::

<img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting for collecting log file" class="img-large img-center" />

## Related Guides

- Managing local/cloud files in the Explorer: [Browse and Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- Full overview of Settings (including Embedded Rclone and Logging): [General Settings](/howto/rcloneview-basic/general-settings#logging-configuration)

---

If you need more help, email us at **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**.

