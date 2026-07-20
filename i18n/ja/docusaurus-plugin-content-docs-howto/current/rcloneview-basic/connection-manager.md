---
sidebar_position: 9
description: "RcloneView接続マネージャーを使用して、内蔵Rcloneインスタンスと外部Rcloneインスタンスを設定・切り替える方法を学びます。"
keywords:
  - rcloneview
  - 接続
  - リモートコントロール
  - 内蔵rclone
  - 外部rclone
  - 接続マネージャー
  - rclone
  - rclone rcd
  - rc server
  - リモート接続
  - rclone接続
tags:
  - RcloneView
  - connection
  - remote-control
  - embedded-rclone
  - external-rclone
  - connection-manager
  - rclone-rcd
date: 2025-06-22
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RcloneViewでRclone接続を管理する

RcloneViewは、Remote Control(RC)APIを介して**Rclone**と通信する、クラウドストレージ向けのGUIベースのファイルマネージャーです。デフォルトでは**内蔵Rclone**インスタンスが同梱されていますが、外部のRcloneインスタンス(**外部Rclone**)への接続もサポートしています。

このガイドでは、**接続マネージャー**を使用してこれらの接続を管理する方法を説明します。

## 接続マネージャーの概要

RcloneViewは2つのモードでRcloneと通信します。

- **内蔵Rclone**(デフォルト、組み込み)
- **外部Rclone**(ユーザー設定、ネットワーク接続)

**接続マネージャー**を使用すると、これらのRcloneインスタンスを表示、切り替え、管理できます。

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="connection manager with embedded rclone only" class="img-medium img-center" />

### 内蔵Rclone

RcloneViewには、自動的に起動する**内蔵Rclone**と呼ばれるプリインストール済みのRcloneバイナリが含まれています。

| フィールド                       | 説明                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| **アドレス**                 | 通常は`http://127.0.0.1:5582`(localhostループバック)                         |
| **Rcloneバージョン**          | 例:`v1.70.1`                                                             |
| **Connected** / **Connect** | 現在のステータスを示します。接続されていない場合は、**Connect**をクリックして有効化してください。 |
| **Self Update**             | クリックして最新のRcloneバージョンにアップグレードします。                                 |

### 外部Rcloneリスト

外部Rcloneとは、通常は`rclone rcd`を介してユーザーが手動で起動するスタンドアロンのRcloneインスタンスを指します。以下のような環境で実行できます。

- ローカルマシン(テスト用)
- リモートサーバー(例:AWS EC2)
- Dockerコンテナ内

各エントリには以下が表示されます。

| フィールド | 説明 |
|-------|-------------|
| **表示名** | ユーザー定義の名前(例:`aws-rclone`) |
| **リモートアドレス** | APIエンドポイント、例:`http://<host>:5572` |
| **ユーザー名** | 認証が有効な場合 |
| **Rcloneバージョン** | 接続されたインスタンスから取得 |

**利用可能な操作**:
- **Connect** – このインスタンスをアクティブにします
- **Edit** – アドレス、認証情報、SSLオプションを変更します
- **Delete** – リストから削除します

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="external rclone added" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="external rclone selected" class="img-medium img-center" />
</div>

### 現在の選択インジケーター

接続マネージャーダイアログの上部には以下が表示されます。

- `Selected: Embedded Rclone` – デフォルトの内蔵インスタンスがアクティブ
- `Selected: aws-rclone` – カスタムの外部インスタンスが使用中

同時にアクティブにできる接続は1つのみです。現在の選択は以下に影響します。

- リモートリストの表示  
- マウント/ジョブ操作  
- 設定操作

:::important 注意事項
- Rclone接続は常に1つのみアクティブにできます。  
- 内蔵接続と外部接続の間は自由に切り替えられます。  

💡 2つのインスタンスを並行して管理するには、新しいRcloneViewウィンドウを開いてください。

- 外部Rcloneが利用できなくなった場合は、いつでも内蔵バージョンにフォールバックできます。
:::

## 新しい外部Rcloneを追加する

実行中の`rclone rcd`サーバーに接続するには:

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="new connection form" class="img-medium img-center" />

1. 接続マネージャーの下部にある**New Connection**をクリックします。
2. フォームに入力します。

| フィールド | 説明 |
|-------|-------------|
| **表示名** | 例:`aws-rclone` |
| **リモートアドレス** | 完全なAPIエンドポイント(`http://<host>:5572`) |
| **ユーザー名 / パスワード** | 認証が有効な場合は必須 |
| **Disable SSL Verification** | 自己署名証明書または開発用途の場合 |
<br />
<br />

3. **Test connection**をクリックします。成功したら**Save**をクリックします。

:::important 注意事項

💡 外部Rcloneを利用可能にするには、以下のコマンドで実行してください。

```bash
rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572
```

:::

