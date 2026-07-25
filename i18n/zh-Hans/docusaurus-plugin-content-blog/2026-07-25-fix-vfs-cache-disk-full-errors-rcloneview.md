---
slug: fix-vfs-cache-disk-full-errors-rcloneview
title: "解决 VFS 缓存磁盘空间已满错误 — 使用 RcloneView 管理挂载缓存"
authors:
  - robin
description: "了解为什么挂载的云端驱动器会占满本地磁盘,以及如何使用 RcloneView 的缓存设置解决 VFS 缓存磁盘空间已满错误。"
keywords:
  - VFS 缓存磁盘已满
  - 修复 VFS 缓存错误
  - rclone 挂载缓存已满
  - RcloneView 缓存模式
  - 挂载缓存最大大小
  - 云挂载磁盘空间
  - VFS 缓存模式 writes
  - RcloneView 挂载设置
  - 缓存最大有效期
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解决 VFS 缓存磁盘空间已满错误 — 使用 RcloneView 管理挂载缓存

> 挂载的云端驱动器占满本地磁盘,通常意味着缓存模式设置得比你的工作流程实际需要的更高 — 下面介绍如何在 RcloneView 中诊断并解决这个问题。

将云存储挂载为本地驱动器依赖 VFS(虚拟文件系统)缓存来让读写更快、更可靠,但这个缓存保存在本地磁盘上,一旦配置不当就可能悄悄占用数 GB 空间。当挂载停止接受写入,或者操作系统报告磁盘已满,而你的云存储实际上还有充足空间时,问题几乎总是出在 VFS 缓存上,而不是远程存储本身。RcloneView 直接在挂载配置界面中公开了所有相关的缓存设置,因此修复这个问题不需要手动编辑 rclone 配置文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么 VFS 缓存会占满本地磁盘

RcloneView 的挂载选项包含四种缓存模式:off、minimal、writes(默认)和 full。在 "writes" 模式下,你修改过的文件会在完成上传之前一直缓存在本地。在 "full" 模式下,即使只是打开来读取的文件也会被缓存到本地,以便无需再次访问网络就能重新读取 — 这对性能很有利,但也意味着通过挂载访问的大型媒体库或数据集可能会悄悄占满你的驱动器。

<img src="/support/images/en/blog/new-remote.png" alt="Mount configuration screen showing VFS cache mode options in RcloneView" class="img-large img-center" />

如果你发现磁盘空间消失的地方是存放 RcloneView 缓存目录的驱动器,而不是云存储自身的用量统计,那么这就是首先要检查的设置。

## 选择合适的缓存模式

对于大多数日常使用场景,"writes" 模式是最合适的平衡点:它只缓存正在被修改的内容,将磁盘占用限制在当前的工作范围内。将 "full" 模式留给那些确实需要离线重新读取大文件的场景,例如直接在挂载上进行视频剪辑,项目结束后再切回 "writes" 或 "minimal"。"minimal" 模式缓存内容最少,是磁盘空间紧张时最安全的选择。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing writes and full VFS cache modes for a cloud mount" class="img-large img-center" />

RcloneView 可以在同一个窗口中挂载并同步 90 多个服务商,覆盖 Windows、macOS 和 Linux,因此无论你挂载的是哪个远程,同样的缓存设置都适用。

## 设置缓存最大大小和最大有效期

除了缓存模式本身,RcloneView 还允许你通过缓存最大大小(以字节为单位,-1 表示无限制)和缓存最大有效期来限制缓存,后者控制缓存数据在被清除之前的有效时长。设置一个明显低于可用磁盘空间的具体最大大小,即使在 "full" 模式下,也能防止单次大规模读取会话耗尽整个驱动器。如果你处理的文件在其他地方经常变动,可以搭配更短的最大有效期。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting cache max size and cache max age for a mount in RcloneView" class="img-large img-center" />

## 清理已经占满的缓存

如果挂载因为缓存已满而拒绝写入,先从 Mount Manager 中卸载,释放已缓存的数据,然后在恢复工作前以更低的缓存模式或明确的最大大小重新挂载。事先开启 Debug 级别日志记录,再检查 Log 标签页,可以确认实际原因是缓存清除,而不是网络或权限错误。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Unmounting and re-mounting a cloud drive from Mount Manager after a cache disk full error" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 Mount Manager,编辑受影响挂载的设置。
3. 将缓存模式切换为 "writes" 或 "minimal",并设置一个具体的缓存最大大小。
4. 卸载后重新挂载以应用新的限制,然后在正常使用期间监控磁盘用量。

只需花几分钟调整缓存模式和大小设置,就能把一个难以预测的磁盘已满错误,变成一个完全按预期工作的挂载。

---

**相关指南:**

- [RcloneView 中的 VFS 缓存与挂载性能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [通过 RcloneView 调整 VFS 缓存解决 Plex 缓冲问题](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)
- [使用 RcloneView 解决云挂载断线问题](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)

<CloudSupportGrid />
