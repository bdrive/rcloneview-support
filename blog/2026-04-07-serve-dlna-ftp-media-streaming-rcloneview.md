---
slug: serve-dlna-ftp-media-streaming-rcloneview
title: "Stream Cloud Media via DLNA and FTP Server with RcloneView"
authors: [tayson]
description: "Set up DLNA media streaming and FTP server access to your cloud storage using rclone serve and RcloneView for seamless media playback on any device."
keywords:
  - rclone dlna server
  - cloud storage media streaming
  - rclone ftp server
  - stream google drive dlna
  - cloud media server
  - rclone serve dlna
  - rcloneview media streaming
  - ftp cloud storage
  - smart tv cloud streaming
  - rclone media player
tags: [RcloneView, feature, media, guide, tips, cloud-storage, automation, mount]
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Stream Cloud Media via DLNA and FTP Server with RcloneView

> Turn your cloud storage into a personal media server by streaming content directly to smart TVs, media players, and FTP clients through rclone serve.

Your cloud storage holds terabytes of photos, videos, and music, but accessing that content on your living room TV or through traditional file transfer tools can be frustratingly indirect. Rclone's `serve` command solves this by exposing any cloud remote as a DLNA media server, FTP server, HTTP server, or WebDAV endpoint. Combined with RcloneView's intuitive interface for managing remotes and monitoring connections, you can set up a fully functional cloud-backed media server in minutes. This guide covers DLNA streaming to smart TVs and media players, FTP server configuration for legacy client access, performance tuning for smooth playback, and access control for multi-user environments.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## How Rclone Serve Works

Rclone's `serve` command creates a local server that translates requests from standard protocols (DLNA, FTP, HTTP, WebDAV) into cloud storage API calls. When a smart TV requests a video via DLNA, rclone fetches the file from your cloud provider and streams it in real time. The client device never knows it is accessing cloud storage -- it simply sees a standard media server or file server.

**Available serve protocols:**

| Protocol | Use Case | Typical Clients |
|----------|----------|----------------|
| DLNA | Media streaming to TVs and players | Smart TVs, VLC, Kodi, Xbox, PlayStation |
| FTP | File transfer for legacy applications | FileZilla, WinSCP, command-line FTP clients |
| HTTP | Browser-based file access | Any web browser |
| WebDAV | Mountable network drive | Windows Explorer, macOS Finder, Linux file managers |
| SFTP | Secure file transfer | SSH clients, SFTP-capable applications |

**Architecture overview:**

The data flow is straightforward:

1. A client device discovers or connects to the rclone serve instance on your local network.
2. The client requests a file listing or specific file.
3. Rclone translates the request into cloud storage API calls.
4. Data streams from the cloud provider through rclone to the client.
5. Optional VFS caching stores frequently accessed data locally for faster repeat access.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

This architecture means your media library can live entirely in the cloud while remaining accessible to any device on your network through standard protocols.

## Setting Up DLNA Media Streaming

DLNA (Digital Living Network Alliance) is the universal standard for media streaming on home networks. Nearly every smart TV, game console, and media player supports DLNA discovery and playback.

**Starting a basic DLNA server:**

Through RcloneView's integrated terminal, start a DLNA server pointing at your cloud media library:

```bash
rclone serve dlna gdrive:/Media
```

This immediately creates a DLNA server that advertises itself on your local network. Any DLNA-capable device on the same network will discover it automatically.

**Customizing the DLNA server:**

```bash
rclone serve dlna gdrive:/Media \
  --name "Cloud Media Server" \
  --addr :7879 \
  --log-level INFO \
  --vfs-cache-mode full \
  --vfs-cache-max-size 10G \
  --vfs-read-ahead 128M
```

**Key DLNA flags:**

| Flag | Purpose | Recommended Value |
|------|---------|-------------------|
| `--name` | Server name visible to clients | Descriptive name like "Cloud Movies" |
| `--addr` | Listen address and port | `:7879` (default) |
| `--vfs-cache-mode` | Caching strategy | `full` for smooth streaming |
| `--vfs-cache-max-size` | Maximum local cache size | 5-20 GB depending on disk space |
| `--vfs-read-ahead` | Data prefetch buffer | 128M-256M for video streaming |
| `--vfs-cache-max-age` | How long cached files persist | `24h` for media libraries |

**Connecting from a smart TV:**

1. Start the DLNA server with the command above.
2. On your smart TV, open the media player or DLNA browser (the exact name varies by manufacturer -- Samsung uses "SmartThings," LG uses "Media Player," Sony uses "Media Player").
3. Look for the server name you specified (e.g., "Cloud Media Server").
4. Browse folders and select media to play.

**Connecting from VLC:**

1. Open VLC media player.
2. Navigate to View > Playlist > Local Network > Universal Plug'n'Play.
3. Your rclone DLNA server appears in the list.
4. Browse and play media directly.

**Serving media from S3-compatible storage:**

S3 and similar object storage providers are excellent for media libraries due to their low cost per gigabyte:

```bash
# Serve from Wasabi (S3-compatible, no egress fees)
rclone serve dlna wasabi:media-bucket \
  --name "Wasabi Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Setting Up an FTP Server

FTP remains widely used for file transfers, especially with legacy applications, network-attached devices, and automated workflows. Rclone can expose any cloud remote as a fully functional FTP server.

**Starting a basic FTP server:**

```bash
rclone serve ftp gdrive: --addr :2121 --user ftpuser --pass ftppassword
```

This creates an FTP server on port 2121 that provides access to your entire Google Drive.

**Advanced FTP configuration:**

```bash
rclone serve ftp s3:my-bucket \
  --addr :2121 \
  --user admin \
  --pass secure-password \
  --passive-port 30000-30100 \
  --vfs-cache-mode writes \
  --vfs-cache-max-size 5G \
  --dir-cache-time 5m \
  --log-level INFO
```

**Key FTP flags:**

| Flag | Purpose |
|------|---------|
| `--addr` | Listen address and port |
| `--user` / `--pass` | FTP authentication credentials |
| `--passive-port` | Port range for passive mode connections |
| `--vfs-cache-mode` | `writes` for upload support, `full` for read/write caching |
| `--dir-cache-time` | How long directory listings are cached |
| `--read-only` | Prevent uploads and modifications |

**Connecting from FileZilla or other FTP clients:**

1. Open your FTP client.
2. Enter the host (IP of the machine running rclone), port (2121), username, and password.
3. Connect and browse your cloud storage as if it were a traditional FTP server.

**Use cases for FTP serving:**

- **Legacy application integration:** Older applications that only support FTP can now access cloud storage.
- **Network scanner uploads:** Configure document scanners to send scanned files directly to cloud storage via FTP.
- **Automated file drops:** Set up a write-only FTP endpoint for receiving files from external parties.
- **Cross-platform access:** FTP works on every operating system without installing additional software.

## Performance Tuning for Streaming

Smooth media streaming requires careful tuning of rclone's VFS (Virtual File System) cache and network settings.

**Understanding VFS cache modes:**

| Mode | Behavior | Best For |
|------|----------|----------|
| `off` | No caching, direct streaming | Small files, high-bandwidth connections |
| `minimal` | Cache only open files | Light media browsing |
| `writes` | Cache writes locally, stream reads | Upload-heavy FTP usage |
| `full` | Full read/write caching | Video streaming, media playback |

For media streaming, `full` cache mode is almost always the right choice. It ensures that video playback does not stutter due to network latency or API throttling.

**Optimizing for video streaming:**

```bash
rclone serve dlna gdrive:/Movies \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --vfs-cache-max-age 72h \
  --buffer-size 64M \
  --vfs-read-chunk-size 32M \
  --vfs-read-chunk-size-limit 256M
```

Key parameters explained:
- **`--vfs-read-ahead 256M`**: Prefetches 256 MB of data ahead of the current playback position, preventing buffering during playback.
- **`--vfs-read-chunk-size 32M`**: Initial chunk size for reads. Starts at 32 MB and doubles up to the limit.
- **`--vfs-read-chunk-size-limit 256M`**: Maximum chunk size. Larger chunks mean fewer API calls but higher initial latency.
- **`--buffer-size 64M`**: In-memory buffer for each open file.

**Bandwidth considerations:**

Video streaming bandwidth requirements vary significantly by quality:

| Video Quality | Bitrate | Minimum Connection |
|--------------|---------|-------------------|
| 720p | 3-5 Mbps | 10 Mbps recommended |
| 1080p | 8-12 Mbps | 25 Mbps recommended |
| 4K | 25-40 Mbps | 50 Mbps recommended |

If your internet connection or cloud provider egress cannot sustain these rates, consider transcoding your media to lower bitrates before uploading, or use a provider with fast egress like Wasabi or a CDN-backed S3 bucket.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**Monitoring streaming performance:**

Use RcloneView's transfer monitoring to observe real-time throughput and identify bottlenecks. If you see frequent pauses followed by bursts, increase the read-ahead buffer. If transfers are consistently slow, the bottleneck is likely your internet connection or the cloud provider's throughput limit.

## Access Control and Multi-User Setup

For shared environments, you need to control who can access what content.

**FTP multi-user setup:**

Rclone's FTP server supports a single user/password pair directly. For multi-user environments, run multiple serve instances on different ports:

```bash
# Family media - read only
rclone serve ftp gdrive:/Media/Family \
  --addr :2121 --user family --pass familypass --read-only &

# Admin access - full control
rclone serve ftp gdrive: \
  --addr :2122 --user admin --pass adminpass &
```

**Read-only access:**

For media servers, read-only access is usually appropriate:

```bash
rclone serve dlna gdrive:/Media --read-only
rclone serve ftp gdrive:/Media --read-only --user viewer --pass viewerpass
```

**Restricting to specific directories:**

Serve only specific subdirectories to limit exposure:

```bash
# Only serve the Movies folder, not the entire drive
rclone serve dlna gdrive:/Media/Movies --name "Movies"

# Serve a specific S3 prefix
rclone serve ftp s3:media-bucket/public --user public --pass publicpass
```

**Network-level restrictions:**

Bind to specific interfaces to control network access:

```bash
# Only accessible from local machine
rclone serve dlna gdrive:/Media --addr 127.0.0.1:7879

# Only accessible from local network
rclone serve ftp gdrive: --addr 192.168.1.100:2121 --user admin --pass adminpass
```

## Running as a Persistent Service

For an always-on media server, configure rclone serve to start automatically.

**Linux systemd service:**

```bash
sudo cat > /etc/systemd/system/rclone-dlna.service << 'EOF'
[Unit]
Description=Rclone DLNA Media Server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=rclone
ExecStart=/usr/bin/rclone serve dlna gdrive:/Media \
  --name "Cloud Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --log-file /var/log/rclone-dlna.log \
  --log-level INFO
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable rclone-dlna
sudo systemctl start rclone-dlna
```

**Windows service setup:**

On Windows, use NSSM (Non-Sucking Service Manager) or Task Scheduler to run the rclone serve command at startup:

```powershell
# Using Task Scheduler (run at login)
schtasks /create /tn "Rclone DLNA" /tr "rclone serve dlna gdrive:/Media --name CloudMedia --vfs-cache-mode full" /sc onlogon
```

**Running multiple servers simultaneously:**

You can run DLNA and FTP servers at the same time for maximum compatibility:

```bash
# DLNA for smart TVs and media players
rclone serve dlna gdrive:/Media --name "Cloud Media" &

# FTP for file manager access
rclone serve ftp gdrive: --addr :2121 --user admin --pass adminpass &

# HTTP for browser access
rclone serve http gdrive:/Media --addr :8080 --read-only &
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## Comparing Serve vs. Mount

Both `rclone serve` and `rclone mount` make cloud storage accessible locally, but they serve different purposes.

| Feature | Serve (DLNA/FTP) | Mount |
|---------|------------------|-------|
| Protocol | DLNA, FTP, HTTP, WebDAV | FUSE/WinFSP filesystem |
| Client compatibility | Any protocol-compatible client | Any application via filesystem |
| Network access | Available to all devices on network | Local machine only (by default) |
| Setup complexity | Simple command, no drivers needed | Requires FUSE (Linux/Mac) or WinFSP (Windows) |
| Media player support | Native DLNA discovery | Requires pointing player at mount path |
| Multiple simultaneous users | Yes, built-in | Limited by filesystem sharing |

**When to use serve:**
- Streaming media to smart TVs, game consoles, or networked players
- Providing FTP access for legacy applications or devices
- Sharing cloud files with multiple users on a network
- Avoiding FUSE/WinFSP driver installation

**When to use mount:**
- Accessing cloud files from desktop applications that expect local paths
- Editing cloud files directly in office applications
- Running scripts that operate on local file paths

In many setups, running both serve and mount simultaneously gives you the best of both worlds.

## Getting Started

Rclone serve transforms your cloud storage from a passive archive into an active media server and file sharing platform. Start with a simple DLNA server pointing at your cloud media folder and test playback on your smart TV or VLC player. Once you confirm that streaming works reliably, add VFS caching for smoother playback, set up an FTP endpoint for broader file access, and configure the service to start automatically. With RcloneView managing your remotes and monitoring connections, you have a complete cloud-backed media server that costs nothing beyond your existing cloud storage subscription.

---

**Related Guides:**
- [Mount Cloud Storage as a Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Browse and Manage Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [S3 Remote Storage Connection Settings](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
