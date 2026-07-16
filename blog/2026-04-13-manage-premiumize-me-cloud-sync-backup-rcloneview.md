---
slug: manage-premiumize-me-cloud-sync-backup-rcloneview
title: "Manage Premiumize.me Storage — Sync and Backup Files with RcloneView"
authors:
  - tayson
description: "Connect Premiumize.me to RcloneView using OAuth browser login and sync your stored files to any other cloud provider for backup and long-term management."
keywords:
  - premiumize.me RcloneView
  - premiumize cloud sync
  - premiumize backup
  - manage premiumize files
  - premiumize rclone GUI
  - premiumize media storage
  - cloud transfer premiumize
  - premiumize file management
tags:
  - media
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Premiumize.me Storage — Sync and Backup Files with RcloneView

> Premiumize.me combines premium file hosting with personal cloud storage — RcloneView lets you manage and back up that content through a clean GUI.

Premiumize.me is best known as a premium link generator and cloud download service, but it also provides personal cloud storage where your fetched content lives. If you use it to store media, downloads, or project files, you eventually need a way to move those files — to another cloud for archiving, or to local storage for offline access. RcloneView connects to Premiumize.me through OAuth browser login, so setup takes under a minute.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Premiumize.me via OAuth

Launch RcloneView and open **Remote Manager**. Click **New Remote** and find **Premiumize** in the provider list. When you select it, RcloneView opens your default browser and redirects you to the Premiumize.me OAuth authorization page. Log in and grant access — RcloneView stores the token locally, so you won't need to re-authorize unless you revoke access.

After authorization, the remote appears in your Remote Manager list. Double-click to open it in the File Explorer. Your Premiumize.me file tree loads with all folders and files you've accumulated through the service.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Premiumize.me remote in RcloneView" class="img-large img-center" />

## Browsing Your Premiumize.me Library

The File Explorer in RcloneView gives you a familiar two-panel layout. Navigate your Premiumize.me storage on one side and any other configured remote — Google Drive, Backblaze B2, or a local folder — on the other. You can select multiple files, right-click to copy or move, and track progress in the transfer panel.

For media-heavy libraries, the **Thumbnail View** mode displays image previews in a grid, which is helpful when your Premiumize.me storage contains photos or video thumbnails you want to identify visually before transferring.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing and transferring Premiumize.me files in RcloneView" class="img-large img-center" />

## Syncing Premiumize.me to Another Cloud

Manual file browsing works for occasional moves, but for regular backups the **Job** system is the right tool. Go to **Jobs**, click **New Job**, and set Premiumize.me as the source. Choose any destination remote — Backblaze B2 is a cost-effective option for long-term media archiving, while Google Drive works well if you want files accessible from mobile.

In the job wizard's second step, you can configure **transfer options**: set the number of simultaneous transfers, enable or disable checksums, and turn on **Dry Run** to preview what will be copied before anything moves. This is especially useful if your Premiumize.me storage has grown organically over time and you're not sure of its exact structure.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring and running a Premiumize.me backup job" class="img-large img-center" />

## Monitoring and Job History

Once a job runs, RcloneView records the result in **Job History**. Each entry shows the start time, duration, number of files transferred, total data moved, and any errors. This gives you an audit trail of every sync operation, which matters if you're systematically migrating a large Premiumize.me library over multiple sessions.

If a transfer fails partway through — due to a network hiccup or a rate limit from the Premiumize.me API — you can re-run the same job from Job History without reconfiguring. RcloneView skips files that were already transferred successfully, so interrupted syncs pick up where they left off.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Premiumize.me sync results" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open **Remote Manager**, click **New Remote**, and select **Premiumize**.
3. Complete the OAuth browser login to authorize your account.
4. Create a sync job with Premiumize.me as source and your chosen cloud as destination.

With RcloneView, your Premiumize.me files are no longer locked in a single service — back them up, archive them, or migrate them on your schedule.

---

**Related Guides:**

- [Manage Put.io Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Cloud-to-Cloud Migration with RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Job History and Transfer Logs Monitoring](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
