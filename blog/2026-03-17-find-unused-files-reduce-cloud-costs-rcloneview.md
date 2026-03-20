---
slug: find-unused-files-reduce-cloud-costs-rcloneview
title: "Find Unused Files Wasting Cloud Storage — Reduce Costs with a Storage Audit in RcloneView"
authors:
  - tayson
description: "Cloud bills keep growing because nobody deletes old files. Learn how to find forgotten data, stale backups, and unnecessary duplicates across all your cloud accounts using RcloneView."
keywords:
  - reduce cloud storage costs
  - find unused cloud files
  - cloud storage cleanup
  - cloud cost optimization
  - cloud storage waste
  - cloud bill reduction
  - cloud file audit
  - storage cost savings
  - cloud cleanup tool
  - unnecessary cloud files
tags:
  - RcloneView
  - cost-optimization
  - tips
  - cloud-storage
  - organization
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Find Unused Files Wasting Cloud Storage — Reduce Costs with a Storage Audit in RcloneView

> You're paying for 5 TB across three cloud providers. How much of that is actually needed? For most users, 30-50% of cloud storage is occupied by files they'll never access again.

Cloud storage bills grow gradually. A few extra gigabytes here, a forgotten backup there, and suddenly you're spending hundreds per year on data nobody uses. The problem isn't the price per gigabyte — it's the invisible accumulation. RcloneView helps you see exactly what's in each account and make informed decisions about what stays and what goes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Common Sources of Waste

### Old backup copies

Backup jobs create copies. If you've changed backup destinations over the years, old copies sit on the previous provider consuming paid storage.

### Duplicate files across providers

The same files stored on Google Drive, OneDrive, AND Dropbox — because you synced everywhere "just in case."

### Stale project files

Projects from 2 years ago still on S3 Standard at $23/TB when they could be on Glacier at $1/TB.

### Test and temporary data

Trial uploads, test folders, cached data, `.DS_Store` files, `Thumbs.db` — they add up across thousands of folders.

## How to Find the Waste

### Browse each account

Connect all your cloud accounts and browse through them systematically:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse cloud accounts" class="img-large img-center" />

### Compare accounts for duplicates

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

Folder Comparison between two providers highlights identical files — potential duplicates you're paying for twice.

### Check backup freshness

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup recency" class="img-large img-center" />

Job history shows when backups last ran. If a backup hasn't run in 6 months, is it still needed?

## Action Plan

| Finding | Action | Savings |
|---------|--------|---------|
| Old backups on expensive storage | Delete or move to Glacier | $5-20/TB/month |
| Duplicate files across providers | Keep one copy, delete others | $5-10/TB/month |
| Stale projects on hot storage | Archive to cold storage | $15-20/TB/month |
| Temp files and junk | Delete | Variable |
| Unused provider accounts | Cancel | Subscription cost |

## Archive Before Deleting

Don't delete aggressively. Move old files to cold storage first — it's cheap enough to keep "just in case" but costs 90% less than hot storage.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connect all cloud accounts**.
3. **Browse and compare** systematically.
4. **Archive unused data** to cold storage.
5. **Delete genuine waste** after archiving.

The cheapest storage is the storage you don't need.

---

**Related Guides:**

- [Cloud Storage Audit Guide](https://rcloneview.com/support/blog/cloud-storage-permissions-audit-rcloneview)
- [Hidden Cloud Storage Costs](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Archive to S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)

<CloudSupportGrid />
