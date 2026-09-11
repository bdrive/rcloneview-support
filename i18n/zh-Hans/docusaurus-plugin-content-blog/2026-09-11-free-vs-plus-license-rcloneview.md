---
slug: free-vs-plus-license-rcloneview
title: "FREE 与 PLUS 许可证 — RcloneView 功能对比"
authors:
  - alex
description: "并排比较 RcloneView 的 FREE 与 PLUS 许可证功能 —— 计划任务、多窗口、自动挂载和带过滤器的比较 —— 帮你选择合适的方案。"
keywords:
  - RcloneView 许可证
  - RcloneView FREE 与 PLUS
  - RcloneView PLUS 功能
  - 计划云同步
  - 多窗口文件管理器
  - 启动时自动挂载
  - 带过滤器的文件夹比较
  - RcloneView 许可证对比
  - 云同步自动化
  - 跨平台文件管理器
tags:
  - RcloneView
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# FREE 与 PLUS 许可证 — RcloneView 功能对比

> 在围绕它构建云存储工作流程之前,先准确了解每种 RcloneView 许可证能解锁什么。

在 FREE 和 PLUS 许可证之间做选择,不应该靠猜测。RcloneView 对功能集做了清晰的划分:FREE 许可证已经涵盖了跨 90 多个提供商的完整文件管理、同步和挂载功能,而 PLUS 则为高级用户和团队增加了自动化与多实例能力。本指南详细说明每个层级具体包含哪些内容,帮助你根据实际工作方式匹配许可证。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## FREE 许可证已经包含的内容

FREE 许可证并不是精简版试用 —— 它是一套完整的日常工具集。挂载和卸载云盘、完整的文件资源管理器操作(复制、移动、删除、重命名)、基础 Folder Compare,以及整个 Sync & Job Management 系统,全部免费包含。这意味着 1:N 同步(一个源镜像到多个目标)、带详细日志的 Job History、执行同步前的 Dry Run 预览,以及作业配置的导出/导入,在 FREE 版本中都可以使用。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed sync jobs on the FREE license" class="img-large img-center" />

与仅支持挂载的工具不同,RcloneView 在 FREE 许可证下也能对同样的 90 多个云提供商进行同步和文件夹比较,通过 Remote Manager 以 OAuth 或(视服务而定的)凭据方式连接。

## PLUS 解锁的功能

PLUS 专为需要让 RcloneView 无人值守运行,或同时在多个环境中运行的用户而设计。其核心功能是 Schedule-Based Sync:支持分钟、小时、星期、日期和月份字段的 crontab 风格计划任务,并配有计划模拟器,可在提交前预览接下来的执行时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a crontab-style sync schedule in RcloneView PLUS" class="img-large img-center" />

除计划任务外,PLUS 还增加了 Auto Mount on Startup(机器启动的瞬间挂载好的驱动器即可就绪)、Auto Start Schedule on Startup、支持运行各自拥有独立状态的多个 RcloneView 实例的 Multi-Window 功能,以及可按文件夹名称或文件类型限制比较范围的 Folder Compare with Filter。

## 为你的工作流程选择合适的许可证

如果你手动触发传输、像文件管理器一样浏览云存储,并偶尔运行比较或同步,FREE 就能覆盖整个工作流程。如果你需要在不打开应用的情况下按计划触发同步作业、需要驱动器在重启后自动挂载,或者需要为不同项目打开多个独立的 RcloneView 窗口,PLUS 能省去这些手动步骤。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job manually from the RcloneView Job Manager" class="img-large img-center" />

## 快速上手

1. **下载 RcloneView**:从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载。
2. 设置好远程账户,并运行一次手动同步或挂载,确认 FREE 功能集是否满足你的日常使用需求。
3. 如果你发现自己每天在同一时间重复执行相同的传输,不妨试着建立一个计划任务,看看 PLUS 的计划功能是否适合你。
4. 确定哪个层级适合你的工作流程后,在 Help > Activate License 中激活许可证密钥。

让许可证匹配你实际的使用习惯 —— 而不是反过来 —— 能让你的云存储设置保持简单且可预测。

---

**相关指南:**

- [计划任务最佳实践 — RcloneView 中的 Cron 与重试](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [RcloneView 中的多窗口并行 Explorer](https://rcloneview.com/support/blog/multi-window-parallel-explorer-rcloneview)
- [RcloneView 中带过滤器的 Folder Compare](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
