---
slug: manage-stackpath-cloud-sync-backup-rcloneview
title: "管理 StackPath 对象存储 — 使用 RcloneView 同步和备份文件"
authors:
  - jay
description: "将 StackPath 对象存储连接到 RcloneView,实现拖放式文件管理、定时备份和跨云同步。"
keywords:
  - StackPath 对象存储
  - StackPath S3
  - RcloneView StackPath
  - 管理 StackPath 文件
  - StackPath 备份
  - StackPath 云同步
  - S3 兼容存储 GUI
  - 边缘对象存储
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 StackPath 对象存储 — 使用 RcloneView 同步和备份文件

> 在你管理其他所有云存储的同一个窗口中,浏览、同步并备份 StackPath 兼容 S3 的对象存储。

StackPath 对象存储提供 S3 兼容 API,这意味着它能很好地配合基于 rclone 的工具,但很少自带专用的桌面 GUI。团队最终不得不通过脚本上传文件,或在多个 CLI 会话之间切换,只是为了查看存储桶中有什么。RcloneView 将 StackPath 当作普通远程处理,填补了这一空白 —— 无需编写任何命令,即可获得完整的文件浏览、拖放传输和计划任务。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 StackPath 存储桶

由于 StackPath 使用 S3 协议,你可以按照添加 Amazon S3 或 Wasabi 的相同方式将其添加到 RcloneView:创建新远程,选择 S3 兼容提供商选项,然后提供你的访问密钥、密钥,以及所在区域的 StackPath 端点 URL。连接完成后,存储桶会作为普通标签页出现在 Explorer 面板中 —— 无需单独的凭据文件,也无需终端来验证连接是否成功。

在 FREE 许可下即可完全读写连接 S3、Azure 或 Backblaze B2,因此将 StackPath 与另一个 S3 兼容账户配合使用,无需升级即可开始移动文件。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a StackPath object storage remote in RcloneView" class="img-large img-center" />

## 日常浏览和管理文件

远程设置完成后,StackPath 存储桶在 RcloneView 的 Explorer 中的行为与本地文件夹完全一致。你可以按名称、类型、修改日期或大小排序,对图片较多的存储桶切换到缩略图视图,并在决定是否将其归档到别处之前,使用 Get Size 查看某个资源文件夹占用的空间。使用 Ctrl+点击或 Shift+点击进行多选的方式与本地驱动器相同,因此批量删除或批量下载只需几秒钟,而不必编写脚本。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing StackPath bucket contents in RcloneView" class="img-large img-center" />

## 备份到 StackPath 或从 StackPath 备份

对于定期备份,可设置以 StackPath 作为源或目标的同步作业。四步向导让你配置并发传输数,启用按哈希而非仅按时间戳比较文件的校验和验证,并应用过滤器排除不需要归档的文件类型。在提交传输前先运行 Dry Run,准确预览将复制或删除哪些内容 —— 当存储桶中存放生产资产时,这是一项有用的保障措施。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a StackPath backup job in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建一个新远程并选择 S3 兼容提供商类型。
3. 输入你的 StackPath 访问密钥、密钥和端点。
4. 设置同步或复制作业,在 StackPath 与其他远程之间移动文件。

将 StackPath 接入 RcloneView 后,管理对象存储不再是一项脚本任务,而成为你日常文件工作流程的一部分。

---

**相关指南:**

- [管理 Ceph 对象存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [管理 Scaleway 对象存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [修复 S3 访问被拒 — 使用 RcloneView 解决权限错误](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
