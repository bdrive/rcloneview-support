---
slug: manage-hetzner-storage-box-sync-rcloneview
title: "Manage Hetzner Storage Box — Sync and Backup with RcloneView"
authors:
  - tayson
description: "Learn how to securely connect Hetzner Storage Box to RcloneView and sync files across clouds with SFTP and WebDAV protocols for European cloud backup."
keywords:
  - Hetzner Storage Box
  - SFTP backup
  - WebDAV cloud sync
  - European cloud storage
  - RcloneView
  - secure file sync
  - cloud backup Europe
  - Hetzner SFTP
  - hybrid cloud backup
  - GDPR-compliant cloud storage
tags:
  - RcloneView
  - hetzner
  - european-cloud
  - cloud-storage
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Hetzner Storage Box — Sync and Backup with RcloneView

> European cloud storage meets multi-cloud flexibility. Hetzner Storage Box offers competitive pricing and GDPR compliance—now manage it effortlessly alongside your other cloud accounts in RcloneView.

Hetzner Storage Box is a trusted choice for European businesses seeking reliable, affordable cloud backup. Whether you're using SFTP or WebDAV, RcloneView bridges your Hetzner account to your entire cloud ecosystem, letting you sync, backup, and archive without leaving your dashboard.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Hetzner Storage Box via SFTP

Adding a Hetzner Storage Box remote is straightforward in RcloneView. SFTP gives you direct server access with industry-standard encryption.

1. Open RcloneView and click **Add Remote**
2. Select **SFTP** from the provider list
3. Enter your Hetzner credentials:
   - **Host**: `u[account-id].your-storagebox.de`
   - **Username**: Your Hetzner login
   - **Password**: Your Hetzner password or SSH key
4. Set port to **22** (standard SFTP)
5. Click **Test Connection** to verify

![New Remote Setup](/images/en/blog/new-remote.png)

## Sync Hetzner to AWS S3 or Other Clouds

Once your Hetzner Storage Box is connected, you can create cloud-to-cloud sync jobs instantly.

**Use cases:**
- **Backup to S3**: Archive frequently accessed files from Hetzner to Amazon S3 Glacier for long-term retention
- **Multi-cloud redundancy**: Mirror data across Hetzner and Backblaze B2
- **Hybrid workflows**: Sync Hetzner Storage Box with Google Drive for team access

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## Real-Time Monitoring and Scheduling

RcloneView's job scheduler lets you automate Hetzner backups on your timeline. Monitor transfer speeds, error rates, and file counts in real-time.

![Job History and Monitoring](/images/en/howto/rcloneview-basic/job-history.png)

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a Hetzner Storage Box account (if you don't have one) at [hetzner.com](https://www.hetzner.com/storage/storage-box).
3. Add your Hetzner remote using SFTP or WebDAV credentials in RcloneView.
4. Create your first sync or backup job to another cloud provider.
5. Schedule recurring jobs or run one-time transfers as needed.

Manage your European cloud storage with confidence—RcloneView handles the complexity so you focus on your data.

---

**Related Guides:**

- [Manage SFTP Server — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Connect WebDAV Server — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Manage OVH Cloud Object Storage — Sync with RcloneView](https://rcloneview.com/support/blog/manage-ovh-cloud-object-storage-sync-rcloneview)

<CloudSupportGrid />
