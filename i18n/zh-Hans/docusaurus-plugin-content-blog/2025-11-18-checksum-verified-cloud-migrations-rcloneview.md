---
slug: checksum-verified-cloud-migrations-rcloneview
title: "使用 RcloneView 进行校验和验证的云迁移（Drive、Dropbox、S3、R2）"
authors:
  - tayson
description: 使用 RcloneView 的同步（Sync）加对比（Compare）任务，在 Google Drive、Dropbox、OneDrive、S3 或 Cloudflare R2 之间迁移数据，进行校验和验证并检测数据漂移——无需命令行。
keywords:
  - checksum migration
  - rclone checksum
  - data integrity
  - rcloneview
  - cloud migration
  - google drive to dropbox
  - s3 to r2
  - compare sync
tags:
  - RcloneView
  - migration
  - compare
  - backup
  - sync
  - safety
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 进行校验和验证的云迁移（Drive、Dropbox、S3、R2）

> 让 PB 级数据只搬一次。使用 RcloneView 进行同步、以校验和验证，并在切换应用之前捕获数据漂移。

从 Google Drive 复制到 Dropbox，或从 S3 复制到 R2 很容易——难的是证明每个对象都完整无损地到达。Rclone 拥有久经考验的校验和与对比模式；RcloneView 将它们封装进图形界面，让你无需编写任何 shell 脚本即可运行带有计划任务和日志的完整性校验迁移。

<!-- truncate -->

**相关文档**

- 创建同步任务：https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 任务计划与执行（Plus）：https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 对比文件夹：https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- 将云存储挂载为本地磁盘：https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 为什么需要校验和验证的迁移

- 避免静默损坏：校验和可以检测比特腐蚀（bitrot）和不完整上传。
- 更快的切换：对比（Compare）会在你切换端点之前突出显示不匹配之处。
- 支持多云：适用于 Drive、Dropbox、OneDrive、S3、Wasabi、R2、B2 以及 NAS。
- 零脚本：以可视化方式构建、计划和重新运行任务。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 迁移蓝图

```
[Source cloud/NAS] --(RcloneView Sync with checksum enabled)--> [Target cloud]
                                           \
                                            --(RcloneView Compare)--> [Drift report]
```

- 第一阶段：启用校验和的基线同步（Baseline Sync），一次性上传全部数据。
- 第二阶段：按计划进行增量同步，缩小最终切换窗口。
- 第三阶段：使用对比（Compare）确认对象数量与哈希值一致。
- 第四阶段：切换（Cutover）/挂载目标存储以供生产使用。

## 前置条件

- 已在 RcloneView 中为源和目标分别添加远程（例如 `drive:team`、`dropbox:prod`、`s3:archive`、`r2:mirror`）。
- 目标有足够的配额；若为 S3 兼容存储，为了安全起见应启用版本控制。
- API/IAM 密钥具备 list/read/write 权限，若为 S3 还需支持分片上传（multipart uploads）。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 第 1 步：创建启用校验和的同步任务

1. 新建同步任务：源 = 当前系统，目标 = 目标云存储。
2. 在**高级设置（Advanced Settings）**中，若两个远程都支持哈希，启用校验和对比，并根据你的链路调整传输/校验并发数。
3. 在**过滤设置（Filtering Settings）**中，为缓存/临时文件夹添加包含/排除过滤规则。
4. 保存任务，以便重新运行时保留相同的完整性设置（任务管理器 Job Manager）。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 第 2 步：计划增量运行

1. 在任务向导中（第 4 步：计划任务，Plus），为迁移任务启用计划。
2. 每晚或每小时运行一次，以减少最终切换时的差异量；使用**模拟运行（Simulate）**预览运行结果。
3. 在高级设置中设置限流时的重试次数。
4. 日志和历史记录会自动保存；在任务历史（Job History）中查看审计记录。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## 第 3 步：使用对比（Compare）进行验证

- 完成基线同步后，在源与目标之间运行对比，验证内容而不仅仅是大小。
- 添加每周一次的对比例行检查，以捕获后期出现的漂移（需从对比界面手动运行；计划任务功能仅适用于同步任务）。
- 检查报告/日志中的不匹配项；重新运行同步以仅修复差异部分。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 第 4 步：安全切换

1. 在维护窗口期间冻结源端的写入操作。
2. 运行启用校验和的最终同步，弥合剩余差异。
3. 最后再运行一次对比；应确认零不匹配。

## 调优技巧

- 高延迟链路：降低传输并发数；对于大型媒体文件，若后端支持，请保持多线程传输启用。
- 混合云环境：若某个提供商不支持校验和，则依赖大小/时间匹配，并对关键数据进行人工确认。
- 带宽限制：在工作时间于设置中设定限速；将较重的任务安排在夜间运行。
- 安全网：在目标端保持版本控制开启；在支持的情况下使用对象锁（Object Lock）。

## 故障排查清单

- 不匹配数量：重新运行对比；确认双方都能提供哈希值（部分提供商不支持校验和）。
- 验证速度慢：若链路已饱和，减少校验/传输并发数。
- S3 上传出现 AccessDenied：确认已授予分片上传和 list 权限。
- 已删除文件重新出现：仅在最终切换后再移除删除标志，以实现严格镜像。


对每次迁移都进行校验和验证，数据就只需要搬一次。

<CloudSupportGrid />
