---
slug: serve-webdav-http-from-cloud-rcloneview
title: "使用 RcloneView 将云存储以 WebDAV 或 HTTP 方式提供服务"
authors:
  - tayson
description: "通过 RcloneView 使用 rclone 的 serve 命令，将云存储暴露为本地 WebDAV 或 HTTP 服务器。无需挂载驱动器即可在支持 WebDAV 的应用中访问文件。"
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

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将云存储以 WebDAV 或 HTTP 方式提供服务

> RcloneView 可以将任何云存储服务商暴露为本地 WebDAV 或 HTTP 服务器。任何支持 WebDAV 的应用——文件管理器、DAM 工具、创意应用、移动客户端——都可以直接读写云端文件。

使用 rclone 的 VFS 层挂载云端驱动器是在本地暴露云存储最常见的方式。但有些场景需要不同的方法：让应用通过网络连接的 WebDAV 服务器、用于向浏览器提供文件的纯 HTTP 服务器，或是一种在无法挂载 FUSE 驱动器的设备上访问云存储的轻量方式。rclone 的 `serve` 命令可以处理所有这些需求——RcloneView 让你可以通过终端和任务界面来使用它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rclone 可以提供哪些服务

rclone 通过 `rclone serve` 命令支持多种服务器协议：

| 协议 | 使用场景 |
|----------|----------|
| `webdav` | 文件管理器、DAM 工具、支持 WebDAV 的应用 |
| `http` | 只读的浏览器访问云端文件 |
| `ftp` | 传统应用兼容性 |
| `sftp` | 基于安全 shell 的文件访问 |
| `s3` | 将任意云存储暴露为 S3 兼容接口（配合 S3 客户端使用） |
| `dlna` | 向支持 DLNA 的设备进行媒体流传输 |

本指南聚焦于对桌面工作流最有用的 WebDAV 和 HTTP。

## 用例一：用于应用集成的 WebDAV

许多专业应用原生支持 WebDAV：Cyberduck、Finder（macOS）、Adobe Bridge、DAM 工具、项目管理工具等等。将云存储暴露为 WebDAV，可以让这些应用无需挂载驱动器即可访问。

### 从 RcloneView 启动 WebDAV 服务器

在 RcloneView 中打开 **终端** 面板，运行：

```bash
rclone serve webdav gdrive:/Documents/ --addr 127.0.0.1:8888 --user myuser --pass mypassword
```

这会在 `http://127.0.0.1:8888` 启动一个 WebDAV 服务器，暴露你的 Google Drive `/Documents/` 文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="Open RcloneView terminal to start serve command" class="img-large img-center" />

### 从应用连接

在任何支持 WebDAV 的应用中，添加一个 WebDAV 连接：
- **URL**: `http://127.0.0.1:8888`
- **用户名**: `myuser`
- **密码**: `mypassword`

该应用会将你的 Google Drive Documents 文件夹视为一个 WebDAV 共享——可浏览、可读、可写。

## 用例二：用于只读浏览器访问的 HTTP

如果想在不授予同事云账户访问权限的情况下共享文件，可以将某个文件夹以 HTTP 方式提供服务：

```bash
rclone serve http s3-remote:my-bucket/reports/ --addr 0.0.0.0:8080
```

网络中的任何人都可以在浏览器中打开 `http://your-machine-ip:8080`，看到带下载链接的目录列表——无需云账户。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse served cloud files in browser" class="img-large img-center" />

## 用例三：提供 S3 服务以实现 S3 客户端兼容

一个强大的技巧：将非 S3 云存储（比如 Google Drive 或 Backblaze B2 的原生 API）暴露为 S3 兼容端点，让任何 S3 客户端都能访问它：

```bash
rclone serve s3 gdrive:/Backups/ --addr 127.0.0.1:9000 --auth-key ACCESSKEY,SECRETKEY
```

S3 客户端（AWS CLI、s3cmd、任何 S3 SDK）随后可以连接到 `http://127.0.0.1:9000`，就像访问 S3 一样与 Google Drive 交互。

## 创建持久化的 Serve 任务

要在启动时或按计划运行 serve 命令：

1. 在 RcloneView 中，使用 **自定义命令** 模式创建一个新的 **任务**。
2. 输入你的 `rclone serve webdav` 命令及所需参数。
3. 设置为在 RcloneView 启动时自动运行，或按需安排计划任务。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule serve job to run on startup" class="img-large img-center" />

## 安全注意事项

| 场景 | 建议 |
|----------|---------------|
| 仅本地使用 | 绑定到 `127.0.0.1`——不可从本机以外访问 |
| 局域网共享 | 绑定到本机的局域网 IP，添加 `--user` 和 `--pass` |
| 面向互联网 | 使用 HTTPS（添加 `--cert` 和 `--key` 参数）或置于反向代理之后 |
| 公开 HTTP 服务器 | 使用带只读 VFS 的 `rclone serve http`：添加 `--read-only` |

对任何超出 `127.0.0.1` 范围可访问的服务器，务必设置用户名/密码：

```bash
rclone serve webdav remote:path --addr 0.0.0.0:8888 --user admin --pass strongpassword --read-only
```

## 常用 Serve 参数

| 参数 | 用途 |
|------|---------|
| `--addr host:port` | 绑定地址和端口 |
| `--user` / `--pass` | HTTP 基本身份验证 |
| `--read-only` | 禁止写入 |
| `--vfs-cache-mode full` | 在本地缓存文件以提升性能 |
| `--no-modtime` | 禁用修改时间报告（对某些应用有用） |
| `--htpasswd /path/file` | 使用 htpasswd 文件支持多用户 |

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 RcloneView 中 **打开终端**。
3. **运行 `rclone serve webdav remote:path --addr 127.0.0.1:8888`** 启动 WebDAV 服务器。
4. **使用 WebDAV 的 URL 和凭据从你的应用连接**。

WebDAV 为原本无法读取你云端文件的众多应用打开了访问云存储的大门。无需挂载。

---

**相关指南：**

- [将云存储挂载为本地驱动器](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [将 SFTP 和 SMB 挂载为本地驱动器](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [RcloneView 终端：图形界面内的 CLI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)

<CloudSupportGrid />
