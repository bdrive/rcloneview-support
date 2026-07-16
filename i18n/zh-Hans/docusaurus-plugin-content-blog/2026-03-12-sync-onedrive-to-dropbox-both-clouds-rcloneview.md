---
slug: sync-onedrive-to-dropbox-both-clouds-rcloneview
title: "如何将 OneDrive 与 Dropbox 同步——使用 RcloneView 让两个平台保持更新"
authors:
  - tayson
description: "工作用 OneDrive、对接客户用 Dropbox？了解如何使用 RcloneView 在 OneDrive 与 Dropbox 之间自动同步特定文件夹。"
keywords:
  - sync onedrive dropbox
  - onedrive to dropbox
  - onedrive dropbox sync tool
  - transfer onedrive dropbox
  - keep onedrive dropbox in sync
  - onedrive dropbox bridge
  - onedrive dropbox transfer
  - multi cloud sync
  - onedrive dropbox backup
  - sync two cloud services
tags:
  - RcloneView
  - onedrive
  - dropbox
  - sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何将 OneDrive 与 Dropbox 同步——使用 RcloneView 让两个平台保持更新

> 你的公司使用 Microsoft 365，所以一切都在 OneDrive 上。但你的自由设计师坚持使用 Dropbox，你的会计也在用 Dropbox。于是你只能手动在两者之间复制文件。让我们来解决这个问题。

OneDrive 和 Dropbox 服务于不同的生态系统。Microsoft 365 用户主要使用 OneDrive；而创意从业者和许多小型企业更偏好 Dropbox。当你需要同时与这两类用户协作时，保持文件同步能为你节省大量手动操作的时间。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置步骤

### 1) 添加两个账户

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Dropbox" class="img-large img-center" />

### 2) 并排浏览

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive and Dropbox side by side" class="img-large img-center" />

### 3) 创建同步任务

在两个云盘之间同步特定的项目文件夹：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create OneDrive Dropbox sync" class="img-large img-center" />

### 4) 安排自动更新

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive Dropbox sync" class="img-large img-center" />

### 5) 验证同步状态

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Dropbox" class="img-large img-center" />

## 最佳实践

- **同步特定文件夹** —— 不要同步整个账户，只同步共享的项目文件夹。
- **使用复制实现单向传递** —— 将完成的文件推送到另一个平台。
- **使用过滤器** —— 排除临时文件、`.DS_Store` 以及 Office 锁定文件。
- **留意冲突** —— 两个平台都支持同时编辑，这可能导致同步冲突。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 OneDrive 和 Dropbox**。
3. **创建有针对性的同步任务**。
4. **安排计划并验证**。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [检测并解决同步冲突](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)
- [Rclone 过滤规则详解](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
