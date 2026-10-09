---
slug: cloud-storage-physical-therapy-clinics-rcloneview
title: "物理治疗诊所的云存储 — 使用 RcloneView 进行有条理的加密备份"
authors:
  - robin
description: "物理治疗诊所如何使用 RcloneView 将运动视频、登记表和影像文件备份到加密的云存储。"
keywords:
  - 物理治疗诊所云存储
  - 物理治疗文件备份
  - 诊所云备份
  - 加密云备份
  - 运动视频存储
  - 定时云同步
  - 多云备份
  - RcloneView
  - rclone GUI
  - Crypt 远程
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 物理治疗诊所的云存储 — 使用 RcloneView 进行有条理的加密备份

> 无需编写任何命令，即可将患者资料、运动视频和导出的影像文件备份到多个云。

物理治疗诊所产生的文件比大多数经营者预想的要多：扫描的登记表、转诊信、居家运动视频、步态分析录像以及导出的影像文件。这些文件往往只在前台电脑或小型 NAS 上保存一份，也没有经过测试的恢复流程。RcloneView 为诊所员工提供桌面 GUI，用来将数据复制到云存储、进行加密，并确认数据已成功到达。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接诊所已在使用的存储

大多数诊所已有 Microsoft 365 或 Google Workspace 账户，许多还有本地 NAS。在 RcloneView 中打开 Remote 选项卡，然后点击 **New Remote**。OneDrive 和 Google Drive 通过浏览器登录。Wasabi、Cloudflare R2 或 Backblaze B2 等 S3 兼容存储使用访问密钥。SFTP、WebDAV 和 SMB 可用于连接院内服务器，Synology NAS 可以被自动检测。

RcloneView 可在一个窗口中管理 90 多种云服务，支持 Windows、macOS 和 Linux，因此前台的 Windows 电脑与负责人的 MacBook 可以使用相同的工作流程。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中为诊所添加云存储远程" class="img-large img-center" />

## 使用 Crypt 远程加密与患者相关的文件

登记表和治疗记录不应以明文形式存放在第三方存储桶中。RcloneView 可以创建 **Crypt** 虚拟远程，在上传前对文件名、文件夹名和内容进行加密。将 Crypt 远程指向备份服务商上的某个文件夹，然后把文件复制到 Crypt 远程，而不是原始存储桶。

请将 Crypt 密码保存在与数据分开的安全位置。仅靠 RcloneView 并不能使诊所合规；在迁移患者信息之前，请核实所在地区的隐私法规以及存储服务商的协议。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中将诊所文件复制到加密的云目标" class="img-large img-center" />

## 先预览，再备份

假设某诊所的共享电脑上有 300 GB 的运动示范视频和扫描记录。创建一个从该文件夹到 Crypt 远程的同步任务，然后运行 **Dry Run** 列出将被复制或删除的内容。首次运行使用复制（copy）语义可以保持源数据不变。S3、Azure 和 Backblaze B2 在 FREE 许可证下即可完整读写，因此备份目标无需额外的软件费用。

在第 1 步中添加第二个目标后，同一个源会通过 1:N 同步镜像到两个云，该功能同样适用于 FREE。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行诊所备份任务" class="img-large img-center" />

## 安排夜间任务并查看历史记录

使用 PLUS 许可证时，同步向导的第 4 步支持 crontab 风格的计划，例如在最后一位患者就诊结束后的工作日 22:00 运行。应用必须保持运行，计划任务才会触发，因此请让电脑保持开机，并将 RcloneView 最小化到系统托盘。

Job History 会记录每次运行的状态、耗时、大小和文件数量，当你需要确认上周二的备份是否完成时，它可以作为审计依据。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排夜间诊所备份" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote 选项卡中添加主存储和备份目标。
3. 针对敏感文件夹，在备份目标上创建 Crypt 远程。
4. 运行 Dry Run，启动任务，并通过 Job History 确认结果。

一份经过测试的加密副本，能让诊所在磁盘故障或勒索软件事件之后仍有恢复的途径。

---

**相关指南：**

- [医疗行业云存储 — 使用 RcloneView 进行安全备份](https://rcloneview.com/support/blog/cloud-storage-healthcare-rcloneview)
- [医疗行业 HIPAA 合规的云存储 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)
- [使用 Crypt 远程加密云备份 — RcloneView 指南](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
