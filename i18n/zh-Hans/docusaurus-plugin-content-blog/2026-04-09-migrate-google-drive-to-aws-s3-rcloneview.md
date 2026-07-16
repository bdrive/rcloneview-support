---
slug: migrate-google-drive-to-aws-s3-rcloneview
title: "使用 RcloneView 将 Google Drive 迁移到 AWS S3"
authors:
  - tayson
description: "使用 RcloneView 将数据从 Google Drive 迁移到 AWS S3。逐步设置两个远程、规划传输、迁移数据并验证迁移结果。"
keywords:
  - rcloneview
  - google drive to aws s3
  - migrate google drive to s3
  - google drive s3 migration
  - google drive to amazon s3
  - cloud storage migration
  - google drive backup to s3
  - google workspace to aws
  - rclone google drive s3
  - cloud to cloud migration gui
tags:
  - google-drive
  - amazon-s3
  - migration
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Google Drive 迁移到 AWS S3

> 从 Google Drive 迁移到 AWS S3 可以为你带来对象级控制、生命周期策略以及基础设施级的持久性 —— **RcloneView** 通过可视化界面完成这一传输过程。

Google Drive 在协作和文档编辑方面表现出色，但需要精细访问控制、程序化集成或长期归档的组织往往会超出其能力范围。AWS S3 提供 11 个 9 的持久性、面向冷存储的 Glacier 生命周期转换，以及基于 IAM 的访问策略。从 Google Drive 迁移到 S3 看似令人望而生畏——不同的身份验证模型、不同的文件语义，以及可能达到数 TB 的数据量。RcloneView 通过可视化 GUI 简化了这一过程，将复杂性隐藏在幕后处理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Google Drive 迁移到 AWS S3

Google Drive 以对象形式存储文件，并附带 Google 特有的元数据——MIME 类型、共享权限以及原生文档格式（Docs、Sheets、Slides）。AWS S3 则以原始字节形式存储对象，并支持用户自定义元数据，为程序化访问提供更大的灵活性。进行此类迁移的常见原因包括：

- **成本优化**：S3 Standard 的费用大约为每月每 GB 0.023 美元，而 S3 Glacier Deep Archive 可降至每月每 GB 0.00099 美元。对于很少被访问的大型数据集，S3 比 Google Workspace 存储方案便宜得多。
- **基础设施集成**：运行在 AWS 上的应用可以通过 IAM 角色直接访问 S3，无需 OAuth 令牌和 API 配额限制。
- **合规性**：S3 支持用于 WORM 合规的 Object Lock、基于 IP 限制的存储桶策略，以及用于审计日志的 CloudTrail。
- **生命周期管理**：根据文件的存放时长，自动将文件从 Standard 转换为 Infrequent Access 再到 Glacier，无需人工干预即可降低成本。

## 设置两个远程

### Google Drive 远程

打开 RcloneView 的远程管理器并添加一个 Google Drive 远程。通过 OAuth 进行授权，选择完整访问权限范围。如果你需要迁移共享云端硬盘（Shared Drives），请在设置过程中选择目标共享云端硬盘。对于大型迁移，建议注册你自己的 Google Cloud 项目客户端 ID，以将 API 配额限制提升到默认的每 100 秒 10,000 次查询以上。

### AWS S3 远程

在远程管理器中添加一个 S3 远程。提供你的 AWS Access Key ID 和 Secret Access Key，选择目标区域，并指定存储桶名称。如果该存储桶不存在，你可以从 RcloneView 或 AWS 控制台中创建它。对于存储类别，频繁访问的数据选择 Standard，归档类迁移则选择 Standard-IA。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and AWS S3 remotes in RcloneView" class="img-large img-center" />

## 规划迁移

在传输数据之前，先评估迁移范围：

1. **容量审计**：使用 RcloneView 的存储分析功能确定 Google Drive 的总大小。这有助于估算 S3 的成本和传输时间。
2. **Google 文档处理**：原生 Google 文档（Docs、Sheets、Slides）在 Drive 上没有文件大小。迁移过程中，RcloneView 会将它们导出为标准格式（docx、xlsx、pptx）。请决定你是否需要这些导出文件，或者可以跳过它们。
3. **文件夹结构**：Google Drive 允许文件名中包含 S3 处理方式不同的字符。RcloneView 会自动对特殊字符进行编码，但仍需检查你的文件夹结构中是否存在极深的嵌套或非常长的路径名。
4. **带宽**：以 100 Mbps 的速度迁移 1 TB 数据大约需要 22 小时。建议在非高峰时段安排迁移任务，或设置带宽限制以避免影响其他操作。

## 执行迁移

在左侧窗格打开 Google Drive，在右侧窗格打开 S3。导航到 Drive 上的源文件夹和 S3 上的目标前缀。你可以复制整个 Drive，也可以选择特定文件夹。

RcloneView 使用来自 Google Drive 的 MD5 校验和，并将其与 5 GB 以下文件的 S3 ETag 进行比对。对于以分段方式上传的更大文件，S3 ETag 并非标准 MD5——在这种情况下，RcloneView 会退回到基于大小和修改时间的比较。

对于初始迁移，建议使用复制任务而非同步，以避免删除目标位置文件的任何风险。初始传输完成并验证数据后，你可以切换为同步方式以进行持续复制。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Google Drive to AWS S3 in RcloneView two-pane explorer" class="img-large img-center" />

## 验证迁移

传输完成后，使用 RcloneView 的比较功能验证每个文件是否都已到达目标位置。选择 Google Drive 源和 S3 目标，运行比较操作。匹配的文件会显示为一致；存在差异或缺失的文件则会被高亮显示。

对于关键迁移，可运行一个校验操作，在两侧都计算校验和并报告任何差异。这会增加耗时，但能提供数据完整性的加密级验证。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to S3 migration in RcloneView" class="img-large img-center" />

## 迁移后：持续同步或切换割接

如果你在过渡期间同时运行 Google Drive 和 S3，可以在 RcloneView 中安排每日同步任务，使 S3 与 Drive 的变更保持同步。当你准备好正式割接时，禁用该同步任务并停用 Google Drive 存储。

对于从 Google Workspace 迁移到 AWS 原生技术栈的组织而言，此次迁移通常只是更大平台转型中的一部分。RcloneView 可以负责数据迁移，而你的团队则可以专注于应用和工作流程的变更。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing Google Drive to S3 sync in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程管理器中添加 Google Drive 和 AWS S3 远程。
3. 运行存储审计以估算迁移的规模和成本。
4. 执行从 Drive 到 S3 的复制任务，并使用比较功能进行验证。
5. 如有需要，可安排持续同步，直到你准备好正式切换割接。

Google Drive 擅长协作，但 AWS S3 提供了生产工作负载所需的持久性、生命周期管理和程序化访问能力。RcloneView 通过一条简单直接的迁移路径将二者连接起来。

---

**相关指南：**

- [添加 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [添加 AWS S3 及 S3 兼容存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
