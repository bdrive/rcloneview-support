---
slug: migrate-box-to-onedrive-rcloneview
title: "将 Box 迁移到 OneDrive —— 使用 RcloneView 传输文件"
authors:
  - morgan
description: "使用 RcloneView 将文件从 Box 迁移到 Microsoft OneDrive 的分步指南。快速、可靠的云到云文件传输,并提供完整的进度监控。"
keywords:
  - migrate box to onedrive
  - box to onedrive transfer
  - cloud migration box onedrive
  - rcloneview box onedrive
  - box onedrive migration guide
  - transfer files from box to onedrive
  - box cloud migration tool
  - onedrive migration from box rcloneview
  - move files box to microsoft onedrive
tags:
  - box
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 迁移到 OneDrive —— 使用 RcloneView 传输文件

> RcloneView 让从 Box 迁移到 Microsoft OneDrive 变得简单直接——连接两个账户、配置传输任务,即可移动整个文件库,无需打开浏览器。

从 Box 切换到 Microsoft OneDrive 的组织都会面临同样的常见挑战:如何在不丢失数据、不重复内容、也不必忍受缓慢的手动下载再上传流程的前提下,可靠地移动成千上万个文件。RcloneView 通过桌面 GUI 处理整个迁移过程,以云到云的方式在两个云服务之间直接传输文件,同时你可以实时监控进度。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Box 和 OneDrive

第一步是将两个账户都添加为 RcloneView 中的远程。在 **Remote** 选项卡中,点击 **New Remote** 并选择 **Box**。RcloneView 会打开一个浏览器窗口进行 OAuth 身份验证——登录并授予访问权限,然后返回应用程序。对 **OneDrive** 重复相同的过程,它同样使用基于浏览器的 OAuth 登录。

保存两个远程后,使用 Settings 选项卡中的 **Layout** 选项并排打开两个资源管理器面板。在左侧面板中导航到你的 Box 源文件夹,在右侧面板中导航到你的 OneDrive 目标文件夹。这种双面板视图能让你在传输开始前清楚地了解现有结构。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and OneDrive as remotes in RcloneView" class="img-large img-center" />

如果你正在迁移 Box for Business 账户,请在远程配置中设置 `box_sub_type = enterprise`——设置向导中包含此字段。对于 OneDrive for Business 或 SharePoint 文档库,请在 OneDrive 设置步骤中选择相应的账户类型。两种企业变体都通过浏览器 OAuth 以相同方式进行身份验证。

## 运行迁移任务

配置好两个远程后,打开 **Job Manager** 并点击 **Add Job**。选择你的 Box 文件夹作为源,目标 OneDrive 文件夹作为目的地。对于一次性迁移,**Copy** 任务类型会在填充 OneDrive 的同时保留 Box 中的所有文件——只有在你希望文件传输后从 Box 中删除时才使用 **Move**。

在高级设置中,启用 **checksum verification**(校验和验证)以确认每个文件完整无损地到达。对于大型迁移而言,这一点尤为重要,因为网络中断可能会悄无声息地产生损坏的副本。此外,设置重试次数(默认值:3),以便在无需手动重启的情况下处理来自任一提供商的临时 API 错误。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy job from Box to OneDrive in RcloneView" class="img-large img-center" />

在执行完整传输之前,使用 **Dry Run** 模式模拟该任务。预览会准确显示将要复制哪些文件,帮助你在为实际迁移投入带宽和时间之前,发现不匹配的文件夹结构或意外的超大文件。

## 监控进度并验证结果

传输过程中,RcloneView 界面底部的 **Transferring** 选项卡会显示实时进度:当前速度、已完成文件数、已移动的总数据量以及已用时间。对于大型迁移——例如法务团队要移动长达十年的合同文件——这种可视性对于估算操作所需时间以及围绕工作时间进行规划至关重要。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring Box to OneDrive transfer progress in RcloneView" class="img-large img-center" />

任务完成后,查看 **Job History** 面板以获取完整的执行摘要。如果有任何文件出错,日志会显示确切的路径和错误消息,以便你逐一处理,而无需重新运行整个任务。查看历史记录后,使用 RcloneView 的 **Folder Compare** 功能并排比较 Box 源和 OneDrive 目标,在停用 Box 账户之前确认每个文件都已正确传输。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to OneDrive migration in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **Remote > New Remote** 使用 OAuth 身份验证添加 **Box** 作为远程。
3. 使用 OAuth 身份验证添加 **OneDrive** 作为第二个远程。
4. 在 Job Manager 中创建一个 **Copy** 任务,以 Box 为源、OneDrive 为目标,启用校验和验证,然后运行它。

借助 RcloneView,从 Box 迁移到 OneDrive 是一项干净、可审计的操作——无需手动下载,无需中间存储,从始至终都拥有完整的进度可见性。

---

**相关指南:**

- [使用 RcloneView 将 Box 同步到 Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [使用 RcloneView 实现零停机 Box 到 Dropbox 迁移](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [使用 RcloneView 将 Box 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
