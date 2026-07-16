---
slug: migrate-wasabi-to-cloudflare-r2-rcloneview
title: "使用 RcloneView 将 Wasabi 迁移到 Cloudflare R2"
authors:
  - tayson
description: "使用 RcloneView 将数据从 Wasabi 迁移到 Cloudflare R2。比较定价、设置两个 S3 兼容远程、传输数据，并逐步验证迁移结果。"
keywords:
  - rcloneview
  - wasabi to cloudflare r2
  - migrate wasabi to r2
  - cloudflare r2 migration
  - wasabi migration tool
  - s3 compatible migration
  - cloud storage migration
  - r2 no egress fees
  - wasabi data transfer
  - object storage migration gui
tags:
  - RcloneView
  - wasabi
  - cloudflare-r2
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Wasabi 迁移到 Cloudflare R2

> Wasabi 和 Cloudflare R2 都兼容 S3，并且都被宣传为 AWS S3 的低成本替代方案，但它们的定价模式存在重要差异——**RcloneView** 通过可视化界面帮助你在两者之间完成迁移。

Wasabi 提供的热云存储价格为 $6.99/TB/月，无流出费用，但要求最短 90 天的存储期限,并收取最低月费。Cloudflare R2 的收费为 $0.015/GB/月（约合 $15.36/TB），同样零流出费用，且没有最短存储期限限制。对于数据检索频繁或对象生命周期短的工作负载，R2 可能显著更便宜。RcloneView 将两者都作为 S3 兼容远程进行连接，并提供简单直接的迁移路径。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Wasabi 迁移到 Cloudflare R2

两家提供商都取消了流出费用，这是它们相较于 AWS S3 的主要卖点。是否迁移通常取决于以下几点：

- **最短存储期限**：Wasabi 对每个对象至少收取 90 天的存储费用，即使你提前删除了它。R2 没有最短期限限制，更适合临时性或频繁替换的数据。
- **CDN 集成**：R2 与 Cloudflare 的 CDN 网络原生集成，无需额外配置即可通过 Cloudflare 域名即时公开访问存储的对象。
- **Workers 集成**：如果你的应用使用 Cloudflare Workers，R2 可以从边缘计算实现零延迟访问。
- **规模化定价**：对于存储密集型工作负载，Wasabi 的按 TB 统一计价可能更便宜。对于 API 调用量大的工作负载，R2 的定价模式（每月前 1000 万次 Class B 请求免费）可能更划算。

## 设置两个远程

### Wasabi 远程

打开 RcloneView 的远程管理器，添加一个 S3 兼容远程。选择 **Wasabi** 作为提供商，输入你的 Wasabi Access Key 和 Secret Key，并指定区域端点（例如 `s3.us-east-1.wasabisys.com`）。选择要迁移的存储桶。

### Cloudflare R2 远程

再添加一个 S3 兼容远程，选择 **Cloudflare R2** 作为提供商。输入你的 R2 Access Key ID 和 Secret Access Key（在 Cloudflare 控制台的 R2 > Manage R2 API Tokens 中生成）。端点格式为 `https://<account-id>.r2.cloudflarestorage.com`。在 Cloudflare 控制台中创建目标存储桶，或让 RcloneView 在设置过程中自动创建。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 执行迁移

在左侧面板打开 Wasabi，右侧面板打开 R2。导航到 Wasabi 上的源存储桶和 R2 上的目标存储桶。

由于两家提供商都使用 S3 API，元数据传输十分简单——内容类型、缓存控制标头和自定义元数据都会被保留。RcloneView 在传输过程中使用服务端元数据，无需额外配置即可保留对象属性。

对于初次迁移，请使用复制任务。RcloneView 通过 MD5 校验和比较文件（Wasabi 和 R2 对非分段上传都返回标准的 MD5 ETag），仅传输新增或已更改的文件。可配置并发数的多线程传输能让迁移过程保持高效——对于大型存储桶迁移，可将传输数设置为 8-16。

请注意 Wasabi 的最短存储期限：如果对象是在最近上传的（90 天以内），即使你删除了它们，Wasabi 仍会按满 90 天计费。请相应地规划迁移时间表——先迁移、后验证，等 90 天窗口期过后再从 Wasabi 中删除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Wasabi to Cloudflare R2 in RcloneView" class="img-large img-center" />

## 验证迁移结果

传输完成后，使用 RcloneView 的比较功能验证每个对象是否都已到达 R2。选择 Wasabi 作为源、R2 作为目标，运行文件夹比较。相同的对象会显示为匹配；缺失或不一致的对象会被高亮标出以供检查。

如需进一步确认，可运行 check 操作，对两端计算校验和。这能在字节级别验证数据完整性。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Wasabi to R2 migration in RcloneView" class="img-large img-center" />

## 迁移后清理

验证迁移完成后：

1. 更新应用配置，将其指向 R2 端点而非 Wasabi。
2. 测试应用访问，确认一切在 R2 上正常工作。
3. 等待 Wasabi 上的最短 90 天存储期限过后再删除对象，以避免提前删除产生的费用。
4. 删除 Wasabi 存储桶并停用 Wasabi 访问密钥。

如果在过渡期间需要同时运行两个提供商，可以在 RcloneView 中安排一个每日同步任务，让 R2 与添加到 Wasabi 的任何新对象保持同步。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling sync from Wasabi to R2 during transition" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 Wasabi 和 Cloudflare R2 添加为 S3 兼容远程。
3. 运行从 Wasabi 到 R2 的复制任务。
4. 使用比较和 check 操作进行验证。
5. 更新应用端点，并在保留期结束后清理 Wasabi。

Wasabi 和 R2 都是出色的 S3 兼容选项，但当你的工作负载特性发生变化时，RcloneView 能让迁移过程毫无痛苦。

---

**相关指南：**

- [添加 AWS S3 和 S3 兼容存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
