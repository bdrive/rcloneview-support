---
sidebar_position: 1
description: "RcloneViewをAWS S3に接続するために必要な、AWSアクセスキーID、シークレットアクセスキー、リージョンコードを安全に取得する手順ガイド。"
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
# Rclone用のAWSアクセスキーとリージョンを取得する方法

RcloneViewにAWS S3をリモートとして追加する前に、AWSの**アクセスキーID**、**シークレットアクセスキー**、**リージョン**コードが必要です。このガイドでは、AWSアカウントからこれらの情報を安全に取得する手順を説明します。

## 手順:AWSアクセスキーIDとシークレットアクセスキーを取得する

RcloneをAWS S3に接続するには、AWSアカウントでアクセスキーを作成する必要があります。

1. [AWS Management Console](https://aws.amazon.com/console)に**ログイン**します。
2. **IAM(Identity and Access Management)**に移動します。
   AWSのサービス検索バーで「IAM」を検索できます。
3. 左側のサイドバーで**Users**をクリックし、次に自分の**IAMユーザー名**をクリックします。
4. **Security credentials**タブに移動します。
5. **Access keys**セクションまでスクロールし、**Create access key**をクリックします。
6. 次を選択します。
   `✔ Application running outside AWS`
7. 任意で説明(例:`RcloneView Access`)を入力し、キーの用途を分かりやすくします。
8. **Create access key**をクリックします。
9. 最後の画面で、以下の両方をコピーします。
   - **Access Key ID**
   - **Secret Access Key**

:::important
⚠️ これらのキーは**一度だけ**表示されます。必ず**安全な場所に保管**してください(例:パスワードマネージャー)。
:::

## AWS S3のリージョンを確認する方法

Rcloneリモートを設定する際には、S3バケットが配置されているAWSの**リージョン**も把握しておく必要があります。

### 方法1:AWS S3コンソールで確認する

1. [Amazon S3 Console](https://s3.console.aws.amazon.com/s3/home)にアクセスします。
2. リストから対象のバケットを見つけます。
3. **Region**列にリージョンが表示されます(例:ソウルの場合は`ap-northeast-2`、バージニアの場合は`us-east-1`)。

### 方法2:公式のリージョン一覧を参照する

利用可能なすべてのリージョンとそのコードについては、こちらの公式ドキュメントを参照してください。

👉 [AWS Region Codes and Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html)

:::danger セキュリティに関する注意
🔒 **AWSの認証情報を公開したり、他人と共有したりしないでください。**
定期的にキーをローテーションし、使用していないキーは**IAM Console**から削除してください。
:::

