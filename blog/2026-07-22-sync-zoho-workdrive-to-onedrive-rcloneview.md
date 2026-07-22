---
slug: sync-zoho-workdrive-to-onedrive-rcloneview
title: "Sync Zoho WorkDrive to OneDrive — Cloud Backup with RcloneView"
authors:
  - steve
description: "Sync files from Zoho WorkDrive to Microsoft OneDrive with RcloneView, keeping both business storage accounts backed up and up to date."
keywords:
  - sync Zoho WorkDrive to OneDrive
  - Zoho WorkDrive backup
  - Zoho WorkDrive OneDrive migration
  - RcloneView Zoho WorkDrive
  - cross-cloud business backup
  - Microsoft OneDrive sync tool
  - multi-cloud file transfer
  - cloud to cloud sync GUI
  - business file storage backup
tags:
  - RcloneView
  - zoho
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Zoho WorkDrive to OneDrive — Cloud Backup with RcloneView

> Keep a running backup of Zoho WorkDrive team folders on Microsoft OneDrive without exporting files by hand or scripting a separate transfer job for each department.

Teams that standardized on Zoho WorkDrive for daily collaboration often still need a presence on Microsoft OneDrive, whether that's for a client who only works in the Microsoft ecosystem, a merger that leaves two storage platforms in use at once, or simply wanting a second copy of business files outside Zoho's infrastructure. Manually downloading from WorkDrive and re-uploading to OneDrive doesn't scale past a handful of files, and it leaves no record of what ran or when. RcloneView connects both platforms in one interface and turns that transfer into a repeatable sync job.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Zoho WorkDrive and OneDrive as Remotes

OneDrive connects through a standard browser-based OAuth login in RcloneView's New Remote wizard — no separate API key needed. Zoho WorkDrive requires one extra step during setup: selecting the correct region for the account, since Zoho hosts data in different geographic regions depending on where the workspace was created. Once both remotes are added, they appear as separate tabs in the Explorer, and either one can be browsed, filtered, or compared against the other just like any local folder.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Zoho WorkDrive and OneDrive as remotes in RcloneView" class="img-large img-center" />

## Building a Sync Job Between the Two Platforms

The Sync wizard's first step is where the source (Zoho WorkDrive folder) and destination (OneDrive folder) get selected, along with a job name and sync direction. One-way sync — modifying only the destination — is the stable, official mode and the right choice for a backup-style job where WorkDrive stays the source of truth. Step 2 covers transfer concurrency and equality checking, useful to tune down if WorkDrive's API responds slowly under heavy parallel requests. Step 3's filtering settings let you scope the job to just the folders or file types that matter, using predefined filters for documents and media or custom exclusion rules like `/.tmp/*`.

Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license, and the same applies here — syncing between Zoho WorkDrive and OneDrive requires no license upgrade, since 1:N sync and basic Sync & Job Management are both included in the FREE tier.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Verifying and Automating the Transfer

Before running the job against real data, Dry Run simulates the sync and lists exactly which files would be copied, letting you catch a misconfigured filter or an unintended folder before anything actually moves. Once the job looks right, save it in Job Manager, where it can be re-run manually or, on a PLUS license, attached to a crontab-style schedule so the WorkDrive-to-OneDrive backup runs automatically without anyone remembering to trigger it.

Job History logs every run — start time, duration, status, and total files transferred — which is useful for confirming a scheduled backup actually completed rather than silently failing overnight.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connect Zoho WorkDrive (selecting the correct region) and OneDrive (via OAuth login) through Remote tab > New Remote.
3. Create a one-way Sync job from your WorkDrive folder to a OneDrive destination, applying filters as needed.
4. Run Dry Run to confirm the file list, then save the job and schedule it if you're on a PLUS license.

With both platforms connected in the same window, keeping Zoho WorkDrive and OneDrive in sync becomes a scheduled job instead of a recurring manual chore.

---

**Related Guides:**

- [Manage Zoho WorkDrive — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Mount Google Drive as a Local Drive with RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Filter Rules — Selective Sync in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
