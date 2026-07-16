---
slug: manage-bunny-cdn-storage-sync-rcloneview
title: "Manage Bunny CDN Storage — Sync and Deploy Content with RcloneView"
authors:
  - tayson
description: "Bunny.net offers fast, affordable CDN storage. Use RcloneView to manage Bunny Storage zones, sync content from other clouds, and automate CDN deployments."
keywords:
  - bunny cdn storage
  - bunny net rclone
  - bunny storage sync
  - bunny cdn file manager
  - bunny storage gui
  - cdn storage management
  - bunny net sync tool
  - bunny cdn deploy
  - bunny storage backup
  - cdn content sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - s3-compatible
  - performance
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Bunny CDN Storage — Sync and Deploy Content with RcloneView

> Bunny.net storage is fast and cheap for CDN content. But managing storage zones through the web dashboard is clunky for bulk operations. RcloneView gives you a proper file manager for your CDN assets.

Bunny.net has become a popular CDN choice for its performance and pricing. Its Edge Storage provides S3-compatible storage zones that serve content through the CDN network. However, managing files through Bunny's web interface is slow for bulk uploads, lacks sync capabilities, and has no scheduling. RcloneView connects to Bunny Storage via its FTP or HTTP endpoint and provides full file management.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Bunny Storage to RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Bunny CDN remote" class="img-large img-center" />

Add your Bunny Storage zone as an FTP remote using the credentials from your Bunny.net dashboard.

## Key Workflows

### Deploy content to CDN

Upload website assets, images, or media from your main cloud storage to Bunny CDN:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Deploy to Bunny CDN" class="img-large img-center" />

### Sync from production storage

Keep your CDN storage zone in sync with your production asset storage on S3 or Google Drive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync to Bunny Storage" class="img-large img-center" />

### Schedule automated deployments

Update CDN content automatically on a schedule:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CDN deployment" class="img-large img-center" />

### Verify CDN content

Compare your source storage with Bunny CDN to ensure deployed content is current:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify CDN content" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add Bunny Storage** as an FTP remote.
3. **Sync content** from your primary storage.
4. **Schedule deployments** for automated updates.

Fast CDN deserves fast management tools.

---

**Related Guides:**

- [Sync Vultr Object Storage](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
