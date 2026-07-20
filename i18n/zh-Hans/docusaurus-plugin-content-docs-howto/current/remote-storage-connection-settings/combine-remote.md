---
sidebar_position: 3
description: "在 RcloneView 中将多个云文件夹合并为单一虚拟视图,无需复制数据,非常适合多云浏览和统一任务。"
keywords:
  - rcloneview
  - combine remote
  - virtual remote
  - multi cloud
  - union remote
  - cloud viewer
  - remote manager
tags:
  - RcloneView
  - combine
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Combine

## 如何使用 RcloneView 添加 Combine

**Combine 远程** 将多个云远程中的文件夹合并为一个虚拟视图。它不会复制或移动数据——只是让你能够将多个位置作为单个文件夹进行浏览。

为什么它很有用:

- 在一个地方查看分散在多个云中的数据。
- 将来自不同服务的项目文件夹当作一个工作空间来处理。
- 像操作单个远程一样运行备份/同步任务。
- 无需额外存储或重复文件。

Combine 远程实际上是一个多云查看器。

---

## 创建 Combine 远程

### 步骤 1 —— **New Remote** → **Virtual** → **Combine**

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="new remote add combine" class="img-large img-center" />

### 步骤 2 —— 输入 Combine 详细信息

每个条目需要填写三个字段:

- **Remote name**: Combine 远程的名称(例如 `MyCombine`)。
- **Directory**: 文件夹名称,将在 Combine 视图中显示(例如 `Folder1`)。
- **Remote Path**: 要包含的实际云路径。点击文件夹图标可从已注册的远程中选择。

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-1.png" alt="combine select folder first" class="img-large img-center" />

选择第一个路径后:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-2.png" alt="combine select folder second" class="img-large img-center" />

使用 **Add Remote** 添加 Folder2、Folder3 及更多文件夹。  
当所有条目都设置完成后:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-add-combine-input.png" alt="combine input window" class="img-large img-center" />

点击 **Add Remote** 以创建 Combine 远程。

### 步骤 3 —— 在 Remote Manager 中确认

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-remote-manager-combine.png" alt="remote manager combine" class="img-large img-center" />

---

## 在 Explorer 中检查合并的文件夹

在 Explorer 中打开 Combine 远程,即可查看每个已添加的文件夹。

**Folder1 —— Google Drive 示例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="combine check folder google drive" class="img-large img-center" />  
显示与 `mygoogledrive:Meet Recordings` 相同的内容。

**Folder2 —— Dropbox 示例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-2.png" alt="combine check folder dropbox" class="img-large img-center" />  
显示与 `drop:assets` 相同的内容。

---

## 何时使用 Combine

- 一次性查看多个云中的数据。
- 整合分散在各个远程中的项目文件夹。
- 通过单个虚拟远程管理备份或同步任务。
- 在统一视图的同时保持原始结构不变。
- 在获得统一工作空间的同时避免重复存储。

---

## 总结

| 功能                     | 说明                                            |
| ------------------------ | ----------------------------------------------- |
| **Combine 远程**         | 将多个文件夹合并为一个虚拟视图                 |
| **无数据重复**           | 文件保留在其原始位置                           |
| **添加多种远程**         | 支持 Drive、Dropbox、OneDrive、S3 等            |
| **使用场景**             | 统一浏览、多云备份、项目管理                   |

Combine 远程让你能够像管理位于同一位置的数据一样管理多云数据——无需移动或复制文件。
