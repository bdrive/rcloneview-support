---
slug: migrate-zoho-workdrive-to-google-drive-rcloneview
title: "将 Zoho WorkDrive 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - kai
description: "使用 RcloneView 将 Zoho WorkDrive 迁移到 Google Drive：选择区域，连接两个远程，先 Dry Run，再云到云复制并验证结果。"
keywords:
  - 将 Zoho WorkDrive 迁移到 Google Drive
  - Zoho WorkDrive 传输
  - Zoho WorkDrive 导出
  - 将 Zoho 文件移动到 Google Drive
  - 云到云迁移
  - RcloneView
  - rclone GUI
  - Zoho WorkDrive 备份
  - Google Drive 同步
  - 文件夹比较
tags:
  - RcloneView
  - zoho
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Zoho WorkDrive 迁移到 Google Drive — 使用 RcloneView 传输文件

> 通过预览和验证，将 Zoho WorkDrive 的团队文件夹直接在云之间复制到 Google Drive。

当公司从 Zoho 套件迁移到 Google Workspace 时，WorkDrive 中的团队文件夹也需要迁移。全部下载再重新上传既缓慢又难以审计。RcloneView 连接两个服务并在云之间传输文件，让您可以在一个窗口中预览、运行并验证迁移。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Zoho WorkDrive 和 Google Drive

Zoho WorkDrive 需要一个额外设置：创建远程时必须选择 **Region**，且必须与您 Zoho 账户所在的数据中心一致。Google Drive 使用 OAuth 浏览器登录。打开 Remote 选项卡，点击 **New Remote**，依次添加每个服务。

基本同步和文件夹比较功能可在 FREE 许可证下使用。

<img src="/support/images/en/blog/new-remote.png" alt="创建 Zoho WorkDrive 和 Google Drive 远程" class="img-large img-center" />

## 规划文件夹映射

打开两个 Explorer 面板，左侧为 WorkDrive，右侧为 Google Drive。浏览团队文件夹，并决定每个文件夹的目标位置。例如，拥有 150 GB 季度报告的财务团队可以映射到专用的共享云端硬盘文件夹，而个人文件则放入我的云端硬盘。

对大型文件夹使用 Get Size 来估算传输时间。在 Sync 向导的过滤步骤中，可以使用最大文件时长或自定义过滤器排除不需要的文件夹或文件类型，例如旧的归档。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="并排显示 Zoho WorkDrive 和 Google Drive" class="img-large img-center" />

## 先 Dry Run，再传输

创建一个从 WorkDrive 到 Google Drive 的 Copy 作业，并先运行 **Dry Run**。它会在不做任何更改的情况下列出将要复制的文件。预览无误后，运行作业并在 Transferring 选项卡中查看进度。

如果出现错误，作业会按配置的次数重试，Job History 会记录每次运行的状态、大小和文件数量。再次运行时只会复制缺失的文件。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行迁移作业" class="img-large img-center" />

## 验证并保留记录

在 Home 选项卡中打开 **Compare**，对比 WorkDrive 与 Google Drive。筛选仅存在于左侧的文件，找出未传输的内容，然后将其复制过去。Job History 提供带时间戳的记录，可作为迁移验收的存档。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho WorkDrive 迁移的 Job History" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Zoho WorkDrive（选择正确的 Region）和 Google Drive 远程。
3. 创建 Copy 作业，并运行 Dry Run 预览传输。
4. 运行作业，并在停用 WorkDrive 之前用 Folder Compare 进行验证。

在比较结果干净之前保持源端不变，可让切换更加低风险。

---

**相关指南：**

- [管理 Zoho WorkDrive 云同步](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [将 Zoho WorkDrive 同步到 OneDrive](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [修复 Zoho WorkDrive 同步错误](https://rcloneview.com/support/blog/fix-zoho-workdrive-sync-errors-rcloneview)

<CloudSupportGrid />
