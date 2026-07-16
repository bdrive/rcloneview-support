---
slug: sync-hidrive-to-amazon-s3-rcloneview
title: "将 HiDrive 同步到 Amazon S3 —— 使用 RcloneView 进行云备份"
authors:
  - morgan
description: "了解如何使用 RcloneView 将 HiDrive 文件同步并备份到 Amazon S3。通过简单的图形界面在欧洲和全球云存储之间传输文件。"
keywords:
  - HiDrive to Amazon S3
  - RcloneView HiDrive backup
  - sync HiDrive S3
  - HiDrive cloud backup
  - transfer HiDrive to AWS
  - cloud-to-cloud backup RcloneView
  - HiDrive migration to S3
  - Amazon S3 backup tool
  - cross-cloud file transfer
  - HiDrive file sync
tags:
  - hidrive
  - amazon-s3
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 HiDrive 同步到 Amazon S3 —— 使用 RcloneView 进行云备份

> 使用 RcloneView 的可视化同步工具将您的 HiDrive 存储备份到 Amazon S3 —— 无需命令行，内置计划任务、过滤和实时传输监控功能。

HiDrive 是 Strato 旗下的欧洲云平台，深受重视 GDPR 合规存储的企业青睐。与此同时，Amazon S3 是对象存储持久性与生态系统集成的标杆，是任何关键业务数据的天然次级备份目的地。借助 RcloneView，您可以在同一个界面中连接这两个服务商，运行自动化的过滤同步任务，使您的 S3 存储桶始终与 HiDrive 文件夹保持一致，而无需编写任何命令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 HiDrive 和 Amazon S3

HiDrive 使用 OAuth 进行身份验证，这意味着 RcloneView 会打开一个浏览器标签页，您在其中登录 Strato 账户并授予访问权限——无需管理 API 密钥。转到**远程 > 新建远程**，选择 **HiDrive**，然后完成浏览器登录。您的 HiDrive 文件夹树会立即显示在文件浏览器中。

对于 Amazon S3，再次转到**远程 > 新建远程**，选择 **Amazon S3**，然后输入您的 AWS Access Key ID、Secret Access Key 以及目标区域。如果您希望采用最小权限访问，可以在 AWS 控制台中创建一个专用的 IAM 用户，将写入权限限定在目标存储桶上，然后在 RcloneView 中输入这些凭据。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting HiDrive and Amazon S3 as remotes in RcloneView" class="img-large img-center" />

两个远程都注册完成后，在 RcloneView 的双栏浏览器中并排打开两个面板——左侧为 HiDrive，右侧为 S3——以便在提交完整同步之前直观地比较文件夹内容。

## 构建 HiDrive 到 S3 的同步任务

连接好两个远程后，转到**主页 > 同步**打开任务向导。将您的 HiDrive 文件夹设置为源，将您的 S3 存储桶（可选带子文件夹前缀）设置为目标。在高级设置步骤中，根据可用带宽配置并发传输线程数——较高的值可加速扁平文件结构的批量传输，而较低的值在有严格速率限制的连接上更为稳妥。

在过滤步骤中，您可以按类型（例如 `.tmp`、`.part`）或按文件年龄排除不相关的文件——例如，使用**最大文件年龄**过滤器（`90d`）仅同步过去 90 天内修改过的文件。这样可以让任务更聚焦，并减少对两端接口的不必要调用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

首次运行前，务必点击**试运行**以预览将被传输或删除的确切文件列表——在将已有大量数据的 HiDrive 账户同步到全新 S3 存储桶时，这一步至关重要，必须在任何数据发生变动之前确认单向同步方向正确无误。

## 计划自动化备份

为持续保护数据，PLUS 许可证用户可以按照类似 crontab 的计划安排 HiDrive 到 S3 的任务自动运行。常见配置包括每晚凌晨 2 点的完整同步和工作时间内的每小时增量同步。任务向导第 4 步中的计划模拟器会在您保存前预览接下来 10 次执行的时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated HiDrive to S3 backup in RcloneView" class="img-large img-center" />

在无人值守运行期间，**传输中**标签页会实时显示每次计划执行的传输速度和文件数量，而**任务历史**则记录每次运行的结果、传输字节数以及任何错误详情——为备份问责提供完整的审计追踪。

## 使用文件夹比较验证同步完整性

首次同步完成后，使用 RcloneView 的**文件夹比较**功能验证 HiDrive 和 S3 是否真正保持同步。在比较视图中打开两个文件夹；RcloneView 会高亮显示仅存在于左侧、仅存在于右侧以及大小不同的文件——让您无需手动交叉核对文件列表即可发现缺失或不匹配的项目。对于高价值的归档数据，可在同步任务的高级设置中启用**校验和**比较，通过哈希值而非仅凭大小来验证文件完整性。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Amazon S3 folder contents in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过**远程 > 新建远程 > HiDrive**并使用 OAuth 浏览器登录添加您的 HiDrive 账户。
3. 通过**远程 > 新建远程 > Amazon S3**并使用您的 IAM 凭据添加您的 Amazon S3 存储桶。
4. 在**主页 > 同步**中创建从 HiDrive 到 S3 的同步任务，先运行试运行，然后再执行。

启用自动计划任务后，您的 HiDrive 文件将按照您设定的计划流入 S3——在无需持续手动操作的情况下实现跨服务商备份。

---

**相关指南：**

- [管理 HiDrive 云存储 —— 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [管理 Amazon S3 —— 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [将 HiDrive 同步到 Google Drive —— 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-hidrive-to-google-drive-rcloneview)

<CloudSupportGrid />
