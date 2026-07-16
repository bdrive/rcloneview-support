---
slug: migrate-onedrive-to-azure-blob-rcloneview
title: "将 OneDrive 迁移到 Azure Blob——使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 OneDrive 文件迁移到 Azure Blob Storage。无需 CLI 工具或脚本，即可将企业文档移动到可扩展的对象存储中。"
keywords:
  - onedrive to azure blob
  - migrate onedrive to azure
  - onedrive azure blob transfer
  - cloud-to-cloud migration
  - azure blob storage migration
  - rcloneview onedrive transfer
  - microsoft cloud migration
  - enterprise cloud migration
  - onedrive backup azure
  - object storage migration
tags:
  - onedrive
  - azure
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OneDrive 迁移到 Azure Blob——使用 RcloneView 传输文件

> 从 OneDrive 升级到 Azure Blob Storage，可为团队带来可扩展、可编程的对象存储——而 RcloneView 让这一迁移过程变得轻松无痛。

OneDrive 非常适合日常文档协作,但企业团队往往会超出其存储限制,或需要通过 Azure 的 REST API 以编程方式访问文件。Azure Blob Storage 提供分层定价(热层、冷层和归档层)、超大规模扩展能力,以及与 Azure Functions、Logic Apps 和 Data Factory 的紧密集成。RcloneView 打通了这两项微软服务,让你无需编写一行代码,即可将文件从 OneDrive 迁移到 Azure Blob 容器。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 当 OneDrive 达到容量上限时

大多数 Microsoft 365 套餐中,OneDrive for Business 为每位用户提供 1 TB 空间,并可通过附加订阅扩展至 5 TB。这听起来已经很充裕,但当组织积累了多年的项目归档、媒体资源或合规记录后,情况就不一样了。Azure Blob Storage 可扩展至艾字节(exabyte)级别,冷层存储费用低至每 GB 每月 0.018 美元——仅为同等 OneDrive 容量成本的一小部分。

除了原始容量之外,Azure Blob 还支持 OneDrive 无法比拟的功能:用于满足监管合规要求的不可变存储策略、用于全球内容分发的 Azure CDN 集成,以及通过共享访问签名(SAS)实现的细粒度访问控制。将归档数据或大规模数据从 OneDrive 迁移到 Azure Blob,可以让存储集中到你现有的基础设施中。

<img src="/support/images/en/blog/new-remote.png" alt="Creating OneDrive and Azure Blob remotes in RcloneView" class="img-large img-center" />

## 配置两个远程

在 RcloneView 中选择 "Microsoft OneDrive" 作为提供商类型,即可添加 OneDrive 远程。OAuth 流程会打开浏览器进行 Microsoft 账户身份验证。根据源文件所在位置,你可以选择 OneDrive 个人版、OneDrive for Business,或特定的 SharePoint 文档库。身份验证完成后,RcloneView 会显示所选驱动器的根目录。

对于 Azure Blob,创建一个新的远程,并选择 "Microsoft Azure Blob Storage"。输入你的存储账户(Storage Account)名称,以及账户密钥(Account Key)或 SAS URL。如果你的组织强制要求使用 Azure Active Directory 身份验证,RcloneView 同样支持该路径。选择目标容器——或记下容器名称以便后续配置任务。RcloneView 会确认连接,并列出现有的容器和 Blob。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up a cloud-to-cloud transfer from OneDrive to Azure Blob" class="img-large img-center" />

## 执行迁移

打开双栏浏览器,一侧显示 OneDrive,另一侧显示 Azure Blob。导航到你要迁移的 OneDrive 文件夹——例如 `/Documents/Projects` 或整个根目录。在 Azure 一侧,浏览到目标容器。

如需进行结构化迁移,请在任务管理器(Job Manager)中创建一个复制(Copy)任务。将 OneDrive 设为源路径,Azure Blob 容器设为目标路径。选择 "Copy" 模式,以便在过渡期间传输文件而不从 OneDrive 中删除它们。如果你打算多次运行该任务,请启用 `--ignore-existing` 标志,以便高效跳过已传输的文件。

OneDrive 的 API 存在速率限制,可能会拖慢大规模传输的速度。RcloneView 会自动处理限流和重试,你也可以配置并行传输数量(`--transfers` 标志),以在微软的限制范围内优化吞吐量。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Migration job history showing OneDrive to Azure Blob transfers" class="img-large img-center" />

## 迁移后验证

任务完成后,使用 RcloneView 的比较功能对比 OneDrive 与 Azure Blob 之间的文件数量和大小。并排打开两个远程并运行比较,以找出任何差异。Azure Blob 会为上传的对象存储 MD5 哈希值,因此校验和验证可以捕获传输过程中发生的任何损坏。

验证完成后,将你的应用程序配置为从 Azure Blob 而非 OneDrive 读取数据。在过渡期间,让 OneDrive 远程继续保持在 RcloneView 中的连接状态,并运行定期同步任务,以捕获用户在切换完成之前继续添加到 OneDrive 中的文件。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling periodic OneDrive to Azure Blob sync during migration" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 Microsoft OAuth 验证你的 OneDrive 账户,并选择正确的驱动器类型。
3. 使用你的存储账户名称及访问密钥或 SAS 令牌,添加 Azure Blob 远程。
4. 创建从 OneDrive 到 Azure Blob 的复制任务,启用校验和验证,然后运行它。

确认所有文件均已成功迁移到 Azure Blob 后,即可按自己的节奏重定向工作流并停用 OneDrive 存储。

---

**相关指南:**

- [使用 RcloneView 将 OneDrive 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [使用 RcloneView 将 Azure Blob Storage 挂载为本地驱动器](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [使用 RcloneView 将 Azure Blob 同步到 AWS S3](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)

<CloudSupportGrid />
