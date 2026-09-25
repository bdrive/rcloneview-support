---
slug: get-public-link-share-files-rcloneview
title: "获取公开链接 — 使用 RcloneView 即时分享云文件"
authors:
  - kai
description: "了解如何直接在 RcloneView 的文件浏览器中为云文件生成可分享的公开链接，无需打开浏览器标签页。"
keywords:
  - 获取公开链接
  - 分享云文件
  - 云存储分享链接
  - RcloneView公开链接
  - 谷歌云端硬盘分享链接
  - Dropbox分享链接
  - Box分享链接
  - 云文件分享
  - rclone公开链接
  - OneDrive分享链接
tags:
  - RcloneView
  - feature
  - file-management
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 获取公开链接 — 使用 RcloneView 即时分享云文件

> 跳过浏览器：在 RcloneView 中右键点击任意文件，几秒钟内即可生成可分享的公开链接。

从云端分享单个文件通常意味着要打开浏览器标签页，登录服务商的网页控制台，找到分享按钮，然后复制一个不确定权限是否符合预期的链接。RcloneView 将整个流程压缩成右键菜单中的一项。如果你在同一个文件浏览器中管理跨多个服务商的文件，这种一致性带来的价值远超表面看起来的那样 —— 你不再需要在五个不同的网页界面之间来回切换，只为发送一个文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 获取公开链接的工作原理

**获取公开链接（Get Public Link）** 命令与 Copy、Cut、Rename、Download 位于同一个右键上下文菜单中。在任意已连接远程的文件列表中选择一个或多个文件，右键点击并选择 Get Public Link。RcloneView 会将请求转发给底层的 rclone 后端，该后端会请求服务商的 API，以其所支持的权限（只读、限时、密码保护等）生成链接。

由于这是服务商特有的行为，具体的链接格式和选项会有所不同。Dropbox 的链接与 Box 的链接行为不同，并非所有远程类型都支持公开链接 —— 像普通 SFTP 或 FTP 服务器这样基于协议的远程，通常没有消费级云盘那样的"分享"概念。RcloneView 不会假装提供一个万能按钮却在不支持的远程上悄悄失败，而是如实展示后端实际支持的功能。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote explorer with right-click context menu open" class="img-large img-center" />

## 在日常工作流中的应用

需要处理客户交付物、营销素材或一次性文档请求的团队，从这种在文件已经所在的同一窗口中生成链接的方式中受益最大。你不需要记住文件在哪个服务商上，也不需要单独打开该服务商的网站，只需在 RcloneView 的 Explorer 面板中浏览到该文件，就地生成链接即可。与仅支持挂载的工具不同，RcloneView 在 FREE 许可下也提供同步和文件夹比较功能，因此今天用来分享链接的同一个窗口，明天也可以按计划继续备份同一个文件夹。

当一个项目的资产分散在多个服务商时，这一点尤其有用 —— 例如，RAW 照片原始文件存放在 Backblaze B2，而面向客户的样张存放在 Dropbox。你不需要两套工作流，只需要一个打开了两个标签页的浏览器窗口。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud file transfer panel in RcloneView" class="img-large img-center" />

## 将公开链接与文件夹整理结合使用

在分享之前，最好使用 RcloneView 的文件列表视图确认你到底要公开的是什么内容。切换到 List View 以查看文件大小和修改日期，或者在分享图片时使用 Thumbnail View 快速确认自己选对了文件。Get Public Link 同样适用于多选文件，因此你可以一次性生成多个链接，而不必重复右键操作。

如果链接需要长期用于定期重复分享 —— 例如客户总是从同一个 URL 获取的每周报告 —— 可以将其与一个持续更新该路径下文件的 Sync 作业配合使用，这样链接本身就无需重新生成。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled file updates" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 New Remote 连接存放待分享文件的远程。
3. 在 Explorer 面板中浏览到该文件，右键点击并选择 Get Public Link。
4. 复制生成的链接并发送 —— 无需额外的浏览器登录。

一旦这成为日常习惯，无论文件位于 90 多个受支持服务商中的哪一个，分享云文件所需的都是同样的三次点击。

---

**相关指南：**

- [修复公开链接不受支持的错误 — 使用 RcloneView 正确分享文件](https://rcloneview.com/support/blog/fix-public-link-not-supported-errors-rcloneview)
- [获取大小 — 使用 RcloneView 即时计算云存储用量](https://rcloneview.com/support/blog/get-size-calculate-cloud-storage-usage-rcloneview)
- [缩略图视图 — 使用 RcloneView 直观浏览和预览云端图片](https://rcloneview.com/support/blog/thumbnail-view-image-preview-cloud-rcloneview)

<CloudSupportGrid />
