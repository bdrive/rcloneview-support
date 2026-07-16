---
slug: backup-dir-versioned-sync-rcloneview
title: "使用 Backup Dir 通过 RcloneView 实现版本化云同步"
authors:
  - tayson
description: "了解如何在 RcloneView 中使用 --backup-dir 创建版本化云同步。通过将被覆盖的文件移动到备份目录，安全保留以前的文件版本。"
keywords:
  - rcloneview
  - backup-dir
  - 版本化同步
  - 云备份版本控制
  - rclone 备份目录
  - 安全云同步
  - 文件版本历史
  - 云文件恢复
  - 带备份的同步
  - rclone suffix
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 Backup Dir 通过 RcloneView 实现版本化云同步

> 在同步过程中不小心覆盖或删除文件，是每个云存储用户的噩梦。**RcloneView** 通过内置支持 `--backup-dir`，让版本化同步变得轻而易举，确保你再也不会丢失以前的版本。

在执行标准同步操作时，目标端与源端不同的文件会被覆盖，而源端已不存在的文件会被删除。这种方式虽然高效，但也具有破坏性。如果源端的文件被损坏，或者你不小心删除了仍需要的内容，这些更改会传播到目标端，且无法撤销。

`--backup-dir` 标志优雅地解决了这个问题。rclone 不会永久删除被覆盖或删除的文件，而是先将它们移动到一个单独的备份目录。这为你提供了完整的安全网：任何本会丢失的文件都会保存在你可以掌控的位置。

RcloneView 允许你通过自定义标志界面配置 `--backup-dir`，因此你无需记住命令行语法，就能享受版本化同步的全部功能。结合 `--suffix` 使用日期标记版本，你可以仅利用现有的云存储，构建一个轻量级的文件版本管理系统。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## --backup-dir 的实际作用

当同步操作遇到目标端需要被覆盖或删除的文件时，`--backup-dir` 会拦截该操作。rclone 不会销毁该文件，而是将其移动到指定的备份目录，并保留其相对路径结构。

例如，如果你的同步操作会覆盖目标端的 `documents/report.docx`，旧版本将被移动到 `backup/documents/report.docx`。目录层级结构得以保留，方便你日后查找和恢复特定文件。

这适用于以下两种情况：
- **被覆盖的文件**：当源文件更新或不同时，旧的目标副本会在新版本替换之前被移动到备份目录。
- **被删除的文件**：当文件存在于目标端但源端不存在时，该文件会被移动到备份目录，而不是被永久删除。

## 为什么版本化同步至关重要

标准同步操作假定你始终希望目标端与源端完全一致。这种方式在一切正常时运作良好，但一旦出问题就麻烦了。请考虑以下常见场景：

- 源端的文件被损坏或感染勒索软件，而在你察觉之前，该损坏已传播到你的备份中。
- 你不小心删除了一个文件夹，下一次计划同步也会将其从目标端删除。
- 同事覆盖了一个共享文档，之前的版本从两端都消失了。

有了 `--backup-dir`，上述每种情况都是可恢复的。之前的版本会安全地保存在你的备份目录中，不受后续同步操作的影响。

## 在 RcloneView 中配置 --backup-dir

RcloneView 在其作业配置中支持自定义 rclone 标志。以下是设置版本化同步的方法：

1. 打开 **作业管理器（Job Manager）**，创建一个新的同步作业或编辑现有作业。
2. 像往常一样设置你的源和目标远程。
3. 在 **自定义标志（Custom Flags）** 部分，添加：`--backup-dir remote:backup/2026-04-08`
4. 保存并运行该作业。

备份目录可以位于与目标相同的远程上，也可以位于完全不同的远程上。使用基于日期的路径（如 `backup/2026-04-08`）可以将每天被替换的文件整理到各自独立的文件夹中。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 结合 --backup-dir 与 --suffix 实现日期标记版本

如需更细粒度的版本管理，可将 `--backup-dir` 与 `--suffix` 结合使用，为每个备份文件附加时间戳。这可以防止同一文件被多次修改并同步时出现文件名冲突。

在自定义标志部分同时添加这两个标志：

```
--backup-dir remote:backup --suffix .2026-04-08
```

采用此配置后，如果 `report.docx` 被覆盖，旧版本会被保存为 `backup/report.docx.2026-04-08`。第二天使用更新的后缀再次运行同步，你就能积累一系列带日期的版本历史，且不会产生任何冲突。

对于按计划运行的自动化作业，你可以使用与执行日期绑定的动态后缀，确保每次运行都会创建唯一命名的备份。

## 实际应用示例

**保留版本的每日备份：**
每晚将你的 Google Drive 同步到 Backblaze B2，每天被替换的文件都存储在带日期的备份文件夹中。30 天后，你可以清理旧的备份目录以控制存储成本。

**团队项目保护：**
将共享的 Dropbox 文件夹同步到 S3，使用 `--backup-dir` 捕获团队成员删除或覆盖的任何文件。这可作为轻量级审计追踪，无需依赖云服务商的高级版本控制功能。

**迁移安全网：**
在从一个云迁移到另一个云时，可在初始同步过程中使用 `--backup-dir`，捕获任何将被覆盖的目标端文件。如果迁移未能按预期进行，你就拥有一个完整的回滚点。

## 恢复流程

在 RcloneView 中从备份目录恢复文件非常简单：

1. 打开 **远程浏览器（Remote Explorer）**，导航至你的备份目录。
2. 浏览目录结构以找到所需文件。原始文件夹层级会被保留。
3. 使用拖放或复制操作，将文件移回其原始位置。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

由于备份目录只是远程上的普通文件夹，你也可以浏览它们、下载文件，甚至将其同步到另一个位置进行归档。

## 长期管理备份存储

版本化备份会随时间累积，因此制定保留策略非常重要。以下是一些方法：

- **基于日期的文件夹**：使用带日期的备份目录路径（例如 `backup/2026-04-08`），并定期删除超出保留期限的文件夹。
- **基于后缀的清理**：使用 `--suffix` 时，你可以识别并删除带有旧日期后缀的文件。
- **使用低成本的独立存储**：将备份目录指向像 Wasabi 或 Backblaze B2 这类经济实惠的对象存储服务商，以最大程度降低长期保留成本。

RcloneView 的浏览器（Explorer）让你可以轻松浏览备份目录，并在需要释放空间时删除过期版本。

## --backup-dir 最佳实践

- 始终先通过试运行（dry run）测试你的 `--backup-dir` 配置，确认文件被正确路由到目标位置。
- 尽可能将备份目录保留在与目标相同的远程上，因为同一远程内的移动是即时完成的，且不消耗带宽。
- 对备份路径使用一致的命名规范，以便自动化清理脚本可以轻松识别旧版本。
- 对于关键数据，可在另一个远程上再结合一次 `--backup-dir`，从而同时拥有快速恢复的本地备份和地理上分离的存档。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建一个同步作业，配置好源和目标远程。
3. 在自定义标志字段中添加 `--backup-dir remote:backup/YYYY-MM-DD` 以启用版本化同步。
4. 先运行一次试运行以验证配置，然后再执行该作业。

配置好 `--backup-dir` 后，每一次同步操作都会成为一个安全、可逆的过程。你既能享受单向同步的高效性，也能安心确保不会有任何内容永久丢失。

---

**相关指南：**

- [浏览与管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [创建同步作业](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理作业](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
