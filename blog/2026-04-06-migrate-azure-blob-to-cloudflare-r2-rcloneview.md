---
slug: migrate-azure-blob-to-cloudflare-r2-rcloneview
title: "Migrate Azure Blob Storage to Cloudflare R2 with RcloneView: Zero Egress Migration"
authors:
  - tayson
description: Migrate from Azure Blob Storage to Cloudflare R2 with RcloneView — eliminate egress fees, set up both remotes, transfer data, and verify integrity visually.
keywords:
  - rcloneview
  - azure blob to cloudflare r2
  - cloudflare r2 migration
  - azure blob storage
  - zero egress
  - s3 compatible storage
  - rclone GUI
  - cloud migration
  - r2 storage
  - cost optimization
tags:
  - azure
  - cloudflare-r2
  - r2
  - migration
  - cloud-migration
  - s3-compatible
  - cost-optimization
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Azure Blob Storage to Cloudflare R2 with RcloneView: Zero Egress Migration

> Azure Blob Storage is powerful, but egress fees add up fast. **Cloudflare R2** offers S3-compatible object storage with zero egress charges — and **RcloneView** handles the migration visually.

Azure Blob Storage is a backbone of many cloud architectures. It is reliable, feature-rich, and deeply integrated with the Azure ecosystem. But there is one persistent pain point: **egress fees**. Every gigabyte downloaded from Azure Blob costs money, and for applications that serve data frequently — CDNs, APIs, media delivery, or analytics pipelines — those charges can dwarf the storage costs themselves.

Cloudflare R2 eliminates egress entirely. You pay only for storage and operations, with zero bandwidth charges for reads. For workloads where data is read more often than written, R2 can reduce your cloud storage bill dramatically. RcloneView makes the migration straightforward — connect both providers, transfer your data, and verify everything matches.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Switch from Azure Blob to Cloudflare R2

The decision usually comes down to economics:

- **Zero egress fees**: R2 charges nothing for data downloaded. Azure charges $0.05-$0.12/GB depending on region and volume.
- **S3 API compatibility**: R2 supports the S3 API, so existing tools, SDKs, and applications work with minimal changes.
- **Predictable pricing**: R2 charges $0.015/GB per month for storage and flat rates for operations. No hidden tiers or reserved capacity commitments.
- **Cloudflare integration**: If you already use Cloudflare for DNS, CDN, or Workers, R2 fits naturally into your stack.
- **No minimum storage duration**: Unlike some providers, R2 does not penalize you for deleting data early.

### Quick Cost Comparison

| Cost Factor | Azure Blob (Hot, East US) | Cloudflare R2 |
|---|---|---|
| Storage per GB/month | ~$0.018 | $0.015 |
| Egress per GB | $0.05-$0.12 | $0.00 |
| Class A ops (writes) per 1M | ~$0.065 | $4.50 |
| Class B ops (reads) per 1M | ~$0.005 | $0.36 |

For read-heavy workloads, the egress savings alone can justify the migration.

## Step 1: Set Up Both Remotes

Connect Azure Blob and Cloudflare R2 in RcloneView:

1. Click **+ New Remote** in RcloneView.
2. **Add Azure Blob Storage**: Select the Azure Blob backend, enter your storage account name and key (or connection string). Name it (e.g., `AzureBlob`).
3. **Add Cloudflare R2**: Select S3-compatible storage, choose Cloudflare R2 as the provider. Enter your R2 Access Key ID, Secret Access Key, and the endpoint URL from your Cloudflare dashboard. Name it (e.g., `CloudflareR2`).
4. Confirm both remotes are visible in the Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Step 2: Prepare Your R2 Buckets

Before transferring data:

- **Create destination buckets** in R2 that mirror your Azure containers. You can do this from the Cloudflare dashboard or directly in RcloneView's Explorer.
- **Review naming conventions**: Azure container names and R2 bucket names follow similar rules (lowercase, hyphens allowed), so most names transfer directly.
- **Check object key compatibility**: Azure Blob supports some key patterns that may need adjustment. Review any keys with special characters.

## Step 3: Run the Migration

Open Azure Blob on one side and Cloudflare R2 on the other in the two-pane Explorer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Azure Blob and Cloudflare R2 side by side in RcloneView" class="img-large img-center" />

### For Small Containers

Drag and drop containers or folders directly from Azure Blob to R2. RcloneView transfers files in the background with progress tracking.

### For Large Containers

Create a **Copy** job for reliability:

1. Select the Azure Blob container as the source.
2. Select the corresponding R2 bucket as the destination.
3. Run a **Dry Run** to preview the transfer scope.
4. Execute the job. RcloneView shows real-time progress including transfer speed, file counts, and estimated time remaining.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Azure Blob to R2 migration" class="img-large img-center" />

## Step 4: Verify Data Integrity

After the migration completes, verify that everything arrived intact:

1. Use RcloneView's **Compare** feature to check the source container against the R2 bucket.
2. Review the comparison results — look for any files marked as missing or different.
3. Re-copy any failed items individually.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Azure Blob container with R2 bucket to verify migration" class="img-large img-center" />

## Step 5: Handle Large-Scale Migrations

Migrating hundreds of gigabytes or terabytes? Plan accordingly:

- **Azure egress costs during migration**: You will pay Azure egress fees to transfer data out. Consider using Azure's bandwidth pricing tiers and running the migration during a single billing cycle.
- **Parallelize by container**: Run separate jobs for each container to spread the load and make progress tracking easier.
- **Resume on failure**: If a job is interrupted, re-run it. Rclone's Copy operation skips files that already exist and match, so you only transfer what is missing.
- **Bandwidth considerations**: Both Azure and Cloudflare support high-throughput transfers, but your local machine's bandwidth is the bottleneck when routing through RcloneView. For the fastest migrations, run RcloneView on a VM near your Azure region.

## Step 6: Update Your Applications

Once verification is complete:

1. Update application configuration to point to R2 endpoints instead of Azure Blob.
2. Test thoroughly in a staging environment.
3. Switch production traffic.
4. Keep the Azure Blob data for a rollback period (30 days is common), then delete to stop accruing storage charges.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connect Azure Blob and Cloudflare R2** in the New Remote wizard.
3. **Migrate, verify, and cut over** — eliminate egress fees from your cloud bill.

Zero egress means every read is free. RcloneView gets your data there.

---

**Related Guides:**

- [Move from Cloudflare R2 to AWS S3 with RcloneView](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [Compare Cloudflare R2 and AWS S3 with RcloneView](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [Migrate Dropbox to Azure Blob Storage with RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)

<CloudSupportGrid />
