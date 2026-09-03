---
slug: cache-remote-accelerate-slow-storage-rcloneview
title: "Cache Remote — Accelerate Slow Cloud Storage in RcloneView"
authors:
  - robin
description: "Learn how RcloneView's cache virtual remote speeds up slow cloud backends by caching directory listings and file data, including Plex integration."
keywords:
  - rclone cache remote
  - rcloneview cache remote setup
  - accelerate slow cloud storage
  - rclone cache plex integration
  - speed up cloud file browsing
  - cache virtual remote rclone
  - rcloneview virtual remotes
  - slow cloud storage fix
  - plex media server cloud cache
  - rclone directory cache
tags:
  - RcloneView
  - feature
  - performance
  - plex
  - mount
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Cache Remote — Accelerate Slow Cloud Storage in RcloneView

> Some cloud backends are slow to list and re-list every time you browse them — the cache virtual remote fixes that by remembering what it already fetched.

Not every storage provider responds quickly. Backends with strict API rate limits or high per-request latency can make browsing feel sluggish, especially in large folder trees or when a media server like Plex repeatedly scans the same library. RcloneView exposes rclone's cache virtual remote directly in the New Remote wizard, letting you wrap a slow remote in a caching layer without touching a config file by hand.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What the Cache Remote Does

The cache remote is a wrapper, not a standalone storage type — it sits between RcloneView and an existing remote you've already configured, intercepting directory listings and file reads so repeated requests don't hit the backend again. The first time you browse a folder, RcloneView fetches it from the wrapped remote as usual; the next time, the cache serves the result locally, which is especially noticeable on remotes with slow API response times or aggressive rate limiting.

This differs from a mount's built-in VFS cache mode, which caches data for a single mounted drive session. The cache virtual remote instead creates a persistent, named remote of its own that you can browse, mount, or sync against directly, and its cached state survives app restarts. The common real-world use case is pairing a cache remote with Plex media server integration, where constant library scanning would otherwise generate a steady stream of redundant API calls against the underlying cloud storage.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a cache virtual remote wrapping an existing cloud storage remote in RcloneView" class="img-large img-center" />

## Setting Up a Cache Remote in RcloneView

Open Remote tab > New Remote and select Cache from the virtual remote options. You'll be asked to choose the underlying remote to wrap — this must already be configured in RcloneView, whether it's a cloud provider, an S3-compatible bucket, or a protocol-based connection like SFTP or WebDAV. Give the cache remote a distinct name so it's clear in Tab Bar and Remote Manager that you're browsing the cached version rather than the raw connection.

Once created, the cache remote appears in Remote Manager alongside your other remotes and behaves like any other entry for browsing, mounting, or syncing. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, so a cache remote built on a slow backend gets the same feature set as a native connection — Dry Run a sync against it, add it to Job Manager, or mount it as a local drive.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cache remote from the Remote Explorer panel toolbar" class="img-large img-center" />

## When Caching Actually Helps

Caching pays off most on remotes where listing operations are expensive relative to the amount of data changing — large photo or video libraries scanned repeatedly by Plex, deep folder trees, or providers with conservative rate limits that throttle rapid successive requests. It's less useful for remotes you write to often, since changed files need to propagate through the cache before other tools see them consistently.

If you're mounting a cache remote for media streaming, pair it with the mount's own VFS cache mode set to writes or full — the two caching layers work at different levels and complement each other.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager showing a sync job running against a cache remote" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configure the slow remote you want to accelerate, if it isn't already set up.
3. Open New Remote, select Cache, and choose that remote as the one to wrap.
4. Mount or browse the new cache remote and compare listing speed on a second visit to the same folder.

A cache remote won't make your internet connection faster, but for browsing patterns that repeat — media library scans especially — it turns a slow backend into one that feels instant after the first pass.

---

**Related Guides:**

- [Virtual Remotes in RcloneView — Combine, Union, and Alias Explained](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Plex Cloud Streaming with RcloneView](https://rcloneview.com/support/blog/plex-cloud-mount-rcloneview)
- [Plex Buffering Fix — VFS Cache Tuning in RcloneView](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)

<CloudSupportGrid />
