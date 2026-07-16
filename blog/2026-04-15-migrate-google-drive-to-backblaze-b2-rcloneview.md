---
slug: migrate-google-drive-to-backblaze-b2-rcloneview
title: "Migrate Google Drive to Backblaze B2 — Transfer Files with RcloneView"
authors:
  - tayson
description: "Migrate Google Drive to Backblaze B2 with RcloneView — transfer files cloud-to-cloud, archive data cost-effectively, and verify the migration with a GUI."
keywords:
  - Google Drive to Backblaze B2
  - migrate Google Drive
  - Backblaze B2 backup
  - cloud migration tool
  - Google Drive export
  - RcloneView migration
  - cloud-to-cloud transfer
  - S3 archive Google Drive
  - Google Drive archiving
  - Backblaze cold storage
tags:
  - google-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Google Drive to Backblaze B2 — Transfer Files with RcloneView

> Google Drive is built for collaboration, not cold archiving — RcloneView migrates your Drive content directly to Backblaze B2 without touching your local disk, saving storage costs at scale.

Google Drive excels at real-time collaboration, but it's not designed for cost-efficient long-term archiving at scale. Backblaze B2 offers S3-compatible object storage at a fraction of Google's storage cost, making it a popular destination for archiving large datasets, video projects, and business records that don't require daily access. RcloneView handles the migration directly between both clouds — no local disk intermediary needed.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up Both Remotes

In RcloneView, add Google Drive first — **Remote tab > New Remote > Google Drive** — and authenticate via browser OAuth. Then add Backblaze B2: select it from the provider list and enter your Application Key ID and Application Key. Both remotes become active immediately.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Open both remotes side by side in RcloneView's dual-panel explorer. This direct view is valuable for planning the migration: verify what exists in your Drive folders on the left, confirm the target B2 bucket structure on the right, and identify which folders to prioritize before starting the transfer.

## Configuring the Migration Job

Open **Job Manager** and create a new sync or copy job. Set the source to your Google Drive folder (or a specific subfolder for incremental migration) and the destination to your Backblaze B2 bucket path.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Google Drive to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

For large migrations — a video production company moving 2 TB of completed projects from Drive to B2 — enable multi-thread transfers and increase the concurrent file count in the job's Advanced Settings. The **Dry Run** feature shows exactly which files will be transferred before the actual job runs, preventing accidental overwrites or skipped content. Enabling checksum verification ensures every file arrives intact on B2, which is especially critical for archiving where files may not be accessed for years.

## Verification and Cleanup After Migration

Once the transfer completes, use RcloneView's **Folder Compare** to compare the Google Drive source against the B2 destination. The comparison view highlights left-only files (not yet migrated), right-only files (already on B2), and equal files — giving you a clear, visual checklist before removing anything from Drive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive and Backblaze B2 after migration in RcloneView" class="img-large img-center" />

Running the migration job a second time after comparison is safe — rclone skips files that already exist at the destination with matching size and timestamp, so only remaining differences get transferred. This idempotent behavior makes large-scale migrations reliable even across multiple sessions.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add a Google Drive remote (OAuth browser auth) and a Backblaze B2 remote (Application Key credentials).
3. Open **Job Manager** and create a sync or copy job from Google Drive to B2.
4. Enable Dry Run to preview, then execute — use Folder Compare to verify completion.

Migrating to Backblaze B2 with RcloneView removes cloud egress complexity and gives you a verified, cost-efficient archive without writing a single CLI command.

---

**Related Guides:**

- [Migrate Backblaze B2 to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-google-drive-rcloneview)
- [Manage Backblaze B2 Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Backup Dropbox to Backblaze B2 — Affordable Storage with RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
