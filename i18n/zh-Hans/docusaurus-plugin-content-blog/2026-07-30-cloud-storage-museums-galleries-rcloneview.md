---
slug: cloud-storage-museums-galleries-rcloneview
title: "博物馆与美术馆的云存储 — 使用 RcloneView 保存数字馆藏"
authors:
  - jay
description: "使用为博物馆和美术馆打造的 RcloneView，在多个云端之间管理高分辨率馆藏扫描件和存档记录。"
keywords:
  - 博物馆云存储
  - 数字馆藏保存
  - 美术馆存档备份
  - RcloneView 博物馆
  - 存档存储软件
  - 馆藏数字化备份
  - 多云存档管理
  - 非营利组织云存储
  - 博物馆数据管理
  - 文化遗产备份
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 博物馆与美术馆的云存储 — 使用 RcloneView 保存数字馆藏

> 在不将小型策展团队锁定在单一提供商的情况下，跨多个云端安全保存高分辨率馆藏扫描件、状况报告和借展记录。

一家博物馆在对永久馆藏进行数字化时，可能会积累数太字节的高分辨率 TIFF 扫描件、文物的 RAW 照片以及 3D 采集数据，这些数据往往分散在捐赠的云账户、机构的 Google Workspace，以及像 Backblaze B2 或 Wasabi 这样由拨款资助的存档层中。RcloneView 为登记员和数字档案管理员提供一个统一界面来浏览、比较和迁移馆藏，而无需为每个提供商学习不同的管理控制台。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 整合分散在多个云端的馆藏记录

机构的存储安排很少能保持整洁 —— 一笔拨款可能资助一年的 Backblaze B2 存档存储，而日常策展文件却存放在 Google Drive 或 SharePoint 中，巡回展览又会增加与合作机构相关联的更多账户。RcloneView 可以在 Windows、macOS 和 Linux 上，通过一个窗口挂载和同步 90 多个提供商，因此登记员可以并排查看来自各个来源的馆藏文件夹，而不必在浏览器标签页和各个独立的桌面应用之间切换。

多面板 Explorer 最多可同时支持四个面板，让数字档案管理员在整理新入藏品时，能够同时查看正在处理的馆藏、存档备份以及正在传入的捐赠者传输文件。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a museum collection remote in RcloneView" class="img-large img-center" />

## 使用 Folder Compare 验证数字化馆藏

在数字化服务商或馆内影像工作站上传一批文物扫描件之后，Folder Compare 会将送达的文件与存档远程端上预期的内容进行核对，标记出缺失、大小不匹配或仅存在于一侧的文件。这可以在扫描批次被标记为已存档之前发现不完整的传输，这一点很重要，因为重新拍摄易损文物并非可以随意重来的事情。

仅复制差异文件的行为意味着，对去年的数字化批次运行比较不会浪费带宽去重新传输任何字节相同的文件 —— 只有实际发生变化或新到达的对象才会被移动。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing digitized collection files between local storage and a cloud archive" class="img-large img-center" />

## 在没有专职 IT 团队的情况下安排存档备份

许多博物馆和美术馆的技术人员配置精简，因此需要手动触发的同步任务在繁忙的展览布展期间很容易被遗忘。PLUS 许可证用户可以为馆藏备份任务附加 crontab 风格的计划，使扫描件和状况报告自动传输到第二个提供商，并可通过模拟选项在正式生效前确认时间安排。之后 Job History 会提供一份简单的审计记录 —— 当拨款报告需要证明存档备份确实按计划运行时，这非常有用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated archival backup for a museum collection" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将持有馆藏数据的每个云账户 —— Google Drive、SharePoint，以及 Backblaze B2 或 Wasabi 这样的存档提供商 —— 分别连接为独立的远程端。
3. 针对最近的数字化批次运行 Folder Compare，在存档前确认没有遗漏。
4. 构建一个 Sync 任务，将新入藏品镜像到第二个提供商，并在 PLUS 上设置计划，让备份不再依赖有人记得手动运行。

一致且经过验证的备份，正如恒温恒湿的库房保护实体文物一样，保护着馆藏的数字记录。

---

**相关指南：**

- [使用 RcloneView 跨多个云端管理数字资产：完整工作流指南](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [摄影师的云存储 — 备份 RAW 文件、同步 Lightroom 目录并交付给客户](https://rcloneview.com/support/blog/cloud-storage-photographers-raw-backup-rcloneview)
- [非营利组织和慈善机构的云存储 — 使用 RcloneView 管理捐赠和数据](https://rcloneview.com/support/blog/cloud-storage-nonprofit-charities-rcloneview)

<CloudSupportGrid />
