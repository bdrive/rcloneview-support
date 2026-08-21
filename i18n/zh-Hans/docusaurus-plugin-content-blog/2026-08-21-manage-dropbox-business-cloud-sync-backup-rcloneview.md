---
slug: manage-dropbox-business-cloud-sync-backup-rcloneview
title: "管理 Dropbox for Business 存储 — 使用 RcloneView 同步与备份文件"
authors:
  - casey
description: "将 Dropbox for Business 连接到 RcloneView，实现团队账户的跨平台文件浏览、云到云同步和定时备份。"
keywords:
  - dropbox for business
  - dropbox business 同步
  - rcloneview dropbox business
  - dropbox business 备份
  - dropbox_business rclone
  - 企业级 dropbox 存储
  - 商业云存储 gui
  - dropbox 团队账户同步
  - 多云文件管理
  - dropbox business 迁移
tags:
  - RcloneView
  - dropbox
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Dropbox for Business 存储 — 使用 RcloneView 同步与备份文件

> 将 Dropbox for Business 团队账户连接到 RcloneView，与你管理的所有其他云存储一起浏览、同步并备份团队共享文件夹。

Dropbox for Business 账户组织文件的方式与个人版 Dropbox 不同：团队文件夹、由管理员管理的空间以及共享工作区都位于企业登录之后。RcloneView 可直接连接这些团队账户，让 IT 管理员和团队负责人在同一个窗口中浏览、传输和备份企业内容，无需在 Dropbox 网页应用和单独的桌面客户端之间来回切换。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 Dropbox for Business 远程连接

在 RcloneView 中添加 Dropbox for Business 账户的方式与添加个人版 Dropbox 连接相同：点击 New Remote，选择 Dropbox，然后在浏览器中完成 OAuth 登录。区别只在于一个额外的设置——在远程连接上启用 `dropbox_business = true`，告诉连接以团队账户而非个人账户进行身份验证。配置完成后，企业账户的团队文件夹会像其他远程连接一样出现在 Explorer 面板中。

由于 RcloneView 能在 Windows、macOS 和 Linux 上从同一个窗口挂载并同步 90 多个服务商，同时管理 Dropbox for Business 租户和其他部门云存储的管理员可以在同一个会话中处理一切，而不必为每个服务商切换不同的应用程序。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Dropbox for Business remote in RcloneView" class="img-large img-center" />

## 浏览团队文件夹与共享空间

连接后，File Explorer 面板会显示 Dropbox for Business 的文件夹结构，使用与其他远程连接相同的名称、类型、修改日期和大小列。跨多个部门的团队文件夹可以通过可折叠的文件夹树轻松浏览，面包屑路径栏的 Copy Full Path 选项会输出脚本编写或传递给内置 rclone Terminal 所需的 `remote:path` 格式。

使用 Ctrl+Click 或 Shift+Click 进行多选，可以轻松从庞大的团队空间中提取特定项目文件夹，而无需处理整个账户。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Dropbox for Business team folders in RcloneView Explorer" class="img-large img-center" />

## 将企业数据备份到第二个云端

仅依赖单一服务商存放业务关键文件存在风险，因此许多团队会将 Dropbox for Business 的内容镜像到 Amazon S3、Backblaze B2 或其他云端，作为第二份副本。RcloneView 的 4 步 Sync 向导可以直接处理这一需求：选择 Dropbox for Business 远程连接作为源，选择目标远程连接，然后选择单向同步，使备份目标始终反映源内容，而不会覆盖上游数据。过滤设置可以让你排除大型媒体文件，或将备份限制在一定期限内的文件夹，从而让任务专注于真正需要保护的内容。

在首次同步前运行 Dry Run，可以准确显示将复制哪些文件，这对于在迁移整个团队账户数据之前先核实范围非常有用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Dropbox for Business backup job in RcloneView" class="img-large img-center" />

## 自动化定期备份

PLUS 许可用户可以为 Dropbox for Business 备份任务设置 crontab 格式的计划，使其在夜间或每周自动运行，无需人工干预。此后，Job History 会记录每次计划执行的类型、耗时、状态和传输的总大小，为管理员提供无需翻查 Dropbox 自身活动日志即可查阅的审计记录。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加一个新的 Dropbox 远程连接，并在配置过程中启用 `dropbox_business` 设置。
3. 在 Explorer 面板中浏览团队文件夹，确认可以访问所需的共享空间。
4. 创建 Sync 任务将企业数据镜像到第二个云端，如果使用 PLUS 许可，还可以设置计划任务。

正确配置的 Dropbox for Business 远程连接，能让 RcloneView 成为团队数据的实用安全网——这类数据往往只存放在一个地方。

---

**相关指南：**

- [使用 RcloneView 管理 Dropbox 存储 — 同步与备份文件](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [将 Dropbox Business 迁移到 Google Workspace — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [将 Dropbox 备份到 AWS S3 — 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
