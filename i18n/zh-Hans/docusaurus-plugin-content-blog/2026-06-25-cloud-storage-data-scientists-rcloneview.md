---
slug: cloud-storage-data-scientists-rcloneview
title: "面向数据科学家的云存储 — 使用 RcloneView 管理训练数据和模型"
authors:
  - alex
description: "借助 RcloneView 跨 S3、Google Drive 等平台管理机器学习数据集、模型检查点和实验文件 — 专为数据科学团队打造。"
keywords:
  - 面向数据科学家的云存储
  - 机器学习数据集云存储
  - ml 模型检查点云备份
  - 数据科学云文件管理
  - 训练数据 s3 备份 rcloneview
  - ai 研究人员云存储
  - 备份 ml 数据集 google drive s3
  - 数据科学多云工具
  - rcloneview 数据科学工作流
tags:
  - RcloneView
  - cloud-storage
  - ai
  - backup
  - guide
  - industry
  - amazon-s3
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 面向数据科学家的云存储 — 使用 RcloneView 管理训练数据和模型

> 数据科学家每天都要处理数以 GB 计的数据 — RcloneView 提供多云图形界面，帮助你在 S3、Google Drive 等平台之间管理训练数据集、模型检查点和实验输出。

机器学习工作流会产生海量文件：跨越数百 GB 的原始数据集、预处理后的特征存储、训练好的模型检查点，以及需要长期归档的实验日志。在本地机器、云对象存储和团队共享云盘之间移动这些文件既耗时又存在风险，尤其是在传输悄然失败的情况下。RcloneView 为数据科学团队提供了一个可视化文件管理器，可在 Windows、macOS 和 Linux 上通过单一窗口管理 90 多个云存储提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在同一视图中连接所有存储

机器学习流水线通常同时跨越多个存储系统：用于训练运行和模型产物的 Amazon S3 存储桶、用于团队数据集的共享 Google Drive、用于原始数据采集的本地 NAS，以及可能用于经济高效的长期归档的 Backblaze B2 存储桶。RcloneView 允许你将每一个都添加为命名远程，并在并排的资源管理器面板中打开它们 — 无需在浏览器标签页或命令行会话之间切换，即可在不同提供商之间拖拽文件并监控传输进度。

RcloneView 可在同一窗口内管理 90 多个云存储提供商 — S3、Google Drive、Backblaze B2 等 — 在免费版许可下即可免费同步和比较。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging training data files between cloud storage providers in RcloneView" class="img-large img-center" />

一个处理 200 GB 标注图像的计算机视觉团队，可以同时连接他们的标注共享云盘和 S3 训练存储桶，然后通过浏览两个面板并选择已变更的目录，只复制新增的批次。通过机构 WebDAV 或 Google Drive 共享的公共数据集也可以作为远程使用，与私有 S3 存储桶在同一会话中并存。

## 借助实时传输监控传输大型模型文件

上传一个 15 GB 的检查点文件，或将多部分数据集同步到 S3，都需要可靠的反馈信息。RcloneView 的**传输标签页**会显示每个活动任务的传输速度、已完成字节数和文件数量。可配置的多线程传输设置会将大文件上传拆分为并行数据流，这能明显加快向 Wasabi 或 Cloudflare R2 等兼容 S3 的提供商上传的速度，因为这些平台的单文件开销会迅速累积。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring for large ML dataset uploads in RcloneView" class="img-large img-center" />

如果传输因网络波动或 VPN 超时而中断，重新运行同步任务会从中断处继续：RcloneView 会跳过已经传输的文件，并从剩余部分继续传输。对于 TB 级数据集，这可以避免在冗余重试上浪费数小时。

## 使用文件夹比较验证数据集完整性

在预处理流水线修改或增强本地数据集之后，在启动训练任务之前确认云端备份反映了当前状态，可以节省宝贵的 GPU 时间。RcloneView 的**文件夹比较**视图会并排显示任意两个文件夹（本地或云端）之间的差异，识别出仅存在于左侧、仅存在于右侧或大小不同的文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison view showing dataset differences between local disk and S3 storage" class="img-large img-center" />

对数据科学家而言，这是一项训练前的健全性检查：在投入 GPU 预算之前，验证云端训练目录是否与预期的本地基线一致。被标记为不同的文件可以逐个复制以解决差异。在同步任务中启用**校验和验证**，可以捕获仅靠大小比较无法发现的数据损坏。

## 通过定时同步自动化数据集备份

持续运行的数据采集流水线，若能获得无需手动触发的自动云备份，将大有裨益。使用 PLUS 许可，RcloneView 的类 crontab 调度器可以在设定的时间间隔触发同步任务 — 例如流水线完成后的每晚，或采集活跃期间的每小时。**1:N 同步**功能可将一个源目录同时镜像到多个目标，因此一个原始数据文件夹可以在一次任务运行中同时备份到 S3 和 Google Drive。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an automated dataset backup job in RcloneView" class="img-large img-center" />

同步向导第 3 步中的过滤规则可让你排除临时文件、检查点中间产物以及不应出现在干净备份中的缓存目录 — 无需编写自定义脚本即可控制存储成本。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过“远程”标签页 > “新建远程”，将你的 S3 存储桶（Amazon S3、Wasabi、Cloudflare R2）添加为远程。
3. 在同一会话中添加 Google Drive 或任何其他协作存储作为第二个远程。
4. 创建从本地数据目录到云端目标的同步任务 — 在第 3 步中使用过滤规则排除临时文件和流水线缓存目录。

团队的数据集、检查点和实验输出将变得可导航，并能可靠地完成备份，无需每位团队成员都具备命令行专业知识。

---

**相关指南：**

- [使用 RcloneView 构建 AI 训练数据集流水线](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)
- [使用 RcloneView 管理 Amazon S3 云同步与备份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [面向 DevOps 和软件团队的云存储 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
