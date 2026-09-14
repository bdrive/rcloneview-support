---
slug: fix-public-link-not-supported-errors-rcloneview
title: "修复公开链接不受支持的错误 — 使用 RcloneView 正确分享文件"
authors:
  - tayson
description: "修复 RcloneView 中的 Get Public Link 错误,了解哪些远程支持可分享链接,并为其余情况使用安全的替代方案。"
keywords:
  - RcloneView
  - 公开链接错误
  - 公开链接不受支持
  - 分享云端文件
  - rclone 公开链接
  - 云存储分享
  - 分享链接修复
  - 云文件分享故障排除
  - 远程管理器
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复公开链接不受支持的错误 — 使用 RcloneView 正确分享文件

> 右键点击 Get Public Link 却毫无反应?这里说明原因以及应该采取的替代做法。

RcloneView 的 Explorer 面板在右键菜单中提供了 **Get Public Link** 命令,但它只在后端暴露原生分享 API 的远程上有效。如果在纯协议连接或不受支持的服务商上尝试,请求会失败或返回错误而不是链接地址。借助 RcloneView 的 Remote Manager 和双栏 Explorer,你可以轻松查看当前所在的远程,并将文件移动到便于生成链接的地方。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么某些远程上 Get Public Link 会失败

公开链接的生成取决于底层存储后端所支持的功能。拥有原生分享 API 的服务商——包括 Google Drive、Dropbox、Microsoft OneDrive、Box 和 pCloud——会返回可分享的 URL,因为 rclone 会调用该服务商自身的链接接口。SFTP、FTP、WebDAV、SMB/CIFS 这类基于协议的连接则没有这个概念——它们是纯粹的文件传输协议,而非分享平台,因此该命令没有可调用的对象。S3 兼容端点(Amazon S3、Wasabi、Backblaze B2、Cloudflare R2)则是通过在服务商自己的控制台上设置的存储桶策略或预签名 URL 来处理公开访问。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote screen showing different provider types" class="img-large img-center" />

在认定这是 bug 之前,先确认你的远程属于哪一类。打开 Remote 标签页下的 Remote Manager,确认远程类型,通常一眼就能看出失败的原因。

## 确认远程和权限设置

如果这是一个理应支持链接功能的 OAuth 服务商,下一步是确认账户是否有权限分享该文件或文件夹。这些远程的商业版或企业版有时会在组织层面限制外部分享,而这在 RcloneView 中会表现为同样的请求失败。如果令牌看起来已过期,请通过 Remote Manager 重新验证该远程,然后先在你确认可以从服务商自己的网页界面分享的文件上重试。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder compare view for verifying file locations before sharing" class="img-large img-center" />

与仅支持挂载的工具不同,RcloneView 在 FREE 许可下也支持同步和文件夹比较——因此你可以快速将文件从不支持链接的远程复制到支持链接生成的远程,而不必继续排查问题。

## 远程不支持链接时的安全替代方案

对于 SFTP、FTP、WebDAV、SMB 以及大多数 S3 兼容存储桶,实用的解决办法是将文件复制到支持原生链接的远程,或者通过服务商自己的控制台(存储桶策略、预签名 URL,或 NAS 端的共享)来完成分发。在两个打开的 Explorer 面板之间使用 RcloneView 的拖放功能移动一份副本,然后在目标远程上运行 Get Public Link。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling for repeatable copy-and-share workflows" class="img-large img-center" />

如果这是一个经常性的需求,可以将这个复制步骤保存为 Job Manager 中的一个 Job,这样每次同步之后,相同的文件就会自动进入支持链接生成的远程。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 Remote Manager,确认出问题的远程实际使用的是哪种后端类型。
3. 重新验证令牌可能已过期的 OAuth 远程,然后在一个已知可分享的文件上重试链接生成。
4. 对于协议类或 S3 兼容的远程,使用拖放将文件复制到支持链接的远程,再在那里生成链接。

提前了解哪些远程可以分享链接,能在日后为你省下一张支持工单。

---

**相关指南:**

- [使用 RcloneView 获取云端文件的可分享公开链接](https://rcloneview.com/support/blog/link-public-shared-links-cloud-rcloneview)
- [管理 Google Drive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修复云端传输权限被拒绝的错误](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)

<CloudSupportGrid />
