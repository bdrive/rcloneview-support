---
sidebar_position: 8
description: "RcloneViewでBackblaze B2ストレージを追加する方法を学びます。"
keywords:
  - rcloneview
  - rclone
  - backblaze
  - b2
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - backblaze
  - b2
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-20
author: Jay
---

# Backblaze B2

## RcloneViewでBackblaze B2を追加する方法(Windows)

### ステップ1: リモートマネージャーを開く

- 上部メニューの **`Remote`** から **`+ New Remote`** をクリックします。
- または、エクスプローラーペインの **`+`** ボタンをクリックし、**`New Remote`** を選択してリモートの設定を開始します。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### ステップ2: ストレージプロバイダーとしてBackblaze B2を選択する

1. **Search Provider** バーに `b2` と入力します。
2. 表示された **Backblaze B2** オプションをクリックします。

<img src="/support/images/en/howto/remote-storage-connection-settings/add-backblaze-b2-remote.png" alt="add backblaze b2 remote" class="img-medium img-center" />

これでBackblaze B2の設定画面に移動します。

### ステップ3: Backblaze B2リモートを設定する

設定フォームで、以下の必須情報を入力します。

- **Remote name**: リモートのわかりやすい名前(例: `MyB2Master`)。
- **account**: あなたのBackblaze **Application Key ID**。
- **key**: あなたのBackblaze **Application Key**。

必要な値を入力したら、**`Add Remote`** をクリックして接続を保存します。
<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-backblaze-b2.png" alt="remote configure backblaze b2" class="img-medium img-center" />

:::info これらの認証情報はどこで取得できますか?

- [Backblaze B2アカウント](https://secure.backblaze.com/b2_buckets.htm)にログインします。
- **App Keys** に移動します。
- 既存のキーペアを作成またはコピーします。
  - **Key ID** を `account` として使用します
  - **Application Key** を `key` として使用します
:::


### ステップ4: 追加されたリモートを確認する

追加が完了すると、新しいBackblaze B2リモート(例: `MyB2Master`)が **Remote Manager** リストに表示されます。

以下の操作が可能です。
- **`Open`** をクリックしてリモートを閲覧する。
- コピー/同期/マウント操作で使用する。
- いつでも管理または削除する。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-backblaze-view.png" alt="remote manager backblaze view" class="img-medium img-center" />

✅ **完了!** これで **Backblaze B2** ストレージが **RcloneView** に正常に接続されました。


## 🔗 関連リソース

- 🔐 キーの管理: [https://secure.backblaze.com/b2_buckets.htm](https://secure.backblaze.com/b2_buckets.htm)
- 📘 アプリキーのドキュメント: [https://www.backblaze.com/b2/docs/application_keys.html](https://www.backblaze.com/b2/docs/application_keys.html)
