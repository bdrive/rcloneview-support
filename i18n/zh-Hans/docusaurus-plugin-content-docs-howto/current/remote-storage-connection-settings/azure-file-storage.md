---
sidebar_position: 7
description: 了解如何在 RcloneView 中添加 Azure File Storage。
keywords:
  - rcloneview
  - azure file storage
  - azure files
  - smb
  - cloud storage
  - remote storage
  - Remote Connection
  - rclone
tags:
  - azure
  - azure-files
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-12-03
author: tayson
---

# Azure File Storage

## 如何使用 RcloneView 添加 Azure File Storage

Azure File Storage 使用 SMB，连接时需要三项信息：

- **Azure Storage Account Name**
- **Storage Account Shared Key**
- **Azure File Share Name**

你可以在 **Azure Portal** 中获取这三项信息（Storage account > **Access keys** 获取共享密钥，**File shares** 获取共享名称）。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="get azure storage account name and account shared key" class="img-large img-center" />

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="get azure storage share name" class="img-large img-center" />

### 步骤 1：打开新建远程窗口

- 点击顶部菜单 **`Remote`** 下的 **`+ New Remote`**。
- 或点击资源管理器面板中的 **`+`** 按钮，然后选择 **`New Remote`**。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-large img-center" />
</div>

### 步骤 2：选择 Azure File Storage 作为存储提供商

1. 在 **Search Provider** 栏中输入 `Azure File Storage`。
2. 从列表中点击 **Azure File Storage** 选项。

随后你将进入 Azure File Storage 的配置界面。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="select azure file storage to add remote" class="img-large img-center" />

### 步骤 3：配置你的 Azure File Storage 远程

在表单中填写所需信息：

- **Remote name**：为远程设置一个易于识别的名称（例如 `MyAzureFileStorage`）
- **account**：Azure Storage **Account Name**。设置为正在使用的 Azure Storage Account Name。
- **key**：**Storage Account Shared Key**
- **share_name**：**Azure Files Share Name**。此项为必填，是要访问的共享的名称。

输入所有信息后，点击 **`Add Remote`** 完成设置。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="remote configure azure file storage" class="img-large img-center" />

### 步骤 4：确认已添加的远程

添加完成后，你的新 Azure File Storage 远程（例如 `MyAzure`）将出现在 **Remote Manager** 列表中。

现在你可以：

- 点击 **`Open`** 浏览文件。
- 在同步、复制或挂载任务中使用它。
- 随时管理或删除该远程。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="remote manager azure file storage view" class="img-large img-center" />

✅ **完成！** 你已成功将 **Azure File Storage** 存储连接到 **RcloneView**。

**完成！** 现在你可以直接在 RcloneView 中浏览和传输 Azure File Share 中的文件。
