---
slug: fix-cloud-sync-timestamp-mismatch-rcloneview
title: "修复 RcloneView 中的云同步时间戳不匹配错误"
authors:
  - tayson
description: "解决 RcloneView 云同步过程中出现的时间戳不匹配错误。涵盖时钟偏差、时区差异、云服务商元数据限制、校验和比较,以及 --use-server-modtime 和 --no-update-modtime 等标志。"
keywords:
  - rclone timestamp mismatch
  - cloud sync time error
  - rclone modification time wrong
  - rclone use server modtime
  - rclone no update modtime
  - cloud sync checksum comparison
  - rclone timezone issue
  - rclone clock skew fix
  - cloud provider timestamp support
  - rcloneview sync mismatch fix
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - guide
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 RcloneView 中的云同步时间戳不匹配错误

> 时间戳不匹配会导致 rclone 重新传输未发生变化的文件,浪费带宽和时间。本指南将解释这一问题产生的原因,以及如何配置 RcloneView 来正确处理它。

当 rclone 在两个位置之间同步文件时,会比较修改时间戳来判断哪些文件需要更新。如果源和目标对同一文件报告的时间戳不同——即使只相差一秒——rclone 也会将该文件视为已更改并重新传输。这会导致不必要的传输、带宽成本增加,以及同步任务似乎永远无法干净地完成。这个问题在不同云服务商之间同步,或在本地存储与处理时间戳方式不同的云远程之间同步时尤为常见。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 时间戳不匹配发生的原因

时间戳看起来很简单——文件在某个时间被修改过——但各云服务商的实际情况要复杂得多。多种因素可能导致同一文件在源端和目标端报告不同的修改时间。

### 服务商之间的时钟偏差

每个云服务商都维护着自己的内部时钟。虽然大多数时钟通过 NTP 同步到毫秒级精度,但它们为文件存储的时间戳可能是在上传过程的不同阶段设置的。一个服务商可能记录上传开始的时间,另一个则记录上传完成的时间。对于大文件,这种差异可能达到数秒甚至更多。

### 时区和精度差异

一些服务商以 UTC 存储时间戳,另一些则以用户本地时区存储,还有一些会截断精度。例如:

- **Google Drive** 以毫秒级精度存储修改时间,并允许设置自定义修改时间。
- **OneDrive** 支持秒级精度的修改时间。
- **Amazon S3** 在对象元数据中本身不支持修改时间——而是将上传时间记录为最后修改(last-modified)标头。
- **Dropbox** 会保留客户端设置的修改时间,但精度仅到秒。
- **SFTP** 依赖于远程文件系统,可能具有秒级或微秒级精度。

当你从毫秒级精度的服务商同步到秒级精度的服务商时,舍入会导致持续出现 1 秒(或不足 1 秒)的差异。

### 不支持修改时间

一些云存储后端根本不支持保留修改时间:

- **兼容 S3 的存储**(AWS S3、Wasabi、S3 模式下的 Backblaze B2、Cloudflare R2)存储的是上传时间,而不是原始文件的修改时间。Rclone 通过在对象元数据(X-Amz-Meta-Mtime)中存储原始修改时间来规避这一问题,但这仅在元数据是由 rclone 在初次上传时设置的情况下才有效。
- 通过服务商的网页界面或其他工具上传的文件不会带有此元数据,导致后续同步时出现不匹配。

### 传输过程中未保留元数据

如果文件最初是由 rclone 以外的工具上传到目标端的,或者元数据标头被代理或 CDN 剥离,rclone 将无法找到预期的修改时间元数据。它会回退使用服务商的最后修改时间,而该时间将与源端不同。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

## 诊断问题

在应用修复方案之前,先确认时间戳确实是问题所在。在 RcloneView 或终端中运行一次试运行(dry-run)同步:

```bash
rclone sync source: dest: --dry-run -v
```

查看输出。如果你看到类似以下的行:

```
NOTICE: file.txt: Skipped copy (src older)
```

或者内容明明相同的文件却被标记为待传输,那么时间戳很可能就是原因。你也可以比较具体文件:

```bash
rclone lsl source:path/to/file.txt
rclone lsl dest:path/to/file.txt
```

`lsl` 命令会显示文件大小、修改时间和路径。比较时间戳——如果大小相同但时间相差几秒或显示不同时区,那么你遇到的就是时间戳不匹配问题。

在 RcloneView 中,使用**比较文件夹**功能可以直观地检查差异。比较视图会高亮显示在大小、时间戳或校验和方面存在差异的文件,便于识别仅时间戳不同的情况。

## 使用 --use-server-modtime

`--use-server-modtime` 标志会让 rclone 使用服务器报告的修改时间,而不是元数据中存储的时间。这在以下情况下很有用:

- 你希望无论文件最初是如何上传的,都能获得一致的行为。
- 元数据中的修改时间不可靠或缺失。
- 你正在两个位置之间同步,而这两处的文件是由不同工具上传的。

```bash
rclone sync source: dest: --use-server-modtime
```

在 RcloneView 中,你可以在任务配置的高级选项或自定义标志中添加此标志。

**何时使用:** 当从由 rclone 以外的工具上传文件的兼容 S3 后端进行同步时,或元数据标头不一致时。

**权衡:** 服务器修改时间反映的是上传时间,而不是原始文件的修改时间。这意味着 rclone 无法检测文件在重新上传前是否被修改过——它只能看到上传时间戳。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 使用 --no-update-modtime

`--no-update-modtime` 标志可阻止 rclone 在复制文件后设置目标端的修改时间。默认情况下,rclone 复制文件后会将目标端的修改时间设置为与源端一致。如果目标端不支持设置修改时间(或会对其进行舍入),这会在下一次同步时产生持续性的不匹配。

```bash
rclone sync source: dest: --no-update-modtime
```

**何时使用:** 当目标服务商不支持设置修改时间时,或设置时间的操作会引入舍入误差,从而触发不必要的重新传输时。

**权衡:** 由于没有匹配的修改时间,rclone 必须使用其他方法(例如校验和)来检测后续同步中的变化。

## 切换到基于校验和的比较

如果你的源端和目标端之间的时间戳从根本上不可靠,你可以让 rclone 通过校验和而非修改时间来比较文件。这是判断文件是否真正发生变化的最可靠方法。

```bash
rclone sync source: dest: --checksum
```

`--checksum` 标志会让 rclone 计算或获取双方文件的哈希值(MD5、SHA-1 或其他受支持的算法),仅在哈希值不同时才传输文件。

**优点:**

- 完全忽略时间戳——不再因时钟偏差或精度差异而产生误报。
- 检测实际的内容变化,而不仅仅是元数据差异。
- 在所有服务商上都能可靠地工作。

**缺点:**

- 对于大型文件集速度较慢,因为 rclone 必须为每个文件计算或获取校验和。
- 一些服务商并非对所有文件都返回校验和(例如,通过分段上传的 S3 对象具有复合 ETag,并非标准的 MD5 哈希)。
- 会增加 API 调用次数,可能计入速率限制或产生费用。

在 RcloneView 中,可在同步任务设置中启用校验和比较。对于大型数据集,可以考虑按计划(例如每周)运行基于校验和的同步,并将基于时间戳的同步用于日常增量备份。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 不同服务商如何处理时间戳

了解每个服务商的时间戳处理方式有助于你选择正确的同步策略。

| 服务商 | 修改时间支持 | 精度 | 说明 |
|---|---|---|---|
| Google Drive | 完全支持 | 毫秒 | 允许通过 API 设置自定义修改时间 |
| OneDrive | 完全支持 | 秒 | 支持设置修改时间 |
| Dropbox | 完全支持 | 秒 | 保留客户端设置的修改时间 |
| Amazon S3 | 仅元数据 | 秒 | Rclone 将修改时间存储在 X-Amz-Meta-Mtime 中 |
| Backblaze B2 | 仅元数据 | 毫秒 | 存储在文件信息标头中 |
| Wasabi | 仅元数据 | 秒 | 兼容 S3,使用 X-Amz-Meta-Mtime |
| Cloudflare R2 | 仅元数据 | 秒 | 兼容 S3,基于元数据 |
| SFTP | 取决于文件系统 | 不定 | 取决于远程文件系统 |
| Azure Blob | 仅元数据 | 秒 | Rclone 使用元数据标头 |
| Google Cloud Storage | 仅元数据 | 秒 | 使用自定义元数据存储修改时间 |

当在两个均"完全支持"修改时间的服务商之间同步时(例如 Google Drive 到 OneDrive),基于时间戳的比较可以可靠工作。当在"完全支持"的服务商与"仅元数据"的服务商之间同步时,除非文件最初是由 rclone 上传的,否则不匹配的情况很常见。

## 组合使用标志以获得最佳效果

对于大多数跨服务商同步场景,组合使用多个标志能获得最佳效果:

**对于文件由其他工具上传的 S3 到 S3 或 S3 到云端同步:**

```bash
rclone sync source: dest: --checksum --no-update-modtime
```

**对于 Google Drive 到 OneDrive(两者均支持修改时间):**

```bash
rclone sync gdrive: onedrive: --modify-window 1s
```

`--modify-window` 标志会为时间戳比较增加容差。将其设置为 `1s` 意味着时间戳相差在一秒以内的文件将被视为相同。这可以处理由精度差异引起的舍入问题。

**对于每日增量同步并偶尔进行完整校验:**

```bash
# 每日(快速,基于时间戳并带容差)
rclone sync source: dest: --modify-window 2s

# 每周(彻底,基于校验和)
rclone sync source: dest: --checksum
```

在 RcloneView 中,你可以创建两个独立的同步任务——一个使用 `--modify-window` 用于每日运行,另一个使用 `--checksum` 用于每周运行——并分别设置各自的计划。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 在新环境中预防时间戳问题

如果你正在搭建一个新的同步工作流,可以从一开始就避免大多数时间戳问题:

1. **所有传输均使用 rclone** ——rclone 会一致地设置元数据,因此由 rclone 上传的文件在各处都将拥有正确的修改时间元数据。
2. **从首次同步起就为你的服务商组合适当设置 --modify-window**。
3. **在初始迁移时使用校验和模式**——首次将大型数据集迁移到新服务商时,使用 `--checksum` 以确保建立一个干净的基线。
4. **先用小文件夹测试**——同步少量文件,检查是否存在不匹配,然后再扩大规模。
5. **记录你的标志组合**——当你为你的服务商找到合适的组合后,将其保存为 RcloneView 任务,以免日后需要重新摸索。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程管理器中**添加你的源和目标远程**。
3. **使用比较文件夹**功能在同步前检查差异。
4. 根据你的服务商组合**配置同步标志**(`--checksum`、`--modify-window`、`--no-update-modtime`)。
5. **创建计划同步任务**并在任务历史中监控结果。

时间戳不匹配是导致云同步效率低下的最常见原因之一。只要使用正确的标志,并了解每个服务商处理修改时间的方式,你就可以消除不必要的传输,让同步任务保持干净整洁。

---

**相关指南:**

- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同步远程存储](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
