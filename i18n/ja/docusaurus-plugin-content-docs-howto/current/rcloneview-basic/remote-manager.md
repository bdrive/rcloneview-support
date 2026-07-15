---
sidebar_position: 2
description: "RcloneViewを使用してGoogle Drive、Dropbox、WebDAV、S3などのクラウドおよびローカルリモートを追加、編集、削除する方法を学びます。"
keywords:
  - rcloneview
  - リモートストレージ管理
  - リモートの追加
  - リモートマネージャー
  - クラウド同期
  - クラウドストレージ
  - リモートを開く
  - リモートの削除
  - google drive
  - Dropbox
  - s3 compatible
  - aws s3
  - webdav
  - SFTP
  - Onedrive
  - icloud
  - mega
tags:
  - RcloneView
  - Remote-Storage
  - Remote-manager
  - Remote-storage-managent
  - remote-connection
  - remote-control
  - cloud-storage
date: 2025-06-20
author: Jay
---
# RcloneViewでリモートストレージを追加・管理する

RcloneViewでは、クラウドストレージとローカルストレージの両方を接続して管理できます。  
このガイドでは、RcloneViewを使用してリモートストレージを**追加**、**編集**、**削除**する方法を説明します。

## 新しいリモートを追加する
  
新しいリモートストレージを追加するには、まず**「New Remote」**ダイアログを開いてから設定を行います。

### **「New Remote」**ダイアログを開く

**`New Remote`**設定ダイアログは、以下のいずれかの方法で開くことができます。

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/create-remote-top-remote-menu.png" alt="create remote top remote menu" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-plus-button.png" alt="create remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="create remote by remote manager" class="img-medium img-center" />
</div>

#### 方法1: 上部のRemoteメニューを使用する

上部のRemoteタブにある**`+ New Remote`**をクリックします。

#### 方法2: エクスプローラーペインの`+`ボタンを使用する

ファイルエクスプローラーペイン(左または右)の**`+`**アイコンをクリックし、**New Remote**を選択します。

#### 方法3: リモートマネージャーを使用する

**`Remote`**タブから**`Remote Manager`**ボタンをクリックし、空のリモートカードにある**`+`**ボタンをクリックします。


### 新しいリモートを設定する

**New Remote**ダイアログが開いたら、リモートタイプ(Google Drive、Dropbox、S3など)を選択し、必要な設定を入力します。  

入力項目は選択したプロバイダーによって異なります。

プロバイダーごとの詳細な設定手順については、[**リモートストレージ接続設定**](/howto/category/remote-storage-connection-settings)を参照してください。  

## RcloneViewで既存のリモートを管理する

RcloneViewにリモートを追加した後は、開く、編集する、削除するなど、さまざまな方法で管理できます。以下では、それぞれの操作方法を説明します。

### エクスプローラーペインでリモートを開く

リモートのフォルダビューを開き、ローカルとクラウド間でファイルを閲覧または転送できます。

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-card.png" alt="open remote by remote card" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-plus-button.png" alt="open remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-manager.png" alt="open remote by remote manager" class="img-medium img-center" />
</div>

#### 方法1: リモートカードの`Open`ボタンをクリックする

右側ペインの任意のリモートカードにある**`Open`**ボタンをクリックします。

#### 方法2: エクスプローラーペインの`+`ボタンでリモートを開く

左右いずれかの**エクスプローラーペイン**にある**`+`**ボタンをクリックすると、現在設定されているすべてのリモートの一覧が表示されます。

1. リモートを開きたいエクスプローラーペインの`+`アイコンをクリックします。
2. 利用可能なすべてのリモートが表示されたドロップダウンリストが開きます。
3. リストから目的のリモート(例: `MyWebDAV`)を選択します。
4. 選択したリモートが、クリックしたペインで開きます。すでにそのペインで別のリモートが開かれている場合は、選択したリモート用の**新しいタブ**が追加されます。

:::note
**お気に入り(エイリアス)**として登録されたリモートは、素早くアクセスできるように**リストの一番上**に表示されます。
:::
#### 方法3: リモートマネージャーの`Open`ボタンを使用する

1. ツールバーの**Remote Manager**ボタンをクリックします。
2. Remote Managerダイアログで、目的のリモートを見つけます。
3. **`Open`**をクリックして、ファイルブラウザペインで開きます。

:::tip システムトレイからのクイックアクセス
システムトレイのRcloneViewアイコンをクリックし、リストからリモートを選択することで、素早くリモートを開くことができます。  
<img src="/support/images/en/howto/rcloneview-basic/open-remote-via-system-tray.png" alt="open remote via system tray" class="img-small img-left" />
:::

### リモート設定を編集する


既存のリモートの設定は、以下のいずれかの方法で変更できます。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-explorer-panel.png" alt="edit remote from explorer panel" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-remote-manager.png" alt="edit remote from remote manager" class="img-medium img-center" />
</div>


#### 方法1: エクスプローラーペインから編集する  

**エクスプローラーペイン**で現在リモートを閲覧している場合、アクティブなリモートペインの右上にある**歯車アイコン(⚙️)**をクリックします。

これにより**Edit Remote**ダイアログが開き、選択したリモートの**Provider**と**Options**の値を更新できます。  

 ⚠️ **注意:** ここではリモート名を変更することはできません。


#### 方法2: リモートマネージャーから編集する  

1. **Remote**メニュー下のメインツールバーにある**Remote Manager**ボタンをクリックします。  
2. **Remote Manager**ウィンドウで、編集したいリモートを見つけます。  
3. リモートカードの**Edit**ボタンをクリックして**Edit Remote**ダイアログを開きます。

この方法でも**Provider**と**Options**を変更できますが、**リモート名**は固定されたままです。


### リモートを削除する


不要になったリモート設定は、**リモートマネージャー**を使用して安全に削除できます。

<img src="/support/images/en/howto/rcloneview-basic/delete-remote.png" alt="delete remote" class="img-medium img-center" />

1. 上部メニューの**Remote**タブから、ツールバーの**Remote Manager**ボタンをクリックします。
2. **Remote Manager**ウィンドウで、削除したいリモートを見つけます。
3. 該当するリモートカードの**`Delete`**ボタンをクリックします。

この操作を行うと、以下が実行されます。
- 設定からリモートが完全に削除されます。
- 現在エクスプローラーペインで開かれている場合、自動的に閉じられます。
