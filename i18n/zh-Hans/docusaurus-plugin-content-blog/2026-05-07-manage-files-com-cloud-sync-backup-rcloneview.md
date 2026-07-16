---
slug: manage-files-com-cloud-sync-backup-rcloneview
title: "管理 Files.com 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "通过 SFTP 或 WebDAV 将 Files.com 连接到 RcloneView，浏览企业文件共享，并运行自动化同步和备份任务以实现安全的文件管理。"
keywords:
  - Files.com RcloneView
  - Files.com SFTP
  - Files.com WebDAV
  - enterprise file management
  - cloud sync Files.com
  - Files.com backup
  - SFTP cloud sync
  - secure file transfer
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Files.com 存储 — 使用 RcloneView 同步和备份文件

> Files.com 是一款功能强大的企业文件管理平台，RcloneView 通过 SFTP 或 WebDAV 连接到它，让你可以通过简洁的桌面 GUI 同步、备份和管理文件。

Files.com 提供企业级的托管文件传输服务，具备大型组织所依赖的合规功能、自动化和访问控制。对于需要将 Files.com 集成到更广泛的多云工作流中的团队——例如将内容同步到云备份、将文件移动到其他存储提供商，或批量管理文件——RcloneView 提供了一个建立在标准 SFTP 和 WebDAV 协议之上的图形界面。无需单独安装 rclone；它已内置于 RcloneView 中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 通过 SFTP 连接 Files.com

SFTP 是将 RcloneView 连接到 Files.com 最可靠的方式。在 RcloneView 中，点击 **New Remote** 并选择 **SFTP**。输入你的 Files.com 主机名（通常为 `<your-subdomain>.files.com`）、用户名，以及密码或 SSH 密钥。Files.com 同时支持这两种身份验证方式——对于自动化工作流，推荐使用 SSH 密钥身份验证，因为它避免了存储密码。

保存后，Files.com SFTP 远程会出现在双栏浏览器中。你可以浏览 Files.com 的文件夹结构，通过拖放上传和下载文件，并直接在 RcloneView 界面中管理你的企业文件共享。所有操作都会显示实时传输进度。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Files.com as an SFTP remote in RcloneView" class="img-large img-center" />

## 通过 WebDAV 连接

Files.com 也支持 WebDAV，如果 SFTP 被防火墙阻止，或者你更喜欢基于 HTTP 的访问方式，这是一个可选方案。在 RcloneView 中，点击 **New Remote** > **WebDAV**，然后输入 Files.com 的 WebDAV URL、用户名和密码。Files.com 的 WebDAV 端点通常位于 `https://<subdomain>.files.com/dav/`。

WebDAV 适用于常规文件浏览和中等规模的传输。对于高吞吐量的批量操作——例如在备份任务中同步数千个文件——SFTP 通常提供更好的性能和更可靠的大文件处理能力。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Files.com to cloud backup storage in RcloneView" class="img-large img-center" />

## 运行同步和备份任务

连接 Files.com 后，你可以使用 **Job Wizard** 创建同步任务。将 Files.com 文件夹设置为源，将云备份目标（例如 Amazon S3、Backblaze B2 或 Google Drive）设置为目的地。这是企业备份中常见的模式：Files.com 作为活跃的文件管理平台，而云对象存储保存归档副本。

在执行任何同步任务之前，先运行**试运行（dry run）**以验证所涉及的文件是否正确。对于合规敏感的文件，RcloneView 的 **Job History** 提供了每次传输的完整审计记录。PLUS 许可证用户可以安排这些备份任务自动运行——例如每晚运行一次——确保 Files.com 数据持续得到备份，无需人工干预。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Files.com backup sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 点击 **New Remote** > **SFTP**，输入你的 Files.com 主机名、用户名以及 SSH 密钥或密码。
3. 在双栏浏览器中浏览你的 Files.com 文件夹结构。
4. 使用 **Job Wizard** 创建从 Files.com 到你选择的云存储的备份同步任务。
5. 使用 PLUS 许可证安排定期备份，实现自动化数据保护。

RcloneView 将 Files.com 的企业文件管理能力与更广泛的云存储生态系统连接起来，为你的所有文件操作提供了一个统一的图形化工具。

---

**相关指南：**

- [管理 Seafile — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [管理 Citrix ShareFile — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修复 SFTP 连接被拒绝和超时错误](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
