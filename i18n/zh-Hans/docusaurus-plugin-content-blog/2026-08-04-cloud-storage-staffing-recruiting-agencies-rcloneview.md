---
slug: cloud-storage-staffing-recruiting-agencies-rcloneview
title: "人力资源与招聘代理机构的云存储 — 使用 RcloneView 保护候选人数据"
authors:
  - tayson
description: "使用 RcloneView 在分支机构和云账户之间集中管理简历、背景调查和客户文件,专为人力资源与招聘代理机构设计。"
keywords:
  - 人力资源代理机构云存储
  - 招聘代理机构文件管理
  - 候选人数据存储
  - 简历数据库云端
  - 安全的候选人记录
  - 人力资源文档备份
  - 招聘代理机构备份
  - 多云人力资源公司
  - 候选人个人信息保护
  - RcloneView 招聘
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 人力资源与招聘代理机构的云存储 — 使用 RcloneView 保护候选人数据

> 在分支机构和招聘人员实际使用的每个云账户中整理简历、背景调查结果和客户合同,并保持备份。

一家拥有五个分支机构的中型人力资源代理机构,候选人简历往往分散在每个招聘人员或办公室碰巧采用的各种云平台中——一个分支机构用 Google Drive,另一个用 OneDrive,而遗留的存档仍留在 Dropbox 中。如果无法追踪哪个候选人文件版本是最新的,或者未能备份某个分支机构的 SharePoint 站点,就会带来实际的合规和客户关系风险。RcloneView 为代理机构提供了一个统一窗口,可以在所有这些账户中浏览、同步和备份候选人及客户记录,而无需强制所有办公室统一使用同一平台。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 集中管理各分支机构云端的候选人记录

RcloneView 的多面板浏览器最多可同时打开四个远程连接,让招聘运营负责人无需切换应用程序即可将某分支机构的 Google Drive 与总部的 OneDrive 并排浏览。RcloneView 可在 Windows、macOS 和 Linux 上的同一窗口中挂载并同步 90 多个提供商,这在不同分支机构或客户管理门户多年来使用不同平台搭建的情况下尤为重要。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting multiple branch office cloud accounts in RcloneView" class="img-large img-center" />

文件夹比较(Folder Compare)会突出显示仅存在于某一分支机构云端的候选人文件夹,便于快速发现几个月前就已停止同步简历数据库的办公室。

## 保护敏感的候选人和客户数据

简历、背景调查结果和薪资历史正是那种不应以明文形式存放在云文件夹中的个人数据。RcloneView 的 Crypt 虚拟远程会在文件离开本地机器之前加密文件名和内容,因此即使备份到云存储的候选人数据库所依托的云账户日后被入侵,其静态数据也会保持加密状态。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing candidate record folders between branch offices in RcloneView" class="img-large img-center" />

同步向导中的自定义过滤器还可以排除不应在每个备份目标中重复保存的文件类型,使每个同步作业的范围保持精简且可审计。

## 为每个分支机构安排备份计划

手动备份五个或更多分支机构无法扩展。Job Manager 让代理机构可以为每个分支机构保存一个同步作业,并在 PLUS 许可下附加 crontab 样式的计划,使夜间备份无需任何人记得点击按钮即可运行。作业历史(Job History)随后提供开始时间、已传输文件和完成状态等记录,当客户询问其提交的候选人数据如何受到保护时非常有用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly branch office backups in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将每个分支机构的云账户作为单独的远程连接。
3. 在备份任何包含候选人个人信息(PII)的文件夹之前,设置一个 Crypt 远程。
4. 为每个分支机构创建计划同步作业,并定期查看作业历史。

跨每个分支机构云账户的一致加密备份,能将分散的候选人数据库转变为可审计、可恢复的资产。

---

**相关指南:**

- [人力资源部门的云存储 — 使用 RcloneView 安全高效地管理 HR 文件](https://rcloneview.com/support/blog/cloud-storage-human-resources-rcloneview)
- [加密云备份 — RcloneView Crypt 远程指南](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [RcloneView 云存储安全检查清单](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
