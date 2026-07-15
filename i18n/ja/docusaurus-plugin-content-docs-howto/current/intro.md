---
sidebar_position: 1
description: "RcloneViewをインストールし、簡単なステップバイステップガイドでGoogleドライブをリモートとして接続する方法を学びます。"
keywords:
  - rclone
  - cloud
  - sync
  - rcloneview
  - guide
  - google drive
  - remote storage
  - Quick Start
  - OAuth
tags:
  - RcloneView
  - Cloud
  - Sync
  - getting-started
  - google-drive
  - Remote-Storage
date: 2025-05-26
author: Jay
slug: /
---
# クイックスタートガイド

このガイドでは、**RcloneView** のインストールと**リモートストレージ（Googleドライブ）**の追加について、ステップバイステップで説明します。

## **ステップ1: RcloneViewのインストール**

1. [**RcloneViewダウンロードページ**](https://rcloneview.com/src/download.html)からインストールファイルをダウンロードします。
2. ダウンロードしたインストーラーを実行し、画面の指示に従ってインストールを完了します。
3. インストールが成功すると、次のような確認画面が表示されます。
<img src="/support/images/howto/Completed-install.png" alt="Completed-install" class="img-medium img-center" />

## **ステップ2: リモートストレージの追加（Googleドライブの例）**

### **新規リモート設定ウィンドウを開く**

- 上部メニューの **`Remote`** の下にある **`+ New Remote`** をクリックします。
- または、Explorerペインの **`+`** ボタンをクリックし、**`New Remote`** を選択してリモート設定を開始することもできます。
<img src="/support/images/howto/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
### Googleドライブリモートの追加

1. 検索バーに **`google`** と入力します。
2. 検索結果から **`Google Drive`** を選択します。
3. わかりやすい **`リモート名`**（例: MyGoogleDrive）を入力します。
4. **`Add Remote`** をクリックしてリモートの追加を完了します。

:::tip
アスタリスク（*）が付いた項目は必須です。保存する前に、必須項目がすべて入力されていることを確認してください。
:::
<div class="img-grid-2">
<img src="/support/images/en/howto/new-remote-step1.png" alt="new remote step1" class="img-medium img-center" />
<img src="/support/images/en/howto/add-remote-step2.png" alt="add remote step2" class="img-medium img-center" />
</div>

:::tip OAuthベースのクラウドリモート

**Google Drive**、**Dropbox**、**Google Photos**、**OneDrive**、**Box**、**pCloud**、**Yandex Disk**、**premiumize.me**、**put.io**、**HiDrive** など、OAuth（Webベースのログイン）に対応するほとんどのクラウドストレージプロバイダーでは、`Options` の設定手順をスキップできます。リモートに名前を付けてブラウザでログインするだけです。

ただし、**一部のプロバイダーでは**、OAuthログインの前に `Options` タブで**追加設定が必要です**。
- **Zoho WorkDrive** – リージョンの選択
- **Google Cloud Storage** – プロジェクト番号の入力
- **Citrix ShareFile** – ルートフォルダIDの入力
- **Google Drive Shared with Me** – `shared_with_me` の有効化
- **Box for Business** – box_sub_type で `enterprise` を選択

👉 参照ガイド: [Webブラウザログインで接続する](/howto/remote-storage-connection-settings/add-oath-online-login#supported-cloud-providers--setup-requirements)
:::

## **ステップ3: リモートストレージの接続（GoogleドライブのシングルサインオンSSO）**
### アカウント認証

- Google SSOログインページにリダイレクトされます。
- Googleアカウントを選択するか、別のアカウントでサインインする場合は**「別のアカウントを使用」**を選択します。

<img src="/support/images/howto/google-choose-account.png" alt="google choose account" class="img-medium img-center" />
:::tip
上記のパスワードベースのログイン以外の方法を使用している場合は、[このガイド](https://support.google.com/accounts/answer/12849458)を参照してログイン手順を完了してください。
:::

### RcloneViewのアクセスを許可する

- 「続行」をクリックして、Googleドライブへの接続を完了します。

<img src="/support/images/howto/google-trust-rclone.png" alt="google trust rclone" class="img-medium img-center" />
- **「成功しました！」**と表示された確認ページが表示されます。
<img src="/support/images/howto/google-login-complete.png" alt="google login complete" class="img-medium img-center" />
✅ **完了！** Googleドライブのリモートが正常に接続され、RcloneViewで使用できるようになりました。

