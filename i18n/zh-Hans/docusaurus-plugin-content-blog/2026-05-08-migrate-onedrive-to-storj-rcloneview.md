---
slug: migrate-onedrive-to-storj-rcloneview
title: "将 OneDrive 迁移到 Storj —— 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView 将文件从 Microsoft OneDrive 迁移到 Storj 去中心化云存储的分步指南——支持校验和验证，无需任何 CLI 知识。"
keywords:
  - OneDrive to Storj migration RcloneView
  - migrate OneDrive Storj cloud
  - OneDrive Storj file transfer
  - switch OneDrive to Storj
  - decentralized cloud migration
  - Storj backup OneDrive
  - OneDrive Storj sync
  - rclone OneDrive Storj GUI
tags:
  - onedrive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OneDrive 迁移到 Storj —— 使用 RcloneView 传输文件

> 将您的 OneDrive 文件迁移到 Storj 的去中心化、端到端加密对象存储——通过 RcloneView 实现完整、经过验证且由图形界面驱动的迁移。

对于希望减少对中心化云服务商依赖的团队而言，Storj 提供了一个有趣的替代方案。其去中心化架构会将文件加密并分片存储在遍布全球的独立节点网络中，在没有单点故障的情况下提供强大的隐私保护。对于目前使用 OneDrive、并考虑转向注重隐私的替代方案的组织来说，RcloneView 让迁移变得简单直接——同时连接两个服务商,并在它们之间直接传输数据。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 OneDrive 和 Storj 连接到 RcloneView

通过 **Remote tab → New Remote** 添加 Microsoft OneDrive 作为远程,并使用您的 Microsoft 账户完成 OAuth 身份验证。对于 Storj，您有两种选择：使用原生 Storj 提供程序类型（在 Storj 控制台中输入您的 Access Grant），或使用兼容 S3 的访问方式（Access Key + Secret Key + Storj S3 端点 `https://gateway.storjshare.io`）。对于大批量传输，兼容 S3 的方式通常能提供更好的性能。

配置好两个远程后，在左侧面板中打开 OneDrive，在右侧面板中打开您的 Storj 存储桶。在开始迁移之前，请确认您可以在两侧浏览文件。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Storj as remotes in RcloneView" class="img-large img-center" />

## 运行迁移

通过 **Home tab → Sync** 打开任务向导。设置您的 OneDrive 源文件夹和 Storj 目标存储桶。在高级设置步骤中，启用 **Checksum** 校验以确认传输后每个文件的完整性。Storj 的分布式架构意味着每个文件在下载时会被拆分为多个片段并重新组装——校验和可以确认这一过程在两端产生的数据是完全一致的。

先执行一次 **Dry Run**，预览将要迁移的文件，并及时发现路径问题或命名冲突。OneDrive 允许文件名中包含一些特殊字符，而 Storj 的兼容 S3 接口在处理这些字符时可能有所不同——试运行的输出会标记出任何编码问题。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Storj migration in progress in RcloneView" class="img-large img-center" />

## 监控与验证传输

**Transferring tab** 会实时显示传输进度，包括传输速度、文件数量和已传输字节数。对于大规模迁移，如果您的网络连接允许，建议使用 8–16 个并发文件传输。

迁移完成后，在 OneDrive 源和 Storj 目标之间运行一次 **Folder Compare**，以确认每个文件都正确到达。查看 **Job History** 以获取最终的传输摘要和状态。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of OneDrive to Storj transfer" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 OneDrive（OAuth）和 Storj（兼容 S3 或原生）作为远程。
3. 创建一个启用校验和的同步任务，并先运行一次试运行。
4. 在 Transferring 标签页中监控进度，并使用 Folder Compare 进行验证。

使用 RcloneView 将 OneDrive 迁移到 Storj，是一个干净、可审计的过程，在每个阶段都能保护您数据的完整性。

---

**相关指南：**

- [使用 RcloneView 管理 Storj 云存储](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 OneDrive 云存储](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Dropbox 迁移到 Storj](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)

<CloudSupportGrid />
