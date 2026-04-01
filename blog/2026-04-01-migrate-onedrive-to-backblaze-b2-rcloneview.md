---
slug: migrate-onedrive-to-backblaze-b2-rcloneview
title: "Migrate OneDrive to Backblaze B2 for Affordable Cloud Backup with RcloneView"
authors:
  - tayson
description: "Cut storage costs by migrating OneDrive files to Backblaze B2 with RcloneView. Step-by-step guide for moving personal or business data to cheaper S3-compatible storage."
keywords:
  - migrate onedrive to backblaze b2
  - onedrive to b2 migration
  - rcloneview onedrive backblaze
  - move onedrive to backblaze b2
  - rclone onedrive backblaze b2
  - onedrive cheaper storage alternative
  - backblaze b2 from onedrive
  - cloud storage cost reduction
  - onedrive backup to b2
  - transfer onedrive backblaze
tags:
  - RcloneView
  - onedrive
  - backblaze-b2
  - cloud-migration
  - migration
  - backup
  - cost-optimization
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate OneDrive to Backblaze B2 for Affordable Cloud Backup with RcloneView

> OneDrive storage costs add up — especially for archive-heavy teams or individuals with terabytes of data. Backblaze B2 offers S3-compatible object storage at a fraction of the price. RcloneView makes the migration straightforward.

OneDrive is convenient for active collaboration, but it's not the most cost-effective choice for long-term archives, cold backups, or large media collections. At roughly $0.006/GB per month, Backblaze B2 is significantly cheaper than OneDrive's per-user plans for data you access rarely. Moving archival data from OneDrive to Backblaze B2 — while keeping active working files in OneDrive — is a smart cost optimization strategy that RcloneView can execute without any command-line expertise.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## When Does This Migration Make Sense?

- You're over your Microsoft 365 storage quota and want to avoid upgrading.
- You have large media archives (photos, videos, project files) sitting in OneDrive that you rarely access.
- You're replacing OneDrive with Backblaze B2 as your primary backup destination.
- You want S3-compatible storage with native rclone support and no egress fees to other regions.

## Cost Comparison: OneDrive vs Backblaze B2

| Storage | 1 TB/month | 5 TB/month |
|---------|-----------|-----------|
| OneDrive (Microsoft 365) | ~$9.99/user | ~$50+ (per user limits) |
| Backblaze B2 | ~$6.00 | ~$30.00 |

For archive-heavy users, Backblaze B2 can cut your storage bill by 40–60%.

## Step 1 — Connect OneDrive in RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive in RcloneView" class="img-large img-center" />

1. Open RcloneView and click **New Remote**.
2. Select **Microsoft OneDrive**.
3. Click **Authorize** — a browser window opens for Microsoft OAuth.
4. Log in and grant access.
5. Choose your OneDrive type (Personal, Business, or SharePoint) and save the remote as `onedrive`.

## Step 2 — Connect Backblaze B2 in RcloneView

1. Log in to the [Backblaze dashboard](https://www.backblaze.com) and navigate to **App Keys**.
2. Create a new application key with **Read and Write** access to your target bucket.
3. Note the **keyID** and **applicationKey**.
4. In RcloneView, add a new remote of type **Backblaze B2**.
5. Enter the keyID and applicationKey, name it `b2`, and save.

## Step 3 — Create the Target Bucket

In Backblaze B2, create the destination bucket before migrating:

- **Bucket name**: choose a unique name (e.g., `onedrive-archive-2026`)
- **Bucket type**: Private (for personal backups) or Public (for media delivery)
- **Versioning**: Optional — enables recovery of overwritten files

## Step 4 — Run the Migration

Open **Jobs** in RcloneView and configure:

| Setting | Value |
|---------|-------|
| Source | `onedrive:/Archives/` (or whichever folder you're migrating) |
| Destination | `b2:onedrive-archive-2026/` |
| Mode | **Copy** (preserves OneDrive copy until verified) |
| Transfers | 4–8 concurrent (adjust to your bandwidth) |
| Checksum | Enabled |

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transfer OneDrive to Backblaze B2 in progress" class="img-large img-center" />

Click **Run**. RcloneView shows file-by-file progress, transfer speed, and estimated completion time.

## Step 5 — Verify the Migration with Folder Comparison

When the job finishes, use RcloneView's **Folder Comparison** to verify that every OneDrive file landed in B2:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive to B2 migration" class="img-large img-center" />

Any discrepancies appear highlighted. Re-run the job — rclone skips files that are already present and retransfers only the missing ones.

## Step 6 — Schedule Ongoing Backups (Optional)

If you want to keep B2 as a live backup of OneDrive going forward:

1. Switch the job mode to **Sync** instead of Copy.
2. Open **Schedule** and set a recurring interval (e.g., nightly at 2 AM).
3. New or changed OneDrive files will be backed up to B2 automatically.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to B2 backup" class="img-large img-center" />

## Tips for Large OneDrive Migrations

- **Migrate folder by folder** — break large accounts into 100–500 GB chunks.
- **Avoid peak hours** — Microsoft throttles OneDrive API access under heavy load.
- **Use bandwidth limits** — set a limit in RcloneView to avoid impacting daily work during business hours.
- **Keep OneDrive active** — don't delete files from OneDrive until B2 is verified.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add OneDrive and Backblaze B2** remotes through RcloneView's setup wizard.
3. **Create your B2 bucket** in the Backblaze dashboard.
4. **Copy, verify, then decide** whether to keep OneDrive as active storage or fully switch to B2.

Less Microsoft lock-in, lower costs, and S3 compatibility — Backblaze B2 is a smart landing zone for OneDrive archives.

---

**Related Guides:**

- [Backup Dropbox to Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Migrate Google Drive to OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Hidden Cloud Storage Costs — Save Money with RcloneView](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
