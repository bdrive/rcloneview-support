---
slug: migrate-proton-drive-to-wasabi-rcloneview
title: "Migrate Proton Drive to Wasabi — Transfer Files with RcloneView"
authors:
  - kai
description: "Move encrypted files from Proton Drive to Wasabi object storage with RcloneView's direct cloud-to-cloud transfer, no local download needed."
keywords:
  - migrate Proton Drive to Wasabi
  - Proton Drive to Wasabi transfer
  - cloud to cloud migration
  - Wasabi object storage backup
  - Proton Drive backup
  - transfer files Proton Drive
  - RcloneView migration
  - encrypted cloud storage migration
tags:
  - RcloneView
  - proton-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Proton Drive to Wasabi — Transfer Files with RcloneView

> Move files straight from Proton Drive to Wasabi object storage without routing anything through a local disk first.

Proton Drive is built for privacy-focused personal storage, but it isn't designed for the workloads Wasabi handles well — large media libraries, application backups, or datasets that need S3-compatible access from other tools. When a user outgrows Proton Drive's use case, or simply wants a second, cheaper long-term copy, RcloneView moves the files directly between the two, connecting to both remotes at once instead of downloading everything locally first.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Both Remotes

Proton Drive in RcloneView is set up with an email and password (plus optional 2FA), while Wasabi is added as an S3-compatible remote using an Access Key ID, Secret Access Key, and the appropriate regional endpoint. Both remotes appear as tabs in the Explorer, so a user can browse a Proton Drive folder in one panel and a Wasabi bucket in the other before starting any transfer.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Proton Drive and Wasabi remotes in RcloneView" class="img-large img-center" />

RcloneView also connects S3, Azure, and Backblaze B2 with full read/write access on the FREE license, so setting up the Wasabi side of this migration requires no paid tier.

## Running the Cloud-to-Cloud Transfer

With both remotes open, dragging a folder from the Proton Drive panel to the Wasabi panel triggers a direct copy — data streams from Proton Drive to Wasabi through RcloneView, never touching the local disk. For larger migrations, the Sync wizard is the better tool: it supports a proper one-way sync from the Proton Drive source to a Wasabi destination bucket, with configurable concurrent transfer counts to make full use of available bandwidth.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer from Proton Drive to Wasabi in RcloneView" class="img-large img-center" />

Dry Run mode is worth running first on any large migration — it lists exactly which files will copy before anything actually moves, catching filter mistakes or unexpected folder structures early.

## Confirming a Complete Migration

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop file transfer into a Wasabi remote in RcloneView" class="img-large img-center" />

Once the sync job finishes, the Transferring tab in the bottom Info View shows total files moved, transfer speed, and any errors encountered mid-job. For migrations run as a saved job rather than a one-time transfer, Job History keeps a permanent record — start time, duration, total size, and completion status — so there's a clear log confirming every file made it to Wasabi before the Proton Drive copy is retired.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Proton Drive remote using your account email and password.
3. Add your Wasabi remote with its Access Key, Secret Key, and regional endpoint.
4. Run a Dry Run first, then execute the sync and confirm the transfer in Job History.

Retiring a Proton Drive folder is a lot less stressful once there's a verified log showing every file already landed safely on Wasabi.

---

**Related Guides:**

- [Manage Proton Drive — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Manage Wasabi Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrate Proton Drive to Backblaze B2 — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
