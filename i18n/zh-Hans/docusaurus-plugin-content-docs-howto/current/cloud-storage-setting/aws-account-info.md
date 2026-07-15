---
sidebar_position: 1
description: "分步指南：安全获取用于将 RcloneView 连接到 AWS S3 的 AWS Access Key ID、Secret Access Key 和 Region 代码。"
keywords:
  - rcloneview
  - rclone
  - aws account
  - access key id
  - secret key id
  - region code
  - s3 setup
  - iam
  - aws s3
  - aws
  - secret access key
tags:
  - RcloneView
  - aws-account
  - secret-key-id
  - access-key-id
  - credentials
  - secret-access-key
  - aws-s3
date: 2025-05-26
author: Jay
---
# 如何获取用于 Rclone 的 AWS Access Key 和 Region

在 RcloneView 中添加 AWS S3 作为远程之前，您需要获取 AWS 的 **Access Key ID**、**Secret Access Key** 和 **Region** 代码。本指南将引导您完成从 AWS 账户安全生成这些信息的步骤。

## 分步操作：获取 AWS Access Key ID 和 Secret Access Key

要将 Rclone 连接到 AWS S3，您必须在 AWS 账户中创建一个访问密钥：

1. **登录**到 [AWS 管理控制台](https://aws.amazon.com/console)。
2. 导航到 **IAM（Identity and Access Management）**。  
   您可以在 AWS 服务搜索栏中搜索“IAM”。
3. 在左侧边栏中点击 **Users**，然后点击您的 **IAM 用户名**。
4. 进入 **Security credentials** 标签页。
5. 滚动到 **Access keys** 部分，点击 **Create access key**。
6. 选择：  
   `✔ Application running outside AWS`
7. 可选：输入描述（例如 `RcloneView Access`）以便跟踪该密钥。
8. 点击 **Create access key**。
9. 在最后一个界面中，复制以下两项：
   - **Access Key ID**
   - **Secret Access Key**

:::important
⚠️ 这些密钥**仅显示一次**。请务必**妥善安全地保存**（例如保存在密码管理器中）。
:::

## 如何查找您的 AWS S3 Region

您还需要知道您的 S3 存储桶所在的 AWS **Region**。设置 Rclone 远程时需要用到此信息。

### 方式一：通过 AWS S3 控制台查看

1. 访问 [Amazon S3 控制台](https://s3.console.aws.amazon.com/s3/home)。
2. 在列表中找到您的存储桶。
3. **Region** 列会显示该区域（例如首尔为 `ap-northeast-2`，弗吉尼亚为 `us-east-1`）。

### 方式二：参考官方区域列表

请参阅以下官方文档，了解所有可用区域及其代码：

👉 [AWS 区域代码与终端节点](https://docs.aws.amazon.com/general/latest/gr/s3.html)

:::danger 安全提示
🔒 **切勿公开分享或泄露您的 AWS 凭证。**  
请定期轮换密钥，并通过 **IAM 控制台**删除未使用的密钥。
:::
