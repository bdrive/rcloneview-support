---
slug: alias-remote-shortcut-paths-rcloneview
title: "别名远程 — 使用 RcloneView 为深层云文件夹创建快捷方式"
authors:
  - tayson
description: "了解如何使用 rclone 的别名远程功能为嵌套的云文件夹创建快捷方式，并通过 RcloneView 提升工作效率。"
keywords:
  - alias remote
  - rclone alias
  - 文件夹快捷方式
  - 云文件夹快捷方式
  - 嵌套文件夹访问
  - rclone remote configuration
  - 效率快捷方式
  - folder shortcuts rclone
  - 快速文件夹访问
  - 云端整理
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 别名远程 — 使用 RcloneView 为深层云文件夹创建快捷方式

> 是否厌倦了穿越无数文件夹才能到达最常用的云端目录？创建别名远程的快捷方式，即可瞬间访问它们。

云存储的层级结构可能会变得难以驾驭。要找到某个嵌套很深的项目文件夹或团队共享目录，往往需要多次点击。rclone 的别名远程功能通过创建直接指向特定文件夹的快捷方式（别名）解决了这个问题。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么是别名远程？

别名远程是一种虚拟远程，指向另一个远程内的某个子文件夹。你无需再逐级浏览 `/MyDrive/Projects/Client A/2026/Active Cases/Smith vs. Jones`，而是创建一个名为 `smith-vs-jones` 的别名，直接指向该位置。

![File comparison and selection](/images/en/howto/rcloneview-basic/compare-display-select.png)

在 RcloneView 中，你会看到 `smith-vs-jones` 作为远程列表中一个独立的远程，只需点击一次即可访问该文件夹。这种虚拟远程的行为与真实远程完全相同，因此你可以以该别名为起点复制、移动和同步文件。

## 创建别名远程

在你的 rclone 配置文件中指定基础远程和子文件夹路径，即可配置别名远程。RcloneView 会将所有已配置的别名远程与标准云账户一并显示。

![Job scheduling interface](/images/en/howto/rcloneview-advanced/create-job-schedule.png)

例如，创建一个指向 `/GoogleDrive/Archive/2025` 的别名，命名为 `archive-2025`，随后即可在 RcloneView 的远程选择器中直接访问它。该别名充当便捷的快捷方式，既不会复制数据，也不需要额外的存储空间。

## 提升效率

常见的使用场景包括：

- 在活跃工作期间快速访问特定项目的文件夹
- 法律或商业公司需要频繁访问的客户目录
- 多个项目经常引用的团队共享文件夹
- 访问频率较低但需要便捷检索的归档或备份文件夹
- 用于特定工作流程或活动的临时工作目录

每一个别名都能减少导航步骤，让你的工作流程始终聚焦于最重要的事情。团队可以共享别名配置，确保每个人都能高效地访问相同的项目结构。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在你的 rclone 配置中配置别名远程（使其指向常用的子目录）。
3. 启动 RcloneView，你会看到新的别名以独立远程的形式出现。
4. 点击任意别名，即可瞬间导航到对应文件夹。

简化你的云端导航流程，重新夺回宝贵的工作时间。

---

**相关指南：**

- [虚拟远程 — 合并与联合别名](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [远程管理 — 添加、编辑、删除](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)
- [联合远程 — 合并空闲存储空间](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)

<CloudSupportGrid />
