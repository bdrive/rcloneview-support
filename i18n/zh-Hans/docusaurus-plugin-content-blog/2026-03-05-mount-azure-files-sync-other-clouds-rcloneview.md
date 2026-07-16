---
slug: mount-azure-files-sync-other-clouds-rcloneview
title: "使用 RcloneView 将 Azure Files 挂载为本地驱动器并与其他云同步"
authors:
  - tayson
description: "在桌面上将 Azure Files 共享作为本地驱动器访问,然后通过 RcloneView 的可视化界面同步或备份到 AWS S3、Google Drive 或其他云。"
keywords:
  - azure files mount local
  - azure files sync
  - azure files to s3
  - azure files gui
  - azure files local drive
  - mount azure file share
  - azure files backup
  - azure files multi-cloud
  - azure smb mount
  - azure files rclone
tags:
  - RcloneView
  - azure-files
  - cloud-storage
  - mount
  - sync
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Azure Files 挂载为本地驱动器并与其他云同步

> Azure Files 为您提供云端完全托管的 SMB 文件共享。但从桌面访问它们,或与非 Azure 存储同步,仍然需要一些变通方法。RcloneView 让这两者都变得简单。

Azure Files 是 Microsoft 的托管文件共享服务——非常适合平移式迁移、共享应用程序存储,以及替代本地文件服务器。但当您需要在没有 VPN 的情况下从桌面访问这些共享,或将它们与 AWS S3 或 Google Drive 同步时,Azure 的原生工具就显得力不从心。RcloneView 原生连接 Azure Files,让您可以将共享挂载为本地驱动器,并与 70 多个云存储提供商中的任意一个同步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure Files 与 Azure Blob——有什么区别?

Azure 提供两种主要的存储服务,它们的用途各不相同:

- **Azure Blob Storage** —— 用于非结构化数据(图像、视频、备份)的对象存储。通过 REST API 访问。已在[之前的指南](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)中介绍过。
- **Azure Files** —— 托管的 SMB/NFS 文件共享。表现得像传统的网络驱动器。支持目录结构、文件锁定和 POSIX 权限。

如果您的数据在 Azure Files(SMB 共享)中,那么本指南适合您。

## 连接 Azure Files

1. 打开 RcloneView 并点击 **Add Remote**。
2. 根据您的访问方式,从提供商列表中选择 **Azure Files**(或 **SMB**)。
3. 输入连接详情:
   - **Storage Account Name**:您的 Azure 存储账户。
   - **Share Name**:具体的文件共享。
   - **Account Key or SAS Token**:来自 Azure 门户的身份验证凭据。
4. 保存——现在您的 Azure 文件共享即可浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Add Azure Files as remote in RcloneView" class="img-large img-center" />

## 挂载为本地驱动器

像访问普通文件夹一样访问您的 Azure Files 共享:

1. 在资源管理器中浏览到您的 Azure Files 远程。
2. 选择要挂载的共享或子文件夹。
3. 右键点击 → **Mount**(或使用 Mount Manager 进行高级选项设置)。
4. 选择一个本地挂载点。
5. 您的 Azure 文件共享将作为驱动器出现在桌面上。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Azure Files as local drive" class="img-large img-center" />

### 挂载 Azure Files 的使用场景

- **直接编辑文档** —— 在挂载的驱动器上打开 Word、Excel 和 PowerPoint 文件。
- **开发工作流** —— 将您的 IDE 指向 Azure Files 以访问共享代码库。
- **媒体访问** —— 无需下载即可浏览和预览图像、视频和音频。
- **应用程序配置** —— 让应用程序无需自定义代码即可从 Azure Files 读取配置。

## 将 Azure Files 与其他云同步

### Azure Files → AWS S3

多云冗余——在 S3 中保留一份 Azure Files 数据的副本:

1. 创建一个同步任务:Azure Files → S3 存储桶。
2. 设置为每日或每周执行。
3. 使用[文件夹比较](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)进行验证。

### Azure Files → Google Drive

与 Google Workspace 用户共享 Azure Files 内容:

1. 创建一个复制任务:Azure Files → Google Drive 文件夹。
2. 使用过滤器仅同步相关文件夹。
3. 设置定期更新的计划。

### Azure Files → 本地 NAS

保留本地缓存副本以实现更快的访问:

1. 创建一个同步任务:Azure Files → NAS 共享文件夹。
2. 提供快速的局域网访问,同时 Azure Files 仍作为数据的权威来源。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync Azure Files with other clouds" class="img-large img-center" />

## 浏览和管理文件

RcloneView 的双栏资源管理器为您提供一个真正的 Azure Files 文件管理器:

- 浏览目录层级结构。
- 在 Azure Files 与任何其他远程之间拖放。
- 创建、重命名、删除文件和文件夹。
- 查看大小和修改日期。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files with Azure Files" class="img-large img-center" />

## 自动化与监控

### 定时备份

自动将 Azure Files 备份到另一个云:

1. 创建您的复制或同步任务。
2. 使用[任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)设置计划。
3. 通过 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 在任务完成或失败时获取提醒。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Azure Files sync" class="img-large img-center" />

### 传输监控

实时跟踪大型 Azure Files 传输的进度:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Azure Files transfer" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用您的存储账户凭据**添加 Azure Files** 作为远程。
3. **挂载**共享为本地驱动器,或在资源管理器中浏览。
4. **同步**到 S3、Google Drive 或 NAS 以实现多云冗余。
5. **设置计划**以实现自动化、免人工的备份。

Azure Files 非常适合托管文件共享。而 RcloneView 让它在其他方面也同样出色——本地访问、多云同步和自动化备份。

---

**相关指南:**

- [将 Azure Blob Storage 挂载为本地驱动器](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [浏览与管理远程](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
