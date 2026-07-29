---
slug: fix-empty-folders-not-syncing-rcloneview
title: "修复空文件夹不同步的问题 — 用RcloneView启用目录创建"
authors:
  - robin
description: "了解为什么空文件夹在云同步过程中会消失,以及如何使用RcloneView的创建空目录选项来解决这个问题。"
keywords:
  - 空文件夹不同步
  - 修复云同步文件夹丢失
  - RcloneView 创建空目录
  - 云同步文件夹结构
  - rclone 空目录同步
  - 文件夹结构未保留
  - 同步时空文件夹丢失
  - RcloneView 同步设置
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复空文件夹不同步的问题 — 用RcloneView启用目录创建

> 如果同步作业丢下了你精心整理的空文件夹,解决方法是在RcloneView的同步设置里打开一个开关,而不是你云服务商的漏洞。

包括rclone在内的大多数同步引擎,只传输真正包含数据的对象 — 空文件夹没有可复制的内容,因此默认会被完全跳过。对于扁平化备份来说这没什么问题,但对于依赖固定文件夹结构的工作流来说就会出问题,比如项目模板、客户接收目录树,或是团队期望在文件到达之前就能看到的占位目录。RcloneView将控制此行为的设置直接展示在同步向导中,因此你不需要修改配置文件,也不必盲目地重新运行作业。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 空文件夹为何会被丢弃

当RcloneView(通过rclone)在同步过程中遍历源目录树时,它是基于文件而非目录来构建传输列表的。一个文件夹如果只包含子文件夹,而这些子文件夹及其下方任何位置都没有文件,就不会产生任何可传输的对象,因此没有任何信息告诉目标端应该存在这个文件夹。这是预期的同步行为,而非缺陷 — 但对于任何认为文件夹到文件夹的同步会完整保留树结构(包括空分支)的人来说,这会是个意外。

<img src="/support/images/en/blog/new-remote.png" alt="显示第1步配置选项的RcloneView同步设置向导" class="img-large img-center" />

这个设置位于同步配置向导的第1步,与源、目标和同步方向并列 — 由于默认关闭,第一次操作时很容易被忽略。

## 开启"创建空目录"

在4步同步向导的第1步中,在保存作业之前启用"创建空目录"选项。开启后,RcloneView会指示rclone在目标端复制完整的目录结构,包括当前不含任何文件的分支。这对于按计划反复运行的作业最为重要 — 今天是空的文件夹,下周可能就会收到文件,而提前准备好目标结构可以避免新内容应该放在哪里的困惑。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView同步配置第1步中的创建空目录开关" class="img-large img-center" />

与仅支持挂载的工具不同,RcloneView在FREE许可下也支持同步和文件夹比较 — 因此无论你是镜像单个目标,还是通过1:N同步将源分发到多个目标,这个修复都同样适用。

## 用Dry Run验证修复效果

在提交完整同步之前,使用RcloneView的Dry Run功能准确预览哪些文件夹和文件将被创建或更改。Dry Run会列出待执行的操作而不触碰目标端,这是在真正运行作业之前确认空文件夹确实会出现的可靠方法 — 如果你是为一个已经运行了一段时间的作业追加启用此设置,这一步尤其有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在RcloneView中执行同步作业前运行试运行预览" class="img-large img-center" />

如果某个计划作业在未启用该选项的情况下已经运行过,请重新保存并勾选"创建空目录",再运行一次 — 下一次执行将补齐目标端缺失的目录结构。

## 开始使用

1. 从[rcloneview.com](https://rcloneview.com/src/download.html)**下载RcloneView**。
2. 打开或创建你的同步作业,进入第1步:配置存储。
3. 在保存前勾选"创建空目录"。
4. 先运行Dry Run,确认文件夹结构符合预期。

只需一个复选框,就能让文件夹结构在你同步的每一个云端保持完整。

---

**相关指南:**

- [文件夹比较指南 — 使用RcloneView检测差异](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Dry Run — 使用RcloneView在传输前预览云同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [筛选规则 — 使用RcloneView进行选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
