---
slug: rclone-chunker-split-large-files-cloud-rcloneview
title: "Rclone Chunker Remote — Split Large Files for Any Cloud Storage in RcloneView"
authors:
  - tayson
description: "Use rclone's Chunker virtual remote in RcloneView to split large files and upload them to cloud providers with strict per-file size limits."
keywords:
  - rclone chunker
  - split large files cloud
  - chunker remote RcloneView
  - large file upload limit
  - cloud file size limit workaround
  - rclone chunker guide
  - split file upload cloud
  - virtual remote chunker
  - rclone virtual remote
  - large file cloud storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Rclone Chunker Remote — Split Large Files for Any Cloud Storage in RcloneView

> When a cloud provider's per-file size limit blocks your upload, rclone's Chunker virtual remote splits files transparently — RcloneView configures and uses it without any CLI required.

Many cloud storage providers impose strict per-file size limits — Dropbox caps uploads at 50 GB per file, and some free or budget-tier services enforce caps of 5–10 GB. For users storing database dumps, uncompressed video exports, or large archive files that exceed these limits, rclone's **Chunker** virtual remote provides the solution: it splits files into smaller chunks before upload and transparently reassembles them on download. RcloneView configures and uses Chunker through its standard remote management interface.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What is the Chunker Remote?

Chunker is one of rclone's **virtual remote wrappers** — a layer that modifies how files are handled before they reach the actual cloud backend. Unlike standard remotes that connect directly to a cloud provider, Chunker intercepts files exceeding a configured size limit and splits them into multiple pieces before upload. Each chunk is stored as a separate file with a naming convention that rclone recognizes for transparent reassembly when you read or download through the same Chunker remote.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Chunker virtual remote in RcloneView" class="img-large img-center" />

In RcloneView, virtual remotes like Chunker are created through the same **Remote tab > New Remote** workflow as standard remotes — you select Chunker as the provider, specify the base remote, and configure the chunk size. The result appears in the explorer alongside your other remotes, with transparent chunking invisible to your workflow.

## Creating a Chunker Remote in RcloneView

1. First, ensure your base remote is already configured (for example, your Dropbox or OneDrive remote).
2. Go to **Remote tab > New Remote** and select **Chunker** from the virtual remote section.
3. Specify the **underlying remote** (your pre-configured base remote) and an optional subdirectory within it.
4. Set the **chunk size** below your provider's file size limit — for example, 4 GB for most providers, or 45 GB for Dropbox to stay under the 50 GB cap.
5. Save the Chunker remote — it now appears in the explorer just like any other remote.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Using a Chunker remote for large file uploads in RcloneView" class="img-large img-center" />

When you drag a 30 GB video file to the Chunker remote, RcloneView uploads it as multiple chunks (for example, eight 4-GB files) to the underlying cloud. Reading the file back through the same Chunker remote reassembles it transparently — your application sees one continuous file.

## Practical Use Cases

A data engineer archiving 20 GB database dumps nightly to a cloud service with a 10 GB file limit creates a Chunker remote wrapping that service with 8 GB chunks. The Job Manager sync job runs the same way as any other cloud transfer — the chunking is completely transparent to the job configuration.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling large file uploads via Chunker remote in RcloneView" class="img-large img-center" />

**Combining Chunker with Crypt** creates an advanced virtual remote stack: wrap your base remote with **Crypt** first (for end-to-end encryption), then wrap the Crypt remote with **Chunker** (for splitting). The result: chunks are encrypted before upload, and the provider sees only opaque encrypted blobs split into size-limited pieces. This is an excellent approach for sensitive large files on any cloud provider — RcloneView handles both layers through its standard remote management, no CLI required.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your base cloud remote (the provider with file size limits) as a standard remote.
3. Go to **Remote tab > New Remote**, select **Chunker**, and specify your base remote and chunk size.
4. Transfer large files through the Chunker remote — splitting and reassembly happen transparently.

Chunker unlocks large-file cloud storage on providers that would otherwise reject the upload — a powerful virtual remote for data-intensive workflows where file size limits would otherwise block operations.

---

**Related Guides:**

- [Virtual Remotes — Combine, Union, Alias with RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Zero-CLI Crypt Remote Setup with RcloneView](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [Fix Cloud File Size Limit Errors with RcloneView](https://rcloneview.com/support/blog/fix-cloud-file-size-limit-errors-rcloneview)

<CloudSupportGrid />
