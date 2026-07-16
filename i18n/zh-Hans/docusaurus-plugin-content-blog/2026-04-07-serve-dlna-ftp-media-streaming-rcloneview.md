---
slug: serve-dlna-ftp-media-streaming-rcloneview
title: "通过 RcloneView 使用 DLNA 和 FTP 服务器流式播放云端媒体"
authors: [tayson]
description: "使用 rclone serve 和 RcloneView 为您的云存储设置 DLNA 媒体流和 FTP 服务器访问,实现在任何设备上的无缝媒体播放。"
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
tags: [feature, media, tips, automation, mount]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 通过 RcloneView 使用 DLNA 和 FTP 服务器流式播放云端媒体

> 通过 rclone serve 将内容直接流式传输到智能电视、媒体播放器和 FTP 客户端,把您的云存储变成一个个人媒体服务器。

您的云存储中保存着数以 TB 计的照片、视频和音乐,但要在客厅电视上访问这些内容,或通过传统文件传输工具进行访问,往往令人沮丧地间接。rclone 的 `serve` 命令解决了这个问题,它可以将任何云端远程暴露为 DLNA 媒体服务器、FTP 服务器、HTTP 服务器或 WebDAV 端点。结合 RcloneView 用于管理远程和监控连接的直观界面,您可以在几分钟内搭建一个功能齐全的云端媒体服务器。本指南涵盖了向智能电视和媒体播放器进行 DLNA 流式传输、面向传统客户端访问的 FTP 服务器配置、实现流畅播放的性能调优,以及多用户环境下的访问控制。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone Serve 的工作原理

rclone 的 `serve` 命令会创建一个本地服务器,将标准协议(DLNA、FTP、HTTP、WebDAV)的请求转换为云存储 API 调用。当智能电视通过 DLNA 请求视频时,rclone 会从您的云端提供商获取该文件并实时流式传输。客户端设备完全不知道自己正在访问云存储——它看到的只是一个标准的媒体服务器或文件服务器。

**可用的 serve 协议:**

| 协议 | 使用场景 | 典型客户端 |
|----------|----------|----------------|
| DLNA | 向电视和播放器流式传输媒体 | 智能电视、VLC、Kodi、Xbox、PlayStation |
| FTP | 面向传统应用的文件传输 | FileZilla、WinSCP、命令行 FTP 客户端 |
| HTTP | 基于浏览器的文件访问 | 任何 Web 浏览器 |
| WebDAV | 可挂载的网络驱动器 | Windows 资源管理器、macOS Finder、Linux 文件管理器 |
| SFTP | 安全文件传输 | SSH 客户端、支持 SFTP 的应用程序 |

**架构概览:**

数据流非常简单:

1. 客户端设备在本地网络中发现或连接到 rclone serve 实例。
2. 客户端请求文件列表或特定文件。
3. rclone 将请求转换为云存储 API 调用。
4. 数据从云端提供商通过 rclone 流式传输到客户端。
5. 可选的 VFS 缓存会将常用数据存储在本地,以加快重复访问的速度。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

这种架构意味着您的媒体库可以完全存放在云端,同时通过标准协议为网络中的任何设备提供访问。

## 设置 DLNA 媒体流

DLNA(数字生活网络联盟)是家庭网络媒体流的通用标准。几乎所有智能电视、游戏主机和媒体播放器都支持 DLNA 发现和播放。

**启动一个基本的 DLNA 服务器:**

通过 RcloneView 内置的终端,启动一个指向您云端媒体库的 DLNA 服务器:

```bash
rclone serve dlna gdrive:/Media
```

这会立即创建一个在本地网络中自我广播的 DLNA 服务器。同一网络中任何支持 DLNA 的设备都会自动发现它。

**自定义 DLNA 服务器:**

```bash
rclone serve dlna gdrive:/Media \
  --name "Cloud Media Server" \
  --addr :7879 \
  --log-level INFO \
  --vfs-cache-mode full \
  --vfs-cache-max-size 10G \
  --vfs-read-ahead 128M
```

**关键 DLNA 参数:**

| 参数 | 作用 | 推荐值 |
|------|---------|-------------------|
| `--name` | 客户端可见的服务器名称 | 类似 "Cloud Movies" 的描述性名称 |
| `--addr` | 监听地址和端口 | `:7879`(默认) |
| `--vfs-cache-mode` | 缓存策略 | `full`,以实现流畅播放 |
| `--vfs-cache-max-size` | 本地最大缓存大小 | 根据磁盘空间设置为 5-20 GB |
| `--vfs-read-ahead` | 数据预取缓冲区 | 视频流建议 128M-256M |
| `--vfs-cache-max-age` | 缓存文件保留时长 | 媒体库建议 `24h` |

**从智能电视连接:**

1. 使用上面的命令启动 DLNA 服务器。
2. 在智能电视上,打开媒体播放器或 DLNA 浏览器(具体名称因厂商而异——三星使用 "SmartThings",LG 使用 "Media Player",索尼使用 "Media Player")。
3. 查找您指定的服务器名称(例如 "Cloud Media Server")。
4. 浏览文件夹并选择要播放的媒体。

**从 VLC 连接:**

1. 打开 VLC 媒体播放器。
2. 导航至 View > Playlist > Local Network > Universal Plug'n'Play。
3. 您的 rclone DLNA 服务器会出现在列表中。
4. 浏览并直接播放媒体。

**从 S3 兼容存储提供媒体服务:**

S3 及类似的对象存储提供商由于每 GB 成本较低,非常适合用作媒体库:

```bash
# Serve from Wasabi (S3-compatible, no egress fees)
rclone serve dlna wasabi:media-bucket \
  --name "Wasabi Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## 设置 FTP 服务器

FTP 至今仍被广泛使用,尤其是在传统应用程序、网络连接设备和自动化工作流中。rclone 可以将任何云端远程暴露为功能完整的 FTP 服务器。

**启动一个基本的 FTP 服务器:**

```bash
rclone serve ftp gdrive: --addr :2121 --user ftpuser --pass ftppassword
```

这会在 2121 端口创建一个 FTP 服务器,提供对整个 Google Drive 的访问。

**高级 FTP 配置:**

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

**关键 FTP 参数:**

| 参数 | 作用 |
|------|---------|
| `--addr` | 监听地址和端口 |
| `--user` / `--pass` | FTP 身份验证凭据 |
| `--passive-port` | 被动模式连接的端口范围 |
| `--vfs-cache-mode` | `writes` 用于支持上传,`full` 用于读写缓存 |
| `--dir-cache-time` | 目录列表的缓存时长 |
| `--read-only` | 阻止上传和修改 |

**从 FileZilla 或其他 FTP 客户端连接:**

1. 打开您的 FTP 客户端。
2. 输入主机(运行 rclone 的机器 IP)、端口(2121)、用户名和密码。
3. 连接并浏览您的云存储,就像访问传统 FTP 服务器一样。

**FTP 服务的使用场景:**

- **传统应用集成:** 只支持 FTP 的旧应用程序现在也能访问云存储。
- **网络扫描仪上传:** 配置文档扫描仪,将扫描文件直接通过 FTP 发送到云存储。
- **自动化文件投递:** 设置一个只写的 FTP 端点,用于接收外部人员发送的文件。
- **跨平台访问:** FTP 无需安装额外软件即可在任何操作系统上使用。

## 流媒体性能调优

流畅的媒体流传输需要对 rclone 的 VFS(虚拟文件系统)缓存和网络设置进行细致的调优。

**了解 VFS 缓存模式:**

| 模式 | 行为 | 最适用场景 |
|------|------|----------|
| `off` | 无缓存,直接流式传输 | 小文件、高带宽连接 |
| `minimal` | 仅缓存已打开的文件 | 轻度媒体浏览 |
| `writes` | 本地缓存写入,流式传输读取 | 上传较多的 FTP 使用场景 |
| `full` | 完整的读写缓存 | 视频流、媒体播放 |

对于媒体流传输,`full` 缓存模式几乎总是正确的选择。它可以确保视频播放不会因网络延迟或 API 限流而卡顿。

**针对视频流传输的优化:**

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

关键参数说明:
- **`--vfs-read-ahead 256M`**: 在当前播放位置之前预取 256 MB 数据,防止播放过程中出现缓冲。
- **`--vfs-read-chunk-size 32M`**: 读取的初始分块大小。从 32 MB 开始,并逐步倍增至上限。
- **`--vfs-read-chunk-size-limit 256M`**: 最大分块大小。更大的分块意味着更少的 API 调用,但初始延迟更高。
- **`--buffer-size 64M`**: 每个打开文件的内存缓冲区。

**带宽考量:**

视频流传输的带宽需求因画质不同而有显著差异:

| 视频画质 | 码率 | 最低连接要求 |
|--------------|---------|-------------------|
| 720p | 3-5 Mbps | 建议 10 Mbps |
| 1080p | 8-12 Mbps | 建议 25 Mbps |
| 4K | 25-40 Mbps | 建议 50 Mbps |

如果您的互联网连接或云端提供商的出站带宽无法维持这些速率,可以考虑在上传前将媒体转码为更低码率,或使用 Wasabi 这类出站速度快的提供商,或使用 CDN 加速的 S3 存储桶。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**监控流媒体性能:**

使用 RcloneView 的传输监控功能来观察实时吞吐量并找出瓶颈。如果您看到频繁的停顿后跟随突发传输,请增加预读缓冲区。如果传输持续缓慢,瓶颈很可能是您的互联网连接或云端提供商的吞吐量限制。

## 访问控制与多用户设置

对于共享环境,您需要控制谁可以访问哪些内容。

**FTP 多用户设置:**

rclone 的 FTP 服务器直接支持单一的用户名/密码对。对于多用户环境,可以在不同端口上运行多个 serve 实例:

```bash
# Family media - read only
rclone serve ftp gdrive:/Media/Family \
  --addr :2121 --user family --pass familypass --read-only &

# Admin access - full control
rclone serve ftp gdrive: \
  --addr :2122 --user admin --pass adminpass &
```

**只读访问:**

对于媒体服务器,只读访问通常更为合适:

```bash
rclone serve dlna gdrive:/Media --read-only
rclone serve ftp gdrive:/Media --read-only --user viewer --pass viewerpass
```

**限制到特定目录:**

仅提供特定子目录的服务,以限制暴露范围:

```bash
# Only serve the Movies folder, not the entire drive
rclone serve dlna gdrive:/Media/Movies --name "Movies"

# Serve a specific S3 prefix
rclone serve ftp s3:media-bucket/public --user public --pass publicpass
```

**网络层限制:**

绑定到特定接口以控制网络访问:

```bash
# Only accessible from local machine
rclone serve dlna gdrive:/Media --addr 127.0.0.1:7879

# Only accessible from local network
rclone serve ftp gdrive: --addr 192.168.1.100:2121 --user admin --pass adminpass
```

## 作为持久化服务运行

要实现全天候运行的媒体服务器,可以配置 rclone serve 自动启动。

**Linux systemd 服务:**

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

**Windows 服务设置:**

在 Windows 上,可以使用 NSSM(Non-Sucking Service Manager)或任务计划程序,在启动时运行 rclone serve 命令:

```powershell
# Using Task Scheduler (run at login)
schtasks /create /tn "Rclone DLNA" /tr "rclone serve dlna gdrive:/Media --name CloudMedia --vfs-cache-mode full" /sc onlogon
```

**同时运行多个服务器:**

您可以同时运行 DLNA 和 FTP 服务器,以实现最大兼容性:

```bash
# DLNA for smart TVs and media players
rclone serve dlna gdrive:/Media --name "Cloud Media" &

# FTP for file manager access
rclone serve ftp gdrive: --addr :2121 --user admin --pass adminpass &

# HTTP for browser access
rclone serve http gdrive:/Media --addr :8080 --read-only &
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## Serve 与 Mount 的比较

`rclone serve` 和 `rclone mount` 都能让云存储在本地可用,但它们的用途不同。

| 特性 | Serve (DLNA/FTP) | Mount |
|---------|------------------|-------|
| 协议 | DLNA、FTP、HTTP、WebDAV | FUSE/WinFSP 文件系统 |
| 客户端兼容性 | 任何支持相应协议的客户端 | 任何通过文件系统访问的应用程序 |
| 网络访问 | 网络中所有设备均可访问 | 默认仅限本机 |
| 设置复杂度 | 命令简单,无需驱动程序 | 需要 FUSE(Linux/Mac)或 WinFSP(Windows) |
| 媒体播放器支持 | 原生 DLNA 发现 | 需要将播放器指向挂载路径 |
| 多用户同时访问 | 是,内置支持 | 受文件系统共享方式限制 |

**何时使用 serve:**
- 向智能电视、游戏主机或联网播放器流式传输媒体
- 为传统应用程序或设备提供 FTP 访问
- 在网络中与多个用户共享云端文件
- 避免安装 FUSE/WinFSP 驱动程序

**何时使用 mount:**
- 从期望使用本地路径的桌面应用程序访问云端文件
- 在办公应用程序中直接编辑云端文件
- 运行需要操作本地文件路径的脚本

在许多场景下,同时运行 serve 和 mount 可以让您兼得两者的优势。

## 开始使用

rclone serve 将您的云存储从被动的存档转变为一个活跃的媒体服务器和文件共享平台。先从一个指向您云端媒体文件夹的简单 DLNA 服务器开始,并在智能电视或 VLC 播放器上测试播放效果。确认流式传输稳定可靠后,再添加 VFS 缓存以获得更流畅的播放体验,设置 FTP 端点以实现更广泛的文件访问,并配置服务自动启动。借助 RcloneView 管理您的远程连接和监控状态,您就拥有了一个完整的云端媒体服务器,除了您已有的云存储订阅费用外,不会产生任何额外成本。

---

**相关指南:**
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [S3 远程存储连接设置](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
