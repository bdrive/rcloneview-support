---
slug: union-remote-combine-free-storage-rcloneview
title: "Union Remote — Combine Multiple Free Cloud Accounts into One Giant Storage Pool with RcloneView"
authors:
  - tayson
description: "Google Drive gives 15 GB free. OneDrive gives 5 GB. Dropbox gives 2 GB. Combine them all into one virtual 22 GB storage pool using rclone's union remote in RcloneView."
keywords:
  - combine free cloud storage
  - union remote rclone
  - merge cloud accounts
  - combine cloud storage
  - rclone union drive
  - free cloud storage pool
  - multi cloud storage pool
  - combine google drive onedrive
  - virtual cloud storage
  - aggregate cloud storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - multi-cloud
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Union Remote — Combine Multiple Free Cloud Accounts into One Giant Storage Pool with RcloneView

> 15 GB from Google. 5 GB from OneDrive. 2 GB from Dropbox. 1 TB from Terabox. Individually they're small. Combined into a union remote, they're a free multi-terabyte storage pool.

Most cloud providers offer free storage tiers, but individually they're too small for serious use. Rclone's union remote merges multiple storage locations into a single virtual filesystem. RcloneView lets you set this up visually and then browse, sync, and manage the combined pool as if it were one giant drive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## How Union Remote Works

A union remote combines multiple remotes into one virtual view:

- **Reading**: files from all underlying remotes appear in a single directory listing
- **Writing**: new files are written to the remote with the most free space (or based on your configured policy)
- **Transparent**: you interact with one remote; rclone manages the distribution

## Free Storage You Can Combine

| Provider | Free Tier |
|----------|----------|
| Google Drive | 15 GB |
| OneDrive | 5 GB |
| Dropbox | 2 GB |
| pCloud | 10 GB |
| Terabox | 1 TB |
| MEGA | 20 GB |
| Icedrive | 10 GB |
| Koofr | 10 GB |

Combined: potentially over 1 TB of free storage.

## Set Up a Union Remote

<img src="/support/images/en/blog/new-remote.png" alt="Create union remote" class="img-large img-center" />

1. Add each free cloud account as a separate remote
2. Create a union remote combining them all
3. Browse the union as a single storage pool

## Use Cases

### Maximize free storage

Students, freelancers, and budget-conscious users can combine free tiers for significant free storage.

### Distribute backup across providers

Spread backup data across multiple free accounts for redundancy. If one provider has issues, the others still have data.

### Create a tiered storage pool

Combine fast storage (Google Drive) with large storage (Terabox) in one pool.

## Browse the Combined Pool

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse union remote" class="img-large img-center" />

The two-pane explorer shows the union remote like any other remote. Files from all underlying providers appear together.

## Important Notes

- **Files are not moved** between underlying remotes — each file stays on the provider where it was written
- **Deleting** removes the file from whichever provider stores it
- **Performance** depends on the slowest underlying provider when listing
- **Write policy** determines which provider receives new files

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add free cloud accounts** as individual remotes.
3. **Create a union remote** combining them.
4. **Browse and use** as a single storage pool.

Small free tiers, combined into something useful.

---

**Related Guides:**

- [Virtual Remotes: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Manage Cloud Sprawl](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [Remote Management Guide](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)

<CloudSupportGrid />
