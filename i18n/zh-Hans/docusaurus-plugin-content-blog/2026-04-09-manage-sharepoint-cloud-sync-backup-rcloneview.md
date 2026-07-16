---
slug: manage-sharepoint-cloud-sync-backup-rcloneview
title: "使用 RcloneView 管理 SharePoint 文件与云同步"
authors:
  - tayson
description: "使用 RcloneView 管理 SharePoint Online 文件。通过可视化图形界面，在 SharePoint 文档库与其他云存储提供商之间同步、备份和传输数据。"
keywords:
  - rcloneview
  - sharepoint sync rcloneview
  - sharepoint backup
  - sharepoint file manager
  - sharepoint cloud sync tool
  - sharepoint to google drive
  - sharepoint rclone gui
  - sharepoint document library backup
  - sharepoint multi-cloud
  - sharepoint automated backup
tags:
  - sharepoint
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 SharePoint 文件与云同步

> SharePoint Online 为 Microsoft 365 的文档管理提供了核心支持，但要将其内容同步到外部云或 NAS，需要一款专用工具——**RcloneView** 正好填补了这一空白。

SharePoint Online 是数百万使用 Microsoft 365 的组织的文档管理骨干。每个 SharePoint 站点都包含用于存储团队文件、项目资产和公司记录的文档库。虽然原生的 OneDrive 同步客户端可以将 SharePoint 库同步到本地计算机，但它没有提供将数据复制到 AWS S3、Google Drive 或外部存储的机制。RcloneView 通过 Microsoft Graph API 连接到 SharePoint Online，并将文档库暴露为可导航的远程——在 SharePoint 与任何其他提供商之间浏览、同步、复制、移动并计划备份。

无论您是需要将合规敏感的库备份到不可变的 S3 存储,还是需要将离职团队的 SharePoint 站点迁移到 Google Workspace,RcloneView 都能通过可视化界面完成这些操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 SharePoint

RcloneView 中的 SharePoint 远程通过 OneDrive 远程类型进行配置。在 OAuth 授权过程中，选择 **SharePoint site** 而不是 OneDrive 个人版或商业版。RcloneView 会向 Graph API 查询可用站点，并让您选择目标站点和文档库。

每个文档库都会作为单独的可导航路径出现。如果您的组织拥有数十个 SharePoint 站点——市场部、工程部、法务部、人力资源部——您可以将每个站点添加为单独的远程，或在单个远程配置中切换不同的库。

SharePoint 的 API 限流模式与 OneDrive for Business 相同——返回带有 Retry-After 标头的 429 响应。RcloneView 会自动遵循这些限制，使用指数退避策略确保大型传输无需人工干预即可完成。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a SharePoint remote in RcloneView Remote Manager" class="img-large img-center" />

## 浏览 SharePoint 文档库

SharePoint 文档库可以包含嵌套的文件夹结构、元数据列和多版本文件。RcloneView 的浏览器以其熟悉的双栏布局显示文件夹树和文件列表。您可以浏览深层文件夹结构，跨多个文件夹选择文件，并执行批量操作——复制、移动、删除或下载。

SharePoint 强制执行的文件名限制比许多其他提供商更严格。像 `#`、`%` 和 `*` 这样的字符是不允许的，路径长度限制为 400 个字符。当从限制较少的提供商（如 Google Drive 或本地文件系统）同步到 SharePoint 时，RcloneView 会自动编码或替换受限字符，以防止传输失败。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing SharePoint document libraries in RcloneView two-pane explorer" class="img-large img-center" />

## 将 SharePoint 同步到其他云存储提供商

组织经常需要将 SharePoint 数据复制到外部系统——用于灾难恢复的辅助云、用于本地访问的 NAS，或在平台迁移期间使用的不同云套件。RcloneView 使这一过程变得简单。

在一个窗格中打开您的 SharePoint 库,在另一个窗格中打开目标位置(AWS S3、Google Drive、Backblaze B2 或本地路径)。RcloneView 会根据文件大小和修改时间比较文件列表，仅传输已更改的文件。对于包含数千个文件的初始迁移，多线程传输和可配置的分块大小可以保持整个过程的高效性。

SharePoint 使用 QuickXorHash 存储文件哈希值,这与 OneDrive for Business 使用的算法相同。RcloneView 原生支持 QuickXorHash,无需下载文件内容进行比较即可实现精确的增量检测。

## 计划自动化 SharePoint 备份

SharePoint 内置的保留策略和回收站提供了一定程度的保护，但它们仅在 Microsoft 生态系统内运行。一旦勒索软件攻击破坏了您的 Microsoft 365 租户,SharePoint 数据可能会和其他一切数据一样受到影响。独立备份到另一个提供商是最强的保护措施。

RcloneView 的计划程序可以自动完成这项工作。配置一个从 SharePoint 文档库到启用了版本控制的 AWS S3 的夜间同步任务，其余的交给 RcloneView 处理即可。任务历史面板会记录每次运行的传输统计信息，方便您验证备份是否成功完成。

对于受合规驱动的组织，将计划的 SharePoint 备份与 S3 对象锁定或 Backblaze B2 的文件锁定功能配对，可以创建满足数据保留监管要求的不可变归档。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated SharePoint backup in RcloneView" class="img-large img-center" />

## 比较文件夹并验证迁移

在同步或迁移 SharePoint 库后，使用 RcloneView 的比较功能来验证完整性。选择 SharePoint 源和备份目标，RcloneView 会高亮显示仅存在于一侧的文件、存在差异的文件以及完全相同的文件。这种可视化验证消除了猜测，并确保在停用原始库之前数据的完整性。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SharePoint library with backup destination in RcloneView" class="img-large img-center" />

## 将 SharePoint 挂载为本地驱动器

RcloneView 可以将 SharePoint 文档库挂载为本地驱动器盘符(Windows)或挂载点(macOS/Linux)。这使您可以从任何桌面应用程序——CAD 软件、图像编辑器或分析工具——访问 SharePoint 文件，而无需承担 OneDrive 同步客户端的开销。

启用 VFS 缓存可以在本地存储最近访问过的文件，以实现快速的重复访问。这对于需要在不原生支持云存储的应用程序中处理 SharePoint 托管文件的团队尤其有用。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting SharePoint as a local drive in RcloneView" class="img-large img-center" />

## 监控传输

大型 SharePoint 迁移可能涉及数十万个文件。RcloneView 的实时监控仪表盘会显示传输速度、每个文件的进度以及整体完成情况。您可以单独暂停、恢复或取消传输。带宽限制可以防止 SharePoint 传输在工作时间占用您的全部网络连接。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time SharePoint transfer monitoring in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 授权您的 Microsoft 365 账户，并选择 SharePoint 站点和文档库。
3. 在双栏浏览器中浏览您的 SharePoint 库，并设置到另一个提供商的同步或复制任务。
4. 计划每日备份，以在 S3、B2 或其他云上维护独立副本。

SharePoint 负责 Microsoft 365 内部的文档管理，而 RcloneView 则确保您的 SharePoint 数据在您使用的每一个云中都得到备份、便于迁移并可随时访问。

---

**相关指南：**

- [通过浏览器登录方式添加远程（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
