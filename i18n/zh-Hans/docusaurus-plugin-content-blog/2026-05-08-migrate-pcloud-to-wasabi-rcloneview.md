---
slug: migrate-pcloud-to-wasabi-rcloneview
title: "将 pCloud 迁移到 Wasabi — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将文件从 pCloud 迁移到 Wasabi 对象存储的分步指南。执行经过校验和确认的传输，实现零数据丢失。"
keywords:
  - pCloud to Wasabi migration
  - migrate pCloud Wasabi RcloneView
  - pCloud Wasabi file transfer
  - switch from pCloud to Wasabi
  - cloud migration guide
  - pCloud backup Wasabi
  - Wasabi S3 migration tool
  - rclone pCloud Wasabi GUI
tags:
  - pcloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 pCloud 迁移到 Wasabi — 使用 RcloneView 传输文件

> 通过 RcloneView，一次操作即可将您的 pCloud 资料库迁移到 Wasabi 的兼容 S3 对象存储 — 经过验证、高效，并由 GUI 驱动。

无论您是想为大型归档文件获得更优惠的价格、为开发者工作流获得 S3 API 兼容性，还是仅仅想让您的云存储多样化，从 pCloud 迁移到 Wasabi 都是明智之举。RcloneView 可以处理整个传输过程 — 对两个提供商进行身份验证，在不接触本地磁盘的情况下直接在两者之间流式传输数据，并在每一步验证校验和。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置两个远程

在迁移之前，请先将两个提供商都添加到 RcloneView 中。对于 pCloud，请前往 **Remote 标签页 → New Remote**，选择 pCloud，并完成 OAuth 浏览器登录。对于 Wasabi，请选择 Amazon S3 作为提供商类型，然后选择 Wasabi 作为 S3 端点。输入您的 Wasabi Access Key ID、Secret Access Key，并选择相应的区域（例如 `s3.wasabisys.com`）。两个远程将在几秒钟内出现在浏览面板中。

在左侧面板中打开 pCloud，在右侧面板中打开您的 Wasabi 存储桶。您可以立即并排浏览两个存储，在开始迁移之前确认文件数量和文件夹结构。

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Wasabi as remotes in RcloneView" class="img-large img-center" />

## 运行带校验和验证的迁移

在 **Home 标签页**中，点击 **Sync** 以启动任务向导。将您的 pCloud 文件夹设置为源，将 Wasabi 存储桶（或子文件夹）设置为目标。在步骤 2（高级设置）中，启用 **Checksum** 选项 — 这会让 rclone 使用哈希比较而不仅仅是大小和时间戳来验证文件完整性。对于一家迁移 2TB 原始素材的视频制作公司来说，这可以确保每一帧都完整无损地到达。

将传输并发数设置为与您的网络容量相匹配（对于 Wasabi，8–16 是一个常见的起始值），然后先点击 **Dry Run** 以预览将要传输的确切文件。确认无误后，点击 **Run** 开始实际迁移。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from pCloud to Wasabi in RcloneView" class="img-large img-center" />

## 监控进度并验证完成情况

**Transferring** 标签页会显示实时进度：已传输的文件、总大小以及当前吞吐量。

任务完成后，请查看 **Job History** 标签页以获取完整摘要。然后使用 RcloneView 的 **Folder Compare** 功能，在 pCloud 和 Wasabi 之间进行最终的并排比较 — 筛选出仅在左侧存在或存在差异的文件，以确认没有遗漏任何内容。如果比较结果正常，那么您的迁移就完成了。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring the pCloud to Wasabi transfer in real time" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 pCloud（OAuth）和 Wasabi（S3 凭据）作为远程。
3. 创建一个启用校验和的同步任务，并先运行一次试运行。
4. 执行迁移，之后使用 Folder Compare 进行验证。

使用 RcloneView 从 pCloud 迁移到 Wasabi 是一个安全、可审计的过程，可在每个阶段保护您的数据。

---

**相关指南：**

- [使用 RcloneView 管理 pCloud 云存储](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Wasabi 云存储](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 进行校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
