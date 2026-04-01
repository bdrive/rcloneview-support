---
slug: serve-webdav-http-from-cloud-rcloneview
title: "Serve Cloud Storage as WebDAV or HTTP with RcloneView"
authors:
  - tayson
description: "Use rclone's serve command via RcloneView to expose cloud storage as a local WebDAV or HTTP server. Access files in apps that support WebDAV without mounting a drive."
keywords:
  - rclone serve webdav
  - expose cloud storage webdav
  - rcloneview serve http
  - cloud storage webdav server
  - rclone webdav local server
  - access cloud via webdav
  - serve google drive webdav
  - rclone serve command guide
  - webdav from cloud storage
  - rcloneview serve feature
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - feature
  - guide
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Serve Cloud Storage as WebDAV or HTTP with RcloneView

> RcloneView can expose any cloud storage provider as a local WebDAV or HTTP server. Any app that supports WebDAV — file managers, DAM tools, creative apps, mobile clients — can then read and write cloud files directly.

Mounting a cloud drive with rclone's VFS layer is the most common way to expose cloud storage locally. But some scenarios call for a different approach: a WebDAV server that applications can connect to over the network, a plain HTTP server for serving files to a browser, or a lightweight way to access cloud storage from a device that can't mount FUSE drives. Rclone's `serve` command handles all of these — and RcloneView gives you access to it through the terminal and job interface.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Rclone Can Serve

Rclone supports multiple server protocols via the `rclone serve` command:

| Protocol | Use Case |
|----------|----------|
| `webdav` | File managers, DAM tools, apps with WebDAV support |
| `http` | Read-only browser access to cloud files |
| `ftp` | Legacy app compatibility |
| `sftp` | Secure shell-based file access |
| `s3` | Expose any cloud as S3-compatible (use with S3 clients) |
| `dlna` | Media streaming to DLNA-compatible devices |

This guide focuses on WebDAV and HTTP, the most widely useful for desktop workflows.

## Use Case 1: WebDAV for App Integration

Many professional apps support WebDAV natively: Cyberduck, Finder (macOS), Adobe Bridge, DAM tools, project management tools, and more. Exposing your cloud storage as WebDAV makes it accessible to these apps without a drive mount.

### Start a WebDAV server from RcloneView

Open the **Terminal** panel in RcloneView and run:

```bash
rclone serve webdav gdrive:/Documents/ --addr 127.0.0.1:8888 --user myuser --pass mypassword
```

This starts a WebDAV server at `http://127.0.0.1:8888` exposing your Google Drive `/Documents/` folder.

<img src="/support/images/en/blog/new-remote.png" alt="Open RcloneView terminal to start serve command" class="img-large img-center" />

### Connect from an app

In any WebDAV-capable app, add a WebDAV connection:
- **URL**: `http://127.0.0.1:8888`
- **Username**: `myuser`
- **Password**: `mypassword`

The app will see your Google Drive Documents folder as a WebDAV share — browseable, readable, and writable.

## Use Case 2: HTTP for Read-Only Browser Access

For sharing files with colleagues without granting them cloud account access, serve a folder as HTTP:

```bash
rclone serve http s3-remote:my-bucket/reports/ --addr 0.0.0.0:8080
```

Anyone on the network can open `http://your-machine-ip:8080` in a browser and see a directory listing with download links — no cloud account required.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse served cloud files in browser" class="img-large img-center" />

## Use Case 3: Serve S3 for S3-Client Compatibility

A powerful technique: expose a non-S3 cloud (like Google Drive or Backblaze B2's native API) as an S3-compatible endpoint, so any S3 client can access it:

```bash
rclone serve s3 gdrive:/Backups/ --addr 127.0.0.1:9000 --auth-key ACCESSKEY,SECRETKEY
```

S3 clients (AWS CLI, s3cmd, any S3 SDK) can then connect to `http://127.0.0.1:9000` and interact with Google Drive as if it were S3.

## Creating a Persistent Serve Job

To run a serve command on startup or on a schedule:

1. In RcloneView, create a new **Job** with **Custom Command** mode.
2. Enter your `rclone serve webdav` command with the desired flags.
3. Set it to start automatically when RcloneView launches, or schedule it as needed.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule serve job to run on startup" class="img-large img-center" />

## Security Considerations

| Scenario | Recommendation |
|----------|---------------|
| Local use only | Bind to `127.0.0.1` — not accessible outside your machine |
| LAN sharing | Bind to your machine's local IP, add `--user` and `--pass` |
| Internet-facing | Use HTTPS (add `--cert` and `--key` flags) or put behind a reverse proxy |
| Public HTTP server | Use `rclone serve http` with read-only VFS: add `--read-only` |

Always set username/password for any server accessible beyond `127.0.0.1`:

```bash
rclone serve webdav remote:path --addr 0.0.0.0:8888 --user admin --pass strongpassword --read-only
```

## Useful Serve Flags

| Flag | Purpose |
|------|---------|
| `--addr host:port` | Bind address and port |
| `--user` / `--pass` | HTTP Basic Auth |
| `--read-only` | Prevent writes |
| `--vfs-cache-mode full` | Cache files locally for better performance |
| `--no-modtime` | Disable modtime reporting (useful for some apps) |
| `--htpasswd /path/file` | Use htpasswd file for multiple users |

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Open the Terminal** in RcloneView.
3. **Run `rclone serve webdav remote:path --addr 127.0.0.1:8888`** to start a WebDAV server.
4. **Connect from your app** using the WebDAV URL and credentials.

WebDAV unlocks cloud storage access for dozens of apps that wouldn't otherwise be able to read your cloud files. No mount required.

---

**Related Guides:**

- [Mount Cloud Storage as a Local Drive](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Mount SFTP and SMB as Local Drives](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [RcloneView Terminal: CLI Inside the GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)

<CloudSupportGrid />
