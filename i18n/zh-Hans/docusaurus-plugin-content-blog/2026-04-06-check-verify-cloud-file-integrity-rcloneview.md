---
slug: check-verify-cloud-file-integrity-rcloneview
title: "使用 RcloneView 的检查与比较功能验证云文件完整性"
authors:
  - tayson
description: "使用 RcloneView 的检查和比较功能验证云文件完整性、检测比特腐蚀、校验校验和，并确认跨提供商迁移是否成功。"
keywords:
  - rclone check files
  - verify cloud file integrity
  - rcloneview compare folders
  - cloud checksum verification
  - detect bit rot cloud storage
  - post migration verification
  - rclone file validation
  - compare source destination cloud
  - rcloneview check feature
  - cloud data integrity tool
tags:
  - RcloneView
  - feature
  - cloud-sync
  - guide
  - tips
  - best-practices
  - security
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 的检查与比较功能验证云文件完整性

> 将文件复制到云端只是任务的一半。验证每个字节都完整无损地到达，才是可靠工作流与一厢情愿之间的分水岭。

无论是跨提供商迁移数 TB 数据、运行夜间备份，还是归档重要数据集，都存在一个共同风险：静默损坏。文件在目标端看似存在，但可能由于传输中断、提供商端的错误，或随时间发生的普通比特腐蚀而与源文件存在差异。Rclone 提供了专门的 `check` 命令，可以逐文件比较源和目标，而 RcloneView 让这一过程变得直观且易用。本指南将说明何时以及如何验证你的云文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么文件完整性验证很重要

云提供商会在内部对数据进行复制，但没有任何系统能完全免于错误。以下是验证能够发现真实问题的几种常见场景：

- **传输中断** —— 大文件复制过程中网络中断，可能导致目标端留下部分文件，仅凭文件名看起来却是完整的。
- **比特腐蚀** —— 存储介质可能在数月或数年内发生退化，导致很少被访问的文件出现比特翻转。
- **提供商端错误** —— 偶发的 API 错误可能导致零字节上传或写入被截断，而不会报错。
- **迁移验证** —— 在提供商之间迁移数十万个文件后，你需要证据来证明没有文件丢失或被更改。

如果没有验证步骤，这些问题会一直不被发现，直到你真正需要用到该文件时才会暴露。

## Rclone Check 的工作原理

`rclone check` 命令会比较源路径和目标路径，并报告存在差异的文件。根据所涉及的提供商不同，它会使用以下方法之一：

| 方法 | 工作原理 | 使用场景 |
|--------|-------------|-----------|
| **哈希校验** | 比较两个提供商报告的校验和（MD5、SHA1 等） | 两个提供商都支持相同的哈希算法 |
| **大小校验** | 仅比较文件大小 | 没有可用的通用哈希算法 |
| **下载校验** | 下载两份文件并逐字节比较 | 通过 `--download` 参数强制启用 |

当两个提供商都支持哈希校验时，基于哈希的检查是最快、最可靠的方式。Google Drive、OneDrive、S3 兼容提供商以及 Backblaze B2 都会报告文件哈希，但类型未必相同。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView compare folders showing file differences" class="img-large img-center" />

## 在 RcloneView 中使用比较功能

RcloneView 内置的 **比较（Compare）** 功能可为你提供源文件夹与目标文件夹的可视化并排视图：

1. 打开 **资源管理器（Explorer）** 面板，在一侧选择源远程，在另一侧选择目标远程。
2. 导航到你想要比较的文件夹。
3. 点击 **比较（Compare）** 运行分析。
4. 查看结果 —— 文件会按状态进行颜色标记：匹配、仅源端存在、仅目标端存在，或存在差异。

这种可视化方式非常适合对特定文件夹进行抽查，或在迁移后查看结果，而无需记忆命令行输出。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane explorer with source and destination" class="img-large img-center" />

## 通过终端运行 Rclone Check

若要对整个远程进行完整的完整性扫描，请打开 RcloneView 中的 **终端（Terminal）** 并运行：

```bash
rclone check source:path dest:path
```

需要了解的常用参数：

| 参数 | 作用 |
|------|---------|
| `--size-only` | 仅按大小比较，跳过哈希校验 |
| `--download` | 通过下载两份文件强制进行逐字节比较 |
| `--one-way` | 仅检查源文件是否存在于目标端（不检查反向） |
| `--combined report.txt` | 将匹配和不匹配的综合报告写入文件 |
| `--missing-on-src missing.txt` | 记录存在于目标端但源端缺失的文件 |
| `--missing-on-dst missing.txt` | 记录存在于源端但目标端缺失的文件 |
| `--error errors.txt` | 记录检查失败的文件 |

用于迁移后全面检查的示例：

```bash
rclone check gdrive:/Archive s3-backup:archive-bucket --combined /tmp/check-report.txt
```

## 迁移后验证工作流

在提供商之间迁移数据后，请按照以下工作流确认迁移成功：

1. **运行单向检查**，从源到目标，确认所有源文件均已到达：
   ```bash
   rclone check source:path dest:path --one-way
   ```
2. **查看不匹配项** —— 任何报告出的差异都表示相应文件需要重新复制。
3. **重新传输失败的文件**，使用 RcloneView 的复制或同步功能，并移除 `--ignore-existing` 参数。
4. **重新运行检查**以确认所有差异均已解决。
5. **保存报告**用于审计目的，使用 `--combined` 参数。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed check operations" class="img-large img-center" />

## 检测长期存在的比特腐蚀

对于长期归档数据，应安排定期的完整性检查：

1. 在 RcloneView 中创建一个针对你的归档运行 `rclone check` 的 **任务（Job）**。
2. 使用 **任务调度器（Job Scheduler）** 将其安排为每周或每月运行一次。
3. 每次运行后查看任务历史记录，以发现新出现的损坏文件。

这对于冷存储层（如 S3 Glacier、Backblaze B2 归档）尤其重要，因为这类文件通常只写入一次，读取频率极低。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule periodic integrity check in RcloneView" class="img-large img-center" />

## 提供商之间的校验和兼容性

并非每个提供商都支持相同的哈希算法。以下是一份快速参考：

| 提供商 | MD5 | SHA1 | 其他 |
|----------|-----|------|-------|
| Google Drive | 是 | 否 | 提供 Quickxor |
| OneDrive | 否 | 否 | QuickXorHash |
| Amazon S3 | 是（单分片时使用 ETag） | 否 | -- |
| Backblaze B2 | 否 | 是 | 原生 SHA1 |
| Dropbox | 否 | 否 | Dropbox 内容哈希 |
| SFTP/本地 | 是 | 是 | 多种 |

当两个提供商没有共同支持的哈希算法时，rclone 会回退到仅比较大小。在这种情况下，若需要字节级的确定性，请使用 `--download`。

## 最佳实践

- **在大型迁移后务必进行验证** —— 复制命令执行成功并不能保证每个文件都完好无损。
- **使用 `--combined` 报告**，创建一份可审计的匹配与不匹配记录。
- **为长期不被访问的归档数据安排定期检查**。
- **尽可能优先使用哈希校验**而非仅大小校验 —— 大小相同但内容损坏的情况虽然少见，但确实存在。
- **在检查之后运行试运行（dry-run）同步**，以自动修复任何不匹配项。

---

**相关指南：**

- [云到云的传输与同步](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)
- [从 Google Drive 到 Amazon S3 的增量备份](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [恢复中断和失败的传输](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
