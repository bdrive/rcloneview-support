---
slug: sync-copy-move-difference-explained-rcloneview
title: "同步（Sync）、复制（Copy）、移动（Move）——你该用哪种云传输操作？"
authors:
  - tayson
description: "对何时使用同步、复制或移动来进行云传输感到困惑？本指南解释了它们之间的区别，以及在 RcloneView 中每种操作的适用场景。"
keywords:
  - rclone sync vs copy
  - cloud sync vs copy difference
  - when to use sync or copy
  - rclone move command
  - cloud transfer operations
  - sync copy move explained
  - rclone operations guide
  - cloud file operations
  - which cloud sync type
  - safe cloud transfer method
tags:
  - sync
  - copy
  - move
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步（Sync）、复制（Copy）、移动（Move）——你该用哪种云传输操作？

> 你想在多个云存储之间传输文件。RcloneView 提供了同步、复制和移动三种操作。它们听起来很相似，但选错了可能会删除你并不想丢失的文件。下面介绍每种操作的工作原理以及适用场景。

这是云文件管理中最重要的决策之一。每种操作对目标位置中存在、但源位置中不存在的文件的处理方式各不相同。理解这一点可以防止意外的数据丢失。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 三种操作

### 复制（Copy）

**它的作用**：将文件从源位置复制到目标位置。如果目标位置已存在相同的文件，则跳过；如果存在但内容不同，则覆盖。

**它不会做的事**：绝不会从目标位置删除任何文件。

```
Source:      A, B, C
Destination: B, D
After Copy:  B, D, A, C  (D is untouched, A and C are added)
```

### 同步（Sync）

**它的作用**：使目标位置与源位置保持一致。复制新增和已更改的文件。**会删除目标位置中源位置不存在的文件。**

```
Source:      A, B, C
Destination: B, D
After Sync:  A, B, C  (D is deleted! A and C are added)
```

### 移动（Move）

**它的作用**：与复制类似，但在文件成功传输后**会从源位置删除**这些文件。

```
Source:      A, B, C
Destination: B, D
After Move:
  Source: (empty)
  Destination: B, D, A, C
```

## 快速参考

| 行为 | 复制 | 同步 | 移动 |
|----------|:----:|:----:|:----:|
| 向目标添加新文件 | ✅ | ✅ | ✅ |
| 更新已更改的文件 | ✅ | ✅ | ✅ |
| 从目标删除文件 | ❌ | ✅ | ❌ |
| 从源删除文件 | ❌ | ❌ | ✅ |
| 适合用于备份 | ✅ | ⚠️ | ❌ |
| 生成完全镜像 | ❌ | ✅ | ❌ |

## 何时使用每种操作

### 何时使用复制：

- **备份** —— 你想要一个安全保障。复制永远不会从目标位置删除文件，因此即使你从源位置删除了某个文件，备份中仍会保留它。
- **首次迁移** —— 首次将数据迁移到新的云存储。
- **添加文件** —— 你想添加新内容而不影响现有文件。
- **不确定时** —— 复制是最安全的默认选择，它不会导致目标位置的数据丢失。

**示例：**
- 每日备份：Google Drive → Backblaze B2。
- 首次迁移：OneDrive → Google Drive。
- 交付客户：将完成的文件复制到客户的 Dropbox。

### 何时使用同步：

- **镜像** —— 目标位置应始终与源位置保持完全一致。
- **活跃的工作文件夹** —— 你希望目标位置反映所有更改，包括删除操作。
- **存储清理** —— 从源位置删除的文件也应从镜像中删除。

**示例：**
- 在 S3 上保留 NAS 的镜像（完全副本）。
- 在两位团队成员之间镜像项目文件夹。
- 使暂存服务器与生产环境的资源文件夹保持同步。

**警告**：同步会删除文件。务必先运行**模拟运行（dry run）**，预览将要删除的内容。

### 何时使用移动：

- **归档** —— 将旧文件移动到低成本存储，并从成本较高的源位置中删除它们。
- **处理流水线** —— 文件到达收件箱后被处理，然后被移动到归档位置。
- **释放空间** —— 将文件从已满的磁盘移动到云存储，同时删除本地副本。

**示例：**
- 将超过 90 天的文件从 Google Drive 移动到 S3 Glacier。
- 将处理完成的上传文件从暂存存储桶移动到归档存储桶。
- 将照片从已满的手机备份移动到云端归档。

## 模拟运行这道安全防线

在运行任何操作（尤其是同步）之前，请使用**模拟运行**准确预览将要发生的情况：

- 将要复制哪些文件。
- 将要删除哪些文件（仅同步）。
- 将要移动哪些文件（仅移动）。

这种预览不会产生任何实际影响，却能避免意外情况的发生。

## 先进行文件夹对比

在进行任何传输之前，使用文件夹对比功能了解当前状态：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before transferring" class="img-large img-center" />

它会展示：
- 两个位置中都存在的文件（以及它们是否一致）。
- 仅存在于源位置的文件。
- 仅存在于目标位置的文件。

## 常见错误

### 用同步来做备份

```
Day 1: Sync Google Drive → S3  (all files backed up)
Day 2: Accidentally delete a folder from Google Drive
Day 3: Sync Google Drive → S3  (folder deleted from S3 too!)
```

用**复制**来做备份可以避免这种情况。

### 想要镜像却用了复制

```
Day 1: Copy Source → Dest  (files transferred)
Day 2: Delete old files from Source
Day 3: Copy Source → Dest  (old files still on Dest, taking up space)
```

如果你希望目标位置保持干净，请使用**同步**。

### 想要保留两份副本却用了移动

移动会删除源位置的文件。如果你需要在两个位置都保留文件，请使用**复制**。

## 决策流程图

1. **你是否需要在两个位置都保留文件？**
   - 是 → 复制或同步。
   - 否（从源位置移除） → 移动。

2. **目标位置是否应与源位置完全一致？**
   - 是（包括删除操作） → 同步。
   - 否（只需添加新文件） → 复制。

3. **这是一次备份吗？**
   - 是 → 几乎总是应该用复制。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **对比文件夹**以了解当前状态。
3. 根据你的目标**选择合适的操作**。
4. **先进行模拟运行**以预览更改。
5. 放心地**执行**。

选对操作，做对事情。不要靠猜——要理解。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone 过滤规则详解](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
