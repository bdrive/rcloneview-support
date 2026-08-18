---
slug: cloud-storage-public-libraries-rcloneview
title: "面向公共图书馆的云存储 — 使用 RcloneView 数字化并共享馆藏"
authors:
  - morgan
description: "使用 RcloneView 在云存储中管理公共图书馆的数字化档案、多分馆备份和读者记录。"
keywords:
  - 图书馆云存储
  - 图书馆数字化备份
  - RcloneView 图书馆
  - 多分馆图书馆同步
  - 数字档案备份
  - 图书馆云迁移
  - 馆际文件共享
  - 公共图书馆IT
  - 图书馆云备份
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

# 面向公共图书馆的云存储 — 使用 RcloneView 数字化并共享馆藏

> 数字化档案、读者档案和多分馆记录都需要一个可靠的存放之处,以及无需专职IT团队即可在分馆之间移动的方式。

一个正在数字化数十年本地报纸和历史照片的公共图书馆系统,会产生数TB的扫描TIFF和PDF文件,这些文件需要转移到永久性的云端档案库,同时又不能占满某个分馆的本地存储空间。再加上共享目录、活动资料和行政记录的多分馆运营,图书馆IT人员——通常只有一名兼职管理员——需要一个无需脚本专业知识即可处理传输和备份的工具。RcloneView 为图书馆系统提供了一种点击式的方法,在各分馆和云服务商之间移动、同步和归档文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 归档数字化项目

数字化项目会产生大批高分辨率扫描文件,需要从本地扫描工作站转移到长期云存储,而不必逐个文件夹手动复制。在 RcloneView 中设置从扫描工作站的本地文件夹到云端档案远程的单向同步作业,如果只想推送已完成的批次而非仍在进行中的部分扫描,可以使用"最大文件存在时间"或"最大文件大小"过滤器。

<img src="/support/images/en/blog/new-remote.png" alt="为数字化图书馆资料添加云端档案远程" class="img-large img-center" />

在对任何新的数字化批次进行首次正式同步之前先运行试运行(Dry Run)——它会准确列出将要传输的扫描文件,这样能在数千张归档错误的图像进入档案库之前,发现仍在输出到错误文件夹的扫描仪。

## 跨多个分馆同步记录

拥有多个分馆的图书馆系统通常需要在各处提供相同的目录、活动资料或共享的行政文档。RcloneView 的 1:N 同步允许一个分馆在单次作业中将更新推送到多个目标远程——这对于将更新的活动日程或共享参考资料从中央分馆分发到每个分支馆非常有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在分馆之间同步共享图书馆记录" class="img-large img-center" />

即使在 FREE 许可下,也可以完全读写连接 S3、Azure 或 Backblaze B2,这对于预算紧张但仍需要用于长期保存的对象存储、而非有容量上限的消费级同步文件夹的系统来说非常重要。

## 安排无人值守备份

图书馆IT人员很少有时间盯着夜间传输。一旦在分馆的本地服务器与其云端备份目标之间配置好同步作业,PLUS许可用户就可以附加类似crontab的计划,让备份在无人值守的情况下于夜间运行,并在保存前预览下一次计划运行的时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="为图书馆分馆安排夜间备份作业" class="img-large img-center" />

之后,作业历史(Job History)会提供简单的审计记录——每次运行的传输状态、文件数量和耗时——因此负责监管多个分馆的单个管理员无需逐一查看每个地点,就能确认备份已完成。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程管理器中将档案存储和分馆存储添加为远程。
3. 为数字化上传或跨分馆记录共享构建同步作业,先使用试运行。
4. 安排定期备份并查看作业历史,确认其运行正常。

图书馆的馆藏和记录,其安全程度取决于上一次真正完成的备份——RcloneView 让这一过程在每个分馆都保持可见和一致。

---

**相关指南:**

- [面向博物馆和档案馆的云存储 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [面向K-12学校的云存储 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-k12-schools-rcloneview)
- [使用 RcloneView 将 NAS 备份到多个云端](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
