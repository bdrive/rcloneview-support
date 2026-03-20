---
slug: immutable-backups-s3-object-lock-rcloneview
title: "Immutable, Ransomware-Proof Backups with S3 Object Lock in RcloneView"
authors:
  - tayson
description: Use RcloneView with S3 Object Lock buckets to build immutable, ransomware-proof backups on AWS S3, Wasabi, Backblaze B2, or Cloudflare R2, with scheduling, verification, and speedy restores.
keywords:
  - s3 object lock
  - immutable backups
  - ransomware protection
  - rclone s3
  - rcloneview
  - wasabi object lock
  - cloud backup immutability
  - compliance backup
tags:
  - RcloneView
  - backup
  - security
  - s3
  - wasabi
  - R2
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Immutable, Ransomware-Proof Backups with S3 Object Lock in RcloneView

> Stop worrying about ransomware rollbacks. Combine S3 Object Lock with RcloneView's scheduler to keep backups untouchable.

Immutable storage keeps attackers (or accidents) from deleting or overwriting your backups before you can recover. S3 Object Lock is available on AWS S3, Wasabi, Backblaze B2, and Cloudflare R2. RcloneView uses the bucket's Object Lock and versioning settings while you build jobs in the GUI—no CLI needed.

<!-- truncate -->

**Relevant docs**

- Create Sync Jobs: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Job Scheduling & Execution (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Compare folders: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Mount as local drive: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Why Object Lock + RcloneView

- Immutable copies: Retention dates block deletes/overwrites for the specified window.
- Cloud choice: Works on S3, Wasabi, R2, B2, and S3-compatible NAS gateways.
- No scripting: Build Sync jobs in the GUI, schedule them (Plus), and keep history/logs.
- Fast checks: Use Compare to confirm the destination matches and shows retained versions.
- Easy restores: Mount or Sync back from the locked bucket without changing retention.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## Prerequisites

- An S3-compatible bucket created with Object Lock enabled at creation time.
- Versioning enabled on that bucket (required for Object Lock).
- RcloneView installed with an S3 remote already connected.
- An IAM/API user with permissions for `PutObject` and `PutObjectRetention`.
- (Optional) Plus license if you want to schedule jobs automatically.


## Step 1: Enable Object Lock on the bucket

1. Create the bucket with Object Lock turned on (cannot be toggled later). On AWS S3, check "Enable Object Lock". On Wasabi/R2/B2, choose the Object Lock option during bucket creation.
2. Turn on versioning for that bucket.
3. Decide your default retention: Governance (easier overrides) or Compliance (no overrides), and retention duration (e.g., 30-90 days).

## Step 2: Point a Sync/Copy job at the Object Lock bucket

RcloneView does not surface per-object Object Lock flags. Instead, rely on the bucket's Object Lock + versioning defaults and keep your jobs pointed at that destination.

1. Create a new **Sync** (or **Copy** if you don't want deletes) job: Source = your data, Destination = the Object Lock bucket.
2. In **Advanced Settings**, set transfer counts and enable checksum comparison if both sides support hashes.
3. In **Filtering Settings**, exclude cache/temp paths so you do not waste retention on junk.
4. Save the job so the same settings apply every run (Job Manager).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Step 3: Schedule immutable backups

1. In the Job wizard (Step 4: Scheduling, Plus), enable scheduling for the immutable backup job.
2. Set a daily or hourly cadence and use **Simulate** to preview upcoming runs.
3. Set retry attempts in Advanced Settings for flaky links.
4. Keep a weekly manual Compare to validate retained objects.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Step 4: Verify retention and integrity

- Use Compare to verify object counts after uploads.
- In the S3 console (or RcloneView logs), check that objects show `Compliance`/`Governance` and the expected Retain Until date.
- Try deleting a test file from the destination; it should be blocked until the retention window expires.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Step 5: Restore from immutable backups

When you need to recover:

1. Create a new job: Destination (Object Lock bucket) -> Source (recovery location), and run Sync/Copy.
2. For ad-hoc restores, use Mount to browse the locked bucket and drag files out.
3. Use Copy (not Sync) on restores if you want to avoid deleting newer files at the recovery location.

## Best practices and tuning

- Set retention long enough for detection plus investigation (e.g., 30-90 days).
- Use Governance mode for flexibility in labs; Compliance for production and regulated data.
- Tune transfer counts in Advanced Settings for large media or VM images.
- Keep at least two regions or providers (e.g., Wasabi + R2) and rotate schedules.
- Monitor costs: Object Lock keeps all versions, so pair with lifecycle rules after retention expires.

## Troubleshooting checklist

- Upload fails with AccessDenied: ensure the IAM role allows `PutObjectRetention`.
- Objects not locked: confirm the bucket was created with Object Lock and versioning is On.
- Slow transfers: lower transfer counts or use bandwidth limits when peering is weak.
- Restore deletes live data: use Copy instead of Sync when pulling from the locked bucket.



Lock your backups once, and let RcloneView keep them safe on autopilot.

<CloudSupportGrid />
