---
slug: manage-vultr-object-storage-cloud-sync-backup-rcloneview
title: "管理 Vultr 对象存储 —— 使用 RcloneView 同步和备份文件"
authors:
  - alex
description: "将 Vultr 对象存储连接到 RcloneView，通过图形界面管理您的 S3 兼容存储桶 —— 无需任何命令行即可同步、备份、挂载和自动化传输。"
keywords:
  - Vultr 对象存储
  - RcloneView Vultr
  - Vultr S3 兼容备份
  - Vultr 云同步 GUI
  - S3 兼容对象存储管理工具
  - Vultr 存储桶同步
  - 对象存储备份工具
  - Vultr 云文件传输
  - Vultr 云管理
  - S3 兼容 GUI rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Vultr 对象存储 —— 使用 RcloneView 同步和备份文件

> RcloneView 连接到 Vultr 对象存储的 S3 兼容 API，为您提供一个完整的图形界面，用于浏览存储桶、安排备份计划以及将云存储挂载为本地磁盘。

Vultr 对象存储是基于 Vultr 云基础设施构建的 S3 兼容对象存储服务，深受需要全球分布式、经济高效存储、并搭配 Vultr 计算产品使用的开发者和基础设施团队的青睐。虽然该服务在编程配置上很简单，但通过命令行进行日常文件管理或编写自定义脚本，是大多数团队都想避免的麻烦。RcloneView 通过将 Vultr 存储桶视为普通远程存储来解决这一问题——您可以在分屏文件浏览器中浏览它们，通过向导设置定期同步任务，并实时监控传输情况，而无需编写任何一条 rclone 命令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Vultr 对象存储

将 Vultr 添加到 RcloneView 使用标准的 S3 兼容设置流程。打开 **Remote** 选项卡并点击 **New Remote**，然后选择 **Amazon S3** 作为提供商类型。输入您的 Vultr 对象存储访问密钥（Access Key）和私密密钥（Secret Key）——这些可以在 Vultr 控制面板中您的对象存储实例的凭据部分找到。在 **Endpoint** 字段中，粘贴 Vultr 控制面板中显示的终端节点 URL（每个数据中心区域都有各自的终端节点 URL）。区域字段保留为 `auto` 或留空即可；Vultr 会根据终端节点自动处理路由。

保存后，您的 Vultr 存储桶会作为顶级文件夹出现在 RcloneView 的 Explorer 面板中。通过面包屑路径栏浏览对象前缀，在列表视图和缩略图视图之间切换，并一目了然地查看文件名、大小和修改日期。双面板布局允许您在一个面板中打开 Vultr，在另一个面板中打开本地文件夹、NAS 路径或其他云存储——使拖放上传、下载和跨提供商复制变得简单直接。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Vultr Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView 最多可同时显示四个 Explorer 面板，这在多个 Vultr 区域之间移动数据，或在 Vultr 与 Backblaze B2 等提供商之间交叉上传时非常有用。

## 将文件同步和备份到 Vultr 对象存储

RcloneView 中的自动化备份任务遵循一个 4 步向导。选择您的源——本地文件夹、外部驱动器或其他云端远程存储——并选择 Vultr 存储桶作为目标。为任务命名，选择单向同步以将数据镜像到 Vultr，然后配置过滤和高级选项。增加并发传输数量可以为诸如软件团队每晚备份构建产物（数百个小文件）之类的工作负载提升吞吐速度。启用校验和比对可确保每个文件都逐字节完整到达，这在归档编译后的二进制文件或数据库转储时尤为重要。

在首次正式运行之前，点击 **Dry Run** 预览将要传输或删除的完整文件列表。这项安全检查可以防止在共享存储桶中发生意外删除。确认无误后，点击 **Run**——RcloneView 底部的 Transferring 选项卡会实时显示文件数量、传输速度和总字节数。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Vultr Object Storage in RcloneView" class="img-large img-center" />

RcloneView PLUS 用户可以使用类似 crontab 的规则安排任务——例如，每周一到周五凌晨 03:00 执行的夜间备份——并接收完成通知。

## 将 Vultr 存储挂载为本地磁盘

RcloneView 的挂载功能可让您将 Vultr 存储桶直接挂载为本地盘符（Windows）或挂载点（macOS/Linux），使任何应用程序都能访问它，而无需明确的同步步骤。从 Remote 选项卡打开 **Mount Manager**，点击 **New Mount**，选择您的 Vultr 远程存储，然后选择要暴露的存储桶或子文件夹。对于大多数工作负载，将 VFS 缓存模式设置为 **writes**，然后点击 **Save and Mount**。

该存储桶会作为本地卷出现。例如，一个直接将构建产物写入挂载驱动器的 CI 流水线，完全不需要了解 Vultr 的 API——它像写入本地磁盘一样写入文件，而 rclone 会在后台透明地处理上传。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Vultr Object Storage bucket as a local drive using RcloneView's Mount Manager" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Vultr 控制面板中，打开您的对象存储实例，复制访问密钥（Access Key）、私密密钥（Secret Key）和终端节点 URL。
3. 在 RcloneView 中，进入 **Remote tab → New Remote → Amazon S3**，输入您的凭据和 Vultr 终端节点，然后保存。
4. 在 Explorer 面板中浏览您的存储桶，或通过 **Job Manager** 配置自动化备份任务。

连接完成后，Vultr 对象存储便可无缝集成到您在 RcloneView 中管理的任何多云工作流中——与本地存储、NAS 以及其他云提供商一起，统一呈现在单一界面中。

---

**相关指南：**

- [使用 RcloneView 将 Vultr 对象存储同步到 Google Drive](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2 云存储](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 将 Amazon S3 存储桶挂载为本地磁盘](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
