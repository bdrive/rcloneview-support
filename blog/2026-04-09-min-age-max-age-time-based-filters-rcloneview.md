---
slug: min-age-max-age-time-based-filters-rcloneview
title: "Use Min-Age and Max-Age Time-Based Filters in RcloneView"
authors:
  - tayson
description: "Use min-age and max-age time-based filters in RcloneView to sync, copy, or back up only files modified within a specific time window. Transfer recent changes or skip old files."
keywords:
  - rcloneview
  - min-age filter
  - max-age filter
  - time-based sync
  - rclone min-age
  - rclone max-age
  - sync recent files only
  - filter by date
  - incremental sync time
  - cloud sync filter date
tags:
  - feature
  - filters
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Use Min-Age and Max-Age Time-Based Filters in RcloneView

> Not every sync job needs to transfer all files. RcloneView's time-based filters let you target only files modified within a specific window — sync today's changes, skip files older than 30 days, or back up only recent uploads.

Rclone's `--min-age` and `--max-age` flags are powerful tools for controlling which files participate in a sync, copy, or move operation based on their modification time. RcloneView exposes these options through its custom flags interface, enabling precise control over time-based file selection without touching the command line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Understanding Min-Age and Max-Age

The two flags work as time-based filters on file modification dates:

- **`--max-age`**: Only include files modified within the specified time window. A file modified 2 hours ago passes `--max-age 24h`. A file modified 3 days ago fails `--max-age 24h` and is skipped.
- **`--min-age`**: Only include files modified *before* the specified time window. A file modified 30 days ago passes `--min-age 7d`. A file modified yesterday fails `--min-age 7d` and is skipped.

Think of it this way:
- `--max-age 24h` = "files newer than 24 hours" (recently modified)
- `--min-age 7d` = "files older than 7 days" (not recently modified)

## Time Format

Both flags accept flexible time formats:

| Format | Example | Meaning |
|---|---|---|
| Duration | `30s`, `5m`, `2h`, `7d`, `4w` | Seconds, minutes, hours, days, weeks |
| Combined | `1d2h30m` | 1 day, 2 hours, 30 minutes |
| Absolute date | `2026-04-01` | Files before/after April 1, 2026 |
| Date and time | `2026-04-01T15:00:00` | Files before/after April 1 at 3 PM |

Duration values are relative to the current time when the job runs.

## Use Case 1: Sync Only Today's Changes

When you have a large cloud storage with terabytes of data but only want to sync files that changed today:

```
--max-age 24h
```

Add this to the custom flags field in RcloneView's job configuration. The sync job will only consider files modified in the last 24 hours, dramatically reducing the time spent listing and comparing files. This is useful for daily incremental backups where you know only a small percentage of files change each day.

## Use Case 2: Archive Old Files

Move files older than 90 days from active storage to cold storage:

```
--min-age 90d
```

Use this with a **move** operation (not sync) to transfer files older than 90 days from Google Drive to S3 Glacier. The files are removed from Google Drive after successful transfer, freeing up space on the active storage while preserving them in the archive.

## Use Case 3: Time-Window Sync

Combine both flags to target a specific time window. For example, sync files modified between 7 and 30 days ago:

```
--min-age 7d --max-age 30d
```

This is useful for staged archival workflows — files less than 7 days old stay on active storage, files between 7 and 30 days move to warm storage, and files older than 30 days move to cold storage.

## Use Case 4: Skip Recently Modified Files

During a migration, you might want to skip files that are actively being edited to avoid transferring incomplete work:

```
--min-age 1h
```

This ensures only files that have been stable for at least an hour are transferred. Files currently being edited or saved are left for the next sync run.

## Use Case 5: Nightly Backup of Recent Work

For a nightly backup job that captures only the day's work:

```
--max-age 25h
```

Using 25 hours (instead of 24) provides a 1-hour overlap with the previous day's backup, ensuring no files are missed due to timing differences between the backup schedule and file modification times.

## Applying Time Filters in RcloneView

In RcloneView's job configuration:

1. Open the sync or copy job settings.
2. Navigate to the advanced options or custom flags section.
3. Add `--max-age 24h` or `--min-age 7d` (or both) to the flags field.
4. Save the job and run it.

The flags apply to every file comparison during the job. Files that do not meet the time criteria are skipped entirely — they are not listed, compared, or transferred. This can significantly reduce job duration for large remote storages.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a time-filtered sync job in RcloneView" class="img-large img-center" />

## Combining with Other Filters

Time-based filters work alongside other rclone filter options:

- **With include/exclude**: `--max-age 24h --include "*.pdf"` syncs only PDF files modified in the last 24 hours.
- **With size filters**: `--max-age 7d --min-size 1M` syncs only files larger than 1 MB modified in the last week.
- **With directory filters**: `--max-age 24h --include "/projects/**"` limits the scope to a specific directory.

This composability lets you build precise transfer rules without complex scripts.

## Dry Run First

Before running a time-filtered job on production data, use RcloneView's dry run mode to preview which files will be affected. Dry run lists the files that match your filter criteria without actually transferring them. This confirms that your `--min-age` and `--max-age` values select the right files before committing to the operation.

## Common Pitfalls

- **Time zones**: Modification times are compared in UTC. If your local time zone is significantly offset from UTC, adjust your duration values accordingly or use absolute date formats.
- **Provider accuracy**: Some cloud providers (notably Google Drive) report modification times with limited precision. A file modified "today" on Google Drive might have a timestamp that differs by several seconds from the actual modification time.
- **Sync vs. Copy with min-age**: Using `--min-age` with sync can be dangerous — sync deletes files on the destination that do not exist on the source. If `--min-age` filters out recent files from the source listing, sync may delete them on the destination. Use copy (not sync) when using `--min-age` to avoid unintended deletions.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a sync or copy job in the job manager.
3. Add `--max-age` or `--min-age` flags in the custom flags section.
4. Test with dry run to verify the file selection.
5. Schedule the job for automated time-based backups.

Time-based filters turn RcloneView into a precision tool for incremental backups, staged archival, and targeted sync operations. Use them to reduce transfer time, minimize bandwidth usage, and implement sophisticated data lifecycle workflows.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
