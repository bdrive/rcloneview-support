---
slug: rcloneview-kali-linux-cloud-sync
title: "在 Kali Linux 上使用 RcloneView — 云存储同步与备份"
authors:
  - jay
description: "在 Kali Linux 上安装 RcloneView，挂载、同步并加密用于渗透测试证据、报告和捕获数据的云存储。"
keywords:
  - RcloneView Kali Linux
  - Kali Linux 云存储
  - Kali Linux 云同步
  - Kali Linux 挂载云盘
  - 基于 Debian 的云备份
  - 渗透测试云备份加密
  - RcloneView Linux 安装
  - Kali Linux 备份工具
  - GTK 云同步应用
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

> 在不离开现有 XFCE 桌面工作流程的情况下，在 Kali Linux 上挂载、同步和加密云存储。

Kali Linux 是一款主要用于安全测试的基于 Debian 的发行版，渗透测试工作会持续产生截图、抓包文件和报告，需要尽快从本地磁盘转移。RcloneView 为 Kali 用户提供了一种图形化方式，可连接 90+ 家云服务商、将其挂载为本地磁盘，并运行计划同步任务，而无需在终端中手写 rclone 命令。由于 Kali 默认自带完整的 X11/Wayland 桌面，RcloneView 的图形界面在 Kali 上的运行方式与在其他 Debian 系发行版上完全相同。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Kali Linux 上安装 RcloneView

由于 Kali 基于 Debian，从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取的官方 `.deb` 包可以通过 `dpkg -i` 安装，再运行 `apt-get install -f` 解决依赖问题，即可顺利完成安装。RcloneView 需要 GTK+ 3.0，以及 `libayatana-appindicator3-1` 或 `libappindicator3-1` 之一用于系统托盘图标；如果你打算将远程挂载为本地磁盘，还需要 `fuse3`。RcloneView 没有 AUR、Snap、Flatpak 或 APT 仓库 — `.deb` 文件是 Kali 上唯一受支持的安装方式，请忽略任何声称提供其他安装方式的第三方软件包列表。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

RcloneView 内置了 rclone 可执行文件，因此首次启动时无需额外配置 — 应用会自动通过 `127.0.0.1:5582` 与其通信。

## 为现场工作挂载云存储

远程连接后，在 Explorer 面板中选中它，点击面板工具栏上的 Mount 图标，即可在 Linux 上通过 `nfsmount` 将其显示为本地磁盘。这对于直接从本地工具查看存储在共享 Google Drive 或 Box 文件夹中的证据非常有用，而无需先下载整个数据集。挂载配置中提供只读模式，适用于需要浏览而不希望有任何风险改动源文件的场景。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the RcloneView Explorer panel" class="img-large img-center" />

## 加密与自动化备份

敏感的渗透测试数据在离开设备之前应加密保护。RcloneView 的 Crypt 虚拟远程会包裹任何现有远程，使文件名和内容在上传前被加密，而用于普通传输的同一套 4 步同步向导同样适用于加密层。S3、Azure 或 Backblaze B2 在 FREE 许可证下即可获得完整的读写连接，因此加密的异地副本不需要付费套餐。用于无人值守备份的 crontab 风格计划任务是 PLUS 许可证功能。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring encrypted sync job in RcloneView" class="img-large img-center" />

## 快速上手

1. **下载 RcloneView**：前往 [rcloneview.com](https://rcloneview.com/src/download.html)，获取适用于 x86_64 或 aarch64 的 `.deb`。
2. 使用 `dpkg -i rclone_view-*.deb && apt-get install -f` 安装，以引入 GTK+3、appindicator 和 FUSE 依赖。
3. 添加你的云端远程；对于敏感数据，在运行首次同步前先用 Crypt 远程进行包裹。
4. 每次运行后检查 Job History，确认传输数量并及早发现错误。

在 Kali 上安装 RcloneView 意味着渗透测试成果可以快速、加密地从本地磁盘转移出去，而无需离开你已经使用的桌面环境。

---

**相关指南：**

- [在 Debian Linux 上使用 RcloneView — 云存储同步与备份](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [将任意 SFTP 服务器连接到 RcloneView — 用云存储同步远程服务器](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [解决防火墙和杀毒软件阻止云同步的问题 — 使用 RcloneView 解决连接错误](https://rcloneview.com/support/blog/fix-firewall-antivirus-blocking-cloud-sync-rcloneview)

<CloudSupportGrid />
