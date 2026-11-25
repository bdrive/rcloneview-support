---
slug: fix-system-junk-files-ds-store-thumbs-db-cloud-sync-rcloneview
title: "Fix .DS_Store and Thumbs.db Clutter in Cloud Sync — Exclude System Files with RcloneView"
authors:
  - morgan
description: "Stop .DS_Store, Thumbs.db, and desktop.ini files from cluttering your cloud backups. Exclude OS junk files from sync jobs with RcloneView filters."
keywords:
  - ds_store files cloud sync
  - thumbs.db cloud storage
  - exclude system files sync
  - desktop.ini cloud backup
  - rclone exclude ds_store
  - RcloneView custom filters
  - clean cloud sync junk files
  - cross platform cloud sync clutter
  - rclone filter hidden files
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cleanup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix .DS_Store and Thumbs.db Clutter in Cloud Sync — Exclude System Files with RcloneView

> Keep operating-system junk files out of your cloud folders so every sync carries only the files people actually use.

Open a shared cloud folder that a mixed Mac and Windows team syncs, and you will usually find the same uninvited guests in almost every directory: `.DS_Store` from macOS Finder, `Thumbs.db` and `desktop.ini` from Windows Explorer. They add noise to file lists, inflate file counts, and show up as "different" files whenever two machines touch the same folder. RcloneView lets you exclude them from sync jobs and clean out the copies that already landed in the cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why System Files Keep Showing Up in the Cloud

These files are metadata, not content. Finder writes `.DS_Store` to remember icon positions and view settings; Windows writes `Thumbs.db` to cache thumbnails and `desktop.ini` to store folder customizations. A sync tool treats them like any other file, so a one-way sync from a MacBook uploads a `.DS_Store` into every folder it visits.

The problem compounds with scale. A design agency backing up 40,000 project folders can end up with tens of thousands of tiny metadata files in its bucket. Each one is a separate object to list and compare, which slows down later sync runs, and every time a colleague browses the folder on their own machine, the file changes and gets transferred again.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud remote in RcloneView before configuring sync exclusions" class="img-large img-center" />

## Exclude Junk Files with Custom Filters

The fix starts in the sync wizard. In **Step 3: Filtering Settings**, add custom exclusion rules for `.DS_Store`, `Thumbs.db`, and `desktop.ini`. Custom filters accept file types, folders, and path rules, so you can also exclude the `.Trashes` or `.Spotlight-V100` folders that sometimes appear when you sync from an external drive formatted on a Mac.

Before running the job for real, click **Dry Run**. The simulation lists every file that would be copied or deleted, so you can confirm the metadata files have dropped out of the transfer list. If they still appear, check the rule spelling — filter rules are case-sensitive by default, so `Thumbs.db` does not match `thumbs.db`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a filtered cloud sync job in RcloneView" class="img-large img-center" />

## Clean Up Files Already in the Cloud

Filters stop new clutter but do not remove what is already there. Open the cloud folder in one Explorer panel and the local source in another, then use **Compare**. Metadata files that no longer exist locally show up under "Show right-only files"; copies that still exist on both sides appear as same or different files. Either way, you can select the cloud-side copies and delete them directly from the comparison view.

Be careful with one-way sync here. A sync that mirrors the source to the destination deletes destination files that no longer exist at the source, but excluded files are skipped entirely — so a cleanup pass in Compare remains the clearest, most deliberate way to remove them.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing leftover system files on the cloud side" class="img-large img-center" />

## Keep It Clean on Every Run

Save the filtered sync as a job in Job Manager so the exclusions apply every time. RcloneView runs these jobs with the same filters on Windows, macOS, and Linux, which matters when the people uploading use different operating systems. With a PLUS license, you can schedule the job, and Job History shows file counts per run — a sudden drop after adding filters is a good sign the junk is gone.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView showing file counts after excluding system files" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create or edit a sync job and add `.DS_Store`, `Thumbs.db`, and `desktop.ini` as custom exclusion filters in Step 3.
3. Run a Dry Run to confirm the metadata files are no longer in the transfer list.
4. Use Compare to find and delete the copies already stored in the cloud.

A few minutes of filter setup keeps your cloud folders readable and your sync runs focused on real work.

---

**Related Guides:**

- [Fix Sync Filters Not Excluding Files](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Rclone Filter Rules — Include and Exclude Explained](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Clean Up a Full Cloud Storage Account](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)

<CloudSupportGrid />
