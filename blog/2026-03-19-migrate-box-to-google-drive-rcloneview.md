---
slug: migrate-box-to-google-drive-rcloneview
title: "Migrate Box to Google Drive — Transfer Files and Folders with RcloneView"
authors:
  - tayson
description: "Moving from Box to Google Drive? Transfer your entire Box account including folders, shared files, and archives to Google Drive with full verification using RcloneView."
keywords:
  - box to google drive
  - migrate box to gdrive
  - box migration tool
  - box to google workspace
  - switch from box
  - box file transfer
  - box to google shared drive
  - box cloud migration
  - box alternative google
  - transfer box files
tags:
  - RcloneView
  - box
  - google-drive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to Google Drive — Transfer Files and Folders with RcloneView

> Box has served you well, but Google Workspace makes more sense now. Transfer everything — personal files, shared folders, and department archives — to Google Drive without losing a single file.

Box is popular in enterprise environments, but many organizations consolidate into Google Workspace for tighter integration with Gmail, Calendar, and Docs. The migration needs to preserve folder structures, handle large datasets, and verify completeness. RcloneView connects to both Box and Google Drive natively.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Box and Google Drive

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and Google Drive" class="img-large img-center" />

## Migration Process

### 1) Map folder structure

| Box | Google Drive |
|-----|-------------|
| Personal folders | My Drive |
| Shared folders | Shared Drive |
| Department archives | Shared Drive folders |

### 2) Transfer folder by folder

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive" class="img-large img-center" />

### 3) Schedule large transfers off-peak

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule migration" class="img-large img-center" />

### 4) Verify completeness

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box migration" class="img-large img-center" />

## Box-Specific Considerations

- **Box file version history** doesn't transfer — only the current version migrates
- **Box Notes** are proprietary format — export them before migration
- **Shared links** won't carry over — update bookmarks post-migration
- **Large enterprises**: create batch jobs per department for manageable chunks

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Box** and **Google Drive** remotes.
3. **Transfer in batches** with verification.
4. **Keep Box active** during transition.

Clean migration, complete verification.

---

**Related Guides:**

- [Migrate Box to SharePoint](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Migrate Dropbox Business to Google](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
