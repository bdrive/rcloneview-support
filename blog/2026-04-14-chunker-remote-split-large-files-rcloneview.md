---
slug: chunker-remote-split-large-files-rcloneview
title: "Chunker Remote — Upload Large Files Beyond Provider Limits in RcloneView"
authors:
  - tayson
description: "Use RcloneView's Chunker virtual remote to split large files for cloud providers with file size restrictions. Upload multi-GB files to any storage service without limits."
keywords:
  - rclone Chunker remote
  - split large files cloud upload
  - upload large files cloud storage
  - chunker virtual remote RcloneView
  - bypass cloud file size limit
  - rclone large file chunking
  - cloud storage file size restriction workaround
  - RcloneView Chunker feature
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Chunker Remote — Upload Large Files Beyond Provider Limits in RcloneView

> RcloneView supports rclone's Chunker virtual remote, which transparently splits large files into smaller chunks for upload to providers with file size restrictions — and reassembles them on download.

Some cloud storage providers impose per-file size limits: Dropbox and Google Drive allow up to 5 TB per file, but many S3-compatible providers, WebDAV servers, and specialized services cap individual objects at 5 GB or less. If you need to store a 15 GB virtual machine image or a 20 GB database dump on one of these providers, you'd normally need to manually split the file with tools like `split` or 7-Zip. The Chunker virtual remote in rclone — accessible through RcloneView — handles this automatically and transparently.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What the Chunker Remote Does

The Chunker remote is a virtual remote that wraps an existing remote (e.g., a Wasabi S3 bucket or a WebDAV server). When you upload a file through the Chunker remote, it splits the file into fixed-size chunks (you define the chunk size), uploads each chunk individually, and writes a metadata file that describes how to reassemble them. When you download the file through the same Chunker remote, rclone reads the metadata and reconstructs the original file — the process is completely transparent.

This means you can store 50 GB `.vmdk` files on a provider that enforces a 5 GB per-object limit, access them normally through RcloneView, and download or sync them without any manual assembly.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Chunker virtual remote in RcloneView" class="img-large img-center" />

## Setting Up a Chunker Remote in RcloneView

Go to **Remote tab → New Remote** and scroll down to **Chunker** in the virtual remote section. Configure:

1. **Remote** — the underlying storage remote (e.g., `wasabi:my-bucket/chunks/`)
2. **Chunk size** — default is 2 GB; set this below your provider's per-file limit (e.g., 4 GB for providers with a 5 GB limit, leaving headroom)
3. **Metadata format** — `simplejson` (default) stores metadata as a sidecar `.json` file alongside the chunks

Save the Chunker remote. It now appears in RcloneView's Explorer alongside your other remotes. Browse to it, and it behaves like any other remote — you see reassembled files, not individual chunks.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Uploading large files through the Chunker remote in RcloneView" class="img-large img-center" />

## Use Cases for Chunker in Practice

**VM image backups:** A DevOps team backing up Proxmox or ESXi virtual machine images to a WebDAV server (which caps at 2 GB per object) can use Chunker to store 10–50 GB `.vmdk` and `.qcow2` images transparently.

**Database dump archives:** A 25 GB PostgreSQL dump can be stored on a provider with a 5 GB file size limit using 4 GB chunks. The DBA never sees the chunked representation — downloading through the Chunker remote reconstructs the original file.

**Archive files:** A 30 GB `.tar.gz` backup of a media project can be synced to any provider, regardless of per-file limits.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Syncing chunked large files in a scheduled RcloneView job" class="img-large img-center" />

## Important Limitations

- Files chunked by one version of rclone must be accessed by rclone through the Chunker remote — they cannot be downloaded via a provider's native web interface
- The underlying provider must support the chunk size you set; for S3, chunks must be at least 5 MB for multipart uploads
- Chunker works best for archive/backup scenarios, not frequently modified files

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your underlying storage provider (S3, WebDAV, etc.) as a remote first.
3. Create a Chunker virtual remote wrapping that provider, setting chunk size below the per-file limit.
4. Use the Chunker remote as your sync target for large-file jobs in the Job Manager.

The Chunker remote makes RcloneView's large-file support universal — no provider file size limit is an obstacle when you can split and reassemble transparently.

---

**Related Guides:**

- [Virtual Remotes — Combine, Union, and Alias in RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Upload Large Files to Google Drive Sync with RcloneView](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [Fix Connection Timeout on Large File Uploads with RcloneView](https://rcloneview.com/support/blog/fix-rclone-connection-timeout-large-file-upload-rcloneview)

<CloudSupportGrid />
