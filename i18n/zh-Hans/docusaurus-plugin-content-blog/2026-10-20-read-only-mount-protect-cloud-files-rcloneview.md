---
slug: read-only-mount-protect-cloud-files-rcloneview
title: "只读挂载 — 用 RcloneView 保护云文件免遭误改"
authors:
  - casey
description: "使用 RcloneView 的 Read only 挂载选项，在文件资源管理器中浏览云存储，而不必担心误编辑或误删除。"
keywords:
  - 只读挂载
  - 以只读方式挂载云存储
  - 保护云文件
  - RcloneView 挂载
  - rclone 只读挂载
  - 防止云盘文件被删除
  - 挂载管理器
  - 虚拟驱动器
tags:
  - RcloneView
  - feature
  - mount
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 只读挂载 — 用 RcloneView 保护云文件免遭误改

> 将远程挂载为本地驱动器，可以浏览和复制，但绝不会被修改。

挂载后的云盘与其他磁盘表现一致，这意味着一次误删、一次方向错误的拖动，或是某个会重写文件的应用程序，都可能改变您的云端数据。如果目的只是读取，例如查阅归档或打开参考文件，那么无法写入的驱动器就是风险最低的选择。RcloneView 的挂载设置中正好提供了 Read only 选项。RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载并同步 90 多个提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 何时适合使用只读

设想一个合规团队，把已结案的记录存放在存储桶中。员工需要打开并复制文档，但任何人都不应能够修改它们。另一个例子是，您想在桌面端检查共享的备份目标，同时又不想让备份本身面临风险。

在这两种情况下，只读挂载都允许人们使用文件资源管理器、媒体播放器和查看器等常规工具，而写入尝试会被拒绝。它不能取代存储服务本身的权限设置，但会在您自己的电脑上增加一道保护。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="在 RcloneView 资源管理器中挂载远程文件夹" class="img-large img-center" />

## 在 Mount Manager 中启用 Read Only

从 Remote 标签页打开 Mount Manager 并选择 New mount，或从 Explorer 面板中的 Mount 图标开始。选择远程和子目录，然后在选项中勾选 **Read only**。在 Windows 上可以选择盘符，在 macOS 和 Linux 上则设置本地挂载路径。选择 Save and mount 即可立即挂载驱动器。

同一对话框中还有其他选项：卷名称、缓存模式（off、minimal、默认的 writes 或 full），以及在 Windows 上显示为网络驱动器。由于不会写入任何内容，默认缓存模式对只读使用几乎没有影响，不过 full 可以加快对相同文件的重复读取。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView 中带有挂载选项的 Mount Manager" class="img-large img-center" />

## 更改或移除挂载

挂载处于活动状态时，Edit 和 Delete 会被禁用，因此请先从 Mount Manager 或系统托盘菜单中卸载。若以后想让驱动器可写，请先卸载，编辑该条目，取消勾选 Read only，然后重新挂载。您也可以为同一个远程保留两个条目：一个只读用于浏览，一个可写用于有意识的操作。

使用 PLUS 许可证，Auto mount 可以在启动时自动挂载您的驱动器。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中在远程之间复制文件" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加要浏览的远程，然后在 Remote 标签页中打开 Mount Manager。
3. 创建新的挂载，选择远程和文件夹，并勾选 Read only。
4. Save and mount，然后在文件资源管理器中打开该驱动器。

只读访问让您可以打开所有内容，而无需担心被改动。

---

**相关指南：**

- [开机自动挂载](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [用于挂载性能的 VFS 缓存](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [修复 Windows 上的挂载盘符冲突](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
