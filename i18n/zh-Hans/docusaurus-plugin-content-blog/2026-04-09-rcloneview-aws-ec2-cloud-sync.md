---
slug: rcloneview-aws-ec2-cloud-sync
title: "在 AWS EC2 上运行 RcloneView 实现服务器端云同步"
authors:
  - tayson
description: "在 AWS EC2 实例上运行 RcloneView，实现服务器端云同步、迁移和备份。远程访问 GUI，并利用 EC2 带宽实现快速传输。"
keywords:
  - rcloneview
  - aws ec2 cloud sync
  - rcloneview ec2
  - server cloud sync
  - ec2 rclone gui
  - cloud migration server
  - headless cloud sync
  - ec2 data transfer
  - aws ec2 file manager
  - server-side cloud transfer
tags:
  - platform
  - amazon-s3
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 AWS EC2 上运行 RcloneView 实现服务器端云同步

> 在 AWS EC2 实例上运行 RcloneView，可获得服务器级的云传输带宽、支持计划任务的 24/7 全天候运行，并且无需再让数据经过本地计算机中转。

在跨云服务商迁移数 TB 数据时，本地网络连接往往会成为瓶颈。配备千兆网络的 AWS EC2 实例可以在云服务之间以家庭或办公网络无法比拟的速度传输数据。在 EC2 上运行 RcloneView，还意味着传输任务可以在不保持本地机器开机的情况下 24/7 持续运行，并且在 S3 与其他 AWS 服务之间移动的数据会始终保留在 Amazon 网络内——通常不会产生出站流量费用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要在 EC2 上运行 RcloneView

- **速度**：位于 AWS 数据中心的 EC2 实例拥有多千兆的网络连接。S3 与外部服务商之间的传输可以利用这一带宽，而不是受限于本地连接。
- **免费的 S3 传输**：同一区域内 EC2 与 S3 之间的数据传输是免费的。对于大规模的 S3 到云端迁移，在 EC2 上运行可以省去最大的一项成本——本地出站流量费用。
- **24/7 全天候运行**：计划任务可以持续运行，无需保持桌面机器开机。EC2 实例可以承担夜间备份、每周迁移以及持续同步任务。
- **贴近数据**：如果源数据位于 AWS 中（S3、EBS、EFS），在 EC2 上运行 RcloneView 可以让其紧邻数据所在位置，将延迟降到最低。
- **团队访问**：多个团队成员可以远程访问同一个 RcloneView 实例，共享配置和任务历史记录。

## 设置 EC2 实例

### 实例选择

对于大多数 RcloneView 工作负载，中小型实例就已足够：

- **t3.medium**（2 vCPU，4 GB 内存）：适用于轻量的同步任务和小规模迁移。
- **m5.large**（2 vCPU，8 GB 内存）：更适合并发传输和大文件操作。
- **c5.xlarge**（4 vCPU，8 GB 内存）：适用于包含大量并行传输的高强度迁移工作负载。

选择与你的 S3 存储桶位于同一区域的实例，以避免跨区域传输费用。

### 操作系统

使用 Ubuntu Server LTS 或 Amazon Linux 2 启动实例，两者均可无障碍支持 RcloneView。为使用 GUI，请安装一个轻量级的桌面环境：

```
# Ubuntu
sudo apt update && sudo apt install -y xfce4 xrdp

# Amazon Linux 2
sudo yum install -y xrdp xfce
```

启用并启动 RDP 服务，以便远程连接到 GUI。

### 安全组配置

在 EC2 安全组中开放以下端口：

- **端口 3389**（RDP）：用于远程桌面访问 GUI。请限制为你自己的 IP 地址。
- **端口 22**（SSH）：用于终端访问。请限制为你自己的 IP 地址。
- **端口 53682**（可选）：如果需要在 EC2 实例上运行 OAuth 流程，这是 rclone 默认的 OAuth 回调端口。也可以改用无头（headless）OAuth 配置。

## 在 EC2 上安装 RcloneView

通过 SSH 连接到实例并下载 RcloneView：

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载 Linux AppImage 或 .deb 安装包。
2. 为 AppImage 添加可执行权限：`chmod +x RcloneView-*.AppImage`
3. 通过 RDP 连接，并从桌面环境中启动 RcloneView。

## 云服务商的无头 OAuth 配置

EC2 实例通常没有可用于 OAuth 流程的本地浏览器。对于需要 OAuth 的服务商（Google Drive、OneDrive、Dropbox），请使用无头身份验证：

1. 在本地计算机上运行 `rclone authorize "drive"`（或对应服务商的命令）以完成 OAuth 流程。
2. 复制生成的令牌。
3. 在 EC2 实例上，将该令牌粘贴到 RcloneView 的远程配置中。

或者，也可以将 RcloneView 配置为使用外部 rclone 实例，并通过 RcloneView 连接管理器设置 OAuth 令牌。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="Configuring external rclone on EC2 for RcloneView" class="img-large img-center" />

## 配置 S3 访问

对于从 EC2 访问 S3，建议使用 IAM 实例角色而非静态访问密钥。将带有 S3 权限的 IAM 角色附加到 EC2 实例上，rclone 会通过实例元数据服务自动获取临时凭证。这比在实例上存储访问密钥更加安全。

在 RcloneView 的 S3 远程配置中，将访问密钥和私密密钥字段留空，并将环境身份验证设置为使用实例配置文件。

## 运行大规模迁移

借助 EC2 的带宽，原本在家庭网络上需要数天才能完成的大规模迁移可以在数小时内完成：

- **1 TB 从 Google Drive 到 S3**：在持续速度下约需 2-4 小时。
- **10 TB 从 S3 到 Backblaze B2**：根据 B2 API 限速情况，约需 1-2 天。
- **跨区域 S3 复制**：在 AWS 内部接近线路速度。

RcloneView 的多线程传输可以充分利用 EC2 的网络容量。在较大实例上，将传输数设置为 16-32、检查数设置为 16，以获得最大吞吐量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Large-scale migration running on EC2 in RcloneView" class="img-large img-center" />

## 安排服务器端任务

RcloneView 内置的调度器可以处理周期性任务。你可以配置从 Google Drive 到 S3 的夜间备份、S3 与 Backblaze B2 之间的每周同步，或到灾备区域的每日复制。无论你是否通过 RDP 连接，EC2 实例都会持续运行这些任务。

可以让 EC2 实例持续运行以支持计划任务，也可以使用启动/停止计划（通过 AWS Instance Scheduler 或 Lambda 函数）让实例仅在备份时间窗口内运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling server-side sync jobs on EC2 in RcloneView" class="img-large img-center" />

## 成本管理

EC2 的费用因实例类型和运行时长而异：

- **t3.medium 按需实例**：约 $0.042/小时（如 24/7 运行，约 $30/月）
- **竞价实例（Spot Instances）**：对于一次性迁移等可中断的工作负载，成本最高可降低 90%。
- **预留实例**：适用于长期运行的服务器端同步方案，具有更低的每小时费率。

对于一次性迁移，建议使用竞价实例——启动实例、执行迁移、验证结果，然后终止实例。对于持续的计划备份，预留 t3.small 或 t3.medium 实例更具成本效益。

请记住：从 EC2 到同一区域内 S3 的数据传输是免费的。传输到互联网（例如 Backblaze B2 或 Google Drive）会产生标准的 AWS 出站流量费用。

## 快速上手

1. 使用 Ubuntu 或 Amazon Linux 并配备桌面环境启动一个 EC2 实例。
2. **下载 RcloneView**：从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载，并在实例上安装。
3. 使用无头 OAuth 配置云服务商远程，并为 S3 配置 IAM 角色。
4. 运行迁移任务，并利用 EC2 的带宽安排备份计划任务。
5. 在不需要时终止或停止实例，以控制成本。

在 EC2 上运行 RcloneView，让你既能享受 AWS 数据中心网络的速度，又能通过 GUI 便捷地管理传输任务，还能实现计划任务的 24/7 全天候运行——是大规模云迁移和持续服务器端同步的理想方案。

---

**相关指南：**

- [添加 AWS S3 和兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [无头方式添加 OneDrive](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)
- [无头方式配置 Google Drive](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)
- [外部 rclone 配置示例](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
