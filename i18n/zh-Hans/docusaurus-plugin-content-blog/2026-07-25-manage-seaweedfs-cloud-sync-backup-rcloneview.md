---
slug: manage-seaweedfs-cloud-sync-backup-rcloneview
title: "管理 SeaweedFS 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - alex
description: "将自建的 SeaweedFS 对象存储连接到 RcloneView,实现跨平台挂载、同步和备份 — 无需命令行。"
keywords:
  - SeaweedFS RcloneView
  - SeaweedFS S3 兼容存储
  - 自建对象存储 GUI
  - 挂载 SeaweedFS
  - SeaweedFS 备份
  - SeaweedFS 同步
  - 分布式对象存储
  - SeaweedFS S3 网关
  - 管理 SeaweedFS 存储
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 SeaweedFS 存储 — 使用 RcloneView 同步和备份文件

> 无需接触终端,即可将自建的 SeaweedFS 集群变成一个可挂载的驱动器和一流的同步目标。

SeaweedFS 是一个快速的分布式存储系统,提供 S3 兼容网关,是希望在自有硬件上运行对象存储、而不是支付公有云账单的团队的热门选择。问题在于,大多数 SeaweedFS 部署完全通过配置文件和 CLI 命令来管理。RcloneView 把你的 SeaweedFS 网关当作任何其他 S3 兼容远程一样对待,从而弥补了这一差距,在你现有集群之上提供可视化文件浏览器、拖放传输和计划备份功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 SeaweedFS 连接为 S3 兼容远程

SeaweedFS 的 S3 网关使用与 Amazon S3 相同的协议,因此 RcloneView 连接它的方式与连接其他任何 S3 兼容服务商完全一样:访问密钥 ID、私密访问密钥,以及指向你网关地址和端口的自定义端点。打开 Remote 标签页 > New Remote,选择 S3 兼容选项,然后输入你集群网关的 URL 作为端点。由于 RcloneView 自带通过本地 RC API 通信的内嵌 rclone 实例,因此不需要单独的二进制文件或手动编辑的配置文件 — 你在界面中输入的凭据就是全部所需的设置。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new S3-compatible remote for a self-hosted SeaweedFS gateway in RcloneView" class="img-large img-center" />

无论你的 SeaweedFS 集群运行在家庭服务器、托管机架,还是你自己管理的云虚拟机上,这套工作流程都同样适用 — RcloneView 只要求网关能响应 S3 API 调用。

## 在 SeaweedFS 和其他云之间同步与备份数据

连接完成后,SeaweedFS 的表现就和 RcloneView Explorer 中的其他面板一样,因此你可以在同一个窗口内将文件拖拽到 Google Drive、OneDrive、Backblaze B2 或本地磁盘之间。为了实现持续保护,4 步 Sync 向导可以让你配置从 SeaweedFS 存储桶到第二个远程的单向任务,添加过滤规则排除临时文件,并先运行 Dry Run 预览实际将复制或删除的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing files between a SeaweedFS bucket and another cloud remote in RcloneView" class="img-large img-center" />

与仅支持挂载的工具不同,RcloneView 在 FREE 许可下也能在 SeaweedFS 与其他受支持服务商之间进行同步和文件夹比较。

## 将 SeaweedFS 挂载为本地驱动器

如果你的工作流程依赖原生应用程序直接读写文件,可以通过 Mount Manager 将你的 SeaweedFS 存储桶在 Windows、macOS 或 Linux 上挂载为本地驱动器。将 VFS 缓存模式设为 "writes" 可以兼顾响应速度与安全性,若需要离线访问最近使用过的文件,则设为 "full"。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a SeaweedFS remote as a local drive from Mount Manager" class="img-large img-center" />

## 监控传输和任务历史

针对你的 SeaweedFS 远程的每一个同步或复制任务都会在 Transferring 标签页中实时显示进度、速度和文件数量,每次完成的运行也会在 Job History 中记录持续时间、总大小和状态。这些历史记录让你在真正需要依赖某次计划备份之前,可以轻松确认它确实运行过。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed sync runs against a SeaweedFS remote" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 准备好你 SeaweedFS 网关的访问密钥、私密密钥和端点 URL。
3. 在 RcloneView 中创建一个新的 S3 兼容远程,并测试连接。
4. 设置同步任务或挂载,开始在 SeaweedFS 与其他远程之间移动数据。

自建存储不必只能靠命令行操作 — 一个合适的 GUI 可以让 SeaweedFS 像任何商业云一样易于使用。

---

**相关指南:**

- [管理 MinIO 自建存储 — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [RcloneView 中的 VFS 缓存与挂载性能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
