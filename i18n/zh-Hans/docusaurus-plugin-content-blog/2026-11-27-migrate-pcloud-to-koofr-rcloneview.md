---
slug: migrate-pcloud-to-koofr-rcloneview
title: "从 pCloud 迁移到 Koofr — 使用 RcloneView 传输文件"
authors:
  - jay
description: "使用 RcloneView 将 pCloud 迁移到 Koofr。在云与云之间复制文件夹,用 Dry Run 预览,用 Folder Compare 验证,省去下载再上传的循环。"
keywords:
  - pcloud 迁移到 koofr
  - pcloud 到 koofr 传输
  - pcloud koofr 迁移
  - 将文件从 pcloud 移动到 koofr
  - 云到云迁移
  - 欧洲云存储迁移
  - rcloneview pcloud
  - rcloneview koofr
  - koofr 文件传输工具
  - rclone gui 云迁移
tags:
  - RcloneView
  - pcloud
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 从 pCloud 迁移到 Koofr — 使用 RcloneView 传输文件

> 按文件夹将你的 pCloud 资料库迁移到 Koofr,事先预览每一项更改,并确认没有任何遗漏。

团队和个人从 pCloud 迁移到 Koofr 的原因多种多样:合并账户、将 Koofr 作为中心枢纽,或者在另一家服务商保留第二份副本。把所有内容下载到笔记本电脑再重新上传,既浪费磁盘空间,又要耗费好几天时间。RcloneView 在一个窗口中连接两个服务,并通过 rclone 在它们之间复制数据,因此迁移会作为一个可监控、可重复、可验证的托管任务运行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 pCloud 和 Koofr 连接为远程

打开 **Remote** 选项卡并点击 **New Remote**。pCloud 使用 OAuth:选择 pCloud 后,浏览器会打开,你可以登录并批准访问。无需 API 密钥。然后为 Koofr 添加第二个远程,并输入设置表单要求的账户凭据。

两个远程都创建好后,在两个 Explorer 面板中并排打开它们。你可以在 **Settings > Layout** 中将布局切换为水平或垂直分割,并通过文件夹树、列表视图或适用于照片文件夹的缩略图视图浏览每个账户。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 pCloud 和 Koofr 远程" class="img-large img-center" />

在迁移任何内容之前,右键点击 pCloud 的顶层文件夹并使用 **Get Size**。了解总大小有助于确认 Koofr 账户是否有足够的空间。

## 在云与云之间复制文件夹

如果只有少量文件夹,可直接从 pCloud 面板拖到 Koofr 面板。在不同远程之间拖动会执行 **Copy**,因此 pCloud 上的原始文件保持不变。

如果是完整迁移,请改为创建任务。在 Home 选项卡中点击 **Sync**,选择 pCloud 文件夹作为源、Koofr 文件夹作为目标,并为任务命名,例如 `pcloud-to-koofr`。在 Advanced Settings 中,如果希望按哈希和大小比较文件,请启用 **checksum**;并将 **Retry entire sync if fails** 保持默认值 3,这样连接中断时运行也不会停止。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 pCloud 到 Koofr 的云到云传输" class="img-large img-center" />

先运行一次 **Dry Run**。它会列出所有将被复制或删除的文件,是在真实数据移动之前发现错误目标路径的可靠方法。RcloneView 在 Windows、macOS 和 Linux 上通过一个窗口挂载和同步 90+ 服务商,因此以后迁移其他组合时也可以沿用相同的任务流程。

## 监控传输并查看历史记录

任务运行期间,**Transferring** 选项卡会显示进度、速度和文件数量,你可以随时取消。迁移 400 GB 拍摄素材的摄影师可以将应用最小化到系统托盘,任务会在后台继续运行。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中监控从 pCloud 到 Koofr 的传输进度" class="img-large img-center" />

完成后,打开 **Job History** 查看状态(Completed、Errored 或 Canceled)、总大小、速度和文件数量。如果在切换期间向 pCloud 添加了新文件,请再次运行同一任务。只会传输新增或更改的文件。

## 使用 Folder Compare 验证

点击 **Compare**,在左侧加载 pCloud 文件夹,在右侧加载 Koofr 文件夹。使用 **left-only files** 筛选找出 Koofr 上缺少的内容,并用 **Copy right** 补齐。当两侧显示一致时,迁移即告完成,你可以决定何时停用 pCloud 上的副本。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="迁移后在 RcloneView 中比较 pCloud 和 Koofr 文件夹" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **New Remote** 添加 pCloud(OAuth 浏览器登录)和 Koofr 作为远程。
3. 创建从 pCloud 到 Koofr 的 Sync 任务,并用 **Dry Run** 预览。
4. 运行任务,查看 **Job History**,并用 **Folder Compare** 确认。

一次经过规划和验证的迁移,意味着你可以按自己的时间表切换服务商,而不必等待手动复制最终完成。

---

**相关指南:**

- [管理 pCloud 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [管理 Koofr 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修复 Koofr 同步错误](https://rcloneview.com/support/blog/fix-koofr-sync-errors-rcloneview)

<CloudSupportGrid />
