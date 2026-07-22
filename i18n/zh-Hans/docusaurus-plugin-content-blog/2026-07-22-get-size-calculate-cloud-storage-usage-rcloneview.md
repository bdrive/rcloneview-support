---
slug: get-size-calculate-cloud-storage-usage-rcloneview
title: "获取大小 — 在RcloneView中即时计算云存储用量"
authors:
  - jay
description: "使用RcloneView的获取大小(Get Size)功能,在同步或迁移之前计算90多个云服务商中任意文件夹或所选内容的总大小。"
keywords:
  - 获取大小功能
  - 计算云存储大小
  - 云存储文件夹大小
  - RcloneView 获取大小
  - 云存储用量检查
  - 传输前检查文件夹大小
  - 多云存储审计
  - rclone about 命令 GUI
  - 云文件管理工具
  - 存储用量分析
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 获取大小 — 在RcloneView中即时计算云存储用量

> 在RcloneView中右键点击任意文件夹或所选内容,无需等待完整传输,即可立即知道要移动多少数据。

云服务商很少能让你在真正尝试移动之前就清楚一个文件夹到底有多大。一个包含成千上万个嵌套子文件夹的"Media"文件夹,可能隐藏着数GB的数据,而这些数据往往要等到同步任务半途卡住,或者传输过程中出现配额警告时才会显现出来。RcloneView在文件浏览器右键菜单中提供的获取大小(Get Size)命令解决了这一问题:在提交同步、挂载或迁移之前,按需计算任意所选文件或文件夹的总大小。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在移动任何内容之前检查文件夹大小

在任意浏览器面板中选择一个或多个文件或文件夹,右键点击并选择获取大小(Get Size)。RcloneView会遍历所选内容并返回总大小,这对于子目录树很深的文件夹尤其有用,因为仅凭文件列表底部的汇总信息无法反映嵌套内容。无论所选内容位于Google Drive、Amazon S3、自托管的Nextcloud实例还是本地磁盘,这一操作方式都完全相同 —— RcloneView可在同一窗口中挂载并同步90多个服务商,因此无论浏览哪个远程,同样的右键菜单都适用。

获取大小(Get Size)最常用作预检工具。在开始一次大型同步任务或两个云之间的一次性迁移之前,先检查源文件夹的实际大小,有助于估算传输时间、确认目标端是否有足够的可用配额,并判断是否需要过滤规则来精简任务。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder in RcloneView to check its total size" class="img-large img-center" />

## 跨多个远程审计存储用量

由于所有已连接的远程(无论云端还是本地)都位于同一个浏览器中,获取大小(Get Size)同样可以作为快速审计工具,用于查看多云环境中存储空间的消耗位置。依次在每个远程的顶层文件夹上运行,可以大致了解哪些账户正接近其限额,这比逐一登录各服务商独立的网页控制台查看用量要快得多。

如果需要在远程整体层面(而非特定文件夹)获得更精确的用量数字,内置的Rclone Terminal支持`rclone about "remote:"`命令,可直接从服务商API报告已用和可用的总存储空间。获取大小(Get Size)与终端的`about`命令相辅相成:一个聚焦于特定所选内容,另一个报告账户层面的总量。

<img src="/support/images/en/blog/new-remote.png" alt="Multiple cloud remotes connected in RcloneView for storage auditing" class="img-large img-center" />

## 利用大小检查规划同步与过滤规则

一旦了解了文件夹的真实大小,RcloneView的同步向导就能提供相应的工具来据此采取行动。任务配置的第3步包含按最大文件大小、最大文件存续时间进行过滤,以及针对媒体、视频、图片和文档类型的预定义过滤器,这样一个体积过大的文件夹也可以被精简到只保留真正需要传输的文件。之后运行Dry Run可以预览在当前过滤设置下究竟哪些文件会被复制或删除,从而在任何数据真正移动之前确认任务符合预期。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring sync filters after checking folder size in RcloneView" class="img-large img-center" />

## 快速上手

1. 从[rcloneview.com](https://rcloneview.com/src/download.html)**下载RcloneView**。
2. 通过Remote标签 > New Remote连接你想要审计的远程。
3. 在浏览器中选择一个文件夹,右键点击并选择获取大小(Get Size)以查看其总占用空间。
4. 在运行完整传输之前,利用这个数字在同步向导中规划过滤器或计划任务。

准确了解自己正在处理多少数据,能把猜测变成计划,而获取大小(Get Size)让这项检查从一张潜在的支持工单,变成了动动手指就能完成的习惯。

---

**相关指南:**

- [作业历史与传输日志 — 在RcloneView中监控每一次同步](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Dry Run 预览 — 在RcloneView中执行前模拟云同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [使用RcloneView查找并删除云存储中的重复文件](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)

<CloudSupportGrid />
