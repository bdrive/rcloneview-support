---
slug: rcloneview-manjaro-linux-cloud-sync
title: "在 Manjaro Linux 上安装并使用 RcloneView 进行云同步"
authors:
  - tayson
description: "Manjaro Linux 将 Arch 的强大能力与用户友好的默认设置结合在一起。了解如何在 Manjaro 上通过 pamac、pacman 或 AppImage 安装 RcloneView，实现无缝的多云文件同步、挂载和备份。"
keywords:
  - rcloneview manjaro linux
  - manjaro cloud sync
  - install rcloneview manjaro
  - manjaro rclone gui
  - arch linux cloud storage
  - manjaro pamac rcloneview
  - manjaro cloud backup
  - manjaro mount cloud drive
  - rcloneview appimage manjaro
  - manjaro aur rcloneview
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Manjaro Linux 上安装并使用 RcloneView 进行云同步

> Manjaro 将 Arch Linux 的滚动更新能力包装成桌面友好的发行版。加入 RcloneView 后,你将获得一个可视化的多云文件管理器,自然契合 Manjaro 让强大工具变得易于使用的理念。

Manjaro Linux 已经发展成为最受欢迎的基于 Arch 的发行版之一,它提供滚动发布模式和 AUR(Arch 用户仓库)的访问权限,同时提供更平易近人的安装和配置体验。无论你使用的是 XFCE、KDE Plasma 还是 GNOME 版本的 Manjaro,你都可以获得最新的软件包以及一个重视选择和自主权的社区。RcloneView 为 Manjaro 用户提供了一个图形界面,用于管理跨 70 多个云存储提供商的文件——Google Drive、OneDrive、Dropbox、AWS S3、Backblaze B2、Wasabi 等等。本指南将带你了解在 Manjaro 上的安装、云远程配置、文件同步、驱动器挂载以及任务调度。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 Manjaro 进行云文件管理

Manjaro 作为运行 RcloneView 的平台具有以下几个优势:

- **滚动发布** —— 你始终可以获得最新版本的 rclone 和系统库,而无需等待发行版升级周期。
- **AUR 访问权限** —— Arch 用户仓库提供了官方仓库中没有的社区维护软件包,扩展了你的安装选择。
- **硬件检测** —— Manjaro 的 mhwd 工具可以自动配置驱动程序,这对于依赖正确驱动设置才能获得流畅 GUI 体验的 GPU 加速桌面环境来说非常重要。
- **多种桌面环境** —— 无论你偏好 KDE Plasma、XFCE、GNOME 还是平铺式窗口管理器,RcloneView 都能通过标准的 GTK/Qt 兼容性在所有环境上运行。
- **活跃的社区** —— Manjaro 的论坛和 wiki 提供了针对该发行版配置特点的故障排查资源。

## 前置条件

在 Manjaro 上安装 RcloneView 之前,请确保你具备以下条件:

- Manjaro Linux(任意版本——XFCE、KDE、GNOME 或社区版本)
- 可用的网络连接
- 至少 512 MB 的可用磁盘空间
- 一个或多个云存储提供商的账号(Google Drive、OneDrive、S3 等)
- 对终端有基本了解(尽管大多数操作会在 GUI 中完成)

首先更新你的系统,以确保所有软件包都是最新的:

```bash
sudo pacman -Syu
```

或者使用 Manjaro 的图形化软件包管理器 pamac:

```bash
pamac update
```

## 在 Manjaro 上安装 RcloneView

Manjaro 为安装 RcloneView 提供了多种途径。选择最适合你工作流程的一种。

### 选项一:AppImage(推荐大多数用户使用)

AppImage 是最简单的安装方式。它将 RcloneView 所需的一切打包到一个可执行文件中——无需管理依赖项。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载最新的 RcloneView AppImage。
2. 使其可执行:

```bash
chmod +x RcloneView-*.AppImage
```

3. 运行它:

```bash
./RcloneView-*.AppImage
```

要将 AppImage 集成到应用程序菜单中,可以使用 AppImageLauncher 之类的工具,该工具可在 Manjaro 仓库中找到:

```bash
sudo pacman -S appimagelauncher
```

安装完成后,双击 AppImage 会提示你将其集成到桌面环境中。

### 选项二:通过 pamac 安装(AUR)

Manjaro 的 pamac 软件包管理器可以直接安装 AUR 软件包。首先,确保在 pamac 中启用了 AUR 支持:

1. 打开**添加/删除软件**(pamac GUI)。
2. 进入**首选项 > 第三方**并启用 AUR 支持。
3. 搜索 `rcloneview` 并安装。

或者从终端安装:

```bash
pamac build rcloneview
```

pamac 会自动处理依赖关系解析,拉取所有必需的库。

### 选项三:单独安装 rclone 并使用 AppImage

如果你想通过 pacman 管理最新版本的 rclone,同时使用 AppImage 作为 GUI:

```bash
sudo pacman -S rclone fuse3
```

然后下载并运行 RcloneView AppImage。RcloneView 会检测系统安装的 rclone 并使用它。

### 验证安装

安装完成后,从应用程序菜单或终端启动 RcloneView。你应该会看到包含远程浏览器和任务管理面板的主窗口。如果你单独安装了 rclone,请验证是否已被检测到:

```bash
rclone version
```

## 添加云端远程

RcloneView 运行后,第一步是连接你的云存储账号。RcloneView 为每个提供商提供了引导式设置。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. 在 RcloneView 界面中点击**新建远程**。
2. 从提供商列表中选择 **Google Drive**。
3. 按照 OAuth 认证流程操作——浏览器窗口将打开,供你登录并授予访问权限。
4. 选择你的访问范围(完整驱动器访问、文件级访问或只读)。
5. 保存远程。

### OneDrive

1. 点击**新建远程**并选择 **Microsoft OneDrive**。
2. 在浏览器中通过 Microsoft OAuth 流程进行身份验证。
3. 在个人 OneDrive、OneDrive for Business 或 SharePoint 之间进行选择。
4. 保存远程。

### 兼容 S3 的存储(AWS、Wasabi、Backblaze B2、MinIO)

1. 点击**新建远程**并选择你的兼容 S3 的提供商。
2. 输入你的 Access Key ID 和 Secret Access Key。
3. 指定区域和端点(对于非 AWS 提供商,如 Wasabi 或 MinIO,需要提供端点 URL)。
4. 保存远程。

你可以根据需要添加任意数量的远程。所有配置好的远程都会显示在侧边栏中,方便快速访问。

## 浏览和同步文件

配置好远程后,RcloneView 的双栏浏览器允许你并排浏览本地和云端文件。你可以浏览文件夹结构、预览文件详情,并通过拖放或工具栏按钮启动传输。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### 复制文件

在一个面板中选择文件或文件夹,并将其复制到另一个面板的位置。这适用于:

- **本地到云端** —— 将文件从你的 Manjaro 文件系统上传到任何已连接的云端远程。
- **云端到本地** —— 将云存储中的文件下载到本地磁盘。
- **云端到云端** —— 在两个云提供商之间直接传输文件,而无需先下载到本地机器。

### 同步文件夹

对于持续同步,创建一个同步任务,使两个位置保持同步:

1. 在左侧面板打开源文件夹,在右侧面板打开目标文件夹。
2. 点击**同步**并配置同步方向(单向或镜像)。
3. 查看比较结果,了解哪些文件将被添加、更新或删除。
4. 执行同步。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 将云存储挂载为本地驱动器

RcloneView 可以将任何云端远程挂载为 Manjaro 上的本地文件系统目录。这让你可以通过文件管理器(Thunar、Dolphin、Nautilus)或任何应用程序访问云端文件,就像它们在本地驱动器上一样。

### 设置挂载

1. 确保已安装 FUSE:

```bash
sudo pacman -S fuse3
```

2. 在 RcloneView 中,右键点击某个远程或导航至挂载管理器。
3. 选择本地挂载点(例如 `~/CloudDrive/GoogleDrive`)。
4. 配置挂载选项——缓存设置、只读或读写、VFS 缓存模式。
5. 点击**挂载**。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

已挂载的驱动器会显示在你的文件管理器中,并可供所有应用程序访问。例如,你可以将媒体播放器指向已挂载的 Google Drive 文件夹,或直接从已挂载的 S3 存储桶打开 CAD 文件。

### 在 Manjaro 上的挂载性能建议

- **对于随机读取的应用程序(文档编辑器、媒体播放器),使用 VFS 缓存模式"full"** 以获得最佳性能。
- **在快速存储上设置缓存目录** —— 如果你有 NVMe SSD,将 VFS 缓存指向该处以获得更快的访问速度。
- **对于文件夹结构较大的远程,增加目录缓存时间**,以减少 API 调用。

## 调度自动同步任务

为了实现持续的备份和同步,RcloneView 的任务调度器允许你定义自动运行的循环同步操作。

1. 通过选择源和目标的远程及文件夹来创建同步任务。
2. 打开任务调度器,设置执行频率——每小时、每天、每周或自定义 cron 表达式。
3. 启用调度,让 RcloneView 处理其余的事情。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Manjaro 用户常见的调度模式:

- **每天将 ~/Documents 备份到 Google Drive** —— 每晚运行,使你的文档在云端保持镜像。
- **每周将项目文件夹同步到 S3** —— 为大型项目文件保留异地备份。
- **每小时同步共享团队文件夹**至多个云提供商,以实现冗余。

## Manjaro 特有问题的故障排查

### FUSE 权限

如果挂载因权限错误而失败,请确保你的用户在 `fuse` 组中:

```bash
sudo usermod -aG fuse $USER
```

注销并重新登录,使组更改生效。

### 内核模块加载

在某些 Manjaro 安装中,FUSE 内核模块可能不会自动加载。手动加载它:

```bash
sudo modprobe fuse
```

要使此设置永久生效,请将 `fuse` 添加到 `/etc/modules-load.d/fuse.conf`。

### AppImage 字体渲染

如果 AppImage 版本中的字体显示异常,请安装必要的字体包:

```bash
sudo pacman -S noto-fonts ttf-liberation
```

### OAuth 浏览器身份验证

如果在设置远程期间 OAuth 浏览器窗口没有自动打开,请检查 `xdg-open` 是否配置正确:

```bash
xdg-settings get default-web-browser
```

如果未设置默认浏览器,请通过你的桌面环境设置进行配置。

## 快速上手

1. **更新 Manjaro** —— 运行 `sudo pacman -Syu` 以确保系统是最新的。
2. **安装 RcloneView** —— 使用 AppImage 以求简便,或使用 pamac 以实现 AUR 集成。
3. **添加你的云端远程** —— 连接 Google Drive、OneDrive、S3 或任何其他提供商。
4. 使用双栏浏览器**浏览、复制和同步**文件。
5. **将云存储挂载**为本地驱动器,以便从任何应用程序无缝访问。
6. **调度自动备份**,在无需手动操作的情况下保护你的数据。

Manjaro 为你提供了一个强大、始终保持最新的 Linux 桌面。RcloneView 为你提供了一个强大、始终保持最新的云文件管理器。两者结合,涵盖了从本地文件到多云存储的全部场景,而无需输入一句命令行指令。

---

**相关指南:**

- [添加远程存储(以 Google Drive 为例)](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [任务调度与执行](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
