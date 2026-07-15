---
sidebar_position: 9
description: "RcloneViewがSQLiteデータベース（rclone_view.db）を保存する場所を変更し、履歴・ジョブ・マウント・UI状態のための安全な書き込み可能なフォルダを選択する方法。"
keywords:
  - rcloneview
  - database
  - rclone_view.db
  - settings
  - path settings
  - job history
  - transfer history
  - sqlite
  - backup
tags:
  - RcloneView
  - Tutorial
  - settings
  - backup
  - database
date: 2025-12-08
author: tayson
---

# データベースの保存場所を変更する

RcloneViewはコアの状態を **`rclone_view.db`** という名前のSQLiteファイルに保存します。このデータベースには転送履歴、ジョブ定義、マウント設定、ジョブ実行履歴、UI状態が記録されており、アプリが「何をしたかを記憶」し、インターフェースに「現在の状態を表示」するために必要なすべての情報が含まれています。

デフォルトでは、データベースはDocumentsフォルダに保存されます。外付けドライブや同期されたバックアップフォルダなど、別の書き込み可能な場所に移動することもできます。

<img src="/support/images/en/tutorials/database/database-windows-path.png" class="img-medium img-center" alt="Default database path on Windows" />

## OS別のデフォルトのデータベースパス

| プラットフォーム | デフォルトパス                               |
| -------- | ------------------------------------------ |
| Windows  | `C:\Users\<user>\Documents\rclone_view.db` |
| macOS    | `/Users/<user>/Documents/rclone_view.db`   |
| Linux    | `/home/<user>/Documents/rclone_view.db`    |

## データベースの場所を変更する方法

RcloneView内で、書き込み可能な任意のフォルダ（ローカルまたは外部）を直接選択できます。

### ステップ1 — 設定を開く

- 上部メニューから **設定 → 一般設定** に移動します。
  <img src="/support/images/en/tutorials/database/database-settings-menu.png" class="img-medium img-center" alt="Open Settings menu" />

### ステップ2 — 組み込みRclone → パス設定

- 設定ウィンドウで **組み込みRclone → パス設定** を開きます。
- **データベースフォルダ** をクリックして、`rclone_view.db` の新しい保存場所を選択します。
  <img src="/support/images/en/tutorials/database/database-settings-dlg.png" class="img-medium img-center" alt="Database folder picker" />

- フォルダアイコンを使って対象のディレクトリを参照します。RcloneViewはそこに `rclone_view.db` を配置します。

## 権限とパスに関する注意事項

RcloneViewは、選択したフォルダに一時ファイルを作成することで書き込み権限をテストします。特定のシステムフォルダは標準ユーザーの書き込みをブロックし、警告がトリガーされます。

- **Windows**: `C:\Program Files`、`C:\Windows` など
- **macOS**: `/Applications`、`/System`、`/usr` など
- **Linux**: `/usr`、`/opt`、`/etc` など

<img src="/support/images/en/tutorials/database/database-settings-warning.png" class="img-medium img-center" alt="Permission warning" />

警告が表示された場合は、完全な書き込みアクセス権のある別のパスを選択してください。

## 推奨される保存場所

- `C:\Users\<user>\Documents`
- `C:\Users\<user>\AppData\Roaming`
- 書き込み権限を持つ、ご自身が所有する任意の個人用フォルダ
- 自分が管理する外付けドライブ（書き込みアクセスを確認してください）

低速な場所や権限が制限された場所は避けてください。また、ネットワーク共有はレイテンシが発生する可能性がある点にご注意ください。

## データベース管理のヒント

- システム保護されたフォルダは避けてください。
- クラウド同期フォルダを使用する場合は、小さいファイルを確実に同期できるサービス（OneDrive、Dropboxなど）を優先してください。
- `rclone_view.db` を定期的にバックアップしてください。
- 稼働中のデータベースには高レイテンシのネットワークパスを使用しないでください。

## クイックサマリー

| 項目             | 詳細                                                    |
| ---------------- | ---------------------------------------------------------- |
| データベースファイル    | `rclone_view.db`                                           |
| 保存内容   | 転送履歴、ジョブ、マウント、UI状態                   |
| デフォルトパス     | ユーザーのDocumentsフォルダ                                      |
| パスの変更      | 設定 → 組み込みRclone → パス設定                 |
| 権限チェック | 一時ファイルの書き込みテスト                                       |
| 推奨される保存場所   | ユーザーが書き込み可能なフォルダ（Documents、Roaming、外付けドライブ） |

RcloneViewを安定して動作させ、履歴を確実に保持するために、`rclone_view.db` の保存場所には安定した書き込み可能な場所を選んでください。
