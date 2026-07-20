---
sidebar_position: 10
description: 了解如何在 RcloneView 中添加 Proton Drive 存储。
keywords:
  - rcloneview
  - rclone
  - proton
  - protondrive
  - cloud storage
  - remote storage
  - Remote Connection
tags:
  - proton
  - protondrive
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-21
author: Jay
---

# Proton Drive

## 如何使用 RcloneView 添加 Proton Drive（Windows）

### 步骤 1：打开远程管理器

- 点击**远程管理器（Remote Manager）**右上角的 **`+ New Remote`**。
- 或者，点击资源管理器面板中的 **`+`** 按钮，然后选择 **`New Remote`** 开始远程配置。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
---

### 步骤 2：选择 Proton Drive 作为存储提供商

1. 在**搜索提供商（Search Provider）**栏中输入 `proton`。
2. 从列表中选择 **Proton Drive**。

随后你将进入 Proton Drive 的配置界面。

<img src="/support/images/en/howto/remote-storage-connection-settings/select-proton-drive-remote.png" alt="select proton drive remote" class="img-medium img-center" />

### 步骤 3：配置你的 Proton Drive 远程

在配置表单中填写所需字段：

- **Remote name（远程名称）**：为你的远程指定一个易识别的名称（例如 `MyProtonDrive`）
- **username（用户名）**：你的 Proton 邮箱地址
- **password（密码）**：你的 Proton 账户密码
- **2fa（可选）**：你当前的 2FA 验证码（仅在启用 2FA 时需要）

填写完所有必要信息后，点击 **`Add Remote`** 完成设置。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-proton.png" alt="remote configure proton" class="img-medium img-center" />

### 步骤 4：确认已添加的远程

添加完成后，你的 Proton Drive 远程（例如 `MyProtonDrive`）将出现在**远程管理器**列表中。

现在你可以：
- 点击 **`Open`** 浏览你的 Proton Drive 内容。
- 在传输、挂载或计划任务中使用它。
- 随时编辑或删除该远程配置。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-proton-view.png" alt="remote manager proton view" class="img-medium img-center" />


✅ **完成！**你的 **Proton Drive** 现已成功连接到 **RcloneView**。


## 🔗 更多资源

- 🌐 [Proton Drive 登录](https://drive.proton.me/)
- 🔐 [管理你的 Proton 账户](https://account.proton.me/)
- 🛡️ [Proton 2FA 设置指南](https://proton.me/support/two-factor-authentication)
