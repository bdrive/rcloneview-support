---
slug: fix-public-link-not-supported-errors-rcloneview
title: "Fix Public Link Not Supported Errors — Share Files Correctly with RcloneView"
authors:
  - tayson
description: "Fix Get Public Link errors in RcloneView, learn which remotes support shareable links, and use safe workarounds for the rest."
keywords:
  - RcloneView
  - get public link error
  - public link not supported
  - share cloud files
  - rclone public link
  - cloud storage sharing
  - shareable link fix
  - cloud file sharing troubleshooting
  - remote manager
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - file-management
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Public Link Not Supported Errors — Share Files Correctly with RcloneView

> Right-click Get Public Link and nothing happens — here's why, and what to do instead.

RcloneView's Explorer panel offers a **Get Public Link** command in the right-click menu, but it only works on remotes whose backend exposes a native sharing API. Try it on a plain protocol connection or an unsupported provider and the request fails or returns an error instead of a URL. RcloneView's Remote Manager and dual-pane Explorer make it easy to see which remote you're on and move the file somewhere link-friendly instead.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Get Public Link Fails on Some Remotes

Public link generation depends on what the underlying storage backend supports. Providers with a native sharing API — Google Drive, Dropbox, Microsoft OneDrive, Box, and pCloud among them — return a shareable URL because rclone calls that provider's own link endpoint. Protocol-based connections like SFTP, FTP, WebDAV, and SMB/CIFS have no such concept; they're direct file transport protocols, not sharing platforms, so there's nothing for the command to call. S3-compatible endpoints (Amazon S3, Wasabi, Backblaze B2, Cloudflare R2) handle public access through bucket policies or pre-signed URLs set up on the provider's own console instead.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote screen showing different provider types" class="img-large img-center" />

Before assuming a bug, check which category your remote falls into. Open Remote Manager from the Remote tab and confirm the remote type — a quick glance often explains the failure immediately.

## Confirm the Remote and Permission Settings

If the remote is one of the OAuth-based providers that should support linking, the next step is verifying the account has permission to share the specific file or folder. Business and enterprise variants of these remotes sometimes restrict external sharing at the organization level, which surfaces in RcloneView as the same failed request. Re-authenticate the remote through Remote Manager if the token looks stale, and retry on a file you know is shareable from the provider's own web interface first.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder compare view for verifying file locations before sharing" class="img-large img-center" />

Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license — so you can quickly copy a file from a non-linkable remote into a sharing-capable one instead of troubleshooting further.

## Safe Workarounds When a Remote Has No Link Support

For SFTP, FTP, WebDAV, SMB, and most S3-compatible buckets, the practical fix is to copy the file to a remote that does support native links, or hand off distribution through the provider's own console (bucket policy, pre-signed URL, or NAS-side share). Use RcloneView's drag-and-drop between two open Explorer panels to move a copy across, then run Get Public Link on the destination remote.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling for repeatable copy-and-share workflows" class="img-large img-center" />

If this is a recurring need, save the copy step as a Job in Job Manager so the same files land in your linkable remote automatically after every sync.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open Remote Manager to confirm which backend type the failing remote actually uses.
3. Re-authenticate OAuth remotes whose tokens may have expired, then retry the link on a known-shareable file.
4. For protocol or S3-compatible remotes, copy the file into a linkable remote using drag-and-drop, then generate the link there.

Knowing which remotes can share links before you need one saves a support ticket later.

---

**Related Guides:**

- [Get Shareable Public Links for Cloud Files with RcloneView](https://rcloneview.com/support/blog/link-public-shared-links-cloud-rcloneview)
- [Manage Google Drive Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Fix Cloud Transfer Permission Denied Errors with RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)

<CloudSupportGrid />
