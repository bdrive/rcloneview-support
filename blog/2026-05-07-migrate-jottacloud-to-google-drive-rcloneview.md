---
slug: migrate-jottacloud-to-google-drive-rcloneview
title: "Migrate Jottacloud to Google Drive — Transfer Files with RcloneView"
authors:
  - tayson
description: "Step-by-step guide to migrating files from Jottacloud to Google Drive using RcloneView's cloud-to-cloud transfer — set up both remotes and run your migration job."
keywords:
  - Jottacloud migration
  - Jottacloud to Google Drive
  - RcloneView migration
  - cloud-to-cloud transfer
  - Jottacloud export
  - cloud storage migration
  - rclone Jottacloud
  - Google Drive import
tags:
  - jottacloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Jottacloud to Google Drive — Transfer Files with RcloneView

> Moving your files from Jottacloud to Google Drive is straightforward with RcloneView — connect both remotes and transfer directly in the cloud without downloading everything first.

Jottacloud is a Norwegian cloud storage service that has been popular for its unlimited storage offerings, but many users are now looking to migrate to more universally accessible platforms like Google Drive. Whether you are moving because of plan changes, pricing, or simply consolidating your cloud storage, RcloneView makes the migration process clean and reliable. There is no need to download all your files locally first — RcloneView transfers them directly from Jottacloud to Google Drive as a cloud-to-cloud operation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Your Jottacloud Remote

Click **New Remote** in RcloneView and select **Jottacloud** from the provider list. RcloneView will walk you through the authentication process — Jottacloud uses a device-based login flow where you sign in via a browser, and the resulting token is stored securely in RcloneView. After authentication, your Jottacloud account appears in the explorer, including your personal archive, backup folders, and any shared content.

Before starting the migration, browse your Jottacloud folder structure to understand how your content is organized. Note any folder names with special characters or deeply nested structures, as these can occasionally cause issues during large migrations.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a remote in RcloneView" class="img-large img-center" />

## Adding Google Drive

Click **New Remote** again and select **Google Drive**. RcloneView opens a browser tab for Google OAuth authorization — sign in with your Google account and grant the requested permissions. After authorization completes, the Google Drive remote is available in the explorer.

Create a destination folder in Google Drive before starting the migration — for example, `Jottacloud Import/` — to keep migrated files organized and separate from any existing content. This makes it easy to verify the migration result without confusion about which files came from where.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Google Drive and Jottacloud open side by side in RcloneView" class="img-large img-center" />

## Running the Migration Job

With both remotes configured, open the **Job Wizard** in the Job Manager. Set Jottacloud as the source (select the top-level folder or a specific subfolder you want to migrate) and the Google Drive destination folder as the target. Choose **Copy** mode rather than **Sync** mode for a migration — this ensures files are copied without deleting anything at the source.

Always run a **dry run** first to see exactly which files will be transferred. For large Jottacloud accounts with thousands of files, the dry run output helps you spot any potential issues before committing to the full transfer. Once satisfied, run the live job. RcloneView's **Job Manager** shows live progress, and **Job History** records the final transfer count and any errors.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Jottacloud to Google Drive migration job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Click **New Remote** > **Jottacloud** and complete the browser authentication.
3. Click **New Remote** > **Google Drive** and complete the OAuth authorization.
4. Create a destination folder in Google Drive for the migrated content.
5. Use the **Job Wizard** to create a copy job, run a dry run, then execute the full migration.

With RcloneView, migrating from Jottacloud to Google Drive is a one-time job that takes minutes to set up and runs automatically to completion.

---

**Related Guides:**

- [Manage Jottacloud — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Manage Google Drive — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Migrate Jottacloud to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
