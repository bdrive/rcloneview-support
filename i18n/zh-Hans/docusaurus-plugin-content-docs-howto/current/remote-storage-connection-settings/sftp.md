---
sidebar_position: 5
description: 了解如何在 RcloneView 中添加 SFTP 远程
keywords:
  - rcloneview
  - SFTP
  - remote storage
  - SSH
  - Remote Connection
  - rclone
tags:
  - sftp
  - Remote-Storage
  - ssh
  - remote-connection
date: 2025-06-23
author: Jay
---
# SFTP

## 如何使用 RcloneView 添加 SFTP

### 第一步：打开新建远程配置窗口

- 在顶部菜单的 **`Remote`** 下点击 **`+ New Remote`**。
- 或者，点击资源管理器面板中的 **`+`** 按钮并选择 **`New Remote`** 以开始远程配置。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 第二步：添加 SFTP 远程

#### 在 **`Provider`** 选项卡中：
1. 在搜索栏中输入 **`sftp`**。  
2. 从列表中选择 **`sftp (SSH/SFTP)`**。  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-provider.png" alt="add sftp remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-options.png" alt="add sftp remote options" class="img-medium img-center" />
</div>
#### 在 **`Options`** 选项卡中：
3. 输入 **主机**（例如 `myserver.example.com` 或 `192.168.1.100`）  
4. 输入 **用户名**  
5. 输入 **端口号**（默认值为 `22`）  
6. 输入 **密码**  


#### 在 **`Name`** 选项卡中：
7. 输入 **远程名称**（例如 `MySFTPServer`）  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-name.png" alt="add sftp remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-save.png" alt="add sftp remote save" class="img-medium img-center" />
</div>

#### 在 **`Save`** 选项卡中：
8. 点击 **`Save`** 完成设置。

### 第三步：在 RcloneView 中验证已添加的 SFTP 远程

1. 进入 **`Remote > Remote Manager`**
2. 确认新添加的 **SFTP 远程** 出现在列表中。

✅ **完成！** 您的 SFTP 远程现已成功配置，可以在 RcloneView 中使用了。

