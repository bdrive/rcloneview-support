---
slug: sync-two-google-drive-accounts-rcloneview
title: "How to Sync Two Google Drive Accounts — Personal and Work Drive Sync with RcloneView"
authors:
  - tayson
description: "Many people have multiple Google Drive accounts — personal, work, school. Learn how to sync files between them without downloading anything locally using RcloneView."
keywords:
  - sync two google drive accounts
  - google drive to google drive
  - transfer between google drives
  - multiple google drive sync
  - google drive personal to work
  - sync google accounts
  - google drive account transfer
  - google drive cross account
  - two google drive sync tool
  - google drive migration between accounts
tags:
  - RcloneView
  - google-drive
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How to Sync Two Google Drive Accounts — Personal and Work Drive Sync with RcloneView

> Your personal Google Drive has family photos. Your work Drive has project files. Your university Drive is expiring. Google doesn't let you sync between accounts natively — but RcloneView does.

Almost everyone ends up with multiple Google Drive accounts. A personal Gmail, a Workspace account from work, maybe a school account that's expiring. Google makes it easy to use each account individually, but provides no way to sync or transfer files between them. You end up downloading from one account and uploading to another — manual, slow, and it eats your local storage. RcloneView connects multiple Google Drive accounts simultaneously and transfers directly between them.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Add Multiple Google Drive Accounts

<img src="/support/images/en/blog/new-remote.png" alt="Add multiple Google Drive accounts" class="img-large img-center" />

Add each Google Drive account as a separate remote in RcloneView. Name them clearly — "GDrive-Personal", "GDrive-Work", "GDrive-School" — so you can tell them apart.

## Transfer Between Accounts

Open one account in the left pane, another in the right. Drag files and folders between them:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer between Google Drive accounts" class="img-large img-center" />

Files transfer directly through Google's servers — nothing downloads to your computer, and the transfer is fast.

## Common Use Cases

### Save files from an expiring school account

University Google Workspace accounts often get deleted after graduation. Transfer everything to your personal Drive before you lose access.

### Separate personal and work files

Accidentally stored personal files in your work Drive? Move them to your personal account without involving IT.

### Consolidate old accounts

Merge files from an old Gmail account into your current one. RcloneView makes it a simple drag-and-drop operation.

### Mirror important folders

Keep a specific folder synced between both accounts. Create a sync job that runs automatically:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync job between accounts" class="img-large img-center" />

## Schedule Ongoing Sync

For folders you want continuously synced between accounts, schedule automatic sync:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cross-account sync" class="img-large img-center" />

## Verify Transfers

Use Folder Comparison to confirm that files transferred correctly between accounts:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify cross-account transfer" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add both Google Drive accounts** as separate remotes.
3. **Open both accounts** in the two-pane explorer.
4. **Transfer directly** — no local download needed.

Your Google accounts, finally connected.

---

**Related Guides:**

- [Migrate Google Drive to OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Sync Google Drive to Dropbox](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)
- [Upload Large Files to Google Drive](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)

<CloudSupportGrid />
