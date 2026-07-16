---
slug: mount-google-drive-local-drive-rcloneview
title: "使用 RcloneView 在 Windows 和 macOS 上将 Google Drive 挂载为本地驱动器"
authors:
  - tayson
description: 借助 RcloneView，将每月 4 万多次的“挂载 Google Drive”搜索需求变成点击即用的体验——用引导式挂载、缓存和自动化取代复杂的 CLI 步骤，同时支持 Windows 和 macOS。
keywords:
  - mount google drive windows
  - mount google drive mac
  - google drive local drive
  - rcloneview
  - rclone mount gui
  - google drive file stream alternative
  - map google drive letter
  - mount google drive finder
  - scheduler auto mount
  - multi cloud explorer
tags:
  - google-drive
  - mount
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 Windows 和 macOS 上将 Google Drive 挂载为本地驱动器

> 每月有 4 万多人搜索“挂载 Google Drive”。RcloneView 把这个原本高度依赖 CLI 的答案,变成了带缓存、自动启动和 GUI 监控的两步操作流程。

`rclone mount` 功能强大但门槛不低:OAuth 令牌、配置密码、WinFsp/macFUSE 安装、冗长的参数字符串,以及重启后需要重新运行的脚本。RcloneView 把这些环节整合进一个桌面应用,让你无需终端即可把 Google Drive(以及任何其他云存储)挂载为 Windows 上真正的驱动器盘符,或 macOS 上的 Finder 卷。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 为什么选择 RcloneView 而不是自己动手的 CLI 挂载

- **引导式 OAuth**:远程管理器会启动安全的浏览器窗口,并保存刷新令牌(参见[远程管理器](/howto/rcloneview-basic/remote-manager))。
- **驱动助手**:WinFsp 和 macFUSE 的安装提示已内置在安装程序中,RcloneView 会在你点击“挂载”前完成验证。
- **可重复使用的模板**:挂载管理器会记住每一个 Google Drive、共享云端硬盘或其他远程,重启后只需一键切换即可重新挂载。
- **多云统一控制**:在挂载 Google Drive 的同时,你还可以同步到 Dropbox、比较 S3 存储桶,或在同一界面中安排任务。
- **监控与调度**:内置的调度器和传输监控可显示吞吐量,并可选择在挂载中断时自动重启。

## 步骤 1 —— 准备你的桌面环境

1. **安装 RcloneView**(安装包已包含 rclone)。在 Windows 上接受 WinFsp 提示;在 macOS 上安装 macFUSE。
2. **命名你的外部驱动器盘符或 Finder 卷**,即 Google Drive 挂载后要出现的位置(例如 `G:` 或 `/Volumes/GDrive`)。
3. **确定缓存空间**:选择一个至少有几 GB 剩余空间的 SSD 文件夹;之后挂载时会指向该目录以加快预览速度。

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## 步骤 2 —— 连接 Google Drive(以及其他云存储)

- 打开远程管理器,点击 **添加远程** -> **Google Drive**。按照 [添加 OAuth 在线登录](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide) 中的说明完成 OAuth 授权。
- 将该远程命名为 `gdrive-main`(也可以选择添加共享云端硬盘,或 Dropbox、OneDrive、S3 等其他云存储,便于之后比较或同步)。
- 使用[浏览和管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)为你经常挂载的文件夹(设计、财务、共享云端硬盘等)创建预设。

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
  


## 步骤 3 —— 从资源管理器或挂载管理器挂载 Google Drive

1. 打开双栏资源管理器,选择你的 Google Drive 远程,点击工具栏中的 **挂载图标**。
2. 选择 **驱动器盘符/卷**,设置缓存路径,并切换读写模式、缓存模式和带宽限制。
3. 点击 **挂载**,然后打开文件资源管理器或 Finder 即可看到新的驱动器。

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Google Drive from RcloneView Explorer" class="img-large img-center" />

挂载管理器(工具 -> 挂载管理器)会保留挂载列表,并提供自动启动、自动重连和开机自启的开关。你甚至可以同时暴露多个 Google 账号,这在传统方式下通常需要开多个命令行窗口才能实现。


## 步骤 4 —— 挂载之外的自动化工作流

挂载只是第一步。RcloneView 在此基础上叠加了多云工作流:

- **比较与清理**:使用[比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents),在挂载保持在线的情况下,将 Google Drive 与本地 SSD 或 Dropbox 进行对比。

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

- **同步或复制**:使用[创建同步任务](/howto/rcloneview-basic/create-sync-jobs)和[同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages),将整个文件夹复制到外部驱动器以进行离线备份。

  <img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  

- **调度**:安排任务,让挂载的 Google Drive 每晚自动排队同步到 NAS 或 Wasabi,无需手动点击(参见[任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution))。

  <img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />
  

- **并行挂载其他云存储**(OneDrive、Dropbox、S3),并像操作本地磁盘一样在 Finder 窗口之间拖拽文件。

## RcloneView 能解锁的使用场景

- **设计师与媒体团队**:直接将素材流式传输到 Adobe 或 DaVinci Resolve 中,无需在本地存储整个素材库。
- **开发者与 DevOps**:挂载共享云端硬盘获取配置文件,再通过脚本执行比较或同步任务到预发布/生产环境的存储桶。
- **审计与合规**:为审阅人员将 Google Drive 挂载为只读模式,同时调度器持续将不可变副本存入 S3 或外部驱动器。
- **高级用户**:用一个更轻量、遵循自定义缓存路径、带宽限制和日志记录的挂载方案,取代 Drive for Desktop。

## 疑难解答与常见问题

**我还需要用命令行吗?**  
不需要。RcloneView 会在后台自动生成所有 `rclone mount` 参数。高级用户可以打开任务详情查看具体命令。

**macOS 权限方面需要注意什么?**  
批准 macFUSE 的系统扩展提示,如果 Finder 中看不到该卷,请回到挂载管理器检查。操作指南中附有授权步骤的截图。

**可以挂载多个 Google 账号吗?**  
可以。在远程管理器中为每个账号添加一个远程,再分别创建挂载条目。RcloneView 会将令牌相互隔离,因此你可以同时查看 `gdrive-marketing` 和 `gdrive-personal`。

挂载 Google Drive 之所以仍是热门的 Google 搜索词,是因为传统 CLI 方案过于复杂。RcloneView 为这 4 万多名搜索者提供了一条无需编写代码的路径:只需连接一次 Google 账号、点击挂载,即可获得一个可靠的驱动器盘符或 Finder 卷,并配备你已经在使用的全部多云功能(比较、同步、调度)。立即下载最新版本,告别你的挂载脚本。

<CloudSupportGrid />
