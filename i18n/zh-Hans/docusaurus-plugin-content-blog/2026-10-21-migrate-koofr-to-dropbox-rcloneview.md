---
slug: migrate-koofr-to-dropbox-rcloneview
title: "将 Koofr 迁移到 Dropbox — 使用 RcloneView 传输文件"
authors:
  - robin
description: "使用 RcloneView 将 Koofr 迁移到 Dropbox：连接两个远程，用 Dry Run 预览，执行云到云复制，并通过 Folder Compare 验证结果。"
keywords:
  - 将 Koofr 迁移到 Dropbox
  - Koofr 到 Dropbox 传输
  - RcloneView Koofr
  - RcloneView Dropbox
  - 云到云迁移
  - Koofr 备份
  - Dropbox 同步
  - rclone GUI
  - 在云之间移动文件
  - 云迁移工具
tags:
  - RcloneView
  - koofr
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Koofr 迁移到 Dropbox — 使用 RcloneView 传输文件

> 以云到云传输的方式将 Koofr 资料库迁移到 Dropbox，复制前先预览，完成后再通过比较进行验证。

从 Koofr 迁移到 Dropbox，通常是因为共享团队文件夹、客户工作流程，或某个只与 Dropbox 集成的应用。把所有内容下载到笔记本电脑再重新上传，既慢又容易出错。RcloneView 是基于 rclone 的 GUI，它将两个服务连接为远程，并在一个作业中完成它们之间的传输，全程都能查看进度。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Koofr 和 Dropbox 连接为远程

打开 Remote 选项卡并点击 **New Remote**。Dropbox 使用基于浏览器的 OAuth：RcloneView 会打开登录页面，您批准访问后，无需 API 密钥即可连接远程。如果目标是 Dropbox for Business 账户，请在创建远程时启用 `dropbox_business` 设置。以同样的方式从提供商列表中添加 Koofr，并使用您要离开的账户登录。

RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口管理 90 多个云存储服务，因此两个远程可以并排显示在同一个资源管理器中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Koofr 和 Dropbox 远程" class="img-large img-center" />

## 复制前规划文件夹布局

在左侧资源管理器面板中打开 Koofr，在右侧打开 Dropbox。决定是迁移全部内容，还是只迁移部分文件夹。拥有多年客户文件夹的摄影工作室可以每次复制一年，而小型团队则可以一次迁移整个目录树。右键菜单中的 **Get Size** 选项会显示文件夹的数据量，有助于估算作业所需时间。

使用作业向导中的过滤步骤，可以跳过 `.git/` 文件夹等杂项，或超过最大大小的文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中比较 Koofr 和 Dropbox 文件夹" class="img-large img-center" />

## 先执行 Dry Run，再进行传输

在 Home 选项卡中创建作业：以 Koofr 为源，以 Dropbox 为目标，并选择 Copy，在您确认无误之前保持原始文件不变。先运行 **Dry Run**。它会列出将被复制的文件，让您在任何数据移动之前发现错误的目标文件夹。然后运行作业；云到云传输会在两个服务之间以流式方式进行，Transferring 选项卡会显示速度、文件数量和进度。

当 Dropbox 同时收到大量调用时，可能会放慢请求。如果看到速率限制提示，请在 Advanced Settings 中减少文件传输数量，并让作业重试。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 Koofr 到 Dropbox 的云到云传输" class="img-large img-center" />

## 验证并保留作业历史

复制完成后，对两个文件夹打开 **Compare**。Left-only 文件会显示未送达的内容；大小差异会单独标记。在比较视图中通过复制来补齐缺失，然后在 **Job History** 中查看每次运行的状态、耗时和文件数量。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Koofr 到 Dropbox 迁移的作业历史" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **Remote > New Remote** 添加 Koofr 和 Dropbox。
3. 创建从 Koofr 到 Dropbox 的 Copy 作业并运行 Dry Run。
4. 运行作业，然后在清理 Koofr 副本之前用 Folder Compare 进行验证。

可以预览和验证的迁移，才能让您有信心地完成。

---

**相关指南：**

- [管理 Koofr 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [管理 Dropbox 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dry Run — 在 RcloneView 中预览云同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
