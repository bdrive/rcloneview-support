---
sidebar_position: 1
description: "タイトルバー、メインメニュー、ファイルエクスプローラー、転送タブを含む、RcloneViewのレイアウトを視覚的に解説します。"
keywords:
  - rcloneview
  - rclone GUI
  - クラウドファイルマネージャー
  - リモートストレージ管理
  - ファイルエクスプローラー
  - クラウド間転送
  - ファイル同期
  - rcloneviewインターフェース
  - rcloneviewレイアウト
  - ツールバー
  - 転送ステータス
tags:
  - RcloneView
  - UI-guide
  - file-explorer
  - Remote-Storage
  - layout
  - interface
  - cloud-file-transfer
  - Remote-storage-managent
date: 2025-05-27
author: Jay
---
# RcloneViewインターフェースガイド

RcloneViewは、ローカルストレージとクラウドリモート間でファイルを閲覧、比較、転送できる直感的なレイアウトを備えています。以下は各セクションの詳細な説明です。

<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="rcloneview user interface" class="img-large img-center" />
## ① タイトルバー

アプリケーション名と標準のウィンドウ操作ボタンを表示します。

- `—`: 最小化
- `□`: 最大化 / 元に戻す
- `X`: RcloneViewを終了

## ② メインメニューバー

主要機能にアクセスするためのナビゲーションタブです。

- **`Home`** – ファイル同期・比較、ジョブスケジューリング、マルチウィンドウ対応のためのツール  
- **`Remote`** – クラウドストレージのリモートを追加、設定、マウント  
- **`Settings`** – リモート接続、一般設定、インターフェースレイアウトの管理  
- **`Help`** – 製品サポート、ライセンスの有効化、フィードバック、アップデート確認へのアクセス  

## ③ ツールバー

ツールバーは、選択されたメニュータブに応じて動的に変化します。

  ### `Home`が選択されている場合:

| ボタン        | 説明                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `Sync`        | 2つのエクスプローラーペインで選択したディレクトリ間でファイルとフォルダを同期します |
| `Compare`     | 2つのエクスプローラーペインで選択したディレクトリ間の差分を比較します           |
| `Job Manager` | よく使うリモート間で定期的な同期ジョブを作成・管理します     |
| `New Window`  | 別のRcloneデーモンインスタンスに接続する新しいRcloneViewウィンドウを開きます        |
 
### `Remote`が選択されている場合:

<img src="/support/images/en/howto/rcloneview-basic/remote-tab-toolbar.png" alt="remote tab toolbar" class="img-medium img-center" />

| ボタン           | 説明                                                                      |
| ---------------- | ---------------------------------------------------------------------------------- |
| `New Remote`     | クラウドストレージのリモートへの新しい接続を作成します                                |
| `Remote Manager` | 保存済みのリモートを表示、編集、削除します                                              |
| `Mount Manager`  | リモートをローカルドライブとしてマウントします                                                  |
| `Job Manager`    | よく使うリモート間で定期的な同期ジョブを作成・管理します |
  
### `Settings`が選択されている場合:
<img src="/support/images/en/howto/rcloneview-basic/settings-menu-toolbar.png" alt="settings menu toolbar" class="img-medium img-center" />

| ボタン             | 説明                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `Connect Manager`  | 内蔵または外部のRcloneデーモン接続を管理・切り替えします                                     |
| `General settings` | アプリケーションの言語、ファイルパス、テーマ、ドラッグ&ドロップの挙動、内蔵Rcloneオプションなどを設定します。 |
| `Layout`           | フォルダツリーとファイルリストビューのペインレイアウトを水平/垂直で切り替えます                   |
| `View count`       | ファイルエクスプローラーの表示をシングルペイン/デュアルペインで切り替えます                                                 |

### `Help`が選択されている場合:
<img src="/support/images/en/howto/rcloneview-basic/help-menu-toolbar.png" alt="help menu toolbar" class="img-medium img-center" />

| ボタン                 | 説明                           |
| ---------------------- | ------------------------------------- |
| `Check for Updates`    | 新しいバージョンが利用可能かを確認します   |
| `Feedback`             | フィードバックの送信や問題の報告を行います      |
| `Homepage`             | RcloneViewの公式サイトにアクセスします |
| `Register License Key` | PLUSライセンスを有効化します            |

## ④ ファイルエクスプローラーペイン

各ペインでは、タブ形式のインターフェースでローカルドライブやクラウドリモートを閲覧できます。  
それぞれのペインで異なる接続先を開き、それらの間で簡単にファイルを転送できます。

  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-pannel-layout.png" alt="file explorer panel layout" class="img-medium img-center" />
ペインには以下のコンポーネントが含まれます。

1. **タブバー** – 現在の接続先を表示します(例: Local Disk、myAwsS3、myGoogleDrive)  
2. **パンくずパスバー** – > 現在のフォルダパスを表示し、クリックまたは入力によるオートサジェスト付きの高速ナビゲーションをサポートします。 
3. **ペインツールバー** – クイックアクションを含みます:  
	- <img src="/support/icons/alias-icon.png" alt="alias icon" class="inline-icon" /> **エイリアスを作成(お気に入り)** — 現在のフォルダをお気に入りとして保存し、すばやくアクセスできるようにします  
	- <img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />**フォルダをマウント** — 選択したフォルダをローカルドライブとしてマウントします  
	- <img src="/support/icons/settings-icon.png" alt="settings icon" class="inline-icon" /> **リモート設定を編集** — 接続中のリモートの設定を変更します  
	- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" /> **更新** — 現在のフォルダの内容を再読み込みします
4. **フォルダツリー** – 折りたたみ可能なフォルダナビゲーター  
5. **ファイル/フォルダリストビュー** – 名前、種類、更新日時、サイズとともに内容を表示します  
6. **サマリーフッター** – ファイル/フォルダの総数と合計ファイルサイズを表示します

## ⑤ 転送ステータスタブ

同期やファイル転送操作のステータスと履歴を表示します。

| タブ             | 説明                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **`Transfer`**  | 進行中のすべてのアクティブな転送ジョブを、速度、進捗、残り時間とともに表示します |
| **`Completed`** | 完了した同期・コピージョブを、時間、サイズ、ジョブIDなどの詳細とともに一覧表示します               |
| **`Log`**       | タイムスタンプ、ジョブタイプ、メッセージ、ステータスを含むログエントリを時系列で表示します               |
## ⑥ フッター

- **バージョン情報**: 現在実行中のRcloneViewのバージョン(例: `RcloneView 0.6.301`)
- **ライセンス情報**: ライセンスの種類を示します(`FREE License` または `PLUS License`)
- **Rclone接続情報**: 接続中のrcloneインスタンス、サーバーアドレス、OSを表示します
  - 例: `Connected to rclone v1.69.1 (http://127.0.0.1:5582, windows)`
