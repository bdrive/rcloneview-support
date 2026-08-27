---
slug: migrate-gofile-to-google-drive-rcloneview
title: "将 Gofile 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView 将文件从 Gofile 移动到 Google Drive——连接两个远端,直接进行云到云的传输,并自动化重复的接收任务。"
keywords:
  - 将 Gofile 迁移到 Google Drive
  - Gofile 到 Google Drive 传输
  - 将 Gofile 文件移动到 Google Drive
  - RcloneView Gofile 迁移
  - Gofile 访问令牌设置
  - 云到云传输工具
  - Gofile Google Drive 同步
  - 整合云存储
  - 跨云文件传输
  - Gofile 文件管理
tags:
  - RcloneView
  - gofile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Gofile 迁移到 Google Drive — 使用 RcloneView 传输文件

> 使用 RcloneView,无需先下载到本地或在浏览器标签页之间切换,即可将通过 Gofile 送达的文件直接拉取到 Google Drive。

Gofile 是一次性文件共享的常见中转站——客户发来一批素材,承包商上传交付成果,下载链接在团队内传来传去。但这些内容并不适合长期留在那里。RcloneView 将 Gofile 和 Google Drive 都作为远端连接在同一个窗口中,因此把文件从 Gofile 中取出并放入永久、有序的 Google Drive 存储,是一次直接传输,而不是先下载再重新上传的往返操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Gofile 与 Google Drive

Gofile 使用凭据输入而非 OAuth:从您的 Gofile 账户资料页生成一个 Access Token,并将其粘贴到 New Remote 界面中。相比之下,Google Drive 使用基于浏览器的 OAuth——点击 New Remote 向导,在弹出窗口中完成认证即可,无需复制任何令牌。将两者分别添加为远端后,它们会以标签形式出现,可在相邻的 Explorer 面板中打开。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Gofile 和 Google Drive 远端" class="img-large img-center" />

与仅支持挂载的工具不同,RcloneView 还支持在远端之间进行同步和文件夹比较——在 FREE 许可下即可使用——因此同样的两个远端配置,既能应对一次性清理,也能胜任持续的接收流程。

## 在远端之间直接传输文件

在左侧面板打开 Gofile,右侧面板打开 Google Drive,然后选择要移动的文件或文件夹。在两个不同远端之间拖动是复制而非移动,因此在您明确删除之前,Gofile 中不会有任何内容消失——如果您想在清理源文件之前确认传输已顺利完成,这一点很有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中将文件从 Gofile 传输到 Google Drive" class="img-large img-center" />

对于较大的批次,请使用右键点击的 Copy 或 Download,而不是拖放——底部 Info View 中的 Transferring 标签会显示实时进度、传输速度和文件数量,方便您在关闭应用前确认一切都已顺利送达。

## 自动化重复接收任务

如果 Gofile 持续收到新的交付内容——比如反复出现的客户交接或定时的导出投递——一个已保存的同步任务比每次手动重复传输更好。Job Manager 的四步向导可以让您将 Gofile 设为源,特定的 Google Drive 文件夹设为目标,应用最大文件存在时长过滤条件以便只拉取最近上传的内容,并在实际执行前通过 Dry Run 预览将要复制的内容。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排从 Gofile 到 Google Drive 的定期同步任务" class="img-large img-center" />

之后,Job History 会记录每一次运行——状态、文件数量、耗时——这样您无需打开应用检查,就能确认定时接收任务已经完成。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用从 Gofile 账户页面获取的 Access Token,将 Gofile 添加为远端。
3. 通过 OAuth 浏览器登录,将 Google Drive 添加为远端。
4. 将两者并排打开在 Explorer 面板中,拖动您的第一批文件,或为需要重复执行的任务创建同步任务。

当两个远端都出现在同一个窗口中时,把内容从 Gofile 搬到有序的 Google Drive 存储,就不再取决于共享链接的有效期。

---

**相关指南:**

- [管理 Gofile 存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [管理 Google Drive 文件与云同步 — RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [解决 Google Drive 存储配额超出问题 — 使用 RcloneView 转移文件](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
