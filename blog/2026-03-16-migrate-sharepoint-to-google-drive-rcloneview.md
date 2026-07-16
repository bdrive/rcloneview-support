---
slug: migrate-sharepoint-to-google-drive-rcloneview
title: "Migrate SharePoint to Google Drive — Transfer Document Libraries with RcloneView"
authors:
  - tayson
description: "Switching from Microsoft 365 to Google Workspace? Transfer SharePoint document libraries and OneDrive files to Google Drive and Shared Drives using RcloneView."
keywords:
  - sharepoint to google drive
  - migrate sharepoint to gdrive
  - sharepoint migration tool
  - microsoft to google migration
  - sharepoint to google workspace
  - sharepoint document library transfer
  - office 365 to google
  - sharepoint google drive sync
  - cross platform cloud migration
  - enterprise cloud migration
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate SharePoint to Google Drive — Transfer Document Libraries with RcloneView

> Your organization is moving from Microsoft 365 to Google Workspace. SharePoint libraries, OneDrive personal files, and years of team documents all need to land in Google Drive intact. Here's how.

Migrating from SharePoint to Google Drive is the reverse of one of the most common enterprise cloud migrations. Whether driven by cost, platform preference, or organizational change, the challenge is the same: thousands of files in structured document libraries need to transfer cleanly to Google Drive and Shared Drives. RcloneView handles both sides natively.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Planning the Migration

### Structure mapping

| SharePoint | Google Workspace |
|-----------|-----------------|
| Document Libraries | Shared Drives |
| OneDrive (personal) | My Drive (personal) |
| Team Sites | Shared Drive per team |
| Shared files | Shared Drive folders |

### Connect both platforms

<img src="/support/images/en/blog/new-remote.png" alt="Connect SharePoint and Google Drive" class="img-large img-center" />

Add your SharePoint/OneDrive and Google Drive accounts in RcloneView.

## Migration Steps

### 1) Transfer document libraries

Open SharePoint in one pane, Google Shared Drive in the other. Transfer library by library:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SharePoint to Google Drive transfer" class="img-large img-center" />

### 2) Migrate personal OneDrive files

Each user's OneDrive files move to their Google Drive My Drive.

### 3) Verify completeness

Folder Comparison confirms every file transferred:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

### 4) Schedule large migrations overnight

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 5) Monitor progress

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## Important Considerations

- **File format conversion**: Google can view Office files natively; conversion to Google Docs format is optional
- **Permission mapping**: File permissions don't transfer automatically — plan your Shared Drive permissions separately
- **Path length**: SharePoint allows longer paths than some expect; verify compatibility
- **Large libraries**: Break into batches by department or project

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add SharePoint** and **Google Drive** remotes.
3. **Map libraries** to Shared Drives.
4. **Transfer and verify** in batches.

Clean platform switch, zero data loss.

---

**Related Guides:**

- [Migrate Google Workspace to Microsoft 365](https://rcloneview.com/support/blog/migrate-google-workspace-to-microsoft-365-rcloneview)
- [Zero-Downtime Cloud Migration](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
