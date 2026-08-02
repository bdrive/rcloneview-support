---
slug: sync-storj-to-backblaze-b2-rcloneview
title: "将 Storj 同步到 Backblaze B2 — 使用 RcloneView 进行云备份"
authors:
  - alex
description: "使用 RcloneView 将文件从 Storj 去中心化存储同步到 Backblaze B2。为您的 S3 兼容数据保留一份冗余的离网副本。"
keywords:
  - Storj 到 Backblaze B2
  - Storj 同步
  - Storj 备份
  - Backblaze B2 同步
  - 去中心化存储备份
  - Storj RcloneView
  - S3 兼容存储同步
  - 云到云备份
  - 对象存储冗余
  - RcloneView 同步
tags:
  - RcloneView
  - storj
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Storj 同步到 Backblaze B2 — 使用 RcloneView 进行云备份

> 使用 RcloneView 在 Backblaze B2 上保留一份冗余的、集中式的 Storj 去中心化存储数据副本——一个任务,两种截然不同的存储架构。

Storj 将加密的文件分片分散到一个独立的节点网络中,这在抗审查性和成本方面表现出色,但这也意味着团队通常希望有一个传统的、集中托管的备份作为第二层保护。Backblaze B2 很好地扮演了这个角色:一个标准的 S3 兼容存储桶,检索简单直接。RcloneView 通过其 S3 兼容远程存储支持连接到两者,并直接在它们之间移动数据,无需本地暂存驱动器。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Storj 和 Backblaze B2

根据您项目的配置方式,使用其 S3 兼容网关端点和访问授权,或原生的 Storj 访问密钥对,在 RcloneView 中将 Storj 添加为远程存储。使用 B2 控制台中的 Application Key ID 和 Application Key 单独添加 Backblaze B2。两个远程存储随后会在文件浏览器面板中并排显示为可浏览的文件树,以便您在构建同步任务之前确认存储桶结构和对象数量。

RcloneView 可在 Windows、macOS 和 Linux 的一个窗口中挂载并同步 90 多个提供商,因此用于 Storj 和 B2 的同一界面也能处理您堆栈中已有的任何其他云服务。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Storj and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 构建同步任务

创建一个以 Storj 存储桶为来源、Backblaze B2 存储桶为目标的单向同步任务——"仅修改目标"可确保 B2 保持为纯镜像,永不写回 Storj。在高级设置(Advanced Settings)步骤中,启用校验和比较,以便文件通过哈希值和大小而非仅修改时间进行匹配,这在对象元数据在两个不同存储后端之间表现不同时尤为重要。

对于归档去中心化数据集的团队——比如一个在 Storj 上拥有 4TB 分片视频拍摄素材的研究团队——过滤(Filtering)步骤可让您按文件年龄或扩展名限定首次运行的范围,以便在完全提交之前先在一个子集上验证流程。初始同步完成后,计划的重新运行只会移动新增或已更改的对象。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Storj bucket to Backblaze B2 with RcloneView" class="img-large img-center" />

首先运行试运行(Dry Run)。它会列出所有将被复制的对象而不实际传输任何内容,这是在两个具有不同定价和检索特性的提供商之间移动数据前确认范围的最安全方式。

## 监控和验证传输

在底部信息视图(Info View)的传输(Transferring)标签中跟踪进度——文件数量、传输速度和完成百分比会在同步运行期间实时更新。完成后,打开 Storj 来源与 B2 目标之间的文件夹比较(Folder Compare),确认每个对象都已到达并且大小匹配,从而捕获任何一侧因网络故障而中途失败的对象。

作业历史(Job History)会永久记录每次同步运行,包括持续时间、移动的总数据量和状态,让您拥有一份准确显示 B2 备份上次与 Storj 保持同步的审计跟踪记录。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Storj to Backblaze B2 sync job history in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用其 S3 兼容端点和访问凭证将 Storj 添加为远程存储。
3. 使用您的 Application Key ID 和 Application Key 添加 Backblaze B2。
4. 构建单向同步任务,运行试运行,然后执行以将 Storj 镜像到 B2。

去中心化存储数据的第二份集中托管副本弥补了大多数备份策略中容易被忽视的缺口,而 RcloneView 使维护这份备份成为一项按计划执行的、由图形界面驱动的例行工作,而不是手动繁琐的操作。

---

**相关指南:**

- [使用 RcloneView 管理 Storj 去中心化云同步](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [使用 RcloneView 将 Backblaze B2 迁移到 Wasabi](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)
- [使用 RcloneView 修复 Storj 上传错误](https://rcloneview.com/support/blog/fix-storj-upload-errors-rcloneview)

<CloudSupportGrid />
