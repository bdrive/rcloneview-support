---
slug: chunker-remote-split-large-files-rcloneview
title: "Chunker Remote — Split Large Files for Cloud Providers with Size Limits in RcloneView"
authors:
  - tayson
description: "Some cloud providers reject files above certain sizes. Rclone's chunker remote automatically splits large files into pieces for upload and reassembles them on download."
keywords:
  - rclone chunker remote
  - split large files cloud
  - cloud file size limit
  - upload large files cloud
  - chunked upload cloud
  - large file cloud storage
  - rclone split files
  - file size limit workaround
  - cloud upload size limit
  - chunker rcloneview
tags:
  - RcloneView
  - feature
  - performance
  - cloud-storage
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Chunker Remote — Split Large Files for Cloud Providers with Size Limits in RcloneView

> Your video file is 15 GB. Your cloud provider's upload limit is 5 GB. Instead of re-encoding the video or finding another provider, the chunker remote splits it automatically.

Some cloud storage providers impose maximum file size limits. Google Drive caps at 5 TB (rarely an issue), but other providers — especially free tiers, WebDAV endpoints, and some S3-compatible services — have much lower limits. Rclone's chunker remote solves this by transparently splitting large files into chunks for upload and reassembling them on download.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## How Chunker Works

A chunker remote wraps another remote and:

1. **Splits files** above a configurable size into numbered chunks
2. **Uploads chunks** individually to the cloud provider
3. **On download**, reassembles chunks into the original file
4. **Transparently** — you see the original file in the explorer, not the chunks

For example, a 15 GB file with a 5 GB chunk size becomes three 5 GB chunks on the provider. When you browse or download, it appears as a single 15 GB file.

## When You Need Chunker

| Scenario | Solution |
|----------|----------|
| Provider has file size limit | Chunker splits above the limit |
| WebDAV server rejects large uploads | Chunk into smaller pieces |
| Free tier with per-file limits | Split to fit within limits |
| Network drops on large uploads | Smaller chunks = easier retries |

## Set Up a Chunker Remote

<img src="/support/images/en/blog/new-remote.png" alt="Create chunker remote" class="img-large img-center" />

Create a chunker remote that wraps your target storage remote. Configure the chunk size based on your provider's limits.

## Combine with Other Remotes

Chunker can be layered with other special remotes:

- **Chunker + Crypt**: Split AND encrypt large files
- **Chunker + Compress**: Split AND compress large files
- **Chunker + any provider**: Works with all 70+ providers

## Important Notes

- **Chunks are provider-specific**: files chunked for one provider must be accessed through the same chunker configuration
- **Don't modify chunks directly**: always access through the chunker remote to maintain integrity
- **Choose chunk size wisely**: too small creates many files (slower listing); too large defeats the purpose

## Use Cases

### Back up VM images

Virtual machine disk images are often 50-200 GB. Chunker splits them for providers with upload limits.

### Archive large media files

4K video files, raw audio masters, and large datasets that exceed single-file limits.

### Improve upload reliability

Smaller chunks are easier to retry when network connections are unreliable. If a 1 GB chunk fails, you retry 1 GB instead of the entire 50 GB file.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add your storage remote** normally.
3. **Create a chunker remote** wrapping it.
4. **Upload large files** through the chunker.

No file too large, no provider limit too small.

---

**Related Guides:**

- [Compress Remote](https://rcloneview.com/support/blog/compress-remote-reduce-backup-size-rcloneview)
- [Virtual Remotes: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Encrypt Cloud Backups](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
