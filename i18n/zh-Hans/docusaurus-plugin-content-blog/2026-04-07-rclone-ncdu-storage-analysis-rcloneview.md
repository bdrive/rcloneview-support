---
slug: rclone-ncdu-storage-analysis-rcloneview
title: "在 RcloneView 中使用 Rclone NCDU 分析云存储使用情况"
authors: [tayson]
description: "通过 RcloneView 使用 rclone ncdu 分析云存储使用情况、查找大文件，并管理多个云服务商的磁盘空间。"
keywords:
  - rclone ncdu
  - 云存储分析
  - 云端磁盘使用情况
  - rcloneview 存储分析器
  - 查找云端大文件
  - 云存储空间
  - rclone 磁盘使用情况
  - 存储使用明细
  - 云文件夹大小
  - 分析远程存储
tags: [RcloneView, feature, cloud-storage, tips, guide, cli, monitoring, dashboard, performance]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中使用 Rclone NCDU 分析云存储使用情况

> 借助 rclone 强大的 NCDU 工具，通过 RcloneView 集成的终端，准确了解你的云存储空间都用在了哪里。

云存储费用可能会悄悄增加。这里有一个被遗忘的备份文件夹,那里有一批未压缩的视频文件，转眼间你就在为自己都没意识到在使用的数 TB 存储空间付费。Rclone 内置了 NCDU（NCurses Disk Usage）工具，可以扫描你的远程存储，并呈现一个可交互、可导航的目录大小明细。通过 RcloneView 集成的终端和文件浏览器，你可以运行 ncdu 扫描，识别占用空间的文件和文件夹，并立即采取行动来回收存储空间。本指南涵盖了从基本扫描到跨多个云服务商的高级分析工作流的所有内容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么是 Rclone NCDU？

Rclone NCDU 是经典 Linux `ncdu`（NCurses Disk Usage）工具的云端适配版本。原版 ncdu 分析本地文件系统，而 rclone 的实现可以配合 rclone 支持的任何远程存储后端使用，包括 Google Drive、Amazon S3、Dropbox、OneDrive、Backblaze B2 以及其他 70 多个服务商。

当你运行 `rclone ncdu` 时，它会对指定的远程路径执行递归扫描，计算每个文件和目录的大小。扫描结果会显示在一个可交互的终端界面中，你可以在其中：

- **导航目录**以深入查看嵌套的文件夹结构
- **按大小排序**以立即查看占用空间最大的项目
- **按数量排序**以查找包含大量小文件的目录
- **标记文件以删除**，直接在界面中操作
- **导出结果**以供离线分析或生成报告

相比单纯浏览云存储，ncdu 的主要优势在于速度和全面性。手动检查成千上万个文件夹是不切实际的，而 ncdu 一次扫描就能覆盖所有内容，并以优先级排序、可操作的格式呈现结果。

**与特定服务商工具的区别：**

大多数云服务商都提供某种形式的存储使用情况显示，但这些通常都有局限性：
- Google Drive 显示总使用量，但不会按文件夹细分
- S3 需要 CloudWatch 指标或第三方工具才能进行详细分析
- Dropbox 显示每个共享文件夹的使用情况，但会遗漏嵌套结构

无论你使用哪个服务商，Rclone ncdu 都能提供一致、详细的分析。

## 运行你的第一次 NCDU 扫描

通过 RcloneView 上手 ncdu 非常简单。打开 RcloneView 集成的终端，或使用文件浏览器进行可视化操作。

**通过 RcloneView 的终端：**

```bash
rclone ncdu remote:
```

将 `remote:` 替换为你已配置的远程名称。例如：

```bash
rclone ncdu gdrive:
rclone ncdu s3:my-bucket
rclone ncdu dropbox:/Documents
```

**扫描特定子目录：**

如果你只想分析存储的一部分，可以指定路径：

```bash
rclone ncdu gdrive:/Projects/2025
```

这比扫描整个远程存储要快得多，对于大型存储账户尤其明显。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

**了解扫描过程：**

当 ncdu 启动时，它会递归列出远程存储上的每个文件和目录。所需时间取决于：

| 因素 | 影响 |
|--------|--------|
| 文件总数 | 主要因素；10 万个文件可能需要数分钟 |
| API 速率限制 | Google Drive 限制约为每秒 10 个请求 |
| 网络延迟 | 延迟越高，API 调用越慢 |
| 目录深度 | 深度嵌套的结构需要更多 API 调用 |

对于拥有 5 万个文件的 Google Drive，预计扫描时间为 2-5 分钟。对于拥有数百万个对象的 S3 存储桶，建议扫描特定前缀而不是整个存储桶。

## 浏览 NCDU 界面

扫描完成后，你会看到一个可交互的显示界面。以下是有效使用它的方法。

**键盘操作：**

| 按键 | 操作 |
|-----|--------|
| 上/下方向键 | 在项目之间移动选择 |
| 回车 / 右方向键 | 进入所选目录 |
| 左方向键 | 返回上级目录 |
| d | 删除所选文件或目录 |
| s | 切换按大小排序 |
| c | 切换按数量（文件数）排序 |
| g | 切换图形显示 |
| n | 按名称排序 |
| q | 退出 ncdu |

**读懂显示内容：**

ncdu 输出的每一行都会显示：
- 目录或文件的大小（以易读格式显示）
- 显示与同级项目相对大小的可视化条形图
- 所包含的文件数量（针对目录）
- 目录或文件的名称

默认情况下，最大的项目会显示在最上面，让你能立即看出存储空间被消耗在了哪里。

**实用的导航流程：**

1. 从根级别开始，查看哪些顶级文件夹最大。
2. 进入最大的文件夹查看其内容。
3. 持续深入，直到找到占用空间的具体文件或子目录。
4. 记下你想要清理的项目的路径。
5. 使用 RcloneView 的文件浏览器删除、移动或归档这些项目。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 查找大文件和被遗忘的数据

ncdu 最常见的用途是查找意外的大文件和被遗忘的数据。以下是识别不同类型存储浪费的策略。

**识别大型媒体文件：**

视频文件、磁盘镜像和未压缩的存档是常见的元凶。在 ncdu 中按大小排序时，这些通常会立即浮到最上面。常见的罪魁祸首包括：

- 遗留在工作目录中的屏幕录制和视频导出文件
- 作为备份上传的虚拟机磁盘镜像
- 本可以压缩的未压缩 ZIP 或 TAR 存档
- 分散在不同文件夹中的大型数据集重复副本

**查找过时的备份：**

许多用户设置了自动备份后就忘记了它们。留意以下内容：
- 名为 `backup`、`archive`、`old` 或包含日期戳的目录
- 同一数据的多个带时间戳的副本
- 随时间累积却未清理的数据库转储

**检测跨服务商的重复文件：**

如果你在多个远程存储上使用 ncdu，可能会发现同一份数据被冗余存储：

```bash
# 扫描 Google Drive
rclone ncdu gdrive:/Backups

# 扫描 S3
rclone ncdu s3:my-backup-bucket

# 比较结果以查找重叠的数据
```

**各服务商常见的大文件类型：**

不同的服务商会吸引不同类型的存储浪费：

| 服务商 | 常见大文件 |
|----------|--------------------|
| Google Drive | 共享视频、带输出的 Colab 笔记本、旧的 Takeout 导出文件 |
| S3 | 日志存档、旧的部署产物、未压缩的数据湖 |
| OneDrive | OneNote 二进制数据、共享团队文件、Outlook 附件副本 |
| Dropbox | 相机上传的重复文件、旧的共享文件夹 |

## 导出和比较结果

为了进行持续的存储管理，你会希望导出 ncdu 结果并随时间跟踪变化。

**将扫描结果导出到文件：**

Rclone 的 `size` 命令与 ncdu 相辅相成，提供可编写脚本的输出：

```bash
# 获取远程存储的总大小
rclone size gdrive: --json

# 列出目录及其大小
rclone lsf gdrive: --dirs-only -R --format "sp" | sort -t ';' -k1 -rn | head -20
```

**创建存储使用报告：**

结合使用 rclone 命令构建一份全面的报告：

```bash
# 生成所有文件大小的 JSON 报告
rclone lsjson gdrive: -R --no-modtime --no-mimetype > storage-report.json

# 使用 rclone size 进行快速汇总
rclone size gdrive:/Projects
rclone size gdrive:/Backups
rclone size gdrive:/Media
```

**跨服务商比较使用情况：**

如果你管理多个云账户，可以对每个账户运行 ncdu 或 size 命令来进行比较：

```bash
echo "=== Google Drive ===" && rclone size gdrive:
echo "=== S3 ===" && rclone size s3:my-bucket
echo "=== Dropbox ===" && rclone size dropbox:
echo "=== OneDrive ===" && rclone size onedrive:
```

这能让你清楚地了解存储分布情况，以及哪些优化工作能产生最大的影响。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 高级 NCDU 技巧

除了基本扫描之外，还有几种高级技巧可以让你的存储分析更有效。

**过滤扫描：**

使用 rclone 的过滤标志来聚焦你的分析：

```bash
# 仅扫描大于 100 MB 的文件
rclone ncdu gdrive: --min-size 100M

# 从扫描中排除特定目录
rclone ncdu gdrive: --exclude "node_modules/**" --exclude ".git/**"

# 仅扫描特定文件类型
rclone ncdu s3:my-bucket --include "*.{mp4,avi,mkv,mov}"
```

**缓存扫描结果：**

对于非常大的远程存储，扫描可能需要很长时间。启用 rclone 的目录缓存可以加快重复扫描的速度：

```bash
rclone ncdu gdrive: --fast-list
```

`--fast-list` 标志通过批量请求目录列表来减少 API 调用次数。在支持该功能的服务商（S3、Google Drive、B2）上，这可以将扫描时间缩短 50% 或更多。

**分析共享存储：**

在 Google Drive 上，与你共享的文件所占用的存储不计入你的配额，但你在共享云端硬盘中拥有的文件会计入配额。使用 ncdu 扫描特定的共享云端硬盘：

```bash
rclone ncdu gdrive: --drive-shared-with-me
rclone ncdu gdrive,shared_drive_id=DRIVE_ID:
```

**安排定期扫描：**

使用 cron 或 RcloneView 的任务调度器设置自动化存储报告：

```bash
# 每周存储报告
0 8 * * MON rclone size gdrive: --json >> /var/log/storage-usage.json
```

## 根据发现结果采取行动

在识别出存储浪费之后，使用 RcloneView 直接采取行动。

**删除不必要的文件：**

在 ncdu 界面中，对任何文件或目录按下 `d` 即可将其删除。或者，使用 RcloneView 的文件浏览器浏览到已识别的路径，通过 GUI 删除文件。

**将冷数据迁移到更便宜的存储：**

如果你发现需要保留但很少访问的大型数据集，可以将它们迁移到更便宜的存储层：

```bash
# 将旧存档从 Google Drive 移动到 Backblaze B2
rclone move gdrive:/Archives/2023 b2:cold-archive/2023 --progress
```

RcloneView 的双栏浏览器让拖放操作变得简单。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

**归档前先压缩：**

对于日志和 CSV 等文本密集型数据，在传输到冷存储之前先进行压缩：

```bash
# 先在本地压缩，再上传
tar czf archive.tar.gz /path/to/data
rclone copy archive.tar.gz b2:compressed-archives/
```

**设置生命周期策略：**

清理完成后，通过配置自动化清理来防止未来的存储膨胀。使用 RcloneView 的任务调度功能来运行定期清理任务：

- 删除超过一定期限的文件：`rclone delete remote: --min-age 365d`
- 移除空目录：`rclone rmdirs remote: --leave-root`
- 在 Google Drive 上去重文件：`rclone dedupe gdrive: --dedupe-mode newest`

## 开始使用

Rclone NCDU 是 rclone 生态系统中最能立即体现价值的工具之一。一次扫描就能揭示数 GB 被遗忘的数据、重复文件以及你根本不知道存在的存储浪费。通过 RcloneView，你可以运行这些扫描、查看结果并采取行动，而无需离开应用程序。首先扫描你最大的云存储账户，按大小排序，然后处理排名前 10 的最大项目。你很可能会在第一次使用时就发现可观的节省空间。

---

**相关指南：**
- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
