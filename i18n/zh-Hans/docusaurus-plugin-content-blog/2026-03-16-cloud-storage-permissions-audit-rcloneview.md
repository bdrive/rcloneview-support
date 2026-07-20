---
slug: cloud-storage-permissions-audit-rcloneview
title: "审查你的云存储 —— 使用 RcloneView 查找错放的文件、错误的权限和数据蔓延"
authors:
  - tayson
description: "你上一次检查云账户中实际存放的内容是什么时候？了解如何使用 RcloneView 审查你的云存储，找出错放的文件、孤立数据和数据蔓延问题。"
keywords:
  - cloud storage audit
  - cloud permissions audit
  - cloud data sprawl
  - find misplaced cloud files
  - cloud storage cleanup
  - cloud audit tool
  - cloud file inventory
  - data governance cloud
  - cloud storage review
  - multi cloud audit
tags:
  - RcloneView
  - organization
  - best-practices
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 审查你的云存储 —— 使用 RcloneView 查找错放的文件、错误的权限和数据蔓延

> 你在 Google Drive、OneDrive、Dropbox、S3 以及两年前注册的那个 Backblaze 账户里都存放着文件。你真的知道每个账户里都有什么吗？云存储审查往往会带来意外发现 —— 而且通常还能帮你省钱。

云存储会悄无声息地不断累积。免费额度被占满，试用账户被遗忘，共享文件夹不断增多，不知不觉间你正在为五个不同的服务商支付存储费用，却不清楚东西都放在哪里。定期审查 —— 浏览每个账户、比较内容、清理重复项 —— 能让你的云存储保持有序，费用也能得到控制。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 需要关注哪些内容

### 孤立数据

存在于备份服务商中、但已从主存储中删除的文件。它们是有意保留的存档，还是被遗忘的残留数据？

### 重复副本

同一份文件被无意中存放在多个服务商中。文件夹对比功能可以帮你找出这些重复项：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

### 被遗忘的账户

那个存有 200 GB 测试数据的 Wasabi 试用账户？还是上一份工作留下的 Dropbox 账户？在 RcloneView 中把它们全部连接起来，看看里面都有什么：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse all accounts" class="img-large img-center" />

### 过时的备份

几个月前就已停止运行、但一直没人注意到的备份任务。检查任务历史记录，看看是否有中断：

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup history" class="img-large img-center" />

### 不必要的存储费用

存放在昂贵热存储（S3 Standard）上、本应迁移到冷存储（Glacier）的文件。放在高价服务商上、本可以迁移到更便宜服务商的大文件。

## 如何进行审查

### 第一步：连接所有账户

将你拥有的每一个云账户都添加到 RcloneView 中。每一个都要添加 —— 包括那些你已经忘记的账户。

### 第二步：浏览每个账户

使用双栏浏览器查看内容。记录每个账户中都有什么，以及是否仍有必要保留在那里。

### 第三步：跨账户对比

在你的主存储和每个备份位置之间使用文件夹对比功能，找出重复文件、缺失文件和过时数据。

### 第四步：清理

- 将错放的文件移动到正确的位置
- 删除真正的重复文件（在确认主副本无误后）
- 将旧数据归档到冷存储
- 取消不再使用的账户

### 第五步：记录并制定计划

设置一个季度提醒，定期重复这项审查。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加所有云账户** —— 每一个都不要遗漏。
3. **系统地浏览和对比**。
4. **清理**重复文件和过时数据。
5. **每季度重复一次**。

看不到的东西，就无法管理。

---

**相关指南：**

- [管理云存储蔓延](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [查找并删除重复文件](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [隐藏的云存储费用](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
