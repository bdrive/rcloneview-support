---
slug: predefined-filters-sync-file-types-rcloneview
title: "Predefined Filters — Sync Only the Files You Need in RcloneView"
authors:
  - steve
description: "Use RcloneView's predefined filters to sync only images, video, music, or documents instead of transferring entire folders."
keywords:
  - RcloneView filters
  - predefined filters
  - sync file types
  - cloud sync filters
  - selective sync
  - image only sync
  - video sync filter
  - document sync filter
  - Google Docs filter
tags:
  - RcloneView
  - feature
  - filters
  - sync
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Predefined Filters — Sync Only the Files You Need in RcloneView

> Skip the file types you don't need and sync just the ones you do, without hand-writing exclusion rules.

Not every sync job should move every file in a folder. A photography studio backing up a shared drive full of RAW files, PSDs, and stray PDFs usually only cares about the images — not the invoices sitting next to them. RcloneView's Filtering Settings step includes predefined filters for common file categories, so you can scope a sync job to exactly the content that matters without building a custom rule set from scratch.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Predefined Filters Cover

Step 3 of the Sync wizard, Filtering Settings, offers one-click predefined filters for Music, Video, Image, Document, Google Docs, and Box Docs. Selecting one restricts the job to matching file types — pick Image, for example, and the sync job ignores everything else in the source folder, regardless of how deeply nested it is or what else lives alongside it.

This matters for mixed-content folders that accumulate over time: a marketing team's shared drive full of exported videos, brand documents, and spreadsheets doesn't need all of it mirrored to a video archive remote. A single predefined filter keeps the destination clean without a manual cleanup pass afterward.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a predefined file type filter in the RcloneView sync wizard" class="img-large img-center" />

The Google Docs and Box Docs options specifically target provider-native document formats that don't behave like regular files during a transfer — useful when syncing out of Google Drive or Box and you want to separate native docs from uploaded binary files.

## Combining Predefined and Custom Filters

Predefined filters aren't exclusive of custom rules. You can layer a predefined Image filter with additional custom exclusions — a `/thumbnails/*` path rule, for instance — to cut out generated preview files that would otherwise pollute an otherwise clean image-only sync. Custom filters also support max file size and max file age constraints, so a photography studio with 2TB of RAW files could combine the Image filter with a file-age cutoff to sync only recent shoots rather than the entire historical archive.

Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license — so this filtering applies whether you're running a one-off transfer or a saved, repeatable job.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Filtered sync job transferring only image files between remotes" class="img-large img-center" />

## Verifying Filtered Results with Dry Run

Before committing a filtered sync to a large or unfamiliar folder, run it in Dry Run mode first. Dry Run shows the exact list of files that would be copied and deleted under the current filter settings, which is the fastest way to confirm a predefined filter is catching what you expect — and not silently excluding files you actually wanted transferred.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run to preview a filtered sync job before execution" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Start a new Sync job and select your source and destination remotes.
3. In Step 3, Filtering Settings, choose a predefined filter matching the content type you want to sync.
4. Run Dry Run to confirm the results, then save the job to reuse the same filter on future syncs.

Filtering at the sync level, rather than sorting files manually beforehand, keeps destination folders focused on the content you actually need there.

---

**Related Guides:**

- [Dry Run — Preview Cloud Sync Before Transfer in RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Folder Compare with Filter — Restrict Comparisons in RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Bisync — Bidirectional Cloud Sync with RcloneView](https://rcloneview.com/support/blog/bisync-bidirectional-cloud-sync-rcloneview)

<CloudSupportGrid />
