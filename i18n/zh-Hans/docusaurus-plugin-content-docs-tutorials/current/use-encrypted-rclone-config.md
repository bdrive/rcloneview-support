---
sidebar_position: 14
description: "通过在设置中设置配置密码，加密您的 rclone 配置文件并在 RcloneView 中使用它。"
keywords:
  - rcloneview
  - rclone config
  - encrypted config
  - config password
  - security
  - rclone.conf
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - rclone config
date: 2026-02-12
author: ysh
---

# 使用加密的 Rclone 配置文件

Rclone 可以加密其配置文件（`rclone.conf`），以避免远程凭据以明文形式存储。RcloneView 完全支持加密配置文件——您只需要告诉它密码即可。

本教程涵盖以下内容：

- 为什么要加密您的 rclone 配置
- 如何使用 `rclone config` 加密您现有的配置
- 如何在 RcloneView 中输入配置密码

---

## 为什么要加密您的 rclone 配置？

您的 `rclone.conf` 文件包含您已配置的每个远程的凭据（令牌、密码、API 密钥）。默认情况下，这些内容以明文形式存储。加密配置文件可以在有人获取您的设备或备份访问权限时保护这些凭据。

- 防止明文凭据泄露。
- 为共享或多用户系统增加一层安全保障。
- 兼容所有 rclone 远程和功能——除了文件在静止状态下被加密外，其他一切均不受影响。

---

## 步骤 1：加密您的 rclone 配置

打开终端并运行：

```bash
rclone config
```

您将看到一个选项菜单。选择 **`s`** 以 **设置配置密码**：

```
s) Set configuration password
q) Quit config
s/q> s
```

在提示时输入您想要的密码，然后进行确认。Rclone 将就地加密现有的配置文件。

:::tip
如果您已经配置了远程，它们将继续正常工作。Rclone 会使用您的新密码重新加密整个文件。
:::

:::caution
请记住此密码。如果您丢失了密码，您将需要从头重新配置您的远程。
:::

---

## 步骤 2：在 RcloneView 中输入配置密码

1. 打开顶部菜单中的 **设置**。
2. 进入 **Embedded Rclone** 选项卡。
3. 向下滚动到 **高级选项**。
4. 在 **配置密码** 字段中，输入您在步骤 1 中设置的相同密码。
5. 点击 **重启 Embedded Rclone**。

<img src="/support/images/en/tutorials/encrypted-config/settings-config-password.png" class="img-large img-center" alt="Config Password field in Embedded Rclone settings" />

就是这样——RcloneView 将无缝解密并使用您的加密配置。您的远程将照常显示并正常工作。

---

## 总结

| Item | Description |
| --- | --- |
| 功能 | 在 RcloneView 中使用加密的 rclone 配置文件 |
| 加密 | 运行 `rclone config` → `s) Set configuration password` |
| RcloneView 设置 | 设置 → Embedded Rclone → 高级选项 → 配置密码 |
| 应用 | 输入密码后点击 **重启 Embedded Rclone** |
| 最适合 | 保护共享或敏感系统上的凭据 |
