---
slug: sync-nextcloud-to-koofr-rcloneview
title: "Sync Nextcloud to Koofr — Cloud Backup with RcloneView"
authors:
  - robin
description: "Keep a Nextcloud instance backed up to Koofr with RcloneView — a direct cloud-to-cloud sync between two privacy-focused storage providers."
keywords:
  - sync Nextcloud to Koofr
  - Nextcloud to Koofr backup
  - RcloneView Nextcloud
  - RcloneView Koofr
  - self-hosted cloud backup
  - cloud to cloud sync
  - Nextcloud Koofr transfer
  - European cloud storage backup
tags:
  - RcloneView
  - nextcloud
  - koofr
  - cloud-to-cloud
  - sync
  - european-cloud
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync Nextcloud to Koofr — Cloud Backup with RcloneView

> Give a self-hosted Nextcloud instance an off-site backup on Koofr, running on a schedule instead of a manual export.

Nextcloud is popular precisely because it puts storage under your own control, but that control also means a single server failure, a bad update, or a disk error can take your only copy of everything with it. Koofr is a natural pairing as a secondary copy since it's another EU-based, privacy-oriented provider — the backup lands somewhere with a similar data-residency posture instead of an unrelated jurisdiction. RcloneView connects to both as ordinary remotes and runs the copy directly between them, so the backup doesn't depend on your Nextcloud server also being your upload client.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecting Nextcloud and Koofr

Add Nextcloud as a remote through Remote tab > New Remote using WebDAV — Nextcloud exposes its files over WebDAV at a URL your instance's admin panel shows under Settings, so you'll need the server address, your username, and an app password rather than your regular login password. Add Koofr separately through its own OAuth login flow. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so the same two-remote setup works whether your Nextcloud server sits on a home NAS or a rented VPS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

Once both remotes show up in the Remote Manager, open two Explorer panels side by side to confirm you can browse into the Nextcloud folder structure and see the (likely empty) Koofr destination before setting up anything automated.

## Building the Sync Job

Use the 4-step Sync wizard rather than a one-off drag and drop for this kind of backup — set Nextcloud as the source and Koofr as the destination, choose One-way sync so Koofr only ever receives copies and Nextcloud stays authoritative, and run a Dry Run first to confirm the file list looks right before anything actually transfers.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Nextcloud to Koofr in RcloneView" class="img-large img-center" />

In Step 3, exclude anything you don't want duplicated off-site — Nextcloud's own `.git`-style version folders or large synced media libraries you're already backing up elsewhere are good candidates for a filter rule, keeping the Koofr copy focused on what actually needs redundancy.

## Scheduling Recurring Backups

A one-time sync only protects you against today's failure, not next month's. On a PLUS license, Step 4 of the wizard adds crontab-style scheduling so the Nextcloud-to-Koofr sync runs nightly or weekly without you opening the app.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Koofr backup job in RcloneView" class="img-large img-center" />

Job History then gives you a running record of every scheduled run — completion status, file count, and duration — so you can confirm the backup actually executed instead of assuming a scheduled task is working silently in the background.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your Nextcloud instance as a WebDAV remote and Koofr as an OAuth remote.
3. Build a one-way Sync job from Nextcloud to Koofr, filtering out anything you don't need duplicated.
4. Schedule the job to run automatically and check Job History periodically to confirm it's completing.

A self-hosted server is only as safe as its backup, and pointing that backup at a second, independent provider closes the single-point-of-failure gap that self-hosting otherwise leaves open.

---

**Related Guides:**

- [Sync Koofr to Proton Drive — Cloud Backup with RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Fix Nextcloud Sync Errors — How to Resolve with RcloneView](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [Migrate Koofr to Jottacloud — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-jottacloud-rcloneview)

<CloudSupportGrid />
