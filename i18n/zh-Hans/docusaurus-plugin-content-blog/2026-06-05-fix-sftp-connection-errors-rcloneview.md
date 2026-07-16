---
slug: fix-sftp-connection-errors-rcloneview
title: "修复 SFTP 连接错误 — 使用 RcloneView 解决 SSH 文件传输问题"
authors:
  - alex
description: "诊断并修复 RcloneView 中常见的 SFTP 连接错误——身份验证失败、主机密钥不匹配和超时问题——让 SSH 传输恢复正常。"
keywords:
  - fix SFTP connection errors RcloneView
  - SFTP SSH file transfer troubleshooting
  - RcloneView SFTP setup guide
  - SFTP authentication failure rclone
  - SSH file transfer errors
  - SFTP host key mismatch fix
  - rclone SFTP troubleshooting
  - resolve SFTP sync errors
  - SFTP remote cloud sync
  - RcloneView troubleshooting tips
tags:
  - RcloneView
  - sftp
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 SFTP 连接错误 — 使用 RcloneView 解决 SSH 文件传输问题

> RcloneView 中的 SFTP 错误几乎总能追溯到几个根本原因——身份验证配置错误、防火墙规则或主机密钥验证失败——而每一种都有明确的解决方法。

SFTP（SSH 文件传输协议，端口 22）是在本地设备与服务器之间传输文件的常见方式：网络主机、本地 NAS 设备和云虚拟机通常都会开放 SFTP 接口。当 RcloneView 无法连接到 SFTP 远程时，日志（Log）选项卡中的错误消息会指向问题原因，但可能的问题范围——错误的凭据、被阻止的端口、不匹配的主机密钥、受限路径——会让诊断变得像是猜谜。本指南将系统地介绍最常见的 SFTP 错误及其解决方法。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 正确设置 SFTP 远程

大多数连接错误始于远程设置阶段。在 RcloneView 中，打开**远程选项卡 > 新建远程**，然后从提供商列表中选择 **SFTP**。所需字段包括**主机**（纯主机名或 IP 地址——不要加 `sftp://`）、**端口**（默认为 22）、**用户名**，以及**身份验证**方式，可以是密码或 SSH 私钥文件路径。

一个常见的错误是在“主机”字段中输入 `sftp://hostname`。RcloneView（通过 rclone）只需要纯主机名或 IP，`sftp://` 前缀会导致连接立即被拒绝。如果你的服务器使用基于密钥的身份验证，请确保私钥文件路径指向本地机器上正确的文件。在 Linux 和 macOS 上，密钥文件的权限必须为 `600` 或更严格——SSH 客户端会拒绝使用任何人可读的密钥。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new SFTP remote in RcloneView" class="img-large img-center" />

## 诊断身份验证失败

身份验证失败会在 RcloneView 的**日志（Log）选项卡**中显示类似 `ssh: handshake failed` 或 `Permission denied (publickey,password)` 的消息。请按以下顺序逐项检查：

1. **验证用户名** — 先用终端 SSH 客户端连接一次，确认准确的账户名。RcloneView 使用相同的凭据，且区分大小写。
2. **检查是密钥还是密码模式** — 如果服务器强制要求基于密钥登录，在 RcloneView 中输入密码将会失败。此时应将密码字段留空，改为提供私钥路径。
3. **启用 DEBUG 日志** — 前往设置 > 内嵌 Rclone > 启用 rclone 日志记录，将级别设置为 DEBUG，然后重现该故障。日志文件会记录完整的 SSH 握手过程，并精确定位被拒绝的具体步骤。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView transfer view for an active SFTP sync job" class="img-large img-center" />

## 解决主机密钥不匹配错误

rclone 第一次连接到 SFTP 服务器时，会记录该服务器的主机密钥。如果该密钥之后发生变化——例如因为服务器重建、操作系统重装或证书轮换——rclone 会报出 `host key mismatch` 错误，并拒绝连接以防止中间人攻击。要解决此问题，请打开 RcloneView 中的 **Rclone 终端**选项卡，运行：

```
rclone config show <remote-name>
```

在输出中找到显示的 `known_hosts_file` 路径，在文本编辑器中打开该文件，并删除受影响主机的过期条目。下一次连接尝试时会提示你信任新密钥，并将其干净地存储起来。

## 修复防火墙和超时问题

如果连接尝试没有报错却一直挂起——或者出现 `dial tcp: connection timed out`——问题很可能是服务器或客户端网络上的防火墙阻止了端口 22。可以使用终端选项卡，通过 `rclone about <remote-name>:` 测试 rclone 是否能够连接到服务器，并将结果与直接的终端 SSH 连接进行比较。如果 SSH 客户端连接成功而 rclone 却超时，请检查你的机器或公司网络是否对非浏览器连接应用了出站防火墙规则。对于阻止出站端口 22 的网络，可请求服务器管理员在备用端口上开放 SFTP——常见的变通做法是使用端口 443——然后相应地更新 RcloneView 远程设置中的端口字段。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP sync job in the RcloneView Job Manager" class="img-large img-center" />

## 传输失败后查看任务历史

连接稳定后，查看**任务历史（Job History）**视图，确认之前失败的运行没有在目标端留下不完整的文件。RcloneView 会记录每个任务的状态、传输数量、速度和错误代码。快速浏览即可发现需要重新运行的未完成同步任务，而“模拟运行（Dry Run）”选项可以让你在提交操作之前，预览具体会复制或删除哪些文件。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing SFTP sync results in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开**远程选项卡 > 新建远程 > SFTP**，输入纯主机名（不加 `sftp://` 前缀）、端口、用户名和身份验证凭据。
3. 在设置中启用 DEBUG 日志，以便在出现错误时捕获完整的 SSH 握手过程。
4. 每次传输失败后检查**任务历史**，找出需要重新运行的未完成同步任务。

只要拥有正确的凭据，并能清晰查看 rclone 的日志输出，大多数 SFTP 错误都能很快解决——而 RcloneView 让验证结果、恢复高效文件传输变得简单直接。

---

**相关指南：**

- [使用 RcloneView 管理 FTP 服务器文件 — 云同步与备份](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 SFTP 和 SMB 挂载为本地驱动器](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [使用 RcloneView 排查 Rclone 错误](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
