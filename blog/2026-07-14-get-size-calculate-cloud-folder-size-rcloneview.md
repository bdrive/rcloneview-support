---
slug: get-size-calculate-cloud-folder-size-rcloneview
title: "Get Size — Calculate Cloud Folder Sizes Instantly in RcloneView"
authors:
  - steve
description: "Learn how RcloneView's Get Size command calculates folder totals across 90+ cloud providers, helping you track storage use before it becomes a problem."
keywords:
  - calculate cloud folder size
  - check cloud storage usage
  - get size cloud files
  - cloud storage size checker
  - google drive folder size
  - onedrive storage usage
  - RcloneView get size
  - cloud storage management
tags:
  - RcloneView
  - feature
  - cloud-storage
  - file-management
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Get Size — Calculate Cloud Folder Sizes Instantly in RcloneView

> Select a folder, right-click, and know exactly how much space it takes up — before you copy, sync, or bill for it.

Most cloud storage interfaces make you guess at folder size, or force you to open a separate usage dashboard that only reports totals for the whole account. RcloneView's Get Size command answers a narrower, more useful question — how large is this specific folder or selection right now — directly from the file browser, on any of the 90+ providers it connects to.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Where Get Size Lives in the Workflow

Get Size is one of the standard right-click operations in the File Explorer panel, alongside Copy, Cut, Delete, and Get Public Link. Select one file, a folder, or a multi-selection made with Ctrl+Click or Shift+Click, right-click, and choose Get Size. RcloneView walks the selection and reports the total size, giving you a number you can act on immediately instead of estimating from a list of individual file sizes.

This is especially useful before starting a sync or copy job. RcloneView mounts AND syncs 90+ providers from one window, so it's common to check a source folder's size right before configuring a Sync Configuration job in Step 1 of the job wizard — confirming the transfer volume matches what you expect before committing to a destination.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting files and folders in RcloneView before checking size" class="img-large img-center" />

## A Practical Case: Auditing a Shared Drive Before Migration

Consider a marketing team migrating a shared Google Drive folder to SharePoint. Before starting the transfer, the team needs to know whether the migration will fit within available destination quota and roughly how long it should take relative to past jobs of known size. Rather than opening Google Drive's web storage report — which only shows account-wide totals — they select the specific project folder in RcloneView's Explorer panel and run Get Size to get a folder-level figure.

The same approach works for auditing a NAS-to-cloud backup, checking whether a photography studio's RAW asset folder has grown past a previous baseline, or confirming that a Combine or Union virtual remote is reporting the totals you expect across merged sources.

<img src="/support/images/en/blog/new-remote.png" alt="Browsing a cloud remote folder structure in RcloneView" class="img-large img-center" />

## Pairing Get Size with Job History and Dry Run

Get Size answers "how big is this right now," but two other RcloneView features round out the picture over time. Job History records the Total Size and Files count for every completed sync, copy, or move, so you can compare a Get Size reading today against what was actually transferred in a previous job. Dry Run goes a step further before you commit to a transfer, listing exactly which files would be copied or deleted without making changes — useful when a Get Size check reveals a folder has grown unexpectedly and you want to see why before syncing.

Together, these three views — a live folder total, historical transfer records, and a pre-flight simulation — give you enough information to plan storage changes deliberately instead of reacting after a quota warning arrives.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing total size and file counts for past transfers" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html) and connect the cloud remotes you want to monitor.
2. Navigate to a folder you suspect is growing — a shared project directory, a media archive, or a backup target.
3. Select it (or a multi-selection with Ctrl+Click) and choose Get Size from the right-click menu.
4. Compare the result against your last Job History entry or run a Dry Run before syncing changes.

Checking folder size before you act, rather than after a quota alert, keeps cloud storage costs and migrations predictable.

---

**Related Guides:**

- [Free Up Space — Managing Full Cloud Storage Across Multiple Clouds](https://rcloneview.com/support/blog/cloud-storage-full-free-up-space-multiple-clouds-rcloneview)
- [Find and Remove Duplicate Files in Cloud Storage with RcloneView](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)
- [Hidden Cloud Storage Costs — How to Save Money with RcloneView](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
