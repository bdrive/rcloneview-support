---
sidebar_position: 7
description: "了解如何使用 RcloneView 任务管理器运行、监控和管理同步任务，包括模拟运行、任务历史记录和通知。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - job manager
  - run sync job
  - dry run
  - job execution
  - Job Monitor
  - job history
  - scheduled jobs
  - rclone automation
tags:
  - RcloneView
  - Cloud
  - Sync
  - Job-Management
  - cloud-storage
  - job-history
  - job-monitoring
  - Remote-storage-managent
date: 2025-06-16
author: Jay
---
# 执行和管理任务

在主菜单中点击 `任务管理器` 工具栏，打开任务管理器。

选择要运行的任务，然后点击 **`运行`** 按钮执行该任务。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />


<details>
<summary>字段说明 </summary>

- `任务名称`（Job Name）：任务的名称。 - > 该图标直观地表示从源到目标的同步方向。当任务涉及多个目标时，会为每个目标远程分别显示图标。
- `源`（Source）：作为源的远程存储中的文件夹。
- `目标`（Destination）：作为目标的远程存储中的文件夹。
- `下一次计划`（Upcoming Schedule）：显示该任务下一次计划运行的时间。如果未设置计划，则显示为 **未计划**。
  ⚠️ _此功能仅在 PLUS 许可证下可用。_ 参见：[如何配置任务计划](/howto/rcloneview-advanced/job-scheduling-and-execution)。
- `上次执行`（Last execution）：该任务最近一次按计划自动执行的时间。
- `创建时间`（Created At）：任务的创建日期和时间。
- `历史记录`（History）：打开该任务的执行历史记录。点击后将打开完整的历史记录窗口。

</details>

<details>
<summary>用于管理任务的工具栏</summary>

用于管理任务的工具栏

选择任务后，您可以使用以下工具栏选项来管理它：

- **`添加任务`**（Add Job）：创建并添加一个新任务。[参见：如何创建任务](/howto/rcloneview-basic/create-sync-jobs)
- **`编辑任务`**（Edit Job）：编辑所选任务。
- **`复制`**（Duplicate）：创建所选任务的副本。
  复制的任务会自动以 (1)、(2)、…、(n) 等后缀命名。
  之后您可以使用编辑任务功能，基于原任务快速自定义为新任务。
- **`删除`**（Delete）：删除所选任务。

</details>


:::tip 💡 导出和导入任务
点击 **任务管理器** 右上角的 **设置图标** <img src="/support/icons/setting-icon.png" alt="setting icon" class="inline-icon" />，即可导出当前任务或导入之前保存的任务。任务会导出并保存为名为 `rclone_jobs_~.json` 的文件

:::
### 模拟：运行模拟运行（可选）

您可以运行 **模拟运行（Dry run）**，在不进行任何实际更改的情况下模拟同步操作。

点击 **`模拟运行`** 按钮，在不进行更改的情况下模拟同步。

- 此预览会显示哪些文件将被复制到 **目标**，以及哪些文件将被删除。
- 点击 **`查看详情`** 可查看在目标中将发生的完整操作列表（例如复制、创建、删除）。
- 对于具有多个目标的任务，结果会按每个目标分组，并为每个目标分别提供 **`查看详情`**。

<img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job dry run result" class="img-medium img-center" />

## 监控任务运行结果

您可以实时查看同步操作的进度和结果。

### 传输状态（进行中）

- 同步过程中，打开 **`传输`** 选项卡以实时查看每个文件的进度。
- 点击 **+** 图标可展开并监控各个文件的传输情况。
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### 已完成任务（执行完成后）

- 同步完成后，前往 **`已完成`** 选项卡查看结果。
- 点击 **+** 图标可查看每个已完成任务的文件级详情。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip 快速打开已同步的远程
在 **`已完成`** 选项卡中，您可以双击任意已完成的任务，在资源管理器面板中同时打开源文件夹和目标文件夹。
这样可以方便地立即查看已同步的文件夹。
:::

### 完成通知提醒（Windows）

同步完成后，Windows 系统托盘会弹出一条通知，显示本次同步操作的摘要。

  - 您可以点击 **`查看详情`** 查看完整的结果明细。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip 在 Windows 通知中查看提醒消息
如果您错过了弹窗提示，仍然可以通过点击 **Windows 系统托盘** 中的 **通知图标** 来查看同步提醒。
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


## 查看任务历史记录


在 **`任务管理器`** 中，点击任务旁边的 **`历史记录`** 图标 <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> 即可查看该任务的执行日志。

如果某个任务是针对多个目标运行的，每个目标将在历史记录中显示为单独的选项卡。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-medium img-center" />

<details>
<summary>字段说明</summary>

字段说明


- `执行类型`（Execution Type）：
	- 手动：由用户手动运行
	- 计划：由 RcloneView 自动运行
- `开始时间`（Start Time）：任务开始的时间
- `耗时`（Time Spent）：同步的总时长
- `状态`（Status）：任务的执行结果
	- 已完成（Completed）：成功
	- 出错（Errored）：失败，可查看错误消息。
- `总大小`（Total Size）：传输的数据总大小
- `速度`（Speed）：平均传输速度。
- `文件数`（Files）：已传输的文件数量。
- `任务类型`（Job Type）：目前仅支持同步（Sync），未来更新可能包含复制（Copy）、清除（Purge）或批量任务（Batch jobs）
- `删除`（Delete）：删除所选的历史记录条目。

</details>


<details>
<summary>用于筛选和删除历史记录的工具栏</summary>

用于筛选和删除历史记录的工具栏

当历史记录数量较多时，您可以使用工具栏选项进行筛选或删除。

- `起始日期 ~ 结束日期`（From ~ To）：通过日历选择自定义日期范围，以显示该时间段内的历史记录。
- `今天`（Today）：仅显示今天的历史记录条目。
- `昨天`（Yesterday）：显示恰好一天前的历史记录条目。
- `上周`（Last week）：显示过去 7 天的历史记录。
- `上月`（Last month）：显示过去 30 天的历史记录。
- `全部删除`（Delete all）：- 永久删除所有历史记录。 ⚠️ _此操作无法撤销，请谨慎操作。_

</details>



