---
slug: mount-digitalocean-spaces-local-drive-rcloneview
title: "使用 RcloneView 将 DigitalOcean Spaces 挂载为本地磁盘，轻松访问文件"
authors:
  - tayson
description: "像访问普通文件夹一样访问你的 DigitalOcean Spaces 对象存储——使用 RcloneView 将其挂载为本地磁盘，拖放文件，并与其他云存储同步。"
keywords:
  - digitalocean spaces mount
  - digitalocean spaces local drive
  - spaces s3 compatible mount
  - digitalocean spaces gui
  - digitalocean spaces file manager
  - mount object storage local drive
  - digitalocean spaces sync
  - digitalocean spaces backup
  - spaces rclone gui
  - digitalocean spaces desktop
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - mount
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 DigitalOcean Spaces 挂载为本地磁盘，轻松访问文件

> DigitalOcean Spaces 非常适合存储资源文件，但通过 Web 控制台访问文件既慢又麻烦。如果你能像浏览桌面上的普通文件夹一样浏览你的 Spaces 存储桶，会怎样？

DigitalOcean Spaces 提供了价格实惠的 S3 兼容对象存储，但其 Web 控制台并不是为日常文件管理而设计的。上传文件夹、整理文件或快速预览内容都意味着要不断切换浏览器标签页。RcloneView 让你可以将任意 Spaces 存储桶挂载为本地磁盘——像操作本地文件系统一样自然地浏览、拖放和同步文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要在本地挂载 DigitalOcean Spaces？

Spaces 作为应用的后端存储表现良好，但当人需要直接与其交互时：

- **Web 控制台速度慢**——浏览包含数千个文件的大型存储桶非常繁琐。没有批量重命名、没有快速预览、也没有拖放功能。
- **CLI 工具需要记忆命令**——`s3cmd` 和 `aws s3` 可以完成任务，但并非人人都愿意为基本的文件操作输入命令。
- **没有原生桌面集成**——与 Dropbox 或 Google Drive 不同，Spaces 没有桌面同步客户端。

将 Spaces 挂载为本地磁盘可以解决这三个问题。你的存储桶会以文件夹的形式出现在文件管理器中——用你熟悉的工具打开文件、复制文件夹、删除条目。

## 将 DigitalOcean Spaces 设置为远程

由于 Spaces 与 S3 兼容，在 RcloneView 中的设置使用 S3 提供商类型：

1. 打开 RcloneView，点击 **Add Remote（添加远程）**。
2. 选择 **Amazon S3** 作为提供商类型（Spaces 使用 S3 API）。
3. 在 S3 提供商下拉菜单中选择 **DigitalOcean Spaces**。
4. 输入你的凭据：
   - 来自你的 DigitalOcean API 设置的 **Access Key（访问密钥）** 和 **Secret Key（私密密钥）**。
   - **Region（区域）**：你的 Spaces 区域（例如 `nyc3`、`sfo3`、`ams3`、`sgp1`）。
   - **Endpoint（端点）**：`https://{region}.digitaloceanspaces.com`
5. 保存该远程——现在你的 Spaces 存储桶就可以浏览了。

<img src="/support/images/en/blog/new-remote.png" alt="Add DigitalOcean Spaces as S3-compatible remote" class="img-large img-center" />

## 将 Spaces 挂载为本地磁盘

连接完成后，只需几步点击即可将你的 Spaces 存储桶挂载为本地磁盘：

1. 在资源管理器中浏览到你的 Spaces 远程。
2. 右键点击你想要挂载的存储桶或文件夹。
3. 从右键菜单中选择 **Mount（挂载）**。
4. 选择一个本地挂载点（Windows 上为驱动器盘符，Mac/Linux 上为挂载路径）。
5. 点击 **Mount（挂载）**——你的 Spaces 存储桶现在会显示为本地磁盘。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount DigitalOcean Spaces from Explorer" class="img-large img-center" />

或者，使用挂载管理器以获得更多挂载选项控制：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure Spaces mount in Mount Manager" class="img-large img-center" />

### 你可以对挂载的磁盘做什么

- **直接打开文件**——双击图片、文档或视频，在默认应用中打开它们。
- **复制粘贴**——使用操作系统的文件管理器在本地文件系统和 Spaces 之间移动文件。
- **拖放**——将文件从桌面拖入已挂载的磁盘。
- **在应用程序中使用**——让 Photoshop、VS Code 或视频编辑器等应用直接指向挂载磁盘上的文件。

## 浏览和管理文件

即使不挂载，RcloneView 的双栏资源管理器也能为 Spaces 提供强大的文件管理功能：

- 使用熟悉的树形导航 **浏览存储桶和文件夹**。
- 在 Spaces 与任意其他远程（Google Drive、S3、本地磁盘）之间 **拖放** 文件。
- **创建、重命名和删除** 文件与文件夹。
- **查看文件大小和日期**，便于管理。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces" class="img-large img-center" />

## 将 Spaces 与其他云存储同步

DigitalOcean Spaces 并非孤立存在。常见的工作流程包括：

### 在 Spaces 和 AWS S3 之间同步

在 AWS S3 中保留一份 Spaces 数据的备份（反之亦然）：

1. 创建一个以 Spaces 为源、S3 为目标的同步任务。
2. 将其调度为每晚运行。
3. 使用 [文件夹比较](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) 验证两侧内容是否一致。

### 在 Spaces 和本地开发文件夹之间同步

为你的 Spaces 资源保留一份本地开发副本：

1. 创建一个从 Spaces 到本地文件夹的同步任务。
2. 在本地进行编辑，然后同步回 Spaces。

### 从 Spaces 分发到多个云存储

使用 v1.3 的 [批量任务](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview)，在一个自动化流程中将 Spaces 内容复制到 Google Drive、OneDrive 和 S3。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync DigitalOcean Spaces with other clouds" class="img-large img-center" />

## 自动化 Spaces 工作流程

### 定时备份

设置一个每日复制任务，将你的 Spaces 存储桶备份到其他云存储或本地存储：

1. 在任务管理器中创建该任务。
2. 通过 [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) 进行调度。
3. 通过 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 或 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) 接收通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule DigitalOcean Spaces sync jobs" class="img-large img-center" />

### 性能优化建议

- **并行传输数**：8–16（Spaces 对高并发处理良好）。
- **块大小**：大文件建议使用 64MB。
- **快速列表（Fast-list）**：在大型存储桶上启用可加快目录列表速度。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用你的 API 密钥 **添加 Spaces** 作为 S3 兼容远程。
3. **挂载** 你的存储桶为本地磁盘，或在资源管理器中浏览。
4. 通过计划任务将其 **同步或备份** 到其他云存储。

不要再与 Web 控制台苦苦周旋。将你的 DigitalOcean Spaces 挂载为本地磁盘，像处理其他一切事物一样在桌面上处理你的文件。

---

**相关指南：**

- [添加 AWS S3 及 S3 兼容存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [将云存储挂载为本地磁盘](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [浏览与管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
