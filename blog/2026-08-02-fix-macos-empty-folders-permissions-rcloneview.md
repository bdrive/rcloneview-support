---
slug: fix-macos-empty-folders-permissions-rcloneview
title: "Fix macOS Empty Desktop and Documents Folders — Permission Fix with RcloneView"
authors:
  - robin
description: "Fix RcloneView showing empty Desktop, Documents, or Downloads folders on macOS. Grant the right privacy permissions and restore full file access."
keywords:
  - macOS empty folders fix
  - RcloneView macOS permissions
  - Desktop folder empty macOS
  - Documents folder empty macOS
  - macOS Full Disk Access
  - Privacy Security Files Folders
  - macOS cloud sync permissions
  - RcloneView troubleshooting
  - macOS file access denied
  - fix RcloneView macOS
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix macOS Empty Desktop and Documents Folders — Permission Fix with RcloneView

> If RcloneView shows your Mac's Desktop, Documents, or Downloads folder as empty, it's almost always a macOS privacy permission that hasn't been granted yet — not a sync problem.

Since Catalina, macOS locks Desktop, Documents, and Downloads behind Privacy & Security permissions, and any app that wants to read them — including RcloneView when it's browsing local folders as a sync source — has to be explicitly approved. Users setting up their first local-to-cloud backup job often hit this: the folder tree loads, but the file list stays empty even though the files are clearly on disk. RcloneView connects to and syncs 90+ cloud providers, but this particular issue lives entirely on the macOS side, and it's a two-minute fix.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why the Folders Look Empty

macOS treats Desktop, Documents, and Downloads as protected locations. An app gets a permission prompt the first time it tries to read one of them, and if that prompt is dismissed or denied — which is easy to do by accident during initial setup — the app silently gets an empty listing back instead of an error. RcloneView's Explorer panel will show the folder itself, and even the correct file count in some cases, but the underlying file list stays blank because the OS is withholding contents at the filesystem layer.

This is separate from any cloud remote issue. If your Google Drive or Dropbox remote also looks empty, that's a different problem — this fix specifically applies to local macOS folders used as a sync source or destination.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder view affected by macOS privacy permissions" class="img-large img-center" />

## Granting the Right Permissions

Open System Settings > Privacy & Security > Files and Folders, find RcloneView in the list, and enable the toggles for Desktop Folder, Documents Folder, and Downloads Folder individually. If RcloneView doesn't appear in the list yet, trigger the permission prompt by browsing to one of those folders in the app first — macOS only lists apps that have attempted access.

For persistent issues, or if you're syncing from locations outside the three protected folders (external drives, network shares), granting Full Disk Access under the same Privacy & Security pane is the more thorough fix. This covers Desktop, Documents, Downloads, and any other location the OS might otherwise restrict.

<img src="/support/images/en/blog/new-remote.png" alt="Granting macOS Files and Folders permission to RcloneView" class="img-large img-center" />

RcloneView must be fully restarted — not just the window closed — after changing these permissions. macOS only re-evaluates an app's file access at launch, so a quit-and-reopen is required before the folder contents will appear correctly.

## Verifying the Fix and Building Your Sync

After restarting, browse back to the previously empty folder — file and folder counts should now populate normally in the footer summary. Before running a real sync job, use Folder Compare against your intended cloud destination to confirm RcloneView can now see everything it should on the local side, catching any remaining access gaps before they turn into an incomplete backup.

Once permissions are confirmed working, build your sync job as usual: local folder as source, cloud remote as destination, with Dry Run enabled first to preview exactly what will transfer.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Building a local-to-cloud sync job after fixing macOS permissions" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open System Settings > Privacy & Security > Files and Folders.
3. Enable Desktop, Documents, and Downloads access for RcloneView, or grant Full Disk Access.
4. Fully quit and relaunch RcloneView, then verify the folder contents load correctly.

This permission model exists to protect user data on macOS, and once it's granted once, RcloneView keeps full, uninterrupted access to your local files for every sync job going forward.

---

**Related Guides:**

- [Fix macOS Too Many Open Files Error with RcloneView](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView on macOS Sequoia — Cloud Storage Sync](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [Fix Cloud Sync Missing Files After Transfer with RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
