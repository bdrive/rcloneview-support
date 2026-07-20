---
slug: recover-interrupted-failed-transfers-rcloneview
title: "如何使用 RcloneView 恢复中断或失败的云传输"
authors:
  - tayson
description: "在 RcloneView 中恢复中断的云传输、从部分上传中恢复,并修复失败的同步任务。适用于无法完成的大文件传输的实用技巧。"
keywords:
  - resume interrupted cloud transfer rclone
  - recover failed file transfer rcloneview
  - rclone resume partial upload
  - interrupted cloud sync recovery
  - rcloneview transfer failed
  - rclone retry failed transfers
  - cloud upload resume after disconnect
  - partial cloud transfer recovery
  - rclone resume large file upload
  - fix interrupted sync rcloneview
tags:
  - RcloneView
  - cloud-storage
  - troubleshooting
  - tips
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 恢复中断或失败的云传输

> 网络中断、API 超时、笔记本电脑休眠和断电都会导致云传输中断。RcloneView 和 rclone 内置了相应机制,可以安全地恢复传输,而无需从头重新上传所有内容。

将数 TB 数据传输到云端不是一个五分钟就能完成的操作。在长时间运行的任务中,连接中断几乎是不可避免的。好消息是,RcloneView 底层使用的 rclone 智能传输引擎正是为应对这种情况而设计的。复制(Copy)和同步(Sync)操作本质上是幂等的:重新运行时会跳过已经传输的文件,并从中断处继续。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone 如何处理中断的传输

Rclone 在传输每个文件之前都会比较源和目标。当你在中断后重新运行复制或同步任务时:

- **已传输的文件**会被跳过(根据大小 + 修改时间,或在启用校验和时根据校验和判断)。
- **部分传输的文件**会被清理并从头重新传输。
- **尚未开始的文件**会被排队,并在恢复运行时进行传输。

这意味着大多数情况下并没有专门的"恢复"按钮——只需重新运行同一个任务即可。

## 第 1 步 — 重新运行同一任务

发生中断后,在 RcloneView 中打开 **Jobs(任务)**,再次点击同一任务上的 **Run(运行)**:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Re-run a failed transfer job in RcloneView" class="img-large img-center" />

RcloneView 将会:
1. 列出源和目标。
2. 比较目标中已存在的文件。
3. 跳过已成功传输的文件。
4. 仅传输缺失或已修改的文件。

对于一个有 10,000 个文件、其中 8,000 个已成功传输的任务,重新运行只需原始时间的一小部分。

## 第 2 步 — 检查任务历史中的失败文件

在重新运行之前,先查看 RcloneView 中的 **Job History(任务历史)**,了解失败的原因:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Review failed files in RcloneView job history" class="img-large img-center" />

日志会显示:
- 哪些具体文件传输失败
- 每个失败的错误信息
- 失败是暂时性的(网络错误)还是持续性的(权限问题、路径过长)

持续性错误需要在重新运行之前修复——暂时性错误在重试时会自行解决。

## 第 3 步 — 处理部分上传的大文件

对于非常大的文件(数 GB),上传过程中的中断会在目标中留下一个部分文件。Rclone 的处理方式取决于服务商:

| 服务商 | 部分文件的处理方式 |
|----------|-----------------------|
| Amazon S3 / 兼容 S3 的服务 | 分块上传:未完成的分块会成为孤立数据,rclone 会从头重试 |
| Google Drive | 可续传上传:如果会话仍然有效,rclone 可以从中断处继续 |
| OneDrive | 可续传上传:与 Google Drive 类似 |
| Backblaze B2 | 大文件分块:未完成的上传可在 B2 控制台中查看 |

**对于 S3 孤立的分块上传:** 这些分块会不断累积并产生费用。可通过以下方式清理:
- RcloneView 终端:`rclone cleanup s3-remote:bucket-name`
- 或通过 AWS 控制台,进入 S3 → 你的存储桶 → Multipart uploads(分块上传)

## 第 4 步 — 使用 `--retries` 和 `--low-level-retries`

对于因暂时性错误而失败的任务,可在 RcloneView 的任务中配置自动重试:

将以下内容添加到 **Custom flags(自定义参数)**字段:
```
--retries 5 --retries-sleep 10s --low-level-retries 20
```

- `--retries 5` — 如果发生错误,整个任务最多重试 5 次
- `--retries-sleep 10s` — 每次重试之间等待 10 秒
- `--low-level-retries 20` — 单个底层操作(API 调用)最多重试 20 次

## 第 5 步 — 处理校验和不匹配

在传输中断后,使用校验和验证重新运行可以确保数据完整性:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer integrity with folder comparison" class="img-large img-center" />

在 RcloneView 中,在任务设置里启用 **Checksum verification(校验和验证)**。这会强制 rclone 比较文件内容(而不仅仅是大小/修改时间)——速度较慢,但可以确保捕获部分写入的文件并重新传输。

## 第 6 步 — 从误删文件的同步中恢复

如果同步任务的方向出错——即用目标覆盖了源,而不是相反——你需要借助云服务商的版本控制来恢复:

- **Google Drive**:从回收站或版本历史中恢复(可用时长为 30–180 天)。
- **OneDrive**:从回收站或版本历史中恢复。
- **启用版本控制的 S3**:在 S3 控制台中恢复到之前的版本。
- **Backblaze B2**:如果启用了版本历史,可从中恢复。

这也是为什么在进行初始大规模传输时,强烈建议使用非破坏性的**复制(Copy)**模式,而不是同步(Sync)模式。

## 预防措施:配置具有弹性的传输

从一开始就为传输任务构建弹性:

| 设置项 | 建议 |
|---------|----------------|
| 任务模式 | 初始迁移使用**复制(Copy)**;日常维护使用同步(Sync) |
| 重试 | 设置 `--retries 5 --retries-sleep 10s` |
| 校验和 | 对关键数据启用 |
| 并发传输数 | 在网络不稳定时降低并发数量 |
| 计划任务 | 在网络稳定的时间段运行(夜间、非 VPN 时段) |
| 带宽 | 设置限制,以防止因网络饱和导致超时 |

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **检查任务历史**,确定失败的内容和原因。
3. **重新运行任务**——rclone 会自动跳过已完成的文件。
4. **配置重试和校验和验证**,为未来的传输提供弹性保障。

大多数中断的传输只需要再次点击"运行"即可。剩下的工作交给 rclone 处理。

---

**相关指南:**

- [避免因同步方向错误导致的数据丢失](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)
- [经校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [加速大型云传输](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
