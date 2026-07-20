---
sidebar_position: 4
description: RcloneViewでWebDAVをリモートストレージとして設定し、ファイルの同期とアクセスを行う方法を学びます。
keywords:
  - rcloneview
  - webdav
  - リモートストレージ
  - クラウドストレージ
  - 同期
  - webdav configuration
  - rclone
tags:
  - webdav
  - Remote-Storage
  - remote-connection
date: 2025-06-20
author: Jay
---
# WebDAV

## RcloneViewでWebDAVを追加する方法

### ステップ1: 新規リモート設定ウィンドウを開く

- 上部メニューの **`Remote`** から **`+ New Remote`** をクリックします。
- または、エクスプローラーペインの **`+`** ボタンをクリックし、**`New Remote`** を選択してリモート設定を開始します。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### ステップ2: WebDAVリモートを追加する

#### **`Provider`** タブで:
1. **`webdav`** を検索します。
2. リストから **`WebDAV`** を選択します。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-provider.png" alt="add webdav remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-options.png" alt="add webdav remote options" class="img-medium img-center" />
</div>

#### **`Options`** タブで:
3. リモートURLを入力します
4. ログインユーザー名を入力します
5. パスワードを入力します

<details>
<summary>オプションの詳細</summary>

オプションの詳細

| フィールド      | 説明                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`          | リモートのWebDAV URL(例: https://webdav.example.com/) カスタムポート番号を指定することもできます(例: https://webdav.example.com:5020)                                                                          |
| `vendor`       | (任意) 空欄のままにするか、WebDAV互換のサービスプロバイダーを指定します(例: fastmail, nextcloud, owncloud, sharepoint, sharepoint-ntlm, rclone) 全一覧はこちら: [WebDAV Provider Notes](https://rclone.org/webdav/#provider-notes) |
| `user`         | ログインユーザー名                                                                                                                                                                                                     |
| `pass`         | ログインパスワード(マスク表示)                                                                                                                                                                                               |
| `bearer_token` | (任意) 通常は空欄のままにします                                                                                                                                                                                              |



</details>
#### **`Name`** タブで:
6. このリモートの一意で識別可能な名前を入力します(例: `myWebDAV`)。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-name.png" alt="add webdav remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-save.png" alt="add webdav remote save" class="img-medium img-center" />
</div>
#### **`Save`** タブで:
5. **`Save`** をクリックしてリモートの設定を完了します。

### ステップ3: RcloneViewで追加したWebDAVリモートを確認する

1. 上部メニューの **`Remote`** タブから **`Remote Manager`** をクリックします。
2. **Remote Manager** ウィンドウに **WebDAVリモート** が表示されていることを確認します。

✅ **完了!** これでWebDAVリモートの設定が正常に完了し、RcloneViewで使用できるようになりました。
