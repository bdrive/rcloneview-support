---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Manage Magalu Cloud Storage — Sync and Backup Files with RcloneView"
authors:
  - morgan
description: "Connect Magalu Cloud object storage to RcloneView for S3-compatible sync, backup, mounting, and multi-cloud file transfers on any platform."
keywords:
  - Magalu Cloud
  - Magalu object storage
  - RcloneView
  - S3-compatible storage
  - cloud backup
  - cloud sync
  - multi-cloud management
  - object storage GUI
  - cross-platform cloud tool
  - Brazil cloud storage
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Magalu Cloud Storage — Sync and Backup Files with RcloneView

> Connect Magalu Cloud's S3-compatible object storage to RcloneView and manage it alongside every other cloud you already use.

Magalu Cloud is an S3-compatible object storage service, and like every S3-compatible backend RcloneView supports, it can be added, browsed, synced, and mounted without touching a command line. If your team already stores files there for cost or regional reasons, RcloneView turns that bucket into a normal drive you can drag files into, back up on a schedule, or compare against another cloud in seconds.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Adding Magalu Cloud as a Remote

Since Magalu Cloud speaks the S3 protocol, RcloneView connects to it the same way it connects to Amazon S3, Wasabi, or Cloudflare R2: enter the Access Key ID, Secret Access Key, and the service endpoint URL in the New Remote wizard, then test the connection before saving. There's no OAuth flow to complete and no browser redirect — just the credentials from your Magalu Cloud console.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new S3-compatible remote in RcloneView" class="img-large img-center" />

Once the remote is saved, it appears as its own tab in the Explorer, right next to your other connected storage. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so a Magalu bucket sits alongside Google Drive, OneDrive, or a NAS share without needing a separate application for each.

## Syncing and Backing Up to Magalu Cloud

With the remote connected, use the Sync wizard to set up a one-way backup job from a local folder, an external drive, or another cloud into your Magalu bucket. Step 2 lets you tune concurrent transfers and multi-thread settings for large uploads, and Step 3 adds filters so only the file types or folders you actually need get pushed to object storage.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job to a Magalu Cloud remote" class="img-large img-center" />

Before running a real sync, use Dry Run to preview exactly which files will be copied or deleted — useful when you're still getting a feel for how a new S3-compatible endpoint behaves. Once you're confident in the job, schedule it with the PLUS license so backups to Magalu Cloud run automatically without you opening the app.

## Mounting Magalu Cloud as a Local Drive

Object storage becomes far more useful when it behaves like a regular folder. Select the Magalu remote in the Explorer, click the Mount icon, and choose a VFS cache mode — writes mode is the default and works well for most upload-heavy workflows. Once mounted, any application on your machine can read and write to the bucket directly.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Magalu Cloud remote from the RcloneView Explorer" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generate an Access Key and Secret Key from your Magalu Cloud console.
3. Add a new remote in RcloneView using the S3-compatible provider option, entering your keys and endpoint.
4. Test the connection, then start browsing, syncing, or mounting your bucket.

Once Magalu Cloud is set up, it works like any other remote in RcloneView — no separate tooling required to keep it in sync with the rest of your storage.

---

**Related Guides:**

- [Manage Cloudflare R2 Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Centralize S3, Wasabi, and R2 with RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Manage Wasabi Cloud Storage — Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
