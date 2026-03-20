---
slug: migrate-box-to-sharepoint-onedrive-rcloneview
title: "How to Migrate from Box to SharePoint or OneDrive — Enterprise Cloud Migration with RcloneView"
authors:
  - tayson
description: "Moving from Box to Microsoft 365? Learn how to migrate files from Box to SharePoint Online or OneDrive for Business while preserving folder structure using RcloneView."
keywords:
  - migrate box to sharepoint
  - box to onedrive migration
  - box to microsoft 365 transfer
  - box sharepoint migration tool
  - move files from box
  - box migration tool
  - enterprise cloud migration
  - box to office 365
  - box data migration
  - box alternative migration
tags:
  - RcloneView
  - box
  - sharepoint
  - onedrive
  - migration
  - enterprise
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How to Migrate from Box to SharePoint or OneDrive — Enterprise Cloud Migration with RcloneView

> Your company has decided to consolidate on Microsoft 365. Step one: migrate all those files from Box to SharePoint and OneDrive. Step two: don't lose anything in the process.

Box has been a staple for enterprise file sharing, but many organizations are consolidating their cloud ecosystems around Microsoft 365. Migrating from Box to SharePoint Online or OneDrive for Business is a significant project — especially when you're dealing with years of accumulated data, complex folder structures, and shared workspaces. RcloneView makes this manageable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Migration Planning

### Assess your Box environment

Before migrating, inventory what you have:

- **Personal folders** → Migrate to individual OneDrive accounts.
- **Shared folders/workspaces** → Migrate to SharePoint document libraries.
- **Archived data** → Consider moving to cheaper storage (S3, B2) instead of SharePoint.
- **Total data volume** — Determines timeline and approach.

### Destination mapping

| Box Source | Microsoft 365 Destination |
|-----------|--------------------------|
| My Files | OneDrive for Business |
| Shared Folders | SharePoint Team Sites |
| Department Folders | SharePoint Document Libraries |
| Archive/Cold Data | OneDrive or Azure Blob Storage |

## Step-by-Step Migration

### 1) Add Box and Microsoft remotes

Connect both services in RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and SharePoint remotes" class="img-large img-center" />

For SharePoint, add it as a OneDrive Business remote and specify the SharePoint site URL.

### 2) Browse and compare

Open Box on the left and SharePoint/OneDrive on the right:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Box and SharePoint side by side" class="img-large img-center" />

### 3) Transfer in phases

Don't try to migrate everything at once. Prioritize:

**Phase 1: Active projects** — Files people need daily.
**Phase 2: Shared workspaces** — Team folders and collaboration spaces.
**Phase 3: Archive** — Old projects and historical data.

### 4) Run Copy jobs

Create Copy jobs for each phase:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Box to SharePoint migration job" class="img-large img-center" />

### 5) Verify each phase

After each phase, compare source and destination:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to SharePoint migration" class="img-large img-center" />

## Handling Limitations

### File name restrictions

SharePoint/OneDrive has stricter naming rules than Box:

- Characters not allowed: `" * : < > ? / \ |`
- File names can't start or end with spaces.
- Maximum path length: 400 characters.

Rclone automatically handles many of these conversions during transfer.

### Box Notes

Box Notes are proprietary and don't have a direct equivalent in Microsoft 365. They'll need to be exported as PDFs or copied manually into OneNote/Word.

### Permissions and sharing

RcloneView transfers files but not sharing permissions. After migration, you'll need to set up sharing on SharePoint/OneDrive. Plan this as a separate step.

### Rate limits

Both Box and SharePoint have API rate limits:

- **Box**: Varies by plan (typically 10–20 requests/second).
- **SharePoint**: Microsoft throttles based on usage patterns.

RcloneView respects these limits. For large migrations, schedule transfers during off-hours and use retry (v1.3).

## Keep Box and SharePoint in Sync During Transition

Not everyone will switch on the same day. Schedule syncs to keep both platforms current:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync during Box to SharePoint transition" class="img-large img-center" />

This gives your team time to transition gradually without data gaps.

## Monitor Large Transfers

Enterprise migrations involve terabytes. Monitor progress:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Box to SharePoint migration" class="img-large img-center" />

## Batch Jobs for Migration Workflow

Use v1.3 Batch Jobs to automate the entire migration sequence:

1. Copy Box → SharePoint (active projects).
2. Copy Box → OneDrive (personal files).
3. Compare Box vs SharePoint to verify.
4. Send Slack notification when complete.

## Post-Migration

1. **Verify all files** — Run a final Folder Comparison.
2. **Set up SharePoint permissions** — Recreate sharing structures.
3. **Train your team** — Help users find their files in the new location.
4. **Monitor for 30 days** — Keep Box active as a fallback.
5. **Decommission Box** — Cancel after confirming everything is stable.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Box and SharePoint/OneDrive** as remotes.
3. **Plan your migration phases**.
4. **Run Copy jobs** for each phase.
5. **Verify with Folder Comparison** after each phase.
6. **Schedule syncs** during the transition period.

Enterprise migration doesn't have to mean enterprise complexity.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Set Bandwidth Limits](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
