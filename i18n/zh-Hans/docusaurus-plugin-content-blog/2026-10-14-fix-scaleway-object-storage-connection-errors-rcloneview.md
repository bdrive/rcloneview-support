---
slug: fix-scaleway-object-storage-connection-errors-rcloneview
title: "修复 Scaleway Object Storage 连接错误 — 使用 RcloneView 解决"
authors:
  - steve
description: "在 RcloneView 中排查 Scaleway Object Storage 连接错误：修复 S3 兼容远程的区域、端点和访问密钥不匹配问题。"
keywords:
  - scaleway object storage 错误
  - 修复 scaleway 连接
  - RcloneView scaleway
  - S3 兼容故障排除
  - scaleway 端点 区域
  - scaleway 存储桶访问被拒绝
  - scaleway 访问密钥
  - rclone scaleway 远程
tags:
  - RcloneView
  - troubleshooting
  - tips
  - object-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Scaleway Object Storage 连接错误 — 使用 RcloneView 解决

> 大多数 Scaleway 连接故障都源于区域、端点或密钥不匹配 — 下面介绍如何在 RcloneView 中找到并修复它。

Scaleway Object Storage 通过 S3 兼容协议访问，因此远程需要匹配的 Access Key、Secret Key、区域和端点。只要其中任何一项与存储桶实际所在位置不一致，就会出现看起来像网络问题的访问被拒绝或找不到存储桶的错误。RcloneView 会在日志中显示这些错误，并允许您重建远程而不会丢失同步作业。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先检查区域和端点

Scaleway 存储桶绑定到某个区域，端点必须属于同一区域。如果团队在一个区域创建了存储桶，却把远程配置为另一个区域，即使密钥有效也会出现类似身份验证的失败。请逐个字符对比 Scaleway 控制台中显示的区域与远程设置中的区域和端点。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中配置 Scaleway S3 兼容远程" class="img-large img-center" />

## 验证凭据和权限

接下来确认 Access Key 和 Secret Key。如果之前正常的作业突然失败，常见原因是密钥被重新生成或删除。同时请检查密钥的权限是否覆盖您要访问的存储桶和项目；即使密钥有效，没有该存储桶的访问权限仍会返回访问被拒绝。打开 Remote Manager，编辑该远程并粘贴新的值。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="修复凭据后在 RcloneView 中浏览 Scaleway 存储桶" class="img-large img-center" />

## 测试，然后恢复作业

编辑远程后，打开 Rclone Terminal 并列出存储桶以确认连接正常。然后对同步作业运行 Dry Run，在恢复实际传输之前确认它能看到预期的文件。如果问题仍然存在，请在设置中将 rclone 日志级别设为 DEBUG，重启内置 rclone，重现错误并查看日志。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中查看 Scaleway 作业历史" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView**：请从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 打开 Remote Manager 并编辑您的 Scaleway 远程。
3. 使区域和端点与存储桶一致，并重新输入密钥。
4. 列出存储桶，运行 Dry Run，然后恢复您的作业。

区域、端点和密钥一致的远程，在您的工作流程中与任何其他 S3 兼容存储的表现相同。

---

**相关指南：**

- [管理 Scaleway Object Storage — 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [修复 Linode Object Storage 连接错误 — 使用 RcloneView 解决](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)
- [将 IBM COS 迁移到 Scaleway — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-ibm-cos-to-scaleway-rcloneview)

<CloudSupportGrid />
