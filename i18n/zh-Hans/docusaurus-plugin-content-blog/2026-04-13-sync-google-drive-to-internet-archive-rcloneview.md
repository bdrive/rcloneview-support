---
slug: sync-google-drive-to-internet-archive-rcloneview
title: "将 Google Drive 同步到 Internet Archive —— 使用 RcloneView 进行数字化保存"
authors:
  - tayson
description: "了解如何使用 RcloneView 将 Google Drive 文件归档到 Internet Archive 以实现长期数字化保存。非常适合研究人员、记者和教育工作者。"
keywords:
  - Google Drive Internet Archive sync
  - digital preservation RcloneView
  - archive Google Drive files
  - Internet Archive rclone GUI
  - long-term cloud backup
  - researcher data archiving
  - Google Drive backup Internet Archive
  - RcloneView digital archive
tags:
  - RcloneView
  - google-drive
  - internet-archive
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 同步到 Internet Archive —— 使用 RcloneView 进行数字化保存

> Internet Archive 为数字内容提供永久、免费的存储空间 —— RcloneView 让你可以轻松地将 Google Drive 文件推送到那里，实现长期保存。

归档实地数据的研究人员、保存原始资料的记者，以及维护课程材料的教育工作者，都面临着相同的挑战：Google Drive 便于日常使用，但并非为永久保存而设计。而 Internet Archive（archive.org）正是为此而生。它可以无限期地保存内容，并使其长期公开（或私密）访问。RcloneView 连接这两个平台，让你无需接触命令行即可将 Google Drive 内容同步到 Internet Archive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Google Drive

打开 RcloneView，进入 **Remote Manager**（远程管理器）。点击 **New Remote**（新建远程），选择 **Google Drive**。RcloneView 会打开浏览器进行 OAuth 身份验证 —— 使用你的 Google 账号登录并授予访问权限。授权完成后，该远程将出现在 Remote Manager 中。打开它以确认你的 Drive 文件可见。

如果你需要归档**共享云端硬盘（Shared Drive）**，请将远程配置为指向该特定共享云端硬盘的根目录，而不是"我的云端硬盘"。请在 RcloneView 中检查该远程的高级设置以查看团队云端硬盘选项。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and Internet Archive remotes in RcloneView" class="img-large img-center" />

## 连接 Internet Archive

回到 **Remote Manager**，点击 **New Remote**，选择 **Internet Archive**。Internet Archive 使用邮箱/密码凭据（你的 archive.org 账号登录信息）或从你的 archive.org 账号设置中获取的 S3 兼容 API 密钥。在配置表单中输入 Access Key 和 Secret Key（Internet Archive 的 S3 API 密钥），然后保存。

打开该 Internet Archive 远程以验证连接。你在 archive.org 上已有的项目将作为顶层条目显示出来。

## 配置归档任务

进入 **Jobs**（任务），点击 **New Job**（新建任务）。将 Google Drive 设为源 —— 选择包含你想要保存的数据的特定文件夹。将 Internet Archive 远程设为目标，并指定文件应存放的项目标识符（item identifier）。

在任务向导的第 2 步中，配置适合归档场景的选项：

- 启用**校验和验证（checksum verification）** —— 数据完整性对于保存工作至关重要
- 将同时传输的数量设为适中（2–4 个），以避免给 Internet Archive 的接收管道造成过大压力
- 先启用 **Dry Run**（模拟运行），以准确查看将要上传的内容

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to Internet Archive" class="img-large img-center" />

## 执行保存同步

在 Log 标签页中查看完 Dry Run 的输出结果后，关闭 Dry Run 并运行完整任务。RcloneView 会将文件从 Google Drive 直接传输到 Internet Archive。根据文件大小和 Archive 的接收队列情况，大型上传可能需要一些时间 —— 实时进度面板会持续告知你当前状态。

对于持续性的保存工作流，可以创建一个循环任务（需要 PLUS 许可证才能使用调度功能），这样新添加到 Google Drive 文件夹中的文件就能按计划自动归档 —— 例如每周一次。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Google Drive to Internet Archive transfers" class="img-large img-center" />

## 使用场景

- **学术研究人员**：在项目完成时归档数据集和工作文档
- **记者**：永久保存原始资料和采访录音
- **教育工作者**：归档课程内容和数字化学习资源
- **非营利组织**：保存资助申请、捐赠者记录和机构历史资料

Internet Archive 的永久性使其有别于任何商业云服务 —— 存放在那里的内容旨在超越个别组织或订阅计划的存续期限。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 **Remote Manager** 中通过 OAuth 连接 Google Drive。
3. 使用来自 archive.org 账号设置中的 S3 API 凭据连接 Internet Archive。
4. 创建一个从 Google Drive 到 Internet Archive 的同步任务；先运行 Dry Run，再执行完整归档。

RcloneView 为归档人员和研究人员提供了一套可靠、可审计的工作流程，用于将 Google Drive 内容存入永久记录。

---

**相关指南：**

- [使用 RcloneView 进行云到云迁移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [使用 RcloneView 进行校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
