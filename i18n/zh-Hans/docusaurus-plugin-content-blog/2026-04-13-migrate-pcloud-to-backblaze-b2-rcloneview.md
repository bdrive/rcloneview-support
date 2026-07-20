---
slug: migrate-pcloud-to-backblaze-b2-rcloneview
title: "将 pCloud 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将文件从 pCloud 迁移到 Backblaze B2 的分步指南。通过 OAuth 和 App Key 连接,使用 Dry Run 预览,然后运行同步任务。"
keywords:
  - migrate pCloud to Backblaze B2
  - pCloud Backblaze B2 transfer
  - pCloud migration RcloneView
  - pCloud to B2 sync
  - cloud-to-cloud migration
  - Backblaze B2 archive
  - pCloud backup alternative
  - RcloneView cloud migration
tags:
  - RcloneView
  - pcloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 pCloud 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 从 pCloud 迁移到 Backblaze B2 可以显著降低归档存储的成本 —— RcloneView 在不经过本地设备中转数据的情况下完成云到云的传输。

pCloud 是一款可靠的个人云存储服务,提供终身套餐选项,但对于归档大量数据而言,Backblaze B2 按 GB 计费的方式往往更具成本效益。无论你是想整合云服务,还是想将 B2 添加为归档层,RcloneView 都能让迁移过程变得简单:连接两个服务商、使用 Dry Run 预览,然后运行同步任务。整个传输过程都是云到云进行的。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 步骤 1 — 连接 pCloud

打开 RcloneView,进入 **远程管理器(Remote Manager)**。点击 **新建远程(New Remote)**,从提供商列表中选择 **pCloud**。pCloud 使用 OAuth 浏览器登录方式 —— RcloneView 会打开你的浏览器,你登录并授权后,令牌会自动保存。无需手动管理 API 密钥。

授权完成后,在文件浏览器中打开 pCloud 远程,确认能看到你的文件和文件夹。记下你想要迁移的顶层目录。

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 步骤 2 — 连接 Backblaze B2

仍在 **远程管理器(Remote Manager)** 中,再次点击 **新建远程(New Remote)**,选择 **Backblaze B2**。Backblaze B2 使用 **Application Key ID** 和 **Application Key** 进行身份验证 —— 两者都可以在 Backblaze 控制台的 **App Keys** 中找到。创建一个具有适当权限的密钥(对目标存储桶具有读写权限,如果是整体迁移则对所有存储桶具有读写权限)。在 RcloneView 中输入这两个值并保存。

打开 B2 远程,确认它能正确加载你的存储桶。如果目标存储桶尚不存在,你可以在 RcloneView 文件浏览器中右键点击根目录直接创建。

## 步骤 3 — 配置迁移任务

进入 **任务(Jobs)**,点击 **新建任务(New Job)**。将 pCloud 设为源,选择具体的文件夹或根目录。将 Backblaze B2 设为目标,并选择目标存储桶和路径。

在任务向导的第 2 步中,检查传输选项:

- 先启用 **Dry Run**,以准确查看将要复制的内容
- 将 **transfers** 设置为 4–8,以在速度和 API 稳定性之间取得平衡
- 如果想在传输后确认文件完整性,可启用 **校验和验证(checksum verification)**

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from pCloud to Backblaze B2" class="img-large img-center" />

## 步骤 4 — 先运行 Dry Run,再执行实际迁移

启用 Dry Run 后,点击 **运行(Run)**。RcloneView 会记录将要传输的内容 —— 文件名、大小和数量 —— 但不会实际进行任何更改。在 **日志(Log)** 标签中查看输出结果。如果列表看起来正确,返回任务设置,禁用 Dry Run,然后再次运行。

实际迁移是云到云进行的:pCloud 将数据直接发送到 B2,不经过你的本地设备,因此本地带宽不会成为瓶颈。传输速度取决于两个服务商的服务器性能。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the pCloud to Backblaze B2 migration job" class="img-large img-center" />

## 验证迁移结果

任务完成后,打开 **文件夹比较(Folder Compare)** 工具,分别指向 pCloud 源和 B2 目标。RcloneView 会比较两侧的内容并标出任何差异。对于重要数据,这一步可以在你从 pCloud 中删除文件之前,确认迁移已经完整完成。

任务历史(Job History)会记录完整的运行情况:文件总数、传输的数据量、耗时以及任何错误信息。请保留以备参考。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 **远程管理器(Remote Manager)** 中通过 OAuth 连接 pCloud,通过 Application Key 连接 Backblaze B2。
3. 创建以 pCloud 为源、B2 为目标的同步任务;先运行一次 Dry Run。
4. 禁用 Dry Run 并执行迁移;使用文件夹比较进行验证。

确认迁移完成后,Backblaze B2 将为你原本存储在 pCloud 中的所有内容提供持久、经济高效的归档存储。

---

**相关指南:**

- [使用 RcloneView 将 pCloud 备份到 AWS S3](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [使用 RcloneView 将 pCloud 迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [使用 RcloneView 进行校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
