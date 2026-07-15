---
sidebar_position: 11
description: 了解如何在无法使用网页浏览器的情况下，为运行在 AWS EC2 上的外部 Rclone 添加 Google Drive 远程，方法是使用本地生成的 OAuth 令牌。
keywords:
  - rcloneview
  - rclone
  - google drive
  - OAuth
  - token
  - ec2
  - external rclone
  - no browser login
  - headless
  - cloud storage
  - Remote Connection
  - remote storage
tags:
  - Remote-Storage
  - google-drive
  - external-rclone
  - aws-ec2
  - remote-connection
  - cloud-storage
date: 2025-07-07
author: Jay
---
# 在 AWS EC2 上为外部 Rclone 添加 Google Drive（无需网页浏览器）

本指南将说明如何在没有网页浏览器的系统（例如 **AWS EC2 Ubuntu 服务器**）上，为**外部 Rclone 实例**添加 **Google Drive 远程**。

在此类环境中，无法通过浏览器完成标准的 OAuth 登录流程。因此，你可以使用本地安装的 RcloneView 来获取所需的 **OAuth 令牌**，然后在运行于 EC2 上的外部 Rclone 中重复使用该令牌。

:::info 在 EC2 上运行 Rclone 守护进程
有关如何在 EC2 实例上安装和运行 Rclone 的说明，

请参见：👉 [如何在 AWS EC2 上运行 Rclone 引擎](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

:::

整体流程：在有浏览器的机器上生成 Google Drive OAuth 令牌，然后通过 RcloneView 将该令牌粘贴到运行在 EC2 上的外部 Rclone 中。

---
## ✅ 步骤 1：生成 Google Drive 令牌（任选一种方法）

**方法 A：`rclone authorize "drive"`（最快）**

1. 在拥有浏览器且 rclone 版本相同的机器上运行：
   ```bash
   rclone authorize "drive"
   ```
2. 在浏览器中完成 Google 登录/授权。
3. 复制打印出的 JSON 令牌代码块（保留完整 JSON）。你将在步骤 3 中将其粘贴到 EC2 中。

**方法 B：使用 RcloneView 内嵌远程并复制其令牌**

1. 在你的本地电脑上，使用内嵌 Rclone（常规浏览器 OAuth）添加 Google Drive。  
   👉 [快速指南：添加 Google Drive 远程](../#step-2-adding-remote-storage-google-drive-example)
2. 打开**远程管理器**，编辑 Google Drive 远程，点击**显示高级选项**，然后复制**令牌（Token）**字段（JSON）。

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-from-embedded-rclone.png" alt="copy google oauth token from embedded rclone" class="img-medium img-center" />

👉 了解更多关于编辑远程的内容：[编辑远程设置](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ✅ 步骤 2：连接到外部 Rclone（EC2）

在 RcloneView 中打开一个**`新窗口`**，或使用当前会话连接到你托管在 EC2 上的 Rclone：

- 打开 `设置` -> **`连接管理器`**，创建一个连接到你 EC2 托管 Rclone 的新连接，或者连接到已配置的现有连接。

👉 了解更多：[连接外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 了解更多：[新窗口功能](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ✅ 步骤 3：为外部 Rclone 添加 Google Drive 远程（粘贴你的令牌）

1. 在连接到 EC2 的窗口中，前往 `Remote` 菜单并选择 **`+ New Remote`**。
2. 选择 **Google Drive** 作为提供商。
3. 输入 **`Remote Name`**，然后点击 **`Show advanced options`**。
4. 将之前复制的 **OAuth 令牌** 粘贴到 **`Token`** 字段中。
5. 点击 **`Add Remote`** 按钮，像往常一样完成设置。


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-to-external-rclone.png" alt="copy google oauth token to external rclone" class="img-medium img-center" />

:::info **忽略此错误弹窗**
**如果 RcloneView 显示如下类似的错误消息，你可以放心忽略它。**
在大多数情况下，尽管出现此消息，令牌配置实际上已成功完成。
关闭对话框后，你应该能够正常访问 Google Drive。  
这是一个已知的 UI 问题，我们将在下一个版本中改进用户体验。
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
配置完成后，即使没有浏览器支持，你基于 EC2 的 Rclone 也可以访问 Google Drive。你可以像往常一样使用 RcloneView 管理、同步和传输文件。

---

## 🔗 相关指南

- [如何在 AWS EC2 上运行 Rclone 引擎](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)
- [编辑远程设置](/howto/rcloneview-basic/remote-manager#edit-remote-settings)
- [连接外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [多窗口用法](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)
