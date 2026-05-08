---
slug: fix-slow-folder-compare-large-directories-rcloneview
title: "Fix Slow Folder Compare for Large Directories — RcloneView Guide"
authors:
  - jay
description: "Speed up Folder Compare operations on large directories in RcloneView — covering checker concurrency, filter rules, and strategies for comparing millions of files efficiently."
keywords:
  - slow folder compare RcloneView
  - fix slow cloud directory comparison
  - RcloneView folder compare large files
  - speed up cloud folder comparison
  - RcloneView compare performance
  - large directory cloud comparison
  - folder compare timeout fix
  - optimize RcloneView compare
tags:
  - RcloneView
  - folder-comparison
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Slow Folder Compare for Large Directories — RcloneView Guide

> Comparing directories with tens of thousands of files can be slow if your settings aren't optimized. Here's how to tune RcloneView's Folder Compare for large-scale cloud directories.

RcloneView's Folder Compare is one of its most powerful features — it shows exactly which files differ between two locations, which exist only on one side, and which are identical. But comparing two S3 buckets with 500,000 files, or a NAS directory against a cloud archive, can be painfully slow if the configuration isn't tuned for the workload. These adjustments bring compare times from hours to minutes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reduce the Scope with Filters Before Comparing

The fastest way to speed up a folder compare is to reduce the number of files being compared. Use **Folder Compare with Filter** (PLUS license) to exclude file types you don't need to verify — for example, exclude `.tmp`, `.log`, and `.DS_Store` files that don't affect your data integrity assessment. You can also filter by folder name to compare only specific subdirectories of a large tree.

The filter syntax follows rclone's filter rules: `.tmp` excludes any file with that extension, `/.git/*` excludes files in a root `.git` directory, and `/archive/` skips an entire top-level folder. Applying these rules before starting the compare dramatically reduces the item count rclone needs to enumerate and hash.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare with filter to reduce scope in RcloneView" class="img-large img-center" />

## Adjust Checker Concurrency for Slow Backends

RcloneView's job settings include **Number of equality checkers**, which defaults to 8. For slow cloud backends (those with high latency or strict API rate limits), this high default can cause checkers to pile up waiting for API responses, which paradoxically slows things down. For providers like Google Drive, OneDrive, or slow WebDAV servers, try reducing checkers to 2–4.

Conversely, for fast S3-compatible backends like Wasabi or Cloudflare R2, increasing checkers to 16 or higher can significantly speed up listing large buckets. Test different values — the sweet spot varies by provider and network conditions.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring checker concurrency for folder compare in RcloneView" class="img-large img-center" />

## Use Size-Only Mode for Initial Passes

By default, rclone compares files by both size and modification time. For a quick initial pass over a very large directory, you can use size-only comparison to identify obvious discrepancies (files that exist on one side but not the other, or files with clearly different sizes) without incurring the overhead of checksum verification.

In RcloneView, you can pass `--size-only` as a Global Rclone Flag in **Settings → Embedded Rclone → Global Rclone Flags** for a compare session. This trades some accuracy for speed — use it for large initial audits, then follow up with a full checksum compare on suspicious files.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing folder compare history and timing in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Use **Folder Compare with Filter** (PLUS) to exclude irrelevant file types before comparing.
3. Lower checker concurrency to 2–4 for slow backends; raise it for fast S3 providers.
4. Use size-only mode for quick initial audits of very large directories.

With the right configuration, Folder Compare scales to millions of files across cloud providers without unnecessary delays.

---

**Related Guides:**

- [Folder Comparison Guide — Detect Differences with RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Filter Rules and Selective Sync with RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Check and Verify Cloud File Integrity with RcloneView](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)

<CloudSupportGrid />
