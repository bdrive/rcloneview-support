---
sidebar_position: 14
description: 在 RcloneView 的路径栏中一步复制完整的文件夹路径——包括远程名称——以获得精确的命令和自动化操作。
keywords:
  - rcloneview
  - rclone
  - copy path
  - remote path
  - path bar
  - automation
  - terminal
tags:
  - RcloneView
  - path-bar
  - copy-path
  - rclone
date: 2025-12-05
author: tayson
---

# 在 RcloneView 中使用复制完整路径功能

**复制完整路径**功能让你可以一步获取整个文件夹路径——可选择是否包含远程名称。这非常适合编写 `rclone` 命令、运行终端测试、分享精确的云路径，以及避免脚本中的错误。

---

## 在哪里找到复制完整路径

你可以从远程文件浏览器顶部的**路径栏**访问复制完整路径功能。  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path.png" alt="copy full path path bar" class="img-medium img-center" />

右键点击路径栏可以看到以下选项：

- **剪切**
- **复制**
- **粘贴**
- **复制完整路径（含远程）**
- **全选**

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-all.png" alt="copy full path context menu" class="img-medium img-center" />

---

## 全选——高亮显示整个路径

选择**全选**会高亮显示路径字段中的全部文本，方便你快速复制。  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-all.png" alt="copy full path select all" class="img-medium img-center" />

复制并粘贴（例如粘贴到记事本）后，本地文件夹名称（例如 `Meet recordings`）会完全按照显示的样子出现。  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-notepad.png" alt="copy full path notepad" class="img-medium img-center" />

---

## 复制完整路径（含远程）——远程 + 文件夹路径

**复制完整路径（含远程）**会捕获以下内容：

- 远程名称
- 完整的文件夹路径
- 用于 `rclone` 的精确 `remote:path` 格式

示例结果：

```
mygoogledrive:Meet recordings
```

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path.png" alt="copy full path with remote" class="img-medium img-center" />

粘贴到记事本中会显示可直接使用的路径：  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path-notepad.png" alt="copy full path with remote notepad" class="img-medium img-center" />

这种格式可以直接在如下命令中使用：

```bash
rclone copy "mygoogledrive:Meet recordings" /local/backup
```

---

## 何时使用此功能

- **编写 `rclone` 命令**：即时粘贴精确的远程路径。
- **在终端中测试路径**：无需重新输入即可使用 `remote:path`。
- **避免脚本错误**：防止自动化或批处理任务中出现拼写错误。
- **与团队成员分享路径**：为支持或协作发送精确的位置信息。

---

## 快速参考

| 操作                              | 作用                                       |
| --------------------------------- | ------------------------------------------ |
| **复制**                          | 复制路径栏中选中的文本                      |
| **全选**                          | 选中整个路径文本                            |
| **复制完整路径（含远程）**        | 复制 `remote:path` 格式（推荐）             |
| **粘贴**                          | 将剪贴板文本插入路径栏                      |

复制完整路径功能看似简单，但对于自动化、脚本编写和精确传输而言，它是 RcloneView 中最快捷的效率提升工具之一。
