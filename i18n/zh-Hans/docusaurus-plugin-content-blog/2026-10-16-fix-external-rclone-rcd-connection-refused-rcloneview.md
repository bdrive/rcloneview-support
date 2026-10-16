---
slug: fix-external-rclone-rcd-connection-refused-rcloneview
title: "修复外部 Rclone 连接被拒绝 — 使用 RcloneView 排查 rcd 访问问题"
authors:
  - casey
description: "修复 RcloneView 外部 rclone 连接错误：通过测试连接检查 rclone rcd、端口 5572、凭据、防火墙和 SSL 设置。"
keywords:
  - rclone rcd 连接被拒绝
  - RcloneView 外部 rclone
  - rclone 远程控制无法连接
  - rclone rcd 端口 5572
  - RcloneView 连接管理器
  - rclone rcd 认证失败
  - 修复 rclone rc 连接
  - rclone rcd 防火墙
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cli
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复外部 Rclone 连接被拒绝 — 使用 RcloneView 排查 rcd 访问问题

> 当 RcloneView 无法连接到外部 rclone 服务器时，原因几乎总是以下五种之一，几分钟内即可排查。

RcloneView 自带内置 rclone，但许多用户会通过连接管理器（Connect Manager）连接到运行在 NAS、VPS 或 AWS EC2 实例上的外部 rclone。当连接因“connection refused”、超时或认证错误而失败时，一份简短的检查清单就能找到原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 确认 rclone rcd 确实在运行

RcloneView 通过以 `rclone rcd` 启动的远程控制（Remote Control）API 与外部 rclone 通信。请在服务器上使用明确的凭据和地址启动，例如 `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`。外部 rclone 的默认端口是 5572，而内置实例使用本机的 5582。

一个常见错误是绑定到 `127.0.0.1` 后却从另一台机器连接。回环地址只接受本地流量。对于远程服务器，请绑定到 `0.0.0.0:5572`，并在防火墙中按 IP 限制访问。请注意，RcloneView 是 GUI 工具，不安装在服务器上；服务器上只运行 rclone。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="将 RcloneView 连接到外部 rclone 主机" class="img-large img-center" />

## 检查网络路径和凭据

如果 rcd 正在运行但连接仍被拒绝，请测试网络路径。在运行 RcloneView 的机器上，使用用户名和密码对 `/rc/noop` 执行健康检查，应能返回响应。如果请求挂起，说明防火墙或云安全组阻止了 5572 端口。在 AWS EC2 上，除了受限的 SSH 之外，安全组还需要一条针对 5572 的自定义 TCP 规则。

认证失败是另一回事：在 RcloneView 中输入的用户名和密码必须与 `--rc-user` 和 `--rc-pass` 完全一致，包括大小写。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中输入外部连接信息" class="img-large img-center" />

## 在连接管理器中验证设置

打开 Settings > Connect Manager > New Connection，填写显示名称、`http://<host>:5572` 形式的地址以及凭据。如果服务器使用自签名证书，可通过禁用 SSL 证书验证的选项继续连接。保存前请点击 Test Connection，立即查看结果。

如果仍然失败，请在 Settings > Embedded Rclone 中启用 rclone 日志，将级别设置为 DEBUG，重启后重现问题以获取日志。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中查看日志和历史记录" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView** ： [rcloneview.com](https://rcloneview.com/src/download.html)。
2. 在服务器上使用用户名、密码和可访问的地址启动 `rclone rcd`。
3. 在防火墙或安全组中开放端口。
4. 在连接管理器中添加连接并点击 Test Connection。

连接稳定后，您就可以在桌面端管理远程服务器的云存储。

---

**相关指南：**

- [RcloneView 连接管理器 — 内置与外部](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [修复 SSL/TLS 证书错误](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)
- [修复 SFTP 连接被拒绝和超时](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
