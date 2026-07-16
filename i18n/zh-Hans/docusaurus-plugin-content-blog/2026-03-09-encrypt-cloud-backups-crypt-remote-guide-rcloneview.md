---
slug: encrypt-cloud-backups-crypt-remote-guide-rcloneview
title: "使用 Rclone Crypt 加密云备份 — 面向 Google Drive、S3 等平台的零知识加密"
authors:
  - tayson
description: "在上传前使用 rclone 的 crypt 远程加密你的云端文件。这是一份关于在 Google Drive、OneDrive、S3 及任意云存储提供商上使用 RcloneView 实现零知识加密的完整指南。"
keywords:
  - 加密云存储
  - rclone crypt 远程
  - 云端零知识加密
  - 加密 google drive 文件
  - 加密云备份
  - rclone 加密指南
  - 加密 onedrive 文件
  - 云端客户端加密
  - 加密 s3 文件
  - 加密云存储工具
tags:
  - encryption
  - crypt
  - security
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 Rclone Crypt 加密云备份 — 面向 Google Drive、S3 等平台的零知识加密

> 当你把文件上传到 Google Drive 时,Google 可以读取它们。当你把数据存储在 S3 上时,Amazon 可以访问它们。Rclone 的 crypt 远程改变了这一切——你的文件在离开你的设备之前就已经被加密。

云存储提供商会对服务器上的"静态数据"进行加密,但密钥掌握在他们手中。这意味着服务商(以及可能的政府机构、入侵服务商系统的黑客,或心怀不轨的员工)都能够访问你的文件。Rclone 的 crypt 远程提供了真正的零知识加密:文件在你的设备上完成加密后才会上传,只有你自己拥有密钥。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么是 Crypt 远程?

Crypt 远程是叠加在任何现有云端远程之上的一个虚拟层:

```
你的文件 → Crypt 远程(加密) → 云端远程(上传加密后的数据块)
```

当你读取文件时:

```
云端远程(加密数据块) → Crypt 远程(解密) → 你的文件
```

云存储提供商只存储加密后的数据。文件名、目录名和文件内容全部被加密。服务商无法看到你存储的具体内容。

## Crypt 加密的工作原理

### 加密标准

- **文件内容**:采用 CTR 模式的 AES-256,并使用 HMAC-SHA256 进行认证。
- **文件名**:AES-256 EME(encrypt-mix-encrypt,加密-混合-加密)模式,可选启用混淆。
- **目录名**:与文件名相同(默认加密)。

### 哪些内容会被加密

| 组成部分 | 标准模式 | 启用名称加密 |
|-----------|:---:|:---:|
| 文件内容 | ✅ 已加密 | ✅ 已加密 |
| 文件名 | ❌ 可见 | ✅ 已加密 |
| 目录名 | ❌ 可见 | ✅ 已加密 |
| 文件大小 | ❌ 可见(略有填充) | ❌ 可见(略有填充) |
| 目录结构 | ❌ 可见 | ✅ 已加密 |

**建议**:始终启用文件名加密,以获得最大程度的隐私保护。

## 在 RcloneView 中设置 Crypt

### 第一步:拥有一个现有的远程

首先,把你的云存储添加为一个普通远程(例如 Google Drive、S3、Backblaze B2):

<img src="/support/images/en/blog/new-remote.png" alt="Add base cloud remote" class="img-large img-center" />

### 第二步:在其上创建一个 crypt 远程

添加一个类型为 **Crypt** 的新远程。将其配置为指向现有远程上的某个文件夹:

- **Remote**:`gdrive:encrypted-backup/`(你 Google Drive 上的一个文件夹)。
- **File name encryption**:Standard(加密)。
- **Directory name encryption**:True。
- **Password**:一个强密码(这是你的加密密钥——**切勿丢失**)。
- **Password2(salt)**:用于增强安全性的附加密码。

### 第三步:使用 crypt 远程

现在,当你通过 crypt 远程浏览或传输文件时,一切都会被透明地加密。通过 crypt 远程上传 → 文件以加密形式抵达 Google Drive。通过 crypt 远程下载 → 文件会被自动解密。

## 加密备份工作流程

### 设置一个加密备份任务

从本地存储(或另一个云端)到 crypt 远程创建一个复制任务:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create encrypted backup job" class="img-large img-center" />

### 安排每日加密备份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule encrypted backup" class="img-large img-center" />

### 云存储提供商能看到什么

如果有人浏览你的 Google Drive,他们会看到:

```
encrypted-backup/
  q6r2v8s3f1g4h5j6k7l8/
    a1b2c3d4e5f6g7h8i9j0k1l2m3n4.bin
    p5q6r7s8t9u0v1w2x3y4z5a6b7c8.bin
  m9n0o1p2q3r4s5t6u7v8/
    d9e0f1g2h3i4j5k6l7m8n9o0p1q2.bin
```

文件名不可读。内容已加密。甚至连文件夹结构也被隐藏了。

### 你(通过 crypt 远程)能看到什么

```
encrypted-backup/
  Documents/
    tax-return-2025.pdf
    passport-scan.jpg
  Medical/
    lab-results-march.pdf
```

正常、可读的文件——实时解密呈现。

## 实际使用场景

### 1)加密的 Google Drive 备份

你日常使用的个人 Google Drive。在同一个 Google Drive 上,对敏感文件进行加密备份:

```
gdrive:Documents/     ← 普通文件(Google 可以看到)
gdrive-crypt:Sensitive/ ← 已加密(Google 只能看到数据块)
```

### 2)加密的 S3 归档

在 S3 上归档敏感数据,并进行客户端加密。即使你的 AWS 账户被攻破,没有密码也无法读取数据。

### 3)HIPAA / 合规存储

医疗、法律和金融数据通常要求静态加密。Crypt 远程提供可验证的客户端加密。

### 4)跨境数据保护

在你并不完全信任其数据访问政策的云区域中存储数据。

## 验证加密备份

通过 crypt 远程使用文件夹对比功能,验证你的加密备份与源数据是否一致:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify encrypted backup" class="img-large img-center" />

## 重要警告

### 不要丢失你的密码

没有"忘记密码"的恢复机制。如果你丢失了 crypt 密码,你的加密数据将永久无法访问。没有任何人——无论是 rclone、Google 还是 Amazon——能够找回它。

**请安全地存储你的密码:**

- 手写记录下来,存放在实体保险箱中。
- 使用密码管理器(应与被加密的云端相互独立)。
- 在不同地点至少保留两份副本。

### 不要直接修改加密文件

切勿直接在云存储提供商一侧编辑加密后的数据块。始终通过 crypt 远程进行访问。直接修改会导致文件损坏。

### 性能影响

加密会带来一定的 CPU 开销:

- 在现代台式机和笔记本电脑上几乎可以忽略不计。
- 在树莓派或低功耗设备上会较为明显。
- 不会影响网络速度(加密在上传之前完成)。

## 多个 Crypt 远程

你可以为不同用途创建不同的 crypt 远程:

| Crypt 远程 | 指向 | 密码 | 使用场景 |
|-------------|-----------|----------|----------|
| crypt-personal | gdrive:encrypted/ | 密码 A | 个人敏感文件 |
| crypt-work | s3:work-encrypted/ | 密码 B | 工作文档 |
| crypt-archive | b2:archive-encrypted/ | 密码 C | 长期归档 |

每个远程使用不同的密码和不同的底层存储。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加你的云存储**作为一个普通远程。
3. **创建一个 crypt 远程**,指向该云端上的某个文件夹。
4. **设置一个强密码**并安全保存。
5. 对所有敏感文件操作**使用 crypt 远程**。
6. **安排加密备份计划**以实现自动化。

你的数据。你的密钥。你的掌控。

---

**相关指南:**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [符合 HIPAA 标准的云存储](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)

<CloudSupportGrid />
