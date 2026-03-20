---
slug: mount-google-shared-drives-rcloneview
title: "Mount Google Shared Drives in Windows & macOS with RcloneView -- Full Access, No Sync Client Needed"
authors:
  - tayson
description: Mount any Google Shared Drive straight to Finder or File Explorer with RcloneView's guided workflow, bypassing Drive for Desktop limits while keeping admin-level control.
keywords:
  - google shared drive mount
  - mount shared drive windows
  - mount shared drive mac
  - rcloneview
  - rclone mount google drive
  - team drive windows
  - shared drive explorer
  - google workspace shared drive
  - rclone gui
  - mount team drive
tags:
  - RcloneView
  - google-drive
  - mount
  - productivity
  - workspace
unlisted: true
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Mount Google Shared Drives in Windows & macOS with RcloneView -- Full Access, No Sync Client Needed

> Give every team the Shared Drive they need without forcing a full sync client on their laptops.

Google Workspace Shared Drives often hold your design assets, handover folders, or compliance archives, yet Drive for Desktop only keeps a small cache and struggles with dozens of Shared Drives per user. RcloneView builds on rclone's Shared Drive support so you can mount exactly the drive you need as a real drive letter on Windows or a Finder volume on macOS, with auto-mount and VFS caching baked in.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Why Teams Need Shared Drive Mounting Without Drive for Desktop

- Drive for Desktop mirrors the whole drive, eating SSD space and leaving laptops offline when quotas are reached.
- Help desks have no way to hand contractors a single Shared Drive without granting account-wide sync rights.
- Engineers and media teams need predictable paths (X:\Marketing or /Volumes/Archive) for automations, scripts, and creative apps.

## How RcloneView Brings Shared Drives to Windows & macOS

RcloneView layers a GUI over rclone, so the Shared Drive picker, auth tokens, and mount flags are handled for you.

- Guided remote wizard lists every Shared Drive that your Google Workspace account can access and stores it securely. See the reference steps in [/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive](/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive).
- Mount Manager surfaces the options described in [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) so you do not have to memorize CLI syntax.
- Auto-mount lives in the Mount dialog; Launch at login is available in Settings -> General (documented in [/support/howto/rcloneview-basic/general-settings](/support/howto/rcloneview-basic/general-settings)).

## What You Need Before Mounting

| Requirement | Details |
| --- | --- |
| RcloneView + Rclone | Install the latest RcloneView bundle (includes rclone). |
| File system drivers | Windows uses WinFsp (bundled). macOS requires macFUSE; follow the prompts inside RcloneView. Check [/support/howto/FAQ/increase-file-handle-limit-on-macos](/support/howto/FAQ/increase-file-handle-limit-on-macos) for tuning limits. |


## Step-by-Step: Mount a Google Shared Drive with RcloneView

These steps mirror what admins already do in the CLI but in a friendly wizard so help desks can repeat them quickly.

### Step 1 -- Connect your Google Workspace account

1. Open **Remote Manager** -> **+ New Remote**.
2. Choose **Google Drive** -> **OAuth (Browser)**.
3. After the browser login completes, RcloneView stores the refresh token locally so the Shared Drive stays authorized.

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


### Step 2 -- Pick the Shared Drive you want

1. When prompted "Configure this as a Shared Drive?", select **Yes**.
2. RcloneView lists all Shared Drives returned by Google. Type the number or search to highlight the correct drive.
3. Save the remote with a descriptive name such as `shared_marketing` so teammates immediately know what it contains.

### Step 3 -- Configure the mount profile

1. Go to **Mount Manager** (or click the mount icon inside Remote Explorer).
2. Select the Shared Drive remote and pick the folder you want to mount (root or subfolder).
3. Set mount targets and options:
   - **Target**: keep `Auto` or assign a fixed drive letter/mount path with **Mount to local path**.
   - **Auto mount**: enable so RcloneView remounts on launch (pair with Launch at login in Settings).
   - **Advanced options**: set **Volume name** (optional label), **Mount type** (`cmount` default), **Network drive** (Windows), **Allow other** (Linux), and **Read only** if you want to block writes.
   - **Cache options**: choose **Cache mode** (`full` for best compatibility), set **Cache max size**, **Cache max age**, and **Dir cache time** using the nanosecond values shown in the dialog.

### Step 4 -- Launch and verify

1. Click **Save & Mount**. The status chip turns green once the mount is active.
2. In File Explorer or Finder, open the new drive. You should see the Shared Drive folders; large directories may take a moment while the directory cache fills based on your **Dir cache time** setting.
3. Use Mount Manager to unmount, open the mounted folder, or edit settings.

## Performance & Access Tips

- Set **Cache mode** to **Full** and size **Cache max size** generously for the smoothest editing experience.
- Use **Read only** for finance/legal drives to prevent accidental deletes; create a separate writable mount when needed.
- Tune **Dir cache time** based on change frequency (shorter for active drives, longer for archives).
- Reuse a fixed **Target** or **Mount to local path** so scripts and applications always find the same mount.

## Automate, Share, and Secure Access

RcloneView lets you keep Shared Drive mounts consistent across machines:

- Enable **Auto mount** on each mount and **Launch at login** in Settings so drives are ready when the OS starts.
- Use the Job Scheduler to mirror Shared Drive content into S3/Wasabi for off-site retention after business hours.
- Check Mount Manager status (Mounted vs. Unmounted) to verify connectivity before users open Office or Adobe.

## Troubleshooting & FAQ

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Drive disappears after sleep | OS unmounted WinFsp/macFUSE | Enable **Auto mount** and **Launch at login** so RcloneView remounts on startup. |
| Slow file open | Cache too small or on slow disk | Increase **Cache max size** and keep **Cache mode** on Full. |
| Permissions error on macOS | FUSE lacks Full Disk Access | Grant RcloneView and macFUSE Full Disk Access, then restart the mount (Apple menu -> System Settings -> Privacy & Security). |
| `too many open files` | macOS ulimit default 256 | Apply the plist tuning in [/support/howto/FAQ/increase-file-handle-limit-on-macos](/support/howto/FAQ/increase-file-handle-limit-on-macos). |
| Shared Drive list empty | Workspace admin disabled Drive API | Re-enable Drive API in Google Admin or ask for delegated access to the Shared Drive. |

## Ship Shared Drive Mounts Without Scripts

RcloneView makes Shared Drive access predictable: no bloated sync folders, no scripting, and no waiting on IT for each new mount. Give every team a clean drive letter or Finder volume today and keep your Google Workspace storage under control.


<CloudSupportGrid />
