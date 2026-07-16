---
slug: sync-yandex-disk-with-google-drive-using-rcloneview
title: "使用 RcloneView 同步 Yandex Disk 与 Google Drive——让多云工作流变得简单"
authors:
  - tayson
description: "连接 Yandex Disk 和 Google Drive，预览差异，并在 RcloneView 中运行带校验和验证的定时同步。"
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud sync
  - rclone sync
  - multi cloud
  - checksum verification
  - scheduler
  - compare
  - mount
  - webdav
  - backup
  - migration
  - gui
  - cloud to cloud
  - transfer monitor
  - job history
  - bandwidth limits
  - dry run
  - sync jobs
tags:
  - cloud-to-cloud
  - sync
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 同步 Yandex Disk 与 Google Drive——让多云工作流变得简单

> 无需接触 CLI 参数，即可在 Yandex Disk 和 Google Drive 之间移动和同步文件。RcloneView 为你提供并排对比、校验和验证的任务，以及用于让两个云保持同步的调度器。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 为什么要同步 Yandex Disk 和 Google Drive？

- 整合分散在个人和团队账户中的文件夹。
- 保留实时镜像以实现冗余或区域访问。
- 在切换前，通过预览、演练（dry-run）和校验和安全地准备迁移。
- 减少锁定风险：无需手动导出即可在另一个云中保留一份经过验证的副本。
- 保持正常运行：如果一个提供商限速，另一个仍然可用。

## 第 1 步 — 连接两个远程

- 通过 `+ New Remote` 添加 Yandex Disk（WebDAV 或 OAuth）。指南：[add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)。
- 使用相同流程添加 Google Drive；选择正确的范围（我的云端硬盘或共享云端硬盘）。
- 在**远程浏览器**中验证两者，以确保路径和权限正确。
- 可选的合理性检查：在几个测试文件上确认时区和修改时间的一致性，以避免意外覆盖。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 第 2 步 — 同步前先对比

- 打开**对比**，查看 Yandex Disk 和 Google Drive 之间的差异：[compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)。
- 如果想专注于文档、媒体或存档，可按扩展名筛选。
- 将对比另存为任务，以便每次同步后重新运行检查。
- 将对比用作演练（dry-run）：它会显示新增/更新/删除，但不会更改数据。
- 如果看到意外的删除操作，请将任务改为 `copy`（而非 `sync`），直到你有信心为止。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  
  

## 第 3 步 — 构建安全的同步任务

- 创建一个从 Yandex Disk 到 Google Drive 的任务（如有需要也可双向）：[create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)。
- 首次运行时先使用 **copy**，以避免意外删除；验证无误后再切换到 **sync**。
- 启用校验和验证，以捕获任何静默损坏。
- 排除临时/缓存文件夹，只移动真正重要的内容。
- 对于共享云端硬盘，选择正确的目标文件夹（避免根目录），以保持 ACL 整洁。
- 保持路径大小写一致，以避免在区分大小写与不区分大小写的后端之间出现看似重复的文件夹。
- 仅在遇到 API 限制时才考虑调整分块大小和并发数；默认设置对大多数用户已经足够。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />



## 第 4 步 — 定时调度与监控

- 将调度器设置在非高峰时段，以减少 API 限速：[Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)    
- 在**传输监控**中查看实时吞吐量和停滞文件：[real-time-transfer-monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)。
- 通知习惯：在迁移周期间，每天早上查看任务历史，及早发现异常。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />


## 第 5 步 — 挂载以实现按需访问（可选）

- 在本地挂载任一云，无需下载全部内容即可浏览：[mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- Windows：分配一个盘符；macOS：在 `/Volumes` 下选择挂载路径。
- 便于验证：同步后从每个挂载点直接打开几个文件，确认权限和可读性。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  

## 恢复或反向操作

- 要反转方向（从 Google Drive 到 Yandex Disk），复制该任务并交换源与目标。
- 对于选择性恢复，请在限定的包含列表上运行 **copy**，以避免覆盖正常数据。
- 保留一个已知良好的小型"金丝雀"文件夹，并确保每次运行都不会改变它；它是你快速的健康检查手段。

## 快速提示

- 在两侧保持一致的文件夹结构，以减少路径不匹配。
- 按团队使用预设（文档、媒体、存档），使运行结果保持可预测。
- 先用小文件夹测试，再扩展到完整目录树。
- 记录你的任务设置（模式、筛选条件、调度），以便团队中任何人都能安全地重新运行。
- 在大规模迁移期间，将挂载点对用户设为只读，以防止运行期间的中途编辑。

RcloneView 让 Yandex Disk 与 Google Drive 之间的同步变得简单直接：先对比，再安全复制，然后定时调度其余部分，并从同一个仪表盘监控一切。


<CloudSupportGrid />
