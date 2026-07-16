---
slug: union-remote-combine-free-storage-rcloneview
title: "联合远程（Union Remote）——通过 RcloneView 将多个免费云账户合并为一个巨大的存储池"
authors:
  - tayson
description: "Google Drive 提供 15 GB 免费空间，OneDrive 提供 5 GB，Dropbox 提供 2 GB。使用 RcloneView 中 rclone 的联合远程（union remote），将它们全部合并为一个虚拟的 22 GB 存储池。"
keywords:
  - combine free cloud storage
  - union remote rclone
  - merge cloud accounts
  - combine cloud storage
  - rclone union drive
  - free cloud storage pool
  - multi cloud storage pool
  - combine google drive onedrive
  - virtual cloud storage
  - aggregate cloud storage
tags:
  - feature
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 联合远程（Union Remote）——通过 RcloneView 将多个免费云账户合并为一个巨大的存储池

> Google 提供 15 GB，OneDrive 提供 5 GB，Dropbox 提供 2 GB，Terabox 提供 1 TB。单独来看它们都很小，但合并成一个联合远程后，就是一个免费的多 TB 存储池。

大多数云服务商都提供免费存储层，但单独使用往往容量太小，难以满足实际需求。rclone 的联合远程（union remote）可以将多个存储位置合并为一个虚拟文件系统。RcloneView 让你可以通过可视化方式完成设置，然后像浏览、同步和管理一个巨大的驱动器一样，操作这个合并后的存储池。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 联合远程的工作原理

联合远程将多个远程合并为一个虚拟视图：

- **读取**：所有底层远程中的文件会显示在同一个目录列表中
- **写入**：新文件会被写入剩余空间最多的远程（或根据你配置的策略）
- **透明**：你只需与一个远程交互，rclone 会负责数据分发

## 你可以合并的免费存储

| 服务商 | 免费额度 |
|----------|----------|
| Google Drive | 15 GB |
| OneDrive | 5 GB |
| Dropbox | 2 GB |
| pCloud | 10 GB |
| Terabox | 1 TB |
| MEGA | 20 GB |
| Icedrive | 10 GB |
| Koofr | 10 GB |

合并后：可能拥有超过 1 TB 的免费存储空间。

## 设置联合远程

<img src="/support/images/en/blog/new-remote.png" alt="Create union remote" class="img-large img-center" />

1. 将每个免费云账户添加为独立的远程
2. 创建一个联合远程，将它们全部合并
3. 将联合远程作为一个统一的存储池进行浏览

## 使用场景

### 最大化免费存储空间

学生、自由职业者以及注重预算的用户可以合并多个免费额度，获得可观的免费存储空间。

### 将备份分散到多个服务商

将备份数据分散存储在多个免费账户中以提高冗余性。如果某个服务商出现问题，其他服务商仍保有数据。

### 创建分层存储池

将高速存储（Google Drive）与大容量存储（Terabox）合并到同一个存储池中。

## 浏览合并后的存储池

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse union remote" class="img-large img-center" />

双面板资源管理器会像显示其他任何远程一样显示联合远程。来自所有底层服务商的文件会一起显示。

## 重要说明

- **文件不会在底层远程之间移动**——每个文件都保留在写入时所在的服务商处
- **删除**操作会从存储该文件的服务商中移除该文件
- **性能**在列出目录时取决于速度最慢的底层服务商
- **写入策略**决定新文件会被分配到哪个服务商

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **将免费云账户**逐个添加为独立的远程。
3. **创建一个联合远程**，将它们合并起来。
4. 将其作为**一个统一的存储池**进行浏览和使用。

将零散的免费额度，合并成真正有用的存储空间。

---

**相关指南：**

- [虚拟远程：Combine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [管理云账户蔓延问题](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [远程管理指南](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)

<CloudSupportGrid />
