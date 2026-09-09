---
slug: manage-box-for-business-cloud-sync-backup-rcloneview
title: "管理 Box for Business — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "将 Box for Business 连接到 RcloneView,与 90 多个其他服务商一起浏览、同步、挂载和备份企业云文件。"
keywords:
  - Box for Business
  - Box 企业存储
  - RcloneView
  - 企业云同步
  - 云存储管理
  - 云备份软件
  - box_sub_type enterprise
  - 多云文件管理
  - 企业云存储
  - 文件夹比较工具
tags:
  - RcloneView
  - box
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Box for Business — 使用 RcloneView 同步和备份文件

> 将企业的 Box for Business 账户当作任何其他驱动器来对待 — 在一个桌面应用中完成浏览、同步、挂载和备份。

Box for Business 账户中常常存放着多年积累、分散在层层嵌套团队文件夹中的部门共享文件,IT 人员需要一种可靠的方式来查看、移动和保护这些内容,而不必一直待在浏览器标签页里。RcloneView 通过与个人 Box 账户相同的 OAuth 登录方式连接到 Box for Business,然后应用企业专属的配置标志,使应用能够看到组织的完整文件夹结构。连接后,该账户在 RcloneView 的文件浏览器、同步和挂载工具中的表现与其他远程一样,同步和文件夹比较功能在 FREE 授权下即可使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 Box for Business 远程

在 RcloneView 中创建一个新远程并选择 Box — 应用会打开浏览器进行标准 OAuth 登录,因此无需 API 密钥或手动输入令牌。使用企业 Box 账号登录以授权连接。

Box for Business 账户除了个人 Box 登录之外,还需要一个额外设置:在远程的高级配置中输入 `box_sub_type = enterprise`。这会告诉 rclone 查看组织的共享团队结构,而不是单个个人账户,这正是让全公司范围的文件夹出现在 RcloneView 文件浏览器面板中的原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中创建新的 Box for Business 远程" class="img-large img-center" />

如果你需要管理跨多个部门的多个 Box for Business 账户,Remote Manager 会将每个账户分开保存,方便你独立编辑各自的凭据或 enterprise 标志。

## 比较和同步企业文件夹

在将某个部门从旧文件服务器迁移出来或整理重复的团队文件夹之前,使用 Folder Compare 准确查看 Box for Business 文件夹与目标位置之间的差异。比较视图按仅左侧存在、仅右侧存在、相同、不同来筛选结果,让你只复制缺失的内容,而不必重新上传所有文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="将 Box for Business 文件夹与另一个云远程进行比较和同步" class="img-large img-center" />

为持续保护数据,单向同步任务会在不改动源文件的情况下保持关键 Box for Business 文件夹的副本为最新状态,而 dry run 会在实际移动任何文件之前准确显示将复制或删除哪些文件。

## 安排备份计划并监控任务

使用 Job Manager 可以配置将相同的 Box for Business 内容同时镜像到两个目标位置的同步、复制或 1:N 任务 — 例如同时镜像到本地 NAS 和一个 S3 兼容存储桶,这样一个同步任务就能同时满足本地和异地备份的需求。之后 Job History 会记录每次运行的开始时间、耗时、状态和文件数量,方便管理员确认夜间备份是否确实完成。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排定期的 Box for Business 备份任务" class="img-large img-center" />

PLUS 授权用户可以借助 crontab 风格的调度进一步实现自动化,让备份在夜间运行,无需任何人手动触发。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加一个新的 Box 远程,并使用企业账户完成 OAuth 登录。
3. 编辑远程的高级设置,设置 `box_sub_type = enterprise` 以解锁公司文件夹。
4. 配置同步任务或挂载,开始管理你的 Box for Business 内容。

当企业 Box 账户与所有其他远程并列出现在同一个界面中时,日常文件管理和灾难恢复备份就不再是两套独立的工作流程了。

---

**相关指南:**

- [管理 Box 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [如何从 Box 迁移到 SharePoint 或 OneDrive — 使用 RcloneView 进行企业云迁移](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [使用 RcloneView 将 Box 存储挂载为网络驱动器,实现无缝团队访问](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
