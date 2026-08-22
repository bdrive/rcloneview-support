---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Manage Box for Business Storage — Sync and Backup Files with RcloneView"
authors:
  - robin
description: "Connect Box for Business to RcloneView for cross-platform file browsing, cloud-to-cloud sync, and scheduled backups of enterprise Box accounts."
keywords:
  - box for business
  - box enterprise storage
  - rcloneview box business
  - box business sync
  - box_sub_type enterprise
  - enterprise cloud storage gui
  - box team account backup
  - business cloud storage management
  - box business migration
  - multi-cloud file management
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Manage Box for Business Storage — Sync and Backup Files with RcloneView

> Connect a Box for Business enterprise account to RcloneView and browse, sync, and back up shared company folders next to every other cloud you manage.

Box for Business accounts organize content around enterprise-managed folders rather than a single personal account, which means the standard Box connection needs one extra setting before it behaves correctly. RcloneView handles this directly, giving IT admins a single window to browse, transfer, and protect enterprise Box content instead of switching between the Box web app and a separate sync client.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up a Box for Business Remote

Adding a Box for Business account starts the same way as a personal Box connection: click New Remote, select Box, and complete the OAuth login in your browser. The difference is a single additional setting — `box_sub_type = enterprise` — which points the remote at the enterprise account structure instead of an individual user's space. Once that setting is applied, the enterprise account's folders load in the Explorer panel exactly like any other remote.

Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license — so an admin managing Box alongside other departmental clouds doesn't need a separate application just to move files between them.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Browsing Enterprise Folders

Once connected, the File Explorer panel shows the enterprise folder structure with the same Name, Type, Modified date, and Size columns used across every remote, plus a collapsible folder tree for navigating deep department hierarchies. The breadcrumb path bar's Copy Full Path option outputs the `remote:path` format, which is handy when handing a location off to the built-in rclone Terminal for a quick `rclone about` storage check.

Ctrl+Click and Shift+Click multi-selection make it easy to pull a specific project folder out of a large enterprise space instead of working through the entire account.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Box for Business enterprise folders in RcloneView Explorer" class="img-large img-center" />

## Backing Up Enterprise Data to a Second Cloud

Keeping enterprise files in a single provider is a risk many IT teams would rather not carry, so mirroring Box for Business content to Amazon S3, Backblaze B2, or another cloud as a secondary copy is a common pattern. RcloneView's 4-step Sync wizard covers this: pick the Box for Business remote as the source, choose a destination remote, and set the sync direction to one-way so the backup destination reflects the source without touching anything upstream. Filtering settings can exclude oversized media or limit the job to files under a certain age, keeping the backup scoped to what actually matters.

Running a Dry Run before the first full sync shows the exact list of files to be copied and deleted, which is worth doing before moving an entire enterprise account's worth of data.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Box for Business backup job in RcloneView" class="img-large img-center" />

## Automating Recurring Backups

PLUS license users can attach a crontab-style schedule to the Box for Business backup job so it runs nightly or weekly without manual intervention. Job History then records execution type, duration, status, and total size transferred for every run, giving admins a record to check without digging through Box's own admin console.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add a new Box remote and set `box_sub_type = enterprise` during configuration.
3. Browse enterprise folders in the Explorer panel and confirm access to the departments you need.
4. Create a Sync job to mirror enterprise data to a secondary cloud, and schedule it if you're on the PLUS license.

A correctly configured Box for Business remote turns RcloneView into a practical backstop for company data that otherwise lives in just one place.

---

**Related Guides:**

- [Manage Box Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrate Box to OneDrive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [Mount Box Storage as a Network Drive with RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
