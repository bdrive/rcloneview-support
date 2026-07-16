---
slug: rcloneview-on-raspberry-pi-cloud-backup-rcloneview
title: "在树莓派上运行 RcloneView — 打造低功耗云备份设备"
authors:
  - tayson
description: "把你的树莓派变成 24/7 全天候运行的云备份设备。在树莓派上设置 RcloneView，实现本地存储与云存储之间的自动同步。"
keywords:
  - rcloneview raspberry pi
  - raspberry pi cloud backup
  - rclone raspberry pi
  - raspberry pi nas cloud sync
  - raspberry pi cloud storage
  - diy cloud backup appliance
  - raspberry pi s3 backup
  - low power cloud sync
  - raspberry pi google drive sync
  - raspberry pi automated backup
tags:
  - raspberry-pi
  - platform
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在树莓派上运行 RcloneView — 打造低功耗云备份设备

> 一台树莓派的功耗仅为 5–15 瓦，比一盏灯泡还低。让它 24/7 持续运行，它就能成为一台安静的常驻云备份设备，在你睡觉时同步你的数据。

树莓派是一台在云存储任务上出人意料地强大的电脑。搭配一块外置 USB 硬盘和 RcloneView，你就拥有了一台专用的备份主机，可以全天候将本地文件同步到云存储（或反向同步）——而功耗成本仅为一台完整 PC 或 NAS 的一小部分。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择树莓派做云备份？

### 常驻运行，低功耗

| 设备 | 功耗 | 年成本（24/7） |
|--------|-----------|-------------------|
| Raspberry Pi 4 | 5–7W | 约 $8 |
| Raspberry Pi 5 | 8–15W | 约 $14 |
| 台式机 | 100–300W | 约 $150–400 |
| NAS（2 盘位） | 20–40W | 约 $30–60 |

树莓派 24/7 运行的成本几乎可以忽略不计。

### 安静紧凑

无风扇（Pi 4），无噪音。把它放在架子上就可以不用管了。

### 性能足够

Raspberry Pi 4 和 5 可以胜任：

- 将数千个文件同步到云存储。
- 运行定时备份任务。
- 挂载云存储以供本地访问。
- 同时管理多个云账户。

## 硬件设置

### 推荐硬件

- **Raspberry Pi 4**（4 GB）或 **Raspberry Pi 5**（4–8 GB）。
- 用于本地存储的 **USB 3.0 外置硬盘**或 SSD。
- 用于操作系统的 **MicroSD 卡**（32 GB）。
- **以太网连接**（大文件传输建议优先于 Wi-Fi）。
- **电源**（建议使用 Pi 官方电源）。

### 存储架构

```
External USB Drive → Raspberry Pi → Cloud Storage
                          ↕
                    RcloneView (scheduling, monitoring)
```

外置硬盘存放你的本地文件。Pi 上的 RcloneView 按计划将它们同步到云存储。

## 安装

### 1) 安装 Raspberry Pi OS

使用 Raspberry Pi Imager 将 Raspberry Pi OS（64 位）刷写到你的 microSD 卡。RcloneView 的图形界面需要桌面版（Desktop edition）。

### 2) 安装 RcloneView

从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载 ARM64 版的 `.deb` 安装包：

```bash
sudo dpkg -i rcloneview_*_arm64.deb
sudo apt-get install -f
```

### 3) 安装 FUSE（用于挂载）

```bash
sudo apt-get install fuse3
```

### 4) 挂载外置硬盘

```bash
sudo mkdir /mnt/backup
sudo mount /dev/sda1 /mnt/backup
```

将其加入 `/etc/fstab`，以便开机自动挂载。

### 5) 启动 RcloneView

```bash
rcloneview
```

如果是无显示器（headless）运行（通过 VNC），请确保在 `raspi-config` 中已启用 VNC。

## 配置云备份

### 添加你的云端远程

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Raspberry Pi" class="img-large img-center" />

添加你的备份目标——Google Drive、S3、Backblaze B2，或 70 多个受支持的提供商中的任意一个。

### 创建备份任务

设置从外置硬盘到云存储的复制（Copy）任务：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create backup job" class="img-large img-center" />

### 定时自动备份

安排每晚的定时备份：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Pi backup jobs" class="img-large img-center" />

## 使用场景

### 1) 家庭文件服务器备份

连接一块存有家庭照片、文档和媒体文件的 USB 硬盘，设置每晚自动备份到 Google Drive 或 Backblaze B2。

### 2) NAS 补充方案

如果你的 NAS 没有好用的云同步功能，可以把 Pi 当作桥梁：

```
NAS (SMB share) → Pi (reads via mount) → Cloud Storage (via RcloneView)
```

### 3) 安防摄像头存档

将本地 NVR 中的安防摄像头录像备份到云存储，实现异地保护。

### 4) 开发者备份

将你的代码仓库和项目文件同步到云存储：

- 设置过滤规则，只包含源代码文件（排除 `node_modules`、`.git`）。
- 安排每小时一次的备份。

### 5) 媒体库镜像

在云端保留一份本地媒体库的镜像。外出时可以用它从 Google Drive 流式播放。

## 性能预期

对 Pi 的性能要有现实的预期：

| 任务 | Raspberry Pi 4 | Raspberry Pi 5 |
|------|----------------|----------------|
| 小文件同步（文档） | 良好 | 出色 |
| 大文件传输 | 受 USB 3/网络限制 | 良好 |
| 数千个小文件 | 检查阶段较慢 | 中等 |
| 加密传输 | 受 CPU 限制 | 更好（支持 AES） |
| 网络速度 | 约 300 Mbps（千兆以太网） | 约 1 Gbps |

对于大文件传输，耐心会有帮助。Pi 并不快，但它可以 24/7 运行——最终总能完成。

### 优化建议

- **减少并行传输数**——Pi 4 上 2–4 个是最优的，Pi 5 可以处理 4–8 个。
- **使用以太网**——Wi-Fi 会增加延迟并降低吞吐量。
- **错峰调度**——把高强度任务安排在夜间运行。
- **SSD 优于 HDD**——USB SSD 的读取速度比机械硬盘快得多。

## 监控与验证

追踪你的备份状态：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Pi backup transfers" class="img-large img-center" />

使用文件夹对比（Folder Comparison）功能进行验证：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Pi cloud backup" class="img-large img-center" />

## 无显示器运行

打造真正“设置好就不用管”的方案：

1. 通过 VNC 或直接操作，配置好所有任务和计划。
2. 启用 RcloneView 开机自启（参见[Ubuntu/Debian 指南](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)）。
3. 拔掉显示器和键盘。
4. Pi 会静默运行，执行既定的定时任务。

## 快速开始

1. **准备一台 Raspberry Pi 4 或 5**，并配一块外置 USB 硬盘。
2. **安装 Raspberry Pi OS**（64 位桌面版）。
3. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
4. **添加云端远程并创建备份任务**。
5. **设置计划，然后就不用管了**——剩下的交给你的 Pi。

这是你能打造出的最省钱、最安静、最高效的云备份设备。

---

**相关指南：**

- [在 Ubuntu/Debian 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
