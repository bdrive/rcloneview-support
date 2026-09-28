---
slug: migrate-put-io-to-google-drive-rcloneview
title: "将 Put.io 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - jay
description: "使用 RcloneView 将文件从 Put.io 迁移到 Google Drive,这是一款跨平台 GUI 工具,可传输、校验并整理云端内容。"
keywords:
  - put.io 迁移到 google drive
  - 迁移 put.io 文件
  - putio 迁移
  - RcloneView put.io
  - 云到云传输
  - google drive 迁移
  - 将下载的种子转移到云端
  - rclone put.io
  - 从 put.io 传输到 drive
  - 云存储迁移工具
tags:
  - RcloneView
  - putio
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Put.io 迁移到 Google Drive — 使用 RcloneView 传输文件

> 不必在两个独立的网页界面之间来回切换,用可视化的拖放操作,把 Put.io 上存储的所有内容都迁移到 Google Drive。

Put.io 是存放已下载种子和远程文件的理想中转站,但它并不像 Google Drive 那样适合长期归档或团队共享。一旦 Put.io 上的下载完成,许多用户仍然需要手动将文件拉取下来,再重新上传到别处。RcloneView 可以同时连接这两项服务,让你直接在云与云之间复制或移动内容,而无需先经过本地磁盘中转。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 并排连接 Put.io 与 Google Drive

RcloneView 的 Explorer 最多可同时支持四个面板,因此你可以在一个面板中打开 Put.io 账户,在另一个面板中打开 Google Drive,并排查看。Put.io 和 Google Drive 的添加方式完全相同 —— 都是基于浏览器的 OAuth 登录,无需手动复制单独的 API 密钥或访问令牌。两个远程都配置完成后,各自会显示为独立的标签页,切换也是即时的。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Put.io and Google Drive as separate remotes in RcloneView" class="img-large img-center" />

同时打开两个面板后,你可以逐个文件夹浏览 Put.io 的下载内容,精确决定要迁移哪些内容,而不是盲目地全部迁移。与仅支持挂载的工具不同,RcloneView 在 FREE 许可下也提供同步与文件夹比较功能,因此一次性传输除了运行所需的时间之外不会产生任何额外成本。

## 以任务方式执行传输

与其逐个拖动文件,不如通过 4 步同步向导设置一个 Copy 或 Move 任务。选择 Put.io 作为源、Google Drive 文件夹作为目标,然后在 Advanced Settings 步骤中根据你的网络情况调整并发文件传输数量。如果不确定任务范围是否正确,先运行一次 Dry Run —— 它会列出所有将被复制的文件而不做任何实际改动,在进行大规模媒体迁移前值得一试。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files from Put.io to Google Drive in RcloneView" class="img-large img-center" />

对于一次性迁移,使用 One-time 执行模式,这样就不会保存为重复任务。如果你打算在完成迁移前继续向 Put.io 添加文件,不妨将其保存为任务,以便之后重新运行,只拉取新增内容。

## 使用 Folder Compare 验证迁移结果

传输完成后,打开 Folder Compare 并排检查两个位置。它会标记出仅存在于一侧的文件以及大小不一致的文件,方便你在从 Put.io 删除任何内容之前确认迁移已经完整。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Put.io to Google Drive transfer" class="img-large img-center" />

Job History 也会保留本次传输的记录 —— 文件数量、总大小以及耗时 —— 如果你需要分多次会话批量迁移大型资料库,这会很有帮助。

## 快速上手

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过浏览器 OAuth 登录流程添加你的 Put.io 远程。
3. 用同样的方式,通过浏览器 OAuth 登录添加你的 Google Drive 远程。
4. 创建一个从 Put.io 到目标文件夹的 Copy 或 Move 任务,先运行 Dry Run,再正式执行。

将 Put.io 中的存储清理干净并迁移到一个永久的 Google Drive 归宿,可以让你的下载内容保持整洁有序,而无需再进行第二次手动上传。

---

**相关指南:**

- [将 OneDrive 迁移到 Google Drive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [管理 Put.io 存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [将 Put.io 媒体流式传输并同步到 NAS 或云端 — RcloneView](https://rcloneview.com/support/blog/stream-sync-putio-media-nas-cloud-rcloneview)

<CloudSupportGrid />
