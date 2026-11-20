---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "将 iCloud Drive 迁移到 pCloud — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 iCloud Drive 文件迁移到 pCloud：连接两个远程，用 Dry Run 预览，运行云到云同步任务，并用文件夹比较进行验证。"
keywords:
  - iCloud Drive 到 pCloud
  - 迁移 iCloud Drive 到 pCloud
  - iCloud 到 pCloud 传输
  - 从 iCloud Drive 移动文件
  - pCloud 迁移工具
  - Windows 和 Linux 上的 iCloud Drive 替代方案
  - 云到云迁移 GUI
  - RcloneView iCloud Drive
  - RcloneView pCloud
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 iCloud Drive 迁移到 pCloud — 使用 RcloneView 传输文件

> 无需在多个访达窗口之间来回切换，也不必应付半途中断的浏览器上传，即可将 iCloud Drive 资料库迁移到 pCloud。

当你拥有的设备全是 Apple 设备时，iCloud Drive 很方便。可一旦加入了 Windows 笔记本或 Linux 工作站，许多用户就会寻找在所有平台上表现一致的云服务，而 pCloud 是常见的选择。RcloneView 在一个窗口中连接这两项服务，通过可重复运行的同步任务复制数据，并让你在取消任何服务之前先验证结果。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 iCloud Drive 和 pCloud 连接为远程

打开 **Remote** 选项卡并点击 **New Remote**。选择 **iCloud Drive**，输入 Apple 账户凭据，并完成 Apple 发送到你设备上的验证提示。rclone 的 iCloud Drive 后端不支持高级数据保护（Advanced Data Protection），因此必须在 Apple 账户中关闭该设置。iCloud Drive 支持需要 rclone v1.69 或更高版本；RcloneView 自带的内置 rclone 满足这一要求，因此无需额外安装任何东西。

接下来添加 **pCloud**。它使用 OAuth，会打开浏览器窗口，登录后远程会自动保存。无需任何 API 密钥。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

保存两个远程后，在左侧 Explorer 面板中打开 iCloud Drive，在右侧面板中打开 pCloud。右键点击你打算迁移的 iCloud 文件夹，使用 **Get Size** 在开始前查看涉及的数据量。

## 使用 Dry Run 预览迁移

在 **Home** 选项卡中创建同步任务。将 iCloud Drive 文件夹设为源，将新的 pCloud 文件夹（例如 `/From-iCloud`）设为目标。保持单向方向（“Modifying destination only”），确保 iCloud Drive 永远不会被更改。

运行之前，点击 **Dry Run**。RcloneView 会列出将要复制的所有文件以及将在目标端删除的内容，而不会实际移动任何数据。这正是发现意外情况的好时机：Mac 软件包文件夹、`.DS_Store` 文件，或被遗忘的旧手机备份文件夹。在 Step 3 中添加自定义过滤器，排除任何不想带过去的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and pCloud side by side in RcloneView for a cloud-to-cloud transfer" class="img-large img-center" />

请注意，这不是 Apple 与 pCloud 之间的服务器端复制：数据会流经运行 RcloneView 的计算机，因此有线网络连接和保持唤醒的计算机有助于大规模迁移一次完成。

## 运行、监控与验证

启动任务，并在 **Transferring** 选项卡中查看进度、文件数和当前速度。如果连接中断，再次运行同一任务即可。同步只传输缺失或不同的文件，因此已完成的文件会被跳过。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring an iCloud Drive to pCloud transfer in the RcloneView Transferring tab" class="img-large img-center" />

任务完成后，打开 **Compare**，左侧为 iCloud Drive，右侧为 pCloud。开启“Show left-only files”和“Show different files”。如果结果为空，说明迁移已完成。**Job History** 会记录每次运行的状态、大小和文件数。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the iCloud Drive to pCloud migration with RcloneView Folder Compare" class="img-large img-center" />

## 开始使用

RcloneView 可在 Windows、macOS 和 Linux 上运行，因此迁移完成后，你可以在任何一台计算机上管理新的 pCloud 资料库。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 iCloud Drive（Apple 账户登录）和 pCloud（浏览器 OAuth）添加为远程。
3. 创建从 iCloud Drive 到 pCloud 文件夹的单向同步任务，并用 **Dry Run** 检查。
4. 运行任务，然后在停用 iCloud 副本之前用 **Compare** 确认结果。

经过验证且可重复运行的迁移，让你在切换云服务时不必担心遗漏任何文件。

---

**相关指南：**

- [将 iCloud Drive 迁移到 Google Drive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [管理 pCloud 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [修复 iCloud Drive 同步错误 — 如何使用 RcloneView 解决](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
