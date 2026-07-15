---
sidebar_position: 4
description: 在 RcloneView 中添加联合远程（Union Remote），将多个 Remote:Path 位置合并为一个统一的文件夹视图，而无需复制数据。
keywords:
  - rcloneview
  - union remote
  - virtual remote
  - merged folder
  - multi cloud
  - remote manager
  - union
tags:
  - RcloneView
  - union
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Union

## 如何使用 RcloneView 添加 Union

**联合远程（Union Remote）** 将多个云端远程中的文件夹合并为一个统一的文件夹。它与 Combine 不同：

- **Combine** 将多个文件夹并排显示。
- **Union** 将多个文件夹合并为一个视图。

Union 适用于以下场景：

- 将跨远程的数据当作一个文件夹来访问。
- 单一窗格浏览及多云备份布局。
- 在不复制或移动数据的情况下构建虚拟文件系统。

---

## 创建 Union 远程

### 步骤 1 — **New Remote** → **Virtual** → **Union**

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="new remote add union" class="img-large img-center" />

### 步骤 2 — 输入 Union 详细信息

填写以下内容：

- **Remote name（远程名称）**：例如 `MyUnion`。
- **Upstreams (Remote:Path)**：每个 Upstream 是一个实际的文件夹位置。

通过选择远程和文件夹添加第一个 Upstream：  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-1.png" alt="union select folder first" class="img-large img-center" />

要添加另一个 Upstream，点击 **Add Remote** 并选择下一个文件夹：  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-2.png" alt="union select folder second" class="img-large img-center" />

根据需要添加尽可能多的 Upstream，然后检查设置：  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-add-union-input.png" alt="union input window" class="img-large img-center" />

点击 **Add Remote** 以创建 Union 远程。

### 步骤 3 — 在 Remote Manager 中确认

<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-remote-manager-union.png" alt="remote manager union" class="img-large img-center" />

---

## 在 Explorer 中检查 Union

在 Explorer 中打开 Union 远程。所有 Upstream 中的内容将显示为一个合并后的文件夹。

**Upstreams 1 — Google Drive 示例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="union check folder google drive" class="img-large img-center" />  
对应 `mygoogledrive:Meet Recordings`。

**Upstreams 2 — Dropbox 示例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-2.png" alt="union check folder dropbox" class="img-large img-center" />  
对应 `drop:assets`。

---

## Combine 与 Union 的主要区别

| 特性       | Combine Remote     | Union Remote            |
| ---------- | ------------------- | ------------------------ |
| 显示方式   | 分别显示多个文件夹  | 显示单一的合并视图        |
| 写入规则   | 不合并；各自独立     | 新写入的内容遵循 Union 策略 |
| 文件结构   | Folder1 / Folder2   | 一个合并后的虚拟文件夹     |
| 最适合场景 | 组织整理             | 多云合并及统一使用         |

---

## 何时使用 Union

- 在一个文件夹中同时查看多个云端的数据。
- 需要统一视图的、分散在多个远程中的项目。
- 针对一个虚拟远程运行同步/备份任务。
- 在不重复存储数据的情况下提供合并视图。

---

## 总结

| 特性              | 说明                                                |
| ----------------- | --------------------------------------------------- |
| **Union Remote**  | 将多个 `Remote:Path` 条目合并为一个视图              |
| **Upstreams**     | 构成该联合的实际远程文件夹                            |
| **优势**          | 多云整合、单一窗格访问                                |
| **用途**          | 统一浏览、备份/同步、项目统一化                        |

Union Remote 是一个强大的虚拟远程，通过一个合并的文件夹视图来管理多云环境。
