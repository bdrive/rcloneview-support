---
slug: cloud-to-synology-nas-with-rcloneview
title: "云端到 NAS 桥接：使用 RcloneView 将 Google Drive 和 OneDrive 备份到 Synology"
authors:
  - jay
description: 使用 RcloneView 点击优先的工作流——拖放传输、可视化对比和定时同步，无需命令行,即可将文件从云盘（如 Google Drive、OneDrive）移动并同步到您的 Synology NAS。
keywords:
  - rcloneview
  - synology nas
  - google drive backup
  - onedrive backup
  - cloud to nas
  - webdav
  - sftp
  - rclone GUI
  - scheduled sync
tags:
  - synology
  - google-drive
  - onedrive
  - cloud-file-transfer
---



import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 云端到 NAS 桥接：使用 RcloneView 将 Google Drive 和 OneDrive 备份到 Synology

> 保留本地安全副本，掌控您的数据。使用简洁、点击式的工作流——无需命令行,将您的**云存储**镜像到 **Synology NAS**。

## 云端到 NAS,聪明的做法——为什么重要

云存储便于协作和随时随地访问。但在 Synology NAS 上保留**第二份本地副本**,能为您提供版本化备份、局域网速度的恢复,以及不依赖任何单一提供商的独立性。借助 **RcloneView**,您可以连接常见的云服务（例如 **Google Drive**、**OneDrive**,以及 rclone 支持的更多服务）和您的 NAS,然后在同一个界面中**预览、复制和调度**任务。

<!-- truncate -->

**了解云盘（速览）**  
- 非常适合实时协作和共享。  
- 提供商端的限制/配额可能影响大规模迁移（请分批规划）。  

**了解 Synology NAS（速览）**  
- 您在家中或办公室的常开存储中心。  
- 可通过 **SMB/NFS**（挂载为本地文件夹）,或 **WebDAV**、**SFTP** 等网络协议访问。  
- 非常适合集中备份、媒体托管和长期归档。

**为什么要将云端迁移到 NAS？**  
- **韧性**：保留一份您可控的离线可用副本。  
- **速度**：在局域网上快速恢复大文件夹,无需等待互联网带宽。  
- **治理**：在本地统一保留策略、访问权限和审计。

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## 第一步 – 准备工作

开始之前：

1. **确定范围** — Google Drive/OneDrive 中的哪些文件夹需要保留在 NAS 上？  
2. **确认 NAS 容量** — 确保有足够的可用空间,并准备好目标共享/文件夹。  
3. **选择 NAS 的连接方式**  

   - **WebDAV**：启用 Synology **WebDAV Server**,然后在 RcloneView 中通过 WebDAV 连接。  
   - **SMB**：启用 Synology **SMB**,然后在 RcloneView 中通过 SMB 连接。  
   - **SFTP**：在 Synology 上启用 SSH/SFTP,并通过 **SFTP** 连接。  
4. **规划节奏** — 一次性迁移、定期同步,还是每晚定时任务。  
5. **注意提供商限制** — 大批量迁移可能需要分批处理，建议先进行一次测试运行。

🔍 有用的教程： 

- [RcloneView 与 Synology NAS 集成](/tutorials/synology-nas-cloud-transfer)

## 第二步 – 在 RcloneView 中配置连接

RcloneView 将 rclone 的配置过程封装为引导式、点击操作的流程。

1. 打开 **RcloneView** → 点击 **`+ New Remote`**  
2. 添加您的**云盘**  
   - **Google Drive**：OAuth 登录 → 命名（例如 `MyGoogleDrive`）  
   - **OneDrive**：OAuth 登录 → 命名（例如 `MyOneDrive`）  
   - （rclone 支持的其他远程也可用类似方式添加）  
3. 使用以下**任一**方式添加您的 **Synology NAS 目标**：  
   - **WebDAV**：来自 Synology WebDAV Server 的端点、凭据 → 命名（例如 `MyNAS-WebDAV`）  
   - **SMB**：NAS 主机 IP、端口、账号 → 命名（例如 `MyNAS-SMB`）  
   - **SFTP**：NAS 主机名/IP、端口、账号 → 命名（例如 `MyNAS-SFTP`）  
4. 确认两者都并排显示在 Explorer 面板中。

🔍 有用的指南：  
- [RcloneView 与 Synology NAS 集成](/tutorials/synology-nas-cloud-transfer)
- [如何添加 Google Drive 远程](https://rcloneview.com/support/howto/intro#step-2-adding-remote-storage-google-drive-example)  
- [快速 OAuth 设置（OneDrive/Google）](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)


<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 第三步 – 运行备份/同步任务

RcloneView 提供三种实用方法。从小处着手,再逐步扩展。

### A) 拖放（手动复制）
- 在一侧打开 **Google Drive/OneDrive**,在另一侧打开您的 **NAS** 目标,然后**跨窗口拖动文件夹/文件**。  
- 非常适合有选择性的迁移和快速上手。  

👉 了解更多：[使用拖放复制文件](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 对比与复制（预览变更）
- 运行**对比**功能,查看云端与 NAS 之间新增/变化的内容。  
- 仅复制发生变化的部分——减少意外,节省时间。  

👉 了解更多：[对比与管理文件](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) 同步与定时任务（自动化）
- 使用**同步**功能将选定的云端文件夹镜像到您的 NAS 共享目录。  
- 先进行**试运行**,再将其保存为可重复使用的**任务**,并添加调度计划（每晚/每周）。  

👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

## 结语 — 关键要点与附加建议

- **为什么这样做**：拥有一份您可控的第二份副本、更快的局域网恢复速度,以及统一的数据保留策略。  
- **工作原理**：RcloneView 让您连接云盘和 Synology NAS,然后通过**拖放**、**对比**或**同步**进行操作——并支持**定时调度**以实现无人值守的备份。  
- **安全扩展**：先进行试点,遵守提供商配额限制,并监控任务日志以保持清晰的审计记录。

## 常见问题

**问：RcloneView 能否自动运行定期备份？**  
**答：** 可以——将您的同步保存为**任务**并设置调度（例如每晚执行）。您可以在任务管理器中查看历史记录和状态。

**问：iCloud 怎么办？**  
**答：** Rclone 支持许多提供商。对于没有直接后端支持的服务,可以考虑先将数据导出到本地,再使用 RcloneView 将其迁移到您的 NAS。


**准备好为您的云端数据保留一份可靠的本地副本了吗？**  


<!-- Obsidian note: Download 컴포넌트 -->
<CloudSupportGrid />
