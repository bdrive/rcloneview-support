---
sidebar_position: 4
description: "了解如何比较本地和远程文件夹、筛选结果，并使用 RcloneView 的高级比较功能直接复制或删除文件。"
keywords:
  - rcloneview
  - rclone
  - 比较文件夹
  - 文件夹复制
  - 文件差异
  - 云同步
  - 文件管理
  - 文件传输
  - 文件浏览器
  - 远程存储管理
tags:
  - RcloneView
  - compare
  - cloud-storage
  - folder-differences
  - Remote-storage-managent
date: 2025-05-30
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 比较文件夹内容

RcloneView 可帮助您识别两个文件夹之间的差异——无论是本地磁盘上的文件夹，还是跨云远程的文件夹——并通过其内置的比较功能高效地复制或管理文件。

## 选择要比较的文件夹

要开始比较文件夹：
- 在资源管理器窗格中打开两个选项卡。
- 从文件夹树中选择要比较的文件夹，或使用路径栏手动输入完整路径。
- 点击顶部 **`主页`** 菜单中的 **`Compare`** 按钮开始比较。

<img src="/support/images/en/howto/rcloneview-basic/select-compare-folder.png" alt="select compare folder" class="img-medium img-center" />
比较完成后，将弹出一个摘要窗口。
如果以后不想再看到此消息，请勾选 **"不再显示此消息"**。
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="folder comparison completed" class="img-medium img-center" />
有关文件夹比较界面布局以及各图标含义的详细信息，请参阅文件夹比较指南。

## 比较结果与文件管理

文件夹比较功能可让您直接比较并选择文件进行管理。

但是，如果您需要同步大型文件夹或高效管理多个远程文件夹，使用 **`Sync`** 是更便捷的方法。

### 按所选结果类型显示

您可以筛选比较结果，只显示与您的操作相关的文件。
这有助于您专注于需要复制或查看的内容。

例如，如果您想将文件从左侧远程的文件夹复制到右侧：

- 点击 **`Show left-only files`** 图标 <img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" />，仅显示存在于左侧文件夹但不存在于右侧的文件。
- 点击 **`Show different files`** 图标 <img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />，显示两侧文件夹中都存在但大小不同的文件。
- 这样，您就可以只关注需要复制到右侧的目标文件，而不会被已同步的文件干扰。

> ✅ 这使得只在一个方向上选择并复制必要文件变得更加轻松。
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />



<details>
<summary>更多图标详情</summary>

#### 了解比较窗口中的图标
<Tabs>
<TabItem value="Display Icons" label="显示图标">
当您用鼠标点击每个图标时，将应用以下筛选行为。
再次点击将切换筛选的开启或关闭。

选中多个图标时，将显示匹配所选条件中**任一条件**的文件（逻辑 **OR**）。

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" />：仅显示存在于左侧文件夹但不存在于右侧的文件。

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" />：仅显示存在于右侧文件夹但不存在于左侧的文件。

<img src="/support/icons/same-file-icon.png" alt="same file icon" class="inline-icon" />：仅显示两侧文件夹中都存在且相同的文件。

<img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />：显示两侧文件夹中都存在但大小不同的文件。

<img src="/support/icons/show-errored-files.png" alt="show errored files" class="inline-icon" />：显示任何错误或冲突

</TabItem>

<TabItem value="Navigate Icons" label="导航图标">
这些图标用于在 **比较** 视图中，根据当前的扁平文件夹列表结构，在文件夹层级中上下移动。

<img src="/support/icons/navigate-to-upper-folder.png" alt="navigate to upper folder" class="inline-icon" />：导航到当前列表中的**上级文件夹**。

<img src="/support/icons/navigate-to-lower-folder.png" alt="navigate to lower folder" class="inline-icon" />：导航到当前列表中的**下级文件夹**。

</TabItem>

<TabItem value="Operation Icons" label="操作图标">
这些图标用于在文件夹内执行文件操作——例如删除文件或将其复制到左侧或右侧。

<img src="/support/icons/copy-file-to-right.png" alt="copy file to right" class="inline-icon" />：将选定文件复制到右侧文件夹。

<img src="/support/icons/copy-files-to-left.png" alt="copy files to left" class="inline-icon" />：将选定文件复制到左侧文件夹。

<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" />：从任一侧删除选定文件。

</TabItem>

<TabItem value="Find Icons" label="查找图标">
**查找** 图标用于在 **比较视图** 中定位文件数量或文件大小变化最显著的文件夹。

<img src="/support/icons/find-folder-by-count.png" alt="find folder by count" class="inline-icon" />：根据比较过程中变化的文件数量查找文件夹。

<img src="/support/icons/find-folder-by-size.png" alt="find folder by size" class="inline-icon" />：根据比较过程中变化文件的总大小查找文件夹。

<img src="/support/icons/find-folder-with-largest-change.png" alt="find folder with largest change" class="inline-icon" />：查找并跳转到文件数量或大小变化最显著的文件夹。

<img src="/support/icons/find-folder-with-next-large-change.png" alt="find folder with next large change" class="inline-icon" />：移动到文件数量或大小差异较大的下一个文件夹。

<img src="/support/icons/find-folder-with-smallest-change.png" alt="find folder with smallest change" class="inline-icon" />：查找并跳转到变化最小的文件夹。

<img src="/support/icons/find-folder-with-next-smaller-change.png" alt="find folder with next smaller change" class="inline-icon" />：移动到文件数量或大小差异较小的下一个文件夹。

</TabItem>

</Tabs>


</details>


### 在远程文件夹之间复制文件

#### 选择要复制的文件

- 使用 `Ctrl + Click` 选择单个文件
- 使用 `Shift + Click` 选择一个范围
- 或直接在窗格之间拖放

#### 执行复制操作

选定文件后：
- 点击 **`Copy →`** 按钮，将选定文件从左侧复制到右侧。
- 点击 **`← Copy`** 按钮，从右侧复制到左侧。

💡 仅在以下情况下才会执行复制：
- 目标侧不存在该文件
- 该文件在两侧都存在，但大小不同

复制完成后：
- 已复制的文件将在比较视图中标记为 **`equal`** 图标 <img src="/support/icons/equal-icon.png" alt="equal icon" class="inline-icon" />
- 底部状态栏将更新完成详情
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation.png" alt="compare copy operation" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation-completed.png" alt="compare copy operation completed" class="img-medium img-center" />
</div>
:::important 校验和（即将推出）
默认情况下，RcloneView 通过名称和大小比较文件。
但是，当文件名和大小相同时，这可能不足以检测内容差异。
✅ 校验和比较将支持对文件内容进行字节级验证。
此功能计划在未来的更新中推出，将有助于确保更高的同步准确性。
:::
#### 删除文件

您还可以从任一文件夹中删除选定的文件：
- 点击左侧的 **`Delete`** 按钮以从左侧文件夹中删除文件
- 点击右侧的 **`Delete`** 按钮以从右侧文件夹中删除文件

⚠️ 删除操作不可撤销。请在操作前仔细检查选定的文件。
 
## 使用筛选器优化比较

筛选功能允许您通过在结果中排除特定文件或文件夹，更高效地运行文件夹比较。

 :::important 需要 Plus 许可证
筛选功能仅在 RcloneView 的 **Plus** 许可证版本中可用。
:::

### 为什么要使用筛选器？

您可能希望排除与比较任务无关的某些文件夹或文件类型。
使用筛选工具，您可以轻松定义在比较过程中应忽略哪些文件或文件夹。

### 如何排除特定文件夹：

例如，要从比较中排除所有名为 `folder2` 的文件夹：
1. 在比较界面中点击 **`Filter`** 图标 <img src="/support/icons/filter-run-icon.png" alt="filter run icon" class="inline-icon" />。
2. 在筛选输入框中输入 `folder2/`，然后点击 **`Add`**。
3. 该文件夹将出现在 **`Others`** 分类中。
4. 勾选 `folder2/` 旁边的复选框，然后点击 **`OK`** 应用筛选。
5. 重新运行比较。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="add custom filter rule" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="addjust custom filter rule" class="img-medium img-center" />
</div>

💡 当 `cache`、`temp` 或个人配置目录等文件夹仅供参考、无需比较或复制时，筛选功能尤其有用。



<details>
<summary>常用筛选规则</summary>

#### 常用筛选示例

**`.iso`**：排除所有 .iso 文件

**`/.git/*`**：仅排除根目录下 .git 文件夹内的文件，不包括子文件夹

**`/.git/`**：排除根目录下整个 .git 文件夹，包括其中的所有内容

**`.git/`**：排除所有位置的 .git 文件夹及其中的所有内容

</details>
