---
slug: sync-google-cloud-storage-to-wasabi-rcloneview
title: "Google Cloud StorageをWasabiに同期 — RcloneViewによるコスト効率の良いバックアップ"
authors:
  - tayson
description: "Google Cloud StorageからWasabi S3互換ストレージへデータを移行し、大幅なコスト削減を実現。RcloneViewは両方のプロバイダーに対応し、同期ジョブを自動化します。"
keywords:
  - Google Cloud Storage to Wasabi sync
  - GCS Wasabi migration RcloneView
  - Wasabi cost-effective cloud backup
  - Google Cloud Storage backup alternative
  - S3-compatible cloud migration
  - cloud storage cost optimization
  - GCS Wasabi transfer
  - RcloneView Google Cloud Wasabi
tags:
  - RcloneView
  - google-cloud-storage
  - wasabi
  - cloud-to-cloud
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Cloud StorageをWasabiに同期 — RcloneViewによるコスト効率の良いバックアップ

> WasabiはGoogle Cloud Storageの1GBあたりのコストのごく一部でホットクラウドストレージを提供します — RcloneViewは両方を接続し、移行や継続的な同期を自動化します。

Google Cloud StorageはGCPのワークフローに深く統合されていますが、大規模なデータセットではストレージコストがすぐに膨らんでしまいます。Wasabiは、TBあたりの均一料金モデルと転送(egress)料金なしのS3互換ホットストレージを提供しており、二次バックアップ先やコスト削減のための移行先として魅力的です。RcloneViewは両方のプロバイダーに対応し、単一のGUIインターフェースから同期ジョブを処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Cloud Storageの接続

Google Cloud Storage(GCS)は、RcloneViewでネイティブGCSプロバイダーまたはS3互換インターフェースの2通りの方法で接続できます。ほとんどの構成では、ネイティブGCSプロバイダーが簡単です。**リモートマネージャー**を開き、**新規リモート**をクリックして、**Google Cloud Storage**を選択します。

**プロジェクト番号**(GCPコンソールのプロジェクト情報にあります)の入力が必要です。認証にはサービスアカウントのJSONキーまたはOAuthを使用します。サービスアカウントアクセスの場合は、GCPコンソール → IAMと管理 → サービスアカウントからJSONキーをダウンロードし、リモート設定でそのパスを指定します。OAuthの場合、RcloneViewはブラウザを開いてGoogleアカウントの認可を求めます。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Google Cloud Storage and Wasabi remotes in RcloneView" class="img-large img-center" />

## Wasabiの接続

**リモートマネージャー**で**新規リモート**をクリックし、**S3互換**を選択します(WasabiはS3互換です)。以下を入力します。

- **アクセスキーID**: Wasabiコンソールのアクセスキーから取得
- **シークレットアクセスキー**: 対応するシークレット
- **エンドポイント**: お使いのリージョンのWasabiエンドポイント(例: `s3.us-east-1.wasabisys.com` や `s3.eu-central-1.wasabisys.com`)

リモートを保存します。続行する前に、Wasabiのバケットがファイルエクスプローラーに表示されることを確認してください。

## 同期ジョブの設定

**ジョブ**に移動し、**新規ジョブ**をクリックします。Google Cloud Storageをソースとして設定し、対象のバケットまたはフォルダーパスを選択します。Wasabiをターゲットバケットとパスとともに宛先として設定します。

ジョブウィザードのステップ2では、信頼性の高い大規模同期のために以下を設定します。

- **転送数**: 8~16(GCSとWasabiのどちらも高い並行性を良好に処理します)
- **チェッカー数**: 8~16(並行して実行される同一性チェックの数を制御します)
- **チェックサム検証**: データ整合性確認のために有効にする
- **ドライラン**: 対象範囲を確認するため、最初に有効にする

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Cloud Storage to Wasabi sync" class="img-large img-center" />

## 継続的な同期のスケジュール設定

GCSを主要ストレージとして維持し、Wasabiをコスト効率の良いバックアップ層として使う場合は、定期的な同期ジョブをスケジュールします。PLUSライセンスがあれば、ジョブ設定を開き、ステップ3でcronスケジュールを追加します — 例えば、毎晩午前2時のバックアップには`0 2 * * *`を指定します。

RcloneViewの差分同期により、初回移行後の各実行では変更または新規のファイルのみが転送されます。**ジョブ履歴**タブには、すべての実行がファイル数、転送データ量、速度、エラーとともに記録され、明確な監査証跡が得られます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Cloud Storage to Wasabi sync in RcloneView" class="img-large img-center" />

## コストに関する考慮事項

Wasabiの料金モデルにはリクエストごとの料金がなく、転送(egress)料金も(利用上限内であれば)発生しないため、大規模なデータセットでも予測しやすくなっています。GCS → Wasabiの移行にはGCSの転送コストが発生しますが、これは移行時の一度限りの費用です。継続的なバックアップについては、データがサーバーやアプリケーションパイプラインから発生するため、転送コストへの影響は構成によって異なります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **リモートマネージャー**で、プロジェクト番号とサービスアカウントJSONまたはOAuthを使用してGoogle Cloud Storageを接続します。
3. アクセスキー、シークレットキー、リージョンのエンドポイントを使用してWasabiを接続します。
4. 同期ジョブを作成し、ドライランを実行して対象範囲を確認した後、継続的な自動バックアップのためにスケジュールを設定します。

GCSのバックアップをWasabiに移行することで、アクセシビリティを損なうことなく、通常は意味のあるストレージコスト削減が実現します。

---

**関連ガイド:**

- [RcloneViewでScaleway Object Storageを管理する](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [RcloneViewでWasabiからCloudflare R2へ移行する](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [RcloneViewで毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
