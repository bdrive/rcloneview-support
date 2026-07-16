---
slug: manage-azure-files-cloud-sync-rcloneview
title: "使用 RcloneView 管理 Azure Files:同步、备份并挂载 SMB 云共享"
authors:
  - tayson
description: 了解如何使用 RcloneView 管理 Azure Files 共享——添加远程、浏览 SMB 共享、与其他云同步、挂载为本地驱动器并安排备份计划。
keywords:
  - rcloneview
  - azure files
  - azure file shares
  - smb cloud storage
  - cloud sync
  - mount azure files
  - azure backup
  - rclone GUI
  - multi-cloud management
  - azure file management
tags:
  - azure-files
  - azure
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Azure Files:同步、备份并挂载 SMB 云共享

> Azure Files 提供完全托管的云端 SMB 文件共享。**RcloneView** 让你可以浏览、同步、备份并挂载这些共享——全部通过可视化界面完成,无需任何命令行操作。

Azure Files 是微软推出的托管文件共享服务,可直接从 Azure 提供 SMB 和 NFS 访问。它广受运行混合工作负载、迁移应用以及为虚拟机提供共享存储的企业青睐。然而,在 Azure 门户之外管理 Azure Files 可能会很麻烦——尤其是当你需要在 Azure 与其他云之间移动数据,或保持本地副本同步时。

RcloneView 通过将 rclone 的 Azure Files 后端封装进简洁的双栏图形界面,解决了这一问题。你可以将 Azure 文件共享添加为远程,以可视化方式浏览它们,在不同云之间拖放文件,比较文件夹内容,安排自动化备份,甚至将共享挂载为本地驱动器盘符。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么在 Azure Files 中使用 RcloneView

Azure Files 在 Azure 生态系统内运行良好,但实际工作流程往往跨越多个提供商。你可能需要:

- **将 Azure 文件共享备份**到 Amazon S3、Backblaze B2 或 Wasabi 等独立云,以实现灾难恢复。
- **将 Azure Files 与 Google Drive 或 OneDrive 同步**,让团队成员可以通过熟悉的工具访问相同的数据。
- **在本地挂载 Azure 共享**,以满足需要本地文件路径而非 SMB 连接字符串的应用程序。
- **迁移数据**——从 Azure Files 迁移到其他提供商,或反向迁移。

RcloneView 无需脚本编写、PowerShell 或 AzCopy 即可完成上述所有操作。

## 将 Azure Files 添加为远程

在 RcloneView 中设置 Azure Files 不到一分钟:

1. 打开 RcloneView,点击 **+ New Remote(新建远程)**。
2. 从列表中选择 **Azure Files** 存储类型。
3. 输入你的 **Azure 存储账户名称** 和 **账户密钥**(或 SAS 令牌)。
4. 为远程命名(例如 `AzureFileShares`)并保存。

你的 Azure 文件共享现在将出现在资源管理器窗格中,随时可供浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Azure Files remote in RcloneView" class="img-large img-center" />

## 浏览和管理文件共享

连接后,RcloneView 会以熟悉的双栏布局显示你的 Azure 文件共享。你可以:

- **在任意共享内浏览目录**——像本地文件管理器一样深入嵌套文件夹。
- **预览文件元数据**,如大小、修改日期和路径。
- **直接在图形界面中重命名、删除或创建**文件夹。
- **在另一侧窗格打开第二个云**,实现并排管理。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane explorer showing Azure Files alongside another cloud" class="img-large img-center" />

## 将 Azure Files 与其他云同步

当你将 Azure Files 与其他云连接起来时,RcloneView 的真正威力才会显现。在一侧加载 Azure Files,在另一侧加载目标——Google Drive、OneDrive、Amazon S3 或任何受支持的远程。

### 拖放操作

在 Azure Files 中选择文件或文件夹,并将其拖到目标窗格。RcloneView 会在后台处理传输,并显示实时进度。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Azure Files to another cloud" class="img-large img-center" />

### 比较与选择性复制

使用 **Compare(比较)** 功能查看哪些文件在任一侧是新增、已更改或缺失的。然后仅复制差异部分——非常适合增量更新,无需传输全部内容。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders between Azure Files and a destination cloud" class="img-large img-center" />

### 完整同步

运行 **Sync(同步)** 操作,使目标成为你 Azure 文件共享的精确镜像。在提交更改前,请始终先使用 **Dry Run(试运行)** 预览将要发生的变化。

## 将 Azure Files 挂载为本地驱动器

RcloneView 可以将任意 Azure 文件共享挂载为 Windows、macOS 或 Linux 上的本地驱动器盘符。以下情况适用:

- 桌面应用程序需要本地路径来读写文件。
- 你希望通过文件资源管理器或 Finder 访问 Azure Files,而无需 SMB 客户端。
- 你需要为一次性任务快速创建临时挂载。

在资源管理器中打开该远程,右键点击某个共享,选择 **Mount(挂载)**。选择驱动器盘符或挂载点,该共享便会显示为本地卷。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Azure Files as a local drive from RcloneView Explorer" class="img-large img-center" />

## 安排自动化备份

要实现持续保护,请在 RcloneView 中创建 **Scheduled Job(计划任务)**:

1. 设置从 Azure Files 到备份目标的 Sync 或 Copy 任务。
2. 打开 **Job Scheduling(任务调度)** 面板,定义计划——每日、每周或自定义 cron 表达式。
3. 启用该计划,让 RcloneView 处理剩余的工作。

每次运行都会记录在 **Job History(任务历史)** 面板中,方便你审查传输内容并及时发现错误。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule an automated backup job for Azure Files" class="img-large img-center" />

## 使用 Azure Files 的技巧

- **使用范围受限的 SAS 令牌**,如果你希望在不暴露完整账户密钥的情况下授予 RcloneView 访问权限。
- **监控传输量**——Azure Files 会对存储和事务收费;频繁同步大量增量数据可能会增加成本。
- **排除临时文件**,使用 RcloneView 的过滤规则,避免同步锁文件、日志或缓存目录。
- **定期测试恢复**,从备份目标复制少量文件回来,以验证数据完整性。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用你的存储账户凭据**添加 Azure Files 远程**。
3. **浏览、同步、挂载或安排任务**——全部通过图形界面完成,无需命令行。

管理 Azure Files 不必意味着在门户标签页和 PowerShell 脚本之间来回切换。RcloneView 将这一切整合到一个窗口中。

---

**相关指南:**

- [使用 RcloneView 进行云到云传输与同步](https://rcloneview.com/support/blog/cloud-to-cloud-transfer-sync-rcloneview)
- [使用 RcloneView 将 Dropbox 迁移到 Azure Blob Storage](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)
- [使用 RcloneView 管理 Google Cloud Storage 存储桶](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)

<CloudSupportGrid />
