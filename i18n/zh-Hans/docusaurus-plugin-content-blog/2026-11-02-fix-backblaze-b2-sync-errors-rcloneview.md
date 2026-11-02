---
slug: fix-backblaze-b2-sync-errors-rcloneview
title: "修复 Backblaze B2 同步错误 — 使用 RcloneView 诊断并解决"
authors:
  - alex
description: "使用 RcloneView 排查 Backblaze B2 同步错误：检查 Application Key 范围、查看日志、调整传输与重试，并用 Folder Compare 验证结果。"
keywords:
  - 修复 Backblaze B2 同步错误
  - Backblaze B2 401 unauthorized
  - B2 application key 权限
  - B2 同步失败
  - rclone B2 故障排查
  - RcloneView Backblaze B2
  - B2 上传错误
  - 云同步故障排查
tags:
  - RcloneView
  - troubleshooting
  - tips
  - backblaze-b2
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Backblaze B2 同步错误 — 使用 RcloneView 诊断并解决

> 大多数 B2 同步失败都源于少数几个原因：密钥范围、重试设置，或是你还没查看的日志。

Backblaze B2 同步停滞或报错，只要能看到 rclone 实际报告的内容，通常几分钟就能解决。RcloneView 在一个窗口中呈现作业状态、日志和内置终端，让你无需猜测即可诊断。使用 FREE 许可证即可以完整读写权限连接 S3、Azure 或 Backblaze B2。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先检查 Application Key

B2 远程使用 Application Key ID 和 Application Key 进行身份验证。如果作业立即因授权错误而失败，常见原因包括：密钥被限制在其他存储桶、密钥没有写入权限，或复制粘贴时把密钥 ID 与密钥弄反、混入了末尾空格。

打开 Remote Manager，编辑 B2 远程并重新输入这两个值。如果你在 Backblaze 密钥管理页面生成新密钥，请记住完整的 Application Key 只在创建时显示一次。然后在 Explorer 中浏览存储桶：如果能列出内容但上传失败，则密钥很可能缺少写入权限。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中编辑 Backblaze B2 远程" class="img-large img-center" />

## 查看 Job History 与日志

打开 Job History，查看每次运行的状态（Completed、Errored 或 Canceled）、耗时、文件数和速度。只有部分文件报错的运行指向单个文件的问题；一开始就失败的运行则指向凭据或连接问题。

如需更多细节，请在 Settings > Embedded Rclone 中启用 rclone 日志，将日志级别设为 DEBUG，重启内置 rclone 并重现问题。Log 标签页和日志文件中会显示带时间戳的条目，便于搜索失败的文件或消息。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 的 Job History 显示出错和已完成的运行" class="img-large img-center" />

## 调整传输与重试

大型任务中的错误往往源于并发过高。在作业的 Advanced Settings 中，降低文件传输数和 equality checker 数量（对于较慢的后端，建议 checker 不超过 4 个）。将 "Retry entire sync if fails" 保持为默认值 3，使短暂的网络中断能够自行恢复。例如摄影师需要连夜同步数千个 RAW 文件时，出现错误后先降低并发是合理的第一步调整。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 的 Transferring 标签页中实时监控传输" class="img-large img-center" />

## 验证并安全地重新运行

修改后，先运行 Dry Run 预览将被复制或删除的内容。然后执行作业，并在本地文件夹与 B2 存储桶之间使用 Folder Compare：left-only 文件是仍需上传的内容，different 文件则显示大小不一致。使用 Copy right 补齐差异，并重复比较直到结果一致。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中用 Folder Compare 确认 B2 同步" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html)**下载 RcloneView**。
2. 在 Remote Manager 中重新输入 B2 Application Key ID 和 Key。
3. 启用 DEBUG 日志并重新运行失败的作业。
4. 降低并发，运行 Dry Run，然后用 Folder Compare 验证。

依次检查密钥、日志和设置，大多数 B2 错误都能很快解决。

---

**相关指南：**

- [使用 RcloneView 管理 Backblaze B2](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [修复 Wasabi 同步错误](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)
- [Dry Run：传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
