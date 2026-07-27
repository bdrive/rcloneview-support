---
slug: cloud-storage-museums-archives-rcloneview
title: "博物馆与档案馆的云存储 — 使用RcloneView进行数字化保存"
authors:
  - tayson
description: "博物馆和档案馆使用RcloneView在云存储和冷归档层之间同步、验证和备份数字化馆藏。"
keywords:
  - 博物馆云存储
  - 数字档案备份
  - 数字化保存软件
  - 档案馆藏同步
  - 博物馆数字化工作流程
  - 冷存储归档同步
  - RcloneView 档案
  - 文件夹比较验证
  - 博物馆多云备份
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 博物馆与档案馆的云存储 — 使用RcloneView进行数字化保存

> 数字化馆藏只有在每一份副本都经过验证、而非仅仅完成上传时才是安全的 —— RcloneView为档案管理人员提供了证明这一点的方法。

一家正在数字化4万张摄影底片的地方历史博物馆所面临的问题,与扫描工作本身无关:一旦生成了TIFF母版文件,它就需要存放在两个独立的存储位置,并且需要有人确认这些副本在多年间保持一致。RcloneView可直接处理这一验证流程,将工作用云存储与长期归档层连接起来,为工作人员提供逐文件夹的比较结果,而不是一条盲目的"上传完成"提示。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 母版文件与访问副本

档案馆通常维护两个层级:用于保存的未压缩母版文件(TIFF、WAV、ProRes),以及用于公开展示或供研究人员申请的较小访问副本(JPEG、MP3、H.264)。RcloneView的多面板文件浏览器让工作人员可以并排查看这两个层级 —— 一个面板连接到策展人上传新数字化项目的工作用云盘,另一个面板连接到用于存放母版文件的冷归档远程存储,例如Amazon S3 Glacier级存储或Backblaze B2。

<img src="/support/images/en/blog/new-remote.png" alt="在RcloneView中为归档存储添加新的云端远程连接" class="img-large img-center" />

由于RcloneView可连接90多个服务商,机构无需被锁定在单一供应商的冷存储产品中。博物馆可以将母版文件保存在一个服务商中,同时将第二份副本镜像到另一个服务商以实现灾难恢复冗余,并且都能在同一窗口中进行管理。

## 验证副本之间的完整性

仅上传一次文件并不等于保存 —— 确认多年后它仍与原件一致才是保存。RcloneView的文件夹比较功能会并排检查两个位置,并标记出大小不同、仅存在于一侧或传输中出错的文件。定期进行完整性检查的档案管理人员可以将比较功能指向工作馆藏与归档镜像,然后查看"不同文件"筛选器,在静默损坏或不完整传输变成永久性损失之前就发现问题。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="查看两个归档存储位置之间的文件夹比较结果" class="img-large img-center" />

与仅提供挂载功能的云工具不同,RcloneView在FREE许可下即可提供同步和文件夹比较功能,因此开始进行完整性检查无需付费套餐。

## 编目元数据的定时备份

随着项目不断被编目,馆藏管理系统(CMS数据库、检索工具、EAD/MARC记录)也在持续变化。RcloneView的任务管理器允许档案馆定义一个重复同步任务,按计划将CMS导出文件夹镜像到云存储(PLUS许可),这样元数据备份就能自动进行,而不必依赖工作人员记得手动导出。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在RcloneView中为归档元数据安排重复备份任务" class="img-large img-center" />

Dry Run(模拟运行)模式可让数字化团队在同步实际生效之前,准确预览哪些文件会受到影响,这在某个任务可能会将已修正的编目记录覆盖为过时版本时尤为重要。

## 开始使用

1. 从[rcloneview.com](https://rcloneview.com/src/download.html)**下载RcloneView**。
2. 为主要云存储添加一个远程连接,并为冷归档或异地备份服务商添加第二个远程连接。
3. 对数字化母版文件运行初始同步,然后使用文件夹比较确认两份副本一致。
4. 为编目元数据设置一个重复任务,确保编目工作不会面临丢失风险。

一份馆藏的安全程度,取决于其中验证最不充分的那份副本 —— 将这种验证纳入日常流程,而不是寄希望于它自然发生,才是让数十年数字化工作保持可恢复的关键。

---

**相关指南:**

- [使用RcloneView管理Internet Archive上传](https://rcloneview.com/support/blog/manage-internet-archive-uploads-with-rcloneview)
- [将Google Drive同步至Internet Archive — 使用RcloneView进行云备份](https://rcloneview.com/support/blog/sync-google-drive-to-internet-archive-rcloneview)
- [面向科研与学术机构的云存储 — RcloneView指南](https://rcloneview.com/support/blog/cloud-storage-research-academia-rcloneview)

<CloudSupportGrid />
