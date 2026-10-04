---
slug: sync-dropbox-to-box-rcloneview
title: "将 Dropbox 同步到 Box — 使用 RcloneView 进行云备份"
authors:
  - casey
description: "使用 RcloneView 将 Dropbox 同步到 Box:连接两个 OAuth 远程、通过试运行预览、安排作业,并使用 Folder Compare 验证结果。"
keywords:
  - 将 Dropbox 同步到 Box
  - Dropbox 到 Box 备份
  - Dropbox Box 同步
  - 云到云同步
  - RcloneView
  - Dropbox 备份
  - Box 云存储
  - 多云备份
  - rclone GUI
tags:
  - RcloneView
  - dropbox
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 同步到 Box — 使用 RcloneView 进行云备份

> 在 Box 中保留 Dropbox 文件的第二份副本,并在一个桌面窗口中管理。

团队常在 Dropbox 中工作,而客户或合作伙伴却坚持使用 Box。手动让两者保持一致意味着不断下载和重新上传。RcloneView 将两个账户连接为远程,并在它们之间直接同步文件夹,同时提供预览和历史记录,让您始终清楚发生了什么变化。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Dropbox 和 Box 添加为远程

两个提供商都使用 OAuth 浏览器登录,因此无需 API 密钥。点击 New Remote,选择 Dropbox,在浏览器中批准访问;对 Box 重复同样的操作。对于企业账户,请使用 Dropbox for Business 设置(`dropbox_business = true`)或 Box for Business 设置(`box_sub_type = enterprise`),因此在相关时选择这些变体。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中创建 Dropbox 和 Box 远程" class="img-large img-center" />

## 配置单向同步作业

打开同步向导,选择 Dropbox 文件夹作为源、Box 文件夹作为目标,并使用字母、数字、连字符或下划线为作业命名。单向模式只修改目标,适合备份角色。由于同步会使目标与源保持一致,请务必先运行试运行,查看哪些文件将被复制或删除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox 到 Box 的同步作业配置" class="img-large img-center" />

设想一家拥有 150 GB 客户交付物的设计机构。按文件大小或时间的过滤器可将体积较大的工作文件排除在 Box 副本之外,预定义过滤器还可以跳过视频等类别。

## 计划与监控

使用 PLUS 许可证时,向导的第 4 步支持 crontab 风格的计划,模拟选项可预览下次运行时间。每晚运行可让 Box 保持最新,无需任何手动操作。Transferring 选项卡显示实时速度和进度,Job History 记录每次执行的状态、时长、大小和文件。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="为 Dropbox 到 Box 的同步作业安排计划" class="img-large img-center" />

## 使用 Folder Compare 验证

运行后,在这两个文件夹上打开 Folder Compare。仅左侧和不同的文件会被列出,您可以在比较视图中复制缺失的项目。Job History 有助于发现出错的运行。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dropbox 到 Box 同步的作业历史" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView:** [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 通过 OAuth 登录添加 Dropbox 和 Box 远程。
3. 创建单向同步作业并运行试运行。
4. 运行它,如果有 PLUS 许可证,再安排计划。

在不同提供商处保留第二份副本,可将单点故障变成安全网。

---

**相关指南:**

- [零停机 Box 到 Dropbox](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [将 Box 同步到 Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [管理 Dropbox 存储](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
