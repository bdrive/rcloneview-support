---
sidebar_position: 1
description: "逐步指南，教您如何安全地取得 AWS Access Key ID、Secret Access Key 及 Region 代碼，以便將 RcloneView 連接至 AWS S3。"
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
# 如何取得您的 AWS Access Key 及 Region（供 Rclone 使用）

在您能夠將 AWS S3 新增為 RcloneView 中的遠端之前，您需要取得 AWS 的 **Access Key ID**、**Secret Access Key** 以及 **Region** 代碼。本指南將引導您完成從 AWS 帳戶安全產生這些資訊的步驟。

## 逐步操作：取得您的 AWS Access Key ID 及 Secret Access Key

若要將 Rclone 連接至 AWS S3，您必須在您的 AWS 帳戶中建立一組 access key：

1. **登入** [AWS Management Console](https://aws.amazon.com/console)。
2. 前往 **IAM（Identity and Access Management）**。
   您可以在 AWS 服務搜尋欄中搜尋「IAM」。
3. 在左側側邊欄點選 **Users**，然後點選您的 **IAM 使用者名稱**。
4. 前往 **Security credentials** 分頁。
5. 捲動至 **Access keys** 區塊，點選 **Create access key**。
6. 選擇：
   `✔ Application running outside AWS`
7. 您可以選擇性地輸入描述（例如 `RcloneView Access`）以協助追蹤此金鑰。
8. 點選 **Create access key**。
9. 在最後一個畫面中，複製以下兩者：
   - **Access Key ID**
   - **Secret Access Key**

:::important
⚠️ 這些金鑰只會顯示**一次**。請務必**妥善安全保存**（例如存放於密碼管理工具中）。
:::

## 如何找到您的 AWS S3 Region

您還需要知道您的 S3 儲存貯體（bucket）所在的 AWS **Region**。在設定 Rclone 遠端時會需要此資訊。

### 選項 1：透過 AWS S3 主控台查看

1. 前往 [Amazon S3 Console](https://s3.console.aws.amazon.com/s3/home)。
2. 在清單中找到您的儲存貯體。
3. **Region** 欄位會顯示所在區域（例如首爾為 `ap-northeast-2`，維吉尼亞為 `us-east-1`）。

### 選項 2：參考官方 Region 清單

請參閱以下官方文件，取得所有可用的區域及其代碼：

👉 [AWS Region Codes and Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html)

:::danger 安全提醒
🔒 **切勿公開分享或洩漏您的 AWS 憑證。**
請定期輪替金鑰，並透過 **IAM Console** 刪除未使用的金鑰。
:::
