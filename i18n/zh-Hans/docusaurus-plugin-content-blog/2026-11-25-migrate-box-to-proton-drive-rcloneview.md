---
slug: migrate-box-to-proton-drive-rcloneview
title: "将 Box 迁移到 Proton Drive — 使用 RcloneView 传输文件"
authors:
  - casey
description: "使用 RcloneView 将文件从 Box 移动到 Proton Drive。连接两个云、用 Dry Run 预览、复制文件夹，并用 Folder Compare 验证迁移结果。"
keywords:
  - 将 box 迁移到 proton drive
  - box 到 proton drive 传输
  - 将文件从 box 移动到 proton drive
  - box 迁移工具
  - proton drive 迁移
  - 云到云迁移
  - 加密云存储迁移
  - RcloneView box
  - RcloneView proton drive
tags:
  - RcloneView
  - box
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 迁移到 Proton Drive — 使用 RcloneView 传输文件

> 无需先把所有内容下载到笔记本电脑，就能将 Box 文件夹迁移到 Proton Drive 的端到端加密存储中。

团队和自由职业者常常因为协作功能而从 Box 起步，之后再把敏感档案迁移到注重隐私的 Proton Drive。手动操作意味着要从 Box 下载数 GB 数据，再通过浏览器重新上传。RcloneView 在同一个窗口中连接这两项服务，让你可以直接复制文件夹、检查结果，并保留一个可重复运行的任务来处理之后新增的内容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Box 和 Proton Drive

打开 **Remote tab > New Remote**，先添加 Box。Box 使用 OAuth，因此会打开一个浏览器窗口让你登录并授权访问——无需复制 API 密钥。如果你的组织使用 Box for Business，请在远程设置中设置 `box_sub_type = enterprise`，以便 RcloneView 能看到你的企业文件夹。

接着，使用你的 Proton 邮箱和密码添加 Proton Drive；如果账户启用了 2FA，还需输入 2FA 验证码。Proton Drive 支持需要 rclone v1.69 或更高版本；RcloneView 自带的嵌入式 rclone 满足这一要求，底部栏会显示当前使用的版本。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Box 和 Proton Drive 远程" class="img-large img-center" />

## 规划传输

在左侧 Explorer 面板中打开 Box，在右侧打开 Proton Drive。对 Box 的顶层文件夹使用 **Get Size**，查看要迁移的数据量，并在 Proton Drive 中创建与你想保留的结构相对应的目标文件夹结构。

Box Notes 和其他 Box 原生文档并不是普通文件。在同步向导的 **Filtering Settings** 中，预定义的 **Box Docs** 过滤器可以帮助你有意识地处理它们，而不是在传输过程中才发现。请在迁移前，先在 Box 内导出这些格式中你需要的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中并排打开 Box 和 Proton Drive 进行云到云传输" class="img-large img-center" />

## 执行迁移

如果只有少量文件夹，直接将它们从 Box 面板拖到 Proton Drive 面板即可——在不同远程之间拖动会复制数据。若要完整迁移，请创建一个以 Box 为源、Proton Drive 为目标的 **Sync** 任务。Proton Drive 在客户端加密文件，因此从适中的并发数开始比较稳妥；如果出现错误，可以在 Advanced Settings 中降低文件传输数量。

务必先点击 **Dry Run**。它会列出将被复制和将被删除的内容，防止意外镜像破坏 Proton Drive 中的现有内容。然后运行任务，并在 **Transferring** 标签页中查看进度、速度和文件数。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 的 Transferring 标签页中监控 Box 到 Proton Drive 的传输" class="img-large img-center" />

## 注销 Box 之前先验证

任务完成后，打开 **Compare**，一侧是 Box 文件夹，另一侧是 Proton Drive 文件夹。仅左侧存在的文件表示未能迁移过去的内容；使用 Copy right 补齐缺口。Job History 会记录每次运行的状态、大小和文件数，供你留档。

RcloneView 在 Windows、macOS 和 Linux 上通过一个窗口挂载和同步 90+ 提供商，因此同样的设置也适用于你的下一次迁移。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History 确认 Box 到 Proton Drive 的迁移已完成" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过浏览器登录添加 Box，并使用邮箱、密码和可选的 2FA 添加 Proton Drive。
3. 创建从 Box 到 Proton Drive 的 Sync 任务，并用 Dry Run 预览。
4. 运行任务，然后在关闭 Box 账户之前用 Folder Compare 确认结果。

经过仔细验证的迁移，让你可以放心地迁移到加密存储，确信没有遗漏任何内容。

---

**相关指南：**

- [管理 Box 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Proton Drive — 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 将 Dropbox 迁移到 Proton Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)

<CloudSupportGrid />
