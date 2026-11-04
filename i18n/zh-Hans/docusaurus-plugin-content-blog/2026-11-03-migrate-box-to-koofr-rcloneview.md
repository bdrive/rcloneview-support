---
slug: migrate-box-to-koofr-rcloneview
title: "从 Box 迁移到 Koofr — 使用 RcloneView 传输文件"
authors:
  - jay
description: "使用 RcloneView 从 Box 迁移到 Koofr：连接两个远程，先通过 Dry Run 预演传输，再执行云到云复制，并用 Folder Compare 验证结果。"
keywords:
  - 从 Box 迁移到 Koofr
  - Box 到 Koofr 传输
  - Box Koofr 迁移
  - RcloneView Box
  - RcloneView Koofr
  - 云到云传输
  - 从 Box 移动文件
  - Koofr 欧洲云存储
  - rclone GUI 迁移
  - Box Docs 过滤器
tags:
  - RcloneView
  - box
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 从 Box 迁移到 Koofr — 使用 RcloneView 传输文件

> 无需先下载到本地磁盘，即可将 Box 工作区迁移到 Koofr。

团队离开 Box 的原因有很多：项目结束、合同到期，或者更倾向于欧洲的存储服务商。Koofr 是一个自然的去处，但手动迁移多年积累的文件夹既缓慢又容易出错。RcloneView 在一个窗口中连接两个服务，并以云到云的方式执行复制，同时通过 Dry Run 和比较步骤确认没有遗漏。RcloneView 在 Windows、macOS 和 Linux 上，通过一个窗口即可挂载并同步 90 多个服务商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Box 和 Koofr 连接为远程

打开 Remote 选项卡并选择 New Remote。Box 通过 OAuth 登录：浏览器会打开，您批准访问后，RcloneView 会自动连接。如果您要迁移的是公司账户，Box for Business 需要在远程配置中设置 `box_sub_type = enterprise`。

以同样的方式将 Koofr 添加为第二个远程。两者都出现在 Remote Manager 中后，可以在两个 Explorer 面板中并排打开，在移动任何文件之前先浏览源端和目标端。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Box 和 Koofr 远程" class="img-large img-center" />

## 使用过滤器和 Dry Run 规划复制

Box 账户中通常包含比您想保留的文件更多的内容。同步向导的第 3 步可让您设置最大文件大小、最大文件时间或文件夹深度限制。还有预定义的 Box Docs 过滤器，以及自定义规则，例如排除 `.git/` 文件夹或 `.iso` 文件。

在运行任何操作之前，请先使用 Dry Run。它会列出将被复制和删除的文件，而不会更改任何一端。对于迁移，请选择 Copy 任务而不是镜像同步，这样即使目标端已有数据，Koofr 上的内容也不会被删除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 Box 到 Koofr 的云到云传输" class="img-large img-center" />

## 运行传输并查看进度

启动任务，并在 Transferring 选项卡中跟踪：进度、速度和文件数量都会实时显示。对于大型文件库，可在第 2 步中增加文件传输数量，但如果任一后端响应较慢，请将 equality checkers 数量保持在适中水平。"Retry entire sync if fails" 默认为 3，有助于应对暂时性网络错误。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 选项卡中监控从 Box 到 Koofr 的传输" class="img-large img-center" />

## 使用 Folder Compare 验证

任务完成后，将 Box 放在左侧、Koofr 放在右侧打开 Compare。仅左侧、仅右侧和不同文件的过滤器会准确显示剩余内容。使用 copy-right 操作传输遗漏的文件。Job History 会保存每次运行的状态、大小和文件数量，作为迁移记录。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="迁移后比较 Box 和 Koofr 文件夹" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 Box（OAuth）和 Koofr 添加为远程。
3. 创建带过滤器的 Copy 任务，然后运行 Dry Run。
4. 运行任务，然后使用 Folder Compare 确认结果。

在 Compare 显示两端一致之前，请不要动 Box 账户。

---

**相关指南：**

- [管理 Box 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Koofr 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 从 Box 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
