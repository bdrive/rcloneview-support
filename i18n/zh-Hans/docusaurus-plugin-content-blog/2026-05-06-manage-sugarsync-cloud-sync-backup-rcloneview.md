---
slug: manage-sugarsync-cloud-sync-backup-rcloneview
title: "管理 SugarSync 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "将 SugarSync 连接到 RcloneView，以可视化方式管理您的云文件。使用易用的图形界面在各平台间同步、备份和传输 SugarSync 数据。"
keywords:
  - SugarSync 云存储管理
  - RcloneView SugarSync 同步
  - SugarSync 备份文件
  - SugarSync 文件传输图形界面
  - SugarSync rclone
  - 使用 RcloneView 管理 SugarSync
  - SugarSync 桌面客户端替代方案
  - SugarSync 云备份工具
  - 同步 SugarSync 文件
  - SugarSync 多云
tags:
  - sugarsync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 SugarSync 存储 — 使用 RcloneView 同步和备份文件

> RcloneView 为您的 SugarSync 存储带来完整的图形界面控制能力 — 无需仅依赖 SugarSync 原生桌面客户端即可浏览、同步和备份文件。

SugarSync 一直是小型企业和需要在设备间可靠同步文件的个人专业人士信赖的云备份方案。虽然 SugarSync 的原生应用可以满足日常同步需求，但 RcloneView 为 IT 管理员和高级用户增加了强大功能：定时任务、云到云传输、批量迁移，以及与您其他云账户的集中管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 SugarSync 连接到 RcloneView

RcloneView 使用 rclone 的 SugarSync 后端连接到 SugarSync。在 RcloneView 中，导航到“远程”选项卡 > “新建远程”，然后从提供商列表中选择 SugarSync。系统会提示您通过 SugarSync 账户凭据进行身份验证，令牌会安全地存储在 RcloneView 的加密本地存储中。

连接完成后，您的 SugarSync 文件夹（包括 Magic Briefcase 及任何自定义同步文件夹）将出现在文件浏览器中。您可以浏览文件夹内容、查看文件大小，并通过右键菜单执行文件管理操作。

<img src="/support/images/en/blog/new-remote.png" alt="Adding SugarSync as a remote in RcloneView" class="img-large img-center" />

## 将 SugarSync 备份到另一个云存储

将 SugarSync 连接到 RcloneView 的一个引人注目的用例是跨云备份：将 SugarSync 的内容复制到 Backblaze B2 或 Amazon S3 等辅助提供商。一位在 SugarSync 上积累了多年客户文档的自由顾问，可以配置每周同步任务，将这些内容镜像到兼容 S3 的存档中，以确保在主账户无法访问时仍有冗余保障。

RcloneView 的同步向导会引导您完成源选择、目标设置、过滤选项和调度设置。启用校验和验证可确认每个传输的文件都与源文件完全一致。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a backup job from SugarSync in RcloneView" class="img-large img-center" />

## 浏览和整理 SugarSync 文件

双面板文件浏览器让您可以并排处理 SugarSync 与另一个云存储或本地文件夹。使用 RcloneView 内置的文件夹比较功能以可视化方式比较文件夹内容 — 查找仅存在于一侧的文件，或识别可能表明同步不完整的文件大小差异。

对于包含数千个文件的大型 SugarSync 资料库，可使用文件列表的排序和过滤功能快速导航。页脚摘要会一目了然地显示文件总数和合计存储大小。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SugarSync folder contents in RcloneView" class="img-large img-center" />

## 从 SugarSync 迁移出去

如果您计划从 SugarSync 迁移到另一个提供商，RcloneView 可以大大简化这一过程。配置一个从 SugarSync 到目标位置的一次性同步任务，使用试运行预览将要传输的内容，然后执行完整迁移。任务历史记录会提供已移动文件的完整记录。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating SugarSync data to another cloud provider with RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 转到“远程”选项卡 > “新建远程”，然后选择 SugarSync。
3. 使用您的 SugarSync 凭据进行身份验证并保存远程。
4. 在浏览器中浏览文件，并配置到其他提供商的同步或备份任务。

RcloneView 为 SugarSync 用户提供企业级的同步和备份工具，同时无需改变他们已经熟悉的工作方式。

---

**相关指南：**

- [管理 Dropbox 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [管理 Google Drive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [面向自由职业者和独立承包商的云存储 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />
