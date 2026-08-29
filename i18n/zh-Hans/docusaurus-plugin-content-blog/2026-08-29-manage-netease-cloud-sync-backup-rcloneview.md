---
slug: manage-netease-cloud-sync-backup-rcloneview
title: "管理 Netease 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - morgan
description: "将 Netease 的 S3 兼容对象存储连接到 RcloneView,实现跨平台浏览、拖放传输和计划备份任务。"
keywords:
  - Netease 对象存储
  - 管理 Netease 云存储
  - S3 兼容存储 GUI
  - RcloneView Netease
  - 同步 Netease 对象存储
  - 备份 S3 兼容存储
  - Netease NOS 存储
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

# 管理 Netease 存储 — 使用 RcloneView 同步和备份文件

> 在你已经用于其他所有云的同一个窗口中浏览、传输并备份 Netease 的 S3 兼容对象存储,无需单独的 CLI 工作流。

通过 Netease 的 S3 兼容对象服务配置存储的团队,常常最终把它与其余云资产分开脚本化管理,因为大多数桌面文件管理器只理解主流消费级网盘。RcloneView 把 Netease 当作任何其他 S3 兼容远程来处理——同样的浏览器、同样的同步任务、同样的文件夹对比——因此一个 Netease 存储桶可以和 Google Drive、Dropbox 或本地磁盘并排出现在同一个界面中。RcloneView 在一个窗口中挂载并同步 90 多家提供商,支持 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Netease 对象存储

在 RcloneView 中添加 Netease 遵循标准的 S3 兼容远程流程:创建一个新的远程,选择 S3 协议类型,然后输入你的 Access Key ID、Secret Access Key,以及对应存储桶所在区域的 Netease 端点 URL。保存后,该远程会作为浏览器中独立的标签页出现,其中的每个文件夹都以本地磁盘一样的方式浏览——无需单独的控制台标签页或 CLI 会话来查看存储桶中实际有什么。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中为 Netease 对象存储添加新的 S3 兼容远程" class="img-large img-center" />

由于 RcloneView 独立存储每个远程的配置,你可以并排注册多个 Netease 存储桶——或者以不同访问范围注册同一个存储桶——然后单击即可在它们之间切换,而不必每次都在终端中重新认证。

## 在 Netease 与其他云之间移动数据

一旦连接了 Netease,面板之间的拖放操作会自动处理跨远程传输:将文件从 Netease 拖到另一个远程的面板会触发复制,而在同一个 Netease 存储桶内拖动则会移动文件。这使得临时迁移——比如为了冗余而将 Netease 中的部分对象镜像到 Backblaze B2——只需打开两个面板即可完成,而不用编写一次性的 rclone 命令。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中 Netease 对象存储与另一个远程之间的云到云传输" class="img-large img-center" />

对于需要重复执行的传输,4 步同步向导可以让你将 Netease 设为源或目标,应用文件大小或文件年龄过滤器,并在实际执行前先运行一次演练,以准确预览将要复制或删除的内容。

## 安排定期备份

相较于一次性传输,为了实现持续保护,针对 Netease 的同步任务可以使用 crontab 风格的分钟、小时、日、月字段按计划(需要 PLUS 许可证)重复运行。之后,任务历史会记录每一次运行——开始时间、耗时、传输速度、文件数量——这样你无需翻查原始日志文件,就能获得关于何时移动了什么的具体审计记录。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中为 Netease 对象存储安排定期备份任务" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建一个新的远程,选择 S3 兼容类型,并输入你的 Netease Access Key、Secret Key 和端点。
3. 在 Explorer 面板中打开 Netease 远程,确认你的存储桶和对象正确加载。
4. 设置一个同步任务,将存储桶镜像到另一个远程或本地磁盘,先运行一次演练。

一旦 Netease 被设置为远程,它的行为就和 RcloneView 中的其他任何存储提供商一样——你需要单独管理的系统又少了一个。

---

**相关指南:**

- [管理 China Mobile 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-china-mobile-cloud-sync-backup-rcloneview)
- [管理 Alibaba OSS 云存储 — 使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [管理 Huawei OBS 云存储 — 使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-huawei-obs-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
