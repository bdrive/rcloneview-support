---
slug: fix-sftp-public-key-authentication-errors-rcloneview
title: "修复 SFTP 公钥认证错误 — 使用 RcloneView 解决 SSH 问题"
authors:
  - tayson
description: "排查 RcloneView 中的 SFTP 公钥认证失败问题。诊断错误的密钥路径、权限、密码短语问题以及密钥格式问题。"
keywords:
  - SFTP 公钥错误 RcloneView
  - 修复 SFTP 认证失败
  - SSH 密钥认证 rclone SFTP
  - SFTP permission denied public key
  - RcloneView SFTP 故障排查
  - SSH 密钥格式 rclone
  - SFTP 密钥密码短语错误
  - rclone SFTP 连接修复
tags:
  - RcloneView
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 SFTP 公钥认证错误 — 使用 RcloneView 解决 SSH 问题

> SFTP 公钥认证失败几乎总是由密钥路径、文件权限或密码短语不匹配导致 —— 本指南将系统地逐一介绍每种情况。

SFTP 是在 RcloneView 中连接远程 Linux 服务器最常见的方式之一,而公钥认证是相较于密码更受推荐的安全方式。当密钥认证失败时,错误信息可能令人费解:`ssh: handshake failed`、`permission denied (publickey)` 或 `no supported methods remain`。本指南将介绍最常见的原因,以及如何诊断和修复每一种问题。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView 中的 SFTP 远程配置

在 RcloneView 中创建 SFTP 远程时,与基于密钥的认证相关的字段包括:

- **Host**:服务器主机名或 IP
- **User**:SSH 用户名
- **Key file**:私钥文件的路径(例如 `~/.ssh/id_rsa` 或 `C:\Users\you\.ssh\id_ed25519`)
- **Key file passphrase**:解密密钥的密码短语(如果已设置)

对于每个远程,密码认证和密钥认证是互斥的。如果指定了密钥文件,请将密码字段留空。

<img src="/support/images/en/blog/new-remote.png" alt="SFTP remote configuration with key auth in RcloneView" class="img-large img-center" />

## 常见错误 1:密钥文件路径错误

密钥认证失败最常见的原因是密钥文件路径错误或无法访问。请检查:

- 该路径是否存在,并指向**私钥**(而非 `.pub` 公钥)
- 在 Windows 上,请使用完整的绝对路径(例如 `C:\Users\username\.ssh\id_rsa`)
- 在 Linux/macOS 上,`~/.ssh/id_rsa` 会被正确展开 —— 如有疑问,请使用完整路径

在 RcloneView 中,打开 SFTP 远程设置并验证密钥文件路径。如果该位置不存在此文件,认证将静默失败或返回无用的错误信息。

## 常见错误 2:密钥文件权限过于开放

在 Linux 和 macOS 上,如果私钥文件对所有用户可读,SSH 会拒绝使用该文件。如果密钥文件权限过于宽松,你会看到 `Permissions 0644 for '~/.ssh/id_rsa' are too open`。修复方法:

```
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

在 Windows 上,密钥文件权限通过文件安全设置进行管理。请确保密钥文件仅对你的用户账户可访问,而不与 Everyone 共享。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP connection test in RcloneView" class="img-large img-center" />

## 常见错误 3:密码短语不匹配

如果你的私钥受密码短语保护,RcloneView SFTP 远程设置中的密码短语字段必须与之完全匹配。如果密钥设置了密码短语,而该字段留空,认证将失败。反之,如果为没有密码短语的密钥输入了密码短语,同样会导致失败。

要测试密钥密码短语是否正确,可以打开终端并运行 `ssh -i /path/to/key user@host` —— 如果它提示输入密码短语并接受该输入,说明凭据是正确的。然后据此更新 RcloneView 中的远程配置。

## 常见错误 4:密钥格式不受支持

较旧的 OpenSSH 私钥(PEM 格式)得到广泛支持,但一些采用 OpenSSH 原生格式的较新 ED25519 密钥,可能会因 rclone 内嵌的 Go SSH 库版本不同而出现问题。如果你遇到 `ssh: no supported methods remain`:

- 将密钥转换为 PEM 格式:`ssh-keygen -p -m PEM -f ~/.ssh/id_ed25519`
- 或者生成一个 RSA 密钥:`ssh-keygen -t rsa -b 4096`

## 阅读日志以进行诊断

在 SFTP 连接尝试失败后,打开 RcloneView 中的 **Log** 标签页。日志会显示完整的 SSH 握手错误。如需更详细的信息,可以使用 RcloneView 中的 **Terminal** 标签页,直接运行带有 `-vv` 标志的 rclone 命令,这会打印出完整的 SSH 协商过程。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing SFTP connection errors in RcloneView logs" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开你的 SFTP 远程设置,并验证密钥文件路径是否指向正确的私钥。
3. 在 Linux/macOS 上,使用 `ls -la ~/.ssh/` 检查密钥文件权限,并使用 `chmod 600` 进行修复。
4. 确认密码短语字段与密钥的密码短语一致,然后在 Remote Manager 中测试连接。

对路径、权限和密码短语进行系统性检查,可以解决绝大多数 SFTP 公钥认证失败问题。

---

**相关指南:**

- [修复 SFTP 连接被拒绝和超时错误](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [使用 RcloneView 排查 rclone 错误](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [修复因网络错误导致的云同步中断](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />
