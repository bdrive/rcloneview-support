---
slug: migrate-pcloud-to-google-drive-rcloneview
title: "将 pCloud 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - morgan
description: "使用 RcloneView 将文件从 pCloud 移动到 Google Drive:连接两个远程,运行 Dry Run,进行云到云复制,并用 Folder Compare 验证。"
keywords:
  - 将 pcloud 迁移到 google drive
  - pcloud 到 google drive 传输
  - 将 pcloud 文件移动到 google drive
  - pcloud google drive 迁移
  - 云到云传输
  - rcloneview pcloud
  - rcloneview google drive
  - pcloud 替代方案迁移
  - 传输 pcloud 数据
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 pCloud 迁移到 Google Drive — 使用 RcloneView 传输文件

> 无需先把所有内容下载到自己的磁盘,即可将整个 pCloud 账户迁移到 Google Drive。

统一使用 Google Workspace 的团队往往会继承存放在 pCloud 中多年的文件。手动下载再重新上传既缓慢又容易出错。RcloneView 在一个窗口中连接这两项服务,进行云到云复制,并让你在停用旧账户之前逐文件夹验证结果。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 pCloud 和 Google Drive

在 RcloneView 中,这两项服务都使用 OAuth 浏览器登录,因此无需粘贴 API 密钥。打开 Remote 标签页,点击 New Remote,选择 pCloud,并在弹出的浏览器窗口中批准访问。对 Google Drive 重复同样的操作。两者都出现在 Remote Manager 中后,在两个 Explorer 面板中并排打开它们:左侧是 pCloud,右侧是 Google Drive。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 pCloud 和 Google Drive 远程" class="img-large img-center" />

先浏览 pCloud 目录树,并对顶层文件夹使用 Get Size。例如,拥有 1.5 TB 项目文件夹的摄影工作室可以按文件夹规划迁移,而不是用一个巨大的作业完成。

## 云到云复制

对于少量文件夹,将它们从 pCloud 面板拖到 Google Drive 面板即可。在不同远程之间拖动会执行 Copy,因此你的 pCloud 原件保持不变。对于整个账户,请改为创建作业:打开 Sync 向导,选择 pCloud 作为源、Google Drive 作为目标,并选择 Copy 类型的作业,这样两端都不会删除任何内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 pCloud 到 Google Drive 的云到云传输" class="img-large img-center" />

在 Advanced Settings 中,适中的 Number of file transfers 是合理的起点;Google Drive 会应用 API 限制,过高的并发可能触发重试。将 "Retry entire sync if fails" 保持默认值 3,这样短暂的网络中断不会使作业终止。

## Dry Run、过滤器和监控

正式运行之前,使用 Dry Run 预览将被复制的文件。Filtering 步骤可让你排除 `.git/` 文件夹等无用内容,或按最大文件大小和文件时长进行限制,当只需迁移近期项目时非常方便。作业开始后,Transferring 标签页会显示进度、速度和文件数,Job History 会保留每次运行的记录。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中查看 pCloud 到 Google Drive 的作业历史" class="img-large img-center" />

## 使用 Folder Compare 验证

作业完成后,打开 Compare,左侧为 pCloud,右侧为 Google Drive。筛选 left-only 文件即可看到未到达的内容,并可直接在比较视图中将其复制过去。RcloneView 在 Windows、macOS 和 Linux 上都能在一个窗口中挂载并同步 90 多个提供商,因此同一个工具既能完成迁移,也能完成检查。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中对 pCloud 和 Google Drive 进行 Folder Compare" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 New Remote 将 pCloud 和 Google Drive 添加为远程。
3. 对从 pCloud 到 Google Drive 的 Copy 作业运行 Dry Run,然后正式运行。
4. 在关闭旧账户之前,使用 Compare 确认没有剩余的 left-only 文件。

分阶段复制加上可视化检查,可以把有风险的账户迁移变成一项例行任务。

---

**相关指南:**

- [将 pCloud 同步到 Google Drive — 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-pcloud-to-google-drive-rcloneview)
- [将 Google Drive 迁移到 pCloud — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [管理 pCloud 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
