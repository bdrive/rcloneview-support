---
sidebar_position: 10
description: "RcloneViewで一般設定、インターフェースレイアウト、通知、埋め込みRclone設定を構成する方法を学びます。"
keywords:
  - rcloneview
  - rclone
  - rcloneview settings
  - 一般設定
  - ダークモード
  - rclone log
  - rclone configurations
tags:
  - RcloneView
  - settings
  - configuration
  - preferences
date: 2025-06-22
author: Jay
---
# 一般設定

RcloneViewの**設定**メニューは、わかりやすさとカスタマイズ性を高めるために4つのタブに分かれています。

- **一般**
- **インターフェースと通知**
- **埋め込みRclone**
- **ネットワークとその他**

各タブでは、アプリケーションの異なる部分を設定できます。以下に各セクションの詳細を示します。

---

## 🛠 一般

<img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general settings" class="img-medium img-center" />
### 言語

- **言語**: ドロップダウンから使用したいUI言語を選択します。

### 起動時の動作

- **ログイン時に起動**: システムにログインした際、RcloneViewを自動的に起動します。

:::important 自動起動: スケジュールとマウント

**ログイン時に起動**が有効な場合:

- [**ジョブスケジューラー**](/howto/rcloneview-advanced/job-scheduling-and-execution)で定義されたスケジュールジョブは、ログイン時に自動的に実行されます。
- [**マウントマネージャー**](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)で自動マウントが設定されたリモートは、RcloneView起動時に自動的にマウントされます。
:::

- **最小化して起動**: RcloneViewをシステムトレイに常駐させて起動します。

- **Synology NASの自動検出**: ローカルネットワーク上のSynology NASデバイスを自動的にスキャンします。

### リセット

- **デフォルト設定に戻す**: すべてのオプションを元のデフォルト値にリセットします。

---

## 🎛  インターフェースと通知

<img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface settings" class="img-medium img-center" />
### UIの外観

- **ダークモード**: ライトテーマとダークテーマを切り替えます。
- **テーマカラー**: 利用可能なアクセントカラーから選択します。

### ドラッグアンドドロップ

- **ドラッグアンドドロップの確認**: ドラッグアンドドロップでファイルを移動する際に確認ポップアップを表示します。

### 表示するジョブタイプ (転送ログフィルター)

転送ログパネルに表示するジョブの種類を選択します。
- **ダウンロード**
- **アップロード**
- **同期**

<img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification dialogs settings" class="img-medium img-center" />
### 通知ダイアログ

RcloneView使用中に受け取りたいポップアップ通知の種類を決定します。

- **ジョブ状態ログを表示**: 各転送ジョブ終了後に詳細なログダイアログを表示します。
- **比較完了を表示**: フォルダ比較タスクが正常に完了した際に通知します。
- **比較でファイル削除前に確認を表示**: フォルダ比較中にファイルを削除する前に確認を求めます。
- **同期完了通知を表示**: 同期操作が完了した際にメッセージを表示します。
- **ネットワークエラーダイアログを表示**: ジョブ実行中にネットワーク接続エラーが発生した場合、すぐに警告します。

---

## ⚙️ 埋め込みRclone

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded rclone settings" class="img-medium img-center" />

### 埋め込みプロセスのライフサイクル

- **アプリ終了時にrcloneを停止**: RcloneViewが閉じられた際に、埋め込まれた`rclone`プロセスを自動的に終了します。

:::caution 変更後は再起動が必要です

**埋め込みRclone**タブで、パス設定、グローバルフラグ、ログオプションなど、いずれかの設定を変更した後は、**埋め込みRcloneを再起動**をクリックして変更を適用してください。
これにより埋め込みRcloneプロセスが再起動され、現在実行中のジョブが中断される場合があります。

:::
### パス設定

- **ローカルRcloneの場所**: `rclone`バイナリへの絶対パスです。
- **ローカルRclone設定の場所**: `rclone.conf`ファイル（リモート情報を含む）へのパスです。
- **デフォルトのダウンロードフォルダ**: ダウンロードしたファイルが保存されるディレクトリです。
- **デフォルトのアップロードフォルダ**: アップロードジョブのソースとして使用されるディレクトリです。

   <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded rclone advanced options settings" class="img-medium img-center" />
### 詳細オプション

- **グローバルRcloneフラグ**: rcloneに渡す追加のフラグです（例: `--s3-directory-markers`）。
- **設定パスワード**: 暗号化されたrclone設定用のパスワードです。このパスワードを設定すると、rclone設定ファイルが暗号化されます。

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded rclone logging configuration settings" class="img-medium img-center" />
### ログ設定

- **rcloneログを有効化**: Rclone操作のファイルベースのログ記録を有効にします。
- **ログフォルダ**: ログファイルを保存するディレクトリです。
- **ログファイル名**: ログのデフォルトファイル名です。
- **ログレベル**: 詳細度レベルを選択します (DEBUG, INFO, NOTICE, ERROR)。

---

## 🌐 ネットワークとその他

<img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network etc settings" class="img-medium img-center" />

### ネットワーク

- **プロキシ設定**: プロキシを設定します（近日公開予定の機能）。
- **Rclone接続マネージャー**: アクティブなRclone接続を表示・管理します。
  → [詳細はこちら](/howto/rcloneview-basic/connection-manager)

### 診断

- **アプリケーションログ**: トラブルシューティングやバグ報告に役立つ内部ログを開きます。

---

## ✅ まとめ

これらの設定により、RcloneViewの起動時の動作、Rcloneとの連携方法、ジョブの結果やエラーの通知方法を完全に制御できます。同期をスケジュールする場合でも、ドライブを自動マウントする場合でも、ネットワークの問題をトラブルシューティングする場合でも、ワークフローに合わせて調整してください。
