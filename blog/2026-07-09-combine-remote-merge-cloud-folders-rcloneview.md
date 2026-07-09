---
slug: combine-remote-merge-cloud-folders-rcloneview
title: "Combine Remote — Merge Multiple Cloud Folders into One Tree in RcloneView"
authors:
  - alex
description: "Use RcloneView's Combine remote to merge folders from different cloud providers into a single virtual folder tree."
keywords:
  - combine remote rclone
  - merge cloud folders
  - virtual remote RcloneView
  - unify multiple cloud storage
  - rclone combine backend
  - multi-cloud folder structure
  - virtual file tree cloud
  - RcloneView virtual remotes
  - organize cloud storage folders
  - cross-provider folder merge
tags:
  - RcloneView
  - feature
  - multi-cloud
  - cloud-storage
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Combine Remote — Merge Multiple Cloud Folders into One Tree in RcloneView

> Stop bouncing between five remote tabs — RcloneView's Combine remote stitches folders from different cloud providers into one virtual folder tree.

Picture a video production studio that stores raw footage on Google Drive, project files on Dropbox, and finished renders on Backblaze B2. Each remote works fine on its own, but "where's the master edit for Project X" means checking three tabs every time. RcloneView's Combine remote — one of rclone's virtual remote wrappers — solves this by presenting several upstream folders as named subdirectories inside a single virtual remote, so the whole production lives under one root without physically moving any files.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What the Combine Remote Actually Does

Combine is distinct from Union, which merges multiple sources into one unified view where files appear to share a single directory. Combine instead assigns each upstream remote (or a specific subfolder within one) to a named subdirectory in the resulting virtual tree — so `footage:` and `renders:` show up as `production/footage` and `production/renders` under one remote, fully separated but browsable together. Nothing is copied or duplicated; RcloneView routes reads and writes straight through to the original remote in real time.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Combine virtual remote in RcloneView" class="img-large img-center" />

## Setting Up a Combine Remote in RcloneView

From the Remote tab, open Remote Manager and create a new remote of type Combine. Map each upstream remote (or remote:path) to the subdirectory name you want it to appear under in the combined tree, then save. The result shows up in the Explorer panel like any other remote — expand it, and each mapped source appears as its own top-level folder, ready for the same copy, move, and drag-and-drop operations you'd use on a native remote. RcloneView mounts and syncs 90+ providers from one window, on Windows, macOS, and Linux, so a Combine remote built from Google Drive, Dropbox, and B2 folders behaves identically regardless of which OS you're running.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing a Combine remote's merged folder structure" class="img-large img-center" />

## Practical Use Cases

Beyond media production, Combine remotes suit anyone who accumulated cloud accounts organically — a photography studio with RAW files split across an old Dropbox plan and a newer S3 bucket, or a small team whose contracts live on SharePoint while invoices sit in Google Drive. Wrapping both under one Combine remote means a single Folder Compare or Sync job can target the whole logical structure instead of running separate jobs per provider, and Job History shows one consolidated trail instead of several disconnected logs.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job against a Combine remote" class="img-large img-center" />

## Combine vs Other Virtual Remotes

It's easy to reach for the wrong wrapper. Alias just gives a deeply nested path a short name — no merging involved. Union blends multiple sources into what looks like one shared folder, useful for pooling free storage tiers. Crypt encrypts file and folder names on top of an existing remote. Combine is the one to reach for specifically when you want distinct sources kept separate but navigable from a single root.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Combine remote from Mount Manager" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html) if you haven't already.
2. Add the individual remotes you want to combine (Remote tab > New Remote) if they aren't configured yet.
3. Create a new Combine remote in Remote Manager and map each upstream source to a subdirectory name.
4. Browse the combined tree in the Explorer panel and run your first Compare or Sync job against it.

Once your scattered cloud accounts sit under one Combine remote, folder structure stops being a tax you pay every time you need to find a file.

---

**Related Guides:**

- [Union Remote — Combine Free Storage Across Providers in RcloneView](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)
- [Virtual Remotes — Combine, Union, and Alias Explained](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias Remote — Shortcut Paths in RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
