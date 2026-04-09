---
slug: lsf-lsjson-remote-file-listing-rcloneview
title: "List and Analyze Remote Files with RcloneView Explorer"
authors:
  - tayson
description: "Use RcloneView Explorer to visually list, sort, and analyze remote cloud files. Replace rclone lsf and lsjson commands with an intuitive GUI for file management."
keywords:
  - rcloneview
  - rclone lsf
  - rclone lsjson
  - remote file listing
  - cloud storage analysis
  - file size analysis
  - cloud file management
  - storage usage
  - directory comparison
  - cloud file explorer
tags:
  - RcloneView
  - feature
  - file-management
  - tips
  - guide
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# List and Analyze Remote Files with RcloneView Explorer

> Understanding what is stored across your cloud accounts is the first step to managing them effectively. **RcloneView** Explorer provides a visual file listing experience that replaces complex CLI commands with intuitive browsing, sorting, and analysis.

The rclone CLI offers powerful file listing commands like `lsf` and `lsjson` that output file details in various formats. These commands are useful for scripting, but they are not ideal for day-to-day file exploration. Reading through thousands of lines of terminal output to find a specific file or identify storage hogs is tedious and error-prone.

RcloneView's Explorer transforms this experience into something visual and interactive. You get the same underlying data, but presented in a familiar file manager interface with sorting, filtering, and multi-column views. You can see file sizes, modification dates, and types at a glance, and drill into directory structures with a single click.

For users who still need raw CLI output, RcloneView's built-in terminal puts `rclone lsf` and `lsjson` commands a keystroke away, giving you the best of both worlds in one application.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Visual File Listing in the Explorer

RcloneView's Explorer panel displays the contents of any configured remote in a standard file manager layout. When you select a remote and navigate to a directory, you see:

- **File and folder names** with recognizable icons for common file types.
- **File sizes** displayed in human-readable format (KB, MB, GB).
- **Modification dates** showing when each file was last updated.
- **File counts** for directories, so you can see how many items each folder contains.

This is the visual equivalent of running `rclone lsf --format "pst" remote:path`, but with the ability to interact with every item directly. Click a folder to open it. Right-click a file for actions like copy, move, or delete. Select multiple files for batch operations.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Sorting by Size, Date, and Name

One of the most common reasons to list remote files is finding specific items or identifying patterns. RcloneView's Explorer supports column-based sorting that makes this trivial:

- **Sort by size** to quickly find the largest files consuming your storage quota. This is especially useful for cloud providers with storage limits, where a few large files might account for most of your usage.
- **Sort by date** to identify recently modified files, find stale content that has not been touched in months, or verify that a recent sync operation updated the expected files.
- **Sort by name** for alphabetical browsing when you know approximately what you are looking for.

Click any column header to sort by that column. Click again to reverse the sort order. This simple interaction replaces piping `rclone lsf` output through `sort` commands on the CLI.

## Finding Large Files and Analyzing Storage Usage

Storage costs add up, and knowing where your space is going is essential for cost management. RcloneView helps you analyze storage usage without running separate audit scripts:

1. Navigate to the root of a remote in the Explorer.
2. Sort by size in descending order to surface the largest files immediately.
3. Drill into large directories to see which subdirectories contribute the most to total usage.

This workflow replaces the common CLI pattern of running `rclone lsjson --recursive remote: | jq 'sort_by(.Size) | reverse'` and trying to parse the JSON output visually. In the Explorer, the same information is presented in a sortable, clickable interface.

For a deeper analysis, you can use RcloneView's built-in terminal to run `rclone ncdu remote:` which provides an interactive storage usage breakdown directly within the application.

## Comparing Directory Trees

RcloneView's two-pane Explorer layout is designed for comparing directory contents across remotes. Load one remote on the left and another on the right, then visually compare their structures:

- Identify files that exist on one remote but not the other.
- Spot differences in file sizes that might indicate incomplete transfers.
- Verify that a sync operation produced the expected results.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

The built-in compare feature goes further, highlighting differences between two directories automatically. This is the visual equivalent of running `rclone check source: dest:` but with an interactive display that lets you act on differences immediately.

## Using the Built-in Terminal for Advanced Queries

For advanced file listing needs that go beyond what the visual Explorer provides, RcloneView includes a built-in terminal. This gives you direct access to all rclone CLI commands, including:

**`rclone lsf`** for simple formatted listings:
```
rclone lsf remote:documents --format "pst" --recursive
```
This lists all files with path, size, and timestamp in a flat format suitable for piping or saving.

**`rclone lsjson`** for structured data:
```
rclone lsjson remote:documents --recursive --no-modtime
```
This outputs file metadata as JSON, which is useful for programmatic analysis or feeding into other tools.

**`rclone size`** for storage summaries:
```
rclone size remote:
```
This provides a quick total of files and bytes stored on a remote.

The terminal runs within RcloneView, so you do not need to open a separate console or configure rclone paths. Your existing remote configurations are already available.

## Browsing Multiple Remotes Simultaneously

RcloneView's Explorer supports opening multiple remotes at the same time. This is particularly useful for users who manage files across several cloud providers:

- Open Google Drive in one pane and OneDrive in the other to compare folder structures.
- Browse an S3 bucket while referencing the corresponding local directory.
- Check files on Backblaze B2 and Wasabi side by side to verify a cross-provider backup.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

Each pane operates independently, so you can navigate, sort, and browse at your own pace without affecting the other pane. When you find files that need to move between remotes, simply drag and drop.

## Practical File Analysis Workflows

Here are some common file analysis tasks and how to accomplish them in RcloneView:

**Audit cloud storage before a migration:**
Browse the source remote, sort by date to identify active vs. stale files, and decide what to migrate vs. what to archive or delete. This preparation step can significantly reduce migration time and cost.

**Verify backup completeness:**
Open the source and backup remotes side by side, navigate to the same directory on each, and use the compare feature to confirm all files were copied correctly.

**Find duplicate or obsolete files:**
Sort by name to spot files with similar names, or sort by date to find files that have not been modified in years. Remove unnecessary files to free up storage quota and reduce costs.

**Generate a file inventory:**
Use the built-in terminal to run `rclone lsjson --recursive remote:` and save the output for documentation, compliance, or auditing purposes.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your cloud storage remotes in the Remote Manager.
3. Open the Explorer and browse any remote to see files with sizes, dates, and types.
4. Use sorting, comparison, and the built-in terminal for deeper analysis.

Whether you need a quick visual scan or a detailed file inventory, RcloneView's Explorer puts all the information at your fingertips without requiring you to remember CLI syntax.

---

**Related Guides:**

- [Browse and Manage Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Compare folder contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Real-time Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
