---
slug: backup-migrate-rclone-config-rcloneview
title: "如何使用 RcloneView 备份、迁移和管理你的 Rclone 配置"
authors:
  - tayson
description: "了解如何使用 RcloneView 备份、恢复和迁移你的 rclone 配置文件——包括加密远程。让你的云连接保持可移植且受到保护。"
keywords:
  - backup rclone config
  - migrate rclone configuration
  - rclone config file location
  - rcloneview config backup
  - rclone config portable
  - export rclone remotes
  - rclone config file backup
  - move rclone to new computer
  - rclone config migration
  - rcloneview configuration management
tags:
  - RcloneView
  - cloud-storage
  - feature
  - guide
  - tips
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 备份、迁移和管理你的 Rclone 配置

> 你的 rclone 配置文件包含了所有云端远程配置——连接详情、身份验证令牌、加密密钥和自定义设置。丢失它意味着要从头重新配置每一个远程。以下介绍如何备份它、迁移它，并保持其可移植性。

在 RcloneView 中花费大量时间配置了数十个云端远程之后——OAuth 流程、API 密钥、加密密码短语、自定义端点——你最不希望发生的事情就是因为磁盘故障、系统重装或设备升级而丢失这些成果。rclone 配置文件是一个单独的文本文件，编码了所有这些设置。了解它存放在哪里以及如何保护它，是每一位重度 RcloneView 用户必备的维护知识。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone 配置文件在哪里？

配置文件的位置取决于你的操作系统：

| 操作系统 | 默认位置 |
|----|----------------|
| **Windows** | `%APPDATA%\rclone\rclone.conf` |
| **macOS** | `~/.config/rclone/rclone.conf` |
| **Linux** | `~/.config/rclone/rclone.conf` |

你可以在 RcloneView 的 **终端** 中确认该位置：

```bash
rclone config file
```

这会打印出系统中实际使用的确切路径。

## 配置文件中包含什么

配置文件是一个纯文本的 INI 格式文件。每个部分代表一个远程：

```ini
[my-google-drive]
type = drive
client_id =
client_secret =
token = {"access_token":"ya29...","expiry":"2026-05-01T..."}

[s3-backup]
type = s3
provider = AWS
access_key_id = AKIA...
secret_access_key = abc123...
region = us-east-1

[encrypted-drive]
type = crypt
remote = my-google-drive:encrypted/
password = *** ENCRYPTED ***
password2 = *** ENCRYPTED ***
```

**重要提示：** OAuth 令牌（用于 Google Drive、OneDrive、Dropbox）存储在配置文件中。这些令牌会过期，并在使用过程中自动刷新。请定期备份配置文件，以捕获最新的有效令牌。

## 备份配置文件

### 手动备份

将配置文件复制到安全位置：

**Windows：**
```
copy %APPDATA%\rclone\rclone.conf C:\Backups\rclone-config-backup.conf
```

**macOS/Linux：**
```bash
cp ~/.config/rclone/rclone.conf ~/backups/rclone-config-$(date +%Y%m%d).conf
```

### 使用 RcloneView 自动备份

在 RcloneView 中设置一个任务，将配置文件本身备份到云存储：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule config file backup in RcloneView" class="img-large img-center" />

1. 创建一个新的 **复制（Copy）** 任务。
2. 源：配置文件所在位置（`~/.config/rclone/`）
3. 目标：一个云端文件夹（`s3-backup:system-configs/rclone/`）
4. 计划：每周一次，或在重大更改后执行。

**安全提示：** 配置文件包含凭据。请只将其备份到加密存储或加密云文件夹中（例如 Crypt 远程）。

## 对静态配置文件进行加密

Rclone 可以使用密码对整个配置文件进行加密。可以在 RcloneView 的终端中启用此功能：

```bash
rclone config
# Choose: s - Set configuration password
```

设置密码后，配置文件将在磁盘上被加密。每次启动 RcloneView 或运行 rclone 命令时都需要输入该密码。这样即使配置文件被窃取，凭据依然受到保护。

<img src="/support/images/en/blog/new-remote.png" alt="Set config password in RcloneView terminal" class="img-large img-center" />

## 迁移到新设备

### 方法一——直接复制

最简单的迁移方式：

1. 将 `rclone.conf` 从旧设备复制到新设备的相同路径下。
2. 在新设备上安装 RcloneView。
3. 打开 RcloneView——所有远程会立即显示出来。

对于大多数远程（S3、WebDAV、FTP 等），无需重新进行身份验证。OAuth 远程（Google Drive、OneDrive、Dropbox）将使用已保存的令牌，这些令牌在过期前均有效（通常自最后一次使用起 60-90 天内有效）。

### 方法二——重新验证 OAuth 远程

如果 OAuth 令牌已过期，请对受影响的每个远程重新授权：

1. 打开 RcloneView 中的 **远程（Remotes）**。
2. 选择该远程并选择 **编辑（Edit）**。
3. 点击 **重新授权（Re-authorize）** 以生成新的令牌。

只有 OAuth 令牌已过期的远程才需要执行此步骤。

### 方法三——使用 `--config` 标志

如果你将配置文件存放在非标准位置（例如为了可移植性放在 Dropbox 中），可以使用：

```bash
rclone --config /path/to/rclone.conf <command>
```

或者设置 `RCLONE_CONFIG` 环境变量，使其成为该设备上所有 rclone 操作的默认配置路径。

## 在 RcloneView 中查看和编辑配置

RcloneView 的远程管理界面提供了一个图形界面，用于添加和编辑远程——但对于喜欢直接访问的高级用户来说，配置文件始终是一种有效的更改方式。手动编辑配置文件后，请重启 RcloneView 以使更改生效。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Manage remotes in RcloneView" class="img-large img-center" />

## 最佳实践

| 实践 | 原因 |
|----------|-----|
| 每周备份配置文件 | OAuth 令牌会被刷新；需捕获最新的有效状态 |
| 加密备份存储位置 | 配置文件包含凭据和令牌 |
| 对敏感安装设置配置密码 | 在设备被入侵时提供额外保护 |
| 不要将配置文件提交到公开的 Git 仓库 | 否则访问密钥和令牌会被暴露 |
| 定期测试恢复流程 | 验证你的备份确实可用 |

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 RcloneView 的终端中使用 `rclone config file` **找到你的配置文件**。
3. **设置自动备份任务**，将配置文件复制到加密的云存储中。
4. 将配置密码（如果已设置）**保存在密码管理器中**——丢失它意味着失去对配置文件的访问权限。

你的 rclone 配置文件是 RcloneView 设置中最重要的单个文件。请务必妥善保护它。

---

**相关指南：**

- [使用 Crypt 远程加密云端备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [RcloneView 终端：图形界面内的 CLI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [使用应用锁保护 RcloneView](https://rcloneview.com/support/blog/secure-rcloneview-app-lock-password)

<CloudSupportGrid />
