---
slug: migrate-onedrive-to-google-drive-rcloneview
title: "如何将文件从 OneDrive 迁移到 Google Drive —— 使用 RcloneView 的分步传输指南"
authors:
  - tayson
description: "正在从 Microsoft 365 切换到 Google Workspace？了解如何使用 RcloneView 将所有文件从 OneDrive 迁移到 Google Drive，同时保留文件夹结构。"
keywords:
  - migrate onedrive to google drive
  - onedrive to google drive transfer
  - switch microsoft 365 to google workspace
  - move files onedrive google drive
  - onedrive google drive migration tool
  - cloud migration tool
  - onedrive to gdrive sync
  - transfer onedrive files
  - microsoft to google migration
  - onedrive migration tool
tags:
  - onedrive
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何将文件从 OneDrive 迁移到 Google Drive —— 使用 RcloneView 的分步传输指南

> 您的组织正在迁移到 Google Workspace。现在您需要将数 TB 的 OneDrive 文件移动到 Google Drive，同时不打断团队的工作流程。以下是正确的操作方法。

无论您是要切换办公套件、整合云账户，还是维护并行备份，从 OneDrive 迁移到 Google Drive 都需要仔细规划。RcloneView 会为您完成繁重的工作 —— 直接进行云到云传输，保留您的文件夹结构，并自动处理文件格式差异。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么不直接下载再重新上传？

手动方式 —— 先从 OneDrive 下载，再上传到 Google Drive —— 存在严重的缺点：

- **需要本地磁盘空间**来存放整个数据集。
- **耗时加倍** —— 需要先下载再上传，而不是直接传输。
- **无法增量更新** —— 传输过程中的任何变更都会丢失。
- **在大型数据集上容易失败** —— 浏览器上传在超过几 GB 的文件上会失败。

RcloneView 直接在云之间进行传输，只需要带宽，不需要本地存储。

## 迁移步骤

### 1) 连接两个账户

在 RcloneView 中添加 OneDrive 和 Google Drive 作为远程：

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Google Drive remotes" class="img-large img-center" />

### 2) 评估和规划

并排浏览两个云存储：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OneDrive and Google Drive side by side" class="img-large img-center" />

在迁移之前，请检查：

- **总容量** —— 需要迁移多少数据？
- **文件类型** —— Office 文档会自动转换（见下文）。
- **共享文件夹** —— OneDrive 共享项目需要单独处理。
- **路径长度** —— Google Drive 有 400 个字符的路径长度限制。

### 3) 文件格式处理

传输时，Office 文档可以原样上传到 Google Drive。Google Drive 原生支持打开 `.docx`、`.xlsx` 和 `.pptx` 文件。迁移后，您也可以选择将它们转换为 Google 原生格式。

| OneDrive 格式 | Google Drive 处理方式 |
|-----------------|---------------------|
| .docx | 原生打开或转换为 Google Docs |
| .xlsx | 原生打开或转换为 Google Sheets |
| .pptx | 原生打开或转换为 Google Slides |
| 图片、PDF | 原样传输 |

### 4) 运行迁移

创建一个从 OneDrive 到 Google Drive 的**复制**任务：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OneDrive to Google Drive migration" class="img-large img-center" />

使用**复制**而不是同步 —— 它只会添加文件，不会删除目标端的文件。

### 5) 监控进度

实时观察迁移过程：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

### 6) 验证

迁移完成后对比两端：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## 处理特殊情况

### SharePoint 文档库

SharePoint 库与个人 OneDrive 是分开的。在 RcloneView 中将 SharePoint 添加为单独的远程，以迁移团队站点。

### 企业版 OneDrive 与个人版 OneDrive

如果从企业版 OneDrive 迁移，其 OAuth 设置与个人版 OneDrive 不同。RcloneView 会引导您完成这两种身份验证流程。

### 大型迁移（500 GB 以上）

对于非常大的数据集：

- **分批迁移** —— 先迁移关键文件夹，再迁移次要数据。
- **使用过滤规则** —— 按文件类型或日期设置优先级。
- **安排在非高峰时段** —— 在夜间/周末运行，以避免触发速率限制。
- **启用重试** —— v1.3 的重试功能可以处理临时性故障。

### 过渡期间

在团队过渡期间保持两个云存储同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

安排从 OneDrive → Google Drive 的每日同步，直到所有人都完成切换。

## 迁移后检查清单

1. **验证文件数量** —— 文件夹对比可以确认所有文件都已传输。
2. **测试文件访问** —— 在 Google Drive 上打开关键文档。
3. **更新共享设置** —— 在 Google Drive 上与团队成员重新共享文件夹。
4. **更新应用集成** —— 将脚本、工具和工作流指向 Google Drive。
5. **保留 OneDrive 处于活跃状态** —— 将旧账户保留 30 天作为安全保障。
6. **停用** —— 确认一切正常运行后，取消 OneDrive 订阅。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 OneDrive 和 Google Drive** 作为远程。
3. **运行复制任务**以传输文件。
4. **使用文件夹对比进行验证**。
5. 在过渡期间**安排增量同步**。

迁移本身已经足够让人紧张，不应该再为丢失文件而担心。让 RcloneView 处理传输工作，您则可以专注于过渡计划。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [将 Google Drive 迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
