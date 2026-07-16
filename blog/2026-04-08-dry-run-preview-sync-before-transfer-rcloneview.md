---
slug: dry-run-preview-sync-before-transfer-rcloneview
title: "Preview Sync Changes with Dry Run Before Transferring in RcloneView"
authors:
  - tayson
description: "Use dry run in RcloneView to preview sync changes before transferring files. Catch unexpected deletions and filter mismatches before they cause data loss."
keywords:
  - rcloneview
  - dry run
  - preview sync
  - rclone dry run
  - sync preview
  - safe cloud sync
  - prevent data loss
  - sync simulation
  - cloud transfer preview
  - compare before sync
tags:
  - feature
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Preview Sync Changes with Dry Run Before Transferring in RcloneView

> One misconfigured sync can delete thousands of files in seconds. **RcloneView** lets you preview every change with a dry run before a single byte is transferred, giving you complete confidence before committing to a sync.

The sync operation is one of the most powerful features in rclone. It makes the destination match the source, transferring new files, updating changed ones, and deleting files that no longer exist at the source. That last part, the deletion, is what makes sync both powerful and dangerous.

A dry run simulates the entire sync operation without actually moving, copying, or deleting anything. It shows you exactly what would happen: which files would be transferred, which would be deleted, and which would be skipped. You review the output, confirm it matches your expectations, and only then execute the real sync.

RcloneView integrates dry run directly into its sync workflow, making it easy to preview changes through the GUI before committing. Whether you are syncing two cloud remotes or backing up local files to the cloud, a dry run should be your first step every time.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Dry Run Does

When you enable dry run mode, rclone performs all the same analysis it would for a real sync: it scans the source and destination, compares files by size, timestamp, or checksum, and builds a list of operations to perform. The only difference is that none of those operations are actually executed.

The dry run output tells you:
- **Files to transfer**: New or modified files that would be copied from source to destination.
- **Files to delete**: Destination files that do not exist at the source and would be removed.
- **Files to skip**: Files that are identical on both sides and require no action.
- **Total data volume**: How much data would be transferred, helping you estimate time and bandwidth requirements.

This simulation is read-only. No files are moved, copied, or deleted. Your source and destination remain completely untouched.

## Why Dry Run Is Critical for Destructive Operations

The `sync` command is inherently destructive because it deletes files at the destination that are not present at the source. This is by design, it is what makes sync different from copy. But it also means that mistakes have consequences:

- **Wrong sync direction**: If you accidentally swap source and destination, the sync deletes your source files to match an empty or outdated destination.
- **Incorrect path**: Syncing to the wrong directory can overwrite unrelated files or trigger mass deletions.
- **Filter misconfiguration**: If your include/exclude filters are wrong, files you intended to keep might be excluded from the source scan and therefore deleted at the destination.
- **Stale authentication**: If the source remote has expired credentials, it might appear empty, causing the sync to delete everything at the destination.

A dry run catches every one of these issues before any damage occurs. The few seconds it takes to review the output can save hours of recovery work.

## How to Enable Dry Run in RcloneView

RcloneView provides a straightforward way to run sync previews:

1. Open the **Job Manager** and select the sync job you want to preview.
2. Add the `--dry-run` flag in the **Custom Flags** section of the job configuration.
3. Execute the job. RcloneView will simulate the sync and display the results.
4. Review the output in the transfer monitor to see what would happen.
5. If everything looks correct, remove the `--dry-run` flag and run the job for real.

Alternatively, you can use the built-in terminal to run a dry run command directly:
```
rclone sync source: dest: --dry-run
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Reading Dry Run Output

The dry run output uses the same format as a real sync, but no operations are executed. Here is what to look for:

**Transferred files** are listed with their paths and sizes. Verify that these are the files you expect to be updated or added. If you see files being transferred that should already be in sync, it might indicate a timestamp mismatch or checksum difference worth investigating.

**Deleted files** are the most critical items to review. Each file listed for deletion will be permanently removed from the destination during a real sync. If you see files here that you want to keep, your source path, filters, or sync direction may need adjustment.

**Skipped files** confirm that files already in sync are correctly identified. A healthy dry run output should show mostly skipped files with a small number of transfers and deletions.

**Summary statistics** at the end tell you the total number of transfers, deletes, and the overall data volume. Compare these numbers against your expectations. If you are syncing a folder where you changed one file, but the dry run shows thousands of transfers, something is misconfigured.

## Common Surprises Caught by Dry Run

Here are real scenarios where a dry run has prevented data loss:

**Unexpected mass deletion**: You set up a sync from Google Drive to S3, but the Google Drive token expired. Rclone sees an empty source and plans to delete everything at the destination. The dry run shows thousands of deletions and zero transfers, immediately flagging the problem.

**Filter mismatch**: You added an exclude filter for `*.tmp` files, but accidentally typed `*.tmpl`, which matches your Terraform template files. The dry run shows those template files being deleted from the destination, alerting you to the typo.

**Wrong base directory**: You intended to sync `remote:projects/2026`, but typed `remote:projects`. The dry run reveals that files from all project years would be synced, potentially overwriting files in subdirectories you did not intend to touch.

**Case sensitivity issues**: Moving files between a case-insensitive remote (like OneDrive) and a case-sensitive one (like S3) can create duplicate files. The dry run shows these unexpected transfers so you can handle case conflicts before they multiply.

## Making Dry Run Part of Your Workflow

For maximum safety, incorporate dry run into your standard operating procedure:

**For manual syncs**: Always run a dry run first before executing any sync operation. Review the output, then remove the flag and run the real sync. The extra minute is worth the peace of mind.

**For new scheduled jobs**: When creating a new scheduled sync, run it manually with `--dry-run` first. Only enable the schedule after you have verified the dry run output matches your expectations.

**After configuration changes**: Whenever you modify a job's source, destination, filters, or flags, run a dry run before the next execution. Configuration changes can have unexpected side effects that a dry run will reveal.

**Periodically for existing jobs**: Even stable, long-running scheduled jobs benefit from an occasional dry run review. Changes in the source data, remote configuration, or provider behavior can alter sync behavior over time.

## Combining Dry Run with Compare Features

RcloneView's folder comparison feature complements dry run by providing a visual side-by-side view of source and destination contents. Used together, they give you comprehensive pre-sync visibility:

1. Use the **Compare** feature to visually inspect differences between source and destination.
2. Run a **dry run** to see exactly what the sync operation would do about those differences.
3. Verify that the planned operations align with what you saw in the comparison.
4. Execute the sync with confidence.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

The compare feature shows you the current state, while dry run shows you the planned actions. Together, they eliminate guesswork and ensure you understand both what is different and what will be done about it.

## Advanced: Using --dry-run with Other Flags

Dry run works with all other rclone flags, so you can simulate your exact production configuration:

- `--dry-run --backup-dir remote:backup` previews both the sync and where backup copies would be stored.
- `--dry-run --filter-from filters.txt` verifies that your filter rules produce the expected results.
- `--dry-run --max-age 24h` simulates syncing only files modified in the last 24 hours.
- `--dry-run -v` adds verbose output for more detail about each planned operation.

This composability means you can test any configuration safely before deploying it to production.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a sync job with your desired source and destination.
3. Add `--dry-run` to the custom flags and execute the job to preview changes.
4. Review the output carefully, then remove the flag and run the real sync.

Dry run costs nothing, takes only seconds, and can prevent catastrophic data loss. Make it the first step of every sync operation, and you will never be surprised by what a sync does to your files.

---

**Related Guides:**

- [Synchronize Remote Storages Instantly](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Compare folder contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
