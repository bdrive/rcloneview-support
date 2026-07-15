---
sidebar_position: 2
description: "了解如何在 RcloneView 中使用灵活的调度选项自动执行同步任务。需要 Plus 许可证。"
keywords:
  - rcloneview
  - job scheduling
  - sync automation
  - scheduled sync
  - rclone
  - job manager
  - cloud sync
  - job scheduler
  - rclone automation
  - crontab
  - plus license
  - recurring sync
tags:
  - RcloneView
  - Job-Manager
  - Scheduling
  - Sync
  - PLUS-Feature
  - automation
date: 2025-05-23
author: Jay
---
# 任务调度与自动执行

任务调度功能允许您在指定的时间和间隔自动运行同步任务。


:::important 调度任务需要 PLUS 许可证
您需要购买 [**PLUS 许可证**](https://rcloneview.com/src/pricing.html) 才能启用此功能。
:::


## 设置任务调度

您可以在以下情况下配置调度：

- 创建新任务时（[步骤 4：调度](/howto/rcloneview-basic/create-sync-jobs#step4-scheduling-available-with-plus-license)）
- 编辑现有任务以添加调度

## 添加或编辑任务以配置调度


要打开 **`任务管理器`**，请点击主页菜单中的工具栏图标。
然后，点击 **`添加任务`** 或 **`编辑任务`**，进入 **步骤 4：调度**。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-medium img-center" />
### **如何调度任务**

1. 勾选标有 **`每隔时间单位运行 ~`** 的复选框以启用调度。
2. 使用时间和日期字段设置所需的重复调度。
3. 点击 **`模拟`** 以预览任务的运行时间。
4. 确认调度正确后，点击 **`保存`**。

  保存后，点击日历图标 <img src="/support/icons/calendar-icon.png" alt="calendar icon" class="inline-icon" /> 或 **`即将到来的调度`** 下方的 **调度日期**，即可直观查看已配置的执行时间。

<img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify job schedule" class="img-medium img-center" />

<details>
<summary>理解时间和日期字段</summary>

理解时间和日期字段

**调度配置支持 Crontab 风格的值**，可实现精确而灵活的调度，满足广泛的用户需求。

| 字段名称 | 允许的值 | 说明 |
| ------------ | -------------- | --------------------------------------- |
| 分钟         | 0-59           | 小时中的分钟                            |
| 小时         | 0-23           | 一天中的小时                            |
| 星期几       | 0-6            | 0 = 星期日，1 = 星期一，……，6 = 星期六 |
| 月中的日期   | 1-31           | 月份中的日期                                        |
| 月份         | 1-12           | 1 表示一月，2 表示二月，依此类推。 |

**支持的格式：**

- **空值**：匹配每个单位（例如，若“分钟”留空，则表示每分钟）。
- **n1, n2, ...**：值列表（例如，1,3,5 表示星期一、星期三、星期五）。
- **n1-n2**：值范围（例如，0-2 表示 0、1、2）。
- **n1-n2/n3**：带步长的范围（例如，6-12/3 表示 6、9、12）。

**分钟**、**小时**、**星期几**、**月中的日期** 和 **月份** 这几个字段以逻辑 **AND（与）** 运算共同作用。这意味着只有在**所有**条件都满足时，任务才会运行。

📌 示例：**在每月的第一个星期日凌晨 1:30 运行同步任务**。
要实现此调度，请配置以下字段：

- **时间（凌晨 1:30）：**
    - **分钟：** 30
    - **小时：** 1

- **日期（每月的第一个星期日）：**
    - **月中的日期：** 1-7 —— 匹配该月的前七天
    - **星期几：** 0 —— 其中 0 代表星期日
    - **月份：** _留空_ —— 适用于所有月份

✅ 这种组合确保任务**仅在日期处于第一周内**且**恰逢星期日**时运行，从而有效地将其调度为每月第一个星期日凌晨 1:30 执行。

<img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example of job schedule" class="img-medium img-center" />

</details>


:::caution 调度任务需要 RcloneView 保持运行
要使调度任务正常执行，**RcloneView 必须在后台运行**。
如果您的任务配置为使用外部 `rclone` 引擎，请确保在调度时间外部 `rclone` 实例也处于活动运行状态。
:::

## 检查任务调度结果


### **在任务管理器中查看执行历史**


您可以在 **任务管理器** 窗口中验证最近一次执行时间（`Last execution`）和下一次调度运行（`Upcoming Schedule`）。

<img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open job schedule history" class="img-medium img-center" />
要查看任务执行历史的详细信息：

- 打开 **任务管理器**。
- 点击 **历史图标** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> 以打开所选任务的执行历史。


在 **`执行类型`** 列中，标记为 `Scheduled` 的条目表示该任务是由调度程序自动触发的。

<img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view history of scheduled job" class="img-medium img-center" />


:::info 验证多个目标位置的日志
如果您的任务包含多个目标远程，请在“历史”视图中分别点击每个目标标签，以查看各目标的日志详情。
:::


### 完成通知提醒（Windows）

任务完成后，Windows 系统托盘中会出现一个**通知弹窗**，显示同步操作的摘要。

  - 您可以点击 **`查看详情`** 以查看结果的完整明细。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip 查看 Windows 通知上的提醒消息
如果您错过了弹窗，仍然可以通过点击 **Windows 系统托盘** 中的**通知图标**来查看同步提醒。
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::
