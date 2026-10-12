---
slug: fix-google-photos-sync-errors-rcloneview
title: "修复 Google 相册同步错误 — RcloneView 中的空库、403 Forbidden 和只读问题"
authors:
  - steve
description: "排查 RcloneView 中常见的 Google 相册错误 — 远程看起来为空或提示无更改、因客户端 ID 停用或速率限制导致的 403 Forbidden、目标只读错误,以及上传后文件缺失。"
keywords:
  - Google 相册同步错误 RcloneView
  - Google 相册空文件夹 rclone
  - Google 相册 403 客户端 ID
  - 修复 Google 相册备份问题
  - Google 相册 rclone 错误
  - Google Photos API 配额错误
  - RcloneView Google 相册故障排查
  - Google 相册上传问题
  - Google 相册备份修复
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Google 相册同步错误 — RcloneView 中的空库、403 Forbidden 和只读问题

> Google 相册的 API 有一些其他云盘都没有的限制。大多数人在 RcloneView 中遇到的“错误”其实是 Google 规则在起作用 — 下面说明每种情况的含义以及应对方法。

Google 相册常用于个人照片存储,但它的 rclone 后端与标准云盘的行为大不相同。自 2025 年 3 月 31 日起,Google Photos API 只向第三方应用显示该应用自己上传的媒体;现有媒体无法通过 API 修改或删除;速率限制也比 Google Drive 更严格。了解这些限制,是解决在 RcloneView 中使用 Google 相册时所遇错误的第一步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 远程看起来为空 — “No Changes Detected” 或复制了 0 个文件

最常见的反馈是:你添加了一个 Google Photos 远程,在资源管理器中打开后几乎什么都看不到 — 或者复制到 NAS 的 Copy 作业几秒钟就结束,传输了 0 个文件。其实并没有出故障。2025 年 3 月 31 日,Google 移除了允许第三方应用读取用户整个媒体库的 API 权限范围。用 Google 的话说,应用“现在只能列出、搜索和检索由你的应用创建的相册和媒体项”。因此 RcloneView 只能看到通过 RcloneView 或 rclone 上传的照片;手机端和网页端上传的照片不可见,共享相册则会返回 `403 PERMISSION_DENIED`。

RcloneView 1.6 及更高版本会在你打开 Google Photos 远程时在应用内说明这一限制,因此它不会再被当成一个空账户。

应对方法:使用 **Google Takeout** 导出现有媒体库 — 最好选择导出到 Google Drive — 然后让 RcloneView 把导出内容复制到你的外置硬盘、NAS 或其他云存储。完整步骤请参阅 [如何将 Google 相册备份到外置硬盘或 NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)。

## 错误:“403 Forbidden” — 客户端 ID 停用或速率限制

Google 相册返回的 `403` 有两种不同的原因。请查看 RcloneView 的 **Log 选项卡** 来区分。

**连接或列出时出现 403 — 共享客户端 ID。** rclone 内置的 Google Photos 客户端 ID 将在 2026 年内停用,Google 现在要求每位用户使用自己的 OAuth 客户端 ID 进行连接。如果远程连接失败或所有请求都被拒绝,原因就在这里。当无法建立连接时,RcloneView 1.6 及更高版本会在连接向导中引导你创建自己的客户端 ID;rclone 的 [Google 相册文档](https://rclone.org/googlephotos/#making-your-own-client-id) 介绍了在 Google Cloud Console 中的相同步骤。

**上传时出现带有 `userRateLimitExceeded` 的 403 — 写入配额。** Google 对通过 API 上传照片设有每位用户的每日限制,批量上传数千张照片可能在传输中途触发该限制。请降低传输并发数 — 进入作业的 Advanced Settings,将文件传输数设为 2 或 3 — 并启用 **Retry on failure**(5 次或更多重试),这样 RcloneView 会重新尝试被限流的上传,而不是让整个作业失败。如有必要,可将超大规模的上传分散到几天内完成。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos upload rate in RcloneView" class="img-large img-center" />

## 错误:“Can't Copy — Destination is Read Only”

如果看到关于目标只读的错误,说明你正在尝试双向同步,或覆盖 Google 相册中已存在的照片。Google Photos API 不允许通过 rclone 修改或删除现有媒体,RcloneView 遵守这一限制。

解决方法是把作业配置为从源到 Google 相册的单向 **Copy**(而不是 Sync)。这样会上传新文件,而不会尝试删除或覆盖 Google 相册一侧的任何内容。如果需要删除照片,请在 Google 相册网页版或移动应用中操作。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring a Copy job to Google Photos in RcloneView" class="img-large img-center" />

## 上传后文件缺失

Google 相册按相册和创建日期组织媒体,而不是按你原有的文件夹结构。当你把文件夹层级复制到 Google 相册时,文件会进入媒体库,但不会保留你预期的文件夹 — API 不保留文件夹结构。另请注意,通过 API 再下载回来的照片并非原始分辨率,且会丢失 EXIF 位置数据。

若要保留文件夹组织,请改为复制到 Google Drive,子目录会与源端完全一致地保留。对于真正的照片归档,把原始文件夹树的副本存放到 Backblaze B2 或 Amazon S3 是更可靠的长期选择。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Google Photos job" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 如果远程看起来为空,那是 Google 的 API 限制 — 请用 Google Takeout 导出现有媒体库,再用 RcloneView 复制该导出内容。
3. 连接时出现 403,请创建你自己的 OAuth 客户端 ID;出现 `userRateLimitExceeded`,请将并发数降到 2–3 并增加重试次数。
4. 向 Google 相册上传时,请使用 **Copy** 作业类型,而不是 Sync。

弄清自己触碰的是 Google 的哪条规则,就能让你一次配置正确 RcloneView,避免令人沮丧的反复重试。

---

**相关指南:**

- [如何将 Google 相册备份到外置硬盘或 NAS — Google Takeout + RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [修复 Google Drive 配额和速率限制错误](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [通过浏览器登录 (OAuth) 添加远程](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
