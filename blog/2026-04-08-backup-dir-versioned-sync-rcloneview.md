---
slug: backup-dir-versioned-sync-rcloneview
title: "Use Backup Dir for Versioned Cloud Sync with RcloneView"
authors:
  - tayson
description: "Learn how to use --backup-dir in RcloneView to create versioned cloud syncs. Keep previous file versions safe by moving overwritten files to a backup directory."
keywords:
  - rcloneview
  - backup-dir
  - versioned sync
  - cloud backup versioning
  - rclone backup directory
  - safe cloud sync
  - file version history
  - cloud file recovery
  - sync with backup
  - rclone suffix
tags:
  - feature
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Use Backup Dir for Versioned Cloud Sync with RcloneView

> Accidentally overwriting or deleting files during a sync is every cloud user's nightmare. **RcloneView** makes versioned syncs effortless with built-in support for `--backup-dir`, ensuring you never lose a previous version again.

When you run a standard sync operation, files at the destination that differ from the source are overwritten, and files that no longer exist at the source are deleted. This is efficient, but it is also destructive. If a file was corrupted at the source, or if you accidentally deleted something you still needed, those changes propagate to the destination with no way back.

The `--backup-dir` flag solves this problem elegantly. Instead of permanently removing overwritten or deleted files, rclone moves them to a separate backup directory first. This gives you a complete safety net: every file that would have been lost is preserved in a location you control.

RcloneView lets you configure `--backup-dir` through its custom flags interface, so you get all the power of versioned syncs without memorizing command-line syntax. Combined with `--suffix` for date-stamped versions, you can build a lightweight file versioning system using nothing but your existing cloud storage.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What --backup-dir Actually Does

When a sync operation encounters a file at the destination that needs to be overwritten or deleted, `--backup-dir` intercepts that action. Instead of destroying the file, rclone moves it to the specified backup directory, preserving its relative path structure.

For example, if your sync overwrites `documents/report.docx` on the destination, the old version gets moved to `backup/documents/report.docx`. The directory hierarchy is maintained, making it easy to locate and restore specific files later.

This applies to two scenarios:
- **Overwritten files**: When a source file is newer or different, the old destination copy is moved to the backup directory before the new version replaces it.
- **Deleted files**: When a file exists at the destination but not at the source, it is moved to the backup directory instead of being permanently removed.

## Why Versioned Syncs Are Essential

Standard sync operations assume you always want the destination to mirror the source exactly. That works well until something goes wrong. Consider these common scenarios:

- A file gets corrupted or infected with ransomware at the source, and the corruption propagates to your backup before you notice.
- You accidentally delete a folder, and the next scheduled sync removes it from the destination too.
- A colleague overwrites a shared document, and the previous version vanishes from both locations.

With `--backup-dir`, every one of these situations is recoverable. The previous versions sit safely in your backup directory, untouched by subsequent sync operations.

## Configuring --backup-dir in RcloneView

RcloneView supports custom rclone flags in its job configuration. Here is how to set up a versioned sync:

1. Open the **Job Manager** and create a new sync job or edit an existing one.
2. Set your source and destination remotes as usual.
3. In the **Custom Flags** section, add: `--backup-dir remote:backup/2026-04-08`
4. Save and run the job.

The backup directory can be on the same remote as the destination or on an entirely different remote. Using a date-based path like `backup/2026-04-08` keeps each day's displaced files organized in their own folder.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Combining --backup-dir with --suffix for Date-Stamped Versions

For even more granular versioning, combine `--backup-dir` with `--suffix` to append a timestamp to each backed-up file. This prevents filename collisions when the same file is modified and synced multiple times.

Add both flags in the custom flags section:

```
--backup-dir remote:backup --suffix .2026-04-08
```

With this configuration, if `report.docx` is overwritten, the old version is saved as `backup/report.docx.2026-04-08`. Run the sync again the next day with an updated suffix, and you accumulate a history of dated versions without any conflicts.

For automated jobs that run on a schedule, you can use dynamic suffixes tied to the execution date, ensuring each run creates uniquely named backups.

## Practical Examples

**Daily backup with version retention:**
Sync your Google Drive to Backblaze B2 nightly, with each day's displaced files stored in a dated backup folder. After 30 days, you can clean up old backup directories to manage storage costs.

**Team project protection:**
Sync a shared Dropbox folder to S3, using `--backup-dir` to capture any files that team members delete or overwrite. This acts as a lightweight audit trail without requiring premium versioning features from your cloud provider.

**Migration safety net:**
When migrating from one cloud to another, use `--backup-dir` during the initial sync to capture any destination files that would be overwritten. If the migration does not go as planned, you have a complete rollback point.

## Recovery Workflow

Restoring files from your backup directory is straightforward in RcloneView:

1. Open the **Remote Explorer** and navigate to your backup directory.
2. Browse the directory structure to find the file you need. The original folder hierarchy is preserved.
3. Use drag-and-drop or a copy operation to move the file back to its original location.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

Because backup directories are just regular folders on your remote, you can also browse them, download files, or even sync them to another location for archival purposes.

## Managing Backup Storage Over Time

Versioned backups accumulate over time, so it is important to have a retention strategy. Here are some approaches:

- **Date-based folders**: Use a dated backup directory path (e.g., `backup/2026-04-08`) and periodically delete folders older than your retention window.
- **Suffix-based cleanup**: When using `--suffix`, you can identify and remove files with old date suffixes.
- **Separate low-cost storage**: Point your backup directory to an affordable object storage provider like Wasabi or Backblaze B2, where long-term retention costs are minimal.

RcloneView's Explorer makes it easy to browse backup directories and delete outdated versions when you are ready to reclaim space.

## Best Practices for --backup-dir

- Always test your `--backup-dir` configuration with a dry run first to confirm files are being routed to the correct location.
- Keep the backup directory on the same remote as the destination when possible, since moves within the same remote are instant and do not consume bandwidth.
- Use consistent naming conventions for your backup paths so automated cleanup scripts can easily identify old versions.
- Combine `--backup-dir` with `--backup-dir` on a different remote for critical data, giving you both a quick-recovery local backup and a geographically separate archive.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a sync job with your source and destination remotes configured.
3. Add `--backup-dir remote:backup/YYYY-MM-DD` in the custom flags field to enable versioned syncs.
4. Run a dry run first to verify the configuration, then execute the job.

With `--backup-dir` configured, every sync operation becomes a safe, reversible process. You get the efficiency of one-way sync with the peace of mind that nothing is ever permanently lost.

---

**Related Guides:**

- [Browse and Manage Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Execute and Manage Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
