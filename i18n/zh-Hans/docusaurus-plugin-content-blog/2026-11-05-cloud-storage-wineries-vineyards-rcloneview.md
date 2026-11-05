---
slug: cloud-storage-wineries-vineyards-rcloneview
title: "酒庄与葡萄园的云存储 — 使用 RcloneView 保护生产记录"
authors:
  - casey
description: "酒庄和葡萄园可以使用 RcloneView 将采收日志、酒标设计稿和合规文件备份到多个云端：定时同步、加密和 Folder Compare。"
keywords:
  - 酒庄云存储
  - 葡萄园文件备份
  - 酒庄记录备份
  - 酒标设计稿备份
  - 加密云备份
  - 定时云同步
  - 多云备份
  - RcloneView
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

# 酒庄与葡萄园的云存储 — 使用 RcloneView 保护生产记录

> 让采收日志、酒标设计稿和合规文件安全地保存在不止一个地方。

一家小型酒庄会产生出人意料的各种文件：采收和发酵电子表格、高分辨率的酒标和包装设计稿、品酒室照片、经销商合同以及监管申报文件。它们往往只存放在一台办公室电脑和一个云账户中。RcloneView 为酒庄提供了一种可视化的方式，将这些数据复制到第二个和第三个位置，并检查副本是否一致。RcloneView 可以在一个窗口中挂载并同步 90 多个提供商，支持 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接文件所在的位置

打开 Remote 选项卡，添加你已在使用的存储：用于办公文档的 Google Drive 或 OneDrive、酒窖办公室里的 NAS，以及用于异地副本的 S3 兼容存储桶，例如 Backblaze B2 或 Wasabi。云账户通过浏览器登录；存储桶使用访问密钥。Synology NAS 可以在本地网络中被自动发现。

把两个远程并排放在 Explorer 面板中，拖动文件夹即可在二者之间复制。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中为酒庄添加云端和 NAS 远程" class="img-large img-center" />

## 按计划备份设计稿和记录

酒标设计稿和装瓶记录会在年份酒发布前后发生变化，之后便长期不动。创建一个从办公室共享到存储桶的同步任务，并先使用 Dry Run 预览将被复制的内容。过滤器在这里很有用：排除临时文件，或设置最大文件年龄以聚焦当前年份。

定时同步使用 crontab 风格的时间设置，属于 PLUS 功能。使用 FREE 许可证时仍可手动运行任务，非常适合在每次采收或装瓶之后进行一次复制。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中为酒庄备份任务设置计划" class="img-large img-center" />

## 加密合规与客户数据

经销商合同、许可文件和葡萄酒俱乐部客户名单需要比普通复制更多的保护。Crypt 远程会在文件到达云端之前加密文件名、文件夹名和内容，因此提供商只存储密文。将备份任务指向 Crypt 远程，其余工作流程保持不变。请把密码保存在与备份分开的地方。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="将酒庄文件复制到加密的云端远程" class="img-large img-center" />

## 验证副本并保留记录

Folder Compare 会显示办公室共享与备份之间仅左侧有、仅右侧有以及不同的文件，让你确认各年份文件夹是否一致。Job History 列出每次运行的状态、大小和文件数量，当审计人员或保险公司询问最近一次备份何时完成时，这很有帮助。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="酒庄备份运行的 Job History" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加办公室存储和一个异地远程。
3. 创建同步任务，然后用 Dry Run 检查。
4. 对敏感文件夹，用 Crypt 包装异地远程，并用 Folder Compare 验证。

一份经过验证的第二副本，能让丢失笔记本电脑只是一件麻烦事，而不是丢掉年份酒的记录。

---

**相关指南：**

- [使用 RcloneView 为食品和饮料企业提供云存储](https://rcloneview.com/support/blog/cloud-storage-food-beverage-businesses-rcloneview)
- [使用 RcloneView 为农业和农场提供云存储](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [使用 RcloneView 为酒店和接待业提供云存储](https://rcloneview.com/support/blog/cloud-storage-hospitality-hotels-rcloneview)

<CloudSupportGrid />
