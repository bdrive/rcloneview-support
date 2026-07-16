---
slug: manage-google-cloud-storage-buckets-rcloneview
title: "RcloneViewでGoogle Cloud Storageバケットを管理する"
authors:
  - tayson
description: "RcloneViewを使ってGoogle Cloud Storage（GCS）バケットを視覚的に閲覧、アップロード、同期、管理できます。CLIは不要 — GUIだけでGCSを完全に管理できます。"
keywords:
  - google cloud storage rcloneview
  - manage gcs buckets gui
  - rclone google cloud storage
  - gcs bucket management tool
  - google cloud storage gui
  - sync files google cloud storage
  - upload to gcs without cli
  - rcloneview gcs
  - google cloud storage backup
  - gcs rclone gui
tags:
  - google-cloud-storage
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでGoogle Cloud Storageバケットを管理する

> Google Cloud StorageはGCPのオブジェクトストレージの中核であり、耐久性が高く、高速で、Googleのクラウドプラットフォームと深く統合されています。RcloneViewを使えば、`gsutil`やGCPコンソールを使わずに、GCSバケット用の視覚的なファイルマネージャーが手に入ります。

Google Cloud Storage（GCS）は、すでにGoogle Cloud Platformを利用しているチームにとって、アプリデータ、機械学習用データセット、BigQueryステージング、メディア配信などのための第一選択のオブジェクトストアです。`gsutil`やGCPコンソールも使えますが、大量のファイル操作や日常的なファイル管理には動作が遅くなります。RcloneViewはGCSバケット用のデュアルペイン型ファイルマネージャーを提供し、デスクトップのファイルエクスプローラーと同じ感覚でファイルの閲覧、転送、同期ができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewがGCS管理にもたらすもの

| タスク | GCPコンソール | gsutil CLI | RcloneView |
|------|------------|------------|------------|
| バケットを視覚的に閲覧 | ✓ | ✗ | ✓ |
| ドラッグ&ドロップでアップロード | 制限あり | ✗ | ✓ |
| 他のクラウドへ同期 | ✗ | ✗ | ✓ |
| ローカルディスクへ転送 | 低速 | ✓ | ✓ |
| 同期ジョブのスケジュール設定 | ✗ | 手動 | ✓ |
| リアルタイム転送モニタリング | ✗ | ✓ | ✓ |

## Google Cloud StorageをRcloneViewに接続する

### ステップ1 — サービスアカウントを作成する

GCPコンソールで以下を行います。

1. **IAMと管理 → サービスアカウント** に移動します。
2. **Storage Admin**（バケット管理を伴わない読み書きの場合は**Storage Object Admin**）ロールを持つ新しいサービスアカウントを作成します。
3. JSONキーファイルを生成してダウンロードします。

### ステップ2 — RcloneViewでGCSリモートを追加する

RcloneViewを開き、**New Remote**をクリックします。

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Cloud Storage remote in RcloneView" class="img-large img-center" />

1. リモートタイプの一覧から**Google Cloud Storage**を選択します。
2. ダウンロードした**JSONサービスアカウントキーファイル**を指定します。
3. **GCPプロジェクトID**を入力します。
4. リモートに名前を付け（例：`gcs-prod`）、保存します。

接続すると、GCSバケットがRcloneViewのファイルブラウザにトップレベルのフォルダとして表示されます。

## GCSバケットの閲覧と管理

任意のバケットに移動すると、その中身を確認できます。RcloneViewはオブジェクトキーの階層をフォルダとして表示し、GCPコンソールで見るものと一致します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse GCS buckets in RcloneView" class="img-large img-center" />

デュアルペイン型インターフェースでは、以下の操作が可能です。
- GCSパス間、またはローカルディスクとの間で**ファイルをコピー**
- バケット内、または複数バケット間で**オブジェクトを移動**
- 確認画面付きで**オブジェクトを削除**
- 新しいキーでコピーしてから古いものを削除することで**名前を変更**

## GCSとのファイル同期

### ローカルデータセットをGCSにアップロードする

1. RcloneViewで**Job**を開きます。
2. ソースをローカルフォルダ（例：`D:\ml-dataset\`）に設定します。
3. 宛先をGCSパス（例：`gcs-prod:my-ml-bucket/training-data/`）に設定します。
4. **Copy**（新しいファイルのみ追加）または**Sync**（完全にミラーリング）を選択します。
5. ジョブを実行し、進捗をリアルタイムで確認します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Upload dataset to GCS in RcloneView" class="img-large img-center" />

### クラウド間転送：GCSから他のプロバイダーへ

RcloneViewはクラウド間で直接転送を行います。一般的なGCSのワークフローには以下のようなものがあります。

- **GCS → AWS S3** — 冗長性のためにクラウド間でバケットを複製する
- **GCS → Backblaze B2** — コールドデータをより安価なストレージにアーカイブする
- **GCS → Google Drive** — 処理済みの出力を非技術系のステークホルダーと共有する
- **GCS → ローカルNAS** — オンプレミス処理のためにデータを取得する

## GCSストレージクラスの意識

GCSには複数のストレージクラスがあります：Standard、Nearline、Coldline、Archiveです。RcloneViewで同期ジョブを設定する際、rcloneのフラグを渡すことで、新しいオブジェクトに対して特定のストレージクラスを指定できます。

| ストレージクラス | ユースケース | 最小保存期間 |
|--------------|----------|--------------------------|
| Standard | 頻繁にアクセスするデータ | なし |
| Nearline | 月次アクセス | 30日 |
| Coldline | 四半期ごとのアクセス | 90日 |
| Archive | 年次アクセス | 365日 |

アーカイブ用データには、RcloneViewのジョブエディタにある**Custom flags**フィールドを使って`--gcs-storage-class COLDLINE`を渡してください。

## 定期的なGCS同期のスケジュール設定

夜間アップロード、日次ステージング同期、週次アーカイブ実行など、定期的なバックアップジョブの場合。

1. ソースとGCS宛先を指定してジョブを作成します。
2. **Schedule**設定を開きます。
3. 頻度（日次、週次、カスタムcron）を設定します。
4. 完了時のメールまたは通知アラートを有効にします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS sync job" class="img-large img-center" />

## 検証のためのフォルダ比較

大規模な転送後は、RcloneViewの**フォルダ比較**機能を使って、ローカルファイルがGCS内のものと一致しているかを確認しましょう。ファイル数、サイズ、チェックサムをチェックします。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify GCS sync with folder comparison" class="img-large img-center" />

不足しているオブジェクトや不一致のオブジェクトはハイライト表示されるため、影響を受けたファイルだけを再実行できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. GCPコンソールでStorage Object Admin権限を持つ**サービスアカウントを作成**します。
3. **JSONキーをダウンロード**し、RcloneViewでGCSリモートを追加します。
4. **バケットを閲覧**し、視覚的にファイル転送を開始します。

GCSは強力なインフラです — RcloneViewは日々のファイル管理をローカルドライブと同じくらい簡単なものにします。

---

**関連ガイド：**

- [Google Cloud StorageをAWS S3へ転送する](https://rcloneview.com/support/blog/transfer-google-cloud-storage-aws-s3-without-cli-rcloneview)
- [Amazon S3バケットをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [RcloneViewでS3、Wasabi、R2を一元管理する](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
