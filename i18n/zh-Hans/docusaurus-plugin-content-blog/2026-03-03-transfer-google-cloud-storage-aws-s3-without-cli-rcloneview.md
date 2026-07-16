---
slug: transfer-google-cloud-storage-aws-s3-without-cli-rcloneview
title: "使用 RcloneView 无需命令行即可在 Google Cloud Storage 和 AWS S3 之间传输文件"
authors:
  - tayson
description: "使用 RcloneView 的可视化 GUI 在 Google Cloud Storage (GCS) 和 AWS S3 之间移动、同步和迁移数据——无需 gsutil、aws cli 或编写脚本。"
keywords:
  - google cloud storage to s3
  - gcs to aws s3 transfer
  - google cloud storage migration
  - gcs s3 sync
  - transfer between gcs and s3
  - google cloud storage gui
  - gcs backup to s3
  - multi-cloud transfer gcs
  - google cloud storage rclone
  - gcs to s3 without cli
tags:
  - google-cloud-storage
  - aws-s3
  - migration
  - sync
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 无需命令行即可在 Google Cloud Storage 和 AWS S3 之间传输文件

> 在 Google Cloud Storage 和 AWS S3 之间管理数据通常意味着要同时使用 gsutil、aws cli 和自定义脚本。RcloneView 让你可以在可视化界面中完成这一切——在几分钟内浏览、比较、同步和调度 GCS 与 S3 之间的传输。

对大多数工程团队来说，多云已成为现实。你的机器学习训练数据存放在 GCS 存储桶中，你的生产环境资源在 S3 上，而总得有人让它们保持同步。传统方式——用 gsutil 和 aws cli 编写 shell 脚本——虽然可行，但既脆弱又难以监控，非工程师更是无从管理。

RcloneView 原生连接 GCS 和 S3，为你提供统一的 GUI，用于在这两个最大的云平台之间浏览、传输、比较和自动化数据移动。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要在 GCS 和 S3 之间迁移数据？

团队之间在 Google Cloud Storage 和 AWS S3 之间传输数据，通常出于以下几个常见原因：

**多云冗余** — 将关键数据存储在两大主要服务商上，可以防范单一服务商级别的中断和厂商锁定。如果一个云出现故障，你的数据仍可从另一个云访问。

**成本优化** — GCS 和 S3 在存储、出站流量和操作方面的定价不同。将冷数据迁移到对你的使用模式来说更便宜的服务商，可以节省大量费用。

**跨平台工作流** — 你的数据科学团队使用 GCP（BigQuery、Vertex AI），而你的生产基础设施运行在 AWS 上。数据需要在两者之间流动。

**迁移** — 在不停机的情况下从 GCP 迁移到 AWS（或反之），需要可靠的、可恢复的传输方式。

**合规与数据驻留** — 某些法规要求在特定地区或服务商保留数据副本。

## 设置 GCS 和 S3 远程

### 添加 Google Cloud Storage

1. 打开 RcloneView 并点击 **Add Remote**。
2. 从服务商列表中选择 **Google Cloud Storage**。
3. 选择你的身份验证方式：
   - **Service Account JSON** — 推荐用于服务器到服务器的传输。上传你的服务账号密钥文件。
   - **OAuth (browser login)** — 适用于个人 GCP 账号。请参阅 [OAuth 登录指南](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)。
4. 如有提示，设置你的 **project ID** 和默认的 **bucket location**。
5. 保存远程——现在你的 GCS 存储桶即可浏览。

### 添加 AWS S3

1. 再次点击 **Add Remote**。
2. 从服务商列表中选择 **Amazon S3**。
3. 输入你的 **Access Key ID** 和 **Secret Access Key**。
4. 选择你的 **region** 和 **endpoint**。
5. 保存——你的 S3 存储桶就会出现在 Explorer 中。

有关 S3 的详细设置，请参阅 [AWS S3 连接指南](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)。

<img src="/support/images/en/blog/new-remote.png" alt="Add GCS and S3 remotes in RcloneView" class="img-large img-center" />

## 并排浏览 GCS 和 S3

两个远程都连接好后，在 RcloneView 的双栏 Explorer 中打开它们。GCS 存储桶显示在左侧，S3 存储桶显示在右侧（或反之）。你可以：

- **同时浏览** 两侧的存储桶和文件夹。
- **查看文件大小、日期和数量**，了解各处的数据情况。
- **拖放** 文件，直接从 GCS 拖到 S3——或使用内置的复制/移动命令。

这种并排视图让你无需在 GCP 控制台和 AWS 控制台之间切换，即可即时了解两个云的情况。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse GCS and S3 side by side in RcloneView" class="img-large img-center" />

## 传输场景

### 场景 1：一次性迁移（GCS → S3）

将所有数据从 GCS 迁移到 S3 以进行平台迁移：

1. **创建一个 Copy job**：
   - 源：GCS 远程 → 选择你的存储桶
   - 目标：S3 远程 → 选择目标存储桶
2. **配置以实现最大速度**：
   - 并行传输数：8–16（GCS 和 S3 都能很好地处理高并发）
   - 分块大小：对大文件使用 64MB–128MB
   - 启用 `--fast-list` 标志以加快目录列出速度
3. **运行任务**并实时监控进度。

对于大型迁移，可多次运行 Copy job。首次完整复制后，后续运行只会传输新增或更改的文件——这使得中断后恢复变得安全可靠。

### 场景 2：持续同步（双向）

持续保持 GCS 存储桶和 S3 存储桶的同步：

1. 为主方向**创建一个 Sync job**（GCS → S3）。
2. 使用[任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)**调度**它每小时或每天运行。
3. 如果需要双向同步，**添加一个反向 Sync job**（S3 → GCS）。
4. **使用批量任务（Batch Jobs）**（v1.3）依次运行两个方向。

### 场景 3：选择性跨云备份

仅将特定数据备份到另一个云：

1. **使用[筛选规则](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)** 来包含/排除特定文件类型或文件夹。
   - 示例：仅同步 `*.parquet` 和 `*.csv` 文件（机器学习数据集）
   - 示例：排除 `tmp/` 和 `logs/` 目录
2. **创建一个应用了这些筛选条件的定时 Copy job**。

## 比较 GCS 和 S3 的内容

在传输前后，使用[文件夹比较](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)来验证两个存储桶包含相同的数据：

- **仅存在于 GCS 中的文件** — 会被高亮标出，便于识别。
- **仅存在于 S3 中的文件** — 显示目标位置存在但源位置不存在的内容。
- **不同的文件** — 名称相同但大小或校验和不同的文件。
- **相同的文件** — 在两个云上确认匹配的文件。

这对迁移验证极为宝贵：在复制数 TB 的数据之后，你可以证明每个文件都完整无误地到达目的地。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare GCS and S3 bucket contents" class="img-large img-center" />

## 优化传输速度

GCS 和 S3 都是高性能对象存储，因此你可以放心地加大传输强度：

| 设置 | 推荐值 | 原因 |
|---------|-------------------|-----|
| 并行传输数 | 8–16 | 两个服务商都能很好地处理并发请求 |
| 分块大小 | 64MB–128MB | 减少大文件的 API 开销 |
| Checkers | 16–32 | 加快大目录的比较阶段 |
| 缓冲区大小 | 128MB | 平滑云区域之间的网络延迟 |
| Fast-list | 已启用 | 大幅减少目录列出所需的 API 调用次数 |

### 跨区域注意事项

如果你的 GCS 存储桶位于 `us-central1`，而你的 S3 存储桶位于 `eu-west-1`，数据必须跨区域穿越互联网传输。为获得最佳性能：

- 尽可能让源和目标位于同一地理区域。
- 在非高峰时段运行传输，以避免网络拥堵。
- 监控出站流量费用——GCS 和 S3 都会对离开其网络的数据收费。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor GCS to S3 transfer speed" class="img-large img-center" />

## 自动化 GCS ↔ S3 工作流

### 每日数据管道

设置一个每晚运行的定时任务：

1. 将新的机器学习训练数据从 GCS 同步到 S3，供基于 AWS 的训练任务使用。
2. 将结果从 S3 复制回 GCS，用于 BigQuery 分析。
3. 管道完成后通过 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 获得通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS to S3 data sync" class="img-large img-center" />

### 灾难恢复复制

在 GCS 中维护关键 S3 数据的实时副本（或反之）：

1. 创建一个从主存储桶到灾备存储桶的 Sync job。
2. 每小时调度一次，将 RPO（恢复点目标）控制在 1 小时以内。
3. 使用[校验和验证](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)来确保数据完整性。

### 基于成本的分层

将数据迁移到访问模式下更便宜的服务商：

1. 频繁访问的数据 → 保留在离你的计算资源最近的服务商上。
2. 冷数据/归档数据 → 根据定价迁移到 GCS Nearline/Coldline 或 S3 Glacier。
3. 定期调度分层任务，以保持成本最优。

## GCS 与 S3：将 RcloneView 用作统一层

与其学习两种不同的命令行工具（GCS 用 gsutil，S3 用 aws s3），RcloneView 为两者提供了单一界面。这意味着：

- **只需学习一个工具** — 你的团队无需掌握两种不同的命令行界面。
- **可视化操作** — 拖放、右键菜单和基于对话框的配置，取代了标志和参数。
- **一致的监控** — 无论涉及哪些云，都可使用相同的[任务历史记录](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)和[传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)。
- **可移植的任务** — 一个将 GCS 同步到 S3 的任务，其工作方式与将 OneDrive 同步到 Dropbox 的任务完全相同。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Unified job history for GCS and S3 transfers" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**（Windows、macOS、Linux）。
2. 使用服务账号密钥或 OAuth 登录**添加你的 GCS 远程**。
3. 使用访问密钥凭证**添加你的 S3 远程**。
4. 在 Explorer 中**并排浏览两者**。
5. 根据你的使用场景**创建 Copy 或 Sync job**。
6. **调度并监控**，实现无人值守的多云数据管理。

不要再在 gsutil 和 aws cli 之间来回切换。RcloneView 将 GCS 和 S3 的管理统一到一个可视化工作流中——让多云数据传输不仅限于熟悉命令行的工程师，你的整个团队都能轻松使用。

---

**相关指南：**

- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [通过浏览器登录（OAuth）添加远程](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
