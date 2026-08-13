---
slug: migrate-seafile-to-onedrive-rcloneview
title: "Migrate Seafile to OneDrive — Transfer Files with RcloneView"
authors:
  - morgan
description: "Move libraries from a self-hosted Seafile server to Microsoft OneDrive using RcloneView's dual-pane explorer and job wizard, with dry-run verification."
keywords:
  - Seafile migration
  - OneDrive
  - RcloneView
  - self-hosted to cloud
  - cloud-to-cloud transfer
  - Seafile to OneDrive
  - Microsoft 365 migration
  - rclone seafile onedrive
tags:
  - RcloneView
  - seafile
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Seafile to OneDrive — Transfer Files with RcloneView

> Retiring a self-hosted Seafile server for Microsoft OneDrive doesn't have to mean manual downloads and re-uploads — RcloneView connects both directly and moves libraries between them in a single job.

Teams that outgrow a self-hosted Seafile deployment often move to OneDrive to fold file storage into an existing Microsoft 365 subscription and offload server maintenance. RcloneView treats Seafile and OneDrive as peer remotes in the same window, so you can browse both, compare their contents, and run a controlled transfer instead of exporting libraries to a local disk first. RcloneView mounts and syncs 90+ providers from one window, on Windows, macOS, and Linux, so the same workflow applies whether your Seafile server sits on-premises or in a private data center.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Your Seafile Server

Open **New Remote** and select **Seafile**, then enter your server URL, username, and password. If two-factor authentication is enabled, supply the one-time token when prompted. Once connected, RcloneView lists every library you have access to — personal and shared — in the file explorer, with the same folder tree and file list you'd use for any other remote.

Encrypted libraries need their library password before RcloneView can read the contents. Test that access works on one small encrypted library before scheduling the full migration, since a missing password will surface as an empty folder rather than an obvious error.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Seafile remote in RcloneView" class="img-large img-center" />

## Adding Microsoft OneDrive

Add a second remote via **New Remote** > **OneDrive**. RcloneView opens a browser window for OAuth sign-in — authenticate with your Microsoft account and approve the requested permissions. For OneDrive for Business tenants, the same OAuth flow applies; no separate app registration is required for standard use.

Create a destination folder such as `Seafile Import/` in OneDrive before starting the transfer. Keeping migrated content isolated makes it easier to spot-check the results and avoids mixing migrated files with content already in your OneDrive root.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Seafile and OneDrive remotes open side by side in RcloneView" class="img-large img-center" />

## Running the Migration Job

With both remotes open, small libraries can be dragged across directly — drag-and-drop between two different remotes performs a copy, leaving the Seafile originals untouched. For a full server migration, use the four-step **Job Wizard** instead: set the Seafile library as source and your OneDrive folder as destination, then configure transfer count and equality checkers in Step 2.

Always run a **dry run** before the live transfer. It lists every file that will be copied without moving any data, which is the fastest way to catch a wrong source folder or an unexpectedly large library before committing to the transfer. Once the preview looks right, start the job and track progress in the Transferring tab; **Job History** keeps a permanent record of what moved and when.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Seafile to OneDrive migration job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Click **New Remote** > **Seafile** and enter your server URL and credentials.
3. Click **New Remote** > **OneDrive** and complete the OAuth authorization.
4. Run a dry run, then execute the migration job and confirm results in Job History.

Migrating from Seafile to OneDrive this way keeps every transfer auditable, so you always know exactly what left the old server and where it landed.

---

**Related Guides:**

- [Manage Seafile — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Manage OneDrive — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrate Seafile to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
