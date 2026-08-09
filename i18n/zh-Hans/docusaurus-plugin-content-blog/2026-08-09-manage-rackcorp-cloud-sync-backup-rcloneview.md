---
slug: manage-rackcorp-cloud-sync-backup-rcloneview
title: "管理 RackCorp 对象存储 — 使用 RcloneView 同步和备份文件"
authors:
  - morgan
description: "将 RackCorp 对象存储连接到 RcloneView，与 90+ 种其他云服务商一起实现跨平台同步、备份和挂载。"
keywords:
  - RackCorp 存储
  - RackCorp 云备份
  - RackCorp RcloneView
  - S3 兼容对象存储 GUI
  - 同步 RackCorp 存储
  - 备份 RackCorp
  - 挂载对象存储到本地驱动器
  - 多云文件管理器
  - 云存储同步工具
  - 对象存储备份软件
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 RackCorp 对象存储 — 使用 RcloneView 同步和备份文件

> 将 RackCorp 的 S3 兼容对象存储与其他云、本地驱动器和 NAS 共享放到同一个窗口中管理。

已经在 RackCorp 上运行基础设施的团队,常常还得摆弄一个单独的 S3 客户端,才能在存储桶中移入移出文件。RcloneView 把 RackCorp 当作和其他远程存储完全一样的对象来处理,从而省去了这一额外步骤——在同一个资源管理器里浏览、同步、挂载,并与 Google Drive、S3 或本地磁盘并排备份。与仅支持挂载的工具不同,RcloneView 在 FREE 许可下也支持同步和文件夹比较(Folder Compare)。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 RackCorp 添加为远程存储

RackCorp 通过 rclone 的 S3 协议访问,因此设置方式与其他 S3 兼容服务相同:需要 Access Key ID、Secret Access Key,以及正确的区域端点。打开 Remote 标签页 > New Remote,选择 S3 兼容选项,粘贴来自 RackCorp 账户的凭据。

保存后,RackCorp 会以独立标签页的形式出现在资源管理器面板中,与你配置的其他远程存储并列。无需记住存储桶路径——文件夹树和面包屑导航栏可让你直观浏览,如果需要在内置的 rclone 终端中使用,右键点击 > Copy Full Path 即可获取 `remote:bucket/path` 格式的字符串。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加新的 S3 兼容远程存储" class="img-large img-center" />

## 与 RackCorp 之间的同步和备份

远程存储连接后,使用 Sync 向导构建可重复执行的备份作业。第 1 步设置本地或云端来源以及 RackCorp 目标文件夹;第 2 步可调整并发文件传输数和多线程传输数,以适应大数据集;第 3 步按文件类型、大小或时间应用过滤规则,避免把临时文件和缓存传到存储桶中。

先执行一次 Dry Run,准确预览将要复制或删除的文件,再正式提交传输——这能在触及生产数据之前发现文件夹映射错误。对于需要重复执行的任务,把它保存在 Job Manager 中,之后就能在 Job History 里查看完整的传输日志。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="配置发送到 RackCorp 存储的计划备份作业" class="img-large img-center" />

## 将 RackCorp 挂载为本地驱动器

如果你更希望把 RackCorp 中的对象当作普通文件来使用,可以把存储桶挂载为虚拟驱动器。在资源管理器中选中远程文件夹,点击面板工具栏中的挂载图标,然后选择一种 VFS 缓存模式——Writes 模式会先在本地缓冲更改再上传,是稳妥的默认选择。

已挂载的存储桶会显示在 Mount Manager 中,你可以在那里卸载、在原生文件浏览器中重新打开,或者无需将主窗口调至前台,直接从系统托盘切换挂载状态。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="从 Remote Explorer 将 RackCorp 存储桶挂载为本地驱动器" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 RackCorp 账户中生成 Access Key ID 和 Secret Access Key。
3. 使用 Remote 标签页 > New Remote,将 RackCorp 添加为新的 S3 兼容远程存储。
4. 根据你的工作流程,创建同步作业或直接挂载存储桶。

一旦 RackCorp 接入 RcloneView,它就不再是一个需要切换上下文才能使用的独立工具,而是成为你日常备份流程中的又一个目标。

---

**相关指南:**

- [管理 Linode 对象存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)
- [管理 Hetzner 对象存储 — 使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [使用 RcloneView 将 Amazon S3 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-amazon-s3-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
