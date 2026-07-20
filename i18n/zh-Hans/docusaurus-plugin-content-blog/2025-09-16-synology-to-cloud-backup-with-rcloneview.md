---
slug: synology-to-cloud-backup-with-rcloneview
title: "Synology → 云端，轻松搞定：使用 RcloneView 进行异地备份与同步"
authors:
  - jay
description: 使用 RcloneView 的 GUI 保护您的 Synology NAS，将其异地备份到 Backblaze、Google Drive、Amazon S3、pCloud、Wasabi 等——轻松规划、预览并自动执行。
keywords:
  - rcloneview
  - synology nas backup
  - backblaze b2
  - google drive
  - amazon s3
  - wasabi
  - pcloud
  - cloud backup
  - scheduled sync
  - rclone GUI
tags:
  - RcloneView
  - synology
  - cloud-backup
  - s3
  - google-drive
  - Backblaze
  - wasabi
  - pcloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology → 云端，轻松搞定：使用 RcloneView 进行异地备份与同步

> 无需脚本或终端，即可在异地保留第二份副本。将您的 **Synology NAS** 备份到 **Backblaze、Google Drive、Amazon S3、pCloud、Wasabi** 等——可视化、可靠，并按计划自动执行。

## 简介 — 为什么要将 Synology 备份推送到异地？

NAS 非常适合快速的本地访问——家庭照片、创意项目和团队共享文件仅需一个局域网即可访问。但**仅依赖本地存储**存在风险：失窃、火灾、误删除或多硬盘故障。添加**异地云端副本**可以为您带来：

<!-- truncate -->

- **韧性**：在本地灾难发生时，凭借远程、可恢复的副本幸存下来。
- **灵活性**：即使您不在办公室/家中，也能随时随地恢复数据。
- **治理能力**：将 NAS 的保留策略与云存储桶的版本控制和策略相结合。

**Synology NAS 概览**
- 通过 **SMB/NFS**（挂载为本地文件夹）或 **WebDAV**、**SFTP** 等网络端点访问的中央存储。
- 非常适合全天候备份、媒体托管和团队文件中心。

**云端目的地概览**
- **Google Drive**：Google Workspace 中的协作与共享。
- **Amazon S3 / Wasabi / Backblaze B2**：具备存储桶、区域和生命周期规则的对象存储。
- **pCloud**：用户友好、文件处理能力出色的存储服务。

**为什么现在就要将 NAS 数据发送到云端？**
- 建立**异地安全网**。
- 将备份**标准化**到单一目的地（或多云）。
- 利用许多云平台提供的**策略与版本控制**功能。

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## 步骤 1 — 准备工作

开始之前：

1. **确定范围** — Synology 上的哪些共享文件夹（例如 `/photo`、`/projects`、`/backup`）将上传到云端？
2. **确认云端容量** — 确保目标账户或存储桶有足够的空间（并为版本预留余量）。
3. **选择 NAS 连接方式**
   - **本地路径**：在您的操作系统上通过 **SMB/NFS** 挂载 NAS 共享，并在 RcloneView 中将其用作**本地**存储。
   - **WebDAV**：启用 Synology 的 **WebDAV Server**，并在 RcloneView 中通过 WebDAV 连接。
   - **SFTP**：在 Synology 上启用 SSH/SFTP，并通过 **SFTP** 连接。
4. **选择您的云端** — Google Drive、Amazon S3/Wasabi、Backblaze B2、pCloud 等。
5. **确定执行频率** — 一次性归档、定期同步，或**每晚定时任务**。
6. **先进行试点** — 运行一次小规模测试，验证路径、权限和吞吐量。

🔍 有用的概览：
- [云端 ↔ Synology 教程](/tutorials/synology-nas-cloud-transfer)


## 3) 步骤 2 — 在 RcloneView 中连接远程存储

RcloneView 将 rclone 的配置封装成一个引导式的点击流程。

1. 打开 **RcloneView** → 点击 **`+ New Remote`**
2. **添加 Synology（源）**，方式如下之一：
   - **本地**：选择您挂载的 NAS 文件夹（例如 `Z:\NAS\Projects` 或 `/Volumes/NAS/Projects`）
   - **WebDAV**：使用 Synology 的 WebDAV 端点/凭据 → 为其命名（例如 `NAS-WebDAV`）
   - **SFTP**：主机/IP、端口和账户 → 为其命名（例如 `NAS-SFTP`）
3. **添加云端（目的地）**，例如：
   - **Google Drive**：OAuth 登录 → 命名为 `MyGoogleDrive`
   - **Amazon S3 / Wasabi**：**S3** 提供商 → 访问密钥/密钥、区域、存储桶 → 命名为 `MyS3` / `MyWasabi`
   - **Backblaze B2**：**B2** 提供商（如适用，也可使用 S3 兼容端点）→ 命名为 `MyB2`
   - **pCloud**：登录/令牌流程 → 命名为 `MyPcloud`
4. 确认两者在资源管理器窗格中并排显示。

🔍 有用的指南：
- [快速 OAuth 设置（Google Drive 等）](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [添加 S3 远程存储（Amazon S3/Wasabi）](/howto/remote-storage-connection-settings/s3)
- [云端 ↔ Synology 教程](/tutorials/synology-nas-cloud-transfer)

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 4) 步骤 3 — 执行备份/同步（三种实用方法）

RcloneView 提供三种简单直接的方法。从小处着手，然后逐步放心扩展。

### A) 拖放（手动复制）
- 在一侧打开 **Synology（本地/WebDAV/SFTP）**，在另一侧打开您的**云端**，然后**跨窗格拖动文件夹/文件**。
- 非常适合选择性移动和快速上手。

👉 了解更多：[使用拖放复制文件](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 比较与复制（预览更改）
- 运行**比较**功能，查看 NAS 与云端存储桶/云盘之间的新增或变更内容。
- 仅复制差异内容——减少意外，加快执行速度。

👉 了解更多：[比较并管理文件](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) 同步与计划任务（自动化）
- 使用**同步**功能，将选定的 NAS 文件夹镜像到您的云端目的地。
- 先进行**演练（Dry-run）**，然后将其保存为可复用的**任务**并添加计划（每晚/每周）。

👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

**专业提示**
- 对于 **S3 类型的云端**（S3/Wasabi/B2 S3 兼容存储），请预先创建存储桶并选择正确的区域。
- 在受支持的存储桶上启用**版本控制**，以便更安全地回滚。
- 在切换期间保持 NAS 源为**只读**，以防止数据漂移。
- 使用过滤器从备份中排除缓存/临时文件夹。


## 5) 结论 — 关键要点与额外提示

- **为什么这样做**：建立持久的异地安全网、更快的灾难恢复选项，以及统一的保留策略。
- **工作原理**：RcloneView 连接您的 Synology NAS 和云端目的地，然后让您可以**拖放**、**比较**或**同步**——并通过**计划任务**实现无人值守备份。
- **安全扩展**：先进行试点，遵守提供商的配额限制，并监控任务日志以获得清晰的审计追踪。


## 常见问题

**问：我可以备份到多个云端吗？**
**答：** 可以——添加多个目的地（例如 S3 和 Google Drive），并为每个目的地创建单独的任务或计划。

**问：我需要使用命令行吗？**
**答：** 不需要。RcloneView 是一个完整的 GUI——无需命令行即可配置远程存储、预览更改、运行同步并调度任务。


**准备好让您的 Synology 备份实现异地自动化、尽在掌控了吗？**

<CloudSupportGrid />
