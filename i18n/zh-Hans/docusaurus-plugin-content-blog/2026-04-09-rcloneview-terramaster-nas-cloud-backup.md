---
slug: rcloneview-terramaster-nas-cloud-backup
title: "将 RcloneView 与 TerraMaster NAS 搭配使用以实现云备份和同步"
authors:
  - tayson
description: "将 RcloneView 与 TerraMaster NAS 搭配设置,把 NAS 数据同步和备份到云存储。通过 SFTP 或 SMB 连接,并自动将数据备份到 S3、B2 或 Google Drive。"
keywords:
  - rcloneview
  - terramaster nas cloud backup
  - terramaster cloud sync
  - terramaster backup to cloud
  - terramaster rclone
  - nas cloud backup gui
  - terramaster google drive
  - terramaster s3 backup
  - terramaster file sync
  - nas to cloud transfer
tags:
  - nas
  - platform
  - cloud-backup
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 RcloneView 与 TerraMaster NAS 搭配使用以实现云备份和同步

> TerraMaster NAS 设备提供实惠的网络存储,但其内置的云备份选项十分有限——**RcloneView** 通过可视化 GUI 为您的 TerraMaster 扩展多云备份、同步和文件管理功能。

TerraMaster 制造运行 TOS(TerraMaster Operating System)的热门 NAS 设备。虽然 TOS 为少数几家提供商提供了基础的云同步功能,但它并不支持企业和高级用户所需的全部云存储服务。RcloneView 通过 SFTP 或 SMB 连接到您的 TerraMaster NAS,并将其与 70 多个云提供商相连接——实现自动备份、云到 NAS 同步以及跨云文件管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要为 TerraMaster 添加云备份

NAS 提供快速的本地存储和 RAID 冗余,但它无法防范以下情况:

- **场地级灾难**:火灾、水灾、盗窃或电涌可能同时摧毁 NAS 及其所有硬盘。RAID 只能防范硬盘故障,而不能防范场地损失。
- **勒索软件**:如果勒索软件侵入您的网络,它可能会加密 NAS 共享。云备份(尤其是不可篡改存储)提供了一个恢复点。
- **超出 RAID 范围的硬件故障**:控制器板故障、电源损坏或固件损坏可能导致整个 NAS 无法访问,无论 RAID 级别如何。

云备份提供了本地 NAS 无法实现的地理冗余。RcloneView 自动执行此备份,同时让您的主要工作流程仍保留在快速的本地 NAS 上。

## 将 RcloneView 连接到您的 TerraMaster

RcloneView 运行在您的桌面或另一台独立的机器上(而非在 TerraMaster 本身上),并通过网络连接到 NAS。有两种连接方式可供选择:

### SFTP 连接

在您的 TerraMaster 上启用 SSH(TOS 控制面板 > 服务 > SSH)。然后在 RcloneView 的远程管理器中添加一个 SFTP 远程:

- 主机:您的 TerraMaster 的 IP 地址(例如 `192.168.1.100`)
- 端口:22(默认 SSH 端口)
- 用户名:您的 TOS 管理员用户名
- 密码或 SSH 密钥:您的 TOS 凭据

SFTP 提供加密文件传输,是从 RcloneView 访问 NAS 数据的推荐方式。

### SMB 连接

如果您的 TerraMaster 共享可通过 SMB(Windows 文件共享)访问,请在 RcloneView 中添加一个 SMB 远程。这使用标准的 Windows 网络路径格式,如果您已经配置了 SMB 共享,这种方式会很方便。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting RcloneView to TerraMaster NAS via SFTP" class="img-large img-center" />

## 将 NAS 数据备份到云存储

连接完成后,设置一个从 TerraMaster 到云目标的备份任务:

1. 在左侧面板中打开 TerraMaster SFTP 远程。
2. 在右侧面板中打开您的云目标(AWS S3、Backblaze B2、Google Drive、Wasabi)。
3. 导航到您想要在 NAS 上备份的文件夹。
4. 创建一个将 NAS 数据复制到云端的同步任务。

RcloneView 的差异检测确保只传输自上次备份以来发生更改的文件。对于拥有 TB 级数据的 NAS,首次备份可能需要几天时间,但后续的每日备份只传输当天的更改——通常几分钟内即可完成。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backing up TerraMaster NAS to cloud storage in RcloneView" class="img-large img-center" />

## 选择云备份目标

对于 NAS 备份而言,没有出口流量费用的高性价比存储是理想选择:

- **Backblaze B2**:每 TB 每月 6 美元,通过与 Cloudflare 的合作免除出口流量费用。定价简单,适合直接的备份需求。
- **Wasabi**:每 TB 每月 6.99 美元,无出口流量费用。适用最短 90 天的存储期限要求。
- **AWS S3 Glacier Deep Archive**:归档数据每 TB 每月 0.99 美元。检索需要数小时并会产生按 GB 计费的检索费用,但存储成本是所有选项中最低的。
- **Google Drive**:如果您的团队已经在使用 Google Workspace,这是一个便捷的选择。存储成本较高,但集成非常无缝。

对于大多数 TerraMaster 用户而言,Backblaze B2 在成本、简便性和检索速度之间提供了最佳平衡。

## 安排自动备份

配置 RcloneView 的调度器以自动运行 NAS 备份:

- **每日增量备份**:每晚将 NAS 上更改的文件同步到云端。首次种子传输完成后,带宽占用极小。
- **每周全面验证**:每周运行一次比较操作,以验证所有 NAS 文件是否与云备份匹配。这可以捕获因传输中断或静默数据损坏而导致的任何差异。

设置带宽限制,以防止备份流量在工作时间占用您的网络。将备份安排在夜间或非高峰时段进行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling TerraMaster NAS backup in RcloneView" class="img-large img-center" />

## 将云数据同步到您的 TerraMaster

反向工作流程同样很有用:将云数据拉取到您的 NAS 以便本地访问。如果您的团队在 Google Drive 上协作,但需要快速本地访问项目文件,可以将相关的 Drive 文件夹同步到您的 TerraMaster。以 NAS 速度在本地编辑文件,RcloneView 会按计划将更改同步回云端。

这种混合方式既让您享受云存储的协作优势,又能获得本地 NAS 访问的性能。

## 加密 NAS 备份

对于敏感数据,请使用 RcloneView 的加密远程,在文件离开您的网络之前对其进行加密。加密过程在您的桌面机器(RcloneView 运行的地方)上完成,然后再上传到云端。即使云提供商遭到入侵,您的 NAS 备份数据仍然无法读取。

## 监控和验证

RcloneView 的任务历史记录了每次备份运行的统计信息:已传输文件、已跳过文件、总字节数、耗时以及任何错误。定期查看历史记录,确认备份成功完成。定期使用比较功能来验证云备份是否与 NAS 内容一致。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitoring TerraMaster NAS backup history in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在您的 TerraMaster 上启用 SSH,并将其添加为 RcloneView 中的 SFTP 远程。
3. 添加一个云目标(B2、S3、Google Drive 或 Wasabi)。
4. 创建并安排一个从 NAS 到云端的每日备份任务。
5. 使用比较功能定期验证备份。

您的 TerraMaster NAS 负责本地存储和共享。RcloneView 增加了云备份层,保护您的数据免受场地级灾难、勒索软件以及超出 RAID 范围的硬件故障的影响。

---

**相关指南:**

- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [任务历史](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
