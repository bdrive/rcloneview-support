---
sidebar_position: 2
description: 了解如何使用 OAuth 或基于浏览器的方式在 RcloneView 中配置云远程。
keywords:
  - rcloneview
  - SSO
  - OAuth
  - Dropbox
  - Onedrive
  - Box
  - pCloud
  - Yandex
  - premiumize
  - put
  - zoho
  - google cloud storage
  - citrix
  - sharefile
  - hidrive
  - rclone
  - Remote Connection
tags:
  - SSO
  - OAuth
  - dropbox
  - onedrive
  - box
  - pcloud
  - yandex
  - premiumizw
  - PLUS-Feature
  - zoho
  - google-cloud-storage
  - citrix
  - sharefile
  - hidrive
date: 2025-06-23
author: Jay
---
# 自动登录（OneDrive、Box 等）

RcloneView 让您可以通过简单的基于浏览器的登录方式（OAuth）轻松连接到 **Google Drive、OneDrive、Dropbox、Box** 等主流云服务商。

:::important 无需其他选项
**✅ 对于大多数服务商，您只需输入一个远程名称即可。**  
**✅ 您可以跳过“选项”标签页，直接进行浏览器登录。**
:::

当您点击**保存**时，RcloneView 会打开一个浏览器窗口，您可以在其中登录您的云账户。完成登录后，您的远程将被自动添加并可立即使用——无需手动设置。

## 快速设置指南

1. 启动 **RcloneView**，然后在顶部菜单或资源管理器面板中点击 **`+ 新建远程`**。
2. 在**服务商**标签页中，选择您的云服务（例如 Google Drive、OneDrive）。
3. 跳过**选项**标签页（除非系统提示需要额外信息）。请参阅下表以获取指导。
4. 前往**保存**步骤并点击**保存**。
5. 将会打开一个浏览器窗口——登录您的云账户。
6. 登录后，远程将自动添加完成。

👉 想要查看详细示例？请参阅：[如何连接 Google Drive](../#step-2-adding-remote-storage-google-drive-example)
## 支持的云服务商及设置要求

| 云服务商                    | 所需选项                                                           |
| --------------------------- | ---------------------------------------------------------------- |
| Google Drive                | 无                                                             |
| Google Drive Shared with Me | **高级选项：**<br />`shared_with_me` = **true**           |
| Google Drive Computers      | **高级选项：**<br />`root_folder_id` = `<您的文件夹 ID>` |
| Dropbox                     | 无                                                             |
| Dropbox for Business        | **高级选项：**<br />`dropbox_business` = **true**         |
| Microsoft OneDrive          | 无                                                             |
| Box                         | 无                                                             |
| Box for Business            | `box_sub_type = enterprise`                                      |
| pCloud                      | 无                                                             |
| Yandex Disk                 | 无                                                             |
| premiumize.me               | 无                                                             |
| put.io                      | 无                                                             |
| Zoho WorkDrive              | 需要 `Region`                                                |
| Google Cloud Storage        | 需要 `Project Number`                                         |
| Citrix ShareFile            | 需要 `Root Folder ID`                                             |
| HiDrive                     | 无                                                             |

## 示例：Google Drive Shared with Me（需要高级选项）

**Google Drive Shared with Me** 允许用户访问其他用户明确共享给他们的文件和文件夹，而无需将这些内容添加到自己的云盘中。这在跨组织或跨团队协作而不需要重复存储数据时非常有用。

RcloneView 通过在远程配置期间设置一个高级选项来支持此功能。

在**选项**标签页中：

1. 向下滚动，点击屏幕底部的 **`显示高级选项`**。
2. 找到 `shared_with_me` 字段，并在下拉菜单中将其设置为 **`true`**。
3. 除非需要自定义配置，否则保留其他选项为默认值。
4. 点击**下一步**，然后在系统提示时在浏览器中完成登录。

:::tip
`shared_with_me = true` 设置会指示 Rclone 仅显示与您的 Google 账户共享的文件和文件夹。
:::

<img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-shared-with-me-options.png" alt="google drive shared with me options" class="img-medium img-center" />
## 示例：Google Drive Computers（需要高级选项）

**Google Drive “Computers”** 是一项功能，可将您设备（如笔记本电脑或台式机）上的本地文件同步到云端，并显示在 Google Drive 中一个特殊的“Computers”区域下。每台电脑都会显示为一个单独的文件夹，需要通过唯一的 `root_folder_id` 才能通过 Rclone 访问。

🔗 了解更多关于此功能的信息：[在 Google Drive 中访问已同步的电脑](https://support.google.com/drive/answer/3096479)

### 如何在 RcloneView 中连接 Google Drive Computers

1. 打开 [drive.google.com](https://drive.google.com/)，在 **Computers** 部分下点击您的目标电脑（例如 **My Laptop**）。
2. 从网址中复制 **Computer ID**。  
   例如，在  
   `https://drive.google.com/drive/folders/1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ`  
   中，ID 是 `folders/` 之后的字符串：  
   `1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ  
3. 打开 **RcloneView**，在**远程**菜单下点击 **`+ 新建远程`**，选择 **Google Drive**，然后进入**选项**标签页。
4. 向下滚动并点击 **`显示高级选项`**。
5. 将复制的 Computer ID 粘贴到 `root_folder_id` 字段中。
6. 点击**下一步**并按照 OAuth 登录流程完成设置。

<div class="img-grid-3">
  <img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-computers-id-copy.png" alt="google drive computers id copy" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computer-remote-options.png" alt="add google drive computer remote options" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computers-options-root-folder-id.png" alt="add google drive computers options root folder id" class="img-medium img-center" />
</div>

✅ 设置完成后，您可以直接在 RcloneView 中浏览和访问设备同步的 Google Drive 文件夹。

## 示例：连接 Box for Business

在**选项**标签页中：
- 为 `box_sub_type` 选择 **enterprise**
- 使用默认设置继续
- 系统提示时，在浏览器中通过您组织的 SSO 门户登录


✅ 登录成功后，远程将出现在 RcloneView 中并可立即使用。

