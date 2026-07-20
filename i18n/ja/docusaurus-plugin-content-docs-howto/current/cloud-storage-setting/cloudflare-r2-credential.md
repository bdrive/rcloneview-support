---
sidebar_position: 3
description: "Cloudflare R2 の認証情報とエンドポイントを取得する方法"
keywords:
  - rcloneview
  - cloud
  - rclone
  - cloudflare r2
  - r2 endpoint
  - access key id
  - secret access key
  - cloudflare r2 rclone
  - cloudflare s3 api
  - connect r2 to rcloneview
tags:
  - RcloneView
  - Cloud
  - cloud-storage
  - credentials
  - configuration
  - access-key-id
  - secret-access-key
  - secret-key-id
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
# Cloudflare R2 の認証情報とエンドポイントを取得する方法

**Cloudflare R2** を Rclone または **RcloneView** に接続するには、次の3つの重要な情報が必要です。

- ✅ Access Key ID  
- ✅ Secret Access Key  
- ✅ R2 S3互換エンドポイント URL  

このガイドでは、Cloudflare ダッシュボードからこれらの情報を取得する方法を説明します。

---

## 🧰 前提条件

開始する前に、以下をご確認ください。

- **R2 Object Storage** が有効になっている Cloudflare アカウントが必要です。
- [Cloudflare Dashboard](https://dash.cloudflare.com) へのアクセス権が必要です。
- クラウドストレージの基本的な概念を理解していると役立ちます。

---

## 📦 ステップ1: R2 バケットを作成する（まだ作成していない場合）

1. [Cloudflare Dashboard](https://dash.cloudflare.com) にログインします。
2. 左側のサイドバーで **R2 → Object Storage** に移動します。
3. **Create bucket** をクリックします。
4. バケットの一意な名前を入力します。
5. ロケーションを選択します（例: **Automatic**、または `westerneurope` のような地域）。
6. **Create Bucket** をクリックします。

このバケットが、RcloneView を使用して転送するファイルの保存先になります。

---

## 🔐 ステップ2: API 認証情報を生成する

R2 で認証を行うには、アクセス権限を提供する API トークンを作成する必要があります。

### ➕ アクセスキーとシークレットキーを作成する方法

1. Cloudflare ダッシュボードで **Storage & databases -> R2 Object storage → Overview** に移動します。
2. **Account Details** セクション内の **API Tokens** の隣にある **Manage** ボタンをクリックします。

   <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare manage r2 api token" class="img-medium img-center" />
   
3. **Create API Token** をクリックします。用途に合ったトークンタイプ（Account または User）を選択します。

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare create user api token" class="img-medium img-center" />

3. トークンに名前を付けます（例: `Rclone Access`）。
4. 権限を選択します。
   - `Admin Read & Write`（フルアクセス）  
	❗その他の権限ではバケットへのアクセスが許可されない場合があります。
1. 適用範囲を選択します。
   - すべてのバケット
   - 特定のバケットのみ
7. 必要に応じて有効期限を設定します（または「Forever」のままにします）。
8. **Create API Token** をクリックします。

トークンが作成されると、Cloudflare は以下を表示します。

- **Access Key ID**
- **Secret Access Key**

:::danger 重要
これらの認証情報は一度しか表示されません。必ずコピーして安全に保管してください。
:::

---

## **🌐 ステップ3: R2 エンドポイント URL を取得する**

1. Cloudflare ダッシュボードで **R2 → Object Storage** に移動します。  
2. **バケット名** をクリックして詳細を開きます。  
3. **Settings** タブに移動します。  
4. **S3 API** セクションに、エンドポイントの形式とアカウントの詳細が表示されます。    
    
API トークンの作成方法に応じて、以下のいずれかのエンドポイント形式を使用します。

 ### 🔐 API トークンが Admin レベルのアクセス権を持ち、すべてのバケットにアクセスできる場合:

ベースエンドポイント（バケットパスなし）を使用します。

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

### 📦 API トークンが特定のバケットのみに限定されている場合、または特定のバケットにアクセスしたい場合:

バケット固有のエンドポイントを使用します。

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com/<BUCKET-NAME>
```

**ACCOUNT_ID** と **バケット名** はどちらも、バケットの **Settings** タブの **S3 API** セクションで確認できます。

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare r2 s3 api endpoint" class="img-medium img-center" />

**RcloneView** または **Rclone CLI** で Cloudflare R2 リモートを設定する際は、このエンドポイントを使用してください。

---
   
## ✅ まとめ

これで、Cloudflare R2 リモートを設定するために必要な以下の値が揃いました。

| 項目             | 説明                                      |
|------------------|--------------------------------------------------|
| Access Key ID     | Cloudflare API トークンによって提供されます                |
| Secret Access Key | Cloudflare API トークンによって提供されます                |
| Endpoint URL      | R2 バケット設定内にあります（S3互換 URL） |

これらの値を **RcloneView** で新しい S3互換リモートを設定する際に入力するか、Rclone CLI で使用できます。

👉 次へ: [RcloneView で S3互換リモートを追加する方法](/howto/remote-storage-connection-settings/s3)
