---
slug: handle-cloud-provider-outages-rcloneview
title: "如何应对云服务商故障——在云服务中断时保持工作不间断"
authors:
  - tayson
description: "每个云服务商都可能发生故障。了解如何通过多云冗余、本地挂载和故障转移策略,使用 RcloneView 为服务中断做好准备。"
keywords:
  - 云服务商故障
  - 云服务中断解决方案
  - 云存储故障转移
  - 多云冗余
  - 云服务中断防护
  - 云可用性策略
  - 云灾难恢复
  - 云存储中断
  - 云备份故障转移
  - 准备应对云服务中断
tags:
  - disaster-recovery
  - multi-cloud
  - best-practices
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何应对云服务商故障——在云服务中断时保持工作不间断

> Google Drive 发生故障,你的团队无法访问项目文件,工作被迫中断。但如果你事先建立了多云故障转移策略,这一切本可以避免。

每个主要云服务商都发生过故障。Google、Microsoft、AWS、Dropbox——它们最终都会出现中断。问题不在于是否会发生,而在于发生时你是否已做好准备。使用 RcloneView 建立多云策略,意味着你的文件同时存在于多个位置,某个服务商的中断不会让你的工作停滞。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 多云安全网

最简单的防护方式:在两个或更多服务商上保留关键文件的副本。当一个服务商出现故障时,切换到另一个。

### 设置镜像同步

使用 RcloneView 在多个服务商之间维护同步副本:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mirror across providers" class="img-large img-center" />

### 安排持续复制

通过定时同步任务保持镜像内容最新:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule mirror sync" class="img-large img-center" />

## 故障转移策略

### 策略一：主-主(Active-Active)

在两个服务商上主动保持文件同步。团队使用任何一个可用的服务商。RcloneView 会保持两者同步。

| 主要服务商 | 镜像服务商 | 同步频率 |
|---------|--------|----------------|
| Google Drive | OneDrive | 每 4 小时 |
| S3 | Backblaze B2 | 每小时 |

### 策略二：主-备(Active-Passive)

日常使用主要服务商,次要服务商作为备用。当主要服务商发生故障时,通过 RcloneView 直接访问次要服务商。

### 策略三：本地挂载缓存

使用 VFS 缓存将云存储挂载为本地驱动器。最近访问过的文件会被缓存到本地,在短暂中断期间仍可访问:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount with local cache" class="img-large img-center" />

## 服务中断期间该怎么做

1. **不要慌张**——查看服务商的状态页面
2. **切换到镜像**——在 RcloneView 中打开次要服务商
3. **在镜像上继续工作**
4. **主要服务商恢复后**——运行同步以协调更改

## 验证你的镜像

定期比较主要服务商和镜像服务商,确保二者保持同步:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify mirror sync" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加两个服务商**用于存放关键数据。
3. **设置定时镜像同步任务**。
4. 使用文件夹对比功能**定期验证**。

为服务中断做准备的最佳时机,就是在它发生之前。

---

**相关指南:**

- [防范勒索软件攻击](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [多云灾难恢复](https://rcloneview.com/support/blog/multi-cloud-disaster-recovery-mirror-data-across-regions-and-providers)
- [将 NAS 备份到多个云存储](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
