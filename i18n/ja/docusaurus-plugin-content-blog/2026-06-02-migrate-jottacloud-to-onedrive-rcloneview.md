---
slug: migrate-jottacloud-to-onedrive-rcloneview
title: "JottacloudからOneDriveへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewを使ってJottacloudのすべてのファイルをMicrosoft OneDriveへ移行するステップバイステップガイド。コマンドラインツールを一切使わずにライブラリ全体を移動できます。"
keywords:
  - jottacloud to onedrive migration
  - transfer jottacloud to onedrive
  - migrate jottacloud to onedrive
  - cloud to cloud transfer gui
  - jottacloud migration tool
  - onedrive cloud migration
  - rcloneview jottacloud onedrive
  - cloud storage migration guide
tags:
  - jottacloud
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# JottacloudからOneDriveへ移行 — RcloneViewでファイルを転送

> コマンドラインに触れることなく、Jottacloudのライブラリ全体をMicrosoft OneDriveへ移動しましょう。RcloneViewが進捗の完全な監視とファイル整合性の検証を伴うクラウド間転送を処理します。

多くのチームは、Microsoft 365への統合を進める際にJottacloudからOneDriveへ切り替え、より緊密なOfficeアプリ連携と幅広いエンタープライズツールを活用します。課題は、長年蓄積したファイルを大規模かつ正確に転送することです。RcloneViewのクラウド間ジョブエンジンを使えば、両方のリモートをマッピングし、検証付きコピーを実行し、内蔵のフォルダ比較機能で完全性を確認できます — すべてを単一のGUIから行い、rcloneの設定ファイルを手動で編集する必要はありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## JottacloudとOneDriveをリモートとして接続する

RcloneViewを開き、**Remote**タブに移動して**New Remote**をクリックします。プロバイダー一覧からJottacloudを選択し、画面の指示に従ってアカウントを認証します。

次に、OneDrive用の2つ目のリモートを追加します。OneDriveはブラウザベースのOAuthを使用します — RcloneViewが自動的にデフォルトブラウザを開き、アカウントのサインインを行います。認証が完了すると、接続情報はrcloneの設定に保存され、Explorerパネルからすぐにアクセスできるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Jottacloud remote in RcloneView Remote Manager" class="img-large img-center" />

両方のリモートを接続したら、RcloneViewのデュアルパネルExplorerで両者を並べて開きます。ソースフォルダを右クリックして**Get Size**を選択し、開始前にデータ量の合計を確認しましょう — これにより明確な移行の基準値が得られ、転送後の予期しない差異を見つけやすくなります。

## Job Managerでコピージョブを作成する

**Home → Job Manager**に移動し、**Add Job**をクリックします。Jottacloudのルート(またはサブフォルダ)をソースに、対象のOneDriveフォルダを宛先に設定します。初回移行のジョブタイプには**Copy**を選択してください — これによりソースファイルはそのまま保持され、元データに触れることなくOneDriveへの投入が行われます。

ウィザードのステップ2では、**Number of file transfers**を増やして複数ファイルを同時に転送しましょう。これにより大規模なライブラリの移行にかかる総時間を大幅に短縮できます。**Enable checksum**を有効にすると、転送された各ファイルがファイル名だけでなくハッシュとサイズによって検証されます — 一度限りの移行において、ソースを廃止する前にサイレントなデータ破損を検出するために不可欠な設定です。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud-to-cloud migration job in RcloneView Job Manager" class="img-large img-center" />

本番実行の前に、**Dry Run**をクリックしてコピー対象のファイルをプレビューします。数千のネストされたフォルダを含むプロジェクトアーカイブの場合、このプレビューステップによってパス長の問題や過大なファイルを、転送途中の失敗を招く前に発見できます。

## 進捗と転送速度を監視する

ジョブが開始されると、画面下部のInfo Viewにある**Transferring**タブに、個々のファイル名、転送速度、転送済みバイト数の合計、進行中のファイル数などのリアルタイムの進捗が表示されます。すでに転送済みのファイルを破損させることなく、いつでもジョブをキャンセルできます — RcloneViewの基盤となるrcloneエンジンが部分転送を適切に処理し、再開されたCopyジョブは、サイズとチェックサムが一致する宛先の既存ファイルをスキップします。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Jottacloud to OneDrive transfer in RcloneView" class="img-large img-center" />

夜間にかけて実行する非常に大規模な移行の場合は、システムトレイを使ってRcloneViewをバックグラウンドで動作させ続けましょう。ジョブ完了通知が転送終了時に知らせてくれます。

## フォルダ比較で完全性を検証する

コピージョブが完了したら、Homeタブから**Folder Compare**を開きます。左パネルにJottacloudのソースを、右パネルにOneDriveの宛先を設定します。RcloneViewは両側をスキャンし、転送されなかった左側のみのファイル、破損した可能性のあるサイズ違いのファイル、右側のみに存在するファイルをハイライト表示します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Jottacloud source and OneDrive destination to verify migration completeness" class="img-large img-center" />

残っている左側のみのファイルには**Copy Right**を使用して転送を完了させます。比較結果に左側のみのファイルやサイズ違いのエントリが表示されなくなったら、Jottacloudのコンテンツは完全かつ正確にOneDriveへミラーリングされており、Microsoft 365のワークフローで利用できる状態になっています。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ → New RemoteからJottacloudアカウントを追加し、指示に従います。
3. Remoteタブ → New Remote(ブラウザOAuthサインイン)からOneDriveアカウントを追加します。
4. Job ManagerでCopyジョブを作成し、チェックサムを有効にしてから、まずDry Runを実行します。
5. 転送後、Folder Compareを開いて左側のみのファイルや不一致のファイルがゼロであることを確認します。

クリーンなJottacloudからOneDriveへの移行は、1回のセッションで実現できます — スクリプトは不要、予期しない事態も起こらず、ソースを廃止する前に信頼できる検証済みの結果が得られます。

---

**関連ガイド:**

- [Jottacloudクラウドストレージを管理する — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [JottacloudからGoogle Driveへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [OneDriveクラウドストレージを管理する — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
