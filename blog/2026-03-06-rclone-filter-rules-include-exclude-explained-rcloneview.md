---
slug: rclone-filter-rules-include-exclude-explained-rcloneview
title: "Rclone Filter Rules Explained: Include and Exclude Patterns for Smarter Syncs"
authors:
  - tayson
description: "Master rclone's filter rules to sync only what you need. Learn include, exclude, filter-from, and min/max size/age patterns — with practical examples for RcloneView."
keywords:
  - rclone filter rules
  - rclone include exclude
  - rclone exclude folder
  - rclone filter from file
  - rclone sync specific files
  - rclone ignore files
  - rclone exclude pattern
  - rclone filter examples
  - rclone min size max size
  - rclone selective sync
tags:
  - RcloneView
  - rclone
  - filters
  - sync
  - feature
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Rclone Filter Rules Explained: Include and Exclude Patterns for Smarter Syncs

> Syncing everything is wasteful. Syncing the wrong things is dangerous. Rclone's filter rules let you precisely control what gets transferred — but the syntax can be confusing. This guide breaks it all down with practical examples.

When you sync or copy files between clouds, you rarely want everything. Maybe you need only `.pdf` files, or everything except `.tmp` files, or files modified in the last 7 days, or files under 100 MB. Rclone's filter system handles all of this — and RcloneView lets you configure these filters visually in your job settings.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## How Rclone Filters Work

Rclone processes filter rules **in order, top to bottom**. For each file, it checks the rules one by one:

1. If a rule matches, the file is included or excluded (depending on the rule).
2. If no rule matches, the file is **included by default**.

This "first match wins" behavior is critical to understand. Order matters.

## Basic Patterns

### Exclude specific files or folders

```
--exclude "*.tmp"
--exclude "node_modules/**"
--exclude ".DS_Store"
```

These patterns exclude:
- All `.tmp` files anywhere in the tree.
- The entire `node_modules` folder and its contents.
- All `.DS_Store` files (macOS metadata).

### Include specific files only

```
--include "*.pdf"
--include "*.docx"
```

When you use `--include`, rclone **automatically excludes everything else**. So `--include "*.pdf"` means "only sync PDFs, nothing else."

### Combine include and exclude

```
--include "*.jpg"
--include "*.png"
--exclude "*"
```

This explicitly includes only JPG and PNG files. The `--exclude "*"` at the end catches everything else.

## The --filter Flag

The `--filter` flag gives you both include and exclude in one rule:

```
--filter "+ *.pdf"
--filter "+ *.docx"
--filter "- *"
```

The `+` prefix means include, `-` means exclude. This is equivalent to separate `--include` and `--exclude` flags but more compact.

## Filter-From File

For complex rule sets, put your filters in a file:

```
--filter-from /path/to/filters.txt
```

**filters.txt:**
```
# Include documents
+ *.pdf
+ *.docx
+ *.xlsx

# Include images
+ *.jpg
+ *.png

# Exclude everything else
- *
```

Lines starting with `#` are comments. This is the recommended approach for any sync job with more than 2-3 rules.

## Directory Filters

### Exclude a specific directory

```
--exclude "backup/**"
```

The `**` means "this directory and everything inside it."

### Include only a specific directory

```
--include "/projects/**"
--exclude "*"
```

This syncs only the `projects` folder at the root level.

### Exclude directories by pattern

```
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "node_modules/**"
```

Common for developers syncing code repositories — skip version control and dependency folders.

## Size Filters

### Minimum file size

```
--min-size 1M
```

Skip files smaller than 1 MB. Useful for ignoring thumbnails or tiny cache files.

### Maximum file size

```
--max-size 100M
```

Skip files larger than 100 MB. Useful when you want documents but not video files.

### Size units

- `k` or `K` — Kilobytes
- `M` — Megabytes
- `G` — Gigabytes

Example: `--min-size 500k --max-size 2G` syncs files between 500 KB and 2 GB.

## Age Filters

### Only recent files

```
--max-age 7d
```

Sync only files modified in the last 7 days. Ideal for incremental backups of active projects.

### Only older files

```
--min-age 30d
```

Sync only files that haven't changed in 30 days. Useful for archiving stale data.

### Age units

- `ms` — Milliseconds
- `s` — Seconds
- `m` — Minutes
- `h` — Hours
- `d` — Days
- `w` — Weeks
- `M` — Months
- `y` — Years

## Practical Examples

### Example 1: Backup only documents

Sync PDFs, Word docs, and spreadsheets from Google Drive to Backblaze B2:

```
--include "*.pdf"
--include "*.docx"
--include "*.xlsx"
--include "*.pptx"
--exclude "*"
```

### Example 2: Skip large video files

Sync everything except video files over 500 MB:

```
--exclude "*.mp4"
--exclude "*.mov"
--exclude "*.avi"
--exclude "*.mkv"
```

Or use size filtering: `--max-size 500M`

### Example 3: Developer project sync

Sync a code project without dependencies and build artifacts:

```
--exclude "node_modules/**"
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "dist/**"
--exclude "build/**"
--exclude "*.pyc"
```

### Example 4: Archive files older than 90 days

Move old files from Google Drive to S3 Glacier:

```
--min-age 90d
```

### Example 5: Photo backup (skip RAW, keep JPEG)

```
--include "*.jpg"
--include "*.jpeg"
--include "*.png"
--include "*.heic"
--exclude "*.cr2"
--exclude "*.nef"
--exclude "*.arw"
--exclude "*"
```

## Using Filters in RcloneView

When creating a sync or copy job in RcloneView, you can add filter rules in the job configuration. These are passed directly to rclone:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure filter rules in RcloneView jobs" class="img-large img-center" />

### Dry run to verify

Always use dry run first when testing new filter rules. This shows you exactly which files would be included or excluded without actually transferring anything.

### Folder Comparison with filters

Use [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) to see the state of your source and destination. Combined with filters, this helps you understand exactly what will be synced.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison to verify filter results" class="img-large img-center" />

## Common Mistakes

### Forgetting the trailing `**` for directories

```
# Wrong — only excludes a FILE named "logs"
--exclude "logs"

# Right — excludes the logs DIRECTORY and everything in it
--exclude "logs/**"
```

### Including without excluding the rest

```
# This includes PDFs but doesn't exclude anything else
--include "*.pdf"

# This works — include already implies "exclude everything else"
# But only when using --include alone
```

### Order matters

```
# This excludes everything, then tries to include (too late!)
--exclude "*"
--include "*.pdf"

# This works — include first, then exclude the rest
--include "*.pdf"
--exclude "*"
```

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Create a job** with filter rules in the configuration.
3. **Dry run first** to verify your filters catch the right files.
4. **Run the job** once you're confident.
5. **Use filter-from files** for complex, reusable rule sets.

Filters turn a blunt "sync everything" into a precise "sync exactly what I need." Master them once, use them everywhere.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Set Bandwidth Limits](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
