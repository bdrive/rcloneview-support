---
slug: one-to-many-sync-multiple-destinations-rcloneview
title: "1:N Synchronization — Sync One Source to Multiple Destinations in RcloneView"
authors:
  - tayson
description: "Use RcloneView's 1:N sync feature to mirror one source folder to multiple cloud destinations simultaneously. Backup to S3, Google Drive, and Backblaze B2 in one job."
keywords:
  - 1:N sync RcloneView
  - sync one source multiple destinations
  - multi-destination backup
  - cloud backup multiple clouds
  - RcloneView 1 to N sync
  - cloud replication multiple providers
  - mirror to multiple clouds
  - RcloneView sync feature
  - multi-cloud backup job
  - one to many cloud sync
tags:
  - RcloneView
  - feature
  - cloud-sync
  - backup
  - automation
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# 1:N Synchronization — Sync One Source to Multiple Destinations in RcloneView

> RcloneView's 1:N sync lets you mirror a single source folder to multiple cloud destinations in one job — back up to Google Drive, Amazon S3, and Backblaze B2 simultaneously.

A core principle of data resilience is the 3-2-1 backup rule: three copies of data, on two different media, with one copy off-site. Cloud storage makes this achievable without physical drives — but manually running separate sync jobs to each provider is repetitive and error-prone. RcloneView's 1:N synchronization feature lets you configure a single source folder to sync to multiple cloud destinations simultaneously, so one job run covers all your backup targets at once. This feature is available with the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Is 1:N Synchronization?

1:N sync (one-to-many synchronization) means one source is mirrored to N destination remotes in a single job execution. When you run the job, RcloneView syncs the source to every configured destination — adding files that are missing, updating files that have changed, and optionally removing files that were deleted from the source.

This is distinct from running separate sync jobs sequentially. With 1:N sync, all destinations are written to during the same execution window, and progress for each destination is tracked in the Transferring tab. Job History records the result for each destination in the run summary.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="1:N sync job sending source to multiple cloud destinations in RcloneView" class="img-large img-center" />

## Configuring a 1:N Sync Job

Setting up a multi-destination sync job uses the same 4-step Sync wizard as a regular job. The difference is in Step 1: after selecting your source remote and folder, click the Add Destination button to add more destination remotes. You can add as many destinations as needed — for example, Google Drive, Amazon S3, and Backblaze B2.

**Example workflow for a production backup strategy:**

1. **Source:** Local NAS folder `/data/projects`
2. **Destination 1:** Google Drive `/Backups/Projects`
3. **Destination 2:** Amazon S3 bucket `my-company-backup/projects`
4. **Destination 3:** Backblaze B2 bucket `projects-archive`

Each destination receives an identical copy of the source content. The sync job name, filtering rules, and advanced settings apply uniformly to all destinations in the job.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring 1:N sync with multiple cloud destinations in RcloneView" class="img-large img-center" />

## Practical Use Cases

**3-2-1 backup implementation:** Configure local source → Google Drive + Amazon S3 + Backblaze B2. One job run, three copies in different cloud providers.

**Content distribution:** A video production team syncing final exports from their editing server to Dropbox (for client review), Google Drive (for internal archive), and a CDN origin bucket simultaneously.

**Regional replication:** An organization syncing a central document repository to regional cloud buckets in different geographic zones for latency and availability reasons.

**Cross-provider redundancy:** Sync a primary OneDrive folder to both Backblaze B2 and Cloudflare R2, so if one provider has an outage, the other still has current copies.

## Scheduling 1:N Sync Jobs

For 1:N jobs that need to run regularly, scheduled sync (PLUS license) applies to multi-destination jobs just as it does to single-destination jobs. Configure a crontab-style schedule in Step 4 of the wizard, and RcloneView runs the full multi-destination sync at each scheduled interval. Job History records the outcome for each run, showing you whether all destinations received the updates successfully.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination sync in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add all target cloud providers as remotes in the Remote tab.
3. Open the Sync wizard and use Add Destination in Step 1 to configure multiple destinations for your source.
4. Optionally add a schedule (PLUS license) to run the multi-destination sync automatically.

1:N synchronization is one of RcloneView's most time-saving features for backup strategies — configure once, protect everywhere, every time the job runs.

---

**Related Guides:**

- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Multi-Cloud Backup Strategy with RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [Backup NAS to Multiple Clouds with RcloneView](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
