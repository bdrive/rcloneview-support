---
slug: fix-rclone-mount-fuse-errors-rcloneview
title: "在 RcloneView 中修复 Rclone 挂载和 FUSE 错误"
authors:
  - tayson
description: "排查并修复 RcloneView 中常见的 rclone 挂载错误，包括未安装 FUSE、缺少 WinFsp、找不到 macFUSE、权限被拒、过期挂载和缓存目录问题，涵盖 Windows、macOS 和 Linux。"
keywords:
  - rclone mount error
  - FUSE not installed rclone
  - WinFsp missing rclone
  - macFUSE not found rclone
  - rclone mount permission denied
  - stale mount rclone fix
  - rclone mount point busy
  - rclone cache directory error
  - rcloneview mount troubleshooting
  - fix rclone FUSE error
tags:
  - troubleshooting
  - mount
  - vfs
  - tips
  - linux
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中修复 Rclone 挂载和 FUSE 错误

> 将云存储挂载为本地驱动器是 rclone 最强大的功能之一，但 FUSE 依赖项和操作系统特有的问题可能会导致令人头疼的错误。本指南将逐一介绍每种常见的挂载失败情况及其解决方法。

Rclone 的挂载功能可以让你将远程云存储当作本地文件夹或驱动器盘符来访问。RcloneView 通过其挂载管理器让这一切变得简单，但在幕后，挂载依赖于一个必须在你的操作系统上正确安装和配置的 FUSE（用户空间文件系统）层。当出现问题时，错误信息往往令人费解。本指南涵盖了在 Windows、macOS 和 Linux 上最常见的挂载和 FUSE 错误，并针对每种情况提供了分步修复方法。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解 Rclone 挂载的工作原理

在深入了解修复方法之前，先了解一下其架构会有所帮助。当你在 RcloneView 中挂载一个远程时，rclone 会创建一个虚拟文件系统，将文件操作（打开、读取、写入、列出）转换为对你的云服务商的 API 调用。这个虚拟文件系统通过 FUSE 驱动程序暴露给你的操作系统：

- **Windows** 使用 [WinFsp](https://winfsp.dev/)（Windows 文件系统代理）。
- **macOS** 使用 [macFUSE](https://osxfuse.github.io/)（前身为 OSXFUSE）。
- **Linux** 使用内核 FUSE 模块（`fuse` 或 `fuse3`）。

如果 FUSE 驱动程序缺失、过时或配置错误，挂载将在 rclone 甚至开始提供文件服务之前就失败。VFS（虚拟文件系统）缓存层位于其之上，负责处理缓存、缓冲和预读——即使 FUSE 本身正常工作，它自身的一系列问题也可能导致故障。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## Windows 上 WinFsp 缺失或未被检测到

### 症状

- 错误信息：`mount helper not found` 或 `cannot find WinFsp`。
- 挂载命令立即退出，没有出现任何驱动器盘符。
- RcloneView 显示挂载失败通知。

### 修复步骤

1. **下载并安装 WinFsp**，可从 [winfsp.dev](https://winfsp.dev/rel/) 获取。选择最新的稳定版本（.msi 安装程序）。
2. **以管理员身份运行安装程序**——WinFsp 会安装一个需要提升权限的内核模式驱动程序。
3. 安装后**重启**。虽然并非总是必需，但重启可以确保驱动程序被完全加载。
4. **验证安装**，打开命令提示符并运行：
   ```
   dir "C:\Program Files (x86)\WinFsp"
   ```
   你应该能看到包含 `bin`、`lib` 及其他文件夹的 WinFsp 目录。
5. **检查 PATH**——WinFsp 的 `bin` 目录必须位于系统 PATH 中。安装程序通常会自动添加，但如果持续出现错误，请手动将 `C:\Program Files (x86)\WinFsp\bin` 添加到系统环境变量中。
6. 在 RcloneView 的挂载管理器中**重新尝试挂载**。

如果你运行的是旧版本的 WinFsp，请升级到最新版本。部分 rclone 版本需要更新的 WinFsp 功能，版本不匹配可能导致无提示的失败。

## macOS 上找不到 macFUSE

### 症状

- 错误：`FUSE library not found` 或 `mount helper not found`。
- 挂载无声失败，或以代码 1 退出。
- 在 macOS Ventura 或更高版本上，你可能会看到系统扩展被阻止的警告。

### 修复步骤

1. **下载 macFUSE**，可从 [osxfuse.github.io](https://osxfuse.github.io/) 获取。安装最新的稳定版本。
2. **允许系统扩展**——安装后，前往**系统设置 > 隐私与安全性**，批准 macFUSE 内核扩展。在 Apple Silicon 机型的 Mac 上，可能需要重启进入恢复模式以启用内核扩展。
3. 批准扩展后**重启**你的 Mac。
4. **验证**，在终端中运行：
   ```
   ls /Library/Filesystems/macfuse.fs
   ```
   如果该目录存在，说明 macFUSE 已正确安装。
5. **检查 Gatekeeper**——如果 macOS 以安全警告阻止挂载，请前往隐私与安全性设置并点击"仍要允许"。

对于运行 macOS Sonoma 或更高版本的 Apple Silicon 机型 Mac，你可能需要在恢复模式中将安全级别降低为"降低的安全性"，以允许第三方内核扩展。这是 macOS 的要求，而非 rclone 的限制。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Linux 上未安装 FUSE

### 症状

- 错误：`fusermount: command not found` 或 `fuse: device not found`。
- 挂载失败并提示 `mount helper program not found`。
- 访问 `/dev/fuse` 时权限被拒。

### 修复步骤

**安装 FUSE：**

```bash
# Debian/Ubuntu
sudo apt install fuse3

# Fedora/RHEL
sudo dnf install fuse3

# Arch Linux
sudo pacman -S fuse3

# Alpine
sudo apk add fuse3
```

**启用 FUSE 内核模块：**

```bash
sudo modprobe fuse
```

要使其在重启后保持持久化，请将 `fuse` 添加到 `/etc/modules-load.d/fuse.conf`。

**修复 /dev/fuse 的权限：**

```bash
sudo chmod 666 /dev/fuse
```

或者将你的用户添加到 `fuse` 组：

```bash
sudo usermod -aG fuse $USER
```

注销并重新登录以使组变更生效。

**允许非 root 用户挂载：**

编辑 `/etc/fuse.conf` 并取消注释以下这一行：

```
user_allow_other
```

如果你想使用 `--allow-other` 标志（该标志允许其他用户和系统服务访问已挂载的文件系统），这是必需的。

## 权限被拒错误

权限问题在每个操作系统上的表现各不相同，但根本原因通常是相同的：运行 rclone 的用户没有创建或访问挂载所需的必要权限。

### Windows

- 如果挂载到系统级路径，**以管理员身份运行 RcloneView**。
- 确保挂载点（驱动器盘符或文件夹）没有被其他程序占用。
- 检查你的杀毒软件是否阻止了 WinFsp 或 rclone。

### macOS

- 如果你看到 `operation not permitted`，请检查 rclone 和 RcloneView 是否在**系统设置 > 隐私与安全性 > 完全磁盘访问权限**中获得了完全磁盘访问权限。
- 确保挂载点目录存在，并且你的用户对其具有写入权限。

### Linux

- 验证你的用户可以访问 `/dev/fuse`：
  ```bash
  ls -la /dev/fuse
  ```
- 如果以服务方式（systemd）运行 rclone，请确保服务文件中包含 `User=youruser`，并且该用户属于 `fuse` 组。
- SELinux 或 AppArmor 策略可能会阻止 FUSE 挂载。使用 `ausearch -m avc`（SELinux）或 `dmesg`（AppArmor）检查日志，并添加相应的例外规则。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 挂载点忙或过期挂载

当 rclone 意外退出（崩溃、被杀死信号终止、系统休眠）但挂载点仍在操作系统中保持注册状态时，就会出现过期挂载。任何访问该路径或重新挂载到该路径的尝试都会失败，并出现"transport endpoint is not connected"（Linux）、"resource busy"（macOS）或资源管理器窗口卡死（Windows）的情况。

### Linux 修复方法

```bash
# 强制卸载过期挂载
fusermount -uz /path/to/mount

# 如果 fusermount 失败，使用延迟卸载
sudo umount -l /path/to/mount
```

### macOS 修复方法

```bash
# 卸载过期路径
diskutil unmount force /path/to/mount

# 或使用 umount
sudo umount -f /path/to/mount
```

### Windows 修复方法

- 打开**任务管理器**，结束所有仍在运行的 `rclone.exe` 进程。
- 如果驱动器盘符卡住不动，以管理员身份打开命令提示符并运行：
  ```
  net use X: /delete
  ```
  将 `X:` 替换为卡住的驱动器盘符。
- 如果驱动器盘符仍未消失，从任务管理器重启 Windows 资源管理器。

清除过期挂载后，从 RcloneView 的挂载管理器重新尝试挂载。

## VFS 缓存目录问题

Rclone 的 VFS 缓存会存储正在读取或写入的文件的临时副本。如果缓存目录空间不足、权限不正确，或位于速度较慢的文件系统上，挂载将失败或行为异常。

### 常见问题

- **磁盘已满**——默认缓存位置位于用户的临时目录中，该目录可能位于较小的系统分区上。
- **权限被拒**——缓存目录归属于另一个用户，或具有限制性权限。
- **缓存驱动器速度慢**——将缓存放在网络驱动器或机械硬盘上会导致挂载性能不佳。

### 修复方法

**更改缓存目录**为具有足够快速存储空间的位置：

```bash
rclone mount remote: /mnt/cloud --cache-dir /path/to/fast/ssd/cache
```

在 RcloneView 中，你可以在挂载配置选项中设置缓存目录。

**设置缓存大小限制**，以防止缓存占用所有可用空间：

```bash
--vfs-cache-max-size 10G
--vfs-cache-max-age 1h
```

**检查缓存目录的权限**：

```bash
ls -la /path/to/cache
# 确保你的用户拥有该目录
chown -R $USER:$USER /path/to/cache
```

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 重启后挂载消失

默认情况下，rclone 挂载不是持久化的——它们在系统重启后不会保留。如果你需要挂载能够自动恢复，可以使用以下几种方案。

### 使用 RcloneView 的任务调度

RcloneView 允许你创建计划任务，在系统启动时重新建立挂载。配置一个挂载任务，并将其计划设置为在登录或启动时运行。

### Linux systemd 服务

创建一个 systemd 用户服务：

```ini
[Unit]
Description=Rclone Mount - Remote
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
ExecStart=/usr/bin/rclone mount remote: /mnt/cloud --vfs-cache-mode full
ExecStop=/bin/fusermount -uz /mnt/cloud
Restart=on-failure
RestartSec=5

[Install]
WantedBy=default.target
```

使用以下命令启用它：

```bash
systemctl --user enable rclone-mount.service
systemctl --user start rclone-mount.service
```

### Windows 任务计划程序

创建一个在登录时运行的计划任务，执行 `rclone mount` 并附上你所需的参数。RcloneView 的任务调度器也可以为你处理这一切。

### macOS launchd

在 `~/Library/LaunchAgents/` 中创建一个 plist，以便在登录时启动挂载。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **安装适用于你操作系统的 FUSE 驱动程序**——WinFsp（Windows）、macFUSE（macOS）或 fuse3（Linux）。
3. 在 RcloneView 中**打开挂载管理器**，配置并启动你的第一个挂载。
4. **设置适合你的存储和网络速度的 VFS 缓存选项**。

大多数挂载错误归根结底都是 FUSE 驱动程序缺失或配置错误。为你的平台安装正确的驱动程序，验证权限，几分钟内你就能拥有可靠运行的云挂载。

---

**相关指南：**

- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [任务调度与执行](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
