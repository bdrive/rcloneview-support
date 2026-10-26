---
slug: sync-box-to-wasabi-rcloneview
title: "将 Box 同步到 Wasabi — 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "使用 RcloneView 将 Box 同步到 Wasabi：连接两个远程，通过 Dry Run 预览，运行单向备份，并使用文件夹比较验证结果。"
keywords:
  - 将 Box 同步到 Wasabi
  - Box 到 Wasabi 备份
  - Box Wasabi 传输
  - RcloneView box
  - RcloneView wasabi
  - 云到云同步
  - Box 对象存储备份
  - Wasabi S3 备份
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 同步到 Wasabi — 使用 RcloneView 进行云备份

> 通过可重复执行的单向同步，在 Wasabi 对象存储中保留一份独立的 Box 内容副本。

Box 是便于协作的平台，但在平台之外再保留一份副本，可以防范误删除、账户被锁定以及保留期限缺口。Wasabi 是兼容 S3 的对象存储，很适合作为这份副本的目标。RcloneView 可以在一个窗口中连接这两项服务，基本的同步和 Dry Run 可使用 FREE 许可证。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Box 和 Wasabi 连接为远程

Box 使用基于浏览器的 OAuth。在 RcloneView 中添加新的远程，选择 Box，并在浏览器打开后登录。如果你的组织使用 Box for Business，则远程需要设置 `box_sub_type = enterprise`。Wasabi 作为兼容 S3 的远程添加：输入你的 Access Key、Secret Key 以及 Wasabi 区域的端点。

两个远程都出现在远程管理器（Remote Manager）后，在两个资源管理器（Explorer）面板中并排打开它们。这样在配置任何内容之前，你就可以在左侧浏览 Box 文件夹树，在右侧浏览 Wasabi 存储桶。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Box 和 Wasabi 远程" class="img-large img-center" />

## 同步前先用 Dry Run 预览

假设一家设计机构在 Box 中存放着 800 GB 的客户项目文件夹。首次同步之前，请先运行 Dry Run。它会列出将被复制和将被删除的文件，而不会更改任何内容。这有助于避免把同步指向错误的存储桶路径。

对于备份，单向同步（"Modifying destination only"）是合适的方向：Box 保持为数据源，Wasabi 对其进行镜像。请记住，同步也会删除源中已不存在的目标文件，因此请为镜像使用专用的存储桶或前缀。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box 与 Wasabi 之间的云到云传输" class="img-large img-center" />

## 配置同步作业

作业向导包含四个步骤：存储、高级设置、过滤器和计划。如果有大量小文档，可以提高文件传输数量；需要基于哈希的校验时，可启用校验和比较。预定义的过滤器包含 Box Docs 选项，这很有用，因为 Box Notes 等仅限在线的项目不像普通文件那样工作。

作业名称可使用字母、数字、连字符或下划线，保存后即可运行。进度、速度和文件数量会显示在 Transferring 选项卡中。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="运行已保存的 Box 到 Wasabi 同步作业" class="img-large img-center" />

## 计划与验证

基于计划的同步是 PLUS 功能，提供 crontab 风格的字段以及可预览后续运行时间的模拟器。每晚运行一次可使 Wasabi 副本保持最新。每次运行后，打开作业历史记录（Job History）查看状态、大小和文件数量，或使用文件夹比较（Folder Compare）确认两侧一致。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中计划定期同步作业" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 添加 Box 远程，并使用密钥和端点添加 Wasabi 远程。
3. 创建从 Box 到专用 Wasabi 存储桶的同步作业，并先运行 Dry Run。
4. 运行作业，然后使用文件夹比较和作业历史记录进行验证。

经过测试并按计划运行的镜像，能让 Box 从单点故障变为真正备份的一半。

---

**相关指南：**

- [将 Box 迁移到 Wasabi](https://rcloneview.com/support/blog/migrate-box-to-wasabi-rcloneview)
- [将 Google Drive 同步到 Box](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [修复 Wasabi 同步错误](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)

<CloudSupportGrid />
