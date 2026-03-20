---
slug: zero-downtime-sharepoint-to-google-shared-drives-rcloneview
title: "Zero-Downtime SharePoint to Google Shared Drives Migration with RcloneView"
authors:
  - tayson
description: Lift Microsoft 365 SharePoint Online libraries into Google Shared Drives without interrupting users by combining RcloneView's multi-cloud Explorer, Compare previews, Sync jobs, and scheduler-driven delta passes.
keywords:
  - sharepoint to google drive
  - google shared drive migration
  - rcloneview
  - zero downtime transfer
  - microsoft 365 to workspace
  - rclone compare
  - multi cloud sync
  - scheduler automation
  - sharepoint cutover plan
  - cloud migration blueprint
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - Scheduler
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Zero-Downtime SharePoint to Google Shared Drives Migration with RcloneView

> Keep designers, finance, and project teams working in SharePoint while you hydrate Google Shared Drives in the background--then flip the switch in one cutover window.

SharePoint Online libraries are often packed with permission-heavy folders, document sets, and regional data controls. At the same time, Google Workspace Shared Drives promise simpler collaboration and storage quotas, but the native movers rarely honor metadata, delta windows, or throttling. RcloneView wraps rclone's SharePoint and Google Drive backends in a GUI, so you can plan multi-cloud migrations with staged Compare runs, Sync + Copy jobs, mount-based QA, and scheduler-based delta passes.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Why Plan a Zero-Downtime SharePoint -> Google Cutover

- **Distributed teams can't pause** -- marketing assets, PMOs, and contracts need continuous access while the new Shared Drive is filling.
- **Granular permissions** -- SharePoint libraries mix Teams-connected folders and standalone document centers; you need a repeatable way to rebuild them inside Shared Drives with clear audit logs.

A zero-downtime strategy means running multi-phase syncs while both platforms stay online, then cutting over after the final delta.

## Migration Blueprint: Multi-Cloud Control Panel

1. **Connect both sides** using [Remote Manager](/support/howto/rcloneview-basic/remote-manager) along with the provider guides for [SharePoint for Business](/support/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business) and [Google Shared Drives](/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive). RcloneView isolates OAuth tokens per tenant and stores them with the protections.
2. **Organize Explorer panes** so each pane references a matching library vs. Shared Drive.
3. **Templates for jobs** come from [Create Sync Jobs](/support/howto/rcloneview-basic/create-sync-jobs) and [Synchronize Remote Storages](/support/howto/rcloneview-basic/synchronize-remote-storages). Copy jobs seed the target; Sync jobs handle onedirectional clean-up; Compare runs validate.
4. **Mounts for QA** follow [Mount cloud storage as a local drive](/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive), letting power users preview content inside Finder or Explorer before cutover.
5. **Schedulers + monitoring** rely on [Job scheduling and execution](/support/howto/rcloneview-advanced/job-scheduling-and-execution) and [Real-time transfer monitoring](/support/howto/rcloneview-basic/real-time-transfer-monitoring) to keep delta runs predictable.  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  
  

## Step 1 -- Harden Connectors & Metadata

- Label every remote (`sp-marketing`, `sp-pmo`, `gdrive-regional-apac`) and restrict the root path to the specific library. This keeps remote browsing fast inside [Browse and manage remote storage](/support/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Step 2 -- Baseline with Compare Runs

1. Open the dual-pane Explorer, point the left side at SharePoint, right side at the empty Shared Drive.
2. Use [Compare folder contents](/support/howto/rcloneview-basic/compare-folder-contents) to detect size, checksum, and timestamp deltas.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare SharePoint library to Google Shared Drive before migrating" class="img-large img-center" />

Baseline Compare snapshots give you a forensic record of the original state and help identify stale subsites you might archive instead of moving.

## Step 3 -- Stage Copy + Sync Jobs

- Create a **Copy** job per business unit to hydrate the Shared Drive without deleting anything on SharePoint. Reference: [Create Sync Jobs](/support/howto/rcloneview-basic/create-sync-jobs).  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
   

## Step 4 -- Automate Delta Windows with Scheduler

Open Scheduler, enable it globally, then assign cadences per job:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule staged SharePoint to Google migration jobs inside RcloneView" class="img-large img-center" />


## Step 5 -- Cutover Day Checklist

1. **Freeze writes** on SharePoint (communicate via Teams/Slack) but keep the site online for read-only needs.
2. Run the final Sync + Compare job set. Use the Compare diff to confirm only a handful of files changed since the last delta.
3. Mount the new Shared Drive with [Mount cloud storage as a local drive](/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) and have business owners spot-check complex folder trees.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />  
       


## Post-Migration QA & Mount Operations

Mount Manager lets engineers, finance, or creative leads open the new Shared Drives (or the legacy SharePoint remote) as read-only drives for auditing and training. 

## Project Timeline Playbook

| Phase | RcloneView action | Outcome |
| --- | --- | --- |
| Week 1 | Connect remotes, baseline Compare, create Copy jobs | Inventory of each library + seeded Shared Drives |
| Week 2 | Nightly Scheduler delta + Weekly Compare report | Continuous updates with drift visibility |
| Week 3 | Pilot mounts, permissions validation, user training | Stakeholders preview Google Shared Drives safely |
| Cutover week | SharePoint freeze, final Sync/Compare, Shared Drive go-live | Minutes of downtime with signed validation logs |
| 2 weeks after | Scheduled Sync on legacy remote + optional archival Copy to S3/Wasabi | Proof that no files were missed before decommissioning |


RcloneView turns multi-cloud migrations into a predictable playbook: set up remotes, preview differences, stage Copy + Sync jobs, automate deltas, and mount for QA. Your teams stay productive on SharePoint until the exact moment you redirect them to Google Shared Drives.

<CloudSupportGrid />
