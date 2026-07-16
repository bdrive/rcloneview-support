---
slug: migrate-dropbox-to-storj-rcloneview
title: "将 Dropbox 迁移到 Storj — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 Dropbox 迁移到 Storj 去中心化云存储 — 无需占用本地磁盘空间即可实现云到云传输，并通过 Folder Compare 进行验证。"
keywords:
  - Dropbox to Storj migration
  - Storj decentralized cloud
  - Dropbox migration tool
  - RcloneView Dropbox
  - Storj backup
  - cloud migration GUI
  - decentralized storage transfer
  - cloud-to-cloud migration
  - Storj rclone
  - Dropbox alternatives
tags:
  - dropbox
  - storj
  - cloud-to-cloud
  - migration
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 迁移到 Storj — 使用 RcloneView 传输文件

> Storj 提供具有端到端加密和出色耐久性的去中心化云存储 — RcloneView 可以将您的 Dropbox 内容直接迁移到 Storj，无需先下载再重新上传。

Storj 是一个去中心化的云存储网络，通过纠删码技术提供高耐久性，默认启用端到端加密，并具有极具成本效益的定价 — 对开发者和注重隐私的用户来说都是一个有吸引力的替代方案。手动从 Dropbox 迁移文件通常意味着要先将所有内容下载到本地，但 RcloneView 支持直接的云到云传输，将数据从 Dropbox 流式传输到 Storj，而不会占用本地磁盘空间。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Dropbox 和 Storj

通过 OAuth 浏览器流程在 RcloneView 中添加 **Dropbox** — **Remote 选项卡 > New Remote > Dropbox**。对于 Storj，添加一个新的远程，并使用您的凭据配置 rclone 的 Storj 后端。设置好两个远程后，在双面板浏览器中并排打开它们 — 左侧是 Dropbox，右侧是 Storj 存储桶 — 以便在迁移前查看您的内容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Storj remotes in RcloneView" class="img-large img-center" />

对于 **Dropbox for Business** 账户，创建远程时请配置 `dropbox_business` 标志，以正确访问团队空间和成员文件夹。

## 执行迁移

在 **Job Manager** 中，将源设置为您的 Dropbox 文件夹，目标设置为您的 Storj 存储桶路径。对于一个 300 GB 项目存档的干净迁移，建议使用 **Copy** 任务类型而非 Sync — 这样可以在复制所有内容到 Storj 的同时保留 Dropbox 上的源文件，让您有时间在删除原始文件之前验证迁移结果。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox to Storj migration job running in RcloneView" class="img-large img-center" />

在任务设置中启用校验和验证可确保每个文件都正确传输。Storj 的架构将纠删码分片分布在全球节点网络中，因此您获得的不仅仅是一份副本 — 而是一份具备冗余保护的存档。RcloneView 的 **Transferring** 选项卡会在整个迁移过程中显示实时进度、传输速度和文件数量。

## 迁移后验证

任务完成后，使用 RcloneView 的 **Folder Compare** 比较 Dropbox 源与 Storj 目标。显示为“equal”的文件表示大小和修改时间均匹配。仅出现在左侧的文件表示未成功传输的内容 — 再次运行该任务即可解决，因为 rclone 只会传输缺失或不同的文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Dropbox to Storj migration with Folder Compare in RcloneView" class="img-large img-center" />

一旦比较确认所有文件均已存在于 Storj 上，您就可以安全地归档或删除 Dropbox 中的内容。**Job History** 选项卡提供了迁移的永久记录：传输了什么内容、何时传输，以及移动了多少数据。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 **Dropbox** 远程（OAuth）和 **Storj** 远程（凭据）。
3. 在 Job Manager 中创建从 Dropbox 到您的 Storj 存储桶的 **Copy** 任务。
4. 在删除 Dropbox 内容之前，使用 **Folder Compare** 验证迁移的完整性。

通过 RcloneView 迁移到 Storj，您可以获得去中心化存储的弹性和隐私优势，而无需经历先下载再重新上传的繁琐流程。

---

**相关指南：**

- [使用 RcloneView 管理 Storj 去中心化云同步](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [将 Dropbox 备份到 Backblaze B2 — 使用 RcloneView 实现经济实惠的存储](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [使用 RcloneView 传输 Storj 和 Google Drive 文件](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />
