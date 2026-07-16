---
slug: fix-cloud-sync-checksum-mismatch-rcloneview
title: "在 RcloneView 中修复云同步校验和不匹配错误"
authors:
  - tayson
description: "解决 RcloneView 云同步过程中出现的校验和不匹配错误。了解 rclone 如何处理校验和、不同服务商的哈希差异，以及何时应使用 --ignore-checksum。"
keywords:
  - rclone checksum mismatch
  - cloud sync checksum error
  - rclone hash mismatch fix
  - rcloneview checksum error
  - rclone ignore checksum
  - md5 sha1 cloud storage hash
  - rclone data integrity check
  - fix sync mismatch rclone
  - cloud provider hash comparison
  - rclone checksum verification
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - guide
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中修复云同步校验和不匹配错误

> 云同步过程中出现的校验和不匹配，通常意味着源端和目标端使用了不同的哈希算法，而不是数据已损坏。以下是诊断和解决此问题的方法。

当 rclone 在云服务商之间同步文件时，会比较校验和以验证传输后的数据与原始数据是否一致。如果源端和目标端服务商使用不同的哈希算法——或者某个服务商根本不返回校验和——rclone 可能会报告不匹配，或不必要地重新传输文件。本指南将说明其原理以及如何在 RcloneView 中解决该问题。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 校验和不匹配意味着什么

校验和（或哈希值）是根据文件内容计算出的固定长度字符串。如果两个文件生成相同的校验和，则它们是相同的。Rclone 使用校验和来：

- **验证上传**——在传输后确认目标文件与源文件一致。
- **检测变化**——在同步过程中，跳过校验和与大小未发生变化的文件。
- **确保完整性**——当文件哈希与预期不符时标记为可能损坏。

不匹配意味着一端计算出的哈希值与另一端不一致。这可能表示数据确实已损坏，但更常见的原因是服务商之间的**哈希算法不兼容**。

## 各服务商的哈希差异

不同的云服务商支持不同的哈希算法：

| 服务商 | 支持的哈希算法 |
|----------|-----------------|
| **本地磁盘** | MD5、SHA-1、SHA-256（取决于操作系统） |
| **Google Drive** | MD5 |
| **OneDrive** | SHA-1、QuickXorHash |
| **Dropbox** | Dropbox 内容哈希（自定义） |
| **Amazon S3** | MD5（ETag，但分块上传时不适用） |
| **Backblaze B2** | SHA-1 |
| **Azure Blob** | MD5 |
| **SFTP** | MD5、SHA-1（若服务器支持） |
| **Wasabi** | MD5（ETag） |
| **Cloudflare R2** | MD5（ETag） |

当在共享同一哈希算法的服务商之间同步时（例如 Google Drive 的 MD5 到 Azure Blob 的 MD5），校验和比对可以无缝进行。当不存在共同的哈希算法时（例如 Google Drive 的 MD5 与 OneDrive 的 QuickXorHash），rclone 无法直接比较校验和。

## Rclone 如何处理不匹配的哈希

Rclone 在哈希比较方面具有一定的智能处理机制：

1. **找到共同哈希**——rclone 使用共享的算法比较文件，不会出现问题。
2. **没有共同哈希**——rclone 会回退到比较文件大小和修改时间。大小和时间都相符的文件被视为相同。
3. **启用 `--checksum` 标志**——rclone 仅使用校验和进行比较（不比较时间）。如果不存在共同哈希，rclone 将重新传输所有文件，因为它无法确认文件是否一致。

第三种情况是导致意外行为最常见的原因：在不兼容的服务商之间启用 `--checksum` 会强制进行不必要的重新传输。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders in RcloneView to identify mismatched files" class="img-large img-center" />

## 常见错误场景

### 场景 1：S3 分块上传的 ETag 不匹配

当你使用分块上传方式将大文件上传到 S3 时，生成的 ETag 并非简单的 MD5 哈希——而是各分块的复合哈希。Rclone 在本地计算出的文件 MD5 值将与 S3 的 ETag 不一致，从而在下次同步时触发不匹配。

**解决方法：** 这是预期中的行为。Rclone 会尽可能将预期的哈希值存储在元数据中来处理这一问题。如果你发现大文件被重新传输，可以为该特定同步任务安全地使用 `--ignore-checksum`。

### 场景 2：Google Drive 到 OneDrive 的同步

Google Drive 使用 MD5，而 OneDrive 使用 QuickXorHash，两者没有重叠的哈希算法。

**解决方法：** Rclone 会自动回退到比较大小和修改时间。此组合请勿使用 `--checksum`，否则每个文件都会被重新传输。

### 场景 3：加密（Crypt）远程

在使用 rclone crypt 时，加密后的文件哈希与明文源文件的哈希不同。Rclone 会在内部处理这一点，但如果你将 crypt 远程的哈希与底层服务商的原始哈希进行比较，两者将永远无法匹配。

**解决方法：** 始终通过 crypt 远程层来比较文件，而不要直接查看底层的加密存储。

## 在 RcloneView 中配置校验和行为

### 使用 --checksum 标志

`--checksum` 标志会告知 rclone 仅使用校验和（而非修改时间）来判断文件是否需要传输。在以下情况下启用它：

- 源端和目标端都支持相同的哈希算法。
- 你希望获得最强的完整性保证。
- 你正在本地磁盘与支持 MD5 的服务商之间进行同步。

在以下情况下请勿使用：

- 源端和目标端没有共同哈希——这将强制重新传输所有文件。
- 你正在向 S3 同步大文件（分块 ETag 将无法匹配）。

### 使用 --ignore-checksum 标志

`--ignore-checksum` 标志会跳过所有校验和验证。在以下情况下使用它：

- 你已确认数据正确，但校验和永远无法匹配（例如 S3 分块 ETag）。
- 你希望在处理超大数据集时通过跳过哈希计算来加快同步速度。
- 某个服务商返回了不一致或错误的哈希值（少见但可能发生）。

请勿将其作为默认设置——校验和的存在正是为了捕获真实的数据损坏。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure sync job flags in RcloneView before execution" class="img-large img-center" />

## 验证数据完整性

如果你怀疑存在真正的数据损坏，而不仅仅是哈希算法不匹配：

1. **运行 `rclone check`**——该命令会比较源文件和目标文件并报告任何差异。在 RcloneView 中，你可以使用文件夹比较视图。
2. **下载并在本地比较**——分别从源端和目标端下载文件，然后使用 `md5sum` 或 `sha256sum` 在本地计算校验和。
3. **检查传输日志**——查看 RcloneView 的任务历史记录，了解原始传输过程中是否出现错误。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer progress and verify checksums in RcloneView" class="img-large img-center" />

## 快速参考：哈希兼容性矩阵

| 同步方向 | 共同哈希 | 校验和标志是否安全？ |
|---------------|-------------|-------------------|
| 本地到 Google Drive | MD5 | 是 |
| 本地到 OneDrive | SHA-1 | 是 |
| 本地到 S3（小文件） | MD5 | 是 |
| 本地到 S3（分块上传） | 无（ETag 不同） | 否 |
| Google Drive 到 OneDrive | 无 | 否 |
| Google Drive 到 S3 | MD5 | 是（小文件） |
| S3 到 Backblaze B2 | 无（MD5 与 SHA-1） | 否 |
| S3 到 Azure Blob | MD5 | 是（小文件） |

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用上表**检查你所用服务商支持的哈希算法**。
3. **在不兼容的服务商之间避免使用 `--checksum`**，以防止不必要的重新传输。
4. 在 RcloneView 中**使用文件夹比较功能**，直观地验证同步结果。

大多数校验和不匹配错误并非数据损坏——而是服务商之间的哈希算法不匹配所致。了解每个服务商支持哪些哈希算法，是快速解决此类问题的关键。

---

**相关指南：**

- [在 RcloneView 中排查 Rclone 错误](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [修复 S3 访问被拒绝错误](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [修复 OneDrive 同步错误](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)

<CloudSupportGrid />
