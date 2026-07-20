---
slug: mount-google-shared-drives-rcloneview
title: "在 Windows 和 macOS 上使用 RcloneView 挂载 Google 共享云端硬盘 -- 完整访问权限，无需同步客户端"
authors:
  - tayson
description: 通过 RcloneView 的引导式工作流，将任意 Google 共享云端硬盘直接挂载到 Finder 或文件资源管理器，绕过 Drive for Desktop 的限制，同时保留管理员级别的控制权。
keywords:
  - google shared drive mount
  - mount shared drive windows
  - mount shared drive mac
  - rcloneview
  - rclone mount google drive
  - team drive windows
  - shared drive explorer
  - google workspace shared drive
  - rclone gui
  - mount team drive
tags:
  - RcloneView
  - google-drive
  - mount
  - productivity
  - workspace
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Windows 和 macOS 上使用 RcloneView 挂载 Google 共享云端硬盘 -- 完整访问权限，无需同步客户端

> 让每个团队都能获得所需的共享云端硬盘，而无需在笔记本电脑上强制安装完整的同步客户端。

Google Workspace 共享云端硬盘通常保存着你的设计素材、交接文件夹或合规存档，但 Drive for Desktop 只保留少量缓存，并且在每个用户拥有数十个共享云端硬盘时会力不从心。RcloneView 基于 rclone 对共享云端硬盘的支持构建，因此你可以将所需的云端硬盘直接挂载为 Windows 上的真实驱动器盘符，或 macOS 上的 Finder 卷，并内置自动挂载和 VFS 缓存功能。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 为什么团队需要无需 Drive for Desktop 的共享云端硬盘挂载

- Drive for Desktop 会镜像整个云端硬盘，占用大量 SSD 空间，并且在达到配额时会让笔记本电脑离线。
- 帮助台无法在不授予账户级同步权限的情况下，将单个共享云端硬盘交给承包商使用。
- 工程师和媒体团队需要可预测的路径（如 X:\Marketing 或 /Volumes/Archive）来支持自动化脚本和创意应用程序。

## RcloneView 如何将共享云端硬盘带到 Windows 和 macOS

RcloneView 在 rclone 之上叠加了一层 GUI，因此共享云端硬盘选择器、身份验证令牌和挂载参数都会为你自动处理。

- 引导式远程向导会列出你的 Google Workspace 账户可访问的每一个共享云端硬盘，并安全地保存它。参考步骤见 [/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)。
- 挂载管理器提供了 [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 中所述的各项选项，因此你无需记忆 CLI 语法。
- 自动挂载功能位于挂载对话框中；登录时启动选项位于设置 -> 常规中（详见 [/support/howto/rcloneview-basic/general-settings](/howto/rcloneview-basic/general-settings)）。

## 挂载前你需要准备的内容

| 要求 | 详情 |
| --- | --- |
| RcloneView + Rclone | 安装最新的 RcloneView 安装包（已包含 rclone）。 |
| 文件系统驱动 | Windows 使用 WinFsp（已内置）。macOS 需要 macFUSE；请按照 RcloneView 内的提示操作。调优限制请参见 [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos)。 |


## 分步指南：使用 RcloneView 挂载 Google 共享云端硬盘

以下步骤与管理员在 CLI 中已经执行的操作相同，但采用了友好的向导形式，方便帮助台人员快速重复操作。

### 第 1 步 -- 连接你的 Google Workspace 账户

1. 打开 **远程管理器** -> **+ 新建远程**。
2. 选择 **Google Drive** -> **OAuth（浏览器）**。
3. 浏览器登录完成后，RcloneView 会将刷新令牌保存在本地，以保持共享云端硬盘的授权状态。

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


### 第 2 步 -- 选择你需要的共享云端硬盘

1. 当提示"将其配置为共享云端硬盘？"时，选择 **是**。
2. RcloneView 会列出 Google 返回的所有共享云端硬盘。输入编号或搜索以突出显示正确的云端硬盘。
3. 使用描述性名称（如 `shared_marketing`）保存该远程，以便团队成员立即了解其内容。

### 第 3 步 -- 配置挂载配置文件

1. 前往 **挂载管理器**（或点击远程浏览器中的挂载图标）。
2. 选择共享云端硬盘远程，并选取要挂载的文件夹（根目录或子文件夹）。
3. 设置挂载目标和选项：
   - **目标**：保持 `自动`，或使用 **挂载到本地路径** 指定固定的驱动器盘符/挂载路径。
   - **自动挂载**：启用后 RcloneView 会在启动时重新挂载（可与设置中的"登录时启动"配合使用）。
   - **高级选项**：设置 **卷名称**（可选标签）、**挂载类型**（默认 `cmount`）、**网络驱动器**（Windows）、**允许其他用户**（Linux），如需阻止写入可勾选 **只读**。
   - **缓存选项**：选择 **缓存模式**（`full` 以获得最佳兼容性），设置 **缓存最大大小**、**缓存最长时间**，以及使用对话框中所示的纳秒数值设置 **目录缓存时间**。

### 第 4 步 -- 启动并验证

1. 点击 **保存并挂载**。挂载激活后状态标签会变为绿色。
2. 在文件资源管理器或 Finder 中打开新的驱动器。你应该能看到共享云端硬盘的文件夹；较大的目录在目录缓存根据你的 **目录缓存时间** 设置填充时可能需要片刻。
3. 使用挂载管理器进行卸载、打开已挂载的文件夹或编辑设置。

## 性能与访问技巧

- 将 **缓存模式** 设置为 **Full**，并将 **缓存最大大小** 设置得足够大，以获得最流畅的编辑体验。
- 对财务/法务云端硬盘使用 **只读** 以防止意外删除；如需要可创建单独的可写挂载。
- 根据变更频率调整 **目录缓存时间**（活跃云端硬盘可设短一些，存档云端硬盘可设长一些）。
- 复用固定的 **目标** 或 **挂载到本地路径**，以便脚本和应用程序始终能找到同一个挂载点。

## 自动化、共享与保护访问权限

RcloneView 可让你在多台设备上保持共享云端硬盘挂载的一致性：

- 在每个挂载上启用 **自动挂载**，并在设置中启用 **登录时启动**，让驱动器在操作系统启动时就绪。
- 使用任务调度器在非工作时间将共享云端硬盘内容镜像到 S3/Wasabi，以实现异地留存。
- 检查挂载管理器状态（已挂载 vs. 未挂载），在用户打开 Office 或 Adobe 之前验证连接情况。

## 故障排除与常见问题

| 症状 | 可能原因 | 解决方法 |
| --- | --- | --- |
| 睡眠后驱动器消失 | 操作系统卸载了 WinFsp/macFUSE | 启用 **自动挂载** 和 **登录时启动**，让 RcloneView 在启动时重新挂载。 |
| 文件打开缓慢 | 缓存过小或位于慢速磁盘上 | 增加 **缓存最大大小**，并保持 **缓存模式** 为 Full。 |
| macOS 上出现权限错误 | FUSE 缺少完全磁盘访问权限 | 为 RcloneView 和 macFUSE 授予完全磁盘访问权限，然后重启挂载（苹果菜单 -> 系统设置 -> 隐私与安全性）。 |
| `too many open files` | macOS ulimit 默认值为 256 | 应用 [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos) 中的 plist 调优方法。 |
| 共享云端硬盘列表为空 | 工作区管理员禁用了 Drive API | 在 Google Admin 中重新启用 Drive API，或申请对该共享云端硬盘的委托访问权限。 |

## 无需脚本即可发布共享云端硬盘挂载

RcloneView 让共享云端硬盘的访问变得可预测：没有臃肿的同步文件夹，无需编写脚本，也无需为每个新挂载等待 IT 部门介入。现在就为每个团队提供一个整洁的驱动器盘符或 Finder 卷，让你的 Google Workspace 存储保持可控。


<CloudSupportGrid />
