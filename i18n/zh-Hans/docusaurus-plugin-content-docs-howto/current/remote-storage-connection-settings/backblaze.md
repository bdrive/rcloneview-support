---
sidebar_position: 8
description: 了解如何在 RcloneView 中添加 Backblaze B2 存储。
keywords:
  - rcloneview
  - rclone
  - backblaze
  - b2
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - backblaze
  - b2
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-20
author: Jay
---

# Backblaze B2

## 如何使用 RcloneView 添加 Backblaze B2(Windows)

### 步骤 1:打开远程管理器

- 从顶部菜单的 **`Remote`** 下点击 **`+ New Remote`**。
- 或者,在资源管理器窗格中点击 **`+`** 按钮,选择 **`New Remote`** 以开始远程配置。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 步骤 2:选择 Backblaze B2 作为存储提供商

1. 在 **Search Provider** 搜索栏中输入 `b2`。
2. 点击出现的 **Backblaze B2** 选项。

<img src="/support/images/en/howto/remote-storage-connection-settings/add-backblaze-b2-remote.png" alt="add backblaze b2 remote" class="img-medium img-center" />

随后你将进入 Backblaze B2 的配置界面。

### 步骤 3:配置你的 Backblaze B2 远程

在设置表单中,提供以下必填信息:

- **Remote name**:为你的远程指定一个易于识别的名称(例如 `MyB2Master`)。
- **account**:你的 Backblaze **Application Key ID**。
- **key**:你的 Backblaze **Application Key**。

输入所需信息后,点击 **`Add Remote`** 保存连接。
<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-backblaze-b2.png" alt="remote configure backblaze b2" class="img-medium img-center" />

:::info 在哪里获取这些凭据?

- 登录你的 [Backblaze B2 账户](https://secure.backblaze.com/b2_buckets.htm)。
- 进入 **App Keys**。
- 创建或复制一个已有的密钥对:
  - 将 **Key ID** 用作 `account`
  - 将 **Application Key** 用作 `key`
:::


### 步骤 4:确认已添加的远程

添加完成后,你的新 Backblaze B2 远程(例如 `MyB2Master`)将出现在 **Remote Manager** 列表中。

现在你可以:
- 点击 **`Open`** 浏览该远程。
- 在复制/同步/挂载操作中使用它。
- 随时管理或删除它。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-backblaze-view.png" alt="remote manager backblaze view" class="img-medium img-center" />

✅ **完成!** 你已成功将 **Backblaze B2** 存储连接到 **RcloneView**。


## 🔗 其他资源

- 🔐 管理你的密钥:[https://secure.backblaze.com/b2_buckets.htm](https://secure.backblaze.com/b2_buckets.htm)
- 📘 应用密钥文档:[https://www.backblaze.com/b2/docs/application_keys.html](https://www.backblaze.com/b2/docs/application_keys.html)

