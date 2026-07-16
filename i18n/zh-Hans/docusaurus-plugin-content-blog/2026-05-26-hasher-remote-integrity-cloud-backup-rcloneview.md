---
slug: hasher-remote-integrity-cloud-backup-rcloneview
title: "Hasher 远程 — 在 RcloneView 中为任意云存储添加文件完整性校验和"
authors:
  - robin
description: "了解 RcloneView 的 Hasher 远程如何为缺乏原生哈希支持的云端后端添加校验和验证，保护每一次备份免受静默损坏的影响。"
keywords:
  - RcloneView Hasher 远程
  - 云文件完整性验证
  - 云备份校验和 rcloneview
  - rclone hasher 远程指南
  - 验证云传输完整性
  - 云备份校验和验证
  - 检测云同步文件损坏
  - 云存储数据完整性 rcloneview
  - 云备份哈希验证
  - rclone 虚拟远程 hasher
tags:
  - RcloneView
  - feature
  - cloud-storage
  - backup
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher 远程 — 在 RcloneView 中为任意云存储添加文件完整性校验和

> Hasher 虚拟远程会为原生不支持校验和的云端后端悄悄添加校验和跟踪功能，让每一次同步都成为经过验证、可抵御损坏的传输。

并非每个云存储提供商都会计算并存储文件校验和。仅依赖文件大小和修改时间戳进行比较的提供商，可能会漏掉静默的数据损坏——也就是文件完整传输完毕，但到达时比特位已发生翻转的情况。对于档案管理员、系统管理员以及有数据完整性要求的企业而言，这是一个不容忽视的缺口。RcloneView 支持 rclone 的 Hasher 远程，这是一种虚拟远程包装器，可以在不改变文件存储或读取方式的前提下，为任何现有的云端后端添加 MD5、SHA-1 或其他哈希跟踪功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么是 Hasher 远程，为何它很重要

Hasher 远程是 rclone 虚拟远程类型之一——一种置于现有远程之前、用于增强其能力的包装器。具体来说，Hasher 远程会将校验和与文件一同存储，缓存哈希值，以便后续的同步操作可以按内容比较文件，而不是仅依赖大小比较。当你同步到不提供原生哈希 API 的云服务商，或需要检测不会改变文件大小的位级损坏时，这一点尤为重要。

一个实际的例子：一家媒体制作公司将 4K 视频样片归档到基于 WebDAV 的存储服务器，而该服务器没有原生哈希支持。没有校验和的情况下，rclone 只能按大小和时间戳比较文件——但一个大小相同、却存在细微损坏的文件会显得毫无变化。将 WebDAV 远程包装在 Hasher 远程中后，每次同步都会加入哈希比较，从而在损坏文件静默覆盖好的副本之前将其捕获并标记以供审核。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Hasher virtual remote in RcloneView's New Remote wizard" class="img-large img-center" />

## 在 RcloneView 中设置 Hasher 远程

在 RcloneView 中，像 Hasher 这样的虚拟远程与任何云服务商一样，通过相同的新建远程向导创建。在远程标签页中点击新建远程，然后滚动到虚拟远程类型部分——你会看到 Hasher 与 Crypt、Union、Combine 等一同列出。选择你想要包装的底层远程（例如你的 WebDAV 或 FTP 服务器），选择要启用的哈希算法，然后保存。Hasher 远程会透明地包装你的后端。

保存后，Hasher 远程会像其他任何远程一样出现在远程管理器中。你可以在浏览器面板中打开它、浏览文件，并对其运行同步任务。哈希数据库由系统自动维护——RcloneView 和 rclone 会处理所有记账工作，你与 Hasher 远程的交互方式和与底层存储完全一致，无需改变任何工作流程。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a checksum-verified sync transfer using the Hasher remote in RcloneView" class="img-large img-center" />

## 运行完整性验证传输

配置好 Hasher 远程后，在 RcloneView 同步任务向导的第 2 步（高级设置）中启用**启用校验和**选项。这会让 rclone 使用缓存的哈希值而非仅仅使用大小和时间戳来比较文件。首次运行时，会计算并存储哈希值。后续运行会与已存储的哈希值进行比较，对未更改的文件跳过重新哈希——即便是在大型归档中，也能保持同步速度。

试运行功能可与 Hasher 远程无缝配合。在提交大型归档同步之前，先运行一次试运行，预览基于哈希比较将会复制、修改或跳过哪些文件。这在覆盖数月的归档素材之前非常有价值，而且不会产生任何成本——在你确认之前不会移动任何文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files with checksum verification enabled in RcloneView" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing integrity-verified backup runs completed in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程标签页中点击新建远程，并从虚拟远程部分选择 Hasher。
3. 用 Hasher 远程包装你现有的云端远程——WebDAV、FTP，或任何没有原生校验和的后端。
4. 创建一个同步任务，在第 2 步高级设置中启用校验和比较，并运行你的第一次完整性验证备份。

保护你的档案免受静默损坏只需几分钟的设置时间，而 Hasher 远程让这种保护适用于 RcloneView 支持的每一个后端。

---

**相关指南：**

- [使用 RcloneView 检查并验证云文件完整性](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [在 RcloneView 中使用 Crypt 远程加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [虚拟远程：RcloneView 中的 Combine、Union 与 Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
