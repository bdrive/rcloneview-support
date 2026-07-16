---
slug: how-to-encrypt-cloud-backups-secure-google-drive-onedrive-s3
title: "如何加密云备份：使用 RcloneView 保护 Google Drive、OneDrive 和 S3"
authors:
  - steve
description: 使用 RcloneView 加密并保护您的云备份。了解如何使用 rclone 的“crypt”后端来保护 Google Drive、OneDrive 和 S3 数据——无需命令行。
keywords:
  - 上传前加密文件
  - 云数据安全
  - rclone crypt 图形界面
  - 安全备份工具
  - google drive 加密
  - onedrive 加密
  - s3 加密
  - rcloneview
tags:
  - RcloneView
  - encryption
  - rclone-crypt
  - cloud-security
  - google-drive
  - onedrive
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何加密云备份：使用 RcloneView 保护 Google Drive、OneDrive 和 S3

> 保护您的敏感文件——即使存放在云端。借助 **RcloneView**，您可以使用 rclone 的 **crypt** 后端以可视化方式加密和管理云备份，为 Google Drive、OneDrive、S3 等提供完全的隐私保护——无需编写脚本。

## 为什么要加密您的云备份？

云存储既方便又可靠，但您的文件仍然存放在他人的服务器上。如果没有加密，服务提供商（或任何获得您账户访问权限的人）都可能读取您的数据。

对云备份进行加密可以让您真正**拥有**自己的信息——只有您掌握解密密钥。  
<!-- truncate -->

**在上传前加密数据的主要理由：**

- 🔒 **隐私** — 防止未经授权的访问或泄露。  
- 🧩 **合规** — 满足组织或法律数据安全标准。  
- 💼 **掌控** — 自行选择密钥和加密方式。  
- 🌐 **可移植性** — 在不同云之间移动加密数据而不失去保护。  

---

## 了解 rclone 的“crypt”远程

**crypt** 后端是 rclone 内置的加密层。它不是在上传前手动加密文件，而是在数据传输时透明地加密文件名、目录结构和内容。

结合 **RcloneView** 使用时，您可以通过**简单的图形界面**配置和管理 crypt 远程，让云端加密对每个人都触手可及。

### 工作原理

1. 您设置一个“基础远程”——例如您的 Google Drive、OneDrive 或 S3 存储桶。  
2. 您创建一个新的 **crypt 远程**，指向该基础远程内的一个文件夹。  
3. 通过 crypt 远程上传的文件会自动加密。  
4. 在 RcloneView 中浏览时，文件看起来正常——但云端只存储加密后的数据和名称。  

| 示例 | 说明 |
|---|---|
| `gdrive:` | 常规 Google Drive 远程 |
| `gdrive-crypt:` | Google Drive 内的加密层 |
| `/gdrive/Encrypted/` | 存储文件加密版本的实际文件夹 |

> 即使有人访问您的云账户，他们也只能看到被打乱的文件名和无法读取的数据。

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 第 1 步 — 准备工作

在创建加密云备份之前：

1. **确定要加密的内容** — 整个网盘还是特定文件夹（例如 `/Private/`、`/Archives/`）。  
2. **选择目标云** — Google Drive、OneDrive、Amazon S3、Wasabi 或其他 rclone 支持的云。  
3. **在云端创建或找到一个安全文件夹**，用于存储加密文件。  
4. *（可选）* 在应用加密之前**备份未加密的版本**。

🔍 有用的指南：  
- [在 RcloneView 中添加云存储远程](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [兼容 S3 的云设置](/howto/remote-storage-connection-settings/s3)

---

## 第 2 步 — 在 RcloneView 中创建加密远程

在 RcloneView 中创建 crypt 远程只需几步点击。

1. 打开 **RcloneView** → 点击 **`+ New Remote`**。  
2. 将**远程类型**选择为 **Crypt (Encrypted Storage)**。  
<img src="/support/images/en/blog/add-crypt-remote-1.png" alt="Create encrypted remote in RcloneView" class="img-medium img-center" />
3. 选择**底层存储**（例如您现有的 `WebDav`、`Google Drive` 或 `S3` 远程）。  
4. 在该远程内指定一个**路径**（例如 `webdav:secure` 或 `drive:documents/encrypted`）。  
<img src="/support/images/en/blog/add-crypt-remote-2.png" alt="Create encrypted remote in RcloneView" class="img-medium img-center" />
5. 设置您的**加密密码**和可选的 **salt**。  
   - 使用强而唯一的密码——RcloneView 会将其安全地存储在您的本机上。  
6. 为您的加密远程命名（例如 `WebDav-Encrypted` 或 `S3-Secure`）。  

完成后，您的加密远程将与其他常规远程一起出现在 RcloneView 的侧边栏中。



---

## 第 3 步 — 传输并同步加密数据

现在您可以使用 RcloneView 的全部强大功能——**拖放**、**比较**和**同步任务**——在本地文件和 crypt 远程之间处理加密传输。

### A) **拖放**
只需将本地磁盘中的文件夹拖入您的加密远程（例如 `Drive-Encrypted:`）。  
RcloneView 会在上传时逐一加密每个文件。

👉 了解更多：[使用拖放复制文件](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

---

### B) **比较并复制**
运行**比较**功能，预览本地文件夹与加密远程之间的更新和差异。  
只有发生变化的文件才会被重新加密并上传。

👉 了解更多：[比较并管理文件](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

---

### C) **同步与定时任务**
自动化您的加密流程。  
创建一个**同步任务**，让本地文件夹每晚或每周镜像到您的 crypt 远程——确保所有新文件都被加密并安全地存储在异地。

👉 了解更多：  
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)  
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)  
- [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-medium img-center" />

---

## 第 4 步 — 验证您的加密

RcloneView 允许您以可视化方式浏览加密远程，但云端内容仍然无法读取。  
验证方法：

- 打开云盘的网页界面——文件应显示为**随机化的名称**和扩展名。  
- 尝试直接下载它们；它们会显示为加密数据。  
- 通过 RcloneView 打开时，它们会被透明解密。  

这可以确认您的加密设置正常工作。

---

## 专业提示

- **安全备份您的配置文件（`rclone.conf`）**——它包含您的加密密钥。  
- **切勿分享您的密码或 salt。** 一旦丢失，就意味着永久失去对加密数据的访问权限。  
- **将 crypt 与压缩结合使用**（例如 `.zip` 或 `.7z`），以获得高效的加密压缩包。  
- **偶尔测试解密**，以确认您的数据可以恢复。  
- **分层加密**：对于极其敏感的文件夹，您可以叠加多层 crypt，或跨不同的云进行加密。

---

## 结语 — 隐私与简单并存

- **为何重要：** 加密确保您的文件即使在云端也能保持私密。  
- **工作原理：** rclone 的 **crypt 远程**会加密文件名、文件夹和内容——并通过 RcloneView 的图形界面轻松管理。  
- **您将获得：** 一种在 Google Drive、OneDrive、S3 等平台上保护敏感数据的无缝方式。  

> 您无需具备命令行专业知识即可保护自己的数字生活——RcloneView 为每个人带来强大的加密能力。

---

## 常见问题

**问：什么是 crypt 远程？**  
**答：** 它是在 rclone 中创建（并由 RcloneView 管理）的加密覆盖层，会在上传前自动加密所有文件，并在本地访问时自动解密。

**问：文件名也会被加密吗？**  
**答：** 是的——根据您选择的选项，文件名和文件夹结构都可以被加密。

**问：不使用 RcloneView 也能访问我的加密文件吗？**  
**答：** 可以——如果您拥有 `rclone.conf` 文件和密钥，就可以通过 rclone 命令行或任何兼容的客户端访问它们。

**问：如果我丢失了加密密码会怎样？**  
**答：** 很遗憾，您将永久失去访问权限。请务必安全地备份您的密码和配置。

**问：加密会降低传输速度吗？**  
**答：** 会有轻微影响——但 RcloneView 会高效地处理这一过程，对上传或同步的影响微乎其微。

**问：我可以将 crypt 与兼容 S3 的存储（如 Wasabi 或 R2）一起使用吗？**  
**答：** 可以——crypt 远程适用于 rclone 支持的任何后端，包括 S3、Wasabi、Cloudflare R2、Backblaze B2 等。

**立即保护您的云备份——因为隐私不应该需要编写代码。**

<CloudSupportGrid />
