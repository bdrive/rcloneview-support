---
sidebar_position: 3
description: "如何获取 Cloudflare R2 凭据和终端节点"
keywords:
  - rcloneview
  - cloud
  - rclone
  - cloudflare r2
  - r2 endpoint
  - access key id
  - secret access key
  - cloudflare r2 rclone
  - cloudflare s3 api
  - connect r2 to rcloneview
tags:
  - RcloneView
  - Cloud
  - cloud-storage
  - credentials
  - configuration
  - access-key-id
  - secret-access-key
  - secret-key-id
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
# 如何获取 Cloudflare R2 凭据和终端节点

要将 **Cloudflare R2** 连接到 Rclone 或 **RcloneView**，你需要三项关键信息：

- ✅ Access Key ID  
- ✅ Secret Access Key  
- ✅ R2 S3 兼容终端节点 URL  

本指南将引导你从 Cloudflare 控制台获取这些信息。

---

## 🧰 前提条件

开始之前：

- 你必须拥有已启用 **R2 Object Storage** 的 Cloudflare 账户。
- 你需要能够访问 [Cloudflare Dashboard](https://dash.cloudflare.com)。
- 具备云存储相关基础知识会有所帮助。

---

## 📦 步骤 1：创建 R2 存储桶（如果尚未创建）

1. 登录你的 [Cloudflare Dashboard](https://dash.cloudflare.com)。
2. 在左侧边栏中，前往 **R2 → Object Storage**。
3. 点击 **Create bucket**。
4. 为你的存储桶输入一个唯一名称。
5. 选择一个位置（例如 **Automatic**，或类似 `westerneurope` 的区域）。
6. 点击 **Create Bucket**。

此存储桶将作为使用 RcloneView 传输文件的存储位置。

---

## 🔐 步骤 2：生成 API 凭据

要对 R2 进行身份验证，你需要创建能够提供访问权限的 API 令牌。

### ➕ 如何创建 Access Key 和 Secret Key：

1. 在 Cloudflare 控制台中前往 **Storage & databases -> R2 Object storage → Overview**。
2. 在 **Account Details** 部分中，点击 **API Tokens** 旁边的 **Manage** 按钮。

   <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare manage r2 api token" class="img-medium img-center" />
   
3. 点击 **Create API Token**。选择适合你使用场景的令牌类型（Account 或 User）。

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare create user api token" class="img-medium img-center" />

3. 为令牌命名（例如 `Rclone Access`）。
4. 选择权限：
   - `Admin Read & Write`（完全访问权限）  
	❗其他权限可能无法访问存储桶。
1. 选择应用范围：
   - 所有存储桶
   - 仅特定存储桶
7. 可选择设置过期时间（或保持默认的 "Forever"）。
8. 点击 **Create API Token**。

令牌创建完成后，Cloudflare 会向你展示：

- **Access Key ID**
- **Secret Access Key**

:::danger 重要提示
这些凭据仅会显示一次。请务必将其复制并妥善保存。
:::

---

## **🌐 步骤 3：获取 R2 终端节点 URL**

1. 在 Cloudflare 控制台中前往 **R2 → Object Storage**。  
2. 点击你的**存储桶名称**以打开其详情页。  
3. 切换到 **Settings** 标签页。  
4. 在 **S3 API** 部分，你会看到终端节点格式和账户详情。    
    
根据你的 API 令牌创建方式不同，你应使用以下终端节点格式之一：

 ### 🔐 如果你的 API Token 具有 Admin 级别权限并可以访问所有存储桶：

使用基础终端节点（不带存储桶路径）：

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

### 📦 如果你的 API Token 仅限于特定存储桶——或者你想访问某个特定存储桶：

使用特定存储桶的终端节点：

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com/<BUCKET-NAME>
```

你可以在存储桶 **Settings** 标签页的 **S3 API** 部分找到你的 **ACCOUNT_ID** 和**存储桶名称**：

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare r2 s3 api endpoint" class="img-medium img-center" />

在 **RcloneView** 或通过 **Rclone CLI** 设置 Cloudflare R2 远程时，请使用此终端节点。

---
   
## ✅ 总结

现在你应该已经准备好以下配置 Cloudflare R2 远程所需的值：

| Field             | Description                                      |
|------------------|--------------------------------------------------|
| Access Key ID     | 由 Cloudflare API 令牌提供                        |
| Secret Access Key | 由 Cloudflare API 令牌提供                        |
| Endpoint URL      | 可在 R2 存储桶设置中找到（S3 兼容 URL）           |

你现在可以在 **RcloneView** 中设置新的 S3 兼容远程时输入这些值，或使用 Rclone CLI。

👉 下一步：[如何在 RcloneView 中添加 S3 兼容远程](/howto/remote-storage-connection-settings/s3)
