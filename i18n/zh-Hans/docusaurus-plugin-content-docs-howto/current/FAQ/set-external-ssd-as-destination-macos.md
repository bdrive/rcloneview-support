---
sidebar_position: 3
description: "解决 RcloneView 在 macOS 上无法访问外置 SSD 的问题：浏览 /Volumes 并创建快捷方式 Alias。"
keywords:
  - rcloneview
  - macos
  - external drive
  - offline backup
  - sync destination
  - alias remote
  - volumes
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - external-drive
  - alias
date: 2025-02-20
author: Jay
---

# 我在 macOS 上无法用 RcloneView 访问外置 SSD

如果 RcloneView 在 macOS 上无法访问你的外置 SSD（看不到该磁盘，或不知道该输入什么路径），可以使用这个快速解决方法。目前存在一个临时的 UX 问题（将在下个版本中修复），隐藏了常用的快捷方式，但你可以手动浏览到该 SSD，并将其保存为 Alias（收藏夹），以便之后一键访问。

---

## 快速修复方案（任选其一）

- **使用热修复版本（已包含 UX 修复）：** [下载 RcloneView 1.1.517（macOS）](https://downloads.bdrive.com/rclone_view/builds/RcloneView-1.1.517.dmg) 并安装，即可立即获得 SSD 路径修复。这是为遇到此问题的用户在正式版本发布前提供的临时版本。
- **继续使用当前正式版本：** 按照下面的手动步骤浏览 `/Volumes` 并为你的 SSD 创建一个 Alias。此方法适用于当前的公开版本。

---

## 分步操作：从 /Volumes 添加你的 SSD

你可以在 RcloneView 左侧面板中看到 **`Local Disk`**。

1) 在路径栏中输入 `/Volumes` 并按 **Enter**。这是 macOS 挂载外置磁盘的位置（例如 Samsung T7）。
2) 在 `/Volumes` 列表中，双击你的 SSD（例如 `SAMSUNG`）。部分磁盘加载需要一点时间——请耐心等待文件夹打开。

<img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse volumes in mac system" class="img-large img-center" />

3) 确认你已进入该 SSD（路径栏应显示为 `/Volumes/<你的磁盘名>`）。
4) 点击路径栏中的 **☆**（Alias）图标以收藏该位置。
5) 输入一个简单的名称（例如 `MySSD`），然后
6) 点击 **Create**。这将添加一个 Alias 远程，始终打开你的 SSD 根目录。
<img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat alias remote for external hdd" class="img-large img-center" />

7) 该 Alias 会在新标签页中打开，同时也会出现在左侧列表中，方便快速再次使用。

<img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open alias remote for external ssd" class="img-large img-center" />

---

## 如何在备份中使用 SSD Alias

- 在创建同步/复制/移动任务时，选择你刚创建的 Alias 远程（例如 `MySSD`）作为**目标**，并选择你的源远程（例如 Google Drive、Dropbox 或其他本地文件夹）作为**源**。
- Alias 指向 SSD 根目录；你可以在该标签页中选择或创建子文件夹后再开始任务。

---

## 如果 SSD 未显示

- 确认该 SSD 已在 Finder 中挂载（如有需要可拔出并重新插入）。
- 在路径栏中重新打开 `/Volumes`，并等待几秒钟以刷新磁盘列表。
- 仍然看不到？请重启 RcloneView，然后再次尝试 `/Volumes`。如果问题持续存在，请前往 [RcloneView 论坛](https://forum.rcloneview.com) 反馈。

---

## 相关指南

- Alias 概览及其他虚拟远程：[Alias 远程指南](/howto/remote-storage-connection-settings/alias-remote)
- Explorer 常用控件与标签页说明：[浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)
