---
sidebar_position: 5
description: "RcloneViewでSFTPリモートを追加する方法を学びます"
keywords:
  - rcloneview
  - SFTP
  - リモートストレージ
  - SSH
  - リモート接続
  - rclone
tags:
  - sftp
  - Remote-Storage
  - ssh
  - remote-connection
date: 2025-06-23
author: Jay
---
# SFTP

## RcloneViewでSFTPを追加する方法

### ステップ1: 新規リモート設定ウィンドウを開く

- 上部メニューの**`Remote`**から**`+ New Remote`**をクリックします。
- または、エクスプローラーペインの**`+`**ボタンをクリックし、**`New Remote`**を選択してリモート設定を開始します。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### ステップ2: SFTPリモートを追加する

#### **`Provider`**タブで:
1. 検索バーに**`sftp`**と入力します。  
2. リストから**`sftp (SSH/SFTP)`**を選択します。  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-provider.png" alt="add sftp remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-options.png" alt="add sftp remote options" class="img-medium img-center" />
</div>
#### **`Options`**タブで:
3. **ホスト**を入力します（例: `myserver.example.com` または `192.168.1.100`）  
4. **ユーザー名**を入力します  
5. **ポート番号**を入力します（デフォルトは`22`）  
6. **パスワード**を入力します  


#### **`Name`**タブで:
7. **リモート名**を入力します（例: `MySFTPServer`）  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-name.png" alt="add sftp remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-save.png" alt="add sftp remote save" class="img-medium img-center" />
</div>

#### **`Save`**タブで:
8. **`Save`**をクリックして設定を完了します。

### ステップ3: RcloneViewで追加したSFTPリモートを確認する

1. **`Remote > Remote Manager`**に移動します
2. 新しく追加した**SFTPリモート**がリストに表示されていることを確認します。

✅ **完了！** これでSFTPリモートの設定が正常に完了し、RcloneViewで使用できるようになりました。
