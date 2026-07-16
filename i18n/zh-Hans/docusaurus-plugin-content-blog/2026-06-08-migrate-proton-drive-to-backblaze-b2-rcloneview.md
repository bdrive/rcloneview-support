---
slug: migrate-proton-drive-to-backblaze-b2-rcloneview
title: "将 Proton Drive 迁移到 Backblaze B2 — 使用 RcloneView 进行安全的云端传输"
authors:
  - jay
description: "使用 RcloneView 将文件从 Proton Drive 迁移到 Backblaze B2。逐步指南，教您将加密云存储数据迁移到经济实惠的对象存储。"
keywords:
  - Proton Drive to Backblaze B2
  - migrate Proton Drive Backblaze
  - Proton Drive cloud migration
  - Backblaze B2 cloud backup
  - RcloneView cloud transfer
  - cloud-to-cloud file migration
  - move files from Proton Drive
  - Backblaze B2 object storage backup
  - Proton Drive export backup
tags:
  - proton-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Proton Drive 迁移到 Backblaze B2 — 使用 RcloneView 进行安全的云端传输

> 使用 RcloneView 将您的 Proton Drive 文件迁移到 Backblaze B2 经济实惠的对象存储 — 无需手动下载。

Proton Drive 提供强大的端到端加密和以隐私为先的存储,是存放敏感个人及商业数据的热门选择。随着存储需求的增长,或当您需要一个具有成本效益的次级备份目的地时,将文件迁移到 Backblaze B2 就成为一个实用的选择。无论是需要归档数 TB RAW 文件的摄影工作室,还是需要整合云资产的开发团队,都可以从 B2 的可扩展对象存储中受益,同时保留 Proton 注重隐私的主存储。RcloneView 让这种云到云的迁移变得简单直接,可在提供商之间直接流式传输数据,无需先将文件下载到本地设备。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Proton Drive 和 Backblaze B2

在开始迁移之前,请先在 RcloneView 中配置两个云端远程。首先添加您的 Proton Drive 账户:在菜单栏中导航到远程标签页,然后点击"新建远程"。从提供商列表中选择 Proton Drive,并输入您的 Proton 账户邮箱和密码。如果您启用了双重身份验证,RcloneView 会在设置过程中提示您输入 2FA 验证码。Proton Drive 支持需要 rclone v1.69 或更高版本 — RcloneView 内置的 rclone 会自动处理此项。

接下来,添加您的 Backblaze B2 远程。再次点击"新建远程"并选择 Backblaze B2。您需要在 Backblaze B2 控制台的 App Keys 下生成的应用密钥 ID(Application Key ID)和应用密钥(Application Key)。您可以将密钥的作用域限定到作为迁移目标的特定存储桶,或者如果计划在设置期间创建新存储桶,也可以授予账户范围的访问权限。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

两个远程都配置完成后,在 RcloneView 的双面板浏览器中并排浏览它们。在一侧导航到您的 Proton Drive 文件夹,在另一侧导航到您的 B2 存储桶,以确认在开始迁移之前两个连接都正常工作。

## 配置迁移任务

在连接好两个远程后,从主页标签页打开任务管理器并创建一个新的同步或复制任务。将您的 Proton Drive 文件夹设置为源,将您的 Backblaze B2 存储桶设置为目标。为任务命名一个描述性的名称,例如 `proton-to-b2-archive`,以便与其他传输任务区分开来。

在运行完整迁移之前,使用"试运行"(Dry Run)选项预览将要传输的确切文件列表。此模拟会显示将要复制的完整文件清单,而不会实际移动任何数据 — 这是迁移大型资料库时及早发现路径映射问题的关键步骤。对于大型 Proton Drive 归档,请在高级设置中启用校验和验证,以确保文件在两个提供商之间的完整性。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a cloud-to-cloud transfer job from Proton Drive to Backblaze B2" class="img-large img-center" />

任务向导第 2 步中的并发传输设置可让您调整性能。从 4 个并发传输开始是一个合理的默认值,在确认迁移运行顺畅后,您可以再增加该数值。

## 监控和验证传输

启动迁移任务后,RcloneView 底部面板的传输标签页会显示实时进度:传输速度、已完成文件数、总大小以及剩余数据量。对于达到数十或数百 GB 的大型迁移,可以将 RcloneView 最小化到系统托盘,让传输在后台运行,任务继续不间断地进行。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring showing Proton Drive to Backblaze B2 migration progress" class="img-large img-center" />

迁移完成后,请查看任务历史标签页以确认传输状态、已移动的总文件数以及任何错误。如果任务报告特定文件出错,日志视图会提供确切的错误消息,帮助您判断问题是权限问题、网络超时,还是文件名编码冲突。

## 安排持续备份

对于希望将 Backblaze B2 作为其 Proton Drive 数据持续备份目的地的用户,RcloneView PLUS 支持类似 crontab 的定时调度。初始迁移完成后,编辑该任务并导航到第 4 步(调度)以配置周期性同步 — 例如每晚凌晨 2 点。定时任务将自动运行,仅复制自上次运行以来新增或更改的文件,让您的 B2 归档保持最新,无需人工干预。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automatic Proton Drive to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过远程标签页 > 新建远程添加您的 Proton Drive 远程,输入您的邮箱和密码。
3. 使用 B2 控制台中的应用密钥 ID 和应用密钥添加您的 Backblaze B2 远程。
4. 在任务管理器中创建一个同步或复制任务,以 Proton Drive 为源,以您的 B2 存储桶为目标。
5. 运行试运行以预览迁移,然后执行完整传输并在传输标签页中监控进度。

有了 RcloneView 处理 Proton Drive 与 Backblaze B2 之间的连接,您可以构建一个可靠的跨云备份策略,将 Proton 的隐私保护与 B2 具有成本效益的存储容量相结合。

---

**相关指南:**

- [将 Proton Drive 迁移到 Google Drive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [将 Dropbox 迁移到 Proton Drive — 使用 RcloneView 进行云端传输](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [将 Google Drive 迁移到 Backblaze B2 — 使用 RcloneView 进行云端传输](https://rcloneview.com/support/blog/migrate-google-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
