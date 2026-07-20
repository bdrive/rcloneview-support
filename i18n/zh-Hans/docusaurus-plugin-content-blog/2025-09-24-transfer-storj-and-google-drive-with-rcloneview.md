---
slug: transfer-storj-and-google-drive-with-rcloneview
title: "使用 RcloneView 在 Storj 和 Google Drive 之间传输文件"
authors:
  - tayson
description: "无需重新下载即可在 Storj 和 Google Drive 之间迁移数据——使用 RcloneView 的拖放、对比、同步和定时任务功能，配合 OAuth 与 Storj 访问授权。"
keywords:
  - storj to google drive
  - google drive to storj
  - rcloneview
  - cloud to cloud transfer
  - access grant
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - resumable uploads
  - s3 compatible storage
tags:
  - RcloneView
  - cloud-migration
  - storj
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 Storj 和 Google Drive 之间传输文件

> 无需接触命令行即可在 **Storj** 和 **Google Drive** 之间移动文件夹。RcloneView 提供并排的资源管理器窗格、对比、同步和定时任务，让云到云的传输保持快速且可预测。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么在 Storj ↔ Google Drive 之间使用 RcloneView？

- Google Drive 支持 OAuth 登录；Storj 支持访问授权（无需手动使用 CLI）。
- 多线程、可续传的传输，附带进度日志和重试功能。
- 双窗格资源管理器，支持拖放移动。
- 对比功能可在复制或删除前预览差异。
- 支持过滤器和试运行的同步，以及可复用的定时任务。
- 带宽限制和节流控制，让工作时段保持顺畅。

RcloneView 基于 rclone 构建，因此你无需编写脚本即可获得可靠性和高级选项。

## 开始之前

- 准备好你的 **Storj 访问授权**（包含加密范围）。请妥善保管。
- 登录 Google Drive，并注意其每个用户每天 750 GB 的上传上限。
- 安装最新版本的 RcloneView：[下载](https://rcloneview.com/src/download.html)。
- 对于大型传输，建议使用有线网络连接，并保持 RcloneView 运行。

## 步骤 1：连接你的云远程

1. 打开 **远程 → + 新建远程**。
2. 选择 **Storj** 并粘贴你的 **访问授权**。（如果使用单独的加密密码短语，请在选项中添加。）保存该远程。
3. 对 **Google Drive** 重复此操作，点击 **连接**，并完成 OAuth 浏览器登录。
4. 确认两个远程都出现在远程管理器中。

👉 了解更多：[添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)  
👉 管理远程：[远程管理器](/howto/rcloneview-basic/remote-manager/)

## 步骤 2：在资源管理器窗格中打开两个远程

1. 进入 **浏览**。
2. 在左侧窗格中，点击 **+** 并打开你的 **Storj** 远程。
3. 在右侧窗格中，点击 **+** 并打开你的 **Google Drive** 远程。
4. 导航到你想要移动的源和目标存储桶/文件夹。


## Storj ↔ Google Drive 传输的四种方法

### 方法 1：在窗格之间拖放

1. 在 Storj 窗格中选择文件或文件夹。
2. 将它们拖到 Google Drive 窗格中（或反向操作）。
3. 在 **传输** 标签页中跟踪进度；根据需要暂停/恢复。

👉 更多详情：[浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 方法 2：对比后再复制或删除

1. 在左侧打开源，在右侧打开目标。
2. 点击 **对比**。
3. RcloneView 会高亮显示唯一项、大小差异和匹配项。
4. 选择要移动的项目，然后选择 **复制 →** 或 **← 复制**。
5. 谨慎使用 **删除** 来清理重复项或旧数据。

👉 了解更多：[对比文件夹内容](/howto/rcloneview-basic/compare-folder-contents)

### 方法 3：同步或另存为定时任务

1. 选择你的 Storj 源和 Google Drive 目标。
2. 点击 **同步** 并选择单向或双向同步。
3. 预览更改，调整过滤器（包含/排除），然后开始。
4. 点击 **保存到任务** 以便日后复用该配置。

👉 了解更多：

- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)

### 方法 4：定时执行周期性同步任务

1. 打开 **任务管理器 → 添加任务**。
2. 将 **Storj** 设为源，**Google Drive** 设为目标（或反向）。
3. 选择一个时间表（每小时、每天、每周或类似 cron 的方式）。
4. 启用该任务，让 RcloneView 自动运行。
5. 检查日志和历史记录以验证是否成功。

👉 了解更多：[任务的定时与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

## 顺畅传输的小贴士

- 在进行大型同步之前，使用 **试运行** 来确认将会发生的更改。
- 对于 Storj，将访问授权的范围限定得尽量窄（针对特定存储桶）以提高安全性。
- 如果上传停滞，请降低并发数或设置带宽限制以减少节流。
- 当 Google Drive 接近每日上限时，将任务拆分到不同的天数或账户中执行。
- 留意 **传输** 标签页中的重试、速度和任何 API 消息。

## 总结

RcloneView 让 Storj ↔ Google Drive 迁移变得简单：连接远程、并排浏览、对比、同步，或安排周期性任务——全程无需使用命令行。

<CloudSupportGrid />
