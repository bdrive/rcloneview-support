---
sidebar_position: 8
description: "了解如何使用 RcloneView 将远程云存储挂载为虚拟驱动器，包括通过远程浏览器、挂载管理器和系统托盘进行配置。"
keywords:
  - rcloneview
  - rclone
  - mount
  - mount manager
  - cloud drive
  - virtual drive
  - rclone mount
  - local drive
  - remote explorer
  - remote storage management
tags:
  - RcloneView
  - mount
  - local-drive
  - virtual-drive
  - cloud-storage
  - Remote-storage-managent
date: 2025-06-19
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 将云存储挂载为本地驱动器

:::important 挂载前提条件
在挂载之前，请确保目标远程已添加到 RcloneView 中。   
参见：[添加新远程](/howto/rcloneview-basic/remote-manager#add-a-new-remote)
:::

## 在 RcloneView 中挂载远程存储

RcloneView 允许你将远程存储挂载为虚拟驱动器，以便更轻松地访问和管理。  
本指南将说明如何使用两种方法挂载远程存储，以及如何管理挂载配置。

### 方法一：通过远程浏览器挂载

你可以在浏览远程文件夹内容时直接挂载它。

1. 在 **远程浏览器（Remote Explorer）** 面板中，选择要挂载的远程文件夹。 
2. 点击远程浏览器面板顶部角落的 **挂载图标**（<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />）。
3. **挂载（Mount）** 对话框将打开，并自动填入所选的远程路径。
4. 配置挂载设置：
   - **目标（Target）**：选择 `Auto`，或从列表中手动分配一个驱动器盘符。
   - （可选）勾选“挂载到本地路径”以指定自定义挂载位置。
   - 启用 **自动挂载（Auto mount）**，以在 RcloneView 启动时自动挂载该远程。
5. 点击 **保存并挂载（Save and mount）** 以应用设置并立即挂载。
   - 或者，点击 **保存（Save）** 仅保存挂载配置，稍后再挂载。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-medium img-center" />

<details>
<summary>高级挂载选项</summary>

高级挂载选项

| 字段                        | 说明                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **卷名称（Volume name）**    | （可选）为挂载的卷设置一个自定义名称。此名称可能会显示在文件管理器或系统界面中。                                                                                                                                                        |
| **挂载类型（Mount type）**     | 选择挂载后端：<br /> - `cmount`（Windows 默认）：使用 Rclone 内置的、基于 C 语言的类 FUSE 挂载引擎，兼容性高  <br />- `nfsmount`（备选方案，主要用于 Linux/macOS 环境）。使用 NFS 协议挂载远程 |
| **网络驱动器（Network drive）**  | 勾选此框将挂载标记为网络驱动器。这可能会影响操作系统对已挂载文件夹的处理方式。                                                                                                                                                       |
| **只读（Read only）**      | 启用只读模式，阻止对远程执行写操作。                                                                                                                                                                                               |
| **允许其他用户（Allow other）**    | 允许挂载者以外的其他用户访问已挂载的文件系统（主要用于 Linux）。                                                                                                                                                        |
| **缓存模式（Cache mode）**     | 控制缓存行为。可选项包括：  <br />- `off`  <br />- `minimal`  <br />- `writes`  <br />- `full`  <br />默认的 `writes` 模式会缓存写操作。                                                                                              |
| **最大缓存大小（Cache max size）** | 允许的最大缓存大小（字节）。  <br />示例：1073741824 = 1GB。  <br />设置为 `-1` 表示不限制。                                                                                                                                                            |
| **最大缓存时间（Cache max age）**  | 缓存数据的有效保留时长。时间单位为 **纳秒**。示例：3600000000000 = 1 小时。                                                                                                                                               |
| **目录缓存时间（Dir cache time）** | 目录缓存的有效时长。时间单位为 **纳秒**。示例：300000000000 = 5 分钟。                                                                                                                                                   |

💡 请仅在熟悉挂载设置的情况下使用这些选项。默认值对大多数用户已经足够合适。

</details>
### 方法二：通过挂载管理器挂载

你也可以使用 **挂载管理器（Mount Manager）** 来配置并挂载存储。

1. 点击顶部菜单栏 **`远程（Remote）`** 选项卡下的 **`挂载管理器（Mount Manager）`** 按钮。  
2. 点击 **`新建挂载（New mount）`** 以创建新的挂载配置。  
3. 选择远程，并可选择指定要挂载的子目录。  
4. 配置挂载选项：  
   - **目标（Target）**：选择 `Auto`，或从列表中手动分配一个驱动器盘符。  
   - （可选）启用 **挂载到本地路径（Mount to local path）** 以指定自定义挂载路径。  
   - 启用 **自动挂载（Auto mount）**，以在 RcloneView 启动时自动挂载该远程。  
1. 点击 **`保存（Save）`** 以保存挂载配置而不立即挂载。  
   - 若要立即保存并挂载该远程，请点击 **`保存并挂载（Save and mount）`**。  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-medium img-center" />
## 查看和管理已挂载的驱动器

要查看或管理你的挂载配置，请点击主菜单 **`远程（Remote）`** 选项卡下的 **`挂载管理器（Mount Manager）`** 按钮，打开该对话框。

所有已保存的挂载配置都会列示在挂载管理器窗口中。  
每个配置会根据其当前 **状态** 进行分类：
- **已挂载（Mounted）**：该远程当前已挂载并处于活动状态。
- **未挂载（Unmounted）**：挂载配置已保存，但当前未挂载。
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount manager status" class="img-medium img-center" />
根据状态的不同，你可以执行以下操作：


<Tabs>
<TabItem value="Status: mounted" label="🟢 状态：已挂载">

- <img src="/support/icons/unmount-icon.png" alt="unmount icon" class="inline-icon" /> ：**卸载（Unmount）** — 点击以卸载当前已挂载的远程。
- <img src="/support/icons/disabled-edit-mount.png" alt="disabled edit mount" class="inline-icon" /> ：（已禁用）编辑
- <img src="/support/icons/open-mount-folder.png" alt="open mount folder" class="inline-icon" /> ：**打开（Open）** — 点击以在文件资源管理器中打开已挂载的文件夹。
- <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled delete mount configuration" class="inline-icon" /> ：（已禁用）删除
</TabItem>



<TabItem value="Status: Configured" label="🟠 状态：未挂载">

- <img src="/support/icons/mount-run-icon.png" alt="mount run icon" class="inline-icon" /> ：**挂载（Mount）** — 点击以手动挂载所选远程。
- <img src="/support/icons/edit-mount-configuration.png" alt="edit mount configuration" class="inline-icon" /> ：**编辑（Edit）** — 点击以修改挂载设置。
- <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled open mount folder" class="inline-icon" /> ：（已禁用）打开
- <img src="/support/icons/delete-mount-configuration.png" alt="delete mount configuration" class="inline-icon" /> ：**删除（Delete）** — 点击以移除该挂载配置。
</TabItem>

</Tabs>


<br />
<br />

:::tip 通过系统托盘快速挂载
你也可以通过系统托盘图标快速管理挂载。

1. 右键点击系统托盘中的 **RcloneView 图标**。
2. 将鼠标悬停在 **挂载（Mount）** 菜单上。
3. 你可以：
   - 查看当前已挂载的驱动器，并挂载或卸载该驱动器
   - 全部卸载
   - 开始新的挂载
<img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount from system tray" class="img-small img-left" />

:::

