---
slug: migrate-box-to-dropbox-rcloneview
title: "从 Box 迁移到 Dropbox — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 Box 迁移到 Dropbox。通过 OAuth 连接两个远程，用 Dry Run 预览，在云与云之间复制文件夹，并用 Folder Compare 进行验证。"
keywords:
  - Box 迁移到 Dropbox
  - Box 到 Dropbox 迁移
  - 从 Box 传输文件到 Dropbox
  - Box Dropbox 云到云传输
  - 将 Box 文件夹移动到 Dropbox
  - Dropbox for Business 迁移
  - RcloneView Box Dropbox
  - rclone Box 到 Dropbox GUI
  - 云迁移工具
tags:
  - RcloneView
  - box
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 从 Box 迁移到 Dropbox — 使用 RcloneView 传输文件

> 将 Box 文件夹树以云到云的方式迁移到 Dropbox，在任何更改前预览范围，并并排确认结果。

团队从 Box 切换到 Dropbox 的原因多种多样：公司合并、新客户的要求，或者创意部门早已在使用 Dropbox。难点在于如何把多年积累的共享文件夹完整无缺地迁移过去。RcloneView 将两个服务都连接为远程，并通过 rclone 执行复制，因此您可以在一个窗口中规划、运行和验证迁移，而无需先把所有内容下载到笔记本电脑上。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Box 和 Dropbox 连接为远程

两个服务都使用 OAuth，因此无需复制 API 密钥。打开 **Remote tab > New Remote**，选择 Box，在浏览器打开后登录。对 Dropbox 重复同样的步骤。如果任一方是企业账户，请在设置时启用对应选项：Box for Business 使用 `box_sub_type = enterprise`，Dropbox for Business 使用 `dropbox_business = true`。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Dropbox remotes in RcloneView" class="img-large img-center" />

在左侧 Explorer 面板打开 Box，在右侧面板打开 Dropbox。并排浏览两者，可以在创建作业前确认能看到预期的文件夹，且目标文件夹已存在。右键单击 Box 文件夹并选择 **Get Size**，即可估算将要迁移的数据量。

## 创建 Copy 作业并预览

对于迁移来说，**Copy** 作业是稳妥的选择：它只向 Dropbox 添加文件，绝不会删除目标端的任何内容。从 **Home tab > Sync** 或 Job Manager 创建作业，选择 Box 文件夹作为源、Dropbox 文件夹作为目标，并起一个清晰的名称，例如 `box-marketing-to-dropbox`。

在 Advanced Settings 中，这一组合请保持校验和关闭。Box 和 Dropbox 使用不同的哈希类型，因此 rclone 会改用文件大小和修改时间来比较文件。如果 Dropbox 开始限流，请降低文件传输数量，而不是提高。在 Filtering 步骤中，预定义的 **Box Docs** 过滤器可让您单独处理 Box 原生文档，自定义规则则可跳过您决定不再保留的文件夹。

请先运行 **Dry Run**。它会列出所有将被复制的文件而不实际传输——当一家代理机构要迁移 60,000 个客户资产并希望与相关方确认范围时，这非常有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Box to Dropbox in RcloneView" class="img-large img-center" />

## 运行、监控并保留审计记录

启动作业，在 **Transferring** 标签页中跟踪进度、速度和文件数。将大型迁移按顶层文件夹拆分为多个作业，可以避免单个错误拖住整体进度。每次运行都会连同状态、总大小和文件数记录在 **Job History** 中，也可作为迁移审批人的记录。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Box to Dropbox migration runs" class="img-large img-center" />

## 使用 Folder Compare 验证

作业完成后，对 Box 源和 Dropbox 目标打开 **Folder Compare**。筛选仅存在于左侧的文件，找出未到达的内容，并使用 Copy right 补齐缺失部分。在仍有人往 Box 保存文件的过渡期内，请在最终切换前重新运行同一个 Copy 作业以获取新文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box and Dropbox contents" class="img-large img-center" />

## 快速开始

与仅支持挂载的工具不同，RcloneView 还支持同步和文件夹比较——在 FREE License 下即可使用。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 将 Box 和 Dropbox 添加为远程，必要时启用企业选项。
3. 创建从 Box 到 Dropbox 的 Copy 作业，并用 Dry Run 检查。
4. 运行作业，然后在 Folder Compare 和 Job History 中确认结果。

经过预览和验证的迁移，能让您的团队放心迁移到 Dropbox，而不必担心遗漏了哪个文件夹。

---

**相关指南：**

- [管理 Box 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Dropbox 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Dropbox 同步到 Box](https://rcloneview.com/support/blog/sync-dropbox-to-box-rcloneview)

<CloudSupportGrid />
