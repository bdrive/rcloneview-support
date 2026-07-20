---
sidebar_position: 6
description: 了解如何在 RcloneView 中添加 Gofile 存储。
keywords:
  - rcloneview
  - rclone
  - gofile
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - gofile
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-05-27
author: Jay
---
# Gofile

## 如何使用 RcloneView 添加 Gofile(Windows)


### 步骤 1:打开新建远程配置窗口

- 点击顶部菜单 **`Remote`** 下的 **`+ New Remote`**。
- 或者,点击资源管理器窗格中的 **`+`** 按钮,选择 **`New Remote`** 开始远程配置。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
### 步骤 2:添加 Gofile 远程

#### 在 **`Provider`** 标签页中:

1. 搜索 **`gofile`**。
2. 从列表中选择 **`Gofile`**。

#### 在 **`Options`** 标签页中:

3. 输入您的 **Access Token**。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-provider.png" alt="add go file provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-option.png" alt="add gofile remote option" class="img-medium img-center" />
</div>
:::info 如何获取 Access Token
 - 访问 [https://gofile.io/myprofile](https://gofile.io/myprofile)
 - 登录您的 Gofile 账户。
- 向下滚动找到 **`Account API Token`** 并复制它。
:::

#### 在 **`Name`** 标签页中:

4. 为此远程分配一个 **`Remote name`**(例如,`myGofile`)。

#### 在 **`Save`** 标签页中:

5. 点击 **`Save`** 完成添加远程。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-name.png" alt="add go file remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-save.png" alt="add gofile remote save" class="img-medium img-center" />
</div>


### 步骤 3:在 RcloneView 中验证已添加的 Gofile 远程

启动 **RcloneView**。

1. 在菜单栏中,点击 **`Remote`** 标签页下的 **`Remote Manager`**。
2. 确认您的 **`Gofile`** 远程出现在 **`Remote Manager`** 窗口中。

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />
</div>


✅ **完成!** 您的 **`Gofile`** 远程现已成功配置,可以在 **RcloneView** 中使用了。


## 🔗 更多资源

- 🔐 获取您的令牌:[https://gofile.io/myprofile](https://gofile.io/myprofile)
