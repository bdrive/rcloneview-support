---
slug: backup-nextcloud-webdav-with-rcloneview
title: "使用 RcloneView 备份 Nextcloud 和 WebDAV 驱动器：可视化同步、计划任务与完整性校验"
authors:
  - tayson
description: "使用 RcloneView 保护您的 Nextcloud 或任何 WebDAV 驱动器 - 添加远程、预览差异、安排版本化备份计划,并在无需记忆 CLI 参数的情况下验证完整性。"
keywords:
  - nextcloud backup
  - webdav backup
  - rcloneview webdav
  - nextcloud to s3
  - webdav to google drive
  - cloud to cloud backup
  - rclone webdav gui
  - versioned backup
  - rclone check
  - cloud automation
tags:
  - webdav
  - nextcloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 备份 Nextcloud 和 WebDAV 驱动器：可视化同步、计划任务与完整性校验

> 将 Nextcloud 或任何 WebDAV 驱动器镜像到 Google Drive、S3/Wasabi 或其他云存储,保障数据安全 - 无需命令行。RcloneView 可预览变更、安排任务计划,并验证完整性,让备份始终值得信赖。

Nextcloud 和其他 WebDAV 服务为团队共享和自托管存储提供支持,但它们仍然需要异地备份。RcloneView 将 rclone 引擎封装在图形界面中,让您只需添加一次 WebDAV 远程,将其与目标云配对,并通过任务计划器和比较功能自动执行经过验证的备份。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 为什么要使用 RcloneView 备份 WebDAV/Nextcloud

- 在同步前使用**比较**功能可视化差异,避免覆盖数据。
- 复用同一个 WebDAV 远程,将数据备份到多个目标(Drive、S3、Wasabi)。
- 安排定期备份计划,并在任务历史中保留日志。
- 在复制/同步流程中启用校验和选项,以确认数据完整性(如支持)。

## 连接您的 WebDAV/Nextcloud 远程

1. 点击 **`+ New Remote`** -> 选择 **WebDAV**。
2. 输入您的 **URL**、**用户名**、**密码/应用密码**,并选择合适的厂商预设(例如 Nextcloud)。
3. 为其命名,例如 `Nextcloud_Main`。  
   <img src="/support/images/en/blog/new-remote.png" alt="New remote wizard" class="img-medium img-center" />

需要参考资料?请查看 WebDAV 指南:[添加 WebDAV/Nextcloud 远程](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)。

## 选择备份目的地

- **Google Drive / Workspace**,便于共享和查看历史记录。
- **S3 兼容**云存储(Amazon S3、Wasabi、R2),成本可预测且支持生命周期规则。
- **另一个 WebDAV**,用于简单的镜像复制。

通过 `+ New Remote` 添加目标远程,然后在 **Explorer -> Browse** 中并排打开两者。  
<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Side-by-side remotes" class="img-medium img-center" />

## 复制前先预览

- 在 Explorer 中选择源(WebDAV)和目标文件夹。
- 点击**比较**以高亮显示缺失、更新或相同的项目。
- 使用 **`Copy ->`** 或 **`<- Copy`** 仅移动您需要的内容,或安全地删除多余文件。

## 使用同步执行一次性备份

1. 选择源/目标文件夹。
2. 点击**同步**,并先启用**模拟运行**以查看计划的变更。
3. 在同步选项中,如果服务器有限流,请保持并发数适中;测试后可在设置中提高传输数/校验数。
4. 在**传输**和**已完成**标签页中查看进度;检查日志以了解是否触及 API 限制。

## 安排定期备份(设置后无需再操心)

1. 在同步对话框中,点击**保存到任务**(或打开**任务管理器 -> 添加任务**)。
2. 选择计划(每天或指定日期),如果想要简单的时间点副本,可将目标指向按日期命名的文件夹。
3. 启用通知,并在**任务历史**中查看成功/失败详情。  

- 指南:[创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)、[执行和管理任务](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)、[任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)、[传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## 常见问题

**这对任何 WebDAV 都适用吗,不仅仅是 Nextcloud?**  
是的 - 选择 WebDAV 并选择相应的厂商/预设,或选择"其他"以匹配您的服务。

**我可以备份到多个目的地吗?**  
可以 - 在多个任务中复用同一个 WebDAV 源(例如,Nextcloud -> Drive 和 Nextcloud -> Wasabi)。

**应用锁定时,计划任务还会运行吗?**  
任务会按配置运行;应用锁定仅保护 UI 访问(参见[启用应用锁定](/tutorials/enable-app-lock))。

## 总结

RcloneView 让 WebDAV/Nextcloud 备份变得可视化且可预测:只需添加一次远程、预览变更、调整性能,并安排经过验证的任务计划。用值得信赖的异地副本保护团队的文件 - 无需精通 CLI。

<CloudSupportGrid />
