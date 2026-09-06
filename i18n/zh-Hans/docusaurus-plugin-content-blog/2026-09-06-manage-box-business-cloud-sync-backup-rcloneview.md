---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "管理 Box for Business — 使用 RcloneView 实现企业级云同步与备份"
authors:
  - casey
description: "在 RcloneView 中配置 Box for Business,为你的管理员配置的 Box 账户实现企业级同步、备份与挂载工作流。"
keywords:
  - Box for Business
  - 管理 Box for Business
  - Box 企业云同步
  - Box 商业备份
  - RcloneView Box
  - box_sub_type enterprise
  - 企业云存储同步
  - Box 账户备份工具
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

# 管理 Box for Business — 使用 RcloneView 实现企业级云同步与备份

> Box for Business 账户需要额外设置一项内容,RcloneView 才能查看管理员配置的全部内容 — 以下介绍如何正确配置。

标准 Box 远程对个人账户来说运行良好,但 Box for Business(企业版)账户在底层的文件夹和权限结构上有所不同。如果你按照连接个人 Box 账户的方式连接它,某些企业管理的内容可能不会出现在浏览器中。RcloneView 通过在远程上设置专用的 `box_sub_type = enterprise` 来解决这一问题,从而让团队的共享文件夹、共同拥有的内容以及管理员配置的存储都能正确显示。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 Box for Business 远程

首先创建一个新的远程,并选择 Box 作为提供商 — 基于浏览器的 OAuth 登录方式与个人账户相同,因此无需学习单独的凭据流程。区别出现在身份验证之后:打开远程的高级设置并设置 `box_sub_type = enterprise`。这会告诉 rclone(RcloneView 运行所依赖的引擎)解析企业范围的文件夹结构,而不是个人账户的默认结构。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中创建新的 Box for Business 远程" class="img-large img-center" />

配置完成后,浏览该远程的方式与其他远程相同 — 文件夹树导航、缩略图预览以及文件操作(复制、剪切、重命名、删除)在个人账户或商业级账户下都完全一致。

## 同步与备份企业版 Box 内容

IT 团队常见的场景是将 Box for Business 账户备份到次要位置 — 本地 NAS、另一个云,或用于冷归档的 S3 兼容对象存储。创建一个以 Box for Business 为来源的同步任务,将方向设置为单向的"仅修改目标",以实现安全、非破坏性的备份,并先运行一次 dry run,准确预览将要复制的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中配置 Box for Business 备份同步任务" class="img-large img-center" />

对于需要在数十个 Box 文件夹之间处理共享驱动器的部门,通过按最大文件存在时间或预定义的文档过滤器进行筛选,可以让夜间任务只关注发生变化的内容,而不是每次都重新扫描整个账户。RcloneView 在 FREE 许可证下也支持同步和文件夹比较,因此企业备份工作流无需升级即可开始使用。

## 安排定期的企业备份

对于每天有多名贡献者添加文件的企业账户,手动导出难以扩展。借助 Job Manager,你可以将 Box for Business 同步保存为一个已命名的任务,再关联一个 crontab 风格的计划(PLUS 许可证功能),使其在每晚或按合规政策要求的任何频率自动运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="安排定期的 Box for Business 同步任务" class="img-large img-center" />

每次运行都会记录在 Job History 中,包含开始时间、持续时间、传输速度和文件数量 — 在审计询问备份如何得到验证时,这些是有用的凭证。

## 开始使用

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建一个新的 Box 远程,并使用你的 Box for Business 凭据完成浏览器 OAuth 登录。
3. 打开该远程的高级设置,设置 `box_sub_type = enterprise` 以启用企业范围的文件夹。
4. 将 Box for Business 与任何其他受支持的远程或本地存储配对,创建同步或备份任务。

一开始就正确完成这一项设置,可以在日后省去数小时"文件去哪儿了"的排查工作。

---

**相关指南:**

- [管理 Box 存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Dropbox for Business — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [将 Box 迁移到 OneDrive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
