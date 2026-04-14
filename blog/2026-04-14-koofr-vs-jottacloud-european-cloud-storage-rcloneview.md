---
slug: koofr-vs-jottacloud-european-cloud-storage-rcloneview
title: "Koofr vs Jottacloud — European Cloud Storage Comparison with RcloneView"
authors:
  - tayson
description: "Compare Koofr and Jottacloud for European cloud storage compliance and privacy. Learn how RcloneView manages both providers for backup, sync, and cross-cloud migration."
keywords:
  - Koofr vs Jottacloud
  - European cloud storage comparison
  - GDPR cloud storage
  - privacy cloud storage Europe
  - Koofr RcloneView
  - Jottacloud RcloneView
  - European cloud backup
  - rclone Koofr Jottacloud
tags:
  - RcloneView
  - comparison
  - cloud-storage
  - european-cloud
  - koofr
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Koofr vs Jottacloud — European Cloud Storage Comparison with RcloneView

> Both Koofr and Jottacloud are privacy-focused European cloud storage providers with strong GDPR compliance. RcloneView supports both, making it easy to manage, compare, or migrate between them.

European businesses and individuals choosing cloud storage often narrow their list to GDPR-compliant providers with data centers in Europe. Koofr (Slovenia) and Jottacloud (Norway) are two of the most recognized independent European cloud providers — both privacy-focused, both supported by rclone, and both manageable through RcloneView. This comparison helps you understand the practical differences when using either service for backup and sync workflows.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Provider Overview

**Koofr** is based in Slovenia (EU) and operates under Slovenian law. It supports OAuth login in RcloneView, meaning you authenticate via browser without entering passwords directly into rclone. Koofr also acts as a WebDAV gateway to other services (Dropbox, OneDrive, Google Drive), making it useful as a cloud aggregator.

**Jottacloud** is based in Norway and stores data exclusively in Norwegian data centers. It uses its own proprietary protocol, but rclone's Jottacloud backend handles the OAuth authentication seamlessly. Jottacloud is popular among Scandinavian users for personal and SMB storage, with strong versioning support.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Jottacloud as remotes in RcloneView" class="img-large img-center" />

## Setting Up Both in RcloneView

Both providers use OAuth browser authentication in RcloneView. Go to **Remote tab → New Remote**, select Koofr or Jottacloud, and complete the browser login. Neither requires manual token entry or API key configuration — the OAuth flow handles everything.

Once both are added as remotes, open the Explorer in split-panel mode. Browse your Koofr folders on the left and Jottacloud on the right (or vice versa). This side-by-side view is ideal for comparing folder structures before deciding which provider to use as your primary backup target.

## Practical Differences for RcloneView Users

**File versioning:** Jottacloud maintains file version history automatically, making it easier to recover previous versions of documents. Koofr does not offer built-in versioning for standard plans.

**API maturity:** Koofr's rclone backend is well-established and handles a broad range of file operations reliably. Both providers work with RcloneView's standard sync and copy workflows.

**Storage aggregation:** Koofr's WebDAV gateway feature means you can use it as a pass-through to sync between Dropbox and Koofr, or between Google Drive and Koofr, all managed through RcloneView. Jottacloud is a standalone destination.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-provider transfer between Koofr and Jottacloud in RcloneView" class="img-large img-center" />

## Migrating Between Koofr and Jottacloud

If you decide to switch from one to the other, RcloneView handles the migration as a direct cloud-to-cloud transfer. Create a Sync job with Koofr as source and Jottacloud as destination (or reverse). Enable checksum verification to confirm file integrity after transfer. For large migrations, run the Dry Run first to preview the file count and total size.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Koofr to Jottacloud migration job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add both Koofr and Jottacloud as OAuth remotes in the New Remote wizard.
3. Use the split-panel Explorer to compare folder structures side by side.
4. Create a Sync job if you want to migrate or maintain a backup copy between the two providers.

Both Koofr and Jottacloud are solid choices for GDPR-compliant European cloud storage — RcloneView lets you use them individually or together as part of a multi-cloud backup strategy.

---

**Related Guides:**

- [Manage Jottacloud — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Sync Jottacloud to Google Drive and External Storage with RcloneView](https://rcloneview.com/support/blog/sync-jottacloud-google-drive-external-storage-rcloneview)
- [Koofr as Multi-Cloud Hub with RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)

<CloudSupportGrid />
