---
slug: alias-remote-shortcut-paths-rcloneview
title: "Alias Remote — Create Shortcuts to Deep Cloud Folders with RcloneView"
authors:
  - tayson
description: "Learn how to use rclone's alias remote feature to create shortcuts to nested cloud folders and boost productivity with RcloneView."
keywords:
  - alias remote
  - rclone alias
  - folder shortcuts
  - cloud folder shortcuts
  - nested folder access
  - rclone remote configuration
  - productivity shortcuts
  - folder shortcuts rclone
  - quick folder access
  - cloud organization
tags:
  - RcloneView
  - feature
  - guide
  - cloud-storage
  - productivity
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Alias Remote — Create Shortcuts to Deep Cloud Folders with RcloneView

> Tired of navigating through countless folders to reach your most-used cloud directories? Create shortcuts with alias remotes and access them instantly.

Cloud storage hierarchies can grow unwieldy. Finding that deeply nested project folder or shared team directory requires multiple clicks. Rclone's alias remote feature solves this by creating shortcuts—aliases—that point directly to specific folders.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Is an Alias Remote?

An alias remote is a virtual remote that points to a subfolder within another remote. Instead of navigating `/MyDrive/Projects/Client A/2026/Active Cases/Smith vs. Jones`, you create an alias called `smith-vs-jones` that points directly there.

![File comparison and selection](/images/en/howto/rcloneview-basic/compare-display-select.png)

In RcloneView, you then see `smith-vs-jones` as a separate remote in your remote list, letting you access that folder in one click. This virtual remote behaves exactly like a real remote, so you can copy, move, and sync files using the alias as your starting point.

## Create an Alias Remote

Configure alias remotes in your rclone config file by specifying the base remote and subfolder path. RcloneView displays all configured alias remotes alongside your standard cloud accounts.

![Job scheduling interface](/images/en/howto/rcloneview-advanced/create-job-schedule.png)

For example, create an alias pointing to `/GoogleDrive/Archive/2025` called `archive-2025`, then access it directly from RcloneView's remote selector. The alias acts as a convenient shortcut without duplicating data or requiring special storage.

## Boost Productivity

Common use cases include:

- Project-specific folders for quick access during active work
- Client directories for legal or business firms requiring frequent access
- Shared team folders that multiple projects reference regularly
- Archive or backup folders accessed less frequently but needing easy retrieval
- Temporary working directories for specific workflows or campaigns

Each alias reduces navigation steps and keeps your workflow focused on what matters most. Teams can share alias configurations to ensure everyone accesses the same project structures efficiently.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configure alias remotes in your rclone config (point them to frequently used subdirectories).
3. Launch RcloneView and see your new aliases appear as separate remotes.
4. Click any alias to instantly navigate to that folder.

Streamline your cloud navigation and reclaim hours of productivity.

---

**Related Guides:**

- [Virtual Remotes — Combine and Union Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Remote Management — Add, Edit, Delete](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)
- [Union Remote — Combine Free Storage](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)

<CloudSupportGrid />
