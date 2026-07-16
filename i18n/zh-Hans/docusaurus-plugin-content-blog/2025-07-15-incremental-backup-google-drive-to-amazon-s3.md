---
slug: backup-google-drive-to-amazon-s3
title: 使用 RcloneView 将 Google Drive 备份到 Amazon S3
authors:
  - jay
description: 使用 RcloneView 的点击式工具将 Google Drive 文件夹复制到 Amazon S3——只需连接一次，运行备份，并保留额外副本以获得安心保障。
keywords:
  - rcloneview
  - google drive
  - amazon s3
  - cloud backup
  - cloud sync
  - rclone gui
tags:
  - google-drive
  - amazon-s3
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Google Drive 备份到 Amazon S3

> 让团队协作在 Google Drive 中持续顺畅运行，同时在 Amazon S3 中保存安全副本。借助 RcloneView，你只需点击操作即可完成整个备份——无需脚本，无需命令行。

## 这个组合为何有用？

- **Google Drive** 是你日常存放文档、表格和共享文件夹的地方。
- **Amazon S3** 通过版本控制、生命周期策略和低成本归档层，长年保存副本。
- **RcloneView** 通过双栏浏览器、对比预览和计划任务将两者连接起来，让你随时了解正在传输的内容。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 开始之前

1. **挑选重要的文件夹** —— 检查项目空间、共享云端硬盘以及任何交接文件夹。跳过不需要的缓存或临时文件夹。
2. **创建或选择一个 S3 存储桶** —— 确定区域、存储桶名称和默认加密方式（SSE-S3 或 SSE-KMS）。[AWS 文档](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)
3. **检查提供商限制** —— Google 将 Drive API 传输限制为每个用户每天 **750 GB**，单个文件最大 **5 TB**。大规模迁移应分几天进行。[Google for Developers](https://developers.google.com/drive/api/guides/limits) [Google 帮助中心](https://support.google.com/drive/answer/37603)
4. **规划你的文件夹结构** —— 类似 `drive-backup/marketing/2025/` 这样的 S3 前缀，能让日后浏览快照更加方便。
5. **在应用中先熟悉一遍** —— 浏览 [浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage) 中的浏览器截图，让界面布局变得熟悉。

## 步骤 1 — 在 RcloneView 中连接两个服务

1. 打开 **RcloneView** → 点击 **`+ New Remote`**。
2. 选择 **Google Drive**，登录，并为该远程设置一个清晰的名称，例如 `Drive-Main`。如果要备份共享云端硬盘，请在设置过程中启用它们。
3. 添加另一个 **Amazon S3** 远程。粘贴你的访问密钥/密钥（或使用 IAM 角色），选择目标存储桶，并将其命名为 `S3-Backup`。
4. 确认两个远程都并排显示在浏览器中。如需参考，可查看 [远程管理器指南](/howto/rcloneview-basic/remote-manager) 中的更多截图。

<img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />

## 步骤 2 — 规划备份任务

- **试运行一个文件夹**：在左侧打开 `Drive-Main`，右侧打开 `S3-Backup`。拖动一个小型测试文件夹查看传输对话框。
- **使用对比工具**：Compare 工具会在复制前突出显示新增和更改的文件。这与 [对比文件夹内容](/howto/rcloneview-basic/compare-folder-contents) 中展示的界面相同。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare view in RcloneView before copying Google Drive files" class="img-medium img-center" />

## 步骤 3 — 运行首次备份

1. 在工具栏中选择 **Copy**（一次性复制）或 **Sync (copy direction)**（如果你希望目标端镜像 Drive，同时不删除 Drive 上的数据）。
2. 如果想跳过像 `/Personal/` 这样的文件夹，可添加过滤规则。
3. 先运行一次 **Dry Run（试运行）**。你将看到待传输内容的清晰摘要。
4. 点击 **Start**。在任务监视器中查看进度——已传输字节数、文件数量以及任何警告都会显示在这里。

## 步骤 4 — 安排后续复制计划

首次运行确认无误后：

1. 直接从完成对话框中将其保存为 **Job（任务）**。
2. 打开 **Job Manager（任务管理器）** → 设置每日或每周计划。此流程与 [任务调度指南](/howto/rcloneview-advanced/job-scheduling-and-execution) 中的方式相同。
3. 查看日历预览以确认时间，之后交给 RcloneView 自动处理。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Scheduling a backup job in RcloneView" class="img-medium img-center" />

## 保持 S3 副本整洁

- **生命周期策略**：将超过 90 天的备份移动到 Glacier Instant Retrieval 或 Deep Archive，以降低成本。[AWS 文档](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)
- **存储桶版本控制**：如果你希望保留每一次覆盖记录，可以启用它。这样每次 RcloneView 运行都会成为一个可恢复的还原点。
- **标签**：为对象添加诸如 `Team=Finance` 或 `Compliance=SOC2` 之类的标签，方便计费和审计工作。

我们的博客文章 [RcloneView 云到云传输](/blog/Effortless-Cloud-to-Cloud-Transfers-&-Syncing) 提供了更多关于过滤和组织云端副本的思路。

## 自信地监控与恢复

- **任务历史**：每次运行都会记录字节数、耗时和错误信息。当审计人员询问时，可直接从界面导出日志。
- **云端仪表盘**：使用 S3 Storage Lens 或 CloudWatch 来观察存储桶增长情况。[AWS 文档](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html)
- **恢复步骤**：在 S3 中选择所需的快照，然后使用相同的 RcloneView 任务模板将其复制回 Drive 或另一个存储桶。

## 相关指南与资源

- [在 RcloneView 中快速设置 Google OAuth](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Amazon S3 远程设置](/howto/remote-storage-connection-settings/s3) —— 附带逐步的凭证截图。
- [实时传输监控](/howto/rcloneview-basic/real-time-transfer-monitoring) —— 了解如何读取任务进度图表。

## 常见问题

**Google 文档、表格和幻灯片会被一并传输吗？**
会的。RcloneView 在备份运行时会以你选择的格式（DOCX、XLSX 等）导出这些文件。

**如果我达到了 750 GB 的每日限制怎么办？**
RcloneView 会暂停并显示明确的提示信息。等待 24 小时或切换到另一个 Google 服务账号，然后重新启动任务——它会从中断处继续。

**我可以使用 Wasabi 或 Cloudflare R2 代替 AWS S3 吗？**
当然可以。在 RcloneView 中设置一个兼容 S3 的远程，并将其指向该提供商的终端节点即可。

**准备好让你的 Google Drive 文件长期安全且可搜索了吗？**

<CloudSupportGrid />
