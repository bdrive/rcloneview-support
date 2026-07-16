---
slug: manage-files-com-cloud-sync-backup-rcloneview
title: "Manage Files.com Storage — Sync and Backup Files with RcloneView"
authors:
  - tayson
description: "Connect Files.com to RcloneView via SFTP or WebDAV, browse enterprise file shares, and run automated sync and backup jobs for secure file management."
keywords:
  - Files.com RcloneView
  - Files.com SFTP
  - Files.com WebDAV
  - enterprise file management
  - cloud sync Files.com
  - Files.com backup
  - SFTP cloud sync
  - secure file transfer
tags:
  - sftp
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Files.com Storage — Sync and Backup Files with RcloneView

> Files.com is a powerful enterprise file management platform, and RcloneView connects to it via SFTP or WebDAV so you can sync, backup, and manage your files through a clean desktop GUI.

Files.com provides enterprise-grade managed file transfer with compliance features, automation, and access controls that large organizations depend on. For teams that need to integrate Files.com into broader multi-cloud workflows — syncing content to cloud backups, moving files to other storage providers, or managing files in bulk — RcloneView offers a graphical interface that works on top of standard SFTP and WebDAV protocols. No separate rclone installation is needed; it is bundled inside RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Files.com via SFTP

SFTP is the most reliable way to connect RcloneView to Files.com. In RcloneView, click **New Remote** and select **SFTP**. Enter your Files.com hostname (typically `<your-subdomain>.files.com`), your username, and either your password or an SSH key. Files.com supports both authentication methods — SSH key authentication is preferred for automated workflows as it avoids storing passwords.

After saving, the Files.com SFTP remote appears in the dual-pane explorer. Navigate your Files.com folder structure, upload and download files with drag and drop, and manage your enterprise file shares directly from the RcloneView interface. Live transfer progress is shown for all operations.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Files.com as an SFTP remote in RcloneView" class="img-large img-center" />

## Connecting via WebDAV

Files.com also supports WebDAV, which is an alternative if SFTP is blocked by a firewall or if you prefer HTTP-based access. In RcloneView, click **New Remote** > **WebDAV** and enter the Files.com WebDAV URL, your username, and password. Files.com's WebDAV endpoint is typically available at `https://<subdomain>.files.com/dav/`.

WebDAV works well for general file browsing and moderate-volume transfers. For high-throughput bulk operations — such as syncing thousands of files in a backup job — SFTP generally offers better performance and more reliable large file handling.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Files.com to cloud backup storage in RcloneView" class="img-large img-center" />

## Running Sync and Backup Jobs

With Files.com connected, you can create sync jobs using the **Job Wizard**. Set a Files.com folder as the source and a cloud backup target (such as Amazon S3, Backblaze B2, or Google Drive) as the destination. This is a common pattern for enterprise backup: Files.com serves as the active file management platform, and a cloud object store holds archival copies.

Run a **dry run** before executing any sync job to verify that the correct files are in scope. For compliance-sensitive files, RcloneView's **Job History** provides a full audit trail of every transfer. PLUS license users can schedule these backup jobs to run automatically — for example, nightly — ensuring that Files.com data is continuously backed up without manual intervention.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Files.com backup sync in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Click **New Remote** > **SFTP** and enter your Files.com hostname, username, and SSH key or password.
3. Browse your Files.com folder structure in the dual-pane explorer.
4. Use the **Job Wizard** to create a backup sync job from Files.com to your cloud storage of choice.
5. Schedule recurring backups with a PLUS license for automated data protection.

RcloneView bridges Files.com's enterprise file management capabilities with the broader cloud storage ecosystem, giving you a single graphical tool for all your file operations.

---

**Related Guides:**

- [Manage Seafile — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Manage Citrix ShareFile — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Fix SFTP Connection Refused and Timeout Errors with RcloneView](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
