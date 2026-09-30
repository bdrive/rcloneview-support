---
slug: cloud-storage-tax-preparers-rcloneview
title: "税务师的云存储 — 使用 RcloneView 进行有条理的客户备份"
authors:
  - casey
description: "税务师的云存储：使用 RcloneView 备份客户申报表、加密敏感文件，并在每个申报季保留一份经过验证的异地副本。"
keywords:
  - 税务师的云存储
  - 税务师文件备份
  - 报税季云备份
  - 客户文档备份
  - 加密云备份
  - RcloneView 税务
  - 将报税表备份到云端
  - 多云备份 会计
  - Crypt 远程 敏感文件
  - 云文件夹比较
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

# 税务师的云存储 — 使用 RcloneView 进行有条理的客户备份

> 将客户申报表、原始资料和委托协议异地备份、加密并核对，全部在一个桌面应用中完成。

税务事务所每个申报季都会积累数千份 PDF：W-2 表、上一年度申报表、已签署的授权书。其中大部分存放在一台办公工作站或 NAS 上，3 月份一块硬盘损坏就可能损失数天时间。RcloneView 让小型事务所可以按计划将这些数据复制到云存储，先行加密，并证明副本是完整的。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将本地客户文件夹备份到云端

假设一家两人事务所把客户文件夹保存在本地磁盘上，每位客户每年一个文件夹。在 **New Remote** 中添加 Backblaze B2、Amazon S3 或 OneDrive 等云远程，然后在一个 Explorer 面板中打开本地文件夹，在另一个面板中打开云端目标位置。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud remote for tax client backups in RcloneView" class="img-large img-center" />

使用 Sync 向导创建从本地文件夹到存储桶的任务。将其命名为类似 `clients-2026` 的名称，并在 Advanced Settings 中启用校验和比较，这样变更的文件将通过哈希和大小检测，而不仅仅依据时间戳。

## 上传前加密敏感文档

申报表包含姓名、身份证件号码和银行信息。RcloneView 支持 Crypt 虚拟远程，会在文件到达服务提供商之前加密文件名、文件夹名和内容。创建一个包裹存储桶路径的 Crypt 远程，然后让同步任务指向 Crypt 远程而不是原始存储桶。请将 crypt 密码保存在同一云账户之外的安全位置；没有它，备份将无法解密。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing encrypted client folders to cloud storage" class="img-large img-center" />

## 安排季度备份并查看历史记录

申报季期间，每天都会有变化。计划任务是 PLUS 功能：使用 crontab 风格的 Step 4 让任务每晚运行，并使用 Simulate schedule 预览接下来的执行时间。使用 FREE 许可证时，您仍可在 Job Manager 中一键手动运行同一任务。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly tax client backup job" class="img-large img-center" />

Job History 会列出每次运行的状态、时长、大小和文件数，因此您可以证明关键的夜晚备份确实运行了。在任何单向同步之前先运行 **Dry Run**，查看哪些内容将被复制或删除。

## 归档本季之前先验证

申报季结束时，将本地文件夹放在左侧、云端副本放在右侧，打开 **Compare**。筛选仅存在于左侧或存在差异的文件以找出遗漏，然后将其复制过去。比较结果一致之后，您就可以清理办公电脑上的空间。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing local client folders with the cloud backup" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加云远程，如有需要，在其之上添加 Crypt 远程。
3. 基于客户文件夹创建同步任务，并先运行 Dry Run。
4. 使用 Folder Compare 验证，并查看 Job History。

一份经过测试的加密异地副本，可以让申报季中的硬件故障只是一次小麻烦，而不是一场危机。

---

**相关指南：**

- [会计与财务事务所的云存储](https://rcloneview.com/support/blog/cloud-storage-accounting-finance-firms-rcloneview)
- [Zero-CLI Crypt 远程](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [云存储安全检查清单](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
