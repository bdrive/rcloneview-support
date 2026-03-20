---
slug: remote-management-add-edit-delete-rcloneview
title: "Remote Management Guide — Add, Edit, and Organize Cloud Connections in RcloneView"
authors:
  - tayson
description: "Managing 70+ cloud providers starts with well-organized remotes. Learn how to add, configure, edit, and organize your cloud connections in RcloneView's remote manager."
keywords:
  - rcloneview remote manager
  - add cloud remote rcloneview
  - manage cloud connections
  - rclone remote setup
  - cloud connection manager
  - rcloneview configure remote
  - add cloud account rcloneview
  - rcloneview setup guide
  - cloud remote configuration
  - organize cloud accounts
tags:
  - RcloneView
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Remote Management Guide — Add, Edit, and Organize Cloud Connections in RcloneView

> Your first remote takes 2 minutes to set up. Your 15th needs a system. Here's how to manage all your cloud connections efficiently as your multi-cloud setup grows.

Every cloud provider in RcloneView starts as a "remote" — a named connection with credentials and configuration. When you have two or three remotes, management is simple. But as you add more providers (and many users end up with 10+), keeping them organized becomes essential. This guide covers everything from adding your first remote to managing a complex multi-cloud setup.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Adding a New Remote

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote" class="img-large img-center" />

The remote manager walks you through adding any of 70+ providers. Each provider type has different configuration fields — Google Drive uses OAuth, S3 uses access keys, WebDAV uses URL and credentials.

### Common provider types

| Connection Type | Examples | Auth Method |
|----------------|---------|-------------|
| OAuth | Google Drive, OneDrive, Dropbox | Browser login |
| Access Keys | S3, B2, Wasabi, R2 | Key + Secret |
| Username/Password | WebDAV, FTP, SFTP | Credentials |
| Token | Box, Mega | API token |

## Naming Conventions

Good naming saves confusion later. Consider these patterns:

- **By provider**: `gdrive-personal`, `gdrive-work`, `s3-backup`
- **By purpose**: `backup-primary`, `backup-secondary`, `archive`
- **By team**: `marketing-drive`, `engineering-s3`, `finance-onedrive`

## Editing Remote Configuration

Need to update credentials, change endpoints, or modify settings? Edit any remote through the remote manager without recreating it.

Common reasons to edit:

- **Expired OAuth tokens** — re-authorize without losing job configurations
- **Changed access keys** — update S3 credentials after rotation
- **Different endpoint** — switch S3 regions or custom endpoints

## Advanced Configuration

### Crypt remotes

Create encrypted wrappers around existing remotes. A crypt remote encrypts file names and contents before they reach the cloud:

### Union/Combine remotes

Merge multiple remotes into a single virtual view. Useful for combining free storage tiers across providers.

## Organizing Your Remotes

As your remote count grows:

- **Use consistent naming** so remotes sort logically
- **Document your setup** — which remote backs up to which
- **Clean up unused remotes** — remove old trial accounts
- **Test connections periodically** — expired tokens cause silent failures

## Using Remotes in the Explorer

Once configured, remotes appear in the two-pane explorer. Select any remote as the source or destination pane:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse remotes in explorer" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add your first remote** — follow the guided setup.
3. **Name it clearly** for future reference.
4. **Add more remotes** as needed.
5. **Keep them organized** with consistent naming.

Good remote management is the foundation of good cloud management.

---

**Related Guides:**

- [Connection Manager Guide](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Encrypt Cloud Backups](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Virtual Remotes: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
