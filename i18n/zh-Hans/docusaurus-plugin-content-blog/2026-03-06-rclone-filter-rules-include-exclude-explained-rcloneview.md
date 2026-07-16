---
slug: rclone-filter-rules-include-exclude-explained-rcloneview
title: "Rclone 过滤规则详解：让同步更智能的包含与排除模式"
authors:
  - tayson
description: "掌握 rclone 的过滤规则，只同步你真正需要的内容。学习 include、exclude、filter-from 以及最小/最大文件大小与时间的匹配模式——附带 RcloneView 的实用示例。"
keywords:
  - rclone filter rules
  - rclone include exclude
  - rclone exclude folder
  - rclone filter from file
  - rclone sync specific files
  - rclone ignore files
  - rclone exclude pattern
  - rclone filter examples
  - rclone min size max size
  - rclone selective sync
tags:
  - rclone
  - filters
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone 过滤规则详解：让同步更智能的包含与排除模式

> 同步所有内容既浪费又危险，同步错误的内容更是如此。Rclone 的过滤规则让你能够精确控制传输的内容——但其语法可能会让人感到困惑。本指南将逐一拆解讲解，并附带实用示例。

在云端之间同步或复制文件时，你很少需要同步全部内容。也许你只需要 `.pdf` 文件，或者除 `.tmp` 文件之外的所有内容，又或者是过去 7 天内修改过的文件，或者小于 100 MB 的文件。Rclone 的过滤系统可以处理所有这些需求——而 RcloneView 让你能够在任务设置中以可视化方式配置这些过滤规则。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone 过滤规则的工作原理

Rclone **按从上到下的顺序**处理过滤规则。对每个文件，它会逐条检查规则：

1. 如果某条规则匹配，该文件将根据该规则被包含或排除。
2. 如果没有任何规则匹配，该文件**默认会被包含**。

理解这种"先匹配者优先"的行为至关重要。顺序很关键。

## 基本模式

### 排除特定文件或文件夹

```
--exclude "*.tmp"
--exclude "node_modules/**"
--exclude ".DS_Store"
```

这些模式会排除：
- 目录树中任意位置的所有 `.tmp` 文件。
- 整个 `node_modules` 文件夹及其内容。
- 所有 `.DS_Store` 文件（macOS 元数据文件）。

### 仅包含特定文件

```
--include "*.pdf"
--include "*.docx"
```

使用 `--include` 时，rclone 会**自动排除其他所有内容**。因此 `--include "*.pdf"` 表示"只同步 PDF 文件，其他一律不同步"。

### 组合使用 include 和 exclude

```
--include "*.jpg"
--include "*.png"
--exclude "*"
```

这明确只包含 JPG 和 PNG 文件。末尾的 `--exclude "*"` 会捕获所有其他文件。

## --filter 标志

`--filter` 标志可以在一条规则中同时实现包含和排除：

```
--filter "+ *.pdf"
--filter "+ *.docx"
--filter "- *"
```

`+` 前缀表示包含，`-` 表示排除。这与分别使用 `--include` 和 `--exclude` 标志的效果相同，但更紧凑。

## Filter-From 文件

对于复杂的规则集，可以将过滤规则放入一个文件中：

```
--filter-from /path/to/filters.txt
```

**filters.txt：**
```
# Include documents
+ *.pdf
+ *.docx
+ *.xlsx

# Include images
+ *.jpg
+ *.png

# Exclude everything else
- *
```

以 `#` 开头的行是注释。对于规则超过 2-3 条的任何同步任务，这都是推荐的做法。

## 目录过滤

### 排除特定目录

```
--exclude "backup/**"
```

`**` 表示"该目录及其内部的所有内容"。

### 仅包含特定目录

```
--include "/projects/**"
--exclude "*"
```

这只会同步根目录下的 `projects` 文件夹。

### 按模式排除目录

```
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "node_modules/**"
```

这对于同步代码仓库的开发者来说很常见——跳过版本控制和依赖文件夹。

## 大小过滤

### 最小文件大小

```
--min-size 1M
```

跳过小于 1 MB 的文件。适用于忽略缩略图或微小的缓存文件。

### 最大文件大小

```
--max-size 100M
```

跳过大于 100 MB 的文件。适用于只想要文档而不想要视频文件的场景。

### 大小单位

- `k` 或 `K` — 千字节
- `M` — 兆字节
- `G` — 千兆字节

示例：`--min-size 500k --max-size 2G` 会同步大小在 500 KB 到 2 GB 之间的文件。

## 时间过滤

### 仅最近的文件

```
--max-age 7d
```

只同步过去 7 天内修改过的文件。非常适合活跃项目的增量备份。

### 仅较旧的文件

```
--min-age 30d
```

只同步 30 天内未发生变化的文件。适用于归档陈旧数据。

### 时间单位

- `ms` — 毫秒
- `s` — 秒
- `m` — 分钟
- `h` — 小时
- `d` — 天
- `w` — 周
- `M` — 月
- `y` — 年

## 实用示例

### 示例 1：仅备份文档

将 Google Drive 中的 PDF、Word 文档和电子表格同步到 Backblaze B2：

```
--include "*.pdf"
--include "*.docx"
--include "*.xlsx"
--include "*.pptx"
--exclude "*"
```

### 示例 2：跳过大型视频文件

同步除超过 500 MB 的视频文件之外的所有内容：

```
--exclude "*.mp4"
--exclude "*.mov"
--exclude "*.avi"
--exclude "*.mkv"
```

或者使用大小过滤：`--max-size 500M`

### 示例 3：开发者项目同步

同步代码项目，但不包含依赖和构建产物：

```
--exclude "node_modules/**"
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "dist/**"
--exclude "build/**"
--exclude "*.pyc"
```

### 示例 4：归档 90 天以上的文件

将 Google Drive 中的旧文件移动到 S3 Glacier：

```
--min-age 90d
```

### 示例 5：照片备份（跳过 RAW，保留 JPEG）

```
--include "*.jpg"
--include "*.jpeg"
--include "*.png"
--include "*.heic"
--exclude "*.cr2"
--exclude "*.nef"
--exclude "*.arw"
--exclude "*"
```

## 在 RcloneView 中使用过滤规则

在 RcloneView 中创建同步或复制任务时，你可以在任务配置中添加过滤规则。这些规则会被直接传递给 rclone：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure filter rules in RcloneView jobs" class="img-large img-center" />

### 使用空运行进行验证

在测试新的过滤规则时，务必先使用空运行（dry run）。这会准确显示哪些文件会被包含或排除，而不会实际执行传输。

### 结合过滤规则进行文件夹对比

使用[文件夹对比](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)来查看源端和目标端的状态。结合过滤规则，这能帮助你准确了解将要同步的内容。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison to verify filter results" class="img-large img-center" />

## 常见错误

### 忘记在目录后加上 `**`

```
# Wrong — only excludes a FILE named "logs"
--exclude "logs"

# Right — excludes the logs DIRECTORY and everything in it
--exclude "logs/**"
```

### 只使用 include 而不排除其余内容

```
# This includes PDFs but doesn't exclude anything else
--include "*.pdf"

# This works — include already implies "exclude everything else"
# But only when using --include alone
```

### 顺序很重要

```
# This excludes everything, then tries to include (too late!)
--exclude "*"
--include "*.pdf"

# This works — include first, then exclude the rest
--include "*.pdf"
--exclude "*"
```

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在配置中**创建带有过滤规则的任务**。
3. **先进行空运行**，验证过滤规则是否匹配到正确的文件。
4. 确认无误后**运行任务**。
5. 对于复杂、可复用的规则集，**使用 filter-from 文件**。

过滤规则能将粗放的"同步一切"变为精准的"只同步我需要的内容"。一次掌握，处处受用。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
