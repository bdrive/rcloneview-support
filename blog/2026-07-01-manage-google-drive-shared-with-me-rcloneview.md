---
slug: manage-google-drive-shared-with-me-rcloneview
title: "Manage Google Drive Shared With Me — Sync and Backup Files with RcloneView"
authors:
  - robin
description: "Browse, sync, and back up Google Drive Shared with Me folders using RcloneView's cross-platform GUI, without losing track of shared content."
keywords:
  - google drive shared with me
  - google drive shared with me sync
  - rcloneview google drive
  - backup shared google drive folders
  - google drive gui client
  - shared_with_me rclone
  - google drive collaboration backup
  - manage shared google drive files
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Google Drive Shared With Me — Sync and Backup Files with RcloneView

> Files other people share with you live in a separate space from your own Drive — RcloneView lets you browse, back up, and sync that shared content just as easily as your own files.

Google Drive's "Shared with Me" section holds every file and folder that colleagues, clients, or collaborators have shared with your account, but it isn't part of your regular Drive folder tree by default. That separation makes shared content easy to lose track of, especially when a client folder needs to be archived locally or mirrored to another cloud for safekeeping. RcloneView solves this by connecting to the Shared with Me space as its own browsable remote, so you can treat shared content like any other folder in your workflow.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting to Shared With Me Content

Standard Google Drive remotes only show files you own or have placed in your own folder structure. To reach items shared with you, RcloneView's remote configuration exposes the `shared_with_me` setting for Google Drive remotes — enabling it points the connection at the Shared with Me view instead of your personal Drive root. This means you don't need a second Google account or a browser workaround to reach a client's shared folder; you configure it once in the New Remote wizard and the shared tree appears in the Explorer panel like any other connection.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Google Drive remote configured for Shared with Me content in RcloneView" class="img-large img-center" />

Once connected, the Shared with Me remote behaves like a normal file source: folder tree navigation, thumbnail previews for images, and the standard right-click menu for copy, download, and Get Public Link all work the same way. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license — so shared content isn't limited to read-only browsing.

## Backing Up Shared Folders Before They Disappear

Shared folders can vanish from your view if the owner revokes access or deletes the source file, which is a real risk when depending on someone else's Drive for project deliverables. Running a one-way sync job from the Shared with Me remote to your own Google Drive, a local disk, or an object storage bucket creates an independent copy you control. Configure the job with "Modifying destination only" direction so the backup destination always mirrors the current state of the shared folder without altering the original.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Shared with Me folder to a backup destination in RcloneView" class="img-large img-center" />

For recurring client relationships, filtering settings let you exclude file types you don't need archived — Google Docs or specific extensions can be skipped using the predefined or custom filter rules in Step 3 of the sync wizard, keeping backups focused on the files that actually matter.

## Scheduling Ongoing Protection

A shared folder that a client updates weekly needs more than a one-time copy. PLUS license users can attach a crontab-style schedule to the sync job so the Shared with Me content is backed up automatically on a recurring basis, without manually re-running the job. Job History then records each run's status, transferred size, and duration, giving you a clear audit trail of when the shared content was last captured.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for a Google Drive Shared with Me remote" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a new Google Drive remote and enable the `shared_with_me` option during setup.
3. Browse the Shared with Me tree in the Explorer panel to confirm the expected folders appear.
4. Set up a one-way sync job to a backup destination, and schedule it if you're on a PLUS license.

Shared content shouldn't be a blind spot in your backup strategy — bringing it into RcloneView puts it under the same protection as everything else you manage.

---

**Related Guides:**

- [Manage Google Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Fix Google Shared Drive Permission Errors — How to Resolve with RcloneView](https://rcloneview.com/support/blog/fix-google-shared-drive-permission-errors-rcloneview)
- [Sync Two Google Drive Accounts with RcloneView](https://rcloneview.com/support/blog/sync-two-google-drive-accounts-rcloneview)

<CloudSupportGrid />
