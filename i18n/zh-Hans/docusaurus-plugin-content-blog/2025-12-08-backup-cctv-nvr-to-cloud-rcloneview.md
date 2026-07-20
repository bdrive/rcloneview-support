---
slug: backup-cctv-nvr-to-cloud-rcloneview
title: "如何使用 RcloneView 自动将 CCTV/NVR 监控录像备份并归档到云存储"
authors:
  - tayson
description: "通过 RcloneView 将来自 NAS、SMB 或 SFTP 路径的 CCTV/NVR 视频发送到 Wasabi、S3 或 Google Drive。使用比较（Compare）、支持校验和的同步任务以及计划运行，无需手动上传即可保护证据。"
keywords:
  - rcloneview
  - cctv备份
  - nvr云归档
  - wasabi s3
  - google drive备份
  - smb sftp
  - 监控存储
  - 校验和验证
  - 计划备份
  - 灾难恢复
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - cctv
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 自动将 CCTV/NVR 监控录像备份并归档到云存储

> 保护监控视频免受盗窃、火灾或设备故障的影响。RcloneView 将 NAS/SFTP/SMB 上的 NVR 文件夹连接到 Wasabi、S3 或 Google Drive，然后自动执行比较（Compare）+ 同步任务（Sync Jobs），只传输新录像，确保证据完整无损。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 1. 为什么云备份对 CCTV 录像很重要

- NVR/NAS 硬盘因 24/7 录制而迅速被占满。
- 盗窃、火灾或蓄意破坏可能导致唯一副本被清除。
- 合规审计要求更长的保留周期。
- 远程审查和证据共享需要异地访问能力。
- 手动复制数 GB 大小的 H.264/H.265 文件容易出错。

## 2. 监控文件为何棘手

- 持续写入会产生成千上万个按日期命名的片段。
- 高码率（1080p/4K）在备份时会对带宽造成压力。
- 不同厂商的文件夹结构各不相同（YYYY/MM/DD、摄像头 ID）。
- 需要在无人值守的情况下进行计划传输（每小时/每天）。
- 完整性至关重要：损坏的帧会削弱证据价值。

## 3. RcloneView 如何提供帮助

- 在同一界面中连接 **NAS/SMB/SFTP/WebDAV** 源和 **Wasabi/S3/Google Drive** 目标。
- 双栏浏览器让云到云或局域网到云的传输过程直观清晰。
- **比较（Compare）**会标记新增或有变化的片段，让你只传输增量内容。
- **校验和**支持（S3/Wasabi）可验证上传结果。
- **同步任务 + 计划调度**自动运行备份，无需编写脚本。

<!-- Image verified: exists -->


## 4. CCTV/NVR 备份的分步设置

### 步骤 1）连接 NVR 存储（SMB 或 SFTP）

1. 点击 **远程 → + 新建远程**。
2. 选择 **SMB**（适用于 NAS/Windows 共享）或 **SFTP**（适用于 Linux NVR 导出）。
3. 输入服务器地址、共享路径和凭据（如需要请添加域名）。
4. 保存并在远程管理器中确认列表。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create NVR remote from Remote Manager" class="img-medium img-center" />

### 步骤 2）添加云端目标（Wasabi/S3/Google Drive）

- **Wasabi/S3**：粘贴访问密钥/私密密钥、区域和存储桶信息。
- **Google Drive**：点击 **连接** 并在浏览器中完成 OAuth 授权。
- 保持两个远程同时可见，以便并排操作。

### 步骤 3）打开源和目标

1. 进入 **浏览**。
2. 左侧窗格：打开 NVR 文件夹（例如 `/recordings/2025/12/08`）。
3. 右侧窗格：打开用于备份的存储桶或 Drive 文件夹。
4. 展开几个日期文件夹以验证路径。

### 步骤 4）使用比较（Compare）预览差异

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison showing CCTV deltas" class="img-medium img-center" />

- 点击 **比较** 以高亮显示缺失或大小发生变化的视频文件。
- 在复制前解决名称冲突（重复的摄像头 ID）。
- 这样可以防止覆盖目标端较新的片段。

### 步骤 5）安全地复制或同步

- 先从 NVR → 云端进行 **单向复制**（不删除文件）。
- 为 S3/Wasabi 启用 **校验和** 以验证上传结果。
- 在工作时段使用 **带宽限制**；夜间取消限制。
- 对于数据量非常大的日期，先降低并发数以避免限流，之后再提高。

### 步骤 6）将工作流保存为任务

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save CCTV sync to jobs" class="img-medium img-center" />

1. 在同步/复制对话框中，点击 **保存为任务**。
2. 为其命名（例如 `cctv-daily-wasabi`）。
3. 如果计划之后清理旧片段，请选择单向同步。

### 步骤 7）计划自动运行

<!-- Image verified: exists with /support prefix -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CCTV backup job" class="img-medium img-center" />

- 打开 **任务管理器 → 添加任务**。
- 选择已保存的任务并设置频率：每小时、每 3 小时或每晚 02:00。
- 如果带宽有限，可按摄像头分组错峰安排任务。
- 在前几次运行后检查 **任务历史**。

## 5. 备份策略示例

- **短期（热）存储：** 在 NAS/NVR 上保留最近 7 天的录像以便快速查看。
- **长期归档：** 每周将所有录像推送到 Wasabi/S3；启用版本控制。
- **审计/审查：** 将选定日期的录像复制到 Google Drive，供调查人员和管理人员使用。
- **连锁店或多站点：** 每个门店使用独立的存储桶/前缀，以隔离访问权限。


## 6. 视频归档的成本优化

- 将不常访问的录像存储在 **Wasabi** 或 S3 低频访问层级。
- Google Drive 上只保留当前活跃日期的录像，以便快速共享。
- 使用 S3/Wasabi 的生命周期规则，将旧对象转移到更便宜的存储层级。
- 如策略允许，排除摄像头测试片段和无动态画面的片段。

## 7. 按需恢复录像

- 在浏览器中浏览云端远程；按日期文件夹筛选。
- 只将相关的小时/天数据复制到本地磁盘以供查看。
- 使用 **比较** 确认恢复的文件与原始文件匹配（大小/时间或校验和）。
- 对于法律取证保留需求，将数据复制到独立的只读前缀/存储桶。

## 8. 实际部署模式

- **小型零售店：** NVR → Wasabi 每小时同步；云端保留 30 天，本地保留 7 天。
- **工厂：** CCTV → NAS → 每晚同步至 Wasabi；每月归档到 S3 冷存储。
- **连锁网络：** 在同一存储桶内为每个门店设置独立前缀；总部审计使用 Drive 副本。
- **安防服务商：** 为每个客户设置独立存储桶、计划任务，并为受监管站点使用加密远程。

## 9. 总结

RcloneView 将 CCTV/NVR 备份转变为可预测、无需命令行的工作流程。通过 SMB/SFTP 连接你的 NAS 或录像机，将其与 Wasabi/S3/Google Drive 配对，使用比较（Compare）预览差异，并计划支持校验和的同步任务。借助自动化、日志记录和加密选项，你无需彻夜守着上传过程，就能满足保留、审计和灾难恢复的需求。

<CloudSupportGrid />
