---
slug: rcloneview-fedora-rhel-centos-linux
title: "在 Fedora、RHEL 和 CentOS Linux 上安装并使用 RcloneView"
authors:
  - tayson
description: "在基于 RPM 的 Linux 发行版上安装 RcloneView —— Fedora、RHEL、CentOS 和 Rocky Linux。在企业级和工作站 Linux 上设置云同步与备份。"
keywords:
  - rcloneview fedora
  - rcloneview rhel
  - rcloneview centos
  - rclone gui rpm linux
  - install rcloneview fedora linux
  - rclone gui red hat linux
  - rcloneview rocky linux
  - cloud sync fedora linux
  - rclone centos gui
  - rpm based linux cloud management
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Fedora、RHEL 和 CentOS Linux 上安装并使用 RcloneView

> Fedora、Red Hat Enterprise Linux（RHEL）、CentOS Stream 和 Rocky Linux 是广泛用于工作站和企业服务器的基于 RPM 的发行版。RcloneView 可在所有这些系统上运行，为 Red Hat 生态系统带来可视化的云存储管理。

虽然 Ubuntu 和基于 Debian 的发行版在教程中获得了大多数关于 Linux 的关注，但基于 RPM 的家族——Fedora（桌面和工作站）、RHEL（企业级）、CentOS Stream（上游测试版）以及 Rocky Linux/AlmaLinux（RHEL 替代品）——占据了 Linux 部署的很大一部分。RcloneView 的 Linux 版本可在整个家族中运行，设置过程也十分简单。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 支持的发行版

| 发行版 | 版本 | 架构 |
|-------------|---------|-------------|
| Fedora | 38+ | x86_64, aarch64 |
| RHEL | 8, 9 | x86_64, aarch64 |
| CentOS Stream | 8, 9 | x86_64 |
| Rocky Linux | 8, 9 | x86_64, aarch64 |
| AlmaLinux | 8, 9 | x86_64 |

## 步骤 1 —— 安装 RcloneView

从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载适用的 Linux 安装包。

对于基于 RPM 的发行版，RcloneView 以 **AppImage** 或直接二进制文件的形式分发——这是一个无需系统安装的自包含可执行文件。

**下载并运行（AppImage）：**

```bash
# Download RcloneView AppImage
wget https://rcloneview.com/src/download.html -O RcloneView.AppImage

# Make it executable
chmod +x RcloneView.AppImage

# Run
./RcloneView.AppImage
```

另外，若要创建桌面应用程序入口：

```bash
# Move to a standard location
mkdir -p ~/.local/bin
mv RcloneView.AppImage ~/.local/bin/rcloneview

# Create a desktop entry (optional)
cat > ~/.local/share/applications/rcloneview.desktop << EOF
[Desktop Entry]
Name=RcloneView
Exec=/home/$USER/.local/bin/rcloneview
Icon=rcloneview
Type=Application
Categories=Utility;Network;
EOF
```

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView running on Linux" class="img-large img-center" />

## 步骤 2 —— 安装 FUSE（用于挂载功能）

云盘挂载功能需要 FUSE。在基于 RPM 的发行版上：

**Fedora：**
```bash
sudo dnf install fuse fuse3
sudo modprobe fuse
```

**RHEL / CentOS Stream / Rocky Linux：**
```bash
sudo dnf install fuse fuse3
# Add your user to the fuse group
sudo usermod -aG fuse $USER
```

在基于 RHEL 的系统上，你可能还需要启用 FUSE 模块：
```bash
echo "fuse" | sudo tee -a /etc/modules-load.d/fuse.conf
```

验证 FUSE 是否可用：
```bash
fusermount3 --version
```

## 步骤 3 —— 安装 Rclone（如未捆绑）

RcloneView 需要单独安装 rclone。在基于 RPM 的发行版上：

**使用官方 rclone 安装脚本（推荐）：**
```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

**在 Fedora 上使用 dnf：**
```bash
sudo dnf install rclone
```

**验证安装：**
```bash
rclone version
```

## 步骤 4 —— 启动 RcloneView 并添加远程

启动 RcloneView 并添加你的云账户：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Add cloud remotes in RcloneView on Fedora" class="img-large img-center" />

对于需要 OAuth 的远程（Google Drive、OneDrive、Dropbox），RcloneView 会打开系统浏览器。在没有桌面环境的 RHEL 服务器安装中，可使用 `--auth-no-browser` rclone 标志，或在有浏览器的机器上完成授权后复制令牌。

## 无桌面服务器部署（RHEL/CentOS）

对于没有桌面环境的 RHEL 服务器，可在后端模式下运行 RcloneView，并通过远程浏览器访问：

1. 启动 RcloneView 的 API 后端：
   ```bash
   ./rcloneview --no-browser --api-port 5572 &
   ```
2. 通过 SSH 端口转发从远程机器访问：
   ```bash
   ssh -L 5572:localhost:5572 user@your-rhel-server
   ```
3. 在本地浏览器中打开 `http://localhost:5572`。

## 在 Linux 上调度任务

对于 RHEL 或 Fedora 上的自动化备份，可结合 RcloneView 的任务调度功能使用 systemd 定时器或 cron：

**使用 cron：**
```bash
# Edit crontab
crontab -e

# Add nightly backup at 2 AM
0 2 * * * /usr/bin/rclone sync /data/important s3-remote:backup-bucket --log-file /var/log/rclone-backup.log
```

**使用 systemd 定时器**（在 RHEL 8/9 上首选）：

创建 `/etc/systemd/system/rclone-backup.service`：
```ini
[Unit]
Description=Rclone Cloud Backup

[Service]
Type=oneshot
User=backup-user
ExecStart=/usr/bin/rclone sync /data/important s3-remote:backup-bucket
```

创建 `/etc/systemd/system/rclone-backup.timer`：
```ini
[Unit]
Description=Daily rclone backup

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

启用并启动：
```bash
sudo systemctl enable --now rclone-backup.timer
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud backup jobs on Linux" class="img-large img-center" />

## SELinux 注意事项

基于 RHEL 的发行版默认以强制模式运行 SELinux。如果 RcloneView 在访问某些路径或挂载驱动器时遇到问题：

```bash
# Check for SELinux denials
sudo ausearch -m avc -ts recent | grep rclone

# Allow rclone to read user home directories (if needed)
sudo setsebool -P user_home_t:process allow_execmem 1
```

大多数操作无需修改 SELinux 即可正常工作。挂载操作可能需要在挂载点上设置适当的 SELinux 上下文。

## 快速上手

1. **下载 RcloneView**：访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **安装 FUSE** 以支持挂载：`sudo dnf install fuse fuse3`。
3. **安装 rclone**，通过官方安装脚本进行安装。
4. **运行 RcloneView**，添加你的云端远程，开始管理云存储。

Fedora 工作站和 RHEL 服务器是 RcloneView Linux 支持中的一等公民。全部 70 多个云服务商、挂载、加密、调度和文件夹对比功能，与在其他任何平台上一样正常运行。

---

**相关指南：**

- [在 Ubuntu 和 Debian Linux 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 ARM Linux 上运行 RcloneView](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [在 Docker 中运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
