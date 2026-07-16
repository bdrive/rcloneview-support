---
slug: rcloneview-steam-deck-cloud-sync
title: "在 Steam Deck 上使用 RcloneView 进行云存储和游戏备份"
authors:
  - tayson
description: "Steam Deck 有限的固态硬盘空间让云存储变得至关重要。了解如何在 Steam Deck 上安装 RcloneView,以备份游戏存档、将截图和录像同步到 Google Drive、OneDrive 或 S3,并释放掌机的存储空间。"
keywords:
  - steam deck cloud storage
  - steam deck game backup
  - rcloneview steam deck
  - steam deck google drive sync
  - steam deck onedrive backup
  - steam deck cloud save backup
  - steamos rcloneview install
  - steam deck screenshot sync
  - steam deck file manager
  - steam deck external cloud storage
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Steam Deck 上使用 RcloneView 进行云存储和游戏备份

> Steam Deck 将完整的 PC 装进了掌机之中——但它 64 GB、256 GB 或 512 GB 的固态硬盘很快就会被填满。云存储可以让你的 Deck 拥有几乎无限的容量,用于游戏备份、截图、录像等。

Valve 的 Steam Deck 运行 SteamOS,这是一个基于 Arch 的 Linux 发行版,搭载了定制的 KDE Plasma 桌面模式。虽然 Steam 内置的云存档功能可以处理部分游戏,但它无法覆盖非 Steam 游戏、模拟器游戏、模组配置,以及随时间累积的截图和游戏录像。有限的固态硬盘空间意味着存储管理始终是一个需要关注的问题。RcloneView 为 Steam Deck 用户提供了一个图形化的多云文件管理器,可以将游戏存档备份到 Google Drive、OneDrive 或 S3,将截图和录像同步到云存储,并将大文件转移出去以释放内部驱动器的空间。本指南将介绍如何在桌面模式下安装、配置云远程,以及保持 Steam Deck 数据安全、存储精简的实用工作流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么 Steam Deck 需要云存储

Steam Deck 是一台性能强劲的游戏 PC,但其存储限制带来了实际的问题:

- **固态硬盘空间很快被填满** —— 现代游戏每款可能超过 50-100 GB。即使是 512 GB 型号,安装几款 3A 大作后也会被占满。
- **Steam 云存档并不能覆盖一切** —— 许多游戏不支持 Steam 云存档。非 Steam 游戏(通过兼容层运行的 GOG、Epic 游戏,以及模拟器游戏)完全没有内置的云备份功能。
- **截图和录像不断堆积** —— Deck 让截图和录制游戏画面变得非常方便,但这些文件会占用你有限的存储空间。
- **模组配置容易丢失** —— 如果你在 Deck 上给游戏安装模组,这些配置存放在本地文件系统中,可能会在 SteamOS 更新或恢复出厂设置时丢失。
- **没有自动的外部备份机制** —— Steam Deck 没有内置机制将任意文件备份到外部云存储。

RcloneView 通过将你的 Steam Deck 连接到任何主流云服务商来解决这些问题,让你能够按需或按计划将文件推送到云端。

## 切换到桌面模式

所有安装和配置操作都在 Steam Deck 的桌面模式下进行。切换方法如下:

1. 按下 Deck 上的 **Steam 按钮**。
2. 进入 **电源 > 切换到桌面**。
3. Deck 将重启进入完整的 KDE Plasma 桌面,带有任务栏、文件管理器(Dolphin)和终端(Konsole)。

桌面模式为你提供了一个完整的 Linux 桌面环境。你可以使用触摸屏、触控板,或通过 USB-C 或蓝牙连接键盘和鼠标以获得更舒适的操作体验。

## 在 Steam Deck 上安装 RcloneView

SteamOS 默认使用只读根文件系统,这限制了传统的软件包安装方式。安装软件的两种最佳方案是 Flatpak(官方支持的方法)和 AppImage。

### 方案一:AppImage(推荐)

AppImage 方法最简单,且无需修改系统:

1. 在桌面模式下打开 **Firefox** 浏览器(SteamOS 预装)。
2. 访问 [rcloneview.com](https://rcloneview.com/src/download.html) 并下载 Linux AppImage。
3. 打开 **Dolphin**(文件管理器)并导航到你的下载文件夹。
4. 右键点击 AppImage 文件,选择 **属性 > 权限**,勾选 **可执行**。
5. 双击运行。

或者,通过 Konsole(终端):

```bash
chmod +x ~/Downloads/RcloneView-*.AppImage
~/Downloads/RcloneView-*.AppImage
```

将 AppImage 移动到一个固定位置以保持下载文件夹整洁:

```bash
mkdir -p ~/Applications
mv ~/Downloads/RcloneView-*.AppImage ~/Applications/
```

要将 RcloneView 添加到应用程序菜单,创建一个桌面条目:

```bash
cat > ~/.local/share/applications/rcloneview.desktop << 'EOF'
[Desktop Entry]
Name=RcloneView
Exec=/home/deck/Applications/RcloneView-latest.AppImage
Icon=rcloneview
Type=Application
Categories=Utility;FileManager;
EOF
```

将文件名替换为你实际的 AppImage 文件名。

### 方案二:禁用只读文件系统(高级)

如果你想通过 pacman 安装软件包(就像在常规 Arch 系统上一样),可以禁用只读文件系统:

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -Syu rclone fuse3
```

**警告:** 禁用只读文件系统意味着 SteamOS 更新可能会覆盖你的更改。AppImage 方法在系统更新后更加稳定持久。

### 验证安装

启动 RcloneView。你应该会看到带有远程资源管理器的主界面。如果你使用触摸屏,该界面对基本导航来说响应足够灵敏,不过在进行较长时间的文件管理操作时,建议使用鼠标。

## 连接云存储账户

在桌面模式下运行 RcloneView 后,添加你的云存储服务商。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. 点击 **New Remote** 并选择 **Google Drive**。
2. OAuth 认证流程会在 Firefox 中打开。使用你的 Google 账户登录并授予访问权限。
3. 保存远程配置。此时你的整个 Google Drive 都可以在 RcloneView 中访问了。

### OneDrive

1. 点击 **New Remote** 并选择 **Microsoft OneDrive**。
2. 通过 Firefox 中的 Microsoft 登录页面进行身份验证。
3. 选择个人版 OneDrive 或企业版 OneDrive。
4. 保存远程配置。

### S3 兼容存储(Backblaze B2、Wasabi、AWS)

1. 点击 **New Remote** 并选择你的 S3 服务商。
2. 输入你的 Access Key 和 Secret Key。
3. 指定区域和端点。
4. 保存远程配置。

对于 Steam Deck 用户而言,Google Drive 和 OneDrive 是最常见的选择,因为许多玩家已经拥有这些账户。像 Backblaze B2 或 Wasabi 这样的 S3 兼容服务商为大型游戏备份档案提供了经济实惠的批量存储方案。

## 备份游戏存档

这是大多数 Steam Deck 用户的主要使用场景。游戏存档文件虽小,却是无法替代的。以下是使用 RcloneView 备份存档的方法。

### 定位存档文件

Steam Deck 上的游戏存档通常位于:

- **Steam Proton 存档:** `~/.local/share/Steam/steamapps/compatdata/[APPID]/pfx/drive_c/users/steamuser/`
- **原生 Linux 存档:** `~/.local/share/[GameName]/` 或 `~/.config/[GameName]/`
- **模拟器游戏存档:** 取决于模拟器(RetroArch 存档通常位于 `~/.config/retroarch/saves/`)

### 创建存档备份任务

1. 在 RcloneView 中,在左侧面板打开本地文件系统,并导航到你的存档文件夹。
2. 在右侧面板打开你的云远程,并创建一个目标文件夹(例如 `SteamDeck/Saves/`)。
3. 选择存档文件或文件夹,并将其复制到云端。

为实现持续保护,创建一个同步任务:

1. 将源设置为你的本地存档目录。
2. 将目标设置为你的云备份文件夹。
3. 按你偏好的频率(如每天)安排任务运行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

这样一来,每次结束游戏会话并切换到桌面模式时,你最新的存档就会自动推送到云端(你也可以在切换回游戏模式之前手动运行该任务)。

## 同步截图和录像

Steam Deck 将截图存储在 `~/.local/share/Steam/userdata/[USERID]/760/remote/[APPID]/screenshots/` 中。游戏录像(如果你在桌面模式下使用 OBS 等工具)可以存储在你配置的任何位置。

### 设置截图同步

1. 在 RcloneView 中,在左侧面板导航到你的截图目录。
2. 在右侧面板打开一个云目标文件夹(例如 `SteamDeck/Screenshots/`)。
3. 创建一个同步任务,将新截图推送到云端。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

截图通常很小(每张 1-5 MB),因此即使在网络条件一般的情况下,同步任务也能很快完成。对于可能达到数百兆字节甚至数吉字节的游戏录像,建议安排在 Deck 接入底座并连接 Wi-Fi 时上传。

### 上传后释放空间

一旦截图和录像安全地保存在云端后,你就可以删除本地副本以回收固态硬盘空间。RcloneView 的移动操作(相对于复制操作)会一步完成传输文件并删除源文件的动作。请谨慎使用此功能——在删除本地文件之前,先确认云端副本确实存在。

## 管理有限固态硬盘上的存储

除了备份存档和媒体文件外,RcloneView 还能帮助你在 Steam Deck 上进行更广泛的存储管理:

- **归档旧游戏数据** —— 通关某款游戏后想保留存档但回收空间?将存档数据同步到云端,然后卸载游戏。如果日后重新安装,可以从云端恢复存档。
- **转移模组文件** —— 大型模组包(材质重制、整体转换类模组)可以备份到云存储,需要时再重新下载。
- **挂载云存储以播放媒体** —— 将 Google Drive 或 OneDrive 文件夹挂载为本地目录,从云端流式播放媒体(音乐、视频),而不占用固态硬盘的存储空间。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

### 在 Steam Deck 上挂载云存储

要将云远程挂载为本地文件系统:

1. 确保 FUSE 可用。在默认的 SteamOS 上,FUSE 支持通常已经包含在内。如果没有:

```bash
sudo steamos-readonly disable
sudo pacman -S fuse3
sudo steamos-readonly enable
```

2. 在 RcloneView 中,右键点击一个远程并选择 **Mount**,或使用挂载管理器。
3. 选择一个挂载点(例如 `~/CloudDrive/`)。
4. 配置缓存设置——对于媒体文件,使用 VFS 缓存模式 "full" 能获得最佳体验。

挂载后的驱动器会出现在 Dolphin 中,并可供任何应用程序访问。例如,你可以将媒体播放器指向已挂载的云文件夹,在不占用任何固态硬盘空间的情况下流式播放你的音乐库。

## Steam Deck 用户的实用工作流程

### 出行前

1. 切换到桌面模式。
2. 运行你的存档备份任务,将最新存档推送到云端。
3. 在 RcloneView 的任务历史中确认备份已完成。
4. 切换回游戏模式。

### 游戏会话结束后

1. 切换到桌面模式。
2. 运行截图同步,将新截图推送到云端。
3. 可选择删除本地截图以释放空间。
4. 切换回游戏模式。

### SteamOS 更新或恢复出厂设置后

1. 切换到桌面模式。
2. 再次安装 RcloneView(AppImage 方法只需几秒钟)。
3. 重新配置你的云远程(或者如果你已将 rclone 配置文件备份到云端,可以直接恢复它)。
4. 从云端拉取你的存档文件。
5. 继续游戏。

为了加快恢复速度,建议也将你的 rclone 配置文件(`~/.config/rclone/rclone.conf`)备份到云端。该文件包含你的远程定义,恢复后即可立即重新连接所有云账户。

## 快速上手

1. 在你的 Steam Deck 上 **切换到桌面模式**。
2. **下载 RcloneView AppImage** 并使其可执行。
3. **添加你的云账户** —— Google Drive、OneDrive 或 S3 是最常见的选择。
4. **备份你的游戏存档**,通过创建从存档目录到云文件夹的同步任务实现。
5. **同步你的截图**,释放固态硬盘空间并保证你的截图安全。
6. **安排定期备份**,这样即使你忘记手动同步,数据也始终受到保护。

你的 Steam Deck 是一台便携式游戏利器,但它的存储空间是有限的。RcloneView 将任何云账户变成了 Deck 文件系统的延伸——让存档保持安全、截图井井有条,并为下一款游戏留出固态硬盘空间。

---

**相关指南:**

- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [执行和管理任务](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
