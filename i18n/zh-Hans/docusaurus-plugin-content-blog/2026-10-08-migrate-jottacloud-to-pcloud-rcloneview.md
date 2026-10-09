---
slug: migrate-jottacloud-to-pcloud-rcloneview
title: "将 Jottacloud 迁移到 pCloud — 使用 RcloneView 传输文件"
authors:
  - casey
description: "使用 RcloneView 将文件从 Jottacloud 迁移到 pCloud:连接两个远程,用 Dry Run 预览,执行云到云传输,并通过 Folder Compare 验证。"
keywords:
  - Jottacloud 迁移到 pCloud
  - Jottacloud 到 pCloud 传输
  - Jottacloud pCloud 迁移
  - 云到云传输
  - RcloneView Jottacloud
  - RcloneView pCloud
  - 移动 Jottacloud 文件
  - Jottacloud 替代方案
  - rclone GUI 迁移
tags:
  - RcloneView
  - jottacloud
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Jottacloud 迁移到 pCloud — 使用 RcloneView 传输文件

> RcloneView 通过可预览、可验证的云到云传输,将 Jottacloud 资料库迁移到 pCloud,而无需手动下载再重新上传。

从 Jottacloud 切换到 pCloud,通常意味着多年积累的照片、文档和归档,没有人愿意手动下载再上传。RcloneView 将两个服务连接为远程,并在它们之间传输数据,因此你可以在一个窗口中预览、执行并验证迁移。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

打开 Remote > New Remote 添加 Jottacloud,然后添加 pCloud。pCloud 使用 OAuth,因此会打开浏览器窗口供你登录,远程会自动连接。Jottacloud 通过同一个 New Remote 向导,按照提示完成设置。

在各自的 Explorer 面板中打开每个远程并浏览根文件夹。两侧都能列出内容,就说明在迁移任何数据之前连接已经正常。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Jottacloud 和 pCloud 远程" class="img-large img-center" />

## 使用 Dry Run 预览传输

将 Jottacloud 放在左侧、pCloud 放在右侧,可以拖动文件夹快速复制,也可以为整个资料库创建同步作业。在不同远程之间,拖放执行的是复制而不是移动,因此在你另行决定之前,源数据保持不变。

对于完整迁移,请在四步向导中创建作业,选择源文件夹和目标文件夹,并先运行 Dry Run。它会列出将被复制或删除的文件,而不会做出任何更改。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 Jottacloud 到 pCloud 的云到云传输" class="img-large img-center" />

## 运行作业并观察进度

启动作业,并在 Transferring 标签页中跟踪进度、速度和文件数量。对于大型资料库,请在第 2 步中保持适中的传输数量,并将"Retry entire sync if fails"保持为 3,这样短暂的网络中断就不会使运行终止。

如果打算分阶段迁移,可使用过滤步骤按文件夹、文件时间或 Image、Document 等预定义类型进行限制。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中监控 Jottacloud 到 pCloud 的传输" class="img-large img-center" />

## 在注销任何账户之前先验证

打开 Compare,将 Jottacloud 和 pCloud 并排显示。显示仅左侧和不同的文件,找出未到达的内容,然后只复制这些项目。在决定停用旧账户之前,请在 Job History 中查看最终状态。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中使用 Folder Compare 验证迁移" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView**:从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 将 Jottacloud 和 pCloud 添加为远程,并浏览两者。
3. 创建从 Jottacloud 到 pCloud 的同步或复制作业,并运行 Dry Run。
4. 运行作业,然后用 Folder Compare 和 Job History 确认。

经过预览和验证的传输,可以让你切换存储提供商,而不会危及现有文件。

---

**相关指南:**

- [使用 RcloneView 将 Jottacloud 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [使用 RcloneView 将 pCloud 迁移到 Dropbox](https://rcloneview.com/support/blog/migrate-pcloud-to-dropbox-rcloneview)
- [管理 Jottacloud 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
