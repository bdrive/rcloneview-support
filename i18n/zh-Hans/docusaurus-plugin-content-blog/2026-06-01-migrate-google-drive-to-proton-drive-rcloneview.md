---
slug: migrate-google-drive-to-proton-drive-rcloneview
title: "将 Google Drive 迁移到 Proton Drive — 使用 RcloneView 安全传输文件"
authors:
  - kai
description: "使用 RcloneView 将文件从 Google Drive 迁移到 Proton Drive——这款 GUI 云传输工具让隐私迁移变得简单可靠。"
keywords:
  - migrate google drive to proton drive
  - google drive to proton drive transfer
  - privacy cloud storage migration
  - RcloneView cloud transfer tool
  - cloud-to-cloud file migration
  - proton drive migration tool
  - sync google drive to proton drive
  - move files from google drive to proton drive
  - secure cloud migration GUI
  - google drive privacy migration
tags:
  - google-drive
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 迁移到 Proton Drive — 使用 RcloneView 安全传输文件

> 无需命令行即可将文件从 Google Drive 迁移到 Proton Drive——并验证每一个字节都安全到达。

越来越多注重隐私的用户正从 Google Drive 迁移到 Proton Drive，以享受端到端加密和瑞士数据主权带来的保护。无论你是需要保护信源的记者、处理敏感客户数据的企业，还是只是想重新掌控个人文件的普通用户，手动迁移海量数据都是不现实的。RcloneView 提供了可视化的 GUI 工作流，让你能够高效、可验证地在两个服务之间传输所有文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Google Drive 和 Proton Drive

Google Drive 通过 OAuth 连接——在 Remote 标签页中点击 **New Remote**，选择 Google Drive，并完成基于浏览器的登录。无需 API 密钥或手动处理令牌；RcloneView 会自动处理 OAuth 流程。

Proton Drive 需要你的电子邮件地址、密码，以及可选的双重身份验证代码。在 New Remote 向导中选择 Proton Drive，输入你的凭据，RcloneView 内置的 rclone 后端就会建立连接。Proton Drive 所需的最低 rclone 版本为 v1.69+，RcloneView 默认已内置该版本。当两个远程都出现在 Explorer 面板中后，你就可以并排浏览 Google Drive 和 Proton Drive 的目录树了。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## 使用 Folder Compare 在迁移前进行审查

在开始传输之前，使用 RcloneView 的 **Folder Compare**（文件夹对比）功能来审查源和目标。从 Home 标签页启动它，将左侧面板指向 Google Drive 根目录，右侧面板指向目标 Proton Drive 文件夹。对比视图会高亮显示仅存在于左侧（尚未迁移）的文件、仅存在于右侧的文件，以及任何大小差异。

在恢复中断的迁移任务时，这一步骤尤为有价值：你可以立即看到哪些文件已经成功迁移，从而将传输任务聚焦在剩余的差异部分——避免对已经安全到达的数据进行代价高昂的重复传输。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view showing Google Drive vs Proton Drive differences in RcloneView" class="img-large img-center" />

## 运行迁移任务

在远程连接完成并对比文件夹之后，打开 **Job Manager**（任务管理器）并创建一个新的 Copy 或 Sync 任务。将 Google Drive 文件夹设置为源，对应的 Proton Drive 文件夹设置为目标。在 Advanced Settings（高级设置）步骤中，启用 **checksum**（校验和），以按哈希值而不仅仅是大小来比较文件——这对 Proton Drive 尤为重要，因为其加密存储格式可能导致 API 报告的文件大小略有差异。

底部面板中的 **Transferring**（传输中）标签页会显示实时传输进度：文件数量、已传输数据量和传输速度。如果任务因网络中断而中断，只需再次运行即可——rclone 的传输逻辑会跳过已经匹配的文件，并从中断处继续。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Real-time cloud-to-cloud transfer progress between Google Drive and Proton Drive in RcloneView" class="img-large img-center" />

## 在过渡期间安排持续同步

如果你的团队正处于渐进式过渡阶段，同事们仍在向 Google Drive 添加文件，你可以安排一个循环同步任务，让 Proton Drive 保持最新。使用 **PLUS** 许可证，任务向导中的 Schedule（计划）步骤支持 crontab 风格的规则——例如，每晚凌晨 2 点的同步可确保新文件自动流向 Proton Drive，无需人工干预。

RcloneView 的 **Job History**（任务历史）会记录每一次执行：开始时间、持续时间、传输的文件数、速度以及最终状态（Completed / Errored / Canceled）。这为整个迁移时间线提供了可审计的记录，也让你能够轻松确认切换何时完成。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History tab showing completed Google Drive to Proton Drive migration runs in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 点击 **New Remote**，通过 OAuth 浏览器登录添加 Google Drive。
3. 再次点击 **New Remote**，使用你的电子邮件和密码添加 Proton Drive。
4. 使用 **Folder Compare** 预览两侧的差异。
5. 创建启用了校验和的 Copy 或 Sync 任务并运行传输。

隐私迁移无需牺牲便利性——RcloneView 让迁移到 Proton Drive 就像任何其他云到云传输一样简单直接。

---

**相关指南：**

- [管理 Proton Drive — 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 将硬盘备份到 Proton Drive](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [使用 RcloneView 将 Proton Drive 同步到其他云盘](https://rcloneview.com/support/blog/sync-proton-drive-backup-other-clouds-rcloneview)

<CloudSupportGrid />
