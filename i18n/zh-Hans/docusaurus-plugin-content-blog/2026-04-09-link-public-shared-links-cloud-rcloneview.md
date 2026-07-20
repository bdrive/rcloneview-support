---
slug: link-public-shared-links-cloud-rcloneview
title: "使用 RcloneView 为云端文件生成公开分享链接"
authors:
  - tayson
description: "使用 RcloneView 的 link 命令为云端文件生成公开下载链接。无需授予账户访问权限即可从 Google Drive、OneDrive、Dropbox、S3 等平台分享文件。"
keywords:
  - rcloneview
  - public link cloud file
  - share cloud file link
  - rclone link command
  - generate download link
  - presigned url s3
  - shared link google drive
  - cloud file sharing
  - public url cloud storage
  - share file without account
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - collaboration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 为云端文件生成公开分享链接

> 分享一个云端文件通常意味着要进入服务商的网页界面、调整权限并复制链接。RcloneView 的 link 功能可以直接从文件浏览器中生成可分享的 URL——支持任何具备该能力的服务商。

当你需要将存储在云端的文件分享给没有你账户访问权限的人时，公开链接或预签名链接是标准解决方案。Google Drive 可创建可分享链接，S3 可生成预签名 URL，Dropbox 提供共享链接——每种方式都通过不同的界面、不同的操作流程实现。RcloneView 将这一切整合为一个操作：右键点击文件，生成链接，然后分享。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 各服务商的公开链接工作方式

不同的云存储服务商实现文件分享的方式各不相同：

| 服务商 | 链接类型 | 默认有效期 | 说明 |
|---|---|---|---|
| Google Drive | 可分享链接 | 永不过期 | 会将文件权限更改为“知道链接的任何人” |
| OneDrive | 共享链接 | 可配置 | 匿名访问或限定于组织内部 |
| Dropbox | 共享链接 | 永不过期 | 只读下载链接 |
| AWS S3 | 预签名 URL | 可配置（最长 7 天） | 临时性、经过加密签名 |
| Backblaze B2 | 下载 URL | 永不过期 | 需要存储桶公开，或使用授权令牌 |
| Cloudflare R2 | 预签名 URL | 可配置 | 兼容 S3 的预签名 URL |

RcloneView 在底层使用 rclone 的 `link` 命令，会自动为每个服务商生成相应类型的链接。你无需了解特定服务商的分享机制——RcloneView 会为你处理。

## 在 RcloneView 中生成链接

要为文件生成公开链接：

1. 在 RcloneView 的文件浏览器中浏览到该文件。
2. 右键点击文件，选择链接/分享选项。
3. RcloneView 会生成链接并复制到剪贴板（或显示出来供你手动复制）。

对于支持设置有效期的服务商（如 S3 预签名 URL），你可以在自定义选项中使用 `--expire` 参数指定链接有效期。例如，`--expire 24h` 会生成一个 24 小时后过期的链接。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Generating a public link for a cloud file in RcloneView" class="img-large img-center" />

## 通过终端使用 link 命令

若需要更精细的控制，可以使用 RcloneView 内置的终端直接运行 link 命令：

```
rclone link remote:path/to/file.pdf
```

这会输出公开 URL。对于兼容 S3 的服务商，可添加有效期：

```
rclone link remote:bucket/file.pdf --expire 48h
```

当需要为多个文件生成链接，或将链接生成作为工作流的一部分进行脚本化操作时，终端方式非常有用。

## 各服务商的具体行为

### Google Drive

当你为 Google Drive 文件生成链接时，rclone 会将该文件的分享设置更改为“知道链接的任何人都可以查看”。除非你手动撤销分享，否则该链接不会过期。请注意，这会修改文件的权限——任何拥有该 URL 的人都可以访问该文件。

对于 Google Workspace 账户，管理员可能会将链接分享限制为仅组织内成员可用。在这种情况下，生成的链接只对你组织内的人有效。

### OneDrive 和 SharePoint

OneDrive 通过 Microsoft Graph API 生成共享链接。链接类型取决于你所在组织的分享策略——可能是匿名（任何人均可访问），也可能限制为仅组织内成员可用。个人 OneDrive 账户可以创建匿名链接。

### AWS S3 及兼容 S3 的服务

S3 预签名 URL 是最安全的选择。该 URL 包含一个加密签名，可为特定对象授予临时访问权限。链接会在指定的有效期后过期（默认值因情况而异，IAM 用户凭证下最长为 7 天）。此过程不会更改该对象的权限——授权信息由预签名 URL 本身携带。

这使得 S3 预签名 URL 非常适合临时性文件分享：链接在指定时间内有效，之后自动失效，无需手动清理。

### Dropbox

Dropbox 会创建一个提供只读访问权限的共享链接。在 Dropbox Plus 和 Professional 计划下，该链接默认不会过期。在 Dropbox Business 计划下，管理员可以强制执行过期策略。

## 使用场景

### 快速文件分享

为存储在云端的报告、设计文件或数据集生成链接，并通过电子邮件、Slack 或聊天工具发送。接收者无需拥有云账户或访问你的存储空间即可下载文件。

### 为客户提供临时访问

对于自由职业者和代理机构而言，S3 预签名 URL 非常适合用于向客户交付文件。将交付物上传至 S3，生成一个 7 天有效期的预签名 URL，并发送给客户。7 天后，链接会自动过期——无需手动清理。

### 公开内容分发

对于面向广泛受众分发的文件（文档、发行版本、媒体资料包），可以从 Google Drive 或 Dropbox 生成一个永久链接，并将其嵌入到你的网站或文档中。RcloneView 无需进入服务商的网页界面即可生成链接。

## 安全注意事项

- **永久链接会无限期暴露文件**：Google Drive 和 Dropbox 的链接默认不会过期。如果你分享的是敏感文件，请记得在不再需要访问权限时撤销该链接。
- **预签名 URL 虽有时限但仍可被分享**：在有效期内，任何拥有该 URL 的人都可以访问该文件。如果文件属于机密内容，请勿在公开渠道分享预签名 URL。
- **生成链接会在部分服务商上修改权限**：Google Drive 链接会更改文件的分享设置，其他拥有该文件访问权限的用户可以看到这一变化。
- **定期审查已分享的链接**：定期检查并撤销旧的共享链接，尤其是涉及敏感文件的链接。RcloneView 的文件浏览器让你可以轻松定位文件并检查其分享状态。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在“远程管理器”中添加你的云端远程。
3. 在文件浏览器中浏览到某个文件并生成公开链接。
4. 如需限时链接，请使用带 `--expire` 参数的 S3 预签名 URL。

通过 RcloneView 生成分享链接，可以省去逐一切换到各服务商网页界面的麻烦。无论你需要的是快速分享链接、临时客户交付 URL，还是永久下载链接，RcloneView 都能在文件浏览器中一站式完成。

---

**相关指南：**

- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [通过浏览器登录（OAuth）添加远程](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
