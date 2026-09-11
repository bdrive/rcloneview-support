---
slug: rcloneview-windows-11-cloud-sync
title: "在 Windows 11 上使用 RcloneView — 云存储同步与备份"
authors:
  - morgan
description: "在 Windows 11 上安装并运行 RcloneView，在一个桌面应用中挂载、同步和备份 90+ 个云存储服务商。"
keywords:
  - rcloneview windows 11
  - windows 11 云存储同步
  - windows 11 挂载云盘
  - windows 11 云备份
  - rclone gui windows 11
  - windows 11 文件资源管理器 云
  - windows 多云桌面
  - windows 云同步软件
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Windows 11 上使用 RcloneView — 云存储同步与备份

> 相比早期版本，Windows 11 收紧了文件资源管理器和权限模型 — 下面介绍如何在其上顺畅地运行 RcloneView 来挂载、同步和备份云存储。

Windows 11 重新设计的外壳以及更严格的默认安全策略,给需要处理存储和盘符的桌面应用带来了一些变化。**RcloneView** 在 Windows 11 上作为标准桌面应用原生运行,让你在一个界面中浏览、同步和挂载 90+ 个云存储服务商,而不必为 Google Drive、OneDrive、Dropbox 和 S3 兼容存储分别使用不同的厂商应用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Windows 11 上安装 RcloneView

RcloneView 以针对 x86-64 系统构建的 Inno Setup 安装程序(`setup_rclone_view-{version}.exe`)形式发布 — 没有 Windows ARM64 版本,因此本指南适用于标准的 Windows 11 电脑和笔记本。从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载安装程序,运行并完成安装向导。

Windows 11 需要 VC++ 2015-2022 可再发行组件包,如果缺失,安装程序会提示安装。RcloneView 内置了 rclone 二进制文件,因此无需单独安装 rclone 步骤 — 应用默认通过 `http://127.0.0.1:5582` 与其内置的 rclone 实例通信。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加新的云端远程" class="img-large img-center" />

## 将云存储挂载为盘符

在 Windows 11 上,RcloneView 最实用的功能之一就是将云端远程挂载为本地驱动器。在 Remote Explorer 面板中选择要挂载的远程,点击面板工具栏中的挂载图标,选择自动分配或手动指定盘符,然后点击 Save and mount。该远程随后会像物理磁盘一样出现在文件资源管理器中。

Windows 11 默认使用 `cmount` 挂载类型。你也可以将挂载配置为以网络驱动器而非本地磁盘的形式显示,并根据你更看重响应速度还是最近使用文件的离线访问,调整 VFS 缓存模式(off、minimal、writes、full)。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="在 RcloneView 的 Mount Manager 中挂载远程" class="img-large img-center" />

## 同步与备份文件

除了挂载之外,RcloneView 的同步向导还可以让你在任意两个已连接的远程之间,或本地 Windows 11 文件夹与云服务商之间配置单向同步任务。在 FREE 许可下即可以完整读写权限连接 S3、Azure 或 Backblaze B2,然后设置计划备份任务,让你的 Documents 或项目文件夹自动镜像到云存储。

四步同步向导涵盖源和目标的选择、传输并发数、过滤规则(文件大小、文件年龄、文件夹深度),以及在 PLUS 许可下的 crontab 风格调度。Dry Run 选项可以在实际更改发生前,准确预览将要复制或删除的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中配置云到云传输任务" class="img-large img-center" />

## 从系统托盘监控任务

RcloneView 会最小化到 Windows 11 系统托盘,你可以在那里查看已挂载的驱动器、切换挂载的开关,并在无需重新打开完整窗口的情况下启动新的挂载。正在进行的传输会显示在主窗口底部的 Transferring 标签页中,即时显示进度百分比、速度和文件数量。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView** 并运行 Windows 安装程序。
2. 通过 Remote 标签页 > New Remote 添加你的第一个云端远程。
3. 将其挂载为盘符,或配置到本地 Windows 11 文件夹的同步任务。
4. 在 Job History 面板中确认你的第一次传输已成功完成。

安装 RcloneView 后,Windows 11 就获得了一种统一、一致的方式来访问数十个云服务商,而无需为每一个服务商单独安装同步客户端。

---

**相关指南:**

- [在 Windows 10 上使用 RcloneView — 云存储同步](https://rcloneview.com/support/blog/rcloneview-windows-10-cloud-sync)
- [在 Windows Server 上使用 RcloneView — 云备份](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [解决 Windows 上的挂载盘符冲突](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
