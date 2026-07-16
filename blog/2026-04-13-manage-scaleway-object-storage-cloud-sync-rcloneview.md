---
slug: manage-scaleway-object-storage-cloud-sync-rcloneview
title: "Manage Scaleway Object Storage — Cloud Sync and Backup with RcloneView"
authors:
  - tayson
description: "Connect Scaleway Object Storage to RcloneView using S3-compatible credentials and sync your European cloud buckets with any other provider quickly."
keywords:
  - Scaleway object storage RcloneView
  - Scaleway S3 compatible sync
  - Scaleway cloud backup
  - Scaleway rclone GUI
  - European cloud storage sync
  - Scaleway bucket transfer
  - S3 compatible cloud sync
  - Scaleway rcloneview setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Scaleway Object Storage — Cloud Sync and Backup with RcloneView

> Scaleway Object Storage is an S3-compatible European cloud service — connect it to RcloneView in minutes using an Access Key, Secret Key, and endpoint URL.

Scaleway is a French cloud provider offering S3-compatible object storage across multiple European regions. It's a solid choice for teams that need GDPR-compliant storage with competitive pricing. RcloneView supports any S3-compatible provider, which means you can connect Scaleway, browse your buckets, and set up sync jobs alongside all your other cloud remotes — no CLI required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Getting Your Scaleway Credentials

Before connecting in RcloneView, you need an **Access Key** and **Secret Key** from the Scaleway console. Log in to console.scaleway.com, navigate to **Credentials** under your project or organization, and generate a new API key. Make note of the secret key — it's only shown once. Also note the endpoint for your region, which follows the format `s3.{region}.scw.cloud` (for example, `s3.nl-ams.scw.cloud` for Amsterdam or `s3.fr-par.scw.cloud` for Paris).

These three values — Access Key, Secret Key, and endpoint — are all you need to configure Scaleway in RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Scaleway S3-compatible remote in RcloneView" class="img-large img-center" />

## Connecting Scaleway to RcloneView

Open RcloneView and go to **Remote Manager**. Click **New Remote** and select **S3 Compatible** from the provider list. In the configuration form, enter:

- **Provider**: Other (S3-compatible)
- **Access Key ID**: your Scaleway Access Key
- **Secret Access Key**: your Scaleway Secret Key
- **Endpoint**: your region endpoint (e.g., `s3.nl-ams.scw.cloud`)

Leave the region field blank or enter the Scaleway region code if prompted. Save the remote, and it will appear in your Remote Manager. Click **Open** to browse your Scaleway buckets in the File Explorer.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Scaleway transfer in real time" class="img-large img-center" />

## Browsing Buckets and Transferring Files

The File Explorer shows your Scaleway buckets at the top level. Navigate into any bucket to see its objects and folder prefixes. You can select files and directories, then copy or move them to another remote opened in the second panel — whether that's AWS S3, Backblaze B2, or a local directory.

For large datasets, right-click a folder and use **Copy to** or **Move to** to initiate a bulk transfer. RcloneView displays real-time progress with transfer speed and estimated completion.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Scaleway and another cloud" class="img-large img-center" />

## Setting Up Scheduled Sync Jobs

For automated backups or regular data pipelines between Scaleway and other providers, the **Job** system handles it reliably. Go to **Jobs**, click **New Job**, and configure Scaleway as source or destination. In the job's advanced options, you can set bandwidth limits, control transfer concurrency, and enable checksum verification to confirm data integrity.

With a PLUS license, you can schedule jobs using cron-style syntax — for example, syncing from another cloud to Scaleway every night at 2 AM. Job results are recorded in **Job History**, giving you a clear view of transfer counts and any errors per run.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gather your Scaleway Access Key, Secret Key, and regional endpoint from the Scaleway console.
3. Open **Remote Manager**, click **New Remote**, select **S3 Compatible**, and enter your credentials.
4. Browse your buckets and create a sync job to automate backups to or from Scaleway.

Scaleway's European infrastructure pairs well with RcloneView's multi-cloud job system for GDPR-conscious workflows.

---

**Related Guides:**

- [Sync Google Cloud Storage to Wasabi with RcloneView](https://rcloneview.com/support/blog/sync-google-cloud-storage-to-wasabi-rcloneview)
- [Manage IDrive E2 Cloud Sync and Backup](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Checksum Verified Cloud Migrations with RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
