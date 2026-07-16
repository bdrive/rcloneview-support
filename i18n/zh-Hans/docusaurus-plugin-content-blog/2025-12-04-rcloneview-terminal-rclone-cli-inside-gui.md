---
slug: rcloneview-terminal-rclone-cli-inside-gui
title: "RcloneView 终端：在 GUI 中使用完整强大的 rclone CLI"
authors:
  - tayson
description: "在 RcloneView 的终端中运行完整的 rclone CLI，支持自动补全、全屏模式和可复制的日志——无需单独打开命令行。"
keywords:
  - rclone terminal
  - rcloneview terminal
  - rclone cli gui
  - rclone commands
  - cloud storage cli tool
  - cloud automation
  - rclone beginners
  - rclone power users
  - cloud devops tools
  - rcloneview
tags:
  - sync
  - file-management
  - cli

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView 终端：在 GUI 中使用完整强大的 rclone CLI

> 无需离开 RcloneView 即可运行任意 rclone 命令。全新的终端将自动补全、可复制日志和全屏输出，都集成到你用来浏览、比较和同步的同一个窗口中。

RcloneView 现已内置终端，让你可以在应用内运行完整的 rclone CLI——无需额外打开 CMD、PowerShell 或终端窗口。初学者可以在可视化上下文中学习命令，而工程师、高级用户和 IT 管理员则可以保留自己的自动化参数、详细日志和脚本流程，无需在不同窗口之间切换。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要把 CLI 融入 GUI？

- 不再需要在用于浏览的 GUI 和用于高级参数或诊断的 shell 之间来回切换。
- 让 rclone 的输出和日志与你的传输、挂载和计划任务并列展示。
- 通过引导式的 UI 提示，安全地向团队成员教授 rclone，而不是面对空白的终端。

## 什么是 RcloneView 终端？

终端位于 RcloneView 工作区的底部，运行的正是你在应用中已经使用的相同 rclone 二进制文件。输入 `rclone` 并按空格键即可查看所有支持的命令，随后立即运行——Windows、macOS 和 Linux 上体验完全一致。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="Terminal tab in RcloneView" class="img-medium img-center" />

## 对初学者的好处

- 无需配置烦恼：rclone 已经内置，你可以直接练习命令，无需安装或查找系统路径。
- 自动补全让探索变得简单——输入 `rclone ` 即可在运行前查看命令列表。
- 输出保留在应用内，便于复制、重新运行，或与 GUI 中看到的内容进行比对。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="Autocomplete list for rclone commands" class="img-medium img-center" />

## 对工程师和高级用户的好处

- 将挂载、比较、计划任务和 CLI 实验都保留在同一个工作区中——无需切换上下文。
- 捕获详细日志（`-vv`）以排查云端延迟或 API 限流问题，然后一键复制全部内容。
- 通过 `rclone config create` 更快地配置远程，验证后端，并继续执行脚本化任务。
- 使用展开视图，舒适地阅读较长的输出或多行脚本。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="Expanded Terminal view" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="Shrink Terminal view" class="img-medium img-center" />
</div>

## 主要功能一览

- **命令自动发现**：输入 `rclone` + 空格，即可在执行前查看所有命令的上下文。
- **全屏终端**：展开以查看较长的列表，收起以便随时查看比较或传输情况。
- **复制、粘贴、全部复制**：无需导出文件即可与团队成员或支持团队分享日志。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="Copy and paste options in the Terminal" class="img-medium img-center" />

## 现在就可以试试的实用命令

### 1) 查看某个远程的存储用量
```bash
rclone about "mygoogle:"
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="rclone about output in RcloneView Terminal" class="img-medium img-center" />

### 2) 查看所有已配置的远程
```bash
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes in RcloneView Terminal" class="img-medium img-center" />

### 3) 通过 CLI 创建新的远程
```bash
rclone config create mygoogledrive drive
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="Create Google Drive remote with rclone config create" class="img-medium img-center" />

### 4) 在传输前预览文件夹
```bash
rclone lsf mygoogledrive:Projects --dirs-only --recursive --max-depth 2
```

### 5) 使用详细日志演练一次迁移
```bash
rclone sync mygoogledrive:Projects s3backup:Projects --dry-run -vv --progress
```
使用 `--dry-run` 模拟变更，使用 `-vv` 在正式运行前发现较慢的后端或限流情况。

## 何时选择 GUI，何时选择终端

- **使用 GUI**：在云端之间拖放文件、可视化比较差异、安排周期性任务，或将存储挂载为磁盘。
- **使用终端**：测试后端参数、运行临时诊断，或执行那些用键盘输入比点击更快的高级 rclone 命令。
- **两者结合使用**：先用比较功能预览，再用 CLI 参数调整方案，最后将该工作流保存为计划任务。

## 快速开始与安全提示

1. 打开**终端**标签页，输入 `rclone `，然后从列表中选择一个命令。
2. 在运行任何同步或删除操作之前，先从只读命令（`listremotes`、`lsf`、`about`）开始。
3. 想要查看配有截图的完整指引，请参阅 [在 RcloneView 中使用终端](/howto/rcloneview-basic/using-terminal-in-rcloneview)。

> 小提示：诸如 `delete`、`purge` 或未加确认的 `sync` 等破坏性命令可能会删除数据。按下回车前请务必仔细检查路径和远程。

## 结语

RcloneView 终端将完整的 rclone CLI 与你已经在使用的可视化工具结合在一起，让初学者可以更快上手，也让专家可以更高效地工作。立即试用，把你的云端操作、自动化实验和调试日志都集中在同一个地方。

<CloudSupportGrid />
