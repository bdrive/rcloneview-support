---
slug: rcloneview-synology-rclone-gui
title: "在 Synology NAS 上使用图形界面运行 rclone：无需 SSH"
authors:
  - tayson
description: "无需 SSH 或命令行即可在 Synology NAS 上运行 rclone。使用 RcloneView 管理远程、比较更改、加密并安全地自动化云备份。"
keywords:
  - synology rclone
  - rclone synology nas
  - rcloneview synology
  - synology cloud backup
  - rclone gui
  - no ssh backup
  - nas to cloud backup
  - rcloneview jobs
  - compare first backup
  - rcloneview crypt remote

tags:
  - RcloneView
  - cloud-storage
  - backup
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# 在 Synology NAS 上使用图形界面运行 rclone：无需 SSH

> Synology 用户希望在不使用 SSH 或命令行风险的情况下获得 rclone 的强大功能。RcloneView 在一个工作空间中为您提供可视化控制、更安全的备份和可重复的自动化。

DSM 工具是一个不错的起点，但许多 NAS 用户最终都会遇到限制：云支持不足、控制能力弱以及成本或安全权衡不明确。rclone 是显而易见的升级方案，但传统方式需要 SSH 和命令行技能。本指南展示了一种以图形界面为核心的架构，在保留 rclone 强大功能的同时消除了命令行的负担。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么"Synology rclone"是如此热门的搜索词

Synology NAS 用户通常想要三样东西：

- 比 DSM 工具更广泛的云支持
- 针对复制（Copy）、同步（Sync）和过滤器的文件级控制
- 摆脱厂商锁定和不透明的备份格式

rclone 能够满足以上所有需求，但大多数指南都假设用户会使用 SSH 和命令行。真正的搜索意图很简单：*在不使用终端的情况下使用 rclone*。

## rclone 功能强大，但仅限命令行是一个障碍

典型的 NAS rclone 设置意味着：

- 启用 SSH
- 通过终端连接
- 编辑或管理 `rclone.conf`
- 手动运行命令或通过 cron 运行

对许多 NAS 用户来说，这带来了实际风险：

- 拼写错误可能会删除数据
- 同步（Sync）前没有可视化预览
- 出错后日志难以追溯

## 更好的架构：NAS 负责存储，图形界面负责控制

核心理念：

- NAS 仍然是**数据引擎**
- RcloneView 成为**控制中心**

您仍然在底层使用 rclone，但通过可视化、安全的界面来管理它。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS detection and connection" class="img-large img-center" />

## RcloneView 为 Synology 工作流带来的改变

- 无需 SSH 即可设置远程
- 传输前可视化比较（Compare）
- 任务历史和日志集中在一处
- 图形界面调度取代 cron

RcloneView 并不会取代您的 NAS。它让您的 NAS 在不受命令行束缚的情况下具备云就绪能力。

## 典型的设置选项（非以 SSH 为核心的工作流）

### 选项一：NAS 作为源，RcloneView 作为控制器

- NAS 共享文件夹 -> 云端目标
- 所有复制（Copy）/同步（Sync）/比较（Compare）操作均在 RcloneView 中控制

### 选项二：混合模式

- NAS 在本地存储数据
- RcloneView 处理比较、加密和调度

## 无需依赖 SSH 的分步流程

### 第一步：确定需要保护的 NAS 数据

- 默认跳过整个存储卷
- 挑选关键的共享文件夹
- 按项目或用户分类

### 第二步：在 RcloneView 中添加云远程

- Google Drive、OneDrive、S3、Wasabi、Backblaze
- OAuth 或基于密钥的设置

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

### 第三步：将 NAS 文件夹视为源

- 使用映射或挂载的 NAS 路径
- 明确保留读/写权限

## 为什么图形界面对 NAS + rclone 很重要

### 可视化安全

- 复制（Copy）与同步（Sync）区分明确
- 更容易发现方向性错误

### 传输前先比较

- 在移动数据前查看确切的差异
- 过滤掉临时文件或缓存文件等 NAS 噪声

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

### 降低非专业用户的风险

- 无需记忆命令行语法
- 减少造成破坏性错误的可能

## 在 NAS 数据上使用比较功能

NAS 文件夹通常包含：

- `@eaDir`
- 临时缓存
- 套件生成的文件

比较（Compare）功能帮助您识别真正的变更并避免不必要的上传。它还能在每次备份运行前提供成本可见性。

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="Compare and copy only changes" class="img-large img-center" />

## NAS 备份中的复制与同步对比

### 复制（Copy，推荐默认选项）

- 目标端不会发生删除
- 备份最安全的方式
- 易于回滚

### 同步（Sync，仅限高级用途）

- 仅用于受控的镜像场景
- 始终先执行 Dry Run（模拟运行）

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## 上传前加密 NAS 数据（Crypt Remote）

一旦数据离开 NAS，NAS 端的加密就无法再对其提供保护。Crypt Remote（加密远程）可在上传前为您提供客户端加密。

- 文件内容加密及可选的文件名加密
- 云端零知识存储

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select Crypt target folder" class="img-large img-center" />
</div>

## 无需 cron 的调度与自动化

将复制（Copy）或同步（Sync）保存为任务（Job），然后以可视化方式对其进行调度。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

这将为您带来：

- 任务历史与失败可见性
- 可重复使用的配置
- 更轻松的团队交接

## 真实场景中的 NAS 备份用例

### 家庭 NAS -> Google Drive

- 照片和文档
- 快速的单文件恢复

### 小型办公室 NAS -> S3 或 Wasabi

- 可预测的成本和长期存储
- 受控的复制（Copy）任务

### 高级用户或 IT 管理员

- NAS -> 多云目标
- 按部门或项目分开的独立任务

## 安全与安全性注意事项

- 尽可能使用只读挂载
- 将备份任务与同步任务分开
- 通过直接在云端打开文件来测试恢复

## 常见误解

**"命令行总是更好"**
功能强大，但在生产环境的 NAS 数据上存在风险。

**"图形界面只适合初学者"**
图形界面提升了操作安全性和可审计性。

## 结论：rclone 功能强大，控制才是关键

Synology 用户选择 rclone 是为了灵活性。RcloneView 在保留这种强大功能的同时，消除了 SSH 和命令行带来的阻力。您将获得更安全的工作流、更好的可见性，以及值得信赖的备份。

如果您想在 Synology 上使用 rclone 而不依赖终端，这是最简单的路径。
