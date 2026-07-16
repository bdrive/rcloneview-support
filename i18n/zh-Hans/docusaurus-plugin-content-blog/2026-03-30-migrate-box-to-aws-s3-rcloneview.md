---
slug: migrate-box-to-aws-s3-rcloneview
title: "将 Box 迁移到 AWS S3 — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将文件从 Box 迁移到 AWS S3。通过校验和验证和计划任务，将企业内容传输到可扩展的 S3 存储。"
keywords:
  - box to aws s3
  - migrate box to s3
  - box cloud migration
  - aws s3 transfer
  - cloud-to-cloud migration
  - rcloneview box transfer
  - enterprise cloud migration
  - box to amazon s3
  - box backup to s3
  - object storage migration
tags:
  - RcloneView
  - box
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 迁移到 AWS S3 — 使用 RcloneView 传输文件

> 将组织的内容从 Box 迁移到 AWS S3，可以解锁大规模的可编程存储 — 而 RcloneView 会为你完成所有繁重的工作。

Box 凭借其元数据、工作流和治理功能在企业内容管理方面表现出色。但当你的架构转向 AWS 原生服务时——例如由 Lambda 函数处理上传、Athena 查询数据湖，或 CloudFront 分发资源——将文件存储在 S3 中可以省去连接 Box 与 AWS 技术栈所需的中间件。RcloneView 通过可视化界面将文件从 Box 迁移到 S3 存储桶，同时保留文件夹结构并验证每一次传输。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Box 迁移到 AWS S3

AWS S3 提供几乎无限的存储空间，并在六种存储类别之间实现精细化定价 — 从用于频繁访问数据的 S3 Standard，到用于长期保存、每 GB 每月仅需 0.00099 美元的 S3 Glacier Deep Archive。而 Box 采用按用户收取许可费用的方式，企业方案下每用户每月费用可能超过 20 美元，且其存储空间是共享分配而非独立分配。

对于开发团队而言，S3 的生态系统是无可比拟的。事件通知可以触发 Lambda 函数，S3 Select 可以就地查询数据，版本控制和复制规则可以防止数据丢失，IAM 策略可以提供细粒度的访问控制。Box 的 API 虽然功能强大，但其设计初衷是内容协作，而非基础设施级别的存储操作。迁移到 S3 可以使你的文件存储与其余的 AWS 基础设施保持一致。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and AWS S3 remotes in RcloneView" class="img-large img-center" />

## 配置 Box 和 S3 远程

在 RcloneView 中选择 "Box" 作为提供商类型来添加 Box 远程。OAuth 流程会打开浏览器进行 Box 身份验证。使用你的 Box 账户凭据登录并授权 RcloneView。该远程会连接到你的 Box 根文件夹，包括所有你拥有的、与你共享的文件夹。

对于 AWS S3，创建一个新的远程并选择 "Amazon S3"。输入你的 AWS 访问密钥 ID 和私有访问密钥，或者如果 RcloneView 运行在 EC2 实例上，也可以使用 IAM 角色。选择目标区域并指定存储桶名称。RcloneView 会验证凭据并确认对该存储桶的访问权限。如果你需要创建新的存储桶，请先在 AWS 控制台中创建，并设置你偏好的区域、加密方式和版本控制选项。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Box to S3 cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## 执行迁移

使用双栏浏览器，一侧浏览 Box，另一侧浏览 S3。选择你要迁移的 Box 文件夹 — 可以是整个部门目录、项目归档，或特定的内容树。在另一侧导航到目标 S3 前缀。

若要进行受管迁移，请在任务管理器中创建一个复制任务。将 Box 设为源，S3 设为目标。使用 "复制" 模式来传输文件而不从 Box 中删除它们，从而为你保留回滚路径。Box 的 API 使用 SHA-1 校验和，而 S3 存储 MD5 和 ETag 哈希值 — RcloneView 默认使用文件大小和修改时间进行比较，并提供可选的校验和验证功能。

Box 对 API 调用有速率限制（企业账户约为每秒 10 次 API 调用）。RcloneView 会自动重试并采用指数退避策略以遵守这些限制。对于包含数十万个文件的大型迁移，可以使用计划窗口将任务分散在多天内运行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a Box to AWS S3 migration job in RcloneView" class="img-large img-center" />

## 迁移后验证与切换

传输完成后，使用 RcloneView 的比较功能验证迁移结果。并排打开两个远程，运行文件夹比较以检查文件数量、大小和结构。查看任务历史记录中是否有被跳过或出错的文件，并重新运行任务以处理这些文件。

考虑根据访问模式设置 S3 存储桶的存储类别。经常访问的项目文件应放在 S3 Standard 中，而归档内容可以通过生命周期策略移动到 S3 Intelligent-Tiering 或 Glacier。在过渡期间，保持 Box 远程在 RcloneView 中处于活动状态，持续运行增量同步任务，直到所有用户都将其工作流迁移到 S3。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to S3 migration transfers" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在创建 Box 远程时，通过 OAuth 验证你的 Box 账户。
3. 使用 IAM 凭据添加你的 AWS S3 远程，并选择目标存储桶和区域。
4. 创建从 Box 到 S3 的复制任务，配置速率限制处理，并针对大型数据集将其安排在多天内执行。

在 S3 中的所有内容都验证无误后，迁移你的应用程序，并在团队完成切换后停用 Box 存储。

---

**相关指南：**

- [使用 RcloneView 将 Box 迁移到 SharePoint 和 OneDrive](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [使用 RcloneView 将 Box 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [使用 RcloneView 将 Box 存储挂载为网络驱动器](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
