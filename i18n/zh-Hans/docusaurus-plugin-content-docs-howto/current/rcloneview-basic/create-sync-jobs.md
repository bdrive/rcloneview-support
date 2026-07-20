---
sidebar_position: 6
description: 了解如何在 RcloneView 中创建和管理同步任务，以便对远程文件夹进行重复或定时同步。
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync job
  - job manager
  - scheduled sync
  - create sync
  - rclone automation
  - plus license
  - cloud storage
  - remote storage
tags:
  - RcloneView
  - Cloud
  - Sync
  - job-scheduler
  - create-job
  - Job-Management
date: 2025-06-04
author: Jay
---
# 创建同步任务

您可以将常用的同步任务保存为**任务（Job）**，只需点击几下即可重复运行它们。

创建任务主要有两种方式：
- 直接从同步任务（即时同步）创建任务。
- 使用**任务管理器（Job Manager）**手动配置并保存任务。

## 从即时同步创建任务

您可以通过配置同步任务，并在同步窗口中点击**保存为任务（Save to Jobs）**来创建任务。

👉 参见：[从同步立即创建任务](/howto/rcloneview-basic/synchronize-remote-storages#save-sync-operation-as-a-job)

您可以通过点击主页菜单中的 **`Job Manager`** 工具栏，查看并运行已保存的任务。

## 通过任务管理器创建任务


### （可选）选择源文件夹和目标文件夹

在使用**任务管理器**创建任务之前，您可以选择性地指定源文件夹和目标文件夹。

如果您希望在后续添加新任务时预先分配文件夹，这会很有帮助。

此外，您也可以直接在**任务管理器**的**添加任务**窗口中配置源文件夹和目标文件夹。

要打开任务管理器，请点击主页工具栏中的**任务管理器**按钮。

<img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create job using job manager" class="img-medium img-center" />

### 添加新任务

要添加新任务，请在**任务管理器**（即 `Jobs`）弹窗中点击 **`Add Job`**。

#### 步骤 0：打开任务管理器并点击 `Add Job`

  您将看到如下 `Jobs` 窗口。点击**添加任务（Add Job）**按钮以打开任务创建向导。

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add job in job manager" class="img-medium img-center" />
  任务向导将引导您完成以下三个步骤：

1. **配置存储（Configure Storage）** – 选择源文件夹和目标文件夹
2. **高级设置（可选）** – 设置同步行为
3. **筛选设置（可选）** – 定义文件类型或文件夹的筛选条件
<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add job configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add job advnaced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add job filtering settings" class="img-medium img-center" />
</div>
#### 步骤 1：配置存储

- 在 **`Configure Storage`** 步骤中，检查所选的源文件夹和目标文件夹。
- 输入 **`Job Name`**（❗允许的字符：`a–z`、`A–Z`、`0–9`、`-`、`_`）
- 若要将一个源同步到多个目标，点击**添加目标（Add Destination）**以添加更多远程文件夹。
  这样可以实现 **1:N（一对多）**同步。
- 请确保在点击**下一步**之前所有文件夹均已正确设置。

:::caution 同步的工作原理
RcloneView 同步会使源和目标保持一致。
这意味着**仅会修改目标**。
- **源**文件夹的内容会被镜像到**目标**文件夹。
- 目标中存在但源中不存在的文件将被**删除**。

👍 **重要提示：** Rclone 官方仅支持**单向同步**。
⚠️ **双向同步（=Bidirection）**作为**测试版功能**提供，尚未获得官方正式支持。使用时可能出现意外行为或错误，**不建议在生产环境中使用**。
:::

<details>
<summary>配置存储详情</summary>

<img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job config storage details" class="img-medium img-center" />

1. **`Job Name`**。
 - ❗允许的字符：`a–z`、`A–Z`、`0–9`、`-`、`_`
2. **选择源文件夹**。
 - 点击左侧面板中的文件夹图标以选择源文件夹。
1. **选择目标文件夹**。
- 点击右侧面板中的文件夹图标以选择目标文件夹。
1. **添加其他目标**（可选）。
- 点击**添加目标（Add Destination）**按钮，即可一次性同步到多个目标。如有需要，可配置 **1:N 同步**。
5. **选择同步方向**。
 - **仅修改目标**：从源同步到目标。更新或删除目标内容以匹配源。
 - **双向同步**（测试版）：比较两个文件夹并双向同步更改。
⚠️ 此模式可能会无意中覆盖新文件，请谨慎使用。
6. **创建空目录**（可选）。
- 启用后，源中不包含任何文件的目录也会在目标中重新创建为空文件夹。

:::caution 在 RcloneView 中使用双向同步
RcloneView 使用 `bisync`（rclone 中的测试版命令）来执行双向同步。
由于该功能仍处于**实验阶段**，我们建议在启用之前先查阅官方[用户手册](https://rclone.org/bisync/)，尤其是[限制说明](https://rclone.org/bisync/#limitations)部分。

不当使用 bisync 可能导致数据丢失，请谨慎使用。
:::


</details>

#### 步骤 2：高级设置（可选）

  - 高级设置包括以下选项：
	  - 传输性能
	  - 连接方式
	  - 错误处理行为

> 💡 除非您需要自定义行为，否则建议使用默认值。

<details>
<summary>高级设置详情</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**性能：**

1. **`Number of file transfers`**：
   并行运行的文件传输数量。如果远程存储出现较多超时，将其设置为较小的数值有时会有帮助；如果带宽充足且远程存储速度较快，则可以设置为更大的数值。
2. **`Number of multi thread transfers`**：
   使用多线程传输时，此设置用于指定使用的流数量。设置为 `0` 可禁用多线程传输（默认为 4）。当传输大于 256MB 的文件到支持该功能的后端时，rclone 会使用多线程传输文件。
3. **`Number of equaility checkers`**：
   checker 用于在同步过程中检查文件是否相等。对于某些存储系统（例如 S3、Swift、Dropbox），此过程可能耗时较长，因此会并行运行。默认并行运行 8 个 checker。但是，对于响应较慢的后端，您可能需要通过将 `--checkers` 设置为 4 或更少的线程数来降低（而不是增加）此默认值。


**安全性与完整性：**

5. **`Enable checksum to compare files`**：
   通常情况下，rclone 会通过比较文件的修改时间和大小来判断文件是否相同。如果启用此选项，rclone 将检查文件的哈希值和大小来判断文件是否相同。当在存储相同哈希类型的远程之间传输时（例如 Drive 和 Swift），此选项非常有用。有关各远程支持的哈希类型详情，请参见[概览部分](https://rclone.org/overview/)中的表格。


**错误控制：**

5. **`Retry the entire sync if it fails this many times`**：
   如果同步失败达到此次数，则重试整个同步（默认 3 次）。某些远程可能不太稳定，重试几次有助于获取因错误而未能传输的文件。将其设置为 `1` 可禁用重试。

</details>



#### 步骤 3：筛选设置（可选）

- RcloneView 默认会对 Google Docs 或 Box Docs 等服务应用基本筛选规则。
- 您可以添加更多要从同步中排除的文件类型或文件夹。

<details>
<summary>筛选设置详情</summary>


<img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs filtering setttings details" class="img-medium img-center" />
1. **`Don't sync files over`**：
   控制允许同步的**最大文件大小**。
   默认单位为 MB。
2. **`Don't sync files older than this`**：
   控制允许同步的**最长文件年限**。
   此设置**仅适用于文件**，不适用于目录。
   请使用以下单位：
   `y` = 年，`d` = 天，`h` = 小时，`m` = 分钟，`s` = 秒（示例：2y30d12h30m45s）
3. **`Don't sync folders over this depth`**：
   如果设置了此项，Rclone 将仅同步指定深度以内的文件夹。
   例如，将其设置为 `1` 时，将仅同步顶层目录中的文件。
   设置为 `2` 时，将同步前两级文件夹内的文件，以此类推。
4. **预定义筛选器**。
   您可以快速应用针对常见文件类型的内置筛选器，例如：
   - 音乐、视频、图片、文档、Google Docs、Box Docs
     这些筛选器可在筛选列表中作为预定义选项使用。
1. **其他（=自定义筛选器）**。
   您可以定义自定义规则，以排除或包含特定的文件类型、文件夹或路径。
   以下是一些常见示例：
   **`.iso`**：排除所有 .iso 文件。
   **`/.git/*`**：仅排除根目录下 .git 文件夹内的文件，不包括子文件夹。
   **`/.git/`**：排除根目录下整个 .git 文件夹，包括其中的所有内容。
   **`.git/`**：排除所有位置的 .git 文件夹及其内部所有内容。
   
   🔗 有关更多高级示例和语法，请参见 [Rclone 筛选指南](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>


#### 步骤4：定时调度（PLUS 许可证可用）

任务调度功能可让您按指定的时间间隔或时间点自动运行任务。

💡 此功能仅在 [**PLUS 许可证**](https://rcloneview.com/src/pricing.html)下可用。

有关更多详情，请参见[设置任务调度](/howto/rcloneview-advanced/job-scheduling-and-execution)。

最后，在列表中查看您已创建的任务，确保一切设置正确。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add job scheduling" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add job completed" class="img-medium img-center" />
</div>
