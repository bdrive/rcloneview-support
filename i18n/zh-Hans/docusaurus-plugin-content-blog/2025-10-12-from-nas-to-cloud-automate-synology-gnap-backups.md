---
slug: from-nas-to-cloud-automate-synology-qnap-backups
title: "从 NAS 到云端：使用 RcloneView 自动化 Synology 和 QNAP 备份"
authors:
  - steve
description: 使用 RcloneView 将您的 Synology 或 QNAP NAS 备份到 Google Drive、OneDrive、S3 或任何受支持的云存储。轻松设置定时同步、监控任务并保留异地副本——无需命令行。
keywords:
  - Synology cloud backup
  - QNAP cloud sync
  - NAS off-site backup
  - WebDAV
  - Rclone NAS setup
  - rcloneview
  - cloud backup automation
tags:
  - nas
  - synology
  - qnap
  - cloud-backup
  - webdav
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 从 NAS 到云端：使用 RcloneView 自动化 Synology 和 QNAP 备份

> 无需任何脚本即可保护您的 NAS 数据。使用 **RcloneView** 将 **Synology** 或 **QNAP** 设备直接连接到您喜爱的云存储——**Google Drive**、**OneDrive**、**Amazon S3** 或 **WebDAV**——并安排自动异地备份。

## 为什么要将 NAS 备份到云端

Synology 和 QNAP 等 NAS 系统非常适合本地存储、媒体库和文件共享——但它们仍然容易受到失窃、火灾或硬件故障的影响。异地云备份增加了关键的保护层，确保即使您的 NAS 出现问题，数据也能保存下来。

**RcloneView** 为 NAS 用户提供了一种简单的方式来自动化这一过程，具备：
- **无需命令行设置**
- **拖放式传输**
- **可视化同步预览**
- **定时备份**
- **支持 40+ 云存储提供商**

<!-- truncate -->

### 常见的 NAS 到云端工作流

| NAS 类型 | 推荐云存储 | 协议 | 理想使用场景 |
|---|---|---|---|
| **Synology** | Google Drive、OneDrive、S3 | WebDAV / S3 | 个人或小型企业备份 |
| **QNAP** | Amazon S3、Backblaze B2、Dropbox | S3 / WebDAV | 媒体和项目归档 |
| **两者皆可** | Cloudflare R2、Wasabi、pCloud | S3 兼容 | 经济实惠的长期存储 |

> 将本地速度与云端弹性结合——**RcloneView** 在一个 GUI 中连接您的 NAS 和云端。

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 第 1 步 — 准备工作

在开始设置备份之前：

1. **在您的 NAS 上启用网络访问**  
   - 对于 **Synology**，在 DSM 中启用 **WebDAV Server** 或 **S3 兼容服务**。  
   - 对于 **QNAP**，使用 **Hybrid Backup Sync (HBS3)** 或在 App Center 中启用 **WebDAV/S3**。  

2. **规划您的备份目标**  
   - `/homes/` 或 `/photo/` 用于个人数据  
   - `/projects/` 或 `/shared/` 用于团队文件夹  

3. **检查所选云存储提供商的可用存储空间**。  

4. **确定您的计划** — 每日同步、每周归档，或持续镜像。  

🔍 有用的指南：  
- [在 RcloneView 中通过 WebDAV 连接 NAS](/howto/remote-storage-connection-settings/webdav)  
- [添加 S3 兼容远程存储（Wasabi、Cloudflare R2 等）](/howto/remote-storage-connection-settings/s3)  

---

## 第 2 步 — 在 RcloneView 中连接您的 NAS 和云存储

RcloneView 的设置向导使连接 NAS 和云账户变得简单直接。

1. 打开 **RcloneView** → 点击 **`+ New Remote`**。  
2. 选择您的**云存储提供商**（例如 Google Drive、OneDrive、Amazon S3、Wasabi）。  
3. 按照登录或 API 密钥提示操作，然后为其命名一个易识别的名称（例如 `MyS3Backup` 或 `Drive-Archive`）。  
4. 在左侧的 **Local** 标签中，浏览到您**挂载的 NAS 目录**，或使用 WebDAV 或其他受支持的协议连接到您的 NAS。
5. 确认双方（本地 NAS 和云端远程存储）都显示在 Explorer 面板中。

---

## 第 3 步 — 自动化您的 NAS → 云端备份

选择适合您工作流的方式：

### A) **拖放（一次性复制）**  
将文件夹从 NAS 一侧拖到云端远程存储窗格以快速上传。非常适合临时备份或小型归档。  

👉 了解更多：[使用拖放复制文件](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

---

### B) **比较并复制（增量更新）**  
在同步前预览新增、更改或缺失的内容。仅复制更新过的文件以最大限度减少带宽占用。  

👉 了解更多：[比较结果并管理文件](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files in RcloneView" class="img-medium img-center" />

---

### C) **同步与定时任务（全自动备份）**  
设置一个**同步任务（Sync Job）**，自动将您的 NAS 镜像到云端。  
先运行**演练（dry-run）**，然后配置循环计划（例如每晚或每周）。  

👉 了解更多：  
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)  
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)  
- [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a scheduled NAS to Cloud backup job" class="img-medium img-center" />

---

## 专业提示

- **使用 WebDAV 以求简单** — 大多数 NAS 系统原生支持该协议。  
- **监控您的带宽** — 安排在非高峰时段进行备份。  
- **拆分大型数据集** — 先备份关键文件夹，再处理归档数据。  
- **启用加密** — 为敏感数据添加 rclone 的 `crypt` 层。  
- **测试恢复** — 确认云端数据可以正常下载和打开。  

---

## 结论 — 轻松实现异地数据的安心保障

- **为什么重要：** 您的 NAS 保存着最重要的数据——将其备份到云端可以保护它免受物理故障的影响。  
- **工作原理：** RcloneView 通过 WebDAV 或 S3 连接您的 NAS，同步到云端，并自动化循环任务。  
- **您将获得：** 一个安全、可扩展、免人工干预且完全透明的备份流程。

不再需要脚本或 SSH 命令——**RcloneView** 让 NAS 到云端的备份成为一键式工作流程。

---

## 常见问题

**Q. 我可以使用 RcloneView 同时备份 Synology 和 QNAP 吗？**  
**A.** 可以——任何支持 **WebDAV**、**S3** 或 **SMB** 集成的 NAS 都可以连接到 RcloneView。

**Q. 哪些云服务最适合 NAS 备份？**  
**A.** Google Drive 和 OneDrive 适合一般用途；S3 兼容存储（Wasabi、R2、Backblaze）适合大型或长期归档。

**Q. 我需要命令行经验吗？**  
**A.** 完全不需要——RcloneView 通过其 GUI 处理所有 rclone 配置。

**Q. 我可以多频繁地安排备份？**  
**A.** 您可以随心所欲——每日、每小时，甚至持续同步。

**Q. 我可以加密 NAS 备份吗？**  
**A.** 可以——在 RcloneView 中使用 rclone 的 `crypt` 后端，在云备份之上添加加密。

**准备好自动化您的 NAS 到云端备份，从此告别手动上传了吗？**

<CloudSupportGrid />
