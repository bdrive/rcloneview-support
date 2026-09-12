---
slug: migrate-seafile-to-backblaze-b2-rcloneview
title: "将 Seafile 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用跨平台 GUI 工具 RcloneView,将自建 Seafile 中的资料库迁移到 Backblaze B2,实现可靠的云到云传输。"
keywords:
  - 将 seafile 迁移到 backblaze b2
  - seafile backblaze b2 迁移
  - seafile 云备份
  - 自建到云端迁移
  - backblaze b2 gui
  - rcloneview seafile
  - 跨平台文件传输
  - seafile 资料库备份
tags:
  - RcloneView
  - seafile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Seafile 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 无需接触命令行,即可将自建 Seafile 资料库迁移到 Backblaze B2 对象存储。

在自有硬件或私有服务器上运行 Seafile 的团队,最终都会遇到瓶颈:本地磁盘空间用尽、服务器维护变得繁重,或者项目需要一份异地副本用于灾难恢复。Backblaze B2 为这类数据提供了性价比高、持久可靠的存储目的地,但在自建同步平台与对象存储之间协调传输,是大多数文件管理工具都处理得不够好的一件事。RcloneView 可以在同一个窗口中将 Seafile 和 Backblaze B2 都作为远程连接,让你直接浏览、比较并移动资料库。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Seafile 与 Backblaze B2 连接为远程

Seafile 的添加方式和其他远程一样,在 RcloneView 中添加后,你会得到一个可浏览的资料库文件列表,并配有文件夹树和面包屑路径栏。Backblaze B2 需要在创建远程时直接输入 Application Key ID 和 Application Key——无需 OAuth 跳转,也无需单独的 CLI 设置。两个远程都会以标签形式显示,你可以使用水平或垂直分割,在一个面板中打开 Seafile,在另一个面板中打开你的 B2 存储桶。

与只支持挂载的工具不同,RcloneView 在 FREE 许可下也支持同步和文件夹比较,因此你不必仅依赖简单的拖放来完成一次性迁移。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote alongside Seafile in RcloneView" class="img-large img-center" />

两个远程都可见之后,较小的资料库可以直接在面板间拖放传输,而需要重试和过滤的大型持续传输,则可以设置为 Sync 任务。

## 将迁移作为 Sync 任务运行

若要完整迁移一个资料库,可以配置一个以 Seafile 为源、以你的 Backblaze B2 存储桶为目标的 Sync 任务。四步向导中可以设置并发文件传输数和多线程传输数,这在迁移共享文档资料库中常见的数千个小文件时非常重要。启用校验和比较后,系统会按哈希值和文件大小验证文件,而不是单次传输后就默认无误。

在正式执行传输之前,先运行 Dry Run,准确预览将会复制哪些文件。这在迁移一个已使用多年的资料库时特别有用,因为它能在陈旧或异常庞大的文件占用 B2 存储空间之前提前显示出来。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Seafile to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

## 过滤与验证传输结果

Seafile 资料库中常常混杂着各种文档类型、临时文件以及版本历史留下的产物,而你并不希望这些内容在 B2 中重复出现。RcloneView 的过滤设置允许你按文件类型、路径或时间来排除内容——例如,在与代码相关的资料库中跳过 `.git/` 文件夹,或在归档迁移中排除超过指定年限的文件。自定义过滤器使用简单的模式,比如 `.iso` 用于排除扩展名,`/.git/*` 用于排除根目录下的路径。

任务完成后,Job History 会记录执行类型、耗时、总大小、传输速度和文件数量,让你在有人询问迁移是否顺利完成时,能够拿出记录作为参考。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Seafile to Backblaze B2 migration" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用你的账户凭证,将 Seafile 服务器添加为远程。
3. 使用 Application Key ID 和 Application Key 创建 Backblaze B2 远程。
4. 设置从 Seafile 到 B2 的 Sync 任务,先运行 Dry Run,再执行并在 Job History 中确认。

摆脱自建基础设施,并不意味着要从零重建你的工作流程——当两个端点同处一个浏览器窗口时,迁移就变成了一个可追踪的单一任务。

---

**相关指南:**

- [管理 Storj 去中心化云同步](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [将 Nextcloud 同步到 Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [解决 Seafile 同步错误](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
