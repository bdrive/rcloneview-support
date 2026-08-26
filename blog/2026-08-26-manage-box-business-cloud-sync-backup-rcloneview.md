---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Manage Box for Business — Sync and Backup Files with RcloneView"
authors:
  - robin
description: "Connect Box for Business in RcloneView to browse, sync, and back up enterprise files with a single cross-platform GUI."
keywords:
  - box for business
  - box enterprise cloud storage
  - RcloneView box business
  - box_sub_type enterprise
  - sync box business files
  - backup box for business
  - manage box enterprise account
  - box cloud storage GUI
  - box business file management
tags:
  - RcloneView
  - box
  - cloud-storage
  - cloud-sync
  - backup
  - business
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Box for Business — Sync and Backup Files with RcloneView

> Box for Business accounts need one extra setting most GUIs get wrong — RcloneView handles it, then gives you a full file manager on top.

Box for Business runs on a different account type than a personal Box account, and connecting it correctly requires enabling an enterprise flag most desktop tools never expose. A design agency with shared enterprise folders across a dozen seats can't afford a broken remote that silently browses the wrong workspace. RcloneView adds the correct setting during setup, then treats Box for Business like any other remote — browsable, syncable, and mountable from one window.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting a Box for Business Account

Box for Business uses the same OAuth browser login as a personal Box account, but it requires `box_sub_type = enterprise` set during remote creation so RcloneView addresses the correct enterprise workspace instead of a personal folder tree. Open Remote tab > New Remote, choose Box, complete the browser sign-in, and set the sub-type before saving. Unlike mount-only tools, RcloneView also syncs and compares folders on the Box for Business remote — on the FREE license.

Once connected, the remote appears in the Explorer tab bar just like any other cloud storage. You can browse enterprise folders, check file counts and sizes in the footer summary, and switch between multiple Box workspaces without re-authenticating each time.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Backing Up Enterprise Folders

A sync job protects Box for Business content the same way it protects any other remote: configure source and destination in Step 1 of the sync wizard, choose one-way "Modifying destination only" for a stable backup direction, and add filters in Step 3 to exclude temporary files or oversized attachments. For teams handling contracts or client deliverables, a nightly one-way sync to local storage or a second cloud account keeps a recovery copy outside the shared workspace.

Job History then tracks every run — status, file count, size transferred, and duration — so an admin can confirm backups actually completed rather than assuming a schedule ran silently in the background.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box for Business backup runs" class="img-large img-center" />

## Mounting Box for Business as a Local Drive

Mounting turns the enterprise account into a drive letter or mount point that any desktop application can open directly, without downloading files first. This matters for teams running design or document software that expects local file paths rather than a web upload dialog. Configure cache mode as "writes" for a balance of responsiveness and reliability, and enable Read only for reviewers who shouldn't modify shared content.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Box for Business folder from the Remote Explorer panel" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Create a new Box remote and enable the enterprise sub-type during setup.
3. Configure a one-way sync job to back up critical enterprise folders.
4. Mount the remote for teams that need direct local file access.

Enterprise accounts deserve the same reliable sync and backup coverage as any other cloud storage — RcloneView just makes sure the connection is configured correctly from the start.

---

**Related Guides:**

- [Manage Box Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Manage Dropbox for Business — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Mount Box Storage as a Network Drive with RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
