---
slug: sync-onedrive-to-box-rcloneview
title: "将 OneDrive 同步到 Box — 使用 RcloneView 进行云备份"
authors:
  - alex
description: "使用 RcloneView 将 OneDrive 同步到 Box：通过 OAuth 连接两者，先用 Dry Run 预览，再执行云到云同步，并用 Folder Compare 验证。"
keywords:
  - OneDrive 同步到 Box
  - OneDrive 到 Box 备份
  - OneDrive Box 同步工具
  - 复制 OneDrive 到 Box
  - 云到云同步
  - OneDrive Box 迁移
  - RcloneView
  - rclone GUI
  - 文件夹比较
  - 定时云同步
tags:
  - RcloneView
  - onedrive
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OneDrive 同步到 Box — 使用 RcloneView 进行云备份

> 在 Box 中保留 OneDrive 文件的第二份副本，数据直接在两个云之间移动。

团队内部常常使用 OneDrive，而客户、合作伙伴或合规流程却要求文件放在 Box 中。把所有内容下载后再重新上传既慢，又需要你可能没有的本地磁盘空间。RcloneView 连接这两项服务并进行云到云同步，事前可以先做 Dry Run，事后可以直观地比较。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 OneDrive 和 Box

两项服务都使用 OAuth 浏览器登录。在 Remote 选项卡中点击 **New Remote**，选择 Microsoft OneDrive 并登录，然后对 Box 重复同样的操作。对于 Box Business 或 Enterprise 账户，请在配置时设置 `box_sub_type = enterprise`。

RcloneView 可在一个窗口中挂载并同步 90 多个服务商，支持 Windows、macOS 和 Linux。两个远程创建完成后，将它们分别在两个 Explorer 面板中并排打开。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 OneDrive 和 Box 远程" class="img-large img-center" />

## 选择复制或同步，然后运行 Dry Run

打开 Sync 向导，选择 OneDrive 作为源，Box 中的某个文件夹作为目标。单向同步只会修改目标，因此从 OneDrive 中删除的文件也会从 Box 中删除。如果你想要的是安全网而不是镜像，请改用 Copy 任务。

请先运行 **Dry Run**。它会在不做任何更改的情况下列出将被复制和将被删除的文件。例如，会计团队在同步一个 150 GB 的 “Clients” 文件夹时，可以在正式运行前确认文件夹结构并发现多余的临时文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 OneDrive 到 Box 的云到云同步" class="img-large img-center" />

## 过滤并调整任务

向导的第 2 步用于设置文件传输数、多线程传输数以及 equality checker（相等性检查器）数量。如果希望使用哈希加大小，而不是仅比较大小和时间，请启用校验和比较。第 3 步可按最大大小、时间或自定义规则排除文件，也可以使用针对文档或图片的预定义过滤器。Box 有取决于套餐的上传大小限制，因此在同步超大文件之前请先查看你的账户。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="启动 OneDrive 到 Box 的同步任务" class="img-large img-center" />

## 监控、比较和计划

在 Transferring 选项卡中查看进度，其中显示速度、文件数量和大小。完成后打开 **Compare**，左侧为 OneDrive，右侧为 Box，并筛选仅在左侧存在或存在差异的文件。Job History 会保存每次运行的状态、耗时和大小。

使用 PLUS 许可证时，可以在第 4 步添加 crontab 风格的计划，让同步在 RcloneView 于系统托盘中运行期间每晚重复执行。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OneDrive 与 Box 之间的 Folder Compare" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote 选项卡中添加 OneDrive 和 Box 远程。
3. 创建从 OneDrive 到 Box 的 Sync 或 Copy 任务，并运行 Dry Run。
4. 运行任务，然后通过 Folder Compare 和 Job History 进行验证。

在 Box 中保留一份经过验证的第二副本，无论团队之后使用哪个平台，都能有可靠的后备。

---

**相关指南：**

- [管理 OneDrive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [管理 Box 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [将 Box 迁移到 OneDrive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
