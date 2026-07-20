---
slug: manage-ftp-server-cloud-sync-backup-rcloneview
title: "管理 FTP 服务器存储——使用 RcloneView 同步和备份文件"
authors:
  - robin
description: "使用 RcloneView 连接并管理您的 FTP 服务器。将 FTP 文件同步和备份到 Google Drive、S3、Backblaze B2 以及 90 多个云存储提供商。"
keywords:
  - FTP 服务器管理
  - FTP 云同步
  - FTP 备份到云端
  - RcloneView FTP
  - FTP 文件传输
  - 将 FTP 同步到 Google Drive
  - FTP 到 Amazon S3
  - FTP 云备份工具
  - 管理 FTP 存储
  - FTP rclone GUI
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 FTP 服务器存储——使用 RcloneView 同步和备份文件

> RcloneView 将您的 FTP 服务器转变为一流的远程存储——与 Google Drive、S3 以及其他 90 多个云提供商一样,以可视化方式浏览、同步和备份其中的文件。

FTP 仍然是无数 Web 托管环境、旧版媒体存档和内部文件分发服务器的支柱。管理 FTP 文件通常意味着要在终端会话、手动目录列表和手写脚本之间来回切换。RcloneView 将您的 FTP 服务器完全视为普通的云存储账户——您无需接触命令行,即可获得一致的可视化界面来浏览、传输和备份文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接您的 FTP 服务器

打开 **Remote** 标签页,点击 **New Remote**。在提供商列表中选择 FTP,然后输入您服务器的主机名或 IP 地址、端口、用户名和密码。如果您的服务器支持 FTPS(基于 TLS 的 FTP),您可以在高级选项中启用它以获得加密连接。

保存后,该 FTP 远程会与您的云账户一起显示在浏览器面板中。您可以展开其文件夹树、浏览子目录,并查看文件名、大小和修改时间戳——与您在 Amazon S3 或 Dropbox 中获得的体验完全相同。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new FTP remote in RcloneView" class="img-large img-center" />

## 以可视化方式浏览和传输 FTP 文件

RcloneView 的多面板浏览器正是让 FTP 管理变得高效的关键所在。在一个面板中打开您的 FTP 远程,在另一个面板中打开云端目标——一个 Backblaze B2 存储桶、一个 Google Drive 文件夹,或一个 Amazon S3 前缀。拖放文件即可在面板之间发起复制。移动批量资产时,可使用 Ctrl+Click 或 Shift+Click 进行多选。右键单击可重命名、删除、创建文件夹或获取文件夹大小。

对于在 FTP 服务器上维护客户文件并需要将其归档到对象存储的 Web 代理机构,或从 FTP 主机向多个云 CDN 提供商分发资产的媒体团队而言,这种并排视图取代了容易出错的手动工作流程。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from FTP remote to cloud storage in RcloneView" class="img-large img-center" />

## 在 FTP 和云存储之间创建同步任务

对于可重复的工作流程,RcloneView 的 **Job Manager**(任务管理器)可让您配置 FTP 服务器与任意云端目标之间的同步或复制任务。该 4 步向导涵盖源和目标的选择、高级设置(并发传输、校验和验证)以及筛选规则(文件类型、大小限制、时间阈值)。

请先运行一次 **Dry Run**(试运行)——它会在不做任何实际更改的情况下,预览将要复制或删除的每一个文件。对于目录结构可能较为复杂,或存在意外覆盖风险的 FTP 源来说,这一点尤为重要。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing a sync job from FTP to cloud storage in RcloneView" class="img-large img-center" />

每次运行后,**Job History**(任务历史)标签页会显示执行时间、传输速度、文件数量和最终状态——为您提供清晰的审计记录,追踪文件的移动情况和时间。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing FTP to cloud backup results in RcloneView" class="img-large img-center" />

借助 **PLUS 许可证**,您可以为 FTP 同步任务附加类似 cron 的调度计划——例如每晚备份新上传的文件,或每周同步一次到云存储,而无需一直保持会话打开。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **Remote** > **New Remote**,并在提供商列表中选择 FTP。
3. 输入您的服务器主机、端口、用户名和密码,然后保存该远程。
4. 在一个面板中打开您的 FTP 远程,在另一个面板中打开云端目标。
5. 使用 **Job Manager** 配置同步任务,并在首次正式传输前运行 Dry Run。

将您的 FTP 服务器连接到 RcloneView,意味着您再也不必编写同步脚本——每一次传输都可在同一个界面中被追踪、重复执行并接受审计。

---

**相关指南:**

- [管理 SFTP 服务器存储——使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [使用 RcloneView 将 FTP 服务器迁移到云存储](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [连接 WebDAV 服务器并使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)

<CloudSupportGrid />
