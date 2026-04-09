---
slug: migrate-backblaze-b2-to-wasabi-rcloneview
title: "Migrate Backblaze B2 to Wasabi with RcloneView"
authors:
  - tayson
description: "Migrate from Backblaze B2 to Wasabi with RcloneView. Compare pricing models, set up both remotes, transfer data, and verify the migration step by step."
keywords:
  - rcloneview
  - backblaze b2 to wasabi
  - migrate b2 to wasabi
  - wasabi cloud migration
  - backblaze migration tool
  - s3 compatible migration
  - cloud storage migration
  - wasabi no egress fees
  - b2 data transfer
  - object storage migration gui
tags:
  - RcloneView
  - backblaze-b2
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Backblaze B2 to Wasabi with RcloneView

> Backblaze B2 offers low storage costs, but egress and API fees can add up — **RcloneView** makes migrating to Wasabi's flat-rate pricing simple and verifiable.

Backblaze B2 and Wasabi are two of the most popular S3-compatible object storage providers for cost-conscious teams. While B2 is known for its low per-GB storage rate ($0.006/GB/month), its pricing model includes egress charges ($0.01/GB) and per-transaction fees that can surprise teams with read-heavy workloads. Wasabi offers a flat rate ($0.0069/GB/month) with no egress or API fees, making costs entirely predictable. RcloneView handles the migration between these two S3-compatible providers with a visual interface that eliminates the need for CLI scripting.

This guide covers the complete migration — from understanding the pricing differences to verifying every object after transfer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Migrate from Backblaze B2 to Wasabi

The decision to migrate usually comes down to predictability. B2's storage rate is slightly lower than Wasabi's, but once you factor in egress and Class B/C transactions, the total cost often exceeds Wasabi's flat rate — especially for workloads that read data frequently.

Consider a scenario: 10 TB of storage on B2 costs $60/month. If you download 5 TB of that data monthly (serving media, distributing builds, running analytics), egress adds $50. Class B transactions for listing and downloading files add more. On Wasabi, the same 10 TB costs $69/month total, regardless of how much data you read or how many API calls you make.

Wasabi also maintains a minimum 90-day storage policy — deleting objects before 90 days incurs a pro-rated charge for the remaining period. Factor this into your planning if you store short-lived data.

## Setting Up Backblaze B2 in RcloneView

Open the Remote Manager and add a Backblaze B2 remote. You can use either the native B2 API or the S3-compatible API. For migration purposes, the S3-compatible endpoint is recommended because it allows RcloneView to use the same transfer logic for both source and destination.

Enter your B2 Application Key ID and Application Key. If you have bucket-specific keys, use those for tighter security — the key only needs read access for the source.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 remote in RcloneView" class="img-large img-center" />

## Setting Up Wasabi in RcloneView

Add Wasabi as an S3-compatible remote. In the Remote Manager, select **Amazon S3 Compatible** and configure:

- **Provider**: Wasabi
- **Access Key** and **Secret Key**: Generated from the Wasabi console
- **Region**: Select the region closest to your users (us-east-1, eu-central-1, ap-northeast-1, etc.)
- **Endpoint**: Auto-configured based on the selected region

Create your destination bucket in the Wasabi console or through RcloneView's explorer. Choose the same region as your primary user base to minimize latency.

## Running the Migration

Open the two-pane explorer with B2 on the left and Wasabi on the right. Navigate to the B2 bucket you want to migrate and the Wasabi destination bucket.

For a complete migration, create a sync job. RcloneView enumerates all objects in the B2 bucket, compares them against the Wasabi destination, and transfers only what is missing or has changed. Since both providers support MD5 checksums via ETag, file comparison is fast and accurate.

Key considerations for the transfer:

- **Egress from B2**: You will incur B2 egress charges during the migration. To minimize costs, consider using Backblaze's free egress partnership with Cloudflare (if applicable to your setup) or the B2 bandwidth alliance.
- **Parallel transfers**: Both B2 and Wasabi support high concurrency. Set parallel transfers to 8-16 for optimal throughput.
- **Large files**: Both providers support multipart uploads. RcloneView automatically uses multipart for files above the threshold, ensuring reliable transfer of large objects.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 to Wasabi in RcloneView two-pane explorer" class="img-large img-center" />

## Monitoring Transfer Progress

The real-time monitoring dashboard shows the status of every file in the transfer queue. You can track per-file progress, overall completion percentage, and current transfer speed. If network conditions change, pause the transfer and resume later — RcloneView picks up where it left off.

For multi-terabyte migrations, the transfer may run for hours or days. RcloneView's logging ensures you have a complete record of what was transferred, what was skipped, and any errors that occurred.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring B2 to Wasabi migration progress in RcloneView" class="img-large img-center" />

## Verifying the Migration

After the transfer completes, run a compare operation between the B2 source and Wasabi destination. RcloneView lists files that exist only on one side and files that differ in size or checksum. A clean compare — no differences — confirms a successful migration.

Pay attention to:

- **Empty directories**: Object storage does not have true directories. Both B2 and Wasabi use prefix-based "folders." RcloneView handles this consistently, but verify that your application logic does not depend on directory markers.
- **Metadata preservation**: Standard metadata (content-type, last-modified) is preserved during S3-compatible transfers. Custom metadata (x-amz-meta-*) is also transferred by RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying B2 to Wasabi migration with compare in RcloneView" class="img-large img-center" />

## Post-Migration Cleanup

Once you have verified the migration and updated all application endpoints from B2 to Wasabi:

1. **Update DNS and application configs**: Point your services to the new Wasabi endpoint.
2. **Run a final sync**: Catch any files that were added to B2 during the migration window.
3. **Keep B2 data temporarily**: Maintain the B2 bucket for a rollback period (2-4 weeks is typical).
4. **Delete B2 data**: After confirming everything works on Wasabi, delete the B2 bucket to stop incurring storage charges.

Remember Wasabi's 90-day minimum storage policy when planning your retention strategy. If you delete objects from Wasabi before 90 days, you will be billed for the full 90-day period.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Backblaze B2 and Wasabi as S3-compatible remotes in the Remote Manager.
3. Run a sync job from B2 to Wasabi using the two-pane explorer and monitor progress in real time.
4. Verify the migration with the compare feature and update your application endpoints.

B2 and Wasabi are both excellent object storage providers, but when predictable costs matter, Wasabi's flat-rate model wins — and RcloneView makes the switch painless.

---

**Related Guides:**

- [Add AWS S3 and S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Compare folder contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Real-time Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
