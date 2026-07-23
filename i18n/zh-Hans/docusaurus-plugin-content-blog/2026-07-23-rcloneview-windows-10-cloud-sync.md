---
slug: rcloneview-windows-10-cloud-sync
title: "在 Windows 10 上使用 RcloneView — 云存储同步与备份"
authors:
  - kai
description: "在 Windows 10 上安装并运行 RcloneView,通过一个桌面应用挂载、同步并备份 90 多个云存储服务商。"
keywords:
  - RcloneView Windows 10
  - Windows 10 云存储
  - Windows 10 挂载云盘
  - Windows 10 云备份软件
  - Windows 云存储同步
  - RcloneView 安装程序 Windows
  - Windows 10 云文件管理器
  - 多云 Windows 10
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Windows 10 上使用 RcloneView — 云存储同步与备份

> 即使在 Windows 11 发布多年之后,Windows 10 仍然是数百万台桌面电脑每天使用的系统,而 RcloneView 在其上运行同样完整 —— 挂载、同步与备份功能一应俱全,毫不缩水。

许多企业和家庭用户至今仍在使用 Windows 10,无论是出于个人选择、硬件限制,还是单纯因为升级从未被列为优先事项。RcloneView 并不把 Windows 10 当作过时系统对待 —— 安装程序、挂载驱动和完整功能集与 Windows 11 版本的表现完全一致,因此即便工作室的机器混用不同 Windows 版本,较旧的电脑也不会失去任何功能。RcloneView 可以在一个窗口中挂载并同步 90 多个服务商,无论安装在哪个受支持的 Windows 版本上,都能在 FREE 许可证下使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Windows 10 上安装 RcloneView

Windows 版 RcloneView 以单一的 Inno Setup 安装程序形式发布(`setup_rclone_view-{version}.exe`),专为 x86-64 架构构建,仅可从 rcloneview.com 官方下载页面获取 —— 没有 Windows 应用商店上架,也不通过任何包管理器分发。安装前,请确认电脑上已安装 Visual C++ 2015-2022 可再发行组件包;大多数 Windows 10 系统已因其他软件而预先安装,但全新安装或精简安装的系统可能需要单独添加。RcloneView 自身的系统要求将 Windows Vista 列为实际的最低门槛,因此一台更新到位的 Windows 10 系统能够轻松满足要求,还绰绰有余。

<img src="/support/images/en/blog/new-remote.png" alt="在 Windows 10 桌面上安装 RcloneView" class="img-large img-center" />

安装完成后,RcloneView 自带内嵌的 rclone 二进制文件,因此无需单独安装或配置 rclone 即可开始连接云账户。应用通过本地回环地址与内嵌 rclone 实例通信,运行后窗口底部的状态栏会显示 rclone 版本和连接状态。

## 在 Windows 10 上挂载云盘

Windows 10 的文件资源管理器会像对待实体磁盘一样对待 RcloneView 的挂载盘。无论是从 Mount Manager,还是直接从某个远程存储的面板工具栏,选择一个文件夹并点击 Mount,都会为其分配一个盘符(自动分配或手动选择),使其像本地磁盘一样可浏览。Windows 上的默认挂载方式是 cmount,只读模式、网络驱动器显示、VFS 缓存模式(off、minimal、writes 或 full)等选项都与 Windows 11 上完全一致 —— 不会因为系统较旧而被削减。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="在 Windows 10 上将云端远程存储挂载为盘符" class="img-large img-center" />

## 无需 Windows 任务计划程序即可安排备份

RcloneView 的 Job Manager 通过引导式向导构建同步、复制和备份任务,而不必分别配置 Windows 任务计划程序和 rclone 命令行参数:选择源和目标、设置传输和重试选项、按文件大小、时间或类型应用过滤规则,并且在 PLUS 许可证下,还可以直接在应用内附加 crontab 风格的计划任务。之后,任务历史(Job History)会持续记录每次执行的状态、传输大小和耗时,比翻查任务计划程序的事件日志更便于审计。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 Windows 10 上使用 RcloneView 安排备份任务" class="img-large img-center" />

有一点特别值得 Windows 10 用户注意:RcloneView 的应用内自动更新目前仅在 macOS 上通过 Sparkle 运行。在包括 Windows 10 在内的 Windows 系统上,检查更新只会跳转到下载页面而不会自动安装,因此需要定期重新下载安装程序以保持应用为最新版本。

## 快速上手

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下载适用于 Windows 的 RcloneView**。
2. 运行安装程序,并确认已安装 VC++ 2015-2022 可再发行组件包。
3. 通过 Remote 选项卡 > New Remote 添加云端远程存储 —— 支持 OAuth 的服务商会自动打开浏览器登录窗口。
4. 将某个远程存储挂载为盘符,或在 Job Manager 中设置你的第一个同步任务。

Windows 10 设备完全没必要在多云工作流中被边缘化 —— RcloneView 为它带来了与其他受支持平台完全相同的挂载、同步和备份工具集。

---

**相关指南:**

- [在 Windows 11 上使用 RcloneView — 云存储同步与备份](https://rcloneview.com/support/blog/rcloneview-windows-11-cloud-sync-backup)
- [如何在 Windows Server 上使用 RcloneView 实现自动化云备份](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [解决挂载盘符冲突 — 使用 RcloneView 排查 Windows 云存储问题](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
