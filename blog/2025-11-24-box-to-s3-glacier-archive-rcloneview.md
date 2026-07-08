---
slug: box-to-s3-glacier-archive-rcloneview
title: "Box to S3 + Glacier: Tiered Archives with RcloneView"
authors:
  - tayson
description: "Migrate Box libraries into Amazon S3 hot storage and Glacier Deep Archive for long-term retention, with compare, checksum verification, and scheduled syncs in RcloneView."
keywords:
  - rcloneview
  - box migration
  - s3
  - glacier
  - cloud archive
  - checksum verification
  - scheduler
  - multi cloud
  - rclone
  - tiered storage
  - cloud backup
  - compare sync
  - mount
  - job history
  - visual dashboard
  - gui
  - aws
  - vault
  - compliance
  - long term retention
tags:
  - RcloneView
  - cloud-storage
  - cloud-migration
  - backup
  - s3
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Box to S3 + Glacier: Tiered Archives with RcloneView

> Move Box libraries into Amazon S3 for active access and Glacier for long-term retention, with visual compares, checksum-verified syncs, and scheduled jobs -- no CLI flags required.

Box is great for collaboration, but long-term retention and large media libraries can get expensive. RcloneView lets you mirror Box folders into S3 buckets for hot access, then push aging data into Glacier classes on a schedule. You get side-by-side compares, logged jobs, and retries without babysitting scripts.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## What We Are Solving

- Reduce Box storage spend by tiering cold data into Glacier.
- Keep an always-available S3 copy for active teams while Glacier holds the history.
- Maintain integrity with checksum-verified jobs and an audit trail.

## Connect Box and S3 Remotes Fast

- Add Box and S3 remotes via `+ New Remote`. OAuth and key setup: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login), [s3](/howto/remote-storage-connection-settings/s3).  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- Use **Remote Explorer** to sanity-check folder depth and naming before the first sync.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />. 

- Optional: mount either remote locally for quick spot checks: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## Compare Before You Move

- Run **Compare** between Box and the target S3 prefix to see missing or newer files before committing: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Filter by extensions (e.g., PDFs, CAD, media) to scope reviews.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 


## Build a Two-Tier Pipeline (S3 Hot, Glacier Cold)

- Step 1: Create a **copy** job from Box to S3 for the active tier: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs). Start with copy for safety; switch to sync after validating results.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 

- Step 2: Apply S3 lifecycle policies on the bucket to transition objects to Glacier classes after N days. Keep the RcloneView job targeting the hot prefix (e.g., `s3:box-archive/hot/`).
- Step 3: For deep archives, schedule a secondary job to push rarely used folders directly to a Glacier-focused prefix (e.g., `s3:box-archive/cold/`).  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 


RcloneView gives you a visual, repeatable way to exit Box, cut storage costs, and keep compliant archives in AWS. Compare first, copy safely, schedule the rest -- and sleep easy.


<CloudSupportGrid />
