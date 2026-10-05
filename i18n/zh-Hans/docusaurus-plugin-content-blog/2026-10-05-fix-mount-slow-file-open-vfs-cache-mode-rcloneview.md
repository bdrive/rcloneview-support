---
slug: fix-mount-slow-file-open-vfs-cache-mode-rcloneview
title: "解决云挂载打开文件缓慢的问题 — 使用 RcloneView 调整 VFS 缓存"
authors:
  - alex
description: "在 Mount Manager 中调整缓存模式、缓存大小和目录缓存时间，改善已挂载云盘打开文件缓慢的问题。"
keywords:
  - 解决云挂载缓慢
  - 挂载的云盘打开文件很慢
  - VFS 缓存模式
  - rclone 挂载性能
  - 目录缓存时间
  - 云盘卡顿
  - RcloneView 挂载
  - rclone GUI
  - 挂载故障排查
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解决云挂载打开文件缓慢的问题 — 使用 RcloneView 调整 VFS 缓存

> 缓存设置会影响已挂载云盘的响应方式，您可以在 Mount Manager 中为每个挂载单独修改。

已挂载的云盘用起来就像本地磁盘，直到您双击一个大文件并开始等待。文件夹列表加载缓慢、应用程序保存时卡住，或是媒体播放卡顿。RcloneView 提供了每个挂载背后的 VFS 缓存选项，让您可以按远程逐一调整，而不必凭猜测。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先检查缓存模式

在 Remote 选项卡中打开 Mount Manager 并编辑挂载。缓存模式提供 off、minimal、writes 和 full。默认值为 writes，会缓存写入驱动器的文件。如果您经常重复读取相同的文件（例如文档或媒体），full 也会缓存读取内容，因此再次打开时可以从本地磁盘读取。off 是最精简的设置，但会将每次读取都发送到云端。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView 中的 Mount Manager 设置" class="img-large img-center" />

驱动器处于挂载状态时，Edit 和 Delete 会被禁用，因此请先卸载，修改设置后再重新挂载。

## 设置缓存大小和目录时间

缓存最大大小默认为 -1，表示没有大小限制，这可能会占满较小的磁盘。请设置一个与可用空间相匹配的上限，并使用 cache max age 控制缓存数据的有效时长。Dir cache time 控制文件夹列表的记忆时长：数值越大，重复的文件夹查询越少，但其他人所做的更改需要更长时间才会显示。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="从 Explorer 工具栏挂载远程文件夹" class="img-large img-center" />

想象一位建筑师从共享挂载中打开 300 MB 的图纸。full 缓存模式加上合理的大小限制，意味着第一次打开时下载文件，之后再打开则从本地磁盘读取。

## 为任务选择合适的工具

挂载适合打开和编辑单个文件。若要移动整个文件夹，同步或复制作业比通过驱动器拖动文件更易于监控，并且同步、复制和 Folder Compare 在 FREE 许可证下均可使用。在 Windows 上，挂载类型默认为 cmount；在 Linux 和 macOS 上默认为 nfsmount；Linux 还需要安装 FUSE。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="使用同步作业而非挂载进行批量传输" class="img-large img-center" />

如果问题仍然存在，请在设置中启用 rclone 日志，将级别设置为 DEBUG，重启内嵌 rclone，然后重现问题。

## 开始使用

1. **下载 RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html)。
2. 打开 Mount Manager，卸载速度慢的驱动器，然后点击 Edit。
3. 对于以读取为主的工作，将缓存模式切换为 full，并设置缓存最大大小。
4. 如果浏览缓慢，请增大 dir cache time，然后 Save 并重新挂载。

根据您的工作方式调整缓存设置后，已挂载的云盘就能按照您的工作流程所需的方式运行。

---

**相关指南：**

- [VFS 缓存 — RcloneView 中的挂载性能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [使用 RcloneView 修复 VFS 缓存磁盘已满错误](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [使用 RcloneView 将云存储挂载为本地驱动器](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
