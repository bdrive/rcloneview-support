---
slug: rclone-about-storage-usage-analysis-rcloneview
title: "Analyze Cloud Storage Usage and Quotas with RcloneView"
authors:
  - tayson
description: "Monitor cloud storage usage, check quotas, identify large folders, and plan capacity across multiple providers using RcloneView's dashboard and rclone about command."
keywords:
  - rclone about storage usage
  - cloud storage quota monitor
  - rcloneview storage analysis
  - check cloud storage space
  - cloud capacity planning
  - storage usage per remote
  - rclone disk usage
  - cloud quota monitoring tool
  - compare cloud storage usage
  - rcloneview dashboard storage
tags:
  - feature
  - tips
  - cost-optimization
  - dashboard
  - monitoring
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Analyze Cloud Storage Usage and Quotas with RcloneView

> Before you can optimize cloud costs, you need to see exactly where your storage is going. RcloneView puts usage data and quota information for every connected remote in one place.

Most cloud storage costs are driven by volume. Whether you pay per gigabyte on S3, stay within a free tier on Google Drive, or share a team quota on OneDrive, knowing how much space each remote consumes is essential for cost control and capacity planning. Rclone's `about` command queries a provider's API for total, used, free, and trashed space. RcloneView surfaces this information visually so you can monitor all your remotes without switching between provider dashboards.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Rclone About Reports

The `rclone about` command returns storage metrics directly from the provider's API. A typical response includes:

| Metric | Description |
|--------|-------------|
| **Total** | Total storage quota allocated to the account |
| **Used** | Space currently consumed by files |
| **Free** | Remaining available space |
| **Trashed** | Space used by items in trash/recycle bin |
| **Other** | Space used by other services (e.g., Gmail for Google accounts) |

Not every provider reports all fields. S3-compatible services, for example, often report only used space since buckets have no fixed quota. Google Drive reports all five fields, making it one of the most informative.

## Viewing Storage Usage in RcloneView

RcloneView provides a visual overview of your connected remotes:

1. Open **RcloneView** and navigate to the **Dashboard** or **Remote Explorer**.
2. Select the remote you want to inspect.
3. View the storage summary showing used, free, and total space.

For a quick check across all remotes, the dashboard gives you an at-a-glance view of every connected provider's consumption.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote list showing connected cloud providers" class="img-large img-center" />

## Running Rclone About from the Terminal

For raw numbers or scripting, open the **Terminal** in RcloneView and run:

```bash
rclone about gdrive:
```

Sample output:

```
Total:   15 GiB
Used:    9.2 GiB
Free:    5.8 GiB
Trashed: 1.4 GiB
Other:   3.1 GiB
```

To check multiple remotes quickly:

```bash
rclone about gdrive:
rclone about onedrive:
rclone about s3-backup:
```

Use `--json` for machine-readable output that can be parsed by scripts:

```bash
rclone about gdrive: --json
```

## Identifying Large Folders

Knowing total usage is a start. Pinpointing which folders consume the most space requires the `rclone size` command:

```bash
rclone size gdrive:/Photos
```

This returns the total count and size of all files in the specified path. To find your largest folders, run it against top-level directories and compare.

In RcloneView's **Explorer**, you can browse into any remote and see folder sizes as you navigate, making it straightforward to find space hogs without running commands.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer browsing cloud folders with size information" class="img-large img-center" />

## Quota Monitoring Across Providers

Different providers handle quotas differently:

| Provider | Quota Model | Notes |
|----------|------------|-------|
| **Google Drive** | Shared across Drive, Gmail, Photos | 15 GB free; Workspace plans vary |
| **OneDrive** | Per-user allocation | 5 GB free; Microsoft 365 plans offer 1 TB+ |
| **Dropbox** | Per-account quota | 2 GB free; Plus offers 2 TB |
| **Backblaze B2** | Pay-per-use, no fixed quota | Billed monthly per GB stored |
| **Amazon S3** | Pay-per-use, no fixed quota | Tiered pricing by storage class |
| **pCloud** | Lifetime or subscription quota | 10 GB free; lifetime plans available |

For pay-per-use providers like S3 and B2, there is no quota to hit, but monitoring usage directly controls your bill. For quota-based providers, running out of space silently breaks syncs and backups.

## Planning Capacity and Estimating Costs

Use storage usage data to plan ahead:

1. **Track growth over time** -- run `rclone about` periodically and log the results. A simple spreadsheet tracking monthly usage per remote reveals trends.
2. **Estimate monthly costs** for pay-per-use providers:
   - Backblaze B2: $0.006/GB/month for storage
   - Amazon S3 Standard: $0.023/GB/month
   - Wasabi: $0.0069/GB/month (1 TB minimum)
3. **Set alerts** -- if a quota-based remote crosses 80% usage, plan a cleanup or upgrade.
4. **Compare providers** -- if one remote is cheaper per GB, consider migrating cold data there.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare storage consumption across cloud providers" class="img-large img-center" />

## Reclaiming Space from Trash

One of the most overlooked storage consumers is trash. Google Drive and OneDrive both count trashed files against your quota. The `rclone about` output shows trashed space explicitly, and you can reclaim it with:

```bash
rclone cleanup gdrive:
```

In RcloneView, this is available through the UI without typing commands. Reclaiming trashed space is often the fastest way to free gigabytes without deleting any active files.

## Comparing Usage Across Providers

When managing multiple cloud accounts, a cross-provider comparison helps with decisions like:

- **Where to store new backups** -- route data to the remote with the most headroom.
- **Which provider to scale** -- if S3 costs are growing faster than B2, investigate why.
- **When to archive** -- move infrequently accessed data from expensive storage to a cheaper tier.

RcloneView's multi-remote dashboard makes this comparison immediate. Instead of logging into three different provider dashboards, you see all usage data in one interface.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView dashboard showing multiple remote storage status" class="img-large img-center" />

## Best Practices

- **Check quotas before starting large transfers** -- a full destination will cause silent failures.
- **Monitor trash usage** and clean it regularly to avoid phantom quota consumption.
- **Log usage monthly** for cost tracking and trend analysis.
- **Use `rclone size`** on specific folders to find the biggest consumers of space.
- **Automate checks** by saving `rclone about` commands as scheduled jobs in RcloneView.

---

**Related Guides:**

- [Clean Up Cloud Storage: Empty Trash and Remove Old Versions](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 Comparison](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Google Drive vs OneDrive for Business](https://rcloneview.com/support/blog/google-drive-vs-onedrive-for-business-rcloneview)

<CloudSupportGrid />
