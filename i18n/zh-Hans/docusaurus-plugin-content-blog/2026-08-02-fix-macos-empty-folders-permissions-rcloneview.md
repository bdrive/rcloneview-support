---
slug: fix-macos-empty-folders-permissions-rcloneview
title: "修复 macOS 桌面和文稿文件夹显示为空 — 使用 RcloneView 修复权限"
authors:
  - robin
description: "修复 RcloneView 在 macOS 上将桌面、文稿或下载文件夹显示为空的问题。授予正确的隐私权限并恢复完整的文件访问权限。"
keywords:
  - macOS 空文件夹修复
  - RcloneView macOS 权限
  - 桌面文件夹为空 macOS
  - 文稿文件夹为空 macOS
  - macOS 完全磁盘访问权限
  - 隐私与安全 文件和文件夹
  - macOS 云同步权限
  - RcloneView 故障排除
  - macOS 文件访问被拒绝
  - 修复 RcloneView macOS
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 macOS 桌面和文稿文件夹显示为空 — 使用 RcloneView 修复权限

> 如果 RcloneView 将您 Mac 上的桌面、文稿或下载文件夹显示为空,几乎总是因为某个尚未授予的 macOS 隐私权限——而不是同步问题。

自 Catalina 起,macOS 将桌面、文稿和下载文件夹锁定在隐私与安全权限之后,任何想要读取这些文件夹的应用——包括 RcloneView 在将本地文件夹作为同步来源浏览时——都必须获得明确批准。首次设置本地到云端备份任务的用户经常遇到这个问题:文件夹树会加载,但文件列表始终为空,尽管文件明显存在于磁盘上。RcloneView 连接并同步 90 多个云服务提供商,但这个特定问题完全出在 macOS 一侧,而且是一个两分钟就能解决的修复。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 文件夹显示为空的原因

macOS 将桌面、文稿和下载视为受保护的位置。应用首次尝试读取其中之一时会收到权限提示,如果该提示被误关闭或拒绝——这在初始设置期间很容易意外发生——应用会静默收到一个空列表,而不是错误提示。RcloneView 的文件浏览器面板会显示文件夹本身,在某些情况下甚至显示正确的文件数量,但底层文件列表仍为空,因为操作系统在文件系统层面拒绝提供内容。

这与任何云端远程存储的问题是分开的。如果您的 Google 云端硬盘或 Dropbox 远程存储也显示为空,那是另一个不同的问题——此修复专门适用于用作同步来源或目标的本地 macOS 文件夹。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder view affected by macOS privacy permissions" class="img-large img-center" />

## 授予正确的权限

打开系统设置 > 隐私与安全 > 文件和文件夹,在列表中找到 RcloneView,并分别启用桌面文件夹、文稿文件夹和下载文件夹的开关。如果 RcloneView 尚未出现在列表中,请先在应用中浏览到其中一个文件夹以触发权限提示——macOS 只会列出已尝试访问的应用。

对于持续存在的问题,或者如果您要从三个受保护文件夹以外的位置(外接硬盘、网络共享)进行同步,在同一个隐私与安全面板中授予完全磁盘访问权限是更彻底的解决方法。这涵盖了桌面、文稿、下载以及操作系统可能限制的任何其他位置。

<img src="/support/images/en/blog/new-remote.png" alt="Granting macOS Files and Folders permission to RcloneView" class="img-large img-center" />

更改这些权限后,必须完全重启 RcloneView——而不仅仅是关闭窗口。macOS 只在启动时重新评估应用的文件访问权限,因此在文件夹内容正确显示之前,需要完全退出并重新打开应用。

## 验证修复并构建您的同步

重启后,浏览回之前为空的文件夹——文件和文件夹数量现在应该在底部摘要中正常显示。在运行真正的同步任务之前,请针对您预期的云端目标使用文件夹比较(Folder Compare),确认 RcloneView 现在能够看到本地端应有的一切内容,从而在其演变为不完整备份之前捕获任何残留的访问问题。

确认权限正常工作后,照常构建您的同步任务:本地文件夹作为来源,云端远程存储作为目标,并先启用试运行(Dry Run)以预览将要传输的内容。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Building a local-to-cloud sync job after fixing macOS permissions" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开系统设置 > 隐私与安全 > 文件和文件夹。
3. 为 RcloneView 启用桌面、文稿和下载访问权限,或授予完全磁盘访问权限。
4. 完全退出并重新启动 RcloneView,然后验证文件夹内容是否正确加载。

这个权限模型的存在是为了保护 macOS 上的用户数据,一旦授予一次,RcloneView 就会在此后的每一个同步任务中保持对本地文件的完整、不间断的访问。

---

**相关指南:**

- [使用 RcloneView 修复 macOS "打开的文件过多" 错误](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [macOS Sequoia 上的 RcloneView — 云存储同步](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [修复传输后云同步文件丢失问题 — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
