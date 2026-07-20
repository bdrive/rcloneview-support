---
sidebar_position: 7
description: "RcloneViewのGUIを使って、Box と Google Drive の間でファイルをシームレスに転送・同期する方法を学びましょう。ドラッグ&ドロップ、フォルダ比較、ジョブスケジューリングを特徴としています。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - Box
  - google drive
  - box to google drive
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - box
  - google-drive
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Box ↔ Google Drive ファイル転送ガイド

**Box** や **Google Drive** のようなクラウドストレージプラットフォームには、それぞれ独自のメリットがあります。Boxは高度なセキュリティとワークフロー機能を備えた企業向けコラボレーションに適しており、Google DriveはGoogle Workspaceとシームレスに統合され、無料で大容量のストレージを提供します。しかし、両方のプラットフォームでファイルを管理するのは煩雑になりがちです。特にデータを両者間で移行する必要がある場合はなおさらです。

**RcloneView** を使えば、直感的なGUIでBoxとGoogle Driveの間で**双方向にファイルを転送**でき、コマンドラインは不要です。

  
<img src="/support/images/en/tutorials/transfer-files-between-box-and-google-drive.png" alt="transfer files between box and google drive" class="img-medium img-center" />

## **マルチクラウド転送にRcloneViewを使う理由**

RcloneViewは、以下のような機能で複雑なクラウド転送をシンプルにします。

- BoxとGoogle DriveのためのセキュアなOAuth連携
- クラウド間のドラッグ&ドロップによるファイル転送
- 転送前に差分をプレビューできるフォルダ比較ツール
- 同期(Sync)と繰り返し転送・バックアップのスケジュール設定
- ドライラン(事前確認)プレビュー、フィルター、高度な転送オプション
- 進捗ログ付きのバックグラウンド転送モニタリング

ファイルを手動でダウンロードしてから再アップロードするのではなく、RcloneViewはAPIベースの直接転送を活用するため、ワークフローがより速く、より信頼性の高いものになります。

## 🔄 ファイル転送: Box ↔ Google Drive

### ステップ1: クラウドリモートを接続する

1. **RcloneView** を起動し、**Remote** メニューから **`+ New Remote`** を選択します。
2. **`Provider`** タブで **Box** を検索して選択します。
3. 表示に従ってOAuthログインを完了します。
4. **Google Drive** についても同じ手順を繰り返します。


👉 詳しくはこちら:

- [Boxリモートの追加](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Google Driveリモートの追加](/howto/#step-2-adding-remote-storage-google-drive-example)

### ステップ2: リモートを左右に並べて開く

1. Explorerペインの **Browse** タブに移動します。
2. 片方のペインでプラスアイコン `+` をクリックし、**Box** リモートを選択します。
3. もう一方のペインで `+` をクリックし、**Google Drive** リモートを選択します。
4. 両方のリモートが左右に並んで表示され、簡単にドラッグ、コピー、または同期ができるようになります。

これで両者の間でシームレスに転送を行えるようになりました。

<img src="/support/images/en/tutorials/open-box-and-google-drive-remotes.png" alt="open box and google drive remotes" class="img-medium img-center" />

### 📌 ファイル転送の4つの方法

RcloneViewでは、BoxからGoogle Driveへデータを移動・同期するための柔軟な方法がいくつも用意されています。ワークフローに合った方法を選んでください。

#### 🖱️ 方法1: Explorerペイン間のドラッグ&ドロップ

1. **RcloneView** を開き、**Browse** タブに移動します。
2. BoxとGoogle Driveの両方のリモートが左右に表示されていることを確認します。
3. Boxペインから**ファイルまたはフォルダをドラッグ**し、Google Driveペインに**ドロップ**します。
4. 転送は自動的に開始されます。進捗は **`Transfer`** Logsタブで確認できます。

この直感的なドラッグ&ドロップインターフェースにより、コマンド不要でクラウド間転送が簡単に行えます。

👉 詳細はこちら: [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 方法2: フォルダの内容を比較し、コピーまたは削除する

1. 両方のExplorerペインで、比較したいフォルダに移動して選択します(左: Box、右: Google Drive)。
2. メインメニューの **`Compare`** ボタンをクリックします。
3. RcloneViewは以下をハイライト表示します。
   - 片側にのみ存在するファイル
   - 同じ名前でサイズが異なるファイル
   - 同一のファイル
4. 転送または削除したいファイルを選択します。
5. 左→右にファイルを転送するには **`Copy →`** をクリックします。右→左に転送するには **`← Copy`** を使用します。ファイルを削除するには **`Delete`** をクリックします。
6. 進捗とサマリーの更新はステータスバーに表示されます。

視覚的な比較により、エラーを防ぎ、意図したものだけを移動できるようになります。

👉 詳しくはこちら: [フォルダ内容の比較ガイド](/howto/rcloneview-basic/compare-folder-contents)

  
#### 🔁 方法3: SyncまたはJobを使う

1. Explorerペインで、同期したい **Box** フォルダと **Google Drive** フォルダを選択します。
2. `home` メニューの **`Sync`** ボタンをクリックします。
3. 同期オプション(片方向または双方向)を選択し、実行内容をプレビューして確定します。
4. RcloneViewが同期を実行し、進捗が **`transfer`** ログタブに表示されます。

- 繰り返しまたはスケジュールされた転送を行う場合:
  1. Syncモーダルで **`Save to Jobs`** をクリックするか、**`Job Manager`** → **`Add Job`** を開きます。
  2. 転送元、転送先、オプションを設定します。
  3. 保存して手動で実行するか、スケジュールを設定します。

👉 詳しくはこちら:
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)

  
#### ⏰ 方法4: 自動同期ジョブをスケジュールする

1. Explorerペインで、同期を維持したい **Box** と **Google Drive** のフォルダを選択します。
2. **`Home`** または **`Remote`** メニューから **`Job Manager`** を開き、**`Add Job`** をクリックします。
3. 転送元と転送先を確認します。
4. スケジュールエディタを使って、ジョブを実行するタイミングを設定します。保存前にスケジュールをプレビューできます。
5. 保存してスケジュールジョブを有効にします。

RcloneViewは指定した時刻に同期を実行します。実行の詳細やログは **`Job History`** で確認でき、完了時には通知を受け取れます。

👉 詳しくはこちら: [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

  
## ✅ まとめ

一度きりのデータ移行でも、継続的な同期の維持でも、RcloneViewはBoxとGoogle Driveの間で高速・安全・信頼性の高いファイル転送を実現し、手動でのダウンロードやコマンドラインツールを不要にします。

  
ぜひ試して、マルチクラウドのワークフローを効率化しましょう!

  
## 🔗 関連ガイド

- [Boxリモートの追加方法](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Google Driveリモートの追加方法](/howto/#step-2-adding-remote-storage-google-drive-example)
- [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダ内容の比較](/howto/rcloneview-basic/compare-folder-contents)
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)
- [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

  

<CloudSupportGrid />
