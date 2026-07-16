---
slug: sync-google-drive-to-internet-archive-rcloneview
title: "Sync Google Drive to Internet Archive — Digital Preservation with RcloneView"
authors:
  - tayson
description: "Learn how to archive Google Drive files to the Internet Archive for long-term digital preservation using RcloneView. Ideal for researchers, journalists, and educators."
keywords:
  - Google Drive Internet Archive sync
  - digital preservation RcloneView
  - archive Google Drive files
  - Internet Archive rclone GUI
  - long-term cloud backup
  - researcher data archiving
  - Google Drive backup Internet Archive
  - RcloneView digital archive
tags:
  - google-drive
  - internet-archive
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Google Drive to Internet Archive — Digital Preservation with RcloneView

> The Internet Archive offers permanent, free storage for digital content — RcloneView makes it easy to push your Google Drive files there for long-term preservation.

Researchers archiving field data, journalists preserving source documents, and educators maintaining course materials all face the same challenge: Google Drive is convenient for active work, but it's not designed for permanent preservation. The Internet Archive (archive.org) is. It stores content indefinitely and makes it publicly (or privately) accessible for the long term. RcloneView connects both providers and lets you sync Google Drive content to the Internet Archive without touching the command line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Google Drive

Open RcloneView and go to **Remote Manager**. Click **New Remote** and select **Google Drive**. RcloneView opens your browser for OAuth authentication — sign in with your Google account and grant access. After authorization, the remote appears in Remote Manager. Open it to confirm your Drive files are visible.

If you need to archive a **Shared Drive**, configure the remote to point to the specific Shared Drive root rather than My Drive. Check the remote's advanced settings in RcloneView for the team drive option.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and Internet Archive remotes in RcloneView" class="img-large img-center" />

## Connecting Internet Archive

Back in **Remote Manager**, click **New Remote** and select **Internet Archive**. The Internet Archive uses email/password credentials (your archive.org account login) or S3-compatible API keys available from your account settings at archive.org. Enter the Access Key and Secret Key (S3 API keys for Internet Archive) in the configuration form and save.

Open the Internet Archive remote to verify the connection. Your existing items on archive.org will appear as top-level entries.

## Configuring the Archive Job

Go to **Jobs** and click **New Job**. Set Google Drive as the source — select the specific folder containing the data you want to preserve. Set the Internet Archive remote as the destination, specifying the item identifier where files should land.

In step 2 of the job wizard, configure options appropriate for archival:

- Enable **checksum verification** — data integrity is critical for preservation
- Set a moderate number of simultaneous transfers (2–4) to avoid overwhelming the Internet Archive's ingest pipeline
- Enable **Dry Run** first to review exactly what will be uploaded

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to Internet Archive" class="img-large img-center" />

## Running the Preservation Sync

After reviewing the Dry Run output in the Log tab, disable Dry Run and run the full job. RcloneView transfers files from Google Drive directly to the Internet Archive. Depending on file sizes and the Archive's ingest queue, large uploads may take time — the real-time progress panel keeps you informed.

For ongoing preservation workflows, create a recurring job (PLUS license required for scheduling) so that new files added to a Google Drive folder get automatically archived on a schedule — weekly, for example.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Google Drive to Internet Archive transfers" class="img-large img-center" />

## Use Cases

- **Academic researchers**: archive datasets and working documents at project completion
- **Journalists**: preserve source material and interview recordings permanently
- **Educators**: archive course content and digital learning resources
- **Nonprofits**: preserve grant applications, donor records, and institutional history

The Internet Archive's permanence makes it distinct from any commercial cloud service — content deposited there is designed to outlast individual organizations or subscription plans.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connect Google Drive via OAuth in **Remote Manager**.
3. Connect Internet Archive using your S3 API credentials from archive.org account settings.
4. Create a sync job from Google Drive to Internet Archive; run Dry Run first, then the full archive.

RcloneView gives archivists and researchers a reliable, auditable workflow for depositing Google Drive content into the permanent record.

---

**Related Guides:**

- [Cloud-to-Cloud Migration with RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Checksum Verified Cloud Migrations with RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
