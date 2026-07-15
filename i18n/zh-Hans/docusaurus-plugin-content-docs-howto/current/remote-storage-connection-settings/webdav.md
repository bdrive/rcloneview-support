---
sidebar_position: 4
description: 了解如何在 RcloneView 中将 WebDAV 配置为远程存储,以进行文件同步和访问。
keywords:
  - rcloneview
  - webdav
  - 远程存储
  - 云存储
  - 同步
  - webdav configuration
  - rclone
tags:
  - webdav
  - Remote-Storage
  - remote-connection
date: 2025-06-20
author: Jay
---
# WebDAV

## 如何使用 RcloneView 添加 WebDAV

### 第 1 步:打开新建远程配置窗口

- 从顶部菜单的 **`Remote`** 下点击 **`+ New Remote`**。
- 或者,在资源管理器窗格中点击 **`+`** 按钮,选择 **`New Remote`** 以开始远程配置。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 第 2 步:添加 WebDAV 远程

#### 在 **`Provider`** 选项卡中:
1. 搜索 **`webdav`**。
2. 从列表中选择 **`WebDAV`**。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-provider.png" alt="add webdav remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-options.png" alt="add webdav remote options" class="img-medium img-center" />
</div>

#### 在 **`Options`** 选项卡中:
3. 输入远程 URL
4. 输入您的登录用户名
5. 输入您的密码

<details>
<summary>选项详情</summary>

选项详情

| 字段          | 说明                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`          | 远程 WebDAV URL(例如 https://webdav.example.com/) 您也可以指定自定义端口号(例如 https://webdav.example.com:5020)                                                                          |
| `vendor`       | (可选)留空或填写与 WebDAV 兼容的服务提供商(例如 fastmail、nextcloud、owncloud、sharepoint、sharepoint-ntlm、rclone) 完整列表参见:[WebDAV Provider Notes](https://rclone.org/webdav/#provider-notes) |
| `user`         | 您的登录用户名                                                                                                                                                                                                     |
| `pass`         | 您的登录密码(已隐藏)                                                                                                                                                                                               |
| `bearer_token` | (可选)通常留空                                                                                                                                                                                              |



</details>
#### 在 **`Name`** 选项卡中:
6. 为此远程输入一个唯一且易于识别的名称(例如 `myWebDAV`)。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-name.png" alt="add webdav remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-save.png" alt="add webdav remote save" class="img-medium img-center" />
</div>
#### 在 **`Save`** 选项卡中:
5. 点击 **`Save`** 完成远程设置。

### 第 3 步:在 RcloneView 中验证已添加的 WebDAV 远程

1. 从顶部菜单中,点击 **`Remote`** 选项卡下的 **`Remote Manager`**。
2. 确认您的 **WebDAV 远程** 出现在 **Remote Manager** 窗口中。

✅ **完成!** 您的 WebDAV 远程现已成功配置,可以在 RcloneView 中使用了。

