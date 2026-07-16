---
slug: migrate-aws-s3-to-google-drive-rcloneview
title: "将 AWS S3 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 的图形界面将文件从 AWS S3 存储桶移动到 Google Drive。无需命令行即可完成 S3 到 Google Drive 的迁移——轻松传输、验证并设置计划任务。"
keywords:
  - migrate AWS S3 to Google Drive
  - S3 to Google Drive transfer
  - AWS S3 Google Drive migration
  - rclone S3 to Google Drive
  - cloud-to-cloud migration tool
  - move S3 files to Google Drive
  - object storage to Google Drive
  - RcloneView S3 migration
tags:
  - amazon-s3
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 AWS S3 迁移到 Google Drive — 使用 RcloneView 传输文件

> RcloneView 将 S3 到 Google Drive 的迁移作为直接的云到云传输处理——无需本地下载，并提供实时进度和校验和验证。

从 AWS S3 迁移到 Google Drive 是团队从以基础设施为中心的存储转向以协作为导向的平台时的常见场景。初创公司可能会将多年积累的 S3 应用日志和资产归档到 Google Drive，以便跨团队更方便地访问。小型代理机构可能会将分散在各个项目 S3 存储桶中的客户交付物整合到共享的 Google Drive 中。RcloneView 使这种迁移变得可视化且可审计，在服务器端完成传输，无需在本地机器上暂存文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置两个远程

在迁移之前，先将两个云提供商都添加到 RcloneView 中。对于 AWS S3，前往 **Remote 选项卡 → New Remote → Amazon S3**，输入你的 Access Key ID、Secret Access Key，并选择存储桶所在区域。对于 Google Drive，通过 OAuth 浏览器登录添加另一个远程——RcloneView 会打开 Google 的授权页面并自动保存令牌。

配置好两个远程后，以双栏布局打开资源管理器。左侧面板显示你的 S3 存储桶，右侧面板显示目标 Google Drive 文件夹。这种并排视图非常适合在迁移开始前确认文件夹结构。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring AWS S3 and Google Drive remotes in RcloneView" class="img-large img-center" />

## 使用同步向导执行迁移

对于大规模迁移，建议使用同步任务向导，而不是手动拖放。在 **Job Manager → Add Job** 中，将源设置为你的 S3 存储桶路径（例如 `mybucket/exports/`），将目标设置为你的 Google Drive 文件夹。在第 2 步中，根据你的带宽将并发传输数设置为 8–12，并启用校验和验证，以在传输后确认每个文件的完整性。

首先运行一次 **Dry Run（试运行）**。RcloneView 会列出它将要复制的每个文件，而不会实际执行传输。对于一个包含 50,000 个文件、总量数百 GB 的存储桶，这个预览可以让你在投入数小时的传输时间之前确认迁移范围。如果文件列表看起来正确，就可以执行正式同步。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="S3 to Google Drive cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## 处理文件类型差异和过滤器

S3 存储桶中通常包含机器生成的文件——`.log` 文件、临时上传文件、零字节标记对象——这些文件不需要出现在 Google Drive 中。使用第 3 步的过滤功能来排除不需要的扩展名：将 `.log`、`.tmp` 和 `.part` 添加到自定义排除过滤器中。你还可以设置一个最大文件年龄过滤器，只迁移最近 90 天内修改过的文件，从而缩小活跃使用场景下的传输范围。

Google Drive 在文件命名方面有一些特殊之处：S3 对象键中的 `?`、`*` 和 `:` 等字符会被 rclone 自动转写。RcloneView 会在 Log 选项卡中显示编码错误，方便你查看哪些对象需要更改名称。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the S3 to Google Drive migration job in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 New Remote 向导中使用 Access Key + Secret + Region 添加你的 AWS S3 远程。
3. 通过 OAuth 浏览器身份验证添加你的 Google Drive 远程。
4. 在 Job Manager 中创建一个同步任务，运行 Dry Run 进行预览，然后执行迁移。

使用 RcloneView，你的 S3 到 Google Drive 迁移过程完全可见——无需命令行脚本、无需暂存成本，并为你保留完整的任务历史记录。

---

**相关指南：**

- [使用 RcloneView 将 Google Drive 迁移到 AWS S3](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [增量备份：Google Drive 到 Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [使用 RcloneView 进行校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
