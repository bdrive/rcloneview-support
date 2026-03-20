---
slug: tiered-cloud-archive-glacier-rcloneview
title: "Tiered Cloud Backup to S3 Standard, Wasabi, and Glacier Deep Archive with RcloneView"
authors:
  - tayson
description: Build a hot-warm-cold backup pipeline with RcloneView across S3/Wasabi for fast restores and Glacier Deep Archive for ultra-low-cost retention, using scheduled Sync/Copy jobs and lifecycle policies.
keywords:
  - glacier deep archive
  - cold storage
  - tiered backup
  - rclone s3
  - rcloneview
  - wasabi archive
  - lifecycle policy
  - cloud backup
  - archive retention
tags:
  - RcloneView
  - backup
  - archive
  - s3
  - glacier
  - Wasabi
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Tiered Cloud Backup to S3 Standard, Wasabi, and Glacier Deep Archive with RcloneView

> Keep recent restores fast and long-term retention cheap: hot in S3 Standard, warm in Wasabi/R2, and archive in Glacier Deep Archive—with RcloneView schedules and bucket lifecycle policies.

A single storage class rarely fits every file. Design a tiered pipeline: copy fresh data to S3 Standard for rapid access, mirror to a low-cost warm tier (Wasabi/R2) for geo redundancy, and push monthly snapshots to Glacier Deep Archive for compliance retention. RcloneView layers a GUI over rclone so you can schedule Syncs, verify with Compare, and keep lifecycle rules intactno shell scripts.

<!-- truncate -->

**Relevant docs**

- Create Sync Jobs: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Job Scheduling & Execution (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Compare folders: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Mount as local drive: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Why tiered backup with RcloneView

- Recovery speed: Recent files stay in S3 Standard for low-latency pulls.
- Cost control: Warm copy in Wasabi/R2; deep archive in Glacier for cents per TB-month.
- Resilience: Multi-cloud and multi-region reduce single-provider risk.
- No scripting: Visual jobs, schedules, and logs instead of cron/YAML.
- Proof: Compare jobs surface drift before you need to restore.

## Architecture at a glance

```
[Primary (NAS/Drive/OneDrive)] --(Hourly Sync)--> [S3 Standard hot copy]
                                         \
                                          --(Daily Sync)--> [Wasabi/R2 warm copy]
                                          --(Monthly Copy)--> [Glacier Deep Archive]
```

- Hot: S3 Standard (fast restore).
- Warm: Wasabi or R2 (cheap + egress-friendly for restores).
- Cold: Glacier Deep Archive for 90-365 day retention (use bucket lifecycle to transition objects).

## Prerequisites

- Three remotes configured in RcloneView (e.g., `s3:hot`, `wasabi:warm`, `s3:archive`).
- Versioning on hot/warm buckets; lifecycle rules on the archive bucket to transition to Glacier Deep Archive.
- IAM/API permissions: list/read/write + multipart; Glacier restore permissions for cold tier.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Step 1: Build the hot and warm Sync jobs

1. Create a **Sync** job (Primary -> S3 hot).
2. In **Advanced Settings**, set transfer counts and enable checksum comparison if both sides support hashes.
3. In **Filtering Settings**, exclude cache/temp folders.
4. Create a second **Sync** job (Primary -> Wasabi/R2 warm) with similar settings and filters.
5. Save both jobs in Job Manager.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Step 2: Add the cold archive Copy job

1. Create a **Copy** job (S3 hot -> Glacier archive bucket). Use Copy, not Sync, to avoid deletions on archive.
2. In **Advanced Settings**, set transfer counts and checksum comparison as needed.
3. Use bucket lifecycle rules to transition objects to Glacier Deep Archive and expire old versions after compliance windows.

## Step 3: Schedule everything

- In the Job wizard (Step 4: Scheduling, Plus), set cadences: hourly hot, nightly warm, monthly cold.
- Use **Simulate** to preview schedules and set retry counts in Advanced Settings.
- Add a weekly Compare (hot vs warm) to catch drift early.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## Step 4: Verify integrity

- Run Compare between hot and warm after the first full sync.
- For the archive, spot-check restores: perform a small Glacier retrieval and confirm files open correctly.
- Keep a small canary file (e.g., `canary.txt`) in every tier and check its presence in Compare reports.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Step 5: Restore playbook

- Fast restores: pull from warm (Wasabi/R2) or hot (S3 Standard) depending on egress/location.
- Deep restores: initiate Glacier restore for the needed prefix; then Copy back to warm/hot.
- Use Mount in RcloneView for browsing before bulk copy to avoid restoring the wrong folders.

## Tuning tips

- Latency/egress sensitive: lower transfer counts during business hours; raise off-hours.
- Glacier costs: bundle archives monthly; avoid frequent small uploads to reduce PUT and retrieval requests.
- Security: pair hot/warm with Object Lock (see immutable guide) to block ransomware deletes.
- Naming: prefix snapshots with date folders (e.g., `archive/2025-11/`) to simplify lifecycle and restores.

## Troubleshooting checklist

- Restore delays: Glacier retrieval can take hours—plan RPO/RTO accordingly.
- AccessDenied on archive: ensure the IAM role allows `glacier:InitiateJob`/restore for the bucket.
- Drift found: rerun hot/warm Sync; if archive missing objects, re-Copy the delta from hot.
- Costs spiking: enable lifecycle expiration after retention; cap concurrency during peak egress windows.



Tier once, schedule always, and keep both costs and RPO under control with RcloneView.

<CloudSupportGrid />
