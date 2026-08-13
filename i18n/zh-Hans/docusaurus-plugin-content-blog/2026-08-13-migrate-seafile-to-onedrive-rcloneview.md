---
slug: migrate-seafile-to-onedrive-rcloneview
title: "将 Seafile 迁移到 OneDrive — 使用 RcloneView 传输文件"
authors:
  - casey
description: "使用 RcloneView 的双栏浏览器和任务向导,将资料库从自托管的 Seafile 服务器迁移到 Microsoft OneDrive,并通过试运行进行验证。"
keywords:
  - Seafile 迁移
  - OneDrive
  - RcloneView
  - 从自托管到云端
  - 云到云传输
  - Seafile 到 OneDrive
  - Microsoft 365 迁移
  - rclone seafile onedrive
tags:
  - RcloneView
  - seafile
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Seafile 迁移到 OneDrive — 使用 RcloneView 传输文件

> 淘汰自托管的 Seafile 服务器转向 Microsoft OneDrive,并不意味着需要手动下载再重新上传 — RcloneView 可以直接连接两者,并在单个任务中将资料库迁移过去。

超出自托管 Seafile 部署规模的团队,通常会转向 OneDrive,以便将文件存储纳入现有的 Microsoft 365 订阅并减轻服务器维护负担。RcloneView 将 Seafile 和 OneDrive 视为同一窗口中的对等远程,因此您可以浏览两者、比较其内容,并执行受控传输,而无需先将资料库导出到本地磁盘。RcloneView 可在一个窗口中挂载和同步 90 多个服务商,并支持 Windows、macOS 和 Linux,因此无论您的 Seafile 服务器位于本地还是私有数据中心,相同的工作流程都同样适用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接您的 Seafile 服务器

打开 **New Remote** 并选择 **Seafile**,然后输入您的服务器 URL、用户名和密码。如果启用了双重身份验证,请在提示时输入一次性令牌。连接后,RcloneView 会在文件浏览器中列出您有权访问的每个资料库(个人和共享的),文件夹树和文件列表与其他远程一致。

加密资料库需要先提供其资料库密码,RcloneView 才能读取内容。在安排完整迁移之前,请先在一个较小的加密资料库上测试访问是否正常,因为缺少密码会显示为空文件夹,而不是明显的错误提示。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Seafile 远程" class="img-large img-center" />

## 添加 Microsoft OneDrive

通过 **New Remote** > **OneDrive** 添加第二个远程。RcloneView 会打开浏览器窗口进行 OAuth 登录 — 使用您的 Microsoft 账户进行身份验证并批准所请求的权限。对于 OneDrive for Business 租户,同样适用相同的 OAuth 流程,标准使用无需单独的应用注册。

在开始传输之前,在 OneDrive 中创建一个目标文件夹,例如 `Seafile Import/`。将迁移的内容隔离存放,便于抽查结果,并避免与 OneDrive 根目录中已有的内容混杂在一起。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中并排打开 Seafile 和 OneDrive 远程" class="img-large img-center" />

## 运行迁移任务

在两个远程都打开的情况下,较小的资料库可以直接拖拽传输 — 在两个不同远程之间拖放会执行复制操作,Seafile 原始内容保持不变。对于完整的服务器迁移,请改用四步式 **Job Wizard**:将 Seafile 资料库设为源,将 OneDrive 文件夹设为目标,然后在第 2 步中配置传输数量和相等性检查器。

在正式传输之前,请始终运行**试运行**。它会列出将要复制的所有文件,而不会移动任何数据,是在提交传输之前发现源文件夹错误或资料库意外庞大的最快方法。预览结果无误后,启动任务并在 Transferring 选项卡中跟踪进度;**Job History** 会永久记录移动的内容和时间。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行 Seafile 到 OneDrive 的迁移任务" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 点击 **New Remote** > **Seafile**,输入您的服务器 URL 和凭据。
3. 点击 **New Remote** > **OneDrive**,完成 OAuth 授权。
4. 运行试运行,然后执行迁移任务并在 Job History 中确认结果。

以这种方式将 Seafile 迁移到 OneDrive,可以让每次传输都有据可查,让您始终清楚知道旧服务器上离开了什么内容,以及它们最终去往何处。

---

**相关指南:**

- [使用 RcloneView 管理 Seafile 云同步与备份](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 OneDrive 云同步与备份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Seafile 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
