---
slug: migrate-google-drive-to-onedrive-rcloneview
title: "如何将 Google Drive 迁移到 OneDrive——使用 RcloneView 的完整传输指南"
authors:
  - tayson
description: "正在从 Google Workspace 迁移到 Microsoft 365？了解如何使用 RcloneView 将 Google Drive 中的所有文件迁移到 OneDrive，同时不丢失文件夹结构。"
keywords:
  - migrate google drive to onedrive
  - google drive to onedrive transfer
  - switch google workspace to microsoft 365
  - move files google drive onedrive
  - google to microsoft migration
  - cloud to cloud migration tool
  - google drive onedrive sync
  - transfer google drive files
  - google workspace to office 365
  - cloud migration without data loss
tags:
  - google-drive
  - onedrive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何将 Google Drive 迁移到 OneDrive——使用 RcloneView 的完整传输指南

> 正在从 Google Workspace 切换到 Microsoft 365？最头疼的不是新应用，而是要在不丢失文件夹结构、共享设置的情况下，将数 TB 的文件从 Google Drive 迁移到 OneDrive——还不能把自己逼疯。

无论你的组织是在切换办公套件，还是只想在 OneDrive 上保留一份 Google Drive 的副本，迁移过程都可能很痛苦。Google Takeout 导出的是一个会丢失文件夹结构的 ZIP 文件。手动拖放又耗时太久。RcloneView 能妥善处理这一切——直接进行云到云传输，并保留你的文件夹结构。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么不用 Google Takeout？

Google Takeout 是 Google 官方的导出工具，但在迁移场景中存在明显局限：

- **导出为 ZIP** —— 你得到的是一个压缩包，而不是可直接使用的文件夹结构。
- **丢失组织结构** —— 共享云端硬盘和文件夹层级可能会被压平。
- **不支持增量更新** —— 如果导出过程中文件发生变化，你就得从头再来。
- **需要手动重新上传** —— 你仍然需要把所有内容上传到 OneDrive。

RcloneView 会直接将文件从 Google Drive 传输到 OneDrive，并保留原始文件夹结构。

## 分步迁移指南

### 1）连接两个账户

在 RcloneView 中同时添加 Google Drive 和 OneDrive 作为远程：

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and OneDrive remotes" class="img-large img-center" />

### 2）浏览与规划

在双栏浏览器中打开两个远程。左侧是 Google Drive，右侧是 OneDrive：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive and OneDrive side by side" class="img-large img-center" />

迁移前先审视一下你的 Google Drive 结构。确认以下几点：

- 需要迁移哪些文件夹（可能不是全部）。
- 总容量大小（会影响传输时间）。
- Google 文档/表格/幻灯片（这些需要转换格式——见下文）。

### 3）处理 Google 原生文件

Google 文档、表格和幻灯片并不是传统意义上的文件——它们是基于网页的。传输时，rclone 会自动将其转换为 Microsoft Office 格式：

| Google 格式 | 转换为 |
|---------------|------------|
| Google 文档 | .docx |
| Google 表格 | .xlsx |
| Google 幻灯片 | .pptx |
| Google 绘图 | .png |

此转换会在传输过程中自动完成。

### 4）开始传输

创建一个从 Google Drive 到 OneDrive 的**复制（Copy）**任务：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run migration job" class="img-large img-center" />

迁移时请使用**复制**（而非同步）。复制只会向目标位置添加文件——绝不会删除任何内容。

### 5）监控进度

实时查看传输情况：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive to OneDrive transfer" class="img-large img-center" />

### 6）通过文件夹对比进行校验

传输完成后，对比两侧内容以确保没有遗漏：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## 迁移小贴士

### 分批迁移

对于大容量硬盘（500 GB 以上），建议按文件夹逐批迁移，而不是一次性全部迁移：

1. 先迁移关键文件夹（文档、项目）。
2. 接着迁移共享文件夹。
3. 最后迁移归档和媒体文件。

这样一来，用户可以立即在 OneDrive 上开始使用最重要的文件进行工作。

### 处理速率限制

Google Drive 和 OneDrive 都有 API 速率限制。RcloneView 会自动遵守这些限制，但对于超大规模的迁移，你可以：

- 使用[带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)以避免触及限制。
- 将传输安排在非高峰时段进行。
- 让失败的传输自动重试（v1.3 新功能）。

### 运行增量更新

首次迁移完成后，再次运行同一个复制任务。它只会传输新增或有变化的文件——跳过已经复制过的部分。这样可以捕获迁移期间新加入 Google Drive 的任何文件。

## 迁移之后：保持两端同步

如果在过渡期内需要两个云盘同时保持活跃，可以设置定时同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

这样可以让 OneDrive 持续同步 Google Drive 中的任何更改，直至你完全切换完成。

## 常见问题

### “文件名过长”

OneDrive 的路径长度限制为 400 个字符。相比之下，Google Drive 的限制更宽松。如果遇到此问题，请在迁移前缩短嵌套过深的文件夹名称。

### 共享云端硬盘中的文件

Google 共享云端硬盘（团队云端硬盘）与你的个人“我的云端硬盘”是分开的。请将其作为单独的远程添加，或配置 rclone 以包含共享云端硬盘。

### 大文件

OneDrive Business 支持最大 250 GB 的文件。OneDrive Personal 同样支持最大 250 GB。开始迁移前请确认你最大的文件是否符合限制。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Google Drive 和 OneDrive** 作为远程。
3. **运行复制任务**——文件夹结构会自动保留。
4. **通过文件夹对比进行校验**——确保没有遗漏。
5. **安排增量更新**，直至过渡完成。

不要让文件迁移成为你平台切换过程中的瓶颈。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
