---
slug: transfer-onedrive-and-google-drive-with-rcloneview
title: "RcloneViewでOneDriveとGoogle Drive間のファイルを転送する"
authors:
  - tayson
description: "ダウンロードなしでMicrosoft OneDriveとGoogle Drive間でファイルを移動—RcloneViewのドラッグ&ドロップ、Compare、Sync、スケジュールJobsで信頼性の高いクラウド間転送を実現。"
keywords:
  - onedrive to google drive transfer
  - google drive to onedrive migration
  - rcloneview
  - cloud to cloud sync
  - drag and drop transfer
  - scheduled sync jobs
  - compare folders
  - resumable uploads
  - oauth login
tags:
  - RcloneView
  - cloud-migration
  - onedrive
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでOneDriveとGoogle Drive間のファイルを転送する

> ギガバイト単位のファイルを再ダウンロードせずにクラウドを切り替えましょう。RcloneViewは2ペインのExplorer、Compare、Sync、スケジュールJobsを提供するので、OneDrive ↔ Google Drive間の移動を高速かつ予測可能に保てます—CLIは不要です。


<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## OneDrive ↔ Google DriveにRcloneViewを使う理由

- 両方のクラウドで安全なOAuthログインが可能。トークンを貼り付ける必要はありません。
- 進行状況ログ、リトライ、帯域幅制限付きの再開可能な転送。
- スクリプトなしでドラッグ&ドロップ移動ができる2ペインExplorer。
- コピー前に新規/変更されたファイルを強調表示するCompare。
- 一方向または双方向のSyncに加え、再利用可能なJobsとスケジュール機能。
- 移動対象を正確に制御できるオプションのドライランとフィルター。

RcloneViewはrcloneの上にガイド付きUIを重ねているため、大規模な移行でも信頼性を保ちながら、エンジニアは必要に応じて高度なスイッチも利用できます。

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="transfer files between onedrive and google drive" class="img-large img-center" />


## 始める前に

- OneDriveとGoogle Driveの両方のアカウントにサインインします。
- 最新ビルドからRcloneViewをインストールします: [ダウンロード](https://rcloneview.com/src/download.html)。
- クラウドのクォータと1日あたりのAPI制限を確認します（Google Driveはユーザーごとにアップロードで1日750GBの上限を適用します）。
- 最高のスループットを得るには、長時間のジョブ中はRcloneViewを実行したままにし、有線ネットワークを優先してください。

## ステップ1: 両方のクラウドリモートを接続する

1. **Remote → + New Remote**を開きます。
2. **Provider**で**OneDrive**を選び、**Connect**をクリックしてMicrosoftのOAuthサインインを完了します。
3. **Google Drive**でも同様に行い、OAuthフローを完了します。
4. 両方のリモートがRemote Managerに表示されることを確認します。

👉 詳細はこちら: [Google Driveリモートの追加](/howto/#step-2-adding-remote-storage-google-drive-example)

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Remote Manager showing connected cloud remotes" class="img-large img-center" />

## ステップ2: Explorerペインで両方のリモートを開く

1. **Browse**タブに移動します。
2. 左ペインで**+**をクリックし、**OneDrive**リモートを開きます。
3. 右ペインで**+**をクリックし、**Google Drive**リモートを開きます。
4. 同期する予定のソースフォルダと宛先フォルダを参照します。


## ファイルを移動する4つの方法

### 方法1: Explorerペイン間でドラッグ&ドロップ

1. OneDriveペインでファイルまたはフォルダを選択します。
2. Google Driveペインへドラッグします（逆方向も可能）。
3. **Transfer**タブで進行状況を確認します。必要に応じて一時停止/再開できます。

👉 詳細はこちら: [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### 方法2: Compareでコピーまたは削除

1. 左側でソースフォルダ、右側で宛先フォルダを開きます。
2. ツールバーの**Compare**をクリックします。
3. RcloneViewが固有のファイル、サイズの不一致、一致項目を強調表示します。
4. 移動する項目を選択し、**Copy →**または**← Copy**を選びます。
5. 古いデータを整理する際は**Delete**を慎重に使用してください。

👉 詳細はこちら: [フォルダ内容の比較](/howto/rcloneview-basic/compare-folder-contents)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Google Drive folders" class="img-large img-center" />

### 方法3: SyncまたはJobとして保存

1. OneDriveのソースとGoogle Driveの宛先を選択します。
2. **Sync**をクリックし、一方向（OneDrive → Google Drive）または双方向を選びます。
3. プレビューを確認し、フィルター（include/exclude）を調整してから開始します。
4. 同じ同期を後で再利用するには**Save to Jobs**をクリックします。

👉 詳細はこちら:

- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期Jobの作成](/howto/rcloneview-basic/create-sync-jobs)
- [Jobの実行と管理](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure sync job between OneDrive and Google Drive" class="img-large img-center" />

### 方法4: 自動同期ジョブをスケジュールする

1. **Job Manager → Add Job**を開きます。
2. **OneDrive**をソース、**Google Drive**を宛先として設定します（または逆方向）。
3. スケジュール（毎時、毎日、毎週、またはcron形式）を選択します。
4. ジョブを保存して有効化します。RcloneViewが自動的に実行します。
5. 検証のためログと履歴を確認します。

👉 詳細はこちら: [Jobのスケジュールと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to Google Drive sync job" class="img-large img-center" />

## マルチクラウド転送を円滑にするヒント

- 大規模な同期の前には**ドライラン**を使って変更内容を確認してください。
- 共有OneDrive/Driveフォルダの場合、両側で編集権限があることを確認してください。
- 就業時間中はスロットリングを避けるために**帯域幅制限**を使用してください。
- Google Driveの1日750GBの上限に達した場合は、ジョブを日またはアカウントに分割してください。
- リトライとスループットを追跡するため、**Transfer**タブを開いたままにしてください。

## まとめ

RcloneViewは**OneDrive**と**Google Drive**間のダウンロード/再アップロードの手間を解消します。左右並びのブラウジング、Compare、Sync、再利用可能なJobs、スケジュール機能により、コマンドラインなしで一度限りの移動や定期的なバックアップを自信を持って実行できます。

<CloudSupportGrid />
