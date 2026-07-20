---
sidebar_position: 1
description: "在 RcloneView 中创建别名远程，将深层云文件夹收藏为虚拟远程，实现更快访问和更清晰的组织。"
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - alias remote
  - virtual remote
  - quick access
  - cloud remote shortcut
  - remote shortcut
  - cloud storage
  - remote manager
  - bookmark
tags:
  - RcloneView
  - alias
  - remote-storage
  - shortcut
  - virtual-remote
date: 2025-12-05
author: tayson
---

# 别名

## 如何在 RcloneView 中添加别名

**别名远程**是一种虚拟远程，用于收藏现有云远程中的特定文件夹。无需每次都逐层深入文件夹树，只需点击别名，即可立即打开目标文件夹。

在以下情况下使用别名：

- 需要频繁访问深层项目文件夹。
- 拥有复杂的文件夹结构，需要快速入口。
- 管理多个远程，希望布局更清晰。
- 希望在同步 / 比较 / 任务中更快选择特定文件夹。

**摘要：** 别名 = 云文件夹书签。

---

### 添加别名远程（通过新建远程）

#### 步骤 1 — 打开 **新建远程**，选择 **虚拟 > 别名**

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="alias remote selection" class="img-large img-center" />

#### 步骤 2 — 输入别名信息

1. **远程名称**：输入别名名称（例如 `MyAlias`）。
2. **远程（目标文件夹）**：点击文件夹图标，选择你想要的现有远程和文件夹。  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="select target remote and folder" class="img-medium img-center" />

   选择完成后，确认别名详情：  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="alias input window" class="img-large img-center" />

3. 点击 **添加远程** 创建别名。

#### 步骤 3 — 在远程管理器中检查别名

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="remote manager alias" class="img-large img-center" />

在文件浏览器中打开它，确认它指向确切的目标文件夹：  
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="alias file browser" class="img-large img-center" />

---

### 从资源管理器更快地创建别名

你可以快速创建别名远程，将常用的远程文件夹收藏起来，实现更快、更便捷的访问。

1. 在 **资源管理器** 窗格中，点击路径栏右侧的 **`☆` 别名** 图标。
2. 为你的新 **别名** 输入名称。
3. 该远程将立即被添加，并作为 **别名远程** 打开，随时可用。
<div class="img-grid-3">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote.png" alt="add new alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-name.png" alt="add new alias remote name" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-complete.png" alt="add new alias remote complete" class="img-large img-center" />
</div>

---

### 在 RcloneView 中验证已添加的别名远程

已添加的别名远程可以像 RcloneView 中的任何其他云远程一样进行验证。

1. 在顶部菜单中，点击 **`远程`** 选项卡下的 **`远程管理器`**。
2. 确认你新创建的 **别名远程** 出现在 **`远程管理器`** 窗口中。
3. 或者，使用 **`☆`** 按钮在资源管理器窗格中打开一个新标签页，验证该别名远程可供浏览。

<div class="img-grid-3">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-verify.png" alt="added alias remote verify" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-explorer-verify.png" alt="added alias remote explorer verify" class="img-medium img-center" />
</div>

---

### 为什么要使用别名远程

- 节省时间：一键跳转到深层文件夹。
- 通过将关键路径显示为独立条目，保持远程管理器整洁。
- 非常适合复杂的团队/共享盘结构。
- 与任何远程一样，可完全用于同步 / 比较 / 任务工作流程。

---

### 摘要

| 功能                        | 说明                                          |
| --------------------------- | --------------------------------------------- |
| **通过新建远程创建别名**    | 为深层文件夹创建专用远程                      |
| **通过资源管理器创建别名**  | 立即将当前文件夹添加为别名                    |
| **远程管理器显示**          | 与其他远程一样列出                            |
| **使用场景**                | 快速访问、组织管理、自动化                    |

别名虽简单却强大——化繁为简，直达重点，加速每一项云任务。

