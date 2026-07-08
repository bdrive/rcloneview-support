---
slug: manage-dreamhost-object-storage-rcloneview
title: "管理 DreamHost DreamObjects——使用 RcloneView 同步和备份文件"
authors:
  - robin
description: "将 DreamHost DreamObjects 连接到 RcloneView，实现可视化的 S3 兼容存储桶管理、文件同步和自动备份，无需编写任何 CLI 命令。"
keywords:
  - DreamHost DreamObjects
  - DreamObjects S3 存储
  - DreamHost 云备份
  - S3 兼容存储管理
  - 同步文件到 DreamObjects
  - DreamHost 对象存储 RcloneView
  - 面向 Web 开发者的云备份
  - S3 云存储 GUI
  - DreamHost 文件同步
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

# 管理 DreamHost DreamObjects——使用 RcloneView 同步和备份文件

> DreamHost DreamObjects 是一种经济高效的 S3 兼容对象存储——RcloneView 让你无需接触命令行，即可以可视化方式浏览存储桶、同步文件并安排备份。

DreamHost DreamObjects 与 DreamHost 托管的网站天然契合：它在冗余硬件上通过 S3 兼容 API 存储备份、媒体资源和静态文件。已经在 DreamHost 上托管服务的团队,可以通过将 DreamObjects 连接到 RcloneView,把这项投入延伸为结构化的云备份,并在一个双栏文件浏览器中管理一切。在 FREE 许可下,你可以以完整的读写权限连接 S3、Azure 或 Backblaze B2,DreamObjects 也不例外。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么 DreamObjects 值得拥有专属工作流

维护着数十个客户项目的 Web 代理公司,会积累大量需要定期进行异地备份的上传媒体、数据库导出文件和构建产物。DreamObjects 提供了这样一个异地存储目标,而无需在一个对托管业务一无所知的提供商那里另开云账户。将夜间导出文件与实时站点一并存储到 DreamObjects,意味着一旦发生迁移或意外删除,恢复只需从同一个服务商关系中取回数据,而不必在多个厂商之间手忙脚乱。

由于 DreamObjects 与 S3 兼容,RcloneView 使用与连接 Amazon S3、Cloudflare R2、Wasabi 及其他数十种对象存储相同的 S3 远程类型来连接它。如果你以前配置过任何 S3 类型的远程,DreamObjects 的设置流程会让你感到十分熟悉。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new DreamHost DreamObjects S3 remote in RcloneView using Access Key and endpoint credentials" class="img-large img-center" />

## 将 DreamObjects 连接到 RcloneView

打开 RcloneView,进入 **Remote** 标签页,然后点击 **New Remote**。选择 **S3** 远程类型,并输入从 DreamHost 面板获取的 DreamObjects Access Key ID、Secret Access Key 和存储桶端点 URL。保存后,新的远程会出现在远程管理器中,并立即可作为浏览器中的一个面板使用。

从浏览器中浏览 DreamObjects,感觉就像在浏览本地磁盘一样:文件名、大小和修改日期一目了然。你可以创建文件夹、通过从本地面板拖拽来上传文件、右键删除对象,并为需要分享的对象生成公开链接。你不再需要每次查看或移动文件时都登录 DreamHost 网页管理面板。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from a local folder into a DreamObjects bucket using RcloneView drag-and-drop upload" class="img-large img-center" />

## 同步与备份到 DreamObjects

对于定期备份,可以从 **Home** 标签页的向导中创建一个同步任务。选择本地项目文件夹或另一个云端远程作为源,并将你的 DreamObjects 存储桶路径设置为目标。在提交之前,启用 **Dry Run** 以预览将要传输的每一个文件——这在首次同步大型媒体库时尤其有用,因为预览可以在不移动任何数据的情况下发现超大文件或命名问题。

确认无误后,将任务保存到任务管理器并按需执行。PLUS 许可用户可以附加一个类似 cron 的调度计划,让 DreamObjects 备份每晚自动运行。**Job History** 标签页会记录每次执行的文件数量、传输速度、总大小和最终状态,提供便于客户报告或合规审查的审计轨迹。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to a DreamHost DreamObjects bucket from the RcloneView Job Manager" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history tab in RcloneView showing completed DreamObjects backup transfer records" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 进入 **Remote** > **New Remote**,选择 **S3**,并输入你从 DreamHost 面板获取的 DreamObjects Access Key、Secret Key 和端点。
3. 在浏览器面板中打开新的远程,直接拖入文件即可上传。
4. 在 **Home** 标签页中创建一个同步任务,先运行一次 Dry Run,然后执行并在 **Job History** 中查看结果。

持续的 DreamObjects 备份可以保护 Web 项目免受意外删除、托管迁移和数据丢失事件的影响——无需 CLI 专业知识,也无需单独搭建监控系统。

---

**相关指南:**

- [使用 RcloneView 管理 Cloudflare R2 云同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 Amazon S3——使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Wasabi 云同步与备份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
