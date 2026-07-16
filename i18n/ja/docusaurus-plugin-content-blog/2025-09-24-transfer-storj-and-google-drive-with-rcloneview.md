---
slug: transfer-storj-and-google-drive-with-rcloneview
title: "RcloneViewでStorjとGoogle Drive間のファイルを転送する"
authors:
  - tayson
description: "再ダウンロードせずにStorjとGoogle Drive間でデータを移動—RcloneViewのドラッグ&ドロップ、Compare、Sync、そしてOAuthとStorjアクセスグラントによるスケジュールJobを活用しましょう。"
keywords:
  - storj to google drive
  - google drive to storj
  - rcloneview
  - cloud to cloud transfer
  - access grant
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - resumable uploads
  - s3 compatible storage
tags:
  - cloud-migration
  - storj
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでStorjとGoogle Drive間のファイルを転送する

> コマンドラインを使わずに**Storj**と**Google Drive**間でフォルダを移動しましょう。RcloneViewは左右に並んだExplorerペイン、Compare、Sync、そしてスケジュールJobを提供し、クラウド間転送を高速かつ予測可能に保ちます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜStorj ↔ Google DriveにRcloneViewを使うのか？

- Google DriveはOAuthログイン、Storjはアクセスグラントに対応（手動CLI操作は不要）。
- 進捗ログと再試行機能付きのマルチスレッド・再開可能な転送。
- ドラッグ&ドロップで移動できる2ペインExplorer。
- コピーや削除の前に差分をプレビューできるCompare。
- フィルターとドライランに対応したSync、再利用可能なJobとスケジューリング。
- 作業時間中も快適に保つための帯域制限とスロットリング制御。

RcloneViewはrcloneをベースに構築されているため、スクリプトを書かずに信頼性と高度なオプションを利用できます。

## 始める前に

- **Storjのアクセスグラント**（暗号化スコープを含む）を用意し、安全に保管してください。
- Google Driveにサインインし、1ユーザーあたり1日750GBのアップロード上限に注意してください。
- 最新のRcloneViewビルドをインストールしてください: [ダウンロード](https://rcloneview.com/src/download.html)。
- 大容量転送の場合は有線接続を推奨し、RcloneViewを実行したままにしてください。

## ステップ1: クラウドリモートを接続する

1. **リモート → + 新規リモート**を開きます。
2. **Storj**を選択し、**アクセスグラント**を貼り付けます。（別途暗号化パスフレーズを使用する場合はオプションに追加してください。）リモートを保存します。
3. **Google Drive**についても同様の手順を行い、**接続**をクリックしてOAuthブラウザログインを完了します。
4. 両方のリモートがRemote Managerに表示されていることを確認します。

👉 詳細はこちら: [Google Driveリモートの追加](/howto/#step-2-adding-remote-storage-google-drive-example)  
👉 リモートの管理: [Remote Manager](/howto/rcloneview-basic/remote-manager/)

## ステップ2: 両方のリモートをExplorerペインで開く

1. **Browse**に移動します。
2. 左ペインで**+**をクリックし、**Storj**リモートを開きます。
3. 右ペインで**+**をクリックし、**Google Drive**リモートを開きます。
4. 移動したいソースとデスティネーションのバケット／フォルダに移動します。

<!-- Image placeholder: add `/support/images/en/tutorials/open-storj-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/tutorials/open-storj-and-google-drive-remotes.png" alt="open storj and google drive remotes" class="img-medium img-center" />

## Storj ↔ Google Drive転送のための4つの方法

### 方法1: ペイン間のドラッグ&ドロップ

1. Storjペインでファイルまたはフォルダを選択します。
2. それらをGoogle Driveペインにドラッグします（またはその逆）。
3. **Transfer**タブで進捗を確認し、必要に応じて一時停止／再開します。

👉 詳細はこちら: [リモートストレージの閲覧と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 方法2: Compareでコピーまたは削除する

1. 左側にソース、右側にデスティネーションを開きます。
2. **Compare**をクリックします。
3. RcloneViewが固有の項目、サイズの違い、一致する項目をハイライト表示します。
4. 移動する項目を選択し、**Copy →**または**← Copy**を選択します。
5. 重複や古いデータを整理する際は**Delete**を慎重に使用してください。

👉 詳細はこちら: [フォルダ内容の比較](/howto/rcloneview-basic/compare-folder-contents)

### 方法3: SyncまたはJobとして保存する

1. Storjのソースと Google Driveのデスティネーションを選択します。
2. **Sync**をクリックし、一方向または双方向の同期を選択します。
3. 変更内容をプレビューし、フィルター（含める／除外する）を調整してから開始します。
4. **Save to Jobs**をクリックすると、後で設定を再利用できます。

👉 詳細はこちら:

- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期Jobの作成](/howto/rcloneview-basic/create-sync-jobs)
- [Jobの実行と管理](/howto/rcloneview-basic/execute-manage-job)

### 方法4: 定期的な同期Jobをスケジュールする

1. **Job Manager → Add Job**を開きます。
2. **Storj**をソース、**Google Drive**をデスティネーションに設定します（またはその逆）。
3. スケジュール（1時間ごと、毎日、毎週、またはcron形式）を選択します。
4. Jobを有効にし、RcloneViewに自動実行させます。
5. ログと履歴を確認して、成功したことを検証します。

👉 詳細はこちら: [Jobのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

## スムーズな転送のためのヒント

- 大規模な同期を行う前に**ドライラン**で変更内容を確認しましょう。
- Storjでは、セキュリティ向上のためアクセスグラントのスコープをバケット単位など狭く設定してください。
- アップロードが停滞する場合は、同時実行数を減らすか帯域制限を設定してスロットリングを抑えてください。
- Google Driveの1日の上限に近づいたら、Jobを複数日または複数アカウントに分割してください。
- 再試行、速度、APIメッセージについては**Transfer**タブを常に確認してください。

## まとめ

RcloneViewを使えば、Storj ↔ Google Drive間の移行はシンプルになります。リモートを接続し、左右に並べて閲覧し、比較・同期、または定期的なJobをスケジュールする—すべてコマンドラインなしで行えます。

<CloudSupportGrid />
