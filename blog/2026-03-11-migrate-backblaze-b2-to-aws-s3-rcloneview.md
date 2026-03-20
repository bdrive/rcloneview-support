---
slug: migrate-backblaze-b2-to-aws-s3-rcloneview
title: "How to Migrate from Backblaze B2 to AWS S3 — Step-by-Step with RcloneView"
authors:
  - tayson
description: "Need to move data from Backblaze B2 to AWS S3 for ecosystem integration? Learn how to migrate with minimal cost and zero data loss using RcloneView."
keywords:
  - backblaze b2 to aws s3
  - migrate b2 to s3
  - backblaze to amazon s3
  - b2 s3 migration tool
  - switch cloud storage provider
  - backblaze b2 migration
  - b2 to s3 transfer
  - cloud storage migration
  - backblaze to aws
  - s3 migration tool
tags:
  - RcloneView
  - backblaze-b2
  - aws-s3
  - migration
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How to Migrate from Backblaze B2 to AWS S3 — Step-by-Step with RcloneView

> Backblaze B2 is great for affordable storage. But when you need AWS ecosystem integration — Lambda triggers, CloudFront CDN, Athena queries — you need S3. Here's how to migrate without data loss.

Backblaze B2 and AWS S3 are both S3-compatible, making migration straightforward with the right tool. The main considerations are egress costs, transfer time, and verification. RcloneView handles the transfer while giving you visual monitoring and verification.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Migration Planning

### Cost estimation

B2 egress: $10/TB (or free via Cloudflare Bandwidth Alliance).

| Data Volume | B2 Egress Cost | S3 Storage (first month) |
|-------------|---------------|-------------------------|
| 100 GB | $1 | $2.30 |
| 1 TB | $10 | $23 |
| 10 TB | $100 | $230 |

### Timeline

Transfer speed depends on your connection and B2/S3 throughput. Both services handle high parallelism well.

## Step-by-Step

### 1) Add both remotes

<img src="/support/images/en/blog/new-remote.png" alt="Add B2 and S3 remotes" class="img-large img-center" />

### 2) Browse and compare

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse B2 and S3 side by side" class="img-large img-center" />

### 3) Run Copy job

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Migrate B2 to S3" class="img-large img-center" />

Use high parallelism (16–32 transfers) — both B2 and S3 handle it well.

### 4) Monitor progress

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor B2 to S3 migration" class="img-large img-center" />

### 5) Verify completeness

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify B2 to S3 migration" class="img-large img-center" />

## Post-Migration

1. **Update application configs** — Point apps to S3 endpoints.
2. **Test thoroughly** — Verify reads and writes work correctly.
3. **Keep B2 for 30 days** — Fallback in case of issues.
4. **Delete B2 data** — After confirming everything works on S3.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add B2 and S3** as remotes.
3. **Run Copy job** with high parallelism.
4. **Verify with Folder Comparison**.

Same API, bigger ecosystem.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Migrate Between S3-Compatible Providers](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-s3-rcloneview)

<CloudSupportGrid />
