---
slug: sync-zoho-workdrive-to-onedrive-rcloneview
title: "将Zoho WorkDrive同步到OneDrive — 使用RcloneView进行云备份"
authors:
  - steve
description: "使用RcloneView将文件从Zoho WorkDrive同步到Microsoft OneDrive,让两个企业存储账户始终保持备份且最新。"
keywords:
  - 将Zoho WorkDrive同步到OneDrive
  - Zoho WorkDrive 备份
  - Zoho WorkDrive OneDrive 迁移
  - RcloneView Zoho WorkDrive
  - 跨云企业备份
  - Microsoft OneDrive 同步工具
  - 多云文件传输
  - 云到云同步 GUI
  - 企业文件存储备份
tags:
  - RcloneView
  - zoho
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将Zoho WorkDrive同步到OneDrive — 使用RcloneView进行云备份

> 无需手动导出文件,也无需为每个部门单独编写传输脚本,即可持续将Zoho WorkDrive团队文件夹备份到Microsoft OneDrive。

许多团队已将Zoho WorkDrive作为日常协作的标准工具,但仍然需要在Microsoft OneDrive上保留一份存在 —— 可能是因为某个客户只使用Microsoft生态,可能是并购导致两个存储平台同时在用,也可能只是希望在Zoho基础设施之外保留一份企业文件的副本。手动从WorkDrive下载再重新上传到OneDrive的方式,一旦文件数量超过几个就无法扩展,而且不会留下任何关于执行时间和内容的记录。RcloneView在同一个界面中连接这两个平台,将这一传输过程变成一个可重复执行的同步任务。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将Zoho WorkDrive和OneDrive连接为远程

OneDrive通过RcloneView的New Remote向导中标准的浏览器OAuth登录方式连接,无需单独的API密钥。Zoho WorkDrive在设置时需要多一个步骤:由于Zoho会根据工作区创建时所在的地区将数据托管在不同的地理区域,因此需要为账户选择正确的区域。两个远程都添加完成后,会在浏览器中以独立标签页显示,可以像浏览本地文件夹一样浏览、过滤,或将两者相互比较。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Zoho WorkDrive and OneDrive as remotes in RcloneView" class="img-large img-center" />

## 在两个平台之间构建同步任务

同步向导的第一步是选择源(Zoho WorkDrive文件夹)和目标(OneDrive文件夹),以及任务名称和同步方向。仅修改目标端的单向同步是稳定的官方模式,也是让WorkDrive保持数据源地位的备份类任务的正确选择。第2步涉及传输并发数和一致性校验,如果WorkDrive的API在高并发请求下响应变慢,可以适当调低这些数值。第3步的过滤设置可以借助文档和媒体类型的预定义过滤器,或使用类似`/.tmp/*`的自定义排除规则,将任务范围限定到真正需要的文件夹或文件类型。

在Zoho WorkDrive和OneDrive之间同步无需升级许可证,因为1:N同步和基本的Sync & Job Management功能都包含在FREE许可证中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## 验证并自动化传输

在对真实数据运行任务之前,Dry Run会模拟同步过程,并准确列出将要复制的文件,让你能在任何内容真正移动之前发现配置错误的过滤器或非预期的文件夹。任务确认无误后,将其保存到Job Manager中,之后可以手动重新运行,或者在PLUS许可证下将其绑定到crontab风格的计划任务,让WorkDrive到OneDrive的备份自动执行,无需有人记得手动触发。

Job History会记录每次运行的开始时间、耗时、状态以及传输的文件总数,便于确认计划中的备份是否真正完成,而不是在夜间悄悄失败。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## 快速上手

1. 从[rcloneview.com](https://rcloneview.com/src/download.html)**下载RcloneView**。
2. 通过Remote标签 > New Remote连接Zoho WorkDrive(选择正确的区域)和OneDrive(通过OAuth登录)。
3. 从WorkDrive文件夹到OneDrive目标创建一个单向同步任务,并按需应用过滤器。
4. 运行Dry Run确认文件列表,然后保存任务,如果使用PLUS许可证,可以设置计划任务。

当两个平台在同一个窗口中连接后,让Zoho WorkDrive和OneDrive保持同步就从反复的手动操作变成了一项计划任务。

---

**相关指南:**

- [管理Zoho WorkDrive — 使用RcloneView同步和备份文件](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [使用RcloneView将Google Drive挂载为本地驱动器](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [过滤规则 — 在RcloneView中进行选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
