---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "管理 Box for Business 存储 — 用 RcloneView 同步和备份文件"
authors:
  - robin
description: "将 Box for Business 连接到 RcloneView，实现企业 Box 账户的跨平台文件浏览、云到云同步和定时备份。"
keywords:
  - box for business
  - box 企业存储
  - rcloneview box business
  - box business 同步
  - box_sub_type enterprise
  - 企业云存储 gui
  - box 团队账户备份
  - 企业云存储管理
  - box business 迁移
  - 多云文件管理
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Box for Business 存储 — 用 RcloneView 同步和备份文件

> 将 Box for Business 企业账户连接到 RcloneView，与你管理的所有其他云一起浏览、同步和备份共享的公司文件夹。

Box for Business 账户围绕企业管理的文件夹来组织内容，而不是单一的个人账户,因此标准的 Box 连接需要一项额外设置才能正常工作。RcloneView 直接处理这一点,让 IT 管理员可以在一个窗口中浏览、传输和保护企业 Box 内容,而无需在 Box 网页应用和另一个单独的同步客户端之间切换。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 Box for Business 远程

添加 Box for Business 账户的方式与添加个人 Box 连接相同:点击 New Remote,选择 Box,然后在浏览器中完成 OAuth 登录。区别在于一项额外设置——`box_sub_type = enterprise`——它会将远程指向企业账户结构,而不是单个用户的空间。应用该设置后,企业账户的文件夹会像其他任何远程一样加载到 Explorer 面板中。

与仅支持挂载的工具不同,RcloneView 在 FREE 许可下也能同步和比较文件夹,因此需要同时管理 Box 和其他部门云存储的管理员,不必为了在它们之间移动文件而使用另一个独立的应用程序。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## 浏览企业文件夹

连接后,File Explorer 面板会显示企业文件夹结构,使用与所有其他远程相同的 Name、Type、Modified date 和 Size 列,并配有可折叠的文件夹树,便于浏览深层的部门层级。面包屑路径栏的 Copy Full Path 选项会以 `remote:path` 格式输出路径,在把位置交给内置的 rclone Terminal 进行快速的 `rclone about` 存储检查时非常方便。

使用 Ctrl+Click 和 Shift+Click 多选,可以从庞大的企业空间中提取出特定的项目文件夹,而无需逐一浏览整个账户。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Box for Business enterprise folders in RcloneView Explorer" class="img-large img-center" />

## 将企业数据备份到第二个云

将企业文件只保留在单一供应商处是许多 IT 团队不愿承担的风险,因此将 Box for Business 内容镜像到 Amazon S3、Backblaze B2 或其他云作为副本,是常见的做法。RcloneView 的 4 步 Sync 向导可以完成这项工作:选择 Box for Business 远程作为源,选择目标远程,并将同步方向设为单向,这样备份目标会反映源内容,而不会影响上游的任何内容。Filtering 设置可以排除过大的媒体文件,或将作业限制为一定期限内的文件,从而让备份范围聚焦于真正重要的内容。

在第一次完整同步之前运行 Dry Run,可以显示将要复制和删除的文件的确切列表,这在迁移整个企业账户的数据之前非常值得一做。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Box for Business backup job in RcloneView" class="img-large img-center" />

## 自动化重复备份

PLUS 许可用户可以为 Box for Business 备份作业附加 crontab 格式的计划,使其每晚或每周自动运行,无需人工干预。此后,Job History 会记录每次运行的执行类型、耗时、状态和传输的总大小,让管理员无需查阅 Box 自身的管理控制台即可查看记录。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加一个新的 Box 远程,并在配置时设置 `box_sub_type = enterprise`。
3. 在 Explorer 面板中浏览企业文件夹,确认可以访问所需的部门。
4. 创建一个 Sync 作业,将企业数据镜像到第二个云,如果是 PLUS 许可用户,还可以设置计划。

正确配置的 Box for Business 远程,能让 RcloneView 成为原本只存在于一处的公司数据的实用保障。

---

**相关指南:**

- [用 RcloneView 管理 Box 存储 — 同步和备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [将 Box 迁移到 OneDrive — 用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [将 Box 存储挂载为网络驱动器 — 使用 RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
