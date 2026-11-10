---
slug: migrate-box-to-cloudflare-r2-rcloneview
title: "将 Box 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件"
authors:
  - robin
description: "使用 RcloneView 将 Box 迁移到 Cloudflare R2:连接两个远程,先试运行复制,再执行云到云传输并验证结果。"
keywords:
  - 将 Box 迁移到 Cloudflare R2
  - Box 到 R2 传输
  - Box 云迁移
  - Cloudflare R2 备份
  - RcloneView
  - 云到云传输
  - Box 到 S3 兼容存储
  - Box 归档到对象存储
  - rclone GUI
tags:
  - RcloneView
  - box
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件

> 将多年积累的 Box 内容迁入 Cloudflare R2 对象存储,无需先下载到自己的磁盘。

财务团队的 Box 套餐已不够用,或某个部门要收尾旧项目时,往往希望改用对象存储作为归档。RcloneView 可并排连接 Box 和 Cloudflare R2,并在两者之间直接复制。FREE 许可证即可对 S3、Azure 或 Backblaze B2 进行完整读写连接,R2 同样如此。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Box 和 Cloudflare R2

Box 是 OAuth 远程:RcloneView 会打开浏览器,您登录后即可创建远程,无需 API 密钥。如果贵公司使用 Box for Business,远程需要设置 `box_sub_type = enterprise`。请先检查这一点,因为个人类型的远程看不到企业内容。

Cloudflare R2 使用凭据。请在 Cloudflare 控制台中创建 R2 存储桶,生成具有 Admin Read & Write 权限的 API 令牌,然后在 New Remote 对话框中输入令牌信息和您的账户端点 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Box 和 Cloudflare R2 远程" class="img-large img-center" />

## 规划文件夹结构

在一个 Explorer 面板中打开 Box,在另一个中打开 R2。R2 是扁平的对象存储,因此复制前先确定前缀结构:例如每个 Box 部门对应一个顶层文件夹,其下保留原有子文件夹。对较大的 Box 文件夹使用 Get Size 来估算即将迁移的数据量。

Box Notes 等 Box Docs 不是普通文件。同步向导中的预定义过滤器包含 Box Docs 选项,如果不希望将它们放入归档,可以将其排除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView Explorer 面板中并排显示的 Box 和 Cloudflare R2" class="img-large img-center" />

## 先试运行,再复制

首次迁移请创建 Copy 作业而不是 Sync 作业,这样任何一侧都不会有内容被删除。先以 Dry Run 运行:RcloneView 会列出将要复制的文件而不实际传输,有助于发现源文件夹选错的情况。

在 Advanced Settings 步骤中,如果有大量小文件,可增加文件传输数;如需按哈希和大小匹配,可启用校验和比较。然后运行作业,并在 Transferring 选项卡中查看进度:百分比、速度和文件数会实时更新。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行 Box 到 R2 的复制作业" class="img-large img-center" />

## 验证迁移

作业完成后,打开 Folder Compare,左侧选 Box,右侧选 R2。使用 left-only 过滤器查看未到达的内容,使用 different-files 过滤器发现大小不一致的文件。Job History 会保留每次运行的状态、时长、总大小和文件数,可作为审计记录的有用依据。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 验证 Box 到 R2 的迁移" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView**:请从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 添加您的 Box 远程(OAuth)和 Cloudflare R2 远程(API 令牌和端点)。
3. 创建从 Box 文件夹到 R2 存储桶前缀的 Copy 作业,并运行 Dry Run。
4. 运行作业,然后用 Folder Compare 确认结果。

两个远程连接好之后,将 Box 内容迁入 R2 只需点击几下。

---

**相关指南:**

- [将 Box 迁移到 AWS S3](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [使用 RcloneView 管理 Box 存储](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dry Run:传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
