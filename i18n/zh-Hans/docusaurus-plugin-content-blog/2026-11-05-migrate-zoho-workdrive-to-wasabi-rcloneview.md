---
slug: migrate-zoho-workdrive-to-wasabi-rcloneview
title: "将 Zoho WorkDrive 迁移到 Wasabi — 使用 RcloneView 传输文件"
authors:
  - morgan
description: "使用 RcloneView 将 Zoho WorkDrive 迁移到 Wasabi 对象存储：连接两个远程、Dry Run、云到云复制，并用 Folder Compare 验证。"
keywords:
  - 将 Zoho WorkDrive 迁移到 Wasabi
  - Zoho WorkDrive 到 Wasabi
  - Zoho WorkDrive 导出
  - Wasabi 对象存储迁移
  - Zoho WorkDrive 备份
  - 云到云传输
  - rclone GUI 迁移
  - RcloneView Wasabi
tags:
  - RcloneView
  - zoho
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Zoho WorkDrive 迁移到 Wasabi — 使用 RcloneView 传输文件

> 将 Zoho WorkDrive 团队文件夹归档到 Wasabi 存储桶，无需在自己的磁盘上暂存任何内容。

当项目结束、部门更换工具，或财务部门希望采用成本更低的长期归档时，团队会离开 Zoho WorkDrive。Wasabi 是适合这种归档角色的 S3 兼容目标，但手动移动成千上万个文件很慢。RcloneView 在一个窗口中连接这两项服务，先进行 Dry Run，再执行云到云复制，之后再进行比较。像 Wasabi 这样的 S3 兼容存储，在 FREE 许可证下即可连接并拥有完整的读写权限。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Zoho WorkDrive 和 Wasabi

打开 Remote 选项卡并选择 New Remote。Zoho WorkDrive 在设置时需要选择区域，请选择与你的 Zoho 账户相匹配的数据中心。Wasabi 作为 S3 兼容远程添加：输入访问密钥、私有密钥以及存储桶所在区域的终端节点。

当两者都出现在 Remote Manager 中后，在两个 Explorer 面板中打开它们。在移动任何内容之前，先在左侧浏览团队文件夹，在右侧浏览存储桶。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Zoho WorkDrive 和 Wasabi 远程" class="img-large img-center" />

## 规划复制并运行 Dry Run

确定哪些内容属于归档。在任务向导的第 3 步中，你可以设置最大文件年龄、最大文件大小或文件夹深度限制，并添加自定义规则，例如排除 `.git/` 文件夹。请选择 Copy 任务而不是镜像同步，这样目标端不会有任何内容被删除。

然后运行 Dry Run。它会列出所有将被复制或删除的文件，而不会更改任何一方，这是发现文件夹或过滤器错误成本最低的时机。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 Zoho WorkDrive 到 Wasabi 的云到云传输" class="img-large img-center" />

## 运行传输并监控

启动任务，并在 Transferring 选项卡中跟踪进度，其中显示进度、速度和文件数量。在第 2 步中，对于大型归档，你可以提高文件传输数量；如果 Zoho 一侧响应较慢，请让 equality checkers 保持适中。"Retry entire sync if fails" 默认值为 3，可应对暂时性的网络错误。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="监控从 Zoho WorkDrive 到 Wasabi 的传输" class="img-large img-center" />

## 使用 Folder Compare 和 Job History 验证

任务完成后，打开 Compare，一侧放 Zoho WorkDrive，另一侧放 Wasabi 存储桶。仅左侧有、仅右侧有和不同文件的过滤器会显示仍然缺少的内容，复制操作可传输剩余文件。Job History 记录每次运行的状态、大小和文件数量，也可以作为迁移记录。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="迁移后比较 Zoho WorkDrive 和 Wasabi" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 Zoho WorkDrive（含其区域）和 Wasabi 添加为远程。
3. 创建带有过滤器的 Copy 任务并运行 Dry Run。
4. 运行任务，然后在停用源端之前用 Folder Compare 确认。

在 Compare 显示两侧一致之前，请保留 Zoho 中的数据。

---

**相关指南：**

- [使用 RcloneView 管理 Zoho WorkDrive 存储](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [使用 RcloneView 将 Zoho WorkDrive 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-backblaze-b2-rcloneview)
- [管理 Wasabi 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
