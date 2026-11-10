---
slug: global-rclone-flags-settings-rcloneview
title: "全局 Rclone 标志 — 为 RcloneView 中的每个作业应用自定义选项"
authors:
  - alex
description: "通过 RcloneView 的 Global Rclone Flags 在全局应用额外的 rclone 选项,并了解日志、配置密码和二进制路径设置。"
keywords:
  - rclone 全局标志
  - RcloneView 设置
  - rclone 标志 GUI
  - 内置 rclone 设置
  - no-check-certificate
  - rclone 日志级别
  - rclone 配置密码
  - 自定义 rclone 二进制文件
  - RcloneView 高级设置
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 全局 Rclone 标志 — 为 RcloneView 中的每个作业应用自定义选项

> 在设置中一次性指定 rclone 标志,即可应用于整个 RcloneView,无需逐个作业重复设置。

有些环境需要在所有地方添加一个额外的 rclone 选项,例如私有服务器上的自签名证书、自定义日志位置或加密的配置文件。这些选项都位于 Embedded Rclone 设置页面。RcloneView 可在一个窗口中挂载并同步 90 多个提供商,支持 Windows、macOS 和 Linux,这些设置适用于整个内置引擎。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置位置

打开 Settings 选项卡并选择 Embedded Rclone。您会看到 rclone 二进制文件位置、rclone.conf 位置、默认下载和上传文件夹、Stop rclone on App Exit 开关、日志选项、Config Password 字段以及 Global Rclone Flags 输入框。

Embedded Rclone 默认监听 `http://127.0.0.1:5582`,RcloneView 通过 rclone RC API 与其通信。更改这些设置会改变该引擎的启动方式,因此编辑后请重启 Embedded Rclone。

<img src="/support/images/en/blog/new-remote.png" alt="使用内置 rclone 设置的 RcloneView 远程设置" class="img-large img-center" />

## 使用 Global Rclone Flags

Global Rclone Flags 字段接受适用于全局的额外 rclone 标志。文档中的示例是 `--no-check-certificate`,当 WebDAV 或基于 HTTPS 的服务器使用自签名证书时很有用。请谨慎使用:它会禁用证书验证,因此应仅用于受信任的私有服务器,而非公共端点。

调整单个作业时,建议使用作业级的 Advanced Settings(传输数、检查器数、校验和、重试次数)。全局标志只用于确实适用于所有场景的选项。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView 中与全局标志互补的作业设置" class="img-large img-center" />

## 日志与配置保护

勾选 Enable rclone Logging,选择日志文件夹和文件名,并选择级别:DEBUG、INFO、NOTICE 或 ERROR。DEBUG 最为详细,报告问题时支持团队通常会要求提供该级别的日志。点击 Restart Embedded Rclone,重现问题,然后发送日志文件。

如果您的 rclone.conf 已加密,请在此输入 Config Password,以便内置引擎读取您的远程。您还可以让 RcloneView 使用自定义 rclone 二进制文件或配置路径,应用内的 Self Update 可使内置 rclone 保持最新。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中配合 rclone 日志使用的 Job History" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView**:请从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 依次打开 Settings 和 Embedded Rclone,检查当前路径。
3. 将所需标志添加到 Global Rclone Flags,如需记录可启用日志。
4. 重启 Embedded Rclone 并运行一个小型测试作业。

精心挑选的几项全局设置,可让每个作业保持一致,而无需额外点击。

---

**相关指南:**

- [Log Debug:排查传输问题](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [RcloneView 中的 Rclone Self Update](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)
- [修复 SSL/TLS 证书错误](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
