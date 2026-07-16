---
slug: fix-cloud-sync-missing-files-after-transfer-rcloneview
title: "使用 RcloneView 修复云同步后文件丢失的问题"
authors:
  - tayson
description: "诊断并修复云同步操作后出现的文件丢失问题。了解在 RcloneView 中常见的原因,如过滤规则、特殊字符和同步方向问题。"
keywords:
  - rcloneview
  - missing files after sync
  - cloud sync missing files
  - rclone files not syncing
  - cloud transfer missing data
  - sync direction wrong
  - google docs not syncing
  - rclone filter rules
  - cloud file transfer issues
  - fix cloud sync
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 修复云同步后文件丢失的问题

> 你运行了一个同步任务,看起来一切顺利,但目标位置却缺少一些文件。**RcloneView** 提供了诊断问题所在并防止其再次发生的工具。

在云同步之后发现文件丢失,是云文件管理中最令人焦虑的情况之一。传输完成时没有出现任何错误,任务日志也显示成功,但当你检查目标位置时,却发现某些文件不见了踪影。在你惊慌之前,请了解这几乎总是由逻辑配置问题引起的,而不是数据丢失。

本指南将介绍同步操作后文件丢失的最常见原因,并展示如何使用 RcloneView 的比较、日志记录和演练(dry-run)功能来识别并解决问题。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 过滤规则悄悄排除了文件

文件丢失最常见的原因是过滤规则将其排除在外。如果你设置了 `--exclude`、`--include` 或 `--filter` 规则却忘记了它们,匹配这些模式的文件会在同步过程中被悄悄跳过。Rclone 不会在标准输出中警告你有文件被排除。

**常见的过滤错误:**

- `--include "*.jpg"` 规则无意中排除了所有非 JPG 文件,包括文档和电子表格。
- `--exclude "*.tmp"` 规则也会捕获文件名中间包含 `.tmp` 的文件。
- `--min-size` 标志跳过了体积虽小但很重要的文件,例如配置文件或文本笔记。
- 创建新任务时,不小心沿用了之前任务遗留下来的过滤规则。

**如何诊断:** 在 RcloneView 中,检查附加到同步任务上的标志和过滤器。暂时移除所有过滤器并运行一次比较,查看丢失的文件是否出现。然后逐一重新添加过滤器,以确定是哪条规则排除了它们。

## 同步方向混淆

`sync`、`copy` 和 `move` 之间的差异至关重要,选错方式会导致文件消失。

- **Sync(同步)** 会使目标与源保持一致。存在于目标位置但不存在于源位置的文件将被**删除**。如果你不小心以错误的方向进行同步(将目标同步到源,而不是将源同步到目标),你的源文件可能会被移除。
- **Copy(复制)** 只会向目标位置添加文件,不会删除任何内容。当你不确定时,这是更安全的选项。
- **Move(移动)** 传输文件后会将其从源位置删除。

如果同步后源位置缺少文件,可能是你以错误的方向运行了同步。在执行前,请务必在 RcloneView 的双栏浏览器中仔细确认哪一栏是源,哪一栏是目标。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Google 文档、表格和幻灯片

Google Workspace 文档(文档、表格、幻灯片、绘图)不是传统意义上的文件。它们是原生于云端的对象,在其原生状态下没有固定大小,也没有可下载的二进制格式。从 Google Drive 同步时,rclone 会将它们转换为可下载的格式(例如 `.docx`、`.xlsx`、`.pdf`),但这一行为取决于你的配置。

**常见问题:**

- 如果未配置导出格式,Google 文档会显示为零字节文件,或被完全跳过。
- 文件名过长的文件在某些操作系统上可能导出失败。
- Google Drive 中的快捷方式不是真实文件,不会被传输。

**如何解决:** 检查你的 Google Drive 远程是否配置了适当的导出格式。或者,如果你在目标位置不需要 Google 文档,可以明确将其排除,以避免对文件丢失产生困惑。

## 大小写敏感性与特殊字符

不同的云服务商对文件名的处理方式各不相同。名为 `Report.PDF` 和 `report.pdf` 的文件在 Windows 和 OneDrive 上可能被视为同一个文件,但在 Linux 和 S3 上则被视为两个不同的文件。在同步过程中,其中一个可能会悄悄覆盖另一个。

**存在问题的字符包括:**

- 结尾的空格或句点(会被 OneDrive 和 Windows 拒绝)。
- 冒号、问号和尖括号(在 Windows 上无效)。
- 表情符号或 Unicode 字符(部分服务商对此的处理不一致)。
- 在 Windows 上超过 260 个字符的超长文件路径。

**如何诊断:** 使用 RcloneView 的比较功能并排列出文件列表。查找存在于源位置但在目标位置缺失或命名不同的文件。Rclone 日志可能会显示针对含有不兼容字符的文件的重命名警告。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 文件大小限制与服务商限制

一些云服务商设有文件大小上限,可能导致大文件被悄悄跳过:

- Google Drive:每个文件 5 TB。
- OneDrive:每个文件 250 GB。
- Dropbox:通过 API 每个文件 2 GB(通过桌面客户端为 350 GB)。
- MEGA:文件大小限制因账户类型而异。
- 许多兼容 S3 的服务商:每个对象 5 TB,但单个上传分块限制为 5 GB。

如果你要同步的文件超过了目标服务商的限制,该文件将传输失败。请在 RcloneView 的任务历史记录中检查是否有与超大文件相关的错误条目。

## 使用比较功能查找丢失的文件

RcloneView 的文件夹比较功能是准确定位缺失文件最快的方法。在一侧打开源位置,在另一侧打开目标位置,然后运行比较。该工具会高亮显示仅存在于源位置、仅存在于目标位置,或两者内容存在差异的文件。

这会为你提供一份未成功传输文件的明确清单,你可以据此逐一排查。留意其中的规律——所有丢失的文件是否都在同一个文件夹中?它们是否共享相同的文件扩展名?它们是否都小于某个特定大小?这些规律能指向问题的根本原因。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 同步前先运行演练(Dry Run)

防止文件丢失的最佳方法是在每次同步前先运行一次演练。演练会在不实际传输或删除任何文件的情况下模拟操作过程。它会准确展示 rclone 将执行的操作,包括哪些文件会被跳过、传输或删除。

在 RcloneView 中,你可以在配置同步任务时使用 `--dry-run` 标志。请仔细查看输出结果。如果你预期要传输的文件没有出现在列表中,请在运行真正的同步之前,先检查你的过滤规则和配置。

## 预防策略

为避免未来同步中出现文件丢失,请遵循以下建议:

1. **始终先进行比较。** 在同步之前,使用 RcloneView 的比较功能了解两个位置的当前状态。
2. **在不希望目标位置有任何内容被删除时,使用 copy 而非 sync。**
3. **从演练开始。** 在提交新的同步配置之前,添加 `--dry-run` 进行测试。
4. **记录你的过滤规则。** 保留每条过滤规则的作用及其存在原因的记录。
5. **检查任务历史记录。** 每次同步后,在 RcloneView 中查看任务历史记录,确认传输的文件数量符合预期。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开双栏浏览器,分别设置源和目标远程,然后运行文件夹比较。
3. 检查你的同步任务配置,查看过滤规则、同步方向以及可能排除文件的任何标志。
4. 使用 `--dry-run` 在执行同步操作之前进行预览。

同步后文件丢失几乎总是配置问题,而非数据丢失。使用 RcloneView 的比较和日志记录工具进行系统化诊断,每次都能准确定位问题原因。

---

**相关指南:**

- [浏览与管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [即时同步远程存储](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
