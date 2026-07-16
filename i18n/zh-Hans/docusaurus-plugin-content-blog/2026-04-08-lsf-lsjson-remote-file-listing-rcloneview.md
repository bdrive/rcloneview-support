---
slug: lsf-lsjson-remote-file-listing-rcloneview
title: "使用 RcloneView Explorer 列出并分析远程文件"
authors:
  - tayson
description: "使用 RcloneView Explorer 以可视化方式列出、排序和分析远程云文件，用直观的图形界面替代 rclone lsf 和 lsjson 命令来进行文件管理。"
keywords:
  - rcloneview
  - rclone lsf
  - rclone lsjson
  - 远程文件列表
  - 云存储分析
  - 文件大小分析
  - 云文件管理
  - 存储使用情况
  - 目录比较
  - 云文件浏览器
tags:
  - feature
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView Explorer 列出并分析远程文件

> 了解云账户中存储了哪些内容,是有效管理这些账户的第一步。**RcloneView** Explorer 提供了可视化的文件列表体验,用直观的浏览、排序和分析功能取代了复杂的 CLI 命令。

rclone CLI 提供了强大的文件列表命令,例如 `lsf` 和 `lsjson`,可以以多种格式输出文件详情。这些命令对脚本编写很有用,但并不适合日常的文件浏览。要在成千上万行的终端输出中查找特定文件或识别占用大量空间的文件,既繁琐又容易出错。

RcloneView 的 Explorer 将这种体验转变为可视化和交互式的操作。你获得的是相同的底层数据,但呈现方式却是熟悉的文件管理器界面,支持排序、筛选和多列视图。你可以一目了然地看到文件大小、修改日期和类型,只需单击即可深入查看目录结构。

对于仍然需要原始 CLI 输出的用户,RcloneView 内置的终端让你只需按一下键就能使用 `rclone lsf` 和 `lsjson` 命令,在一个应用程序中兼得两者的优势。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Explorer 中的可视化文件列表

RcloneView 的 Explorer 面板以标准的文件管理器布局显示任意已配置远程的内容。选择一个远程并导航到某个目录时,你会看到:

- **文件和文件夹名称**,配有常见文件类型的可识别图标。
- **文件大小**,以易读的格式显示(KB、MB、GB)。
- **修改日期**,显示每个文件最后更新的时间。
- 目录的**文件数量**,以便你了解每个文件夹包含多少个项目。

这相当于运行 `rclone lsf --format "pst" remote:path` 的可视化等效版本,但你可以直接与每个项目进行交互。单击文件夹即可打开它。右键单击文件可执行复制、移动或删除等操作。选择多个文件可进行批量操作。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 按大小、日期和名称排序

列出远程文件最常见的原因之一,就是查找特定项目或识别某种模式。RcloneView 的 Explorer 支持基于列的排序,让这项工作变得轻而易举:

- **按大小排序**,可以快速找到占用存储配额最多的最大文件。这对于有存储限制的云服务提供商尤其有用,因为少数几个大文件可能就占据了大部分使用量。
- **按日期排序**,可以识别最近修改过的文件,找到数月未被触碰的过时内容,或验证最近的同步操作是否更新了预期的文件。
- **按名称排序**,便于在大致知道要查找内容时按字母顺序浏览。

单击任意列标题即可按该列排序。再次单击可反转排序顺序。这种简单的交互取代了在 CLI 中将 `rclone lsf` 输出通过管道传给 `sort` 命令的做法。

## 查找大文件并分析存储使用情况

存储成本会不断累积,了解你的空间都用在了哪里对于成本管理至关重要。RcloneView 帮助你分析存储使用情况,而无需运行单独的审计脚本:

1. 在 Explorer 中导航到某个远程的根目录。
2. 按大小降序排序,立即显示出最大的文件。
3. 深入查看大目录,了解哪些子目录对总使用量的贡献最大。

此工作流程取代了常见的 CLI 模式,即运行 `rclone lsjson --recursive remote: | jq 'sort_by(.Size) | reverse'` 并尝试以可视化方式解析 JSON 输出。在 Explorer 中,相同的信息以可排序、可点击的界面呈现。

如需更深入的分析,你可以使用 RcloneView 内置的终端运行 `rclone ncdu remote:`,直接在应用程序中提供交互式的存储使用情况细分。

## 比较目录树

RcloneView 的双面板 Explorer 布局专为跨远程比较目录内容而设计。在左侧加载一个远程,在右侧加载另一个,然后以可视化方式比较它们的结构:

- 识别存在于一个远程但不存在于另一个远程的文件。
- 发现文件大小的差异,这可能表明传输不完整。
- 验证同步操作是否产生了预期的结果。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

内置的比较功能更进一步,可自动突出显示两个目录之间的差异。这相当于运行 `rclone check source: dest:` 的可视化等效版本,但配有交互式显示,让你可以立即针对差异采取行动。

## 使用内置终端进行高级查询

对于超出可视化 Explorer 所能提供的高级文件列表需求,RcloneView 包含一个内置终端。这让你可以直接访问所有 rclone CLI 命令,包括:

**`rclone lsf`**,用于简单的格式化列表:
```
rclone lsf remote:documents --format "pst" --recursive
```
这会以扁平格式列出所有文件的路径、大小和时间戳,适合通过管道传输或保存。

**`rclone lsjson`**,用于结构化数据:
```
rclone lsjson remote:documents --recursive --no-modtime
```
这会以 JSON 格式输出文件元数据,便于进行程序化分析或输入到其他工具中。

**`rclone size`**,用于存储摘要:
```
rclone size remote:
```
这会快速提供远程上存储的文件数量和字节总数。

该终端在 RcloneView 内部运行,因此你无需打开单独的控制台或配置 rclone 路径。你现有的远程配置已经可用。

## 同时浏览多个远程

RcloneView 的 Explorer 支持同时打开多个远程。这对于管理跨多个云服务提供商文件的用户尤其有用:

- 在一个面板中打开 Google Drive,在另一个面板中打开 OneDrive,以比较文件夹结构。
- 浏览 S3 存储桶的同时参考对应的本地目录。
- 并排检查 Backblaze B2 和 Wasabi 上的文件,以验证跨提供商的备份。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

每个面板独立运行,因此你可以按照自己的节奏进行导航、排序和浏览,而不会影响另一个面板。当你发现需要在远程之间移动的文件时,只需拖放即可。

## 实用的文件分析工作流程

以下是一些常见的文件分析任务,以及如何在 RcloneView 中完成它们:

**在迁移前审计云存储:**
浏览源远程,按日期排序以区分活跃文件和过时文件,并决定哪些需要迁移、哪些需要归档或删除。这一准备步骤可以显著减少迁移时间和成本。

**验证备份完整性:**
并排打开源远程和备份远程,分别导航到相同的目录,并使用比较功能确认所有文件都已正确复制。

**查找重复或过时的文件:**
按名称排序以发现名称相似的文件,或按日期排序以找到多年未修改的文件。删除不必要的文件,以释放存储配额并降低成本。

**生成文件清单:**
使用内置终端运行 `rclone lsjson --recursive remote:`,并保存输出以用于文档记录、合规或审计目的。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程管理器中添加你的云存储远程。
3. 打开 Explorer,浏览任意远程,查看文件的大小、日期和类型。
4. 使用排序、比较和内置终端进行更深入的分析。

无论你需要快速的可视化浏览还是详细的文件清单,RcloneView 的 Explorer 都能将所有信息触手可及,而无需记住 CLI 语法。

---

**相关指南:**

- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
