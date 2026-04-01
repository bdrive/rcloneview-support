---
slug: migrate-box-to-google-drive-rcloneview
title: "Migrate Box to Google Drive with RcloneView"
authors:
  - tayson
description: "Move files from Box to Google Drive with RcloneView. A complete guide for teams switching from Box to Google Workspace — transfer folders, preserve structure, and verify data."
keywords:
  - migrate box to google drive
  - box to google drive migration
  - rcloneview box google drive
  - move files from box to google drive
  - rclone box google drive
  - switch from box to google workspace
  - box google drive transfer
  - box alternative google drive
  - box migration guide
  - google workspace from box
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-migration
  - migration
  - guide
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to Google Drive with RcloneView

> Organizations switching from Box to Google Workspace need a reliable way to move years of files without data loss. RcloneView transfers your entire Box folder structure to Google Drive — preserving paths, maintaining file integrity, and giving you live progress updates throughout.

Box is a capable enterprise file platform, but many teams consolidating around Google Workspace want their files in Google Drive — where Docs, Sheets, and Slides live natively. Migrating manually is impractical at any meaningful scale. RcloneView connects both Box (via OAuth) and Google Drive (via OAuth) and copies files directly between them with checksum verification and resumable transfers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Migration Planning

Before starting, inventory what you're migrating:

- **Box size** — check Box Admin Console for total storage usage
- **Shared folders** — collaborator permissions won't transfer (Google Drive uses different sharing)
- **File types** — most file types transfer without conversion; Box Notes require manual handling
- **Collaborators** — notify stakeholders of new Google Drive paths before cutover

## Step 1 — Connect Box to RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Connect Box to RcloneView" class="img-large img-center" />

1. Open RcloneView and click **New Remote**.
2. Select **Box** as the remote type.
3. Click **Authorize** — a browser window opens for OAuth login to Box.
4. Log in and approve access.
5. Name the remote `box-old` and save.

## Step 2 — Connect Google Drive to RcloneView

1. Click **New Remote** again.
2. Select **Google Drive**.
3. Click **Authorize** — a browser window opens for Google OAuth.
4. Log in to the target Google account and grant access.
5. Choose your scope (My Drive, a specific Team Drive, or a Shared Drive).
6. Name the remote `gdrive-new` and save.

Both remotes now appear in RcloneView's dual-pane interface.

## Step 3 — Explore and Map Folder Paths

Navigate your Box structure in the left panel and your Google Drive in the right panel. Decide where the Box content should land in Google Drive. Common mapping patterns:

| Box Path | Google Drive Path |
|----------|-----------------|
| `box-old:/All Files/` | `gdrive-new:/Box Migration/` |
| `box-old:/Marketing/` | `gdrive-new:/Marketing/` |
| `box-old:/Projects/` | `gdrive-new:/Projects/` |

Creating a top-level `Box Migration` folder in Google Drive is recommended for the initial transfer — it keeps migrated data organized and separate from existing Drive content.

## Step 4 — Run the Migration

1. Open **Jobs** in RcloneView.
2. Set **Source** to your Box path (e.g., `box-old:/All Files/`).
3. Set **Destination** to your Google Drive path (e.g., `gdrive-new:/Box Migration/`).
4. Select **Copy** mode — files are copied without deleting Box.
5. Enable **Checksum verification** for data integrity.
6. Click **Run**.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Box to Google Drive migration in progress" class="img-large img-center" />

RcloneView shows real-time progress: files transferred, transfer speed, and estimated time remaining.

## Step 5 — Handle the Google Drive API Rate Limits

Google Drive limits the rate at which files can be uploaded. For large Box libraries (thousands of files):

- **Reduce concurrent transfers** to 2–3 to avoid hitting rate limits.
- **Run overnight** — larger jobs benefit from 8+ hours of uninterrupted transfer.
- **Use bandwidth throttling** — limit upload speed if Box API rate limits kick in.

If you see `429 Too Many Requests` errors, RcloneView retries automatically with exponential backoff.

## Step 6 — Verify the Migration

After the job completes, use **Folder Comparison** to verify that every Box file is in Google Drive:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to Google Drive migration" class="img-large img-center" />

Files appearing only on the Box side need to be re-transferred. Re-run the job — rclone skips files already present in Google Drive and only copies missing ones.

## Step 7 — Migrate Collaborator Access

Rclone (and RcloneView) transfers file content but not sharing permissions. After the migration:

1. In Google Drive, share migrated folders with the appropriate team members.
2. For Shared Drives (Team Drives), add members to the drive — all files inherit access.
3. Update any Box links in emails, wikis, or ticketing systems to point to the new Google Drive paths.

## Step 8 — Decommission Box

Once all files are verified in Google Drive:

1. Export Box's audit logs for compliance archiving.
2. Notify the Box admin to deactivate accounts.
3. Cancel the Box subscription.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connect Box and Google Drive** using their respective OAuth flows in RcloneView.
3. **Map your folder structure** and create a destination folder in Google Drive.
4. **Copy, verify, then cut over** — a phased approach prevents data loss.

Box to Google Drive in a few jobs. No migration service, no scripting, no specialist required.

---

**Related Guides:**

- [Migrate Box to SharePoint/OneDrive](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Mount Box Storage as a Network Drive](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)
- [Cloud-to-Cloud Migration with RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
