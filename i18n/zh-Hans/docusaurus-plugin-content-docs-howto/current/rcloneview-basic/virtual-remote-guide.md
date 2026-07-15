---
sidebar_position: 15
description: "了解 RcloneView 中的虚拟远程，学习如何添加 Alias、Crypt、Combine、Union 等虚拟层，实现更快、更安全的云端工作流程。"
keywords:
  - rcloneview
  - virtual remote
  - alias
  - crypt
  - union
  - combine
  - cache
  - chunker
  - hasher
  - compress
tags:
  - RcloneView
  - virtual-remote
  - remote-storage
  - encryption
  - multi-cloud
date: 2025-12-08
author: tayson
---

# 虚拟远程概览与设置

虚拟远程是在现有云端远程之上添加的功能层。它们本身不存储数据，而是让您现有的远程使用起来更方便、更快速、更安全或更灵活。

---

## 什么是虚拟远程？

虚拟远程是一种功能层，它可以：

- 在不迁移数据的情况下扩展现有远程。
- 在原始远程中保留存储的同时增加便利性。
- 帮助实现更快的访问、隐私保护或统一视图。

---

## 虚拟远程的类型

RcloneView 提供九种虚拟远程类型：

1. **Alias（别名）**  
   直接跳转到特定云端文件夹的快捷方式。  
   示例：为 Google Drive 中较深的路径添加书签，以便即时访问。  
   👉 参见：[Alias 远程指南](/howto/remote-storage-connection-settings/alias-remote)

2. **Crypt（加密）**  
   加密文件名、内容和文件夹以保护隐私。  
   👉 参见：[Crypt 远程指南](/howto/remote-storage-connection-settings/crypt-remote)

3. **Memory（内存）**  
   将数据存储在 RAM 中，实现超快速的临时使用；关闭后即清除。

4. **Cache（缓存）**  
   通过缓存加速较慢的远程；重复读取和流式传输更快。

5. **Chunker（分块）**  
   将大文件拆分为多个块，绕过服务的大小限制并提高稳定性。

6. **Combine（合并显示）**  
   将多个文件夹作为独立子文件夹显示在同一个远程下。  
   👉 参见：[Combine 远程指南](/howto/remote-storage-connection-settings/combine-remote)

7. **Union（联合）**  
   将多个文件夹合并为一个统一视图。  
   👉 参见：[Union 远程指南](/howto/remote-storage-connection-settings/union-remote)

8. **Hasher（哈希）**  
   为不支持哈希的后端添加哈希功能，便于完整性校验。

9. **Compress（压缩）**  
   在上传前压缩文件以节省空间。

---

## 如何添加虚拟远程

所有虚拟远程都通过 **New Remote > Virtual** 创建。

<img src="/support/images/en/howto/remote-storage-connection-settings/add-remote-virtual.png" alt="add virtual remote" class="img-large img-center" />

### 步骤 1 — 打开 New Remote

- 从顶部菜单：**`Remote` > `New Remote`**。
- 选择 **`Virtual`** 标签页以查看所有虚拟远程类型。

### 步骤 2 — 选择虚拟远程类型

每种类型都有各自所需的字段。示例：

- **Alias**：名称 + 目标文件夹。
- **Crypt**：加密密码 + 目标文件夹。
- **Union**：多个 `Remote:Path` 上游。
- **Combine**：目录标签 + 远程路径列表。
- **Chunker**：源远程 + 分块设置。

RcloneView 会引导您完成每种类型所需的输入。

### 步骤 3 — 使用虚拟远程

创建后，虚拟远程会像普通远程一样出现在：

- **Remote Manager（远程管理器）**
- **Explorer（浏览器）** 文件浏览器
- **Sync / Compare / Job（同步 / 比较 / 任务）** 对话框中

请记住：虚拟远程只是功能层。实际文件仍保存在底层的远程路径中。

---

## 何时使用虚拟远程

| 需求                       | 推荐的虚拟远程 |
| -------------------------- | -------------- |
| 增强云端安全性              | Crypt          |
| 统一查看多个文件夹          | Union          |
| 为复杂路径添加书签或整理    | Alias          |
| 整理复杂项目                | Combine        |
| 上传超大文件                | Chunker        |
| 加速重复读取                | Cache          |
| 校验数据完整性              | Hasher         |
| 通过压缩节省存储空间        | Compress       |

---

## 快速参考

| 虚拟远程 | 作用                                     |
| -------- | ---------------------------------------- |
| Alias    | 文件夹快捷方式                            |
| Crypt    | 加密存储                                  |
| Memory   | 基于 RAM 的临时存储                       |
| Cache    | 通过缓存提升速度                          |
| Chunker  | 将大文件分块以便上传                      |
| Combine  | 将多个文件夹分组显示为独立视图            |
| Union    | 将多个文件夹合并为一个视图                |
| Hasher   | 添加哈希以进行完整性校验                  |
| Compress | 在上传前压缩文件                          |

虚拟远程让云端工作流程更强大、更灵活。在 RcloneView 中，只需点击几下即可启用这些功能，无需复杂的设置。
