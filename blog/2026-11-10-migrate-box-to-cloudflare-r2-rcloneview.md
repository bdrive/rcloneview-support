---
slug: migrate-box-to-cloudflare-r2-rcloneview
title: "Migrate Box to Cloudflare R2 — Transfer Files with RcloneView"
authors:
  - robin
description: "Migrate Box to Cloudflare R2 with RcloneView: connect both remotes, dry-run the copy, run a cloud-to-cloud transfer and verify the result."
keywords:
  - migrate Box to Cloudflare R2
  - Box to R2 transfer
  - Box cloud migration
  - Cloudflare R2 backup
  - RcloneView
  - cloud to cloud transfer
  - Box to S3 compatible storage
  - Box archive to object storage
  - rclone GUI
tags:
  - RcloneView
  - box
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Box to Cloudflare R2 — Transfer Files with RcloneView

> Move years of Box content into Cloudflare R2 object storage without downloading anything to your own disk.

A finance team that has outgrown its Box plan, or a department closing out old projects, often wants an object-storage archive instead. RcloneView connects Box and Cloudflare R2 side by side and copies between them directly. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license, and the same goes for R2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Box and Cloudflare R2

Box is an OAuth remote: RcloneView opens your browser, you sign in, and the remote is created with no API key. If your company uses Box for Business, the remote needs `box_sub_type = enterprise`. Check this first, because a personal-type remote will not see enterprise content.

Cloudflare R2 uses credentials. Create an R2 bucket in the Cloudflare dashboard, generate an API token with Admin Read & Write permission, and enter the token details and your account endpoint, `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`, in the New Remote dialog.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Plan the Folder Layout

Open Box in one Explorer panel and R2 in the other. R2 is flat object storage, so decide on a prefix structure before copying: for example one top-level folder per Box department, then the original subfolders beneath it. Use Get Size on large Box folders to estimate the volume you are about to move.

Box Docs such as Box Notes are not ordinary files. The predefined filters in the sync wizard include a Box Docs option, which lets you exclude them if you do not want them in the archive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box and Cloudflare R2 side by side in RcloneView explorer panels" class="img-large img-center" />

## Dry Run, Then Copy

Create a Copy job rather than a Sync job for the first pass, so nothing is ever removed from either side. Run it as a Dry Run first: RcloneView lists the files it would copy without transferring them, which helps catch a wrong source folder.

In the Advanced Settings step, raise the number of file transfers if you have many small files, and enable checksum comparison if you want hash-and-size matching. Then run the job and follow progress in the Transferring tab: percentage, speed and file counts update live.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Box to R2 copy job in RcloneView" class="img-large img-center" />

## Verify the Migration

When the job finishes, open Folder Compare with Box on the left and R2 on the right. Use the left-only filter to see anything that did not arrive, and the different-files filter to spot size mismatches. Job History keeps the status, duration, total size and file count of each run, which is useful evidence for an audit trail.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box to R2 migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Box remote (OAuth) and your Cloudflare R2 remote (API token and endpoint).
3. Create a Copy job from a Box folder to an R2 bucket prefix and run a Dry Run.
4. Run the job, then confirm the result with Folder Compare.

Moving Box content into R2 takes a handful of clicks once both remotes are connected.

---

**Related Guides:**

- [Migrate Box to AWS S3](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Manage Box Storage with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dry Run: Preview Sync Before Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
