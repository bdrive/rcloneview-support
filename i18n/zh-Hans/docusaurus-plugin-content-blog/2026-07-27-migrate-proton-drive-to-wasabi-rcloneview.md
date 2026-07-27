---
slug: migrate-proton-drive-to-wasabi-rcloneview
title: "将Proton Drive迁移到Wasabi — 使用RcloneView传输文件"
authors:
  - kai
description: "借助RcloneView的直接云到云传输功能,将加密文件从Proton Drive移动到Wasabi对象存储,无需本地下载。"
keywords:
  - Proton Drive迁移到Wasabi
  - Proton Drive到Wasabi传输
  - 云到云迁移
  - Wasabi对象存储备份
  - Proton Drive备份
  - 传输Proton Drive文件
  - RcloneView 迁移
  - 加密云存储迁移
tags:
  - RcloneView
  - proton-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将Proton Drive迁移到Wasabi — 使用RcloneView传输文件

> 无需先经过本地磁盘,直接将文件从Proton Drive移动到Wasabi对象存储。

Proton Drive专为注重隐私的个人存储而设计,但它并不适合Wasabi所擅长处理的工作负载 —— 大型媒体库、应用程序备份,或需要从其他工具进行S3兼容访问的数据集。当用户的需求超出了Proton Drive的适用范围,或只是想要一份更便宜的长期副本时,RcloneView可以在两者之间直接移动文件,而不必先将所有内容下载到本地,方法是同时连接这两个远程存储。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程存储

在RcloneView中,Proton Drive通过邮箱和密码(可选双重验证)进行设置,而Wasabi则作为S3兼容远程存储添加,需要使用Access Key ID、Secret Access Key以及相应的区域端点。两个远程存储都会以标签形式显示在文件浏览器中,因此用户可以在开始传输之前,在一个面板中浏览Proton Drive文件夹,在另一个面板中浏览Wasabi存储桶。

<img src="/support/images/en/blog/new-remote.png" alt="在RcloneView中设置Proton Drive和Wasabi远程连接" class="img-large img-center" />

RcloneView在FREE许可下也能以完整的读写权限连接S3、Azure和Backblaze B2,因此设置本次迁移的Wasabi一端无需任何付费套餐。

## 执行云到云传输

在两个远程存储都打开的情况下,将文件夹从Proton Drive面板拖到Wasabi面板即可触发直接复制 —— 数据通过RcloneView从Proton Drive流式传输到Wasabi,完全不经过本地磁盘。对于更大规模的迁移,同步向导是更好的工具:它支持从Proton Drive源到Wasabi目标存储桶的正式单向同步,并可配置并发传输数量,以充分利用可用带宽。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在RcloneView中从Proton Drive到Wasabi的云到云文件传输" class="img-large img-center" />

对于任何大规模迁移,先运行Dry Run(模拟运行)模式都是值得的 —— 它会在实际移动任何内容之前,列出将要复制的确切文件列表,以便及早发现筛选设置错误或意外的文件夹结构。

## 确认迁移已完成

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="在RcloneView中将文件拖放传输到Wasabi远程存储" class="img-large img-center" />

同步任务完成后,底部信息视图中的传输标签会显示已移动的文件总数、传输速度以及任务过程中遇到的任何错误。对于以已保存任务而非一次性传输方式运行的迁移,任务历史会保留永久记录 —— 开始时间、耗时、总大小和完成状态 —— 因此在停用Proton Drive副本之前,有清晰的日志可以确认每个文件都已成功抵达Wasabi。

## 开始使用

1. 从[rcloneview.com](https://rcloneview.com/src/download.html)**下载RcloneView**。
2. 使用您的账户邮箱和密码添加Proton Drive远程连接。
3. 使用Access Key、Secret Key和区域端点添加Wasabi远程连接。
4. 先运行Dry Run,然后执行同步,并在任务历史中确认传输结果。

一旦有了经过验证的日志,显示每个文件都已安全抵达Wasabi,停用Proton Drive文件夹这件事就会轻松许多。

---

**相关指南:**

- [管理Proton Drive — 使用RcloneView同步和备份文件](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [管理Wasabi存储 — 使用RcloneView同步和备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [将Proton Drive迁移到Backblaze B2 — 使用RcloneView传输文件](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
