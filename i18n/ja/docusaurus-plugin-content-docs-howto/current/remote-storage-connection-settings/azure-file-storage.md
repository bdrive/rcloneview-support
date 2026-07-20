---
sidebar_position: 7
description: "RcloneViewにAzure File Storageを追加する方法を学びます。"
keywords:
  - rcloneview
  - azure file storage
  - azure files
  - smb
  - cloud storage
  - remote storage
  - Remote Connection
  - rclone
tags:
  - azure
  - azure-files
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-12-03
author: tayson
---

# Azure File Storage

## RcloneViewを使ってAzure File Storageを追加する方法

Azure File StorageはSMBを使用し、接続には次の3つの項目が必要です。

- **Azureストレージアカウント名**
- **ストレージアカウント共有キー**
- **Azureファイル共有名**

これら3つはすべて**Azureポータル**からコピーできます(共有キーはストレージアカウント > **アクセスキー**、共有名は**ファイル共有**から取得します)。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="get azure storage account name and account shared key" class="img-large img-center" />

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="get azure storage share name" class="img-large img-center" />

### ステップ1: 新規リモートウィンドウを開く

- 上部メニューの**`Remote`**から**`+ New Remote`**をクリックします。
- または、エクスプローラーペインの**`+`**ボタンをクリックし、**`New Remote`**を選択します。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-large img-center" />
</div>

### ステップ2: ストレージプロバイダーとしてAzure File Storageを選択する

1. **Search Provider**バーに`Azure File Storage`と入力します。
2. リストから**Azure File Storage**オプションをクリックします。

Azure File Storageの設定画面に移動します。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="select azure file storage to add remote" class="img-large img-center" />

### ステップ3: Azure File Storageリモートを設定する

フォームに必要な情報を入力します。

- **Remote name**: リモートのわかりやすい名前(例: `MyAzureFileStorage`)
- **account**: Azureストレージの**アカウント名**。使用しているAzureストレージアカウント名を設定します。
- **key**: **ストレージアカウント共有キー**
- **share_name**: **Azureファイル共有名**。これは必須で、アクセスする共有の名前です。

すべての値を入力したら、**`Add Remote`**をクリックして設定を完了します。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="remote configure azure file storage" class="img-large img-center" />

### ステップ4: 追加されたリモートを確認する

追加が完了すると、新しいAzure File Storageリモート(例: `MyAzure`)が**リモートマネージャー**の一覧に表示されます。

これで次のことができます。

- **`Open`**をクリックしてファイルを閲覧する。
- 同期、コピー、マウントのジョブで使用する。
- いつでもリモートを管理または削除する。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="remote manager azure file storage view" class="img-large img-center" />

✅ **完了!** **Azure File Storage**ストレージを**RcloneView**に正常に接続できました。

**完了!** これでRcloneViewから直接Azureファイル共有内のファイルを閲覧・転送できます。
