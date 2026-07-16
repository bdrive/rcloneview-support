---
slug: remote-management-add-edit-delete-rcloneview
title: "远程管理指南——在 RcloneView 中添加、编辑和整理云连接"
authors:
  - tayson
description: "管理 70 多个云服务商，首先要有条理清晰的远程配置。了解如何在 RcloneView 的远程管理器中添加、配置、编辑和整理您的云连接。"
keywords:
  - rcloneview 远程管理器
  - 添加云远程 rcloneview
  - 管理云连接
  - rclone 远程设置
  - 云连接管理器
  - rcloneview 配置远程
  - 添加云账户 rcloneview
  - rcloneview 设置指南
  - 云远程配置
  - 整理云账户
tags:
  - RcloneView
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 远程管理指南——在 RcloneView 中添加、编辑和整理云连接

> 添加第一个远程只需 2 分钟，但到第 15 个时就需要一套体系了。以下是随着多云环境不断扩展，如何高效管理所有云连接的方法。

在 RcloneView 中，每个云服务商都以“远程”的形式存在——一个带有凭据和配置信息的命名连接。当您只有两三个远程时，管理起来很简单。但随着添加的服务商越来越多（许多用户最终会拥有 10 个以上），保持有条理的组织结构就变得至关重要。本指南将带您了解从添加第一个远程到管理复杂多云环境的全部内容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 添加新远程

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote" class="img-large img-center" />

远程管理器会引导您完成 70 多种服务商的添加流程。每种服务商类型的配置字段各不相同——Google Drive 使用 OAuth，S3 使用访问密钥，WebDAV 使用 URL 和凭据。

### 常见连接类型

| 连接类型 | 示例 | 认证方式 |
|----------------|---------|-------------|
| OAuth | Google Drive、OneDrive、Dropbox | 浏览器登录 |
| 访问密钥 | S3、B2、Wasabi、R2 | 密钥 + 密钥密文 |
| 用户名/密码 | WebDAV、FTP、SFTP | 凭据 |
| 令牌 | Box、Mega | API 令牌 |

## 命名规范

良好的命名习惯能省去后续的困惑。可以考虑以下几种模式：

- **按服务商命名**：`gdrive-personal`、`gdrive-work`、`s3-backup`
- **按用途命名**：`backup-primary`、`backup-secondary`、`archive`
- **按团队命名**：`marketing-drive`、`engineering-s3`、`finance-onedrive`

## 编辑远程配置

需要更新凭据、更改端点或修改设置？无需重新创建远程，直接通过远程管理器编辑即可。

常见的编辑原因：

- **OAuth 令牌过期**——重新授权，且不会丢失任务配置
- **访问密钥变更**——在轮换后更新 S3 凭据
- **更换端点**——切换 S3 区域或自定义端点

## 高级配置

### Crypt 远程

在现有远程之上创建加密封装层。Crypt 远程会在文件名和内容到达云端之前对其进行加密：

### Union/Combine 远程

将多个远程合并为一个虚拟视图。适用于合并多个服务商的免费存储额度。

## 整理您的远程

随着远程数量的增加：

- **使用一致的命名方式**，让远程能够按逻辑顺序排列
- **记录您的配置**——哪个远程备份到哪个位置
- **清理不再使用的远程**——删除旧的试用账户
- **定期测试连接**——过期的令牌会导致静默失败

## 在浏览器中使用远程

配置完成后，远程会显示在双栏浏览器中。您可以在源窗格或目标窗格中选择任意远程：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse remotes in explorer" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加您的第一个远程**——按照向导完成设置。
3. **清晰命名**，方便日后查找。
4. 根据需要**添加更多远程**。
5. 使用一致的命名方式**保持整洁有序**。

良好的远程管理是良好云管理的基础。

---

**相关指南：**

- [连接管理器指南](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [虚拟远程：Combine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
