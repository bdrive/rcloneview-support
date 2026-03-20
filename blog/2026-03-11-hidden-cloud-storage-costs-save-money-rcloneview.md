---
slug: hidden-cloud-storage-costs-save-money-rcloneview
title: "Hidden Cloud Storage Costs — Egress Fees, API Charges, and How to Save Money"
authors:
  - tayson
description: "Cloud storage pricing looks simple until you see egress fees, API charges, and minimum storage durations. Learn about hidden costs and how to optimize with RcloneView."
keywords:
  - cloud storage hidden costs
  - cloud egress fees
  - cloud storage pricing
  - s3 egress cost
  - cloud api charges
  - reduce cloud storage cost
  - cloud storage cost optimization
  - cheap cloud storage
  - cloud storage fees explained
  - save money cloud storage
tags:
  - RcloneView
  - cloud-storage
  - pricing
  - cost-optimization
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Hidden Cloud Storage Costs — Egress Fees, API Charges, and How to Save Money

> AWS S3 advertises $0.023/GB/month. Sounds cheap for 1 TB — just $23/month. But then you download that terabyte and your bill jumps to $113. Welcome to egress fees.

Cloud storage pricing has a sticker price and a real price. The sticker price is storage per GB. The real price includes egress (download) fees, API request charges, minimum storage durations, and retrieval fees for cold storage. Understanding these hidden costs helps you choose the right provider and avoid surprise bills.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## The Hidden Costs

### 1) Egress fees

Egress is what you pay to download data FROM the cloud. It's the biggest surprise on most cloud bills.

| Provider | Egress (per TB) |
|----------|----------------|
| AWS S3 | $90 |
| Google Cloud | $120 |
| Azure | $87 |
| Oracle Cloud | Free (first 10 TB) |
| Backblaze B2 | $10 (free via Cloudflare) |
| Wasabi | Free* |
| Storj | $7 |

*Wasabi's free egress has a fair use policy — egress should not exceed storage volume.

**Real-world impact:** A 10 TB migration from AWS S3 costs $900 in egress alone.

### 2) API request charges

Every file operation (list, read, write, delete) is an API call. Each call costs money.

| Provider | PUT/POST (per 1,000) | GET (per 1,000) |
|----------|---------------------|-----------------|
| AWS S3 Standard | $0.005 | $0.0004 |
| Google Cloud | $0.005 | $0.0004 |
| Backblaze B2 | $0.004 | Free (2,500/day) |

Syncing 100,000 small files means 100,000+ API calls — it adds up.

### 3) Minimum storage duration

| Provider | Minimum Duration | What Happens |
|----------|-----------------|-------------|
| AWS S3 Standard | None | Pay as you go |
| AWS S3 Standard-IA | 30 days | Charged for 30 days even if deleted earlier |
| AWS S3 Glacier | 90 days | Charged for 90 days minimum |
| Wasabi | 90 days | Charged for 90 days minimum |
| Backblaze B2 | 1 day | Essentially no minimum |

Delete a file from Wasabi after 10 days — you still pay for 90 days of storage.

### 4) Retrieval fees

Cold storage tiers charge to retrieve data:

| Tier | Retrieval Cost |
|------|---------------|
| S3 Glacier Instant | $10/TB |
| S3 Glacier Flexible | $30/TB (3–5 hours) |
| S3 Glacier Deep Archive | $20/TB (12 hours) |

### 5) Early deletion fees

S3 Glacier charges early deletion fees if objects are removed before the minimum storage period.

## How to Optimize Cloud Storage Costs

### Choose the right provider for the right data

| Data Type | Best Provider | Why |
|-----------|--------------|-----|
| Hot (daily access) | Google Drive, OneDrive | Included in Workspace/M365 |
| Warm (weekly access) | S3 Standard-IA, B2 | Cheap storage, moderate egress |
| Cold (monthly access) | B2, Wasabi | Low storage, predictable pricing |
| Archive (yearly access) | S3 Glacier, Storj | Cheapest storage |

### Use RcloneView to move data between tiers

As data ages, move it to cheaper storage:

```
Week 1-4: Google Drive (included in subscription)
Month 2-12: Backblaze B2 ($6/TB, low egress)
Year 2+: S3 Glacier ($4/TB, archive)
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Automate tiered storage" class="img-large img-center" />

### Minimize egress with smart syncing

- **Sync during free egress windows** — Some providers offer free egress during certain hours or to specific partners.
- **Use Cloudflare with B2** — B2 egress is free through Cloudflare's Bandwidth Alliance.
- **Choose Oracle Cloud** — 10 TB/month free egress.
- **Use filters** to sync only what you need — less data transferred means less egress.

### Reduce API calls

- **Use `--fast-list`** in rclone settings to reduce API calls when listing directories.
- **Sync less often** for stable data — weekly instead of hourly.
- **Use size-only checking** instead of checksum checking for large files.

### Find and eliminate waste

Use Folder Comparison to find duplicate data across clouds:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicate data across clouds" class="img-large img-center" />

## Monthly Cost Comparison: 5 TB Storage

| Scenario | Monthly Cost |
|----------|-------------|
| AWS S3 Standard (5 TB storage + 1 TB egress) | $205 |
| Backblaze B2 (5 TB + 1 TB egress) | $40 |
| Wasabi (5 TB, no egress fees) | $35 |
| Google Drive (2 TB plan, personal) | $10 |
| Optimized mix (B2 + Glacier) | $25 |

The right provider mix can reduce costs by 80%.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Audit your current cloud costs** — check what you're paying.
3. **Identify waste** — duplicates, unused data, wrong storage tier.
4. **Move data to optimal providers** using RcloneView.
5. **Schedule automated tiering** to keep costs low over time.

The cheapest cloud is the one that fits your access pattern.

---

**Related Guides:**

- [Cloud Storage Full? Free Up Space](https://rcloneview.com/support/blog/cloud-storage-full-free-up-space-multiple-clouds-rcloneview)
- [Find and Remove Duplicates](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [Set Bandwidth Limits](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
