---
slug: cloud-storage-funeral-homes-rcloneview
title: "殡仪馆云存储 — 使用 RcloneView 保护家属记录"
authors:
  - alex
description: "殡仪馆可以使用 RcloneView 将服务记录、合同、照片和追思视频备份到多个云：计划同步、加密和 Folder Compare。"
keywords:
  - 殡仪馆云存储
  - 殡仪馆文件备份
  - 殡仪馆文档存储
  - 追思视频备份
  - 加密云备份
  - 小型企业云备份
  - rcloneview 殡仪馆
  - 多云备份
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 殡仪馆云存储 — 使用 RcloneView 保护家属记录

> 将安排合同、追思照片和追思视频安全地备份在不止一个地方。

殡仪馆保管着家属期望能保存数十年的记录：已签署的合同、讣告、生前预约文件、照片幻灯片，以及可能达到数 GB 的仪式录像。这些资料往往只存放在一台办公室电脑或单个云账户中。RcloneView 为小团队提供了可视化的方式，无需编写脚本即可将这些数据复制到第二个和第三个位置。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么只有一份副本是不够的

设想一家殡仪馆，共享盘中存有 15 年的案例文件夹，另有一个 Dropbox 账户用于接收家属提交的照片。磁盘故障、误删除或登录凭据泄露，都会同时影响所有案例。稳妥的做法是：一份主副本、一份异地云副本，以及一份独立的第二个云或本地硬盘副本。

RcloneView 可连接 90 多个提供商，包括 Google Drive、OneDrive、Dropbox、Backblaze B2、Wasabi，以及本地或外接磁盘。将业务网盘与对象存储存储桶搭配使用，可使备份位于与原始数据不同的账户和提供商中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中为殡仪馆备份添加云和本地远程" class="img-large img-center" />

## 创建可重复的备份任务

通过 4 步向导创建 **Sync** 或 **Copy** 任务：源为案例记录文件夹，目标为备份远程。如果不希望源端的删除操作被传播，请使用 Copy。请先运行 **Dry Run**，查看将要复制或删除的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中将案例文件夹复制到备份云" class="img-large img-center" />

使用 PLUS 许可证时，向导的最后一步会增加 crontab 风格的计划功能，因此夜间任务可以在办公室下班后运行。Job History 会记录每次运行的状态、大小和文件数量，可作为备份确实在执行的依据。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中计划夜间备份任务" class="img-large img-center" />

## 保护敏感记录

家庭和财务信息值得加密。在备份目标之上创建 **Crypt** 虚拟远程后，RcloneView 会在文件离开本机之前加密文件名、文件夹名和内容。请将 Crypt 密码保存在与办公室电脑分开的地方；没有它，数据将无法解密。

请定期使用 **Folder Compare** 确认备份与源数据一致。仅存在于左侧的文件表示尚未复制的内容，大小不同的文件则提示上传不完整。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 验证殡仪馆备份" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用 **New Remote** 添加主存储和备份目标。
3. 为敏感案例文件，用 Crypt 远程包装目标。
4. 创建 Copy 任务并先运行 Dry Run，然后设置计划（PLUS）或在每场仪式后运行。

比创建者留存更久的记录，值得拥有比任何单一账户都更持久的备份方案。

---

**相关指南：**

- [Cloud Storage for Law Firms — Secure Client Files with RcloneView](https://rcloneview.com/support/blog/cloud-storage-law-firms-rcloneview)
- [Cloud Storage for Tax Preparers](https://rcloneview.com/support/blog/cloud-storage-tax-preparers-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
