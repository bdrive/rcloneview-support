---
slug: rcloneview-kali-linux-cloud-sync
title: "在 Kali Linux 上使用 RcloneView — 云存储同步与备份"
authors:
  - jay
description: "在 Kali Linux 上安装 RcloneView，通过安全、可审计的 GUI 工作流挂载、同步并备份 90+ 云存储服务。"
keywords:
  - RcloneView Kali Linux
  - cloud storage Kali Linux
  - install RcloneView Debian
  - cloud sync penetration testing
  - mount cloud drive Kali
  - rclone GUI Kali Linux
  - backup forensic evidence cloud
  - cloud backup security professionals
  - Kali Linux cloud storage GUI
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Kali Linux 上使用 RcloneView — 云存储同步与备份

> 在 Kali Linux 上运行图形化的多云文件管理器，无需接触命令行即可同步项目数据、取证镜像和客户交付物。

Kali Linux 是一款基于 Debian、专为渗透测试和数字取证打造的发行版，在 Kali 上工作的安全团队经常需要在本地存储和云账户之间移动大型证据集、抓包文件或客户报告。RcloneView 为这一工作流带来了图形化文件管理器,让你可以在运行其他工具的同一桌面上浏览、同步和挂载云存储。由于 Kali 默认自带包含 X11 的完整 Xfce 桌面,已满足 RcloneView 运行所需的显示环境要求。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Kali Linux 上安装 RcloneView

由于 Kali 基于 Debian 构建,从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取的官方 `.deb` 包的安装方式与在 Debian 或 Ubuntu 上完全相同 —— 下载 `rclone_view-{version}-linux-{arch}.deb` 文件,用 `dpkg -i` 安装,并使用 `apt --fix-broken install` 解决缺失的依赖。Kali 直接提供 `x86_64` 构建版本,如果你不想在系统范围内安装软件包,`.AppImage` 格式是不错的备选方案,因为它无需安装即可直接运行。

RcloneView 是基于 Flutter 构建的 GUI 应用程序,而非命令行工具,因此需要 Kali 默认运行的图形化 Xfce/X11 会话 —— 在没有 X11 转发或远程桌面会话的无头 SSH 连接下无法启动。它还依赖 GTK+3 和一个 AppIndicator 库来显示系统托盘图标,这两者在标准的 Kali 桌面安装中均已具备。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

## 为项目数据连接云存储

安装完成后,通过 Remote 标签页中的 New Remote 向导添加远程。Amazon S3、Cloudflare R2 和 Backblaze B2 通过访问密钥和密钥凭据输入方式,非常适合存储大型取证磁盘镜像和抓包文件,而 Google Drive、OneDrive 或 Box 则通过 OAuth 浏览器登录处理面向客户的报告交付。RcloneView 的同步与 Folder Compare(文件夹对比)功能在 FREE 许可证下即可使用,因此你无需升级即可将采集到的证据推送至云存储,并验证其是否完整无损地到达。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between cloud remotes in RcloneView on Kali" class="img-large img-center" />

## 同步与验证证据备份

在监管链(chain-of-custody)工作流中,请在执行任何同步任务前运行 Dry Run,精确预览将要复制或删除的文件,随后使用 Folder Compare 验证源与目标是否一致。对比视图会按大小差异标记文件,并并排显示相同文件的匹配情况,这在你需要确认取证镜像传输过程中未损坏时非常有用。在同步任务的 Advanced Settings 步骤中启用校验和比较,可获得比仅比较大小更强的完整性验证。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder compare results view in RcloneView" class="img-large img-center" />

## 在项目执行期间挂载云存储

你还可以使用 Mount Manager 将云端远程挂载为本地驱动器,在 Linux 上依赖 FUSE 和 `nfsmount` 方式 —— 请确保已安装 `fuse3`。这样你就能直接在其他 Kali 工具中打开云端托管的案件文件,而无需先手动下载,并且还提供只读挂载选项,以防止对共享证据的意外写入。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote from the Mount Manager in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView** —— 获取适用于 `x86_64` 的 `.deb` 或 `.AppImage` 构建版本。
2. 使用 `dpkg -i` 安装(或将 AppImage 设为可执行并直接运行)。
3. 根据服务商类型,使用 OAuth 登录或凭据输入方式,通过 New Remote 向导添加你的云端远程。
4. 运行 Dry Run,然后执行实际的同步任务,并使用 Folder Compare 验证结果。

借助一款可以在每次传输前直观核实的 GUI 工具,在本地磁盘与云存储之间整理证据和客户交付物将大幅减少出错的可能。

---

**相关指南:**

- [在 Ubuntu / Debian Linux 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 Debian Linux 上使用 RcloneView — 云存储同步与备份](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [使用 RcloneView 为网络安全公司提供云存储](https://rcloneview.com/support/blog/cloud-storage-cybersecurity-companies-rcloneview)

<CloudSupportGrid />
