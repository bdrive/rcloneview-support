---
slug: fix-sftp-connection-refused-timeout-rcloneview
title: "修复 RcloneView 中的 SFTP 连接被拒绝和超时错误"
authors:
  - tayson
description: "解决 RcloneView 中的 SFTP 连接被拒绝、超时和身份验证错误。涵盖防火墙规则、SSH 密钥、端口配置和超时调优。"
keywords:
  - sftp connection refused rclone
  - sftp timeout error rcloneview
  - fix sftp connection rclone
  - rclone sftp ssh key error
  - sftp firewall blocked
  - sftp port configuration rclone
  - rcloneview sftp setup
  - ssh connection timeout fix
  - sftp authentication failed rclone
  - rclone sftp troubleshoot
tags:
  - troubleshooting
  - sftp
  - tips
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 RcloneView 中的 SFTP 连接被拒绝和超时错误

> RcloneView 中的 SFTP 错误几乎总是可以追溯到网络配置、身份验证设置或服务器端设置。本指南将逐一介绍每种常见原因及其解决方法。

SFTP（SSH 文件传输协议）是 rclone 中使用最广泛的远程类型之一，可将 RcloneView 连接到任何具有 SSH 访问权限的服务器——NAS 设备、Linux 服务器、共享主机和自托管基础设施。与云服务商 API 不同，SFTP 依赖于网络可达性、防火墙规则和 SSH 配置，因此故障点更多。以下是诊断和解决最常见 SFTP 问题的方法。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常见 SFTP 错误信息

| 错误信息 | 可能原因 |
|--------------|-------------|
| `connection refused` | SSH 服务未运行、端口错误或防火墙阻断 |
| `connection timed out` | 防火墙丢弃数据包、服务器不可达或网络问题 |
| `ssh: handshake failed` | SSH 密钥不匹配、算法不兼容或服务器端配置问题 |
| `permission denied (publickey)` | 密钥文件错误、密钥未在服务器上授权或密码短语问题 |
| `permission denied (password)` | 密码错误或服务器已禁用密码验证 |
| `no supported methods remain` | 服务器要求的身份验证方式未在 rclone 中配置 |
| `ssh: unable to authenticate` | 未提供凭据或凭据被拒绝 |
| `too many authentication failures` | SSH 代理在正确的密钥之前尝试了太多密钥 |

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="View SFTP error details in RcloneView job history" class="img-large img-center" />

## 修复方法 1：连接被拒绝

“connection refused”错误表示 TCP 连接被主动拒绝。服务器的网络栈是可达的，但目标端口上没有任何进程在监听。

### 检查 SSH 是否正在运行

在远程服务器上运行 `sudo systemctl status sshd`。如果 SSH 未运行，使用 `sudo systemctl start sshd && sudo systemctl enable sshd` 启动它。

### 验证端口

默认 SSH 端口是 22，但许多服务器使用自定义端口。可以通过 `grep -i "^Port" /etc/ssh/sshd_config` 检查。在 RcloneView 中，确保 SFTP 远程的端口设置与之匹配。端口 22 与自定义端口（如 2222）不匹配是最常见的原因之一。

<img src="/support/images/en/blog/new-remote.png" alt="Configure SFTP remote port in RcloneView" class="img-large img-center" />

### 检查本地防火墙是否阻断

在服务器上，确认防火墙允许 SSH 端口的入站连接。可使用 `sudo ufw status`（Ubuntu/Debian）、`sudo firewall-cmd --list-ports`（RHEL/Fedora）或 `sudo iptables -L -n | grep 22`。如果端口被阻断，添加允许规则。

## 修复方法 2：连接超时

超时表示数据包已发送但未收到响应。这通常是网络层面的问题，而非服务器端配置问题。

### 网络可达性

从你的设备测试基本连通性：

```bash
ping server-hostname
telnet server-hostname 22
```

如果 `ping` 成功但 `telnet` 连接端口 22 失败，说明你与服务器之间存在防火墙阻断了 SSH 端口。

### 路由器和 NAT 防火墙

如果 SFTP 服务器位于 NAT 路由器后面，请确保已配置端口转发，将外部流量在 SSH 端口上转发到内部服务器 IP。如果没有端口转发，来自本地网络之外的连接将会超时。

### ISP 或企业防火墙阻断

某些 ISP 和企业网络会阻断端口 22 的出站连接。可以尝试使用替代端口，或使用 VPN 绕过限制。

### Rclone 中的超时调优

对于高延迟连接，rclone 的默认连接超时可能过短。可以通过添加 `--contimeout` 标志来增加该值。对于 SFTP 特有的服务器响应延迟，可以考虑将 `--timeout` 设置为更高的值（例如慢速服务器使用 `5m`）。

## 修复方法 3：SSH 密钥身份验证失败

基于密钥的身份验证是 SFTP 连接最安全、最推荐的方式，但配置错误也很常见。

### 验证密钥文件路径

在 RcloneView 中，SFTP 远程配置中有一个字段用于填写 SSH 密钥文件路径。请确保：

- 该路径指向**私钥**（例如 `~/.ssh/id_rsa` 或 `~/.ssh/id_ed25519`），而不是公钥。
- 文件存在，并且你的用户账户可以读取该文件。
- 密钥文件权限正确（Linux/macOS 上为 `600`）。

### 在服务器上授权该密钥

公钥必须列在服务器上的 `~/.ssh/authorized_keys` 文件中。可以使用 `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys` 追加，然后确保该文件权限为 `600`，`.ssh` 目录权限为 `700`。

### 受密码短语保护的密钥

如果你的私钥设置了密码短语，rclone 需要该密码短语才能解密密钥。在 RcloneView 的 SFTP 远程配置中，请在对应字段中输入密码短语。如果留空，身份验证将静默失败。

### SSH 代理冲突

如果正在运行的 SSH 代理加载了大量密钥，服务器可能会在尝试过多失败密钥后拒绝连接（默认限制通常为 6 次）。可以在 rclone 配置中指定确切的密钥文件以绕过代理，或减少代理中加载的密钥数量。

## 修复方法 4：密码身份验证问题

### 服务器已禁用密码身份验证

许多服务器出于安全考虑禁用了密码身份验证。可以通过 `grep -i "PasswordAuthentication" /etc/ssh/sshd_config` 检查。如果设置为 `no`，则必须改用基于密钥的身份验证。

### 密码错误

请确保在 RcloneView 的 SFTP 远程配置中输入了正确的密码。Rclone 会以混淆格式将密码存储在 `rclone.conf` 中——如果手动编辑配置文件，请使用 `rclone obscure` 对密码进行正确编码。

## 修复方法 5：并发连接限制

SFTP 服务器通常会限制同时会话数。Rclone 默认使用 4 个并发传输，但有些服务器仅允许 1 或 2 个连接。

如果在大批量传输过程中出现间歇性连接失败，请降低并发数：

- 设置 `--transfers 1` 或 `--transfers 2` 以限制并行连接数。
- 设置 `--checkers 1` 以减少同时进行的校验操作数量。

部分共享主机服务商的限制尤其严格。建议从较低的并发数开始，再逐步提高。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SFTP transfer progress in RcloneView" class="img-large img-center" />

## 修复方法 6：SSH 算法不兼容

较旧的服务器可能不支持现代 SSH 算法，而经过安全加固的服务器则可能拒绝较旧的算法。如果出现“handshake failed”错误，请尽可能更新 SSH 服务器软件，或检查 `/etc/ssh/sshd_config` 中的 `KexAlgorithms`、`Ciphers` 和 `MACs` 限制。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer with SFTP remote connected" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 SFTP 远程**，填写正确的主机、端口和身份验证设置。
3. 在浏览器中浏览该远程，**测试连接**。
4. 如遇到错误，**逐项检查上述清单**。

SFTP 问题几乎总是配置问题，而非软件缺陷。逐层系统性地检查——网络、防火墙、身份验证和服务器设置——可以解决绝大多数情况。

---

**相关指南：**

- [在 RcloneView 中排查 Rclone 错误](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [修复 Rclone 配置损坏问题](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [恢复中断的传输](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
