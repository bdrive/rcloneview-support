---
slug: manage-hetzner-object-storage-cloud-sync-rcloneview
title: "管理 Hetzner Object Storage — 使用 RcloneView 同步与备份文件"
authors:
  - kai
description: "了解如何将 Hetzner Object Storage 连接到 RcloneView 以实现自动同步与备份。通过简单的图形界面管理兼容 S3 的存储桶——无需使用命令行。"
keywords:
  - Hetzner Object Storage
  - Hetzner 云备份
  - RcloneView Hetzner
  - 兼容 S3 的云存储
  - Hetzner 文件同步
  - 云备份图形界面
  - Hetzner rclone
  - 对象存储备份
  - 欧洲云存储
  - Hetzner 存储桶管理
tags:
  - RcloneView
  - hetzner
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Hetzner Object Storage — 使用 RcloneView 同步与备份文件

> 将 Hetzner Object Storage 连接到 RcloneView，无需编写任何命令行指令即可自动完成备份任务。

Hetzner Object Storage 是一项兼容 S3 的云存储服务，为需要可靠的欧洲数据存储的团队提供极具竞争力的价格。无论您是要归档项目文件、备份服务器快照，还是从另一个云端复制数据，RcloneView 都能为您提供一个可视化界面来管理这一切。您可以像配置任何兼容 S3 的服务商一样配置 Hetzner——只需提供访问密钥（access key）、私密密钥（secret key）以及存储桶端点（endpoint）——然后通过您管理其他所有远程时所使用的同一个双面板文件浏览器来管理一切。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Hetzner Object Storage 连接到 RcloneView

Hetzner Object Storage 使用 S3 协议，因此在 RcloneView 中的设置流程与 Amazon S3 或 Wasabi 相同。打开**远程标签页（Remote tab）**并点击**新建远程（New Remote）**。在服务商列表中选择 **S3**，并选择 **Hetzner** 作为服务商。您需要从 Hetzner 云控制台中获取三项信息：**访问密钥 ID（Access Key ID）**、**私密访问密钥（Secret Access Key）**，以及您所选区域的**端点 URL（endpoint URL）**——例如，Falkenstein 区域的端点为 `fsn1.your-objectstorage.com`。

输入凭据和区域端点后，点击**保存（Save）**。RcloneView 会建立连接，您的 Hetzner 存储桶将立即以可浏览文件夹的形式出现在文件浏览器中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Hetzner Object Storage remote in RcloneView" class="img-large img-center" />

连接完成后，您可以浏览存储桶、通过拖放上传文件、下载对象、重命名项目、删除文件以及创建新文件夹——全程无需接触终端。面包屑路径栏会显示您在存储桶层级结构中的当前位置，页脚则会汇总所选目录的文件总数与总大小。

## 上传与整理文件

RcloneView 的双面板浏览器让您可以方便地在 Hetzner Object Storage 与本地设备或其他云端之间移动数据。在左侧面板打开本地磁盘，在右侧面板打开您的 Hetzner 远程，然后跨面板拖动文件即可。从 Windows 资源管理器上传时，您可以直接将文件拖入 RcloneView 面板，文件就会一步到位地进入您的 Hetzner 存储桶。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to Hetzner Object Storage in RcloneView" class="img-large img-center" />

对于大型数据集——例如一家媒体制作公司要备份 500 GB 的渲染输出——同步向导中的**多线程传输（multi-threaded transfer）**设置可让您并行推送更多数据。默认的 4 路并发流对大多数连接来说效果良好，但在高带宽链路上针对大文件提高这一数值可以显著缩短传输时间。

## 运行同步与备份任务

对于持续性的备份工作流，RcloneView 的**任务管理器（Job Manager）**会为您提供一份持久化的已配置同步任务列表，您可以按需运行，也可以按计划运行。从**主页标签页（Home tab）**打开它，点击**添加任务（Add Job）**即可启动 4 步同步向导：

1. **第 1 步：** 设置源（本地文件夹或其他远程）与目标（您的 Hetzner 存储桶或其中的子目录），然后为任务命名
2. **第 2 步：** 配置并发设置——文件传输数量、多线程数，以及是否启用校验和验证以进行完整性检查
3. **第 3 步：** 添加过滤规则，排除您不希望进入 Hetzner 的文件类型或路径，例如 `.tmp` 文件或 `/cache/` 目录
4. **第 4 步（PLUS 许可证）：** 设置类似 crontab 的计划任务，使备份按设定的间隔自动运行

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Hetzner Object Storage in RcloneView" class="img-large img-center" />

在提交新任务之前，使用**试运行（Dry Run）**选项预览具体哪些文件会被复制或删除。这在您首次设置同步，或每次修改过滤规则以确保没有重要内容被误排除时尤其有用。

## 查看传输历史

任务运行后，**任务历史（Job History）**视图会记录每一次执行：开始时间、耗时、传输总大小、平均速度、文件数量以及最终状态。对于每晚向 Hetzner Object Storage 执行备份的团队而言，这份日志提供了清晰明了的审计记录，让您能够看出哪些运行顺利完成、哪些出现了错误——这对故障排查以及证明符合数据保留策略都很有帮助。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Hetzner Object Storage sync in RcloneView" class="img-large img-center" />

历史记录的筛选功能可让您按日期范围（今天、昨天、上周、上月）缩小结果范围，从而无需翻遍整个日志即可快速调出特定备份时段的记录。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 进入**远程标签页 > 新建远程**，选择 **S3**，并选择 **Hetzner** 作为服务商。
3. 输入从 Hetzner 云控制台获取的 Hetzner 访问密钥 ID、私密访问密钥以及区域端点。
4. 打开**任务管理器**，创建一个以您的 Hetzner 存储桶为目标的同步任务，然后点击**运行任务（Run Job）**。

连接 Hetzner Object Storage 后，您将获得完全通过简洁图形界面管理的可靠欧洲对象存储——无需任何 rclone 命令。

---

**相关指南：**

- [管理 Hetzner Storage Box — 使用 RcloneView 同步与备份](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [管理 Wasabi 云存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2 — 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
