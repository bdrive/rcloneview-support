---
slug: manage-hetzner-storage-box-sync-rcloneview
title: "管理 Hetzner Storage Box——通过 RcloneView 进行同步与备份"
authors:
  - tayson
description: "了解如何安全地将 Hetzner Storage Box 连接到 RcloneView，并通过 SFTP 和 WebDAV 协议在多个云之间同步文件，实现欧洲云备份。"
keywords:
  - Hetzner Storage Box
  - SFTP 备份
  - WebDAV 云同步
  - 欧洲云存储
  - RcloneView
  - 安全文件同步
  - 欧洲云备份
  - Hetzner SFTP
  - 混合云备份
  - 符合 GDPR 的云存储
tags:
  - hetzner
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Hetzner Storage Box——通过 RcloneView 进行同步与备份

> 欧洲云存储与多云灵活性的完美结合。Hetzner Storage Box 提供极具竞争力的价格并符合 GDPR 合规要求——现在可以在 RcloneView 中轻松地与其他云账户一起管理它。

Hetzner Storage Box 是欧洲企业寻求可靠、经济的云备份的可信之选。无论你使用的是 SFTP 还是 WebDAV，RcloneView 都能将你的 Hetzner 账户与整个云生态系统连接起来，让你无需离开控制面板即可完成同步、备份和归档。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 通过 SFTP 连接 Hetzner Storage Box

在 RcloneView 中添加 Hetzner Storage Box 远程非常简单。SFTP 提供具有行业标准加密的直接服务器访问。

1. 打开 RcloneView 并点击 **Add Remote**
2. 从提供商列表中选择 **SFTP**
3. 输入你的 Hetzner 凭据：
   - **Host**：`u[account-id].your-storagebox.de`
   - **Username**：你的 Hetzner 登录名
   - **Password**：你的 Hetzner 密码或 SSH 密钥
4. 将端口设置为 **22**（标准 SFTP）
5. 点击 **Test Connection** 进行验证

![New Remote Setup](/images/en/blog/new-remote.png)

## 将 Hetzner 同步到 AWS S3 或其他云

连接好 Hetzner Storage Box 后，你可以立即创建云到云的同步任务。

**使用场景：**
- **备份到 S3**：将常用文件从 Hetzner 归档到 Amazon S3 Glacier 以实现长期保留
- **多云冗余**：在 Hetzner 和 Backblaze B2 之间镜像数据
- **混合工作流**：将 Hetzner Storage Box 与 Google Drive 同步以供团队访问

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## 实时监控与调度

RcloneView 的任务调度器让你可以按照自己的时间表自动执行 Hetzner 备份。实时监控传输速度、错误率和文件数量。

![Job History and Monitoring](/images/en/howto/rcloneview-basic/job-history.png)

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 [hetzner.com](https://www.hetzner.com/storage/storage-box) 创建 Hetzner Storage Box 账户（如果你还没有的话）。
3. 在 RcloneView 中使用 SFTP 或 WebDAV 凭据添加你的 Hetzner 远程。
4. 创建你的第一个同步或备份任务，目标为另一个云提供商。
5. 根据需要安排定期任务或执行一次性传输。

自信地管理你的欧洲云存储——RcloneView 会处理复杂的部分，让你专注于自己的数据。

---

**相关指南：**

- [管理 SFTP 服务器——通过 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [连接 WebDAV 服务器——通过 RcloneView 进行云同步](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [管理 OVH 云对象存储——通过 RcloneView 进行同步](https://rcloneview.com/support/blog/manage-ovh-cloud-object-storage-sync-rcloneview)

<CloudSupportGrid />
