---
slug: migrate-sftp-to-google-drive-rcloneview
title: "Migrate SFTP to Google Drive — Transfer Files with RcloneView"
authors:
  - kai
description: "Migrate files from an SFTP server to Google Drive using RcloneView's dual-pane explorer, dry run preview, and scheduled sync jobs."
keywords:
  - RcloneView
  - migrate SFTP to Google Drive
  - SFTP to cloud migration
  - transfer SFTP files
  - SSH file transfer to cloud
  - cloud storage migration
  - SFTP client GUI
  - Google Drive backup
  - secure file transfer tool
  - decommission SFTP server
tags:
  - RcloneView
  - sftp
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate SFTP to Google Drive — Transfer Files with RcloneView

> Retire an aging SFTP server without losing a single file, using RcloneView to move everything straight to Google Drive.

Many teams still run an internal SFTP server for file drops, but maintaining SSH credentials, firewall rules, and disk space on that box gets expensive compared to letting Google Drive handle storage and sharing. RcloneView connects to both an SFTP host and Google Drive in the same window, so you can browse, compare, and transfer between them without touching a terminal. It's a practical first step for a small IT team migrating a legacy file server before decommissioning the hardware for good.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect the SFTP Server and Google Drive Side by Side

Add the SFTP remote first: enter the host address and SSH credentials in the New Remote wizard, using port 22 by default. Add Google Drive as a second remote through its OAuth browser login — no API key entry needed. Open both in separate Explorer panels using RcloneView's split-panel layout so you can see the full folder structure on each side at once.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an SFTP remote and a Google Drive remote in RcloneView" class="img-large img-center" />

RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so the same setup works whether the SFTP box is on your local network or reachable only through a jump host.

## Preview the Migration Before Moving Anything

Before transferring years of accumulated files, run Folder Compare between the SFTP root and the target Google Drive folder to see exactly what's missing on the destination side. Then configure the transfer as a Sync job and use Dry Run to simulate the copy — RcloneView lists every file that would move and every folder that would be created, with nothing actually written until you confirm.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing SFTP and Google Drive folder contents before migration in RcloneView" class="img-large img-center" />

This step matters most when the SFTP server has accumulated years of nested folders with inconsistent naming — the dry run surfaces surprises before they become an overnight support incident.

## Automate the Remaining Transfer with Scheduled Jobs

For a large SFTP archive, don't try to move everything in one sitting. Save the migration as a Job in Job Manager, set the number of file transfers to match your network's realistic throughput, and let it run in the background while you keep working in other Explorer panels. If the SFTP server needs to stay live for a few more weeks during cutover, PLUS-license scheduling lets you repeat the sync on a crontab-style schedule so Google Drive stays current until the old server is switched off.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring SFTP to Google Drive sync job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your SFTP server as a remote using its host address and SSH credentials.
3. Add Google Drive as a second remote through the OAuth browser login flow.
4. Run Folder Compare and Dry Run, then save the transfer as a Job before running it for real.

Once the sync job finishes cleanly on a repeat run with nothing left to copy, the old SFTP server is safe to power down.

---

**Related Guides:**

- [Manage SFTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Manage Google Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Mount SFTP and SMB as a Local Drive with RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
