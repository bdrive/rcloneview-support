---
sidebar_position: 2
description: 在 RcloneView 中添加加密远程（Crypt Remote），在现有云远程之上对文件和文件名进行加密，同时在应用内保持可访问性。
keywords:
  - rcloneview
  - crypt
  - virtual remote
  - encrypted remote
  - cloud encryption
  - remote manager
  - privacy
tags:
  - RcloneView
  - crypt
  - remote-storage
  - encryption
  - virtual-remote
date: 2025-12-08
author: tayson
---

# Crypt

## 如何使用 RcloneView 添加 Crypt

**加密远程（Crypt Remote）** 会在现有云远程（Google Drive、OneDrive 等）之上添加一层加密。
文件仍然存储在原始远程中，而 Crypt 远程负责处理加密和解密。

它的作用：

- 防止服务提供商查看文件内容。
- 还可以对文件名进行加密，实现完全隐私保护。
- 解密过程在 RcloneView 内部自动完成。
- 非常适合敏感数据的备份。

---

## 为什么 Crypt 远程看起来是空的

用户通常期望在 Crypt 远程中看到自己的明文文件，但实际情况是：

- Crypt 只显示**加密后**的文件。
- 底层远程中的明文文件**不会**显示在 Crypt 视图中（这是正常现象）。

示例：

- `mygoogledrive:Meet Recordings` 包含明文文件。
- `MyCryptGoogle:` 通过 Crypt 对同一个文件夹进行了封装。
- 在 Crypt 远程中看起来是空的——这是预期行为。

当你**通过 Crypt** 上传文件时，文件会以加密形式存储，因此：

- 在 Crypt 远程中会正常显示（解密后的）文件。
- 在原始远程中会显示为加密后的文件名。

---

## 通过“新建远程”创建 Crypt 远程

### 步骤 1 — 打开 **新建远程** → **虚拟** → **Crypt**

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="new remote add crypt" class="img-large img-center" />

### 步骤 2 — 输入 Crypt 详细信息

必填字段：

- **远程名称**：Crypt 远程的名称（例如 `MyCryptGoogle`）。
- **远程（要加密的文件夹）**：点击文件夹选择器，选择要保护的现有远程和文件夹。

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="select target remote and folder for crypt" class="img-large img-center" />

选择完成后，检查设置并点击**添加远程**。
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-crypt-input.png" alt="crypt input window" class="img-large img-center" />

### 步骤 3 — 在远程管理器中确认

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="remote manager crypt" class="img-large img-center" />

---

## 在 Crypt 远程中上传和查看文件

当你通过 Crypt 远程上传文件时：

- 文件会在**上传时被加密**。
- 为方便起见，Crypt 视图会显示**解密后的名称**。
- 底层远程会显示**加密后的文件名**。

对比示例：
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="crypt upload file compare" class="img-large img-center" />

| 查看位置                          | 你看到的内容                     |
| ------------------------------- | ----------------------------------- |
| `MyCryptGoogle:`                | 看似明文的文件名（已解密）           |
| `mygoogledrive:Meet Recordings` | 加密后的文件名（预期行为）           |

---

## 为什么要使用 Crypt 远程

- 云服务提供商无法读取文件内容。
- 可以对文件名进行加密，实现完全隐私保护。
- RcloneView 中的自动解密使使用变得简单。
- 非常适合安全备份、敏感文档和共享驱动器。
- 可与调度器结合使用，实现自动化加密备份。

---

## 总结

| 功能                        | 说明                                       |
| -------------------------- | ------------------------------------------------- |
| **加密远程（Crypt Remote）** | 在现有远程之上的加密层                          |
| **明文文件可见性**            | 明文文件在 Crypt 视图中被隐藏（正常现象）     |
| **通过 Crypt 上传**          | 以加密形式存储；在 Crypt 视图中以解密形式显示 |
| **用途**                    | 安全的云备份和隐私保护                       |

