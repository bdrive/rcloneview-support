---
slug: rclone-chunker-split-large-files-cloud-rcloneview
title: "Rclone Chunker 远程 —— 在 RcloneView 中为任意云存储拆分大文件"
authors:
  - tayson
description: "在 RcloneView 中使用 rclone 的 Chunker 虚拟远程拆分大文件，并上传到对单文件大小有严格限制的云服务商。"
keywords:
  - rclone chunker
  - split large files cloud
  - chunker remote RcloneView
  - large file upload limit
  - cloud file size limit workaround
  - rclone chunker guide
  - split file upload cloud
  - virtual remote chunker
  - rclone virtual remote
  - large file cloud storage
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone Chunker 远程 —— 在 RcloneView 中为任意云存储拆分大文件

> 当云服务商的单文件大小限制阻止你上传时，rclone 的 Chunker 虚拟远程可以透明地拆分文件 —— RcloneView 无需任何命令行即可配置和使用它。

许多云存储服务商对单文件大小有严格限制 —— Dropbox 将单文件上传上限设为 50 GB，一些免费或低价套餐服务商则将上限设为 5–10 GB。对于需要存储数据库转储文件、未压缩的视频导出文件或超过这些限制的大型归档文件的用户来说，rclone 的 **Chunker** 虚拟远程提供了解决方案：它会在上传前将文件拆分成更小的分块，并在下载时透明地重新组装。RcloneView 通过其标准的远程管理界面配置和使用 Chunker。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么是 Chunker 远程？

Chunker 是 rclone 的**虚拟远程包装器**之一 —— 这是一个在文件到达实际云端后端之前修改文件处理方式的层。与直接连接云服务商的标准远程不同，Chunker 会拦截超过配置大小限制的文件，并在上传前将其拆分成多个片段。每个分块都以一种命名约定存储为单独的文件，rclone 能够识别这种命名约定，从而在你通过同一个 Chunker 远程读取或下载时透明地重新组装文件。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Chunker virtual remote in RcloneView" class="img-large img-center" />

在 RcloneView 中，像 Chunker 这样的虚拟远程与标准远程一样，通过相同的 **Remote 标签页 > New Remote** 工作流创建 —— 你选择 Chunker 作为提供商，指定基础远程，并配置分块大小。创建结果会与你的其他远程一起出现在资源管理器中，分块过程对你的工作流完全透明。

## 在 RcloneView 中创建 Chunker 远程

1. 首先，确保你的基础远程已经配置好（例如你的 Dropbox 或 OneDrive 远程）。
2. 进入 **Remote 标签页 > New Remote**，然后从虚拟远程部分选择 **Chunker**。
3. 指定**底层远程**（你预先配置好的基础远程）以及其中一个可选的子目录。
4. 将**分块大小**设置为低于你的服务商文件大小限制 —— 例如，大多数服务商设为 4 GB，Dropbox 则设为 45 GB 以保持在 50 GB 上限之下。
5. 保存 Chunker 远程 —— 它现在会像其他任何远程一样出现在资源管理器中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Using a Chunker remote for large file uploads in RcloneView" class="img-large img-center" />

当你将一个 30 GB 的视频文件拖放到 Chunker 远程时，RcloneView 会将其作为多个分块（例如八个 4 GB 的文件）上传到底层云端。通过同一个 Chunker 远程读回该文件时，会透明地重新组装 —— 你的应用程序看到的是一个连续的文件。

## 实际应用场景

一名数据工程师每晚需要将 20 GB 的数据库转储文件归档到一个文件大小限制为 10 GB 的云服务，他创建了一个包装该服务的 Chunker 远程，分块大小设为 8 GB。任务管理器中的同步任务与其他任何云传输任务的运行方式完全相同 —— 分块过程对任务配置完全透明。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling large file uploads via Chunker remote in RcloneView" class="img-large img-center" />

**将 Chunker 与 Crypt 结合使用**可以构建一个高级虚拟远程堆栈：先用 **Crypt** 包装你的基础远程（实现端到端加密），再用 **Chunker** 包装这个 Crypt 远程（实现拆分）。结果是：分块在上传前已被加密，服务商只能看到被拆分成有大小限制片段的不透明加密数据块。对于任意云服务商上的敏感大文件而言，这是一种出色的方案 —— RcloneView 通过其标准的远程管理界面处理这两层，无需任何命令行。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将你的基础云远程（有文件大小限制的服务商）添加为标准远程。
3. 进入 **Remote 标签页 > New Remote**，选择 **Chunker**，并指定你的基础远程和分块大小。
4. 通过 Chunker 远程传输大文件 —— 拆分与重新组装会自动透明完成。

Chunker 为原本会拒绝上传的服务商解锁了大文件云存储能力 —— 对于文件大小限制原本会阻碍操作的数据密集型工作流而言，这是一个强大的虚拟远程。

---

**相关指南：**

- [虚拟远程 —— 使用 RcloneView 组合、联合、别名远程](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [使用 RcloneView 实现零命令行 Crypt 远程配置](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [使用 RcloneView 修复云端文件大小限制错误](https://rcloneview.com/support/blog/fix-cloud-file-size-limit-errors-rcloneview)

<CloudSupportGrid />
