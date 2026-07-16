---
slug: custom-rclone-flags-advanced-options-rcloneview
title: "在 RcloneView 任务中使用自定义 rclone 参数和高级选项"
authors:
  - tayson
description: "了解如何在 RcloneView 中添加自定义 rclone 参数以进行性能调优、调试和高级任务配置。涵盖 transfers、checkers、fast-list 等。"
keywords:
  - rclone custom flags
  - rcloneview advanced options
  - rclone transfers flag
  - rclone fast-list performance
  - rclone checkers setting
  - rclone no-traverse flag
  - rclone size-only flag
  - rcloneview job configuration
  - rclone performance tuning
  - rclone debugging flags
tags:
  - feature
  - rclone
  - tips
  - cli
  - performance
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 任务中使用自定义 rclone 参数和高级选项

> RcloneView 会自动处理常见情况，但 rclone 的真正威力在于它的参数。知道该添加哪些参数——以及在哪里添加——可以将传输时间缩短一半，或解决顽固的边缘情况。

Rclone 拥有数百个命令行参数，可以控制从传输并行度、校验和行为到重试逻辑的方方面面。RcloneView 为最常见的操作提供了简洁的界面，但它也允许你在任何任务中注入自定义参数，以应对默认设置不够用的情况。本指南将介绍最有用的参数、何时使用它们，以及如何在 RcloneView 中配置它们。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中何处添加自定义参数

RcloneView 支持在两个地方使用自定义参数：

1. **任务配置**——在创建或编辑任务（复制、同步、移动）时，有一个用于附加参数的字段。按照命令行中的写法输入即可。
2. **终端**——对于一次性命令，打开终端面板，输入包含所需参数的完整 rclone 命令。

添加到已保存任务中的参数会在每次运行时持续生效，因此只需配置一次，之后每次执行任务（包括计划任务）都会应用这些参数。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView job configuration with custom flags" class="img-large img-center" />

## 性能调优参数

这些参数直接影响传输速度和资源使用情况。

### --transfers N

控制并行传输的文件数量。默认值为 4。

```bash
--transfers 16
```

当文件数量较多且体积较小，或云存储提供商支持高并发时，可以增大此值。S3、B2 和 Wasabi 可以很好地处理 16-32 个并行传输。Google Drive 在超过 8-10 个时可能会限速。

### --checkers N

控制并行检查（比较）的文件数量。默认值为 8。

```bash
--checkers 32
```

在对包含大量文件的目录执行同步或检查操作时，可以增大此值。检查阶段通常才是瓶颈所在，而不是传输本身。

### --fast-list

通过在单次请求中获取所有对象，使用更少的 API 调用来列出目录。对于拥有大型存储桶的 S3 兼容云存储提供商，速度会大幅提升。

```bash
--fast-list
```

权衡之处：由于整个列表都保存在内存中，会占用更多内存。在拥有数百万对象的存储桶上，这可能会消耗数 GB 的内存。

### --no-traverse

完全跳过对目标位置的列表操作。适用于向包含数百万现有文件的目标位置复制少量文件的情况。

```bash
--no-traverse
```

如果不使用此参数，rclone 会列出整个目标位置以检查已存在的文件。如果你知道目标位置的大部分内容都不相关（例如，将 10 个新文件复制到一个包含 500 万个对象的存储桶中），`--no-traverse` 可以节省数分钟的列表时间。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane view for configuring transfer jobs" class="img-large img-center" />

### --buffer-size

控制每个文件传输的内存缓冲区大小。默认值为 16 MiB。

```bash
--buffer-size 64M
```

在高带宽连接上传输大文件时，增大此值可以减少 I/O 停顿。如果内存有限，可以减小此值。

### --multi-thread-streams N

单个文件多线程下载时使用的流数量。默认值为 4。

```bash
--multi-thread-streams 8
```

在从支持字节范围请求的云存储提供商下载体积较大的单个文件时会有所帮助。

## 比较和行为参数

这些参数会改变 rclone 判断需要传输哪些内容的方式。

### --size-only

仅按文件大小比较文件，忽略修改时间和校验和。

```bash
--size-only
```

当时间戳不可靠时（某些 SFTP 服务器上很常见），或者你想要以牺牲检测同大小变更的能力为代价获得最快的比较速度时，可以使用此选项。

### --ignore-existing

跳过目标位置上已存在的文件，无论其大小或日期如何。

```bash
--ignore-existing
```

非常适合从不修改现有文件、只添加新文件的增量上传场景。比逐一比较每个文件要快得多。

### --ignore-size

仅按修改时间比较文件，忽略文件大小。

```bash
--ignore-size
```

很少需要用到，但在某些云存储提供商对特定文件类型报告错误大小时会有用。

### --update

跳过在目标位置上更新的文件。

```bash
--update
```

适用于类似双向同步的工作流，即你只想复制在目标位置上较旧的文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders with custom comparison flags" class="img-large img-center" />

## 重试和可靠性参数

### --retries N

失败操作的重试次数。默认值为 3。

```bash
--retries 10
```

在网络不稳定或云存储提供商偶尔出错的情况下，可以增大此值。

### --retries-sleep DURATION

重试之间的等待时间。默认值为 0。

```bash
--retries-sleep 5s
```

在重试之间添加延迟，适用于被云存储提供商限速的情况。

### --low-level-retries N

底层操作（HTTP 请求）的重试次数。默认值为 10。

```bash
--low-level-retries 20
```

### --timeout DURATION

IO 空闲超时时间。默认值为 5m0s。

```bash
--timeout 10m
```

对于连接非常慢或延迟较高的云存储提供商，可以增大此值。

## 调试和日志参数

当任务失败或出现异常行为时，这些参数有助于诊断问题。

### -v / -vv

详细输出和更详细输出。

```bash
-v
```

显示每个文件的传输过程和基本进度信息。使用 `-vv` 可获取包括 HTTP 请求在内的详细调试输出。

### --log-file PATH

将日志写入文件而不是控制台。

```bash
--log-file /tmp/rclone-debug.log
```

### --log-level DEBUG

显式设置日志级别。

```bash
--log-level DEBUG
```

产生最详细的输出。在报告问题或调查异常行为时使用。

### --dry-run

模拟操作过程而不进行任何实际更改。

```bash
--dry-run
```

在测试新的参数组合时，务必先运行此选项，以确认其行为符合预期。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer with verbose logging in RcloneView" class="img-large img-center" />

## 按任务配置参数

RcloneView 允许你为不同任务保存不同的参数集。以下是一些实用的组合：

**向 S3 同步大文件：**
```
--transfers 8 --checkers 16 --fast-list --buffer-size 64M
```

**小文件的增量备份：**
```
--transfers 32 --checkers 64 --ignore-existing --fast-list
```

**先进行模拟运行的谨慎同步：**
```
--dry-run -v
```
然后移除 `--dry-run` 进行实际运行。

**调试失败的传输：**
```
-vv --log-file /tmp/debug.log --retries 1
```

## 除非你清楚自己在做什么，否则应避免使用的参数

| 参数 | 风险 |
|------|------|
| `--delete-before` | 在传输之前删除目标位置的文件——如果传输中途失败会很危险 |
| 未经测试的 `--max-delete N` | 如果设置得过低，可能会阻止清理操作 |
| `--no-check-certificate` | 禁用 TLS 验证——存在安全风险 |
| `--ignore-checksum` | 跳过完整性验证——违背了校验和的初衷 |

## 最佳实践

- **从默认设置开始**——rclone 的默认设置对大多数工作负载来说都是合理的。只有在遇到具体问题或可衡量的瓶颈时才添加参数。
- **在应用于生产任务之前，使用 --dry-run 进行测试**。
- **记录你的参数**——在保存带有自定义参数的任务时，记下每个参数的用途，方便未来的自己（或团队成员）理解其意图。
- **前后对比基准测试**——在使用和不使用性能参数的情况下测量传输时间，以确认它们确实对你的工作负载有帮助。
- **在生产任务中使用 -v**——由此产生的轻微开销，换来对每次运行过程的可见性是值得的。

---

**相关指南：**

- [使用检查和比较验证云文件完整性](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [恢复中断和失败的传输](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [云到云传输和同步](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
