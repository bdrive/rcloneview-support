---
slug: cloud-storage-civil-engineering-rcloneview
title: "土木工程公司的云存储 — 使用 RcloneView 管理项目文件、测量数据和备份"
authors:
  - tayson
description: "面向土木工程公司的云存储：使用跨平台 GUI 工具 RcloneView，在多个云之间整理项目图纸、测量数据和备份。"
keywords:
  - 土木工程云存储
  - 土木工程文件备份
  - 工程项目文件同步
  - 测量数据云备份
  - 工程师多云备份
  - RcloneView
  - 云同步 GUI
  - 大型图纸文件云存储
  - 项目归档云存储
  - rclone GUI
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 土木工程公司的云存储 — 使用 RcloneView 管理项目文件、测量数据和备份

> 无需编写任何命令脚本，即可在多个云之间安全保存图纸、测量数据和已结项的项目。

一家中型土木工程公司可能把进行中的道路设计项目放在 Google Drive，把客户交付物放在 Box 或 OneDrive，把多年的已结项归档放在 NAS 上。每个位置都有各自的界面，使得统一备份变得困难。RcloneView 将它们集中到一个窗口中，让您可以直观地复制、比较并安排传输计划。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么工程数据需要多云方案

工程项目会产生体量大、类型混杂的文件集：CAD 图纸、GIS 导出文件、点云扫描、计算电子表格以及已签署的 PDF 文件包。客户往往会指定交付物的存放位置，因此单一提供商很难满足所有需求。RcloneView 可连接 90 多个提供商，因此 Google Drive、Box、OneDrive、Amazon S3 和本地 NAS 都可以并排显示在资源管理器中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中为工程公司添加云远程" class="img-large img-center" />

RcloneView 可在一个窗口中挂载并同步 90 多个提供商，支持 Windows、macOS 和 Linux，因此外勤笔记本电脑和办公室工作站可以共用同一套工作流程。

## 将已结项项目归档到低成本对象存储

项目结项后，其文件很少再变动，但必须保留多年。使用双窗格资源管理器，或在远程之间拖放，将已完成的项目文件夹从活动工作区复制到 Backblaze B2 或 Wasabi 等 S3 兼容存储桶。在不同远程之间移动会执行复制操作，因此在您验证结果之前，原始文件保持不变。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="项目归档的云到云传输" class="img-large img-center" />

## 使用 Folder Compare 验证交付物

在从工作盘删除任何内容之前，请在源和归档之间运行 Folder Compare。筛选器会显示仅在左侧、仅在右侧以及有差异的文件，让您确认每一套图纸都已完整传输。对任何同步作业，请先运行 Dry Run，预览哪些文件将被复制或删除。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 显示项目文件夹之间的差异" class="img-large img-center" />

## 为进行中的项目安排夜间备份

创建一个从项目共享到第二个云的同步作业，并添加 crontab 风格的计划，使备份在下班后运行。计划功能需要 PLUS 许可证；手动作业、作业历史记录（Job History）以及同步到多个目标的 1:N 同步可在 FREE 许可证下使用。作业历史记录会记录每次运行的状态、大小和文件数量，为您提供审计线索。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排夜间备份作业" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 为活动工作区、NAS 和归档存储桶添加远程。
3. 创建一个从进行中项目到归档的同步作业，并先运行 Dry Run。
4. 添加计划（PLUS），并在最初几次运行后查看作业历史记录。

保护多年的工程记录，不再需要定制脚本。

---

**相关指南：**

- [建筑事务所的云存储](https://rcloneview.com/support/blog/cloud-storage-architecture-firms-rcloneview)
- [Dry Run — 预览云同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [作业历史记录与传输日志](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
