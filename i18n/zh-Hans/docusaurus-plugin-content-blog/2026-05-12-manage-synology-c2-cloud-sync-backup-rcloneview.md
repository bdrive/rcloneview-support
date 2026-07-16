---
slug: manage-synology-c2-cloud-sync-backup-rcloneview
title: "管理 Synology C2 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "将 Synology C2 连接到 RcloneView,轻松管理云备份。通过精美的桌面 GUI 同步文件、安排任务并监控传输。"
keywords:
  - Synology C2 RcloneView
  - Synology C2 备份
  - 管理 Synology C2 存储
  - Synology C2 rclone GUI
  - 兼容 S3 的云同步
  - Synology 云存储备份
  - 自动化 Synology C2 同步
  - RcloneView S3 设置
  - Synology C2 文件传输
  - Synology C2 定时备份
tags:
  - synology
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Synology C2 存储 — 使用 RcloneView 同步和备份文件

> Synology C2 是 Synology 专为其生态系统打造的云存储服务 — 借助 RcloneView,您无需编写任何命令即可通过可视化界面对其进行管理。

Synology C2 是专为扩展 Synology NAS 用户生态系统而设计的云存储服务,提供与 rclone 相关工具无缝集成的兼容 S3 的对象存储。无论您在家中运行 DiskStation、管理小型企业文件服务器,还是需要额外的异地备份层,RcloneView 都能让您轻松浏览、同步 Synology C2 并自动完成与之间的传输。由于 Synology C2 提供标准的兼容 S3 API,您可以获得与任何主流对象存储提供商同样可靠的 rclone 性能 — 并以简洁的桌面 GUI 呈现。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Synology C2 作为兼容 S3 的远程连接

Synology C2 对象存储使用标准的兼容 S3 API,因此在 RcloneView 中连接它时,只需选择 Amazon S3 作为远程类型,并将其指向 Synology C2 端点。打开“远程”标签页,点击“新建远程”,选择 Amazon S3 作为提供商。输入您的 C2 访问密钥 ID、私有访问密钥,以及您 C2 账户的区域端点 — 这些信息在创建存储并生成访问密钥对后,可在 Synology C2 门户中获取。将区域字段设置为与您的 C2 区域匹配,然后保存。

远程创建完成后,它会出现在您的浏览器面板中,如同其他任何云存储一样。您可以浏览存储桶和文件夹、查看文件大小和修改日期,并在不离开 GUI 的情况下浏览嵌套的目录树。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Synology C2 S3-compatible remote in RcloneView" class="img-large img-center" />

## 浏览和传输文件

在一个浏览器面板中打开您的 Synology C2 远程,在相邻面板中打开本地磁盘或其他云存储,即可通过拖放文件在两者之间立即开始传输。RcloneView 会在执行任何操作前进行确认,屏幕底部的“传输中”标签页会显示实时进度:文件数量、已传输字节数以及当前吞吐量。

对于大批量数据 — 例如一家摄影工作室备份 2 TB 的 RAW 文件 — RcloneView 的多线程引擎可以并行移动多个文件。您可以在任务的高级设置中配置并发传输流数量,在不占满网络连接的情况下最大化吞吐量。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into Synology C2 storage in RcloneView" class="img-large img-center" />

## 创建同步任务以实现持续备份

除了一次性传输,RcloneView 的任务管理器还能让您定义同步任务,按需或按计划将源文件夹镜像到 Synology C2 存储桶。选择“同步”作为任务类型,选定源 — 本地文件夹、Synology NAS 远程或其他云存储 — 将目标指向您的 C2 存储桶,并配置筛选偏好:文件时效限制、大小上限以及扩展名排除规则均可在不编辑任何配置文件的情况下进行配置。

在首次正式同步之前,请运行内置的“模拟运行”。它会准确显示哪些文件将被复制或删除,这样在涉及成千上万文件时也不会出现意外情况。任务历史会记录每次执行的时间戳、文件数量、传输大小和状态码,提供完整的审计记录。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Synology C2 in RcloneView" class="img-large img-center" />

## 安排自动化备份(PLUS 授权版)

为实现无人值守的数据保护,RcloneView 的 PLUS 授权版解锁了 crontab 风格的计划任务功能。只需在任务向导的“计划”步骤中填写分钟、小时和星期字段,即可将 Synology C2 同步任务设置为每晚、每周或按任意自定义间隔运行。RcloneView 会在设定的时间执行传输,并将结果记录在任务历史中 — 即使您不在电脑旁,也能获得完整的审计记录来验证备份是否已运行,并确认具体传输了哪些文件。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Synology C2 backup job in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Synology C2 门户中,创建一个存储桶并生成访问密钥对。
3. 在 RcloneView 中,打开“远程”标签页 > “新建远程”,选择 Amazon S3,输入您的 C2 访问密钥 ID、私有访问密钥和区域端点。
4. 在浏览器面板中打开 C2 存储桶,并与源并列显示,在任务管理器中创建同步任务,先运行“模拟运行”。
5. 启用计划功能(PLUS 授权版),无需人工干预即可自动完成每晚或每周的备份。

Synology C2 为您提供了紧密集成的异地备份层 — RcloneView 则将其转变为一个可在几分钟内设置完成、可计划、可监控的工作流程。

---

**相关指南:**

- [使用 RcloneView 将 NAS 备份到多个云](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [使用 RcloneView 管理 Wasabi 云同步和备份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [无需 Hyper Backup 备份 Synology — RcloneView](https://rcloneview.com/support/blog/backup-synology-without-hyper-backup-rcloneview)

<CloudSupportGrid />
