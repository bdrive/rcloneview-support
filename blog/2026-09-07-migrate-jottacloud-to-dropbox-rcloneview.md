---
slug: migrate-jottacloud-to-dropbox-rcloneview
title: "Migrate Jottacloud to Dropbox — Transfer Files with RcloneView"
authors:
  - alex
description: "Move files from Jottacloud to Dropbox with RcloneView. Sync folders, verify transfers, and keep both remotes in one window."
keywords:
  - migrate jottacloud to dropbox
  - jottacloud to dropbox transfer
  - jottacloud dropbox migration
  - RcloneView jottacloud
  - RcloneView dropbox
  - cloud to cloud transfer
  - move files between cloud storage
  - jottacloud alternative
  - dropbox migration tool
  - european cloud storage migration
tags:
  - RcloneView
  - jottacloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Jottacloud to Dropbox — Transfer Files with RcloneView

> Move your files off Jottacloud and into Dropbox without downloading anything to your desktop first.

Teams that started on Jottacloud for its European data residency sometimes need to consolidate into Dropbox once collaboration with international partners becomes the priority. Downloading everything locally and re-uploading it wastes bandwidth and risks broken folder structures. RcloneView connects to both remotes at once and moves files directly between them, so the transfer happens cloud to cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Jottacloud and Dropbox Side by Side

Add both storage accounts through Remote tab > New Remote. Dropbox connects with a standard browser-based login — no API keys to manage. Once added, each remote gets its own tab in the Explorer panel, and you can open Jottacloud in one panel and Dropbox in another for a direct side-by-side view of both folder trees before you move anything.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView" class="img-large img-center" />

Browsing both accounts before starting the transfer lets you confirm folder naming conventions match, or plan a new structure on the Dropbox side if the source has grown disorganized over time.

## Running the Cloud-to-Cloud Transfer

Use the Sync wizard from the Home tab to configure Jottacloud as the source and Dropbox as the destination. Set the sync direction to one-way so Dropbox mirrors the source without RcloneView deleting anything back on Jottacloud. In Step 3, apply filters to skip file types you don't need in the new location — excluding `.iso` files or entire `.git/` folders keeps the transfer focused on the content that matters.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a cloud-to-cloud sync job from Jottacloud to Dropbox" class="img-large img-center" />

Run a Dry Run first. It lists exactly which files will copy without touching either account, which catches a misconfigured filter before it affects thousands of files.

## Verifying Every File Landed Correctly

After the transfer completes, open Folder Compare and point it at the same paths on Jottacloud and Dropbox. Files with matching size show as identical; anything that differs or failed to copy is flagged so you can re-run just those items. RcloneView mounts and syncs 90+ providers from a single window on Windows, macOS, and Linux, so this verification step works the same way regardless of which two clouds you're comparing.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Jottacloud and Dropbox folders after migration" class="img-large img-center" />

Job History records the size, speed, and file count for the completed sync, giving you a record to reference if anyone asks how the migration went.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Jottacloud and Dropbox remotes from the Remote tab.
3. Create a one-way sync job with Jottacloud as source and Dropbox as destination, then run a Dry Run.
4. Execute the sync and confirm results with Folder Compare.

Once verified, keep both remotes connected for a while so you can catch any file added to the old Jottacloud account before the switch is complete.

---

**Related Guides:**

- [Manage Jottacloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Migrate Jottacloud to Wasabi — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-wasabi-rcloneview)

<CloudSupportGrid />
