---
slug: migrate-azure-files-to-onedrive-rcloneview
title: "将 Azure Files 迁移到 OneDrive — 使用 RcloneView 传输文件"
authors:
  - casey
description: "使用 RcloneView 将 Azure File Storage 迁移到 OneDrive。通过拖放、同步任务和 dry-run 预览在云之间移动业务文件。"
keywords:
  - 将 azure files 迁移到 onedrive
  - azure file storage 迁移
  - onedrive 云迁移
  - azure 到 onedrive 传输
  - 云到云迁移
  - RcloneView azure files
  - RcloneView onedrive
  - 将 azure file storage 移动到 onedrive
  - 跨云文件传输
  - 企业云迁移工具
tags:
  - RcloneView
  - azure-files
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Azure Files 迁移到 OneDrive — 使用 RcloneView 传输文件

> 无需接触命令行,也不必在两个不同的控制台之间来回切换,即可将整个 Azure File Storage 共享迁移到 OneDrive。

为某个项目或部门共享而配置了 Azure File Storage 的团队,常常会在公司其他部门都以 Microsoft 365 和 OneDrive 作为日常协作标准之后,发现自己已经超出了它的使用范围。通过两个不同的网页门户手动重新上传所有内容既缓慢又容易出错。RcloneView 会在同一个窗口中并排打开两个远程,让你可以直接在它们之间移动文件,这样迁移就会成为一个可追踪的任务,而不是一场手动复制粘贴的马拉松。与仅支持挂载的工具不同,RcloneView 在 FREE 许可下也提供同步和文件夹比较功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 并排连接 Azure Files 与 OneDrive

添加 Azure File Storage 需要 Azure 门户“访问密钥”页面中的存储账户名称、共享密钥和共享名称——RcloneView 的远程设置向导正好会要求填写这三项。相比之下,OneDrive 使用基于浏览器的 OAuth:点击 New Remote,选择 OneDrive,然后在 RcloneView 为你打开的弹出窗口中登录即可。无需复制或粘贴任何 API 密钥。

两个远程都配置好后,使用双栏(或四栏)布局在各自的 Explorer 面板中打开它们。你会在一侧看到 Azure 共享的文件夹树,另一侧则是你的 OneDrive 结构,每个面板的底部都会显示文件数量和大小。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中将 Azure File Storage 和 OneDrive 添加为远程" class="img-large img-center" />

## 在两个远程之间传输或同步文件

对于一次性迁移,只需在 Azure Files 面板上选中文件夹或文件,并将其拖到 OneDrive 面板上——在两个不同远程之间拖动执行的是复制操作,因此在你准备好清理之前,Azure 源数据不会被改动。对于较大的共享,可以改用 Sync 向导:选择 Azure Files 作为源,OneDrive 作为目标,然后先运行 Dry Run,以便在真正移动任何内容之前预览将要复制哪些文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="将文件从 Azure File Storage 传输到 OneDrive" class="img-large img-center" />

在同步的 Advanced Settings 步骤中启用校验和比较,意味着 RcloneView 会通过哈希值和大小而非仅凭文件名来验证文件内容,这在需要证明迁移已经完全完成时非常重要。

## 自动化迁移并跟踪进度

大型共享很少能一次性完成迁移。将该传输任务保存到 Job Manager 中,以便重新运行以捕获首次迁移之后新增到 Azure Files 的文件,并在运行期间通过底部 Info View 中的 Transferring 标签查看实时进度、速度和文件数量。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排从 Azure Files 到 OneDrive 的定期同步任务" class="img-large img-center" />

Job History 会记录每一次运行的开始时间、持续时间、状态和总传输大小,这样你在下线 Azure 共享之前,就能有据可查地确认迁移切换已经完成。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用账户名称、共享密钥和共享名称添加 Azure File Storage 远程。
3. 通过基于浏览器的登录流程添加 OneDrive。
4. 运行 Dry Run,然后执行同步任务并在 Job History 中确认结果。

一次干净、可验证的迁移,总是胜过一场仓促的手动复制。

---

**相关指南:**

- [管理 Azure Files Storage — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [管理 OneDrive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修复 Azure Files 连接错误](https://rcloneview.com/support/blog/fix-azure-files-connection-errors-rcloneview)

<CloudSupportGrid />
