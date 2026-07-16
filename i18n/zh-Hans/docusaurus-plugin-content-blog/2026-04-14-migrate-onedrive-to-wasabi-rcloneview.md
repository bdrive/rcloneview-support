---
slug: migrate-onedrive-to-wasabi-rcloneview
title: "将 OneDrive 迁移到 Wasabi —— 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "使用 RcloneView 将文件从 Microsoft OneDrive 迁移到 Wasabi 热云存储。零 CLI 命令的 OneDrive 到 Wasabi 迁移分步指南。"
keywords:
  - migrate OneDrive to Wasabi
  - OneDrive Wasabi transfer
  - OneDrive to S3 migration
  - Wasabi cloud backup from OneDrive
  - rclone OneDrive Wasabi
  - cloud-to-cloud migration OneDrive
  - move Microsoft OneDrive files to Wasabi
  - RcloneView OneDrive migration
tags:
  - onedrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OneDrive 迁移到 Wasabi —— 使用 RcloneView 进行云备份

> 使用 RcloneView 将文件从 Microsoft OneDrive 传输到 Wasabi 兼容 S3 的热云存储——直接云到云传输，无需中间下载。

许多组织最初使用 Microsoft 365 附带的 OneDrive，但随着数据量增长，会意识到需要一个专用的、经济高效的备份层。Wasabi 兼容 S3 的热云存储是一个热门选择：可预测的统一存储费率，且没有出站流量费用。RcloneView 通过 rclone 的后端连接这两项服务，让你可以通过可视化界面将 OneDrive 内容迁移到 Wasabi 存储桶——无需编写脚本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 OneDrive 和 Wasabi

首先添加 OneDrive：**远程标签页 → 新建远程 → Microsoft OneDrive**，通过 OAuth 浏览器登录进行身份验证，并确认远程已保存。对于个人版 OneDrive，此过程是即时完成的。对于企业版 OneDrive，你可能需要在身份验证期间选择正确的租户。

接下来添加 Wasabi：**新建远程 → Amazon S3 Compatible → Wasabi**。输入你的 Wasabi 访问密钥、密钥，并为你的存储桶所在区域选择正确的终端节点（例如 `s3.us-east-1.wasabisys.com`）。Wasabi 的 S3 API 与 rclone 的 S3 后端兼容，无需任何特殊配置。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## 规划迁移范围

以双面板布局打开资源管理器——左侧为 OneDrive，右侧为 Wasabi。浏览 OneDrive 目录树以确定要迁移的文件夹。法务部门可能要迁移 `Contracts/2020-2024/` 归档；设计机构可能要迁移一个包含 500 GB 分层文件的 `Client-Assets/` 文件夹。

在传输前，使用 RcloneView 在源文件夹上的**获取大小**右键选项来计算数据总量。对于大型迁移，如果带宽与其他用户或服务共享，可将任务设置为在夜间运行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Viewing OneDrive to Wasabi transfer in RcloneView" class="img-large img-center" />

## 运行同步任务并进行验证

在任务管理器中创建一个同步任务：源为你的 OneDrive 路径，目标为你的 Wasabi 存储桶路径。在第 2 步中，启用**校验和验证**以在传输后验证每个文件的哈希值——这对于合规敏感的归档至关重要。将并发传输数设置为 6-8，以在速度和 API 稳定性之间取得平衡。

先运行模拟运行（Dry Run）以预览操作列表。文件名中含有特殊字符的 OneDrive 项目（在用户生成内容中很常见）将被标记出来以进行编码调整。在模拟运行后查看日志标签页，以便在实际传输前发现任何问题。

迁移完成后，使用 RcloneView 的**文件夹比较**功能直观地比对 OneDrive 源和 Wasabi 目标——在下线 OneDrive 副本之前确认文件数量和大小是否一致。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive and Wasabi folders after migration in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在新建远程向导中，通过 OAuth 登录添加 OneDrive，并通过 S3 凭证添加 Wasabi。
3. 使用文件夹比较评估迁移范围，然后在任务管理器中创建同步任务。
4. 启用校验和验证，运行模拟运行，然后执行完整迁移。

使用 RcloneView 从 OneDrive 迁移到 Wasabi，可获得经过验证、可审计的迁移记录——任务历史和传输日志会自动保存。

---

**相关指南：**

- [使用 RcloneView 将 OneDrive 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [使用 RcloneView 将 OneDrive 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [使用 RcloneView 管理 OneDrive 云同步和备份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
