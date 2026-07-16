---
slug: sync-google-drive-to-digitalocean-spaces-rcloneview
title: "将 Google Drive 同步到 DigitalOcean Spaces —— 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "将 Google Drive 同步到 DigitalOcean Spaces，获得经济实惠的 S3 兼容云备份方案。使用 RcloneView 的可视化界面设置自动化同步任务。"
keywords:
  - sync google drive to digitalocean spaces
  - google drive digitalocean backup
  - google drive s3 compatible sync
  - digitalocean spaces backup
  - cloud-to-cloud sync
  - rcloneview google drive sync
  - google drive object storage
  - digitalocean spaces transfer
  - automated cloud backup
  - google drive redundancy
tags:
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 同步到 DigitalOcean Spaces —— 使用 RcloneView 进行云备份

> 将 Google Drive 备份到 DigitalOcean Spaces，可为 Drive 中的每一个文件提供经济实惠、S3 兼容的安全保障。

Google Drive 在协作和实时编辑方面表现出色，但它并非为归档备份而设计。DigitalOcean Spaces 提供 S3 兼容的对象存储服务，采用固定费率计费，250 GB 仅需每月 5 美元（超出部分每 GB 0.02 美元），这使其成为 Drive 备份的一个价格可预测且实惠的目的地。RcloneView 可以连接这两项服务，并通过带有实时进度监控的计划任务保持它们同步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 DigitalOcean Spaces 备份 Google Drive

DigitalOcean Spaces 在多个区域（NYC、SFO、AMS、SGP、FRA）提供 S3 兼容的对象存储。其固定定价模式消除了 AWS S3 可能带来的按请求计费的意外成本。对于已经在 DigitalOcean 上运行基础设施的团队来说，Spaces 可以原生集成——从 Google Drive 同步过来的文件可以立即被 Droplet、Kubernetes 集群和无服务器函数访问。

Google Drive 原生的备份选项十分有限。Google Takeout 只能生成一次性导出，而非持续镜像。第三方备份工具通常按用户收费，费用堪比额外购买 Google Workspace 许可证。通过 RcloneView 将 Drive 同步到 Spaces，只需支付 Spaces 存储费用，并且可在你自己的电脑或服务器上运行。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## 设置远程

在 RcloneView 中选择 "Google Drive" 作为提供商，添加一个 Google Drive 远程。OAuth 流程会通过你的浏览器进行身份验证——使用你的 Google 账户登录并授予访问权限。你可以将该远程的范围限定为整个 Drive、某个特定的共享云端硬盘，或通过配置根文件夹 ID 限定为单个文件夹。

对于 DigitalOcean Spaces，需创建一个 S3 兼容的远程。选择 "Amazon S3 Compliant"，然后在提供商下拉菜单中选择 "DigitalOcean Spaces"。输入你的 Spaces Access Key 和 Secret Key（可在 DigitalOcean 控制面板的 API > Spaces Keys 中生成）。将端点设置为你偏好的区域，例如 `nyc3.digitaloceanspaces.com` 或 `fra1.digitaloceanspaces.com`。RcloneView 会验证凭据并列出你现有的 Spaces。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Browsing Google Drive and DigitalOcean Spaces in RcloneView explorer" class="img-large img-center" />

## 创建同步任务

打开 RcloneView 的任务管理器并创建一个新任务。将 Google Drive 设置为源，将你的 DigitalOcean Space 设置为目标。选择 "Sync" 模式以保持精确镜像，或者选择 "Copy" 模式，以便在文件从 Drive 中删除后仍在 Spaces 中保留这些文件。

Google Drive 以云原生格式存储 Google 文档、表格和幻灯片，这些文件没有传统的文件扩展名。RcloneView 会在传输过程中自动将它们导出为对应的 Microsoft Office 格式（`.docx`、`.xlsx`、`.pptx`），确保它们在 Spaces 中以可用的文件形式落地。如果你更喜欢 PDF 或其他格式，可以在远程配置中自定义导出格式。

配置并行传输以加快首次同步速度。四到八个并发传输通常能很好地契合 Google Drive 的 API 配额。如果你与其他服务共享该连接，请设置带宽限制。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Drive to DigitalOcean Spaces sync" class="img-large img-center" />

## 计划任务与持续维护

根据 Drive 的变更频率，将同步任务安排为每晚或每周运行一次。RcloneView 的调度器支持 cron 风格的定时设置，并且每次运行只传输自上次同步以来发生变化的文件。任务历史面板会记录每次运行的时间戳、文件数量和传输量。

DigitalOcean Spaces 支持内置 CDN。一旦你的 Drive 文件同步完成，你可以启用 Spaces CDN，将文件面向全球分发——这对于分发源自 Google Drive 的营销资料、文档或媒体文件非常有用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Drive to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 验证你的 Google Drive 账户，并可选择将该远程限定到特定文件夹或共享云端硬盘。
3. 使用你的 API 密钥和区域端点添加 DigitalOcean Spaces 远程。
4. 创建一个 Sync 任务，并将其安排为周期性运行，以实现持续备份。

将 Google Drive 同步到 DigitalOcean Spaces 后，你的文件将存在于两个独立的云中——不受意外删除、账户被锁定以及服务商中断等问题的影响。

---

**相关指南：**

- [轻松将 Google Drive 转移到另一个账户](https://rcloneview.com/support/blog/transfer-google-drive-to-another-account-easily)
- [使用 RcloneView 将 DigitalOcean Spaces 挂载为本地驱动器](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [使用 RcloneView 同步 Linode 对象存储、S3 和 Google Drive](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)

<CloudSupportGrid />
