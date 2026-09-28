---
slug: sync-nextcloud-to-koofr-rcloneview
title: "将 Nextcloud 同步到 Koofr — 使用 RcloneView 进行云备份"
authors:
  - robin
description: "使用 RcloneView 将自建的 Nextcloud 实例备份到 Koofr — 在两个注重隐私的存储提供商之间进行直接的云到云同步。"
keywords:
  - 将 Nextcloud 同步到 Koofr
  - Nextcloud 到 Koofr 备份
  - RcloneView Nextcloud
  - RcloneView Koofr
  - 自建云备份
  - 云到云同步
  - Nextcloud Koofr 传输
  - 欧洲云存储备份
tags:
  - RcloneView
  - nextcloud
  - koofr
  - cloud-to-cloud
  - sync
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Nextcloud 同步到 Koofr — 使用 RcloneView 进行云备份

> 为自建的 Nextcloud 实例配置一个基于 Koofr 的异地备份，按计划自动运行,而不是手动导出。

Nextcloud 之所以受欢迎，正是因为它让存储由你自己掌控，但这种掌控也意味着一次服务器故障、一次糟糕的更新,或一次磁盘错误,就可能让你唯一的副本全部丢失。Koofr 是作为第二副本的天然搭配,因为它同样是一家总部位于欧盟、注重隐私的提供商——备份会落在具有相似数据驻留政策的地方,而不是无关的司法管辖区。RcloneView 将两者都作为普通的远端连接,并在它们之间直接执行复制,因此备份不依赖于让 Nextcloud 服务器同时充当上传客户端。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Nextcloud 和 Koofr

通过“远端”标签 > “新建远端”,使用 WebDAV 将 Nextcloud 添加为远端——Nextcloud 会在实例管理面板的“设置”下显示的 URL 上通过 WebDAV 公开文件,因此你需要服务器地址、用户名,以及应用专用密码,而不是常规登录密码。单独通过其自身的 OAuth 登录流程添加 Koofr。RcloneView 可在一个窗口中挂载并同步 90+ 家提供商,支持 Windows、macOS 和 Linux,因此无论 Nextcloud 服务器架设在家用 NAS 还是租用的 VPS 上,同样的两个远端设置都能正常运作。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

当两个远端都出现在远端管理器中后,并排打开两个文件浏览面板,确认可以浏览 Nextcloud 的文件夹结构,并查看(可能为空的)Koofr 目标位置,然后再设置任何自动化任务。

## 构建同步任务

对于这种备份,使用四步同步向导,而不是临时的拖放操作——将 Nextcloud 设为源、Koofr 设为目标,选择单向同步,让 Koofr 只接收副本、Nextcloud 保持权威版本,并在实际传输前先运行一次模拟运行,确认文件列表看起来正确。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Nextcloud to Koofr in RcloneView" class="img-large img-center" />

在第 3 步中,排除任何你不想在异地重复保存的内容——Nextcloud 自身的 `.git` 风格版本文件夹,或已经在别处备份的大型同步媒体库,都是设置过滤规则的好对象,这样可以让 Koofr 上的副本专注于真正需要冗余的内容。

## 安排周期性备份

一次性同步只能保护你免受今天的故障,却无法应对下个月的故障。在 PLUS 许可下,向导的第 4 步可以添加 crontab 风格的计划任务,让 Nextcloud 到 Koofr 的同步在每晚或每周自动运行,而无需打开应用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Koofr backup job in RcloneView" class="img-large img-center" />

作业历史会持续记录每一次计划运行的完成状态、文件数量和耗时,让你可以确认备份确实执行过,而不是想象计划任务在后台默默运行。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将你的 Nextcloud 实例添加为 WebDAV 远端,将 Koofr 添加为 OAuth 远端。
3. 构建一个从 Nextcloud 到 Koofr 的单向同步任务,并过滤掉不需要重复保存的内容。
4. 安排任务自动运行,并定期检查作业历史,确认它正常完成。

一台自建服务器的安全程度取决于它的备份,而将备份指向第二个独立的提供商,恰恰弥补了自建方案本身留下的单点故障缺口。

---

**相关指南:**

- [将 Koofr 同步到 Proton Drive — 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [修复 Nextcloud 同步错误 — 使用 RcloneView 解决](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [将 Koofr 迁移到 Jottacloud — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-koofr-to-jottacloud-rcloneview)

<CloudSupportGrid />
