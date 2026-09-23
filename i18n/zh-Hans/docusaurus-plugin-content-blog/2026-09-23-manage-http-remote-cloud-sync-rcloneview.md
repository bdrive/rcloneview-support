---
slug: manage-http-remote-cloud-sync-rcloneview
title: "管理 HTTP 远程存储 — 用 RcloneView 浏览和同步文件"
authors:
  - alex
description: "将只读的 HTTP 文件索引连接到 RcloneView，并将其内容同步到 Google Drive、S3、Backblaze B2 等 90 多个云存储提供商。"
keywords:
  - HTTP 远程 RcloneView
  - HTTP 文件服务器同步
  - 只读 HTTP 存储
  - HTTP 同步到云
  - HTTP 目录列表 rclone
  - HTTP 到 Google Drive
  - HTTP 到 Amazon S3
  - 归档 HTTP 文件
  - RcloneView HTTP 连接
  - 浏览 HTTP 远程
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 HTTP 远程存储 — 用 RcloneView 浏览和同步文件

> RcloneView 可以将任何公开的 HTTP 文件索引变成可浏览的远程，让你无需一条 wget 命令就能把其中的内容拉取到 Google Drive、S3 或其他 90 多个云提供商。

大量数据集、固件归档、研究镜像和内部构建产物仍然托管在纯粹的 HTTP 目录列表之后——没有 API，没有登录，只有通过 URL 提供的文件夹和文件。从这些来源下载通常意味着编写 curl 或 wget 循环脚本，并祈祷目录结构在运行期间不会变化。RcloneView 将任意 HTTP 端点作为只读远程连接，让你在浏览云存储时使用的同一个文件浏览面板中浏览它，然后将所需内容复制到合适的备份目的地。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 HTTP 远程

打开 **Remote** 标签页并点击 **New Remote**，然后从提供商列表中选择 HTTP。输入你要浏览的文件索引的基础 URL——RcloneView 会读取服务器的目录列表，并将其显示为普通的文件夹树。由于 HTTP 远程按设计是只读的，因此没有 OAuth 流程，也没有需要管理的凭据：你可以列出、浏览和下载文件，但无法在源服务器上上传、重命名或删除任何内容。

这一区别决定了你应如何使用这种远程类型。与仅支持挂载的工具不同，RcloneView 在 FREE 许可下也提供同步和文件夹比较功能，因此 HTTP 远程最适合作为你拉取数据的来源，而另一侧则是可写的云端或本地目标。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加新的 HTTP 远程" class="img-large img-center" />

## 浏览和下载 HTTP 索引中的内容

连接完成后，HTTP 远程的表现与 RcloneView 多面板浏览器中的其他面板一样。展开文件夹树，在服务器提供相关信息时查看文件大小和修改日期，并使用 Ctrl+Click 或 Shift+Click 选择多个文件或子文件夹后再下载。在相邻面板中打开 Backblaze B2 存储桶或 Google Drive 文件夹等云端目标，将文件拖过去即可开始传输。

对于镜像公开数据集归档、从供应商的 HTTP 分发点拉取固件镜像,或归档只提供目录列表的内部构建服务器快照的团队来说，这是一种常见的模式。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中将文件从 HTTP 远程复制到云存储" class="img-large img-center" />

## 安排从 HTTP 源定期拉取

如果 HTTP 索引会周期性更新——比如夜间构建或每周数据集刷新——可以设置一个以 HTTP 远程为源、以云存储为目标的 Job Manager 条目。由于不同服务器暴露的元数据多少可能不同，建议先运行 **Dry Run**，准确确认将要复制的文件，以便在实际传输前验证文件匹配是否符合预期。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排从 HTTP 远程拉取文件的定期任务" class="img-large img-center" />

使用 **PLUS 许可**，可以为任务附加 crontab 风格的计划，使 HTTP 服务器上发布的新文件按照该计划进入你的云归档，之后可以在 **Job History** 标签页中确认传输数量，并找出源服务器已停止提供的文件。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **Remote** > **New Remote**，从提供商列表中选择 HTTP。
3. 输入目录列表的基础 URL 并保存该远程。
4. 在一个面板中打开 HTTP 远程，在另一个面板中打开你的云端目标。
5. 使用 **Job Manager** 配置同步任务，并在首次实际拉取前运行 Dry Run。

连接 HTTP 源之后，将文件拉取到云归档就从一个每次都要记得重新运行的一次性脚本，变成了一个可重复、可审计的任务。

---

**相关指南：**

- [Connect Any WebDAV Server to RcloneView — Sync with Google Drive, S3, and 90+ Clouds](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Connect Any SFTP Server to RcloneView — Sync Remote Servers with Cloud Storage](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Manage FTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
