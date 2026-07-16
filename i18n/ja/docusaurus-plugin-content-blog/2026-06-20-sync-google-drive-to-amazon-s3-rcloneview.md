---
slug: sync-google-drive-to-amazon-s3-rcloneview
title: "Google DriveをAmazon S3に同期 — RcloneViewによる自動クラウドバックアップ"
authors:
  - jay
description: "RcloneViewを使ってGoogle DriveをAmazon S3に同期します。自動化されたクラウド間バックアップジョブを設定し、転送をスケジュールし、1つのGUIから進捗を監視できます。"
keywords:
  - Google Drive to Amazon S3
  - sync Google Drive to S3
  - backup Google Drive to S3
  - RcloneView Google Drive S3
  - cloud to cloud sync
  - Amazon S3 backup
  - Google Drive backup
  - automated cloud backup
  - cloud storage migration
  - rclone Google Drive S3
tags:
  - google-drive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveをAmazon S3に同期 — RcloneViewによる自動クラウドバックアップ

> Google DriveをAmazon S3にバックアップすると、別のクラウドインフラ上にデータの独立したコピーが作成されます。RcloneViewはこれを設定するだけで自動化されるワークフローに変えます。

Google Driveはコラボレーションに優れていますが、重要なファイルの唯一のコピーとして頼るのは、ほとんどのチームが取るべきではないリスクです。Amazon S3は耐久性が高く手頃な価格のオブジェクトストレージを提供し、Google Driveを補完する独立したバックアップ先となります。RcloneViewのGUI駆動のジョブシステムを使えば、200GBの共有プロジェクトファイルを管理するコンテンツチームでも、rcloneのコマンドを一切使わずに数分でクラウド間の自動バックアップを構築できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでGoogle DriveとAmazon S3を設定する

同期ジョブを作成する前に、両方のリモートを設定しておく必要があります。RcloneViewで**リモートタブ > 新規リモート**をクリックします。Google Driveの場合は、プロバイダーリストから選択します。ブラウザウィンドウが開きOAuth認証が行われます。サインインしてアクセスを許可すると、リモートは自動的に保存され、APIキーを手動で管理する必要はありません。

Amazon S3の場合は、プロバイダーとして**Amazon S3**を選択し、**アクセスキーID**、**シークレットアクセスキー**、そしてS3バケットの**リージョン**（例: `us-east-1`）を入力します。RcloneViewはすべての認証情報を暗号化されたローカルストレージに安全に保存します。両方のリモートが保存されると、それぞれがエクスプローラーパネルにタブとして表示され、すぐに閲覧できるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## クラウド間同期ジョブの設定

**ホームタブ > 同期**をクリックしてジョブウィザードを開きます。Google Drive、または`My Drive/Projects`のような特定のサブフォルダをソースとして設定し、S3バケットのプレフィックス（例: `my-backup-bucket/google-drive/`）を宛先として設定します。ジョブには`gdrive-to-s3-daily`のようなわかりやすい名前を付けます。

**詳細設定**では、**チェックサム検証**を有効にして、サイズだけでなくハッシュでファイルを比較するようにします。これにより、サイズは同じでも部分的な上書きによって内容が異なるファイルを検出できます。同時転送数はネットワーク容量に合わせて設定してください。多くのブロードバンド接続では、Google Driveのレート制限を発生させずに4〜8転送が適しています。

**フィルタリング**ステップでは、何を同期するかを細かく制御できます。ドキュメントのバックアップのみが必要な場合は大きな動画ファイルを除外したり、最大ファイル経過時間フィールドを使って過去90日以内に更新されたファイルのみに限定したりできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

## 転送の実行と監視

最初の完全同期の前に、組み込みの**ドライラン**を使って、宛先でコピーまたは削除されるファイルを正確にプレビューしましょう。これは、S3バケットが空の初期セットアップ時に、大量のデータを転送する前にジョブの設定を確認する上で特に有用です。

準備ができたら**実行**をクリックします。RcloneView下部の**転送中**タブには、速度、ファイル数、進捗率などのライブ進捗状況が表示されます。数万ファイルに及ぶ大規模なGoogle Driveライブラリでは、最初の同期に数時間かかることがありますが、以降の実行では変更されたファイルのみが転送されるため、はるかに速く完了します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to S3 transfer progress in RcloneView" class="img-large img-center" />

## 毎日の自動バックアップをスケジュールする

**PLUSライセンス**があれば、**ジョブマネージャー**でジョブを開き、cron形式のインターフェースを使ってスケジュールを追加できます（例: 毎日午前1時）。**スケジュールシミュレート**ツールは、次の10回の実行時刻をプレビューできるため、バックアップが正しいタイミングで実行されることを確認できます。保存すると、RcloneViewのウィンドウが開いているかどうかに関係なく、バックアップが自動的に実行されます。

各実行後、**ジョブ履歴**には所要時間、転送速度、ファイル数、完了ステータスが記録され、S3にプッシュされたすべてのGoogle Driveバックアップの明確な監査証跡が得られます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive to Amazon S3 backup in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **リモートタブ > 新規リモート**からOAuthログインでGoogle Driveリモートを追加します。
3. AWSのアクセスキーID、シークレットキー、バケットリージョンを使ってAmazon S3リモートを追加します。
4. 同期ジョブを作成します。ソース = Google Driveフォルダ、宛先 = S3バケットのプレフィックスとし、実行またはスケジュールします。

これで、Google DriveのデータはAWSインフラ上に独立してバックアップされ、誤削除、アカウントの停止、またはいずれかのプラットフォームのサービス障害から保護されます。

---

**関連ガイド:**

- [増分バックアップ: RcloneViewでGoogle DriveをAmazon S3にバックアップ](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [RcloneViewでAmazon S3バケットをローカルドライブとしてマウント](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [RcloneViewで毎日のクラウドバックアップを自動化](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
