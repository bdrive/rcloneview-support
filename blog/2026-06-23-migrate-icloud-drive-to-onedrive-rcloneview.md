---
slug: migrate-icloud-drive-to-onedrive-rcloneview
title: "Migrate iCloud Drive to OneDrive — Transfer Files with RcloneView"
authors:
  - alex
description: "Step-by-step guide to migrating iCloud Drive files to Microsoft OneDrive using RcloneView's cloud-to-cloud sync, dry-run preview, and folder-compare verification tools."
keywords:
  - iCloud Drive to OneDrive migration
  - migrate iCloud to Microsoft OneDrive
  - iCloud Drive OneDrive transfer
  - switch from iCloud to OneDrive
  - cloud migration Apple Microsoft
  - iCloud Drive backup OneDrive
  - RcloneView iCloud migration
  - move files from iCloud to OneDrive
  - cross-platform cloud file migration
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - onedrive
  - macos
  - cloud-migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate iCloud Drive to OneDrive — Transfer Files with RcloneView

> Switching from Apple's iCloud ecosystem to Microsoft OneDrive doesn't have to mean manually downloading and re-uploading gigabytes of files—RcloneView runs the migration as a direct cloud-to-cloud transfer.

When teams standardize on Microsoft 365, or when individual users move from Mac-centric workflows to Windows, getting iCloud Drive files into OneDrive is the first practical hurdle. Downloading everything to a local disk and re-uploading it is slow, interruption-prone, and leaves you with no easy way to verify that every file arrived intact. RcloneView handles this as a server-side transfer with built-in progress tracking, dry-run preview, and folder-compare verification.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Move from iCloud Drive to OneDrive?

iCloud Drive works seamlessly within Apple hardware but offers limited native integration outside that ecosystem. OneDrive, by contrast, is embedded in Windows File Explorer, connects directly to Microsoft Office and Teams, and works across Windows, macOS, iOS, and Android with consistent sync behavior. Organizations rolling out Microsoft 365 often require employees to move existing file libraries into OneDrive so collaboration, version history, and access policies all flow through a single managed system.

iCloud Drive support in RcloneView requires rclone v1.69 or later. RcloneView ships with an embedded rclone binary that already meets this requirement, so there is no separate rclone installation step before you can begin.

<img src="/support/images/en/blog/new-remote.png" alt="Adding both iCloud Drive and OneDrive as remotes in the RcloneView Remote Manager" class="img-large img-center" />

## Setting Up Both Remotes in RcloneView

Start by adding your iCloud Drive remote: go to the **Remote** tab, click **New Remote**, and choose **iCloud Drive**. Follow the on-screen prompts to authenticate with your Apple account. Then add your OneDrive remote in the same way — OneDrive uses OAuth browser login, so a browser window opens for your Microsoft account sign-in, and the remote is saved once authorization completes.

With both remotes registered, open them side by side in the Explorer panels. This gives you a live view of both file trees before any transfer begins. Use **Get Size** on the iCloud Drive root to confirm the total data volume, and scan folder structures to spot any naming differences or deeply nested paths that might behave differently on OneDrive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and OneDrive displayed side by side in the RcloneView two-panel Explorer for cloud-to-cloud transfer" class="img-large img-center" />

## Running the Migration with a Sync Job

Create a new Sync job from the **Home** tab. Set iCloud Drive (or a specific subfolder) as the source and the target OneDrive path as the destination. Before executing, run a **Dry Run**: RcloneView lists every file and folder it would transfer without actually moving anything. On a 50 GB iCloud library this scan takes only a few minutes and surfaces any oversized files or filename characters that OneDrive handles differently.

Unlike mount-only tools, RcloneView also syncs and compares folders on the FREE license—so the full migration workflow, from dry-run through live transfer to verification, requires no paid upgrade.

Once the dry-run output looks correct, start the live transfer. The **Transferring** tab shows progress, speed, and the current file in real time. If the connection drops, simply re-run the same job: rclone skips files that already exist at the destination with matching size, so the transfer resumes efficiently from where it stopped.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view in RcloneView confirming iCloud Drive and OneDrive folder contents match after migration" class="img-large img-center" />

## Verifying the Migration with Folder Compare

After the Sync job finishes, open **Folder Compare** from the **Home** tab and point it at the same iCloud Drive source and OneDrive destination. The comparison engine shows which files are identical, which differ in size, and any that appear only on one side. Working through the left-only and right-only filters is the fastest way to confirm zero-data-loss without spot-checking files manually.

If you are running a phased migration—still actively using iCloud Drive on some devices while transitioning others to OneDrive—PLUS license users can attach a schedule to the sync job. Any new files added to iCloud Drive replicate to OneDrive automatically on each scheduled run until the cutover is complete.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Drive to OneDrive sync job in RcloneView for a phased migration transition" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your **iCloud Drive** remote via **Remote** > **New Remote** and complete Apple account authentication.
3. Add your **OneDrive** remote via OAuth browser sign-in.
4. Create a Sync job with iCloud Drive as source and OneDrive as destination; run **Dry Run** first.
5. After the live transfer, use **Folder Compare** to confirm all files migrated correctly.

A complete migration to OneDrive gives you consistent access across Windows, Microsoft 365, and Teams—without leaving files split across two services indefinitely.

---

**Related Guides:**

- [Manage iCloud Drive Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Manage OneDrive — Cloud Sync & Backup with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrate iCloud Drive to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
