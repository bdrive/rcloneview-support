---
slug: migrate-pcloud-to-proton-drive-rcloneview
title: "将 pCloud 迁移到 Proton Drive — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView 直接将文件从 pCloud 移动到 Proton Drive,无需本地下载步骤,支持 Dry Run 预览和校验和验证。"
keywords:
  - 将 pCloud 迁移到 Proton Drive
  - pCloud 到 Proton Drive 传输
  - RcloneView pCloud Proton Drive
  - 隐私云迁移
  - 传输 pCloud 文件
  - Proton Drive 同步
  - 云到云迁移
  - 加密云存储传输
tags:
  - RcloneView
  - pcloud
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 pCloud 迁移到 Proton Drive — 使用 RcloneView 传输文件

> 直接在两个注重隐私的云存储提供商之间移动文件,无需先将所有内容绕道本地硬盘。

从 pCloud 转向 Proton Drive 的用户通常出于同一个原因:他们希望获得与注重隐私的提供商绑定的端到端加密存储。问题在于,这两项服务彼此并不原生互通,因此默认做法是从 pCloud 下载所有内容,再重新上传到 Proton Drive —— 既缓慢,又白白让本地磁盘占用翻倍。RcloneView 在同一个窗口中连接两个远程,直接进行云到云的传输。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

先添加 pCloud —— 它是基于 OAuth 的远程,会弹出浏览器窗口进行登录,RcloneView 随即自动连接,无需复制任何 API 密钥。Proton Drive 需要你的账户邮箱和密码,如果启用了双重验证,还可以选择性使用。两个远程都配置好后,它们会作为独立标签页出现在 Explorer 面板中,你可以在分屏视图中一侧打开一个,在移动任何内容之前并排查看源文件夹和目标文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting pCloud and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## 在云与云之间传输文件

RcloneView 可在一个窗口中挂载并同步 90 多个提供商,并支持 Windows、macOS 和 Linux,因此从 pCloud 到 Proton Drive 的传输与其他跨提供商迁移的方式完全相同。对于较小的一次性传输,只需在两个面板之间拖放即可 —— RcloneView 会识别这是一次跨远程操作,并执行复制而非移动。若是完整账户迁移,则应改为设置 Copy 或 Sync 作业,从而获得进度追踪、重试逻辑,以及一份确切记录已传输内容的日志。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files from pCloud to Proton Drive in RcloneView" class="img-large img-center" />

## 验证迁移是否干净完成

在关闭 pCloud 账户之前,先在源和目标之间运行 Folder Compare。它会标记仅存在于左侧的文件、仅存在于右侧的文件,以及大小不同的文件,让你在取消旧套餐之前,能捕捉到任何未成功传输的内容。对于大型资料库,可在同步设置中启用校验和比较,这样文件会按哈希而非仅按文件大小进行验证 —— 在两个内部文件处理方式不同的提供商之间迁移时,这一点尤为重要。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 pCloud 作为远程,并通过浏览器 OAuth 登录。
3. 使用账户邮箱和密码添加 Proton Drive 作为远程。
4. 先运行 Dry Run,再在两个远程之间执行 Copy 或 Sync 作业。

传输完成后,通过 Folder Compare 进行验证,能让你放心地关闭旧账户,而不会遗漏任何内容。

---

**相关指南:**

- [管理 pCloud 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [管理 Proton Drive 存储 — 使用 RcloneView 同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [将 pCloud 迁移到 OneDrive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)

<CloudSupportGrid />
