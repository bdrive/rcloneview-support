---
slug: migrate-icloud-drive-to-onedrive-rcloneview
title: "将 iCloud Drive 迁移到 OneDrive — 使用 RcloneView 传输文件"
authors:
  - alex
description: "使用 RcloneView 的云到云同步、模拟运行预览和文件夹比较验证工具，将 iCloud Drive 文件迁移到 Microsoft OneDrive 的分步指南。"
keywords:
  - iCloud Drive to OneDrive migration
  - migrate iCloud to Microsoft OneDrive
  - iCloud Drive OneDrive transfer
  - switch from iCloud to OneDrive
  - cloud migration Apple Microsoft
  - iCloud Drive backup OneDrive
  - RcloneView iCloud migration
  - move files from iCloud to OneDrive
  - cross-platform cloud file migration
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - onedrive
  - macos
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 iCloud Drive 迁移到 OneDrive — 使用 RcloneView 传输文件

> 从苹果的 iCloud 生态系统切换到 Microsoft OneDrive，并不意味着必须手动下载再重新上传数十 GB 的文件——RcloneView 会将迁移作为直接的云到云传输来执行。

当团队统一采用 Microsoft 365，或个人用户从以 Mac 为中心的工作流转向 Windows 时，将 iCloud Drive 文件迁移到 OneDrive 是首要的实际难题。将所有内容下载到本地磁盘再重新上传既缓慢又容易中断，而且无法轻松验证每个文件是否完整到达。RcloneView 将其作为服务器端传输处理，内置进度跟踪、模拟运行预览和文件夹比较验证功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 iCloud Drive 迁移到 OneDrive？

iCloud Drive 在苹果硬件内部运行流畅，但在该生态系统之外的原生集成有限。相比之下，OneDrive 已嵌入 Windows 文件资源管理器，直接连接 Microsoft Office 和 Teams，并在 Windows、macOS、iOS 和 Android 上保持一致的同步行为。推行 Microsoft 365 的组织通常要求员工将现有文件库迁移到 OneDrive，以便协作、版本历史记录和访问策略都通过统一的托管系统进行。

RcloneView 中的 iCloud Drive 支持需要 rclone v1.69 或更高版本。RcloneView 内置了已满足此要求的 rclone 二进制文件，因此在开始之前无需单独安装 rclone。

<img src="/support/images/en/blog/new-remote.png" alt="Adding both iCloud Drive and OneDrive as remotes in the RcloneView Remote Manager" class="img-large img-center" />

## 在 RcloneView 中设置两个远程

首先添加你的 iCloud Drive 远程：进入 **Remote** 标签，点击 **New Remote**，选择 **iCloud Drive**。按照屏幕提示完成 Apple 账户身份验证。然后以同样方式添加你的 OneDrive 远程 —— OneDrive 使用 OAuth 浏览器登录，会弹出浏览器窗口供你登录 Microsoft 账户，授权完成后远程即被保存。

两个远程都注册完成后，在 Explorer 面板中并排打开它们。这样你可以在任何传输开始之前实时查看两边的文件树。在 iCloud Drive 根目录使用 **Get Size** 确认数据总量，并扫描文件夹结构，找出可能在 OneDrive 上表现不同的命名差异或深层嵌套路径。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and OneDrive displayed side by side in the RcloneView two-panel Explorer for cloud-to-cloud transfer" class="img-large img-center" />

## 通过同步任务运行迁移

在 **Home** 标签中创建一个新的 Sync 任务。将 iCloud Drive（或特定子文件夹）设为源，将目标 OneDrive 路径设为目的地。执行前，先运行一次 **Dry Run**：RcloneView 会列出所有将要传输的文件和文件夹，而不实际移动任何内容。对于一个 50 GB 的 iCloud 资料库，此扫描只需几分钟，并能提前发现任何超大文件或 OneDrive 处理方式不同的文件名字符。

与仅支持挂载的工具不同，RcloneView 在 FREE 许可下也支持同步和比较文件夹——因此从模拟运行到实际传输再到验证的完整迁移工作流，无需付费升级即可完成。

模拟运行结果确认无误后，启动实际传输。**Transferring** 标签会显示实时进度、速度以及当前正在传输的文件。如果连接中断，只需重新运行同一任务：rclone 会跳过目标位置已存在且大小匹配的文件，因此传输可以从中断处高效地恢复。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view in RcloneView confirming iCloud Drive and OneDrive folder contents match after migration" class="img-large img-center" />

## 使用文件夹比较验证迁移结果

Sync 任务完成后，在 **Home** 标签中打开 **Folder Compare**，指向同一个 iCloud Drive 源和 OneDrive 目的地。比较引擎会显示哪些文件完全相同、哪些大小不同，以及仅出现在一侧的文件。使用仅左侧和仅右侧的筛选器，是无需手动逐一检查文件即可确认零数据丢失的最快方式。

如果你正在进行分阶段迁移——部分设备仍在积极使用 iCloud Drive，同时将其他设备过渡到 OneDrive——PLUS 许可用户可以为同步任务附加计划任务。每次按计划运行时，添加到 iCloud Drive 的任何新文件都会自动复制到 OneDrive，直到切换完成为止。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Drive to OneDrive sync job in RcloneView for a phased migration transition" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **Remote** > **New Remote** 添加你的 **iCloud Drive** 远程，并完成 Apple 账户身份验证。
3. 通过 OAuth 浏览器登录添加你的 **OneDrive** 远程。
4. 创建以 iCloud Drive 为源、OneDrive 为目的地的 Sync 任务；先运行 **Dry Run**。
5. 实际传输完成后，使用 **Folder Compare** 确认所有文件迁移正确。

完成到 OneDrive 的完整迁移后，你可以在 Windows、Microsoft 365 和 Teams 之间获得一致的访问体验——不再让文件无限期地分散在两个服务之间。

---

**相关指南：**

- [使用 RcloneView 管理 iCloud Drive 云同步](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [管理 OneDrive — 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 iCloud Drive 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
