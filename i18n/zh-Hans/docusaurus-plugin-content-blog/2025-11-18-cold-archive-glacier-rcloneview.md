---
slug: tiered-cloud-archive-glacier-rcloneview
title: "使用 RcloneView 构建 S3 Standard、Wasabi 与 Glacier Deep Archive 的分层云备份"
authors:
  - tayson
description: 使用 RcloneView 在 S3/Wasabi 与 Glacier Deep Archive 之间构建冷-温-热分层备份管道,通过计划的同步/复制任务和生命周期策略实现快速恢复与超低成本长期保留。
keywords:
  - glacier deep archive
  - cold storage
  - tiered backup
  - rclone s3
  - rcloneview
  - wasabi archive
  - lifecycle policy
  - cloud backup
  - archive retention
tags:
  - RcloneView
  - backup
  - archive
  - s3
  - glacier
  - wasabi
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 构建 S3 Standard、Wasabi 与 Glacier Deep Archive 的分层云备份

> 让近期恢复保持快速,同时让长期保留保持低成本:热数据存放在 S3 Standard,温数据存放在 Wasabi/R2,归档数据存放在 Glacier Deep Archive——搭配 RcloneView 的计划任务与存储桶生命周期策略。

单一存储类型很少能满足所有文件的需求。设计一个分层管道:将新数据复制到 S3 Standard 以实现快速访问,镜像到低成本的温层(Wasabi/R2)以实现异地冗余,并将每月快照推送到 Glacier Deep Archive 以满足合规保留要求。RcloneView 在 rclone 之上提供了图形界面,让你可以安排同步(Sync)、使用对比(Compare)进行校验,并在无需编写脚本的情况下保持生命周期规则完整。

<!-- truncate -->

**相关文档**

- 创建同步任务: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 任务计划与执行(Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 对比文件夹: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- 挂载为本地驱动器: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 为什么要用 RcloneView 做分层备份

- 恢复速度:近期文件保留在 S3 Standard 中,实现低延迟读取。
- 成本控制:在 Wasabi/R2 中保留温副本;在 Glacier 中进行深度归档,每 TB 每月仅需几美分。
- 弹性:多云、多区域可降低单一提供商带来的风险。
- 无需脚本:通过可视化任务、计划和日志取代 cron/YAML。
- 有据可查:对比(Compare)任务能在你真正需要恢复之前发现数据漂移。

## 架构概览

```
[主存储 (NAS/Drive/OneDrive)] --(每小时同步)--> [S3 Standard 热副本]
                                         \
                                          --(每日同步)--> [Wasabi/R2 温副本]
                                          --(每月复制)--> [Glacier Deep Archive]
```

- 热:S3 Standard(快速恢复)。
- 温:Wasabi 或 R2(成本低,且对恢复时的出站流量友好)。
- 冷:Glacier Deep Archive,用于 90-365 天的保留(使用存储桶生命周期规则转换对象)。

## 前提条件

- 在 RcloneView 中配置好三个远程(例如 `s3:hot`、`wasabi:warm`、`s3:archive`)。
- 热层/温层存储桶启用版本控制;归档存储桶设置生命周期规则以转换到 Glacier Deep Archive。
- IAM/API 权限:列出/读取/写入 + 分块上传;冷层需要 Glacier 恢复权限。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 步骤 1:构建热层和温层的同步任务

1. 创建一个**同步(Sync)**任务(主存储 -> S3 热层)。
2. 在**高级设置**中,设置传输数量,并在两端都支持哈希校验时启用校验和比对。
3. 在**过滤设置**中,排除缓存/临时文件夹。
4. 创建第二个**同步(Sync)**任务(主存储 -> Wasabi/R2 温层),使用类似的设置和过滤规则。
5. 在任务管理器中保存这两个任务。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 步骤 2:添加冷归档的复制任务

1. 创建一个**复制(Copy)**任务(S3 热层 -> Glacier 归档存储桶)。使用复制而非同步,以避免在归档层产生删除操作。
2. 在**高级设置**中,根据需要设置传输数量和校验和比对。
3. 使用存储桶生命周期规则将对象转换到 Glacier Deep Archive,并在合规保留期结束后过期旧版本。

## 步骤 3:安排所有任务计划

- 在任务向导中(第 4 步:计划,Plus),设置执行频率:热层每小时,温层每晚,冷层每月。
- 使用**模拟(Simulate)**预览计划,并在高级设置中设置重试次数。
- 添加每周一次的对比(热层与温层)以尽早发现数据漂移。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## 步骤 4:验证完整性

- 首次完整同步后,在热层与温层之间运行对比(Compare)。
- 对于归档层,进行抽样恢复检查:执行一次小规模的 Glacier 检索,确认文件能正常打开。
- 在每一层保留一个小的哨兵文件(例如 `canary.txt`),并在对比报告中检查其是否存在。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 步骤 5:恢复手册

- 快速恢复:根据出站流量/位置情况,从温层(Wasabi/R2)或热层(S3 Standard)拉取。
- 深度恢复:针对所需的前缀发起 Glacier 恢复请求,然后复制回温层/热层。
- 在批量复制前使用 RcloneView 的挂载(Mount)功能进行浏览,以避免恢复错误的文件夹。

## 调优建议

- 对延迟/出站流量敏感的场景:在工作时间降低传输数量,在非工作时间提高传输数量。
- Glacier 成本:按月打包归档;避免频繁的小文件上传,以减少 PUT 和检索请求次数。
- 安全性:将热层/温层与对象锁定(Object Lock)搭配使用(参见不可变存储指南),以阻止勒索软件删除数据。
- 命名规范:为快照添加日期文件夹前缀(例如 `archive/2025-11/`),以简化生命周期管理和恢复操作。

## 故障排查清单

- 恢复延迟:Glacier 检索可能需要数小时——请据此规划 RPO/RTO。
- 归档层出现 AccessDenied:确认 IAM 角色对该存储桶允许 `glacier:InitiateJob`/恢复操作。
- 发现数据漂移:重新运行热层/温层同步;如果归档层缺少对象,则从热层重新复制差异部分。
- 成本激增:在保留期结束后启用生命周期过期;在出站流量高峰期限制并发数。



分层一次,持续计划,借助 RcloneView 让成本与 RPO 始终保持可控。

<CloudSupportGrid />
