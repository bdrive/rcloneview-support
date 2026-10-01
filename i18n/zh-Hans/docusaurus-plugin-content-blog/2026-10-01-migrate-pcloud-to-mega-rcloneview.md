---
slug: migrate-pcloud-to-mega-rcloneview
title: "将 pCloud 迁移到 MEGA — 使用 RcloneView 传输文件"
authors:
  - robin
description: "使用 RcloneView 将 pCloud 迁移到 MEGA：连接两个远程，运行 Dry Run，进行云到云复制，并通过 Folder Compare 验证。分步指南。"
keywords:
  - 将 pCloud 迁移到 MEGA
  - pCloud 到 MEGA 传输
  - 移动 pCloud MEGA 文件
  - 云到云迁移
  - RcloneView pCloud
  - RcloneView MEGA
  - pCloud MEGA 同步
  - 传输 pCloud 文件
  - rclone GUI 迁移
tags:
  - RcloneView
  - pcloud
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 pCloud 迁移到 MEGA — 使用 RcloneView 传输文件

> 无需手动下载再重新上传，通过可预览、可验证的云到云作业，将整个 pCloud 库迁移到 MEGA。

从 pCloud 切换到 MEGA 通常意味着一个庞大的档案，没有人愿意先把它下载到笔记本电脑上。RcloneView 将两个服务都连接为远程，因此您可以在一个窗口中按文件夹复制，并在停用旧账户之前检查结果。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 pCloud 和 MEGA 连接为远程

pCloud 使用基于浏览器的 OAuth：RcloneView 会打开登录页面，您批准访问后即可创建远程，无需 API 密钥。MEGA 使用您的电子邮件和密码。打开 **Remote > New Remote**，选择各个提供商，并起一个清晰的名称，例如 `pcloud-old` 和 `mega-new`。

两个远程都出现在 Remote Manager 中后，在两个 Explorer 面板中并排打开它们。RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载并同步 90 多种提供商，因此今后的迁移也可使用相同的布局。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 pCloud 和 MEGA 远程" class="img-large img-center" />

## 在云之间复制文件

将文件夹从一个远程拖到另一个远程即会复制，因为不同远程之间的传输是复制而不是移动。对于小文件夹，这样就足够了。对于整个库，请创建 Copy 或 Sync 作业，以便保存、重新运行，并在 Job History 中查看。

在验证结果之前，请保持源数据不变。Copy 作业会保留 pCloud 中的原有内容，因此即使中途中断，也可以安全地重复迁移。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 pCloud 到 MEGA 的云到云传输" class="img-large img-center" />

## 使用 Dry Run 预览并调整传输

请先运行 Dry Run。它会列出将被复制或删除的文件，而不会更改任何内容，从而在目标文件夹错误导致浪费数小时之前发现问题。在高级步骤中，您可以调整并发文件传输数量和 equality checker 数量。如果出现错误，先调低这些值是合理的第一步。

使用过滤步骤跳过不想迁移的文件类型或文件夹，例如旧的安装程序或 Google Docs 导出文件。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行迁移作业" class="img-large img-center" />

## 使用 Folder Compare 验证

传输完成后，打开 **Compare**，左侧为 pCloud，右侧为 MEGA。筛选仅存在于左侧的文件和有差异的文件，即可看到缺失或不一致的内容，并可直接在比较视图中复制其余文件。Transferring 选项卡和 Job History 会记录每次运行的大小和状态。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloud 与 MEGA 之间的 Folder Compare" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView**：请从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 通过 New Remote 添加 pCloud（OAuth）和 MEGA（电子邮件和密码）。
3. 创建一个从 pCloud 到 MEGA 的 Copy 作业，并运行 Dry Run。
4. 运行作业，然后在关闭旧账户之前使用 Folder Compare 验证。

经过预览和验证的复制，可以让有风险的账户切换变成一项常规任务。

---

**相关指南：**

- [将 pCloud 迁移到 Proton Drive](https://rcloneview.com/support/blog/migrate-pcloud-to-proton-drive-rcloneview)
- [将 MEGA 迁移到 Dropbox](https://rcloneview.com/support/blog/migrate-mega-to-dropbox-rcloneview)
- [修复 pCloud 同步错误](https://rcloneview.com/support/blog/fix-pcloud-sync-errors-rcloneview)

<CloudSupportGrid />
