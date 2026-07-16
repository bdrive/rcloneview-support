---
slug: sync-tencent-cos-to-amazon-s3-rcloneview
title: "将腾讯云 COS 同步到 Amazon S3 —— 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "了解如何使用 RcloneView 将腾讯云 COS 数据同步到 Amazon S3,以实现全球可用性、跨区域冗余和自动化云备份任务。"
keywords:
  - Tencent COS to S3
  - Tencent COS sync
  - Amazon S3 backup
  - RcloneView Tencent
  - cloud-to-cloud sync
  - S3-compatible storage
  - China cloud to global
  - cross-region cloud sync
tags:
  - RcloneView
  - tencent-cos
  - amazon-s3
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将腾讯云 COS 同步到 Amazon S3 —— 使用 RcloneView 进行云备份

> 使用腾讯云 COS 存储中国区域数据的企业,可以借助 RcloneView 将该数据同步到 Amazon S3,以实现全球可用性和跨区域冗余。

腾讯云对象存储(COS)被众多在中国大陆拥有用户或业务的企业广泛使用,因为它提供低延迟并符合当地数据法规。然而,出于全球可用性或灾难恢复的需要,企业往往还需要将数据复制到覆盖范围更广的 Amazon S3。RcloneView 通过对两家服务商都支持的 S3 兼容远程连接,让这种跨云同步变得简单直接,全部操作都可以在同一个图形界面中完成。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置腾讯云 COS 远程连接

腾讯云 COS 和 Amazon S3 都兼容 S3 协议,因此 RcloneView 通过同一套 S3 提供商框架来处理它们。点击 **New Remote**(新建远程连接),选择 **S3 Compatible Storage**(S3 兼容存储)。在提供商下拉菜单中选择 **Tencent Cloud COS**。输入你在腾讯云控制台获取的 **SecretId** 和 **SecretKey**,并填写与你的 COS 区域对应的正确 **endpoint**(端点)——例如广州区域使用 `cos.ap-guangzhou.myqcloud.com`。

保存后,腾讯云 COS 远程连接会出现在双栏浏览器中。你可以浏览你的 COS 存储桶和对象,验证内容可访问,并在设置同步任务之前确认文件夹结构符合预期。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent Cloud COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## 添加 Amazon S3 作为目标

再次点击 **New Remote**,选择 **Amazon S3**。输入你的 AWS **Access Key ID** 和 **Secret Access Key**,并指定目标存储桶所在的 AWS 区域。如果目标存储桶尚不存在,请先在 AWS S3 控制台中创建——RcloneView 会在配置过程中连接到该存储桶。

在两个远程连接都配置完成后,将它们并排打开在双栏浏览器中,以比对内容并验证连接是否正常。在运行完整同步任务之前,你可以先浏览双方的几个文件夹进行抽查。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud view of Tencent COS and Amazon S3 in RcloneView" class="img-large img-center" />

## 创建并调度同步任务

打开 **Job Manager**(任务管理器),启动 **Job Wizard**(任务向导)。将腾讯云 COS 存储桶(或指定前缀)设为源,将你的 Amazon S3 存储桶设为目标。在执行正式同步之前,使用 **dry run**(模拟运行)选项预览将要传输的内容。对于现有 COS 存储桶的首次批量迁移,模拟运行有助于估算传输量,并及早发现路径或编码方面的问题。

任务成功运行后,可以考虑将其设置为定期调度。PLUS 许可证用户可以配置按日或按周节奏自动运行的同步任务,使 S3 副本随着腾讯云 COS 中新数据的产生而保持最新。**Job History**(任务历史)面板会记录每次运行,让你清楚了解传输量以及任何错误信息。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Tencent COS to Amazon S3 sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **New Remote** > **S3 Compatible Storage** > **Tencent Cloud COS** 添加 **Tencent Cloud COS** 远程连接。
3. 使用你的 AWS 凭证添加 **Amazon S3** 远程连接。
4. 使用 **Job Wizard** 创建从 COS 到 S3 的同步任务,并先执行一次模拟运行。
5. 使用 PLUS 许可证调度定期同步任务,实现持续的跨云复制。

通过 RcloneView 将腾讯云 COS 同步到 Amazon S3,是从中国区域主存储实现全球数据可用性最简洁的方式之一。

---

**相关指南:**

- [管理腾讯云 COS —— 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [管理 Amazon S3 —— 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
