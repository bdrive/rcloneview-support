---
sidebar_position: 9
description: "RcloneViewでMegaストレージを追加する方法を学びます。"
keywords:
  - rcloneview
  - rclone
  - mega
  - cloud storage
  - remote storage
  - Remote Connection
tags:
  - mega
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-21
author: Jay
---

# Mega

## RcloneViewでMegaを追加する方法(Windows)

### ステップ1: リモートマネージャーを開く

- **リモートマネージャー**の右上隅にある **`+ New Remote`** をクリックします。
- または、エクスプローラーペインの **`+`** ボタンをクリックし、**`New Remote`** を選択してリモート設定を開始することもできます。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### ステップ2: ストレージプロバイダーとしてMegaを選択

1. **Search Provider** バーに `mega` と入力します。
2. リストから **Mega** オプションをクリックします。

その後、Megaの設定画面に移動します。

<img src="/support/images/en/howto/remote-storage-connection-settings/select-mega-to-add-remote.png" alt="select mega to add remote" class="img-medium img-center" />

### ステップ3: Megaリモートを設定する

フォームに必要な情報を入力します。

- **Remote name**: リモートのわかりやすい名前(例: `MyMega`)
- **user**: **Megaのメールアドレス**(例: `example@gmail.com`)
- **pass**: **Megaのパスワード**

すべての値を入力したら、**`Add Remote`** をクリックして設定を完了します。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-mega.png" alt="remote configure mega" class="img-medium img-center" />

### ステップ4: 追加したリモートを確認する

追加が完了すると、新しいMegaリモート(例: `MyMega`)が**リモートマネージャー**のリストに表示されます。

これで次のことができます。
- **`Open`** をクリックしてファイルを閲覧する。
- 同期、コピー、マウントジョブで使用する。
- いつでもリモートを管理または削除する。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="remote manager mega view" class="img-medium img-center" />


✅ **完了!** **Mega**ストレージを**RcloneView**に正常に接続しました。


## 🔗 その他のリソース

- 🌐 [Mega.nzログイン](https://mega.nz/login)
- 🔐 Megaアカウントを管理: [https://mega.nz/settings](https://mega.nz/settings)
