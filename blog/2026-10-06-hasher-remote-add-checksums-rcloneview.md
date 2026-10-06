---
slug: hasher-remote-add-checksums-rcloneview
title: "Hasher Remote — Add Checksums to Storage That Lacks Them in RcloneView"
authors:
  - steve
description: "Use the Hasher virtual remote in RcloneView to add hash-based integrity checks to remotes that do not provide checksums themselves."
keywords:
  - rclone hasher remote
  - add checksums to cloud storage
  - cloud file integrity check
  - verify file hashes cloud
  - hasher virtual remote
  - RcloneView virtual remotes
  - checksum sync
  - rclone GUI
tags:
  - RcloneView
  - feature
  - rclone
  - cloud-storage
  - sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Hasher Remote — Add Checksums to Storage That Lacks Them in RcloneView

> The Hasher virtual remote adds hashing on top of an existing remote, so integrity checks still work where the storage has no checksums.

Some storage backends cannot supply file hashes, which weakens comparisons and verification after a transfer. RcloneView supports rclone's Hasher virtual remote, a wrapper that layers hashing over a remote you already have. This guide covers when it helps and how to use it.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What the Hasher Remote Does

Virtual remotes wrap an existing remote to add behavior. Alias shortens paths, Crypt encrypts, and Hasher adds hashing for integrity checks. If a backend does not expose checksums, comparisons fall back to size and modification time, which can miss content that changed without altering either.

By wrapping that backend in a Hasher remote, you give it a hash capability so checksum-based comparison has something to work with. It is a good fit for archives and backups where correctness matters more than speed.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new virtual remote in RcloneView" class="img-large img-center" />

## Create a Hasher Remote

Open the Remote tab and choose New Remote, then select the Hasher type. Point it at the underlying remote and folder that you want to wrap, and give it a name you will recognize, such as `archive-hashed`. Once saved, it appears in the explorer like any other remote.

Use the wrapped remote wherever you would use the original: browsing, copying, or as a sync source or destination. Keep in mind that hashes are tied to the wrapper, so consistently use the Hasher remote for the data you want verified.

## Use It with Sync and Compare

In a sync job's Advanced Settings, turn on **Enable checksum** so files are compared by hash plus size. Combined with a Hasher remote, this gives more trustworthy results than size and time alone.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view showing differences between two folders" class="img-large img-center" />

Run a Dry Run first to preview what will be copied or deleted, then execute. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so the same verification approach works across your clouds.

## Review Results in Job History

After a run, open Job History to confirm status, files transferred, and total size. If a job reports errors, the Log tab shows details.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed sync runs" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add the remote that lacks checksums, if you have not already.
3. Create a Hasher remote that wraps it from Remote > New Remote.
4. Build a sync job with **Enable checksum** on, and run a Dry Run first.

Stronger verification means you find silent differences before they matter.

---

**Related Guides:**

- [Virtual Remotes — Combine, Union, and Alias with RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Fix Cloud Sync Checksum Mismatch with RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Fix Cloud Backup Verification Failures with RcloneView](https://rcloneview.com/support/blog/fix-cloud-backup-verification-failures-rcloneview)

<CloudSupportGrid />
