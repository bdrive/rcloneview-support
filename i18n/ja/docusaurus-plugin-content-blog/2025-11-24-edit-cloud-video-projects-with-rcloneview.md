---
slug: edit-cloud-video-projects-with-rcloneview
title: "RcloneViewでクラウド動画プロジェクトを編集:ドライブをマウントし、メディアを同期し、タイムラインを保護する"
authors:
  - tayson
description: "Google Drive、Dropbox、S3、またはNASを編集用ドライブとしてマウントし、Premiere/Final Cutのプロジェクトを同期し続け、RcloneViewでタイムラインの保護を自動化する。"
keywords:
  - rcloneview
  - video editing
  - premiere pro
  - final cut pro
  - cloud mount
  - vfs cache
  - cloud backup
  - media workflow
  - multi cloud
tags:
  - RcloneView
  - media
  - cloud-storage
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでクラウド動画プロジェクトを編集:ドライブをマウントし、メディアを同期し、タイムラインを保護する

> ドライブを持ち運んだり、ダウンロードを待ったりするのはもう終わりです。RcloneViewを使えば、クラウドストレージを編集用ドライブとしてマウントし、複数の場所で映像を同期し、タイムラインの保護を自動化できます。

現代の撮影現場では、カメラ、レコーダー、リモートオフィスに同時に映像が届きます。これらをすべて手動で移動すると、編集者の作業が遅くなり、リンク切れのリスクも高まります。RcloneViewは実績あるrcloneエンジンをシンプルなUIで包み込み、クラウドをローカルディスクのようにマウントし、プロキシをステージングし、成果物を同期し、問題が発生した際に迅速に復旧できるようにします。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## クラウドファーストの編集が理にかなっている理由

- 回転式ディスクを発送することなくチームを同期状態に保てます。全員が同じソースをマウントします。
- マスターをコールドストレージに保管したまま、編集者の近くにプロキシをステージングすることで、タイトなスケジュール内に収められます。
- スケジュール同期とチェックサム検証によりヒューマンエラーを削減し、リンク切れを減らします。

## NLE向けに信頼性の高いクラウドマウントをセットアップする

安定したマウントはクラウド編集の要です。RcloneViewなら数クリックで設定できます。

- リモートを接続:`+ New Remote`からGoogle Drive、Dropbox、S3/Wasabi/R2、またはNASを追加します。ガイド:[[Google Driveを追加](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)、[AWS S3およびS3互換ストレージを追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 
  

- マウントを作成:Remote ExplorerまたはMount Managerを使えば簡単です:[クラウドストレージをローカルドライブとしてマウント](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- 編集に適したパスを選ぶ:Windowsではドライブレター(`cmount`経由で`X:`)、macOSでは`/Volumes/Cloud/Edit`、Linuxでは`/mnt/edit`。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## Compare、Sync、Schedulerでプロジェクトを安全に保つ

編集作業は煩雑になりがちですが、自動化がそれを安全に保ちます。

- 同期前にビジュアル差分を確認:**Compare**を実行すれば、CLIフラグなしで映像の欠落や新しいレンダーを見つけられます:[フォルダ内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)。

 <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 
    

- 同期:`Projects/`をS3にプッシュしつつ、Driveから最新のプロキシをプルする、繰り返し実行可能なジョブを作成します:[リモートストレージを即座に同期する](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)、[同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)、[ジョブの実行と管理](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 
  

- 保護をスケジュール:編集者がログオフした後に夜間同期を実行します。ジョブが失敗した場合、RcloneViewは自動的にリトライし、ログを記録するので素早く再開できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  
  

## 複数のクラウド間でプロキシと成果物を共有する

関係者ごとに必要なコピーは異なります。

- マスターをWasabiやNASに保管しつつ、軽量なプロキシをレビュアー向けにDropboxやDriveへ送信します。
- 送信先ごとに個別の同期ジョブを使い、帯域幅を多く使うマスターは時間外に、プロキシは1時間ごとに実行します。
- 保存済みプリセットでフォルダ構成を一貫させます。パスが一致していればNLEはきれいにリンクし直せます。

## 監視と迅速な復旧

転送が遅くなったり失敗したりした際に把握しておく必要があります。

- **Transfer Monitor**でスループットをリアルタイムに監視:[リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />. 
  
- **Job History**を確認してチェックサムとスキップされたファイルを確認:[ジョブ履歴](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)。


## ローカルのように感じられるクラウドドライブ

RcloneViewはクラウドストレージを編集対応ドライブのように扱えるようにします:一度マウントすれば、同期を自動化し、すべてのバージョンを保護し続けられます。チームはコピーの管理に追われることなく、編集作業に集中できます。

<CloudSupportGrid />
