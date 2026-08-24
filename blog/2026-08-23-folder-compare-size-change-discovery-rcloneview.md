---
slug: folder-compare-size-change-discovery-rcloneview
title: "Find the Biggest Changes — Folder Compare Size Discovery in RcloneView"
authors:
  - steve
description: "Use RcloneView's Folder Compare size discovery tools to locate which cloud folders changed the most, fastest, or need review before syncing."
keywords:
  - folder compare size discovery
  - RcloneView folder compare
  - largest folder change
  - cloud storage audit
  - compare cloud folders
  - detect cloud file changes
  - cloud backup verification
  - folder size change tracking
  - cloud sync monitoring
  - cloud storage change detection
tags:
  - RcloneView
  - feature
  - compare
  - folder-comparison
  - performance
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Find the Biggest Changes — Folder Compare Size Discovery in RcloneView

> When a cloud tree has thousands of subfolders, spotting which ones actually changed is the hard part — RcloneView's size discovery tools find them for you.

Anyone managing a large multi-cloud archive knows the real problem isn't running a comparison — it's reading the results. A folder tree with a few thousand subfolders can produce a comparison report too long to scan manually. RcloneView's Folder Compare view includes dedicated size-change discovery controls that jump straight to the folders worth investigating, instead of forcing you to scroll through an undifferentiated file list.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Size Change Discovery Actually Does

Folder Compare lets you visually compare two folders — local or cloud — side by side, and it comes with filters for left-only files, right-only files, identical files, differing files, and errored files. On top of that filtering, RcloneView adds navigation shortcuts that find folders by file count change or by size change, and can jump directly to the folder with the largest change, the next-largest, the smallest change, or the next-smaller one.

That last set of controls is what separates RcloneView from a plain diff view. Instead of reading through every subfolder to figure out where the bulk of the change happened, you ask the comparison to take you there directly. This matters most on remotes where change is inherently uneven — a shared media library, an engineering repository, or a client folder structure where 90% of the churn happens in a handful of subdirectories.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting comparison result filters in RcloneView Folder Compare" class="img-large img-center" />

## A Practical Scenario

Consider a video production studio with a shared cloud archive holding hundreds of project folders across Google Drive and a Backblaze B2 backup bucket. After a busy week of edits, they need to know which project folders actually changed before running a full sync — not to trust that the last automated job caught everything, but to verify it. Running Folder Compare and jumping straight to "largest change" surfaces the three or four active projects immediately, while dozens of untouched archive folders stay out of the way. RcloneView also mounts and syncs 90+ providers from one window, on Windows, macOS, and Linux, so the same workflow applies whether the second side is another cloud, a NAS, or a local drive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing cloud-to-cloud folder contents in RcloneView" class="img-large img-center" />

## Turning Discovery Into Action

Once you've located a changed folder, the same Compare view lets you act on it directly: copy right, copy left, or delete selected items, without leaving the comparison. Files copied this way are automatically marked as equal, so a re-run of the comparison reflects the corrected state instead of flagging the same folder again. For recurring audits, pair a manual Compare pass with a scheduled sync job so size discovery becomes a spot-check rather than the only line of defense.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a folder compare and sync in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open the Compare view from the Home tab and select your two source folders.
3. Run the comparison, then use the largest/smallest change navigation to jump to the folders that matter.
4. Copy or delete directly from the result view, then re-run Compare to confirm the folders now show as equal.

For anyone managing a cloud tree too large to read by eye, size discovery turns an overwhelming comparison into a short, prioritized list of folders to check.

---

**Related Guides:**

- [Folder Comparison Guide — Detect Differences with RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Folder Compare with Filter in RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Dry Run — Preview Cloud Sync Before Transfer](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
