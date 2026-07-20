---
sidebar_position: 10
description: RcloneViewでProton Driveストレージを追加する方法を学びます。
keywords:
  - rcloneview
  - rclone
  - proton
  - protondrive
  - cloud storage
  - remote storage
  - Remote Connection
tags:
  - proton
  - protondrive
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-21
author: Jay
---

# Proton Drive

## RcloneViewでProton Driveを追加する方法（Windows）

### ステップ1: リモートマネージャーを開く

- **リモートマネージャー**の右上にある **`+ New Remote`** をクリックします。
- または、エクスプローラーペインの **`+`** ボタンをクリックし、**`New Remote`** を選択してリモート設定を開始することもできます。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
---

### ステップ2: ストレージプロバイダーとしてProton Driveを選択する

1. **Search Provider** バーに `proton` と入力します。
2. リストから **Proton Drive** を選択します。

続いて、Proton Driveの設定画面に移動します。

<img src="/support/images/en/howto/remote-storage-connection-settings/select-proton-drive-remote.png" alt="select proton drive remote" class="img-medium img-center" />

### ステップ3: Proton Driveリモートを設定する

設定フォームに必要な項目を入力します。

- **Remote name**: リモートの分かりやすい名前（例: `MyProtonDrive`）
- **username**: Protonのメールアドレス
- **password**: Protonアカウントのパスワード
- **2fa**（任意）: 現在の2FAコード（2FAが有効な場合のみ）

必要な情報をすべて入力したら、**`Add Remote`** をクリックして設定を完了します。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-proton.png" alt="remote configure proton" class="img-medium img-center" />

### ステップ4: 追加されたリモートを確認する

追加が完了すると、Proton Driveリモート（例: `MyProtonDrive`）が**リモートマネージャー**のリストに表示されます。

これで次のことができます。
- **`Open`** をクリックしてProton Driveの内容を参照する。
- 転送、マウント、またはスケジュールタスクで使用する。
- いつでもリモート設定を編集または削除する。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-proton-view.png" alt="remote manager proton view" class="img-medium img-center" />


✅ **完了！** これで**Proton Drive**が**RcloneView**に正常に接続されました。


## 🔗 追加リソース

- 🌐 [Proton Driveログイン](https://drive.proton.me/)
- 🔐 [Protonアカウントの管理](https://account.proton.me/)
- 🛡️ [Proton 2FA設定ガイド](https://proton.me/support/two-factor-authentication)
