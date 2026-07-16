---
slug: fix-azure-blob-sas-token-auth-errors-rcloneview
title: "使用 RcloneView 修复 Azure Blob Storage SAS 令牌与身份验证错误"
authors:
  - tayson
description: "修复 rclone 中的 Azure Blob Storage SAS 令牌和身份验证错误。学习使用 RcloneView 的配置工具解决 401、403 及令牌过期等问题。"
keywords:
  - rcloneview
  - azure blob storage
  - sas token error
  - azure authentication error
  - azure 403 forbidden
  - azure 401 unauthorized
  - rclone azure setup
  - azure blob sas token
  - azure storage connection
  - fix azure rclone
tags:
  - troubleshooting
  - azure
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 修复 Azure Blob Storage SAS 令牌与身份验证错误

> Azure Blob Storage 的身份验证可能比较复杂,存在多种验证方式和一些隐蔽的配置陷阱。**RcloneView** 简化了设置流程,帮助你快速排查 401/403 错误。

Azure Blob Storage 是一款功能强大且被广泛使用的对象存储服务,但从 rclone 连接到它需要精确配置身份验证。无论你使用的是访问密钥、SAS 令牌还是服务主体,一个配置错误的参数都可能导致晦涩难懂的错误信息,从而完全阻断你的工作流程。

本指南涵盖了在使用 rclone 连接 Azure Blob Storage 时最常见的身份验证错误,解释了可用的不同身份验证方式,并指导你如何使用 RcloneView 的可视化远程配置逐一修复这些问题。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure 身份验证方式概览

Azure Blob Storage 通过 rclone 支持多种身份验证方式。了解你正在使用的是哪一种,是排查问题的第一步:

- **存储账户访问密钥(Storage Account Access Key)**:一种共享密钥,授予对整个存储账户的完全访问权限。简单但威力巨大——请像对待 root 密码一样对待它。
- **SAS 令牌(共享访问签名)**:一种范围受限的令牌,授予具有特定权限、时间限制以及可选 IP 限制的有限访问权限。相比访问密钥,更适合用于对外共享,安全性更高。
- **服务主体(Azure AD)**:基于 OAuth 的身份验证方式,使用 Azure AD 应用程序。最适合具有基于角色的访问控制的企业环境。
- **托管标识(Managed Identity)**:在 Azure 内部运行时可用(例如 Azure VM)。自动使用 Azure 的身份服务。

每种方式都有自己的配置参数和失败模式。以下各节将针对每种方式列出最常见的错误。

## SAS 令牌过期(401 未授权)

最常见的 SAS 令牌错误就是令牌过期。SAS 令牌具有起始时间和过期时间。一旦令牌过期,每个请求都会返回 `401 Unauthorized` 或 `403 AuthenticationFailed` 错误。

**症状:**
```
HTTP 401: Server failed to authenticate the request.
AuthenticationFailed: Signed expiry time must be after signed start time.
```

**解决方法:**

1. 打开 Azure 门户,导航到你的存储账户。
2. 在“安全性 + 网络”部分下,进入**共享访问签名**。
3. 设置一个较为宽松的新过期时间(例如,个人使用可设为 1 年,共享访问则可缩短一些)。
4. 生成新的 SAS 令牌。
5. 在 RcloneView 中,编辑你的 Azure Blob 远程,并用新的 SAS 令牌替换旧令牌。
6. 测试连接,确认访问已恢复正常。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## SAS 令牌权限错误(403 禁止访问)

SAS 令牌可能是有效的,但缺少你的操作所需的权限。例如,仅具有读取权限的令牌在 rclone 尝试上传、删除或列出容器时会失败。

**症状:**
```
HTTP 403: This request is not authorized to perform this operation.
AuthorizationPermissionMismatch
```

**rclone 操作所需的权限:**

| 操作 | 所需 SAS 权限 |
|---|---|
| 列出容器 | List |
| 浏览文件 | Read, List |
| 上传文件 | Write, Create |
| 删除文件 | Delete |
| 完整同步 | Read, Write, Delete, List, Create |

**解决方法:** 在 Azure 门户中生成一个具有所有必需权限的新 SAS 令牌。对于 rclone 的同步操作,通常需要 Read、Write、Delete、List、Add 和 Create 权限。如果不确定,可以为你的个人存储账户启用全部权限。

## IP 限制阻止访问(403 禁止访问)

SAS 令牌可以被限制为仅允许特定 IP 地址或 IP 范围访问。如果你在办公网络下生成了令牌,却尝试在家中使用它,该 IP 限制将阻止你的访问。

**症状:**
```
HTTP 403: This request is not authorized to perform this operation using this source IP.
```

**解决方法:**

- 生成一个不带 IP 限制的新 SAS 令牌,或者
- 将你当前的 IP 地址添加到 SAS 令牌配置中的允许范围内,或者
- 改用存储账户访问密钥,该方式不受 IP 限制约束。

如果你使用的是动态 IP(大多数家庭网络都是如此),除非能够定期更新令牌,否则应避免使用带有 IP 限制的 SAS 令牌。

## 访问密钥错误(401 未授权)

如果你使用的是存储账户访问密钥,出现错误通常意味着密钥有误或账户名称不正确。

**常见原因:**

- 复制密钥时带上了多余的空格或换行符。
- 密钥已轮换,但仍在使用旧的 Key1,而实际生效的是 Key2。
- 存储账户名称拼写错误。
- 使用了连接字符串,而不是单独的密钥。

**在 RcloneView 中的解决方法:**

1. 前往 Azure 门户,导航到你的存储账户,打开**访问密钥**。
2. 点击 Key1 或 Key2 旁边的**显示**,然后仔细复制密钥。
3. 在 RcloneView 中编辑你的 Azure Blob 远程,将密钥粘贴到 `key` 字段中。
4. 仔细核对 `account` 字段是否与你的存储账户名称完全一致(区分大小写)。
5. 测试连接。

## 服务主体配置错误

服务主体身份验证需要三个值:租户 ID、客户端 ID 和客户端密钥。这些值中任何一个缺失或错误都会导致身份验证失败。

**症状:**
```
HTTP 401: AADSTS7000215: Invalid client secret provided.
HTTP 401: AADSTS70001: Application with identifier 'xxx' was not found.
```

**解决方法:**

1. 在 Azure 门户中,进入**Azure Active Directory > 应用注册**。
2. 找到你的应用程序,并核实**应用程序(客户端)ID**。
3. 在概览页面上查看**目录(租户)ID**。
4. 在**证书和密码**下,如果旧密钥已过期,请创建一个新的客户端密钥。
5. 在 RcloneView 中,使用正确的 tenant、client_id 和 client_secret 值更新远程配置。
6. 确保该服务主体已在存储账户上被分配了 **Storage Blob Data Contributor** 角色。

## 逐步生成正确的 SAS 令牌

要从根本上避免 SAS 令牌相关问题,请按照以下流程操作:

1. 打开 Azure 门户,导航到你的存储账户。
2. 在左侧菜单中点击**共享访问签名**。
3. 在**允许的服务**下,选择 **Blob**。
4. 在**允许的资源类型**下,选择**容器**和**对象**。
5. 在**允许的权限**下,选择你所需的所有权限(Read、Write、Delete、List、Add、Create)。
6. 将**开始日期**设为今天,将**过期日期**设为合理的未来日期。
7. 除非需要 IP 限制,否则将**允许的 IP 地址**留空。
8. 将**允许的协议**设置为**仅 HTTPS**。
9. 点击**生成 SAS 和连接字符串**。
10. 复制 **SAS 令牌**(以 `?sv=` 开头)。粘贴到 rclone 配置中时,请去掉开头的 `?`。

## 在 RcloneView 中测试连接

配置或更新 Azure Blob 远程后,请立即测试连接:

1. 在 RcloneView 的资源管理器面板中打开该远程。
2. 验证你的容器是否正常列出。
3. 进入某个容器,确认可以看到其中的文件。
4. 尝试上传一个小的测试文件,以验证写入权限。
5. 删除该测试文件,以确认删除权限。

如果任何一步失败,错误信息都会指向具体的权限或配置问题。请在远程配置中修复该问题,然后重新测试。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用你偏好的身份验证方式(访问密钥或 SAS 令牌)添加一个 Azure Blob Storage 远程。
3. 在资源管理器面板中浏览你的容器,以测试连接。
4. 如果遇到 401 或 403 错误,请参考上文相应章节进行诊断和修复。

Azure 身份验证错误几乎总是由令牌过期、权限缺失或凭据复制错误引起的。使用 RcloneView 的可视化工具进行系统化排查,可以轻松定位并解决问题。

---

**相关指南:**

- [浏览与管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [即时同步远程存储](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
