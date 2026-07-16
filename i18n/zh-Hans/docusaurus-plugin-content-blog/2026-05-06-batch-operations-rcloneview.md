---
slug: batch-operations-rcloneview
title: "批量操作——在 RcloneView 中自动化多步骤云工作流"
authors:
  - tayson
description: "使用 RcloneView 的批量操作功能，将多个云任务串联成自动化工作流。按顺序创建、复制、同步、验证并清理文件。"
keywords:
  - RcloneView 批量操作
  - 自动化云工作流 RcloneView
  - 多步骤云自动化
  - RcloneView 工作流自动化
  - 批量云文件操作
  - rclone 批量处理 GUI
  - 云任务自动化 RcloneView
  - 顺序云操作
  - 自动化云同步步骤
  - RcloneView 高级自动化
tags:
  - RcloneView
  - feature
  - automation
  - job-management
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 批量操作——在 RcloneView 中自动化多步骤云工作流

> RcloneView 的批量操作功能可将多个云任务——创建文件夹、复制文件、同步、验证、移动和清理——串联成一个从头到尾自动运行的工作流。

大多数云管理任务并非单一步骤操作。一个典型的文件处理工作流可能包括：创建暂存文件夹、将源文件复制进去、将其同步到生产存储桶、验证传输结果，然后清除暂存内容。按顺序手动完成每个步骤既繁琐又容易出错。RcloneView 的批量操作功能（测试版）正是通过在步骤之间使用变量传递、按定义顺序链接操作，来自动化此类多步骤工作流。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么是批量操作？

批量操作是 RcloneView 中的一项自动化功能，可让你定义一系列按顺序执行的云文件操作。批量中的每个操作称为一个"步骤"，各步骤依次执行——每个步骤完成后才会开始下一个。支持的步骤类型包括：

- **mkdir** —— 在指定云路径创建文件夹
- **copyFolder / copyFile** —— 在远程之间复制文件夹或单个文件
- **sync** —— 将源同步到目标
- **check** —— 验证源与目标之间的文件夹内容是否一致
- **move** —— 在位置之间移动文件或文件夹
- **rename** —— 重命名云路径下的文件
- **delete / deleteFile** —— 基于过滤条件的删除或单个文件删除
- **purge** —— 删除整个目录树
- **rmdirs** —— 删除空目录
- **filelist** —— 生成文件清单
- **sleep** —— 暂停执行指定时长

这种灵活性支持无需任何脚本编写即可实现广泛的实际自动化场景。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring a multi-step batch operation workflow in RcloneView" class="img-large img-center" />

## 构建多步骤云工作流

设想一个处理每日报表文件的数据团队：他们需要将新到达的文件复制到处理文件夹，将处理结果同步到 S3 存储桶，通过校验和比对验证同步结果，然后删除本地暂存文件。作为 RcloneView 中的一个批量操作：

1. **mkdir** —— 在暂存远程中创建 `processing/YYYY-MM-DD` 文件夹
2. **copyFolder** —— 将新到达的文件复制到处理文件夹
3. **sync** —— 将处理文件夹同步到 S3 生产存储桶
4. **check** —— 验证 S3 存储桶内容与处理文件夹一致
5. **purge** —— 验证成功后删除暂存文件夹

步骤之间的变量传递允许一个步骤的输出（例如动态生成的文件夹路径）传递给下一个步骤，从而使按日期戳记的工作流配置变得简单直接。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-step batch workflow automating cloud-to-cloud data pipeline in RcloneView" class="img-large img-center" />

## 执行前的空运行预览

与单个同步任务一样，批量操作也支持空运行（dry-run）预览模式。在运行会修改或删除云数据的批量操作之前，先执行一次空运行，即可准确查看每个步骤将执行的操作，而不会产生任何实际更改。对于错误代价高昂、难以撤销的生产环境工作流而言，这一点至关重要。

逐步进度跟踪会显示当前正在执行的步骤以及每个已完成步骤的结果——因此你可以在 RcloneView 的界面中监控复杂的多步骤操作。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Monitoring batch operation step-by-step progress in RcloneView" class="img-large img-center" />

## 重要提示：测试版状态

批量操作是 RcloneView 中的一项测试版功能。虽然核心功能已经确认可用并已在应用程序中提供，但对于复杂的多步骤工作流，其稳定性可能有所差异。在将批量工作流部署到关键数据管道之前，请务必在非生产环境中充分测试。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Reviewing batch operation execution status in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 从任务管理器界面访问批量操作功能。
3. 按所需执行顺序将步骤添加到批量操作中。
4. 先运行空运行预览，然后执行完整的批量工作流。

RcloneView 中的批量操作弥合了手动云管理与完整脚本编写之间的差距——通过可视化界面为你提供强大的多步骤自动化能力，无需编写任何代码。

---

**相关指南：**

- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneView 中的过滤规则与选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [一对多同步——RcloneView 中的多目标同步](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
