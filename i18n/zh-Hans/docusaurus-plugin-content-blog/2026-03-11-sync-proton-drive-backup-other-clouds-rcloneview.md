---
slug: sync-proton-drive-backup-other-clouds-rcloneview
title: "使用 RcloneView 将 Proton Drive 与 Google Drive、S3 等云存储同步"
authors:
  - tayson
description: "Proton Drive 提供端到端加密的云存储。了解如何使用 RcloneView 将 Proton Drive 与 Google Drive、S3 及其他提供商一起同步和备份。"
keywords:
  - proton drive sync
  - proton drive backup
  - proton drive rclone
  - proton drive google drive
  - proton drive s3
  - proton drive transfer files
  - proton drive migration
  - proton drive multi cloud
  - proton drive alternative backup
  - encrypted cloud sync proton
tags:
  - RcloneView
  - proton-drive
  - privacy
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Proton Drive 与 Google Drive、S3 等云存储同步

> Proton Drive 是 ProtonMail 团队推出的注重隐私的云存储。但如果你需要将其与其他云存储同步以进行备份或协作该怎么办？RcloneView 可将 Proton Drive 连接到 70 多个提供商。

Proton Drive 作为 Proton 生态系统的一部分，提供端到端加密存储。它非常适合注重隐私的用户，但其生态系统是自成一体的——没有原生方式可以将 Proton Drive 与 Google Drive、S3 或其他服务同步。RcloneView 通过 rclone 对 Proton Drive 的支持提供了这座桥梁。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要将 Proton Drive 与其他云存储同步？

- **备份冗余** — 端到端加密固然很好，但单一提供商仍是单点故障。
- **迁移** — 从 Google Drive 迁移到 Proton Drive（或反之）。
- **协作** — 与不使用 Proton 的人共享文件。
- **混合隐私** — 敏感文件存放在 Proton Drive，共享文件存放在 Google Drive。
- **归档** — 将旧的 Proton Drive 文件移动到更便宜的存储（B2、S3 Glacier）。

## 在 RcloneView 中设置 Proton Drive

### 添加 Proton Drive 作为远程

1. 打开 RcloneView，点击 **Add Remote**。
2. 选择 **Proton Drive** 作为类型。
3. 输入你的 Proton 账户用户名和密码。
4. 如果启用了双因素认证（2FA），在提示时输入验证码。

<img src="/support/images/en/blog/new-remote.png" alt="Add Proton Drive remote" class="img-large img-center" />

在双栏浏览器中浏览你的 Proton Drive 文件——即时解密。

## 关键工作流程

### 1）Google Drive → Proton Drive（隐私迁移）

从 Google 切换到 Proton 以获得更好的隐私保护：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Proton Drive" class="img-large img-center" />

### 2）Proton Drive → S3（次级备份）

在 S3 上创建 Proton Drive 的备份，并附加 crypt 加密：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proton Drive backup" class="img-large img-center" />

### 3）Proton Drive → Google Drive（选择性共享）

将特定文件夹复制到 Google Drive，与不使用 Proton 的协作者共享。

### 4）Proton Drive ↔ NAS（本地同步）

在 NAS 上保留 Proton Drive 的本地副本，以便快速访问并增加冗余。

## 隐私注意事项

- Proton Drive 文件在 Proton 的服务器上以端到端加密的形式静态存储。
- 当你通过 rclone 访问文件时，它们会在你的本地计算机上解密。
- 传输到其他云存储（Google Drive、S3）意味着目标副本不会使用 Proton 的密钥加密。
- 为了在备份目标上获得最大程度的隐私保护，请使用 crypt 远程进行双重加密。

## 验证传输

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proton Drive sync" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Proton Drive** 作为远程。
3. 在 Proton 与任何其他云存储之间**同步、备份或迁移**。
4. 使用 **crypt 远程**为其他提供商上的 Proton 数据提供加密备份。

隐私优先的存储，兼具多云灵活性。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
