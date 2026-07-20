---
slug: migrate-google-drive-to-storj-rcloneview
title: "将 Google Drive 迁移到 Storj — 使用 RcloneView 传输文件"
authors:
  - jay
description: "了解如何使用 RcloneView 将 Google Drive 文件迁移到 Storj 去中心化存储 — 云到云传输的分步指南。"
keywords:
  - migrate Google Drive to Storj
  - Google Drive to Storj migration
  - Storj decentralized cloud storage
  - RcloneView cloud migration
  - move files from Google Drive to Storj
  - cloud-to-cloud transfer RcloneView
  - Storj S3-compatible GUI
  - Google Drive migration tool
  - decentralized cloud backup RcloneView
tags:
  - RcloneView
  - google-drive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 迁移到 Storj — 使用 RcloneView 传输文件

> 无需编写一行命令，即可将整个 Google Drive 迁移到 Storj 的去中心化端到端加密存储。

在 Google Drive 中存储敏感项目文件的团队，常常会遇到需要更强数据主权、更低出站费用，或需要为工具链提供 S3 兼容访问的时刻。Storj 将文件分块分布在全球独立节点上，在设计上就实现了端到端加密和地理冗余。RcloneView 让这次迁移变得简单直接：通过浏览器认证设置连接两个远程,然后运行一个复制任务,通过本地机器将文件从 Google Drive 传输到 Storj。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Google Drive 和 Storj 添加为远程

在传输任何内容之前，需要先在 RcloneView 中将两个云账户注册为远程。Google Drive 使用 OAuth 浏览器认证 — 打开“远程”标签页，点击 **新建远程**，选择 Google Drive，RcloneView 会启动一个浏览器窗口供你授权连接。无需手动管理 API 密钥或凭据。

Storj 使用 S3 兼容访问方式。在 RcloneView 的新建远程向导中，选择 **S3** 提供商类型，并选择 Storj 作为 S3 提供商。输入你的 Storj Access Key ID、Secret Access Key，以及 Storj S3 网关端点。保存后，该远程会出现在资源管理面板中，为你提供熟悉的文件浏览器视图，用于查看 Storj 存储桶。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Storj as remotes in RcloneView" class="img-large img-center" />

注册好两个远程后，你可以在 RcloneView 的双面板资源管理器中并排打开它们。将文件夹从左侧面板（Google Drive）拖动到右侧面板（Storj），即可快速完成一次性复制，或者为更大规模的迁移设置托管任务。

## 配置迁移任务

对于迁移整个 Google Drive 的场景 — 比如拥有 300 GB 素材的设计机构，或是拥有多年共享文档的研究团队 — 使用任务（Job）是正确的方式。在“主页”标签页点击 **任务管理器**，然后点击 **添加任务**。将源设置为你的 Google Drive 远程及文件夹，将目标设置为你的 Storj 存储桶。选择 **复制** 作为任务类型，以传输所有源文件而不删除 Google Drive 中的原始文件。

在第 2 步（高级设置）中，根据你的网络连接设置并发文件传输数量。默认的多线程传输数 4 适用于大多数网络连接。启用 **校验和** 验证以确保文件完整性 — RcloneView 会在每次传输后比对校验和，捕获传输过程中可能产生的任何损坏。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Google Drive to Storj copy job in RcloneView" class="img-large img-center" />

第 3 步允许你添加筛选规则，如果你只想迁移特定类型的文件 — 例如排除 `.tmp` 临时文件，或将传输限制为在一定时间内新建的文件。当迁移一个仍在使用中的工作区时，这尤其有用，因为某些临时文件不应该跟随迁移到新的存储提供商。

## 监控并验证传输

点击 **运行** 后，RcloneView 底部的“传输中”标签页会显示实时进度：传输速度、文件数量以及已传输的总大小。对于大规模迁移，即使你切换到其他远程，RcloneView 也会在后台继续执行任务 — 如果传输被中断，在第 2 步中设置重试次数可确保任务从中断处继续。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Google Drive to Storj migration job in RcloneView" class="img-large img-center" />

任务完成后，使用 RcloneView 的 **文件夹比较** 功能（“主页”标签页 > 比较）来验证两端是否一致。将左侧面板指向你的 Google Drive 源，右侧面板指向你的 Storj 目标。文件夹比较会显示仅存在于一侧的文件，或大小不同的文件，让你在开始停用 Google Drive 工作区之前拥有清晰的审计记录。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to Storj migration" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **远程标签页 > 新建远程** 添加你的 Google Drive 远程，并完成 OAuth 浏览器登录。
3. 使用 S3 提供商类型添加你的 Storj 远程，填入你的 Storj Access Key、Secret Key 和网关端点。
4. 打开 **任务管理器**，创建一个从 Google Drive 文件夹到 Storj 存储桶的复制任务，在第 2 步中启用校验和，然后点击运行。

Storj 的架构默认为你的文件提供地理分布和端到端加密 — RcloneView 让抵达这一目标只需几分钟，而不必花费数小时编写脚本。

---

**相关指南：**

- [使用 RcloneView 将 Dropbox 迁移到 Storj](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [使用 RcloneView 将 OneDrive 迁移到 Storj](https://rcloneview.com/support/blog/migrate-onedrive-to-storj-rcloneview)
- [管理 Storj 云存储 — 使用 RcloneView 进行同步和备份](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
