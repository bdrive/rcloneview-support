---
slug: migrate-onedrive-to-azure-blob-rcloneview
title: "Migrate OneDrive to Azure Blob — Transfer Files with RcloneView"
authors:
  - tayson
description: "Migrate OneDrive files to Azure Blob Storage using RcloneView. Move enterprise documents to scalable object storage without CLI tools or scripts."
keywords:
  - onedrive to azure blob
  - migrate onedrive to azure
  - onedrive azure blob transfer
  - cloud-to-cloud migration
  - azure blob storage migration
  - rcloneview onedrive transfer
  - microsoft cloud migration
  - enterprise cloud migration
  - onedrive backup azure
  - object storage migration
tags:
  - RcloneView
  - onedrive
  - azure
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate OneDrive to Azure Blob — Transfer Files with RcloneView

> Graduating from OneDrive to Azure Blob Storage gives your team scalable, programmable object storage — and RcloneView makes the move painless.

OneDrive works well for everyday document collaboration, but enterprise teams often outgrow its storage limits or need programmatic access to files via Azure's REST APIs. Azure Blob Storage offers tiered pricing (Hot, Cool, and Archive), massive scalability, and tight integration with Azure Functions, Logic Apps, and Data Factory. RcloneView bridges the two Microsoft services, letting you migrate files from OneDrive to Azure Blob containers without writing a single line of code.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## When OneDrive Reaches Its Limits

OneDrive for Business includes 1 TB per user on most Microsoft 365 plans, with optional add-ons up to 5 TB. That sounds generous until your organization accumulates years of project archives, media assets, or compliance records. Azure Blob Storage scales to exabytes and charges as little as $0.018 per GB per month on the Cool tier — a fraction of what equivalent OneDrive capacity costs.

Beyond raw capacity, Azure Blob supports features OneDrive cannot match: immutable storage policies for regulatory compliance, Azure CDN integration for global content delivery, and fine-grained access control through Shared Access Signatures (SAS). Migrating archival or large-scale data from OneDrive to Azure Blob centralizes storage where your infrastructure already lives.

<img src="/support/images/en/blog/new-remote.png" alt="Creating OneDrive and Azure Blob remotes in RcloneView" class="img-large img-center" />

## Configuring Both Remotes

Add a OneDrive remote in RcloneView by selecting "Microsoft OneDrive" as the provider type. The OAuth flow opens your browser for Microsoft account authentication. Choose between OneDrive Personal, OneDrive for Business, or a specific SharePoint document library depending on where your source files reside. RcloneView displays the root of the selected drive once authentication completes.

For Azure Blob, create a new remote and select "Microsoft Azure Blob Storage." Enter your Storage Account name and either an Account Key or a SAS URL. If your organization enforces Azure Active Directory authentication, RcloneView supports that path as well. Select the target container — or note the container name for the job configuration. RcloneView confirms the connection and lists existing containers and blobs.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up a cloud-to-cloud transfer from OneDrive to Azure Blob" class="img-large img-center" />

## Executing the Migration

Open the two-pane explorer with OneDrive on one side and Azure Blob on the other. Navigate to the OneDrive folders you want to migrate — for example, `/Documents/Projects` or the entire root. On the Azure side, browse into your target container.

For a structured migration, create a Copy job in the Job Manager. Set OneDrive as the source path and the Azure Blob container as the destination. Choose "Copy" mode to transfer files without deleting them from OneDrive during the transition period. Enable the `--ignore-existing` flag if you plan to run the job multiple times, so already-transferred files are skipped efficiently.

OneDrive's API imposes rate limits that can slow large transfers. RcloneView handles throttling and retries automatically, and you can configure parallel transfers (the `--transfers` flag) to optimize throughput within Microsoft's limits.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Migration job history showing OneDrive to Azure Blob transfers" class="img-large img-center" />

## Post-Migration Verification

After the job completes, compare file counts and sizes between OneDrive and Azure Blob using RcloneView's compare feature. Open both remotes side by side and run a comparison to identify any discrepancies. Azure Blob stores MD5 hashes for uploaded objects, so checksum verification catches any corruption that occurred in transit.

Once verified, configure your applications to read from Azure Blob instead of OneDrive. Keep the OneDrive remote connected in RcloneView for a transition period, running periodic sync jobs to catch any files that users continue to add to OneDrive before the cutover is complete.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling periodic OneDrive to Azure Blob sync during migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Authenticate your OneDrive account via Microsoft OAuth and select the correct drive type.
3. Add your Azure Blob remote using your Storage Account name and access key or SAS token.
4. Create a Copy job from OneDrive to Azure Blob, enable checksum verification, and run it.

Once all files are confirmed in Azure Blob, redirect your workflows and retire the OneDrive storage at your own pace.

---

**Related Guides:**

- [Migrate OneDrive to Google Drive with RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Mount Azure Blob Storage as a Local Drive with RcloneView](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [Sync Azure Blob to AWS S3 with RcloneView](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)

<CloudSupportGrid />
