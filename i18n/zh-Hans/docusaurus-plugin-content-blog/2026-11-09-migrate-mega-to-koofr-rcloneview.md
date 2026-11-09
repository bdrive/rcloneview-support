---
slug: migrate-mega-to-koofr-rcloneview
title: "将 MEGA 迁移到 Koofr — 使用 RcloneView 传输文件"
authors:
  - casey
description: "使用 RcloneView 将 MEGA 迁移到 Koofr:连接两个远程,通过 Dry Run 预览,执行云到云复制,并用 Folder Compare 验证结果。"
keywords:
  - 将 MEGA 迁移到 Koofr
  - MEGA 到 Koofr 传输
  - MEGA Koofr 迁移
  - 将文件从 MEGA 移到 Koofr
  - RcloneView MEGA
  - RcloneView Koofr
  - 云到云传输
  - MEGA 替代方案 欧洲存储
tags:
  - RcloneView
  - mega
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 MEGA 迁移到 Koofr — 使用 RcloneView 传输文件

> 通过可预览、可验证的云到云任务,将 MEGA 账户中的文件移入 Koofr,而不是手动下载再重新上传。

把多年积累的文件从 MEGA 迁出,通常意味着先下载到笔记本再重新上传,工作量翻倍,而且每次网络波动都会中断。RcloneView 让你并排连接 MEGA 和 Koofr,并作为单个任务运行传输。RcloneView 在一个窗口中即可挂载并同步 90 多个提供商,支持 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

打开 Remote 选项卡并点击 New Remote。MEGA 使用凭据输入方式:输入你的账户邮箱和密码。Koofr 从提供商列表中以同样方式添加。两者都出现在 Remote Manager 后,将它们分别在两个 Explorer 面板中打开,即可同时查看源和目标。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 MEGA 和 Koofr 远程" class="img-large img-center" />

先浏览 MEGA 的目录树。决定是迁移全部内容还是仅迁移部分文件夹,范围更窄能让首次运行更快、也更容易检查。

## 先预览,再传输

你可以将文件夹从 MEGA 面板拖到 Koofr 面板;在不同远程之间拖动执行的是复制,因此 MEGA 上的原始文件保持不变。对于较大规模的迁移,请改为创建 Sync 或 Copy 任务。先运行 Dry Run:它会列出将被复制的文件,让你在写入任何内容之前发现错误的目标路径。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 MEGA 到 Koofr 的云到云传输" class="img-large img-center" />

在任务的 Advanced Settings 中可以调整并发文件传输数。如果任一服务开始变慢或返回错误,请降低 equality checkers 和传输数,并让重试设置处理临时故障。

## 监控与验证

在显示速度、文件数和大小的 Transferring 选项卡中查看进度。任务完成后,打开 Job History 确认状态和传输总量。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="显示已完成 MEGA 到 Koofr 传输的 Job History" class="img-large img-center" />

最后,将 MEGA 放在左侧、Koofr 放在右侧使用 Folder Compare。筛选仅在左侧的文件和不同的文件,找出未到达的内容,并可直接在比较视图中复制过去。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="MEGA 与 Koofr 之间的 Folder Compare" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote 选项卡中添加你的 MEGA 和 Koofr 远程。
3. 创建 Copy 或 Sync 任务,并运行 Dry Run 预览。
4. 运行任务,然后在清理 MEGA 上的任何内容之前,用 Folder Compare 验证结果。

在比较结果无误之前保留 MEGA 上的副本,这样在验证期间原始数据始终可用。

---

**相关指南:**

- [将 Koofr 迁移到 MEGA](https://rcloneview.com/support/blog/migrate-koofr-to-mega-rcloneview)
- [将 MEGA 迁移到 pCloud](https://rcloneview.com/support/blog/migrate-mega-to-pcloud-rcloneview)
- [管理 Koofr 云同步与备份](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
