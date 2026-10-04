---
slug: migrate-google-drive-to-mega-rcloneview
title: "将 Google Drive 迁移到 Mega — 使用 RcloneView 传输文件"
authors:
  - morgan
description: "使用 RcloneView 将 Google Drive 迁移到 Mega:云到云复制、试运行预览、过滤器和校验都在一个 GUI 中完成,无需手动下载。"
keywords:
  - 迁移 Google Drive 到 Mega
  - Google Drive 到 Mega 传输
  - 将文件移动到 Mega
  - RcloneView
  - 云到云传输
  - Mega 云存储
  - Google Drive 迁移
  - rclone GUI
  - 云迁移工具
tags:
  - RcloneView
  - google-drive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 迁移到 Mega — 使用 RcloneView 传输文件

> 无需手动下载再重新上传,即可将整个 Google Drive 库迁移到 Mega。

从 Google Drive 切换到 Mega 通常意味着导出压缩包、等待下载,然后再次上传。RcloneView 将两个服务都连接为远程,并在双窗格窗口中相互复制,在任何文件移动之前还可以通过试运行预览结果。RcloneView 在一个窗口中挂载并同步 90 多个提供商,支持 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

Google Drive 使用 OAuth:RcloneView 会打开浏览器,您登录后远程会自动创建。Mega 使用电子邮件和密码,直接在“新建远程”对话框中输入。两个远程出现在 Remote Manager 中后,即可在两个资源管理器面板中并排打开。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Google Drive 和 Mega 远程" class="img-large img-center" />

设想一位自由职业者,在 Drive 中分散存放着 300 GB 的项目文件夹。在相邻面板中浏览两个账户,可以在开始前确认源文件夹和目标布局。

## 云之间复制

将文件夹从 Google Drive 面板拖到 Mega 面板。在不同远程之间拖动会执行复制,因此在您决定之前,Drive 中的数据保持不变。对于较大的任务,可在 Job Manager 中创建 Copy 作业,以便监控进度并保存历史记录。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 Google Drive 到 Mega 的云到云传输" class="img-large img-center" />

如果不想在传输中包含 Google Docs 文件,可在过滤步骤中使用预定义的“Google Docs”过滤器将其排除。您还可以限制文件大小或时间,只迁移相关数据。

## 预览并监控作业

先运行试运行。它会列出将被复制的文件,让您在浪费数小时之前发现错误的源文件夹。然后启动作业,在 Transferring 选项卡中查看速度、文件数量和进度。如果长时间运行出现问题,可在 Advanced Settings 中调整并发文件传输数量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中监控传输进度" class="img-large img-center" />

## 验证结果

作业完成后,在 Drive 和 Mega 文件夹上打开 Folder Compare。它会突出显示仅左侧、仅右侧和不同的文件,遗漏的内容可直接在比较视图中复制。Job History 会保存每次运行的状态、时长和大小。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Google Drive 与 Mega 之间的 Folder Compare" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView:** [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 在“新建远程”中添加 Google Drive(OAuth)和 Mega(电子邮件和密码)。
3. 在两个面板中打开两个远程,并对测试文件夹运行试运行。
4. 为整个库创建 Copy 作业,然后使用 Folder Compare 进行验证。

可视化、无需脚本的迁移会让您的 Drive 保持完好,直到您确认 Mega 已包含全部内容。

---

**相关指南:**

- [将 Mega 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-mega-to-google-drive-onedrive-rcloneview)
- [管理 Mega 云存储](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [试运行:传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
