---
slug: fix-cloud-sync-empty-folders-not-created-rcloneview
title: "同步后空文件夹丢失 — 使用 RcloneView 解决"
authors:
  - robin
description: "云同步后空文件夹消失了吗?了解为什么 rclone 默认会跳过空文件夹,以及如何通过 RcloneView 中的一个设置解决这个问题。"
keywords:
  - 空文件夹未同步
  - rclone 空目录
  - 云同步文件夹丢失
  - RcloneView 故障排除
  - 文件夹结构同步
  - rclone 创建空目录
  - 修复云同步错误
  - RcloneView 同步设置
  - 云备份文件夹结构
tags:
  - RcloneView
  - troubleshooting
  - sync
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步后空文件夹丢失 — 使用 RcloneView 解决

> 占位文件夹和空的项目目录在云同步后经常消失 — 下面是恢复它们的设置。

某团队将文件夹结构迁移到云端后发现,为将来的文件、客户交付物或归档而预留的空占位目录中,有一半根本没有出现在目标位置。这是 rclone 的预期默认行为:同步操作只会重新创建包含文件的目录。RcloneView 提供了更改此行为所需的设置,知道在哪里找到它可以省去许多令人困惑的返工。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么空文件夹会被跳过

rclone 的同步和复制引擎会遍历源目录树并传输对象 — 即文件。一个内部没有任何文件的目录不会产生传输操作,因此默认情况下目标位置永远不会得知该目录应该存在。这并不是一个错误;这源于大多数云存储 API 最初表示"文件夹"的方式 — 作为对象键的副产品,而非独立实体。实际结果是,一个包含有意设置的占位文件夹(比如等待下个月文件的 `03-invoices/` 文件夹,或客户期望看到的分类结构)的源目录树,到达目标位置时可能会缺少部分内容。

这在文件夹比较(Folder Compare)或初次迁移期间尤其明显,因为在文件开始落地之前,目标结构就需要在视觉上与源结构保持一致。

## 解决方法:创建空目录

RcloneView 的同步向导在第 1 步(配置存储)中提供了**创建空目录**开关,与源/目标远程及文件夹选择并列。启用它会告诉底层同步操作同时重新创建没有文件的目录,使目标文件夹树不仅在文件层面、而且在结构上都与源完全一致。

<img src="/support/images/en/blog/new-remote.png" alt="带有创建空目录选项的 RcloneView 同步向导第 1 步" class="img-large img-center" />

对于一次性的结构迁移,建议先启用该选项运行试运行(Dry Run)。试运行会在不触及目标位置的情况下准确列出将要创建的文件夹和文件,是在正式执行传输前确认空文件夹问题确实已解决的最快方法。

## 使用文件夹比较确认结果

运行同步后,使用 RcloneView 的文件夹比较(Folder Compare)逐目录检查两侧。RcloneView 可以在一个窗口中挂载并同步 90 多个服务商,支持 Windows、macOS 和 Linux,因此你无需切换工具即可并排直观比较源和目标目录树。"显示仅左侧文件"和"显示仅右侧文件"过滤器可以让你立即知道某个文件夹是否成功传输过去。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="显示源和目标之间匹配文件夹结构的文件夹比较视图" class="img-large img-center" />

如果你是在长期维护该结构而不是进行一次性迁移,请在勾选空目录选项的情况下保存该任务,以便每次计划运行都能按需继续重新创建占位文件夹。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="安排定期 RcloneView 同步任务以保持空文件夹结构最新" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开同步向导并选择你的源和目标远程。
3. 在第 1 步中,在配置过滤器之前启用**创建空目录**。
4. 运行试运行以确认文件夹结构,然后执行同步。

两端一致的文件夹结构能让新团队成员的入职和存储审计变得更不容易出错。

---

**相关指南:**

- [macOS 空文件夹和权限问题 — 使用 RcloneView 解决](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)
- [使用 RcloneView 清理云存储中的空回收站](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [修复传输后云同步文件丢失问题 — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
