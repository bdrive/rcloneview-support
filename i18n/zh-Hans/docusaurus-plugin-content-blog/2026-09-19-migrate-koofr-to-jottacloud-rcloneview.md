---
slug: migrate-koofr-to-jottacloud-rcloneview
title: "将 Koofr 迁移到 Jottacloud — 使用 RcloneView 传输文件"
authors:
  - alex
description: "使用 RcloneView 将文件从 Koofr 迁移到 Jottacloud —— 在两家注重隐私的欧洲存储服务商之间进行经过验证的云到云传输。"
keywords:
  - 将 Koofr 迁移到 Jottacloud
  - Koofr 到 Jottacloud 传输
  - RcloneView Koofr
  - RcloneView Jottacloud
  - 欧洲云迁移
  - 云到云传输
  - Koofr Jottacloud 同步
  - 云之间移动文件
tags:
  - RcloneView
  - koofr
  - jottacloud
  - cloud-to-cloud
  - migration
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Koofr 迁移到 Jottacloud — 使用 RcloneView 传输文件

> 直接在云端之间将文件从 Koofr 迁移到 Jottacloud,无需先经过本地下载文件夹中转。

Koofr 和 Jottacloud 都是欧洲的存储服务商,深受重视数据驻留和隐私的用户青睐,在比较过套餐或账户容量限制后,将两者合并为一个也是常见做法。如果通过先下载到笔记本电脑再重新上传的方式来完成迁移,会浪费带宽和时间,而且一旦连接中断还有传输不完整的风险。RcloneView 可以同时连接到两个远程,并在它们之间直接复制文件,因此传输过程中本地机器只是一个中转点,而不是存储落脚点。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

通过"远程"标签页 > 新建远程添加 Koofr 作为远程,然后对 Jottacloud 重复相同的过程。两者都通过各自独立的账户凭据流程连接,而不是共用登录界面,因此在开始之前请准备好每个服务商的账户信息。RcloneView 可以在一个窗口内挂载并同步 90 多个提供商,支持 Windows、macOS 和 Linux,因此无论你从哪个平台进行迁移,这套设置流程都是一样的。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

当两个远程都出现在远程管理器中后,打开两个资源管理器面板并排显示——一个显示 Koofr,另一个显示 Jottacloud——这样在移动任何内容之前就能同时查看两边的文件树。

## 执行传输

对于一次性迁移,只需从 Koofr 面板中拖拽要移动的文件夹,直接放到 Jottacloud 面板上。由于这是在两个不同远程之间的传输,RcloneView 默认会将该拖放操作视为复制,在你确认所有内容都已正确到达 Jottacloud 之前,Koofr 上的原始文件会保持不变。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dragging files from Koofr to Jottacloud in RcloneView" class="img-large img-center" />

对于更大的资料库,4 步同步向导是更好的工具:将 Koofr 设为源,Jottacloud 设为目标,先运行一次试运行以预览将要复制的确切内容,然后再执行真正的同步。试运行在所有许可证级别中都可用,因此在提交一次大规模迁移之前,没有理由跳过预览。

## 确认迁移已完成

传输完成后,使用文件夹比较逐个文件检查两端——它会标记出只存在于一端,或以不同大小完成传输的文件,从而在你从 Koofr 删除任何内容之前先发现不完整的上传。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Koofr to Jottacloud transfer in RcloneView" class="img-large img-center" />

任务历史还会永久保存本次运行的记录——文件数量、总大小和耗时——如果日后需要为账户注销确认迁移情况,值得对其进行截图或导出保存。

## 快速上手

1. 如果尚未安装,请从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过"远程"标签页 > 新建远程,将 Koofr 和 Jottacloud 都添加为远程。
3. 快速移动可使用拖放,若要迁移整个资料库,则构建带有试运行的同步任务。
4. 在从 Koofr 中删除任何内容之前,运行文件夹比较以确认所有文件都已到达。

在同一个窗口中连接好两个服务商后,整合欧洲云存储就从原本耗时数天的下载再上传项目,变成了一次会话内即可完成的任务。

---

**相关指南:**

- [将 Koofr 同步到 Proton Drive — 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [将 Jottacloud 迁移到 OneDrive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-jottacloud-to-onedrive-rcloneview)
- [Koofr 对比 Jottacloud —— 使用 RcloneView 进行欧洲云存储比较](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
