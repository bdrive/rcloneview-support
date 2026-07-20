---
sidebar_position: 9
description: "了解如何使用 RcloneView 连接管理器配置并在内置 Rclone 和外部 Rclone 实例之间切换。"
keywords:
  - rcloneview
  - connection
  - remote control
  - embedded rclone
  - external rclone
  - connection manager
  - rclone
  - rclone rcd
  - rc server
  - Remote Connection
  - rclone connection
tags:
  - RcloneView
  - connection
  - remote-control
  - embedded-rclone
  - external-rclone
  - connection-manager
  - rclone-rcd
date: 2025-06-22
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 在 RcloneView 中管理 Rclone 连接

RcloneView 是一款基于图形界面的云存储文件管理器，通过其远程控制（RC）API 与 **Rclone** 通信。默认情况下，它内置了 **内置 Rclone（Embedded Rclone）** 实例，同时也支持连接外部 Rclone 实例（**外部 Rclone，External Rclone**）。

本指南将说明如何使用 **连接管理器（Connection Manager）** 管理这些连接。

## 连接管理器概览

RcloneView 通过两种模式与 Rclone 通信：

- **内置 Rclone**（默认，内建）
- **外部 Rclone**（用户自行配置，通过网络连接）

**连接管理器** 允许你查看、切换并管理这些 Rclone 实例。

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="connection manager with embedded rclone only" class="img-medium img-center" />

### 内置 Rclone

RcloneView 内置了一个预安装的 Rclone 二进制文件，称为 **内置 Rclone**，会自动启动。

| 字段                       | 说明                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| **地址（Address）**                 | 通常为 `http://127.0.0.1:5582`（本地回环地址）                         |
| **Rclone 版本（Rclone Version）**          | 例如：`v1.70.1`                                                             |
| **已连接（Connected） / 连接（Connect）** | 显示当前状态。如果尚未连接，点击 **连接（Connect）** 以激活。 |
| **自我更新（Self Update）**             | 点击以升级到最新的 Rclone 版本。                                                 |

### 外部 Rclone 列表

外部 Rclone 是指由用户手动启动的独立 Rclone 实例，通常通过 `rclone rcd` 启动。它可以运行在：

- 本地机器上（用于测试）
- 远程服务器上（例如 AWS EC2）
- Docker 容器内

每个条目会显示：

| 字段 | 说明 |
|-------|-------------|
| **显示名称（Display Name）** | 用户自定义的名称（例如 `aws-rclone`） |
| **远程地址（Remote Address）** | API 端点，例如 `http://<host>:5572` |
| **用户名（Username）** | 如果启用了身份验证 |
| **Rclone 版本（Rclone Version）** | 从已连接的实例中获取 |

**可用操作**：
- **连接（Connect）** – 将此实例设为活动状态
- **编辑（Edit）** – 修改地址、凭据或 SSL 选项
- **删除（Delete）** – 从列表中移除

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="external rclone added" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="external rclone selected" class="img-medium img-center" />
</div>

### 当前选择指示器

在连接管理器对话框的顶部：

- `Selected: Embedded Rclone` —— 表示默认的内置实例处于活动状态
- `Selected: aws-rclone` —— 表示正在使用自定义的外部实例

同一时间只能有一个连接处于活动状态。你当前的选择会影响：

- 远程列表的可见性
- 挂载/任务操作
- 配置相关操作

:::important 说明
- 同一时间只能有一个 Rclone 连接处于活动状态。
- 你可以在内置连接和外部连接之间自由切换。

💡 如需并行管理两个实例，请打开一个新的 RcloneView 窗口。

- 如果外部 Rclone 变得不可用，你随时可以回退到内置版本。
:::

## 添加新的外部 Rclone

要连接到正在运行的 `rclone rcd` 服务器：

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="new connection form" class="img-medium img-center" />

1. 点击连接管理器底部的 **新建连接（New Connection）**。
2. 填写表单：

| 字段 | 说明 |
|-------|-------------|
| **显示名称（Display Name）** | 例如 `aws-rclone` |
| **远程地址（Remote Address）** | 完整的 API 端点（`http://<host>:5572`） |
| **用户名 / 密码（Username / Password）** | 启用身份验证时必填 |
| **禁用 SSL 验证（Disable SSL Verification）** | 适用于自签名证书或开发环境 |
<br />
<br />

3. 点击 **测试连接（Test connection）**。如果成功，点击 **保存（Save）**。

:::important 说明

💡 要使外部 Rclone 可用，请使用以下命令运行它：

```bash
rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572
```

:::
