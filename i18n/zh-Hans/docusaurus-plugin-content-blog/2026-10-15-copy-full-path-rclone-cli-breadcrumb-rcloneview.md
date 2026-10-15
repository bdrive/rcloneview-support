---
slug: copy-full-path-rclone-cli-breadcrumb-rcloneview
title: "复制带远程名的完整路径 — 在 RcloneView 中连接 GUI 与 rclone 命令"
authors:
  - kai
description: "使用 RcloneView 面包屑中的复制完整路径（Copy Full Path）获取 remote:path 字符串，并在内置 rclone 终端中运行。一种实用的从 GUI 到 CLI 的工作流程。"
keywords:
  - rclone 远程路径
  - rclone 复制完整路径
  - RcloneView 面包屑
  - rclone 终端 GUI
  - rclone about 命令
  - remote:path 语法
  - rclone GUI 工作流程
  - rclone 命令助手
  - RcloneView 功能
  - 云路径复制
tags:
  - RcloneView
  - feature
  - cli
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 复制带远程名的完整路径 — 在 RcloneView 中连接 GUI 与 rclone 命令

> 一次右键点击，就能把您正在浏览的文件夹变成可直接使用的 rclone 路径。

输入过 rclone 命令的人都知道，要把 `remote:path` 写得完全正确有多麻烦，尤其是路径含空格或嵌套文件夹时。RcloneView 通过面包屑菜单中的一个选项解决了这个问题：它会把包含远程名称的完整路径直接复制到剪贴板。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 复制完整路径的作用

每个资源管理器面板都有一个显示当前位置的面包屑路径栏。右键点击它，您会看到剪切、复制、粘贴、全选以及 **Copy Full Path (with Remote)**。最后一项会以 `mygoogledrive:Meet recordings` 的形式复制该位置，这正是 rclone 所要求的语法。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView 资源管理器中列出的远程" class="img-large img-center" />

由于包含了远程名称，您无需猜测某个文件夹属于众多远程中的哪一个。当您管理同一提供商的多个账户时，这一点尤为重要。

## 粘贴到内置终端

RcloneView 在底部的信息视图（Info View）中包含一个具备完整终端模拟的 Terminal 标签页。输入 `rclone` 加一个空格即可获得命令建议，然后粘贴复制的路径。例如，`rclone about "remote:"` 会报告远程的存储用量，`rclone listremotes` 会列出所有已配置的远程。包含空格的路径请加上引号。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行作业和命令" class="img-large img-center" />

当您需要向导中没有提供的一次性命令，同时又想借助可视化资源管理器找到正确的文件夹时，这种 GUI 与 CLI 之间的往返非常有用。

## 在作业和文档中使用路径

复制的路径在终端之外同样好用：将其粘贴到运行手册、支持工单或同事的聊天中，可确保每个人指向的是同一个位置。传输完成后，可在 Transferring 标签页或作业历史记录（Job History）中查看结果，后者会记录每次运行的状态、大小和速度。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="显示已完成传输的作业历史记录" class="img-large img-center" />

RcloneView 是构建在 rclone 之上的 GUI，而不是 rclone 的替代品，因此您在终端中运行的命令与作业使用的是同一个内置引擎。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加一个远程，并在资源管理器中浏览到某个文件夹。
3. 右键点击面包屑栏，选择 **Copy Full Path (with Remote)**。
4. 打开 Terminal 标签页，输入 `rclone about "` 并粘贴路径。

更少的输入错误，更快的故障排查，点击与输入集于一个工具。

---

**相关指南：**

- [RcloneView 内的 Rclone 终端](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [终端与 GUI 工作流程](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)
- [Alias 远程快捷路径](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
