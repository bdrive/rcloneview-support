---
sidebar_position: 13
description: "RcloneViewでアプリロックを有効にして、起動時にパスワードを要求し、リモート、転送、ジョブ、マウント、内部データベースを保護します。"
keywords:
  - rcloneview
  - アプリロック
  - パスワード
  - セキュリティ
  - rclone_view.db
  - ジョブ履歴
  - 転送履歴
  - 設定
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - password
date: 2025-12-08
author: tayson
---

# アプリロック（パスワード保護）を使用する

**アプリロック**は、RcloneViewの起動時または再表示時にパスワードを要求し、リモート、転送記録、ジョブ、マウント情報、ジョブ履歴、内部データベース（`rclone_view.db`）を保護します。複数のユーザーが同じマシンにアクセスする可能性のある共有PCや社内PCに最適です。

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## アプリロックを使う理由

- RcloneViewのジョブ、マウント、転送履歴を非公開に保つ。  
- 共有PCやオフィス環境に適している。  
- 機密性の高い同期/マウント操作や自動化ジョブを保護する。  
- 自動ジョブがバックグラウンドで実行中でもセキュリティレイヤーを追加できる。

## アプリロックを有効にする方法

### ステップ1 — 設定を開く

- 上部メニューから**設定 → 一般設定**に移動します。  
  <img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open settings menu" />

### ステップ2 — 一般タブでアプリロックをオンにする

- **一般**で**アプリロックを有効にする**にチェックを入れます。  
- 使用したいパスワードを入力します。  
- **閉じる**をクリックして保存します。  

<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

## アプリロックの仕組み

アプリロックが有効な場合、RcloneViewを起動またはウィンドウを再表示すると、アクセスが許可される前にパスワードの入力が求められます。

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## アプリロックのリセット（アプリのリセット）

パスワードを忘れた場合は、パスワード入力画面で**アプリのリセット**をクリックします。

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

**警告：** アプリのリセットを行うと、RcloneViewの内部データがすべて削除されます。

- アプリロックのパスワード  
- すべての設定値  
- 転送履歴  
- ジョブ定義  
- ジョブ履歴  

リセットされないもの：**rcloneの設定**（`rclone.conf`）はそのまま残るため、リモートの定義はそのまま保持されます。

## 推奨される使用場面

- 共有PCや公共のPC。  
- 企業や組織の環境。  
- 多数の自動化ジョブを実行しており、改ざんを防ぎたい場合。  
- ジョブ/転送履歴や内部データを保護する必要がある場合。

## まとめ

| 項目 | 説明 |
| --- | --- |
| 機能 | RcloneViewの起動/再表示時にパスワードを要求 |
| 保護対象 | 設定、ジョブ、転送履歴、DBファイル |
| トリガー | アプリの起動または再表示 |
| リセット | **アプリのリセット**で内部データを削除、`rclone.conf`は保持 |
| 最適な用途 | 共有PC、高セキュリティ環境 |

アプリロックは小さなスイッチでありながら強力な防御を提供します。有効にして、RcloneViewの活動履歴を非公開に保ちましょう。
