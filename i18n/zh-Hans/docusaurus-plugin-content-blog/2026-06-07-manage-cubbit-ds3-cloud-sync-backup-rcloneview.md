---
slug: manage-cubbit-ds3-cloud-sync-backup-rcloneview
title: "管理 Cubbit DS3 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - alex
description: "了解如何将 Cubbit DS3 连接到 RcloneView，并通过简单的桌面 GUI 同步、备份或管理您的地理分布式欧洲云存储。"
keywords:
  - Cubbit DS3 同步
  - Cubbit DS3 备份
  - Cubbit S3 兼容存储
  - RcloneView Cubbit
  - 欧洲云存储备份
  - 地理分布式对象存储
  - Cubbit DS3 设置指南
  - RcloneView 私有云备份
  - S3 兼容存储管理
  - Cubbit DS3 文件管理器
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Cubbit DS3 存储 — 使用 RcloneView 同步和备份文件

> RcloneView 通过 S3 协议连接到 Cubbit DS3，让您无需编写任何 CLI 命令即可浏览、同步和备份您的地理分布式欧洲云存储。

Cubbit DS3 是一项地理分布式、S3 兼容的对象存储服务，构建于欧洲各节点之上。与中心化的服务商不同，Cubbit 会将您的数据分片并加密，分布存储在一个分布式单元网络中，因此对于需要遵守 GDPR 要求的团队，或希望获得设计上即具备隐私保护的存储的用户来说，它是一个颇具吸引力的选择。由于 Cubbit DS3 完全兼容 S3，RcloneView 可以使用与其他 S3 服务商相同的凭证连接流程与其连接 — 无需任何特殊插件或配置。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Cubbit DS3 连接到 RcloneView

打开 RcloneView，进入 **远程标签页 > 新建远程**。选择 **Amazon S3** 作为远程类型，然后从 S3 服务商列表中选择 **Cubbit DS3**。输入您的 Cubbit Access Key ID、Secret Access Key，以及从 Cubbit 控制台仪表板复制的 S3 端点 URL。区域字段可留空，或使用 Cubbit 文档中推荐的值。点击 **保存**，您的 Cubbit DS3 远程就会作为一个新标签页出现在文件浏览器中。

连接会立即生效。您可以在左侧的文件夹树中展开您的存储桶，使用详细列表视图浏览对象，或切换到缩略图视图以预览存储桶中保存的图片资源。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cubbit DS3 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

## 在 Cubbit DS3 中上传和管理文件

RcloneView 的双栏布局让上传文件到 Cubbit DS3 变得十分简单。在一个面板中打开本地文件夹，在另一个面板中打开您的 Cubbit DS3 存储桶。将一个文件夹 — 比如一批建筑事务所的 CAD 图纸 — 从左侧面板拖拽到右侧的 Cubbit 面板中。RcloneView 会自动处理并发多线程上传，底部的传输监视器会实时显示传输速度、文件数量和进度。

在 Cubbit 面板中右键单击任意对象即可打开完整的上下文菜单：复制、剪切、删除、重命名、获取大小和获取公开链接。**获取大小** 选项在决定同步策略之前，用于计算大型存储桶文件夹的存储占用情况尤为有用。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Cubbit DS3 bucket in RcloneView" class="img-large img-center" />

## 设置到 Cubbit DS3 的定时同步任务

如需实现自动化备份，可使用主页标签页中的 **同步** 按钮启动 4 步任务向导。选择您的本地文件夹或另一个云端远程作为源，选择您的 Cubbit DS3 存储桶作为目标。在第 2 步中，增加并发文件传输数量，以充分利用 Cubbit 的分布式带宽。在第 3 步中，应用文件类型过滤器 — 例如，排除 `.tmp` 和 `.log` 文件以保持备份的整洁。

PLUS 许可证用户可解锁第 4 步：cron 式定时调度。您可以设置任务每晚 3 点运行，添加最大文件年龄过滤器以仅同步近期修改的文件，并配置电子邮件通知以确认每次运行的结果。这对于需要每晚自动将数据集存档快照备份到符合合规要求的欧洲存储后端的研究团队来说非常理想。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated sync jobs to Cubbit DS3 in RcloneView" class="img-large img-center" />

## 通过任务历史记录跟踪传输情况

每次同步运行结束后，RcloneView 的 **任务历史记录** 视图会记录执行时间、持续时长、传输的总字节数、传输速度以及最终状态。对于 Cubbit DS3 而言，当您需要确认某次关键备份是否成功完成，或在排查失败运行以确定哪些文件导致错误时，这份审计日志非常有价值。

在进行任何具有破坏性的操作之前，请使用 **模拟运行** 功能 — 它会模拟同步过程并列出所有将被复制或删除的文件，让您在不改动存储桶的情况下核实操作范围。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Cubbit DS3 sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 进入 **远程标签页 > 新建远程**，选择 Amazon S3，并选择 Cubbit DS3 作为服务商。
3. 输入从 Cubbit 控制台获取的 Cubbit Access Key、Secret Key 和 S3 端点。
4. 在文件浏览器中浏览您的存储桶，拖拽文件即可立即开始上传。

将 Cubbit DS3 连接到 RcloneView 后，您将获得一个完全可视化的地理分布式欧洲存储工作流程 — 无需使用终端。

---

**相关指南：**

- [使用 RcloneView 管理 Cloudflare R2 云存储](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 DigitalOcean Spaces — 使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 R2 存储](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
