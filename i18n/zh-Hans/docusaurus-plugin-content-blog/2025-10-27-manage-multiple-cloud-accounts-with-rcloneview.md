---
slug: manage-multiple-cloud-accounts-rcloneview
title: "使用 RcloneView 在一个视图中管理多个云账户(Google、OneDrive、Dropbox、S3)"
authors:
  - tayson
description: 无需接触命令行,轻松管理 Google Drive、OneDrive、Dropbox 和 S3。RcloneView 统一多个云账户,让你在单一直观的界面中浏览、传输和同步数据。
keywords:
  - rcloneview
  - multiple cloud accounts
  - google drive
  - onedrive
  - dropbox
  - s3
  - cloud sync
  - rclone gui
  - migrate files
tags:
  - google-drive
  - onedrive
  - dropbox
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在一个视图中管理多个云账户(Google、OneDrive、Dropbox、S3)

> 一个干净的仪表盘管理你所有的云——浏览、比较、传输和自动化,全程无需命令行。

云存储分散是真实存在的问题。个人 Gmail 加一个工作用的 Google 账户,一个绑定 Microsoft 365 的 OneDrive,一个仍与供应商共享的老 Dropbox,还有一个用于归档的 S3 存储桶。在不同门户之间反复登录退出既浪费时间,也很容易搞不清数据都放在哪里。RcloneView 借助 rclone 驱动,把所有账户汇聚到一个统一的可视化浏览器中来解决这个问题——你可以借助预览、模拟运行(dry-run)和定时任务,自信地在各个提供商之间迁移数据。

<!-- truncate -->

使用 RcloneView,你不需要学习 `rclone config` 或记住各种参数。应用会引导你一次性连接每个账户,然后在复制、比较和同步的工作流中重复使用这些连接。它非常适合:

- 只想在账户之间拖动文件的普通用户
- 需要整合分散在各个云上的项目数据的工程师
- 希望统一多账户备份和迁移流程的 IT 管理员

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

### 理解挑战

- 界面分散:每个提供商都有自己的网页控制台,并且对批量操作有各自的限制。
- API 和配额各不相同:Google、Microsoft、Dropbox 和 S3 在大批量迁移时表现各异。
- 审计与可重复性:你需要预览、日志和定时运行,而不是在浏览器里一次性手动拖拽。

### 统一界面带来的改变

- 单一浏览器:并排打开多个账户——无需反复重新登录
- 先比较后操作:在复制前查看差异,避免重复和意外
- 任务与历史记录:保存同步任务、安排非高峰时段运行,并保留审计记录

| 方式                          | 操作位置       | 预览差异 | 定时与重复 | 多提供商支持       |
| ----------------------------- | -------------- | -------- | ---------- | ------------------ |
| 原生云网页界面                 | 分散的浏览器标签页 | 有限     | 手动       | 仅限单一提供商       |
| RcloneView 多账户 GUI          | 单一桌面应用   | 支持(比较) | 支持(任务) | 任意 rclone 后端    |



## 准备工作

1. 梳理账户和目标:列出你使用的账户(例如个人 Google Drive、工作用 OneDrive、Dropbox、S3/Wasabi/R2),并明确你想做什么:整合、备份还是重新组织。
2. 确认访问权限:视情况你需要登录权限或 API 密钥。
3. 从小处着手:先用一个小文件夹测试,在扩大规模前验证预览和结果是否正确。

有用的链接

- [Google OAuth 快速设置](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Microsoft/SharePoint 登录](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
- [S3/Wasabi/R2 设置](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2 凭据](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Dropbox OAuth 设置](/howto/remote-storage-connection-settings/add-oath-online-login)

## 在 RcloneView 中连接你的账户

RcloneView 将 rclone 的配置封装成一个友好的向导。每个云只需添加一次,之后就会出现在左侧的资源管理器中供你复用。

1. 打开 RcloneView → 点击 `+ New Remote`。

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2. 选择一个提供商并按提示操作:
   - Google Drive:通过 OAuth 登录,并清晰命名(例如 `Drive-Personal`、`Drive-Work`)。参见:[OAuth 登录指南](/howto/remote-storage-connection-settings/add-oath-online-login)
   - OneDrive/SharePoint:使用你的 Microsoft 账户登录。参见:[Microsoft/SharePoint 设置](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
   - Dropbox:使用 RcloneView 的 Dropbox OAuth 向导进行连接。参见:[OAuth 登录指南](/howto/remote-storage-connection-settings/add-oath-online-login)
   - S3/Wasabi/R2:设置端点/区域和密钥。→ [S3 连接设置](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2 凭据](/howto/cloud-storage-setting/cloudflare-r2-credential)
3. 对每个账户重复以上步骤。你可以同时打开多个远程并排浏览。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 无惊喜地移动与同步

RcloneView 在你连接的任意账户之间支持相同的三种模式。先从一个小的试点文件夹开始,再逐步扩大。

### 拖放操作

在左侧打开源,在右侧打开目标;将文件或文件夹拖过去即可。

参见:[使用拖放复制文件](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### 复制前先比较

运行“比较”功能,列出两个文件夹之间(即使跨不同提供商)新增、更改或缺失的内容。取消勾选你想跳过的项目,然后再复制。

参见:[比较结果与文件管理](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Preview and select differences before copying" class="img-large img-center" />

### 同步与定时

使用“同步”功能在账户之间镜像选定的文件夹。始终先运行一次模拟运行(dry-run),然后保存任务并安排非高峰时段运行。在任务管理器中监控进度和历史记录。

参见:[同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)、[创建同步任务](/howto/rcloneview-basic/create-sync-jobs)、[任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure and run a sync job in RcloneView" class="img-large img-center" />

## 实际应用场景

- 个人 + 工作 Google Drive:在工作账户中保留选定个人文件夹的只读镜像(反之亦然),配合定时同步和清晰的日志。
- OneDrive ↔ Google Drive 团队交接:使用“比较”功能准备切换,然后每晚同步,直到目标账户成为可信数据源。
- Dropbox 清理与归档:将不常用的共享内容拖到 S3/Wasabi 存储桶中以降低存储成本,同时为协作者保留一份在线副本。
- 多云备份:在兼容 S3 的存储桶中维护加密归档,同时在 Drive/OneDrive 中进行日常协作。如需客户端加密,可搭配 rclone 的 `crypt` 使用。参见:/blog/encrypt-cloud-backups-google-drive-onedrive-s3-with-rcloneview

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-account jobs in RcloneView" class="img-large img-center" />

## 顺畅操作的小贴士

- 清晰命名远程:`Drive-Personal`、`Drive-Work`、`OneDrive-DeptA`、`Dropbox-Shared`、`S3-Archive`。
- 先做试点:在批量任务前先比较并复制一小部分样本。
- 注意配额限制:Google Drive 的上传/复制限制和 API 限流会影响大批量操作;尽量安排在夜间运行。
- 保留审计记录:从任务历史中导出日志以便追踪变更。

## 总结

RcloneView 把混乱的登录和浏览器标签页变成一个可靠的统一工作空间。一次性连接所有账户,预览每一处变更,并将可重复的部分自动化——无需编写一行命令。无论你是在整合个人数据、协调团队交接,还是执行 IT 迁移任务,统一的多账户 GUI 都能让云端工作更快捷、更安全。

想了解某个特定提供商的设置方法?接下来可以看看:

- 远程管理器概览:[远程管理器](/howto/rcloneview-basic/remote-manager)
- 实时传输监控:[实时传输监控](/howto/rcloneview-basic/real-time-transfer-monitoring)
- 将云盘挂载为本地驱动器:[将云存储挂载为本地驱动器](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
