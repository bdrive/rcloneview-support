---
slug: manage-google-drive-shared-with-me-rcloneview
title: "管理 Google Drive 的“与我共享” — 使用 RcloneView 同步和备份文件"
authors:
  - alex
description: "使用 RcloneView 跨平台图形界面浏览、同步和备份 Google Drive“与我共享”文件夹中的内容，不再遗漏共享内容。"
keywords:
  - google drive shared with me
  - google drive shared with me sync
  - rcloneview google drive
  - backup shared google drive folders
  - google drive gui client
  - shared_with_me rclone
  - google drive collaboration backup
  - manage shared google drive files
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Google Drive 的“与我共享” — 使用 RcloneView 同步和备份文件

> 其他人与你共享的文件存放在与你自己的 Drive 相互独立的空间中 — RcloneView 让你能像浏览自己的文件一样轻松地浏览、备份和同步这些共享内容。

Google Drive 的“与我共享”区域保存了同事、客户或协作者共享给你账户的所有文件和文件夹，但默认情况下它并不属于你常规的 Drive 文件夹结构。这种分离使共享内容很容易被遗漏，尤其是在需要将客户文件夹归档到本地或镜像到另一个云端以妥善保存时。RcloneView 通过将“与我共享”空间作为一个独立的可浏览远程进行连接来解决这个问题，这样你就可以像对待工作流程中的任何其他文件夹一样对待共享内容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接“与我共享”内容

标准的 Google Drive 远程只显示你拥有的或已放入自己文件夹结构中的文件。要访问与你共享的项目，RcloneView 的远程配置为 Google Drive 远程提供了 `shared_with_me` 设置 — 启用该选项会让连接指向“与我共享”视图，而不是你的个人 Drive 根目录。这意味着你无需第二个 Google 账户或浏览器变通方法即可访问客户共享的文件夹；只需在“新建远程”向导中配置一次，共享的文件树就会像其他连接一样出现在资源管理器面板中。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Google Drive remote configured for Shared with Me content in RcloneView" class="img-large img-center" />

连接后，“与我共享”远程的表现与普通文件源相同：文件夹树导航、图片缩略图预览，以及用于复制、下载和获取公共链接的标准右键菜单，都能正常使用。RcloneView 还能同步和比较文件夹 — 这在 FREE 免费许可下也可使用 — 因此共享内容不再局限于只读浏览。

## 在共享文件夹消失之前进行备份

如果所有者撤销访问权限或删除源文件，共享文件夹可能会从你的视图中消失，这在依赖他人的 Drive 获取项目交付成果时是一个真实存在的风险。从“与我共享”远程运行一个单向同步任务，同步到你自己的 Google Drive、本地磁盘或对象存储桶，可以创建一份由你自己掌控的独立副本。将任务方向配置为“仅修改目标”，这样备份目标就会始终镜像共享文件夹的当前状态，而不会改动原始内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Shared with Me folder to a backup destination in RcloneView" class="img-large img-center" />

对于持续性的客户关系，过滤设置可让你排除不需要归档的文件类型 — 可以在同步向导第 3 步中使用预定义或自定义过滤规则跳过 Google Docs 或特定扩展名的文件，使备份内容专注于真正重要的文件。

## 安排持续保护

如果客户每周都会更新共享文件夹，仅执行一次性复制是不够的。PLUS 许可用户可以为同步任务附加 crontab 风格的计划，让“与我共享”内容按周期自动备份，无需手动重新运行任务。之后，任务历史记录会记录每次运行的状态、传输大小和耗时，为你提供一份清晰的审计记录，方便查看共享内容的最近捕获时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for a Google Drive Shared with Me remote" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建一个新的 Google Drive 远程，并在设置过程中启用 `shared_with_me` 选项。
3. 在资源管理器面板中浏览“与我共享”文件树，确认预期的文件夹都已显示。
4. 设置一个单向同步任务到备份目标，如果你使用 PLUS 许可，还可以为其安排计划。

共享内容不应成为你备份策略中的盲区 — 将其纳入 RcloneView，就能让它获得与你管理的其他内容同等的保护。

---

**相关指南：**

- [管理 Google Drive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [修复 Google 共享云端硬盘权限错误 — 如何使用 RcloneView 解决](https://rcloneview.com/support/blog/fix-google-shared-drive-permission-errors-rcloneview)
- [使用 RcloneView 同步两个 Google Drive 账户](https://rcloneview.com/support/blog/sync-two-google-drive-accounts-rcloneview)

<CloudSupportGrid />
