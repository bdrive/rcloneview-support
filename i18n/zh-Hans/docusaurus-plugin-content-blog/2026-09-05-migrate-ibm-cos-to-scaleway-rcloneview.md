---
slug: migrate-ibm-cos-to-scaleway-rcloneview
title: "将 IBM Cloud Object Storage 迁移到 Scaleway — 使用 RcloneView 传输文件"
authors:
  - kai
description: "使用 RcloneView 将存储桶从 IBM Cloud Object Storage 迁移到 Scaleway Object Storage,通过校验和验证,并用 dry run 预览。"
keywords:
  - IBM COS 迁移到 Scaleway
  - IBM Cloud Object Storage 迁移
  - Scaleway Object Storage
  - S3 兼容存储传输
  - RcloneView
  - 对象存储迁移
  - 云到云传输
  - 校验和验证同步
  - 存储桶迁移工具
  - 多云对象存储
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 IBM Cloud Object Storage 迁移到 Scaleway — 使用 RcloneView 传输文件

> 直接在两个 S3 兼容对象存储服务商之间迁移存储桶,并附带 dry-run 预览和校验和验证。

团队会因数据驻留要求、区域延迟,或仅仅为了整合基础设施而更换对象存储服务商,但在两个 S3 兼容端点之间手动重新上传数太字节的存储桶内容既缓慢又容易出错。RcloneView 将 IBM Cloud Object Storage 和 Scaleway Object Storage 都作为标准 S3 兼容远程连接,然后在存储桶之间直接传输数据,而不必先经过本地磁盘。S3、Azure File Storage 和 Backblaze B2 在 FREE 授权下即可实现完整的读写连接。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个对象存储端点

IBM COS 和 Scaleway 都以 S3 兼容远程的形式添加到 RcloneView 中,两者都需要 Access Key、Secret Key 以及各自服务商特定的端点 URL,而不是 OAuth 登录。先使用 IBM Cloud 实例中的 API 密钥和端点添加 IBM Cloud Object Storage,然后对 Scaleway Object Storage 凭据重复相同流程。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 IBM Cloud Object Storage 和 Scaleway 远程" class="img-large img-center" />

两个远程都配置完成后,它们会在文件浏览器面板中显示为独立的标签页,方便你在决定实际要迁移什么内容之前先浏览双方的存储桶内容。

## 预览并运行迁移

将 IBM COS 设为源、Scaleway 设为目标配置的同步或复制任务负责处理批量传输。在正式执行完整运行之前,使用 Dry Run 准确查看哪些对象将被复制 — 这有助于及早发现命名或路径问题,在两个服务商的存储桶结构并不完全一致时尤其有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="将对象从 IBM Cloud Object Storage 直接传输到 Scaleway" class="img-large img-center" />

在任务的高级设置中启用校验和比较,可以按哈希值和大小而不仅仅是修改时间来验证文件,这在两个可能以不同方式处理时间戳的存储后端之间迁移数据时尤为重要。筛选设置还可以让你在只需迁移存储桶部分内容时排除特定文件类型或超出大小限制的对象。

## 监控和安排传输

大型对象存储迁移很少能一次性完成。Transferring 标签页会显示正在运行任务的实时进度、速度和文件数量,而 Job History 会保留每次已完成或已取消运行的记录 — 包括状态、耗时和传输的总大小 — 让你确认迁移是否顺利完成,或者从被取消的任务处继续。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="迁移 IBM COS 到 Scaleway 的存储桶后查看任务历史记录" class="img-large img-center" />

在任务的高级设置中调整文件传输数量和多线程传输数量,有助于更高效地移动大量对象,而失败重试设置则可以降低不稳定连接毁掉一次持续数小时传输的可能性。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将你的 IBM Cloud Object Storage 凭据添加为新的 S3 兼容远程。
3. 将你的 Scaleway Object Storage 凭据添加为第二个 S3 兼容远程。
4. 运行 dry run,然后在两者之间执行经过校验和验证的同步任务。

当两个端点并排出现在同一个文件浏览器中时,在对象存储服务商之间迁移存储桶就从手动猜测变成了一项可监控的任务。

---

**相关指南:**

- [管理 IBM Cloud Object Storage — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-ibm-cos-cloud-sync-backup-rcloneview)
- [管理 Scaleway Object Storage — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2:高性价比 S3 兼容存储对比](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
