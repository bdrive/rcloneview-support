---
slug: protect-cloud-storage-ransomware-backup-rcloneview
title: "保护您的云存储免受勒索软件攻击 — 使用 RcloneView 实现不可变备份"
authors:
  - tayson
description: "勒索软件可以通过同步加密您的云文件。了解如何使用 RcloneView 创建不可变、隔离的云备份,在勒索软件攻击中幸存下来。"
keywords:
  - ransomware cloud storage protection
  - immutable cloud backup
  - ransomware proof backup
  - cloud ransomware protection
  - air gapped cloud backup
  - protect google drive ransomware
  - ransomware cloud sync
  - immutable s3 backup
  - cloud backup ransomware defense
  - anti ransomware backup strategy
tags:
  - ransomware
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 保护您的云存储免受勒索软件攻击 — 使用 RcloneView 实现不可变备份

> 勒索软件不仅会加密您的本地文件。如果您的云同步处于激活状态,它还会用加密版本覆盖您的云端副本。您的 Google Drive、OneDrive 和 Dropbox 都可能在几分钟内被攻陷。

云存储让人感觉很安全——"文件在云端,就等于有了备份"。但云同步工具是双向工作的。当勒索软件加密您计算机上的文件时,同步客户端会尽职尽责地将加密版本上传到您的云端,替换掉原始文件。几分钟内,您的云存储就会充满加密的垃圾数据。解决方案是:创建勒索软件无法触及的备份副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 勒索软件如何攻陷您的云端

1. **勒索软件加密本地文件**——在您的计算机上。
2. **同步客户端检测到变化**——OneDrive、Dropbox 或 Google Drive 同步会发现"已修改"的文件。
3. **加密文件被上传**——同步客户端用加密版本替换原始文件。
4. **云存储现已被加密**——本地和云端副本都已被攻陷。

## 防御策略:复制,而非同步

关键点在于:**使用复制(Copy)任务而非同步(Sync)任务进行备份。** 复制只会添加和更新文件——它绝不会删除目标位置中的文件。即使您的主云存储被勒索软件加密的文件污染,备份中仍保留着最后一个正常的版本。

### 主云存储(易受攻击)

```
Google Drive ← 与本地计算机同步(勒索软件可以到达这里)
```

### 备份(受保护)

```
Google Drive → 复制 → Backblaze B2(勒索软件无法删除旧版本)
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create ransomware-resistant backup" class="img-large img-center" />

## 额外的防护层

### 1) S3 对象锁定(不可变)

AWS S3 支持对象锁定(Object Lock)——文件在指定期限内无法被修改或删除:

- **治理模式(Governance mode)**——防止意外删除;管理员可以覆盖此限制。
- **合规模式(Compliance mode)**——任何人都无法删除或修改,即使是根账户也不行。

将数据备份到启用了对象锁定的 S3 存储桶。即使勒索软件攻陷了您的 AWS 凭据,被锁定的对象也能幸存下来。

### 2) 版本控制

在您的备份存储上启用版本控制:

- **S3 版本控制**——每次覆盖都会创建一个新版本。旧版本会被保留。
- **B2 版本控制**——Backblaze 默认会保留之前的版本。

如果勒索软件加密的文件被复制到备份中,之前的干净版本仍然可以访问。

### 3) 使用独立凭据

为您的备份目标使用不同的凭据。不要在主云存储和备份云存储之间复用 AWS 密钥或 OAuth 令牌。如果勒索软件窃取了一组凭据,另一组仍然是安全的。

### 4) 使用 crypt 进行加密备份

使用 rclone 的 crypt 远程来创建加密备份。即使有人访问了您的备份存储,没有您的 crypt 密码,他们也无法修改加密数据。

## 备份计划

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ransomware-resistant backup" class="img-large img-center" />

对关键数据每天多次运行复制任务:

| 数据类型 | 备份频率 | 保留期 |
|-----------|-----------------|-----------|
| 关键文档 | 每 4 小时 | 90 天的版本 |
| 项目文件 | 每天 | 30 天的版本 |
| 归档 | 每周 | 1 年 |

## 验证备份完整性

定期验证备份是否被损坏:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup integrity" class="img-large img-center" />

## 恢复计划

如果遭遇勒索软件攻击:

1. **立即停止所有同步客户端**。
2. **断开网络连接**以防止扩散。
3. **通过 RcloneView 访问您的备份**(从一台干净的机器上操作)。
4. **从最后一个干净版本恢复**——将数据从备份复制到一个干净的云账户。
5. **使用文件夹比较验证恢复的数据**。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **使用复制(而非同步)设置备份**,备份到独立的存储提供商。
3. 在备份存储上**启用版本控制**。
4. 为备份账户**使用独立凭据**。
5. **安排频繁的备份**。
6. **测试恢复流程**——在真正需要之前先练习一遍。

最好的勒索软件防御手段,就是一份勒索软件无法触及的备份。

---

**相关指南:**

- [为什么云到云备份很重要](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)
- [恢复意外删除的文件](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [同步 vs 复制 vs 移动](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
