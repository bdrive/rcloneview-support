---
slug: sync-google-drive-to-koofr-rcloneview
title: "将 Google Drive 同步到 Koofr —— 使用 RcloneView 进行云备份"
authors:
  - alex
description: "使用 RcloneView 将 Google Drive 同步到 Koofr，获得欧洲托管的文件备份副本，无需使用命令行进行配置。"
keywords:
  - sync google drive to koofr
  - google drive koofr 备份
  - RcloneView koofr 同步
  - 欧洲云备份 google drive
  - koofr 云存储同步
  - google drive koofr 迁移
  - 跨云同步工具
  - koofr google drive 传输
  - 云到云同步 rcloneview
tags:
  - RcloneView
  - google-drive
  - koofr
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 同步到 Koofr —— 使用 RcloneView 进行云备份

> 无需编写任何 rclone 命令，即可在 Koofr 上维护 Google Drive 的欧洲托管镜像。

拥有欧盟客户或有数据驻留要求的团队，通常希望在欧洲基础设施上保留一份 Google Drive 内容的第二份副本。总部位于欧盟的 Koofr 天然适合这一角色，但每次更改后手动重新上传文件是不可持续的。RcloneView 会连接两个账户，并以已保存作业的形式运行同步，在不进行任何手动文件搬运的情况下让 Koofr 副本保持最新。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Google Drive 和 Koofr

两个远程都使用各自服务商原生的设置方式：Google Drive 通过 OAuth 浏览器登录进行连接，Koofr 也从 Remote 标签 > New Remote 以相同方式添加。两者都出现在 Remote Manager 中后，并排打开两个 Explorer 面板 —— 一个是 Google Drive，一个是 Koofr —— 这样你就可以在设置自动化作业之前，通过拖放进行一次快速测试复制。由于它们是各自独立的远程，两个面板之间的拖动始终是复制而不是移动。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Koofr remotes in RcloneView" class="img-large img-center" />

## 配置同步作业

从 Home 标签启动同步向导，将 Google Drive 设为源，Koofr 设为目标。选择单向"仅修改目标"，这样 Koofr 副本会始终镜像 Drive，而不会意外删除源端的任何内容。在第 2 步启用校验和比较，可确保按内容而不仅仅是修改时间来匹配文件，这在文件到达 Drive 之前经过不同的同步客户端时尤为重要。

RcloneView 的 1:N 同步可以将同一个 Google Drive 文件夹同时镜像到 Koofr 及其他目标 —— 在 FREE 许可下即可使用，如果之后需要添加第二个备份目标，也无需重建作业。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Koofr" class="img-large img-center" />

## 首次同步前运行 Dry Run

在进行完整传输之前，运行 Dry Run 可以精确预览哪些文件将被复制，并确认不会有文件从 Koofr 意外删除。当作业首次针对一个目标文件夹中已有内容的 Koofr 账户运行时，这尤其有用，因为它能在冲突变成真正的覆盖之前将其显现出来。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Google Drive to Koofr in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 Google Drive 和 Koofr 都添加为远程。
3. 创建一个启用了校验和比较的单向同步作业。
4. 运行 dry run，然后执行该作业以构建你的第一个 Koofr 镜像。

一个持续运行的 Google Drive 到 Koofr 同步，能为你提供一个只需点几下就能重新运行的欧洲托管备份，让你的恢复副本不再依赖于从头重建作业。

---

**相关指南：**

- [将 Koofr 迁移到 Google Drive —— 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [管理 Koofr 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [将 Koofr 同步到 Amazon S3 —— 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-koofr-to-amazon-s3-rcloneview)

<CloudSupportGrid />
