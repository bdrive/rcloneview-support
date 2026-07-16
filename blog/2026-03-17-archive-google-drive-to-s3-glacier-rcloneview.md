---
slug: archive-google-drive-to-s3-glacier-rcloneview
title: "Archive Google Drive Files to S3 Glacier — Long-Term Storage at 90% Lower Cost with RcloneView"
authors:
  - tayson
description: "Google Drive storage is expensive for archival data. Move old files to S3 Glacier for pennies per GB while keeping them recoverable. RcloneView automates the entire process."
keywords:
  - google drive to glacier
  - google drive archive
  - s3 glacier archive
  - cheap cloud archive
  - google drive cold storage
  - archive old cloud files
  - google drive to s3
  - reduce google drive cost
  - long term cloud storage
  - cloud archive strategy
tags:
  - RcloneView
  - google-drive
  - s3
  - glacier
  - archive
  - cost-optimization
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Archive Google Drive Files to S3 Glacier — Long-Term Storage at 90% Lower Cost with RcloneView

> You're paying $10/month for 2 TB of Google Drive, but 80% of those files haven't been opened in a year. Move them to S3 Glacier for $1/TB/month and cut your storage bill dramatically.

Google Drive pricing is designed for active files — documents you open daily, files you share with colleagues. But most Google Drive accounts accumulate years of files that are never accessed: old project folders, completed work, archived photos, outdated documents. These files sit on expensive storage when they could be on S3 Glacier at a fraction of the cost.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cost Comparison

| Storage | Price per TB/month |
|---------|-------------------|
| Google Drive (One) | ~$5 |
| Google Workspace Business | ~$6 |
| S3 Standard | ~$23 |
| S3 Glacier Instant Retrieval | ~$4 |
| S3 Glacier Flexible Retrieval | ~$3.6 |
| S3 Glacier Deep Archive | ~$1 |

Moving 1 TB of inactive files from Google Drive to Glacier Deep Archive saves ~$48/year.

## What to Archive

Good candidates for Glacier:

- Completed project folders (older than 6 months)
- Tax documents and financial records (after filing)
- Old photo/video backups
- Former employee data
- Archived team files

Bad candidates (keep on Google Drive):

- Active documents and spreadsheets
- Shared collaboration files
- Files opened weekly or monthly

## Archive Process

### 1) Identify archive candidates

Browse your Google Drive in the explorer and identify folders that haven't been accessed recently:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive for archive candidates" class="img-large img-center" />

### 2) Transfer to S3 Glacier

Create a Copy job from Google Drive to your S3 bucket configured with a Glacier storage class:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Transfer to Glacier" class="img-large img-center" />

### 3) Verify the archive

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify archive completeness" class="img-large img-center" />

### 4) Delete from Google Drive

Only after verification. This frees up your Google Drive storage quota.

### 5) Schedule regular archival

Set up monthly archival runs for new candidates:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule monthly archival" class="img-large img-center" />

## Important Notes

- **Glacier retrieval costs money and takes time** — Glacier Instant Retrieval provides fast access; Deep Archive can take 12+ hours
- **Minimum storage duration** — Glacier charges for early deletion (90-180 days depending on class)
- **Verify before deleting** — always confirm the archive is complete before removing from Drive

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Google Drive** and **S3** remotes.
3. **Identify inactive files** on Google Drive.
4. **Copy to Glacier**, verify, then clean up Drive.

Active files on Drive. Everything else on Glacier.

---

**Related Guides:**

- [Hidden Cloud Storage Costs](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Cold Archive with Glacier](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
