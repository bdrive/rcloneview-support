---
slug: manage-china-mobile-cloud-sync-backup-rcloneview
title: "管理 China Mobile 存储 — 使用 RcloneView 同步与备份文件"
authors:
  - jay
description: "将 China Mobile 的 S3 兼容对象存储连接到 RcloneView,实现跨平台浏览、拖放传输和定时备份任务。"
keywords:
  - China Mobile 对象存储
  - 管理 China Mobile 云存储
  - S3 兼容存储 GUI
  - RcloneView China Mobile
  - 同步 China Mobile 对象存储
  - 备份 S3 兼容存储
  - China Mobile Ecloud EOS
  - 对象存储文件管理器
  - 多云 GUI 客户端
  - S3 端点访问密钥设置
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 China Mobile 存储 — 使用 RcloneView 同步与备份文件

> 无需接触终端,即可在与其他所有云盘相同的窗口中浏览、传输和备份 China Mobile 的 S3 兼容对象存储。

使用 China Mobile 的 S3 兼容对象存储运行基础设施的团队,常常最终依靠原始 CLI 调用或临时脚本来管理它,与其他云环境相互独立。RcloneView 将其视为与任何其他 S3 兼容远端相同的对象——相同的文件浏览器、相同的同步任务、相同的文件夹比较——因此 China Mobile 上的存储桶可以与 Google Drive、Backblaze B2 或本地磁盘并列出现在同一个界面中。S3、Azure 和 Backblaze B2 在 FREE 许可下即可实现完整的读写连接,任何 S3 兼容端点同样如此。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 China Mobile 对象存储

China Mobile 的对象存储通过 rclone 的 S3 协议访问,这与 RcloneView 用于 Wasabi、MinIO 或 Cloudflare R2 的路径相同。在 New Remote 界面中选择 S3 兼容的提供商类型,并提供三个值:Access Key ID、Secret Access Key 和服务 Endpoint。这里没有 OAuth 流程——只是凭据输入,因此请仔细核对端点字符串,因为拼写错误是新远端首次连接测试失败最常见的原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 China Mobile S3 兼容远端" class="img-large img-center" />

远端连接成功后,它会像其他所有存储类型一样以标签形式出现在 Explorer 面板中。您可以使用 1 到 4 个面板的布局,将其与第二个面板并排打开——无论是本地磁盘、另一个云盘,还是完全不同的存储桶。

## 浏览与传输文件

打开远端后,File List 会以本地文件管理器中常见的列显示存储桶和对象:名称、类型、修改日期、大小。右键点击可使用 Copy、Cut、Paste、Rename、New Folder、Download 和 Upload,或使用 Ctrl+Click 和 Shift+Click 多选后再执行批量操作。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 China Mobile 对象存储与其他远端之间传输文件" class="img-large img-center" />

拖放遵循一个简单的规则:在同一远端内移动文件会重新定位它们,而在两个不同远端之间拖动则会复制它们。这使得对象存储与其他云盘之间的临时传输,变成了在面板之间拖动所选内容,而不必先下载到本地。

## 安排定期备份

对于任何需要重复执行的任务,Job Manager 的四步向导可以把一次性传输变成已保存的任务:选择源和目标,调整传输并发数和重试行为,应用最大文件大小或存在时长等过滤条件,并且——在 PLUS 许可下——设置 crontab 风格的定时计划。在正式执行之前先运行 Dry Run,准确预览将要复制或删除的内容。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中为 China Mobile 对象存储安排备份任务" class="img-large img-center" />

之后,Job History 会追踪每一次运行——状态、耗时、传输速度、文件数——这样您就有了数据何时移动的记录,而无需翻查原始日志。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 New Remote,选择 S3 兼容的提供商类型,输入 China Mobile 的 Access Key ID、Secret Access Key 和端点。
3. 在 Explorer 中浏览存储桶,并测试与其他远端之间的手动复制。
4. 在 Job Manager 中为需要重复的传输创建同步任务,并在首次实际执行前运行 Dry Run。

当 China Mobile 对象存储与其他远端一起出现在同一个文件浏览器中时,移动数据就不再是一件需要写脚本的杂事,而变成了拖放操作。

---

**相关指南:**

- [管理 RackCorp 对象存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-rackcorp-object-storage-cloud-sync-rcloneview)
- [管理 Scaleway 对象存储 — 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 Ceph 对象存储 — RcloneView 为您的 Ceph 集群提供 S3 兼容 GUI](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)

<CloudSupportGrid />
