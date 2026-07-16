---
slug: move-from-cloudflare-r2-to-aws-s3-with-rcloneview
title: 使用 RcloneView 轻松将数据从 Cloudflare R2 同步到 AWS S3
authors:
  - jay
description: 了解如何使用 RcloneView 直观的图形界面，将文件从 Cloudflare R2 无缝同步或迁移到 AWS S3——无需使用终端。
keywords:
  - rcloneview
  - cloudflare r2 to aws s3
  - object storage sync
  - cloud migration GUI
  - rclone GUI
  - multi-cloud workflow
  - file transfer cloudflare R2
tags:
  - cloudflare
  - aws-s3
  - RcloneView
  - cloud-sync
  - cloud-migration
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 轻松将数据从 Cloudflare R2 同步到 AWS S3

> 了解如何以简单易用的方式将 Cloudflare R2 数据备份或复制到 AWS S3——无需接触命令行。


## 为什么要在 R2 和 S3 之间同步

虽然 **Cloudflare R2** 以**零出站流量费用**脱颖而出，是一种极具成本效益的存储选择，但 **AWS S3** 凭借成熟的生态系统——包括生命周期规则、加密和区域可用性——依然占据主导地位。将数据从 R2 同步到 S3 可以兼得两者的优势——既节省成本，又具备战略性的弹性。

<!-- truncate -->
### Cloudflare R2 概览
- 无出站数据费用——非常适合高用量场景
- 简单的按需付费定价，兼容 S3 API

### 为什么要将数据保留在 AWS S3 中？
- 高级功能：版本控制、IAM 权限管理、存储分层
- 与 AWS 各类工具和服务广泛集成

**从 R2 同步到 S3 有助于：**
- 借助可靠的 AWS 基础设施保护数据
- 保持与依赖 AWS 服务的工作流程的兼容性
- 融合 R2 的经济实惠与 S3 的强大功能


<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 分步指南：使用 RcloneView 实现 R2 → S3 工作流

### 步骤 1 – 准备访问凭证

请确保你已具备：
- Cloudflare R2 凭证（Access Key、Secret Key）
- AWS S3 访问密钥/密钥及区域信息
- 确定是执行一次性备份还是定期同步

🔍 实用指南：
- [如何获取 AWS S3 访问凭证](/howto/cloud-storage-setting/aws-account-info)
- [如何获取 Cloudflare R2 API 凭证和终端节点](/howto/cloud-storage-setting/cloudflare-r2-credential)
### 步骤 2 – 在 RcloneView 中添加远程

1. 打开 **RcloneView**，点击 **`+ New Remote`**
2. 对于 R2：
   - 选择提供商为 **S3-compatible**，选择 **Cloudflare**
   - 输入你的 R2 密钥和终端节点（例如 `https://<account>.r2.cloudflarestorage.com`）
3. 对于 AWS S3：
   - 选择 **Amazon S3**，添加凭证，并给它起一个清晰的名称（例如 `MyS3`）
4. 确认两者在资源管理器视图中并排显示

👉 详见：[如何添加 S3 远程](/howto/remote-storage-connection-settings/s3)
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

### 步骤 3 – 执行同步

**方法 A – 拖放操作**
快速直观——将文件从 R2 窗格拖放到 S3 窗格中。

👉 详见：[使用拖放方式复制文件](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

**方法 B – 比较并复制**
使用 **比较（Compare）** 功能高亮显示新增或已更改的文件，并选择要同步的内容。

👉 详见：[比较并管理文件](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />

**方法 C – 同步与计划任务**
设置定期任务：
1. 选择 R2 文件夹作为源，S3 作为目标
2. 点击 **Sync**，预览（试运行），然后另存为任务
3. 可选择设置计划，让 RcloneView 自动处理

👉 详见：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />

## 总结与技巧

### 快速回顾
- **R2**：经济实惠、零出站流量费用；**S3**：功能丰富、高度集成
- **RcloneView**：简单的图形界面，无需 CLI 技能即可连接两者

### 更多实用技巧
- 将 R2 用于面向公众的资源，同步到 S3 用于长期归档或审计
- 在 S3 上应用生命周期规则实现分层存储——即使在同步工作流中也能降低成本
- 通过日志和 RcloneView 中直观的可视化反馈监控任务结果


## 常见问题

| 问题                                            | 答案                                                          |
|-----------------------------------------------------|------------------------------------------------------------------|
| 我需要具备技术技能才能完成这些操作吗？              | 完全不需要——RcloneView 提供简洁、可视化的界面。         |
| 同步是否会产生出站流量费用？                     | 从 R2 传出的数据没有出站流量费用。AWS 可能会根据存储层级对传入的存储操作收费。 |
| 设置定期同步任务是否有价值？             | 当然有价值——无需人工操作即可让你的 AWS 备份保持最新。  |


**准备好轻松打通你的 Cloudflare R2 与 AWS S3 环境了吗？**

<CloudSupportGrid />
