---
slug: folder-comparison-guide-detect-differences-rcloneview
title: "Folder Comparison Deep Dive — Detect Every Difference Between Cloud Storage Locations"
authors:
  - tayson
description: "RcloneView's Folder Comparison finds missing files, size mismatches, and sync drift between any two cloud storage locations. Complete guide with practical examples."
keywords:
  - folder comparison tool
  - compare cloud folders
  - detect missing files cloud
  - cloud sync verification
  - compare google drive onedrive
  - folder diff tool
  - cloud storage comparison
  - verify cloud backup
  - find missing cloud files
  - cloud folder diff
tags:
  - RcloneView
  - folder-comparison
  - feature
  - cloud-storage
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Folder Comparison Deep Dive — Detect Every Difference Between Cloud Storage Locations

> You ran a backup last week. Did every file make it? Are the sizes correct? Is anything missing? The only way to know for sure is to compare the source and destination file by file. That's what Folder Comparison does.

Folder Comparison is one of RcloneView's most valuable features. It compares two storage locations — any combination of local, NAS, and cloud — and shows you exactly what's different. Missing files, size mismatches, date differences, and files unique to one side are all clearly identified.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Folder Comparison Shows

### File categories

After comparing two locations, files are categorized:

- **Match** — File exists in both locations with the same size and modification time. ✅
- **Left only** — File exists only in the source (left side). May need to be copied.
- **Right only** — File exists only in the destination (right side). May be an orphan or extra copy.
- **Different** — File exists in both locations but differs in size or date. May need to be updated.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison results" class="img-large img-center" />

## When to Use Folder Comparison

### 1) After backup — verify completeness

After any Copy or Sync job, compare source and destination:

- **All match?** → Backup is complete.
- **Left only files?** → These weren't backed up. Investigate why.
- **Right only files?** → Files deleted from source but still in backup (expected with Copy jobs).

### 2) Before sync — preview changes

Before running a Sync job, compare to see what will change:

- **Left only** → Will be copied to destination.
- **Right only** → Will be DELETED from destination (Sync only!).
- **Different** → Will be overwritten.

This is like a visual dry run.

### 3) After migration — confirm nothing is missing

After migrating from one cloud to another:

- Compare old cloud vs new cloud.
- Every file should be "match" or "right only" (already at destination).
- Any "left only" files were missed and need re-transfer.

### 4) Regular audits — detect drift

Even with scheduled syncs, things can go wrong silently. Monthly comparisons catch:

- Failed transfers that weren't reported.
- Rate-limited files that were skipped.
- Corrupted files (different sizes).
- OAuth tokens that expired mid-job.

## Practical Examples

### Compare Google Drive and S3 backup

Source: Google Drive (primary).
Destination: S3 (backup).

**Expected results after a healthy backup:**
- Most files: Match ✅
- Some "left only": Files added to Google Drive since last backup (will be copied next time).
- Few "right only": Files deleted from Google Drive but retained in backup (this is good — your backup preserved them).

### Compare two NAS volumes

Left: NAS Volume 1 (active data).
Right: NAS Volume 2 (mirror).

**Any difference indicates the mirror is out of sync.** Fix immediately.

### Compare before decommissioning a cloud account

Before canceling Dropbox:
1. Compare Dropbox vs Google Drive (where you migrated data to).
2. Ensure zero "left only" files (everything from Dropbox is on Google Drive).
3. Only then cancel Dropbox.

## Comparison Options

### Check methods

- **Size** — Compare file sizes. Fast but doesn't catch bit-level corruption.
- **Modification time** — Compare timestamps. Useful for detecting updated files.
- **Checksum** — Compare file hashes (MD5, SHA1). Slowest but most thorough. Catches bit-rot and corruption.

For critical data, use checksum. For routine checks, size + modification time is sufficient.

### Performance tips

- **Large directories (10,000+ files)** — Comparison may take several minutes. Be patient.
- **Cross-cloud comparison** — Requires listing both clouds. Use `--fast-list` for efficiency.
- **Narrow the scope** — Compare specific subdirectories instead of the entire cloud for faster results.

## Act on Differences

After comparison, you can act directly:

- **Left only files** → Select and Copy to the right side.
- **Different files** → Select and update on the right side.
- **Right only files** → Review whether to keep or remove.

This makes Folder Comparison not just a diagnostic tool but a workflow tool.

## Integrating with Batch Jobs

v1.3 Batch Jobs can include a comparison step:

1. Copy source → destination.
2. Compare source vs destination.
3. Report any differences via Slack.

This automated verify-after-backup workflow ensures you always know the state of your backups.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add the two locations** you want to compare.
3. **Run Folder Comparison** between them.
4. **Review results** — match, left only, right only, different.
5. **Act on differences** — copy, update, or investigate.

If you can't verify it, you can't trust it.

---

**Related Guides:**

- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job History and Monitoring](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
