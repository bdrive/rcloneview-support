---
slug: migrate-box-to-sharepoint-onedrive-rcloneview
title: "如何从 Box 迁移到 SharePoint 或 OneDrive——使用 RcloneView 进行企业级云迁移"
authors:
  - tayson
description: "正在从 Box 迁移到 Microsoft 365？了解如何使用 RcloneView 将文件从 Box 迁移到 SharePoint Online 或 OneDrive for Business，同时保留文件夹结构。"
keywords:
  - migrate box to sharepoint
  - box to onedrive migration
  - box to microsoft 365 transfer
  - box sharepoint migration tool
  - move files from box
  - box migration tool
  - enterprise cloud migration
  - box to office 365
  - box data migration
  - box alternative migration
tags:
  - box
  - sharepoint
  - onedrive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何从 Box 迁移到 SharePoint 或 OneDrive——使用 RcloneView 进行企业级云迁移

> 你的公司决定整合到 Microsoft 365。第一步：将所有文件从 Box 迁移到 SharePoint 和 OneDrive。第二步：在此过程中不丢失任何数据。

Box 一直是企业文件共享的主力工具，但许多组织正在围绕 Microsoft 365 整合其云生态系统。从 Box 迁移到 SharePoint Online 或 OneDrive for Business 是一项重大项目——尤其是当你需要处理多年积累的数据、复杂的文件夹结构和共享工作区时。RcloneView 让这一切变得可控。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 迁移规划

### 评估你的 Box 环境

在迁移之前，先盘点你现有的内容：

- **个人文件夹** → 迁移到各自的 OneDrive 账户。
- **共享文件夹/工作区** → 迁移到 SharePoint 文档库。
- **归档数据** → 考虑迁移到更廉价的存储（S3、B2），而不是 SharePoint。
- **数据总量** —— 决定迁移的时间表和方案。

### 目标映射

| Box 源 | Microsoft 365 目标 |
|-----------|--------------------------|
| My Files | OneDrive for Business |
| Shared Folders | SharePoint 团队站点 |
| Department Folders | SharePoint 文档库 |
| Archive/Cold Data | OneDrive 或 Azure Blob Storage |

## 分步迁移

### 1) 添加 Box 和 Microsoft 远程

在 RcloneView 中连接两项服务：

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and SharePoint remotes" class="img-large img-center" />

对于 SharePoint，将其添加为 OneDrive Business 远程，并指定 SharePoint 站点 URL。

### 2) 浏览并对比

在左侧打开 Box，右侧打开 SharePoint/OneDrive：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Box and SharePoint side by side" class="img-large img-center" />

### 3) 分阶段传输

不要试图一次性迁移所有内容。按优先级划分：

**阶段一：活跃项目** —— 用户每天需要用到的文件。
**阶段二：共享工作区** —— 团队文件夹和协作空间。
**阶段三：归档** —— 旧项目和历史数据。

### 4) 运行复制任务

为每个阶段创建复制（Copy）任务：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Box to SharePoint migration job" class="img-large img-center" />

### 5) 验证每个阶段

每个阶段完成后，对比源和目标：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to SharePoint migration" class="img-large img-center" />

## 处理限制

### 文件名限制

SharePoint/OneDrive 的命名规则比 Box 更严格：

- 不允许使用的字符：`" * : < > ? / \ |`
- 文件名不能以空格开头或结尾。
- 最大路径长度：400 个字符。

Rclone 会在传输过程中自动处理许多此类转换。

### Box Notes

Box Notes 是专有格式，在 Microsoft 365 中没有直接对应的产品。它们需要导出为 PDF，或手动复制到 OneNote/Word 中。

### 权限和共享

RcloneView 传输文件，但不传输共享权限。迁移完成后，你需要在 SharePoint/OneDrive 上重新设置共享。请将此作为一个单独的步骤来规划。

### 速率限制

Box 和 SharePoint 都有 API 速率限制：

- **Box**：因套餐而异（通常为每秒 10–20 个请求）。
- **SharePoint**：微软会根据使用模式进行限流。

RcloneView 会遵守这些限制。对于大型迁移，建议在非高峰时段安排传输，并使用重试功能（v1.3）。

## 在过渡期间保持 Box 和 SharePoint 同步

并非所有人都会在同一天完成切换。安排同步任务，使两个平台保持内容一致：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync during Box to SharePoint transition" class="img-large img-center" />

这能让你的团队有时间逐步过渡，而不会出现数据缺口。

## 监控大型传输

企业迁移通常涉及数 TB 的数据。请监控进度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Box to SharePoint migration" class="img-large img-center" />

## 使用批量任务实现迁移工作流

使用 v1.3 批量任务（Batch Jobs）自动化整个迁移流程：

1. 复制 Box → SharePoint（活跃项目）。
2. 复制 Box → OneDrive（个人文件）。
3. 对比 Box 与 SharePoint 以进行验证。
4. 完成后发送 Slack 通知。

## 迁移后操作

1. **验证所有文件** —— 运行最终的文件夹对比。
2. **设置 SharePoint 权限** —— 重建共享结构。
3. **培训团队** —— 帮助用户在新位置找到自己的文件。
4. **监控 30 天** —— 保持 Box 处于活跃状态作为备用方案。
5. **停用 Box** —— 在确认一切稳定后再取消订阅。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Box 和 SharePoint/OneDrive** 作为远程。
3. **规划你的迁移阶段**。
4. **为每个阶段运行复制任务**。
5. 每个阶段完成后，**使用文件夹对比进行验证**。
6. 在过渡期间**安排同步任务**。

企业级迁移不必意味着企业级的复杂度。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
