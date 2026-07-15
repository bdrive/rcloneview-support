---
sidebar_position: 1
description: "RcloneViewの内蔵Webサーバーを有効にして、ローカルネットワーク内の任意のブラウザからExplorer、Jobs、Remotes、Settingsにアクセスできるようにします。"
keywords:
  - rcloneview
  - Webフロントエンド
  - Webサーバー
  - ブラウザアクセス
  - リモートアクセス
  - web ui
  - rclone webインターフェース
tags:
  - RcloneView
  - Tutorial
  - Web-Frontend
  - Remote-Access
date: 2026-03-27
author: steve
---

# RcloneView Webフロントエンド

RcloneViewには、任意のWebブラウザから完全なRcloneViewインターフェースにアクセスできる内蔵Webサーバーが含まれています。デスクトップアプリのウィンドウを開くことなく、リモートの参照、ジョブの管理、設定の構成をすべて行うことができます。

このチュートリアルでは、以下について説明します。

- RcloneViewの設定でWebサーバーを有効にする
- ポート、ユーザー名、パスワードを設定する
- ブラウザからWebフロントエンドにアクセスする
- ネットワーク上の他のデバイスからのリモートアクセスを許可する

---

## Webフロントエンドとは？

Webフロントエンドは、デスクトップアプリの操作感を再現した、RcloneViewのブラウザベースのインターフェースです。内蔵Webサーバーが起動していれば、ブラウザを開いて、以下を含むおなじみのUIでRcloneViewを操作できます。

- **Explorer** — ローカルおよびリモートストレージを参照
- **Jobs** — 同期/コピージョブの表示と管理
- **Remotes** — リモート接続の管理
- **Settings** — RcloneViewのオプションを設定

これは、同じネットワーク上の別のデバイスから転送を管理したい場合や、単にブラウザベースのワークフローを好む場合に便利です。

---

## 必要条件

- RcloneViewがインストールされ、実行中であること（デスクトップ）
- モダンなWebブラウザ（Chrome、Firefox、Safari、Edgeなど）
- リモートアクセスの場合: 同じローカルネットワーク上のデバイス

---

## ステップ1: Webサーバー設定を開く

1. **RcloneView**を起動します。
2. **Settings** > **Network & Misc**に移動します。
3. **Web Server**セクション（**Beta**と表示）を見つけます。

<img src="/support/images/en/tutorials/web-frontend/web-server-settings.png" alt="Web Server settings in RcloneView" class="img-large img-center" />

---

## ステップ2: Webサーバーを設定する

**Web Server**セクションで、以下を設定します。

- **Port**: Webサーバーのポート番号（デフォルト: `8580`）。デフォルトのポートが他のサービスと競合する場合は変更してください。
- **Username**: 認証用のユーザー名を設定します（例: `admin`）。
- **Password**: Webフロントエンドへのアクセスを保護するためのパスワードを設定します。

---

## ステップ3: Webサーバーを有効にする

1. **Enable Web Server**を**On**に切り替えます。
2. ステータスが**Stopped**から**Running on port 8580**（または設定したポート）に変わります。
3. **Restart Server**ボタンが表示され、設定を変更した後に使用できます。

<img src="/support/images/en/tutorials/web-frontend/web-server-running.png" alt="Web Server running on port 8580" class="img-large img-center" />

---

## ステップ4: Webフロントエンドにアクセスする

1. 同じマシンでWebブラウザを開きます。
2. `http://localhost:8580`（または設定したポート）にアクセスします。
3. RcloneViewのログイン画面が表示されます。ステップ2で設定した**Username**と**Password**を入力し、**Sign In**をクリックします。

<img src="/support/images/en/tutorials/web-frontend/web-frontend-login.png" alt="RcloneView Web Frontend login screen" class="img-large img-center" />

4. RcloneView Webフロントエンドが完全なインターフェースとともに読み込まれます。左側のサイドバーからExplorer、Jobs、Remotes、Settingsすべてにアクセスできます。

<img src="/support/images/en/tutorials/web-frontend/web-frontend-explorer.png" alt="RcloneView Web Frontend Explorer" class="img-large img-center" />

---

## ステップ5: リモートアクセスを許可する（任意）

デフォルトでは、Webサーバーは**localhost (127.0.0.1)**からの接続のみを受け付けます。ネットワーク上の他のデバイスからRcloneViewにアクセスするには、次の手順を行います。

1. **Allow remote access**を**On**に切り替えます。
2. **Restart Server**をクリックして変更を適用します。
3. 別のデバイスでブラウザを開き、`http://<your-computer-ip>:8580`にアクセスします。

> **セキュリティに関する注意:** リモートアクセスを有効にすると、ネットワーク上のすべてのデバイスがWebフロントエンドにアクセスできるようになります。アクセスを保護するために、常に強力なユーザー名とパスワードを使用してください。

---

## まとめ

RcloneView Webフロントエンドを使用すると、すべてのコア機能にブラウザからアクセスできます。

- **Settings > Network & Misc**からWebサーバーを有効にする
- 安全なアクセスのためにポート、ユーザー名、パスワードを設定する
- `http://localhost:8580`で完全なUIにアクセスする
- 必要に応じて、ネットワーク上の他のデバイス向けにリモートアクセスを有効にする

RcloneViewをバックグラウンドで実行し続け、任意のブラウザからクラウドストレージを管理しましょう。
