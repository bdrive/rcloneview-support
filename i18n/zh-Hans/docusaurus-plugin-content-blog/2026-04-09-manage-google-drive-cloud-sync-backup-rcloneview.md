---
slug: manage-google-drive-cloud-sync-backup-rcloneview
title: "使用 RcloneView 管理 Google Drive 文件和云同步"
authors:
  - tayson
description: "使用 RcloneView 管理 Google Drive 文件。通过可视化 GUI 在 Google Drive、共享云端硬盘和其他云服务商之间同步、备份和传输数据。"
keywords:
  - rcloneview
  - google drive sync rcloneview
  - google drive backup
  - google drive file manager
  - google drive cloud sync tool
  - google drive to s3
  - google drive rclone gui
  - google shared drives backup
  - google drive multi-cloud
  - google drive automated backup
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Google Drive 文件和云同步

> Google Drive 是 Google Workspace 的核心组件，但管理备份和跨云传输需要的不仅仅是原生客户端——**RcloneView** 通过可视化界面提供了这种控制能力。

Google Drive 为超过 20 亿用户提供服务，Gmail、Drive 和 Photos 共享 15 GB 免费存储空间。Workspace 套餐在企业级方案中可扩展到无限存储。原生 Google Drive 桌面客户端可将文件同步到本地计算机，但无法将数据复制到 AWS S3、OneDrive 或 NAS。RcloneView 通过 Drive API v3 连接到 Google Drive，并提供完整的文件管理界面——在 Google Drive 和任何其他存储服务商之间浏览、同步、复制、移动和调度备份。

无论你是保护课程作业的学生、管理数千个 RAW 文件的摄影师，还是需要将共享云端硬盘同步到独立备份目标的 Workspace 管理员，RcloneView 都能提供原生客户端无法实现的能力。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Google Drive

添加 Google Drive 使用标准的 OAuth 2.0 流程。打开远程管理器，选择 **Google Drive**，然后点击授权。此时会打开一个浏览器窗口，你需要登录 Google 账户并授予访问权限。令牌会安全地存储在本地的 rclone 配置中。

在设置过程中，你可以选择访问范围——完整云端硬盘访问权限、只读权限，或仅限于 RcloneView 创建的文件的文件级访问权限。对于大多数备份和同步工作流，完整访问权限是正确的选择。你还可以在此步骤中配置对共享云端硬盘（原 Team Drives）的访问，可以通过 ID 选择特定的共享云端硬盘，也可以让 RcloneView 列出所有可用的云端硬盘。

Google Drive 实施 API 配额限制——默认情况下每个项目每 100 秒 10,000 次查询。RcloneView 会通过指数退避算法自动处理 403 userRateLimitExceeded 响应。对于大规模操作，你可以注册自己的 Google Cloud 项目并提供自己的客户端 ID 以提高配额限制。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Google Drive remote in RcloneView Remote Manager" class="img-large img-center" />

## 我的云端硬盘 vs. 共享云端硬盘

Google Drive 区分我的云端硬盘（关联用户账户的个人存储）和共享云端硬盘（组织所有的存储空间，文件归团队而非个人所有）。这种区别对同步和备份非常重要，因为共享云端硬盘具有不同的所有权语义、更严格的文件命名规则和独立的存储配额。

RcloneView 可以透明地处理这两者。你可以在双栏浏览器中并排打开我的云端硬盘和共享云端硬盘，比较文件夹内容，并在两者之间同步。当从我的云端硬盘同步到共享云端硬盘时，RcloneView 会自动适配共享云端硬盘的限制——包含不支持字符的文件会被重命名，快捷方式文件会根据你的偏好设置进行解析或跳过。

## 将 Google Drive 与其他云服务商同步

RcloneView 的双栏浏览器可将 Google Drive 与任何其他远程存储并列显示。将整个云端硬盘同步到 Backblaze B2 以实现经济实惠的备份，将特定项目文件夹复制到 AWS S3 进行存档，或将旧文件移动到 Wasabi 进行经济高效的冷存储。

Google Drive 使用 MD5 校验和进行文件完整性验证。RcloneView 原生支持同步过程中的 MD5 比较，因此只有实际发生变化的文件才会被传输。这既节省时间又节省 API 配额。对于以云原生格式存储、没有固定文件大小的 Google Docs、Sheets 和 Slides，RcloneView 会在下载和同步过程中将其导出为标准格式（docx、xlsx、pptx）。

对于大型传输，你可以配置多线程下载并调整分块大小。Google Drive 支持超过 5 MB 的文件的可恢复上传，RcloneView 利用这一特性可以在中断后恢复传输，而无需重新开始整个文件的传输。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to another cloud provider in RcloneView" class="img-large img-center" />

## 调度自动化 Google Drive 备份

在 Google Drive 上仅保存一份数据副本并不算是备份。意外删除、账户暂停和勒索软件都可能导致数据丢失。将数据独立备份到其他服务商可以增加一层关键的安全保障。

RcloneView 的调度器可以自动化这一过程。配置一个从 Google Drive 到 AWS S3 或 Backblaze B2 的每夜同步任务，RcloneView 会处理差异检测、传输和日志记录。任务历史面板会记录每次运行的统计数据——已传输文件数、已跳过文件数、传输总字节数以及耗时。

对于 Workspace 管理员而言，共享云端硬盘的定期备份可确保团队数据独立于 Google 基础设施进行复制。将定期备份与加密（使用 crypt 远程）结合，可以提供额外的保护层。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive backup in RcloneView" class="img-large img-center" />

## 比较文件夹并验证数据

在进行大规模同步之前，RcloneView 的比较功能会准确显示将要发生的更改。选择两个文件夹——一个在 Google Drive 上，一个在其他远程存储上——RcloneView 会高亮显示仅存在于一侧的文件、大小或哈希值不同的文件，以及完全相同的文件。

这在迁移后尤其有价值。在 Google Drive 源和备份目标之间运行比较，以确认每个文件都完整到达。可视化差异比较让你可以轻松发现差距并在停用原始数据源之前加以解决。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive files with another cloud in RcloneView" class="img-large img-center" />

## 将 Google Drive 挂载为本地驱动器

RcloneView 可以将 Google Drive 挂载为 Windows 上的本地驱动器盘符，或 macOS 和 Linux 上的挂载点。这样你就可以直接从任何应用程序——文件管理器、视频编辑器或命令行工具——访问 Drive 文件，而无需先下载它们。

启用 VFS 缓存以获得最佳性能。这会将最近访问的文件存储在本地，因此后续读取会立即完成。缓存大小和过期时间均可配置。挂载对于需要浏览或预览 Drive 文件而无需完整同步的媒体工作流特别有用。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting Google Drive as a local drive in RcloneView" class="img-large img-center" />

## 实时监控传输

在大型传输过程中，RcloneView 提供实时监控仪表板，显示传输速度、每个文件的进度以及整体完成百分比。你可以暂停、恢复或取消单个传输，而不影响队列中的其他任务。带宽限制可防止 Google Drive 传输占满你的网络——你可以在工作时间设置限制，并在夜间允许全速传输。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Google Drive in RcloneView" class="img-large img-center" />

## 浏览和管理文件

RcloneView 的浏览器提供了 Google Drive 网页界面所不具备的功能——跨数万个文件的批量操作、任意两个云服务商之间的拖放操作，以及并排文件夹比较。你可以通过浏览器直接在 Google Drive 上重命名、移动、删除和创建文件夹。共享云端硬盘、快捷方式和嵌套文件夹结构都可以在浏览器面板中导航。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from Google Drive in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程管理器中通过 OAuth 授权你的 Google 账户，并选择你的云端硬盘类型（我的云端硬盘或共享云端硬盘）。
3. 在双栏浏览器中浏览你的 Google Drive，并设置同步或复制任务到其他服务商。
4. 调度每日备份，以便在 S3、B2 或其他云上保留冗余副本。

Google Drive 负责协作和文档编辑，而 RcloneView 则确保你的数据在所使用的每个云平台上都得到备份、可移植且可访问。

---

**相关指南：**

- [添加 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
