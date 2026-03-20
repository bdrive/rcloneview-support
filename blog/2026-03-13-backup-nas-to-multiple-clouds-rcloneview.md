---
slug: backup-nas-to-multiple-clouds-rcloneview
title: "How to Back Up Your NAS to Multiple Clouds — 3-2-1 Backup Strategy with RcloneView"
authors:
  - tayson
description: "Protect your NAS data by backing up to multiple cloud providers simultaneously. Implement a proper 3-2-1 backup strategy using RcloneView's batch jobs."
keywords:
  - nas multi cloud backup
  - 3 2 1 backup strategy
  - nas cloud backup multiple
  - synology multi cloud backup
  - qnap multi cloud backup
  - nas backup strategy
  - nas to s3 and b2 backup
  - nas disaster recovery
  - multi cloud backup plan
  - nas off site backup
tags:
  - RcloneView
  - nas
  - backup
  - multi-cloud
  - best-practices
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How to Back Up Your NAS to Multiple Clouds — 3-2-1 Backup Strategy with RcloneView

> One cloud backup is good. Two cloud backups is better. The 3-2-1 rule says: 3 copies, 2 different media, 1 off-site. Your NAS is copy one. Cloud A is copy two. Cloud B is copy three. RcloneView automates all of it.

A NAS is a fantastic centralized storage solution, but it's still a single device in a single location. Hardware failure, fire, theft, or natural disasters can destroy it along with everything on it. Backing up to multiple cloud providers — on different infrastructure, in different regions — gives you true disaster recovery.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## The 3-2-1 Strategy

| Copy | Location | Provider |
|------|----------|----------|
| 1 (primary) | NAS (local) | Synology/QNAP |
| 2 (cloud backup) | Cloud A | Backblaze B2 ($6/TB) |
| 3 (cloud backup) | Cloud B | AWS S3 or Wasabi |

Three copies. Two different types of storage (local NAS + cloud). One off-site (cloud is off-site by definition).

## Setup with RcloneView

### 1) Connect your NAS and clouds

<img src="/support/images/en/blog/new-remote.png" alt="Add NAS and cloud remotes" class="img-large img-center" />

### 2) Create backup jobs for each cloud

**Job 1**: NAS → Backblaze B2 (primary cloud backup).
**Job 2**: NAS → AWS S3 (secondary cloud backup).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create multi-cloud backup jobs" class="img-large img-center" />

### 3) Schedule nightly backups

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-cloud NAS backup" class="img-large img-center" />

Stagger the schedules:
- 2:00 AM → NAS → Backblaze B2.
- 4:00 AM → NAS → AWS S3.

### 4) Use Batch Jobs for automation

v1.3 Batch Jobs chain everything:

1. Copy NAS → B2.
2. Copy NAS → S3.
3. Compare NAS vs B2.
4. Compare NAS vs S3.
5. Notify via Slack.

### 5) Verify both backups

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify multi-cloud backup" class="img-large img-center" />

## Cost Optimization

| Data Volume | B2 Monthly | S3 Standard-IA Monthly | Total |
|-------------|-----------|----------------------|-------|
| 1 TB | $6 | $12.50 | $18.50 |
| 5 TB | $30 | $62.50 | $92.50 |
| 10 TB | $60 | $125 | $185 |

For the secondary backup, use cheaper tiers: S3 Glacier ($4/TB) or Wasabi ($7/TB with free egress).

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connect NAS + two cloud providers**.
3. **Create Copy jobs** to each cloud.
4. **Schedule and automate** with Batch Jobs.
5. **Verify both backups** weekly.

Two clouds, one NAS, zero data loss risk.

---

**Related Guides:**

- [RcloneView on Synology NAS](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [RcloneView on QNAP NAS](https://rcloneview.com/support/blog/rcloneview-qnap-nas-cloud-backup-rcloneview)
- [Why Cloud-to-Cloud Backup Matters](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)

<CloudSupportGrid />
