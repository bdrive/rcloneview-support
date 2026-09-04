---
slug: fix-cloud-sync-not-detecting-new-files-rcloneview
title: "修复云同步无法检测新文件的问题 — 使用RcloneView解决"
authors:
  - jay
description: "通过调整缓存设置、过滤器和刷新行为，修复RcloneView中遗漏新文件或最近更改文件的云同步任务。"
keywords:
  - 云同步无法检测新文件
  - rcloneview 同步文件丢失
  - 修复同步任务不更新
  - 目录缓存过期列表
  - rcloneview 故障排除
  - 云同步刷新问题
  - 新文件未同步
  - 修复rclone同步检测
  - 任务未获取更改
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复云同步无法检测新文件的问题 — 使用RcloneView解决

> 当同步任务顺利完成却遗漏了全新文件时，原因几乎总是过期的文件夹列表，而不是连接故障。

一种常见的支持场景是：同步任务完成且没有任何错误，但几分钟前添加到源文件夹的文件却从未出现在目标位置。这看起来像是数据丢失，但在大多数情况下，任务只是读取了缓存的目录列表，而不是远程的当前状态。RcloneView为你提供了无需猜测即可诊断和修复此问题的工具。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 检查Explorer视图是否只是过期了

在更改任何任务设置之前，先确认文件是真的从同步中缺失，而不仅仅是在视图中被隐藏。在Explorer面板中打开源远程，按F5（macOS上为Cmd+R）强制Reload。如果自文件添加以来你还没有刷新过，RcloneView的文件列表可能保留了文件夹的过期快照，仅此一项就能解决大量"文件缺失"的报告。

如果手动刷新后文件出现了，但同步任务在上次运行中仍然跳过了它们，那么问题出在任务本身的过滤或缓存行为上，而不是Explorer视图。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在RcloneView中手动运行同步任务以强制进行全新扫描" class="img-large img-center" />

## 检查过滤规则和Max File Age设置

同步向导的第3步允许你设置Max File Age过滤器，测试任务后很容易留下一个过于激进的值。如果Max File Age设置得太窄，超出该窗口的文件——包括一些从之前的云端副本继承了较旧时间戳的新添加文件——会被静默排除在运行之外。打开受影响同步的Edit Job，在Filtering Settings步骤中检查是否有按名称、扩展名或路径排除新文件的Max File Age、Max File Size或自定义过滤规则。

RcloneView可在Windows、macOS和Linux上通过一个窗口挂载并同步90多个提供商，因此无论你排查的是本地到云端的任务还是云到云的任务，相同的过滤逻辑都适用。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="检查可能排除新文件的同步过滤设置" class="img-large img-center" />

## 排除挂载目录缓存延迟

如果"缺失"的文件位于挂载驱动器之后，而不是直接浏览远程，那么挂载配置中的Dir Cache Time设置通常是罪魁祸首。较长的目录缓存时间可以加快浏览速度，但也意味着在该缓存过期之前，挂载视图不会反映其他地方添加的文件。对于新鲜度比原始浏览速度更重要的远程，请在Mount Manager中降低Dir Cache Time，或手动卸载并重新挂载以强制立即刷新。

之后在同步任务上运行Dry Run——它会准确列出现在被视为新文件的文件，以便你在进行实际传输之前确认修复效果。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="修复检测设置后显示正确同步运行的任务历史" class="img-large img-center" />

## 开始使用

1. 从[rcloneview.com](https://rcloneview.com/src/download.html)**下载RcloneView**。
2. 在源远程上强制Reload（F5），以排除Explorer视图过期的可能性。
3. 打开Edit Job，在Filtering Settings中检查是否有排除新文件的Max File Age或自定义规则。
4. 对于已挂载的远程，在Mount Manager中降低Dir Cache Time，然后重新挂载并使用Dry Run重新运行任务以确认。

大多数"文件缺失"同步问题都可以追溯到缓存列表或被忽略的过滤器，而不是真正的传输失败，RcloneView的Dry Run和Job History能让你快速确认修复是否生效。

---

**相关指南:**

- [过滤规则 — RcloneView中的选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run — 在RcloneView中预览云同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [修复计划同步未运行的问题 — 使用RcloneView解决](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
