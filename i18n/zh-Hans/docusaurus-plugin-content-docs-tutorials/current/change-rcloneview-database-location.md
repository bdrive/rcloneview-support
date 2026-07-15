---
sidebar_position: 9
description: "更改 RcloneView 存储其 SQLite 数据库（rclone_view.db）的位置，为历史记录、任务、挂载和界面状态选择一个安全、可写的文件夹。"
keywords:
  - rcloneview
  - database
  - rclone_view.db
  - settings
  - path settings
  - job history
  - transfer history
  - sqlite
  - backup
tags:
  - RcloneView
  - Tutorial
  - settings
  - backup
  - database
date: 2025-12-08
author: tayson
---

# 更改数据库存储位置

RcloneView 将其核心状态存储在一个名为 **`rclone_view.db`** 的 SQLite 文件中。该数据库记录了您的传输历史、任务定义、挂载设置、任务执行历史以及界面状态——应用程序需要用它来“记住您做过的操作”并在界面中“显示当前状态”。

默认情况下，该数据库位于您的“文档”文件夹中。您可以将其移动到其他可写位置，例如外部驱动器或已同步的备份文件夹。

<img src="/support/images/en/tutorials/database/database-windows-path.png" class="img-medium img-center" alt="Default database path on Windows" />

## 各操作系统的默认数据库路径

| Platform | Default path                               |
| -------- | ------------------------------------------ |
| Windows  | `C:\Users\<user>\Documents\rclone_view.db` |
| macOS    | `/Users/<user>/Documents/rclone_view.db`   |
| Linux    | `/home/<user>/Documents/rclone_view.db`    |

## 如何更改数据库位置

您可以直接在 RcloneView 内选择任意可写文件夹（本地或外部）。

### 步骤 1 — 打开设置

- 在顶部菜单中依次选择 **设置 → 常规设置（Settings → General Settings）**。  
  <img src="/support/images/en/tutorials/database/database-settings-menu.png" class="img-medium img-center" alt="Open Settings menu" />

### 步骤 2 — 内嵌 Rclone → 路径设置

- 在“设置”窗口中，打开 **内嵌 Rclone → 路径设置（Embedded Rclone → Path Settings）**。
- 点击 **数据库文件夹（Database folder）**，为 `rclone_view.db` 选择新位置。  
  <img src="/support/images/en/tutorials/database/database-settings-dlg.png" class="img-medium img-center" alt="Database folder picker" />

- 使用文件夹图标浏览到目标目录；RcloneView 会将 `rclone_view.db` 放置到该处。

## 权限与路径注意事项

RcloneView 会通过在所选文件夹中创建一个临时文件来测试写入权限。某些系统文件夹会阻止标准用户写入，并会触发警告：

- **Windows**：`C:\Program Files`、`C:\Windows` 等
- **macOS**：`/Applications`、`/System`、`/usr` 等
- **Linux**：`/usr`、`/opt`、`/etc` 等

<img src="/support/images/en/tutorials/database/database-settings-warning.png" class="img-medium img-center" alt="Permission warning" />

如果您看到该警告，请选择另一个具有完整写入权限的路径。

## 推荐位置

- `C:\Users\<user>\Documents`
- `C:\Users\<user>\AppData\Roaming`
- 任何您拥有写入权限的个人文件夹
- 您自己掌控的外部驱动器（请确保具有写入权限）

请避免速度较慢或受权限限制的位置，并注意网络共享可能会带来延迟。

## 数据库维护建议

- 避免使用受系统保护的文件夹。
- 如果使用云同步文件夹，请优先选择能够可靠同步小文件的服务（例如 OneDrive、Dropbox）。
- 定期备份 `rclone_view.db`。
- 对于正在使用中的数据库，请避免使用高延迟的网络路径。

## 快速摘要

| Item             | Details                                                    |
| ---------------- | ---------------------------------------------------------- |
| Database file    | `rclone_view.db`                                           |
| What it stores   | Transfer history, jobs, mounts, UI state                   |
| Default path     | User Documents folder                                      |
| Change path      | Settings → Embedded Rclone → Path Settings                 |
| Permission check | Temp file write test                                       |
| Best locations   | User-writable folders (Documents, Roaming, external drive) |

请为 `rclone_view.db` 选择一个稳定、可写的位置，以确保 RcloneView 的可靠运行并保持您的历史记录完整。
