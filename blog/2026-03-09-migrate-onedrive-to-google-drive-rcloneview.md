---
slug: migrate-onedrive-to-google-drive-rcloneview
title: "How to Migrate from OneDrive to Google Drive — Step-by-Step Transfer Guide with RcloneView"
authors:
  - tayson
description: "Switching from Microsoft 365 to Google Workspace? Learn how to migrate all files from OneDrive to Google Drive while preserving folder structure using RcloneView."
keywords:
  - migrate onedrive to google drive
  - onedrive to google drive transfer
  - switch microsoft 365 to google workspace
  - move files onedrive google drive
  - onedrive google drive migration tool
  - cloud migration tool
  - onedrive to gdrive sync
  - transfer onedrive files
  - microsoft to google migration
  - onedrive migration tool
tags:
  - RcloneView
  - onedrive
  - google-drive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How to Migrate from OneDrive to Google Drive — Step-by-Step Transfer Guide with RcloneView

> Your organization is moving to Google Workspace. Now you need to move terabytes of OneDrive files to Google Drive without disrupting your team's workflow. Here's how to do it properly.

Whether you're switching productivity suites, consolidating cloud accounts, or maintaining a parallel backup, migrating from OneDrive to Google Drive requires careful planning. RcloneView handles the heavy lifting — direct cloud-to-cloud transfer that preserves your folder structure and handles the file format differences automatically.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Not Just Download and Re-Upload?

The manual approach — download from OneDrive, then upload to Google Drive — has serious drawbacks:

- **Requires local disk space** for the entire dataset.
- **Double the time** — download + upload instead of direct transfer.
- **No incremental updates** — any changes during transfer are lost.
- **Breaks on large datasets** — browser uploads fail on files over a few GB.

RcloneView transfers directly between clouds, requiring only bandwidth — not local storage.

## Migration Steps

### 1) Connect Both Accounts

Add OneDrive and Google Drive as remotes in RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Google Drive remotes" class="img-large img-center" />

### 2) Assess and Plan

Browse both clouds side-by-side:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OneDrive and Google Drive side by side" class="img-large img-center" />

Before migrating, check:

- **Total size** — How much data needs to move?
- **File types** — Office documents convert automatically (see below).
- **Shared folders** — OneDrive shared items need separate handling.
- **Path lengths** — Google Drive has a 400-character path limit.

### 3) File Format Handling

When transferring, Office documents can be uploaded as-is to Google Drive. Google Drive supports opening `.docx`, `.xlsx`, and `.pptx` natively. Optionally, you can convert them to Google-native formats after migration.

| OneDrive Format | Google Drive Handling |
|-----------------|---------------------|
| .docx | Opens natively or converts to Google Docs |
| .xlsx | Opens natively or converts to Google Sheets |
| .pptx | Opens natively or converts to Google Slides |
| Images, PDFs | Transferred as-is |

### 4) Run the Migration

Create a **Copy** job from OneDrive to Google Drive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OneDrive to Google Drive migration" class="img-large img-center" />

Use **Copy** rather than Sync — it only adds files, never deletes from the destination.

### 5) Monitor Progress

Watch the migration in real time:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

### 6) Verify

Compare both sides after migration:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Handling Special Cases

### SharePoint Document Libraries

SharePoint libraries are separate from personal OneDrive. Add SharePoint as a separate remote in RcloneView to migrate team sites.

### OneDrive for Business vs Personal

If migrating from OneDrive for Business, the OAuth setup differs from personal OneDrive. RcloneView guides you through both authentication flows.

### Large migrations (500 GB+)

For very large datasets:

- **Migrate in batches** — Start with critical folders, then secondary data.
- **Use filter rules** — Prioritize by file type or date.
- **Schedule off-hours** — Run during nights/weekends to avoid rate limits.
- **Enable retry** — v1.3's retry feature handles transient failures.

### During the transition period

Keep both clouds in sync while your team transitions:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

Schedule daily syncs from OneDrive → Google Drive until everyone has switched.

## Post-Migration Checklist

1. **Verify file counts** — Folder Comparison confirms all files transferred.
2. **Test file access** — Open key documents on Google Drive.
3. **Update sharing** — Re-share folders on Google Drive with team members.
4. **Update app integrations** — Point scripts, tools, and workflows to Google Drive.
5. **Keep OneDrive active** — Maintain the old account for 30 days as a safety net.
6. **Decommission** — After confirming everything works, cancel OneDrive subscriptions.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add OneDrive and Google Drive** as remotes.
3. **Run a Copy job** to transfer files.
4. **Verify with Folder Comparison**.
5. **Schedule incremental syncs** during transition.

Migration is stressful enough without worrying about missing files. Let RcloneView handle the transfer while you focus on the transition plan.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Migrate Google Drive to OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
