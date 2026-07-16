---
slug: serve-remote-http-webdav-rcloneview
title: "通过 HTTP 和 WebDAV 提供远程服务 — 使用 RcloneView 共享云文件"
authors:
  - tayson
description: "使用 RcloneView 通过 HTTP 和 WebDAV 提供云存储远程服务，实现从浏览器、文件管理器和其他设备进行文件共享和访问。"
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

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 通过 HTTP 和 WebDAV 提供远程服务 — 使用 RcloneView 共享云文件

> 将任意云存储远程转换为本地 HTTP 或 WebDAV 服务器，从浏览器、文件管理器和媒体播放器访问您的文件。

Rclone 的 serve 功能可以让您将云存储远程暴露为本地网络服务。RcloneView 通过其图形界面使这一功能变得易于使用，只需点击几下即可为任意已配置的远程启动 HTTP 或 WebDAV 服务器。这开启了强大的工作流程：在网页浏览器中浏览 S3 存储桶、在缺乏原生支持的设备上挂载 Google Drive，或直接将 Wasabi 中的媒体文件流式传输到视频播放器。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 通过 HTTP 提供云存储服务

RcloneView 的 HTTP serve 模式会启动一个轻量级 Web 服务器，通过浏览器友好的目录列表展示您的云存储文件。将其指向任意远程 — Google Drive、Dropbox、S3 存储桶，甚至是加密的 crypt 远程 — 它就会在类似 `http://localhost:8080` 的本地地址上生成一个可导航的 HTML 界面。

这在与同一网络中的同事共享文件而无需授予他们直接访问您云存储凭证的权限时特别有用。启动 HTTP 服务器，共享本地 URL，他们即可通过网页浏览器浏览和下载文件。服务器仅在 RcloneView 打开时运行，您可以控制暴露哪个远程或子目录。

对于在隔离或受限网络环境中工作的团队，HTTP serve 提供了一种无需在每台工作站上安装云服务商客户端即可访问云端存储的参考资料、文档或数据集的方式。一台运行 RcloneView 的机器即可作为访问点。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a cloud remote to serve via HTTP in RcloneView" class="img-large img-center" />

## 通过 WebDAV 提供云存储服务

WebDAV（Web 分布式创作与版本管理）在 HTTP 基础上扩展了文件管理功能 — 通过网络进行读取、写入、重命名和删除文件。当您在 RcloneView 中通过 WebDAV 提供远程服务时，云存储将可以作为网络驱动器被任何支持 WebDAV 的设备访问，包括 Windows、macOS、Linux、iOS 和 Android。

在 Windows 上，您可以通过文件资源管理器将 WebDAV 共享映射为网络驱动器。在 macOS 上，使用 Finder 的“连接服务器”对话框。在 Linux 上，Nautilus 和 Dolphin 等文件管理器原生支持 WebDAV。这意味着您的 Google Drive、OneDrive 或 S3 存储将在没有专用云客户端应用的设备上以普通文件夹的形式呈现。

WebDAV serve 还支持与将 WebDAV 作为存储后端的应用程序集成。文档编辑器、媒体播放器和备份工具都可以通过 WebDAV 端点读取和写入您的云存储，而无需任何针对特定云服务商的配置。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Serving a cloud remote as WebDAV for network access via RcloneView" class="img-large img-center" />

## 身份验证与安全性

默认情况下，serve HTTP 和 WebDAV 在没有身份验证的情况下运行，因此仅适用于受信任的网络。对于涉及敏感数据或网络暴露的任何场景，RcloneView 支持配置带用户名和密码的 HTTP 基本身份验证。这确保只有授权用户才能访问所提供的文件。

为提高安全性，可将服务器绑定到 `127.0.0.1`（仅本地主机），以防止网络中其他机器访问。如果您需要远程访问，请将 serve 端点与 SSH 隧道或 VPN 结合使用，而不要直接将其暴露到互联网上。RcloneView 的 serve 配置面板允许您在启动服务器之前设置绑定地址、端口和身份验证凭据。

在提供加密的 crypt 远程服务时，文件会在被访问时即时解密。这意味着您可以将加密数据存储在云端，并以解密形式在本地提供服务 — 这对于访问敏感存档而无需在磁盘上永久解密非常有用。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active serve connections and file transfers in RcloneView" class="img-large img-center" />

## 实用工作流程

**媒体流式传输：** 通过 HTTP 提供包含视频或音频文件的云远程服务，然后在 VLC 或其他媒体播放器中打开文件 URL。这样可以避免将整个媒体库下载到本地存储。

**跨设备文件访问：** 在家庭服务器或常开工作站上运行 RcloneView，并通过 WebDAV 提供云存储服务。从同一网络中的平板电脑、手机或其他计算机进行连接。

**开发与测试：** 在开发过程中本地提供 S3 存储桶服务，以测试从 Web URL 读取文件的应用程序，而无需部署到预发布环境。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing served cloud storage files through RcloneView interface" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 配置您要提供服务的云存储远程（S3、Google Drive、Dropbox 等）。
3. 打开 serve 面板，选择 HTTP 或 WebDAV 模式，设置端口和可选的身份验证。
4. 启动服务器，然后从浏览器或文件管理器在本地地址访问您的云文件。

RcloneView 的 serve 功能将云存储转变为网络中任何设备都能即时访问的本地资源。

---

**相关指南：**

- [Bisync 双向同步 — RcloneView 中的双向云同步](https://rcloneview.com/support/blog/bisync-bidirectional-sync-rcloneview)
- [连接 WebDAV 服务器实现 RcloneView 云同步](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [使用 RcloneView 将 SFTP 和 SMB 挂载为本地驱动器](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
