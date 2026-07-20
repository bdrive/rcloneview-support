---
sidebar_position: 1
description: 了解如何在 Windows 上使用 CLI 在 Rclone 中将 iCloud Drive 配置为远程,包括双因素身份验证步骤以及与 RcloneView 的集成。
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - icloud
  - cli
  - icloud drive
  - rclone cli
  - windows
  - 2fa
  - remote storage
  - cloud storage
  - Remote Connection
  - apple id
tags:
  - cli
  - icloud
  - windows
  - 2fa
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-05-21
author: Jay
---
# iCloud Drive

目前只能通过 Rclone CLI 添加 iCloud 远程。

:::info
目前,像 iCloud 这样支持交互式双因素身份验证 (2FA) 的远程,只能通过 CLI 进行配置。通过 UI 配置这些远程的支持将在未来的版本中实现。
:::

## 如何使用 Rclone CLI 添加 iCloud Drive(Windows)

#### 第 1 步:打开命令提示符

- 按 Win + R,输入 cmd,然后按 Enter。

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />

#### 第 2 步:启动 Rclone 配置

打开命令提示符并启动 Rclone 配置流程:

```windows
rclone config
```

你将看到一个菜单:

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

输入 n 并按 Enter 以创建新远程。

#### 第 3 步:设置 iCloud Drive 远程

按照提示操作:

- **名称**:为新远程指定一个名称(例如 icloud)。

```windows
Enter name for new remote.
name> Myicloud
```

- **存储**:从存储选项列表中输入 `iclouddrive` 或其对应编号(通常为 `59`)以选择 iCloud Drive。如果列表中没有,请确保你使用的是 Rclone v1.69 或更高版本。

```
Storage> iclouddrive
```

- **Apple ID**:输入你的 Apple ID 邮箱地址。

```
apple_id> your_email@icloud.com
```

- **密码**:选择手动输入密码。

```
y) Yes, type in my own password
g) Generate random password
y/g> y
```

- 在提示时输入你的 Apple ID 密码。

```
Enter the password
password:
Confirm the password
password:
```

- **高级配置**:除非你有特殊需求,否则可以跳过高级配置。

```
Edit advanced config? (y/n)
y/n> n
```

- **双因素身份验证 (2FA)**:如果你的 Apple ID 已启用 2FA(推荐启用),系统会提示你输入发送到受信任设备的 2FA 验证码。

```
Two-factor authentication: please enter your 2FA code
Enter a value.
config_2fa> 123456
```

- **确认配置**:检查设置并确认。

```
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

你的 iCloud Drive 远程现已配置完成。

你可以按照下面的方式验证 iCloud Drive 是否已成功添加。输入 q 退出 rclone config。

```
Current remotes:

Name                 Type
====                 ====
Myicloud             iclouddrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```
#### 第 4 步:测试连接

要验证配置是否成功,请列出你的 iCloud Drive 中的内容:

```
rclone lsd Myicloud:
```

你应该会看到 iCloud Drive 中的目录列表。

#### 第 5 步:在 RcloneView 中验证已添加的 iCloud Drive

启动 **RcloneView**。

1. 在菜单栏中,点击 **Remote** 选项卡下的 **Remote Manager**。
2. 验证你的 **iCloud Drive** 是否出现在 **Remote Manager** 窗口中。

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step2.png" alt="add icloud drive verify step2" class="img-medium img-center" />
</div>

:::danger 重要注意事项
- **高级数据保护**:如果你的 Apple ID 已启用 **高级数据保护 (ADP)**,Rclone 将无法访问你的 iCloud Drive。要在 iCloud Drive 中使用 Rclone,你必须禁用 ADP。你可以在 iPhone 上通过以下路径进行操作:

```
Settings > [Your Name] > iCloud > Advanced Data Protection
```

- 确保"高级数据保护"处于**关闭**状态。此外,还必须**启用**"在网页上访问 iCloud 数据"。

- **会话有效期**:配置过程中获取的信任令牌有效期为 **30 天**。此期限过后,你需要使用以下命令重新进行身份验证:

```
rclone reconnect Myicloud:
```

- **应用专用密码**:目前,Rclone **不**支持 iCloud Drive 使用应用专用密码。你必须在设置期间使用常规 Apple ID 密码并配合 2FA。

有关更多详细信息,请参阅 Rclone 官方文档中关于 [iCloud Drive](https://rclone.org/iclouddrive/) 的说明。
:::




