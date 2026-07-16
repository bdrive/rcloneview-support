---
slug: sync-onedrive-to-hetzner-storage-box-rcloneview
title: "将 OneDrive 同步到 Hetzner Storage Box —— 使用 RcloneView 进行云备份"
authors:
  - jay
description: "使用 RcloneView 将 OneDrive 同步到 Hetzner Storage Box。设置 SFTP 备份、安排自动化同步任务，并通过欧洲存储保护您的 Microsoft 文件。"
keywords:
  - sync OneDrive to Hetzner Storage Box
  - Microsoft OneDrive Hetzner backup
  - RcloneView OneDrive Hetzner
  - Hetzner Storage Box SFTP backup
  - cloud storage to Hetzner sync
  - OneDrive backup Europe GDPR
  - cloud file sync automation
  - Hetzner cloud backup tool
  - OneDrive off-site backup
tags:
  - onedrive
  - hetzner
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OneDrive 同步到 Hetzner Storage Box —— 使用 RcloneView 进行云备份

> 使用 RcloneView 将 OneDrive 文件同步到 Hetzner Storage Box，创建独立的异地备份——无需编写任何脚本。

Hetzner Storage Box 是一款高性价比、托管于欧洲的 SFTP 存储方案，深受希望在各大云服务商之外获得可靠、注重隐私的备份存储的开发者和 IT 团队青睐。使用 RcloneView 将 Microsoft OneDrive 内容同步到 Hetzner Storage Box，可以创建一份完全独立于 Microsoft 生态系统之外的异地副本——适用于灾难恢复、注重 GDPR 合规的数据驻留需求，或防范账户被意外暂停的风险。整个工作流程都可以通过 RcloneView 的可视化界面进行配置，无需编写任何 rclone 命令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 OneDrive 和 Hetzner Storage Box 配置为远程

在开始同步之前，您需要先在 RcloneView 中将两个服务都注册为远程。OneDrive 使用 OAuth 浏览器身份验证——点击 **Remote** 选项卡 → **New Remote** → **OneDrive**，RcloneView 会打开您的浏览器，让您一键登录 Microsoft 账户。无需手动管理 API 密钥或客户端凭据。个人 OneDrive 账户和 Microsoft 365 商业版 OneDrive 均可通过该流程完成配置。

Hetzner Storage Box 通过 SFTP 连接。在 New Remote 对话框中选择 **SFTP**，然后输入您的 Storage Box 主机名（格式为 `u{number}.your-storagebox.de`）、用户名，以及密码或 SSH 私钥路径。Hetzner 同时支持密码和基于密钥的身份验证——管理多个备份目标的团队通常更倾向于使用 SSH 密钥，以便在无人值守的自动化场景中避免存储明文密码。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

当两个远程都出现在 RcloneView 的浏览器选项卡中后，请分别浏览两侧以确认连接正常，然后再创建同步任务。

## 创建 OneDrive 到 Hetzner 的同步任务

两个远程准备就绪后，从 Home 选项卡打开 **Job Manager**，点击 **Add Job**。在 4 步向导中，设置您的 OneDrive 源文件夹——可以是整个 OneDrive 根目录，也可以是特定子文件夹，例如 `Documents/Contracts`，或某个共享的 Teams 文件夹。将 Hetzner Storage Box 路径设置为目标。

在 Advanced Settings 步骤中，根据您的连接速度配置并发传输数，并为关键数据启用校验和验证。例如，一家将 30GB 案件文件备份到 Hetzner 的律师事务所，可以依赖校验和模式来验证每份文档都完整送达——从而捕获传输过程中可能出现的任何损坏。Filtering 步骤可让您排除临时的 Office 锁定文件（`.tmp`、`.lock`），或将任务限制为特定文档类型，例如 PDF 和电子表格。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Hetzner Storage Box sync job configuration in RcloneView" class="img-large img-center" />

先运行一次模拟演练（dry-run）——RcloneView 会准确显示哪些文件将被复制或删除，而不会实际执行任何更改。确认预览结果无误后，即可执行该任务。底部的 **Transferring** 选项卡会在整个运行过程中显示实时传输进度、传输速度和文件数量。

## 安排和监控自动化备份

使用 RcloneView PLUS 许可证，您可以按 crontab 计划自动执行 OneDrive 到 Hetzner 的备份。将每日同步设置为凌晨 03:00，即可确保每晚都能自动将 OneDrive 文件备份到 Hetzner，无需人工干预。向导中的计划模拟器会预览下一次执行时间，方便您在保存任务前确认设置是否符合预期。

任务历史记录会保留完整的审计日志——每次运行都会记录开始时间、持续时长、传输速度、文件数量和结果。如果备份因暂时性网络问题而失败，RcloneView 可配置的重试逻辑会自动再次尝试执行该任务。借助任务完成通知功能（PLUS 版本提供），您的团队可以在下一个工作日开始前收到任何失败提醒——确保不会有备份窗口被悄然忽略。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling daily OneDrive to Hetzner Storage Box sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 Remote 选项卡 → **New Remote** → OneDrive，将 **OneDrive** 添加为 OAuth 远程。
3. 使用您的主机名和凭据，将 **Hetzner Storage Box** 添加为 SFTP 远程。
4. 在 **Job Manager** 中创建同步任务，将 OneDrive 设为源，将您的 Hetzner 路径设为目标。

将 OneDrive 备份到 Hetzner Storage Box，能为您提供一个低成本、托管于欧洲、可自动运行的安全保障——即使云服务出现意外中断，也能确保您的 Microsoft 文件受到保护。

---

**相关指南：**

- [使用 RcloneView 管理 Hetzner Storage Box 同步](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [管理 OneDrive 存储 —— 使用 RcloneView 进行同步和备份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Dropbox 同步到 Hetzner Storage Box](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)

<CloudSupportGrid />
