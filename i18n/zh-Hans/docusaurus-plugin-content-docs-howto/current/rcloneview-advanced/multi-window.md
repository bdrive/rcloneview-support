---
sidebar_position: 3
description: "了解如何使用 RcloneView 的“新建窗口”功能并行管理内嵌和外部的 Rclone 实例。"
keywords:
  - rcloneview
  - new window
  - multi-connection
  - external rclone
  - embedded rclone
  - multiple rclone
tags:
  - RcloneView
  - new-window
  - multi-connection
  - external-rclone
  - embedded-rclone
  - multi-windows
date: 2025-06-22
author: Jay
---
# 使用“新建窗口”管理多个 Rclone 连接

RcloneView 提供了灵活的界面，可同时管理多个 Rclone 实例。这在同时使用内嵌和外部 Rclone 配置时尤其有用。

## 内嵌 Rclone 架构

在默认配置下，RcloneView 内置了一个 Rclone 二进制文件（内嵌 Rclone）。该实例允许用户通过易用的图形界面管理云远程。

### 🔹 内嵌模式

- RcloneView 内置 Rclone，并通过 API 与其通信。
- 文件通过 Rclone 直接访问和管理。
- 适用于大多数本地桌面使用场景。

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-medium img-center" />
## 外部 Rclone 架构

对于更高级的使用场景，例如管理远程服务器或云实例上的远程，RcloneView 可以连接到运行在其他位置的外部 Rclone 实例。

### 🔹 外部模式

- RcloneView 连接到远程 Rclone 服务器（通过 Rclone RC）。
- 远程 Rclone 负责访问和同步云存储。
- 适用于管理托管在云端的 Rclone 环境（例如 AWS EC2、Linux 服务器）。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-medium img-center" />
## 新建窗口功能：同时管理两种模式

为了同时支持内嵌和外部 Rclone 实例，RcloneView 提供了**新建窗口**功能。该功能允许用户启动多个 RcloneView 图形界面实例，每个实例都可连接到不同的 Rclone 后端。

### ✅ 主要优势

- 每个窗口都可以连接到独立的 Rclone 实例。
- 并行管理本地和远程环境。
- 在不同云端或环境之间无缝进行比较、同步和复制。

### 🔸 示例：主窗口（内嵌 Rclone）

该窗口连接到 RcloneView 内置的 Rclone。

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview home window" class="img-medium img-center" />
:::important 主窗口的主页图标
主 RcloneView 窗口（连接到内嵌 Rclone）可以通过位于 RcloneView 徽标旁、右上角的**主页图标** <img src="/support/icons/home-icon.png" alt="home icon" class="inline-icon" /> 来识别。

:::
### 🔸 示例：新建窗口（外部 Rclone）

该窗口连接到运行在 AWS Linux 服务器上的外部 Rclone。

:::info 如何在 AWS EC2 上运行 Rclone 引擎  
要了解如何在基于 Ubuntu 的 EC2 实例上部署和管理 Rclone 的 API 守护进程（`rcd`），请参阅：[如何在 AWS EC2 服务器上运行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
:::
<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview new window" class="img-medium img-center" />
## 🚩对比：内嵌 Rclone 与外部 Rclone

| 特性                               | 内嵌 Rclone                      | 外部 Rclone                             |
| ------------------------------------- | ------------------------------------ | ------------------------------------------- |
| 运行在本地机器上                 | ✅ 是                                | ❌ 否（运行在远程服务器上）                |
| 访问本地磁盘                  | 是 — RcloneView 所在的本地 PC | 是 — 外部 Rclone 所在的服务器     |
| 使用内置 Rclone 二进制文件           | ✅ 默认包含                | ❌ 需要单独安装            |
| 可在 `Settings > Location` 中配置 | ✅ 支持                          | ❌ 不适用                            |
| 需要网络配置        | ❌ 否                                 | ✅ 是（需要主机、端口、身份验证） |
| 网络性能                   | 取决于本地/家庭网络        | 取决于服务器/云端网络             |

 💡 使用**新建窗口**功能并行管理多个 Rclone 实例——例如，将一个窗口连接到内嵌 Rclone 以执行本地任务，另一个窗口连接到外部 Rclone 以执行云端操作。
