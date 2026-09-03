---
slug: cache-remote-accelerate-slow-storage-rcloneview
title: "缓存远端 — 在 RcloneView 中加速慢速云存储"
authors:
  - robin
description: "了解 RcloneView 的缓存虚拟远端如何通过缓存目录列表和文件数据来加速慢速云端后端,包括 Plex 集成。"
keywords:
  - rclone cache remote
  - rcloneview 缓存远端设置
  - 加速慢速云存储
  - rclone 缓存 plex 集成
  - 提升云文件浏览速度
  - 缓存虚拟远端 rclone
  - rcloneview 虚拟远端
  - 慢速云存储解决方案
  - plex 媒体服务器云缓存
  - rclone 目录缓存
tags:
  - RcloneView
  - feature
  - performance
  - plex
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 缓存远端 — 在 RcloneView 中加速慢速云存储

> 有些云端后端每次浏览时都要重新拉取列表,速度很慢 —— 缓存虚拟远端通过记住已经获取过的内容来解决这个问题。

并非每个存储提供商都能快速响应。API 速率限制严格或单次请求延迟较高的后端,会让浏览体验变得迟缓,尤其是在大型文件夹树中,或者像 Plex 这样的媒体服务器反复扫描同一媒体库时。RcloneView 直接在 New Remote 向导中提供了 rclone 的缓存虚拟远端,让你无需手动编辑配置文件,就能为慢速远端包裹一层缓存。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 缓存远端的作用

缓存远端是一个包装器,而不是独立的存储类型 —— 它位于 RcloneView 与你已配置好的现有远端之间,拦截目录列表和文件读取请求,使重复的请求不会再次到达后端。第一次浏览某个文件夹时,RcloneView 会像往常一样从被包装的远端获取数据;下一次,缓存会在本地直接返回结果,这在 API 响应较慢或速率限制严格的远端上尤其明显。

这与挂载内置的 VFS 缓存模式不同,后者只为单次挂载会话缓存数据。缓存虚拟远端则会创建一个持久的、有独立名称的远端,你可以直接浏览、挂载或同步它,其缓存状态在应用重启后依然保留。最常见的实际使用场景是将缓存远端与 Plex 媒体服务器集成配合使用,否则持续的媒体库扫描会对底层云存储产生大量冗余的 API 调用。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中创建一个包装现有云存储远端的缓存虚拟远端" class="img-large img-center" />

## 在 RcloneView 中设置缓存远端

打开 Remote 标签页 > New Remote,在虚拟远端选项中选择 Cache。系统会要求你选择要包装的底层远端 —— 无论是云存储提供商、S3 兼容存储桶,还是 SFTP、WebDAV 等基于协议的连接,该远端都必须已在 RcloneView 中配置好。给缓存远端起一个易于区分的名称,以便在 Tab Bar 和 Remote Manager 中清楚地知道自己浏览的是缓存版本,而不是原始连接。

创建完成后,缓存远端会与其他远端一起出现在 Remote Manager 中,浏览、挂载或同步等操作与其他条目并无二致。RcloneView 可在一个窗口内于 Windows、macOS 和 Linux 上挂载并同步 90+ 提供商,因此基于慢速后端构建的缓存远端也能获得与原生连接相同的功能集 —— 可以对它执行 Dry Run 同步预览、将其添加到 Job Manager,或将其挂载为本地驱动器。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="从 Remote Explorer 面板工具栏挂载缓存远端" class="img-large img-center" />

## 缓存真正有用的场景

在列表操作成本相对于数据变化量较高的远端上,缓存的收益最为明显 —— 例如 Plex 反复扫描的大型照片或视频库、层级较深的文件夹树,或速率限制较为保守、会限制连续请求的提供商。对于经常写入的远端,缓存的作用则较小,因为变更的文件需要先通过缓存传播,其他工具才能一致地看到这些变化。

如果你为媒体流播放挂载缓存远端,建议将挂载自身的 VFS 缓存模式设置为 writes 或 full 一起使用 —— 这两层缓存在不同层级发挥作用,能够相互补充。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager 显示针对缓存远端运行的同步作业" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 如果你要加速的慢速远端还没有配置,先完成配置。
3. 打开 New Remote,选择 Cache,并选择要包装的那个远端。
4. 挂载或浏览新的缓存远端,并在第二次访问同一文件夹时比较列表加载速度。

缓存远端不会让你的网络连接本身变快,但对于会反复出现的浏览模式 —— 尤其是媒体库扫描 —— 它能让一个慢速后端在首次加载之后感觉几乎是即时的。

---

**相关指南:**

- [RcloneView 中的虚拟远端 — Combine、Union 与 Alias 详解](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [使用 RcloneView 进行 Plex 云端流媒体播放](https://rcloneview.com/support/blog/plex-cloud-mount-rcloneview)
- [解决 Plex 缓冲问题 — RcloneView 的 VFS 缓存调优](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)

<CloudSupportGrid />
