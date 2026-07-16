---
slug: manage-ionos-object-storage-cloud-sync-rcloneview
title: "IONOS Object Storageを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "IONOS Object StorageをRcloneViewに接続し、完全にビジュアルなS3互換インターフェースでファイルを同期、バックアップ、転送する方法を解説します。CLIは不要です。"
keywords:
  - IONOS Object Storage
  - IONOS cloud sync
  - IONOS backup files
  - RcloneView IONOS
  - S3-compatible cloud storage Europe
  - European cloud storage GDPR
  - IONOS rclone GUI
  - sync IONOS to Google Drive
  - cloud backup IONOS
  - manage IONOS files RcloneView
tags:
  - RcloneView
  - cloud-storage
  - s3-compatible
  - european-cloud
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IONOS Object Storageを管理 — RcloneViewでファイルを同期・バックアップ

> IONOS Object StorageをRcloneViewに接続し、ヨーロッパのクラウドファイルをビジュアルに管理 — コマンドラインに触れることなく同期、バックアップ、転送が可能です。

IONOS Object Storageは、ヨーロッパ最大級のクラウドインフラプロバイダーの一つであるIONOS SEが提供するS3互換のクラウドストレージサービスです。GDPRに配慮したワークフローを運用するチームや、ヨーロッパ域内でのデータ保持を必要とするチームが、信頼性が高くコスト効率の良いオブジェクトストアとしてIONOSを選ぶケースが増えています。RcloneViewを使えば、rcloneコマンドを一切使わずに、洗練されたデスクトップGUIからIONOSへの接続、閲覧、同期、バックアップの自動化ができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## IONOS Object StorageをRcloneViewに接続する

IONOS Object StorageはS3互換APIを採用しており、Amazon S3と同じアクセスキー、シークレットキー、エンドポイント設定を受け付けます。rcloneを含め、S3をサポートするツールであれば、プロバイダー固有のアダプターなしでIONOSバケットの読み書きが可能です。

IONOSをリモートとして追加するには、**Remoteタブ**を開き、**New Remote**をクリックします。プロバイダータイプとして**Amazon S3**を選択し、IONOSコントロールパネルからIONOSのアクセスキーID、シークレットアクセスキー、リージョンのエンドポイントURLを入力します。保存すると、バケットが2パネル構成のファイルエクスプローラーにすぐに表示されます。フォルダを閲覧したり、サムネイル表示で画像をプレビューしたり、任意のファイルを右クリックしてコピー、移動、リネーム、公開リンクの生成ができます — すべて使い慣れたデスクトップインターフェースで完結します。

<img src="/support/images/en/blog/new-remote.png" alt="Adding IONOS Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

## IONOSと他のクラウドプロバイダーを同期する

RcloneViewのクラウド間転送エンジンを使えば、ローカルディスクにダウンロードすることなく、IONOSと他の任意のリモート間でデータを移動できます。GDPR規制対象の文書をIONOSにアーカイブする法務チームが、同時にそのアーカイブをBackblaze B2上の暗号化されたCryptリモートへ同期し、二次的なオフサイトバックアップとすることもできます — 一度設定するだけで、同じジョブマネージャーウィンドウから実行されます。

RcloneViewは1対N同期にも対応しています。1つのIONOSソースから複数の転送先へ同時に展開できます。500GBのキャンペーン素材を持つメディアエージェンシーは、単一のスケジュールジョブでIONOSバケットをWasabiとローカルNASの両方にミラーリングできます。同期ウィザードのチェックサムオプションにより、IONOSと任意の転送先の間でバイト単位で完全に一致するコピーが保証され、ファイルサイズ比較だけでは見逃してしまう破損も検出できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from IONOS Object Storage to another provider in RcloneView" class="img-large img-center" />

## IONOSへのスケジュールバックアップを自動化する

**RcloneView PLUS**ライセンスがあれば、任意の同期ジョブにcrontab形式のスケジュールを設定できます。ローカルフォルダからIONOSバケットへの夜間バックアップは、完全に自動化されたルーチンになります — 一度設定すれば、メインウィンドウを閉じていても、指定した時刻にRcloneViewがバックグラウンドで実行します。

スケジュールウィザードは分、時、曜日、月のフィールドを受け付け、リスト指定(1,3,5)、範囲指定(9-17)、ステップ間隔(*/2)をサポートしています。保存前に、組み込みの**Simulate schedule**ボタンで次回の実行時刻をプレビューできます。各実行後、**Job History**タブに開始時刻、所要時間、ファイル数、転送サイズ、ステータスが記録され、追加の監視ツールなしでもクリーンな監査証跡を得られます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated IONOS cloud backup jobs in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remoteタブ > New Remote**を開き、プロバイダータイプとして**Amazon S3**を選択し、IONOSコントロールパネルからIONOSのアクセスキーID、シークレットアクセスキー、エンドポイントを入力します。
3. ファイルエクスプローラーでIONOSバケットを閲覧し、アクセスを確認します。
4. **Job Manager**で同期またはバックアップジョブを作成します — 必要に応じて、夜間の自動実行のためにスケジュール機能(PLUS)を有効にできます。

IONOS Object StorageとRcloneViewを組み合わせることで、ヨーロッパのチームはGDPRに配慮したS3互換のストレージバックエンドを、ネイティブなデスクトップファイルマネージャーの使いやすさとともに利用できます。

---

**関連ガイド:**

- [RcloneViewでWasabi Object Storageを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneViewでIDrive E2クラウドストレージを管理する](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [RcloneViewでAmazon S3、Wasabi、Cloudflare R2を一元管理する](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
