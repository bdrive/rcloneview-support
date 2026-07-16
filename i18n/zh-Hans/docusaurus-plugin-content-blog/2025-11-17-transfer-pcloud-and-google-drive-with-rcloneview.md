---
slug: transfer-pcloud-and-google-drive-with-rcloneview
title: "使用 RcloneView 在 pCloud 和 Google Drive 之间传输文件"
authors:
  - tayson
description: "无需重新下载即可在 pCloud 和 Google Drive 之间移动数据？使用 RcloneView 进行拖放、对比（Compare）、同步（Sync），并通过 OAuth 和多线程上传设置定时任务（Jobs）。"
keywords:
  - pcloud to google drive
  - google drive to pcloud
  - rcloneview
  - cloud to cloud transfer
  - multi thread upload
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - oauth login
  - resumable transfers
tags:
  - cloud-migration
  - pcloud
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 pCloud 和 Google Drive 之间传输文件

> 跳过下载再上传的繁琐流程。RcloneView 让你可以在引导式 GUI 中拖放、对比、同步并定时执行 pCloud ↔ Google Drive 传输——无需 CLI。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么使用 RcloneView 进行多云传输？

- Google Drive 采用安全的 OAuth 登录，pCloud 只需简单的邮箱/密码，无需粘贴任何令牌。
- 多线程、可续传的上传，带有进度日志和重试机制。
- 双栏 Explorer 界面，可在不同云存储之间直接拖放。
- 使用 Compare 在复制或清理前预览差异。
- 支持包含/排除过滤器、试运行（dry-run）和基于大小的决策的 Sync 同步。
- 后台任务（Jobs）与定时调度，实现重复性迁移的自动化。

RcloneView 将 rclone 的可靠性与可视化工作流结合起来，让团队和管理员可以放心地移动大型文件夹。

## 开始之前

- 登录两个账户，并确认配额和 API 限制（Google Drive 对每个用户强制执行每天 750 GB 的上传上限）。
- 安装最新版本的 RcloneView：[下载](https://rcloneview.com/src/download.html)。
- 对于 pCloud，请准备好你的邮箱/密码；如果你的安全设置要求，请启用应用专用密码。
- 在大文件传输期间，尽量使用有线网络或稳定的 Wi-Fi，并让 RcloneView 保持运行以避免任务中断。

## 步骤 1：连接你的云端远程

1. 打开 **Remote → + New Remote**。
2. 选择 **pCloud** 并输入你的**邮箱**和**密码**，然后保存。
3. 对 **Google Drive** 重复相同操作，点击 **Connect** 完成 OAuth 浏览器登录。
4. 确认两个远程都出现在 Remote Manager 中。  

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  
  👉 了解更多：
  - [添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)
  - [添加新远程（OAuth）](/howto/remote-storage-connection-settings/add-oath-online-login)

## 步骤 2：在 Explorer 面板中打开两个远程

1. 前往 **Browse**。
2. 在左侧面板中，点击 **+** 并打开你的 **pCloud** 远程。
3. 在右侧面板中，点击 **+** 并打开你的 **Google Drive** 远程。
4. 导航到你计划移动的源文件夹和目标文件夹。

<!-- Image placeholder: add `/support/images/en/tutorials/open-pcloud-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="open pcloud and google drive remotes" class="img-medium img-center" />

## pCloud ↔ Google Drive 传输的四种方法

### 方法 1：在面板之间拖放

1. 在 pCloud 面板中选择文件或文件夹。
2. 将它们拖到 Google Drive 面板（或反方向操作）。
3. 在 **Transfer** 标签页中查看进度；如需要可以暂停或恢复。  

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />
    
  👉 更多详情：[浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 方法 2：先对比，再复制或删除

1. 在左侧打开源文件夹，在右侧打开目标文件夹。
2. 点击工具栏上的 **Compare**。
3. RcloneView 会高亮显示唯一项、大小差异和匹配项。
4. 选择要移动的内容，然后选择 **Copy →** 或 **← Copy**。
5. 谨慎使用 **Delete** 来清理重复项或过期数据。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

👉 了解更多：[对比文件夹内容](/howto/rcloneview-basic/compare-folder-contents)

### 方法 3：同步或另存为任务

1. 选择你的 pCloud 源和 Google Drive 目标。
2. 点击 **Sync** 并选择单向或双向同步。
3. 预览更改，调整过滤器（包含/排除），然后开始。
4. 点击 **Save to Jobs** 以便日后重复使用相同的配置。  

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add sync job in job manager" class="img-large img-center" />   
     

👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)


### 方法 4：定时执行重复性同步任务

1. 打开 **Job Manager → Add Job**。
2. 将 **pCloud** 设为源，**Google Drive** 设为目标（或反过来）。
3. 选择一个调度周期（每小时、每天、每周或自定义类 cron 表达式）。
4. 启用该任务，让 RcloneView 自动运行。
5. 检查日志和历史记录以验证任务是否成功运行。

👉 了解更多：[任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="configure job schedule" class="img-large img-center" />

## 顺畅传输的小贴士

- 在大型同步之前运行 **dry-run**（试运行）以确认计划。
- 在工作时间使用**带宽限制**以降低被限速的风险。
- 对于加密的 pCloud 文件夹，请确保你拥有访问密钥，或在移动前先在本地解密。
- 当接近 Google Drive 的每日上限时，将任务分散到多天或多个账户中执行。
- 保持 **Transfer** 标签页打开，以监控重试情况、速度和任何 API 响应。

## 总结

RcloneView 为 **pCloud** 和 **Google Drive** 之间提供快速、可靠、无需 CLI 的传输。凭借并排浏览、Compare、Sync、可重复使用的 Jobs 以及定时调度功能，你可以轻松处理迁移或重复性备份，而无需手动下载和重新上传。

<CloudSupportGrid />
