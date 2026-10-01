---
slug: cloud-storage-landscaping-lawn-care-rcloneview
title: "园林绿化公司的云存储 — 使用 RcloneView 保护项目文件"
authors:
  - alex
description: "面向园林绿化和草坪养护公司的云存储：使用 RcloneView 的计划同步与加密功能备份现场照片、设计图和报价单。"
keywords:
  - 园林绿化公司云存储
  - 园林设计文件备份
  - 草坪养护业务备份
  - 现场照片备份
  - 园林云同步
  - 加密云备份
  - RcloneView 备份
  - 小企业云备份
  - 计划云备份
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

# 园林绿化公司的云存储 — 使用 RcloneView 保护项目文件

> 无需改变施工人员的工作方式，即可将现场照片、设计图纸和报价单备份到异地。

园林绿化公司的文件往往散落各处：施工前后的照片在手机里，CAD 或设计导出文件在办公室电脑上，签署后的报价单在共享文件夹中。一旦旺季中某台笔记本电脑损坏，每位客户的承诺记录也随之丢失。RcloneView 为小型企业提供了一种可视化的方式，将这些工作成果复制到云存储，并确认文件已成功到达。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 备份前先整理项目文件

先在办公室电脑上建立清晰的文件夹结构：每位客户一个文件夹，其中包含照片、设计、报价单和发票子文件夹。施工人员拍摄的照片可在每天收工时放入对应的客户文件夹。

在 RcloneView 的一个 Explorer 面板中打开本地文件夹，在另一个面板中打开云端远程。通过 File Explorer，可以在上传前确认现场照片已放入正确的项目文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中为园林项目文件添加云远程" class="img-large img-center" />

## 选择适合业务的存储

RcloneView 支持 Google Drive、OneDrive、Dropbox、Backblaze B2、Wasabi、Amazon S3 以及 90 多种其他提供商，因此您可以使用已有的账户，也可以为大型照片档案选择对象存储。

如果涉及客户的地址和合同，请在目标位置之上添加 Crypt 远程。文件名和内容会在上传前通过 rclone Crypt 加密。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中将项目文件夹复制到云存储" class="img-large img-center" />

## 自动执行夜间复制

创建一个从项目文件夹到云端目标的 Sync 或 Copy 作业。先使用 Dry Run 预览将被复制或删除的内容。单向同步只会修改目标，非常适合备份。使用 PLUS 许可证，您可以添加 crontab 风格的计划，让作业在施工人员上传照片后每晚运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排夜间备份作业" class="img-large img-center" />

## 确认备份确实成功

Job History 会显示每次运行的开始时间、持续时间、状态、大小和文件数量。使用 Folder Compare 对比本地文件夹与云端副本，可以发现缺失的内容，尤其是在安装工程繁忙的一周之后。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 中备份运行的作业历史" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView**：请从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 通过 New Remote 添加您的云存储，并可为敏感文件添加 Crypt 远程。
3. 创建一个从项目文件夹到云端的 Sync 作业，并运行 Dry Run。
4. 设置计划（PLUS）或手动运行，然后每周查看 Job History。

可靠的备份意味着笔记本电脑损坏只是一件不便之事，而不会丢失整个旺季的客户记录。

---

**相关指南：**

- [暖通空调和管道承包商的云存储](https://rcloneview.com/support/blog/cloud-storage-hvac-plumbing-contractors-rcloneview)
- [室内设计公司的云存储](https://rcloneview.com/support/blog/cloud-storage-interior-design-firms-rcloneview)
- [测绘公司的云存储](https://rcloneview.com/support/blog/cloud-storage-surveying-firms-rcloneview)

<CloudSupportGrid />
