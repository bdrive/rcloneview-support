---
slug: migrate-koofr-to-onedrive-rcloneview
title: "将 Koofr 迁移到 OneDrive — 使用 RcloneView 传输文件"
authors:
  - jay
description: "使用 RcloneView 将文件从 Koofr 迁移到 Microsoft OneDrive。这是一份可视化、分步骤的指南，助您安全、准确地完成云到云迁移。"
keywords:
  - Koofr to OneDrive migration
  - migrate Koofr to OneDrive
  - Koofr OneDrive transfer
  - cloud to cloud migration
  - RcloneView Koofr
  - RcloneView OneDrive
  - rclone Koofr OneDrive GUI
  - cloud file migration tool
  - OneDrive migration software
  - Koofr cloud transfer
tags:
  - koofr
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Koofr 迁移到 OneDrive — 使用 RcloneView 传输文件

> RcloneView 让从 Koofr 迁移到 Microsoft OneDrive 变得简单且可验证——内置文件夹对比、试运行预览和实时传输监控功能。

Koofr 是一家注重隐私的欧洲云存储服务商，深受重视数据主权和简洁界面的用户欢迎。而 OneDrive 与 Microsoft 365 紧密集成，通常是团队在统一使用 Word、Excel 和 Teams 协作工具时的迁移目标。在这两个服务商之间迁移数据并不只是简单地复制文件——真正的挑战在于可靠地完成迁移：保留嵌套的文件夹结构、处理文件名的边界情况，并确认每个文件都完整送达。RcloneView 以可视化方式管理整个迁移过程，直接连接两个服务商，无需将数据经由本地磁盘中转。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Koofr 和 OneDrive

两个远程存储都通过 RcloneView **远程 (Remote)** 标签页中的**新建远程 (New Remote)** 向导进行设置。首先从服务商列表中选择 Koofr 并输入您的账户凭据来添加它。然后添加 OneDrive——它使用 OAuth 身份验证，因此会打开一个浏览器窗口，您使用 Microsoft 账户登录，连接便会自动建立，无需手动处理令牌。

两个远程存储保存后，会在双栏文件浏览器中显示为独立的标签页。在左侧面板打开 Koofr，右侧面板打开 OneDrive，即可并排查看两边的文件夹树。对于正在迁移共享项目层级结构的团队来说，这种布局立刻就能派上用场：您可以在移动任何文件之前，先确认 OneDrive 上的目标文件夹结构与预期一致。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and OneDrive remotes in RcloneView" class="img-large img-center" />

## 迁移前的内容审查

RcloneView 的**文件夹对比 (Folder Compare)** 工具（从**主页 (Home)** 标签页启动）是预检云迁移的有效方式。将其指向左侧的 Koofr 源文件夹和右侧对应的 OneDrive 目标文件夹。对比视图会对每个文件进行分类：仅左侧存在（尚未同步到 OneDrive）、仅右侧存在（已存在，或来自之前的部分迁移）、相同（大小一致）或不同（大小不匹配，提示存在潜在冲突）。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Koofr and OneDrive folder contents before migration in RcloneView" class="img-large img-center" />

对于正在迁移数千份文档和设计文件的团队来说，这一对比步骤能够提前发现那些通常要等到几周后才以支持工单形式暴露出来的问题——比如因路径中的特殊字符而静默失败的文件夹，或是之前尝试迁移时已部分完成的文件。一旦对比确认源和目标处于预期状态，即可继续进行同步任务。

## 执行云到云传输

在**任务管理器 (Job Manager)** 中创建新任务，将 Koofr 文件夹设为源，目标 OneDrive 文件夹设为目的地，并选择**同步 (Sync)** 作为任务类型。RcloneView 会直接在两个服务商之间传输文件：数据从 Koofr 流向 OneDrive，无需在本地暂存，这样您的网络带宽占用只与云到云的传输路径相关，而不必将所有内容下载两次。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer from Koofr to OneDrive in RcloneView" class="img-large img-center" />

在高级设置步骤中，启用**校验和验证 (checksum verification)** 以检测传输过程中可能出现的任何损坏。首先执行一次**试运行 (Dry Run)**——它会在实际移动任何文件之前，预览将要复制或删除的完整文件列表，让您有最后的机会在提交任务前发现意外的删除或路径不匹配问题。

## 监控进度并确认完成

**传输中 (Transferring)** 标签页会在任务运行期间实时显示传输速度、已处理文件数和已传输的总字节数。任务完成后，**任务历史 (Job History)** 日志会记录每次运行的开始时间、耗时、传输大小以及最终状态。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Koofr to OneDrive migration progress in RcloneView" class="img-large img-center" />

迁移完成后再运行一次**文件夹对比 (Folder Compare)**，并筛选出“仅左侧存在”的文件。如果数量为零，说明迁移已完成。如果还有文件残留，对比视图会准确显示是哪些文件，这样您就可以针对特定子文件夹重新运行任务，而不必重新迁移整个数据集。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过**远程标签页 > 新建远程**添加您的 Koofr 远程，并输入账户凭据。
3. 使用 OAuth 浏览器登录添加您的 OneDrive 远程——无需手动处理令牌。
4. 使用**文件夹对比**审查源和目标，然后在提交完整迁移之前先执行一次试运行同步。

使用 RcloneView 从 Koofr 迁移到 OneDrive，可为您提供完整的审计追踪——从迁移前的对比到任务历史日志——让您能够自信地确认每个文件都成功完成了迁移之旅。

---

**相关指南：**

- [使用 RcloneView 将 Koofr 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [使用 RcloneView 将 Koofr 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)
- [使用 RcloneView 将 Box 迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
