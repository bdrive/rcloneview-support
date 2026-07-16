---
slug: fix-cloud-backup-verification-failures-rcloneview
title: "修复云备份校验失败——使用 RcloneView 确保数据完整性"
authors:
  - tayson
description: "排查 RcloneView 中的云备份校验和不匹配和校验失败问题。使用文件夹比较、检查设置并重新运行传输以确保数据完整性。"
keywords:
  - cloud backup verification failure RcloneView
  - checksum mismatch cloud sync
  - fix backup integrity error rclone
  - cloud transfer checksum error
  - RcloneView data integrity check
  - rclone checksum verification failure
  - backup corruption fix rclone
  - cloud sync verification troubleshooting
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复云备份校验失败——使用 RcloneView 确保数据完整性

> 云传输后的校验和不匹配可能表明是提供商差异，也可能是真正的数据损坏——弄清楚你面对的是哪种情况，决定了正确的修复方式。

大型备份完成后，你可能会遇到校验失败：校验和不匹配、文件被标记为不同（尽管它们应该是相同的），或 RcloneView 比较工具中出现错误。这些失败可能有多种原因，从良性的提供商元数据差异到真正的数据损坏都有可能。本指南将逐一介绍如何诊断每种情况并应用正确的修复方法。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解校验和类型

不同的云存储提供商支持不同的校验和算法。AWS S3 使用 MD5（用于标准上传）和 SHA-256（用于校验和）。Google Drive 使用 MD5。Backblaze B2 使用 SHA1。Dropbox 使用自定义的块哈希。当 rclone 在使用不同哈希算法的两个提供商之间比较文件时，会回退到按大小和修改时间比较，而不是按哈希比较。

这意味着 RcloneView 文件夹比较视图中的"不匹配"未必表示数据损坏——它可能只是表明这些提供商使用了不兼容的哈希类型，而 rclone 只能按大小进行比较。真正的数据损坏表现为大小相同但同一算法下哈希值不同。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify backup verification failures" class="img-large img-center" />

## 在同步任务中启用校验和验证

要在传输时捕获真正的数据损坏，请在同步任务设置中启用校验和验证。在 RcloneView 中，打开该任务并转到步骤 2。启用 **checksum**（校验和）选项。启用此选项后，rclone 会在传输期间计算并比较哈希值。如果文件上传后的哈希值不匹配，rclone 会重试传输。

注意：启用校验和验证会略微增加 CPU 使用率和传输时间，但它能捕获原本可能未被发现的数据损坏。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling checksum verification in RcloneView sync job settings" class="img-large img-center" />

## 使用文件夹比较检测不匹配

备份完成后，打开 RcloneView 中的**文件夹比较**。将一侧指向你的源，另一侧指向备份目标。RcloneView 会将文件分为三类：

- **匹配**：两侧相同
- **仅源存在**：存在于源但目标中缺失
- **仅目标存在**：存在于目标但源中没有
- **不同**：名称相同但属性（大小、哈希值或修改时间）不同

"不同"类别中的文件值得仔细检查。下载并比较一份样本，以确定内容是否真的不同，还是仅仅是提供商产生的元数据差异。

## 通过终端运行检查

如需进行深入的完整性检查，RcloneView 的**终端**标签页允许你直接运行 rclone 命令。使用 `rclone check` 彻底比较源和目标：

```
rclone check source:path destination:path --one-way
```

此命令会列出两侧所有存在差异的文件，并针对每个提供商使用可用的最佳哈希方式。输出结果会准确显示哪些文件不匹配，从而更容易判断问题是系统性的还是个别文件的问题。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running rclone check command in RcloneView Terminal" class="img-large img-center" />

## 使用不同设置重新运行

如果校验失败持续出现，且文件确实存在差异，请使用以下设置重新运行备份任务：

- **启用校验和验证**：确保 rclone 重新传输并验证
- **忽略已存在文件**：即使文件看似已存在，也强制重新传输
- **增加底层重试次数**：为成功传输提供更多机会

对于哈希算法不同的跨提供商备份，请在任务的高级设置中切换到**大小和修改时间**比较模式，而不是仅按哈希比较。这可以减少因哈希不兼容而产生的误报。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在同步任务步骤 2 的传输选项中启用**校验和验证**。
3. 备份完成后，使用**文件夹比较**识别任何差异。
4. 如需更深入的分析，可在**终端**标签页中运行 `rclone check`。

系统化的校验和验证与备份后比较，能让你确信你的云备份是逐字节精确的。

---

**相关指南：**

- [使用 RcloneView 修复云同步校验和不匹配](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [使用 RcloneView 进行校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [修复云同步传输后文件丢失问题](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
