---
slug: migrate-jottacloud-to-wasabi-rcloneview
title: "将Jottacloud迁移到Wasabi — 使用RcloneView传输文件"
authors:
  - steve
description: "使用RcloneView将文件从Jottacloud迁移到Wasabi对象存储，借助试运行预览和校验和验证实现安全传输。"
keywords:
  - 将jottacloud迁移到wasabi
  - jottacloud wasabi 传输
  - jottacloud wasabi 迁移
  - rcloneview jottacloud
  - rcloneview wasabi
  - 移动文件jottacloud wasabi
  - 云到云迁移工具
  - wasabi对象存储迁移
  - jottacloud备份wasabi
tags:
  - RcloneView
  - jottacloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将Jottacloud迁移到Wasabi — 使用RcloneView传输文件

> 无需先下载到本地磁盘，即可将你的Jottacloud文件直接迁移到Wasabi的低成本对象存储。

从Jottacloud这类消费级云服务转向更廉价的长期对象存储的团队常常会遇到障碍:他们的文件存放在托管于挪威的个人云账户中,而新的目的地是一个访问模式完全不同的S3兼容存储桶。RcloneView在一个窗口中弥合了这一差距,让你可以将两个服务连接为远程,直接在它们之间传输,云到云,无需经过本地存储中转。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在RcloneView中连接两个远程

首先通过基于浏览器的OAuth登录流程添加Jottacloud作为远程,然后使用你的Access Key ID、Secret Access Key和正确的区域端点将Wasabi添加为S3兼容远程。两个远程都会作为单独的标签页出现在Explorer面板中,你可以使用双面板布局,在左侧打开Jottacloud、右侧打开Wasabi。

与仅支持挂载的工具不同,RcloneView在FREE许可下也支持同步和文件夹比较。这意味着你不仅限于简单的拖放复制,还可以为这次迁移使用完整的同步引擎、过滤和试运行工具。

<img src="/support/images/en/blog/new-remote.png" alt="在RcloneView中为云到云迁移添加新远程" class="img-large img-center" />

## 使用Dry Run预览迁移

在移动任何内容之前,配置一个以Jottacloud为源、以目标Wasabi存储桶为目的地的同步任务。将同步方向设置为单向的"Modifying destination only",这样Jottacloud上的任何内容都不会被更改。首先以Dry Run模式运行任务——RcloneView会准确显示哪些文件将被复制,而不会传输任何一个字节,这在迁移一个你多年未曾全面审查过的文件夹结构时至关重要。

如果你的Jottacloud账户中有新存储桶不需要的大型媒体库或归档,可以在实际传输开始前使用过滤步骤排除文件类型或设置最大文件大小。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在RcloneView中从Jottacloud到Wasabi的云到云传输" class="img-large img-center" />

## 验证并监控传输

试运行结果看起来正确后,在Advanced Settings步骤中启用校验和比较,让RcloneView通过哈希值和大小而不仅仅是修改时间来比较文件——这在两个截然不同的存储后端之间迁移时很重要。启动任务并切换到底部Info View中的Transferring标签页,实时查看数据传输到Wasabi时的进度、传输速度和文件数量。

对于大型库,可以调整文件传输数量和多线程传输设置以更好地利用带宽,并让Job History记录完整的运行过程以供日后参考。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Jottacloud迁移到Wasabi后查看任务历史" class="img-large img-center" />

## 开始使用

1. 从[rcloneview.com](https://rcloneview.com/src/download.html)**下载RcloneView**。
2. 通过OAuth登录添加Jottacloud作为远程,然后使用Access Key ID和Secret Access Key将Wasabi添加为S3兼容远程。
3. 创建一个从Jottacloud到Wasabi存储桶的单向同步任务,并运行试运行以预览将要复制的确切文件。
4. 启用校验和验证,运行实际同步,然后在Job History中确认已完成的传输。

从通用云迁移到专用对象存储,并不意味着要在多个应用之间来回切换或忍受缓慢的本地重新上传——RcloneView在一个界面中处理整个路径。

---

**相关指南:**

- [修复Jottacloud同步错误 — 使用RcloneView解决](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)
- [管理Wasabi存储 — 使用RcloneView同步和备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [将Backblaze B2迁移到Wasabi — 使用RcloneView传输文件](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)

<CloudSupportGrid />
