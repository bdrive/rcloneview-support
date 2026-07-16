---
slug: min-age-max-age-time-based-filters-rcloneview
title: "在 RcloneView 中使用 Min-Age 和 Max-Age 基于时间的筛选器"
authors:
  - tayson
description: "在 RcloneView 中使用 min-age 和 max-age 基于时间的筛选器，仅同步、复制或备份特定时间窗口内修改过的文件。传输最近的更改或跳过旧文件。"
keywords:
  - rcloneview
  - min-age filter
  - max-age filter
  - time-based sync
  - rclone min-age
  - rclone max-age
  - sync recent files only
  - filter by date
  - incremental sync time
  - cloud sync filter date
tags:
  - feature
  - filters
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中使用 Min-Age 和 Max-Age 基于时间的筛选器

> 并非每个同步任务都需要传输所有文件。RcloneView 的基于时间的筛选器可让您仅针对特定时间窗口内修改过的文件——同步今天的更改、跳过 30 天以前的文件，或仅备份最近上传的内容。

Rclone 的 `--min-age` 和 `--max-age` 标志是强大的工具，可根据文件的修改时间来控制哪些文件参与同步、复制或移动操作。RcloneView 通过其自定义标志界面公开了这些选项，让您无需接触命令行即可精确控制基于时间的文件选择。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 理解 Min-Age 和 Max-Age

这两个标志作为基于文件修改日期的时间筛选器发挥作用：

- **`--max-age`**：仅包含在指定时间窗口内修改过的文件。2 小时前修改的文件可通过 `--max-age 24h`。3 天前修改的文件无法通过 `--max-age 24h`，会被跳过。
- **`--min-age`**：仅包含在指定时间窗口*之前*修改过的文件。30 天前修改的文件可通过 `--min-age 7d`。昨天修改的文件无法通过 `--min-age 7d`，会被跳过。

可以这样理解：
- `--max-age 24h` = "24 小时以内的文件"（最近修改过的）
- `--min-age 7d` = "7 天以前的文件"（不是最近修改的）

## 时间格式

这两个标志都支持灵活的时间格式：

| 格式 | 示例 | 含义 |
|---|---|---|
| 时长 | `30s`, `5m`, `2h`, `7d`, `4w` | 秒、分钟、小时、天、周 |
| 组合 | `1d2h30m` | 1 天 2 小时 30 分钟 |
| 绝对日期 | `2026-04-01` | 2026 年 4 月 1 日之前/之后的文件 |
| 日期和时间 | `2026-04-01T15:00:00` | 4 月 1 日下午 3 点之前/之后的文件 |

时长值是相对于任务运行时的当前时间计算的。

## 用例 1：仅同步今天的更改

当您的云存储中有数 TB 的数据，但只想同步今天发生变化的文件时：

```
--max-age 24h
```

将其添加到 RcloneView 任务配置中的自定义标志字段。同步任务将只考虑最近 24 小时内修改过的文件，从而大幅减少列出和比较文件所花费的时间。这对于每日增量备份很有用，因为通常每天只有一小部分文件发生变化。

## 用例 2：归档旧文件

将超过 90 天未变的文件从活跃存储移动到冷存储：

```
--min-age 90d
```

将此选项与**移动**操作（而非同步）配合使用，可将 90 天前的文件从 Google Drive 传输到 S3 Glacier。传输成功后，这些文件会从 Google Drive 中删除，释放活跃存储空间，同时将其保留在归档中。

## 用例 3：时间窗口同步

结合使用这两个标志，可以针对特定的时间窗口。例如，同步 7 到 30 天前修改过的文件：

```
--min-age 7d --max-age 30d
```

这对于分阶段的归档工作流非常有用——不到 7 天的文件保留在活跃存储中，7 到 30 天之间的文件移动到温存储，超过 30 天的文件移动到冷存储。

## 用例 4：跳过最近修改的文件

在迁移过程中，您可能希望跳过正在被编辑的文件，以避免传输未完成的工作：

```
--min-age 1h
```

这可确保只有至少稳定了一小时的文件才会被传输。当前正在编辑或保存的文件会留到下一次同步运行时处理。

## 用例 5：夜间备份当天工作内容

对于仅捕获当天工作内容的夜间备份任务：

```
--max-age 25h
```

使用 25 小时（而不是 24 小时）可与前一天的备份形成 1 小时的重叠，确保不会因备份计划与文件修改时间之间的时间差而遗漏任何文件。

## 在 RcloneView 中应用时间筛选器

在 RcloneView 的任务配置中：

1. 打开同步或复制任务设置。
2. 导航到高级选项或自定义标志部分。
3. 在标志字段中添加 `--max-age 24h` 或 `--min-age 7d`（或两者都添加）。
4. 保存任务并运行。

这些标志适用于任务期间的每一次文件比较。不符合时间标准的文件会被完全跳过——它们不会被列出、比较或传输。这可以显著缩短大型远程存储的任务耗时。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a time-filtered sync job in RcloneView" class="img-large img-center" />

## 与其他筛选器结合使用

基于时间的筛选器可以与其他 rclone 筛选选项配合使用：

- **与包含/排除结合**：`--max-age 24h --include "*.pdf"` 仅同步最近 24 小时内修改过的 PDF 文件。
- **与大小筛选结合**：`--max-age 7d --min-size 1M` 仅同步最近一周内修改过的、大于 1 MB 的文件。
- **与目录筛选结合**：`--max-age 24h --include "/projects/**"` 将范围限定在特定目录内。

这种可组合性使您无需复杂的脚本即可构建精确的传输规则。

## 先进行试运行

在对生产数据运行基于时间的筛选任务之前，请使用 RcloneView 的试运行模式来预览将受影响的文件。试运行会列出符合您筛选条件的文件，但不会实际传输它们。这可以在正式执行操作之前，确认您的 `--min-age` 和 `--max-age` 值选中了正确的文件。

## 常见陷阱

- **时区**：修改时间是按 UTC 进行比较的。如果您的本地时区与 UTC 存在较大偏移，请相应调整您的时长值，或使用绝对日期格式。
- **提供商精度**：某些云存储提供商（尤其是 Google Drive）报告的修改时间精度有限。在 Google Drive 上"今天"修改的文件，其时间戳可能与实际修改时间相差几秒钟。
- **同步与复制配合 min-age 使用**：将 `--min-age` 与同步一起使用可能存在风险——同步会删除目标位置中源位置不存在的文件。如果 `--min-age` 从源文件列表中过滤掉了最近的文件，同步可能会在目标位置删除它们。在使用 `--min-age` 时请使用复制（而非同步），以避免意外删除。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在任务管理器中创建同步或复制任务。
3. 在自定义标志部分添加 `--max-age` 或 `--min-age` 标志。
4. 使用试运行进行测试，验证文件选择结果。
5. 安排任务以实现自动化的基于时间的备份。

基于时间的筛选器让 RcloneView 成为增量备份、分阶段归档和定向同步操作的精密工具。使用它们可以缩短传输时间、减少带宽占用，并实现复杂的数据生命周期工作流。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
