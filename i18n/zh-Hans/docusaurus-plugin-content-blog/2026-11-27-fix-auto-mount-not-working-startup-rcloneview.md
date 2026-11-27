---
slug: fix-auto-mount-not-working-startup-rcloneview
title: "修复启动时自动挂载不工作 — 用 RcloneView 恢复云盘"
authors:
  - steve
description: "重启后云盘不见了?检查许可证、Launch at login、驱动器号、Linux 上的 FUSE 以及 macOS 权限,修复 RcloneView 启动时自动挂载。"
keywords:
  - 自动挂载不工作
  - 启动时云盘未挂载
  - rcloneview 自动挂载
  - 开机挂载云存储
  - 重启后挂载的驱动器消失
  - rclone 挂载启动修复
  - 登录时启动云盘
  - linux fuse 挂载错误
  - 驱动器号冲突 挂载
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复启动时自动挂载不工作 — 用 RcloneView 恢复云盘

> 如果每次重启后云盘都会消失,通常一份简短的检查清单就能彻底解决。

你为 Google Drive 或 S3 存储桶设置了挂载,它也按预期工作,但重启后驱动器号或挂载文件夹不见了。自动挂载依赖多项设置协同工作:应用必须启动,挂载必须标记为自动挂载,操作系统也必须允许它。本指南将在 RcloneView 中逐一排查每个原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 检查许可证和自动挂载设置

**Auto Mount on Startup** 是 PLUS 许可证功能。在 FREE 许可证下,挂载和卸载功能完全可用,但每次启动后都需要手动启动每个挂载。主窗口底部的页脚会显示当前激活的许可证。

激活 PLUS 后,从 Remote 选项卡打开 **Mount Manager**,确认该挂载已启用 **Auto mount**。请注意,挂载处于活动状态时 Edit 不可用,因此请先卸载,编辑设置后选择 **Save and mount**。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="在 RcloneView Mount Manager 中启用自动挂载" class="img-large img-center" />

## 确保 RcloneView 真正启动

自动挂载在 RcloneView 启动时运行,因此应用本身必须在登录时启动。在 **Settings > General** 中启用 **Launch at login**。如果希望应用直接在系统托盘中打开,请开启 **Start minimized**。托盘菜单会列出已挂载的驱动器,并允许你逐个切换。

还要检查 **Quit on close**。如果它处于开启状态,关闭窗口会退出应用并卸载你的驱动器。将其关闭,即可让 RcloneView 及其挂载在后台持续运行。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="从 RcloneView 资源管理器挂载云文件夹" class="img-large img-center" />

## 解决特定平台的阻碍

**Windows:** 如果挂载使用固定驱动器号,而 U 盘或网络共享先占用了该驱动器号,挂载将无法连接。将 **Target** 设为 Auto,或选择一个未被占用的驱动器号。

**Linux:** 挂载需要 FUSE(推荐 fuse3)。挂载默认使用 nfsmount,应用需要 GTK+3 以及正在运行的 X11 或 Wayland 桌面会话。RcloneView 是 GUI 应用程序,无法以无头 systemd 服务的方式启动挂载。

**macOS:** 如果挂载点位于 Desktop、Documents 或 Downloads 中,请在 **Privacy & Security > Files & Folders** 或 **Full Disk Access** 中授予 RcloneView 访问权限,然后重启应用。

## 其他方法都无效时查看日志

过期的 OAuth 令牌和开机时的网络延迟也可能导致挂载失败。在 Settings > Embedded Rclone 中启用 **rclone logging**,将日志级别设为 DEBUG,重启内置 rclone,然后重启电脑。日志会显示确切的错误。如果是认证错误,请编辑远程并重新连接;如果是网络错误,通常从托盘重新挂载即可解决。

<img src="/support/images/en/blog/new-remote.png" alt="认证错误后在 RcloneView 中重新连接云远程" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 确认 PLUS 许可证,并在 Mount Manager 中为每个挂载启用 **Auto mount**。
3. 在 Settings > General 中开启 **Launch at login** 并关闭 **Quit on close**。
4. 解决驱动器号、FUSE 或 macOS 权限问题,然后重启进行测试。

检查清单全部通过后,每次开始工作时你的云盘都会准备就绪。

---

**相关指南:**

- [使用 RcloneView 在启动时自动挂载云存储](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [使用 RcloneView 修复 Windows 挂载驱动器号冲突](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)
- [使用 RcloneView 修复 rclone 挂载 FUSE 错误](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
