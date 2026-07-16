---
slug: fix-cloud-sync-case-sensitivity-conflicts-rcloneview
title: "Fix Cloud Sync Case Sensitivity Conflicts — Resolve Duplicate Files with RcloneView"
authors:
  - tayson
description: "Stop cloud sync jobs from creating duplicate files when Windows or macOS case-insensitive filesystems meet case-sensitive cloud storage, using RcloneView."
keywords:
  - cloud sync case sensitivity
  - duplicate files cloud sync
  - case sensitive filenames cloud storage
  - fix cloud sync duplicates
  - windows macos case insensitive sync
  - cloud storage filename conflicts
  - rcloneview sync errors
  - resolve cloud sync duplicate uploads
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Cloud Sync Case Sensitivity Conflicts — Resolve Duplicate Files with RcloneView

> "Report.pdf" and "report.pdf" look identical to Windows and macOS but are two different files to most cloud storage — a mismatch that quietly fills folders with duplicates until a sync job is built to catch it.

Windows and macOS format local drives as case-insensitive by default, so `Invoice.pdf` and `invoice.pdf` are treated as the same file on disk. Google Drive, Dropbox, Amazon S3, and most other cloud backends are case-sensitive, meaning they happily store both as separate objects. The result is folders that slowly accumulate near-duplicate files, sync jobs that seem to "create" copies out of nowhere, or overwrite loops where a rename on one device never quite matches the version already sitting in the cloud. RcloneView won't change how the underlying filesystems behave, but it gives you the visibility and controls to catch these conflicts before they turn into a mess.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Spotting Case Conflicts with Folder Compare

The fastest way to confirm you're dealing with a case sensitivity issue rather than a genuine sync failure is to run Folder Compare between the local folder and the cloud destination. Files that only differ by capitalization show up as separate entries on each side rather than matching as "same," which is the telltale sign — a real duplicate-content issue shows different sizes, while a pure case mismatch often shows two entries with identical size but different names. The "Show different files" and "Show left-only / right-only" filters in the comparison view make these pairs easy to isolate instead of scrolling through an entire folder tree manually.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify case sensitivity duplicates between local and cloud storage" class="img-large img-center" />

## Preventing Overwrite Loops with One-Way Sync and Checksums

Bidirectional sync (Beta) is where case conflicts do the most damage, since each side can interpret a renamed file as both a new upload and a stale deletion. Switching the affected job to one-way "Modifying destination only" sync removes that ambiguity — one side is always authoritative, so a case-only rename on the source simply updates the destination instead of triggering a duplicate. Enabling the checksum comparison option in Step 2 of the sync wizard also helps, since it compares files by hash and size rather than relying on filename matching alone, which reduces false positives when case differences are mixed with genuine content changes. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, which makes it easier to spot when a conflict originated from a specific device's filesystem behavior.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job with checksum comparison to avoid case sensitivity duplicates" class="img-large img-center" />

## Cleaning Up Existing Duplicates Safely

Once you've identified case-duplicate pairs through Folder Compare, always run a Dry Run before deleting anything — it lists exactly which files would be removed without making changes, which matters when two "duplicate" files might actually have diverged in content since the case mismatch first occurred. After confirming the dry run output looks correct, use the Delete action in the comparison view to remove the stale copy, keeping the version with the correct, current filename.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run before cleaning up case sensitivity duplicate files in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Run Folder Compare between the affected local folder and its cloud destination.
3. Filter for files that appear as separate entries but share the same size to isolate case conflicts.
4. Switch the sync job to one-way with checksum comparison enabled, then Dry Run before cleaning up duplicates.

A little visibility turns an invisible filesystem quirk into a problem you can actually fix, instead of one that just keeps quietly duplicating files.

---

**Related Guides:**

- [Fix Filename Special Characters — Resolve Cloud Sync Issues with RcloneView](https://rcloneview.com/support/blog/fix-filename-special-characters-cloud-sync-rcloneview)
- [Fix Cloud Sync Duplicate Files — How to Resolve with RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-duplicate-files-rcloneview)
- [Dry Run — Preview Cloud Sync Before Transfer in RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
