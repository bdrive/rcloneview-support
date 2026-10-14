---
slug: sync-pcloud-to-google-drive-rcloneview
title: "将 pCloud 同步到 Google Drive — 使用 RcloneView 进行云备份"
authors:
  - jay
description: "使用 RcloneView 将 pCloud 同步到 Google Drive：连接两个远程，用 Dry Run 预览，并在一个窗口中安排云到云备份。"
keywords:
  - 同步 pcloud 到 google drive
  - pcloud 到 google drive 备份
  - RcloneView pcloud
  - 云到云同步
  - pcloud google drive 传输
  - 备份 pcloud 文件
  - 第二份副本 云备份
  - 计划云同步
  - rclone GUI
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 pCloud 同步到 Google Drive — 使用 RcloneView 进行云备份

> 通过可预览、可运行、可计划的云到云同步作业，在 Google Drive 中保留 pCloud 文件的第二份副本。

把重要文件只放在一个云上，会面临账户被锁定、误删除和同步失误的风险。将 pCloud 镜像到 Google Drive 可以在另一家提供商处获得独立副本。RcloneView 通过 OAuth 连接这两项服务，然后以作业的方式在它们之间同步数据。RcloneView 可在一个窗口中挂载并同步 90 多个提供商，支持 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 pCloud 和 Google Drive

两家提供商都使用基于浏览器的 OAuth 登录。在 RcloneView 中打开新建远程对话框，选择 pCloud，并在浏览器打开后登录。对 Google Drive 重复同样的操作。授权完成后，每个远程都会出现在 Remote Manager 和 Explorer 中，您可以在双窗格布局中并排浏览文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 pCloud 和 Google Drive 远程" class="img-large img-center" />

## 同步前先检查

设想一位自由职业设计师，有一个 300 GB 的 pCloud 项目归档，想在 Drive 中建立镜像。在动任何东西之前，先对这两个文件夹使用 Folder Compare。它会显示哪些文件只存在于一侧、哪些不同、哪些相同，让您清楚地知道首次同步会做什么。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中比较 pCloud 和 Google Drive 文件夹" class="img-large img-center" />

## 创建同步作业

同步向导分为四步：选择源和目标、调整高级设置、设置过滤器，以及可选的计划。选择 pCloud 作为源，Google Drive 作为目标，并使用只修改目标的单向选项。使用过滤器跳过临时文件或限制文件大小，并运行 Dry Run 查看将被复制或删除的文件列表。由于单向同步会使目标与源保持一致，请务必检查 Dry Run 输出中是否有意外删除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 pCloud 到 Google Drive 的云到云传输" class="img-large img-center" />

## 监控与计划

运行作业并实时查看传输进度，然后在 Job History 中查看结果。使用 PLUS 许可证时，可以添加 crontab 风格的计划，使镜像定期刷新（RcloneView 会在 System Tray 中保持运行）。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中为 pCloud 到 Google Drive 的同步作业设置计划" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView**：请从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 使用 OAuth 登录将 pCloud 和 Google Drive 添加为远程。
3. 比较源文件夹和目标文件夹，然后创建单向同步作业。
4. 运行 Dry Run，执行作业，并在 Job History 中查看。

在另一家提供商处拥有经过验证的第二份副本，可将单点故障转变为真正的备份。

---

**相关指南：**

- [管理 pCloud 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [将 Google Drive 迁移到 pCloud — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [将 Dropbox 同步到 pCloud — 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
