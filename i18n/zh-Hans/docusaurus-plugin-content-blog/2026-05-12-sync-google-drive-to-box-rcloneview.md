---
slug: sync-google-drive-to-box-rcloneview
title: "将 Google Drive 同步到 Box —— 使用 RcloneView 进行云备份"
authors:
  - kai
description: "了解如何使用 RcloneView 将 Google Drive 同步到 Box。在两个平台之间传输文件，自动化跨云备份，并保持团队数据同步。"
keywords:
  - sync Google Drive to Box
  - Google Drive Box RcloneView
  - cloud-to-cloud sync RcloneView
  - Google Drive Box backup
  - migrate Google Drive Box
  - RcloneView cross-cloud transfer
  - automate Google Drive backup Box
  - Google Workspace Box sync
  - Box cloud backup RcloneView
  - Google Drive Box file transfer
tags:
  - RcloneView
  - google-drive
  - box
  - cloud-to-cloud
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 同步到 Box —— 使用 RcloneView 进行云备份

> 当团队的内容分散存储在 Google Workspace 和 Box 中时，RcloneView 无需编写脚本即可弥合这一鸿沟。

许多组织在 Google Drive 中维护活跃文件，同时将 Box 用作合规归档、客户门户或部门共享空间。手动保持这两个平台同步既容易出错又耗时。RcloneView 提供了点击式工作流，可以从 Google Drive 拉取内容并推送到 Box —— 无论你需要一次性迁移、每晚增量备份，还是为审计目的持续刷新的副本。由于这两项服务都受 rclone 原生支持，传输高效且经过校验和验证。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Google Drive 和 Box 连接到 RcloneView

Google Drive 和 Box 在 RcloneView 中都使用 OAuth 浏览器身份验证，这意味着每个账户的设置时间不到两分钟。打开“远程”标签页，点击“新建远程”，选择 Google Drive。浏览器窗口会打开，供你登录 Google 账户并授予权限 —— 无需手动创建 API 密钥。对 Box 重复相同步骤：新建远程，选择 Box，完成浏览器 OAuth 流程。

如果你使用 Google 共享云端硬盘（团队云端硬盘），请在设置期间启用 `shared_with_me` 选项，或将共享云端硬盘 ID 指定为根文件夹，以确保 Explorer 面板中可以看到所有团队内容。对于 Box for Business 账户，在创建远程时设置 `box_sub_type = enterprise`，以解锁企业文件夹和权限。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Box remotes in RcloneView" class="img-large img-center" />

## 执行跨云传输

在左侧 Explorer 面板中打开 Google Drive，在右侧打开 Box。导航到 Google Drive 中的源文件夹 —— 团队的共享 `Projects` 文件夹或客户交付物目录 —— 然后选择要复制的项目，并将其拖到 Box 面板中。RcloneView 会确认复制操作，并直接在两个云服务之间流式传输数据，而本地计算机仅充当控制平面，从而降低你自身的带宽占用。

屏幕底部的“传输中”标签页会显示实时进度：当前速度、文件数量和已移动的总字节数。对于涉及演示文稿、视频素材和电子表格的大型传输，RcloneView 的多线程引擎可以同时移动多个文件，与顺序复制相比显著缩短了总传输时间。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Box in RcloneView" class="img-large img-center" />

## 设置同步任务以进行持续备份

对于定期备份，使用任务管理器创建同步任务。选择 Google Drive 文件夹作为源，Box 文件夹作为目标，并配置筛选规则 —— 例如排除 `.gdoc` Google 文档快捷方式文件，或将同步限制为最近 30 天内修改过的内容。单向同步模式会将更改写入 Box，而不会修改你的 Google Drive 内容，因此可以安全地针对正在使用的生产工作区运行。

在首次正式运行之前，使用“空运行”选项预览将要复制或覆盖的确切文件。任务历史记录会记录每次执行的时间戳、传输大小和状态代码，为合规团队提供清晰的审计跟踪参考。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive to Box sync job in RcloneView" class="img-large img-center" />

## 使用计划同步实现自动化（PLUS 许可证）

使用 PLUS 许可证，你可以按照任意 crontab 时间间隔安排 Google Drive → Box 同步自动运行 —— 每晚午夜、每周一早上，或按照你的 IT 政策要求的自定义节奏。在任务向导的“计划”步骤中填写分钟、小时和星期几字段。每次运行都会在任务历史记录中记录时间戳和状态代码，方便合规团队审计同步的确切运行时间及是否成功。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Google Drive to Box automated sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过“远程”标签页 > 新建远程 > Google Drive（OAuth 浏览器登录）添加你的 Google Drive 账户。
3. 通过“远程”标签页 > 新建远程 > Box（OAuth 浏览器登录）添加你的 Box 账户。
4. 在 Explorer 面板中并排打开两个远程，拖动文件即可立即复制，或者在任务管理器中创建同步任务以实现可重复的工作流。
5. 启用计划功能（PLUS 许可证），按周期自动执行同步，并设置完成通知。

维护良好的 Google Drive 到 Box 同步可以让你的合规归档保持最新，并确保跨平台文件访问的一致性 —— RcloneView 让这一切只需五分钟即可设置完成。

---

**相关指南：**

- [使用 RcloneView 管理 Google Drive 云同步与备份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Box 云同步与备份](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [将 Box 同步到 Google Drive —— 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
