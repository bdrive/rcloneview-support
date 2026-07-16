---
slug: serve-remote-http-webdav-rcloneview
title: "Serve Remote via HTTP and WebDAV — Share Cloud Files with RcloneView"
authors:
  - tayson
description: "Use RcloneView to serve cloud storage remotes over HTTP and WebDAV, enabling file sharing and access from browsers, file managers, and other devices."
keywords:
  - rcloneview serve
  - serve http rclone
  - webdav cloud storage
  - serve remote files
  - rcloneview webdav
  - cloud file sharing
  - http file server
  - rclone serve webdav
  - share cloud files locally
  - webdav server rcloneview
tags:
  - RcloneView
  - feature
  - webdav
  - guide
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Serve Remote via HTTP and WebDAV — Share Cloud Files with RcloneView

> Turn any cloud storage remote into a local HTTP or WebDAV server and access your files from browsers, file managers, and media players.

Rclone's serve functionality lets you expose a cloud storage remote as a local network service. RcloneView makes this feature accessible through its GUI, allowing you to spin up an HTTP or WebDAV server for any configured remote with a few clicks. This opens up powerful workflows: browse S3 buckets in a web browser, mount Google Drive on devices that lack native support, or stream media files from Wasabi directly to a video player.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Serving Cloud Storage Over HTTP

RcloneView's HTTP serve mode starts a lightweight web server that presents your cloud storage files through a browser-friendly directory listing. Point it at any remote — Google Drive, Dropbox, an S3 bucket, or even an encrypted crypt remote — and it generates a navigable HTML interface at a local address like `http://localhost:8080`.

This is particularly useful for sharing files with colleagues on the same network without granting them direct access to your cloud storage credentials. Start the HTTP server, share the local URL, and they can browse and download files through their web browser. The server runs only while RcloneView is open, and you control which remote or subdirectory is exposed.

For teams working in air-gapped or restricted network environments, HTTP serve provides a way to access cloud-stored reference materials, documentation, or datasets without installing cloud provider clients on every workstation. A single machine running RcloneView serves as the access point.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a cloud remote to serve via HTTP in RcloneView" class="img-large img-center" />

## Serving Cloud Storage Over WebDAV

WebDAV (Web Distributed Authoring and Versioning) extends HTTP with file management capabilities — reading, writing, renaming, and deleting files over the network. When you serve a remote via WebDAV in RcloneView, the cloud storage becomes accessible as a network drive on any device that supports WebDAV, including Windows, macOS, Linux, iOS, and Android.

On Windows, you can map a WebDAV share as a network drive through File Explorer. On macOS, use Finder's "Connect to Server" dialog. On Linux, file managers like Nautilus and Dolphin support WebDAV natively. This means your Google Drive, OneDrive, or S3 storage appears as a regular folder on devices that might not have dedicated cloud client apps.

WebDAV serve also enables integration with applications that support WebDAV as a storage backend. Document editors, media players, and backup tools can read from and write to your cloud storage through the WebDAV endpoint without any cloud-specific configuration.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Serving a cloud remote as WebDAV for network access via RcloneView" class="img-large img-center" />

## Authentication and Security

By default, serve HTTP and WebDAV run without authentication, making them suitable only for trusted networks. For any scenario involving sensitive data or network exposure, RcloneView supports configuring HTTP basic authentication with a username and password. This ensures that only authorized users can access the served files.

For additional security, bind the server to `127.0.0.1` (localhost only) to prevent access from other machines on the network. If you need remote access, combine the serve endpoint with an SSH tunnel or VPN rather than exposing it directly to the internet. RcloneView's serve configuration panel lets you set the bind address, port, and authentication credentials before starting the server.

When serving an encrypted crypt remote, files are decrypted on-the-fly as they are accessed. This means you can store encrypted data in the cloud and serve it locally in decrypted form — useful for accessing sensitive archives without permanently decrypting them on disk.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active serve connections and file transfers in RcloneView" class="img-large img-center" />

## Practical Workflows

**Media streaming:** Serve a cloud remote containing video or audio files over HTTP, then open the file URLs in VLC or another media player. This avoids downloading entire media libraries to local storage.

**Cross-device file access:** Run RcloneView on a home server or always-on workstation and serve your cloud storage over WebDAV. Connect from tablets, phones, or other computers on the same network.

**Development and testing:** Serve an S3 bucket locally during development to test applications that consume files from a web URL, without deploying to a staging environment.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing served cloud storage files through RcloneView interface" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configure the cloud storage remote you want to serve (S3, Google Drive, Dropbox, etc.).
3. Open the serve panel, select HTTP or WebDAV mode, set the port and optional authentication.
4. Start the server and access your cloud files from a browser or file manager at the local address.

RcloneView's serve feature turns cloud storage into an instantly accessible local resource for any device on your network.

---

**Related Guides:**

- [Bisync Bidirectional Sync — Two-Way Cloud Synchronization in RcloneView](https://rcloneview.com/support/blog/bisync-bidirectional-sync-rcloneview)
- [Connect WebDAV Server for Cloud Sync with RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Mount SFTP and SMB as Local Drive with RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
