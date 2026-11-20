---
slug: fix-junk-system-files-ds-store-thumbs-db-sync-rcloneview
title: "清理云同步中的系统垃圾文件 — 用 RcloneView 排除 .DS_Store 和 Thumbs.db"
authors:
  - kai
description: "别再让 .DS_Store、Thumbs.db 和 desktop.ini 弄乱你的云备份。使用 RcloneView 的同步过滤器、Dry Run 和文件夹比较将它们排除在外。"
keywords:
  - 云同步排除 .DS_Store
  - Thumbs.db 云备份
  - desktop.ini 同步杂乱文件
  - 删除云存储中的垃圾文件
  - rclone 排除系统文件
  - RcloneView 自定义过滤器
  - macOS Windows 云同步清理
  - 隐藏文件同步过滤器
  - 跨平台云同步技巧
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 清理云同步中的系统垃圾文件 — 用 RcloneView 排除 .DS_Store 和 Thumbs.db

> 操作系统生成的元数据文件会让备份变得杂乱。几条过滤规则就能把它们彻底挡在外面。

打开一个同时被 Mac 和 Windows PC 使用过的共享云文件夹，你通常会发现每个目录里都有 `.DS_Store`，每批图片旁边都有 `Thumbs.db`，整个目录树中还散落着 `desktop.ini`。它们体积很小，却会增加文件数量，在比较时显示为“不同”，并触发不必要的重复上传。RcloneView 可以通过过滤规则将它们排除在同步任务之外，然后确认目标位置是干净的。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么这些文件总是反复出现

macOS 访达会写入 `.DS_Store` 来保存文件夹的显示设置。Windows 资源管理器会创建 `Thumbs.db` 来缓存图片缩略图，并创建 `desktop.ini` 来保存文件夹自定义设置。每当有人浏览已同步的文件夹或已挂载的驱动器时，操作系统都可能重写这些文件，于是下一次同步会将其视为“已更改”的文件并再次传输。

设想一家设计公司在 NAS 上有 40,000 个项目文件夹，每晚同步到云端。即使实际工作只在少数文件夹中发生了变化，每个被浏览过的文件夹仍可能产生新的元数据文件，使任务日志变得杂乱，并淹没真正重要的传输。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing file counts inflated by system metadata files" class="img-large img-center" />

## 为同步任务添加排除过滤器

在 **Job Manager** 中打开任务并点击 **Edit**，然后进入 **Step 3: Filtering Settings**。在自定义过滤器中，为每个文件名添加一条排除规则：`.DS_Store`、`Thumbs.db` 和 `desktop.ini`。如果团队还使用 Office，可以考虑排除以 `~$` 开头的临时锁定文件。这些规则使用 rclone 的过滤语法，与文档中 `.iso` 和 `.git/` 等示例的语法相同。

过滤器在任务每次运行时都会生效，包括 PLUS 许可证下的计划运行，因此只需设置一次。使用 Job Manager 中的 **Export** 将任务保存为 JSON 文件，再在其他计算机上 **Import**，即可让所有人使用相同的规则。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing sync job settings in RcloneView to add exclusion filters" class="img-large img-center" />

## 预览、清理与验证

保存后运行 **Dry Run**。预览中应不再列出待传输的元数据文件。如果它们仍然出现，请检查每条规则的拼写和大小写，因为拼写错误是过滤器看似被忽略的常见原因。

过滤器可以阻止新副本被传输，但已经存在于云端的文件仍会保留。在 Explorer 面板中打开目标位置，找到残留文件，并通过右键 **Delete** 删除。若要全面检查，请在源和目标之间打开 **Compare**，使用“Show right-only files”找出之前运行遗留的元数据文件。在 PLUS 许可证下，Folder Compare with Filter 可以将相同的排除规则应用到比较视图。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using RcloneView Folder Compare to find leftover .DS_Store and Thumbs.db files" class="img-large img-center" />

## 开始使用

RcloneView 在 Windows、macOS 和 Linux 上通过一个窗口挂载和同步 90+ 种服务，因此无论文件由哪个操作系统创建，都能使用相同的过滤规则。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 编辑同步任务，将 `.DS_Store`、`Thumbs.db` 和 `desktop.ini` 添加为自定义排除过滤器。
3. 运行 **Dry Run**，确认元数据文件不再出现在传输列表中。
4. 使用 **Compare** 找出并删除已残留在云端的文件。

更短的任务日志和更干净的备份，让真正重要的更改更容易被发现。

---

**相关指南：**

- [修复同步过滤器无法排除文件的问题 — 在 RcloneView 中设置正确的排除规则](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [最大文件夹深度和最大文件大小过滤器 — 在 RcloneView 中控制同步内容](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [修复 macOS 桌面和文稿文件夹显示为空的问题 — RcloneView 权限设置](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
