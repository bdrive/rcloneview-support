---
slug: manage-koofr-cloud-sync-backup-rcloneview
title: "管理 Koofr 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "使用 RcloneView 管理 Koofr 云存储 — 通过基于 rclone 构建的图形界面同步、备份 Koofr，并将其与其他云连接。"
keywords:
  - Koofr 管理
  - Koofr 同步工具
  - Koofr 备份
  - RcloneView Koofr
  - Koofr 云存储图形界面
  - Koofr 文件传输
  - 欧洲云存储
  - 多云管理
  - GDPR 云备份
  - Koofr rclone
tags:
  - RcloneView
  - koofr
  - cloud-storage
  - cloud-sync
  - backup
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Koofr 存储 — 使用 RcloneView 同步和备份文件

> Koofr 是一家注重隐私保护的欧洲云存储提供商,拥有出色的 GDPR 合规资质 — RcloneView 可连接到 Koofr,并将其整合到你的多云备份和同步工作流程中。

Koofr 是一项尊重隐私的欧洲云存储服务,以其对数据安全的承诺以及聚合外部云账户的能力而著称。将 RcloneView 与 Koofr 结合使用,可为你带来额外的灵活性 — 通过一个可同时支持 90 多家云提供商的专用多云文件管理界面来管理 Koofr 的原生存储。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Koofr 连接到 RcloneView

要在 RcloneView 中添加 Koofr 作为远程,请前往 **Remote 标签页 > New Remote**,并从提供商列表中选择 **Koofr**。输入你的 Koofr 凭据以完成设置。保存后,你的 Koofr 存储将以可浏览远程的形式出现在资源管理器面板中 — 你可以浏览文件夹、查看文件大小,并直接管理内容,而无需打开 Koofr 网页界面。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr as a new remote in RcloneView" class="img-large img-center" />

对于已经在使用 Koofr 账户聚合功能(该功能可通过 Koofr 界面连接 Dropbox、Google Drive 或 OneDrive 账户)的团队来说,RcloneView 提供了一个互补的视图 — 可独立管理 Koofr 自身的存储空间,同时兼顾那些外部服务。

## 使用 Koofr 同步文件

一位使用 Koofr 作为个人备份目的地的自由职业开发者,可以在 RcloneView 的 **Job Manager** 中配置一个同步任务:以本地项目文件夹为源,以 Koofr 远程为目标。RcloneView 会处理增量同步 — 后续运行时只传输发生变化的文件,与完整重新上传相比可显著减少带宽使用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Syncing files to Koofr in RcloneView Job Manager" class="img-large img-center" />

Koofr 的欧洲数据中心位置使其成为符合 GDPR 要求的极具吸引力的备份目的地。需要将欧洲托管备份用于合规目的的公司,可以使用 RcloneView 的调度功能(PLUS 许可证)配置从内部文件服务器到 Koofr 的自动传输。**Dry Run** 预览功能可在数据被实际修改前,精确确认将要移动的文件,防止意外覆盖。

## 涉及 Koofr 的跨提供商传输

RcloneView 将 Koofr 视为与其他云远程无异的存在 — 你可以在 Koofr 与任何其他提供商之间自由配置传输。一家小型设计机构每月将其 Google Drive 项目文件夹备份到 Koofr,通过在双面板资源管理器中设置两个远程之间的复制任务,并在运行前对双方进行核对。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-provider transfer from Google Drive to Koofr in RcloneView" class="img-large img-center" />

**Folder Compare** 功能可将你的 Koofr 存储与任何其他远程进行比较,识别仅存在于一侧而不存在于另一侧的文件。这对于验证近期传输是否完整完成,或在数据丢失事件发生前发现差异非常有用。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 前往 **Remote 标签页 > New Remote**,选择 **Koofr**,并输入你的凭据。
3. 在资源管理器面板中浏览你的 Koofr 存储。
4. 在 **Job Manager** 中创建 Koofr 与本地存储或其他云之间的同步或复制任务。

对于注重隐私的用户和符合 GDPR 要求的团队而言,通过 RcloneView 使用 Koofr 可提供专业级云管理,并完全保障欧洲数据驻留。

---

**相关指南:**

- [Koofr 作为多云中枢 — 通过 RcloneView 管理 Google Drive、OneDrive、Dropbox](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Koofr 与 Jottacloud 对比 — 使用 RcloneView 比较欧洲云存储](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)
- [使用 RcloneView 管理 Jottacloud 云同步和备份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
