---
slug: manage-arvan-cloud-storage-sync-backup-rcloneview
title: "管理 Arvan Cloud 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - jay
description: "将 Arvan Cloud 对象存储连接到 RcloneView,实现兼容 S3 的文件浏览、同步、备份和跨云传输。"
keywords:
  - Arvan Cloud
  - Arvan Cloud RcloneView
  - S3兼容存储
  - 对象存储GUI
  - Arvan Cloud 同步
  - Arvan Cloud 备份
  - 云存储管理器
  - Arvan Cloud 文件传输
  - 多云GUI
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Arvan Cloud 存储 — 使用 RcloneView 同步和备份文件

> 在同一个桌面窗口中,与您管理的所有其他远程一起浏览、同步和备份 Arvan Cloud 对象存储桶。

Arvan Cloud 的对象存储采用 S3 协议,这意味着它可以直接接入任何基于 Access Key + Secret Key + Endpoint 凭据构建的工具 — RcloneView 也不例外。您无需为这一个区域性提供商单独维护一个 S3 客户端,只需将其添加为远程,就可以像对待 Amazon S3、Wasabi 或工作流中其他任何基于存储桶的存储一样对待它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Arvan Cloud 作为 S3 兼容远程连接

Arvan Cloud 通过 rclone 的 S3 后端进行访问,因此其设置流程与 RcloneView 支持的其他所有 S3 兼容服务相同:Access Key、Secret Key,以及指向 Arvan 对象存储服务的自定义端点。这里没有 OAuth 浏览器登录流程 — 您只需从 Arvan Cloud 控制台生成密钥对,然后直接粘贴到新建远程向导中即可。

添加远程后,它的表现与文件浏览器(Explorer)中的其他面板完全一致:文件夹树导航、针对图片较多的存储桶的缩略图预览,以及与本地磁盘上相同的右键文件操作(复制、移动、重命名、获取大小)。RcloneView 可以在 Windows、macOS 和 Linux 上通过一个窗口挂载并同步 90 多个提供商,因此 Arvan Cloud 会与您的其他云并排存在,而不是孤立在单独的应用中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Arvan Cloud 作为新的 S3 兼容远程" class="img-large img-center" />

对于已经在 S3 工具上实现标准化的团队来说,这意味着存储桶策略、前缀和文件夹结构可以直接沿用 — 提供商的变化并不会改变对象存储模型本身。

## 同步和备份 Arvan Cloud 存储桶

远程连接后,使用同步向导配置一个单向任务,将本地文件夹 — 或另一个云远程 — 镜像到 Arvan Cloud 存储桶。在高级设置步骤中设置并发传输数和相等性检查器数量,并使用筛选器排除您不希望计入传输量的文件类型或文件夹,例如 `.iso` 镜像文件或嵌套的 `.git` 目录。

试运行(Dry Run)可让您在提交任务之前,准确预览将要复制或删除的文件。这在您首次针对一个已有存储桶进行同步、且不确定其中已有哪些内容时尤为重要。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中配置同步到 Arvan Cloud 存储桶的任务" class="img-large img-center" />

## 安排定期备份

同步任务验证通过后,将其保存到任务管理器(Job Manager)中;在 PLUS 许可下,还可以附加一个 crontab 风格的计划,使 Arvan Cloud 的备份能够自动运行,而无需手动触发。之后,任务历史(Job History)会记录每次运行的耗时、传输速度、文件数量和完成状态,为您核实计划备份是否真正完成提供依据。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="安排到 Arvan Cloud 存储的定期备份任务" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在您的 Arvan Cloud 对象存储控制台中生成 Access Key 和 Secret Key。
3. 在 RcloneView 中,使用这些凭据和 Arvan Cloud 的端点创建一个新的 S3 兼容远程。
4. 先运行一次试运行,然后保存一个计划同步任务用于持续备份。

将 Arvan Cloud 视为另一个 S3 端点,意味着您的云存储技术栈中需要维护的专用工具又少了一个。

---

**相关指南:**

- [使用 RcloneView 管理 Wasabi 存储 — 同步和备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Selectel 存储 — 同步和备份文件](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [解决 S3 Access Denied — RcloneView 权限错误](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
