---
slug: rcloneview-arm-linux-cloud-sync
title: "在 ARM Linux 上运行 RcloneView —— 在树莓派、Orange Pi 和 ARM 服务器上进行云同步"
authors:
  - tayson
description: "RcloneView 可在 ARM Linux 设备上运行，包括树莓派、Orange Pi 以及基于 ARM 的云服务器。在低功耗 ARM 硬件上设置云同步与备份。"
keywords:
  - rcloneview arm linux
  - rclone arm
  - raspberry pi cloud sync
  - arm linux cloud backup
  - orange pi cloud storage
  - arm server cloud sync
  - rcloneview raspberry pi
  - arm64 cloud management
  - low power cloud backup
  - arm linux file sync
tags:
  - arm
  - linux
  - raspberry-pi
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 ARM Linux 上运行 RcloneView —— 在树莓派、Orange Pi 和 ARM 服务器上进行云同步

> ARM 设备无处不在——运行家庭服务器的树莓派、作为媒体盒的 Orange Pi、云端的 ARM 实例。RcloneView 可在 ARM Linux 上运行，将完整的云存储管理功能带到低功耗硬件上。

ARM 处理器为从单板计算机到云服务器实例的各种设备提供动力。无论你是将树莓派用作家庭备份服务器、将 Orange Pi 用作 NAS 网关，还是使用基于 ARM 的 VPS 进行云自动化，RcloneView 都能将其完整的云管理界面带到 ARM Linux 上。从省电的硬件上管理 70 多个云存储提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 支持的 ARM 平台

RcloneView 通过 rclone 原生的 ARM 构建版本支持 ARM Linux：

| 平台 | 架构 | 示例设备 |
|----------|-------------|-----------------|
| ARM64 (aarch64) | 64 位 | 树莓派 4/5（64 位系统）、Orange Pi 5、ARM 云 VPS |
| ARMv7 (armhf) | 32 位 | 树莓派 3/4（32 位系统）、较旧的 Orange Pi |
| ARMv6 | 32 位 | 树莓派 Zero、Pi 1 |

## 在 ARM Linux 上安装

### 下载并安装

从 RcloneView 网站下载适合的 ARM 构建版本。对于运行 64 位树莓派操作系统的树莓派 4：

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView on ARM" class="img-large img-center" />

### 验证安装

启动 RcloneView 并添加你的第一个云远程。该界面与 x86 版本完全相同——所有功能在 ARM 上均可正常使用。

## ARM 云同步的应用场景

### 1）将树莓派用作备份网关

将树莓派变成一个始终在线的备份网关，把你的 NAS 同步到云存储：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Raspberry Pi backup scheduler" class="img-large img-center" />

安排每晚从本地网络存储同步到 S3、Backblaze B2 或 Google Drive——所有这些都可以在功耗低于 5 瓦的设备上运行。

### 2）带云备份的 Orange Pi 媒体服务器

将 Orange Pi 用作媒体服务器，并进行自动云备份。本地存储实现快速访问，云存储提供硬件故障防护。

### 3）用于云到云自动化的 ARM VPS

基于 ARM 的云实例（AWS Graviton、Oracle Cloud Ampere）比 x86 更便宜。在 ARM VPS 上运行 RcloneView，进行定时的云到云传输，而无需占用你的桌面设备。

### 4）边缘设备数据采集

部署在现场的 ARM 设备（气象站、物联网网关、远程办公室）可以使用 RcloneView 自动将采集到的数据同步至云存储。

## ARM 上的性能表现

ARM 设备在处理云同步时表现良好，因为瓶颈通常在于网络速度而非 CPU。树莓派 4 在传输过程中可以轻松跑满 100 Mbps 的连接。

优化 ARM 性能的一些技巧：

- **减少并发传输数量**——ARM CPU 核心数有限；2-4 个并发传输通常是最佳选择。
- **在非高峰时段安排任务**——避免与设备上运行的其他服务争抢资源。
- **通过任务历史进行监控**——追踪传输速度并调整设置。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfers on ARM" class="img-large img-center" />

## 无头（Headless）运行

对于没有显示器的 ARM 设备，可以运行 RcloneView 的后端并进行远程访问。这非常适合藏在 NAS 后面或安装在服务器机架中的树莓派。

## 验证你的同步结果

即使在低功耗硬件上，文件夹比较（Folder Comparison）功能也能验证云备份与本地文件是否一致：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify sync on ARM device" class="img-large img-center" />

## 快速上手

1. **下载 RcloneView** 的 ARM Linux 版本，可从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. **添加你的云账户**——与其他平台的设置方式相同。
3. **创建同步任务**以实现自动备份。
4. **安排好之后即可放手不管**——让你的 ARM 设备全天候处理云同步。

在小型硬件上实现强大的云管理。

---

**相关指南：**

- [在树莓派上运行 RcloneView](https://rcloneview.com/support/blog/rcloneview-on-raspberry-pi-cloud-backup-rcloneview)
- [在 Docker 中运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
