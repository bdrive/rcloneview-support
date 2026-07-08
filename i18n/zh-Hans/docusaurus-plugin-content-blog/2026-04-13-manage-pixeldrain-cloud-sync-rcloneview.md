---
slug: manage-pixeldrain-cloud-sync-rcloneview
title: "管理 Pixeldrain 云存储 —— 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "将 Pixeldrain 连接到 RcloneView，浏览您托管的文件并将其同步到其他云服务商，以便进行备份或长期归档。"
keywords:
  - Pixeldrain RcloneView
  - Pixeldrain 云同步
  - Pixeldrain 备份
  - 管理 Pixeldrain 文件
  - Pixeldrain rclone GUI
  - Pixeldrain 文件传输
  - Pixeldrain 云备份
  - Pixeldrain 同步设置
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

# 管理 Pixeldrain 云存储 —— 使用 RcloneView 同步和备份文件

> Pixeldrain 是一款具有个人云存储功能的文件托管服务 —— RcloneView 将其与您更广泛的云生态系统连接起来，便于备份和有序的文件管理。

Pixeldrain 是一个文件分享与托管平台，同时也可作为个人云存储使用，让用户能够上传、整理和分享文件。虽然其网页界面涵盖了基本操作，但对于需要将 Pixeldrain 内容同步到其他云服务，或将文件下载到本地进行归档的用户来说，一款专用工具会更加实用。RcloneView 将 Pixeldrain 列为其支持的服务商之一，因此您可以将其与其他远程一同连接，并在同一界面中管理传输。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Pixeldrain 连接到 RcloneView

打开 RcloneView，导航至**远程管理器（Remote Manager）**。点击**新建远程（New Remote）**，在服务商列表中滚动查找 **Pixeldrain**。连接需要使用您的 Pixeldrain API 密钥，您可以在 Pixeldrain 网站的账户设置中生成该密钥。在配置表单中输入 API 密钥并保存。

保存后，在文件浏览器中打开该远程。您的 Pixeldrain 文件和目录将加载到面板中，可供浏览和传输。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Pixeldrain remote in RcloneView" class="img-large img-center" />

## 浏览和整理文件

RcloneView 文件浏览器使用与其他所有服务商相同的树状视图和列表视图来显示您的 Pixeldrain 存储。您可以浏览目录、选择文件，并使用右键菜单进行复制、移动或删除操作。对于图片较多的文件集合，可以切换到**缩略图视图（Thumbnail View）**，以网格形式查看预览 —— 如果您在 Pixeldrain 上托管照片或截图，并希望在传输前先识别内容，这项功能会非常实用。

打开指向另一个远程（Google Drive、Backblaze B2 或本地文件夹）的第二个面板，即可在 Pixeldrain 与目标位置之间直接拖放文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Pixeldrain folders with another cloud in RcloneView" class="img-large img-center" />

## 创建备份任务

要对您的 Pixeldrain 内容进行系统化备份，请使用**任务（Job）**功能。前往**任务（Jobs）**，点击**新建任务（New Job）**，将 Pixeldrain 设置为源。选择任意已配置的远程作为目标。在任务向导的第 2 步中，配置传输选项：

- **传输数量（Number of transfers）**：同时传输的文件数量
- **模拟运行（Dry Run）**：预览将要复制的内容，而不实际移动任何文件
- **校验和验证（Checksum verification）**：启用后可在传输完成后确认数据完整性

运行任务后，RcloneView 会实时显示传输速度和文件数量的进度。任务完成后，结果将记录在**任务历史（Job History）**中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Pixeldrain files to another cloud provider" class="img-large img-center" />

## 使用文件夹对比进行验证

将内容从 Pixeldrain 迁移到其他云服务后，**文件夹对比（Folder Compare）**工具可以让您确信传输已完整完成。同时打开 Pixeldrain 源文件夹和目标文件夹，RcloneView 会高亮显示仅存在于一侧或大小不同的文件。当您分多次会话完成迁移，并希望确认没有遗漏任何内容时，这一功能尤其有用。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Pixeldrain sync records" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 pixeldrain.com 的账户设置中生成您的 Pixeldrain API 密钥。
3. 打开**远程管理器（Remote Manager）**，点击**新建远程（New Remote）**，选择 **Pixeldrain**，并输入您的 API 密钥。
4. 浏览您的文件，并配置一个备份任务，将其传输到您偏好的目标云。

RcloneView 让您能够轻松地将 Pixeldrain 内容迁移到更有条理的长期存储方案中。

---

**相关指南：**

- [使用 RcloneView 进行云到云迁移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [修复云同步传输后文件丢失问题](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [任务历史与传输日志监控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
