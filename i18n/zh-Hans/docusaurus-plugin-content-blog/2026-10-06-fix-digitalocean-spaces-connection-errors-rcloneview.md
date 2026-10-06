---
slug: fix-digitalocean-spaces-connection-errors-rcloneview
title: "修复 DigitalOcean Spaces 连接错误 — 使用 RcloneView 排查端点与密钥问题"
authors:
  - jay
description: "在 RcloneView 中检查端点、区域和密钥，修复访问被拒绝、签名不匹配等 DigitalOcean Spaces 连接错误。"
keywords:
  - 修复 DigitalOcean Spaces 连接错误
  - DigitalOcean Spaces 访问被拒绝
  - Spaces SignatureDoesNotMatch
  - DigitalOcean Spaces 端点 区域
  - S3 兼容存储故障排查
  - rclone DigitalOcean Spaces
  - RcloneView DigitalOcean Spaces
  - Spaces 访问密钥
tags:
  - RcloneView
  - troubleshooting
  - tips
  - digitalocean-spaces
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 DigitalOcean Spaces 连接错误 — 使用 RcloneView 排查端点与密钥问题

> 大多数 DigitalOcean Spaces 连接失败都可归结为三项设置：端点、区域和访问密钥。

您添加了 Spaces 远程，但存储桶列表为空，或者每个请求都返回访问被拒绝或签名错误。由于 Spaces 是 S3 兼容服务，原因通常是远程配置中的细微不匹配。RcloneView 让您可以检查并修正远程，然后在同一窗口中重新测试。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先检查端点和区域

Spaces 端点因区域而异，格式为 `<region>.digitaloceanspaces.com`，例如 `nyc3.digitaloceanspaces.com`。如果端点所在区域与创建 Space 的区域不同，即使密钥正确，请求也会失败。从 Remote 标签页打开 Remote Manager，编辑该远程，并将端点与 DigitalOcean 控制面板中显示的区域进行比对。

请使用仅含区域的基础端点，而不是包含存储桶名称的 Space 专用 URL。在端点中加入存储桶名称是出现奇怪的“bucket not found”结果的常见原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中编辑 S3 兼容远程的端点" class="img-large img-center" />

## 核实访问密钥和密文

Spaces 使用自己的访问密钥对，与您的 DigitalOcean API 令牌是分开的。把 API 令牌粘贴到密钥字段是常见错误。如果不确定，请重新生成 Spaces 密钥对，然后重新粘贴这两个值，并注意复制时可能混入的首尾空格。

如果能够列出内容但上传失败，则该密钥可能没有对该 Space 的写入权限。请创建具有相应权限的密钥并更新远程。

## 使用内置终端测试

RcloneView 在底部 Info View 中包含 Terminal 标签页。运行 `rclone listremotes` 确认远程存在，然后运行 `rclone about "myspaces:"` 或简单的列表命令来查看原始错误文本。确切的错误信息可以告诉您问题出在认证、端点还是网络。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="显示传输出错的 RcloneView 作业历史" class="img-large img-center" />

请检查 Log 标签页和 Job History 中反复出现的失败。如果错误仅出现在大文件传输中，可在作业的 Advanced Settings 中降低文件传输数量以减轻负载。

## 排除网络和时间问题

签名错误也可能由系统时钟偏差过大引起，因为签名请求依赖当前时间。请校正时钟后重试。检查 TLS 的企业代理和防火墙也可能中断连接，因此如果密钥和端点看起来没问题，请换一个网络测试。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中向 DigitalOcean Spaces 运行传输" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 Remote Manager，编辑您的 Spaces 远程，并确认区域端点。
3. 重新输入 Spaces 访问密钥和密文。
4. 先用一个小文件夹复制进行测试，然后重新运行完整作业。

正确配置的端点和密钥对，可以把含糊的故障变成可靠、可重复的工作流程。

---

**相关指南：**

- [管理 DigitalOcean Spaces — 使用 RcloneView 同步与备份](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修复 S3 访问被拒绝的权限错误](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [使用 RcloneView 修复 SSL/TLS 证书错误](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
