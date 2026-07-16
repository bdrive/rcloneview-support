---
slug: manage-synology-c2-cloud-sync-backup-rcloneview
title: "Synology C2ストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "Synology C2をRcloneViewに接続して、クラウドバックアップを簡単に管理しましょう。洗練されたデスクトップGUIでファイルの同期、ジョブのスケジュール設定、転送状況の監視ができます。"
keywords:
  - Synology C2 RcloneView
  - Synology C2 バックアップ
  - Synology C2 ストレージ管理
  - Synology C2 rclone GUI
  - S3互換クラウド同期
  - Synology クラウドストレージ バックアップ
  - Synology C2 同期の自動化
  - RcloneView S3 設定
  - Synology C2 ファイル転送
  - Synology C2 スケジュールバックアップ
tags:
  - synology
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology C2ストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Synology C2はSynologyが独自に構築したクラウドストレージです。RcloneViewを使えば、コマンドを一切入力することなく、視覚的なインターフェースから管理できます。

Synology C2は、SynologyのNASユーザーのエコシステムを拡張するために設計されたクラウドストレージサービスで、rcloneベースのツールとシームレスに統合されるS3互換オブジェクトストレージを提供します。自宅でDiskStationを運用している方、中小企業のファイルサーバーを管理している方、あるいは追加のオフサイトバックアップ層が必要な方まで、RcloneViewを使えばSynology C2との間でのファイル閲覧、同期、転送の自動化を簡単に行えます。Synology C2は標準的なS3互換APIを公開しているため、主要なオブジェクトストレージプロバイダーで期待できるのと同じ信頼性の高いrcloneのパフォーマンスを、洗練されたデスクトップGUIの中で得ることができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Synology C2をS3互換リモートとして接続する

Synology C2オブジェクトストレージは標準的なS3互換APIを使用しているため、RcloneView内でリモートタイプとしてAmazon S3を選択し、Synology C2のエンドポイントを指定することで接続できます。Remoteタブを開き、New Remoteをクリックして、プロバイダーとしてAmazon S3を選択します。C2のAccess Key ID、Secret Access Key、そしてC2アカウントのリージョナルエンドポイントを入力します。これらは、ストレージを作成しアクセスキーペアを生成した後、Synology C2ポータルで確認できます。リージョンフィールドをC2のリージョンに合わせて設定し、保存します。

リモートが作成されると、他のクラウドストレージと同じようにExplorerパネルに表示されます。GUIから離れることなく、バケットやフォルダーの閲覧、ファイルサイズや更新日時の確認、入れ子になったディレクトリツリーのナビゲーションが可能です。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Synology C2 S3-compatible remote in RcloneView" class="img-large img-center" />

## ファイルの閲覧と転送

Synology C2のリモートを一方のExplorerパネルで開き、隣接するパネルにローカルドライブや別のクラウドを表示すれば、ファイルをドラッグするだけで即座に転送を開始できます。RcloneViewは何かを実行する前に操作を確認し、画面下部のTransferringタブで、ファイル数、転送バイト数、現在のスループットといったリアルタイムの進捗を表示します。

大容量のデータ、たとえば写真スタジオが2TBのRAWファイルをバックアップするようなケースでは、RcloneViewのマルチスレッドエンジンが複数のファイルを並行して移動します。ジョブのAdvanced Settingsで同時転送ストリーム数を設定すれば、ネットワーク接続を過負荷にすることなくスループットを最大化できます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into Synology C2 storage in RcloneView" class="img-large img-center" />

## 継続的なバックアップのための同期ジョブの作成

単発の転送だけでなく、RcloneViewのJob Managerを使えば、ソースフォルダーをSynology C2バケットに対してオンデマンドまたはスケジュールに沿ってミラーリングし続けるSyncジョブを定義できます。ジョブタイプとしてSyncを選択し、ソース(ローカルフォルダー、Synology NASのリモート、または別のクラウド)を選び、宛先をC2バケットに指定して、フィルタリング設定(ファイルの経過日数制限、サイズ上限、拡張子の除外など)を行います。これらはすべて、設定ファイルを編集することなく構成できます。

初回の本番同期の前に、組み込みのDry Runを実行してください。どのファイルがコピーまたは削除されるかが正確に表示されるため、数千件のファイルが対象であっても予期せぬ事態を避けられます。Job Historyには、タイムスタンプ、ファイル数、転送サイズ、ステータスコードとともに、すべての実行履歴が記録され、完全な監査証跡として機能します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Synology C2 in RcloneView" class="img-large img-center" />

## 自動バックアップのスケジュール設定(PLUSライセンス)

手間のかからないデータ保護のために、RcloneViewのPLUSライセンスではcrontab形式のスケジュール設定が利用できます。ジョブウィザードのScheduleステップで分、時、曜日の各フィールドを入力するだけで、Synology C2への同期ジョブを毎晩、毎週、あるいは任意のカスタム間隔で実行するよう設定できます。RcloneViewは設定された時刻に転送を実行し、その結果をJob Historyに記録します。これにより、バックアップが実行されたことを確認できる完全な監査証跡が得られ、たとえ端末の前を離れていても、どのファイルが転送されたかを正確に確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Synology C2 backup job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Synology C2ポータルでストレージバケットを作成し、アクセスキーペアを生成します。
3. RcloneViewでRemoteタブ > New Remoteを開き、Amazon S3を選択して、C2のAccess Key ID、Secret Access Key、リージョナルエンドポイントを入力します。
4. C2バケットをソースと並べてExplorerパネルで開き、Job ManagerでSyncジョブを作成して、まずDry Runを実行します。
5. スケジュール機能(PLUSライセンス)を有効にして、手動操作なしで毎晩または毎週のバックアップを自動化します。

Synology C2は密に統合されたオフサイトバックアップ層を提供し、RcloneViewはそれを数分で構築できるスケジュール化された監視可能なワークフローへと変えます。

---

**関連ガイド:**

- [RcloneViewでNASを複数のクラウドにバックアップする](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [RcloneViewでWasabiクラウドの同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Hyper Backupを使わずにSynologyをバックアップする — RcloneView](https://rcloneview.com/support/blog/backup-synology-without-hyper-backup-rcloneview)

<CloudSupportGrid />
