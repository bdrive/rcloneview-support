---
slug: migrate-dropbox-to-proton-drive-rcloneview
title: "将 Dropbox 迁移到 Proton Drive — 使用 RcloneView 传输文件"
authors:
  - jay
description: "将您的 Dropbox 文件迁移到 Proton Drive,享受端到端加密存储。了解如何通过 RcloneView 只需几个简单步骤即可完成云到云迁移。"
keywords:
  - migrate Dropbox to Proton Drive
  - Dropbox to Proton Drive transfer
  - cloud-to-cloud migration RcloneView
  - Proton Drive backup
  - Dropbox migration privacy
  - move files Dropbox Proton Drive
  - encrypted cloud storage migration
  - RcloneView cloud transfer guide
  - switch from Dropbox to Proton Drive
  - Proton Drive sync RcloneView
tags:
  - dropbox
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 迁移到 Proton Drive — 使用 RcloneView 传输文件

> RcloneView 可让您直接以云到云的方式,将整个 Dropbox 资料库传输到 Proton Drive——无需本地下载,无需手动重新上传,也无需使用命令行。

对于许多团队而言,离开 Dropbox 的决定往往取决于数据隐私。Dropbox 以明文形式将文件存储在其服务器上,这意味着 Dropbox 员工和执法机构在获得授权令后可以访问您的数据。Proton Drive 由 ProtonMail 背后的团队打造,会在文件到达 Proton 服务器之前先进行客户端加密——即使是 Proton 自己也无法读取您的内容。RcloneView 通过同时连接这两项服务,并以云到云的方式直接迁移数据,简化了整个迁移过程,同时在全程中保持文件夹结构和文件完整性。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 添加 Dropbox 和 Proton Drive 作为远程

在传输文件之前,请先将两个云账户都添加到 RcloneView 中。前往 **Remote tab > New Remote**,选择 **Dropbox**。RcloneView 会打开一个浏览器窗口进行 OAuth 身份验证——登录 Dropbox 并授予访问权限。授权完成后,该远程会自动保存。

对 Proton Drive 重复相同的流程:从远程列表中选择 **Proton Drive**,输入您的 Proton 邮箱地址和密码。如果您启用了双重身份验证,请在提示时输入验证码。RcloneView 内置的 rclone 二进制文件原生支持 Proton Drive(需要 rclone v1.69 以上版本,该版本已内置)。添加两个远程后,它们会以标签页的形式显示在双栏文件浏览器中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## 使用文件夹比较规划迁移

在传输任何内容之前,先使用 RcloneView 的 **Folder Compare(文件夹比较)** 工具评估 Dropbox 中有哪些内容,以及 Proton Drive 中已经存在哪些内容。点击 Home 标签页中的 **Compare** 按钮,将 Dropbox 设为左侧源,Proton Drive 设为右侧目标。比较视图会突出显示仅存在于 Dropbox 中的文件(仅左侧)、两侧都匹配的文件,以及大小差异——让您清楚了解实际需要迁移的内容。

如果您已经手动将部分文件复制到 Proton Drive,并希望避免重复工作,这一步骤尤其有用。通过筛选“仅左侧”即可只查看 Proton Drive 中缺失的内容,然后只复制这些特定项目。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer setup from Dropbox to Proton Drive in RcloneView" class="img-large img-center" />

## 运行云到云传输

如需完整迁移,请使用 **Sync(同步)** 向导。在 Home 标签页中点击 **Sync**,将 Dropbox 设为源,Proton Drive 设为目标,并为任务命名(例如 `dropbox-proton-migration`)。选择 **Copy** 作为任务类型,以便在构建 Proton Drive 副本的同时保留 Dropbox 中的原始文件——这样可以让您的 Dropbox 保持完好,直到您验证迁移完成为止。

在向导的第二步中,启用 **checksum verification(校验和验证)** 以确认每个文件都能完整无损地到达。对于必须保证数据完整性的敏感文档而言,这一点至关重要。首先运行 **Dry Run(演练)**,预览将要传输的文件,确认无误后再执行实际任务。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using folder compare to verify Dropbox files before migration to Proton Drive" class="img-large img-center" />

## 监控进度并验证完成情况

传输运行期间,RcloneView 底部的 **Transferring(传输中)** 标签页会实时显示传输速度、文件数量和完成百分比。较大的 Dropbox 资料库——例如某律师事务所的 5 万份客户文档——可能需要数小时才能完成;该任务会在后台持续运行,同时 RcloneView 会最小化到系统托盘。

任务完成后,请重新运行文件夹比较,确认没有仍标记为“仅左侧”的文件。任何仍在 Dropbox 中标记为“仅左侧”的项目都表示传输失败,可以选择性地重新运行。RcloneView 的 **Job History(任务历史)** 会记录完整的运行情况,包括开始时间、总字节数、速度和状态——形成适用于合规或 IT 审计的永久记录。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Dropbox to Proton Drive migration job in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 **Remote tab > New Remote** 中,通过 OAuth 添加 Dropbox,通过邮箱/密码添加 Proton Drive。
3. 使用 **Folder Compare** 在传输前审查两个账户之间的差异。
4. 创建一个启用校验和验证的 Copy 同步任务并运行,以完成迁移。

在 RcloneView 中连接好这两个远程后,将数据从 Dropbox 迁移到 Proton Drive 就会变成一个可视化、可管理的操作——无需脚本,无需中间下载环节,并且全程留有清晰的审计记录。

---

**相关指南:**

- [使用 RcloneView 管理 Dropbox 云存储](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Proton Drive 云同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 将 Dropbox 迁移到 Wasabi](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
