---
sidebar_position: 2
description: 通过授予权限、启用完全磁盘访问权限并收集日志以联系支持团队，修复 RcloneView 在 macOS 上缺失“桌面”“文稿”或“下载”文件夹的问题。
keywords:
  - rcloneview
  - macos
  - 权限
  - 文件与文件夹
  - 完全磁盘访问权限
  - 故障排查
  - 常见问题
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Permissions
date: 2025-11-07
author: Jay
---
# 在 Mac 上看不到本地文件夹（桌面/文稿/下载）

如果你刚在 macOS 上安装了 RcloneView，却在左侧“本地磁盘”面板中看不到**桌面**、**文稿**或**下载**等文件夹，这几乎总是 macOS 隐私权限的问题。本指南将说明如何授予访问权限，以及在文件夹仍显示为空时应尝试的方法。

要快速了解资源管理器本身，请参阅：[浏览和管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)。

## 为什么会出现这种情况

自 macOS 10.15（Catalina）起，Apple 要求应用在访问桌面、文稿和下载等受保护文件夹之前先请求权限。如果你点击了“不允许”，或应用尚未获得权限，这些文件夹在 RcloneView 中会显示为空。

## 出现权限弹窗时

首次打开 RcloneView 或点击受保护的文件夹时，你可能会看到 macOS 的对话框。

1）如果看到请求访问“文稿”文件夹的弹窗，请点击**允许**。

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac allow access to folder and files1" class="img-medium img-center" />

2）如果你点击左侧面板中的受保护文件夹（例如“下载”）时出现类似提示，请点击**允许**。

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac allow access to folder and files2" class="img-medium img-center" />

3）如果你点击了**不允许**，在获得权限之前该文件夹会显示为空。

<img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth folder by dont allow" class="img-large img-center" />

## 解决方法：在系统设置中授予访问权限（第一步）

如果文件夹仍显示为空，或你不小心点击了“不允许”，请通过 macOS 系统设置授予访问权限。

**操作步骤（macOS Ventura、Sonoma、Sequoia）：**

1. 打开 `系统设置 > 隐私与安全性 > 文件与文件夹`。
2. 找到 **RcloneView**。
3. 为需要的文件夹启用开关（例如**文稿文件夹**、**下载文件夹**）。  
4. 在 RcloneView 中重新打开该文件夹。

<img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change setting for accessing to files and folders" class="img-large img-center" />

如果在该列表中没有看到 RcloneView，请启动一次 RcloneView，并尝试打开一个受保护的文件夹，macOS 应该会再次弹出提示。

## 仍然无法访问？添加完全磁盘访问权限（第二步）

如果“文件与文件夹”开关已启用，但你仍无法浏览内容，请尝试将 RcloneView 添加到**完全磁盘访问权限**。

1. 打开 `系统设置 > 隐私与安全性 > 完全磁盘访问权限`。
2. 点击 `+` 按钮，并从 `应用程序` 中选择 **RcloneView** 应用。
3. 确保 RcloneView 的开关已打开。
4. 重启 RcloneView 并重试。

<img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac allow full disk access" class="img-medium img-center" />

## 仍需帮助？收集日志并联系支持团队

如果按上述步骤操作后访问仍被阻止，请将日志发送给我们，以便我们提供帮助。

1. 在 RcloneView 中，打开 `设置 > 内置 Rclone`。
2. 在**日志配置**下，启用日志记录，选择一个**日志文件夹**，保留文件名（例如 `rclone.log`），并将**日志级别**设置为 **DEBUG**。
3. 点击**重启内置 Rclone**以应用更改。
4. 重现问题（尝试打开出问题的文件夹），然后将日志文件发送至 [rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)，并简要说明你所执行的步骤。

:::caution 需要重启
只有在你点击**重启内置 Rclone**之后，日志才会开始记录。请勿跳过此步骤。
:::

<img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting for collecting log file" class="img-large img-center" />

## 相关指南

- 在资源管理器中管理本地/云端文件：[浏览和管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- 设置的完整概览（包括内置 Rclone 和日志记录）：[常规设置](/howto/rcloneview-basic/general-settings#logging-configuration)

---

如需更多帮助，请发送邮件至 **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**。

