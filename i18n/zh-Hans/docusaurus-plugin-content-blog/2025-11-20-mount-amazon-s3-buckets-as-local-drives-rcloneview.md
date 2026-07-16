---
slug: mount-amazon-s3-buckets-as-local-drives-rcloneview
title: "使用 RcloneView 将 Amazon S3 存储桶挂载为本地磁盘（Windows 和 macOS）"
authors:
  - tayson
description: 通过点击优先的 RcloneView 工作流程，解答每月 22K+ 次的“挂载 S3 存储桶”搜索需求，将任意 Amazon S3 存储桶转换为原生盘符或 Finder 卷，并配备缓存、IAM 权限限制和计划任务自动化。
keywords:
  - mount s3 bucket windows
  - mount s3 bucket mac
  - amazon s3 local drive
  - rcloneview
  - rclone mount gui
  - winfsp s3 mount
  - macfuse s3 mount
  - map s3 drive letter
  - s3 explorer
  - scheduler auto mount
tags:
  - RcloneView
  - amazon-s3
  - mount
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Amazon S3 存储桶挂载为本地磁盘（Windows 和 macOS）

> 开发者每月搜索“mount S3 bucket Windows”超过 22K 次。RcloneView 用两次点击的 GUI 操作取代了带有 20 个参数的 `rclone mount` 脚本。

Amazon S3 无处不在：日志、机器学习产物、备份和静态网站。然而官方工具要求你手动下载文件，或使用 WinFsp、macFUSE、缓存标志和监视守护进程编写自定义脚本。RcloneView 将成熟的 `rclone mount` 引擎封装进桌面 UI，让工程师、管理员和创作者可以在 Windows 或 macOS 上将任意存储桶（或兼容服务，如 Wasabi、R2、Backblaze B2）以原生磁盘的形式呈现出来。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## 为什么选择 RcloneView 而非自行使用 CLI 挂载

- **引导式 IAM 设置**：远程管理器会根据 [Amazon S3 指南](/howto/remote-storage-connection-settings/s3) 引导你完成密钥、角色和终端节点的配置，确保凭据权限范围可控。
- **驱动助手**：内置 WinFsp 和 macFUSE 提示，无需手动下载或修改注册表。
- **模板化挂载**：挂载管理器为每个 S3 挂载保存缓存大小、盘符和自动启动开关等设置。
- **多云附加功能**：在挂载 S3 的同时，你可以在同一 UI 中对比、同步或复制到 Google Drive、Dropbox、Wasabi、NAS 或外部磁盘。
- **监控与计划任务**：内置的计划任务功能会在重启后自动重新挂载。

## 第 1 步 -- 准备桌面环境和 IAM

1. **安装 RcloneView**（已包含 rclone）。在 Windows 上接受 WinFsp 安装，在 macOS 上批准 macFUSE 安全提示。
2. **规划 IAM 权限**：创建一个仅限于计划挂载的存储桶的角色/用户（分析人员使用只读权限，暂存工具使用读写权限）。

## 第 2 步 -- 添加 S3 及其他云存储

- 打开**远程管理器**，点击*添加远程* -> *Amazon S3*（或兼容服务）。按照 S3 指南粘贴 Access Key、Secret、区域以及可选的终端节点。
- 将远程命名为 `s3-prod-logs`（并添加其他远程，如 `s3-staging`、Wasabi、R2）。使用备注字段描述保留期限和转换规则。

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 第 3 步 -- 通过资源管理器或挂载管理器挂载

1. 在双栏资源管理器中，选择你的 S3 远程，点击**挂载图标**。
2. 选择盘符/卷、缓存大小、只读还是读写，以及是要暴露存储桶根目录还是子文件夹。
3. 点击**挂载**，存储桶会立即出现在文件资源管理器或 Finder 中。[将云存储挂载为本地磁盘](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount S3 buckets from RcloneView Explorer" class="img-large img-center" />

挂载管理器（远程 -> 挂载管理器）将每个挂载保存为可重复使用的配置文件。开启**启动时自动挂载**，指定重连重试次数，并添加 IAM 轮换日期提醒。


## 第 4 步 -- 围绕挂载实现工作流自动化

挂载只是起点。RcloneView 支持你叠加更多自动化：

- **对比**已挂载的存储桶与本地文件夹，以验证部署情况（参见[对比文件夹内容](/howto/rcloneview-basic/compare-folder-contents)）。

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- **同步** S3 到外部磁盘或 NAS，使用[创建同步任务](/howto/rcloneview-basic/create-sync-jobs)和[同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)执行每夜任务。

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- **多云切换**：同时保持 Google Drive、Dropbox 或 Wasabi 挂载打开，在 Finder/资源管理器窗口之间拖拽文件。

## 开发者钟爱的使用场景

- **日志分析**：在 macOS 上挂载 S3 日志，本地执行 grep，然后卸载。无需 `aws s3 sync` 带来的杂乱。
- **数据科学暂存**：将 Jupyter 或 VS Code 指向挂载的磁盘，直接加载 parquet/CSV 文件，无需复制到笔记本电脑存储。
- **备份验证**：以只读方式挂载 Glacier 或 Object Lock 存储桶，同时由计划任务将热数据复制到其他位置。

## 故障排查与常见问题

**RcloneView 支持自定义 S3 终端节点（Wasabi、R2、MinIO）吗？**
支持。使用相同的 S3 远程向导，设置终端节点，然后像挂载其他存储桶一样挂载它即可。

**如何只挂载一个文件夹而不是整个存储桶？**
使用“挂载路径”字段指向 `bucket/prefix`，或在启动挂载之前为该文件夹创建资源管理器书签。

## 准备好告别挂载脚本了吗？

RcloneView 将过去一整篇 CLI 参数说明浓缩为寥寥几次点击：添加一次 S3 远程、保存挂载模板，让计划任务在每次启动时自动重新挂载。与此同时，你还能在同一应用中获得对比预览、同步任务、多云资源管理器面板和监控仪表盘。

<CloudSupportGrid />
