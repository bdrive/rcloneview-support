---
slug: bisync-bidirectional-cloud-sync-rcloneview
title: "Bisync：使用 RcloneView 实现真正的双向云同步"
authors:
  - tayson
description: "通过 RcloneView 使用 rclone 的 bisync 功能，使两个云端位置保持双向同步。了解何时使用 bisync、如何设置以及如何处理冲突。"
keywords:
  - bisync rcloneview
  - bidirectional cloud sync rclone
  - rclone bisync guide
  - two-way cloud sync
  - sync both directions cloud
  - rcloneview bisync setup
  - rclone bidirectional sync
  - google drive bidirectional sync
  - onedrive two-way sync
  - cloud folder two-way mirror
tags:
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync：使用 RcloneView 实现真正的双向云同步

> 标准的 rclone 同步是单向的——它使目标位置与源位置保持一致。而 Bisync 更进一步：任一位置的更改都会传播到另一位置。如果你在位置 A 添加了一个文件，它会出现在位置 B，反之亦然。以下是在 RcloneView 中配置它的方法。

大多数云同步场景都是单向的：本地计算机备份到云端，或主云镜像到备份云。但有些工作流程需要真正的双向同步——两个人共同编辑的共享文件夹、必须保持同步的工作机和家用机，或作为对等方的两个云账户。Rclone 的 `bisync` 命令提供了这一功能，而 RcloneView 让你无需命令行即可完成配置。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Sync 与 Bisync：区别是什么？

| 行为 | rclone sync | rclone bisync |
|----------|------------|--------------|
| 方向 | 单向（源 → 目标） | 双向（两个方向） |
| 删除 | 若源中缺失则从目标中删除 | 双向传播删除操作 |
| 冲突 | 源始终优先 | 需要显式的冲突处理 |
| 数据丢失风险 | 方向错误时可能发生 | 风险较低；双方都会检查 |
| 复杂度 | 简单 | 更复杂；需要谨慎设置 |

## 何时使用 Bisync

**在以下情况使用 bisync：**
- 两个人或系统对同一文件夹进行更改。
- 你在多台无法始终同时在线的设备上编辑文件。
- 你希望将两个云账户作为活动镜像，双方都会产生更改。

**在以下情况使用常规 Sync：**
- 你有明确的主（源）和次（备份/目标）。
- 只有一方创建新文件——另一方是只读的。
- 简单性和可预测性是优先考虑因素。

## 在 RcloneView 中设置 Bisync

Bisync 需要一次性初始化（resync）来建立基准状态，之后的运行才能追踪更改。

### 第一步——添加两个远程

确保两个位置都已在 RcloneView 中配置为远程。例如：
- `gdrive-work:/Projects/Active/`（Google Drive 工作账户）
- `onedrive-home:/Projects/Active/`（OneDrive 家庭账户）

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes for bisync in RcloneView" class="img-large img-center" />

### 第二步——运行初始 resync

首次运行 bisync 时必须使用 `--resync` 来建立基准。在 RcloneView 的**终端**中：

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --resync --verbose
```

这将创建基准状态文件（存储在 `~/.cache/rclone/bisync/` 中），bisync 会在后续运行中使用这些文件来检测更改。resync 通过将较新的文件复制到双方，使两边保持一致。

### 第三步——在 RcloneView 中创建 Bisync 任务

1. 打开 RcloneView 中的**任务**。
2. 选择**自定义命令**或使用终端面板。
3. 输入用于后续运行的 bisync 命令：

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --verbose --log-file /tmp/bisync.log
```

4. 将其保存为任务，并设置为每小时或每天运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule bisync job in RcloneView" class="img-large img-center" />

## 冲突处理

当同一文件在两次运行之间在两个位置都被修改时，bisync 会检测到冲突。默认情况下，rclone bisync 会标记这些冲突，且不会覆盖任何一个版本。

添加 `--conflict-resolve newer` 可自动优先选择较新的文件：

```bash
rclone bisync path1 path2 --conflict-resolve newer
```

或者使用 `--conflict-resolve larger` 优先选择较大的文件（适用于文档持续增长的场景）。

未能自动解决的冲突文件会被重命名并加上 `.conflict` 后缀，以保留两个版本。

## 常用 Bisync 参数

| 参数 | 用途 |
|------|---------|
| `--resync` | 初始化或重新建立基准（使用一次） |
| `--conflict-resolve newer` | 通过优先选择较新文件自动解决冲突 |
| `--filters-file /path/to/filters` | 应用包含/排除规则 |
| `--max-delete 10` | 如果将删除超过 10 个文件则中止（安全措施） |
| `--dry-run` | 预览将进行的更改而不实际执行任何操作 |
| `--verbose` | 用于调试的详细输出 |

`--max-delete` 参数尤为重要——它可防止 bisync 因配置错误而意外删除大量文件。

## 监控 Bisync 运行

在每次运行后，于 RcloneView 的**任务历史**中检查 bisync 输出：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor bisync results in RcloneView" class="img-large img-center" />

一次健康的 bisync 运行会显示：
- 从 path1 复制到 path2 的文件
- 从 path2 复制到 path1 的文件
- 检测到的任何冲突及其解决方式
- 总耗时和传输统计信息

## Bisync 的局限性

- **不适用于对同一文件的同时编辑**——bisync 是在运行之间进行比较，而非实时的。
- **删除操作的传播可能带来风险**——一方删除的文件会在下次运行后在另一方被删除。
- **要求运行之间的状态稳定**——如果某次运行中途失败，请使用 `--resync` 重新运行以重建基准。
- **大型路径速度较慢**——基准比较会在每次运行时完整扫描两个位置。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 RcloneView 中**配置两个远程**。
3. 在 RcloneView 的终端中**运行初始 `--resync`** 以建立基准。
4. **安排定期的 bisync 运行**以进行持续同步。

Bisync 为任意一对 rclone 支持的远程——本地磁盘、云服务商、NAS 共享等——带来了真正的双向同步。

---

**相关指南：**

- [Sync、Copy、Move —— 区别详解](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [过滤规则与选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [避免因同步方向错误导致的数据丢失](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
