---
slug: rclone-ncdu-storage-analysis-rcloneview
title: "Analyze Cloud Storage Usage with Rclone NCDU in RcloneView"
authors: [tayson]
description: "Use rclone ncdu through RcloneView to analyze cloud storage usage, find large files, and manage disk space across multiple cloud providers."
keywords:
  - rclone ncdu
  - cloud storage analysis
  - disk usage cloud
  - rcloneview storage analyzer
  - find large files cloud
  - cloud storage space
  - rclone disk usage
  - storage usage breakdown
  - cloud folder size
  - analyze remote storage
tags: [RcloneView, feature, cloud-storage, tips, guide, cli, monitoring, dashboard, performance]
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Analyze Cloud Storage Usage with Rclone NCDU in RcloneView

> Discover exactly where your cloud storage space is going with rclone's powerful NCDU tool, accessible directly through RcloneView's integrated terminal.

Cloud storage costs can creep up silently. A forgotten backup folder here, a batch of uncompressed video files there, and suddenly you are paying for terabytes of storage you did not realize you were using. Rclone includes a built-in NCDU (NCurses Disk Usage) tool that scans your remote storage and presents an interactive, navigable breakdown of directory sizes. Through RcloneView's integrated terminal and file explorer, you can run ncdu scans, identify space-consuming files and folders, and take immediate action to reclaim storage. This guide covers everything from basic scans to advanced analysis workflows across multiple cloud providers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Is Rclone NCDU?

Rclone NCDU is a cloud-adapted version of the classic Linux `ncdu` (NCurses Disk Usage) utility. While the original ncdu analyzes local filesystems, rclone's implementation works with any remote storage backend that rclone supports, including Google Drive, Amazon S3, Dropbox, OneDrive, Backblaze B2, and over 70 other providers.

When you run `rclone ncdu`, it performs a recursive scan of the specified remote path, calculating the size of every file and directory. The results are presented in an interactive terminal interface where you can:

- **Navigate directories** to drill down into nested folder structures
- **Sort by size** to immediately see the largest consumers of space
- **Sort by count** to find directories with excessive numbers of small files
- **Mark files for deletion** directly from the interface
- **Export results** for offline analysis or reporting

The key advantage over simply browsing your cloud storage is speed and comprehensiveness. A manual review of thousands of folders is impractical, but ncdu scans everything in one pass and presents the results in a prioritized, actionable format.

**How it differs from provider-specific tools:**

Most cloud providers offer some form of storage usage display, but they are often limited:
- Google Drive shows total usage but does not break it down by folder
- S3 requires CloudWatch metrics or third-party tools for detailed analysis
- Dropbox shows usage per shared folder but misses nested structure

Rclone ncdu provides a consistent, detailed analysis regardless of which provider you use.

## Running Your First NCDU Scan

Getting started with ncdu through RcloneView is straightforward. Open RcloneView's integrated terminal or use the file explorer for a visual approach.

**Via RcloneView's terminal:**

```bash
rclone ncdu remote:
```

Replace `remote:` with the name of your configured remote. For example:

```bash
rclone ncdu gdrive:
rclone ncdu s3:my-bucket
rclone ncdu dropbox:/Documents
```

**Scanning a specific subdirectory:**

If you only want to analyze a portion of your storage, specify the path:

```bash
rclone ncdu gdrive:/Projects/2025
```

This is significantly faster than scanning the entire remote, especially for large storage accounts.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

**Understanding the scan process:**

When ncdu starts, it recursively lists every file and directory on the remote. The time this takes depends on:

| Factor | Impact |
|--------|--------|
| Total number of files | Primary factor; 100K files may take several minutes |
| API rate limits | Google Drive limits to ~10 requests/second |
| Network latency | Higher latency slows API calls |
| Directory depth | Deeply nested structures require more API calls |

For a Google Drive with 50,000 files, expect a scan time of 2-5 minutes. For an S3 bucket with millions of objects, consider scanning specific prefixes rather than the entire bucket.

## Navigating the NCDU Interface

Once the scan completes, you are presented with an interactive display. Here is how to navigate it effectively.

**Keyboard controls:**

| Key | Action |
|-----|--------|
| Arrow Up/Down | Move selection between items |
| Enter / Arrow Right | Enter selected directory |
| Arrow Left | Go back to parent directory |
| d | Delete selected file or directory |
| s | Toggle sort by size |
| c | Toggle sort by count (number of files) |
| g | Toggle graph display |
| n | Sort by name |
| q | Quit ncdu |

**Reading the display:**

Each line in the ncdu output shows:
- The size of the directory or file (in human-readable format)
- A visual bar graph showing the relative size compared to siblings
- The number of files contained (for directories)
- The name of the directory or file

The largest items appear at the top by default, making it immediately obvious where your storage is being consumed.

**Practical navigation workflow:**

1. Start at the root level to see which top-level folders are largest.
2. Enter the largest folder to see its contents.
3. Continue drilling down until you find the specific files or subdirectories consuming space.
4. Note the paths of items you want to clean up.
5. Use RcloneView's file explorer to delete, move, or archive those items.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Finding Large Files and Forgotten Data

The most common use case for ncdu is finding unexpectedly large files and forgotten data. Here are strategies for identifying different types of storage waste.

**Identifying large media files:**

Video files, disk images, and uncompressed archives are frequent offenders. When you sort by size in ncdu, these typically bubble to the top immediately. Common culprits include:

- Screen recordings and video exports left in working directories
- Virtual machine disk images uploaded as backups
- Uncompressed ZIP or TAR archives that could be compressed
- Duplicate copies of large datasets across different folders

**Finding stale backups:**

Many users set up automated backups and forget about them. Look for:
- Directories named `backup`, `archive`, `old`, or containing date stamps
- Multiple timestamped copies of the same data
- Database dumps that accumulate over time without cleanup

**Detecting duplicate files across providers:**

If you use ncdu across multiple remotes, you might discover the same data stored redundantly:

```bash
# Scan Google Drive
rclone ncdu gdrive:/Backups

# Scan S3
rclone ncdu s3:my-backup-bucket

# Compare the results to find overlapping data
```

**Large file types by provider:**

Different providers attract different types of storage waste:

| Provider | Common Large Files |
|----------|--------------------|
| Google Drive | Shared videos, Colab notebooks with outputs, old Takeout exports |
| S3 | Log archives, old deployment artifacts, uncompressed data lakes |
| OneDrive | OneNote blobs, shared team files, Outlook attachment copies |
| Dropbox | Camera upload duplicates, old shared folders |

## Exporting and Comparing Results

For ongoing storage management, you will want to export ncdu results and track changes over time.

**Exporting scan results to a file:**

Rclone's `size` command complements ncdu by providing scriptable output:

```bash
# Get total size of a remote
rclone size gdrive: --json

# List directories with their sizes
rclone lsf gdrive: --dirs-only -R --format "sp" | sort -t ';' -k1 -rn | head -20
```

**Creating a storage usage report:**

Combine rclone commands to build a comprehensive report:

```bash
# Generate a JSON report of all file sizes
rclone lsjson gdrive: -R --no-modtime --no-mimetype > storage-report.json

# Use rclone size for quick summaries
rclone size gdrive:/Projects
rclone size gdrive:/Backups
rclone size gdrive:/Media
```

**Comparing usage across providers:**

If you manage multiple cloud accounts, run ncdu or size commands against each to compare:

```bash
echo "=== Google Drive ===" && rclone size gdrive:
echo "=== S3 ===" && rclone size s3:my-bucket
echo "=== Dropbox ===" && rclone size dropbox:
echo "=== OneDrive ===" && rclone size onedrive:
```

This gives you a clear picture of how storage is distributed and where optimization efforts will have the most impact.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Advanced NCDU Techniques

Beyond basic scanning, several advanced techniques can make your storage analysis more effective.

**Filtering scans:**

Use rclone's filter flags to focus your analysis:

```bash
# Only scan files larger than 100 MB
rclone ncdu gdrive: --min-size 100M

# Exclude certain directories from the scan
rclone ncdu gdrive: --exclude "node_modules/**" --exclude ".git/**"

# Only scan specific file types
rclone ncdu s3:my-bucket --include "*.{mp4,avi,mkv,mov}"
```

**Caching scan results:**

For very large remotes, scanning can take a long time. Enable rclone's directory cache to speed up repeated scans:

```bash
rclone ncdu gdrive: --fast-list
```

The `--fast-list` flag uses fewer API calls by requesting directory listings in bulk. This can reduce scan times by 50% or more on providers that support it (S3, Google Drive, B2).

**Analyzing shared storage:**

On Google Drive, storage used by files shared with you does not count against your quota, but files you own in shared drives do. Use ncdu to scan specific shared drives:

```bash
rclone ncdu gdrive: --drive-shared-with-me
rclone ncdu gdrive,shared_drive_id=DRIVE_ID:
```

**Scheduling regular scans:**

Set up automated storage reports using cron or RcloneView's job scheduler:

```bash
# Weekly storage report
0 8 * * MON rclone size gdrive: --json >> /var/log/storage-usage.json
```

## Taking Action on Findings

After identifying storage waste, use RcloneView to take action directly.

**Deleting unnecessary files:**

From the ncdu interface, press `d` on any file or directory to delete it. Alternatively, use RcloneView's file explorer to browse to the identified paths and delete files with the GUI.

**Moving cold data to cheaper storage:**

If you find large datasets that you need to keep but rarely access, move them to a cheaper storage tier:

```bash
# Move old archives from Google Drive to Backblaze B2
rclone move gdrive:/Archives/2023 b2:cold-archive/2023 --progress
```

RcloneView's two-pane explorer makes this drag-and-drop simple.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

**Compressing before archiving:**

For text-heavy data like logs and CSVs, compress before transferring to cold storage:

```bash
# Compress locally, then upload
tar czf archive.tar.gz /path/to/data
rclone copy archive.tar.gz b2:compressed-archives/
```

**Setting up lifecycle policies:**

After cleaning up, prevent future storage bloat by configuring automated cleanup. Use RcloneView's job scheduling to run periodic cleanup tasks:

- Delete files older than a certain age: `rclone delete remote: --min-age 365d`
- Remove empty directories: `rclone rmdirs remote: --leave-root`
- Deduplicate files on Google Drive: `rclone dedupe gdrive: --dedupe-mode newest`

## Getting Started

Rclone NCDU is one of the most immediately valuable tools in the rclone ecosystem. A single scan can reveal gigabytes of forgotten data, duplicate files, and storage waste that you had no idea existed. Through RcloneView, you can run these scans, review the results, and take action without ever leaving the application. Start by scanning your largest cloud storage account, sort by size, and work through the top 10 largest items. You will likely find significant savings in your first session.

---

**Related Guides:**
- [Browse and Manage Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Real-Time Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
