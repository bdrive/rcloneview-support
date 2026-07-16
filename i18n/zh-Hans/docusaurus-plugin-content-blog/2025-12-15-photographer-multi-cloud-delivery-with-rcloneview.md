---
slug: photographer-multi-cloud-delivery-with-rcloneview-dec
title: "摄影师指南：使用 RcloneView 将相册交付给任意客户云存储"
authors:
  - jay
description: "如何一次准备好相册，即可交付到 Drive、Dropbox、OneDrive/SharePoint、Box 和 S3/Wasabi，而无需重新上传或在多个厂商应用之间切换。"
keywords:
  - rcloneview
  - photography workflow
  - multi cloud
  - client delivery
  - google drive
  - dropbox
  - onedrive
  - box
  - wasabi
  - s3
tags:
  - RcloneView
  - cloud
  - sync
  - tutorial
  - photography
  - multi-cloud
  - wasabi
  - google-drive
  - onedrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 摄影师指南：使用 RcloneView 将相册交付给任意客户云存储

> 一次准备好最终成品，然后分发到每个客户所需的存储：Google Drive、Dropbox、OneDrive/SharePoint、Box 或 S3/Wasabi/R2。RcloneView 提供基于 rclone 的双栏 GUI，具备对比（Compare）、任务（Jobs）以及云到云传输速度，让你不必整晚重复上传同一个相册。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
<!-- Image placeholder: two-pane RcloneView with local "Client_Finals" on the left and tabs for Drive, Dropbox, OneDrive, Box, and Wasabi on the right. -->


## 摄影师为什么需要这个

- 客户通常要求上传到他们自己的存储（出于政策、留存要求），而不是提供一个公开链接。  
- 每个项目的交付目标不同：代理商要 Drive，品牌方要 Dropbox 文件请求，修图师用 OneDrive，归档用 Wasabi/S3。  
- 每个客户重复上传 8-12 GB 会拖垮家庭上行带宽；厂商应用给出的错误信息又很不透明。  
- 需要支持部分更新：只发送有变化的精选照片，而不必重新导出或重新上传全部内容。  
- 有时你会在云端 VM 上准备素材以提升速度，在那里进行浏览器登录会很不方便。

RcloneView 在同一个界面中支持 100 多个存储提供商，当你的上行带宽成为瓶颈时，还可以将繁重的传输转移到云端托管的 rclone 上。

<img src="/support/images/en/tutorials/new-remote-all-remotes.png" alt="rcloneview multi cloud explorer" class="img-large img-center" />



## 快速设置（10 分钟）

1. 安装 RcloneView（Win/macOS/Linux）：https://rcloneview.com/src/download.html  
2. 通过 **Remote -> + New Remote** 添加客户使用的远程：  
   - Google Drive、Dropbox、OneDrive/SharePoint、Box（OAuth）。  
   - S3/Wasabi/R2/B2（S3 兼容：endpoint + keys）。  
   - 自定义端点使用 WebDAV/SFTP。  
3. 可选：在云端 VM 上运行 **外部 rclone**，以获得云到云的传输速度。指南：https://rcloneview.com/support/tutorials/new-window-with-external-rclone （该模式适用于任意一对远程）。

👉 远程设置参考：  
- 添加 Google Drive：[分步指南](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)  
- 添加 S3/Wasabi：[S3 兼容设置](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)  

<!-- Image placeholder: “Add Remote” dialog with Drive, Dropbox, OneDrive, Box, Wasabi tiles highlighted. -->
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 交付流程：一次准备，随处交付

1. 在 `Projects/Client/Finals` 中准备最终成品（本地 SSD 或 NAS）。  
2. 打开两个栏目：左侧 = Finals，右侧 = 目标云存储。  
3. 点击 **Compare** 查看缺失的文件；然后点击 **Copy ->** 只发送新增或有变化的文件。  
4. 将右侧标签切换到下一个客户的云存储；复用同一个源，无需第二次本地上传。  
5. 对经常合作的客户，将每个流程保存为 **Job**，随时运行或安排计划。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-large img-center" />

👉 功能文档：  
- Compare（对比）：[工作原理](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)  
- 创建任务：[任务创建](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)  
- 执行与管理任务：[任务执行](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)  
- 计划任务：[计划任务指南](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<!-- Image placeholder: Compare results showing “missing on OneDrive/Dropbox” before copy. -->
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-large img-center" />
## 处理摄影师常见需求

- 代理商同时需要 Drive 和 Wasabi：先复制到 Drive，切换标签到 Wasabi，再次复制——无需第二次本地上传。  
- 品牌方发来 Dropbox 请求链接，而修图师使用 Box：同时打开两个远程，直接拖拽到各自目标，无需重新导出或重新上传。  
- 客户在确认后又更换了 10 张精选照片：使用带 **Dry Run** 的 Compare 或 Sync；只会移动有变化的文件。  
- 客户禁止公开链接：直接在其租户内交付（Drive/OneDrive/Dropbox/Wasabi），无需生成外部共享链接。  
- 共享工作站：启用应用锁（tutorials/enable-app-lock.md）以保护已存储的凭据。

<!-- Image placeholder: Transfer panel showing throughput, retries, and cloud-to-cloud copy success. -->

## 上行带宽较弱时的云到云传输

- 在云端 VM（EC2/GCE）上启动 `rclone rcd`，在 RcloneView 中打开一个 **新窗口**，连接到该守护进程，在那里添加远程，并运行 Compare/Copy。  
- 外部 rclone 模式（OneDrive -> Wasabi 示例）：[云到云示例](https://rcloneview.com/support/tutorials/external-rclone-onedrive-sharepoint-to-wasabi)
- 无头认证指南：[OneDrive 无头认证](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless) 和 [Google Drive 无头认证](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)  


<!-- Image placeholder: New Window in RcloneView showing connection to an external rclone daemon. -->


## 快速操作指南（繁忙周）

1) 远程：Drive（代理商）、Dropbox（品牌方）、OneDrive（修图师）、Wasabi（归档）。  
2) 标签：左侧 = Finals；右侧 = 每个远程一个标签。  
3) 自动化：将每个流程保存为 Job；为持续进行的活动安排每周刷新。  
4) 验证：检查 Job 历史/日志；放心发送链接。

<!-- Image placeholder: Job Manager listing four delivery jobs with last-run status. -->

## 为什么不直接发送公开链接？

- 如果客户只需要一个公开链接，那么这就足够了。  
- 当客户需要将素材存放在自己的存储中（出于政策/留存要求），或者你必须交付到多个目标而不重新上传、需要部分更新、日志记录以及云到云传输速度时，请使用 RcloneView。

## 总结

摄影师不需要用三个厂商应用来满足三种云存储。使用 RcloneView，你可以一次准备好素材，通过 Compare、Copy 以及计划任务在 Drive、Dropbox、OneDrive/SharePoint、Box 和 S3/Wasabi 之间交付。清晰的日志、重试机制以及可选的云到云卸载，意味着更少的熬夜和更快的交接。

<CloudSupportGrid />
