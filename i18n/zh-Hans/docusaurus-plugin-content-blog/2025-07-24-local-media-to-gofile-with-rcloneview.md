---
slug: local-media-to-gofile-with-rcloneview
title: 使用 RcloneView 将本地媒体移动并同步到 Gofile（无需命令行）
authors:
  - jay
description: 使用 RcloneView 友好的图形界面，将大型媒体库从硬盘上传、同步并管理到 Gofile——附带链接、去重和排期方面的技巧。
keywords:
  - rcloneview
  - gofile
  - media upload
  - hard drive to cloud
  - cloud file transfer
  - scheduled sync
  - rclone GUI
  - public links
tags:
  - gofile
  - media
  - cloud-file-transfer
  - sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将本地媒体移动并同步到 Gofile（无需命令行）

> 只需点击操作，无需命令，即可将媒体库从**硬盘**迁移到 **Gofile**，实现发布与保护。

## 简介 —— 为什么要将本地媒体托管到 Gofile？

如果你的视频剪辑、原始照片和音频母带只保存在单一硬盘上，一旦发生溢水或磁盘故障，它们随时可能消失。将媒体迁移到 **Gofile**，可以让你获得云端触达能力、便捷分享，并为工作站释放空间。借助 **RcloneView**，你可以在友好的图形界面中获得 rclone 的强大能力：连接、预览、复制和排期——无需使用终端。

<!-- truncate -->
### 认识 Gofile（概览）
- Gofile 是一个内容存储与分发平台，提供完善的 REST API 文档。你可以创建公开链接，并通过 API 令牌实现上传自动化。  [gofile.io](https://gofile.io/api)  
- rclone 提供了专用的 **Gofile** 后端：配置好你的**账户 API 令牌**后，即可列出、复制文件，甚至通过 `rclone link` 生成公开链接。*（注意：rclone 的 Gofile 后端需要 **付费高级版** Gofile 账户。）*  [Rclone](https://rclone.org/gofile/)

### 了解你的本地媒体库
- 媒体项目通常**体积庞大**（多为 GB 级）、目录层级复杂，且不同版本之间常有重复文件。  
- 优秀的工具至关重要：预览、选择性复制以及支持断点续传的传输方式，都是顺利完成迁移的关键。

### 为什么要从硬盘迁移到 Gofile？
- **易于分享**：为客户和协作者生成公开链接。
- **释放并备份**：在保留在线副本的同时，释放本地空间。  
- **工作流控制**：在渲染完成后安排推送任务，并保持文件夹同步。

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 第一步 —— 准备工作

上传之前：

1. **整理文件夹**（例如 `Footage/`、`Stills/`、`Masters/`），使任务保持清晰且可重复。  
2. **确定操作模式**：是对存档进行一次性复制、对进行中的项目做持续同步，还是设置每晚定时任务。  


## 第二步 —— 在 RcloneView 中连接 Gofile

RcloneView 将 rclone 的配置过程封装为一套引导式流程。

1. 打开 **RcloneView** → 点击 **`+ New Remote`**  
2. 选择 **Gofile**，然后粘贴你从 Gofile **My Profile** 页面获取的**账户 API 令牌**。*（需要付费高级版账户才能使用 rclone 连接。）* 
3. 为其命名（例如 `MyGofile`）并保存。  

🔍 参考指南：[添加 Gofile 远程](/howto/remote-storage-connection-settings/gofile) 

<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />

## 第三步 —— 执行传输

RcloneView 提供三种清晰的方式来迁移并维护你的媒体，建议从小规模开始，再逐步扩大。

### A）拖放操作（手动、临时使用）
- 在左侧打开你的**本地**媒体，右侧打开 **Gofile**，然后**跨窗口拖拽文件夹/文件**——简单直观。  

👉 了解更多：[使用拖放方式复制文件](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B）比较并复制（预览变更）
- 使用**比较**功能，在复制之前查看新增或已更改的内容，减少意外与重试。  

👉 了解更多：[比较并管理文件](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results in RcloneView showing changed files" class="img-medium img-center" />

### C）同步与排期任务（自动化）
- 使用**同步**功能，将本地 **Projects** 文件夹镜像到 Gofile。  
- 先进行**演练（Dry-run）**，然后保存为可复用的任务并设置排期（例如每晚执行）。  

👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [任务排期与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved job in RcloneView" class="img-medium img-center" />

**实用技巧**
- 如果 Gofile 在某个文件夹中检测到**重复名称**，同步过程可能会产生较多冗余提示——上传后可使用 rclone 的 **dedupe** 功能清理冲突。 
- 需要**分享链接**吗？rclone 的 `link` 命令可以以编程方式创建公开链接（属于进阶/命令行操作）。 

---

## 结语 —— 回顾与补充要点

- **你能获得什么**：更安全的存储、更便捷的分享，以及本地硬盘上更少的杂乱文件。  
- **具体如何实现**：RcloneView 通过 API 令牌配置 **Gofile**，随后你可以选择**拖放**、**比较**或**同步**——并借助**排期**功能实现无人值守的维护。 

## 常见问题

**问：使用 rclone/RcloneView 是否需要 Gofile 付费高级版账户？**  
**答：** 是的——rclone 的 Gofile 后端需要**付费高级版** Gofile 账户，以及从 **My Profile** 页面获取的**账户 API 令牌**。 

**问：我可以为上传的内容生成公开分享链接吗？**  
**答：** 可以。RcloneView 支持通过 `link` 创建公开链接（可针对文件或文件夹；文件夹可以打包为 ZIP 下载；部分后端支持设置过期时间）。


**准备好以你自己的方式，将媒体库搬到线上了吗？**  

<CloudSupportGrid />

