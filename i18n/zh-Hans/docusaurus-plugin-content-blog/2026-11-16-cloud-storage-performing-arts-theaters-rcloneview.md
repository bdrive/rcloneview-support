---
slug: cloud-storage-performing-arts-theaters-rcloneview
title: "表演艺术剧院的云存储 — 用 RcloneView 保护剧本、Cue 文件和排练视频"
authors:
  - tayson
description: "了解剧团如何使用 RcloneView 在多个云和 NAS 之间同步剧本、灯光与音响 Cue 文件以及排练视频，并进行计划备份。"
keywords:
  - 剧院云存储
  - 剧目制作文件备份
  - 表演艺术云存储
  - 备份灯光和音响 Cue 文件
  - 排练视频云备份
  - 舞台设计文件同步
  - 剧院档案从 NAS 到云
  - 面向剧团的 RcloneView
  - 艺术机构的多云备份
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 表演艺术剧院的云存储 — 用 RcloneView 保护剧本、Cue 文件和排练视频

> 首演之夜取决于文件：正确的剧本修订版、最终的音响 Cue，以及设计师签字确认的灯光图。

一家地方剧团要处理的数据量超乎想象。导演在 Google Drive 中共享剧本修订版，音响设计师通过 Dropbox 交付 Cue 列表，排练视频堆积在控制室的 Synology NAS 上，往季的档案则存放在老旧的外置硬盘里。RcloneView 将这一切汇集到一个窗口中，让制作团队无需在多个应用之间切换，就能同步、比较和备份每一个剧目文件夹。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接制作中使用的所有存储位置

每个部门往往各自选择工具，因此第一步是让一切都清晰可见。在 RcloneView 中，通过浏览器登录添加 Google Drive 和 Dropbox，通过 Synology 自动检测连接控制室的 NAS，再添加一个 Backblaze B2 或 Wasabi 等对象存储桶用于长期归档。外部设计师通过 Google Drive 发送的共享文件夹，可以作为 Google Drive Shared with Me 远程添加。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive, Dropbox, and Backblaze B2 remotes for a theater production in RcloneView" class="img-large img-center" />

最多可并排打开四个资源管理器面板，舞台监督可以把 Drive 中最新的提词本拖到 NAS 的剧目文件夹，或把 Dropbox 中设计师的效果图拉进归档存储桶。在不同远程之间拖动会复制文件，因此原件会保留在设计师放置的位置。

## 技术周前保持 Cue 文件和剧本一致

技术周的典型失误是用过时的 Cue 文件运行演出。RcloneView 的 Folder Compare 会把音响设计师的交付文件夹与控制室副本并排显示，并高亮只存在于一侧或大小不同的文件。一键复制已更改的 Cue 文件后，它们会在比较视图中被标记为相同。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing sound cue folders between Dropbox and the booth NAS in RcloneView" class="img-large img-center" />

对于整个剧目文件夹，先用 Dry Run 运行 Sync 任务，可以准确显示将要复制或删除的内容——当导演悄悄重新整理了剧本文件夹时，这一点尤为重要。

## 将排练视频同时备份到两个目标

排练和存档录像体积大且无法替代。RcloneView 的 1:N 同步可在单个任务中将一个源文件夹镜像到多个目标，因此 NAS 上的视频文件夹可以同时发送到 B2 存储桶和第二个云。与仅支持挂载的工具不同，RcloneView 还能同步和比较文件夹——在 FREE 许可证下即可使用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing rehearsal video from a Synology NAS to two cloud destinations with RcloneView" class="img-large img-center" />

演员合同和薪资导出文件需要格外小心。用 Crypt 远程包装云文件夹，文件名和内容会在离开办公室之前被加密。

## 在演出期间自动执行夜间备份

拥有 PLUS 许可证后，任务向导中的 crontab 风格调度器可以在每晚演出结束后运行备份，例如凌晨 1:00，并可通过 Simulate schedule 预览下次运行时间。Job History 会记录每次运行的状态、大小和文件数，在演出期间出现疑问时为制作经理提供清晰的记录。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly theater backup job in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加各部门已在使用的远程：Google Drive、Dropbox、NAS 和归档存储桶。
3. 使用 Folder Compare 确认控制室的 Cue 文件副本与设计师的最新交付一致。
4. 为排练视频创建 1:N Sync 任务，并使用 PLUS 将其安排为每晚运行。

文件得到保护后，剧组就能专注于演出。

---

**相关指南：**

- [视频制作团队的云存储工作流 — 用 RcloneView 同步样片、代理文件和成片](https://rcloneview.com/support/blog/cloud-storage-video-production-teams-rcloneview)
- [音乐制作的云存储 — 用 RcloneView 管理工程、分轨和备份](https://rcloneview.com/support/blog/cloud-storage-music-production-rcloneview)
- [1:N 同步 — 在 RcloneView 中将一个源同步到多个目标](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
