---
slug: transfer-onedrive-and-google-drive-with-rcloneview
title: "使用 RcloneView 在 OneDrive 和 Google Drive 之间传输文件"
authors:
  - tayson
description: "无需下载即可在 Microsoft OneDrive 和 Google Drive 之间移动文件——使用 RcloneView 的拖放操作、对比（Compare）、同步（Sync）以及计划任务（Jobs），实现可靠的云到云传输。"
keywords:
  - onedrive to google drive transfer
  - google drive to onedrive migration
  - rcloneview
  - cloud to cloud sync
  - drag and drop transfer
  - scheduled sync jobs
  - compare folders
  - resumable uploads
  - oauth login
tags:
  - RcloneView
  - cloud-migration
  - onedrive
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 OneDrive 和 Google Drive 之间传输文件

> 无需重新下载数十 GB 的数据即可切换云存储。RcloneView 提供双栏 Explorer、对比（Compare）、同步（Sync）以及计划任务（Jobs），让 OneDrive ↔ Google Drive 之间的迁移始终快速且可预测——无需使用命令行。


<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## 为什么在 OneDrive ↔ Google Drive 之间使用 RcloneView？

- 两个云存储均支持安全的 OAuth 登录，无需粘贴令牌。
- 支持断点续传，并提供进度日志、重试和带宽限制。
- 双栏 Explorer，无需脚本即可拖放移动文件。
- 使用对比（Compare）功能，在复制前高亮显示新增/更改的文件。
- 支持单向或双向同步（Sync），并可保存为可重复使用的计划任务（Jobs）。
- 可选的试运行（dry-run）与过滤器，精确控制移动的内容。

RcloneView 在 rclone 之上提供了引导式用户界面，因此即使是大规模迁移也能保持可靠，同时工程师在需要时仍可使用高级选项。

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="transfer files between onedrive and google drive" class="img-large img-center" />


## 开始之前

- 登录 OneDrive 和 Google Drive 账户。
- 从最新版本安装 RcloneView：[下载](https://rcloneview.com/src/download.html)。
- 检查云存储配额和每日 API 限制（Google Drive 对每个用户强制实施每天 750 GB 的上传上限）。
- 为获得最佳吞吐量，在长时间任务运行期间保持 RcloneView 处于运行状态，并优先使用有线网络。

## 步骤 1：连接两个云远程

1. 打开 **Remote → + New Remote**。
2. 在 **Provider** 下选择 **OneDrive**，然后点击 **Connect** 完成 Microsoft OAuth 登录。
3. 对 **Google Drive** 重复上述操作并完成 OAuth 流程。
4. 确认两个远程均已出现在 Remote Manager 中。

👉 了解更多：[添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Remote Manager showing connected cloud remotes" class="img-large img-center" />

## 步骤 2：在 Explorer 面板中打开两个远程

1. 进入 **Browse** 标签页。
2. 在左侧面板中，点击 **+** 并打开你的 **OneDrive** 远程。
3. 在右侧面板中，点击 **+** 并打开你的 **Google Drive** 远程。
4. 浏览到你计划同步的源文件夹和目标文件夹。


## 四种移动文件的方法

### 方法 1：在 Explorer 面板之间拖放

1. 在 OneDrive 面板中选择文件或文件夹。
2. 将其拖入 Google Drive 面板（或反方向操作）。
3. 在 **Transfer** 标签页中查看进度；如有需要可暂停/继续。

👉 更多详情：[浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### 方法 2：先对比，再复制或删除

1. 在左侧打开源文件夹，右侧打开目标文件夹。
2. 点击工具栏上的 **Compare**。
3. RcloneView 会高亮显示唯一文件、大小不一致的文件以及相同的文件。
4. 选择要移动的项目，然后选择 **Copy →** 或 **← Copy**。
5. 谨慎使用 **Delete** 清理旧数据。

👉 了解更多：[对比文件夹内容](/howto/rcloneview-basic/compare-folder-contents)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Google Drive folders" class="img-large img-center" />

### 方法 3：同步或保存为计划任务

1. 选择你的 OneDrive 源和 Google Drive 目标。
2. 点击 **Sync**，选择单向（OneDrive → Google Drive）或双向。
3. 查看预览、调整过滤器（包含/排除），然后开始。
4. 点击 **Save to Jobs** 以便日后复用同一同步配置。

👉 了解更多：

- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure sync job between OneDrive and Google Drive" class="img-large img-center" />

### 方法 4：安排自动同步任务

1. 打开 **Job Manager → Add Job**。
2. 将 **OneDrive** 设为源，**Google Drive** 设为目标（或反过来）。
3. 选择计划（每小时、每天、每周或 cron 方式）。
4. 保存并启用该任务；RcloneView 将自动运行它。
5. 查看日志和历史记录以进行验证。

👉 了解更多：[任务的计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to Google Drive sync job" class="img-large img-center" />

## 顺畅进行多云传输的技巧

- 在大规模同步前使用 **试运行（dry-run）** 确认将发生的更改。
- 对于共享的 OneDrive/Drive 文件夹，请确保你在双方都拥有编辑权限。
- 在工作时段使用 **带宽限制**，避免被限速。
- 如果 Google Drive 达到每天 750 GB 的上限，可将任务拆分到多天或多个账户执行。
- 保持 **Transfer** 标签页打开，以跟踪重试情况和吞吐量。

## 总结

RcloneView 消除了在 **OneDrive** 与 **Google Drive** 之间下载再重新上传的繁琐流程。借助并排浏览、对比（Compare）、同步（Sync）、可复用的计划任务（Jobs）以及调度功能，你可以自信地执行一次性移动或定期备份——无需使用命令行。

<CloudSupportGrid />
