---
slug: migrate-icloud-drive-to-google-drive-rcloneview
title: "将 iCloud Drive 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - jay
description: "使用 RcloneView 将 iCloud Drive 迁移到 Google Drive——一份分步指南，教您如何在无需手动下载的情况下将 Apple 云文件传输到 Google。"
keywords:
  - iCloud Drive to Google Drive
  - migrate iCloud Drive to Google Drive
  - iCloud Drive migration
  - transfer iCloud files to Google Drive
  - RcloneView iCloud Drive
  - cloud migration tool
  - move files from iCloud to Google Drive
  - cross-cloud file transfer
  - iCloud Drive sync RcloneView
tags:
  - cloud-to-cloud
  - migration
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 iCloud Drive 迁移到 Google Drive — 使用 RcloneView 传输文件

> 无需先下载全部内容，即可将整个 iCloud Drive 资料库迁移到 Google Drive——RcloneView 可直接在两项服务之间完成传输。

从以 Apple 为中心的工作流程切换到 Google Workspace——或者只是希望文件能在所有平台上访问——通常意味着需要将 iCloud Drive 迁移到 Google Drive。手动下载再重新上传数 GB 的数据既浪费时间，又存在传输不完整的风险。RcloneView 直接连接到这两项服务，在云端之间移动文件，整个过程中原始文件始终保持完整。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 iCloud Drive 迁移到 Google Drive

iCloud Drive 与 Apple 生态系统紧密集成，但在 macOS 和 iOS 之外，使用体验会变得分散。Google Drive 可在所有主流平台上原生运行，并能连接到跨平台团队每天都要用到的 Google Workspace 工具。例如，一家拥有 300GB 项目文件的设计工作室，在为只使用 Google Docs 和 Slides 的客户提供服务时，可能需要将所有内容都放到 Google Drive 中。

iCloud Drive 会静默地将“桌面”“文稿”等文件夹同步到 Apple 的服务器——这意味着多年积累的文件往往缺乏清晰的清单。迁移到 Google Drive 可为您带来集中化的可视性、精细的共享控制，以及无需 Apple 账户即可从任意设备访问的能力。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and Google Drive as remotes in RcloneView" class="img-large img-center" />

## 在 RcloneView 中设置 iCloud Drive

RcloneView 内置的 rclone 二进制文件（v1.69.1+）满足 iCloud Drive 支持所需的 rclone v1.69 最低版本要求，无需单独安装。

要添加 iCloud Drive，请打开 **Remote** 标签页并点击 **New Remote**。从提供商列表中选择 iCloud Drive，然后输入您的 Apple ID 邮箱地址和密码。如果您的 Apple 账户启用了双重认证，请在 Apple ID 安全设置中生成一个应用专用密码，并用它代替常规密码。保存后，您的 iCloud Drive 文件夹会立即出现在文件浏览面板中——桌面、文稿以及其他任何已同步的目录均可浏览。

## 连接 Google Drive

Google Drive 使用 OAuth 身份验证。在 RcloneView 中，添加一个新的远程并选择 Google Drive——系统会自动打开一个浏览器窗口，供您登录 Google 账户并授予访问权限。无需 API 密钥或开发者凭据。连接会在几秒钟内完成，您的 Drive 文件夹会出现在 iCloud Drive 旁边的第二个面板中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from iCloud Drive to Google Drive in RcloneView" class="img-large img-center" />

## 执行迁移

配置好两个远程后，打开 **Job Manager** 并创建一个 **Copy** 任务。设置您的 iCloud Drive 源文件夹，选择目标 Google Drive 文件夹作为目的地，并为任务命名。复制模式只会传输目标位置尚不存在的文件，不会触碰原始文件——您的 iCloud Drive 内容将保持不变。

在正式开始完整传输之前，请从任务选项中运行 **Dry Run**。RcloneView 会显示每一个将被复制的文件——名称、路径、大小——而不会移动任何一个字节。当 iCloud Drive 中包含多年混杂的内容、您希望在开始前确认传输范围时，这项预览功能尤其有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud migration job in RcloneView" class="img-large img-center" />

确认无误后，执行任务，并在界面底部的 **Transferring** 标签页中查看进度。速度、文件数量和完成百分比会实时更新。对于大型资料库，可在任务的高级设置中启用校验和验证，以确认每个文件都完整无损地到达目的地。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **Remote** 标签页，点击 **New Remote**，使用您的 Apple ID 凭据添加 iCloud Drive。
3. 通过 OAuth 浏览器登录，添加 Google Drive 作为第二个远程。
4. 创建一个 Copy 任务，以 iCloud Drive 文件夹为源，Google Drive 文件夹为目的地。
5. 运行 Dry Run 预览传输内容，然后执行任务并在 Transferring 标签页中监控进度。

在两项服务并排连接的情况下，将整个 iCloud Drive 迁移到 Google Drive 只需配置一个任务并让它运行即可。

---

**相关指南：**

- [管理 iCloud Drive — 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [使用 RcloneView 将 Dropbox 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [使用 RcloneView 将 Google Drive 迁移到 pCloud](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)

<CloudSupportGrid />
