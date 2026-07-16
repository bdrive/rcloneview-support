---
slug: migrate-icloud-drive-to-backblaze-b2-rcloneview
title: "将 iCloud Drive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - casey
description: "使用 RcloneView 将文件从 iCloud Drive 传输到 Backblaze B2。逐步指南，教您如何将 Apple 云存储备份到经济实惠、不依赖特定厂商的对象存储。"
keywords:
  - iCloud Drive to Backblaze B2
  - migrate iCloud Drive Backblaze B2
  - iCloud backup Backblaze B2
  - transfer iCloud files to B2
  - iCloud Drive cloud migration RcloneView
  - RcloneView iCloud Backblaze B2
  - cloud to cloud transfer iCloud
  - Backblaze B2 iCloud backup tool
tags:
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 iCloud Drive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> Apple 的 iCloud Drive 便于设备间同步，但将文件复制到 Backblaze B2 可以创建一份经济高效、不依赖特定厂商的备份，而 RcloneView 让这一切完全通过图形界面完成。

数百万用户通过 Apple 生态系统将照片、文档和项目存档保存在 iCloud Drive 中。虽然 iCloud 在 Apple 设备之间可以无缝协作,但组织和高级用户往往需要在耐用的对象存储中保留一份副本 —— 用于分散厂商风险、延长保留期限,或实现平台无关的备份策略。Backblaze B2 是一种兼容 S3 的对象存储服务,能与 RcloneView 自然集成,让您无需手动下载、编写脚本或使用第三方同步客户端,即可从 iCloud Drive 传输内容。使用 FREE 许可证即可连接 Backblaze B2 并获得完整的读写权限。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 iCloud Drive

RcloneView 通过 rclone 的 iCloud 后端支持 iCloud Drive,该功能需要 rclone v1.69 或更高版本 —— RcloneView 自带的内置 rclone 二进制文件已满足此要求,因此无需单独安装。要进行连接,请打开 **远程** 选项卡,点击 **新建远程**,然后从提供商列表中选择 iCloud Drive。您需要使用 Apple ID 凭据进行身份验证;如果您的账户启用了双重身份验证,则需要在提示时输入验证码。保存后,您的 iCloud 文件夹会出现在浏览面板中,就像在 Mac 上一样。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

浏览您的 iCloud Drive 结构 —— 桌面、文档或任何自定义文件夹 —— 在构建传输任务之前确认内容范围。

## 将 Backblaze B2 连接为目标位置

Backblaze B2 通过凭据输入进行连接。在 **新建远程** 中,选择 Backblaze B2,然后输入您的 **Application Key ID** 和 **Application Key** —— 两者均可在您的 Backblaze 账户中的 App Keys 部分生成。保存后,您可以在 RcloneView 的第二个浏览面板中浏览您的 B2 存储桶。将 iCloud Drive 和 Backblaze B2 并排打开,您可以在移动任何文件之前清楚地看到源和目标位置。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and Backblaze B2 open side by side in RcloneView" class="img-large img-center" />

## 运行迁移传输

从主页选项卡打开 **同步** 向导。将您的 iCloud Drive 文件夹设置为源,将 Backblaze B2 存储桶(或其中的某个前缀)设置为目标。在高级设置步骤中,启用 **校验和验证** 以比较文件哈希值而不仅仅是时间戳 —— 这对于数据完整性至关重要的一次性迁移尤为有价值。您还可以添加 **最大文件年龄** 过滤器,如果希望在第一轮传输中排除较旧、不常访问的文件,可仅迁移最近的内容。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring during an iCloud to Backblaze B2 migration in RcloneView" class="img-large img-center" />

在进行正式传输之前,请始终先运行一次 **模拟运行**。RcloneView 会准确列出将要复制或跳过的文件 —— 在迁移大型 iCloud Drive 资料库时,这是一项实用的安全检查,可以避免意外覆盖或遗漏文件夹所带来的难以挽回的损失。

## 使用文件夹对比验证迁移结果

传输完成后,使用 RcloneView 的 **文件夹对比** 功能确认两端内容一致。打开对比视图,将 iCloud Drive 设置在左侧,将您的 B2 存储桶设置在右侧,让 RcloneView 标示出任何仅存在于左侧、仅存在于右侧或大小不匹配的文件。一次干净的对比结果 —— 仅显示相同文件 —— 即可确认您的迁移已成功完成,没有遗漏。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying iCloud Drive files match Backblaze B2 after migration" class="img-large img-center" />

若需持续保护,**PLUS 许可证** 让您可以安排定期同步任务 —— 每周或每天 —— 以捕获任何新增的 iCloud Drive 内容,自动保持您的 B2 副本处于最新状态。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用您的 Apple ID 凭据将 iCloud Drive 添加为新的远程。
3. 使用您的 Application Key ID 和 Application Key 将 Backblaze B2 添加为远程。
4. 构建一个同步任务:以 iCloud Drive 为源,以 B2 存储桶为目标,然后先运行一次 **模拟运行**。
5. 使用 **文件夹对比** 验证迁移结果,然后根据需要安排定期备份。

使用 RcloneView 将 iCloud Drive 迁移到 Backblaze B2,可以为您的 Apple 文件在对象存储中提供一个持久、独立于平台的存放位置 —— 受到保护、可验证,并可从任何设备访问。

---

**相关指南:**

- [使用 RcloneView 管理 iCloud Drive](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [使用 RcloneView 管理 Backblaze B2](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 iCloud Drive 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
