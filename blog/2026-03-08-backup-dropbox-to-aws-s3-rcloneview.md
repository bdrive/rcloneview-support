---
slug: backup-dropbox-to-aws-s3-rcloneview
title: "How to Back Up Dropbox to AWS S3 — Automated Cloud-to-Cloud Backup with RcloneView"
authors:
  - tayson
description: "Protect your Dropbox files by backing them up to AWS S3. Set up automated cloud-to-cloud backup with scheduling and verification using RcloneView."
keywords:
  - backup dropbox to s3
  - dropbox aws s3 sync
  - dropbox cloud backup
  - dropbox to s3 transfer
  - cloud to cloud backup dropbox
  - dropbox backup solution
  - dropbox data protection
  - sync dropbox aws
  - automated dropbox backup
  - dropbox migration s3
tags:
  - RcloneView
  - dropbox
  - aws-s3
  - backup
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How to Back Up Dropbox to AWS S3 — Automated Cloud-to-Cloud Backup with RcloneView

> Dropbox is great for collaboration. But what happens if files are accidentally deleted, ransomware encrypts your shared folders, or Dropbox itself has an outage? A cloud-to-cloud backup to AWS S3 protects you from all of these.

Relying on a single cloud provider for important files is risky. Dropbox's version history helps with accidental changes, but it doesn't protect against account compromise, permanent deletions past the retention window, or service outages. Backing up to AWS S3 gives you an independent, durable copy of everything.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Back Up Dropbox to S3?

- **Independent copy** — If Dropbox goes down or your account is compromised, S3 still has your files.
- **99.999999999% durability** — S3's eleven nines of durability means your data is extremely safe.
- **Cost-effective archiving** — S3 Glacier starts at $4/TB/month for files you rarely access.
- **Compliance** — Some industries require backups on separate infrastructure.
- **Ransomware protection** — S3 versioning and object lock prevent overwrites.

## Setup

### 1) Connect Dropbox and AWS S3

Add both as remotes in RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and S3 remotes" class="img-large img-center" />

For S3, you'll need your Access Key ID, Secret Access Key, and preferred region.

### 2) Browse Both Sides

Open Dropbox on the left and S3 on the right in the two-pane explorer:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Dropbox and S3 side by side" class="img-large img-center" />

### 3) Create a Copy Job

Use **Copy** to back up Dropbox to an S3 bucket. Copy adds files without deleting — safe for backups:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to S3 backup" class="img-large img-center" />

### 4) Schedule Nightly Backups

Set the job to run every night so your S3 backup stays current:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly Dropbox backup" class="img-large img-center" />

### 5) Verify Completeness

Use Folder Comparison to confirm all files are backed up:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on S3" class="img-large img-center" />

## Choosing the Right S3 Storage Class

AWS S3 offers multiple storage classes at different price points:

| Storage Class | Best For | Price (TB/month) |
|---------------|----------|------------------|
| S3 Standard | Frequently accessed backups | $23 |
| S3 Standard-IA | Backups accessed monthly | $12.50 |
| S3 Glacier Instant | Rare access, instant retrieval | $4 |
| S3 Glacier Deep Archive | Compliance, yearly access | $1 |

For most Dropbox backups, **S3 Standard-IA** (Infrequent Access) is the sweet spot — you're not accessing the backup daily, but you want quick restore when needed.

## Selective Backup with Filters

You might not need to back up everything. Use rclone filter rules:

- **Include only documents**: `--include "*.pdf" --include "*.docx" --include "*.xlsx"`
- **Exclude temp files**: `--exclude "*.tmp" --exclude ".dropbox*"`
- **Skip large media**: `--max-size 500M`

See [Rclone Filter Rules Explained](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview) for details.

## Batch Jobs for Complete Backup Workflow

With v1.3's Batch Jobs, chain multiple operations:

1. Copy Dropbox → S3.
2. Compare Dropbox vs S3.
3. Send Slack notification when complete.

All in one automated sequence.

## Restore from Backup

If you need to restore files from S3 back to Dropbox:

1. Open S3 on the left, Dropbox on the right.
2. Select the files or folders to restore.
3. Run a Copy job from S3 → Dropbox.

It's the same process in reverse.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Dropbox and AWS S3** as remotes.
3. **Run a Copy job** from Dropbox to S3.
4. **Schedule nightly backups**.
5. **Verify with Folder Comparison**.

Your Dropbox files deserve more than one home.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone Filter Rules](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
