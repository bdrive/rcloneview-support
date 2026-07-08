---
slug: manage-ovhcloud-object-storage-sync-rcloneview
title: "OVHcloudオブジェクトストレージの管理 — RcloneViewで同期とバックアップ"
authors:
  - tayson
description: "S3互換の認証情報を使ってOVHcloudオブジェクトストレージをRcloneViewに接続し、GDPRに準拠した欧州のバケットを他のクラウドプロバイダーと同期しましょう。"
keywords:
  - OVHcloud object storage RcloneView
  - OVHcloud S3 sync
  - OVHcloud backup rclone
  - OVHcloud cloud storage GUI
  - European GDPR cloud sync
  - OVHcloud bucket transfer
  - S3-compatible object storage
  - OVHcloud rcloneview setup
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

# OVHcloudオブジェクトストレージの管理 — RcloneViewで同期とバックアップ

> OVHcloudオブジェクトストレージは欧州でホストされるGDPR準拠のS3互換サービスです。RcloneViewはアクセスキー、シークレットキー、エンドポイントを使ってこれをクラウドエコシステム全体と接続します。

OVHcloudは欧州最大級のクラウドプロバイダーの一つで、フランス、ドイツ、英国など複数のリージョンにわたってオブジェクトストレージを提供しています。S3互換インターフェースにより、RcloneViewはAWS S3とまったく同じ方法で接続できます — 認証情報とエンドポイントを入力するだけで、ブラウズ、転送、バックアップの自動化がすぐに行えます。欧州のデータレジデンシー要件を持つ組織にとって、OVHcloudとRcloneViewの組み合わせは実用的で監査可能なソリューションです。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OVHcloud S3認証情報の取得

OVHcloudは**High Performance Object Storage**サービスを通じてS3互換アクセスを提供しています。認証情報を取得するには、OVHcloudコントロールパネルにログインし、プロジェクトを開いて**Object Storage**に移動します。**S3 users**の下で新しいユーザーを作成し、アクセスキーとシークレットキーをダウンロードします。リージョンのエンドポイントをメモしておきましょう — 例えば、ルーベ(Roubaix)の場合は`s3.rbx.io.cloud.ovh.net`、グラーヴリーヌ(Gravelines)の場合は`s3.gra.io.cloud.ovh.net`です。

エンドポイントURLは手元に控えておいてください。これはバケットが存在するリージョンを識別するもので、RcloneViewに入力する内容と一致させる必要があります。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OVHcloud Object Storage as a new remote in RcloneView" class="img-large img-center" />

## OVHcloudをRcloneViewに接続する

RcloneViewを開き、**Remote Manager**に移動して**New Remote**をクリックします。プロバイダーリストから**S3 Compatible**を選択し、以下のフィールドを入力します。

- **Access Key ID**: OVHcloudのS3ユーザーページから取得したキー
- **Secret Access Key**: 対応するシークレット
- **Endpoint**: お使いのリージョンのエンドポイント(例: `s3.gra.io.cloud.ovh.net`)

リモートを保存し、ファイルエクスプローラーで開きます。OVHcloudのバケットがルートレベルに表示されます。任意のバケットに移動すると、プレフィックスごとに整理された内容が表示されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between OVHcloud and another provider" class="img-large img-center" />

## OVHcloudと他のクラウドプロバイダーとの同期

RcloneViewで2つ目のパネルを開き、Google Drive、Backblaze B2、他のS3互換プロバイダー、またはローカルフォルダなど任意のリモートを指定します。パネル間でファイルをドラッグ&ドロップするか、右クリックしてディレクトリ全体をコピーします。大規模なバケット移行には、**Job**システムの方が信頼性が高くなります。ソースと宛先を設定し、ステップ2で並行数と帯域幅の制限を設定し、必要に応じてチェックサム検証を有効にします。

OVHcloudのS3 APIは大きなオブジェクトに対してマルチパートアップロードをサポートしており、RcloneViewは一定のサイズしきい値を超えるファイルを検出すると自動的にこれを活用します。これにより、大きな動画ファイル、データベースダンプ、アーカイブなどが単一リクエストのサイズ制限に引っかかることなく確実に転送されます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of OVHcloud transfer progress" class="img-large img-center" />

## 定期バックアップのスケジュール設定

PLUSライセンスがあれば、OVHcloudの同期ジョブを自動的に実行するようスケジュールできます。**Jobs**に移動してジョブを設定し、ステップ3でcronスケジュールを設定します — 例えば`0 3 * * *`は毎晩午前3時に同期を実行します。これは、他の場所に保存されている本番データの二次コピーを、欧州のデータレジデンシーコンプライアンスのためにOVHcloudに保存する必要があるバックアップパイプラインに特に有用です。

**Job History**にはすべての実行が記録されます。転送されたファイル、データ量、転送速度、エラーなどです。夜間ジョブが失敗した場合、ログエントリにはどのファイルが問題を引き起こしたかが正確に表示されるため、迅速に調査できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OVHcloudコントロールパネルでS3ユーザーを作成し、アクセスキー、シークレットキー、リージョンのエンドポイントをメモします。
3. RcloneViewで**Remote Manager**を開き、**New Remote**をクリックして**S3 Compatible**を選択し、認証情報を入力します。
4. バケットをブラウズし、同期ジョブを設定して、OVHcloudをより広範なクラウド戦略に統合します。

OVHcloudの欧州インフラとRcloneViewの柔軟なジョブシステムは、GDPRを意識したマルチクラウドワークフローにとって信頼できる組み合わせです。

---

**関連ガイド:**

- [Scalewayオブジェクトストレージの管理 — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [IDrive E2のクラウド同期とバックアップの管理](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [RcloneViewで毎日のクラウドバックアップを自動化](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
