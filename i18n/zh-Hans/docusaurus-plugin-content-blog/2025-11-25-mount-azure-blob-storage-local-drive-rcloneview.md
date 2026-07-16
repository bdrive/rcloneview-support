---
slug: mount-azure-blob-storage-local-drive-rcloneview
title: "在 Windows 和 macOS 上通过 RcloneView 将 Azure Blob Storage 映射为本地磁盘"
authors:
  - tayson
description: 借助 RcloneView 的图形界面、VFS 缓存和调度器,将 Azure Blob 容器变成真正的盘符或 /Volumes 挂载点——无需 CLI 脚本。
keywords:
  - rcloneview
  - azure blob storage mount
  - map azure drive letter
  - mount azure blob mac
  - rclone mount gui
  - azure storage explorer alternative
  - blob to local drive
  - winfsp
  - macfuse
tags:
  - azure
  - mount
  - windows
  - macos
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Windows 和 macOS 上通过 RcloneView 将 Azure Blob Storage 映射为本地磁盘

> 用两次点击的挂载操作取代脚本和 Storage Explorer:RcloneView 可将 Azure Blob 容器变成真正的本地磁盘,并在 Windows、macOS 和 Linux 上提供缓存、缓冲和自动重新挂载功能。

Azure Blob 非常适合用来存放媒体文件、备份和静态资源——但将其挂载为快速、可靠的磁盘却并不容易。`rclone mount` 参数、WinFsp/macFUSE 的安装、共享访问签名(SAS)以及重连脚本很快就会变得复杂起来。

RcloneView 将这一切都封装进了图形界面:只需添加一次 Azure 远程,选择一个盘符或 `/Volumes` 路径,为缩略图和媒体查看开启 VFS 缓存,再让调度器在登录时自动重新挂载即可。全程无需使用 CLI。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 为什么选择用 RcloneView 挂载 Azure Blob,而不是脚本

- **零 CLI**:远程管理器会为你创建 Azure 远程并安全地存储凭据(参见[远程管理器](/howto/rcloneview-basic/remote-manager))。
- **跨平台一致性**:Windows(WinFsp)、macOS(macFUSE)、Linux(FUSE)均使用同一套界面。
- **真实的磁盘映射**:任意容器均可在 Windows 上映射为盘符,或在 macOS 上映射为 `/Volumes/Azure`。
- **内置性能优化**:挂载对话框中提供 VFS 缓存、缩略图流式传输、预读和缓冲等功能(参见[将云存储挂载为本地磁盘](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive))。
- **自动化与监控**:启动时自动挂载、故障时自动重连,以及实时吞吐量图表(参见[作业调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)和[实时传输监控](/howto/rcloneview-basic/real-time-transfer-monitoring))。

## 分步指南——将 Azure Blob 映射为本地磁盘

### 1)准备 Azure 凭据

- 创建一个存储账户和一个 Blob 容器。
- 生成 **Access Key** 或 **SAS token**(生产环境建议使用最小权限原则)。
- 记下你要挂载的 **账户名称** 和 **容器名称**。

### 2)添加 Azure 远程

- 打开 **远程管理器** → **添加远程** → 选择 **S3 兼容**(可配合 Azure Blob 的 S3 网关使用)或 **WebDAV**(如果使用该端点)。
- 对于 **S3 兼容**:
  - **Provider**:Custom / S3-compatible
  - **Endpoint**:`https://<account>.blob.core.windows.net`
  - **Region**:留空或填写占位值 `us-east-1`
  - **Access Key / Secret**:你的 Azure 密钥或由 SAS 派生的密钥对
- 保存该远程。请在[常规设置](/howto/rcloneview-basic/general-settings)中使用一个强 **配置密码**。

### 3)创建挂载作业

- 在 **挂载管理器**(或资源管理器工具栏)中,点击 **挂载**。
- 选择你的 Azure 远程,并指定容器路径(例如 `azure:media-assets`)。
- 选择挂载目标:
  - Windows → `Z:`(或任意空闲盘符)
  - macOS → `/Volumes/AzureMedia`
  - Linux → `/mnt/azure-media`
- - 打开 **启动时自动挂载** 开关,以便 RcloneView 在重启后自动重新连接。
   
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />


### 4)调整 VFS 缓存和缓冲区

- **缓存模式**:缩略图、预览和媒体查看请选择 `Full`。
- **缓存目录**:指向一个 SSD 文件夹。
- **预读**:浏览照片/视频时设置为 4–8 MB;处理 4K 及以上的工作负载时可适当增大。
- **回写/缓冲**:大文件顺序上传时启用;如果与他人共享上行带宽,请设置带宽上限。

## 使用场景

- **设计与媒体团队**:将大型素材库保存在 Blob 中,同时通过缓存读取实现本地编辑。
- **开发/测试环境**:挂载构建产物或静态站点以实现快速迭代。
- **数据采集**:将物联网数据或日志导出直接写入 Blob,无需通过浏览器上传。
- **混合云工作流**:在同一个面板中,于 Azure、S3、Google Drive 和 NAS 之间拖放文件。
- **备份暂存**:在归档到 Glacier/R2 之前,将 Blob 挂载为廉价的热存储。

## 性能优化建议

- 对于大型媒体/照片库,请将 **缓存模式** 设置为 **Full**。
- 使用 **NVMe/SSD 缓存目录**,并保留数 GB 的空闲空间。
- 顺序读写时增大 **预读** 和 **缓冲区大小**;处理随机小文件时则适当调低。
- 对于分布式团队,可将挂载与 **调度器** 搭配使用,以便每天刷新或预热缓存。
- 在[实时传输监控](/howto/rcloneview-basic/real-time-transfer-monitoring)中观察吞吐量,以发现限速问题。



## 故障排查

- **403 或身份验证错误**:重新签发 SAS/密钥,并确认端点为 `https://<account>.blob.core.windows.net`。
- **列表加载缓慢**:增大 VFS 缓存大小和预读值;确保缓存路径位于 SSD 上。
- **睡眠后挂载消失**:启用自动挂载,并开启调度器的"重启失败的作业"选项。
- **macOS 权限问题**:允许 macFUSE 的授权提示,然后通过挂载管理器重新挂载。

## 结论——将 Azure Blob 打造成一流的磁盘

借助 RcloneView,Azure Blob 就像原生磁盘一样好用:拥有盘符或 `/Volumes` 挂载点、智能缓存和自动化功能——全程无需 CLI 脚本。只需添加一次容器,根据你的工作负载调整 VFS 设置,即可在一个控制面板中管理你的自托管存储和多云存储。

<CloudSupportGrid />
