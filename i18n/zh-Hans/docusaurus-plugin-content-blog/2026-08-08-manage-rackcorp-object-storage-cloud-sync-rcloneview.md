---
slug: manage-rackcorp-object-storage-cloud-sync-rcloneview
title: "管理 RackCorp 对象存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "将 RackCorp 的 S3 兼容对象存储连接到 RcloneView，享受拖放式文件浏览、定时同步和跨云备份。"
keywords:
  - RackCorp 对象存储
  - RackCorp S3
  - RcloneView RackCorp
  - 管理 RackCorp 文件
  - RackCorp 云备份
  - RackCorp 同步
  - S3 兼容存储 GUI
  - 对象存储 GUI 客户端
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 RackCorp 对象存储 — 使用 RcloneView 同步和备份文件

> 使用与管理其他所有云存储相同的拖放工作流,浏览、同步和备份 RackCorp 对象存储存储桶。

RackCorp 的 S3 兼容对象存储为团队提供了大型超大规模云厂商之外的区域性替代方案,但管理存储桶通常意味着要在独立的 CLI 工具或浏览器控制台标签页之间来回切换。RcloneView 通过 rclone 的 S3 协议连接 RackCorp,并将你的存储桶与 Google Drive、OneDrive 或其他任何已管理的远程存放在同一个资源管理器窗口中。与仅支持挂载的工具不同,RcloneView 在 FREE 许可下也能同步和比较文件夹。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 RackCorp 连接到 RcloneView

添加 RackCorp 对象存储的方式与添加其他任何 S3 兼容提供商相同:打开 Remote 标签页 > New Remote,选择 S3 兼容选项,然后输入你的 Access Key ID、Secret Access Key 以及 RackCorp 端点 URL。RcloneView 会将这些凭据直接传递给 rclone 的配置,因此无需安装单独的驱动或插件 — 内置的 rclone 二进制文件会处理协议协商。

远程创建完成后,会在 Explorer 面板中显示为一个新标签页。你可以使用 List View 浏览存储桶以查看详细元数据,或者切换到 Thumbnail View,如果你存储的是图片并想快速进行视觉浏览。左侧的文件夹树可以让你在前缀之间跳转,而无需重新输入路径。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中为 RackCorp 对象存储添加新的 S3 兼容远程" class="img-large img-center" />

在文件列表中右键单击任意对象即可访问 Copy、Cut、Rename、Get Size 或 Get Public Link — 与本地文件相同的右键菜单,直接应用于你的 RackCorp 存储桶。

## 将 RackCorp 与其他云同步

对象存储很少单独使用。一种常见模式是在 Google Drive 或 OneDrive 中保留一份日常编辑用的工作副本,同时将完成的资产归档到 RackCorp,以获得更便宜、更长期的保留。RcloneView 的 4 步 Sync 向导可以在不使用终端的情况下处理这一切:选择 RackCorp 作为源或目标,设置过滤器以排除临时文件或过大的资产,然后选择单向同步,让归档只接收新材料。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中配置 RackCorp 与另一个远程之间的云到云同步任务" class="img-large img-center" />

在开始完整传输之前,先运行 Dry Run 精确预览将要复制或删除的文件。这在对象存储场景中尤其有用,因为意外重新上传大型存储桶可能会浪费带宽和时间。

## 通过计划任务自动化备份

对于使用 PLUS 许可的团队,RackCorp 同步任务可以按照 crontab 风格的计划运行,而不需要每次都手动触发。只需设置一次分钟、小时和星期字段,RcloneView 就会在后台保持你的 RackCorp 存储桶保持最新 — 之后可以在 Job History 标签页中确认每次运行的状态、传输速度和文件数量。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中为 RackCorp 对象存储设置计划同步任务" class="img-large img-center" />

如果数据完整性比原始速度更重要,可以在 Advanced Settings 步骤中启用校验和验证 — RcloneView 会比较文件哈希值,而不仅仅是大小和时间戳,从而捕获传输过程中的静默损坏。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 前往 Remote 标签页 > New Remote,选择 RackCorp 的 S3 兼容选项。
3. 输入你的 Access Key ID、Secret Access Key 和 RackCorp 端点以完成连接。
4. 设置同步或备份任务,使 RackCorp 与你的其他云远程保持同步。

连接完成后,RackCorp 的行为就与 RcloneView 工作区中的任何其他标签页一样 — 无需单独的控制台,也无需记忆 CLI 参数。

---

**相关指南:**

- [管理 Scaleway 对象存储 — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 Selectel 云存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [VFS 缓存 — 在 RcloneView 中实现更快的云挂载性能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
