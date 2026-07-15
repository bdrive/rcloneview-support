---
sidebar_position: 11
description: "在 RcloneView 中使用作业监控界面跟踪同步、复制和删除等文件操作的进行状态与已完成记录。"
keywords:
  - rcloneview
  - Job Monitor
  - Transfer Log
  - Rclone API Logs
  - file transfer
  - sync progress
  - job logs
tags:
  - RcloneView
  - Job-Management
  - Monitoring
  - Transfer-log
  - Completed-log
  - API-log
  - Sync
date: 2025-06-22
author: Jay
---
# 作业监控

RcloneView 提供**作业监控**界面，帮助用户跟踪、查看和管理正在进行以及已完成的文件操作（如同步、复制和删除）的状态。该界面包含三个主要标签页：

## 传输标签页 - 进行中的作业

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="transfer log" class="img-medium img-center" />
此标签页显示所有当前活动的文件传输作业。

**列说明：**
- **作业（Job）**：表示操作类型（如同步、复制、删除）。
- **来源 / 目标（Source / Destination）**：显示来源和目标路径。
- **已接收大小（Received Size）**：已传输数据量 / 总大小。
- **速度（Speed）**：当前传输速度。
- **进度（Progress）**：当前作业的可视化进度条。
- **百分比（Percentage）**：传输完成百分比。
- **剩余时间（Time Left）**：预计剩余时间。
- **作业 ID（Job ID）**：用于引用该作业的内部 ID。
- **取消（Cancel）**：点击 ❌ 图标可取消正在进行的作业。

## 已完成标签页 - 作业历史

<img src="/support/images/en/howto/rcloneview-basic/completed-log.png" alt="completed log" class="img-medium img-center" />
此标签页列出所有以前执行过的作业及其结果。

**列说明：**
- **作业（Job）**：操作类型（同步、复制、删除等）。
- **来源 / 目标（Source / Destination）**：来源和目标路径。
- **状态（Status）**：结果状态（如成功、错误）。
- **开始时间（Started At）**：作业的开始时间。
- **耗时（Time Spent）**：作业的总耗时。
- **文件数（Files）**：已传输的文件数量。
- **大小（Size）**：总数据大小。
- **速度（Speed）**：平均传输速度。
- **作业 ID（Job ID）**：内部作业引用。
- **删除（Delete）**：<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> 图标用于删除该记录。

## 日志标签页 - API 通信日志

<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="log tab" class="img-medium img-center" />

此标签页显示 RcloneView 与 Rclone API 通信的后端日志。

**列说明：**
- **时间（Time）**：操作请求的时间戳。
- **事件类型（Event Type）**：日志级别（如 INFO、ERROR）。
- **作业类型（Job Type）**：操作类型（同步、复制、删除等）。
- **消息（Message）**：操作的结果。
- **详情（Details）**：其他内部元数据（如 JSON 格式的作业 ID）。

使用此标签页进行故障排查或查看系统级交互。

:::tip
- 每条作业记录都通过其**作业 ID**在各标签页之间关联。
- 日志会自动实时更新。
- 除非手动删除，否则"已完成"和"日志"标签页中的历史记录在应用重启后仍会保留。
:::
