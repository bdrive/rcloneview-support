---
slug: migrate-azure-blob-to-google-drive-rcloneview
title: "使用 RcloneView 将 Azure Blob Storage 迁移到 Google Drive"
authors:
  - tayson
description: "使用 RcloneView 将 Azure Blob Storage 迁移到 Google Drive。涵盖设置、大型容器处理、验证和增量同步的分步指南。"
keywords:
  - rcloneview
  - azure blob to google drive
  - migrate azure storage
  - azure blob migration
  - cloud to cloud migration
  - azure to google workspace
  - cloud storage migration tool
  - azure blob transfer
  - google drive migration gui
  - enterprise cloud migration
tags:
  - azure
  - google-drive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Azure Blob Storage 迁移到 Google Drive

> Azure Blob Storage 专为开发者构建，但当团队需要协作功能时，Google Drive 才是目标平台——**RcloneView** 弥合了对象存储与消费级云存储之间的差距。

Azure Blob Storage 擅长为应用程序提供服务——热、冷和存档层级为开发者提供了针对结构化工作负载的精细成本控制。但当业务需求转向文档协作、共享编辑和 Google Workspace 集成时，将数据从 Azure 容器迁移到 Google Drive 就变得十分必要。RcloneView 可同时连接这两个平台，并提供可视化的迁移流程，能够处理大型容器、保留文件夹结构，并验证每一个已传输的文件。

本指南涵盖了完整的迁移流程，从配置两个远程存储到为过渡期设置增量同步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Azure Blob 迁移到 Google Drive

进行此项迁移的原因通常可归为以下几类：

- **协作需求**：Azure Blob Storage 没有内置的文档编辑或共享功能。Google Drive 通过 Docs、Sheets 和 Slides 提供实时协作，还为团队提供精细的共享权限。
- **Google Workspace 集成**：正在迁移到 Google Workspace 的组织，将文件保存在 Google Drive 中会更为受益，因为它可以与 Gmail、Calendar、Meet 以及其他 Workspace 应用集成。
- **成本简化**：Azure Blob 的定价涉及存储层级、出口流量费用、读写操作以及数据冗余选项。Google Workspace 将存储纳入按用户计费的方案中，预算管理更为简单。
- **终端用户易用性**：非技术用户普遍认为 Google Drive 比 Azure Storage Explorer 或 Azure 门户更易于上手。

## 在 RcloneView 中设置 Azure Blob Storage

打开远程管理器并添加一个 **Microsoft Azure Blob Storage** 远程。你需要：

- **账户名称**：你的 Azure 存储账户名称
- **账户密钥** 或 **SAS URL**：Azure 门户中的主访问密钥，或具有读取和列表权限的共享访问签名

配置完成后，RcloneView 会列出该存储账户中的所有容器。每个容器在浏览器中显示为一个顶级文件夹。进入容器即可浏览按前缀组织的虚拟目录结构中的 blob。

Azure Blob Storage 支持三种访问层级——热、冷和存档。RcloneView 可以直接读取热层和冷层。存档层的 blob 必须先重新水化（rehydrate）到热层或冷层，才能进行传输。如果你的迁移涉及已存档的 blob，请先通过 Azure 门户启动重新水化，待 blob 可访问后再使用 RcloneView 继续操作。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中设置 Google Drive

使用 OAuth 2.0 流程添加 Google Drive 远程。在远程管理器中点击授权，登录你的 Google 账户并授予访问权限。对于 Google Workspace 账户，你可以连接到“我的云端硬盘”或指定的共享云端硬盘。

如果目标是共享云端硬盘，请在配置过程中选择它。共享云端硬盘的所有权规则有所不同——文件归组织所有，而非个人用户——因此非常适合团队迁移。

Google Drive 有按用户计算的存储配额（免费版 15 GB，或 Workspace 方案下的池化存储）。在开始大型迁移之前，请确认目标位置有足够的配额。如果在传输过程中超出配额，RcloneView 会报告错误。

## 处理大型容器

Azure 容器可容纳数百万个 blob，总量可达 TB 甚至 PB 级别。一次性迁移全部数据是可行的，但需要提前规划：

- **先枚举**：使用 RcloneView 的浏览器浏览容器，了解文件夹结构和总大小。这有助于你估算迁移所需时间和 Google Drive 的配额需求。
- **按前缀迁移**：如果容器使用了逻辑文件夹结构（例如 `/projects/2024/`、`/projects/2025/`），可以一次迁移一个前缀。这样便于验证，也可以优先处理活跃数据。
- **并行传输**：在 RcloneView 的设置中增加并发传输数量。Azure Blob Storage 能够很好地处理高并发，Google Drive 也支持并行上传，并配有合理的速率限制处理机制。

Google Drive 强制执行 API 速率限制——大多数账户每秒 10 次上传。RcloneView 会自动进行限流，并在收到 403（超出速率限制）或 429 响应时自动重试，但由于这些限制，大型迁移自然会花费更长时间。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Azure Blob Storage to Google Drive in RcloneView" class="img-large img-center" />

## 执行迁移

打开双栏浏览器，左侧为 Azure Blob，右侧为 Google Drive。选择源容器（或特定前缀）以及 Google Drive 上的目标文件夹。

创建复制或同步任务。RcloneView 会将每个 blob 作为文件进行传输，并在 Google Drive 上以真实文件夹的形式保留基于前缀的目录结构。文件名、大小和修改时间都会被保留。由于 Google Drive 不支持任意键值元数据，Azure 元数据（自定义 blob 属性）不会被传输。

传输过程中，实时监控面板会显示：

- 每个文件的传输进度和速度
- 已完成与剩余的文件总数
- 预计完成时间
- 任何错误或重试情况

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Azure Blob to Google Drive migration in RcloneView" class="img-large img-center" />

## 验证迁移结果

传输完成后，使用 RcloneView 的比较功能验证迁移结果。将 Azure 容器与 Google Drive 目标文件夹进行比较。比较视图会突出显示：

- **缺失文件**：未被传输的 blob（可能由于错误或存档层限制）
- **大小不匹配**：传输不完整的文件
- **匹配文件**：成功迁移的项目

由于 Azure Blob Storage 使用 MD5 进行内容验证，而 Google Drive 使用自己的校验方式，RcloneView 默认使用文件大小和修改时间进行比较。对于关键迁移，你可以在任务设置中启用校验和验证，以获得字节级精度。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Azure to Google Drive migration with compare" class="img-large img-center" />

## 迁移后安排增量同步

迁移很少能够瞬间完成——在传输进行的同时，新数据可能仍在写入 Azure Blob Storage。在过渡期内，可在 RcloneView 中设置计划同步任务，使其每天（或更频繁地）运行。这种增量同步能够检测新增或更改的 blob，并只将增量部分传输到 Google Drive。

一旦所有系统都指向 Google Drive，且 Azure 容器不再接收新数据，运行一次最终同步以捕获所有遗漏项目，然后禁用该计划任务。

对于长期过渡项目，RcloneView 的任务历史记录提供了每次同步运行的完整日志——包括已传输的文件、已移动的字节数、错误以及耗时。这份审计记录对于验证迁移时间线和向利益相关方汇报非常宝贵。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Azure to Google Drive" class="img-large img-center" />

## 管理过渡期

在共存期间，可以考虑在 RcloneView 中同时挂载两个远程存储，以便并排访问。用户可以同时浏览 Azure 容器和 Google Drive，验证文件是否已在新位置可用。挂载功能让用户可以将 Google Drive 作为本地驱动器盘符访问，方便习惯了映射驱动器的团队顺利过渡。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as local drive during migration" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Azure Blob Storage（使用账户密钥或 SAS）和 Google Drive（通过 OAuth）作为远程存储。
3. 在双栏浏览器中运行迁移，按容器或前缀进行迁移以便于管理。
4. 使用比较功能进行验证，然后安排增量同步，直到过渡完成。

Azure Blob Storage 能够很好地为应用程序提供服务，但当你的团队需要 Google Workspace 协作功能时，RcloneView 能够干净、可验证地为你迁移数据。

---

**相关指南：**

- [添加 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [即时同步远程存储](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
