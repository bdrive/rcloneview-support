---
slug: rclone-about-storage-usage-analysis-rcloneview
title: "使用 RcloneView 分析云存储使用情况和配额"
authors:
  - tayson
description: "通过 RcloneView 的仪表盘和 rclone about 命令,监控云存储使用情况、检查配额、识别占用空间较大的文件夹,并对多个提供商进行容量规划。"
keywords:
  - rclone about storage usage
  - cloud storage quota monitor
  - rcloneview storage analysis
  - check cloud storage space
  - cloud capacity planning
  - storage usage per remote
  - rclone disk usage
  - cloud quota monitoring tool
  - compare cloud storage usage
  - rcloneview dashboard storage
tags:
  - feature
  - tips
  - cost-optimization
  - dashboard
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 分析云存储使用情况和配额

> 在优化云成本之前,你需要清楚地了解存储空间都用在了哪里。RcloneView 将每个已连接远程的使用数据和配额信息集中展示在一处。

大多数云存储成本都由使用量驱动。无论你是按 GB 付费使用 S3,还是在 Google Drive 的免费额度内使用,又或是与团队共享 OneDrive 配额,了解每个远程消耗了多少空间对于成本控制和容量规划都至关重要。Rclone 的 `about` 命令会向提供商的 API 查询总空间、已用空间、剩余空间以及回收站占用空间。RcloneView 以可视化方式呈现这些信息,让你无需在各个提供商的仪表盘之间来回切换,即可监控所有远程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone About 报告的内容

`rclone about` 命令直接从提供商的 API 返回存储指标。典型的响应包括:

| 指标 | 说明 |
|--------|-------------|
| **Total(总量)** | 账户分配到的总存储配额 |
| **Used(已用)** | 当前被文件占用的空间 |
| **Free(剩余)** | 剩余可用空间 |
| **Trashed(回收站)** | 回收站/垃圾箱中的项目占用的空间 |
| **Other(其他)** | 被其他服务占用的空间(例如 Google 账户中的 Gmail) |

并非所有提供商都会报告全部字段。例如,兼容 S3 的服务通常只报告已用空间,因为存储桶没有固定配额。Google Drive 会报告全部五个字段,是信息最全面的提供商之一。

## 在 RcloneView 中查看存储使用情况

RcloneView 提供已连接远程的可视化概览:

1. 打开 **RcloneView**,进入 **Dashboard(仪表盘)** 或 **Remote Explorer(远程浏览器)**。
2. 选择要查看的远程。
3. 查看显示已用、剩余和总空间的存储摘要。

如需快速查看所有远程,仪表盘可让你一目了然地看到每个已连接提供商的消耗情况。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote list showing connected cloud providers" class="img-large img-center" />

## 从终端运行 Rclone About

如需查看原始数据或进行脚本编写,请在 RcloneView 中打开 **Terminal(终端)** 并运行:

```bash
rclone about gdrive:
```

示例输出:

```
Total:   15 GiB
Used:    9.2 GiB
Free:    5.8 GiB
Trashed: 1.4 GiB
Other:   3.1 GiB
```

快速检查多个远程:

```bash
rclone about gdrive:
rclone about onedrive:
rclone about s3-backup:
```

使用 `--json` 获取可供脚本解析的机器可读输出:

```bash
rclone about gdrive: --json
```

## 识别占用空间较大的文件夹

了解总使用量只是第一步。要找出哪些文件夹占用空间最多,需要使用 `rclone size` 命令:

```bash
rclone size gdrive:/Photos
```

该命令会返回指定路径下所有文件的总数量和总大小。要找出占用空间最大的文件夹,可对顶层目录逐一运行并进行比较。

在 RcloneView 的 **Explorer(浏览器)** 中,你可以浏览任意远程,并在浏览过程中直接看到文件夹大小,无需运行命令即可轻松找出占用空间过大的项目。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer browsing cloud folders with size information" class="img-large img-center" />

## 跨提供商的配额监控

不同提供商的配额处理方式各不相同:

| 提供商 | 配额模式 | 说明 |
|----------|------------|-------|
| **Google Drive** | 在 Drive、Gmail、Photos 之间共享 | 免费 15 GB;Workspace 套餐额度不同 |
| **OneDrive** | 按用户分配 | 免费 5 GB;Microsoft 365 套餐可提供 1 TB 以上 |
| **Dropbox** | 按账户配额 | 免费 2 GB;Plus 套餐提供 2 TB |
| **Backblaze B2** | 按使用量付费,无固定配额 | 按每 GB 存储量按月计费 |
| **Amazon S3** | 按使用量付费,无固定配额 | 按存储类别分级定价 |
| **pCloud** | 终身或订阅配额 | 免费 10 GB;提供终身套餐 |

对于 S3 和 B2 这类按使用量付费的提供商,虽然没有配额上限,但直接监控使用量可以帮助控制账单支出。而对于基于配额的提供商,空间耗尽会在不知不觉中导致同步和备份失败。

## 容量规划与成本估算

利用存储使用数据提前做好规划:

1. **跟踪长期增长趋势** —— 定期运行 `rclone about` 并记录结果。用一份简单的电子表格记录每个远程的月度使用量,即可发现变化趋势。
2. **为按使用量付费的提供商估算月度成本**:
   - Backblaze B2:每 GB 每月 $0.006 的存储费用
   - Amazon S3 Standard:每 GB 每月 $0.023
   - Wasabi:每 GB 每月 $0.0069(最低 1 TB 起)
3. **设置提醒** —— 如果基于配额的远程使用量超过 80%,应及时规划清理或升级。
4. **比较不同提供商** —— 如果某个远程每 GB 成本更低,可考虑将冷数据迁移过去。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare storage consumption across cloud providers" class="img-large img-center" />

## 回收回收站中的空间

最容易被忽视的存储消耗之一就是回收站。Google Drive 和 OneDrive 都会将回收站中的文件计入配额。`rclone about` 的输出会明确显示回收站占用的空间,你可以通过以下命令回收这部分空间:

```bash
rclone cleanup gdrive:
```

在 RcloneView 中,无需输入命令,通过界面即可完成此操作。清空回收站通常是在不删除任何有效文件的情况下,最快释放数 GB 空间的方法。

## 跨提供商比较使用情况

在管理多个云账户时,跨提供商比较有助于做出如下决策:

- **新备份存放在哪里** —— 将数据路由到空间余量最大的远程。
- **哪个提供商需要扩容** —— 如果 S3 的成本增长速度快于 B2,需要调查原因。
- **何时归档** —— 将不常访问的数据从昂贵的存储迁移到更便宜的层级。

RcloneView 的多远程仪表盘让这种比较变得直观。你无需登录三个不同的提供商仪表盘,即可在一个界面中查看所有使用数据。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView dashboard showing multiple remote storage status" class="img-large img-center" />

## 最佳实践

- **在开始大型传输前检查配额** —— 目标空间已满会导致静默失败。
- **监控回收站使用情况**,定期清理以避免虚假的配额占用。
- **每月记录使用量**,便于成本跟踪和趋势分析。
- **对特定文件夹使用 `rclone size`**,找出占用空间最大的项目。
- **通过在 RcloneView 中将 `rclone about` 命令保存为计划任务来实现自动化检查**。

---

**相关指南:**

- [清理云存储:清空回收站并删除旧版本](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Wasabi 与 Backblaze B2 与 IDrive e2 对比](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Google Drive 与 OneDrive for Business 对比](https://rcloneview.com/support/blog/google-drive-vs-onedrive-for-business-rcloneview)

<CloudSupportGrid />
