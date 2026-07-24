---
slug: memory-remote-ram-temp-storage-rcloneview
title: "Memory 远程 — RcloneView 中基于 RAM 的临时存储"
authors:
  - casey
description: "了解 RcloneView 的 Memory 虚拟远程如何利用基于 RAM 的临时存储,实现快速测试、暂存和一次性云端工作流。"
keywords:
  - memory remote rclone
  - rcloneview memory remote
  - 基于 RAM 的云存储
  - virtual remote rcloneview
  - 临时云存储
  - rclone 测试远程
  - 暂存云传输
  - rcloneview virtual remotes
  - 一次性存储 rclone
  - 内存文件存储
tags:
  - RcloneView
  - feature
  - guide
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memory 远程 — RcloneView 中基于 RAM 的临时存储

> 需要一个关闭即消失的临时空间吗?RcloneView 的 **Memory** 虚拟远程为你提供基于 RAM 的存储,可在不接触磁盘的情况下测试同步任务和暂存传输。

在 RcloneView 的虚拟远程——Alias、Crypt、Cache、Chunker、Combine、Union、Hasher 和 Compress——之中,Memory 与众不同:它在整个会话期间将数据完全存储在 RAM 中,不写入磁盘,退出时也不留下任何痕迹。这种临时、不留痕迹的特性,正是它在特定工作流中(而非日常存储)发挥作用的原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memory 远程的用途

与 Alias(指向现有路径的快捷方式)或 Crypt(为现有远程加密)不同,Memory 是一个独立的存储后端,仅存在于正在运行的 rclone 进程的内存中。复制到其中的任何内容,都会在内置 rclone 实例重启或应用关闭的瞬间消失。这种临时、不留痕迹的特性,正是它适用于一组特定工作流而非日常存储的原因。

RcloneView 可以在一个窗口内于 Windows、macOS 和 Linux 上挂载并同步 90+ 家提供商——Memory 远程只是同一个 Remote Manager 中的另一个条目,配置和使用方式与任何真实的云连接完全相同。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a transfer job in RcloneView" class="img-large img-center" />

## 安全地测试同步任务

在将新的同步任务指向生产云存储之前,你可以先创建一个 Memory 远程并在其上运行该任务。这样可以确认你的来源选择、筛选规则和文件夹结构是否按预期工作,而不会让目标端的真实数据面临风险。结合 Dry Run,你将获得双重保障:一次模拟预览,加上一次不产生成本、不留下任何痕迹的实际测试复制。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a test sync job in RcloneView" class="img-large img-center" />

## 在提供商之间暂存传输

在两个直接传输效率不高的云提供商之间移动文件时,Memory 远程可以作为小批量的快速中转站——在正式安排多步骤批量操作之前进行验证时非常有用。由于 Memory 没有磁盘 I/O 开销,小规模暂存传输可以快速完成,让你能够迅速迭代批量序列。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Managing remotes in RcloneView's Mount Manager" class="img-large img-center" />

## 设置 Memory 远程

添加 Memory 远程的流程与 RcloneView 中添加任何其他连接的 New Remote 流程相同。

**设置方法:**

1. 打开 Remote 标签页,点击 **New Remote**。
2. 从虚拟远程类型列表中选择 **Memory**。
3. 保存——由于存储完全位于本地正在运行的 rclone 进程中,因此不需要凭据或配置。
4. 像使用普通远程一样,在任何 Sync、Copy 或批量任务中将其用作来源或目标。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into a remote in RcloneView" class="img-large img-center" />

## 何时不应使用

Memory 存储不是备份目标,绝不应存放任何你需要保留的内容——重启 rclone 或应用会将其完全清空。它同时受限于可用的系统 RAM,因此只适用于小型测试批次,而不适合大规模传输。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 从 New Remote 的 Virtual Remotes 部分添加一个 Memory 远程。
3. 在对真实目标运行同一任务之前,先将测试同步任务指向它。
4. 使用 Job History 确认测试按预期运行,然后切换为你的实际云端远程。

一次性的基于 RAM 的远程只是一个小小的补充,但在构建新工作流时,它填补了"用 Dry Run 模拟"与"投入生产"之间的实际空白。

---

**相关指南:**

- [Virtual Remotes — RcloneView 中的 Combine、Union 和 Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias 远程 — RcloneView 中的快捷路径](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)
- [加密云备份 — RcloneView 的 Crypt 远程指南](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
