---
slug: fix-mount-stale-files-dir-cache-rcloneview
title: "修复挂载显示过期文件的问题 — RcloneView Dir Cache Time详解"
authors:
  - morgan
description: "通过在RcloneView中正确调整Dir cache time和VFS cache mode,修复挂载的云盘显示过期或缺失文件的问题。"
keywords:
  - 挂载显示旧文件
  - RcloneView dir cache time
  - 挂载驱动器中的过期文件
  - 修复过期的挂载列表
  - 云盘不刷新
  - VFS cache mode不匹配
  - RcloneView挂载故障排查
  - 云端挂载目录缓存
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

# 修复挂载显示过期文件的问题 — RcloneView Dir Cache Time详解

> 已挂载的云盘仍显示一个已删除的文件,或隐藏了一个刚创建的新文件,这通常不是故障——只是它的目录缓存还没有过期。下面介绍如何在RcloneView中解决这个问题。

将远程挂载为本地驱动器时,RcloneView并不会在每次点击时都重新列出所有文件夹——它会保留一个短期的目录缓存,让浏览体验感觉即时,而不必每次都往返云端提供商。这在速度上很有优势,但也意味着从另一台设备、另一个RcloneView窗口,或提供商自己的网页应用所做的更改,可能需要一点时间才会出现在挂载的文件夹中。本指南介绍这种延迟何时属于正常现象,以及在不正常时如何调整。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 理解Dir Cache Time

RcloneView的挂载配置中包含**Dir cache time**设置,它控制文件夹列表在挂载重新检查远程更改之前保持有效的时长。这与管理文件内容缓存(而非目录结构)的VFS **Cache mode**设置(off / minimal / writes / full)是分开的。较短的Dir cache time意味着挂载几乎能立即反映远程更改,但会向提供商发出更多列表请求;较长的Dir cache time能减少API调用,但代价是新文件或已删除文件出现的延迟更长。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView中包含Dir cache time的挂载配置选项" class="img-large img-center" />

如果你挂载的远程有多个人或多台设备同时写入——例如共享的Google Drive文件夹——默认的缓存窗口可能会让人觉得RcloneView"漏掉"了一个实际上几秒前从其他位置添加的文件。它并没有漏掉任何东西,只是挂载还没有刷新那个文件夹的列表。

## 修复不显示新文件的挂载

在假定确实存在问题之前,先尝试手动刷新。在Explorer面板或指向该挂载的操作系统文件浏览器中,强制重新加载文件夹(按F5,或先离开再返回该目录)通常可以立即显示变更,而不必等待缓存自行过期。如果手动刷新后文件仍未出现,可能需要通过**Mount Manager**卸载并重新挂载,因为卡住的rclone VFS进程有时会持有比配置的Dir cache time更旧的列表。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在RcloneView中刷新已挂载远程文件夹的列表" class="img-large img-center" />

对于近乎实时的可见性比原始API效率更重要的远程,可以在保存并重新挂载之前,在该挂载的Edit设置中降低Dir cache time值。这里存在权衡:在使用频繁的远程上把该值设得过低,会增加RcloneView发出的列表请求数量,可能触发限制每分钟API调用次数的提供商侧速率限制。

## 同时选择Dir Cache Time和Cache Mode

Dir cache time和VFS Cache mode解决的是不同的问题,所以只检查其中一个而不检查另一个,往往只能解决一半的根本问题。如果已删除的文件在挂载中仍显示为可访问(而不是新文件无法出现),这更可能是Cache mode的症状——默认的**writes**会在本地缓存最近写入的文件内容,而**full**还会缓存读取的内容,这两种情况都可能导致本地缓存的副本在缓存被验证之前,比远程的当前状态更"旧"。将较短的Dir cache time与适合该远程实际使用方式的Cache mode搭配调整,可以解决大多数过期列表问题。

<img src="/support/images/en/blog/new-remote.png" alt="在RcloneView中调整远程的挂载缓存设置" class="img-large img-center" />

RcloneView可以在Windows、macOS和Linux上通过同一窗口挂载并同步90多个提供商,因此无论挂载指向Google Drive、S3存储桶,还是自建的WebDAV服务器,这些缓存设置的应用方式都相同。

## 快速上手

1. 从[rcloneview.com](https://rcloneview.com/src/download.html)**下载RcloneView**。
2. 打开**Mount Manager**,选择受影响的挂载,并检查其当前的Dir cache time值。
3. 对于会被多个来源频繁更改的远程,降低Dir cache time,并卸载/重新挂载以使其生效。
4. 如果真正的问题是文件*内容*而不仅是列表过期,请同时检查Cache mode设置。

一个能准确反映云端状态、并按照远程实际使用方式设定节奏的挂载,远胜过每次都靠猜测"为什么没有同步"。

---

**相关指南:**

- [VFS Cache — 在RcloneView中提升云盘的挂载性能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [修复VFS Cache磁盘已满错误 — 用RcloneView管理挂载缓存](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [在RcloneView中修复Rclone挂载和FUSE错误](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
