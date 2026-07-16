---
slug: migrate-wasabi-to-cloudflare-r2-rcloneview
title: "Migrate Wasabi to Cloudflare R2 with RcloneView"
authors:
  - tayson
description: "Migrate from Wasabi to Cloudflare R2 with RcloneView. Compare pricing, set up both S3-compatible remotes, transfer data, and verify the migration step by step."
keywords:
  - rcloneview
  - wasabi to cloudflare r2
  - migrate wasabi to r2
  - cloudflare r2 migration
  - wasabi migration tool
  - s3 compatible migration
  - cloud storage migration
  - r2 no egress fees
  - wasabi data transfer
  - object storage migration gui
tags:
  - wasabi
  - cloudflare-r2
  - migration
  - cloud-migration
  - s3-compatible
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Wasabi to Cloudflare R2 with RcloneView

> Both Wasabi and Cloudflare R2 are S3-compatible and marketed as low-cost alternatives to AWS S3, but their pricing models differ in important ways — **RcloneView** handles the migration between them with a visual interface.

Wasabi offers hot cloud storage at $6.99/TB/month with no egress fees, but enforces a 90-day minimum storage duration and a minimum monthly charge. Cloudflare R2 charges $0.015/GB/month (roughly $15.36/TB) with zero egress fees and no minimum storage duration. For workloads with frequent data retrieval or short-lived objects, R2 can be significantly cheaper. RcloneView connects to both as S3-compatible remotes and provides a straightforward migration path.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Migrate from Wasabi to Cloudflare R2

Both providers eliminate egress fees, which is their main selling point over AWS S3. The decision to migrate typically comes down to:

- **Minimum storage duration**: Wasabi charges for at least 90 days of storage per object, even if you delete it sooner. R2 has no minimum, making it better for transient or frequently replaced data.
- **CDN integration**: R2 integrates natively with Cloudflare's CDN network, enabling instant public access to stored objects through a Cloudflare domain without additional configuration.
- **Workers integration**: If your application uses Cloudflare Workers, R2 provides zero-latency access from edge compute.
- **Pricing at scale**: For storage-heavy workloads, Wasabi's flat per-TB rate may be cheaper. For workloads with high API call volume, R2's pricing model (free for the first 10 million Class B requests per month) may win.

## Setting Up Both Remotes

### Wasabi Remote

Open RcloneView's Remote Manager and add an S3-compatible remote. Select **Wasabi** as the provider, enter your Wasabi Access Key and Secret Key, and specify the region endpoint (e.g., `s3.us-east-1.wasabisys.com`). Select the bucket you want to migrate.

### Cloudflare R2 Remote

Add another S3-compatible remote and select **Cloudflare R2** as the provider. Enter your R2 Access Key ID and Secret Access Key (generated from the Cloudflare dashboard under R2 > Manage R2 API Tokens). The endpoint follows the format `https://<account-id>.r2.cloudflarestorage.com`. Create a target bucket in the Cloudflare dashboard or let RcloneView create one during setup.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Executing the Migration

Open Wasabi in the left pane and R2 in the right pane. Navigate to the source bucket on Wasabi and the target bucket on R2.

Since both providers use the S3 API, metadata transfer is straightforward — content types, cache-control headers, and custom metadata carry over. RcloneView uses server-side metadata during the transfer, preserving object properties without additional configuration.

For the initial migration, use a copy job. RcloneView compares files using MD5 checksums (both Wasabi and R2 return standard MD5 ETags for non-multipart uploads) and transfers only new or changed files. Multi-threaded transfers with configurable concurrency keep the migration efficient — set transfers to 8-16 for large bucket migrations.

Be aware of Wasabi's minimum storage duration: if objects were uploaded recently (within the last 90 days), you will still be billed for the full 90 days on Wasabi even after deleting them. Plan your migration timeline accordingly — migrate first, verify, then delete from Wasabi after the 90-day window passes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Wasabi to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Verifying the Migration

After the transfer, use RcloneView's compare feature to verify every object arrived on R2. Select the Wasabi source and R2 destination and run a folder comparison. Identical objects appear matched; missing or differing objects are highlighted for review.

For additional confidence, run a check operation that computes checksums on both sides. This verifies data integrity at the byte level.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Wasabi to R2 migration in RcloneView" class="img-large img-center" />

## Post-Migration Cleanup

Once you have verified the migration:

1. Update application configurations to point to R2 endpoints instead of Wasabi.
2. Test application access to confirm everything works with R2.
3. Wait for the 90-day minimum storage period to pass on Wasabi before deleting objects, to avoid early deletion charges.
4. Delete the Wasabi bucket and deactivate Wasabi access keys.

If you need to run both providers in parallel during the transition, schedule a daily sync job in RcloneView to keep R2 updated with any new objects added to Wasabi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling sync from Wasabi to R2 during transition" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Wasabi and Cloudflare R2 as S3-compatible remotes.
3. Run a copy job from Wasabi to R2.
4. Verify with compare and check operations.
5. Update application endpoints and clean up Wasabi after the retention period.

Both Wasabi and R2 are strong S3-compatible options, but when your workload profile changes, RcloneView makes the migration painless.

---

**Related Guides:**

- [Add AWS S3 and S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
