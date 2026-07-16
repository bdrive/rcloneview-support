---
slug: folder-comparison-guide-detect-differences-rcloneview
title: "文件夹对比深度指南——检测云存储位置之间的每一处差异"
authors:
  - tayson
description: "RcloneView 的文件夹对比功能可以发现两个云存储位置之间缺失的文件、大小不匹配以及同步偏差。附带实用示例的完整指南。"
keywords:
  - folder comparison tool
  - compare cloud folders
  - detect missing files cloud
  - cloud sync verification
  - compare google drive onedrive
  - folder diff tool
  - cloud storage comparison
  - verify cloud backup
  - find missing cloud files
  - cloud folder diff
tags:
  - folder-comparison
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 文件夹对比深度指南——检测云存储位置之间的每一处差异

> 你上周做了一次备份。所有文件都传过去了吗？大小是否正确？有没有遗漏？唯一确认的方法就是逐个文件对比源和目标。这正是文件夹对比功能所做的事。

文件夹对比是 RcloneView 最有价值的功能之一。它可以对比两个存储位置——本地、NAS 和云存储的任意组合——并准确显示出两者之间的差异。缺失的文件、大小不匹配、日期差异以及仅存在于一侧的文件都会被清晰地标识出来。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 文件夹对比显示的内容

### 文件分类

对比两个位置后，文件会被归类为：

- **匹配（Match）**——文件在两个位置都存在，且大小和修改时间相同。✅
- **仅左侧（Left only）**——文件仅存在于源（左侧）。可能需要复制。
- **仅右侧（Right only）**——文件仅存在于目标（右侧）。可能是孤立文件或多余的副本。
- **不同（Different）**——文件在两个位置都存在，但大小或日期不同。可能需要更新。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison results" class="img-large img-center" />

## 何时使用文件夹对比

### 1）备份之后——验证完整性

在完成任何复制或同步任务后，对比源和目标：

- **全部匹配？** → 备份已完成。
- **有仅左侧的文件？** → 这些文件没有被备份。请调查原因。
- **有仅右侧的文件？** → 文件已从源中删除，但仍保留在备份中（对于复制任务来说，这是正常现象）。

### 2）同步之前——预览变更

在运行同步任务之前，先对比一下将会发生哪些变化：

- **仅左侧** → 将被复制到目标。
- **仅右侧** → 将从目标中被**删除**（仅限同步任务！）。
- **不同** → 将被覆盖。

这就像一次可视化的演练（dry run）。

### 3）迁移之后——确认没有遗漏

从一个云迁移到另一个云之后：

- 对比旧云和新云。
- 每个文件都应该是“匹配”或“仅右侧”（已经在目标中）。
- 任何“仅左侧”的文件都是被遗漏的，需要重新传输。

### 4）定期审计——检测偏差

即使有定时同步，事情也可能在无声无息中出错。每月对比可以发现：

- 未被报告的传输失败。
- 被限流跳过的文件。
- 损坏的文件（大小不同）。
- 在任务过程中过期的 OAuth 令牌。

## 实用示例

### 对比 Google Drive 和 S3 备份

源：Google Drive（主存储）。
目标：S3（备份）。

**健康备份后的预期结果：**
- 大多数文件：匹配 ✅
- 部分“仅左侧”：自上次备份以来添加到 Google Drive 的文件（下次将被复制）。
- 少量“仅右侧”：已从 Google Drive 删除但在备份中保留的文件（这是好事——说明你的备份保留了它们）。

### 对比两个 NAS 卷

左侧：NAS 卷 1（活动数据）。
右侧：NAS 卷 2（镜像）。

**任何差异都表明镜像已不同步。** 请立即修复。

### 在注销云账户之前进行对比

在取消 Dropbox 之前：
1. 对比 Dropbox 与 Google Drive（数据迁移到的位置）。
2. 确保没有“仅左侧”的文件（Dropbox 中的所有内容都已在 Google Drive 中）。
3. 只有在此之后才能取消 Dropbox。

## 对比选项

### 检查方式

- **大小**——对比文件大小。速度快，但无法发现位级损坏。
- **修改时间**——对比时间戳。适合检测已更新的文件。
- **校验和（Checksum）**——对比文件哈希值（MD5、SHA1）。速度最慢，但最为彻底。可以发现位衰变（bit-rot）和损坏。

对于关键数据，请使用校验和。对于日常检查，大小 + 修改时间已经足够。

### 性能提示

- **大型目录（10,000+ 文件）**——对比可能需要几分钟。请耐心等待。
- **跨云对比**——需要列出两个云的内容。使用 `--fast-list` 以提高效率。
- **缩小范围**——对比特定子目录而非整个云，以获得更快的结果。

## 针对差异采取行动

对比完成后，你可以直接采取行动：

- **仅左侧的文件** → 选中并复制到右侧。
- **不同的文件** → 选中并在右侧更新。
- **仅右侧的文件** → 审查是保留还是删除。

这使得文件夹对比不仅仅是一个诊断工具，更是一个工作流工具。

## 与批量任务集成

v1.3 批量任务可以包含对比步骤：

1. 从源复制到目标。
2. 对比源与目标。
3. 通过 Slack 报告任何差异。

这种自动化的备份后验证工作流，能确保你始终了解备份的状态。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加你要对比的两个位置**。
3. 在两者之间**运行文件夹对比**。
4. **查看结果**——匹配、仅左侧、仅右侧、不同。
5. **针对差异采取行动**——复制、更新或调查。

如果你无法验证它，就无法信任它。

---

**相关指南：**

- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务历史与监控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
