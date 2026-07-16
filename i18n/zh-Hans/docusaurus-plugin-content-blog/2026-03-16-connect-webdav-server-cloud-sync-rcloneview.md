---
slug: connect-webdav-server-cloud-sync-rcloneview
title: "将任意 WebDAV 服务器连接到 RcloneView — 与 Google Drive、S3 及 70 多个云同步"
authors:
  - tayson
description: "WebDAV 得到 NAS 设备、自托管应用和众多云服务的支持。了解如何将任意 WebDAV 服务器连接到 RcloneView，并与你的其他云账户进行同步。"
keywords:
  - webdav sync tool
  - webdav file manager
  - webdav to google drive
  - webdav cloud sync
  - webdav backup tool
  - connect webdav rclone
  - webdav gui client
  - webdav transfer files
  - webdav nas sync
  - webdav multi cloud
tags:
  - RcloneView
  - webdav
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将任意 WebDAV 服务器连接到 RcloneView — 与 Google Drive、S3 及 70 多个云同步

> WebDAV 无处不在 — Synology、QNAP、Nextcloud、ownCloud、Box、pCloud 以及数十种其他服务都支持它。RcloneView 可以将任意 WebDAV 端点转变为一流的云远程，供你浏览、同步和备份。

WebDAV（Web 分布式创作和版本控制）是支持最广泛的文件访问协议之一。NAS 设备暴露它，自托管云应用使用它，许多商业服务也提供它作为访问方式。RcloneView 可以连接到任意 WebDAV 端点，并将其与 Google Drive、S3、OneDrive 以及所有其他受支持的提供商一起，放入双栏浏览器中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 支持 WebDAV 的服务

WebDAV 比大多数人想象的更常见：

| 服务/设备 | WebDAV URL 模式 |
|---------------|-------------------|
| Nextcloud | `https://your-server/remote.php/dav/files/username/` |
| ownCloud | `https://your-server/remote.php/webdav/` |
| Synology NAS | `https://your-nas:5006/` |
| QNAP NAS | `https://your-nas:8081/` |
| pCloud | `https://webdav.pcloud.com/` |
| Box | `https://dav.box.com/dav/` |
| 4shared | `https://webdav.4shared.com/` |

## 添加 WebDAV 远程

<img src="/support/images/en/blog/new-remote.png" alt="Add WebDAV remote" class="img-large img-center" />

在 RcloneView 的远程管理器中，使用你的服务器 URL、用户名和密码创建一个新的 WebDAV 远程。连接完成后，即可立即浏览你的文件。

## 关键工作流程

### 通过 WebDAV 将 NAS 同步到云

许多 NAS 设备通过 WebDAV 提供远程访问。可以用它将 NAS 内容同步到 Google Drive 或 S3：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync WebDAV NAS to cloud" class="img-large img-center" />

### 备份自托管云

正在运行 Nextcloud 或 ownCloud？将自托管文件备份到商业云，以实现灾难恢复：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Back up Nextcloud via WebDAV" class="img-large img-center" />

### 安排自动同步

在你的 WebDAV 服务器与云存储之间设置每晚自动同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule WebDAV sync" class="img-large img-center" />

### 验证传输

确认已同步的文件与原始文件一致：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify WebDAV sync" class="img-large img-center" />

## 性能提示

- 使用 **HTTPS** 以在互联网上进行加密连接
- 如果你的服务器支持，为大文件**启用分块上传**
- 为慢速连接**设置合适的超时时间**
- 对共享服务器**将并发传输数限制为** 2-4

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加你的 WebDAV 服务器**作为远程。
3. **与你的其他云账户一起浏览**。
4. **同步并安排计划**以实现自动化工作流程。

只要它支持 WebDAV，RcloneView 就能管理它。

---

**相关指南：**

- [将 Nextcloud 与 Google Drive 同步](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [通过 WebDAV 备份 Nextcloud](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [将 SFTP/SMB 挂载为本地驱动器](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
