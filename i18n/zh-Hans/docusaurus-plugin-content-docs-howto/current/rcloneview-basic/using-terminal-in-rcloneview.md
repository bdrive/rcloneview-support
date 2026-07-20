---
sidebar_position: 13
description: "在 RcloneView 内置的终端中直接运行 rclone CLI 命令，用于测试、管理远程和排查问题。"
keywords:
  - rcloneview
  - rclone
  - terminal
  - cli
  - remote management
  - troubleshooting
  - rclone config
tags:
  - RcloneView
  - Terminal
  - CLI
  - rclone
  - troubleshooting
date: 2025-12-04
author: tayson
---

# 在 RcloneView 中使用终端

RcloneView 内置了终端（Terminal），让你无需打开 CMD、PowerShell 或系统 shell，就能运行完整的 `rclone` CLI 命令。它非常适合用于快速测试、管理远程或在应用内捕获日志。

本指南介绍如何打开终端、运行 `rclone` 命令、展开/收起视图，以及使用复制选项分享结果。

---

## 打开终端

- 点击 RcloneView 底部的 **`Terminal`** 标签页。  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="terminal bottom" class="img-medium img-center" />
- 终端的工作方式与标准的 `rclone` 命令行界面相同，会在当前 RcloneView 上下文中运行命令。

---

## 列出可用的 rclone 命令

输入 rclone 并按空格键，即可自动显示所有支持的命令。  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="terminal input rclone" class="img-medium img-center" />

---

## 查看帮助和远程详情（`rclone about`）

- 查看 `about` 的常规帮助：  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about.png" alt="terminal input rclone about" class="img-medium img-center" />
- 获取特定远程（示例：`mygoogle`）的存储信息：
  ```bash
  rclone about "mygoogle:"
  ```
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="terminal input rclone about my google" class="img-medium img-center" />

结果示例：  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle-result.png" alt="terminal about my google result" class="img-medium img-center" />

---

## 列出所有已配置的远程

使用 `listremotes` 命令确认有哪些远程可用：

```bash
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes" class="img-medium img-center" />

---

## 展开或收起终端视图

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="terminal expand" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="terminal shrink" class="img-medium img-center" />
</div>

- **展开**：切换到全屏终端，方便查看较长的输出。
- **收起**：恢复到默认布局。

---

## 通过 CLI 创建远程（`rclone config create`）

示例：创建一个名为 `mygoogledrive` 的 Google Drive 远程并进行验证：

```bash
rclone config create mygoogledrive drive
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="rclone config create drive" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-check.png" alt="rclone config create check" class="img-medium img-center" />

---

## 复制、粘贴和全部复制

选中任意终端输出即可打开上下文菜单，选择 **Copy**、**Paste** 或 **Copy All**。  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="terminal select copy" class="img-medium img-center" />

这在与支持团队分享日志或将结果保存到文档时非常有用。

---

## 推荐使用场景

- 在实现自动化之前，先测试高级 `rclone` 命令（`lsf`、`tree`、后端标志）。
- 在 RcloneView 内验证脚本或服务器端命令。
- 当图形界面操作较慢时，快速管理或创建远程。

:::caution 谨慎使用破坏性命令
`delete`、`purge` 等命令，或错误的 `sync` 标志，可能会永久删除数据。在终端中运行这些命令之前，请仔细核对路径和远程。
:::
