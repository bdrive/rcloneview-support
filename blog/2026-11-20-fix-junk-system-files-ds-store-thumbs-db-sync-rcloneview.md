---
slug: fix-junk-system-files-ds-store-thumbs-db-sync-rcloneview
title: "Fix Junk System Files in Cloud Sync — Exclude .DS_Store and Thumbs.db with RcloneView"
authors:
  - kai
description: "Stop .DS_Store, Thumbs.db, and desktop.ini from cluttering your cloud backups. Use RcloneView sync filters, Dry Run, and Folder Compare to keep them out."
keywords:
  - exclude .DS_Store cloud sync
  - Thumbs.db cloud backup
  - desktop.ini sync clutter
  - remove junk files from cloud storage
  - rclone exclude system files
  - RcloneView custom filters
  - clean cloud sync macOS Windows
  - sync filter hidden files
  - cross-platform cloud sync tips
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Junk System Files in Cloud Sync — Exclude .DS_Store and Thumbs.db with RcloneView

> Operating-system metadata files add clutter to your backups. A few filter rules keep them out for good.

Open a shared cloud folder that has been touched by both Macs and Windows PCs and you will usually find `.DS_Store` in every directory, `Thumbs.db` next to every batch of images, and `desktop.ini` scattered through the tree. They are small, but they inflate file counts, show up as "different" in comparisons, and trigger needless re-uploads. RcloneView lets you exclude them from sync jobs with filter rules, then confirm the destination is clean.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why These Files Keep Coming Back

macOS Finder writes `.DS_Store` to store view settings for a folder. Windows Explorer creates `Thumbs.db` to cache image thumbnails and `desktop.ini` to store folder customizations. Each time someone browses a synced folder or a mounted drive, the operating system may rewrite these files, so the next sync sees a "changed" file and transfers it again.

Consider a design agency with 40,000 project folders on a NAS that syncs to the cloud nightly. Even if real work changed in only a few folders, every browsed folder can still produce a fresh metadata file, which makes the job log noisy and buries the transfers that matter.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing file counts inflated by system metadata files" class="img-large img-center" />

## Add Exclusion Filters to Your Sync Job

Open the job in **Job Manager** and click **Edit**, then go to **Step 3: Filtering Settings**. Under custom filters, add one exclusion rule per file name: `.DS_Store`, `Thumbs.db`, and `desktop.ini`. If your team also uses Office, consider excluding temporary lock files that start with `~$`. The rules use rclone's filter syntax, the same syntax as the documented examples like `.iso` and `.git/`.

Filters apply to the job every time it runs, including scheduled runs on the PLUS license, so you only set them up once. Use **Export** in Job Manager to save the job as a JSON file and **Import** it on other machines so everyone uses the same rules.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing sync job settings in RcloneView to add exclusion filters" class="img-large img-center" />

## Preview, Clean Up, and Verify

Run a **Dry Run** after saving. The preview should no longer list metadata files for transfer. If they still appear, check the spelling and capitalization of each rule, because a typo is the most common reason a filter seems to be ignored.

Filters stop new copies from being transferred, but files already in the cloud stay where they are. Open the destination in the Explorer panel, find the leftovers, and delete them with right-click **Delete**. For a full check, open **Compare** between source and destination and use "Show right-only files" to find stray metadata files left from earlier runs. On the PLUS license, Folder Compare with Filter applies the same exclusions to the comparison view.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using RcloneView Folder Compare to find leftover .DS_Store and Thumbs.db files" class="img-large img-center" />

## Getting Started

RcloneView mounts and syncs 90+ providers from one window on Windows, macOS, and Linux, so the same filter rules work whichever OS created the files.

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Edit your sync job and add `.DS_Store`, `Thumbs.db`, and `desktop.ini` as custom exclusion filters.
3. Run a **Dry Run** to confirm the metadata files no longer appear for transfer.
4. Use **Compare** to find and delete the leftovers that are already in the cloud.

Shorter job logs and cleaner backups make the changes that matter easier to spot.

---

**Related Guides:**

- [Fix Sync Filters Not Excluding Files — Correct Exclusion Rules with RcloneView](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Max Folder Depth and Max File Size Filters — Control What Gets Synced in RcloneView](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Fix macOS Empty Desktop and Documents Folders — Permission Fix with RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
