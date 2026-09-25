---
slug: get-public-link-share-files-rcloneview
title: "Get Public Link — Share Cloud Files Instantly with RcloneView"
authors:
  - kai
description: "Learn how to generate shareable public links for cloud files directly from RcloneView's file explorer, no browser tab required."
keywords:
  - get public link
  - share cloud files
  - shareable link cloud storage
  - RcloneView public link
  - google drive share link
  - dropbox share link
  - box share link
  - cloud file sharing
  - rclone public link
  - onedrive share link
tags:
  - RcloneView
  - feature
  - file-management
  - cloud-storage
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Get Public Link — Share Cloud Files Instantly with RcloneView

> Skip the browser: right-click any file in RcloneView and generate a shareable public link in seconds.

Sharing a single file from the cloud usually means opening a browser tab, logging into the provider's web console, hunting for the share button, and copying a link that may or may not have the permissions you expect. RcloneView collapses that entire workflow into one right-click menu item. If you manage files across several providers from the same explorer, that consistency matters more than it sounds — you stop context-switching between five different web UIs just to send someone a file.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## How Get Public Link Works

The **Get Public Link** command sits in the same right-click context menu as Copy, Cut, Rename, and Download. Select one or more files in any connected remote's file list, right-click, and choose Get Public Link. RcloneView passes the request through to the underlying rclone backend, which asks the provider's API to generate a link with the permissions that backend supports — read-only, expiring, or password-gated, depending on what the provider allows.

Because this is provider-specific behavior, the exact link format and options vary. A Dropbox link behaves differently from a Box link, and not every remote type supports public links at all — protocol-based remotes like plain SFTP or FTP servers generally don't have a "share" concept the way consumer cloud drives do. RcloneView surfaces whatever the backend actually supports rather than faking a universal button that silently fails on unsupported remotes.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote explorer with right-click context menu open" class="img-large img-center" />

## Where This Fits Into a Daily Workflow

Teams that juggle client deliverables, marketing assets, or one-off document requests benefit the most from having link generation live inside the same window where the files already sit. Instead of remembering which provider a file lives on and opening that provider's site separately, you browse to it in RcloneView's Explorer panel and generate the link on the spot. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license — so the same window that shares a link today can also keep that folder backed up on a schedule tomorrow.

This is especially useful when a single project's assets are scattered across providers — say, RAW photo exports on Backblaze B2 and client-facing proofs on Dropbox. You don't need two workflows; you need one explorer with two tabs open.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud file transfer panel in RcloneView" class="img-large img-center" />

## Combining Public Links With Folder Organization

Before sharing, it's worth using RcloneView's file list view to confirm exactly what you're exposing. Switch to List View to check file sizes and modified dates, or Thumbnail View if you're sharing images and want a quick visual check that you selected the right file. Get Public Link works on multi-selected files too, so you can generate several links in one pass rather than repeating the right-click each time.

If the link needs to stay live for a scheduled recurring share — for example, a weekly report a client always pulls from the same URL — pair it with a Sync job that keeps the underlying file updated at that same path, so the link itself never has to be regenerated.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled file updates" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connect the remote holding the file you want to share via New Remote.
3. Browse to the file in the Explorer panel, right-click, and select Get Public Link.
4. Copy the generated link and send it — no separate browser login required.

Once this becomes part of your routine, sharing a cloud file takes the same three clicks regardless of which of the 90+ supported providers it happens to live on.

---

**Related Guides:**

- [Fix Public Link Not Supported Errors — Share Files Correctly with RcloneView](https://rcloneview.com/support/blog/fix-public-link-not-supported-errors-rcloneview)
- [Get Size — Instantly Calculate Cloud Storage Usage in RcloneView](https://rcloneview.com/support/blog/get-size-calculate-cloud-storage-usage-rcloneview)
- [Thumbnail View — Browse and Preview Cloud Images Visually in RcloneView](https://rcloneview.com/support/blog/thumbnail-view-image-preview-cloud-rcloneview)

<CloudSupportGrid />
