---
slug: fix-rclone-high-memory-cpu-usage-rcloneview
title: "使用 RcloneView 修复 Rclone 传输中的高内存和 CPU 占用问题"
authors:
  - tayson
description: "修复云传输过程中 rclone 的高内存和 CPU 占用问题。学习使用 RcloneView 的可视化界面调整传输数、检查器数、VFS 缓存和缓冲区设置。"
keywords:
  - rcloneview
  - rclone high memory usage
  - rclone cpu usage
  - rclone performance tuning
  - rclone transfers checkers
  - rclone vfs cache
  - rclone buffer size
  - cloud sync performance
  - rclone slow transfer
  - fix rclone memory
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 修复 Rclone 传输中的高内存和 CPU 占用问题

> Rclone 传输占用了你所有的内存,或者把 CPU 拉满到 100%?**RcloneView** 让你无需记忆命令行参数,就能轻松找出原因并调整性能设置。

如果你注意到系统在云传输期间变得非常卡顿,你并不是唯一遇到这种情况的人。Rclone 功能强大,但其默认设置或配置不当的选项可能会消耗大量系统资源——尤其是在处理大量文件、挂载驱动器或并行传输时。这些症状很常见:风扇狂转、应用程序无响应,以及传输任务消耗的资源似乎远超预期。

好消息是,大多数高资源占用的场景都有简单直接的解决方法。本指南将介绍 rclone 中导致内存和 CPU 占用过高的最常见原因,并展示如何使用 RcloneView 的可视化配置工具来解决这些问题。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常见症状

在深入探讨解决方案之前,先来看看 rclone 操作期间高资源占用通常会有哪些表现:

- **内存占用高**:rclone 进程占用 1 GB 甚至更多内存,有时会持续增长直到系统内存耗尽。
- **CPU 飙升**:传输过程中一个或多个 CPU 核心被占满至 100%,尤其是在列出大型目录时。
- **系统无响应**:rclone 运行时,其他应用程序出现卡死或延迟。
- **传输失败**:内存不足错误导致传输意外中止。
- **性能下降**:矛盾的是,过多的并行操作反而会因资源争用而拖慢整体速度。

## 并发传输和检查器数量过多

高资源占用最常见的原因是并行传输和检查器数量过多。Rclone 默认使用 4 个传输和 8 个检查器,但用户往往会调高这些数值,以为这样能加快速度。同时运行 32 或 64 个并发传输可能会使你的系统和网络连接不堪重负。

**在 RcloneView 中的修复方法:**

在创建或编辑同步任务时,将 `--transfers` 标志设置为合理的数值。先从 4 开始,只有在你的带宽和系统能够承受的情况下再逐步增加。将 `--checkers` 设置为 8 或更低。对于大多数家庭网络连接,2-4 个传输和 4-8 个检查器能在速度和资源消耗之间取得较好的平衡。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 大型文件列表和目录扫描

当 rclone 扫描包含数十万甚至数百万文件的目录时,它会在内存中构建每个文件及其元数据的列表。对于非常大的目录,这可能会消耗数 GB 的内存。

**修复方法:**

- 在支持的情况下使用 `--fast-list`。该标志通过更少的 API 调用来获取目录列表,对某些服务商(如 S3)来说可以实际降低内存占用,但对另一些服务商则可能会增加内存占用。请针对你所使用的具体服务商进行测试。
- 通过定位特定的子目录,而非一次性同步整个云账户,将大型同步任务拆分为更小的部分。
- 使用过滤规则(`--include`、`--exclude`)来限制每次同步操作的范围。需要列出的文件越少,消耗的内存也越少。

## 挂载驱动器导致的 VFS 缓存膨胀

如果你将云存储挂载为本地驱动器,VFS(虚拟文件系统)缓存可能会显著增长。默认情况下,rclone 可能会缓存大量数据,以便在挂载驱动器上提供流畅的读写性能。随着时间推移,这个缓存可能会占用大量磁盘空间和内存。

**修复方法:**

- 将 `--vfs-cache-max-size` 设置为合理的限制,例如 `1G` 或 `5G`,具体取决于你的可用资源。
- 设置 `--vfs-cache-max-age` 以自动清理旧的缓存文件。对于大多数工作流程,`1h` 或 `4h` 这样的值效果不错。
- 选择合适的 `--vfs-cache-mode`。如果你只需要读取访问或偶尔写入,请使用 `minimal` 或 `writes` 而非 `full`。完整缓存模式会在文件可访问之前缓存整个文件,这会占用最多的内存和磁盘空间。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## 缓冲区大小配置不当

`--buffer-size` 标志控制着 rclone 在传输过程中为每个文件分配的缓冲内存量。默认值为每次传输 16 MB。如果你同时运行 16 个并发传输,仅缓冲区内存就会达到 256 MB。如果将 `--buffer-size` 增加到 256 MB,再加上 16 个传输,仅缓冲区就会消耗 4 GB 内存。

**修复方法:**

- 除非有特殊原因需要增加,否则请将 `--buffer-size` 保持在默认值 `16M`。
- 如果你因大文件传输而调高了该值,请相应地减少 `--transfers`,以保持在可用内存范围内。
- 对于内存有限的系统(4 GB 或更少),可以考虑将 `--buffer-size` 降低到 `8M` 甚至 `4M`。

## 挂载开销和 FUSE 操作

挂载的驱动器会增加 CPU 开销,因为每一次文件操作(打开、读取、写入、状态查询)都要经过 FUSE 层并触发 API 调用。像防病毒软件、缩略图生成器或搜索索引器这类会频繁扫描目录的应用程序,可能会在挂载驱动器上持续引发 CPU 和 API 占用。

**修复方法:**

- 将挂载驱动器的路径从防病毒软件扫描中排除。
- 在文件资源管理器设置中禁用对挂载驱动器的缩略图生成。
- 使用 `--dir-cache-time` 延长目录列表的缓存时间(例如 `5m` 或 `30m`),以减少重复的 API 调用。
- 设置 `--attr-timeout` 以延长文件属性的缓存时间,从而减少状态查询调用。
- 如果你只需要读取文件,请使用 `--read-only` 以避免与写入相关的开销。

## 在 RcloneView 中监控资源使用情况

RcloneView 提供实时传输监控,帮助你识别资源何时被过度消耗。在传输过程中,你可以观察传输速度、文件数量和整体进度。如果速度下降或界面变得卡顿,这就是应该降低并行度的信号。

使用任务历史视图来查看过去的传输记录并识别其中的规律。如果某些任务持续耗时过长或反复失败,这些就是需要调优的对象。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 快速参考:推荐设置

| 设置项 | 低资源系统 | 标准系统 | 高性能系统 |
|---|---|---|---|
| `--transfers` | 2 | 4 | 8-16 |
| `--checkers` | 4 | 8 | 16 |
| `--buffer-size` | 4M | 16M | 32M |
| `--vfs-cache-max-size` | 512M | 2G | 10G |
| `--vfs-cache-mode` | minimal | writes | full |

请根据你的可用内存、CPU 核心数和网络带宽来调整这些数值。建议从保守的设置开始,逐步增加。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开一个现有的同步任务或创建一个新任务,并检查传输和检查器的设置。
3. 如果传输过程中系统出现卡顿,请减少 `--transfers` 和 `--checkers`。
4. 对于挂载的驱动器,配置 VFS 缓存限制,以防止内存无限制增长。

对并行度和缓存设置进行小幅调整,就能在不明显影响传输速度的情况下,大幅改善系统的响应能力。

---

**相关指南:**

- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
