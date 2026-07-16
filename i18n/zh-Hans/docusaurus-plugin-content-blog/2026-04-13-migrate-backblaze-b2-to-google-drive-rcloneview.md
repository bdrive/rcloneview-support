---
slug: migrate-backblaze-b2-to-google-drive-rcloneview
title: "将 Backblaze B2 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "无需先下载到本地，即可将文件从 Backblaze B2 移动到 Google Drive。RcloneView 支持云到云直接传输,并提供进度监控和过滤功能。"
keywords:
  - Backblaze B2 to Google Drive
  - migrate B2 to Google Drive
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - B2 to GDrive RcloneView
  - transfer Backblaze files
  - cloud storage migration
  - Backblaze B2 sync
  - Google Drive import
  - RcloneView migration
tags:
  - backblaze-b2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Backblaze B2 迁移到 Google Drive — 使用 RcloneView 传输文件

> 使用 RcloneView 将文件从 Backblaze B2 存储桶直接传输到 Google Drive — 无需中间本地存储,并支持实时进度跟踪和过滤功能。

Backblaze B2 是一款功能强大的对象存储解决方案,但对于高度依赖 Google Workspace 的团队来说,将工作文件集中存放在 Google Drive 中以便更轻松地协作可能更加实用。过去,将多年积累的 B2 归档数据迁移到 Google Drive 需要先将所有内容下载到本地 — 这是一个缓慢且占用大量存储空间的过程。RcloneView 通过其同步引擎,支持在 B2 和 Google Drive 之间进行云到云直接传输,数据在两个提供商之间流转,而不会经过本地磁盘。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置两个远程

在开始迁移之前,请在 RcloneView 中添加 Backblaze B2 和 Google Drive 作为远程。对于 Backblaze B2,请转到“远程”选项卡,点击“新建远程”,然后选择 Backblaze B2。输入你的 Application Key ID 和 Application Key — 两者都可以从你的 Backblaze 账户的 App Keys 页面生成。对于 Google Drive,从提供商列表中选择 Google Drive;将打开一个浏览器窗口进行 OAuth 身份验证。使用你的 Google 账户登录并授予访问权限。

配置好两个远程后,你可以在 RcloneView 的双面板文件浏览器中并排打开它们。在一侧浏览你的 B2 存储桶,在另一侧浏览你的 Google Drive 文件夹,从而直观地参考你想要建立的迁移结构。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Google Drive remotes in RcloneView" class="img-large img-center" />

## 执行迁移

在两个远程都连接好之后,使用同步向导来配置传输。选择你的 Backblaze B2 存储桶(或其中的特定路径)作为源,并选择你的 Google Drive 目标文件夹。在“高级设置”步骤中,校验和验证可确保每个文件都正确传输 — 对于大型归档而言,这一点非常重要,因为静默数据损坏可能不会被发现。

“过滤”步骤对于大型 B2 存储桶非常有用:使用文件年龄过滤器仅迁移早于某个日期的文件,排除特定扩展名(如临时的 `.tmp` 文件),或限制最大文件大小以分批进行迁移。这在迁移某设计公司 3TB 的项目归档时特别有帮助 — 按文件类型和文件夹深度进行过滤,以控制每批次迁移的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 files to Google Drive with RcloneView" class="img-large img-center" />

在提交完整迁移之前,先运行“模拟运行”模式,预览将要复制的具体文件。该模拟会显示计划操作的完整列表,而不会实际进行任何更改 — 这是迁移生产数据时的关键安全步骤。

## 监控和验证传输

RcloneView 底部的“传输中”选项卡会显示实时作业进度:文件数量、传输状态以及遇到的任何错误。对于运行数小时的大型迁移,“作业历史”会记录每次执行的开始时间、持续时间、传输的数据总量和最终状态。

传输完成后,使用“文件夹比较”来验证 Google Drive 现在是否包含了 B2 源中的所有内容。该比较功能会突出显示仅存在于一侧的文件或大小存在差异的文件,使你能够轻松识别并重新传输任何未成功完成的内容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing migration job history for B2 to Google Drive transfer in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用你的 Application Key ID 和 Application Key 添加 Backblaze B2。
3. 通过 OAuth 浏览器身份验证流程添加 Google Drive。
4. 使用同步向导并配合“模拟运行”功能,在执行完整传输之前预览迁移内容。

云到云直接迁移消除了本地中间存储带来的瓶颈,并使你的 B2 到 Google Drive 传输保持在提供商端的吞吐速度运行。

---

**相关指南:**

- [使用 RcloneView 将 Backblaze B2 迁移到 Amazon S3](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [使用 RcloneView 管理 Google Drive 云同步和备份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Dropbox 备份到经济实惠的 Backblaze B2 存储](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
