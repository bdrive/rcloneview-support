---
slug: hard-drive-to-proton-drive-with-rcloneview
title: 使用 RcloneView 加密并备份硬盘到 Proton Drive
authors:
  - jay
description: 使用 RcloneView 的拖放操作、比较预览和计划任务，将硬盘上传到 Proton Drive，从而移动、同步并保护本地文件——无需命令行。
keywords:
  - rcloneview
  - proton drive
  - 硬盘备份
  - 加密云存储
  - 云文件传输
  - rclone GUI
  - 计划同步
  - 本地到云端
tags:
  - proton-drive
  - hard-drive
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 加密并备份硬盘到 Proton Drive

> 保护你最重要的文件安全、私密且随时可访问——使用简洁的点击式工作流程，将**硬盘**同步到 **Proton Drive**。

## 为什么要将硬盘备份到 Proton Drive

如果你的照片、创意项目或工作档案只存放在一块硬盘上，那么一次咖啡泼洒或磁盘故障就可能让它们瞬间消失。**Proton Drive** 提供了一个加密、以隐私为先的云存储层，而 **RcloneView** 则提供了一个友好的图形界面，让你连接源和目标、预览更改并自动化同步——无需使用命令行。
<!-- truncate -->

**了解 Proton Drive（概览）**  
- 端到端加密，以隐私为核心的设计  
- 跨平台访问，支持分享链接与文件版本管理  
- 由 rclone 的 Proton 后端支持，因此你可以通过 RcloneView 浏览、复制和同步文件

**了解你的硬盘**  
- 大型文件夹、嵌套结构和多个版本很常见  
- 可靠的工具（续传、比较、选择性复制）能让迁移过程更顺畅

**为什么要从硬盘迁移到 Proton Drive？**  
- **保护**：为灾难恢复提供安全的异地副本  
- **隐私**：加密存储，同时不牺牲易用性  
- **效率**：随时随地访问文件，放心分享

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 准备工作

开始之前：

- **整理源文件**：将内容分组（例如 `Photos/`、`Projects/`、`Docs/`），以便任务更清晰  
- **检查 Proton Drive 容量**：确保有足够空间用于首次上传及未来增长  
- **确定方案**：一次性上传、分批上传，或使用计划任务持续同步  
- **可选加密层**：高级用户可以叠加 rclone 的 **crypt**，以获得额外的控制

🔍 相关指南  
- [Proton Drive 连接指南](/howto/remote-storage-connection-settings/proton)  
- [浏览和管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)

## 在 RcloneView 中连接 Proton Drive

RcloneView 将 rclone 的配置过程封装为一个引导式的点击流程。

1. 打开 **RcloneView**，点击 **`+ New Remote`**  
2. 选择 **Proton Drive**，按照指南中的登录/令牌提示进行操作，然后为其命名（例如 `MyProton`）  
3. 在另一侧，添加一个 **Local** 远程（你的硬盘路径，例如 `D:\Media` 或 `/Users/you/Archive`）  
4. 确认两者都并排显示在资源管理器面板中

<img src="/support/images/en/blog/open-local-disk-and-proton-drive.png" alt="open local disk and proton drive" class="img-medium img-center" />

## 传输和同步选项

### 拖放操作
从 **Local** 面板中直观地将文件/文件夹复制到 **Proton Drive**——适合一次性移动或快速操作。  

👉 了解更多：[使用拖放复制文件](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### 比较并复制
运行**比较**功能，在复制前预览差异（新增、更改、缺失）——非常适合选择性更新，避免重复文件。  

👉 了解更多：[比较并管理文件](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files in RcloneView" class="img-medium img-center" />

### 同步与计划任务
按计划将选定的本地文件夹镜像同步到 Proton Drive——每晚、每周或自定义周期。请务必先执行**空运行（dry-run）**以验证计划的操作，然后将其保存为可重复使用的**任务（Job）**。  

👉 了解更多：  
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)  
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)  
- [任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job to Proton Drive in RcloneView" class="img-medium img-center" />

**专业建议**  
- 先从**试点文件夹**开始，验证速度、结构和过滤器  
- 使用过滤器排除缓存、临时文件以及你不需要上传到云端的渲染文件  
- 在大规模初始上传期间保持源文件为只读，以减少数据漂移

## 结论——要点总结与额外提示

- **原因**：为你最重要的文件提供异地容灾能力，以及以隐私为先的存储  
- **方法**：RcloneView 让你连接 **Local** 和 **Proton Drive**，然后使用**拖放**、**比较**或**同步**——并通过**计划任务**实现无人值守的保护  
- **安全扩展**：分批上传、监控任务，并查看日志以保持清晰的审计记录

## 常见问题

**我需要命令行技能吗？**  
不需要——RcloneView 在 rclone 的 Proton Drive 后端之上提供了完整的图形界面。

**我可以自动运行定期备份吗？**  
可以——将你的同步保存为**任务（Job）**，并在 RcloneView 的任务管理器中添加计划即可。

**我的数据是否加密？**  
Proton Drive 使用端到端加密。对于高级场景，你还可以选择在其之上叠加 rclone 的 **crypt**。

**如果上传的数据量巨大怎么办？**  
可以分批处理，并安排在夜间运行计划任务。下次使用**比较**功能，只复制新增或更改的文件。

**准备好在不接触终端的情况下，将你的文件安全存放到 Proton Drive 了吗？**  

<CloudSupportGrid />
