---
slug: rcloneview-proxmox-ve-cloud-backup
title: "在 Proxmox VE 上运行 RcloneView — 为虚拟机和容器提供云备份"
authors:
  - tayson
description: "Proxmox VE 承载着您的虚拟机和容器。添加 RcloneView 可将虚拟机数据、ISO 库和配置备份到云存储，实现异地灾难恢复。"
keywords:
  - proxmox cloud backup
  - proxmox rclone
  - proxmox offsite backup
  - proxmox ve cloud sync
  - proxmox backup s3
  - proxmox google drive backup
  - proxmox rcloneview
  - proxmox vm backup cloud
  - proxmox disaster recovery
  - proxmox cloud storage
tags:
  - platform
  - docker
  - disaster-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Proxmox VE 上运行 RcloneView — 为虚拟机和容器提供云备份

> Proxmox VE 会在本地备份虚拟机。但本地备份无法抵御硬件故障、火灾或盗窃等风险。添加 RcloneView 可将虚拟机备份推送到云存储，实现完整的灾难恢复。

Proxmox VE 是最受欢迎的开源虚拟化平台之一，为家庭实验室和生产环境运行虚拟机和 LXC 容器。其内置的 Proxmox Backup Server 出色地处理本地备份，但仅有本地备份是不完整的。RcloneView 增加了云端这一层——将虚拟机备份、ISO 库和配置导出文件推送到 S3、B2、Google Drive 或任何云服务商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么 Proxmox 需要云备份？

Proxmox 的本地备份可防止虚拟机损坏和意外删除。而云备份可防止：

- **硬件故障** — 整台服务器宕机
- **勒索软件** — 本地备份与虚拟机一同被加密
- **物理灾难** — 火灾、水灾、盗窃
- **站点故障** — 数据中心或家庭实验室整体失效

## 部署方式

### 在 Proxmox 上运行 Docker 容器

在 Proxmox 主机上的轻量级 LXC 容器内，将 RcloneView 作为 Docker 容器运行。

### 专用 LXC 容器

创建一个专门用于 RcloneView 的最小化 LXC 容器，并授予其访问备份存储的权限。

## 关键工作流程

### 将虚拟机备份同步到云端

将 RcloneView 指向您的 Proxmox 备份存储并同步到云端：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proxmox backup to cloud" class="img-large img-center" />

### 安排夜间异地备份

在 Proxmox 完成本地备份后，RcloneView 会将其推送到云端：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proxmox cloud backup" class="img-large img-center" />

### 备份 ISO 库

您的 ISO 集合和容器模板很难重新创建。请将它们备份到云存储。

### 验证备份完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proxmox backup" class="img-large img-center" />

### 加密敏感虚拟机数据

虚拟机备份可能包含敏感数据。请使用 crypt 远程在上传前进行加密。

## 推荐策略

| 数据类型 | 云端层级 | 保留期限 |
|-----------|-----------|-----------|
| 虚拟机备份（近期） | S3 / B2 | 最近 7 天 |
| 虚拟机备份（归档） | S3 Glacier | 最近 90 天 |
| ISO 库 | B2 | 永久保留 |
| Proxmox 配置 | Google Drive | 最近 30 天 |

## 快速上手

1. 在 Proxmox 上**部署 RcloneView** 容器。
2. **添加云账户**作为备份目标。
3. **创建同步任务**，指向您的备份存储。
4. **安排在本地备份完成后**执行。
5. 使用文件夹对比功能**定期验证**。

本地备份能让您免受操作失误的影响，云备份则能让您免受灾难的影响。

---

**相关指南：**

- [在 Docker 中运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [防范勒索软件攻击](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
