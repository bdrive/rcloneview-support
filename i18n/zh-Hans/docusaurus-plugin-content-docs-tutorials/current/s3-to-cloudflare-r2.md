---
sidebar_position: 10
description: 了解如何使用 RcloneView 将数据从 Amazon S3 迁移到 Cloudflare R2。
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - aws s3
  - cloudflare r2
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';


# 使用 RcloneView 将数据从 AWS S3 迁移到 Cloudflare R2

在如今云驱动的环境中，企业和开发者常常希望优化存储成本、避免供应商锁定，并提升数据可访问性。**Amazon S3** 长期以来一直是对象存储的行业标准，具备高持久性并能与 AWS 服务无缝集成。然而，随着数据传输量的增长，S3 的出站流量费用和复杂的计费方式可能成为一项沉重的负担。

**Cloudflare R2** 作为一个极具吸引力的替代方案出现——提供与 S3 兼容的存储服务，无出站流量费用，定价模式透明，并借助 Cloudflare 庞大的边缘网络实现全球性能。从 S3 迁移到 R2 可以让你：

- **消除出站流量费用**，降低整体云存储成本
- 通过 S3 API 兼容性和灵活的多云配置**避免供应商锁定**
- 借助 **Cloudflare 全球边缘网络**实现更快、更可靠的数据访问
- 通过用户友好的控制面板**简化计费**和管理

在云平台之间进行手动迁移既繁琐又容易出错。这正是 **RcloneView** 发挥作用的地方。

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2.png" alt="transfer files between aws s3 and cloudflare r2" class="img-medium img-center" />

## 为什么使用 RcloneView 进行 S3 到 R2 的迁移？

RcloneView 是一款基于 Rclone 构建、拥有图形界面的云存储管理工具。它开箱即支持 **S3 兼容端点**，如 AWS S3 和 Cloudflare R2，具备以下特性：

- 完整支持 **访问密钥 / 密钥（access key / secret key）身份验证**
- 可设置自定义端点（用于 R2）
- 双栏资源管理器，支持拖放式文件迁移
- 文件夹比较与同步工具
- 支持批量或增量迁移的计划任务
- 详细的进度日志和错误处理

无论你是要迁移数 TB 的数据，还是仅仅几个文件夹，RcloneView 都能让你放心迁移——无需任何命令行技能。

## 🔄 将文件从 AWS S3 传输到 Cloudflare R2

### 步骤 1：添加 AWS S3 远程

1. 启动 **RcloneView**，进入 **`Remote`** 标签页，点击 **`+ New Remote`**。
2. 在 **`Provider`** 标签页中，选择 **Amazon S3**。
3. 在 **`Options`** 标签页中：
   - 将 `provider` 设置为 `AWS`
   - 输入你的 **Access Key ID** 和 **Secret Access Key**
   - 除非需要自定义，否则区域和端点可保留默认值
4. 点击 **Save** 完成设置。

👉 了解更多：   
- [如何添加 S3 远程](/howto/remote-storage-connection-settings/s3)
- [如何获取 AWS S3 访问凭证](/howto/cloud-storage-setting/aws-account-info)
### 步骤 2：添加 Cloudflare R2 远程

1. 同样，在 `Remote` 标签页中点击 **`+ New Remote`**。
2. 在 **`Provider`** 标签页中，选择 **S3**（没错，还是 S3——因为 R2 使用 S3 协议）。
3. 在 **`Options`** 标签页中：
   - 将 `provider` 设置为 `Cloudflare`
   - 输入你的 **Cloudflare R2 Access Key** 和 **Secret Key**
   - 将 `endpoint` 设置为 `https://<accountid>.r2.cloudflarestorage.com`
1. 点击 **Save** 完成 R2 远程的设置。

👉 了解更多：   
- [如何添加 S3 远程](/howto/remote-storage-connection-settings/s3)
- [如何获取 Cloudflare R2 访问凭证](/howto/cloud-storage-setting/cloudflare-r2-credential)

### 步骤 3：在双栏资源管理器中打开远程

1. 进入 RcloneView 中的 **Browse** 标签页。
2. 在左侧栏中，点击 `+` 并选择你的 **AWS S3** 远程。
3. 在右侧栏中，点击 `+` 并选择你的 **Cloudflare R2** 远程。
4. 现在你可以并排查看和管理这两项服务了。

<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

---
## 📌 文件迁移方法

### 🖱️ 方法一：拖放文件

- 在左侧选择 AWS S3 中的文件或文件夹。
- 将它们拖放到右侧的 Cloudflare R2 栏中。
- 传输将自动开始，进度会显示在 **`Transfer`** 标签页中。

👉 了解更多：[浏览和管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 🔍 方法二：比较文件夹并传输

1. 在两个栏中，分别导航到对应的源（S3）和目标（R2）文件夹。
2. 在 `Home` 菜单中点击 **`Compare`**。
3. RcloneView 会高亮显示：
   - 仅存在于 S3 中的文件
   - 已存在于 R2 中的文件
   - 大小或时间戳不同的相同文件
4. 点击 **Copy →** 将选中的文件从 S3 迁移到 R2。
5. 如需清理，可使用 **Delete**。

👉 了解更多：[比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents)

---

### 🔁 方法三：使用同步或任务

1. 在资源管理器栏中，选择要同步的 **Cloudflare R2** 文件夹和 **AWS S3** 文件夹。
2. 在 `home` 菜单中点击 **`Sync`** 按钮。
3. 选择同步选项（单向或双向），预览操作并确认。
4. RcloneView 会运行同步，并在 **`transfer`** 日志标签页中显示进度。

- 如需重复或定期传输：
  1. 在同步弹窗中点击 **`Save to Jobs`**，或打开 **`Job Manager`** → **`Add Job`**。
  2. 配置源、目标和选项。
  3. 保存后可手动运行或设置计划任务。

👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行和管理任务](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ 方法四：安排定期同步任务

1. 在资源管理器栏中，选择要保持同步的 **Cloudflare R2** 和 **AWS S3** 文件夹。
2. 从 **`Home`** 或 **`Remote`** 菜单中打开 **`Job Manager`**，然后点击 **`Add Job`**。
3. 确认你的源和目标。
4. 使用计划编辑器设置任务的运行时间。保存前请先预览你的计划。
5. 保存并启用该计划任务。

RcloneView 会在你指定的时间运行同步。你可以在 **`Job History`** 中查看执行详情和日志，并在完成后收到通知。

👉 了解更多：[任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)


---

## ✅ 总结

从 AWS S3 迁移到 Cloudflare R2 有助于降低出站流量成本和减少供应商锁定——同时不牺牲性能。借助 RcloneView，整个迁移过程快速、安全，并且完全可视化。

立即尝试，用 Cloudflare R2 为你的云存储方案做好未来准备。

---

## 🔗 相关指南

- [如何添加 S3 远程](/howto/remote-storage-connection-settings/s3)
- [如何获取 AWS S3 访问凭证](/howto/cloud-storage-setting/aws-account-info)
- [如何获取 Cloudflare R2 访问凭证](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [浏览和管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents)
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行和管理任务](/howto/rcloneview-basic/execute-manage-job)
- [任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
