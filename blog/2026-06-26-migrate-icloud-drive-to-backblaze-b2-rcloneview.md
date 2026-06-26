---
slug: migrate-icloud-drive-to-backblaze-b2-rcloneview
title: "Migrate iCloud Drive to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - casey
description: "Transfer files from iCloud Drive to Backblaze B2 using RcloneView. Step-by-step guide to back up your Apple cloud storage to affordable, vendor-independent object storage."
keywords:
  - iCloud Drive to Backblaze B2
  - migrate iCloud Drive Backblaze B2
  - iCloud backup Backblaze B2
  - transfer iCloud files to B2
  - iCloud Drive cloud migration RcloneView
  - RcloneView iCloud Backblaze B2
  - cloud to cloud transfer iCloud
  - Backblaze B2 iCloud backup tool
tags:
  - RcloneView
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate iCloud Drive to Backblaze B2 — Transfer Files with RcloneView

> Apple's iCloud Drive is convenient for device sync, but copying your files to Backblaze B2 creates a cost-effective, vendor-independent backup that RcloneView makes entirely GUI-driven.

Millions of users store photos, documents, and project archives in iCloud Drive through Apple's ecosystem. While iCloud works seamlessly across Apple devices, organizations and power users often need a secondary copy in durable object storage — for vendor diversity, longer retention windows, or a platform-agnostic backup strategy. Backblaze B2 is an S3-compatible object storage service that integrates naturally with RcloneView, letting you transfer content from iCloud Drive without any manual downloading, scripting, or third-party sync clients. Connect Backblaze B2 with full read/write access on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up iCloud Drive in RcloneView

iCloud Drive is supported in RcloneView via rclone's iCloud backend, which requires rclone v1.69 or later — the embedded rclone binary that ships with RcloneView already meets this requirement, so no separate installation is needed. To connect, open the **Remote** tab, click **New Remote**, and select iCloud Drive from the provider list. You'll authenticate with your Apple ID credentials and, if two-factor authentication is enabled on your account, enter the verification code when prompted. Once saved, your iCloud folders appear in the explorer panel just as they do on a Mac.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

Browse your iCloud Drive structure — Desktop, Documents, or any custom folder — to confirm the content scope before building a transfer job.

## Connecting Backblaze B2 as the Destination

Backblaze B2 connects through credential entry. In **New Remote**, choose Backblaze B2 and enter your **Application Key ID** and **Application Key** — both generated in your Backblaze account under the App Keys section. Once saved, you can navigate your B2 buckets in RcloneView's second explorer panel. With both iCloud Drive and Backblaze B2 open side by side, you have a clear visual of source and destination before a single file moves.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and Backblaze B2 open side by side in RcloneView" class="img-large img-center" />

## Running the Migration Transfer

Open the **Sync** wizard from the Home tab. Set your iCloud Drive folder as the source and your Backblaze B2 bucket (or a prefix within it) as the destination. In the Advanced Settings step, enable **checksum verification** to compare file hashes rather than timestamps alone — this is especially valuable for a one-time migration where data integrity matters most. You can also add a **max file age** filter to migrate only recent content if you want to exclude older, rarely accessed files on the first pass.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during an iCloud to Backblaze B2 migration in RcloneView" class="img-large img-center" />

Always run a **Dry Run** before the live transfer. RcloneView lists exactly which files it would copy or skip — a practical safety check when migrating a large iCloud Drive library where accidental overwrites or missed folders can be costly to unwind.

## Verifying the Migration with Folder Compare

After the transfer completes, use RcloneView's **Folder Compare** feature to confirm both sides match. Open the Compare view, set iCloud Drive on the left and your B2 bucket on the right, and let RcloneView surface any left-only, right-only, or size-mismatched files. A clean comparison — showing only same files — confirms your migration succeeded without gaps.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying iCloud Drive files match Backblaze B2 after migration" class="img-large img-center" />

For ongoing protection, the **PLUS license** lets you schedule a recurring sync job — weekly or daily — to capture any new iCloud Drive additions and keep your B2 copy current automatically.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add iCloud Drive as a new remote using your Apple ID credentials.
3. Add Backblaze B2 as a remote with your Application Key ID and Application Key.
4. Build a sync job: iCloud Drive as source, B2 bucket as destination, then run a **Dry Run** first.
5. Use **Folder Compare** to verify the migration, then schedule recurring backups as needed.

Migrating from iCloud Drive to Backblaze B2 with RcloneView gives your Apple files a durable, platform-independent home in object storage — protected, verifiable, and accessible from any device.

---

**Related Guides:**

- [Manage iCloud Drive with RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Manage Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrate iCloud Drive to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
