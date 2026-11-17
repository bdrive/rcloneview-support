---
slug: migrate-citrix-sharefile-to-box-rcloneview
title: "将 Citrix ShareFile 迁移到 Box — 使用 RcloneView 传输文件"
authors:
  - morgan
description: "使用 RcloneView 将 Citrix ShareFile 迁移到 Box。连接两个远程,用 Dry Run 预览,在云与云之间复制文件夹,并用 Folder Compare 验证。"
keywords:
  - Citrix ShareFile 迁移到 Box
  - ShareFile 到 Box 迁移
  - Citrix ShareFile Box 传输
  - 云到云迁移工具
  - RcloneView ShareFile
  - Box for Business 迁移
  - 企业文件迁移 GUI
  - 将 ShareFile 文件夹移动到 Box
  - rclone ShareFile Box
tags:
  - RcloneView
  - sharefile
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Citrix ShareFile 迁移到 Box — 使用 RcloneView 传输文件

> 以云到云的方式把 ShareFile 文件夹树迁移到 Box,先预览每一项变更,再并排验证结果 — 全部在一个 GUI 中完成。

当组织统一使用 Box 时,存放合同、客户交付物和项目文件夹的 ShareFile 归档也必须一起迁移。把所有内容下载到笔记本电脑再重新上传既慢又容易出错。RcloneView 将两个服务都连接为远程,并通过 rclone 执行传输,文件在两个云之间直接移动,你可以在一个窗口中查看进度。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Citrix ShareFile 和 Box

打开 **Remote tab > New Remote**,选择 Citrix ShareFile。除了登录之外,ShareFile 还需要一个 **Root Folder ID**,用于告诉 rclone 将哪个文件夹视为远程的顶层。如果计划按部门逐一迁移,为每个根文件夹单独创建一个远程,可以让每个作业保持小巧且便于审计。

接下来添加 Box。Box 使用 OAuth:RcloneView 会打开浏览器,你登录后连接即被保存,无需复制任何 API 密钥。如果你的组织使用 Box for Business,请在设置时指定 `box_sub_type = enterprise`,让远程指向企业账户。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Citrix ShareFile and Box remotes in RcloneView" class="img-large img-center" />

在左侧面板打开 ShareFile,在右侧面板打开 Box。并排浏览两者,可以在移动任何内容之前快速确认是否看到了预期的文件夹。

## 规划传输并预览

对于一次性迁移,**Copy** 作业是稳妥的选择:它向 Box 添加文件,而不会删除 Box 中已有的任何内容。从 **Home tab > Sync** 或 Job Manager 创建作业,选择 ShareFile 文件夹作为源、Box 文件夹作为目标,并为作业命名,例如 `sharefile-legal-to-box`。

在 Advanced Settings 步骤中,这一组合请保持校验和关闭:校验和比较需要双方共有的哈希类型,而 ShareFile(MD5)和 Box(SHA-1)使用不同的哈希,因此 rclone 会改为按大小和修改时间进行比较。如果列目录感觉较慢,请适当控制 equality checker 的数量。在 Filtering 步骤中,可以排除大型安装包(`.iso`)或决定不保留的旧文件夹。

运行之前,先使用 **Dry Run**。它会在不传输任何内容的情况下列出将被复制的文件,因此即使是迁移 40,000 份客户文档的律师事务所,也能先确认范围。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Citrix ShareFile to Box in RcloneView" class="img-large img-center" />

## 运行、监控与验证

启动作业后,在 **Transferring** 选项卡中查看进度、速度和文件数量。大型迁移可以拆分为多个作业,每个顶层文件夹一个,这样一个作业失败不会阻塞其他作业。每次运行都会记录在 **Job History** 中,包括状态、总大小和文件数,为迁移提供审计记录。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed ShareFile to Box migration runs" class="img-large img-center" />

作业完成后,在源和目标上打开 **Folder Compare**。筛选 left-only 文件找出未到达的内容,然后使用 Copy right 补齐缺失部分。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying ShareFile and Box contents" class="img-large img-center" />

## 开始使用

RcloneView 可在 Windows、macOS 和 Linux 上运行,并能在一个窗口中挂载和同步 90+ 个服务提供商。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 Citrix ShareFile(含 Root Folder ID)和 Box 添加为远程。
3. 创建从 ShareFile 到 Box 的 Copy 作业,并先运行 Dry Run。
4. 运行作业,然后用 Folder Compare 和 Job History 确认结果。

经过规划和验证的迁移,能让团队切换到 Box 时不必担心遗漏了某个文件夹。

---

**相关指南:**

- [管理 Citrix ShareFile 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [管理 Box 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Citrix ShareFile 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-citrix-sharefile-to-google-drive-rcloneview)

<CloudSupportGrid />
