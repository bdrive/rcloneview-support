---
slug: migrate-google-drive-to-cloudflare-r2-rcloneview
title: "使用 RcloneView 将 Google Drive 迁移到 Cloudflare R2"
authors:
  - tayson
description: "使用 RcloneView 将 Google Drive 文件迁移到 Cloudflare R2。分步指南涵盖设置、Google 文档格式转换、验证以及零出口流量费用的优势。"
keywords:
  - rcloneview
  - google drive to cloudflare r2
  - migrate google drive
  - google drive migration tool
  - cloudflare r2 migration
  - cloud to cloud migration
  - google docs export
  - zero egress migration
  - google drive backup r2
  - cloud storage migration gui
tags:
  - RcloneView
  - google-drive
  - cloudflare-r2
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Google Drive 迁移到 Cloudflare R2

> 从 Google Drive 迁移到 Cloudflare R2 可以消除出口流量费用，并为你的数据提供兼容 S3 的访问方式 —— **RcloneView** 以可视化方式处理整个迁移过程。

Google Drive 是一个强大的协作平台，但随着存储需求的增长和数据访问模式的变化，许多团队因为可扩展性和 API 灵活性而转向对象存储。Cloudflare R2 提供兼容 S3 的存储，并且零出口流量费用，使其成为需要以编程方式提供服务的数据的理想目的地。RcloneView 弥合了这两种截然不同的存储模型之间的差距，在单一 GUI 中处理 Google 文档格式转换、大文件传输和迁移后验证。

本指南将带你完成完整的迁移流程 —— 从配置两个远程到验证每个文件是否完整送达。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Google Drive 迁移到 Cloudflare R2

Google Drive 的定价从 100 GB 每月 1.99 美元起，随着 Google Workspace 扩展到企业级套餐。虽然这对协作来说很实惠，但 Google Drive 并非为编程化数据访问而设计。API 速率限制、缺乏 S3 兼容性以及按用户计算的存储配额，使其不太适合用于提供静态资源、托管数据集或为 CI/CD 流水线提供数据。

Cloudflare R2 解决了这些局限。以每 GB 每月 0.015 美元且零出口流量费用计算，R2 对于读取密集型工作负载来说明显更便宜。其兼容 S3 的 API 意味着现有工具和 SDK 无需修改即可使用。如果你的数据最初存放在 Google Drive，但现在需要通过 S3 端点访问，那么迁移到 R2 就是合乎逻辑的一步。

## 在 RcloneView 中设置 Google Drive

打开远程管理器并添加一个 Google Drive 远程。RcloneView 使用 OAuth 2.0 —— 点击授权，登录你的 Google 账户并授予访问权限。令牌会本地存储在你的 rclone 配置中。

如果你要从带有共享云端硬盘的 Google Workspace 账户迁移，可以将 RcloneView 配置为访问特定的共享云端硬盘，而不仅仅是个人的“我的云端硬盘”。这对于数据分布在多个团队硬盘中的组织级迁移非常重要。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中设置 Cloudflare R2

将 R2 添加为兼容 S3 的远程。在远程管理器中，选择 **Amazon S3 Compatible**（兼容 Amazon S3）并配置：

- **Provider（提供商）**：Cloudflare
- **Access Key ID** 和 **Secret Access Key**：从 Cloudflare 控制台生成
- **Endpoint（端点）**：`https://<account-id>.r2.cloudflarestorage.com`

在开始迁移之前，先在 Cloudflare 控制台或通过 RcloneView 的资源管理器创建目标存储桶。选择一个能反映数据来源的存储桶名称 —— 例如 `gdrive-archive-2026` —— 以便日后识别。

## 处理 Google 文档格式转换

这是从 Google Drive 迁移时最关键的注意事项。原生 Google 格式 —— 文档、表格、幻灯片、绘图 —— 从传统意义上讲并非真正的文件。它们只存在于 Google 的生态系统中，磁盘上的字节大小为零。

当 RcloneView 导出这些文件时，会将其转换为标准格式：

- **Google 文档**转换为 `.docx`（Microsoft Word）
- **Google 表格**转换为 `.xlsx`（Microsoft Excel）
- **Google 幻灯片**转换为 `.pptx`（Microsoft PowerPoint）

你可以在远程设置中配置导出格式。如果你的团队更喜欢 PDF 或 OpenDocument 格式，请在开始迁移前进行相应调整。请注意，导出的文件会丢失 Google 特有的功能，例如评论、建议模式和实时协作链接。

对于已经是标准格式的文件（上传的 PDF、图片、ZIP），传输是直接的逐字节复制，无需转换。

## 运行迁移

配置好两个远程后，打开双栏资源管理器。将 Google Drive 放在左侧，将你的 R2 存储桶放在右侧。你可以迁移整个云端硬盘，也可以选择特定文件夹。

对于完整迁移，使用同步任务。RcloneView 会枚举 Google Drive 上的所有文件，导出原生 Google 格式，并将所有内容传输到 R2。实时监控面板会显示每个文件的进度、传输速度和预计完成时间。

对于大型迁移（数百 GB 或更多），可以考虑以下优化措施：

- **增加并行传输数**：R2 能够很好地处理高并发。将并行传输数增加到 8-16 以最大化吞吐量。
- **使用带宽调度**：如果在工作时间进行迁移，请限制带宽以避免影响其他网络用户。
- **分阶段运行**：按文件夹逐个迁移，而不是一次性迁移全部内容。这样更便于验证每一批数据，并在中断时恢复。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to R2 migration progress in RcloneView" class="img-large img-center" />

## 使用对比功能验证迁移

迁移完成后，在 Google Drive 和 R2 之间运行 RcloneView 的对比操作。对比视图会突出显示：

- **仅存在于源端的文件**：传输失败或被跳过的项目
- **仅存在于目标端的文件**：意外多出的内容（较少见，但值得检查）
- **存在差异的文件**：大小或哈希值不匹配，表明传输不完整

请注意，Google 文档文件始终会显示为不同，因为导出的格式与零字节的 Google 原生格式不同。请重点关注非原生文件以进行有意义的对比。如果任何标准文件出现不匹配，请重新运行同步，仅传输缺失或已更改的项目。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to R2 migration with compare in RcloneView" class="img-large img-center" />

## 迁移后：增量同步

完成初始迁移后，你可能希望在过渡期内让 R2 与 Google Drive 保持同步。在 RcloneView 中设置一个计划同步任务 —— 根据需要每天或每小时执行一次。这可以确保新添加到 Google Drive 的文件自动复制到 R2，直到你完全切换过去。

一旦过渡完成，所有访问点都指向 R2，你就可以禁用同步任务，并可选择归档或删除 Google Drive 上的数据。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Google Drive to R2 in RcloneView" class="img-large img-center" />

## 任务历史与审计跟踪

每次迁移运行都会记录在 RcloneView 的任务历史中。你可以查看每次运行传输的文件数量、移动的字节数、遇到的错误以及耗时。这为合规目的提供了审计跟踪，并有助于排查迁移期间或之后出现的任何问题。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Google Drive to R2 migration runs" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 添加你的 Google Drive，并将 Cloudflare R2 添加为兼容 S3 的远程。
3. 配置 Google 文档的导出格式（docx、xlsx、pptx 或你偏好的其他格式）。
4. 使用双栏资源管理器运行迁移，并通过对比功能验证结果。

Google Drive 擅长协作，但当你需要兼容 S3、无出口流量费用的存储时，Cloudflare R2 就是理想的目的地 —— 而 RcloneView 正是连接两者的桥梁。

---

**相关指南：**

- [添加 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
