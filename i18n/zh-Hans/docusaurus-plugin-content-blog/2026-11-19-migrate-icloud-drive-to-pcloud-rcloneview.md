---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "将 iCloud Drive 迁移到 pCloud — 用 RcloneView 传输文件"
authors:
  - jay
description: "使用 RcloneView 将文件从 iCloud Drive 移动到 pCloud。连接两个云，用 Dry Run 预览复制，在云之间直接传输，并用 Folder Compare 验证。"
keywords:
  - iCloud Drive 迁移到 pCloud
  - iCloud Drive 到 pCloud 传输
  - 从 iCloud Drive 移动文件
  - iCloud Drive 迁移工具
  - pCloud 迁移
  - 云到云传输
  - rcloneview icloud drive
  - rcloneview pcloud
  - rclone gui icloud drive
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 iCloud Drive 迁移到 pCloud — 用 RcloneView 传输文件

> 使用可以预览、观察和验证的复制任务，把 iCloud Drive 文件夹移入 pCloud，无需先把所有内容暂存到本地磁盘。

人们从 iCloud Drive 转向 pCloud 的原因很实际：家里混用 Windows、Linux 和 Mac 设备，或者自由职业者希望有一个在每台桌面电脑上表现一致的存储账户。iCloud Drive 没有内置的导出到其他云服务的功能，因此大多数迁移都变成了"先全部下载到 Mac，再重新上传"。RcloneView 同时连接两个服务，并通过 rclone 在它们之间复制文件，因此可以在一个窗口中完成云到云的传输。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 iCloud Drive 和 pCloud 连接为远程

iCloud Drive 支持需要 rclone v1.69 或更高版本。RcloneView 自带满足此要求的内置 rclone 二进制文件，因此无需额外安装。打开 Remote 选项卡，点击 **New Remote**，选择 iCloud Drive，然后输入您的 Apple 账户凭据。接着添加 pCloud。它通过浏览器 OAuth 登录，因此无需生成任何 API 密钥。

两个远程都连接好后，并排打开两个 Explorer 面板。右键点击 iCloud Drive 的顶层文件夹并选择 **Get Size**，即可查看要移动的数据量。这个数字能让您在复制第一个文件之前就知道 pCloud 套餐是否有足够空间。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

## 创建复制任务并用 Dry Run 预览

对于迁移，**Copy** 任务是稳妥的选择：它只向 pCloud 添加文件，绝不删除那里的任何内容。只有当 pCloud 必须与 iCloud Drive 完全镜像（包括删除）时，才选择 **Sync**。

在 Job Manager 中，以 iCloud Drive 文件夹为源、pCloud 文件夹为目标创建任务。在 Step 2 中，将重试设置保持为默认值 3，这样连接中断时运行不会结束。Step 3 让您排除不再需要的数据。自定义过滤器可以排除 `.iso` 镜像或 `.git/` 文件夹，最大文件时长则可以把旧的杂乱文件留在原处。

在正式传输前运行 **Dry Run**。以一位要迁移 300 GB 客户项目的设计师为例：Dry Run 会列出将被复制的每个文件，让您在投入数小时传输之前确认文件夹结构。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from iCloud Drive to pCloud in RcloneView" class="img-large img-center" />

## 运行传输并跟踪进度

启动任务并查看 Transferring 选项卡，其中显示进度、速度和文件数。对于大型资料库，请为每个顶层文件夹（Documents、Desktop、项目文件夹）各创建一个任务。如果某一批失败，只需重新运行那一批。每次运行都会连同状态、总大小和文件数记录在 Job History 中，让您清楚掌握何时移动了哪些内容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed iCloud Drive to pCloud copy runs" class="img-large img-center" />

## 用 Folder Compare 验证结果

点击 **Compare**，在左侧打开 iCloud Drive 文件夹，右侧打开 pCloud 文件夹。筛选仅在左侧和存在差异的文件，找出被跳过的内容，然后使用 **Copy right** 将缺失的文件发送过去。当两侧都显示为相同时，您就可以放心地停用旧存储了。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing iCloud Drive and pCloud folders after migration" class="img-large img-center" />

## 开始使用

RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载和同步 90 多个提供商。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 iCloud Drive（已包含内置 rclone v1.69+），并通过 OAuth 登录添加 pCloud。
3. 创建从 iCloud Drive 到 pCloud 的 Copy 任务，并用 Dry Run 检查。
4. 运行任务，然后在降级 iCloud 套餐之前用 Folder Compare 确认结果。

经过逐个文件夹验证的迁移，能让您的文件完整进入 pCloud，每个文件夹都有据可查。

---

**相关指南:**

- [管理 iCloud Drive 存储 — 用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [管理 pCloud 存储 — 用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [将 iCloud Drive 迁移到 Dropbox — 用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-icloud-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
