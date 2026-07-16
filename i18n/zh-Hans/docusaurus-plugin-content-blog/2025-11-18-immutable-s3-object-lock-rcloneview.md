---
slug: immutable-backups-s3-object-lock-rcloneview
title: "使用 RcloneView 和 S3 Object Lock 构建不可篡改的防勒索备份"
authors:
  - tayson
description: 结合 RcloneView 与启用了 S3 Object Lock 的存储桶,在 AWS S3、Wasabi、Backblaze B2 或 Cloudflare R2 上构建不可篡改的防勒索备份,支持计划任务、校验与快速恢复。
keywords:
  - s3 object lock
  - immutable backups
  - ransomware protection
  - rclone s3
  - rcloneview
  - wasabi object lock
  - cloud backup immutability
  - compliance backup
tags:
  - security
  - s3
  - wasabi
  - r2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 和 S3 Object Lock 构建不可篡改的防勒索备份

> 不必再担心勒索软件回滚数据。结合 S3 Object Lock 与 RcloneView 的计划任务,让备份坚不可摧。

不可篡改存储可以防止攻击者(或误操作)在你恢复数据之前删除或覆盖备份。S3 Object Lock 在 AWS S3、Wasabi、Backblaze B2 和 Cloudflare R2 上均可使用。RcloneView 会在你于 GUI 中创建任务时,使用存储桶的 Object Lock 和版本控制设置——无需使用命令行。

<!-- truncate -->

**相关文档**

- 创建同步任务: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 任务计划与执行(Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 比较文件夹: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- 挂载为本地磁盘: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 为什么选择 Object Lock + RcloneView

- 不可篡改副本:保留期限内禁止删除/覆盖操作。
- 云平台自由选择:适用于 S3、Wasabi、R2、B2 以及兼容 S3 的 NAS 网关。
- 无需脚本:在 GUI 中创建同步任务,设置计划任务(Plus),并保留历史记录/日志。
- 快速校验:使用 Compare 确认目标端内容一致,并显示已保留的版本。
- 轻松恢复:从锁定的存储桶中挂载或同步回来,而不会更改保留设置。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## 前提条件

- 一个在创建时就启用了 Object Lock 的兼容 S3 存储桶。
- 该存储桶已启用版本控制(Object Lock 的必要条件)。
- 已安装 RcloneView 并已连接好 S3 远程。
- 拥有 `PutObject` 和 `PutObjectRetention` 权限的 IAM/API 用户。
- (可选)如果希望自动执行计划任务,需要 Plus 授权。


## 步骤 1:在存储桶上启用 Object Lock

1. 创建存储桶时开启 Object Lock(创建后无法再切换)。在 AWS S3 上,勾选“Enable Object Lock”。在 Wasabi/R2/B2 上,在创建存储桶时选择 Object Lock 选项。
2. 为该存储桶启用版本控制。
3. 确定默认保留策略:Governance(可覆盖,更灵活)或 Compliance(不可覆盖),以及保留时长(例如 30-90 天)。

## 步骤 2:将同步/复制任务指向 Object Lock 存储桶

RcloneView 不会显示单个对象级别的 Object Lock 标志。因此,请依赖存储桶的 Object Lock 与版本控制默认设置,并将任务始终指向该目标。

1. 创建一个新的 **同步(Sync)** 任务(如果不希望发生删除操作,可选择 **复制(Copy)**):源 = 你的数据,目标 = Object Lock 存储桶。
2. 在 **高级设置(Advanced Settings)** 中,设置传输数量,并在双方都支持哈希校验时启用校验和比较。
3. 在 **过滤设置(Filtering Settings)** 中,排除缓存/临时路径,以免浪费保留期限在无用文件上。
4. 保存任务,以便每次运行都使用相同的设置(任务管理器)。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 步骤 3:设置不可篡改备份的计划任务

1. 在任务向导中(第 4 步:计划任务,Plus),为该不可篡改备份任务启用计划任务。
2. 设置每日或每小时的执行频率,并使用 **模拟(Simulate)** 预览即将运行的任务。
3. 在高级设置中为不稳定的连接设置重试次数。
4. 每周手动执行一次 Compare,以验证保留的对象。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## 步骤 4:验证保留策略与数据完整性

- 使用 Compare 在上传后验证对象数量。
- 在 S3 控制台(或 RcloneView 日志)中,检查对象是否显示 `Compliance`/`Governance` 标记以及预期的保留截止日期(Retain Until)。
- 尝试从目标端删除一个测试文件;在保留期限到期之前,该操作应被阻止。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 步骤 5:从不可篡改备份中恢复

需要恢复数据时:

1. 创建一个新任务:目标(Object Lock 存储桶)-> 源(恢复位置),然后运行同步/复制。
2. 对于临时性恢复,可以使用 Mount 浏览锁定的存储桶,并直接拖出文件。
3. 在恢复时使用复制(Copy)而非同步(Sync),以避免删除恢复位置中更新的文件。

## 最佳实践与调优建议

- 将保留时长设置得足够长,以覆盖检测和调查所需的时间(例如 30-90 天)。
- 在测试环境中使用 Governance 模式以获得更高灵活性;在生产环境和受监管数据中使用 Compliance 模式。
- 针对大型媒体文件或虚拟机镜像,在高级设置中调整传输数量。
- 至少保留两个区域或提供商的备份(例如 Wasabi + R2),并轮换计划任务。
- 关注成本:Object Lock 会保留所有版本,因此应在保留期到期后配合生命周期规则使用。

## 故障排查清单

- 上传失败并提示 AccessDenied:确认 IAM 角色具有 `PutObjectRetention` 权限。
- 对象未被锁定:确认存储桶在创建时已启用 Object Lock,并且版本控制处于开启状态。
- 传输速度慢:降低传输数量,或在对端连接不佳时使用带宽限制。
- 恢复操作删除了现有数据:从锁定的存储桶拉取数据时,使用复制(Copy)而非同步(Sync)。



一次锁定你的备份,让 RcloneView 自动为你守护安全。

<CloudSupportGrid />
