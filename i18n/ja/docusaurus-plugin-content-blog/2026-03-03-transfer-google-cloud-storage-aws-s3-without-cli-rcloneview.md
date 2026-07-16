---
slug: transfer-google-cloud-storage-aws-s3-without-cli-rcloneview
title: "CLIなしでGoogle Cloud StorageとAWS S3間でファイルを転送する方法（RcloneView活用）"
authors:
  - tayson
description: "RcloneViewのビジュアルGUIを使って、Google Cloud Storage（GCS）とAWS S3間でデータを移動、同期、移行できます — gsutil、aws cli、スクリプトは一切不要です。"
keywords:
  - google cloud storage to s3
  - gcs to aws s3 transfer
  - google cloud storage migration
  - gcs s3 sync
  - transfer between gcs and s3
  - google cloud storage gui
  - gcs backup to s3
  - multi-cloud transfer gcs
  - google cloud storage rclone
  - gcs to s3 without cli
tags:
  - google-cloud-storage
  - aws-s3
  - migration
  - sync
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# CLIなしでGoogle Cloud StorageとAWS S3間でファイルを転送する方法（RcloneView活用）

> Google Cloud StorageとAWS S3間でデータを管理するには、通常gsutil、aws cli、カスタムスクリプトを使い分ける必要があります。RcloneViewを使えば、これらすべてをビジュアルインターフェースから実行できます — GCSとS3間の閲覧、比較、同期、転送のスケジューリングを数分で完了できます。

マルチクラウドは、ほとんどのエンジニアリングチームにとって現実です。機械学習の学習データはGCSバケットに、本番アセットはS3に保存されており、誰かがそれらを同期させておく必要があります。従来の方法 — gsutilとaws cliを使ったシェルスクリプトの作成 — は機能しますが、脆弱で監視が難しく、CLIに詳しくない人には管理できません。

RcloneViewはGCSとS3の両方にネイティブで接続し、この2大クラウドプラットフォーム間でデータの閲覧、転送、比較、自動化を行うための統一されたGUIを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜGCSとS3間でデータを移動するのか

チームがGoogle Cloud StorageとAWS S3の間でデータを転送する理由には、いくつかの一般的なものがあります。

**マルチクラウド冗長性** — 重要なデータを2つの主要プロバイダーに保存することで、プロバイダーレベルの障害やベンダーロックインから保護されます。片方のクラウドがダウンしても、もう片方からデータにアクセスできます。

**コスト最適化** — GCSとS3はストレージ、送信（egress）、操作の料金体系が異なります。使用パターンに応じて安いプロバイダーにコールドデータを移動することで、大幅なコスト削減が可能です。

**クロスプラットフォームワークフロー** — データサイエンスチームはGCP（BigQuery、Vertex AI）を使用しているが、本番インフラはAWSで稼働している場合、データは両者間を行き来する必要があります。

**移行** — ダウンタイムなしでGCPからAWSへ（またはその逆へ）移行するには、信頼性が高く再開可能な転送が必要です。

**コンプライアンスとデータレジデンシー** — 一部の規制では、特定のリージョンやプロバイダーにデータのコピーを保持することが求められます。

## GCSとS3リモートのセットアップ

### Google Cloud Storageを追加する

1. RcloneViewを開き、**リモートを追加**をクリックします。
2. プロバイダーリストから**Google Cloud Storage**を選択します。
3. 認証方法を選択します。
   - **サービスアカウントJSON** — サーバー間転送に推奨されます。サービスアカウントキーファイルをアップロードします。
   - **OAuth（ブラウザログイン）** — 個人のGCPアカウントに適しています。[OAuthログインガイド](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)に従ってください。
4. プロンプトが表示されたら、**プロジェクトID**とデフォルトの**バケットの場所**を設定します。
5. リモートを保存します — これでGCSバケットを閲覧できるようになります。

### AWS S3を追加する

1. 再度**リモートを追加**をクリックします。
2. プロバイダーリストから**Amazon S3**を選択します。
3. **アクセスキーID**と**シークレットアクセスキー**を入力します。
4. **リージョン**と**エンドポイント**を選択します。
5. 保存します — S3バケットがエクスプローラーに表示されます。

S3の詳細なセットアップについては、[AWS S3接続ガイド](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)を参照してください。

<img src="/support/images/en/blog/new-remote.png" alt="Add GCS and S3 remotes in RcloneView" class="img-large img-center" />

## GCSとS3を並べて閲覧する

両方のリモートが接続されたら、RcloneViewの2ペインエクスプローラーで開きます。左側にGCSバケット、右側にS3バケット（またはその逆）が表示されます。以下のことができます。

- 両側で同時にバケットとフォルダを**移動**する。
- **ファイルサイズ、日付、件数を表示**して、どこに何があるかを把握する。
- GCSからS3へ直接**ドラッグアンドドロップ**する — または組み込みのコピー/移動コマンドを使用する。

この並列表示により、GCPコンソールとAWSコンソールを切り替えることなく、両方のクラウドを即座に把握できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse GCS and S3 side by side in RcloneView" class="img-large img-center" />

## 転送シナリオ

### シナリオ1：一度限りの移行（GCS → S3）

プラットフォーム移行のためにGCSからS3へすべてのデータを移動する場合。

1. **コピージョブを作成**します。
   - ソース：GCSリモート → バケットを選択
   - 宛先：S3リモート → ターゲットバケットを選択
2. **最大速度になるよう設定**します。
   - 並列転送数：8〜16（GCSとS3はどちらも高い並列性をうまく処理します）
   - チャンクサイズ：大きなファイルの場合は64MB〜128MB
   - ディレクトリリストの取得を高速化するために`--fast-list`フラグを有効にする
3. **ジョブを実行**し、進捗をリアルタイムで監視します。

大規模な移行の場合は、コピージョブを複数回実行してください。最初のフルコピーの後、以降の実行では新規または変更されたファイルのみが転送されます — そのため中断されても安全に再開できます。

### シナリオ2：継続的な同期（双方向）

GCSバケットとS3バケットを継続的に同期させる場合。

1. 主方向として**同期ジョブ**（GCS → S3）を作成します。
2. [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)を使用して、毎時または毎日実行するように**スケジュール**します。
3. 双方向同期が必要な場合は、**逆方向の同期ジョブ**（S3 → GCS）を追加します。
4. **バッチジョブ**（v1.3）を使用して、両方向を順番に実行します。

### シナリオ3：選択的なクロスクラウドバックアップ

特定のデータのみを別のクラウドにバックアップする場合。

1. [フィルタルール](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)を使用して、特定のファイルタイプやフォルダを含める/除外します。
   - 例：`*.parquet`と`*.csv`ファイル（機械学習データセット）のみを同期する
   - 例：`tmp/`と`logs/`ディレクトリを除外する
2. これらのフィルタを適用した**スケジュールされたコピージョブを作成**します。

## GCSとS3のコンテンツを比較する

転送の前後で、[フォルダ比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)機能を使って、両方のバケットに同じデータが含まれていることを確認してください。

- **GCSのみに存在するファイル** — 簡単に識別できるようハイライト表示されます。
- **S3のみに存在するファイル** — ソースには存在しないが宛先には存在するものを表示します。
- **異なるファイル** — 同じ名前だがサイズやチェックサムが異なるファイルです。
- **同一のファイル** — 両方のクラウドで一致が確認されたものです。

これは移行の検証に非常に役立ちます。テラバイト単位のデータをコピーした後、すべてのファイルが無事に到着したことを証明できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare GCS and S3 bucket contents" class="img-large img-center" />

## 転送速度の最適化

GCSとS3はどちらも高性能なオブジェクトストアなので、転送を積極的に高速化できます。

| 設定 | 推奨値 | 理由 |
|---------|-------------------|-----|
| 並列転送数 | 8〜16 | 両プロバイダーとも同時リクエストをうまく処理します |
| チャンクサイズ | 64MB〜128MB | 大きなファイルのAPIオーバーヘッドを削減します |
| チェッカー数 | 16〜32 | 大きなディレクトリの比較フェーズを高速化します |
| バッファサイズ | 128MB | クラウドリージョン間のネットワーク遅延を平滑化します |
| Fast-list | 有効 | ディレクトリリストのAPI呼び出しを大幅に削減します |

### クロスリージョンに関する考慮事項

GCSバケットが`us-central1`にあり、S3バケットが`eu-west-1`にある場合、データはリージョン間でインターネットを経由する必要があります。最良のパフォーマンスを得るには、次の点に注意してください。

- 可能な限り、ソースと宛先を同じ地理的エリアに保つ。
- ネットワーク輻輳を避けるため、オフピーク時間帯に転送を実行する。
- 送信（egress）コストを監視する — GCSとS3はどちらもネットワークから出るデータに課金します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor GCS to S3 transfer speed" class="img-large img-center" />

## GCS ↔ S3 ワークフローの自動化

### 日次データパイプライン

毎晩実行されるスケジュールジョブを設定します。

1. AWSベースの学習ジョブのために、新しい機械学習の学習データをGCS → S3に同期する。
2. BigQuery分析のために、結果をS3 → GCSにコピーして戻す。
3. パイプラインが完了したら[Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)経由で通知を受け取る。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS to S3 data sync" class="img-large img-center" />

### 災害復旧レプリケーション

重要なS3データのライブコピーをGCSに（またはその逆に）維持する場合。

1. プライマリバケットからDRバケットへの同期ジョブを作成します。
2. RPO（目標復旧時点）を1時間未満に保つため、毎時実行するようスケジュールします。
3. データの整合性を確保するため、[チェックサム検証](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)を使用します。

### コストベースの階層化

アクセスパターンに応じて、より安価なプロバイダーにデータを移動します。

1. 頻繁にアクセスされるデータ → コンピュートに最も近いプロバイダーに保持する。
2. コールド/アーカイブデータ → 料金に基づいてGCS Nearline/ColdlineまたはS3 Glacierに移動する。
3. コストを最適化し続けるため、定期的な階層化ジョブをスケジュールする。

## GCS vs S3：統一レイヤーとしてのRcloneView

2つの異なるCLI（GCS用のgsutil、S3用のaws s3）を学ぶ代わりに、RcloneViewは両方に対して単一のインターフェースを提供します。これは次のことを意味します。

- **習得すべきツールは1つだけ** — チームが2つの異なるコマンドラインインターフェースを習得する必要がありません。
- **ビジュアル操作** — フラグや引数の代わりに、ドラッグアンドドロップ、右クリックメニュー、ダイアログベースの設定を使用できます。
- **一貫した監視** — どのクラウドが関わっていても、同じ[ジョブ履歴](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)と[転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)を利用できます。
- **ポータブルなジョブ** — GCSをS3に同期するジョブは、OneDriveをDropboxに同期するジョブとまったく同じように動作します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Unified job history for GCS and S3 transfers" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します（Windows、macOS、Linux対応）。
2. サービスアカウントキーまたはOAuthログインで**GCSリモートを追加**します。
3. アクセスキー認証情報で**S3リモートを追加**します。
4. エクスプローラーで**両方を並べて閲覧**します。
5. ユースケースに応じて**コピーまたは同期ジョブを作成**します。
6. **スケジュールして監視**することで、手間のかからないマルチクラウドデータ管理を実現します。

gsutilとaws cliを使い分けるのはもうやめましょう。RcloneViewはGCSとS3の管理を1つのビジュアルワークフローに統一し、CLIを知っているエンジニアだけでなく、チーム全体がマルチクラウドのデータ転送を扱えるようにします。

---

**関連ガイド：**

- [AWS S3およびS3互換ストレージの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [ブラウザベースのログイン（OAuth）でリモートを追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [チェックサムで検証されたクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
