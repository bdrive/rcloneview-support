---
slug: cloud-storage-drone-survey-mapping-rcloneview
title: "无人机测绘公司的云存储 — 使用 RcloneView 管理大型数据集"
authors:
  - jay
description: "使用 RcloneView 的同步、挂载和比较工具，跨多个云存储提供商管理无人机测绘影像、正射影像和 LiDAR 数据集。"
keywords:
  - 无人机测绘云存储
  - 测绘公司备份
  - 正射影像文件存储
  - LiDAR数据云同步
  - 无人机影像备份
  - 地理空间数据管理
  - RcloneView 无人机测绘
  - 测绘公司云存储
  - 无人机数据传输
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

# 无人机测绘公司的云存储 — 使用 RcloneView 管理大型数据集

> 原始飞行影像、处理后的正射影像和点云数据积累得很快 — RcloneView 帮助团队在使用的每一个云端上保持数据井然有序。

一次无人机测绘飞行就可能产生数万张原始图像,而正射影像、LiDAR 点云等处理后的成果通常每个场地都能达到数十 GB。测绘公司通常会将数据分散存放:用高速本地硬盘进行处理,用云存储向客户交付,再用成本更低的归档层保存已完成的项目 — 这意味着文件需要在不同位置之间持续移动。RcloneView 让你在一个界面中管理这种数据流动,而不必在各家提供商各自的上传工具之间来回切换。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 整理原始影像与处理后的交付成果

为原始影像归档、处理工作区,以及与客户共享成果的云端位置分别设置独立的远程。RcloneView 的多面板浏览器最多可同时查看四个位置,方便你在把原始图像从本地磁盘归档之前,确认处理后的正射影像与对应的原始飞行文件夹一致。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中为无人机测绘数据设置云端远程" class="img-large img-center" />

在 FREE 许可下即可以完整的读写权限连接 S3、Azure 或 Backblaze B2,这对需要将大量处理后的数据集迁移到对象存储以供长期客户访问、且不希望按坐席付费的测绘公司来说尤为重要。

## 无需手动上传即可同步大型飞行数据集

将同步任务的源设置为本地影像文件夹,目标设置为云存储,然后在 Advanced Settings 中根据你的上传带宽调整并发文件传输数 — 当有大量小尺寸原始图像时,较高的并发度比处理少量大文件更有优势。使用 max file age 过滤器,可以在外业繁忙的日子里只同步最近的飞行数据,为时效性更强的交付成果留出带宽。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="使用 RcloneView 将无人机测绘影像同步到云存储" class="img-large img-center" />

在首次同步一个新场地之前先运行 Dry Run,确认文件夹结构和文件数量与飞行日志相符,从而在漏传的文件夹演变成面向客户的问题之前及时发现它。

## 使用 Folder Compare 核实交付成果

在将项目交付客户或归档之前,使用 Folder Compare 检查已上传到云存储的所有内容是否与本地处理文件夹一致。它会标记出仅存在于一侧的文件以及大小不同的文件,从而在客户发现正射影像中缺失图块之前,及时发现被中断的上传。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中将本地无人机测绘文件与云存储进行比较" class="img-large img-center" />

对于经常合作的测绘客户,可以将这些流程保存为计划同步任务(需要 PLUS 许可),这样每次新的飞行数据就会按照你设置的计划到达正确的客户文件夹,而 Job History 会记录每个数据集的具体交付时间。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 为本地影像盘、处理工作区和客户交付用的云存储添加远程。
3. 配置一个同步任务,并根据典型的飞行数据集大小调整传输并发度。
4. 在归档原始影像之前,每次上传后都运行 Folder Compare,确认数据集已完整传输。

在多个存储层之间保持飞行数据井然有序,可以减少查找文件的时间,并让你更有信心地确保每一次客户交付都是完整的。

---

**相关指南:**

- [农业领域的云存储 — 使用 RcloneView 管理田间数据](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [使用 RcloneView 进行建筑项目管理的云存储](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [使用 RcloneView 加速大文件云端传输](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
