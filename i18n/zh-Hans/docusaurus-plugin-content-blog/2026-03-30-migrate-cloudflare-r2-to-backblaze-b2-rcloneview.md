---
slug: migrate-cloudflare-r2-to-backblaze-b2-rcloneview
title: "将 Cloudflare R2 迁移到 Backblaze B2 —— 使用 RcloneView 传输文件"
authors:
  - tayson
description: "了解如何使用 RcloneView 的可视化界面将文件从 Cloudflare R2 迁移到 Backblaze B2。无需 CLI 命令即可传输 S3 兼容存储。"
keywords:
  - cloudflare r2 to backblaze b2
  - migrate r2 to b2
  - cloudflare r2 migration
  - backblaze b2 transfer
  - cloud-to-cloud migration
  - rcloneview cloud transfer
  - s3 compatible migration
  - object storage migration
  - r2 backup to b2
tags:
  - RcloneView
  - cloudflare-r2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Cloudflare R2 迁移到 Backblaze B2 —— 使用 RcloneView 传输文件

> 从 Cloudflare R2 迁移到 Backblaze B2 并不意味着一定要在终端里编写脚本或管理 API 令牌。

Cloudflare R2 提供零出口流量费用的定价，但一些团队发现 Backblaze B2 更深入的生态系统集成、生命周期策略以及 Bandwidth Alliance 合作关系，使其成为更适合长期使用的方案。无论你是要整合对象存储还是迁移工作负载，RcloneView 都能让你通过点选式界面将每个存储桶从 R2 迁移到 B2 —— 完全不需要 CLI。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Cloudflare R2 迁移到 Backblaze B2

Backblaze B2 与 Cloudflare（通过 Bandwidth Alliance）和 Fastly 等 CDN 合作伙伴提供原生集成，这意味着通过这些网络从 B2 传出的流量是免费或大幅折扣的。B2 还在其原生 API 之外支持 S3 兼容的 API 端点，使应用程序在连接方式上更加灵活。对于需要应用级生命周期规则、服务端加密密钥管理或事件通知的团队来说，B2 提供了 R2 目前功能集尚未匹配的能力。

成本的可预测性是另一个考虑因素。Backblaze B2 的存储费用为每 TB 每月固定 6 美元，通过合作伙伴网络传出流量免费。如果你的架构已经通过 Cloudflare 的 CDN 路由流量，那么在计入计算和 Workers 成本之后，B2 存储与 Cloudflare 分发的组合可能比单独使用 R2 更经济。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudflare R2 and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 在 RcloneView 中设置两个远程

打开 RcloneView，为 Cloudflare R2 创建一个新的远程。选择 "Amazon S3 Compliant" 作为提供商类型，然后在 S3 提供商下拉列表中选择 "Cloudflare R2"。输入你的 R2 Access Key ID、Secret Access Key，以及端点 URL —— 通常格式为 `https://<account-id>.r2.cloudflarestorage.com`。RcloneView 会在保存前验证连接。

接下来，添加一个 Backblaze B2 远程。你可以使用原生的 B2 提供商类型，也可以使用 S3 兼容接口。对于原生选项，输入你的 B2 Application Key ID 和 Application Key。连接成功后，RcloneView 会自动列出你现有的存储桶。如果目标存储桶尚不存在，请先在 B2 控制台中以你偏好的区域和加密设置创建它。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from R2 to B2" class="img-large img-center" />

## 执行迁移

配置好两个远程后，打开 RcloneView 的双栏浏览器。在一侧选择你的 R2 远程，在另一侧选择 B2 远程。浏览到 R2 中的源存储桶和 B2 中的目标存储桶。你可以拖放整个存储桶内容，也可以选择特定前缀和文件夹进行传输。

对于大型迁移，建议改为创建同步或复制任务。进入任务管理器，将 R2 设为源、B2 设为目标，并选择 "Copy" 模式，以确保文件在过渡期间落地到 B2 的同时不会删除 R2 中的任何内容。启用校验和验证以确认每个对象都完整到达 —— R2 和 B2 在 S3 兼容上传上都支持 MD5 校验和，因此 RcloneView 可以验证端到端的完整性。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Cloudflare R2 to Backblaze B2" class="img-large img-center" />

## 调度和监控传输

如果你的 R2 存储桶包含数 TB 的数据，请将迁移拆分为多个计划任务。RcloneView 的调度器允许你在非高峰时段运行传输，以避免网络饱和。为每个任务设置带宽限制，以保持其他服务的顺畅运行。

在传输仪表盘中监控进度，该仪表盘会显示实时吞吐量、文件数量以及任何错误。初次复制完成后，将任务切换为 "Sync" 模式并定期运行，直到你将应用程序端点从 R2 切换到 B2。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling R2 to B2 migration jobs in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用 S3 兼容凭证和你的账户端点添加 Cloudflare R2 远程。
3. 使用你的 Application Key ID 和 Application Key 添加 Backblaze B2 远程。
4. 创建从 R2 到 B2 的 Copy 任务并启用校验和验证，然后安排在非高峰时段运行。

在 B2 中验证所有对象后，更新你的应用程序端点，并按自己的节奏停用 R2 存储桶。

---

**相关指南：**

- [使用 RcloneView 从 Cloudflare R2 迁移到 AWS S3](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [使用 RcloneView 比较 Cloudflare R2 和 AWS S3](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
