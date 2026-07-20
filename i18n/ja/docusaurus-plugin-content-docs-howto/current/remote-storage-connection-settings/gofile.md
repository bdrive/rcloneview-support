---
sidebar_position: 6
description: "RcloneViewでGofileストレージを追加する方法を学びます。"
keywords:
  - rcloneview
  - rclone
  - gofile
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - gofile
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-05-27
author: Jay
---
# Gofile

## RcloneViewを使用してGofileを追加する方法(Windows)


### ステップ1: 新規リモート設定ウィンドウを開く

- 上部メニューの**`Remote`**の下にある**`+ New Remote`**をクリックします。
- または、Explorerペインの**`+`**ボタンをクリックし、**`New Remote`**を選択してリモート設定を開始することもできます。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
### ステップ2: Gofileリモートを追加する

#### **`Provider`**タブで:

1. **`gofile`**を検索します。
2. リストから**`Gofile`**を選択します。

#### **`Options`**タブで:

3. **Access Token**を入力します。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-provider.png" alt="add go file provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-option.png" alt="add gofile remote option" class="img-medium img-center" />
</div>
:::info Access Tokenの取得方法
 - [https://gofile.io/myprofile](https://gofile.io/myprofile)にアクセスします
 - Gofileアカウントにログインします。
- 下にスクロールして**`Account API Token`**を見つけ、コピーします。
:::

#### **`Name`**タブで:

4. このリモートに**`Remote name`**を割り当てます(例: `myGofile`)。

#### **`Save`**タブで:

5. **`Save`**をクリックしてリモートの追加を完了します。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-name.png" alt="add go file remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-save.png" alt="add gofile remote save" class="img-medium img-center" />
</div>


### ステップ3: RcloneViewで追加したGofileリモートを確認する

**RcloneView**を起動します。

1. メニューバーから、**`Remote`**タブの下にある**`Remote Manager`**をクリックします。
2. **`Remote Manager`**ウィンドウに**`Gofile`**リモートが表示されていることを確認します。

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />
</div>


✅ **完了!** これで**`Gofile`**リモートが正常に設定され、**RcloneView**で使用できるようになりました。


## 🔗 追加リソース

- 🔐 トークンを取得: [https://gofile.io/myprofile](https://gofile.io/myprofile)
