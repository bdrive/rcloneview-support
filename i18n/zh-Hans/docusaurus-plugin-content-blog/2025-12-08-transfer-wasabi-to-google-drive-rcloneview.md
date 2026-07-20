---
slug: transfer-wasabi-to-google-drive-rcloneview
title: "使用 RcloneView 在 Wasabi 和 Google Drive 之间传输文件"
authors:
  - tayson
description: "使用 RcloneView 在 Wasabi 存储桶和 Google Drive 之间迁移或备份数据——快速设置远程、优化 S3 上传、同步前先对比、并安排持续任务。"
keywords:
  - Wasabi 到 Google Drive 传输
  - Wasabi 云迁移
  - 云到云备份
  - rcloneview
  - rclone s3
  - google drive 迁移
  - 云同步
  - wasabi google drive 传输
  - s3 分片上传
  - 云自动化
tags:
  - RcloneView
  - cloud-migration
  - cloud-storage
  - backup
  - wasabi
  - google-drive
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 Wasabi 和 Google Drive 之间传输文件

> 无需摆弄命令行，即可将数 TB 数据从 Wasabi 迁移到 Google Drive(或反向迁移)。RcloneView 将 rclone 的速度与 S3 调优融入直观的图形界面,让你可以放心地对比、同步并安排迁移任务。

RcloneView 同时支持 Wasabi 这样的 S3 兼容存储和 Google Drive 的 OAuth 登录流程。并排打开两个远程,根据你的工作流选择 Explorer/Compare/Sync,并应用适合 S3 的分片策略,让大文件上传保持稳定。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Wasabi 与 Google Drive 一览

- **Wasabi**:S3 API,写入速度快,存储成本低,按存储桶设有独立端点(例如 `s3.us-east-1.wasabisys.com`)。
- **Google Drive / Workspace**:分享方式熟悉,协作能力强,在突发大量请求时需留意 API 配额。
- **RcloneView**:一个界面搞定两者——同步前先对比、支持拖放操作、可执行空跑测试、并能安排重复任务。

## 添加 Wasabi 远程(S3 兼容)

1. 点击 **`+ New Remote`** -> 选择 **S3**。
2. 输入你的 **Access Key** / **Secret Key**、存储桶所在区域以及端点(例如 `s3.wasabisys.com` 或特定区域的 URL)。
3. 保存为 `Wasabi_Archive`(或类似名称)以便识别。  
   <img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="New remote wizard" class="img-large img-center" />

参考设置:[S3 兼容存储设置](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

## 通过 OAuth 连接 Google Drive

1. 在 **`+ New Remote`** 中选择 **Google Drive**。
2. 通过浏览器弹出的 OAuth 提示登录,并确认要迁移到的账户或 Workspace。
3. 为其命名(例如 `GDrive_Workspace`)。

更多细节:[通过 OAuth 添加 Google Drive](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

## 并排打开两个云端

1. 在 **Explorer -> Browse** 中,一侧打开你的 **Wasabi** 远程,另一侧打开 **Google Drive**。
2. 分别导航到源存储桶/文件夹和目标 Drive 文件夹。  


## 选择合适的传输方式

- **拖放(Explorer)**:适合快速复制选定的文件夹。进度会显示在 **Transfer** 日志中。
- **Compare -> Copy**:先预览差异,再放心地复制缺失或较新的文件。
- **Sync**:用于持续备份的单向镜像(Wasabi -> Drive 或反向)。首次运行建议先加上 **`--dry-run`** 进行验证。
- 需要完整演示?可参考多云教程流程:[在 MEGA 和 Google Drive 之间传输文件](https://rcloneview.com/support/tutorials/transfer-files-between-mega-and-google-drive)

## 创建定时备份任务

1. 成功完成一次 Sync 后,点击 **Save to Jobs**。
2. 打开 **Job Manager** -> **Add Job**(或编辑已保存的任务),设置执行计划(例如每晚执行)。
3. 保留 **Backup Dir** 或版本化文件夹,以便在 Drive 上保存已更改/已删除项目的记录。
4. 在 **Transfer** 标签页和 **History** 中监控每个任务的执行结果。  
- 指南:[创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)、[执行与管理任务](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)、[任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)、[传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## 迁移检查清单(完整性与安全性)

- 先运行一次 **Compare**,查看将要移动的内容;如有需要可导出结果。
- 在 Sync 上先使用 **`--dry-run`**,以避免意外情况。
- 对于关键数据,可在内置终端中使用 `rclone check source: dest:` 进行验证,并查看 **API 日志**。
- 在验证完整性之前,使用独立的目标文件夹(例如 `Wasabi_Archive_2025`)。
- 为任务使用清晰的命名(如 `Wasabi->GDrive_Nightly`),并将端点/密钥的权限限定在所需的存储桶范围内。

## 总结

有了 RcloneView,Wasabi 的 S3 性能与 Google Drive 的协作能力可以在同一个界面中共存。创建两个远程、预览变更、调优 S3 上传、并安排重复任务——全程无需编辑配置文件或使用命令行参数。立即开始你的 Wasabi -> Google Drive 迁移,让每一次运行都可验证。

<CloudSupportGrid />
