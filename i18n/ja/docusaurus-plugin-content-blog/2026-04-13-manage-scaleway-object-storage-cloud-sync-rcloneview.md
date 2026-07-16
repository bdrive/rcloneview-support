---
slug: manage-scaleway-object-storage-cloud-sync-rcloneview
title: "Scaleway Object Storage を管理 — RcloneView によるクラウド同期とバックアップ"
authors:
  - tayson
description: "S3互換の認証情報を使ってScaleway Object StorageをRcloneViewに接続し、ヨーロッパのクラウドバケットを他のプロバイダーとすばやく同期しましょう。"
keywords:
  - Scaleway object storage RcloneView
  - Scaleway S3 compatible sync
  - Scaleway cloud backup
  - Scaleway rclone GUI
  - European cloud storage sync
  - Scaleway bucket transfer
  - S3 compatible cloud sync
  - Scaleway rcloneview setup
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Scaleway Object Storage を管理 — RcloneView によるクラウド同期とバックアップ

> Scaleway Object StorageはS3互換のヨーロッパ製クラウドサービスです。アクセスキー、シークレットキー、エンドポイントURLを使って、数分でRcloneViewに接続できます。

Scalewayは、複数のヨーロッパリージョンでS3互換のオブジェクトストレージを提供するフランスのクラウドプロバイダーです。GDPRに準拠したストレージを競争力のある価格で必要とするチームにとって、優れた選択肢です。RcloneViewはあらゆるS3互換プロバイダーをサポートしているため、Scalewayを接続し、バケットを閲覧し、他のすべてのクラウドリモートと並べて同期ジョブを設定できます。CLIは不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Scaleway の認証情報を取得する

RcloneViewで接続する前に、Scalewayコンソールから**アクセスキー**と**シークレットキー**を取得する必要があります。console.scaleway.comにログインし、プロジェクトまたは組織の下にある**Credentials**に移動して、新しいAPIキーを生成します。シークレットキーは一度しか表示されないため、必ずメモしておいてください。また、リージョンのエンドポイントも確認しておきましょう。これは`s3.{region}.scw.cloud`という形式に従います(例:アムステルダムなら`s3.nl-ams.scw.cloud`、パリなら`s3.fr-par.scw.cloud`)。

アクセスキー、シークレットキー、エンドポイントというこの3つの値だけで、RcloneViewでScalewayを設定できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Scaleway S3-compatible remote in RcloneView" class="img-large img-center" />

## Scaleway を RcloneView に接続する

RcloneViewを開き、**Remote Manager**に移動します。**New Remote**をクリックし、プロバイダーリストから**S3 Compatible**を選択します。設定フォームで、次の項目を入力します。

- **Provider**: Other (S3-compatible)
- **Access Key ID**: ScalewayのアクセスキーAccess Key
- **Secret Access Key**: Scalewayのシークレットキー
- **Endpoint**: リージョンのエンドポイント(例: `s3.nl-ams.scw.cloud`)

リージョンフィールドは空欄のままにするか、求められた場合はScalewayのリージョンコードを入力します。リモートを保存すると、Remote Managerに表示されます。**Open**をクリックして、File ExplorerでScalewayのバケットを閲覧します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Scaleway transfer in real time" class="img-large img-center" />

## バケットを閲覧してファイルを転送する

File Explorerには、Scalewayのバケットが最上位レベルに表示されます。任意のバケットに移動すると、そのオブジェクトとフォルダのプレフィックスが表示されます。ファイルやディレクトリを選択し、2番目のパネルで開いた別のリモート(AWS S3、Backblaze B2、あるいはローカルディレクトリなど)にコピーまたは移動できます。

大規模なデータセットの場合は、フォルダを右クリックして**Copy to**または**Move to**を使用し、一括転送を開始します。RcloneViewは転送速度と完了予定時刻を含むリアルタイムの進捗状況を表示します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Scaleway and another cloud" class="img-large img-center" />

## スケジュール同期ジョブを設定する

Scalewayと他のプロバイダー間の自動バックアップや定期的なデータパイプラインには、**Job**システムが確実に対応します。**Jobs**に移動し、**New Job**をクリックして、Scalewayをソースまたは宛先として設定します。ジョブの詳細オプションでは、帯域幅の制限を設定したり、転送の並行数を制御したり、データの整合性を確認するためのチェックサム検証を有効にしたりできます。

PLUSライセンスを使用すると、cron形式の構文でジョブをスケジュールできます。たとえば、他のクラウドからScalewayへの同期を毎晩午前2時に実行するといった設定が可能です。ジョブの結果は**Job History**に記録され、実行ごとの転送数やエラーを明確に確認できます。

## 始めましょう

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneView**をダウンロードします。
2. Scalewayコンソールから、Scalewayのアクセスキー、シークレットキー、リージョンエンドポイントを取得します。
3. **Remote Manager**を開き、**New Remote**をクリックして**S3 Compatible**を選択し、認証情報を入力します。
4. バケットを閲覧し、Scalewayとの間でバックアップを自動化する同期ジョブを作成します。

Scalewayのヨーロッパインフラは、GDPRを意識したワークフローにおいて、RcloneViewのマルチクラウドジョブシステムと相性抜群です。

---

**関連ガイド:**

- [RcloneViewでGoogle Cloud StorageをWasabiに同期する](https://rcloneview.com/support/blog/sync-google-cloud-storage-to-wasabi-rcloneview)
- [IDrive E2のクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [RcloneViewによるチェックサム検証済みクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
