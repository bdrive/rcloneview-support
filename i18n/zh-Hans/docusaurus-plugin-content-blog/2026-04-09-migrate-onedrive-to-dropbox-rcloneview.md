---
slug: migrate-onedrive-to-dropbox-rcloneview
title: "使用 RcloneView 将 OneDrive 迁移到 Dropbox"
authors:
  - tayson
description: "使用 RcloneView 将数据从 OneDrive 迁移到 Dropbox。比较平台功能、设置两个远程、传输数据，并逐步验证迁移结果。"
keywords:
  - rcloneview
  - onedrive to dropbox
  - migrate onedrive to dropbox
  - onedrive dropbox migration
  - onedrive migration tool
  - cloud storage migration
  - dropbox from onedrive
  - microsoft to dropbox
  - onedrive data transfer
  - cloud to cloud migration gui
tags:
  - onedrive
  - dropbox
  - migration
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 OneDrive 迁移到 Dropbox

> 从 OneDrive 切换到 Dropbox 意味着在两个不同的生态系统之间移动文件——**RcloneView** 通过可视化界面完成传输、元数据保留和验证。

OneDrive 与 Microsoft 365 深度集成，而 Dropbox 则专注于文件同步和协作，并拥有广泛的第三方应用集成。无论是切换生产力套件的组织、因更出色的智能同步或 Paper 功能而转向 Dropbox 的团队，还是偏爱 Dropbox 文件恢复能力的个人用户，都面临同样的挑战：在平台之间传输可能积累多年的数据。RcloneView 通过各自的 API 连接这两个平台，并提供一条直接的迁移路径。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 OneDrive 迁移到 Dropbox

这一决定通常涉及以下一个或多个因素：

- **平台切换**：从 Microsoft 365 转向 Google Workspace 或不包含 OneDrive 的套件，但仍偏好使用 Dropbox 存储文件。
- **智能同步**：Dropbox 的智能同步（在线专属文件配合本地占位符）比 OneDrive 的按需文件（Files On-Demand）有更长的应用历史和更广泛的应用兼容性。
- **第三方集成**：Dropbox 通过其 API 生态系统连接了更广泛的创意和生产力工具。
- **文件恢复**：Dropbox Business 计划提供 180 天的版本历史，而 OneDrive 个人版仅限 30 天。
- **跨平台一致性**：Dropbox 在 Windows、macOS 和 Linux 上提供更统一的体验。

## 设置两个远程

### OneDrive 远程

打开 RcloneView 的远程管理器，添加一个 **Microsoft OneDrive** 远程。通过 OAuth 授权，根据账户类型选择 OneDrive 个人版或商业版。对于商业版账户，可选择个人云盘或 SharePoint 文档库。

### Dropbox 远程

添加一个 **Dropbox** 远程。通过 OAuth 授权——RcloneView 会打开浏览器窗口以进行 Dropbox 登录和权限授予。令牌会存储在本地的 rclone 配置中。Dropbox 远程可访问你的整个 Dropbox，如果你是 Business 计划用户，还包括团队文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Dropbox remotes in RcloneView" class="img-large img-center" />

## 规划迁移

在开始传输之前：

1. **文件名兼容性**：OneDrive 商业版限制使用 `#` 和 `%` 等字符，而 Dropbox 也有自己的限制（例如尾随空格和句点）。OneDrive 上存在的文件可能需要重命名以兼容 Dropbox。RcloneView 会自动处理编码，但仍建议检查你的文件结构以应对边缘情况。
2. **规模与结构**：使用 RcloneView 的存储分析功能确定数据总量。以 50 Mbps 的速度迁移 500 GB 数据大约需要 22 小时。
3. **共享文件和链接**：OneDrive 的共享权限和链接不会转移到 Dropbox。请在迁移前记录任何关键的共享链接，以便在 Dropbox 上重新创建。
4. **OneNote 笔记本**：存储在 OneDrive 上的 OneNote 文件不是标准文件——迁移前需要先导出。建议单独导出这些文件。

## 执行迁移

在左侧窗格打开 OneDrive，在右侧窗格打开 Dropbox。导航到源文件夹和目标位置。首次迁移时使用复制任务，以便在验证完成之前双方都保留文件。

RcloneView 使用大小和修改时间来比较文件。OneDrive 使用 QuickXorHash，而 Dropbox 使用自己的内容哈希——由于两者不兼容，RcloneView 在这两个提供商之间的增量检测依赖于大小和时间戳比较。匹配的文件会被跳过，只传输新增或已更改的文件。

对于大型迁移，启用多线程传输并设置合适的带宽限制，以避免占满你的网络连接。RcloneView 的实时监控会显示传输进度、速度和预计完成时间。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating OneDrive to Dropbox in RcloneView" class="img-large img-center" />

## 验证迁移

传输完成后，使用 RcloneView 的比较功能验证完整性。选择 OneDrive 源和 Dropbox 目标并运行比较。匹配的文件会显示为相同；缺失或存在差异的文件会被高亮显示。

如果你有任何 Office Online 文档，请特别留意类 Google Docs 的文件——这些文件在传输过程中应已被转换为标准 Office 格式。请验证转换后的文件在 Dropbox 中能否正常打开。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to Dropbox migration in RcloneView" class="img-large img-center" />

## 迁移后步骤

1. 安装 Dropbox 桌面客户端并配置智能同步偏好设置。
2. 在 Dropbox 上重新创建任何共享链接或文件夹权限。
3. 更新指向 OneDrive 路径的应用集成。
4. 在删除 OneDrive 数据之前保留一段过渡期（30-60 天）。
5. 如果并行运行两者，请在 RcloneView 中安排每日同步任务，以保持 Dropbox 数据最新。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing OneDrive to Dropbox sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程管理器中添加 OneDrive 和 Dropbox 远程。
3. 运行从 OneDrive 到 Dropbox 的复制任务。
4. 使用比较功能进行验证。
5. 完成迁移后步骤，并在准备就绪后停用 OneDrive。

OneDrive 和 Dropbox 服务于不同的生态系统，但 RcloneView 确保你的数据能够干净、完整地在两者之间迁移。

---

**相关指南：**

- [通过浏览器登录（OAuth）添加远程](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
