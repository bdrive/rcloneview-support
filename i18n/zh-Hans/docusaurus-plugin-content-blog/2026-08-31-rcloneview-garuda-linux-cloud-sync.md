---
slug: rcloneview-garuda-linux-cloud-sync
title: "在 Garuda Linux 上使用 RcloneView — 云存储同步与备份"
authors:
  - steve
description: "在 Garuda Linux 上运行 RcloneView,通过完整的桌面 GUI 挂载、同步和备份 90+ 云服务提供商,无需 AUR 软件包。"
keywords:
  - rcloneview garuda linux
  - garuda linux 云同步
  - garuda linux 云存储
  - install rcloneview arch based linux
  - garuda linux 备份
  - 云存储 garuda
  - rcloneview appimage garuda
  - garuda linux 文件同步
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Garuda Linux 上使用 RcloneView — 云存储同步与备份

> Garuda Linux 经过性能调校的桌面环境与 RcloneView 轻量的 Flutter GUI 相得益彰,让您无需接触终端即可管理云存储。

Garuda Linux 是为那些想要基于 Arch 的系统、又不想花一个周末去配置的人打造的 — 预先调校的桌面、明智的默认设置,专注于让您快速开始工作。RcloneView 在云存储方面秉持同样的理念:一个原生桌面应用,可在一个窗口中挂载、同步和备份 90+ 云服务提供商,而无需手动编写 rclone 命令脚本。由于 Garuda 开箱即用地提供完整的图形桌面,RcloneView 可以按预期方式运行 — 无需任何无头(headless)变通方案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Garuda Linux 上安装 RcloneView

RcloneView 仅通过 [rcloneview.com](https://rcloneview.com/src/download.html) 分发 — 没有可以用 `pacman` 或 AUR 助手获取的 AUR 软件包。下载 `.AppImage` 版本可获得便携、免安装的选项,或者如果您更希望它注册到系统的软件包数据库中,可以获取 `.rpm` 软件包。x86_64 和 aarch64 版本均可用,可根据您的 Garuda 系统所运行的硬件进行选择。

RcloneView 使用 Flutter 和 Dart 构建,而非 Qt 或 Electron,因此无需引入另一个工具包的依赖链。它依赖 GTK+3 和一个托盘指示器库(libayatana-appindicator3-1 或 libappindicator3-1)来显示托盘图标,这两者在 Garuda 的 KDE、GNOME 及其他桌面版本上都是标准配置。若要将云存储挂载为本地驱动器,请确保已安装 `fuse3`。

<img src="/support/images/en/blog/new-remote.png" alt="Garuda Linux 上的 RcloneView 远程设置界面" class="img-large img-center" />

## 设置挂载和远程

Garuda 的桌面版本运行 X11 或 Wayland,RcloneView 的挂载功能对两者都支持。通过 Remote 标签页添加远程,对于 Google Drive 或 Dropbox 等提供商可通过 OAuth 进行身份验证,对于 S3 兼容或基于协议的存储则可直接输入凭据。使用 nfsmount(RcloneView 在 Linux 上的默认挂载类型)将该远程挂载为本地路径,并通过 Garuda 的原生文件管理器浏览云文件,就如同它们在磁盘上一样。

缓存模式默认设置为 "writes",在响应速度和内存使用之间取得平衡 — 如果您要挂载一个包含大量大文件的远程,并希望更精细地控制本地缓存,这个设置值得留意。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="在 Linux 上通过 RcloneView 的任务管理器挂载云远程" class="img-large img-center" />

## 自动化备份和同步任务

连接好远程后,任务管理器会处理重复性的工作:将本地文件夹备份到云存储,在两个提供商之间同步,或将一个源同时镜像到多个目标。配置过滤器以跳过不需要的文件类型,并先运行 Dry Run 预览任务将要做出的更改。

任务历史会记录每次运行 — 开始时间、耗时、传输速度和文件数量 — 因此计划备份会留下一份审计记录,您无需翻查日志文件即可查看。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排云同步任务" class="img-large img-center" />

## 开始使用

1. **下载 AppImage 或 .rpm** 前往 [rcloneview.com](https://rcloneview.com/src/download.html) — 没有 AUR 软件包,请直接安装。
2. **确认 fuse3 和 GTK+3** 已安装在您的系统上,以支持挂载和托盘功能。
3. **添加您的第一个云远程** 通过 Remote 标签页添加并挂载,或设置同步任务。
4. **保存重复性任务** 在任务管理器中,让备份每次都以相同方式运行。

Garuda 开箱即用的桌面与 RcloneView 的原生 GUI 是绝佳的搭配 — 下载一次,连接您的云服务,无需离开 Garuda 所打造的图形环境即可管理一切。

---

**相关指南:**

- [在 Arch Linux 上安装 RcloneView — 云同步与备份指南](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [在 Manjaro Linux 上使用 RcloneView — 云存储同步](https://rcloneview.com/support/blog/rcloneview-manjaro-linux-cloud-sync)
- [在 Fedora 和 RHEL 上安装 RcloneView — 云同步指南](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-linux-cloud-sync)

<CloudSupportGrid />
