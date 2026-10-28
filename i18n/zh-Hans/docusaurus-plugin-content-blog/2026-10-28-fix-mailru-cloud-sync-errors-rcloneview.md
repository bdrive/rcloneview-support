---
slug: fix-mailru-cloud-sync-errors-rcloneview
title: "修复 Mail.ru Cloud 同步错误 — RcloneView 故障排查指南"
authors:
  - casey
description: "解决 RcloneView 中常见的 Mail.ru Cloud 同步失败问题:身份验证错误、超时、被跳过的文件和不一致,并提供实用的修复方法。"
keywords:
  - 修复 mail.ru cloud 同步错误
  - mailru cloud 同步失败
  - mail.ru cloud rcloneview
  - mailru 身份验证错误
  - mailru 超时
  - mail.ru cloud 故障排查
  - 云同步错误
  - rcloneview 故障排查
  - mailru 备份错误
tags:
  - RcloneView
  - mailru
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Mail.ru Cloud 同步错误 — RcloneView 故障排查指南

> RcloneView 中的 Mail.ru Cloud 同步失败大多源于凭据、并发数或过滤器,只需点击几下即可修复。

当 Mail.ru Cloud 作业停滞或报告错误时,原因很少是神秘莫测的。RcloneView 会在 Job History 和 Log 标签页中记录每次运行,因此你可以将消息与已知原因对应起来。本指南介绍最常见的问题及解决它们的设置。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 身份验证和连接失败

如果上周还能正常运行的作业现在立即失败,首先应怀疑已保存的凭据。打开 Remote Manager,选择 Mail.ru Cloud 远程并编辑,重新输入账户信息;如果账户启用了额外的安全措施,请确认你输入的凭据是该服务接受用于第三方访问的凭据。保存后,在 Explorer 面板中浏览该远程。如果文件夹列表能够加载,说明连接正常,问题出在作业本身。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中重新创建 Mail.ru Cloud 远程" class="img-large img-center" />

## 超时和停滞的传输

传输缓慢或中断通常意味着相对于网络连接而言并发过高。在作业的 Advanced Settings 中,降低 Number of file transfers,并将 Number of equality checkers 设置为 4 或更低,因为较慢的后端在并行检查较少时表现更好。对于长时间运行的作业,将 "Retry entire sync if fails" 提高到默认值 3 以上,使临时的网络中断可以自动恢复。观察 Transferring 标签页,确认速度趋于稳定。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 标签页中监控 Mail.ru Cloud 传输" class="img-large img-center" />

## 缺失或不匹配的文件

如果同步完成后文件看起来不一样,请在源和 Mail.ru Cloud 远程之间运行 Compare。显示 left-only 文件即可找到从未到达的内容,并可直接在比较视图中将其复制过去。对于内容不匹配的情况,请在 Sync 向导的第 2 步启用校验和选项,这样文件将通过哈希和大小进行比较,而不仅仅依赖时间戳。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="比较文件夹以查找 Mail.ru Cloud 上缺失的文件" class="img-large img-center" />

## 过滤器、Dry Run 和 Job History

作业也可能按设计跳过文件。请检查第 3 步 Filtering Settings 中是否有你忘记的最大文件大小、最大文件时长或自定义排除规则。然后运行 Dry Run,在接触真实数据之前准确查看哪些文件将被复制或删除。之后,打开 Job History,将状态、大小和文件数与之前成功的运行进行比较。RcloneView 可以在一个窗口中挂载并同步 90 多个提供商,因此你也可以挂载 Mail.ru Cloud 远程,像本地驱动器一样查看其内容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中检查 Mail.ru Cloud 作业历史" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 Job History,阅读失败的 Mail.ru Cloud 作业在 Log 标签页中的条目。
3. 应用上述对应的修复:凭据、并发、校验和或过滤器。
4. 运行 Dry Run,然后重新运行作业并用 Compare 确认。

有条理的检查胜过猜测——一次性解决根本原因,你的 Mail.ru Cloud 作业就能再次顺畅运行。

---

**相关指南:**

- [管理 Mail.ru Cloud — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [将 Mail.ru Cloud 迁移到 Backblaze B2 — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)
- [使用 RcloneView 修复云 API 速率限制错误](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
