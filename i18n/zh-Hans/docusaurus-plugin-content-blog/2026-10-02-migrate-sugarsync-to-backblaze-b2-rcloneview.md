---
slug: migrate-sugarsync-to-backblaze-b2-rcloneview
title: "将 SugarSync 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView 将文件从 SugarSync 移至 Backblaze B2:连接两个远程,通过 Dry Run 预演传输,并用 Folder Compare 验证结果。"
keywords:
  - SugarSync 迁移到 Backblaze B2
  - SugarSync 到 B2 传输
  - SugarSync 迁移
  - Backblaze B2 备份
  - 云到云迁移
  - RcloneView SugarSync
  - SugarSync 替代存储
  - rclone SugarSync B2
  - 云迁移 GUI
  - 对象存储备份
tags:
  - RcloneView
  - sugarsync
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 SugarSync 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 将多年积累的 SugarSync 文件夹迁入 Backblaze B2 存储桶,无需手动下载再重新上传。

长期使用 SugarSync 的团队往往希望把归档迁移到对象存储中,因为存储桶和应用密钥更适合自动化。RcloneView 在一个窗口中同时连接两个服务,因此您可以直接将文件夹从 SugarSync 复制到 Backblaze B2,并在停用旧账户之前检查结果。使用 FREE 许可证即可以完整读写权限连接 S3、Azure 或 Backblaze B2。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

打开 Remote 选项卡并点击 New Remote。使用账户凭据添加 SugarSync,然后使用 Backblaze 密钥管理页面中的 Application Key ID 和 Application Key 添加 Backblaze B2。请先在 Backblaze 中创建目标存储桶,以便有明确的目标。

将 SugarSync 放在一个 Explorer 面板中,将 B2 存储桶放在另一个面板中。在配置任何内容之前,先浏览两者以确认可以访问。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 SugarSync 和 Backblaze B2 远程" class="img-large img-center" />

## 通过拖放或同步任务进行复制

对于较小的文件夹,将其从 SugarSync 面板拖到 B2 面板即可。在不同远程之间拖动执行的是复制,因此原始文件保持不变。对于完整迁移,请使用 4 步同步向导:选择源和目标、设置传输数量、添加过滤器,并可选择使用 PLUS 许可证进行计划。

首次运行时请使用 Copy 任务而非 Sync 任务,这样目标上不会有任何内容被删除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 SugarSync 到 Backblaze B2 的云到云传输" class="img-large img-center" />

## 预览、监控和验证

先运行 Dry Run。它会列出将被复制的文件,让您在数据移动之前发现错误的路径。任务运行时,Transferring 选项卡会显示进度、速度和文件数。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 选项卡中监控 SugarSync 到 B2 的传输" class="img-large img-center" />

完成后,打开 Compare 并排查看 SugarSync 和 B2。仅左侧的文件就是尚未到达的内容,您可以直接在比较视图中将它们复制过去。Job History 会保留每次运行的记录。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 确认 SugarSync 与 Backblaze B2 内容一致" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 SugarSync 和 Backblaze B2 添加为远程,并创建目标存储桶。
3. 创建 Copy 任务,运行 Dry Run,然后开始传输。
4. 在关闭 SugarSync 账户之前,使用 Folder Compare 验证。

B2 中有一份经过验证的副本,您就可以放心地停用旧服务。

---

**相关指南:**

- [使用 RcloneView 将 SugarSync 迁移到 Google Drive 和 OneDrive](https://rcloneview.com/support/blog/migrate-sugarsync-google-drive-onedrive-rcloneview)
- [使用 RcloneView 管理 SugarSync 存储](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Backblaze B2 存储](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
